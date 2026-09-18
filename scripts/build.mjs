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
  'build-german-electronic-article.mjs',
  'build-bass-music-article.mjs',
  'build-dubstep-article.mjs',
  'build-dnb-article.mjs',
  'build-uk-garage-article.mjs',
  'build-find-new-music-article.mjs',
  'build-boiler-room-article.mjs',
  'build-burning-man-article.mjs',
  'build-berlin-clubs-article.mjs',
  'build-london-clubs-article.mjs',
  'build-live-dj-sets-article.mjs',
  'build-tomorrowland-article.mjs',
  'build-edc-article.mjs',
  'build-creamfields-article.mjs',
  'build-parookaville-article.mjs',
  'build-ultra-article.mjs',
  'build-untold-article.mjs',
  'build-coachella-article.mjs',
  'build-lollapalooza-article.mjs',
  'build-glastonbury-article.mjs',
  'build-sonar-article.mjs',
  'build-mysteryland-article.mjs',
  'build-primavera-sound-article.mjs',
  // after the English generators: a translation's Read Next reads its own
  // language's catalogue, but its reading times are taken from the pages the
  // localized generator itself writes, so it only has to precede the indexes
  'build-localized-articles.mjs',
  'build-selector.mjs',
  // after every article generator: it reads their reading times and dates
  'build-articles-page.mjs',
  // after every article generator: it reads their dates, descriptions and art
  'scripts/build-feed.mjs',
  // after every article generator: it reads their reading times
  'build-home.mjs',
  // last, because its dates come from the pages the generators above produce,
  // the home pages included
  'scripts/build-sitemap.mjs',
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
