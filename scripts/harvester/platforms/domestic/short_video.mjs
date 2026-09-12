import { autoDismissModals, cleanText } from '../../utils.mjs';

/**
 * Parsers for domestic short-video & video platforms:
 * - 抖音 (Douyin)
 * - 快手 (Kuaishou)
 * - 微信视频号 (WeChat Channels)
 * - 腾讯视频 (Tencent Video)
 */

export async function parseDouyin(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('[data-e2e="video-desc"], .video-info-detail, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('[data-e2e="video-author-name"], .author-info .name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('a[href*="/hashtag/"]')).map((t) => t.innerText.trim());
    const comments = Array.from(document.querySelectorAll('[data-e2e="comment-item"] p'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, tags, comments };
  });

  return {
    platform: 'douyin',
    category: 'short_video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.title),
    tags: [...new Set(data.tags)],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseKuaishou(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('.video-info-title, .caption, h1, .desc')?.innerText?.trim() || document.title;
    const author = document.querySelector('.author-name, .user-name, .profile-name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('.tag-item, a[href*="search"]')).map((t) =>
      t.innerText.trim()
    );
    const comments = Array.from(document.querySelectorAll('.comment-item .comment-content'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, tags, comments };
  });

  return {
    platform: 'kuaishou',
    category: 'short_video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.title),
    tags: [...new Set(data.tags)],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseWechatChannels(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('.feed-desc, .desc, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('.feed-author, .nickname, .auth-name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('.topic, a[href*="topic"]')).map((t) => t.innerText.trim());

    return { title, author, tags };
  });

  return {
    platform: 'wechat_channels',
    category: 'short_video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.title),
    tags: [...new Set(data.tags)],
  };
}

export async function parseTencentVideo(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('.video_title, .player__title, h1')?.innerText?.trim() || document.title;
    const desc = document.querySelector('.video_desc, .player__desc, .summary')?.innerText?.trim() || '';
    const author = document.querySelector('.user_name, .author, .publisher')?.innerText?.trim() || '';

    return { title, desc, author };
  });

  return {
    platform: 'tencent_video',
    category: 'video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.desc || data.title),
    tags: [],
  };
}
