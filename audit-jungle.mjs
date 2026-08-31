import fs from 'node:fs';

const html = fs.readFileSync('jungle-music-guide.html', 'utf8');
const css = fs.readFileSync('thecatrave-article.css', 'utf8');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
const images = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
const iframes = [...html.matchAll(/<iframe\b[^>]*>/g)].map(match => match[0]);
const essentialListeningClasses = [...html.matchAll(/<aside class="([^"]+)"[^>]*>[\s\S]*?<\/aside>/g)]
  .filter(match => match[0].includes('<p class="article-kicker">Essential listening</p>'))
  .map(match => match[1]);
const compactBody = html.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ');
const placedAfterInSection = (sectionId, textNeedle, playerId) => {
  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const textIndex = html.indexOf(textNeedle, sectionStart);
  const playerIndex = html.indexOf(`id="${playerId}"`, sectionStart);
  return sectionStart >= 0 && textIndex > sectionStart && playerIndex > textIndex && playerIndex < sectionEnd;
};
const localAssets = [...html.matchAll(/(?:src|srcset)="([^"]+)"/g)]
  .flatMap(match => match[1].split(',').map(item => item.trim().split(/\s+/)[0]))
  .filter(src => src.startsWith('img/'));

const checks = {
  h1: (html.match(/<h1\b/g) || []).length,
  canonicalPreserved: html.includes('<link rel="canonical" href="https://thecatrave.com/jungle-music-guide">'),
  seoTitleUpdated: html.includes('<title>What Is Jungle Music? History, Sound &amp; Essential Tracks</title>'),
  intentLedH1: html.includes('<h1>What Is Jungle Music? A Guide to Its History, Sound and Culture.</h1>'),
  oneHeader: (html.match(/<header class="site-header/g) || []).length === 1,
  oneFooter: (html.match(/<footer class="site-footer/g) || []).length === 1,
  duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
  missingAnchors: hrefs.filter(id => !ids.includes(id)),
  imagesMissingDimensions: images.filter(img => !/width="\d+"/.test(img) || !/height="\d+"/.test(img)).length,
  imagesMissingAlt: images.filter(img => !/alt="[^"]*"/.test(img)).length,
  iframesMissingTitles: iframes.filter(iframe => !/title="[^"]+"/.test(iframe)).length,
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
  fullBleedBandcamp: html.includes('class="floating-inset article-cta article-cta-full"'),
  lanaRemixSoundcloud: html.includes('soundcloud.com/thecatrave/art-deco-jungle-remix'),
  lanaRemixBandcamp: html.includes('track=3379956979') && html.includes('you-so-ghetto-lana-del-rey-jungle-remix'),
  awolFlyerAligned: /<figure class="[^"]*\bawol-flyer\b[^"]*\bfloating-image\b|<figure class="[^"]*\bfloating-image\b[^"]*\bawol-flyer\b/.test(html),
  sharedFigures: [...html.matchAll(/<figure class="[^"]*\bfloating-image\b[^"]*">[\s\S]*?<\/figure>/g)].every(match => /decoding="async"/.test(match[0])),
  sharedTables: [...html.matchAll(/<div class="genre-table-wrap"[\s\S]*?<\/table><\/div>/g)].every(match => /role="region"/.test(match[0]) && /tabindex="0"/.test(match[0]) && /<th scope="col">/.test(match[0])),
  sharedSources: html.includes('<section class="floating-block article-section sources-section" id="sources">') && html.includes('href="#sources">Recommended resources</a>'),
  linksToUkArticle: html.includes('href="/uk-electronic-music-evolution"'),
  linksToBreakbeatArticle: html.includes('href="/breakbeat-guide"'),
  figureBeforeEmbed: (compactBody.match(/<\/figure>\s*<iframe/g) || []).length,
  embedBeforeFigure: (compactBody.match(/<\/iframe>\s*<figure/g) || []).length,
  consecutiveFigures: (compactBody.match(/<\/figure>\s*<figure/g) || []).length,
  missingAssets: [...new Set(localAssets.filter(src => !fs.existsSync(decodeURIComponent(src))))],
  structuredPublishedDate: html.includes('"datePublished":"2025-04-05"'),
  structuredModifiedDate: html.includes('"dateModified":"2026-08-31"'),
  visibleModifiedDate: html.includes('<time datetime="2026-08-31">31 August 2026</time>'),
  directAnswerBeforeContents: html.indexOf('JUNGLE MUSIC DEFINITION') < html.indexOf('id="contents"'),
  faqInContents: html.includes('href="#faq">Jungle music FAQ</a>'),
  faqQuestions: (html.match(/<section class="[^"]*\bfaq-section\b[^"]*" id="faq">[\s\S]*?<details/g) || []).length === 1 && (html.match(/<summary>/g) || []).length === 6,
  firstFaqOpen: /id="faq">[\s\S]*?<details open>/.test(html),
  faqSchema: html.includes('"@type":"FAQPage"') && (html.match(/"@type":"Question"/g) || []).length === 6,
  faqSchemaMatchesVisibleQuestions: [
    'Where and when did jungle music originate?',
    'Who invented jungle music?',
    'Why is jungle music called jungle?',
    'What came first, jungle or drum and bass?',
    'What BPM is jungle music?',
    'What are the main jungle subgenres?'
  ].every(question => html.includes(`<summary>${question}</summary>`) && html.includes(`"name":"${question}"`)),
  sharedComponents: html.includes('article-site-header') && html.includes('author-card-filled') && html.includes('article-footer'),
  responsiveViewport: html.includes('name="viewport" content="width=device-width,initial-scale=1"'),
  responsiveImages: css.includes('.article-image img {') && css.includes('width: 100%;') && css.includes('height: auto;'),
  responsiveEmbeds: css.includes('.classic-youtube-embed iframe') && css.includes('aspect-ratio: 16 / 9;'),
  mobileMediaStack: css.includes('@media (max-width: 760px)') && css.includes('.article-media-band { grid-template-columns: 1fr;') && css.includes('.article-media-band-full { width: 100vw; padding-inline: 1rem; }') && css.includes('.context-listening-full { width: 100vw; padding-inline: 1rem; }'),
  editorialNotesLeaked: /Self promotion second|implementation note|licen[cs]ing note/i.test(html)
};

console.log(JSON.stringify(checks, null, 2));
const failed = checks.h1 !== 1 || !checks.canonicalPreserved || !checks.seoTitleUpdated || !checks.intentLedH1 || !checks.oneHeader || !checks.oneFooter || checks.duplicateIds.length || checks.missingAnchors.length || checks.imagesMissingDimensions || checks.imagesMissingAlt || checks.iframesMissingTitles || checks.classicYoutubeEmbeds !== 3 || checks.youtubeFallbacks !== 0 || checks.labelledSpotifyFeatures !== 7 || !checks.allEssentialListeningFullBleed || checks.exactLegendaryTrackEntries !== 5 || checks.exactLegendaryTrackEmbeds !== 5 || !checks.unifiedListeningLabel || !checks.contextualLegendaryTrackPlacement || !checks.reusableSoundcloudFeature || !checks.contrastingJungleManiaListening || !checks.fullBleedBandcamp || !checks.lanaRemixSoundcloud || !checks.lanaRemixBandcamp || !checks.awolFlyerAligned || !checks.sharedFigures || !checks.sharedTables || !checks.sharedSources || !checks.linksToUkArticle || !checks.linksToBreakbeatArticle || checks.figureBeforeEmbed || checks.embedBeforeFigure || checks.consecutiveFigures || checks.missingAssets.length || !checks.structuredPublishedDate || !checks.structuredModifiedDate || !checks.visibleModifiedDate || !checks.directAnswerBeforeContents || !checks.faqInContents || !checks.faqQuestions || !checks.firstFaqOpen || !checks.faqSchema || !checks.faqSchemaMatchesVisibleQuestions || !checks.sharedComponents || !checks.responsiveViewport || !checks.responsiveImages || !checks.responsiveEmbeds || !checks.mobileMediaStack || checks.editorialNotesLeaked;
if (failed) process.exitCode = 1;
