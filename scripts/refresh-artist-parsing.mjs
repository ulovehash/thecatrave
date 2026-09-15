// Refresh artist names from cached video titles without rebuilding or dropping
// catalogue rows. Narrow a repair with ONLY_BROADCASTER and/or TITLE_PREFIX.
//
//   ONLY_BROADCASTER=Dekmantel TITLE_PREFIX='Dekmantel Ten -' \
//     node scripts/refresh-artist-parsing.mjs
import fs from 'node:fs';
import { parseArtist } from './parse-artist.mjs';
import { artistKeys } from './artist-key.mjs';

const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const videos = JSON.parse(fs.readFileSync('selector-videos-cache.json', 'utf8'));
const registry = process.env.REQUIRE_KNOWN === '1'
  ? JSON.parse(fs.readFileSync('selector-artists.json', 'utf8'))
  : {};
const onlyBroadcaster = process.env.ONLY_BROADCASTER || '';
const titlePrefix = process.env.TITLE_PREFIX || '';
let changed = 0;

for (const set of sets) {
  const video = videos[set.id];
  if (!video?.t) continue;
  if (onlyBroadcaster && set.broadcaster !== onlyBroadcaster) continue;
  if (titlePrefix && !video.t.startsWith(titlePrefix)) continue;
  const artist = parseArtist(video.t, set.broadcaster);
  if ((!artist && process.env.ALLOW_EMPTY !== '1') || artist === set.artist) continue;
  if (process.env.REQUIRE_KNOWN === '1') {
    const keys = artistKeys(artist);
    if (!keys.length || !keys.every(key => registry[key]?.genres?.length)) continue;
  }
  set.artist = artist;
  changed += 1;
}

fs.writeFileSync('selector-data.json', JSON.stringify(sets) + '\n');
console.log(`Refreshed artist parsing on ${changed} sets; catalogue remains ${sets.length} sets.`);
