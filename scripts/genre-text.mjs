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

// A genre named in a title, but only where the title is declaring it rather
// than happening to contain the word. "SOLARDO naughty tech house set in the
// Lab LDN" declares one; "Shawn Dub" and "ACID B4RBIE" and "Disco Curandera"
// do not, and a looser match tags all three wrongly.
//
// Three shapes count, and nothing else:
//   <genre> set / mix / dj set / selection
//   (<genre>) or [<genre>]
//   <genre> at the very start, followed by a dash, colon or pipe
//
// Measured across the catalogue: the loose matcher finds 3,105 untagged sets
// and is wrong on roughly half of them, mostly artist names. This finds 857
// and the sample is clean.
export function declaredGenresInTitle(title) {
  const text = String(title || '');
  if (!text) return [];
  const vocab = (Array.isArray(VOCAB) ? VOCAB : Object.keys(VOCAB))
    .slice().sort((a, b) => b.length - a.length);   // longest first: "tech house" before "house"
  const out = [];
  for (const genre of vocab) {
    const escaped = genre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const declared = new RegExp(
      `(?:\\b${escaped}\\s+(?:dj\\s+)?(?:set|mix|mixtape|selection|records?|vinyl\\s+set)\\b)` +
      `|(?:[(\\[]\\s*${escaped}\\s*[)\\]])` +
      `|(?:^${escaped}\\s*[-:|])`, 'i');
    if (declared.test(text) && !out.includes(genre)) out.push(genre);
  }
  return out.slice(0, 3);
}

// Some channels publish editorial, genre-led titles rather than an artist-led
// title. These channel-specific zones avoid treating artist names such as
// Soul Clap, Funk Tribu or Acid Mothers Temple as genre evidence.
export function contextualGenresInTitle(title, broadcaster) {
  const text = String(title || '');
  let zone = '';
  if (broadcaster === 'My Analog Journal') {
    if (/\s+with\s+/i.test(text)) zone = text.split(/\s+with\s+/i)[0];
    else if (/\b(?:on vinyl|vinyl set|records?|grooves?)\b/i.test(text)) zone = text;
  } else if (broadcaster === 'Bresh') {
    const parts = text.split(/\|/).map(part => part.trim());
    const marker = parts.findIndex(part => /\bbresh\s+mix\b/i.test(part));
    if (marker >= 0) zone = parts.slice(marker + 1).join(' ');
  } else if (broadcaster === 'Keep Hush') {
    zone = text.split(/\b(?:on keep hush|keep hush live)\b/i)[0]
      .split(/\bDJs?\b/i).slice(1).join(' ');
  } else if (broadcaster === 'Intercell') {
    zone = text.split(/\s[-|]\s/).slice(1).join(' ');
  } else if (broadcaster === 'Boiler Room') {
    // Boiler Room's right-hand event label sometimes states the style:
    // "SYSTEM: Amapiano London", "Singeli Vibes". Never inspect the artist
    // credit on the left of the pipe here.
    zone = text.split('|').slice(1).join(' ');
  } else if (broadcaster === 'NTS Radio') {
    if (/\bNTS GUIDE TO\b/i.test(text)) zone = text;
    else if (/\bNTS RUSH MIX\b/i.test(text)) return ['electronic'];
  }
  if (!zone) return declaredGenresInTitle(text);
  const contextual = genresFromDesc(zone).filter(genre => {
    const escaped = genre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return !new RegExp(`\\b${escaped}['’]s\\b`, 'i').test(zone);
  });
  return [...new Set([...declaredGenresInTitle(text), ...contextual])].slice(0, 4);
}
