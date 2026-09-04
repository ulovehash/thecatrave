import fs from 'node:fs';
import { pages } from './pages.mjs';
import { imageSizeForUrl } from './scripts/image-size.mjs';

// Zero-dependency SEO and content audit for every built page. Deterministic string
// and structure checks only: the fundamentals that decide whether a page can be
// crawled, indexed and understood. Rendering, Core Web Vitals, contrast and
// site-wide Lighthouse budgets are covered by the Playwright and Unlighthouse
// layers in `npm run check`; this file is the part that runs with no install.


const failures = [];
const check = (page, name, condition, detail = '') => {
  if (!condition) failures.push(`${page}: ${name}${detail ? ` (${detail})` : ''}`);
};

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const robots = fs.existsSync('robots.txt') ? fs.readFileSync('robots.txt', 'utf8') : '';
const titles = new Map();
const descriptions = new Map();

const decodeEntities = value => String(value)
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#0?39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i')) || [])[1];
const meta = (html, key, kind = 'name') => {
  const tag = html.match(new RegExp(`<meta[^>]*\\s${kind}="${key}"[^>]*>`, 'i'));
  return tag ? attr(tag[0], 'content') : undefined;
};

for (const {file, path, kind} of pages) {
  if (!fs.existsSync(file)) { failures.push(`${file}: not built`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const body = html.slice(html.indexOf('<body'));
  const main = (body.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || [, ''])[1];
  const canonical = `https://thecatrave.com${path === '/' ? '/' : path}`;

  // Title
  const title = decodeEntities((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1]);
  check(file, 'has <title>', title.length > 0);
  check(file, 'title length 15-65', title.length >= 15 && title.length <= 65, `${title.length} chars`);
  check(file, 'title is unique', !titles.has(title), titles.get(title));
  titles.set(title, file);

  // Meta description
  const description = decodeEntities(meta(html, 'description') || '');
  check(file, 'has meta description', description.length > 0);
  check(file, 'description length 70-165', description.length >= 70 && description.length <= 165, `${description.length} chars`);
  check(file, 'description is unique', !descriptions.has(description), descriptions.get(description));
  descriptions.set(description, file);

  // Language and viewport
  check(file, 'has <html lang>', /<html[^>]*\slang="[a-z-]+"/i.test(html));
  check(file, 'has responsive viewport', /<meta[^>]*name="viewport"[^>]*width=device-width/i.test(html));

  // Indexability
  const robotsMeta = (meta(html, 'robots') || '').toLowerCase();
  check(file, 'not noindex', !robotsMeta.includes('noindex'));
  check(file, 'not nofollow', !robotsMeta.includes('nofollow'));

  // Canonical
  const canonicalHref = attr((head.match(/<link[^>]*rel="canonical"[^>]*>/i) || [''])[0] || '', 'href');
  check(file, 'has canonical', !!canonicalHref);
  check(file, 'canonical is absolute https', /^https:\/\//.test(canonicalHref || ''));
  check(file, 'canonical is self-referential', canonicalHref === canonical, `${canonicalHref} vs ${canonical}`);
  check(file, 'canonical in sitemap', sitemap.includes(`<loc>${canonical}</loc>`) || (path === '/' && sitemap.includes('<loc>https://thecatrave.com/</loc>')));

  // Headings
  const h1s = html.match(/<h1[\s>]/g) || [];
  check(file, 'exactly one <h1>', h1s.length === 1, `${h1s.length}`);
  const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map(m => Number(m[1]));
  let jump = '';
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] - levels[i - 1] > 1) { jump = `h${levels[i - 1]} -> h${levels[i]}`; break; }
  }
  check(file, 'no heading-level jumps', !jump, jump);

  // Open Graph and Twitter
  for (const key of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) {
    check(file, `has ${key}`, !!meta(html, key, 'property'));
  }
  check(file, 'og:image is absolute https', /^https:\/\//.test(meta(html, 'og:image', 'property') || ''));
  // Declared dimensions are worse than none if they disagree with the file, so
  // measure the image the build actually wrote and compare.
  const ogImage = meta(html, 'og:image', 'property');
  let real = null;
  try { real = imageSizeForUrl(ogImage); } catch {}
  check(file, 'og:image file is readable', Boolean(real), ogImage);
  if (real) {
    // 1200x630 is what Telegram, Twitter, Slack and Facebook all lay out for.
    // Anything else gets cropped by the feed, and a square card loses its subject.
    check(file, 'og:image is 1200x630',
      real.width === 1200 && real.height === 630, `${real.width}x${real.height}`);
    check(file, 'og:image:width matches the file',
      meta(html, 'og:image:width', 'property') === String(real.width),
      `declared ${meta(html, 'og:image:width', 'property')}, file ${real.width}`);
    check(file, 'og:image:height matches the file',
      meta(html, 'og:image:height', 'property') === String(real.height),
      `declared ${meta(html, 'og:image:height', 'property')}, file ${real.height}`);
  }
  for (const key of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    check(file, `has ${key}`, !!meta(html, key, 'name') || !!meta(html, key, 'property'));
  }

  // Structured data
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
  check(file, 'has JSON-LD', ldBlocks.length > 0);
  for (const [index, raw] of ldBlocks.entries()) {
    let parsed;
    try { parsed = JSON.parse(raw); } catch { check(file, `JSON-LD #${index + 1} parses`, false); continue; }
    check(file, `JSON-LD #${index + 1} has @type`, !!(parsed['@type'] || (Array.isArray(parsed) && parsed.every(x => x['@type']))));
  }

  // Images
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
  check(file, 'every image has an alt attribute', imgs.every(t => /\salt="/.test(t)));
  check(file, 'figure images have descriptive alt', [...html.matchAll(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi)]
    .flatMap(m => m[0].match(/<img\b[^>]*>/gi) || [])
    .every(t => /\salt="[^"]{4,}"/.test(t)), 'empty or terse alt in a figure');
  const raster = imgs.filter(t => /\bsrc="[^"]+\.(?:jpe?g|png|webp|avif)(?:\?[^"]*)?"/i.test(t));
  check(file, 'raster images ship width+height', raster.every(t => /\swidth="\d+"/.test(t) && /\sheight="\d+"/.test(t)));

  // Links
  const internalLinks = [...main.matchAll(/<a\b[^>]*\shref="(\/[^"#][^"]*)"/g)].map(m => m[1]);
  check(file, 'main has >= 2 internal links', kind === 'home' ? true : internalLinks.length >= 2, `${internalLinks.length}`);
  const blankTargets = [...html.matchAll(/<a\b[^>]*\starget="_blank"[^>]*>/g)].map(m => m[0]);
  check(file, 'target=_blank links set rel=noopener', blankTargets.every(t => /\brel="[^"]*noopener/.test(t) || /\brel="[^"]*noreferrer/.test(t)));

  // Mixed content / security
  const insecure = [...html.matchAll(/\s(?:src|href)="(http:\/\/[^"]+)"/g)].map(m => m[1]).filter(u => !u.startsWith('http://localhost'));
  check(file, 'no insecure http subresources', insecure.length === 0, insecure[0]);

  // Content depth
  const words = decodeEntities(main).split(/\s+/).filter(Boolean).length;
  const minWords = kind === 'guide' ? 1200 : 150;
  check(file, `main word count >= ${minWords}`, words >= minWords, `${words} words`);
}

// robots.txt should exist and point at the sitemap
check('robots.txt', 'exists', robots.length > 0);
check('robots.txt', 'references the sitemap', /sitemap:\s*https?:\/\//i.test(robots));
check('sitemap.xml', 'is well-formed xml', sitemap.trim().startsWith('<?xml') && sitemap.includes('</urlset>'));

if (failures.length) {
  console.error(`SEO audit failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`SEO audit passed (${pages.length} pages).`);
