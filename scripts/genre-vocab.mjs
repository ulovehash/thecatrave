// Controlled genre vocabulary for The Selector. Last.fm tags are a folksonomy
// ("seen live", "british", "10s", ...), so a tag only counts if it maps to one
// of these canonical genres. Order here is the display order.

export const VOCAB = [
  'house', 'deep house', 'tech house', 'progressive house', 'afro house', 'minimal',
  'techno', 'hard techno', 'dub techno', 'hypnotic techno', 'hardgroove',
  'electro', 'acid', 'disco', 'nu-disco', 'italo disco', 'boogie', 'funk', 'soul', 'jazz',
  'breakbeat', 'big beat', 'jungle', 'drum and bass', 'dubstep', 'uk garage', '2-step',
  'bassline', 'grime', 'uk bass', 'footwork', 'juke', 'ghetto house', 'jersey club', 'baltimore club',
  'gqom', 'amapiano', 'afrobeats', 'baile funk', 'kuduro', 'dembow', 'reggaeton', 'dancehall', 'dub',
  'ambient', 'downtempo', 'trip-hop', 'idm', 'experimental',
  'trance', 'psytrance', 'hardcore', 'gabber', 'hardstyle',
  'ebm', 'industrial', 'new wave', 'synth-pop',
  'hip-hop', 'r&b', 'singeli',
  'electronic', 'pop', 'rock', 'alternative', 'punk', 'metal', 'reggae',
  'cumbia', 'salsa', 'latin', 'folk', 'classical', 'blues', 'country', 'global'
];

const CANON = new Set(VOCAB);

