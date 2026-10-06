import fs from 'node:fs';
import assert from 'node:assert/strict';
import {pages} from './pages.mjs';
import {clubGuideLinksFor, clubGuideVenuesIn} from './club-guide-directory.mjs';

const exceptions = new Set(['Patrick Miller', 'Karlovy Lázně']);
let count = 0;
let links = 0;
for (const page of pages.filter(page => page.kind === 'guide')) {
  const html = fs.readFileSync(page.file, 'utf8');
  const isClubGuide = /clubs|clubbing|berghain|fabric-london|pacha-ibiza|ushuaia-ibiza|printworks-london/.test(page.translationOf || page.path);
  if (!isClubGuide) continue;
  count++;
  assert.match(html, /https:\/\/www.google.com\/maps\/search\//, `${page.file}: no Google Maps links`);
  assert.match(html, /https:\/\/ra.co\/clubs\/\d+/, `${page.file}: no venue-specific RA links`);
  assert.doesNotMatch(html, /data-club-i18n="(?:transport|transportLabel)"/, `${page.file}: transport returned`);
  for (const block of html.matchAll(/<(?:span|aside) class="(?:club-guide-links|club-venue-planning)"[\s\S]*?<\/(?:span|aside)>/g)) {
    assert.doesNotMatch(block[0], /https:\/\/ra.co\/events\/[a-z]/, `${page.file}: city-calendar fallback`);
  }
  for (const row of html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
    const named = row[1].match(/<strong class="club-guide-name">([\s\S]*?)<\/strong>/);
    if (!named) continue;
    for (const venue of clubGuideVenuesIn(named[1])) {
      assert.ok(row[1].replaceAll('&amp;', '&').includes(venue.mapsUrl), `${page.file}: missing Maps for ${venue.venue}`);
      if (exceptions.has(venue.venue)) {
        assert.match(row[1], /data-club-i18n="unlisted"/);
      } else {
        assert.match(venue.eventsUrl, /^https:\/\/ra.co\/clubs\/\d+$/, `${venue.venue}: no verified RA venue`);
        assert.ok(row[1].includes(venue.eventsUrl), `${page.file}: missing RA for ${venue.venue}`);
        links++;
      }
    }
  }
}
assert.equal(clubGuideLinksFor('Un mot sur l’algorithme.'), null);
assert.deepEqual(clubGuideVenuesIn('Amnesia Cap d&#39;Agde').map(v => v.eventsUrl), ['https://ra.co/clubs/2242']);
assert.deepEqual(clubGuideVenuesIn('Hï, Pacha, Amnesia, DC-10, [UNVRS]').map(v => v.venue), ['Hï', 'Pacha', 'Amnesia', 'DC-10', '[UNVRS]']);
assert.equal(clubGuideLinksFor('Drumsheds').eventsUrl, 'https://ra.co/clubs/218103');
assert.equal(clubGuideLinksFor('Yu Yu Cine Club').eventsUrl, 'https://ra.co/clubs/273862');
assert.equal(clubGuideLinksFor('Instant-Fogas Complex').eventsUrl, 'https://ra.co/clubs/141350');
console.log(`Verified Maps + venue-specific RA coverage on ${count} club guides; ${links} table venue links. Two explicitly labelled unverified RA listings.`);
