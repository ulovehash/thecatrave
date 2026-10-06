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
//   sections[].className a class the English section carries for its styling
//                        (the breakbeat guide's styles-section headings)
//   minReadingMinutes    floor for the reading time (default 8)
//   image                image for the Article structured data
//   sourcesNote          a last Sources line that is not a link, such as where
//                        the set counts come from
//   faqSection           omit it when the English page has no FAQ (the SoundCloud
//                        mixes, techno mixes and house playlists guides)
//   answerSection        omit it when the English page has no summary banner
//                        (the UK evolution guide opens straight on its text)
//   introTitle           omit it when the English intro has no heading
//   sections[].headings  several draft headings rendered as one section, for
//                        the UK guide's eras, which the English page merges
//   sections[].rawHtml   a function returning the whole section, for a block
//                        that is not prose (the UK guide's genre map); the
//                        draft has no heading for it
//
// A draft paragraph starting with "> " renders as a note (<p class=
// "article-note">), for the bass music guide's listening notes.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import path from 'node:path';
import {
  ownSetListening, articleFaq, articleHero, articleListeningCollection, articlePage, articlePlaylistPreview, articleSection, articleSources, articleTrackEmbed,
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
  const draft = withCatalogue(noEmDash(fs.readFileSync(content.draft, 'utf8')), lang);

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

  const mediaKey = paragraph => Object.keys(media)
    .filter(name => String(paragraph || '').includes(name))
    .sort((a, b) => b.length - a.length)[0];
  const plainText = value => noEmDash(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');

  const render = text => {
    const blocks = paras(text);
    return blocks.map((paragraph, index) => {
    // "- " lists, as the English Europe festivals generator renders them.
    if (paragraph.startsWith('- ')) {
      return `<ul>${paragraph.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
    }
    // "> " marks a note, as the English bass music generator styles its
    // "What to listen for" and "Start with" lines.
    if (paragraph.startsWith('> ')) return `<p class="article-note">${inline(paragraph.slice(2))}</p>`;
    if (!/^\[(Image|Embed|Table|Bild|Tabelle):/.test(paragraph)) {
      const next = blocks[index + 1];
      const nextAsset = /^\[(Image|Embed|Table|Bild|Tabelle):/.test(next || '') ? media[mediaKey(next)] : null;
      if (nextAsset?.usePreviousParagraph) return '';
      return `<p>${inline(paragraph)}</p>`;
    }
    // Longest match wins, as in the English generators: "Sisyphos" is also
    // inside "Teenage Mutants live from Sisyphos".
    const key = mediaKey(paragraph);
    if (!key) throw new Error(`${content.draft}: no asset for placeholder ${paragraph.slice(0, 80)}`);
    used.add(key);
    const asset = media[key];
    if (asset?.usePreviousParagraph) {
      const previous = blocks[index - 1];
      if (!previous || /^\[(Image|Embed|Table|Bild|Tabelle):/.test(previous)) {
        throw new Error(`${content.draft}: ${key} requires a factual paragraph immediately before its placeholder`);
      }
      return asset.render(plainText(previous));
    }
    return asset;
    }).join('\n');
  };

  const renderWithSubsections = (text, anchors) => {
    // A section may open straight on its first subheading (the Europe festivals
    // guide's Hard dance), so the lead can be empty.
    const [lead, ...blocks] = text.split(/(?:^|\n)### /);
    if (blocks.length !== anchors.length) throw new Error(`${content.draft}: expected ${anchors.length} subsections, found ${blocks.length}`);
    return [render(lead), ...blocks.map((block, index) => {
      const [heading, ...rest] = block.split('\n');
      return `<h3 id="${anchors[index]}">${inline(heading.trim())}</h3>\n${render(rest.join('\n'))}`;
    })].join('\n');
  };

  const renderSetCollection = (text, anchors, label) => {
    const [lead, ...blocks] = text.split(/(?:^|\n)### /);
    if (blocks.length !== anchors.length) throw new Error(`${content.draft}: expected ${anchors.length} set entries, found ${blocks.length}`);
    const items = blocks.map((block, index) => {
      const [heading, ...rest] = block.split('\n');
      const parts = paras(rest.join('\n'));
      const placeholder = parts.find(part => /^\[(Embed|Einbettung):/.test(part));
      if (!placeholder) throw new Error(`${content.draft}: ${heading.trim()} needs an embed placeholder`);
      const key = mediaKey(placeholder);
      const asset = media[key];
      if (!asset?.setItem) throw new Error(`${content.draft}: ${key} needs setItem metadata for a grouped listening section`);
      used.add(key);
      const item = asset.setItem;
      const year = (item.title.match(/(\d{4})\s*$/) || [])[1] || '';
      const noteHtml = render(parts.filter(part => part !== placeholder).join('\n\n'));
      return {
        anchor: anchors[index],
        artist: `${item.artist} · ${item.genre}`,
        title: item.title.replace(/,?\s*\d{4}\s*$/, ''),
        year,
        noteHtml,
        playerHtml: articleTrackEmbed({platform: 'youtube', id: item.youtubeId, title: `${item.artist}, ${item.title}`})
      };
    });
    const route = articleListeningCollection({lang, id: `listen-${anchors[0]}`, label, items});
    return `${lead.trim() ? render(lead) : ''}${route}`;
  };

  const renderPlaylistSection = (text, metadata) => {
    // A section may open with a lead paragraph before its first playlist (the
    // house playlists guide's disclosure of the owner's own two).
    const [lead, ...blocks] = text.split(/(?:^|\n)### /);
    const entries = blocks.map(block => {
      const [entryTitle, ...body] = block.split('\n');
      const notes = paras(body.join('\n'));
      if (notes.length !== 1) throw new Error(`${content.draft}: ${entryTitle} must have one editorial paragraph`);
      return {
        entryTitle: entryTitle.trim(),
        description: notes[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*/g, '')
      };
    });
    if (entries.length !== metadata.length) throw new Error(`${content.draft}: ${entries.length} playlist entries for ${metadata.length} metadata rows`);
    return `${lead.trim() ? render(lead) : ''}<div class="playlist-preview-list">${entries.map((entry, index) => {
      const item = metadata[index];
      if (!entry.entryTitle.includes(item.title)) throw new Error(`${content.draft}: playlist heading "${entry.entryTitle}" does not match "${item.title}"`);
      return articlePlaylistPreview({...item, description: entry.description, lang});
    }).join('\n')}</div>`;
  };

  const answer = content.answerSection ? paras(getSection(content.answerSection)) : null;
  const faqItems = !content.faqSection ? [] : getSection(content.faqSection).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [question, ...rest] = block.split('\n');
    const body = rest.join('\n').trim();
    return {
      question: question.trim().replace(/\?*$/, '?'),
      // Schema text is plain: links and emphasis are kept only in the visible answer.
      answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*/g, '').replace(/\s+/g, ' '),
      answerHtml: render(body)
    };
  });

  const tocItems = [...content.sections.map(({id, heading, tocLabel}) => ({id, label: tocLabel || heading})), ...(content.faqSection ? [{id: 'faq', label: content.faqLabel || 'FAQ'}] : [])];
  const minutes = Math.max(content.minReadingMinutes || 8, Math.round(draft.split(/\s+/).length / 225));

  const sectionHtml = content.sections.map(section => section.rawHtml ? section.rawHtml(copy) : articleSection({
    id: section.id, title: section.title, kicker: section.kicker, className: section.className || '',
    bodyHtml: section.playlists
      ? renderPlaylistSection(getSection(section.heading), section.playlists)
      : section.setCollection
      ? renderSetCollection(getSection(section.heading), section.subsections, section.heading)
      : section.subsections
      ? renderWithSubsections(getSection(section.heading), section.subsections)
      : render(section.headings ? section.headings.map(getSection).join('\n\n') : getSection(section.heading))
  }));

  // A source is one link, or approved HTML when one line groups several links,
  // as the English Europe festivals page does for the official sites.
  const sourceLink = ({href, label, html}) => html ? `<li>${html}</li>` : `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

  const articleHtml = [
    articleHero({
      lang,
      kicker: content.heroKicker,
      title: content.heroTitle,
      deck: content.deck,
      readingTime: copy.readingTime(minutes),
      dateModified: content.dateModified,
      dateLabel: content.dateLabel,
      ...(answer ? {summaryHtml: infoBanner({label: content.answerLabel, bodyHtml: inline(answer[0]), className: 'article-summary'})} : {}),
      tocItems
    }),
    content.introTitle
      ? articleSection({id: 'introduction', title: content.introTitle, bodyHtml: render(getSection(content.introSection)), className: 'article-intro'})
      : `<section class="floating-block article-section article-intro">${render(getSection(content.introSection))}</section>`,
    // The owner's two mixes, in the same two places as on every festival guide:
    // one mid-guide after the history section, one before the FAQ. Only where
    // the English page carries them.
    ...sectionHtml.flatMap((html, index) => content.ownSetAfter && content.sections[index].id === content.ownSetAfter ? [html, ownSetListening(0, lang)] : [html]),
    ...(content.ownSetAfter ? [ownSetListening(1, lang)] : []),
    ...(content.faqSection ? [articleFaq({lang, items: faqItems, title: content.faqTitle, openFirst: true})] : []),
    authorCard({filled: true, lang}),
    articleSources({lang, bodyHtml: `<ul>\n${content.sources.map(sourceLink).join('\n')}${content.sourcesNote ? `\n<li>${escapeHtml(content.sourcesNote)}</li>` : ''}\n</ul>`}),
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
      ...(faqItems.length ? [faqStructuredData({items: faqItems})] : [])
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
      // home.mjs and selector.mjs sit here too, as the copy of the translated
      // home page and Selector; their own generators build them, and a guide's
      // module is the only kind that exports a page object
      if (!module.default || typeof module.default !== 'object') continue;
      built.push(buildLocalizedArticle(module.default));
    }
  }
  return built;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const built = await buildAllLocalizedArticles();
  for (const file of built) console.log(`Built ${file}`);
}
