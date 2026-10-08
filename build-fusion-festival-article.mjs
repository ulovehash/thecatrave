// Build fusion-festival.html from fusion-festival-draft.md.
//
// Intent: "fusion festival" (1K to 10K) and its long tail (Keyword Planner, ranges
// only; keywords/fusion-festival.json). Facts come from the official Fusion pages
// (fusion-festival.de, tickets.fusion-festival.de), the taz and GMX, all read on
// 2026-10-05 (see Sources). 2027 is a Fusion-free year: there is no 2027 edition,
// so the page is built around the 2026 recap, the gap and the 28 June to 2 July
// 2028 dates. No 2028 ticket dates, prices or programme were published.
//
// Maintenance: registered in festival-editions.mjs with ends 2028-07-02. When the
// 2028 ticket registration opens, rewrite the tickets section from the official
// ticket shop. After 2028, roll the block to 2029 or the next break year.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('fusion-festival-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/fusion-festival';
const title = 'Fusion Festival, Lärz Germany: 2027, 2028 Dates, Tickets';
const description = 'Fusion Festival in Lärz, Germany: why there is no 2027 edition, the 2028 dates, how the ticket lottery works, the 2019 police dispute, stages and how to get there.';
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
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/fusion-festival/${name}-1200.webp`,
  srcset: `img/fusion-festival/${name}-320.webp 320w, img/fusion-festival/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  palapa: fig('palapa-2019', 1200, 675,
    'The Palapa stage at night during Fusion Festival 2019, with a crowd in purple light and an orange umbrella',
    'The Palapa stage during a concert by Meute, Fusion Festival, 27 June 2019. Photograph: San Andreas, CC BY-SA 4.0.'),
  ravesticks: fig('ravesticks-2024', 1200, 380,
    'A crowd holding ravesticks on the Sonnendeck floor at Fusion Festival 2024',
    'Ravesticks on the Sonnendeck floor, Fusion Festival, 29 June 2024. Photograph: Kerospam, CC BY-SA 4.0.'),
  railcar: fig('railcar-neustrelitz-2016', 1200, 801,
    'Festival-goers boarding a regional railcar at Neustrelitz station on the way to Fusion Festival in 2016',
    'Festival-goers at Neustrelitz station, 29 June 2016. Photograph: JoachimKohler-HB, CC BY-SA 4.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: `Fusion Festival ${block.split('\n')[0].split('|').slice(1, -1).map(c => c.trim().toLowerCase()).join(' and ')}`, headers: rows[0], rows: rows.slice(1)});
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

// Sets from selector-data.json, by artists on the 2026 programme page, oEmbed-checked
// 2026-10-05. None was recorded at Fusion and the page says so.
const sets = articleVideoCollection({
  label: 'Sets by Fusion artists from the catalogue',
  description: 'Four sets from the Selector catalogue, all from Boiler Room, by artists on the 2026 Fusion programme. None was recorded at Fusion.',
  items: [
    articleVideoCard({youtubeId: 'EfZu4BCi644', genre: 'Electronic', artist: 'Acid Pauli', title: 'Boiler Room Tulum DJ set'}),
    articleVideoCard({youtubeId: 'H_WP3TRJfFk', genre: 'Electronic', artist: 'Apparat', title: 'Boiler Room Berlin DJ set'}),
    articleVideoCard({youtubeId: 'oNYarqQNev0', genre: 'Techno', artist: 'Rødhåd', title: 'Boiler Room x Glitch Festival 2023'}),
    articleVideoCard({youtubeId: '02PstSNvln0', genre: 'House', artist: 'Gerd Janson', title: 'Boiler Room x Sugar Mountain 2018 DJ set'})
  ]
});

const firstMix = ownSetListening(0, 'en', 'My own mix, to play while you plan the weekend.');
const secondMix = ownSetListening(1, 'en', 'A second mix of my own, for the journey.');

const tocItems = [
  {id: 'what-is', label: 'What is Fusion Festival?'},
  {id: 'fusion-2026', label: 'Fusion Festival 2026'},
  {id: 'dates', label: 'Fusion Festival 2027 and 2028'},
  {id: 'tickets', label: 'Tickets and the lottery'},
  {id: 'larz', label: 'Lärz and Kulturkosmos'},
  {id: 'police', label: 'The police dispute'},
  {id: 'lineup', label: 'Lineup and sets'},
  {id: 'travel', label: 'How to get there'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const lineupHtml = `${join(sec('Fusion Festival lineup'))}${sets}`;

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2028',
    title: 'Fusion Festival in Lärz, Germany: 2027 gap, 2028 dates and tickets',
    deck: 'The Kulturkosmos festival on a former Soviet airfield: why 2027 is a Fusion-free year, when 2028 is, how the lottery works and how to get there.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Fusion Festival dates', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival that skips a year.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Fusion Festival?', bodyHtml: `${join(sec('What is Fusion Festival?'))}${firstMix}`}),
  articleSection({id: 'fusion-2026', title: 'Fusion Festival 2026', bodyHtml: join(sec('Fusion Festival 2026'))}),
  articleSection({id: 'dates', title: 'Fusion Festival 2027 and 2028', bodyHtml: join(sec('Fusion Festival 2027 and 2028'))}),
  articleSection({id: 'tickets', title: 'Fusion Festival tickets', bodyHtml: join(sec('Fusion Festival tickets'))}),
  articleSection({id: 'larz', title: 'Fusion Festival Lärz and Kulturkosmos', bodyHtml: join(sec('Fusion Festival Lärz and Kulturkosmos'))}),
  articleSection({id: 'police', title: 'Fusion Festival police dispute', bodyHtml: join(sec('Fusion Festival police dispute'))}),
  articleSection({id: 'lineup', title: 'Fusion Festival lineup', bodyHtml: lineupHtml}),
  articleSection({id: 'travel', title: 'How to get there', bodyHtml: `${join(sec('How to get there'))}${secondMix}`}),
  articleFaq({items: faqItems, title: 'Fusion Festival FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>2028 dates and the 2027 gap, read on 5 October 2026: ${ext('https://tickets.fusion-festival.de/', 'Fusion Ticketshop')}.</li>
<li>Ticket lottery, 2026 price, 18+ rule, vehicle tickets, Bundeswehr reply, 2026 newsletters and the official FAQ (times, stages, rules, travel), read on 5 October 2026: ${ext('https://fusion-festival.de/', 'fusion-festival.de')}, English pages and news archive.</li>
<li>Organiser facts (Kulturkosmos Müritz, crews, programme elements): the official English festival page, read on 5 October 2026.</li>
<li>The 2019 security dispute: ${ext('https://taz.de/Die-Zukunft-des-Musikfestivals/!5595050/', 'taz, 25 May 2019')} and ${ext('https://www.gmx.ch/magazine/unterhaltung/musik/festivals/fusion-festival-oeffnet-langem-streit-polizei-tore-33805512', 'GMX, 25 June 2019')}.</li>
<li>Photographs: Wikimedia Commons, credited in each caption.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('fusion-festival.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Fusion Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/fusion-festival'),
  ogImage: 'https://thecatrave.com/img/og/fusion-festival.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page fusion-festival-page',
  structuredData, articleHtml
});

fs.writeFileSync('fusion-festival.html', html);
console.log('Built fusion-festival.html');
