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

// Native sleep: page.waitForTimeout() sends CDP protocol commands that
// anti-bot systems detect; setTimeout is invisible.
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Wait for redirects to settle and the main frame to stop navigating.
// Sites like bing.com redirect www->cn and then fire successive client-side
// navigations that destroy page.evaluate's execution context. Retry the probe
// until the document is stable instead of evaluating once and crashing.
export async function stableEvaluate(page, fn, arg, { settleMs = 1200, attempts = 6 } = {}) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      const result = await page.evaluate(fn, arg);
      await sleep(settleMs);
      // Re-run the same evaluation as a stability probe: if the navigation had
      // torn down the context between goto and now, this second call throws
      // and the loop retries instead of returning data from a dying document.
      const confirm = await page.evaluate(fn, arg);
      return confirm ?? result;
    } catch (err) {
      lastErr = err;
      await sleep(600 + i * 400);
    }
  }
  throw lastErr;
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
          } catch (_) {
            // Best-effort dismissal: one dead selector must never abort a harvest.
          }
        });
      }
    });
  } catch (_) {
    // The page may navigate away mid-evaluation; dismissal is optional by design.
  }
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
