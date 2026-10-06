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
  'build-awakenings-article.mjs',
  'build-coachella-article.mjs',
  'build-lollapalooza-article.mjs',
  'build-glastonbury-article.mjs',
  'build-sonar-article.mjs',
  'build-mysteryland-article.mjs',
  'build-primavera-sound-article.mjs',
  'build-best-spotify-playlists-article.mjs',
  'build-best-soundcloud-dj-mixes-article.mjs',
  'build-best-techno-mixes-article.mjs',
  'build-best-dj-sets-of-all-time-article.mjs',
  'build-why-dj-mag-top-100-never-changes-article.mjs',
  'build-best-techno-tracks-article.mjs',
  'build-best-trance-tracks-article.mjs',
  'build-best-electronic-albums-article.mjs',
  'build-best-house-music-playlists-spotify-article.mjs',
  'build-acid-house-article.mjs',
  'build-90s-rave-music-article.mjs',
  'build-trance-article.mjs',
  'build-hardstyle-article.mjs',
  'build-movement-detroit-article.mjs',
  'build-sziget-festival-article.mjs',
  'build-boomtown-festival-article.mjs',
  'build-monegros-desert-festival-article.mjs',
  'build-arc-music-festival-article.mjs',
  'build-airbeat-one-festival-article.mjs',
  'build-exit-festival-article.mjs',
  'build-grime-article.mjs',
  'build-europe-festivals-article.mjs',
  'build-us-festivals-article.mjs',
  'build-dekmantel-article.mjs',
  'build-winter-festivals-article.mjs',
  'build-snowbombing-article.mjs',
  'build-time-warp-article.mjs',
  'build-love-parade-article.mjs',
  'build-electric-forest-article.mjs',
  'build-defqon-1-article.mjs',
  'build-fusion-festival-article.mjs',
  'build-asia-festivals-article.mjs',
  'build-berghain-article.mjs',
  'build-fabric-london-article.mjs',
  'build-printworks-london-article.mjs',
  'build-pacha-ibiza-article.mjs',
  'build-ushuaia-ibiza-article.mjs',
  'build-best-clubs-in-europe-article.mjs',
  'build-paris-clubs-article.mjs',
  'build-barcelona-clubs-article.mjs',
  'build-amsterdam-clubs-article.mjs',
  'build-ibiza-clubs-article.mjs',
  'build-europe-clubbing-cities-article.mjs',
  'build-nye-festivals-article.mjs',
  'build-house-music-article.mjs',
  'build-techno-music-article.mjs',
  'build-nyc-clubs-article.mjs',
  'build-tokyo-clubs-article.mjs',
  'build-budapest-clubs-article.mjs',
  'build-belgrade-clubs-article.mjs',
  'build-prague-clubs-article.mjs',
  'build-vienna-clubs-article.mjs',
  'build-manchester-clubs-article.mjs',
  'build-bristol-clubs-article.mjs',
  'build-lisbon-clubs-article.mjs',
  'build-mexico-city-clubs-article.mjs',
  'build-tbilisi-clubs-article.mjs',
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
