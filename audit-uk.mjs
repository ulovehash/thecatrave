import fs from 'node:fs';

const html = fs.readFileSync('uk-electronic-music-evolution.html', 'utf8');
const css = fs.readFileSync('thecatrave-article.css', 'utf8');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
const images = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
const iframes = [...html.matchAll(/<iframe\b[^>]*>/g)].map(match => match[0]);
const compactBody = html.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ');
const narrativeBody = compactBody.replace(/<aside class="[^"]*\blistening-block\b[^"]*"[\s\S]*?<\/aside>/g, '');
const localAssets = [...html.matchAll(/(?:src|srcset)="([^"]+)"/g)]
  .flatMap(match => match[1].split(',').map(item => item.trim().split(/\s+/)[0]))
  .filter(src => src.startsWith('img/'));

const decodeHtmlText = value => String(value || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&#x27;/g, "'")
  .replace(/&#(\d+);/g, (entity, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (entity, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/\s+/g, ' ')
  .trim();

const visibleFaq = [...html.matchAll(/<details(?: open)?><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
  .map(match => ({question:decodeHtmlText(match[1]), answer:decodeHtmlText(match[2])}));
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1]));
const faqSchema = schemas.find(schema => schema['@type'] === 'FAQPage');
const structuredFaq = (faqSchema?.mainEntity || []).map(item => ({
  question:item.name || '',
  answer:item.acceptedAnswer?.text || ''
}));
const headingLevels = [...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/g)].map(match => Number(match[1]));
const hierarchyJumps = headingLevels.flatMap((level, index) => index && level > headingLevels[index - 1] + 1
  ? [{from:headingLevels[index - 1], to:level, index}]
  : []);

const checks = {
  oneH1: (html.match(/<h1\b/g) || []).length === 1,
  canonicalPreserved: html.includes('<link rel="canonical" href="https://thecatrave.com/uk-electronic-music-evolution">'),
  seoTitlePresent: html.includes('<title>UK Electronic Music Evolution: Genres, Scenes and History</title>'),
  oneHeader: (html.match(/<header class="site-header/g) || []).length === 1,
  oneFooter: (html.match(/<footer class="site-footer/g) || []).length === 1,
  duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
  missingAnchors: hrefs.filter(id => !ids.includes(id)),
  hierarchyJumps,
  imagesMissingDimensions: images.filter(image => !/width="\d+"/.test(image) || !/height="\d+"/.test(image)).length,
  imagesMissingAlt: images.filter(image => !/alt="[^"]*"/.test(image)).length,
  iframesMissingTitles: iframes.filter(iframe => !/title="[^"]+"/.test(iframe)).length,
  missingAssets: [...new Set(localAssets.filter(src => !fs.existsSync(decodeURIComponent(src))))],
  faqVisibleCount: visibleFaq.length,
  faqSchemaCount: structuredFaq.length,
  faqMatchesVisibleContent: visibleFaq.length === 8 && visibleFaq.length === structuredFaq.length && visibleFaq.every((item, index) =>
    item.question === structuredFaq[index].question && item.answer === structuredFaq[index].answer
  ),
  firstFaqOpen: /class="[^"]*\bfaq-section\b[^"]*"[^>]*>[\s\S]*?<details open>/.test(html),
  articleStructuredData: schemas.some(schema => schema['@type'] === 'Article'),
  breadcrumbStructuredData: schemas.some(schema => schema['@type'] === 'BreadcrumbList'),
  structuredPublishedDate: html.includes('"datePublished":"2025-04-04"'),
  structuredModifiedDate: html.includes('"dateModified":"2026-08-29"'),
  visibleModifiedDate: html.includes('<time datetime="2026-08-29">29 August 2026</time>'),
  openGraphDates: html.includes('article:published_time" content="2025-04-04"') && html.includes('article:modified_time" content="2026-08-29"'),
  sharedComponents: html.includes('article-site-header') && html.includes('author-card-filled') && html.includes('article-footer'),
  sharedSources: html.includes('class="floating-block article-section sources-section"'),
  fullBleedBandcamp: html.includes('class="floating-inset article-cta article-cta-full"'),
  relevantBandcampPlayers: (html.match(/class="bandcamp-embed"/g) || []).length === 2 && html.includes('track=3822639635') && html.includes('track=3192532299'),
  linksToJungleArticle: html.includes('href="/jungle-music-guide"'),
  linksToBreakbeatArticle: html.includes('href="/breakbeat-guide"'),
  figureBeforeEmbed: (narrativeBody.match(/<\/figure>\s*<(?:iframe|aside class="[^"]*article-media-band)/g) || []).length,
  embedBeforeFigure: (narrativeBody.match(/<\/(?:iframe|aside)>\s*<figure/g) || []).length,
  consecutiveFigures: (narrativeBody.match(/<\/figure>\s*<figure/g) || []).length,
  responsiveViewport: html.includes('name="viewport" content="width=device-width,initial-scale=1"'),
  responsiveImages: css.includes('.article-image img {') && css.includes('height: auto;'),
  responsiveEmbeds: css.includes('.classic-youtube-embed iframe') && css.includes('aspect-ratio: 16 / 9;'),
  editorialNotesAbsent: !/implementation note|licen[cs]ing note|prompt instruction|placeholder copy/i.test(html)
};

console.log(JSON.stringify(checks, null, 2));
const failed = Object.entries(checks).some(([key, value]) => Array.isArray(value) ? value.length > 0 : typeof value === 'number' ? key !== 'faqVisibleCount' && key !== 'faqSchemaCount' && value !== 0 : !value)
  || checks.faqVisibleCount !== 8
  || checks.faqSchemaCount !== 8;
if (failed) process.exitCode = 1;
