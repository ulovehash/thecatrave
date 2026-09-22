import { defineConfig, devices } from '@playwright/test';

// Layout and accessibility checks against a local server that mirrors GitHub
// Pages (extensionless routes).

// `npm run check` starts the server itself on a free port and passes it here,
// so the two never race for 4173 or, worse, quietly reuse a server that is
// publishing a different checkout of this site.
const PORT = Number(process.env.CHECK_PORT) || 4173;

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry'
  },
  // The axe scan runs at mobile width only. WCAG results barely move with the
  // viewport, and running it at all three sizes cost 371s of test time per CI
  // run, at 2s per scan (2026-09-22). Layout checks still run at all three.
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 375, height: 812 } } },
    { name: 'tablet', use: { viewport: { width: 834, height: 1112 } }, testIgnore: /a11y\.spec\.ts$/ },
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } }, testIgnore: /a11y\.spec\.ts$/ }
  ],
  webServer: {
    command: `node scripts/serve.mjs ${PORT} .`,
    url: `http://localhost:${PORT}/index.html`,
    reuseExistingServer: true,
    timeout: 20000
  }
});
