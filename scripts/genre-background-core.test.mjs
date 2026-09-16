import assert from 'node:assert/strict';
import test from 'node:test';
import {
  chooseExactArtist,
  promoteVerifiedCandidates,
  scoreSet,
  validationMetrics
} from './genre-background-core.mjs';
import { contextualGenresInTitle } from './genre-text.mjs';
import { embeddedKnownArtists } from './build-title-artist-cache.mjs';
import { classifyStoreResults } from './genres-from-public-store.mjs';

test('accepts only one exact MusicBrainz identity', () => {
  assert.equal(chooseExactArtist('DJ Test', [{ id: '1', name: 'DJ Test', score: 100 }]).mbid, '1');
  assert.equal(chooseExactArtist('DJ Test', [
    { id: '1', name: 'DJ Test', score: 100 }, { id: '2', name: 'DJ Test', score: 99 }
  ]).status, 'ambiguous');
});

test('canonicalises broken beat and auto-accepts explicit strong metadata', () => {
  const identities = new Map([['artist', { status: 'matched', mbid: 'a' }]]);
  const metadata = new Map([['a', { tags: [{ tag: 'Broken Beat', count: 7, genre_mbid: 'g' }] }]]);
  const result = scoreSet({ artist: 'Artist' }, identities, metadata, { tags: [], description: [] });
  assert.deepEqual(result.genres, ['breakbeat']);
  assert.equal(result.decision, 'auto-accept');
});

test('reports validation agreement without an LLM', () => {
  const metrics = validationMetrics([
    { expected: ['house'], result: { decision: 'auto-accept', genres: ['house'] } },
    { expected: ['techno'], result: { decision: 'auto-accept', genres: ['house'] } }
  ]);
  assert.equal(metrics.agreement, 0.5);
});

test('promotes only independently corroborated genres', () => {
  const promoted = promoteVerifiedCandidates([{
    id: 'set-1',
    result: {
      decision: 'auto-accept',
      evidence: [
        { genre: 'Broken Beat', confidence: 0.96, sources: ['open-metadata', 'youtube-tag'] },
        { genre: 'techno', confidence: 0.64, sources: ['youtube-tag'] },
        { genre: 'ambient', confidence: 0.92, sources: ['open-metadata'] }
      ]
    }
  }]);
  assert.deepEqual(promoted['set-1'].genres, ['breakbeat']);
});

test('reads genre-led channel titles without mistaking artist names for genres', () => {
  assert.deepEqual(
    contextualGenresInTitle('Percussive Dub, Spiritual Jazz & Psychedelic Grooves with Millie McKee', 'My Analog Journal'),
    ['jazz', 'dub']
  );
  assert.deepEqual(contextualGenresInTitle('Funk Tribu at Intercell x BCCO | ADE 2023', 'Intercell'), []);
  assert.deepEqual(contextualGenresInTitle("SOUL CLAP all-vinyl set in The Lab Detroit", 'Mixmag'), []);
  assert.deepEqual(
    contextualGenresInTitle('BRESH MIX | PRIMAVERA | REGGAETON NEW & OLDSCHOOL - DEMBOW', 'Bresh'),
    ['dembow', 'reggaeton']
  );
});

test('recovers a known artist from a malformed credit without matching a longer stranger name', () => {
  const registry = {
    'miss monique': { display: 'Miss Monique', genres: ['house'], sources: ['manual'] },
    maxwell: { display: 'Maxwell', genres: ['r&b'], sources: ['wikidata'] }
  };
  assert.deepEqual(
    embeddedKnownArtists('Miss Monique at The Concourse Project', registry).map(([key]) => key),
    ['miss monique']
  );
  assert.deepEqual(embeddedKnownArtists('Joe Armon Jones & Maxwell Owin', registry), []);
});

test('accepts only one exact public-store artist identity', () => {
  assert.deepEqual(classifyStoreResults('DJ Test', [
    { artistName: 'DJ Test', artistId: 1, primaryGenreName: 'Hip-Hop/Rap' }
  ]).genres, ['hip-hop']);
  assert.equal(classifyStoreResults('DJ Test', [
    { artistName: 'DJ Test', artistId: 1, primaryGenreName: 'House' },
    { artistName: 'DJ Test', artistId: 2, primaryGenreName: 'Techno' }
  ]).status, 'ambiguous');
  assert.deepEqual(classifyStoreResults('Artist', [
    { artistName: 'Artist', artistId: 3, primaryGenreName: 'Electronic' }
  ]).genres, ['electronic']);
});
