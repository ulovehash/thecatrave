import { artistKey } from './artist-key.mjs';
import { genresFromDesc } from './genre-text.mjs';
import { BROAD_GENRES } from './genre-refinement-core.mjs';

const MUSICIAN = /\b(?:dj|disc jockey|record producer|music producer|electronic musician|musician|musical duo|music duo|band|rapper|singer|composer|live act)\b/i;
const DISAMBIGUATOR = /\s*\((?:musician|dj|band|duo|producer|rapper|singer|composer|group|artist|performer)\)\s*$/i;

export function wikipediaPageGenres(page) {
  const extract = String(page?.extract || '').replace(/<[^>]+>/g, ' ');
  if (!MUSICIAN.test(extract.slice(0, 1200))) return [];
  // The lead is the evidence. Category lists are useful for discovery but can
  // describe collaborations and national scenes rather than the artist's
  // actual music, so they do not independently assign a genre.
  return genresFromDesc(extract.slice(0, 1800)).filter(genre => !BROAD_GENRES.has(genre));
}

export function chooseWikipediaPage(name, pages = []) {
  const wanted = artistKey(name);
  const exact = pages.filter(page => artistKey(String(page.title || '').replace(DISAMBIGUATOR, '')) === wanted);
  const qualified = exact.map(page => ({ page, genres: wikipediaPageGenres(page) }))
    .filter(row => row.genres.length);
  if (qualified.length !== 1) {
    return { status: qualified.length ? 'ambiguous' : 'not-found', exact: exact.length, qualified: qualified.length };
  }
  const { page, genres } = qualified[0];
  return {
    status: 'matched',
    title: page.title,
    pageid: page.pageid,
    genres,
    url: page.fullurl || `https://en.wikipedia.org/?curid=${page.pageid}`
  };
}

export function priorityArtists(sets, videoCache, parseArtist, splitArtists, isJunkArtist) {
  const rows = new Map();
  for (const set of sets) {
    const reparsed = parseArtist(videoCache[set.id]?.t || '', set.broadcaster);
    const names = splitArtists(reparsed || set.artist).filter(name => !isJunkArtist(name));
    for (const name of names) {
      const key = artistKey(name);
      if (!key) continue;
      const row = rows.get(key) || { key, name, views: 0, setIds: [] };
      row.views += set.views || 0;
      if (!row.setIds.includes(set.id)) row.setIds.push(set.id);
      rows.set(key, row);
    }
  }
  return [...rows.values()].sort((a, b) => b.views - a.views || b.setIds.length - a.setIds.length);
}
