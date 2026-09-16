import test from 'node:test';
import assert from 'node:assert/strict';
import {
  consensusGenres,
  discogsProfileGenres,
  exactOfficialLinks,
  officialPageGenres,
  youtubeGenreSignals
} from './genre-refinement-core.mjs';

test('accepts only official profile links whose slug matches the artist', () => {
  const rows = exactOfficialLinks(`
    https://dj-rush.bandcamp.com/music
    https://soundcloud.com/dj-rush
    https://soundcloud.com/boilerroomtv
    https://www.beatport.com/artist/dj-rush/123
  `, 'DJ Rush');
  assert.deepEqual(rows.map(row => row.source), ['bandcamp', 'soundcloud', 'beatport']);
});

test('extracts specific genres but drops broad electronic', () => {
  const html = '<meta name="keywords" content="Electronic, Breakbeat, UK Garage">';
  assert.deepEqual(officialPageGenres(html), ['breakbeat', 'uk garage']);
});

test('youtube evidence combines title, description and tags', () => {
  assert.deepEqual(youtubeGenreSignals({
    title: 'Breakbeat set: Artist', description: '#breakbeat electronic music', tags: ['breakbeat']
  }), ['breakbeat']);
});

test('discogs needs one unambiguous profile with repeated release styles', () => {
  const result = discogsProfileGenres([{
    id: '1', releases: 3, styleCounts: new Map([['Breakbeat', 2], ['House', 1]])
  }]);
  assert.deepEqual(result.genres, ['breakbeat']);
  assert.equal(discogsProfileGenres([
    { id: '1', releases: 3, styleCounts: new Map([['Breakbeat', 2]]) },
    { id: '2', releases: 3, styleCounts: new Map([['Techno', 2]]) }
  ]).reason, 'ambiguous');
});

test('a genre needs two independent sources', () => {
  assert.deepEqual(consensusGenres({ youtube: ['breakbeat'], discogs: ['breakbeat'], bandcamp: ['house'] }), [
    { genre: 'breakbeat', sources: ['youtube', 'discogs'] }
  ]);
  assert.deepEqual(consensusGenres({ youtube: ['breakbeat'] }), []);
});
