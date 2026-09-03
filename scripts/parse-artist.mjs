// Pull the artist name out of a set's video title. Each broadcaster has its own
// title convention, so the rules are per-channel with a generic fallback.

const TRAIL = /\s*[–—-]?\s*\b(dj set|live set|live|b2b set|all ?night ?long|closing set|opening set|full set|set)\b\s*$/i;
const DATEY = /\s+\d{1,2}[./]\d{1,2}([./]\d{2,4})?\s*$/;
const PARENS = /\s*[([][^)\]]*[)\]]\s*$/;

// obvious non-sets: talks, promos, recaps. Callers can also gate on this.
export const NOT_A_SET = /\b(in conversation( with)?|legendary season|documentary|trailer|teaser|recap|aftermovie|announcement|weekender promo|mixtape release|album trailer|behind the scenes|q&a|panel|interview)\b/i;

const strip = s => s
  .replace(PARENS, '')
  .replace(TRAIL, '')
  .replace(DATEY, '')
  .replace(/\s{2,}/g, ' ')
  .trim();

function boilerRoom(title) {
  // "ARTIST | Boiler Room ..."  or  "Boiler Room ... | ARTIST"
  if (title.includes('|')) {
    const parts = title.split('|').map(p => p.trim()).filter(Boolean);
    const nonBR = parts.filter(p => !/^boiler\s*room\b/i.test(p) && !/^bbc\b/i.test(p));
    if (nonBR.length) return strip(nonBR[0]);
    return strip(parts[0]);
  }
  // "Boiler Room: ARTIST" / "Boiler Room CITY: ARTIST"
  const m = /^boiler\s*room[^:]*:\s*(.+)$/i.exec(title);
  if (m) return strip(m[1].split(/[:–—]| - /)[0]);
  // "ARTIST at/live from Boiler Room ..."
  const a = /^(.+?)\s+(?:at|live (?:from|at|@)|@)\s+boiler\s*room\b/i.exec(title);
  if (a) return strip(a[1]);
  return strip(title.split(/[:–—|]| - /)[0]);
}

function generic(title, broadcaster) {
  let s = title.split(/\s+[@|·–—]\s+|\s+-\s+|:\s+/)[0].trim();
  s = s.replace(new RegExp(`^${broadcaster.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\-|]?\\s*`, 'i'), '').trim();
  return strip(s);
}

export function parseArtist(title, broadcaster) {
  const t = String(title || '').trim();
  if (!t) return '';
  let artist;
  if (broadcaster === 'Boiler Room') artist = boilerRoom(t);
  else artist = generic(t, broadcaster);
  // never return the broadcaster name or an empty string
  if (!artist || new RegExp(`^${broadcaster}$`, 'i').test(artist)) return strip(t);
  return artist;
}
