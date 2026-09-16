import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { artistKey, splitArtists } from './artist-key.mjs';

const TRUSTED = new Set(['manual', 'reviewed', 'wikidata', 'discogs']);
const CONTEXT = /^(?:s\s+|\d+\s*min\b|live\b|dj\b|sets?\b|mix\b|mixtape\b|at\b|in\b|on\b|from\b|returns?\b|sunrise\b|sunset\b|headline\b|closing\b|official\b|house\b|techno\b|disco\b|d['’]?n['’]?b\b|vinyl\b|wave\b|spring\b|ibiza\b|aka\b|f2f\b)/i;

export function embeddedKnownArtists(credit, registry) {
  const chunks = splitArtists(credit).map(artistKey);
  return Object.entries(registry).filter(([key, row]) => {
    if (!row.genres?.length || !(row.sources || []).some(source => TRUSTED.has(source))) return false;
    if (key.length < 5 || (!key.includes(' ') && key.length < 7)) return false;
    return chunks.some(chunk => chunk === key
      || (chunk.startsWith(`${key} `) && CONTEXT.test(chunk.slice(key.length + 1))));
  });
}

function main() {
  const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
  const registry = JSON.parse(fs.readFileSync('selector-artists.json', 'utf8'));
  const popular = [...sets]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, Math.ceil(sets.length * 0.1));
  const output = {};
  for (const set of popular) {
    const matches = embeddedKnownArtists(set.artist, registry);
    if (!matches.length) continue;
    output[set.id] = {
      genres: [...new Set(matches.flatMap(([, row]) => row.genres))],
      artists: matches.map(([, row]) => row.display)
    };
  }
  fs.writeFileSync('selector-title-artist-cache.json', `${JSON.stringify(output, null, 2)}\n`);
  console.log(`selector-title-artist-cache.json: ${Object.keys(output).length} popular sets matched to known artists.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
