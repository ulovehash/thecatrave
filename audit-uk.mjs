import fs from 'node:fs';

const html = fs.readFileSync('uk-electronic-music-evolution.html', 'utf8');
const css = fs.readFileSync('thecatrave-article.css', 'utf8');

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

const checks = {
  oneH1: (html.match(/<h1\b/g) || []).length === 1,
  seoTitlePresent: html.includes('<title>UK Electronic Music Evolution: Genres, Scenes and History</title>'),
  faqVisibleCount: visibleFaq.length,
  faqSchemaCount: structuredFaq.length,
  faqMatchesVisibleContent: visibleFaq.length === 8 && visibleFaq.length === structuredFaq.length && visibleFaq.every((item, index) =>
    item.question === structuredFaq[index].question && item.answer === structuredFaq[index].answer
  ),
  firstFaqOpen: /class="[^"]*\bfaq-section\b[^"]*"[^>]*>[\s\S]*?<details open>/.test(html),
  articleStructuredData: schemas.some(schema => schema['@type'] === 'Article'),
  breadcrumbStructuredData: schemas.some(schema => schema['@type'] === 'BreadcrumbList'),
  openGraphDates: html.includes('article:published_time" content="2025-04-04"') && html.includes('article:modified_time" content="2026-08-29"'),
  fullBleedBandcamp: html.includes('class="floating-inset article-cta article-cta-full"'),
  relevantBandcampPlayers: (html.match(/class="bandcamp-embed"/g) || []).length === 2 && html.includes('track=3822639635') && html.includes('track=3192532299'),
  linksToJungleArticle: html.includes('href="/jungle-music-guide"'),
};

// Same pass rule as before (arrays empty, counts zero unless named, booleans
// true) but it now reports which keys failed instead of dumping the object and
// leaving you to diff it against a boolean by eye.
const expectedCounts = { faqVisibleCount: 8, faqSchemaCount: 8 };
const failures = Object.entries(checks)
  .filter(([key, value]) => {
    if (key in expectedCounts) return value !== expectedCounts[key];
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'number') return value !== 0;
    return !value;
  })
  .map(([key, value]) => `${key} (${JSON.stringify(value)})`);

if (failures.length) {
  console.error('UK electronic audit failed:\n  ' + failures.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('UK electronic audit passed.');
}
