// Rebuild every page, then run every `audit-*.mjs`. This is the zero-dependency
// core of `npm run check` and runs on any Node. The browser-based layers
// (html-validate, linkinator, Playwright, Unlighthouse) are orchestrated by
// `scripts/check.mjs`.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { build } from './scripts/build.mjs';

const failed = [];

try {
  build();
} catch {
  failed.push('build');
}

const audits = fs.readdirSync('.')
  .filter(file => /^audit-.*\.mjs$/.test(file) && file !== 'audit-all.mjs')
  .sort();

for (const file of audits) {
  process.stdout.write(`\n▸ ${file}\n`);
  try {
    execFileSync('node', [file], { stdio: 'inherit' });
  } catch {
    failed.push(file);
  }
}

if (failed.length) {
  console.error(`\n✗ ${failed.length} step(s) failed: ${failed.join(', ')}`);
  process.exit(1);
}
console.log(`\n✔ build + ${audits.length} audits passed.`);
