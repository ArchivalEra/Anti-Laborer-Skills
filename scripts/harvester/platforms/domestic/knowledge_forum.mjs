import { autoDismissModals, cleanText } from '../../utils.mjs';

/**
 * Parsers for domestic knowledge, UGC & forum platforms:
 * - 知乎 (Zhihu)
 * - 哔哩哔哩 / B站 (Bilibili)
 * - 小红书 (Xiaohongshu)
 * - V2EX
 * - 百度贴吧 (Baidu Tieba)
 */

export async function parseZhihu(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    // Check if question, article, or pin
    const isArticle = window.location.pathname.startsWith('/p/');
    const isPin = window.location.pathname.startsWith('/pin/');

    const title =
      document.querySelector('h1.QuestionHeader-title, h1.Post-Title, .PinItem-content, h1')?.innerText?.trim() ||
      document.title;
    const author =
      document.querySelector('.AuthorInfo-name, .UserLink-link, .AuthorInfo-head')?.innerText?.trim() || '';

    let content = '';
    if (isArticle) {
      content = document.querySelector('.Post-RichTextContainer, article')?.innerText || '';
    } else if (isPin) {
      content = document.querySelector('.PinItem-content')?.innerText || '';
    } else {
      // Question: get question detail + top answer
      const qDetail = document.querySelector('.QuestionRichText')?.innerText || '';
      const topAnswer =
        document.querySelector('.AnswerCard .RichText, .AnswerItem .RichText, .RichContent-inner')?.innerText || '';
      content = qDetail ? `【问题描述】\n${qDetail}\n\n【回答】\n${topAnswer}` : topAnswer;
    }

    const tags = Array.from(document.querySelectorAll('.QuestionHeader-topics .Tag, .TopicTag')).map((t) =>
      t.innerText.trim()
    );

    return { title, author, content, tags };
  });

  return {
    platform: 'zhihu',
    category: 'knowledge_forum',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: [...new Set(data.tags)],
  };
}

export async function parseBilibili(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('h1.video-title, .title-text, .article-title, h1')?.innerText?.trim() || document.title;
    const author =
      document.querySelector('.up-name, .author-name, .user-name, .name')?.innerText?.trim() || '';
    const desc =
      document.querySelector('.desc-info-text, .video-desc-container, .article-content, .opus-module-content')?.innerText || '';
    const tags = Array.from(document.querySelectorAll('.tag-link, .tag-area a, .topic-item')).map((t) =>
      t.innerText.trim()
    );
    const comments = Array.from(document.querySelectorAll('.reply-content, .reply-item .text'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, desc, tags, comments };
  });

  return {
    platform: 'bilibili',
    category: 'knowledge_forum',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.desc || data.title),
    tags: [...new Set(data.tags)],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseXiaohongshu(page, targetUrl) {
  const isFeed = targetUrl.endsWith('/explore') || targetUrl.includes('/explore?');

  if (isFeed) {
    const items = await page.evaluate(() => {
      const notes = [];
      document.querySelectorAll('section.note-item').forEach((item) => {
        const titleEl = item.querySelector('.title, a.title');
        const authorEl = item.querySelector('.name, .author');
        const linkEl = item.querySelector('a[href*="/explore/"]');
        if (titleEl) {
          notes.push({
            title: titleEl.innerText.trim(),
            author: authorEl ? authorEl.innerText.trim() : '',
            url: linkEl ? linkEl.href : '',
          });
        }
      });
      return notes;
    });

    return {
      platform: 'xiaohongshu',
      category: 'ugc_feed',
      url: targetUrl,
      title: '小红书探索发现信息流',
      content: items.map((i) => `• [${i.author}] ${i.title} (${i.url})`).join('\n'),
      tags: [],
    };
  }

  await autoDismissModals(page);
  await page.waitForTimeout(1000);

  const noteData = await page.evaluate(() => {
    const title = document.querySelector('#detail-title, .title, h1')?.innerText?.trim() || document.title;
    const desc = document.querySelector('#detail-desc, .desc, .content')?.innerText?.trim() || '';
    const author = document.querySelector('.author .name, .username, .name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('a[href*="search_result"], a[href*="tag"]')).map((t) =>
      t.innerText.trim()
    );

    return { title, author, content: desc, tags: [...new Set(tags)] };
  });

  return {
    platform: 'xiaohongshu',
    category: 'ugc_note',
    url: targetUrl,
    title: cleanText(noteData.title),
    author: cleanText(noteData.author),
    content: cleanText(noteData.content),
    tags: noteData.tags,
  };
}

export async function parseV2EX(page, targetUrl) {
  const data = await page.evaluate(() => {
    const title = document.querySelector('.header h1, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('.header small.gray a, .header .gray a')?.innerText?.trim() || '';
    const content = document.querySelector('.topic_content, .markdown_body')?.innerText?.trim() || '';
    const comments = Array.from(document.querySelectorAll('.reply_content'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, content, comments };
  });

  return {
    platform: 'v2ex',
    category: 'tech_forum',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['developer', 'v2ex'],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseBaiduTieba(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1000);

  const data = await page.evaluate(() => {
    const title = document.querySelector('.core_title_txt, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('.p_author_name')?.innerText?.trim() || '';
    const content = document.querySelector('.d_post_content')?.innerText?.trim() || '';
    const comments = Array.from(document.querySelectorAll('.j_lzl_c_b_a, .lzl_cnt'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, content, comments };
  });

  return {
    platform: 'baidu_tieba',
    category: 'forum_thread',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['tieba'],
    raw_comments: data.comments.map(cleanText),
  };
}
