// Rebuild every page from its generator. Zero-dependency, any Node version.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { pages } from '../pages.mjs';

// Ordered, because order is a real constraint the page list cannot express:
// cut-out assets come first, and the home page comes last because it reads the
// finished articles for their reading times. Coverage is asserted below, so a
// page added to pages.mjs cannot be left unbuilt.
export const generators = [
  'build-cutout-assets.mjs',
  'build-breakbeat-article.mjs',
  'build-jungle-article.mjs',
  'build-uk-article.mjs',
  'build-bass-music-article.mjs',
  'build-dubstep-article.mjs',
  'build-dnb-article.mjs',
  'build-uk-garage-article.mjs',
  'build-selector.mjs',
  // last, because its dates come from the pages the generators above produce
  'build-sitemap.mjs',
  'build-home.mjs'
].filter(file => fs.existsSync(file));

export function build() {
  const missing = pages.filter(page => !generators.includes(page.generator));
  if (missing.length) {
    throw new Error(`pages.mjs lists pages with no generator in the build order: ${missing.map(p => `${p.name} (${p.generator})`).join(', ')}`);
  }
  for (const file of generators) {
    process.stdout.write(`▸ ${file}\n`);
    execFileSync('node', [file], { stdio: 'inherit' });
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) build();
