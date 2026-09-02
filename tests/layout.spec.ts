import { test, expect } from '@playwright/test';
import { routes } from './routes';

// Deterministic layout assertions. These catch the classes of regression that a
// string audit cannot see: horizontal overflow, clashing full-bleed colour
// bands, wrong responsive column counts, and layout-shift risk from images
// without intrinsic dimensions.

for (const route of routes) {
  test.describe(route.name, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(route.path, { waitUntil: 'networkidle' });
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

    test('full-bleed listening blocks do not clash with their section colour', async ({ page }) => {
      const clashes = await page.evaluate(() => {
        const bg = (el: Element) => getComputedStyle(el).backgroundColor;
        const out: string[] = [];
        for (const section of document.querySelectorAll('.article-section')) {
          if (!/tone-(cyan|yellow|coral)/.test(section.className)) continue;
          for (const block of section.querySelectorAll('.context-listening, .listening-block')) {
            if (bg(block) !== 'rgba(0, 0, 0, 0)' && bg(block) !== bg(section)) {
              out.push(`${section.id}: block ${bg(block)} vs section ${bg(section)}`);
            }
          }
        }
        return out;
      });
      expect(clashes).toEqual([]);
    });
  });
}

test('homepage article grid: 1 / 2 / 5 columns by viewport, no orphan', async ({ page }) => {
  const columnsAt = async (width: number) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });
    return page.evaluate(() => {
      const grid = document.querySelector('#articles .article-grid') as HTMLElement;
      return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    });
  };
  expect(await columnsAt(375)).toBe(1);
  expect(await columnsAt(834)).toBe(2);
  expect(await columnsAt(1440)).toBe(5);

  // On the widest layout all cards sit on one row.
  const rows = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('#articles .article-grid > article')];
    return new Set(cards.map(c => Math.round(c.getBoundingClientRect().top))).size;
  });
  expect(rows).toBe(1);
});

test('in-article Read Next grid: 1 / 2 / 4 columns by viewport', async ({ page }) => {
  const columnsAt = async (width: number) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/breakbeat-guide', { waitUntil: 'networkidle' });
    return page.evaluate(() => {
      const grid = document.querySelector('.read-next-grid') as HTMLElement;
      return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    });
  };
  expect(await columnsAt(375)).toBe(1);
  expect(await columnsAt(834)).toBe(2);
  expect(await columnsAt(1440)).toBe(4);
});
