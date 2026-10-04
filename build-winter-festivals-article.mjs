// Build best-winter-music-festivals.html from best-winter-music-festivals-draft.md.
//
// Intent: "winter music festivals" and the winter-rave / ski-festival variants
// (Keyword Planner, ranges only; keywords/best-winter-music-festivals.json).
// "tomorrowland winter" is taken by the Tomorrowland guide: it is named here,
// never targeted. Dates marked Confirmed were read on the festival's own site on
// 2026-10-04; the rest are listings and are labelled so.
//
// Maintenance: registered in festival-editions.mjs with ends null while the
// Astropolis dates are unconfirmed. Re-read every row after each announcement.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-winter-music-festivals-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-winter-music-festivals';
const title = 'Best Winter Music Festivals 2027: Snowbombing, Igloofest, CTM';
const description = 'Winter music festivals in 2027, from Tomorrowland Winter and Snowbombing to CTM, Elevate and Shapes, with dates marked confirmed or unconfirmed.';
const date = '2026-10-04';
const dateLabel = '4 October 2026'

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

// Images: Wikimedia Commons, new to this page, none reused from another guide.
const fig = (dir, name, width, height, alt, caption) => articleFigure({
  src: `img/${dir}/${name}-1200.webp`,
  srcset: `img/${dir}/${name}-320.webp 320w, img/${dir}/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'alpe-dhuez': fig('winter-festivals', 'alpe-dhuez-2026', 1200, 800,
    'The view from Pic Blanc over Alpe d\'Huez in April 2026',
    'The view from Pic Blanc over Alpe d\'Huez, April 2026. Photograph: DimiTalen, CC0.'),
  igloofest: fig('winter-festivals', 'igloofest-2009', 1200, 800,
    'Igloofest in Montreal in January 2009',
    'Igloofest in Montreal, January 2009. Photograph: Francis Bourgouin, CC BY 2.0.'),
  gstaad: fig('winter-festivals', 'gstaad-village', 1200, 900,
    'A panorama of the village of Gstaad in Switzerland',
    'Gstaad, Switzerland, November 2011. Photograph: GstaadTourismus, CC BY-SA 3.0.'),
  leysin: fig('winter-festivals', 'leysin-twilight', 1200, 675,
    'Leysin, Switzerland, at twilight',
    'Twilight in Leysin, Switzerland. Photograph: Deali00, CC BY-SA 4.0.'),
  elevate: fig('winter-festivals', 'elevate-2019-truth', 1200, 800,
    'White letters spelling Truth hung over a black curtain at Elevate Festival 2019 in Graz',
    '"Truth", the theme of Elevate Festival 2019 in Graz. Photograph: Jean-Frédéric, CC0.'),
  'caprices-set': articleVideoCollection({
    label: 'Caprices, heard from home',
    description: 'A Beatport stream from Caprices, 2021.',
    items: [articleVideoCard({youtubeId: '9nJngddp7XA', genre: 'Caprices, 2021', artist: 'Beatport', title: 'Beatport X Caprices'})]
  })
};

const slug = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/,.*$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('### ')) {
    const name = block.slice(4).trim();
    return `<h3 id="${slug(name)}">${inline(name)}</h3>`;
  }
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'Winter festival dates for 2027', headers: rows[0], rows: rows.slice(1)});
  }
  if (block.startsWith('- ')) {
    return `<ul>${block.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
  }
  return `<p>${inline(block)}</p>`;
};
const join = list => list.map(renderBlock).join('\n');
const sec = heading => blocks(getSection(heading));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(blocks(body))};
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'method', label: 'How this list was chosen'},
  {id: 'dates', label: 'Dates at a glance'},
  {id: 'biggest', label: 'The biggest'},
  {id: 'mountain', label: 'House and techno on a mountain'},
  {id: 'quiet', label: 'Rated, rarely searched'},
  {id: 'choose', label: 'How to choose'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Best winter music festivals 2027',
    deck: 'Which winter festivals are the biggest, which are best for house and techno on a mountain, and which the scene rates but few people search for, with every date marked confirmed or unconfirmed.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Winter music festivals 2027', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A different trip from a summer festival.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'method', title: 'How this list was chosen', bodyHtml: join(sec('How this list was chosen'))}),
  articleSection({id: 'dates', title: 'Winter festival dates for 2027 at a glance', bodyHtml: join(sec('Winter festival dates at a glance'))}),
  articleSection({id: 'biggest', title: 'Which winter festivals are the biggest?', bodyHtml: `${join(sec('Which winter festivals are the biggest?'))}${firstMix}`}),
  articleSection({id: 'mountain', title: 'Which winter festivals are best for house and techno on a mountain?', bodyHtml: join(sec('Which winter festivals are best for house and techno on a mountain?'))}),
  articleSection({id: 'quiet', title: 'Which winter festivals does the scene rate but few people search for?', bodyHtml: `${join(sec('Which winter festivals does the scene rate but few people search for?'))}`}),
  articleSection({id: 'choose', title: 'How to choose', bodyHtml: `${join(sec('How to choose'))}${secondMix}`}),
  articleFaq({items: faqItems, title: 'Winter music festivals FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Confirmed dates, read on 4 October 2026: <a href="https://igloofest.ca" target="_blank" rel="noopener noreferrer">Igloofest</a>, <a href="https://ctm-festival.de" target="_blank" rel="noopener noreferrer">CTM Festival</a>, <a href="https://elevate.at" target="_blank" rel="noopener noreferrer">Elevate</a>, <a href="https://shapesfestival.ch" target="_blank" rel="noopener noreferrer">Shapes</a> and <a href="https://snowbombing.com/info" target="_blank" rel="noopener noreferrer">Snowbombing</a>.</li>
<li>Listed dates (festival sites, ticket sellers and promoter pages, with a second source for each): Tomorrowland Winter, Snow Machine, Nameless Winter, Caprices, Hibernation, Rise and Contact Winter.</li>
<li>Press coverage of the quieter picks: Resident Advisor (CTM, Elevate, Shapes, Rise, Caprices), Pitchfork (CTM) and The Quietus (Elevate).</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-winter-music-festivals.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best winter music festivals', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/best-winter-music-festivals'),
  ogImage: 'https://thecatrave.com/img/og/winter-festivals.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page winter-festivals-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-winter-music-festivals.html', html);
console.log('Built best-winter-music-festivals.html');
