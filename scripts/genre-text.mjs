// Pull canonical genres out of free prose (a video description, an artist bio).
// Used by genres-from-desc.mjs (the scraper) and apply-genres.mjs (the merge).

import { matchTag, VOCAB } from './genre-vocab.mjs';

const PHRASES = [...new Set([...VOCAB, 'drum & bass', 'drum and bass', 'dnb', 'd&b', 'jump up',
  'liquid', 'uk garage', 'speed garage', '2 step', 'tech-house', 'deep-house', 'nu disco',
  'hip hop', 'hiphop', 'post-punk', 'coldwave', 'darkwave', 'ghettotech', 'baltimore club',
  'jersey club', 'footwork', 'juke', 'afro house', 'amapiano', 'gqom', 'baile funk', 'kuduro',
  'reggaeton', 'dembow', 'psy trance', 'hard techno', 'dub techno', 'acid house', 'italo'])];

export const genresFromDesc = raw => {
  const zone = String(raw).toLowerCase();
  const out = [];
  for (const h of zone.match(/#[a-z][a-z0-9]+/g) || []) {          // hashtags first (cleanest)
    const g = matchTag(h.slice(1));
    if (g && !out.includes(g)) out.push(g);
  }
  for (const p of PHRASES) {
    const re = new RegExp('\\b' + p.replace(/[-&]/g, '[-& ]').replace(/ /g, '[ -]') + '\\b', 'i');
    if (re.test(zone)) {
      const g = matchTag(p);
      if (g && !out.includes(g)) out.push(g);
    }
  }
  return out.sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b)).slice(0, 4);
};
