#!/usr/bin/env node
/**
 * Lightweight Harvester using CloakBrowser (Playwright Stealth)
 * Extracts clean web text or search snippets to feed into source-evaluator.
 *
 * Usage:
 *   node scripts/harvest.mjs --url "https://news.ycombinator.com"
 *   node scripts/harvest.mjs --search "systems engineering law of diminishing returns"
 *   node scripts/harvest.mjs --url "https://example.com" | python3 skills/source-evaluator/scripts/filter.py
 */

import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Locate cloakbrowser installation
const CLOAK_MODULE_PATH = '/mnt/hdd/HUAWEI-codearts/cloakbrowser-install/node_modules/cloakbrowser/dist/index.js';

if (!existsSync(CLOAK_MODULE_PATH)) {
  console.error(`[Error] CloakBrowser not found at: ${CLOAK_MODULE_PATH}`);
  process.exit(1);
}

const { launch } = await import(CLOAK_MODULE_PATH);

// Parse simple CLI flags
const args = process.argv.slice(2);
let url = null;
let searchQuery = null;
let proxy = 'http://127.0.0.1:2080';
let selector = 'article, main, body';
let outputJson = false;

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
    selector = args[++i];
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

// Execute harvest
let browser;
try {
  const launchOptions = {
    headless: true,
    ...(proxy ? { proxy } : {}),
  };

  browser = await launch(launchOptions);
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  if (searchQuery) {
    // Search mode
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const results = await page.evaluate(() => {
      const items = [];
      const cards = document.querySelectorAll('div.g, div[data-snc]');
      cards.forEach((card) => {
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

    if (outputJson) {
      console.log(JSON.stringify(results, null, 2));
    } else {
      for (const r of results) {
        console.log(`[TITLE] ${r.title}`);
        console.log(`[URL]   ${r.url}`);
        console.log(`[TEXT]  ${r.snippet}\n`);
      }
    }
  } else {
    // Single page mode
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);

    const title = await page.title();
    const content = await page.evaluate((sel) => {
      const target = document.querySelector(sel) || document.body;
      // Remove scripts, styles, and navigational elements
      target.querySelectorAll('script, style, nav, footer, noscript').forEach((el) => el.remove());
      return target.innerText.replace(/\n{3,}/g, '\n\n').trim();
    }, selector);

    if (outputJson) {
      console.log(JSON.stringify({ url, title, content }, null, 2));
    } else {
      console.log(`=== ${title} ===\n`);
      console.log(content);
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
