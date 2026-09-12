#!/usr/bin/env node
/**
 * Multi-Platform Harvester using CloakBrowser (Playwright Stealth)
 * Supports: Xiaohongshu (小红书), Douyin (抖音), Kuaishou (快手), Google Search, and Generic Web.
 *
 * Usage:
 *   node scripts/harvest.mjs --url "https://www.xiaohongshu.com/explore"
 *   node scripts/harvest.mjs --url "https://www.douyin.com/video/123456"
 *   node scripts/harvest.mjs --url "https://www.kuaishou.com/short-video/123456"
 *   node scripts/harvest.mjs --search "努力 自我感动 边际效用"
 *   node scripts/harvest.mjs --url "https://..." | python3 skills/source-evaluator/scripts/filter.py
 */

import { existsSync } from 'node:fs';

const CLOAK_MODULE_PATH = '/mnt/hdd/HUAWEI-codearts/cloakbrowser-install/node_modules/cloakbrowser/dist/index.js';

if (!existsSync(CLOAK_MODULE_PATH)) {
  console.error(`[Error] CloakBrowser not found at: ${CLOAK_MODULE_PATH}`);
  process.exit(1);
}

const { launch } = await import(CLOAK_MODULE_PATH);

// Parse CLI arguments
const args = process.argv.slice(2);
let url = null;
let searchQuery = null;
let proxy = 'http://127.0.0.1:2080';
let outputJson = false;
let customSelector = null;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--url' && args[i + 1]) {
    url = args[++i];
  } else if (arg === '--search' && args[i + 1]) {
    searchQuery = args[++i];
  } else if (arg === '--proxy' && args[i + 1]) {
    proxy = args[++i];
  } else if (arg === '--no-proxy') {
    proxy = undefined;
  } else if (arg === '--selector' && args[i + 1]) {
    customSelector = args[++i];
  } else if (arg === '--json') {
    outputJson = true;
  } else if (!url && !searchQuery && !arg.startsWith('-')) {
    url = arg;
  }
}

if (!url && !searchQuery) {
  console.error(`Usage: node scripts/harvest.mjs [--url <url> | --search <query>] [--proxy <proxy>] [--json]`);
  process.exit(1);
}

// Platform detection
function detectPlatform(targetUrl) {
  if (!targetUrl) return 'search';
  const u = targetUrl.toLowerCase();
  if (u.includes('xiaohongshu.com') || u.includes('xhslink.com')) return 'xiaohongshu';
  if (u.includes('douyin.com') || u.includes('iesdouyin.com')) return 'douyin';
  if (u.includes('kuaishou.com') || u.includes('kwai.com')) return 'kuaishou';
  return 'generic';
}

// Generic modal closer helper
async function autoDismissModals(page) {
  await page.evaluate(() => {
    const closeSelectors = [
      '.login-container .close',
      '.icon-btn-close',
      '.close-button',
      '.dy-account-close',
      '.login-mask .close',
      '.login-dialog-close',
      '.semi-modal-close',
      'div[class*="login"] div[class*="close"]',
      'div[class*="modal"] div[class*="close"]',
      'svg[class*="close"]',
    ];
    for (const sel of closeSelectors) {
      const els = document.querySelectorAll(sel);
      els.forEach((el) => {
        try {
          el.click();
        } catch (_) {}
      });
    }
  });
}

// ----------------------------------------------------------------------------
// Platform Specific Parsers
// ----------------------------------------------------------------------------

async function parseXiaohongshu(page, targetUrl) {
  // Check if it's the explore feed or a direct link
  const isFeed = targetUrl.endsWith('/explore') || targetUrl.includes('/explore?');

  if (isFeed) {
    // Extract top note cards from explore feed
    const items = await page.evaluate(() => {
      const notes = [];
      document.querySelectorAll('section.note-item').forEach((item) => {
        const titleEl = item.querySelector('.title, a.title');
        const authorEl = item.querySelector('.name, .author');
        const linkEl = item.querySelector('a[href*="/explore/"]');
        const countEl = item.querySelector('.like-wrapper, .count');
        if (titleEl) {
          notes.push({
            title: titleEl.innerText.trim(),
            author: authorEl ? authorEl.innerText.trim() : '',
            url: linkEl ? linkEl.href : '',
            likes: countEl ? countEl.innerText.trim() : '',
          });
        }
      });
      return notes;
    });

    return {
      platform: 'xiaohongshu',
      url: targetUrl,
      type: 'feed',
      count: items.length,
      items: items.slice(0, 15),
    };
  }

  // Single note mode
  await autoDismissModals(page);
  await page.waitForTimeout(1000);

  const noteData = await page.evaluate(() => {
    const title = document.querySelector('#detail-title, .title, h1')?.innerText?.trim() || document.title;
    const desc = document.querySelector('#detail-desc, .desc, .content')?.innerText?.trim() || '';
    const author = document.querySelector('.author .name, .username, .name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('a[href*="search_result"], a[href*="tag"]')).map((t) =>
      t.innerText.trim()
    );

    return {
      title,
      author,
      content: desc,
      tags: [...new Set(tags)],
    };
  });

  return {
    platform: 'xiaohongshu',
    url: targetUrl,
    type: 'note',
    ...noteData,
  };
}