// tag (already lowercased/trimmed) -> canonical genre
const ALIAS = new Map(Object.entries({
  'dnb': 'drum and bass', 'd&b': 'drum and bass', 'drum & bass': 'drum and bass',
  'drum n bass': 'drum and bass', 'drum \'n\' bass': 'drum and bass', 'liquid dnb': 'drum and bass',
  'liquid funk': 'drum and bass', 'neurofunk': 'drum and bass', 'jump up': 'drum and bass',
  'ukg': 'uk garage', 'uk garage / 2-step': 'uk garage', 'garage': 'uk garage', 'speed garage': 'uk garage',
  '2 step': '2-step', 'two step': '2-step',
  'hip hop': 'hip-hop', 'hiphop': 'hip-hop', 'rap': 'hip-hop',
  'jazzy hip-hop': 'hip-hop', 'jazzy hip hop': 'hip-hop', 'cloud rap': 'hip-hop',
  'pop rap': 'hip-hop', 'boom bap': 'hip-hop', 'gangsta': 'hip-hop',
  'rnb': 'r&b', 'r and b': 'r&b', 'rhythm and blues': 'r&b',
  'contemporary r&b': 'r&b', 'rnb/swing': 'r&b', 'neo soul': 'soul',
  'tech-house': 'tech house', 'deep-house': 'deep house', 'progressive-house': 'progressive house',
  'afro-house': 'afro house', 'afrohouse': 'afro house', 'afro tech': 'afro house',
  'house music': 'house', 'club': 'electronic', 'dance': 'electronic',
  'electro house': 'house', 'euro house': 'house', 'hard house': 'house',
  'minimal techno': 'minimal', 'minimal house': 'minimal',
  'detroit techno': 'techno', 'berlin techno': 'techno', 'peak time techno': 'techno',
  'melodic techno': 'techno', 'raw techno': 'techno', 'acid techno': 'acid',
  'hard-techno': 'hard techno', 'schranz': 'hard techno',
  'dub-techno': 'dub techno',
  'nu disco': 'nu-disco', 'nudisco': 'nu-disco',
  'italo': 'italo disco', 'italo-disco': 'italo disco',
  'acid house': 'acid', 'acid-house': 'acid',
  'breaks': 'breakbeat', 'broken beat': 'breakbeat', 'breakcore': 'breakbeat', 'nu skool breaks': 'breakbeat', 'bigbeat': 'big beat',
  'psy trance': 'psytrance', 'psychedelic trance': 'psytrance', 'goa': 'psytrance', 'goa trance': 'psytrance',
  'progressive trance': 'trance',
  'happy hardcore': 'hardcore', 'uk hardcore': 'hardcore', 'gabba': 'gabber', 'frenchcore': 'gabber',
  'trip hop': 'trip-hop', 'triphop': 'trip-hop',
  'downbeat': 'downtempo', 'chillout': 'downtempo', 'lounge': 'downtempo',
  'intelligent dance music': 'idm', 'braindance': 'idm',
  'ghettotech': 'ghetto house', 'ghetto tech': 'ghetto house', 'juke': 'juke', 'footwork': 'footwork',
  'jersey-club': 'jersey club', 'baltimore-club': 'baltimore club', 'club music': 'jersey club',
  'afro beat': 'afrobeats', 'afrobeat': 'afrobeats',
  'funky house': 'house', 'soulful house': 'deep house', 'jackin house': 'house',
  'electronica': 'electronic', 'electronic music': 'electronic', 'leftfield': 'experimental', 'avant-garde': 'experimental',
  'new-wave': 'new wave', 'newwave': 'new wave', 'synthpop': 'synth-pop', 'synth pop': 'synth-pop', 'synthwave': 'synth-pop',
  'body music': 'ebm', 'electronic body music': 'ebm',
  'raggae': 'reggae', 'roots reggae': 'reggae',
  'trap': 'hip-hop', 'bruk': 'uk bass', 'liquid': 'drum and bass',
  'liquid dnb': 'drum and bass', 'jump up roller dancefloor': 'drum and bass',
  'funk brasileiro': 'baile funk', 'brazilian funk': 'baile funk', 'funk carioca': 'baile funk',
  'deep techno': 'techno', 'deep tech': 'techno', 'groovy techno': 'techno',
  'bass music': 'uk bass', 'breakbeat hardcore': 'breakbeat', 'oldschool': 'breakbeat',
  'groovy house': 'house', 'organic house': 'afro house',
  'indie pop': 'pop', 'j-pop': 'pop', 'jpop': 'pop', 'city pop': 'pop', 'dance-pop': 'pop',
  'indie rock': 'rock', 'psychedelic rock': 'rock', 'art rock': 'rock', 'post rock': 'rock',
  'shoegaze': 'alternative', 'americana': 'country',
  'folk rock': 'folk', 'folk-rock': 'folk', 'hard rock': 'rock',
  'hardcore punk': 'punk', 'post-punk': 'punk',
  'heavy metal': 'metal',
  'salsa music': 'salsa', 'salsa dura': 'salsa', 'chicha': 'cumbia',
  'urbano latino': 'latin', 'música mexicana': 'latin', 'musica mexicana': 'latin',
  'música tropical': 'latin', 'musica tropical': 'latin', 'latin music': 'latin',
  'samba': 'latin', 'bossa nova': 'latin', 'mpb': 'latin', 'forró': 'latin', 'forro': 'latin',
  'rumba': 'latin', 'flamenco': 'latin', 'boogaloo': 'latin',
  'world': 'global', 'world music': 'global', 'worldwide': 'global', 'raï': 'global', 'rai': 'global',
  'zouk': 'global', 'african': 'global', 'funky': 'funk'
}));

const STRIP = /[\s._/-]+/g;

export function matchTag(raw) {
  const t = String(raw || '').toLowerCase().trim();
  if (!t) return null;
  if (CANON.has(t)) return t;
  if (ALIAS.has(t)) return ALIAS.get(t);
  const squashed = t.replace(STRIP, ' ').trim();
  if (CANON.has(squashed)) return squashed;
  if (ALIAS.has(squashed)) return ALIAS.get(squashed);
  return null;
}

// pick up to `max` canonical genres from a list of {name,count} Last.fm tags
export function tagsToGenres(tags, max = 4) {
  const out = [];
  for (const { name, count } of tags) {
    if (count != null && Number(count) < 8) continue;
    const g = matchTag(name);
    if (g && !out.includes(g)) out.push(g);
    if (out.length >= max) break;
  }
  return out.sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));
}
