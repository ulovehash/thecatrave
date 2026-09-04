// Shared artist identity: split a credit string into individual acts, and
// normalise each to a stable lookup key. Used by the registry, the genre
// lookups, and apply-genres.mjs so they all agree on what "one artist" is.

const SPLIT = /\s+(?:b2b|b3b|vs\.?|versus|x|&|\+|,|\/|feat\.?|ft\.?|featuring|with|w\/|invites|invite|presents|presenta|pres\.?|\bhosts\b)\s+/i;

// "A b2b B & C" -> ["A", "B", "C"]  (display-cased, trimmed)
export function splitArtists(raw) {
  return String(raw || '')
    .split(SPLIT)
    .map(s => s.replace(/\s{2,}/g, ' ').trim())
    .filter(s => s && s.length > 1);
}

const COUNTRY_TAIL = /\s*[([][^)\]]{0,40}\b(JP|NL|DE|UK|USA?|BR|FR|IT|ES|AR|KR|SW|SE|CA|AU|BE|PT|PL|CH|MX|CO|CL|Osaka|Tokyo|Seoul|Berlin|London|Paris|Bristol|Bogotá|Amsterdam)\b[^)\]]*[)\]]\s*$/i;

// normalise for lookup: lowercase, strip accents, drop trailing country/city
// tags and "live"/"dj set" cruft, collapse punctuation and spacing.
export function artistKey(name) {
  let s = String(name || '').normalize('NFKD').replace(/[̀-ͯ]/g, '');
  s = s.toLowerCase();
  for (let i = 0; i < 2; i += 1) s = s.replace(COUNTRY_TAIL, '');
  s = s
    .replace(/\b(live|dj set|live set|all night long|b2b set|hybrid set|club set)\b/g, ' ')
    .replace(/[._]+/g, ' ')
    .replace(/[^a-z0-9À-￿ /-]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/^[\s/-]+|[\s/-]+$/g, '')
    .trim();
  return s;
}

// convenience: credit string -> unique lookup keys
export function artistKeys(raw) {
  const out = [];
  for (const a of splitArtists(raw)) {
    const k = artistKey(a);
    if (k && !out.includes(k)) out.push(k);
  }
  return out;
}