async function parseDouyin(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const videoData = await page.evaluate(() => {
    const title =
      document.querySelector('[data-e2e="video-desc"], .video-info-detail, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('[data-e2e="video-author-name"], .author-info .name')?.innerText?.trim() || '';
    const tags = Array.from(document.querySelectorAll('a[href*="/hashtag/"]')).map((t) => t.innerText.trim());
    const comments = Array.from(document.querySelectorAll('[data-e2e="comment-item"] p'))
      .map((c) => c.innerText.trim())
      .filter((t) => t.length > 2)
      .slice(0, 5);

    return {
      title,
      author,
      content: title,
      tags: [...new Set(tags)],
      comments,
    };
  });

  return {
    platform: 'douyin',
    url: targetUrl,
    type: 'video',
    ...videoData,
  };
}

async function parseKuaishou(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const videoData = await page.evaluate(() => {
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

    return {
      title,
      author,
      content: title,
      tags: [...new Set(tags)],
      comments,
    };
  });

  return {
    platform: 'kuaishou',
    url: targetUrl,
    type: 'video',
    ...videoData,
  };
}

async function parseGeneric(page, targetUrl, selector) {
  const title = await page.title();
  const content = await page.evaluate((sel) => {
    const target = document.querySelector(sel) || document.body;
    target.querySelectorAll('script, style, nav, footer, noscript').forEach((el) => el.remove());
    return target.innerText.replace(/\n{3,}/g, '\n\n').trim();
  }, selector || 'article, main, body');

  return {
    platform: 'generic',
    url: targetUrl,
    type: 'webpage',
    title,
    content,
  };
}

async function parseGoogleSearch(page, query) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const results = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('div.g, div[data-snc]').forEach((card) => {
      const h3 = card.querySelector('h3');
      const link = card.querySelector('a');
      if (h3 && link) {
        items.push({
          title: h3.innerText.trim(),
          url: link.href,
          snippet: card.innerText.replace(/\n+/g, ' ').trim(),
        });
      }
    });
    return items.slice(0, 10);
  });

  return {
    platform: 'google_search',
    query,
    count: results.length,
    results,
  };
}

// ----------------------------------------------------------------------------
// Main Execution
// ----------------------------------------------------------------------------

let browser;
try {
  const platform = url ? detectPlatform(url) : 'search';
  const launchOptions = {
    headless: true,
    // Domestic Chinese platforms work best with direct connection; international search uses proxy if specified
    ...(platform === 'google_search' && proxy ? { proxy } : {}),
  };

  browser = await launch(launchOptions);
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  let outputData;

  if (searchQuery) {
    outputData = await parseGoogleSearch(page, searchQuery);
  } else {
    // Navigate with DOM content loaded
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    switch (platform) {
      case 'xiaohongshu':
        outputData = await parseXiaohongshu(page, url);
        break;
      case 'douyin':
        outputData = await parseDouyin(page, url);
        break;
      case 'kuaishou':
        outputData = await parseKuaishou(page, url);
        break;
      default:
        outputData = await parseGeneric(page, url, customSelector);
        break;
    }
  }

  // Format and output
  if (outputJson) {
    console.log(JSON.stringify(outputData, null, 2));
  } else {
    // Pipe-friendly text format
    if (outputData.type === 'feed' || outputData.results) {
      const items = outputData.items || outputData.results;
      console.log(`=== [平台: ${outputData.platform.toUpperCase()}] 抓取条数: ${items.length} ===\n`);
      for (const item of items) {
        console.log(`[标题] ${item.title}`);
        if (item.author) console.log(`[作者] ${item.author}`);
        if (item.url) console.log(`[链接] ${item.url}`);
        if (item.snippet) console.log(`[摘要] ${item.snippet}`);
        console.log('');
      }
    } else {
      console.log(`=== [平台: ${outputData.platform.toUpperCase()}] ${outputData.title} ===\n`);
      if (outputData.author) console.log(`作者: ${outputData.author}`);
      if (outputData.url) console.log(`链接: ${outputData.url}`);
      if (outputData.tags?.length) console.log(`标签: ${outputData.tags.join(', ')}`);
      if (outputData.comments?.length) console.log(`精选评论: ${outputData.comments.join(' | ')}`);
      console.log('\n--- 正文内容 ---');
      console.log(outputData.content);
    }
  }
} catch (err) {
  console.error(`[Harvest Error] ${err.message}`);
  process.exit(1);
} finally {
  if (browser) {
    await browser.close();
  }
}
