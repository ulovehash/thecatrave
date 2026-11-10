// Shared builder for genre guides written as a Markdown draft.
//
// A guide's own builder (build-<guide>-article.mjs) is data only: page
// metadata, the section list, its images, embeds and tables, and its sources.
// Everything else is here, so a new guide needs no copied rendering code.
// Festival guides use build-next-festival-article.mjs instead.
//
// The draft has `## Answer`, `## Introduction`, one `## ` block per section
// and `## FAQ` (questions as `### `). Media sits in it as [Image: key],
// [Embed: key] and [Table: key] lines. The build fails when:
// - a placeholder has no asset, or an asset has no placeholder;
// - an image file is missing from img/<imgDir>/;
// - an image or embed is not in media/<slug>.json (the media record);
// - a caption lacks its "Photograph: <author>, <licence>." credit.
// The Bandcamp support block is always included (ARTICLE-PRODUCTION-WORKFLOW.md §7).
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const BANDCAMP_TRACKS = [
  {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
  {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
];
const BANDCAMP_TEXT = 'Two of my own tracks. Buying one supports my work directly.';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

/**
 * @param {object} g
 * @param {string} g.slug        URL path without slash, e.g. 'phonk-guide'; output is <slug>.html
 * @param {string} g.imgDir      folder under img/
 * @param {string} g.title       <title> and headline
 * @param {string} g.description meta description
 * @param {string} g.datePublished, g.dateModified (YYYY-MM-DD), g.dateLabel ('10 November 2026')
 * @param {string} g.kicker, g.heroTitle, g.deck, g.answerLabel, g.introTitle, g.faqTitle
 * @param {string} [g.breadcrumb] defaults to kicker
 * @param {string} g.ogImage     path under the site root, e.g. 'img/og/phonk.jpg'
 * @param {string} g.bodyClass   e.g. 'phonk-page' ('article-page' is added)
 * @param {{id: string, heading: string, title?: string}[]} g.sections  in draft order, between Introduction and FAQ
 * @param {Record<string, [string, number, number, string, string]>} [g.images]  key: [file stem, width, height, alt, caption]
 * @param {Record<string, [string, string, string, string, string]>} [g.videos]  key: [youtubeId, genre, artist, title, text]
 * @param {Record<string, {label: string, headers: string[], rows: string[][]}>} [g.tables]
 * @param {[string, string][]} g.sources  [href, label]
 */
export function buildGenreGuide(g) {
  const required = ['slug', 'imgDir', 'title', 'description', 'datePublished', 'dateModified', 'dateLabel', 'kicker', 'heroTitle', 'deck', 'answerLabel', 'introTitle', 'faqTitle', 'ogImage', 'bodyClass', 'sections', 'sources'];
  const missing = required.filter(k => !g[k]);
  if (missing.length) throw new Error(`${g.slug || 'buildGenreGuide'}: missing ${missing.join(', ')}`);

  const draftFile = g.draft || `${g.slug}-draft.md`;
  const output = `${g.slug}.html`;
  const canonical = `https://thecatrave.com/${g.slug}`;
  const draft = fs.readFileSync(draftFile, 'utf8').replace(/—/g, ':');
  const fail = msg => { throw new Error(`${g.slug}: ${msg}`); };

  function getSection(heading) {
    const start = draft.indexOf(`\n## ${heading}\n`);
    if (start < 0) fail(`missing section in draft: ${heading}`);
    const bodyStart = draft.indexOf('\n', start + 1) + 1;
    const next = draft.indexOf('\n## ', bodyStart);
    return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
  }

  // The media record is the ledger of what this guide uses; nothing goes on the page without it.
  let record = null;
  try { record = fs.readFileSync(`media/${g.slug.replace(/-guide$/, '')}.json`, 'utf8'); } catch {}
  if (record === null) try { record = fs.readFileSync(`media/${g.slug}.json`, 'utf8'); } catch {}
  if (record === null) fail(`no media record (media/${g.slug.replace(/-guide$/, '')}.json)`);

  const media = {};
  for (const [key, [name, width, height, alt, caption]] of Object.entries(g.images || {})) {
    const base = `img/${g.imgDir}/${name}`;
    for (const f of [`${base}-${width}.webp`, `${base}-320.webp`]) if (!fs.existsSync(f)) fail(`image file missing: ${f}`);
    if (!record.includes(base)) fail(`image not in the media record: ${base}`);
    if (!/Photograph: .+, (CC|public domain)/.test(caption)) fail(`caption has no credit: ${key}`);
    media[key] = articleFigure({
      src: `${base}-${width}.webp`,
      srcset: `${base}-320.webp 320w, ${base}-${width}.webp ${width}w`,
      width, height, alt, caption, className: 'wide-archive-image'
    });
  }
  for (const [key, table] of Object.entries(g.tables || {})) media[key] = articleTable(table);
  for (const [key, [youtubeId, genre, artist, videoTitle, text]] of Object.entries(g.videos || {})) {
    if (!record.includes(youtubeId)) fail(`embed not in the media record: ${key} (${youtubeId})`);
    media[key] = articleVideoCollection({
      label: `${artist}, ${videoTitle}`,
      description: text,
      items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
    });
  }
  const used = new Set();

  function render(text) {
    return paras(text).map(p => {
      if (p.startsWith('### ')) return `<h3>${inline(p.slice(4))}</h3>`;
      if (/^- /.test(p)) return `<ul>${p.split('\n').map(li => `<li>${inline(li.replace(/^- /, ''))}</li>`).join('')}</ul>`;
      if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
      const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
      if (!key) fail(`no asset for placeholder: ${p.slice(0, 80)}`);
      used.add(key);
      return media[key];
    }).join('\n');
  }

  const answer = paras(getSection('Answer'));
  const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [q, ...rest] = block.split('\n');
    const body = rest.join('\n').trim();
    return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
  });

  const tocItems = [...g.sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
  const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;
  const sectionHtml = g.sections.map(s => articleSection({
    id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
  }));
  const sourceLink = ([href, label]) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

  const articleHtml = [
    articleHero({
      kicker: g.kicker,
      title: g.heroTitle,
      deck: g.deck,
      readingTime,
      dateModified: g.dateModified,
      dateLabel: g.dateLabel,
      summaryHtml: infoBanner({label: g.answerLabel, bodyHtml: inline(answer[0]), className: 'article-summary'}),
      tocItems
    }),
    articleSection({id: 'introduction', title: g.introTitle, bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
    ...sectionHtml,
    articleFaq({items: faqItems, title: g.faqTitle, openFirst: true}),
    authorCard({filled: true}),
    articleSources({bodyHtml: `<ul>\n${g.sources.map(sourceLink).join('\n')}\n</ul>`}),
    bandcampSupport({fullBleed: true, description: BANDCAMP_TEXT, tracks: BANDCAMP_TRACKS}),
    readNext({items: relatedArticles(output)})
  ].join('\n');

  const unused = Object.keys(media).filter(k => !used.has(k));
  if (unused.length) fail(`assets with no placeholder in the draft: ${unused.join(', ')}`);

  const structuredData = [
    articleStructuredData({headline: g.title, description: g.description, canonical, datePublished: g.datePublished, dateModified: g.dateModified}),
    breadcrumbStructuredData({name: g.breadcrumb || g.kicker, canonical}),
    faqStructuredData({items: faqItems})
  ];

  const html = articlePage({
    alternates: alternatesFor(`/${g.slug}`),
    title: g.title, description: g.description, canonical,
    ogImage: `https://thecatrave.com/${g.ogImage}`,
    datePublished: g.datePublished, dateModified: g.dateModified,
    bodyClass: `article-page ${g.bodyClass}`,
    structuredData, articleHtml
  }).replace(/—/g, ':');

  fs.writeFileSync(output, html);
  console.log(`Built ${output}`);
}
