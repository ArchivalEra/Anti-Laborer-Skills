import { autoDismissModals, cleanText } from '../utils.mjs';

/**
 * Universal web page & search engine extractor.
 */

export async function parseGenericWeb(page, targetUrl, selector = null) {
  await autoDismissModals(page);
  await page.waitForTimeout(1000);

  const data = await page.evaluate((sel) => {
    const title = document.querySelector('h1, title')?.innerText?.trim() || document.title;
    const target = sel ? document.querySelector(sel) : document.querySelector('article, main, #content, .content') || document.body;

    // Clean out noisy tags
    const cloned = target.cloneNode(true);
    cloned.querySelectorAll('script, style, nav, footer, noscript, iframe, .ad, .ads').forEach((el) => el.remove());

    const content = cloned.innerText || '';
    const author = document.querySelector('meta[name="author"], .author, .byline')?.getAttribute('content') ||
      document.querySelector('.author, .byline')?.innerText?.trim() || '';

    return { title, author, content };
  }, selector);

  return {
    platform: 'generic_web',
    category: 'webpage',
    url: targetUrl,
    title: cleanText(data.title),
    author: cleanText(data.author),
    content: cleanText(data.content || data.title),
    tags: ['web'],
  };
}

export async function parseGoogleSearch(page, query) {
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
    category: 'search_results',
    query,
    title: `Google Search: "${query}"`,
    content: results.map((r, idx) => `${idx + 1}. [${r.title}] (${r.url})\n   ${r.snippet}`).join('\n\n'),
    results,
    tags: ['search'],
  };
}
