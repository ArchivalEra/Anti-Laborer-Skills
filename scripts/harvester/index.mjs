#!/usr/bin/env node
/**
 * Multi-Platform Harvester Engine
 * Unified entrypoint covering 30+ domestic and international platforms.
 * Powered by CloakBrowser stealth Chromium.
 */

import { existsSync } from 'node:fs';
import { formatHarvestOutput } from './utils.mjs';
import { routeRequest, DEFAULT_PROXY } from './router.mjs';

const CLOAK_MODULE_PATH = '/mnt/hdd/HUAWEI-codearts/cloakbrowser-install/node_modules/cloakbrowser/dist/index.js';

if (!existsSync(CLOAK_MODULE_PATH)) {
  console.error(`[Error] CloakBrowser installation not found at: ${CLOAK_MODULE_PATH}`);
  process.exit(1);
}

const { launch } = await import(CLOAK_MODULE_PATH);

// Parse CLI flags
const args = process.argv.slice(2);
let url = null;
let searchQuery = null;
let explicitPlatform = null;
let proxy = DEFAULT_PROXY;
let forceNoProxy = false;
let outputJson = false;
let customSelector = null;

// Flags that consume a value token. Walked as a queue so the loop body never
// mutates a loop counter (Sonar S2310) while preserving the original
// semantics: a value is consumed only when a following token exists.
const VALUE_FLAGS = {
  '--url': (v) => { url = v; },
  '--search': (v) => { searchQuery = v; },
  '--platform': (v) => { explicitPlatform = v; },
  '--proxy': (v) => { proxy = v; },
  '--selector': (v) => { customSelector = v; },
};

const queue = [...args];
while (queue.length > 0) {
  const arg = queue.shift();
  const takeValue = VALUE_FLAGS[arg];
  if (takeValue && queue.length > 0) {
    takeValue(queue.shift());
  } else if (arg === '--no-proxy') {
    forceNoProxy = true;
  } else if (arg === '--json') {
    outputJson = true;
  } else if (!arg.startsWith('-') && !url && !searchQuery) {
    url = arg;
  }
}

if (!url && !searchQuery) {
  console.error(`
Usage:
  node scripts/harvester/index.mjs --url <URL> [options]
  node scripts/harvester/index.mjs --search <QUERY> [options]

Supported Platforms (30+):
  • 国内视频/短视频: 抖音, 快手, 微信视频号, 腾讯视频
  • 国内社区/问答: 知乎, 哔哩哔哩 (B站), 小红书, V2EX, 百度贴吧
  • 国内社交/图文: 微信公众号, 新浪微博, 头条号, 百家号, 搜狐号, QQ空间
  • 国际社交/视频: YouTube, TikTok, Twitter (X), Reddit, Facebook, Instagram, Pinterest, Tumblr, VK, Snapchat, Clubhouse
  • 国际通讯/专栏: Telegram Channels, Discord, WhatsApp Channels, Substack, Medium

Options:
  --json            Output structured JSON instead of human-readable text
  --proxy <URL>     Custom proxy URL (default: http://127.0.0.1:2080)
  --no-proxy        Force direct network connection
  --platform <NAME> Explicitly select parser
  --selector <CSS>  Target specific CSS container
`);
  process.exit(1);
}

// Determine routing
const route = routeRequest(url, explicitPlatform);
const activeProxy = !forceNoProxy && (route.needsProxy || searchQuery) ? proxy : undefined;

let browser;
try {
  browser = await launch({
    headless: true,
    ...(activeProxy ? { proxy: activeProxy } : {}),
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(25000);

  let result;
  if (searchQuery) {
    result = await route.parser(page, searchQuery);
  } else {
    // Navigate
    await page.goto(url, { waitUntil: 'domcontentloaded' }).catch((e) => {
      // Ignore network aborts from media streams
      if (!e.message.includes('ERR_ABORTED')) throw e;
    });

    result = await route.parser(page, url, customSelector);
  }

  // Print output
  console.log(formatHarvestOutput(result, outputJson));
} catch (err) {
  console.error(`[Harvester Failure] ${err.message}`);
  process.exit(1);
} finally {
  if (browser) {
    await browser.close().catch(() => {});
  }
}
