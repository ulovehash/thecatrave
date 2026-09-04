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
export async function openRoute(page: Page, path: string) {
  await page.goto(path, { waitUntil: 'load' });
  // The Selector builds its chips after selector-data.json arrives and only
  // then enables the button, so that is the honest "ready" signal.
  if (await page.locator('#sel-go').count()) {
    await page.waitForSelector('#sel-go:not([disabled])', { timeout: 20_000 });
  }
}
