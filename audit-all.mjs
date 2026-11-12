// Rebuild every page, then run every `audit-*.mjs`. This is the zero-dependency
// core of `npm run check` and runs on any Node. The browser-based layers
// (html-validate, linkinator, Playwright, Unlighthouse) are orchestrated by
// `scripts/check.mjs`.

import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { build } from './scripts/build.mjs';

const failed = [];
// --quiet prints only the last 40 lines of a failing audit and, from a passing
// one, its warnings and its open-defect lines cut to id and age, so open
// defects still print their age on every run (CLAUDE.md). A passing run
// otherwise prints about 60 KB, which an agent reading the output pays for on
// every later message. CI and the pre-push hook call it without the flag.
const quiet = process.argv.includes('--quiet');
const keptLines = text => text.split('\n')
  .map(line => line.match(/^\s*open: (\S+) — open (\d+) day/) ? line.replace(/^(\s*open: \S+ — open \d+ day\(s\)).*$/, '$1') : line)
  .filter(line => /^\s*open: /.test(line) || /\bwarn/i.test(line));

try {
  build({ quiet });
} catch {
  failed.push('build');
}

const audits = fs.readdirSync('.')
  .filter(file => /^audit-.*\.mjs$/.test(file) && file !== 'audit-all.mjs')
  .sort();

for (const file of audits) {
  if (!quiet) process.stdout.write(`\n▸ ${file}\n`);
  try {
    if (quiet) {
      const run = spawnSync('node', [file], { encoding: 'utf8', maxBuffer: 64 << 20 });
      const out = `${run.stdout || ''}${run.stderr || ''}`;
      if (run.status !== 0) {
        process.stdout.write(`\n▸ ${file} FAILED\n${out.trimEnd().split('\n').slice(-40).join('\n')}\n`);
        failed.push(file);
        continue;
      }
      const kept = keptLines(out);
      if (kept.length) process.stdout.write(`\n▸ ${file}\n${kept.join('\n')}\n`);
    } else execFileSync('node', [file], { stdio: 'inherit' });
  } catch {
    failed.push(file);
  }
}

if (failed.length) {
  console.error(`\n✗ ${failed.length} step(s) failed: ${failed.join(', ')}`);
  process.exit(1);
}
console.log(`\n✔ build + ${audits.length} audits passed.`);
