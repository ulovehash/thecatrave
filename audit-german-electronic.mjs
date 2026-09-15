import fs from 'node:fs';

const html = fs.readFileSync('german-electronic-music.html', 'utf8');
const decode = value => String(value || '')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#39;|&#x27;/g, "'").replace(/\s+/g, ' ').trim();

const visibleFaq = [...html.matchAll(/<details(?: open)?><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
  .map(match => ({question: decode(match[1]), answer: decode(match[2])}));
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1]));
const faqSchema = schemas.find(schema => schema['@type'] === 'FAQPage');
const structuredFaq = (faqSchema?.mainEntity || []).map(item => ({
  question: item.name || '', answer: item.acceptedAnswer?.text || ''
}));

const checks = {
  oneH1: (html.match(/<h1\b/g) || []).length === 1,
  exactTitle: html.includes('<title>German Electronic Music: From Kraftwerk to Techno</title>'),
  canonical: html.includes('<link rel="canonical" href="https://thecatrave.com/german-electronic-music">'),
  noEmDash: !html.includes('—'),
  noPlaceholders: !/\[(?:Image|Graphic|Embed|Listening|Table):/.test(html),
  faqVisibleCount: visibleFaq.length,
  faqSchemaCount: structuredFaq.length,
  faqMatches: visibleFaq.length === structuredFaq.length && visibleFaq.every((item, index) =>
    item.question === structuredFaq[index].question && item.answer === structuredFaq[index].answer),
  firstFaqOpen: /class="[^"]*\bfaq-section\b[^"]*"[^>]*>[\s\S]*?<details open>/.test(html),
  articleSchema: schemas.some(schema => schema['@type'] === 'Article'),
  breadcrumbSchema: schemas.some(schema => schema['@type'] === 'BreadcrumbList'),
  datesAgree: html.includes('article:published_time" content="2026-09-15"') && html.includes('article:modified_time" content="2026-09-15"') && html.includes('<time datetime="2026-09-15">15 September 2026</time>'),
  licensedImages: ['kraftwerk-stage', 'stockhausen-wdr', 'love-parade-1998'].every(name => html.includes(`img/german-electronic/${name}-320.webp`) && html.includes(`img/german-electronic/${name}-1200.webp`)),
  imageDimensions: html.includes('width="1200" height="901"') && html.includes('width="1200" height="806"') && html.includes('width="1200" height="810"'),
  mapAndDownload: html.includes('class="genre-map german-scene-map"') && html.includes('/img/german-electronic/german-scenes-route.png'),
  exactListening: ['qWkzS0Vg9hg', '6bWw2bzXmY0', '3phase-feat-dr-motte-der-klang', '2ElEFB1EjjklpSVF7YJP90', '5NmBv6Z81UjuvCxVgBXJOP'].every(id => html.includes(id)),
  spotifyAlbumSupport: html.includes('/embed/album/6b9yPxKdRjGJQXwXoabl3r') && html.includes('/embed/album/5NmBv6Z81UjuvCxVgBXJOP'),
  internalLinks: ['/best-clubs-in-berlin', '/uk-electronic-music-evolution', '/live-dj-sets'].every(path => html.includes(`href="${path}"`)),
  bandcamp: (html.match(/class="bandcamp-embed"/g) || []).length === 1 && html.includes('track=3192532299')
};

const expected = {faqVisibleCount: 5, faqSchemaCount: 5};
const failures = Object.entries(checks).filter(([key, value]) => key in expected ? value !== expected[key] : !value);

if (failures.length) {
  console.error('German electronic music audit failed:\n  ' + failures.map(([key, value]) => `${key} (${JSON.stringify(value)})`).join('\n  '));
  process.exitCode = 1;
} else {
  console.log('German electronic music audit passed.');
}
