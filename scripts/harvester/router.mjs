/**
 * Central Platform Router
 * Automatically matches incoming URLs to dedicated parsers and determines network routing.
 */

import * as shortVideo from './platforms/domestic/short_video.mjs';
import * as knowledgeForum from './platforms/domestic/knowledge_forum.mjs';
import * as socialMedia from './platforms/domestic/social_media.mjs';
import * as intlSocial from './platforms/international/social_video.mjs';
import * as intlMsg from './platforms/international/messaging_newsletters.mjs';
import * as generic from './platforms/generic.mjs';

const DEFAULT_PROXY = 'http://127.0.0.1:2080';

export function routeRequest(url, explicitPlatform = null) {
  if (!url) {
    return {
      platform: 'google_search',
      needsProxy: true,
      parser: (page, q) => generic.parseGoogleSearch(page, q),
    };
  }

  const u = url.toLowerCase();

  // 1. Domestic Short Video (Direct connection)
  if (u.includes('douyin.com') || u.includes('iesdouyin.com') || explicitPlatform === 'douyin') {
    return { platform: 'douyin', needsProxy: false, parser: shortVideo.parseDouyin };
  }
  if (u.includes('kuaishou.com') || u.includes('kwai.com') || explicitPlatform === 'kuaishou') {
    return { platform: 'kuaishou', needsProxy: false, parser: shortVideo.parseKuaishou };
  }
  if (u.includes('channels.weixin.qq.com') || u.includes('weixin.qq.com/sph') || explicitPlatform === 'wechat_channels') {
    return { platform: 'wechat_channels', needsProxy: false, parser: shortVideo.parseWechatChannels };
  }
  if (u.includes('v.qq.com') || explicitPlatform === 'tencent_video') {
    return { platform: 'tencent_video', needsProxy: false, parser: shortVideo.parseTencentVideo };
  }

  // 2. Domestic Knowledge & UGC & Forum
  if (u.includes('zhihu.com') || explicitPlatform === 'zhihu') {
    return { platform: 'zhihu', needsProxy: false, parser: knowledgeForum.parseZhihu };
  }
  if (u.includes('bilibili.com') || u.includes('b23.tv') || explicitPlatform === 'bilibili') {
    return { platform: 'bilibili', needsProxy: false, parser: knowledgeForum.parseBilibili };
  }
  if (u.includes('xiaohongshu.com') || u.includes('xhslink.com') || explicitPlatform === 'xiaohongshu') {
    return { platform: 'xiaohongshu', needsProxy: false, parser: knowledgeForum.parseXiaohongshu };
  }
  if (u.includes('v2ex.com') || explicitPlatform === 'v2ex') {
    return { platform: 'v2ex', needsProxy: true, parser: knowledgeForum.parseV2EX };
  }
  if (u.includes('tieba.baidu.com') || explicitPlatform === 'tieba') {
    return { platform: 'baidu_tieba', needsProxy: false, parser: knowledgeForum.parseBaiduTieba };
  }

  // 3. Domestic Social Media & Articles (Direct)
  if (u.includes('mp.weixin.qq.com') || explicitPlatform === 'wechat_article') {
    return { platform: 'wechat_article', needsProxy: false, parser: socialMedia.parseWechatArticle };
  }
  if (u.includes('weibo.com') || u.includes('weibo.cn') || explicitPlatform === 'weibo') {
    return { platform: 'weibo', needsProxy: false, parser: socialMedia.parseWeibo };
  }
  if (u.includes('toutiao.com') || u.includes('wukong.com') || explicitPlatform === 'toutiao') {
    return { platform: 'toutiao', needsProxy: false, parser: socialMedia.parseToutiao };
  }
  if (u.includes('baijiahao.baidu.com') || explicitPlatform === 'baijiahao') {
    return { platform: 'baijiahao', needsProxy: false, parser: socialMedia.parseBaijiahao };
  }
  if (u.includes('sohu.com') || explicitPlatform === 'sohu') {
    return { platform: 'sohu', needsProxy: false, parser: socialMedia.parseSohu };
  }
  if (u.includes('qzone.qq.com') || explicitPlatform === 'qzone') {
    return { platform: 'qzone', needsProxy: false, parser: socialMedia.parseQzone };
  }

  // 4. International Social & Video (Proxy needed)
  if (u.includes('youtube.com') || u.includes('youtu.be') || explicitPlatform === 'youtube') {
    return { platform: 'youtube', needsProxy: true, parser: intlSocial.parseYouTube };
  }
  if (u.includes('tiktok.com') || explicitPlatform === 'tiktok') {
    return { platform: 'tiktok', needsProxy: true, parser: intlSocial.parseTikTok };
  }
  if (u.includes('twitter.com') || u.includes('x.com') || explicitPlatform === 'twitter') {
    return { platform: 'twitter_x', needsProxy: true, parser: intlSocial.parseTwitter };
  }
  if (u.includes('reddit.com') || explicitPlatform === 'reddit') {
    return { platform: 'reddit', needsProxy: true, parser: intlSocial.parseReddit };
  }
  if (u.includes('facebook.com') || u.includes('instagram.com') || explicitPlatform === 'meta') {
    return { platform: 'meta', needsProxy: true, parser: intlSocial.parseMeta };
  }
  if (u.includes('pinterest.com') || explicitPlatform === 'pinterest') {
    return { platform: 'pinterest', needsProxy: true, parser: intlSocial.parsePinterest };
  }
  if (u.includes('tumblr.com') || explicitPlatform === 'tumblr') {
    return { platform: 'tumblr', needsProxy: true, parser: intlSocial.parseTumblr };
  }
  if (u.includes('vk.com') || explicitPlatform === 'vk') {
    return { platform: 'vk', needsProxy: true, parser: intlSocial.parseVK };
  }
  if (u.includes('snapchat.com') || explicitPlatform === 'snapchat') {
    return { platform: 'snapchat', needsProxy: true, parser: intlSocial.parseSnapchat };
  }
  if (u.includes('clubhouse.com') || explicitPlatform === 'clubhouse') {
    return { platform: 'clubhouse', needsProxy: true, parser: intlSocial.parseClubhouse };
  }

  // 5. International Messaging & Newsletters (Proxy needed)
  if (u.includes('t.me') || u.includes('telegram.org') || explicitPlatform === 'telegram') {
    return { platform: 'telegram', needsProxy: true, parser: intlMsg.parseTelegramChannel };
  }
  if (u.includes('discord.com') || u.includes('discord.gg') || explicitPlatform === 'discord') {
    return { platform: 'discord', needsProxy: true, parser: intlMsg.parseDiscord };
  }
  if (u.includes('whatsapp.com') || explicitPlatform === 'whatsapp') {
    return { platform: 'whatsapp', needsProxy: true, parser: intlMsg.parseWhatsAppChannel };
  }
  if (u.includes('substack.com') || explicitPlatform === 'substack') {
    return { platform: 'substack', needsProxy: true, parser: intlMsg.parseSubstack };
  }
  if (u.includes('medium.com') || explicitPlatform === 'medium') {
    return { platform: 'medium', needsProxy: true, parser: intlMsg.parseMedium };
  }

  // 6. Generic Fallback: Default to proxy for foreign domains, direct for domestic domains
  const isDomestic = u.includes('.cn') || u.includes('.qq.') || u.includes('.baidu.') || u.includes('.sohu.');
  return {
    platform: 'generic_web',
    needsProxy: !isDomestic,
    parser: (page, targetUrl, sel) => generic.parseGenericWeb(page, targetUrl, sel),
  };
}

export { DEFAULT_PROXY };
