// Pull the artist (and, where the channel writes it into the title, the genre)
// out of a set's video title. Rules are per-broadcaster with a generic fallback.

import { matchTag, VOCAB } from './genre-vocab.mjs';

export const NOT_A_SET = /\b(in conversation( with)?|legendary season|documentary|trailer|teaser|recap|aftermovie|announcement|behind the scenes|q&a|panel discussion|elevator pitch|talks .+ and)\b/i;

const COUNTRY = /\s*[([][^)\]]{0,30}(JP|NL|DE|UK|US|BR|FR|IT|ES|AR|KR|SW|Osaka|Tokyo|Berlin|London|Seoul)[^)\]]*[)\]]\s*$/i;
const TRAIL = /\s*[–—-]?\s*\b(dj[ -]?set|live set|live in session|live|b2b set|closing set|opening set|full set|guest ?mix|guestmix|in-?studio( live)?|selects?)\b[\s.]*$/i;
const DATEY = /\s+\d{1,2}[./-]\d{1,2}([./-]\d{2,4})?\s*$|\s+\d{1,2}(st|nd|rd|th)?\s+\w+\s+\d{4}\s*$|\s+\d{4}\s*$/i;
const PARENS_TAIL = /\s*[([][^)\]]*[)\]]\s*$/;
const INVIS = /[​-‏‪-‮⁦-⁩﻿]/g;
const FLAGS = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F7E0}|⚪️?|\u{1F525}/gu;
// leftovers that survive the per-channel split: a trailing broadcaster/festival
// tag, or a leading show name.
const TAG_TAIL = /\s*[|/]\s*@?(kiosk ?radio|kiosk|the lot ?radio|the lot|thelotradio|h[öo]r|rinse ?fm|rinse|mixmix( ?tv)?|seoul community radio|scr|nts( radio)?|mixmag|boiler ?room)\b.*$/i;
const AT_TAIL = /\s+(?:at|x|@)\s+@?[\w'’.-]+(?:\s+[\w'’.-]+){0,3}\s+festival\b.*$/i;
const SHOW_HEAD = /^(the grime show|grime show)\s*:\s*/i;

const clean = s => {
  let x = String(s).replace(INVIS, '').replace(FLAGS, ' ');
  if (SHOW_HEAD.test(x)) x = x.replace(SHOW_HEAD, '').split(/\s+with\s+/i)[0];
  for (let i = 0; i < 3; i += 1) {
    x = x.replace(TAG_TAIL, '').replace(AT_TAIL, '').replace(COUNTRY, '')
      .replace(PARENS_TAIL, '').replace(TRAIL, '').replace(DATEY, '');
  }
  return x.replace(/\s{2,}/g, ' ').replace(/^[\s|/:–—-]+|[\s|/:–—-]+$/g, '').trim();
};

