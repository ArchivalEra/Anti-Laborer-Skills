/**
 * Common utilities and DOM cleaners for the harvester engine.
 */

export function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/[ \u00A0\u3000]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function autoDismissModals(page) {
  try {
    await page.evaluate(() => {
      const closeSelectors = [
        // Domestic platforms
        '.login-container .close',
        '.icon-btn-close',
        '.close-button',
        '.close-btn',
        '.dy-account-close',
        '.login-mask .close',
        '.login-dialog-close',
        '.semi-modal-close',
        '.bili-mini-close-icon',
        '.Modal-closeButton',
        '.SignFlowModal-closeButton',
        '.weibo-login-close',
        '.btn-close',
        '.ant-modal-close',
        // International platforms
        '[aria-label="Close"]',
        '[aria-label="Dismiss"]',
        '[data-testid="app-bar-close"]',
        '#dismiss-button',
        '.cookie-banner button',
        'button[aria-label="Accept all"]',
        'button[aria-label="Agree"]',
        'div[class*="login"] div[class*="close"]',
        'div[class*="modal"] div[class*="close"]',
        'div[class*="dialog"] div[class*="close"]',
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
  } catch (_) {}
}

export function formatHarvestOutput(result, isJson = false) {
  if (isJson) {
    return JSON.stringify(result, null, 2);
  }

  const lines = [];
  lines.push(`============================================================`);
  lines.push(`📡 [HARVESTER] 平台: ${result.platform.toUpperCase()} | 分类: ${result.category || 'GENERIC'}`);
  lines.push(`============================================================`);
  lines.push(`📌 标题: ${result.title || '无标题'}`);
  if (result.author) lines.push(`👤 作者: ${result.author}`);
  if (result.url) lines.push(`🔗 链接: ${result.url}`);
  if (result.timestamp) lines.push(`🕒 时间: ${result.timestamp}`);
  if (result.tags?.length) lines.push(`🏷 标签: ${result.tags.join(', ')}`);
  if (result.metrics && Object.keys(result.metrics).length) {
    const metricsStr = Object.entries(result.metrics)
      .map(([k, v]) => `${k}=${v}`)
      .join(' | ');
    lines.push(`📊 指标: ${metricsStr}`);
  }
  if (result.raw_comments?.length) {
    lines.push(`💬 精选评论:`);
    result.raw_comments.forEach((c, idx) => lines.push(`   ${idx + 1}. ${c}`));
  }

  lines.push(`\n--- 提取正文内容 ---`);
  lines.push(result.content || '(无可用正文)');
  lines.push(`============================================================\n`);

  return lines.join('\n');
}
