// Roll the genre-in-title signal (SCR / MixMix TV / Rinse FM write the genre
// straight into the video title) up to the artist. A genre sticks to an act if
// it shows up in at least two of their sets, or in their only set. Writes into
// selector-artists.json with source "title".
//
//   node scripts/build-artist-registry.mjs
//   node scripts/genres-title-rollup.mjs

import fs from 'node:fs';
import { splitArtists, artistKey } from './artist-key.mjs';
import { genreFromTitle } from './parse-artist.mjs';
import { VOCAB } from './genre-vocab.mjs';

const REG = 'selector-artists.json';
const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const reg = JSON.parse(fs.readFileSync(REG, 'utf8'));
const cache = fs.existsSync('selector-videos-cache.json')
  ? JSON.parse(fs.readFileSync('selector-videos-cache.json', 'utf8'))
  : {};

// artistKey -> Map(genre -> count of that artist's sets carrying it)
const tally = new Map();
for (const s of sets) {
  const title = cache[s.id] ? cache[s.id].t : '';
  const g = genreFromTitle(title, s.broadcaster);
  if (!g.length) continue;
  for (const disp of splitArtists(s.artist)) {
    const key = artistKey(disp);
    if (!key) continue;
    const m = tally.get(key) || tally.set(key, new Map()).get(key);
    for (const genre of g) m.set(genre, (m.get(genre) || 0) + 1);
  }
}

let touched = 0;
for (const [key, m] of tally) {
  const row = reg[key];
  if (!row) continue;
  const threshold = row.sets <= 2 ? 1 : 2;
  const picked = [...m.entries()].filter(([, n]) => n >= threshold).map(([g]) => g);
  if (!picked.length) continue;
  const merged = [...new Set([...(row.genres || []), ...picked])].sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b)).slice(0, 4);
  row.genres = merged;
  if (!row.sources.includes('title')) row.sources.push('title');
  touched += 1;
}

fs.writeFileSync(REG, JSON.stringify(reg, null, 0) + '\n');
const withGenres = Object.values(reg).filter(r => r.genres && r.genres.length).length;
console.log(`title-rollup: set genres on ${touched} artists. registry now ${withGenres}/${Object.keys(reg).length} tagged.`);
