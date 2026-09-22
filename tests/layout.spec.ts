import { test, expect } from '@playwright/test';
import { routes } from './routes';
import { openRoute, pageErrors } from './open-route';

// Deterministic layout assertions. These catch the classes of regression that a
// string audit cannot see: horizontal overflow, clashing full-bleed colour
// bands, wrong responsive column counts, and layout-shift risk from images
// without intrinsic dimensions.
//
// One test per route and viewport, opening the page once. These used to be five
// tests sharing a beforeEach, so every page and its embeds loaded five times:
// each test took about 0.73s, all of it page load, and the checks themselves
// took milliseconds (1,104 tests, 9.1 minutes in CI on 2026-09-22). Each check
// is a soft assertion under its own step, so one failing check still reports
// the others instead of hiding them.

for (const route of routes) {
  test(`${route.name} layout`, async ({ page }) => {
    await openRoute(page, route.path);

    await test.step('no uncaught script errors', async () => {
      expect.soft(pageErrors(page), 'uncaught script errors').toEqual([]);
    });

    await test.step('no horizontal overflow', async () => {
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        const wide = [...document.querySelectorAll('body *')]
          .filter(el => el.getBoundingClientRect().right > doc.clientWidth + 1)
          .map(el => el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : ''));
        return { scrollW: doc.scrollWidth, clientW: doc.clientWidth, wide: [...new Set(wide)].slice(0, 5) };
      });
      expect.soft(overflow.scrollW, `horizontal overflow, offenders: ${overflow.wide.join(', ')}`).toBeLessThanOrEqual(overflow.clientW + 1);
    });

    await test.step('every raster image ships intrinsic width and height', async () => {
      const missing = await page.$$eval('img', imgs => imgs
        .filter(img => /\.(jpe?g|png|webp|avif)(\?|$)/i.test(img.getAttribute('src') || ''))
        .filter(img => !img.getAttribute('width') || !img.getAttribute('height'))
        .map(img => img.getAttribute('src')));
      expect.soft(missing, 'raster images without width/height').toEqual([]);
    });

    // A table is media, and media is separated from the prose around it. The
    // shared wrapper once carried a top margin only, so the paragraph after
    // every table sat 0px below its border on every guide. Measure the real
    // gap rather than trusting the declaration: the wrapper is full-bleed and
    // transformed, so a margin can be there and still not show up as space.
    await test.step('a paragraph after a table is not flush against it', async () => {
      const tight = await page.evaluate(() => {
        const out: string[] = [];
        for (const wrap of document.querySelectorAll('.genre-table-wrap')) {
          const next = wrap.nextElementSibling;
          if (!next) continue;
          const declared = parseFloat(getComputedStyle(wrap).marginBottom) || 0;
          // The smallest --media-space any page sets (dnb at 390px) is 28px.
          const required = Math.max(declared, 24);
          const gap = next.getBoundingClientRect().top - wrap.getBoundingClientRect().bottom;
          if (gap < required - 1) {
            out.push(`${wrap.getAttribute('aria-label')}: ${Math.round(gap)}px before ` +
              `${next.tagName.toLowerCase()}, wanted ${Math.round(required)}px`);
          }
        }
        return out;
      });
      expect.soft(tight, 'paragraph flush against a table').toEqual([]);
    });

    await test.step('full-bleed listening collections do not clash with their section colour', async () => {
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
      expect.soft(clashes, 'listening block clashes with its section colour').toEqual([]);
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

  // Wide desktop: four across, so the guides read as full rows rather than one
  // thin strip. What matters is that the last row is not a lone orphan, which
  // is what the count used to guarantee by putting everything on one line.
  const wide = await gridAt(1440);
  expect(wide.columns).toBe(4);
  const lastRow = wide.cardCount % wide.columns;
  expect(lastRow === 0 || lastRow > 1).toBe(true);
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
