import assert from 'node:assert/strict';
import test from 'node:test';
import { releaseFacts, chooseCandidate } from './genres-from-catalog-dump.mjs';

const target = new Set(['dj test']);
const release = `
<release id="1"><artists><artist><id>42</id><name>DJ Test</name><anv></anv></artist></artists>
<extraartists><artist><id>7</id><name>Wrong Person</name></artist></extraartists>
<genres><genre>Electronic</genre></genres><styles><style>Broken Beat</style></styles></release>`;

test('extracts only main artists and canonical target keys', () => {
  assert.deepEqual(releaseFacts(release, target), [{
    key: 'dj test', id: '42', name: 'DJ Test', literal: true,
    genres: ['Electronic'], styles: ['Broken Beat']
  }]);
});

test('requires repeated evidence and maps Broken Beat to breakbeat', () => {
  const candidate = {
    id: '42', literal: true, releases: 3,
    genreCounts: new Map([['Electronic', 3]]),
    styleCounts: new Map([['Broken Beat', 3]])
  };
  assert.equal(chooseCandidate([candidate]).genres[0], 'breakbeat');
});

test('rejects conflicting same-name profiles', () => {
  const profile = (id, style) => ({
    id, literal: false, releases: 3,
    genreCounts: new Map([['Electronic', 3]]),
    styleCounts: new Map([[style, 3]])
  });
  assert.deepEqual(chooseCandidate([profile('1', 'Techno'), profile('2', 'House')]).genres, []);
});

test('rejects multiple profiles even when one has the literal unsuffixed name', () => {
  const profile = (id, literal) => ({
    id, literal, releases: 3,
    genreCounts: new Map([['Electronic', 3]]),
    styleCounts: new Map([['Techno', 3]])
  });
  assert.deepEqual(chooseCandidate([profile('1', true), profile('2', false)]).genres, []);
});
