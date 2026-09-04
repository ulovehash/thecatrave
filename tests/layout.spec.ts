import { test, expect } from '@playwright/test';
import { routes } from './routes';
import { openRoute } from './open-route';

// Deterministic layout assertions. These catch the classes of regression that a
// string audit cannot see: horizontal overflow, clashing full-bleed colour
// bands, wrong responsive column counts, and layout-shift risk from images
// without intrinsic dimensions.

for (const route of routes) {
  test.describe(route.name, () => {
    test.beforeEach(async ({ page }) => {
      await openRoute(page, route.path);
    });

    test('no horizontal overflow', async ({ page }) => {
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        const wide = [...document.querySelectorAll('body *')]
          .filter(el => el.getBoundingClientRect().right > doc.clientWidth + 1)
          .map(el => el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : ''));
        return { scrollW: doc.scrollWidth, clientW: doc.clientWidth, wide: [...new Set(wide)].slice(0, 5) };
      });
      expect(overflow.scrollW, `offenders: ${overflow.wide.join(', ')}`).toBeLessThanOrEqual(overflow.clientW + 1);
    });

    test('every raster image ships intrinsic width and height', async ({ page }) => {
      const missing = await page.$$eval('img', imgs => imgs
        .filter(img => /\.(jpe?g|png|webp|avif)(\?|$)/i.test(img.getAttribute('src') || ''))
        .filter(img => !img.getAttribute('width') || !img.getAttribute('height'))
        .map(img => img.getAttribute('src')));
      expect(missing).toEqual([]);
    });

    test('full-bleed listening collections do not clash with their section colour', async ({ page }) => {
      const clashes = await page.evaluate(() => {
        const bg = (el: Element) => getComputedStyle(el).backgroundColor;
        const paper = bg(document.body); // the neutral --paper ground
        const out: string[] = [];
        for (const section of document.querySelectorAll('.article-section')) {
          if (!/tone-(cyan|yellow|coral)/.test(section.className)) continue;
          for (const block of section.querySelectorAll('.context-listening')) {
            const c = bg(block);
            // Match the section, be transparent, or be the neutral paper cutout.
            if (c !== 'rgba(0, 0, 0, 0)' && c !== bg(section) && c !== paper && !/\blistening-paper\b/.test(block.className)) {
              out.push(`${section.id}: block ${c} vs section ${bg(section)}`);
            }
          }
        }
        return out;
      });
      expect(clashes).toEqual([]);
    });
  });
}

test('homepage article grid: 1 / 2 columns then one full row, no orphan', async ({ page }) => {
  const gridAt = async (width: number) => {
    await page.setViewportSize({ width, height: 900 });
    await openRoute(page, '/');
    return page.evaluate(() => {
      const grid = document.querySelector('#articles .article-grid') as HTMLElement;
      const cards = [...document.querySelectorAll('#articles .article-grid > article')];
      return {
        columns: getComputedStyle(grid).gridTemplateColumns.split(' ').length,
        cardCount: cards.length,
        rows: new Set(cards.map(c => Math.round(c.getBoundingClientRect().top))).size
      };
    });
  };
  expect((await gridAt(375)).columns).toBe(1);
  expect((await gridAt(834)).columns).toBe(2);

  // Wide desktop: the auto-fit grid puts every guide card on one row with no
  // half-width orphan, however many guides the catalog holds.
  const wide = await gridAt(1440);
  expect(wide.columns).toBe(wide.cardCount);
  expect(wide.rows).toBe(1);
});

test('in-article Read Next grid: 1 / 2 / 4 columns by viewport', async ({ page }) => {
  const columnsAt = async (width: number) => {
    await page.setViewportSize({ width, height: 900 });
    await openRoute(page, '/breakbeat-guide');
    return page.evaluate(() => {
      const grid = document.querySelector('.read-next-grid') as HTMLElement;
      return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    });
  };
  expect(await columnsAt(375)).toBe(1);
  expect(await columnsAt(834)).toBe(2);
  expect(await columnsAt(1440)).toBe(4);
});
