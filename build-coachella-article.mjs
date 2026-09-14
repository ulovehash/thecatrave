// Build what-is-coachella.html from coachella-draft.md.
//
// Festivals series (festivals-series.md), the first of the more popular
// festivals the owner asked for after Defqon.1 was parked. The structure and
// the evidence behind it are in coachella-research.md; TOPIC-RESEARCH.md
// stages 2, 4 and 6 were not run because the Ahrefs units ran out, and the
// owner asked for the page to be built from what was measured.
//
// Keywords (US, 12-month average, September 2026): what is coachella 35,000
// (TP 16,000, its own parent topic), where is coachella 17,000, when is
// coachella 16,000, coachella 2027 14,000, how long is coachella 7,200,
// coachella valley 6,600, where is coachella held 3,600, who owns coachella
// 1,800, how many people attend coachella 1,700, how many days is coachella
// 1,300, what is coachella festival 1,200, when did coachella start 1,100;
// plus forms from the owner's export of coachella.com's keywords. Line-ups,
// set times, tickets and artist pairings are excluded. See
// keywords/coachella.json.
//
// The catalogue behind the Selector holds no Coachella set, so the players
// come from the festival's YouTube channel and the artists' own, oEmbed-checked.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines, so placement is decided in the draft and only rendered
// here. A placeholder with no matching asset fails the build, and so does an
// asset with no placeholder.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('coachella-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/what-is-coachella';
const title = 'What Is Coachella? Where It Is, When, and the Music';
const description = 'What is Coachella: the festival at the Empire Polo Club in Indio, California, when Coachella 2027 is, how long it lasts, how big it is, who owns it, and what plays.';
const date = '2026-09-14';
const dateLabel = '14 September 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
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

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

