/**
 * Central Platform Router
 * Automatically matches incoming URLs to dedicated parsers and determines network routing.
 *
 * Routing is table-driven: the first matching row wins (URL token match OR an
 * explicit --platform alias). Keeping routes as data keeps routeRequest flat
 * and lets new platforms be added without growing branch complexity.
 */

import * as shortVideo from './platforms/domestic/short_video.mjs';
import * as knowledgeForum from './platforms/domestic/knowledge_forum.mjs';
import * as socialMedia from './platforms/domestic/social_media.mjs';
import * as intlSocial from './platforms/international/social_video.mjs';
import * as intlMsg from './platforms/international/messaging_newsletters.mjs';
import * as generic from './platforms/generic.mjs';

const DEFAULT_PROXY = 'http://127.0.0.1:2080';

// Each row: [platform, needsProxy, parser, urlTokens]
const ROUTES = [
  // 1. Domestic Short Video (Direct connection)
  ['douyin', false, shortVideo.parseDouyin, ['douyin.com', 'iesdouyin.com']],
  ['kuaishou', false, shortVideo.parseKuaishou, ['kuaishou.com', 'kwai.com']],
  ['wechat_channels', false, shortVideo.parseWechatChannels, ['channels.weixin.qq.com', 'weixin.qq.com/sph']],
  ['tencent_video', false, shortVideo.parseTencentVideo, ['v.qq.com']],

  // 2. Domestic Knowledge & UGC & Forum
  ['zhihu', false, knowledgeForum.parseZhihu, ['zhihu.com']],
  ['bilibili', false, knowledgeForum.parseBilibili, ['bilibili.com', 'b23.tv']],
  ['xiaohongshu', false, knowledgeForum.parseXiaohongshu, ['xiaohongshu.com', 'xhslink.com']],
  ['v2ex', true, knowledgeForum.parseV2EX, ['v2ex.com']],
  ['baidu_tieba', false, knowledgeForum.parseBaiduTieba, ['tieba.baidu.com']],

  // 3. Domestic Social Media & Articles (Direct)
  ['wechat_article', false, socialMedia.parseWechatArticle, ['mp.weixin.qq.com']],
  ['weibo', false, socialMedia.parseWeibo, ['weibo.com', 'weibo.cn']],
  ['toutiao', false, socialMedia.parseToutiao, ['toutiao.com', 'wukong.com']],
  ['baijiahao', false, socialMedia.parseBaijiahao, ['baijiahao.baidu.com']],
  ['sohu', false, socialMedia.parseSohu, ['sohu.com']],
  ['qzone', false, socialMedia.parseQzone, ['qzone.qq.com']],

  // 4. International Social & Video (Proxy needed)
  ['youtube', true, intlSocial.parseYouTube, ['youtube.com', 'youtu.be']],
  ['tiktok', true, intlSocial.parseTikTok, ['tiktok.com']],
  ['twitter_x', true, intlSocial.parseTwitter, ['twitter.com', 'x.com']],
  ['reddit', true, intlSocial.parseReddit, ['reddit.com']],
  ['meta', true, intlSocial.parseMeta, ['facebook.com', 'instagram.com']],
  ['pinterest', true, intlSocial.parsePinterest, ['pinterest.com']],
  ['tumblr', true, intlSocial.parseTumblr, ['tumblr.com']],
  ['vk', true, intlSocial.parseVK, ['vk.com']],
  ['snapchat', true, intlSocial.parseSnapchat, ['snapchat.com']],
  ['clubhouse', true, intlSocial.parseClubhouse, ['clubhouse.com']],

  // 5. International Messaging & Newsletters (Proxy needed)
  ['telegram', true, intlMsg.parseTelegramChannel, ['t.me', 'telegram.org']],
  ['discord', true, intlMsg.parseDiscord, ['discord.com', 'discord.gg']],
  ['whatsapp', true, intlMsg.parseWhatsAppChannel, ['whatsapp.com']],
  ['substack', true, intlMsg.parseSubstack, ['substack.com']],
  ['medium', true, intlMsg.parseMedium, ['medium.com']],
];

const DOMESTIC_TOKENS = ['.cn', '.qq.', '.baidu.', '.sohu.'];

function routeByUrl(url, explicitPlatform) {
  const lowerUrl = url.toLowerCase();
  const route = ROUTES.find(([platform, , , tokens]) =>
    platform === explicitPlatform || tokens.some((token) => lowerUrl.includes(token)));

  if (!route) {
    // Generic Fallback: Default to proxy for foreign domains, direct for domestic domains
    const isDomestic = DOMESTIC_TOKENS.some((token) => lowerUrl.includes(token));
    return {
      platform: 'generic_web',
      needsProxy: !isDomestic,
      parser: (page, targetUrl, sel) => generic.parseGenericWeb(page, targetUrl, sel),
    };
  }

  const [platform, needsProxy, parser] = route;
  return { platform, needsProxy, parser };
}

export function routeRequest(url, explicitPlatform = null) {
  if (!url) {
    // Search-engine allowlist: only Google and Bing (see generic.mjs policy note).
    if (explicitPlatform === 'bing') {
      return { platform: 'bing_search', needsProxy: true, parser: (page, q) => generic.parseBingSearch(page, q) };
    }
    return { platform: 'google_search', needsProxy: true, parser: (page, q) => generic.parseGoogleSearch(page, q) };
  }
  return routeByUrl(url, explicitPlatform);
}

export { DEFAULT_PROXY };