// Tokens that are not artists: broadcasters, festivals, sponsor activations,
// show titles, bare genre words, numeric fragments. Blanked, so the set keeps
// no artist rather than a wrong one.
const JUNK_EXACT = new Set([
  'jim beam', 'horst festival', 'scr', 'friends', 'more', 'more!', 'music', 'house', 'techno',
  'disco', 'disco)', 'jazz', 'funk', 'bass', 'rnb', 'hiphop', 'hip hop', 'afters', 'digging',
  'breakfast', 'butter x', 'house mix', 'techno set', 'bass set', 'live drum', 'session',
  'rinse', 'rinse fm', 'mixmag', 'mixmix', 'mixmixtv', 'boiler room', 'boiler room weekender',
  'nts radio', 'seoul community radio', 'seoul communitu radio', 'the lot radio at horst festival',
  'the dj shannon show', "that good sh*t radio", 'summer school radio', 'obey records',
  'records before rent', 'records before rent human head records', 'headstream radio',
  'slow motion records', 'live melodic house', '9 august', '131bpm', '3024 dovercourt takeover',
  'w paris – opéra', 'w paris - opéra', 'scr highballerz', 'dour festival', 'dekmantel festival',
  'present perfect festival', 'ava festival', 'movement detroit', 'sugar mountain festival',
  'sugar mountain', 'appelsap festival', 'gost zvuk', 'grand street sounds', 'love letters',
  'pique-nique am', 'opcd week', 'red bull music academy', 'rbma lisboa', 'rekorderlig',
  'asian pop festival 2024 @ club chroma', 'demicon stage vol.2', 'zackhammer night',
  'hajodaze', 'scr highballerz', 'the lot radio', 'in appreciation of lyricism',
  'sounds you send in', 'boiler room 001', 'boiler room 002', 'boiler room 004',
  'boiler room 005', '3.14', 'nyege nyege festival', 'nyege nyege',
  'beatport', "beatport: link'd sessions", 'beatport link livestream',
  'beatport link', 'the residency', 'dessert live stream', 'link livestream',
  'absolut nye 2020 global celebration', 'ukraine', 'the block', 'reconnect',
  'any act', 'band',
]);
const JUNK_RE = /^(boiler ?room( \d| [a-z]+ \d| \d)|budweiser |ballantine|guinness |eristoff|skol beats|smirnoff|corona |dj mag|@?thelotradio\b|@\w|\| |ultra korea|ultra ?nova$|highballerz\b|.* takeover$|.* dj mix$|.* radio show$)/i;

export function isJunkArtist(name) {
  const s = String(name || '').trim().toLowerCase();
  if (!s || s.length < 2) return true;
  if (JUNK_EXACT.has(s)) return true;
  if (JUNK_RE.test(s)) return true;
  if (/\bfestival\b/.test(s) && s.split(/\s+/).length <= 5) return true;
  if (matchTag(s)) return true;
  return false;
}

// Is this chunk just a run of genre / filler words (a label, not a name)?
const FILLER = /^(set|club|vinyl|dance|dancefloor|beats?|rave|roller|selects?|special|instrumental|jump|up|live|show|music)$/i;
const isGenreWords = p => {
  const s = String(p).replace(/\bset\b/gi, '').replace(/\s{2,}/g, ' ').trim();
  if (!s) return true;
  if (matchTag(s)) return true;
  return s.split(/\s+/).every(w => matchTag(w) || FILLER.test(w));
};
const isGenreish = chunk => {
  const parts = String(chunk).split(/\s*[,/]\s*|\s+&\s+|\s+and\s+/i).map(p => p.trim()).filter(Boolean);
  return parts.length > 0 && parts.every(isGenreWords);
};

function afterLast(str, sep) {
  const i = str.toLowerCase().lastIndexOf(sep.toLowerCase());
  return i < 0 ? str : str.slice(i + sep.length);
}
function beforeFirst(str, sep) {
  const i = str.toLowerCase().indexOf(sep.toLowerCase());
  return i < 0 ? str : str.slice(0, i);
}

function generic(title, broadcaster) {
  let s = title.split(/\s+[@|·]\s+|\s+[|/]\s+|\s+[-–—]\s+|:\s+/)[0];
  if (broadcaster) s = s.replace(new RegExp(`^${broadcaster.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\-|]?\\s*`, 'i'), '');
  return clean(s);
}

// "<show> with <artist>" / "<show> w/ <artist>" -> artist
function takeAfterWith(s) {
  if (/ with /i.test(s)) return afterLast(s, ' with ');
  if (/ w\/ /i.test(s)) return afterLast(s, ' w/ ');
  return s;
}

