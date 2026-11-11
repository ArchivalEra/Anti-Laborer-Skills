import { autoDismissModals, cleanText, stableEvaluate, sleep } from '../utils.mjs';

/**
 * Search-engine allowlist policy (2026-10): only Google and Bing are permitted
 * as search sources. Other engines (360/Sogou/Baidu SERP) are excluded from
 * routing; direct page fetches of specific platforms remain unaffected.
 */

/**
 * Universal web page & search engine extractor.
 */

export async function parseGenericWeb(page, targetUrl, selector = null) {
  await autoDismissModals(page);

  const data = await stableEvaluate(page, (sel) => {
    const title = document.querySelector('h1, title')?.innerText?.trim() || document.title;
    const target = sel ? document.querySelector(sel) : document.querySelector('article, main, #content, .content') || document.body;

    // Clean out noisy tags
    const cloned = target.cloneNode(true);
    cloned.querySelectorAll('script, style, nav, footer, noscript, iframe, .ad, .ads').forEach((el) => el.remove());

    const content = cloned.innerText || '';
    const author = document.querySelector('meta[name="author"], .author, .byline')?.getAttribute('content') ||
      document.querySelector('.author, .byline')?.innerText?.trim() || '';

    return { title, author, content, url: location.href };
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
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&hl=zh-CN&num=20`;

  // Google serves a consent interstitial or JS challenge to fresh profiles;
  // domcontentloaded + settle lets the real SERP take over before we probe.
  await page.goto(searchUrl, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await sleep(2500);

  const results = await stableEvaluate(page, () => {
    const items = [];
    const seen = new Set();
    // Modern Google SERP wraps external links as /goto?url=<token>, so the
    // plaintext URL lives in the <cite> element instead of the anchor href.
    // Walk from each h3 upward to its card, then read title/cite/snippet.
    document.querySelectorAll('h3').forEach((h3) => {
      if (items.length >= 15) return;
      const title = h3.innerText.trim();
      if (!title) return;
      let card = h3;
      for (let i = 0; i < 6 && card; i++) {
        card = card.parentElement;
        if (!card) break;
        const cite = card.querySelector('cite');
        if (!cite) continue;
        let src = cite.innerText.trim();
        if (!src) continue;
        // Normalize "domain › path › path" display form into a readable source.
        const domainMatch = /https?:\/\/[^ ]+/.exec(src);
        const domain = domainMatch ? domainMatch[0].replace(/\/$/, '') : src.split(' › ')[0];
        if (seen.has(title + domain)) return;
        seen.add(title + domain);
        const snippet = (card.innerText || '').replace(/\n+/g, ' ').replace(title, '').replace(src, '').trim();
        items.push({ title, url: domain, cite: src.slice(0, 120), snippet: snippet.slice(0, 400) });
        break;
      }
    });
    return items;
  }, undefined, { settleMs: 1500, attempts: 5 });

  const blocked =
    !results.length &&
    (await stableEvaluate(page, () => document.body?.innerText?.slice(0, 500) || '', undefined, { attempts: 2 }).catch(() => ''));

  const harvest = {
    platform: 'google_search',
    category: 'search_results',
    query,
    title: `Google Search: "${query}"`,
    results,
    tags: ['search'],
  };
  if (!results.length) {
    const blockedNote = blocked ? `; page says: ${String(blocked).slice(0, 200)}` : '';
    harvest.content = `(${results.length} organic results${blockedNote})`;
  } else {
    harvest.content = results
      .map((r, idx) => `${idx + 1}. [${r.title}] (${r.cite || r.url})\n   ${r.snippet}`)
      .join('\n\n');
  }
  return harvest;
}

/**
 * Bing search via the RSS endpoint. The HTML SERP degrades long Chinese
 * queries to unrelated dictionary/travel results for cookieless clients, but
 * &format=rss returns clean <item> blocks with real outbound links.
 */
export async function parseBingSearch(page, query) {
  const rssUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}&format=rss&ensearch=0&setmkt=zh-CN`;
  await page.goto(rssUrl, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await sleep(1200);

  const data = await stableEvaluate(page, () => {
    const items = [];
    document.querySelectorAll('item').forEach((it) => {
      const title = it.querySelector('title')?.textContent?.trim() || '';
      const link = it.querySelector('link')?.textContent?.trim() || '';
      const desc = it.querySelector('description')?.textContent?.trim() || '';
      if (title && link) items.push({ title, url: link, snippet: (desc || '').replace(/\s+/g, ' ').slice(0, 400) });
    });
    return items;
  }, undefined, { settleMs: 800, attempts: 4 });

  // Degradation guard: bing sometimes substitutes an unrelated cached feed
  // (dictionary entries, unrelated news) for cookieless clients. If not a
  // single item shares a query token, report zero rather than pass noise.
  const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 2);
  const relevant = data.filter(
    (r) => tokens.some((t) => r.title.toLowerCase().includes(t) || r.snippet.toLowerCase().includes(t)),
  );

  return {
    platform: 'bing_search',
    category: 'search_results',
    query,
    title: `Bing Search: "${query}"`,
    content: relevant.length
      ? relevant.map((r, idx) => `${idx + 1}. [${r.title}] (${r.url})\n   ${r.snippet}`).join('\n\n')
      : `(0 relevant results; bing returned ${data.length} items, none matching the query — likely degraded feed, retry via google)`,
    results: relevant,
    tags: ['search'],
  };
}
