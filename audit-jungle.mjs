import fs from 'node:fs';

const html = fs.readFileSync('jungle-music-guide.html', 'utf8');
const css = fs.readFileSync('thecatrave-article.css', 'utf8');
const essentialListeningClasses = [...html.matchAll(/<aside class="([^"]+)"[^>]*>[\s\S]*?<\/aside>/g)]
  .filter(match => match[0].includes('<p class="article-kicker">Essential listening</p>'))
  .map(match => match[1]);
const placedAfterInSection = (sectionId, textNeedle, playerId) => {
  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const textIndex = html.indexOf(textNeedle, sectionStart);
  const playerIndex = html.indexOf(`id="${playerId}"`, sectionStart);
  return sectionStart >= 0 && textIndex > sectionStart && playerIndex > textIndex && playerIndex < sectionEnd;
};

const checks = {
  seoTitleUpdated: html.includes('<title>What Is Jungle Music? History, Sound &amp; Essential Tracks</title>'),
  intentLedH1: html.includes('<h1>What Is Jungle Music? A Guide to Its History, Sound and Culture.</h1>'),
  classicYoutubeEmbeds: (html.match(/class="classic-youtube-embed"/g) || []).length,
  youtubeFallbacks: (html.match(/class="youtube-local-fallback"/g) || []).length,
  labelledSpotifyFeatures: (html.match(/class="spotify-feature article-listening-feature article-media-band article-media-band-full/g) || []).length,
  allEssentialListeningFullBleed: essentialListeningClasses.length === 7 && essentialListeningClasses.every(classes => /(?:article-media-band-full|context-listening-full)/.test(classes)),
  exactLegendaryTrackEntries: (html.match(/id="jungle-track-(?:valley|renegade-snares|incredible|inner-city-life|babylon)"/g) || []).length,
  exactLegendaryTrackEmbeds: (html.match(/open\.spotify\.com\/embed\/track\/(?:3BDFLAvxTaWHpWgHkFpMsJ|72G1pFJW0poqDNUlGbzJOh|2fq7lLTvRHZjUPqh5a20n5|4qw7xhiy8rWGDeffgSj7Ez|05KgAsHP0YmiJ0KWP6Axf0)/g) || []).length,
  unifiedListeningLabel: !/Listen while you read|Jungle Mania listening/i.test(html),
  contextualLegendaryTrackPlacement:
    placedAfterInSection('underground-emergence', 'Valley of the Shadows', 'jungle-track-valley') &&
    placedAfterInSection('jungle-mania', 'Incredible', 'jungle-track-incredible') &&
    placedAfterInSection('pioneers', '<strong>Goldie</strong>', 'jungle-track-inner-city-life') &&
    placedAfterInSection('labels', '<strong>Moving Shadow</strong>', 'jungle-track-renegade-snares') &&
    placedAfterInSection('essential-tracks', '“Babylon”', 'jungle-track-babylon'),
  reusableSoundcloudFeature: html.includes('class="soundcloud-feature article-listening-feature article-media-band article-media-band-full article-media-band-cyan"'),
  contrastingJungleManiaListening: html.includes('aria-labelledby="jungle-listening-jungle-mania"') && html.includes('article-media-band-cyan'),
  lanaRemixSoundcloud: html.includes('soundcloud.com/thecatrave/art-deco-jungle-remix'),
  lanaRemixBandcamp: html.includes('track=3379956979') && html.includes('you-so-ghetto-lana-del-rey-jungle-remix'),
  awolFlyerAligned: /<figure class="[^"]*\bawol-flyer\b[^"]*\bfloating-image\b|<figure class="[^"]*\bfloating-image\b[^"]*\bawol-flyer\b/.test(html),
  sharedFigures: [...html.matchAll(/<figure class="[^"]*\bfloating-image\b[^"]*">[\s\S]*?<\/figure>/g)].every(match => /decoding="async"/.test(match[0])),
  sharedTables: [...html.matchAll(/<div class="genre-table-wrap"[\s\S]*?<\/table><\/div>/g)].every(match => /role="region"/.test(match[0]) && /tabindex="0"/.test(match[0]) && /<th scope="col">/.test(match[0])),
  directAnswerBeforeContents: html.indexOf('JUNGLE MUSIC DEFINITION') < html.indexOf('id="contents"'),
  faqInContents: html.includes('href="#faq">Jungle music FAQ</a>'),
  faqQuestions: (html.match(/<section class="[^"]*\bfaq-section\b[^"]*" id="faq">[\s\S]*?<details/g) || []).length === 1 && (html.match(/<summary>/g) || []).length === 6,
  faqSchema: html.includes('"@type":"FAQPage"') && (html.match(/"@type":"Question"/g) || []).length === 6,
  mobileMediaStack: css.includes('@media (max-width: 760px)') && css.includes('.article-media-band { grid-template-columns: 1fr;') && css.includes('.article-media-band-full { width: 100vw; padding-inline: 1rem; }') && css.includes('.context-listening-full { width: 100vw; padding-inline: 1rem; }'),
};

// Was a 48-term boolean on one line: when it tripped you got the object dumped
// with no clue which term did it. Same semantics, expressed as a rule per key,
// and failures are named.
const expectedCounts = {
  h1: 1,
  classicYoutubeEmbeds: 3,
  labelledSpotifyFeatures: 7,
  exactLegendaryTrackEntries: 5,
  exactLegendaryTrackEmbeds: 5
};
const mustBeFalse = ['editorialNotesLeaked'];
const failures = Object.entries(checks)
  .filter(([key, value]) => {
    if (key in expectedCounts) return value !== expectedCounts[key];
    if (mustBeFalse.includes(key)) return Boolean(value);
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'number') return value !== 0;
    return !value;
  })
  .map(([key, value]) => `${key} (${JSON.stringify(value)})`);

if (failures.length) {
  console.error('Jungle audit failed:\n  ' + failures.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('Jungle audit passed.');
}
