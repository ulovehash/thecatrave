import type { Page } from '@playwright/test';

// How every spec opens a page.
//
// Not `waitUntil: 'networkidle'`: the guides embed Bandcamp, SoundCloud and
// YouTube players, and those iframes keep talking to their own servers for as
// long as they are on screen. The network never goes quiet, so the hook simply
// burns its 30s and fails a page that rendered correctly in under a second.
//
// Wait for our own document instead, and then for the one route whose UI is
// built from a fetch rather than shipped in the HTML.
//
// Uncaught errors are collected from the moment the page is opened, because a
// page whose script threw is a broken page however correct its markup and
// layout are. Every check in this repository once passed on a site whose
// analytics block failed to parse: html-validate reads the script as text, the
// audits read the HTML as a string, and these tests were measuring boxes.
//
// Only `pageerror` is listened for, never console errors. The guides embed
// YouTube, Bandcamp and SoundCloud, and those frames log warnings and failed
// requests that belong to somebody else's code.
//
// Third-party requests are aborted. Waiting for `load` also waits for every
// player iframe, and those were most of each test's 0.7s: the layout and axe
// checks measure our own boxes and already exclude iframes. Google Fonts stays
// reachable so text is measured in the real typeface, not a fallback.
const FONT_HOSTS = /^(fonts\.googleapis\.com|fonts\.gstatic\.com)$/;
const thrown = new WeakMap<Page, string[]>();

export function pageErrors(page: Page): string[] {
  return thrown.get(page) || [];
}

export async function openRoute(page: Page, path: string) {
  if (!thrown.has(page)) {
    const found: string[] = [];
    thrown.set(page, found);
    page.on('pageerror', error => found.push(String(error.message || error)));
    await page.route(url => {
      const host = url.hostname;
      return host !== 'localhost' && host !== '127.0.0.1' && !FONT_HOSTS.test(host);
    }, route => route.abort());
  }
  await page.goto(path, { waitUntil: 'load' });
  // The Selector builds its chips after selector-data.json arrives and only
  // then enables the button, so that is the honest "ready" signal.
  if (await page.locator('#sel-go').count()) {
    await page.waitForSelector('#sel-go:not([disabled])', { timeout: 20_000 });
  }
}