export function parseArtist(title, broadcaster) {
  const t = String(title || '').replace(INVIS, '').trim();
  if (!t) return '';
  let a;

  if (broadcaster === 'Boiler Room') {
    if (t.includes('|')) {
      const parts = t.split('|').map(p => p.trim()).filter(Boolean);
      const nonBR = parts.filter(p => !/^boiler\s*room\b/i.test(p) && !/^bbc\b/i.test(p));
      a = clean(nonBR[0] || parts[0]);
    } else if (/^boiler\s*room\b/i.test(t)) {
      const m = /^boiler\s*room[^:]*:\s*(.+)$/i.exec(t);
      a = clean(m ? m[1].split(/[:–—]| - /)[0] : t.replace(/^boiler\s*room\b[\s:-]*/i, '').split(/[:–—|]| - /)[0]);
    } else if (/\sboiler\s*room\b/i.test(t)) {
      a = clean(t.split(/\s+boiler\s*room\b/i)[0]);   // "<artist> Boiler Room x <festival> <year>"
    } else {
      a = clean(t.split(/[:–—|]| - /)[0]);
    }
  } else if (broadcaster === 'The Lot Radio') {
    let s = t.split(/\s*\|?\s*@\s*the\s*lot\s*radio|\s+@thelotradio|\s+@ ?/i)[0];
    a = clean(takeAfterWith(s));
  } else if (broadcaster === 'Kiosk Radio') {
    let s = beforeFirst(t, '@ kiosk radio');
    if (/ w\/ /i.test(s)) s = afterLast(s, ' w/ ');
    a = clean(s);
  } else if (broadcaster === 'HÖR') {
    let s = t.split(/\s*\|\s*h[öo]r\b/i)[0];
    s = s.split(/\s+\/\s+/)[0];            // older "<artist> / Month DD / 5pm-6pm"
    if (/ - /.test(s)) s = afterLast(s, ' - ');   // "<crew> - <artist>"
    a = clean(s);
  } else if (broadcaster === 'Seoul Community Radio') {
    const segs = t.split(/ l | \| /i).map(x => x.trim()).filter(Boolean);
    let s = segs[0] || t;
    if (/x scr$/i.test(s) && segs[1] && / - /.test(segs[1])) s = afterLast(segs[1], ' - ');
    else if (/ - /.test(s)) {
      const [l, r] = [beforeFirst(s, ' - '), afterLast(s, ' - ')];
      s = isGenreish(l) ? r : l;
    }
    a = clean(s);
  } else if (broadcaster === 'STVOL TV') {
    let s = t.split(/\s*\|\s*/)[0].replace(/^stvol\.?\s*tv\s*[:–—-]?\s*/i, '');
    a = clean(s);
  } else if (broadcaster === 'Elevator Music') {
    let s = t.split(/\s*[–—-]\s*elevator music|\s*\(/i)[0].replace(/^@/, '').replace(/@(\w)/g, '$1');
    a = clean(s);
  } else if (broadcaster === 'Beatport') {
    let s = t
      .replace(/\s*\|\s*@?beatport\b.*$/i, '')
      .replace(/\s+(dj set|full set|live set|live)\s*[–—-].*$/i, '')          // "X DJ set - <series/event>"
      .replace(/\s*[–—-]\s*(miller mix|creamfields|the block|sunset|psy-?techno|monegros|dune|reconnect|link\b|absolut|dessert|solidarity)\b.*$/i, '')
      .replace(/\s*\|\s*(cinch presents|rockstar energy|traktor|denondjtv|@?creamfields)\b.*$/i, '')
      .replace(TAG_TAIL, '');
    const segs = s.split(/\s*\|\s*/).map(x => x.trim()).filter(Boolean);
    s = segs.find(x => /\S+\s+(dj set|full set)\b/i.test(x) || /\bb2b\b/i.test(x)) || segs[0] || s;
    s = s.replace(/^@/, '').replace(/@(\w)/g, '$1');
    if (/^[A-Za-z][A-Za-z0-9]*$/.test(s) && /[a-z][A-Z0-9]/.test(s)) {   // de-camelCase a @handle
      s = s.replace(/([a-z])([A-Z0-9])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
    }
    a = clean(s);
  } else if (broadcaster === "L'Atelier de Musique") {
    let s = t.replace(/\s*#[\w-]+/g, '');
    if (/ by /i.test(s)) s = afterLast(s, ' by ');
    s = s.split(/\s+[–—-]\s+|\s*[:|/]\s*| l['’]atelier| episode\b/i)[0];
    a = clean(s);
  } else if (broadcaster === 'MixMix TV') {
    let s = t.split(/\s*[|/]\s*mixmix|\s*[|/]\s*ximxim| @ ?ximxim|\s*\|\s*(hyper|darklight|orange club)\b/i)[0];
    if (/ : /.test(s) && isGenreish(beforeFirst(s, ' : '))) s = afterLast(s, ' : ');
    s = s.split(/\s*\|\s*/)[0];
    a = clean(s);
  } else if (broadcaster === 'Rinse FM') {
    a = clean(t.split(/\s*\|\s*(live from|rinse )/i)[0]);
  } else if (broadcaster === 'Mixmag') {
    a = clean(t.split(/\s*\|\s*mixmag/i)[0]);
  } else if (broadcaster === 'Bangkok Community Radio') {
    a = clean(t.split(/\s+-\s+\d|\s*\|\s*bangkok/i)[0]);
  } else if (broadcaster === 'The Mudd Show') {
    a = clean(t.split(/\s*\|\s*themuddshow/i)[0]);
  } else if (broadcaster === 'Cercle') {
    a = clean(t.split(/\s+(?:live at|live in|live from|at|for)\s+(?:parque|cercle|the |a |an )/i)[0]);
  } else if (broadcaster === 'My Analog Journal') {
    let s = takeAfterWith(t.split(/\s*[|/]\s*/)[0]);
    s = s.split(/:\s/)[0];
    a = clean(s);
  } else if (broadcaster === 'Boxout.fm') {
    const noTags = t.replace(/\s*#[\w-]+/g, '').replace(/\s*\[[^\]]*\]\s*/g, ' ');
    const parts = noTags.split(/\s+-\s+/).map(p => p.trim()).filter(p => p && !/boxout/i.test(p));
    a = clean((parts.length > 1 ? parts[1] : parts[0] || noTags).split(/\s*[|/]\s*/)[0]);
  } else {
    a = generic(t, broadcaster);
  }

  if (!a || (broadcaster && new RegExp(`^${broadcaster}$`, 'i').test(a)) || matchTag(a)) {
    a = clean(generic(t, broadcaster)) || clean(t);
  }
  return isJunkArtist(a) ? '' : a;
}

// ---- genre straight from the title, for channels that write it there --------

const phraseToGenres = raw => {
  const out = [];
  for (const chunk of String(raw).toLowerCase().split(/\s*[,/&|]\s*|\s+and\s+|\s*\+\s*/)) {
    const c = chunk.trim().replace(/\bset\b/g, '').trim();
    if (!c) continue;
    let g = matchTag(c);
    if (!g) {
      const w = c.split(/\s+/);
      for (let n = Math.min(3, w.length); n >= 1 && !g; n -= 1) g = matchTag(w.slice(-n).join(' '));
    }
    if (g && !out.includes(g)) out.push(g);
  }
  return out.sort((x, y) => VOCAB.indexOf(x) - VOCAB.indexOf(y));
};

export function genreFromTitle(title, broadcaster) {
  const t = String(title || '');
  let phrase = '';
  if (broadcaster === 'Rinse FM') {
    phrase = (t.match(/\|\s*([^|]+?)\s+set\b/i) || [])[1] || '';
    if (/multi-?genre/i.test(phrase)) phrase = '';
  } else if (broadcaster === 'Seoul Community Radio') {
    const head = t.split(/ l | \| /i)[0] || '';
    phrase = (head.match(/([A-Za-z][A-Za-z ,&]*?)\s+set\b/i) || [])[1]
      || (head.match(/-\s*([A-Za-z][A-Za-z ,&]*?)\s+set\b/i) || [])[1] || '';
  } else if (broadcaster === 'MixMix TV') {
    if (/ : /.test(t)) phrase = beforeFirst(t, ' : ');
  } else {
    return [];
  }
  return phrase ? phraseToGenres(phrase) : [];
}
