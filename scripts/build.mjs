// Rebuild every page from its generator. Zero-dependency, any Node version.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

export const generators = [
  'build-cutout-assets.mjs',
  'build-breakbeat-article.mjs',
  'build-jungle-article.mjs',
  'build-uk-article.mjs',
  'build-bass-music-article.mjs',
  'build-dubstep-article.mjs',
  'build-home.mjs'
].filter(file => fs.existsSync(file));

export function build() {
  for (const file of generators) {
    process.stdout.write(`▸ ${file}\n`);
    execFileSync('node', [file], { stdio: 'inherit' });
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) build();
