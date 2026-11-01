// Shared builder for the festival roundups that follow the US guide's shape:
// a list for choosing, how it was chosen, a dated table, the questions people
// ask, what was left out, how to choose, FAQ, sources.
//
// Each build-*-festivals-article.mjs passes its copy file and its page data.
// In the draft, "![alt](figure:key)" places whatever `media` holds under that
// key: a figure, a set, the dates table or one of the owner's mixes.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownPlaylistListening, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

const slug = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/,.*$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

export const figureSet = dir => (name, width, height, alt, caption) => articleFigure({
  src: `img/${dir}/${name}-1200.webp`,
  srcset: `img/${dir}/${name}-320.webp 320w, img/${dir}/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export const singleSet = ({label, description, youtubeId, genre, artist, title}) => articleVideoCollection({
  label, description, items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export function buildRoundup({file, path, draftFile, title, description, date, dateLabel, kicker, h1, deck, answer, bannerLabel, introTitle, faqTitle, sections, table, media, sourcesHtml, breadcrumb, ogName, bodyClass}) {
  const draft = fs.readFileSync(draftFile, 'utf8');
  const canonical = `https://thecatrave.com${path}`;

  const getSection = heading => {
    const start = draft.indexOf(`\n## ${heading}\n`);
    if (start < 0) throw new Error(`Missing section: ${heading}`);
    const bodyStart = draft.indexOf('\n', start + 1) + 1;
    const next = draft.indexOf('\n## ', bodyStart);
    return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
  };

  const placed = {
    table: articleTable(table),
    playlist: ownPlaylistListening('rare-electronic-music'),
    'first-mix': ownSetListening(0),
    'second-mix': ownSetListening(1),
    track: ownTrackListening('late-summer-cloud-dance', 'A track of mine, to listen to between festivals.'),
    ...media
  };

  const renderBlock = block => {
    const marker = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
    if (marker) {
      if (!placed[marker[1]]) throw new Error(`Missing media: ${marker[1]}`);
      return placed[marker[1]];
    }
    if (block.startsWith('### ')) {
      const name = block.slice(4).trim();
      return `<h3 id="${slug(name)}">${inline(name)}</h3>`;
    }
    if (block.startsWith('- ')) {
      return `<ul>${block.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
    }
    return `<p>${inline(block)}</p>`;
  };
  const join = list => list.map(renderBlock).join('\n');

  const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [q, ...rest] = block.split('\n');
    const body = rest.join('\n').trim();
    return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(paras(body))};
  });

  const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

  const articleHtml = [
    articleHero({
      kicker, title: h1, deck, readingTime, dateModified: date, dateLabel,
      summaryHtml: infoBanner({label: bannerLabel, bodyHtml: inline(answer), className: 'article-summary'}),
      tocItems: sections.map(([, id, label]) => ({id, label}))
    }),
    articleSection({id: 'introduction', title: introTitle, bodyHtml: join(paras(getSection('Introduction'))), className: 'article-intro'}),
    ...sections.map(([heading, id]) => articleSection({
      id, title: /\?$/.test(heading) ? heading : `${heading}.`, bodyHtml: join(paras(getSection(heading)))
    })),
    articleFaq({items: faqItems, title: faqTitle, openFirst: true}),
    authorCard({filled: true}),
    articleSources({bodyHtml: sourcesHtml}),
    bandcampSupport({
      fullBleed: true,
      description: 'Between festivals, the music I make myself: breaks with techno and dub in them. Buying one supports my work directly.',
      tracks: [
        {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
        {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
      ]
    }),
    readNext({items: relatedArticles(file)})
  ].join('\n');

  const structuredData = [
    articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
    breadcrumbStructuredData({name: breadcrumb, canonical}),
    faqStructuredData({items: faqItems})
  ];

  const html = articlePage({
    title, description, canonical,
    alternates: alternatesFor(path),
    ogImage: `https://thecatrave.com/img/og/${ogName}.jpg`,
    datePublished: date, dateModified: date,
    bodyClass: `article-page ${bodyClass}`,
    structuredData, articleHtml
  });

  fs.writeFileSync(file, html);
  console.log(`Built ${file}`);
}
