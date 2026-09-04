import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { routes } from './routes';
import { openRoute } from './open-route';

// WCAG 2.1 A/AA scan on every route. Fails on serious or critical violations;
// moderate/minor are reported but not blocking so the gate stays actionable.

for (const route of routes) {
  test(`${route.name} has no serious accessibility violations`, async ({ page }, testInfo) => {
    await openRoute(page, route.path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      // Third-party players (Spotify, SoundCloud, YouTube, Bandcamp) render their
      // own DOM with their own a11y bugs; we can only fix our own markup.
      .exclude('iframe')
      .analyze();

    const blocking = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical');
    await testInfo.attach('axe-report.json', {
      body: JSON.stringify(results.violations, null, 2),
      contentType: 'application/json'
    });
    expect(blocking.map(v => `${v.id} (${v.nodes.length})`)).toEqual([]);
  });
}
