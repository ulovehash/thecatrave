import { existsSync, readdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';
import { routes } from './routes';

// Full-page pixel-diff against committed baselines, per route and per viewport
// project (mobile / tablet / desktop).
//
// Arm this layer once on Node 20 with:  npm run check:layout -- --update-snapshots
// then commit tests/__screenshots__/. Update baselines the same way for
// intentional design changes and review the image diff in the PR.

const baselineDir = new URL('./__screenshots__', import.meta.url);
const armed = existsSync(baselineDir) && readdirSync(baselineDir).length > 0;

test.describe('visual regression', () => {
  test.skip(!armed && !!process.env.CI, 'no baselines committed yet — run --update-snapshots once and commit tests/__screenshots__/');

  for (const route of routes) {
    test(`${route.name} matches its visual baseline`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: 'networkidle' });
      // Neutralise third-party embeds: their content is outside our control and
      // would make the diff flaky. Their layout boxes are asserted in layout.spec.
      await page.addStyleTag({ content: 'iframe{visibility:hidden!important}' });
      await page.evaluate(() => (document as any).fonts?.ready);
      await expect(page).toHaveScreenshot(`${route.name}.png`, { fullPage: true });
    });
  }
});
