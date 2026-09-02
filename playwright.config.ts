import { defineConfig, devices } from '@playwright/test';

// Layout, accessibility and visual-regression checks against a local server that
// mirrors GitHub Pages (extensionless routes). Screenshots are pixel-diffed
// against baselines committed under tests/__screenshots__.

const PORT = 4173;

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
  expect: {
    // Small tolerance so font hinting / sub-pixel AA differences between machines
    // do not fail the visual diff; real layout shifts move far more than this.
    toHaveScreenshot: { maxDiffPixelRatio: 0.02, animations: 'disabled' }
  },
  snapshotPathTemplate: 'tests/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}',
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 375, height: 812 } } },
    { name: 'tablet', use: { viewport: { width: 834, height: 1112 } } },
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } }
  ],
  webServer: {
    command: `node scripts/serve.mjs ${PORT} .`,
    url: `http://localhost:${PORT}/index.html`,
    reuseExistingServer: true,
    timeout: 20000
  }
});
