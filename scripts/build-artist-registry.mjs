// Build (or refresh) selector-artists.json: one row per distinct act in the
// catalogue, keyed by artistKey. Genres are filled in by the genre-* scripts;
// this step only maintains identity, counts and display names, and never drops
// genres already recorded.
//
//   node scripts/build-artist-registry.mjs

import fs from 'node:fs';
import { splitArtists, artistKey } from './artist-key.mjs';
import { isJunkArtist } from './parse-artist.mjs';

const REG = 'selector-artists.json';
const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const prev = fs.existsSync(REG) ? JSON.parse(fs.readFileSync(REG, 'utf8')) : {};

const reg = {};
for (const s of sets) {
  for (const disp of splitArtists(s.artist)) {
    const key = artistKey(disp);
    if (!key || isJunkArtist(disp) || isJunkArtist(key)) continue;
    const row = reg[key] || (reg[key] = { display: disp, sets: 0, broadcasters: [], genres: [], sources: [] });
    row.sets += 1;
    if (!row.broadcasters.includes(s.broadcaster)) row.broadcasters.push(s.broadcaster);
    // prefer the longest / most-capitalised display we have seen
    if (disp.length > row.display.length || (disp.length === row.display.length && disp > row.display)) row.display = disp;
  }
}

// carry over anything the genre scripts already worked out
let carried = 0;
for (const [key, row] of Object.entries(reg)) {
  const old = prev[key];
  if (old && old.genres && old.genres.length) {
    row.genres = old.genres;
    row.sources = old.sources || [];
    carried += 1;
  }
}

const keys = Object.keys(reg).sort((a, b) => reg[b].sets - reg[a].sets || a.localeCompare(b));
const ordered = {};
for (const k of keys) ordered[k] = reg[k];
fs.writeFileSync(REG, JSON.stringify(ordered, null, 0) + '\n');

const slots = Object.values(reg).reduce((n, r) => n + r.sets, 0);
console.log(`${REG}: ${keys.length} artists, ${slots} set-slots. carried ${carried} genre rows from previous build.`);
console.log('top 12:', keys.slice(0, 12).map(k => `${reg[k].display}(${reg[k].sets})`).join(', '));
