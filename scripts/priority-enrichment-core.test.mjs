import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseWikipediaPage, wikipediaPageGenres } from './priority-enrichment-core.mjs';

test('accepts one exact musical page with an explicit specific genre', () => {
  const result = chooseWikipediaPage('Example Act', [{
    pageid: 12,
    title: 'Example Act (musician)',
    extract: 'Example Act is a British electronic musician and DJ known for breakbeat and UK garage.'
  }]);
  assert.equal(result.status, 'matched');
  assert.deepEqual(result.genres, ['breakbeat', 'uk garage']);
});

test('does not turn broad electronic into a fabricated subgenre', () => {
  assert.deepEqual(wikipediaPageGenres({ extract: 'Example is an electronic musician and record producer.' }), []);
});

test('rejects namesakes and non-musicians', () => {
  const result = chooseWikipediaPage('Mercury', [
    { pageid: 1, title: 'Mercury', extract: 'Mercury is a chemical element.' },
    { pageid: 2, title: 'Mercury Records', extract: 'Mercury Records is a record label.' }
  ]);
  assert.equal(result.status, 'not-found');
});

test('rejects two qualifying exact-name musician pages', () => {
  const result = chooseWikipediaPage('Example', [
    { pageid: 1, title: 'Example (musician)', extract: 'Example is a house DJ and musician.' },
    { pageid: 2, title: 'Example (DJ)', extract: 'Example is a techno DJ and producer.' }
  ]);
  assert.equal(result.status, 'ambiguous');
});
