// Build every translated guide from its draft and its content module.
//
// The English guides each have their own generator, because each was written
// before the next one and the shape settled page by page. The translations do
// not need that: by the time a guide is translated its structure exists and has
// shipped, so what a translation adds is text, not shape. One generator reads
// them all.
//
// A translated page is made of two files:
//
//   de/<name>-draft.md       the article, in German, with the same
//                            [Image: ...] / [Embed: ...] / [Table: ...]
//                            placeholder lines as the English draft
//   content/de/<name>.mjs    everything around the prose: metadata, the
//                            section list, the assets each placeholder maps to
//                            (captions in German), sources and the Bandcamp copy
//
// Nothing here is page-specific. A sixth German guide is a draft and a content
// module, and no change to this file.
//
// Optional fields, for guides whose English page is not shaped like a festival
// guide (the genre and club guides, Burning Man):
//
//   ownSetAfter          section id the owner's first mix follows; the second
//                        sits before the FAQ. Omitted: no mixes, as on the
//                        English pages that carry none.
//   sections[].tocLabel  contents label when it differs from the heading
//   minReadingMinutes    floor for the reading time (default 8)
//   image                image for the Article structured data
import fs from 'node:fs';
import path from 'node:path';
import {
  ownSetListening, articleFaq, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import { relatedArticles } from './home-articles.mjs';
import { t } from './i18n.mjs';
import { alternatesFor } from './pages.mjs';

const CONTENT_DIR = 'content';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// The house rule against em dashes applies in German too, where the dash is at
// least as tempting: German typography uses it for parentheses the way English
// uses commas. Both the draft and the generated page are normalised.
const noEmDash = value => String(value).replace(/—/g, ':');

function inline(value) {
  let text = escapeHtml(noEmDash(value));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

const paras = text => text.split(/\n{2,}/).map(paragraph => paragraph.trim()).filter(Boolean);

export function buildLocalizedArticle(content) {
  const {lang} = content;
  const copy = t(lang);
  const draft = noEmDash(fs.readFileSync(content.draft, 'utf8'));

  function getSection(heading) {
    const start = draft.indexOf(`\n## ${heading}\n`);
    if (start < 0) throw new Error(`${content.draft}: missing section "${heading}"`);
    const bodyStart = draft.indexOf('\n', start + 1) + 1;
    const next = draft.indexOf('\n## ', bodyStart);
    return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
  }

  // Same contract as the English generators: a placeholder with no asset fails
  // the build, and an asset no placeholder asks for fails it too. A translation
  // that quietly loses an image is the failure this catches.
  const media = content.media({lang});
  const used = new Set();

  const render = text => paras(text).map(paragraph => {
    if (!/^\[(Image|Embed|Table|Bild|Tabelle):/.test(paragraph)) return `<p>${inline(paragraph)}</p>`;
    // Longest match wins, as in the English generators: "Sisyphos" is also
    // inside "Teenage Mutants live from Sisyphos".
    const key = Object.keys(media).filter(name => paragraph.includes(name)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`${content.draft}: no asset for placeholder ${paragraph.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');

  const renderWithSubsections = (text, anchors) => {
    const [lead, ...blocks] = text.split(/\n### /);
    if (blocks.length !== anchors.length) throw new Error(`${content.draft}: expected ${anchors.length} subsections, found ${blocks.length}`);
    return [render(lead), ...blocks.map((block, index) => {
      const [heading, ...rest] = block.split('\n');
      return `<h3 id="${anchors[index]}">${inline(heading.trim())}</h3>\n${render(rest.join('\n'))}`;
    })].join('\n');
  };

  const answer = paras(getSection(content.answerSection));
  const faqItems = getSection(content.faqSection).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [question, ...rest] = block.split('\n');
    const body = rest.join('\n').trim();
    return {
      question: question.trim().replace(/\?*$/, '?'),
      // Schema text is plain: links and emphasis are kept only in the visible answer.
      answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*/g, '').replace(/\s+/g, ' '),
      answerHtml: render(body)
    };
  });

  const tocItems = [...content.sections.map(({id, heading, tocLabel}) => ({id, label: tocLabel || heading})), {id: 'faq', label: content.faqLabel || 'FAQ'}];
  const minutes = Math.max(content.minReadingMinutes || 8, Math.round(draft.split(/\s+/).length / 225));

  const sectionHtml = content.sections.map(section => articleSection({
    id: section.id, title: section.title, kicker: section.kicker,
    bodyHtml: section.subsections
      ? renderWithSubsections(getSection(section.heading), section.subsections)
      : render(getSection(section.heading))
  }));

  const sourceLink = ({href, label}) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

  const articleHtml = [
    articleHero({
      lang,
      kicker: content.heroKicker,
      title: content.heroTitle,
      deck: content.deck,
      readingTime: copy.readingTime(minutes),
      dateModified: content.dateModified,
      dateLabel: content.dateLabel,
      summaryHtml: infoBanner({label: content.answerLabel, bodyHtml: inline(answer[0]), className: 'article-summary'}),
      tocItems
    }),
    articleSection({id: 'introduction', title: content.introTitle, bodyHtml: render(getSection(content.introSection)), className: 'article-intro'}),
    // The owner's two mixes, in the same two places as on every festival guide:
    // one mid-guide after the history section, one before the FAQ. Only where
    // the English page carries them.
    ...sectionHtml.flatMap((html, index) => content.ownSetAfter && content.sections[index].id === content.ownSetAfter ? [html, ownSetListening(0, lang)] : [html]),
    ...(content.ownSetAfter ? [ownSetListening(1, lang)] : []),
    articleFaq({lang, items: faqItems, title: content.faqTitle, openFirst: true}),
    authorCard({filled: true, lang}),
    articleSources({lang, bodyHtml: `<ul>\n${content.sources.map(sourceLink).join('\n')}\n</ul>`}),
    bandcampSupport({lang, fullBleed: true, description: content.bandcamp.description, tracks: content.bandcamp.tracks}),
    readNext({lang, items: relatedArticles(content.file, lang)})
  ].join('\n');

  const unused = Object.keys(media).filter(key => !used.has(key));
  if (unused.length) throw new Error(`${content.draft}: assets with no placeholder: ${unused.join(', ')}`);

  const html = articlePage({
    lang,
    // Every language of the family, not only this page and the English: with
    // German and French both translating a guide, each page names all three.
    alternates: alternatesFor(content.englishPath),
    title: content.title,
    description: content.description,
    canonical: content.canonical,
    ogImage: content.ogImage,
    datePublished: content.datePublished,
    dateModified: content.dateModified,
    bodyClass: content.bodyClass,
    structuredData: [
      articleStructuredData({lang, headline: content.title, description: content.description, canonical: content.canonical, ...(content.image ? {image: content.image} : {}), datePublished: content.datePublished, dateModified: content.dateModified}),
      breadcrumbStructuredData({lang, name: content.breadcrumbName, canonical: content.canonical}),
      faqStructuredData({items: faqItems})
    ],
    articleHtml
  });

  fs.mkdirSync(path.dirname(content.file), {recursive: true});
  fs.writeFileSync(content.file, noEmDash(html));
  return content.file;
}

// Every content module under content/<lang>/, so adding a translation is adding
// a file rather than editing a list.
export async function buildAllLocalizedArticles() {
  const built = [];
  if (!fs.existsSync(CONTENT_DIR)) return built;
  for (const lang of fs.readdirSync(CONTENT_DIR).sort()) {
    const dir = path.join(CONTENT_DIR, lang);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.mjs')).sort()) {
      const module = await import(`./${path.join(dir, file)}`);
      built.push(buildLocalizedArticle(module.default));
    }
  }
  return built;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const built = await buildAllLocalizedArticles();
  for (const file of built) console.log(`Built ${file}`);
}
