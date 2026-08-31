import fs from 'node:fs';

const html = fs.readFileSync('jungle-music-guide.html', 'utf8');
const css = fs.readFileSync('thecatrave-article.css', 'utf8');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
const images = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
const iframes = [...html.matchAll(/<iframe\b[^>]*>/g)].map(match => match[0]);
const compactBody = html.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ');
const localAssets = [...html.matchAll(/(?:src|srcset)="([^"]+)"/g)]
  .flatMap(match => match[1].split(',').map(item => item.trim().split(/\s+/)[0]))
  .filter(src => src.startsWith('img/'));

const checks = {
  h1: (html.match(/<h1\b/g) || []).length,
  canonicalPreserved: html.includes('<link rel="canonical" href="https://thecatrave.com/jungle-music-guide">'),
  seoTitleUpdated: html.includes('<title>What Is Jungle Music? History, Sound & Essential Tracks</title>'),
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
  labelledSpotifyFeatures: (html.match(/class="spotify-feature article-listening-feature article-media-band"/g) || []).length,
  reusableSoundcloudFeature: html.includes('class="soundcloud-feature article-listening-feature article-media-band"'),
  lanaRemixSoundcloud: html.includes('soundcloud.com/thecatrave/art-deco-jungle-remix'),
  lanaRemixBandcamp: html.includes('track=3379956979') && html.includes('you-so-ghetto-lana-del-rey-jungle-remix'),
  awolFlyerAligned: html.includes('class="awol-flyer floating-image article-image"'),
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
  sharedComponents: html.includes('article-site-header') && html.includes('author-card-filled') && html.includes('article-footer'),
  responsiveViewport: html.includes('name="viewport" content="width=device-width,initial-scale=1"'),
  responsiveImages: css.includes('.article-image img {') && css.includes('width: 100%;') && css.includes('height: auto;'),
  responsiveEmbeds: css.includes('.jungle-page .classic-youtube-embed iframe') && css.includes('aspect-ratio: 16 / 9;'),
  mobileMediaStack: css.includes('@media (max-width: 760px)') && css.includes('.article-media-band { grid-template-columns: 1fr;'),
  editorialNotesLeaked: /Self promotion second|implementation note|licen[cs]ing note/i.test(html)
};

console.log(JSON.stringify(checks, null, 2));
const failed = checks.h1 !== 1 || !checks.canonicalPreserved || !checks.seoTitleUpdated || !checks.intentLedH1 || !checks.oneHeader || !checks.oneFooter || checks.duplicateIds.length || checks.missingAnchors.length || checks.imagesMissingDimensions || checks.imagesMissingAlt || checks.iframesMissingTitles || checks.classicYoutubeEmbeds !== 3 || checks.youtubeFallbacks !== 0 || checks.labelledSpotifyFeatures !== 3 || !checks.reusableSoundcloudFeature || !checks.lanaRemixSoundcloud || !checks.lanaRemixBandcamp || !checks.awolFlyerAligned || !checks.linksToUkArticle || !checks.linksToBreakbeatArticle || checks.figureBeforeEmbed || checks.embedBeforeFigure || checks.consecutiveFigures || checks.missingAssets.length || !checks.structuredPublishedDate || !checks.structuredModifiedDate || !checks.visibleModifiedDate || !checks.directAnswerBeforeContents || !checks.sharedComponents || !checks.responsiveViewport || !checks.responsiveImages || !checks.responsiveEmbeds || !checks.mobileMediaStack || checks.editorialNotesLeaked;
if (failed) process.exitCode = 1;
