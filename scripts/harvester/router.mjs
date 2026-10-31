/**
 * Central Platform Router
 * Automatically matches incoming URLs to dedicated parsers and determines network routing.
 *
 * Routing is table-driven: the first matching row wins (explicit --platform,
 * including legacy aliases, OR a URL token match). Keeping routes as
 * self-describing objects lets new platforms be added without growing branch
 * complexity, and `aliases` preserves the platform names accepted by the
 * pre-table if/else chain.
 */

import * as shortVideo from './platforms/domestic/short_video.mjs';
import * as knowledgeForum from './platforms/domestic/knowledge_forum.mjs';
import * as socialMedia from './platforms/domestic/social_media.mjs';
import * as intlSocial from './platforms/international/social_video.mjs';
import * as intlMsg from './platforms/international/messaging_newsletters.mjs';
import * as generic from './platforms/generic.mjs';

const DEFAULT_PROXY = 'http://127.0.0.1:2080';

const ROUTES = [
  // 1. Domestic Short Video (Direct connection)
  { platform: 'douyin', needsProxy: false, parser: shortVideo.parseDouyin, tokens: ['douyin.com', 'iesdouyin.com'] },
  { platform: 'kuaishou', needsProxy: false, parser: shortVideo.parseKuaishou, tokens: ['kuaishou.com', 'kwai.com'] },
  { platform: 'wechat_channels', needsProxy: false, parser: shortVideo.parseWechatChannels, tokens: ['channels.weixin.qq.com', 'weixin.qq.com/sph'] },
  { platform: 'tencent_video', needsProxy: false, parser: shortVideo.parseTencentVideo, tokens: ['v.qq.com'] },

  // 2. Domestic Knowledge & UGC & Forum
  { platform: 'zhihu', needsProxy: false, parser: knowledgeForum.parseZhihu, tokens: ['zhihu.com'] },
  { platform: 'bilibili', needsProxy: false, parser: knowledgeForum.parseBilibili, tokens: ['bilibili.com', 'b23.tv'] },
  { platform: 'xiaohongshu', needsProxy: false, parser: knowledgeForum.parseXiaohongshu, tokens: ['xiaohongshu.com', 'xhslink.com'] },
  { platform: 'v2ex', needsProxy: true, parser: knowledgeForum.parseV2EX, tokens: ['v2ex.com'] },
  { platform: 'baidu_tieba', needsProxy: false, parser: knowledgeForum.parseBaiduTieba, tokens: ['tieba.baidu.com'], aliases: ['tieba'] },

  // 3. Domestic Social Media & Articles (Direct)
  { platform: 'wechat_article', needsProxy: false, parser: socialMedia.parseWechatArticle, tokens: ['mp.weixin.qq.com'] },
  { platform: 'weibo', needsProxy: false, parser: socialMedia.parseWeibo, tokens: ['weibo.com', 'weibo.cn'] },
  { platform: 'toutiao', needsProxy: false, parser: socialMedia.parseToutiao, tokens: ['toutiao.com', 'wukong.com'] },
  { platform: 'baijiahao', needsProxy: false, parser: socialMedia.parseBaijiahao, tokens: ['baijiahao.baidu.com'] },
  { platform: 'sohu', needsProxy: false, parser: socialMedia.parseSohu, tokens: ['sohu.com'] },
  { platform: 'qzone', needsProxy: false, parser: socialMedia.parseQzone, tokens: ['qzone.qq.com'] },

  // 4. International Social & Video (Proxy needed)
  { platform: 'youtube', needsProxy: true, parser: intlSocial.parseYouTube, tokens: ['youtube.com', 'youtu.be'] },
  { platform: 'tiktok', needsProxy: true, parser: intlSocial.parseTikTok, tokens: ['tiktok.com'] },
  { platform: 'twitter_x', needsProxy: true, parser: intlSocial.parseTwitter, tokens: ['twitter.com', 'x.com'], aliases: ['twitter'] },
  { platform: 'reddit', needsProxy: true, parser: intlSocial.parseReddit, tokens: ['reddit.com'] },
  { platform: 'meta', needsProxy: true, parser: intlSocial.parseMeta, tokens: ['facebook.com', 'instagram.com'] },
  { platform: 'pinterest', needsProxy: true, parser: intlSocial.parsePinterest, tokens: ['pinterest.com'] },
  { platform: 'tumblr', needsProxy: true, parser: intlSocial.parseTumblr, tokens: ['tumblr.com'] },
  { platform: 'vk', needsProxy: true, parser: intlSocial.parseVK, tokens: ['vk.com'] },
  { platform: 'snapchat', needsProxy: true, parser: intlSocial.parseSnapchat, tokens: ['snapchat.com'] },
  { platform: 'clubhouse', needsProxy: true, parser: intlSocial.parseClubhouse, tokens: ['clubhouse.com'] },

  // 5. International Messaging & Newsletters (Proxy needed)
  { platform: 'telegram', needsProxy: true, parser: intlMsg.parseTelegramChannel, tokens: ['t.me', 'telegram.org'] },
  { platform: 'discord', needsProxy: true, parser: intlMsg.parseDiscord, tokens: ['discord.com', 'discord.gg'] },
  { platform: 'whatsapp', needsProxy: true, parser: intlMsg.parseWhatsAppChannel, tokens: ['whatsapp.com'] },
  { platform: 'substack', needsProxy: true, parser: intlMsg.parseSubstack, tokens: ['substack.com'] },
  { platform: 'medium', needsProxy: true, parser: intlMsg.parseMedium, tokens: ['medium.com'] },
];

const DOMESTIC_TOKENS = ['.cn', '.qq.', '.baidu.', '.sohu.'];

function matchesRoute(route, lowerUrl, explicitPlatform) {
  return (
    route.platform === explicitPlatform ||
    (route.aliases?.includes(explicitPlatform) ?? false) ||
    route.tokens.some((token) => lowerUrl.includes(token))
  );
}

function routeByUrl(url, explicitPlatform) {
  const lowerUrl = url.toLowerCase();
  const route = ROUTES.find((entry) => matchesRoute(entry, lowerUrl, explicitPlatform));

  if (!route) {
    // Generic Fallback: Default to proxy for foreign domains, direct for domestic domains
    const isDomestic = DOMESTIC_TOKENS.some((token) => lowerUrl.includes(token));
    return {
      platform: 'generic_web',
      needsProxy: !isDomestic,
      parser: (page, targetUrl, sel) => generic.parseGenericWeb(page, targetUrl, sel),
    };
  }

  const { platform, needsProxy, parser } = route;
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
