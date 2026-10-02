// Build dekmantel-festival.html from dekmantel-draft.md.
//
// Intent: question-led festival guide (the Sónar template). Targets "dekmantel",
// "dekmantel festival", "dekmantel selectors" and the 2027 / tickets / dates /
// line up variants (Keyword Planner, all locations, ranges only;
// keywords/dekmantel.json). The URL has no year so it can be rolled forward.
//
// Maintenance: registered in festival-editions.mjs with ends: null. On
// 2026-10-02 the official site had not confirmed 2027 Amsterdam dates (listings
// say 28 July to 1 August) and Dekmantel Selectors was confirmed for 19 to 23
// August 2027. Set ends once the Amsterdam dates are official.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('dekmantel-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/dekmantel-festival';
const title = 'Dekmantel Festival 2027: Dates, Tickets, Selectors, Amsterdam';
const description = 'Dekmantel at the Amsterdamse Bos, 18+: 2027 dates (listed, not yet official), ticket rules, Selectors in Croatia on 19 to 23 August 2027 and sets to hear.';
const date = '2026-10-02';
const dateLabel = '2 October 2026';

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

// Images: Wikimedia Commons, new to this page. The Paradiso photograph is a
// different file from the one on the Amsterdam clubs guide.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/dekmantel/${name}-1200.webp`,
  srcset: `img/dekmantel/${name}-320.webp 320w, img/dekmantel/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  midland: fig('midland-2017', 1200, 799,
    'Midland playing a DJ set at Dekmantel Festival in 2017',
    'Midland at Dekmantel Festival, September 2017. Photograph: StealthManagementMusic, CC BY-SA 4.0.'),
  'oude-kerk': fig('oude-kerk-ceiling', 1200, 898,
    'The painted wooden ceiling inside the Oude Kerk in Amsterdam',
    'The ceiling of the Oude Kerk in Amsterdam, a Dekmantel venue. Photograph: C messier, CC BY-SA 4.0.'),
  paradiso: fig('paradiso-2018', 1200, 900,
    'The front of Paradiso in Amsterdam in June 2018',
    'Paradiso in Amsterdam, June 2018, a Dekmantel venue. Photograph: Marek Koudelka, CC BY-SA 4.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'The Dekmantel 2026 week, day by day', headers: rows[0], rows: rows.slice(1)});
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

// Sets from this site's catalogue (selector-data.json), uploaded by the
// festival's own channel, oEmbed-checked on 2026-10-02.
const loopSets = articleVideoCollection({
  label: 'Dekmantel, heard from home',
  description: 'Three sets from The Loop stage at Dekmantel Festival 2025, from the festival\'s own channel.',
  items: [
    articleVideoCard({youtubeId: 'E4NXVs4SlhE', genre: 'The Loop, 2025', artist: 'Four Tet', title: 'Four Tet at The Loop'}),
    articleVideoCard({youtubeId: 't5KwF_VsM50', genre: 'The Loop, 2025', artist: 'Honey Dijon', title: 'Honey Dijon at The Loop'}),
    articleVideoCard({youtubeId: 's14IS_wXrEQ', genre: 'The Loop, 2025', artist: 'Avalon Emerson', title: 'Avalon Emerson at The Loop'})
  ]
});
const radarSets = articleVideoCollection({
  label: 'RADAR, Dekmantel 2025',
  description: 'Two sets from the RADAR stage at Dekmantel Festival 2025, from the festival\'s own channel.',
  items: [
    articleVideoCard({youtubeId: 'MeLdwDfYkzg', genre: 'RADAR, 2025', artist: 'DJ Nobu', title: 'DJ Nobu at RADAR'}),
    articleVideoCard({youtubeId: 'seBCd51d3KM', genre: 'RADAR, 2025', artist: 'Fadi Mohem', title: 'Fadi Mohem at RADAR'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is Dekmantel?'},
  {id: 'dates', label: 'Dekmantel 2027 dates'},
  {id: 'where', label: 'Where it is held'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'selectors', label: 'Dekmantel Selectors'},
  {id: 'booking', label: 'What it books'},
  {id: 'listen', label: 'Sets to hear first'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Dekmantel Festival: 2027 dates, tickets and Selectors',
    deck: 'Amsterdam\'s electronic music festival: when it is in 2027, where it is held, how the tickets work, what Dekmantel Selectors in Croatia is and which sets to hear first.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Dekmantel Festival', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival that began as club nights.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Dekmantel Festival?', bodyHtml: `${join(sec('What is Dekmantel Festival?'))}${firstMix}`}),
  articleSection({id: 'dates', title: 'When is Dekmantel 2027?', bodyHtml: join(sec('When is Dekmantel 2027?'))}),
  articleSection({id: 'where', title: 'Where is Dekmantel held?', bodyHtml: join(sec('Where is Dekmantel held?'))}),
  articleSection({id: 'tickets', title: 'How do Dekmantel tickets work?', bodyHtml: join(sec('How do Dekmantel tickets work?'))}),
  articleSection({id: 'selectors', title: 'What is Dekmantel Selectors?', bodyHtml: join(sec('What is Dekmantel Selectors?'))}),
  articleSection({id: 'booking', title: 'What does Dekmantel book?', bodyHtml: `${join(sec('What does Dekmantel book?'))}${loopSets}`}),
  articleSection({id: 'listen', title: 'Which Dekmantel sets should you hear first?', bodyHtml: `${join(sec('Which Dekmantel sets should you hear first?'))}${radarSets}${secondMix}`}),
  articleFaq({items: faqItems, title: 'Dekmantel FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Programme, venues, ages, ticket rules, camping, shuttle and logistics, read on 2 October 2026: <a href="https://www.dekmantelfestival.com/faq" target="_blank" rel="noopener noreferrer">Dekmantel Festival FAQ</a>. The FAQ describes the 2026 edition.</li>
<li>Dekmantel Selectors dates, areas and format: <a href="https://www.dekmantelselectors.com/" target="_blank" rel="noopener noreferrer">dekmantelselectors.com</a>, read on 2 October 2026.</li>
<li>Unconfirmed 2027 Amsterdam dates: listings on Skiddle and I amsterdam, read on 2 October 2026.</li>
<li>History, founders and the 2024 tenth-anniversary edition: Time Out, "A decade of Dekmantel", and Casa, "A decade of Dekmantel Festival".</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('dekmantel-festival.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Dekmantel Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/dekmantel-festival'),
  ogImage: 'https://thecatrave.com/img/og/dekmantel.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page dekmantel-page',
  structuredData, articleHtml
});

fs.writeFileSync('dekmantel-festival.html', html);
console.log('Built dekmantel-festival.html');
