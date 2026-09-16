import { artistKey } from './artist-key.mjs';
import { declaredGenresInTitle, genresFromDesc } from './genre-text.mjs';
import { matchTag, VOCAB } from './genre-vocab.mjs';

export const BROAD_GENRES = new Set([
  'electronic', 'pop', 'rock', 'alternative', 'punk', 'metal', 'reggae',
  'latin', 'folk', 'classical', 'blues', 'country', 'global'
]);

const canonical = values => [...new Set((values || []).map(matchTag).filter(Boolean))]
  .filter(genre => !BROAD_GENRES.has(genre))
  .sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));

const decode = value => String(value || '')
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const slugKey = value => artistKey(decodeURIComponent(String(value || '')).replace(/[-_]+/g, ' '));

export function exactOfficialLinks(description, artist) {
  const wanted = artistKey(artist);
  if (!wanted) return [];
  const found = String(description || '').match(/https?:\/\/[^\s<>()]+/gi) || [];
  const output = [];
  for (const raw of found) {
    let url;
    try { url = new URL(raw.replace(/[),.;!?]+$/, '')); } catch { continue; }
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    const parts = url.pathname.split('/').filter(Boolean);
    let identity = '';
    let source = '';
    if (host.endsWith('.bandcamp.com')) {
      identity = slugKey(host.slice(0, -'.bandcamp.com'.length));
      source = 'bandcamp';
    } else if (host === 'soundcloud.com' && parts[0] && !['discover', 'stream', 'you', 'search'].includes(parts[0].toLowerCase())) {
      identity = slugKey(parts[0]);
      source = 'soundcloud';
    } else if (host.endsWith('beatport.com') && parts[0]?.toLowerCase() === 'artist' && parts[1]) {
      identity = slugKey(parts[1]);
      source = 'beatport';
    }
    if (!source || identity !== wanted) continue;
    const href = url.toString();
    if (!output.some(row => row.url === href)) output.push({ source, url: href });
  }
  return output;
}

export function youtubeGenreSignals(row) {
  if (!row || row.missing) return [];
  return canonical([
    ...declaredGenresInTitle(row.title || ''),
    ...genresFromDesc(row.description || ''),
    ...(row.tags || []).flatMap(tag => [matchTag(tag), ...genresFromDesc(tag)])
  ]);
}

export function officialPageGenres(html) {
  const source = String(html || '').slice(0, 2_000_000);
  const zones = [];
  for (const match of source.matchAll(/<meta\b[^>]*(?:name|property)=["'](?:keywords|description|og:description)["'][^>]*content=["']([^"']*)["'][^>]*>/gi)) {
    zones.push(decode(match[1]));
  }
  for (const match of source.matchAll(/<meta\b[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["'](?:keywords|description|og:description)["'][^>]*>/gi)) {
    zones.push(decode(match[1]));
  }
  for (const match of source.matchAll(/["'](?:genre|genres|tag|tags)["']\s*:\s*["']([^"']{2,80})["']/gi)) {
    zones.push(decode(match[1]));
  }
  for (const match of source.matchAll(/href=["'][^"']*\/(?:tag|genre)\/([^"'/?#]+)[^"']*["']/gi)) {
    zones.push(decodeURIComponent(match[1]).replace(/[-_]+/g, ' '));
  }
  return canonical(zones.flatMap(genresFromDesc));
}

export function discogsProfileGenres(profiles, minimumReleases = 2) {
  const passing = [];
  for (const profile of profiles || []) {
    if (profile.releases < minimumReleases) continue;
    const ranked = [...profile.styleCounts].sort((a, b) => b[1] - a[1]);
    const genres = canonical(ranked
      .filter(([, count]) => count / profile.releases >= 0.34)
      .map(([style]) => style));
    if (genres.length) passing.push({ id: profile.id, releases: profile.releases, genres });
  }
  if (passing.length !== 1) return { genres: [], profiles: passing.length, reason: passing.length ? 'ambiguous' : 'no-profile' };
  return { ...passing[0], profiles: 1 };
}

export function consensusGenres(signals) {
  const votes = new Map();
  for (const [source, genres] of Object.entries(signals || {})) {
    for (const genre of canonical(genres)) {
      const row = votes.get(genre) || new Set();
      row.add(source);
      votes.set(genre, row);
    }
  }
  return [...votes]
    .filter(([, sources]) => sources.size >= 2)
    .sort((a, b) => b[1].size - a[1].size || VOCAB.indexOf(a[0]) - VOCAB.indexOf(b[0]))
    .slice(0, 3)
    .map(([genre, sources]) => ({ genre, sources: [...sources] }));
}