// All four from Wikimedia Commons, downloaded to img/coachella/, used by no
// other guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/coachella/${name}-${width}.webp`,
  srcset: `img/coachella/${name}-320.webp 320w, img/coachella/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-14.
const media = {
  'Coachella18W1-18': figure('grounds-2018', 1200, 677,
    'Festivalgoers on the grass at Coachella in 2018, palm trees and a tall tower of coloured panels behind them, desert mountains and the Ferris wheel on the horizon',
    'The festival grounds in April 2018: palm trees, desert mountains, a coloured tower and the Ferris wheel. Photograph: Raph_PH, CC BY 2.0.'),
  'Coachella 2006, Barry Mulling': figure('tent-2006', 1200, 900,
    'A crowd under a white festival tent at Coachella in 2006, a band on the stage, speakers hanging from the roof and palm trees in evening light beyond the open side',
    'A set under one of the tents at Coachella in April 2006, the year of Daft Punk\'s pyramid and Madonna\'s set in the dance tent. Photograph: Barry Mulling, CC BY-SA 2.0.'),
  'Outdoor Theatre, Shawn Ahmed': figure('outdoor-theatre-2014', 1200, 801,
    'A large crowd facing the Outdoor Theatre stage at dusk in 2014, screens either side of the stage and palm trees along the edge of the field',
    'The Outdoor Theatre at dusk on the second weekend of 2014. Photograph: Shawn Ahmed, CC BY 2.0.'),
  'Sahara Tent, Shawn Ahmed': figure('sahara-2014', 1200, 801,
    'The inside of the Sahara tent at night in 2014, its arched steel frame lit green and white above a packed crowd',
    'The Sahara tent at night on the second weekend of 2014, the stage built for Coachella\'s electronic headliners. Photograph: Shawn Ahmed, CC BY 2.0.'),
  // Views read from the festival's channel on 2026-09-14: about 10 million.
  'o0QGw1LZpxM': youtube('o0QGw1LZpxM', 'Diljit Dosanjh, G.O.A.T., live in the Sahara tent at Coachella 2023, on the Coachella YouTube channel'),
  // The closing listening: the legendary and most-watched sets (the owner,
  // 2026-09-13). Views read from YouTube on 2026-09-14: FISHER's "Losing It"
  // from 12 April 2019, about 77 million on the festival's channel, its most
  // watched video; Fatboy Slim's full 2026 set, about 1.1 million on his
  // channel, footage by Goldenvoice. The festival's channel carries no full
  // headline set among its most watched uploads.
  'oUbpmjOgmmU': articleVideoCollection({
    label: 'Coachella, most watched',
    description: 'FISHER playing "Losing It" in 2019, the most watched video on the festival\'s own channel; and Fatboy Slim\'s full set from 2026, nearly two hours, on his.',
    items: [
      articleVideoCard({youtubeId: 'oUbpmjOgmmU', genre: 'Coachella, 2019', artist: 'FISHER', title: 'Losing It, Live at Coachella 2019'}),
      articleVideoCard({youtubeId: 'fQqusBEnwM4', genre: 'Coachella, 2026', artist: 'Fatboy Slim', title: 'Coachella 2026, full set'})
    ]
  }),
  // Attendance and gross from en.wikipedia's history section, which counts
  // admissions across the days of each edition. Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Format', 'Attendance', 'Gross'],
    rows: [
      ['1999', 'Two days, October', 'about 37,000 tickets', 'lost $850,000'],
      ['2001', 'One day, April', '32,000', 'a loss'],
      ['2002', 'Two days', 'more than 55,000', 'nearly broke even'],
      ['2004', 'Two days', '110,000', 'first sellout'],
      ['2006', 'Two days', 'about 120,000', '$9 million'],
      ['2007', 'Three days', '186,000', '$16.3 million'],
      ['2010', 'Three days', 'about 225,000', '$21.7 million'],
      ['2012', 'Two weekends', '158,387 paid', '$47.3 million'],
      ['2014', 'Two weekends', '96,500 a day', '$78.3 million'],
      ['2017', 'Two weekends', '250,000', '$114.6 million'],
      ['2020 and 2021', '', 'Cancelled for the pandemic', ''],
      ['2025', 'Two weekends', 'about 245,000 (estimate)', ''],
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).find(k => p.includes(k));
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
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

// The next-edition section comes first: its year is refreshed every April
// when the festival ends (festival-editions.mjs reminds the build).
const sections = [
  {id: 'coachella-2027', heading: 'Coachella 2027: dates', title: 'Coachella 2027: dates.'},
  {id: 'where', heading: 'Where Coachella is', title: 'Where Coachella is.'},
  {id: 'when', heading: 'When Coachella is, and how long it lasts', title: 'When Coachella is, and how long it lasts.'},
  {id: 'how-big', heading: 'How big Coachella is', title: 'How big Coachella is.'},
  {id: 'history', heading: 'A short history, and who owns Coachella', title: 'A short history, and who owns Coachella.'},
  {id: 'stages', heading: 'The Coachella stages', title: 'The Coachella stages.'},
  {id: 'famous', heading: 'Why Coachella is famous', title: 'Why Coachella is famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Coachella from home', title: 'Hearing Coachella from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Coachella',
    title: 'What Is Coachella?',
    deck: 'Two weekends every April on a polo field in the California desert. When the next one is, where it happens, how big it is, who owns it, and what plays in the Sahara tent.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Coachella', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A gamble on a polo field.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Coachella FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Coachella', 'Wikipedia: Coachella')}
${sourceLink('https://en.wikipedia.org/wiki/Empire_Polo_Club', 'Wikipedia: Empire Polo Club')}
${sourceLink('https://www.youtube.com/@Coachella', 'Coachella on YouTube (2027 dates, view counts)')}
${sourceLink('https://djmag.com/news/coachella-announces-2027-dates', 'DJ Mag: Coachella announces 2027 dates')}
${sourceLink('https://news.pollstar.com/2026/04/20/coachella-unveils-2027-dates-ticket-info/', 'Pollstar: Coachella unveils 2027 dates and ticket info')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('what-is-coachella.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'What Is Coachella?', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/coachella.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page coachella-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('what-is-coachella.html', html);
console.log('Built what-is-coachella.html');
