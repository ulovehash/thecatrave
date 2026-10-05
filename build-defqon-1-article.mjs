// Build defqon-1.html from defqon-1-draft.md.
//
// Intent: Defqon.1 2027 and its long tail (Keyword Planner, ranges only;
// keywords/defqon-1.json). Facts come from Q-dance pages, IQ Magazine, NL Times,
// Hardstyle Mag and The Music Network, all read on 2026-10-05 (see Sources).
// The 2027 dates are published; 2027 prices, stage genres and the lineup were
// not stated on the pages read.
//
// Maintenance: registered in festival-editions.mjs with ends 2027-06-27. Before
// the festival, re-read the sales schedule, prices, lineup and travel pages as
// Q-dance publishes them. After it, rewrite the dates block for 2028.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('defqon-1-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/defqon-1';
const title = 'Defqon.1 2027: Dates, Tickets, Sale Dates, Line-up';
const description = 'Defqon.1 2027: dates, how the ticket sales work, why 2026 was cancelled, where it is held, the stage colours and how to get there.';
const date = '2026-10-05';
const dateLabel = '5 October 2026';

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
// The UV and endshow files are 1090 and 1200 pixels wide: the Commons originals
// could not be saved by file in this session, so they were captured at screen size.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/defqon-1/${name}-1200.webp`,
  srcset: `img/defqon-1/${name}-320.webp 320w, img/defqon-1/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  red: fig('red-stage-2023', 1280, 720,
    'The Red main stage at Defqon.1 2023 in daylight, with a crowd in front',
    'The Red main stage at Defqon.1, 23 June 2023. Photograph: DELTAFXUniverse, CC BY-SA 4.0.'),
  endshow: fig('endshow-2018', 1200, 674,
    'Red fireworks above the main stage during the Defqon.1 Sunday endshow',
    'The Sunday endshow at Defqon.1, 24 June 2018. Image: Ss279, CC BY-SA 4.0.'),
  uv: fig('uv-stage-2018', 1090, 818,
    'The UV stage at Defqon.1 at sunset, with a crowd walking on the grass',
    'The UV stage at sunset, Defqon.1, 23 June 2018. Photograph: arjennn_, CC BY-SA 4.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: `Defqon.1 ${block.split('\n')[0].split('|')[1].trim().toLowerCase()}`, headers: rows[0], rows: rows.slice(1)});
  }
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
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

// Sets from selector-data.json, hardstyle-tagged, oEmbed-checked 2026-10-05.
// None was recorded at Defqon.1 and the page says so.
const hardstyleSets = articleVideoCollection({
  label: 'Hardstyle sets from the catalogue',
  description: 'Three hardstyle sets from the Selector catalogue, from Boiler Room and DJ Mag. None was recorded at Defqon.1.',
  items: [
    articleVideoCard({youtubeId: 'hl_dtNxuSoI', genre: 'Hardstyle', artist: 'The Horrorist', title: 'Boiler Room Berlin live set'}),
    articleVideoCard({youtubeId: 'ITYiefRoRE0', genre: 'Hardstyle', artist: 'Sub Zero Project', title: 'Hardstyle set live from Wasteland 2026'}),
    articleVideoCard({youtubeId: 'GYEcEGThh-M', genre: 'Hardstyle', artist: 'Loud373', title: 'Boiler Room Uzbekistan: Sublimation'})
  ]
});

const firstMix = ownSetListening(0, 'en', 'My own mix, to play while you plan the weekend.');
const secondMix = ownSetListening(1, 'en', 'A second mix of my own, for the journey.');

const tocItems = [
  {id: 'what-is', label: 'What is Defqon.1?'},
  {id: 'dates', label: 'Defqon.1 2027 dates'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'cancelled', label: 'Defqon.1 2026 cancelled'},
  {id: 'lineup', label: 'Lineup'},
  {id: 'location', label: 'Location'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

// The lineup section holds the sets after its "Defqon.1 sets" paragraph.
const lineupBlocks = sec('Defqon.1 lineup');
const lineupHtml = `${join(lineupBlocks)}${hardstyleSets}`;

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Defqon.1 2027: dates, tickets, sale dates and line-up',
    deck: 'The Biddinghuizen hardstyle festival: when 2027 is, how the sales stages work, why 2026 was cancelled and how to get there.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Defqon.1 2027 dates', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival that changed its rules.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Defqon.1 festival?', bodyHtml: `${join(sec('What is Defqon.1 festival?'))}${firstMix}`}),
  articleSection({id: 'dates', title: 'Defqon.1 2027 dates', bodyHtml: join(sec('Defqon.1 2027 dates'))}),
  articleSection({id: 'tickets', title: 'Defqon.1 tickets', bodyHtml: join(sec('Defqon.1 tickets'))}),
  articleSection({id: 'cancelled', title: 'Defqon.1 2026 cancelled', bodyHtml: join(sec('Defqon.1 2026 cancelled'))}),
  articleSection({id: 'lineup', title: 'Defqon.1 lineup', bodyHtml: lineupHtml}),
  articleSection({id: 'location', title: 'Defqon.1 location', bodyHtml: `${join(sec('Defqon.1 location'))}${secondMix}`}),
  articleFaq({items: faqItems, title: 'Defqon.1 FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>2027 dates, sales schedule, ticket types, payment methods, opening times, age rule and stages, read on 5 October 2026: ${ext('https://www.q-dance.com/l/defqon1-2027', 'Q-dance Defqon.1 2027')} and the Q-dance event and ticket FAQ pages linked from it.</li>
<li>The 2026 cancellation and refund options, FAQ updated 30 June 2026, read on 5 October 2026: the Q-dance update page for Defqon.1 2026.</li>
<li>2026 travel, parking and shuttle prices, read on 5 October 2026: ${ext('https://www.q-dance.com/l/defqon1-ayntk-2026-travel-to-defqon1', 'Q-dance travel to Defqon.1, 2026')}.</li>
<li>The cancellation reports: ${ext('https://www.iqmagazine.com/', 'IQ Magazine, 26 June 2026')} and ${ext('https://nltimes.nl/', 'NL Times, 1 July 2026')}.</li>
<li>History: Hardstyle Mag and ${ext('https://www.edm-lab.com/en/events/defqon-1-2022/', 'EDM Lab, 2022')}. Defqon.1 Australia: The Music Network, 30 May 2019.</li>
<li>Secondary source for extra stage colours, not confirmed officially: hardcult.com.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('defqon-1.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Defqon.1', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/defqon-1'),
  ogImage: 'https://thecatrave.com/img/og/defqon-1.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page defqon-1-page',
  structuredData, articleHtml
});

fs.writeFileSync('defqon-1.html', html);
console.log('Built defqon-1.html');
