import { autoDismissModals, cleanText } from '../../utils.mjs';

/**
 * Parsers for domestic social media & news platforms:
 * - 微信公众号 (WeChat Official Accounts)
 * - 新浪微博 (Weibo)
 * - 头条号 (Toutiao)
 * - 百家号 (Baijiahao)
 * - 搜狐号 (Sohu)
 * - QQ空间 (Qzone)
 */

export async function parseWechatArticle(page, targetUrl) {
  const data = await page.evaluate(() => {
    const title = document.querySelector('#activity-name, h1.rich_media_title, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('#js_name, .rich_media_meta_text, .profile_nickname')?.innerText?.trim() || '';
    const content = document.querySelector('#js_content, .rich_media_content')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'wechat_article',
    category: 'long_article',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content),
    tags: ['wechat_mp'],
  };
}

export async function parseWeibo(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const author = document.querySelector('.screen_name, .author, .name, a[usercard]')?.innerText?.trim() || '';
    const content =
      document.querySelector('.detail_text, .weibo-text, [node-type="feed_list_content"], .text')?.innerText?.trim() ||
      document.body.innerText.slice(0, 500);
    const tags = Array.from(document.querySelectorAll('a[href*="k="], a[href*="topic"]')).map((t) => t.innerText.trim());
    const comments = Array.from(document.querySelectorAll('.comment_text, .wbpro-feed-content'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { author, content, tags, comments };
  });

  return {
    platform: 'weibo',
    category: 'microblog',
    url: targetUrl,
    title: cleanText(data.content.slice(0, 40) + '...'),
    author: cleanText(data.author),
    content: cleanText(data.content),
    tags: [...new Set(data.tags)],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseToutiao(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1.article-title, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('.name, .author-name, .user-name')?.innerText?.trim() || '';
    const content = document.querySelector('article, .article-content, .tt-article')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'toutiao',
    category: 'news_article',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['toutiao'],
  };
}

export async function parseBaijiahao(page, targetUrl) {
  const data = await page.evaluate(() => {
    const title = document.querySelector('[data-testid="article-title"], h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('[data-testid="author-name"], .author-name')?.innerText?.trim() || '';
    const content = document.querySelector('[data-testid="article"], .article-content')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'baijiahao',
    category: 'news_article',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['baijiahao'],
  };
}

export async function parseSohu(page, targetUrl) {
  const data = await page.evaluate(() => {
    const title = document.querySelector('#article-title, h1.article-title, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('#user-info h4, .author-name')?.innerText?.trim() || '';
    const content = document.querySelector('#mp-editor, article.article')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'sohu',
    category: 'news_article',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['sohu'],
  };
}

export async function parseQzone(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('.blog_title, .f-single-head, h1')?.innerText?.trim() || document.title;
    const content = document.querySelector('#blogDetailDiv, .f-single-content, .b-content')?.innerText?.trim() || '';
    const author = document.querySelector('.user_name, .f-nick')?.innerText?.trim() || '';

    return { title, content, author };
  });

  return {
    platform: 'qzone',
    category: 'social_space',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['qzone'],
  };
}
