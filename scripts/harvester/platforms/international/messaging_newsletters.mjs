import { autoDismissModals, cleanText } from '../../utils.mjs';

/**
 * Parsers for messaging channels & newsletters:
 * - Telegram Channels
 * - Discord Web / Channels
 * - WhatsApp Channels
 * - Substack & Medium
 */

export async function parseTelegramChannel(page, targetUrl) {
  // If targetUrl is t.me/username, rewrite to preview format t.me/s/username
  let fetchUrl = targetUrl;
  if (!targetUrl.includes('/s/') && targetUrl.includes('t.me/')) {
    fetchUrl = targetUrl.replace('t.me/', 't.me/s/');
    await page.goto(fetchUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
  }

  const data = await page.evaluate(() => {
    const channelName = document.querySelector('.tgme_channel_info_header_title, .tgme_page_title')?.innerText?.trim() || '';
    const messages = Array.from(document.querySelectorAll('.tgme_widget_message_text'))
      .map((el) => el.innerText.trim())
      .filter((t) => t.length > 5)
      .slice(-5); // Latest 5 messages

    return {
      channelName,
      content: messages.join('\n\n---\n\n') || document.body.innerText.slice(0, 500),
    };
  });

  return {
    platform: 'telegram',
    category: 'messaging_channel',
    url: fetchUrl,
    title: cleanText(data.channelName || 'Telegram Channel'),
    author: cleanText(data.channelName),
    content: cleanText(data.content),
    tags: ['telegram'],
  };
}

export async function parseDiscord(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1, [class*="title"], title')?.innerText?.trim() || document.title;
    const messages = Array.from(document.querySelectorAll('[id^="message-content-"], [class*="messageContent"]'))
      .map((el) => el.innerText.trim())
      .slice(-10);

    return {
      title,
      content: messages.join('\n') || document.body.innerText.slice(0, 500),
    };
  });

  return {
    platform: 'discord',
    category: 'chat_community',
    url: targetUrl,
    title: cleanText(data.title),
    author: 'Discord User',
    content: cleanText(data.content),
    tags: ['discord'],
  };
}

export async function parseWhatsAppChannel(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1, [class*="title"]')?.innerText?.trim() || document.title;
    const desc = document.querySelector('p, [class*="description"]')?.innerText?.trim() || '';

    return { title, desc };
  });

  return {
    platform: 'whatsapp_channel',
    category: 'messaging_channel',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.title),
    content: cleanText(data.desc || data.title),
    tags: ['whatsapp'],
  };
}

export async function parseSubstack(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1.post-title, h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('.byline a, .author-name')?.innerText?.trim() || '';
    const content = document.querySelector('article, .body.markup, .post-content')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'substack',
    category: 'newsletter',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['newsletter', 'substack'],
  };
}

export async function parseMedium(page, targetUrl) {
  await autoDismissModals(page);
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const title = document.querySelector('h1')?.innerText?.trim() || document.title;
    const author = document.querySelector('[data-testid="authorName"], a[rel="author"]')?.innerText?.trim() || '';
    const content = document.querySelector('article, section')?.innerText?.trim() || '';

    return { title, author, content };
  });

  return {
    platform: 'medium',
    category: 'long_article',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['medium'],
  };
}
