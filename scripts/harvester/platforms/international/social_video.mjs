import { autoDismissModals, cleanText } from '../../utils.mjs';

/**
 * Parsers for international social, video & community platforms:
 * - YouTube
 * - TikTok (International)
 * - Twitter (X)
 * - Reddit
 * - Meta (Facebook / Instagram)
 * - Pinterest
 * - Tumblr
 * - VK
 * - Snapchat
 * - Clubhouse
 */

export async function parseYouTube(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('h1.ytd-watch-metadata, #title h1, h1')?.innerText?.trim() || document.title;
    const author =
      document.querySelector('#channel-name #text, #upload-info #text, .ytd-channel-name')?.innerText?.trim() || '';
    const desc =
      document.querySelector('#description-inline-expander, #description-text, #description')?.innerText?.trim() || '';
    const comments = Array.from(document.querySelectorAll('#content-text'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, desc, comments };
  });

  return {
    platform: 'youtube',
    category: 'video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.desc || data.title),
    tags: ['youtube'],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseTikTok(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('[data-e2e="browse-video-desc"], [data-e2e="user-post-item-desc"], h1')?.innerText?.trim() ||
      document.title;
    const author =
      document.querySelector('[data-e2e="browse-user-avatar"] ~ div, [data-e2e="browse-username"]')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('a[href*="/tag/"]')).map((t) => t.innerText.trim());

    return { title, author, tags };
  });

  return {
    platform: 'tiktok',
    category: 'short_video',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.title),
    tags: [...new Set(data.tags)],
  };
}

export async function parseTwitter(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2500);

  const data = await page.evaluate(() => {
    const tweets = Array.from(document.querySelectorAll('article div[data-testid="tweetText"]')).map((el) =>
      el.innerText.trim()
    );
    const author =
      document.querySelector('[data-testid="User-Name"], article [data-testid="User-Name"]')?.innerText?.trim() || '';

    return {
      author,
      content: tweets.join('\n\n---\n\n') || document.body.innerText.slice(0, 500),
      tweetCount: tweets.length,
    };
  });

  return {
    platform: 'twitter_x',
    category: 'microblog',
    url: targetUrl,
    title: cleanText(data.content.slice(0, 40) + '...'),
    author: cleanText(data.author),
    content: cleanText(data.content),
    tags: ['x', 'twitter'],
  };
}

export async function parseReddit(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('h1[slot="title"], shreddit-title, h1, .PostHeader__title')?.innerText?.trim() ||
      document.title;
    const author =
      document.querySelector('[slot="authorName"], a[href*="/user/"], .author')?.innerText?.trim() || '';
    const body =
      document.querySelector('[slot="text-body"], .text-neutral-content, .Post__body, article')?.innerText?.trim() || '';
    const comments = Array.from(document.querySelectorAll('shreddit-comment [slot="comment"], .Comment__body'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return { title, author, body, comments };
  });

  return {
    platform: 'reddit',
    category: 'forum_thread',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.body || data.title),
    tags: ['reddit'],
    raw_comments: data.comments.map(cleanText),
  };
}

export async function parseMeta(page, targetUrl) {
  // Facebook / Instagram
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const isInstagram = targetUrl.includes('instagram.com');

  const data = await page.evaluate((isIg) => {
    if (isIg) {
      const caption =
        document.querySelector('h1, article span, article div[role="button"] ~ div span, ._a9zs')?.innerText?.trim() ||
        document.title;
      const author = document.querySelector('header a, ._a9zc')?.innerText?.trim() || '';
      return { title: caption.slice(0, 40), author, content: caption };
    }
    // Facebook
    const postText =
      document.querySelector('[data-ad-preview="message"], [data-ad-comet-preview="message"], div[dir="auto"]')?.innerText ||
      document.title;
    const author = document.querySelector('h2 a, strong a')?.innerText || '';
    return { title: postText.slice(0, 40), author, content: postText };
  }, isInstagram);

  return {
    platform: isInstagram ? 'instagram' : 'facebook',
    category: 'social_media',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content),
    tags: [isInstagram ? 'instagram' : 'facebook'],
  };
}

export async function parsePinterest(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1[data-test-id="pin-title"], h1')?.innerText?.trim() || document.title;
    const desc = document.querySelector('[data-test-id="pin-description"], .description')?.innerText?.trim() || '';
    const author = document.querySelector('[data-test-id="creator-profile-name"], .creatorName')?.innerText?.trim() || '';

    return { title, desc, author };
  });

  return {
    platform: 'pinterest',
    category: 'visual_pin',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.desc || data.title),
    tags: ['pinterest'],
  };
}

export async function parseTumblr(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('.post-title, h1')?.innerText?.trim() || document.title;
    const content = document.querySelector('.body-text, article, .post_body')?.innerText?.trim() || '';
    const author = document.querySelector('.post-blog-name, .blog-name')?.innerText?.trim() || '';

    return { title, content, author };
  });

  return {
    platform: 'tumblr',
    category: 'blog_post',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['tumblr'],
  };
}

export async function parseVK(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const content = document.querySelector('.wall_post_text, .post_text')?.innerText?.trim() || document.body.innerText.slice(0, 400);
    const author = document.querySelector('.author, .post_author')?.innerText?.trim() || '';

    return { content, author };
  });

  return {
    platform: 'vk',
    category: 'social_post',
    url: targetUrl,
    title: cleanText(data.content.slice(0, 40)),
    author: cleanText(data.author),
    content: cleanText(data.content),
    tags: ['vk'],
  };
}

export async function parseSnapchat(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1, .story-title, .title')?.innerText?.trim() || document.title;
    const author = document.querySelector('.user-name, .author')?.innerText?.trim() || '';

    return { title, author };
  });

  return {
    platform: 'snapchat',
    category: 'social_story',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.title),
    tags: ['snapchat'],
  };
}

export async function parseClubhouse(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1, .room-title, .title')?.innerText?.trim() || document.title;
    const desc = document.querySelector('.room-description, .desc, p')?.innerText?.trim() || '';

    return { title, desc };
  });

  return {
    platform: 'clubhouse',
    category: 'audio_room',
    url: targetUrl,
    title: cleanText(data.title),
    author: '',
    content: cleanText(data.desc || data.title),
    tags: ['clubhouse'],
  };
}
