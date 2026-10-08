// Build snowbombing-festival.html from snowbombing-draft.md.
//
// Intent: "snowbombing 2027" and "snowbombing" (Keyword Planner, ranges only;
// keywords/snowbombing-festival.json). Facts come from snowbombing.com read on
// 2026-10-04. Its FAQ still carries 2026 text in places, so 2027 dates come from
// the "When is Snowbombing 2027?" answer and the booking page.
//
// Maintenance: registered in festival-editions.mjs with ends 2027-04-10.
// Re-read the lineup, package prices and dates after each announcement.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('snowbombing-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/snowbombing-festival';
const title = 'Snowbombing 2027: Dates, Tickets, Mayrhofen';
const description = 'Snowbombing 2027 runs 5 to 10 April in Mayrhofen, Austria. Dates, how packages and tickets work, where it is held and who plays.';
const date = '2026-10-04';
const dateLabel = '4 October 2026';

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
  src: `img/snowbombing/${name}-1200.webp`,
  srcset: `img/snowbombing/${name}-320.webp 320w, img/snowbombing/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'street-party': fig('street-party-2016', 1200, 800,
    'The Snowbombing Street Party in Mayrhofen in April 2016',
    'The Snowbombing Street Party, April 2016. Photograph: Snowbombingofficial, CC BY-SA 4.0.'),
  mayrhofen: fig('mayrhofen-aerial', 1200, 675,
    'Aerial view of Mayrhofen in the Zillertal, Austria',
    'Mayrhofen in the Zillertal. Photograph: Wolkenkratzer, CC BY-SA 4.0.'),
  penken: fig('penken', 1200, 728,
    'The Penken ski area above Mayrhofen',
    'The Penken area above Mayrhofen. Photograph: Eiswind, CC BY 3.0.'),
  'snow-shot': fig('mountain-stage-2018', 1200, 801,
    'A mountain stage at Snowbombing in April 2018',
    'A mountain stage at Snowbombing, April 2018. Photograph: Snowbombingofficial, CC BY-SA 4.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'Snowbombing', headers: rows[0], rows: rows.slice(1)});
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

// Sets from this site's catalogue (selector-data.json), oEmbed-checked 2026-10-04.
const festivalSet = articleVideoCollection({
  label: 'Snowbombing, heard from home',
  description: 'Fatboy Slim\'s secret mountaintop DJ set at Snowbombing, uploaded by DJ Mag.',
  items: [
    articleVideoCard({youtubeId: 'ZUPjBgE_gJg', genre: 'Snowbombing', artist: 'Fatboy Slim', title: 'Fatboy Slim, Secret Mountain Top DJ Set At Snowbombing Festival'})
  ]
});
const billSets = articleVideoCollection({
  label: 'Snowbombing 2027 acts, in the rooms they usually play',
  description: 'Recorded sets by five acts from the 2027 bill.',
  items: [
    articleVideoCard({youtubeId: '23Oh1LHavuE', genre: 'Boiler Room London', artist: 'Andy C', title: 'Andy C at Boiler Room London'}),
    articleVideoCard({youtubeId: 'djsItMOfCQA', genre: 'Boiler Room London', artist: 'Basement Jaxx', title: 'Basement Jaxx at Boiler Room London'}),
    articleVideoCard({youtubeId: 'wPIFUWOLc2A', genre: 'Boiler Room x AVA Festival', artist: 'Bicep', title: 'Bicep at Boiler Room x AVA Festival'}),
    articleVideoCard({youtubeId: 'PrTjyNLJIkI', genre: 'Boiler Room London', artist: 'Rossi.', title: 'Rossi. at Boiler Room London'}),
    articleVideoCard({youtubeId: 'A59i7lby9KY', genre: 'Boiler Room Melbourne', artist: 'Skream & Benga', title: 'Skream & Benga at Boiler Room Melbourne'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is Snowbombing?'},
  {id: 'dates', label: 'Snowbombing 2027 dates'},
  {id: 'where', label: 'Where it is held'},
  {id: 'tickets', label: 'Tickets and packages'},
  {id: 'lineup', label: 'Who plays'},
  {id: 'listen', label: 'Sets to hear first'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Snowbombing 2027: dates, tickets and Mayrhofen',
    deck: 'The ski and music festival in the Austrian Alps: when it runs in 2027, how the packages and wristbands work, where it is held and who plays.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Snowbombing 2027', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A week in the mountains with the music built in.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Snowbombing?', bodyHtml: `${join(sec('What is Snowbombing?'))}${firstMix}`}),
  articleSection({id: 'dates', title: 'When is Snowbombing 2027?', bodyHtml: join(sec('When is Snowbombing 2027?'))}),
  articleSection({id: 'where', title: 'Where is Snowbombing held?', bodyHtml: join(sec('Where is Snowbombing held?'))}),
  articleSection({id: 'tickets', title: 'How do Snowbombing tickets work?', bodyHtml: join(sec('How do Snowbombing tickets work?'))}),
  articleSection({id: 'lineup', title: 'Who plays Snowbombing 2027?', bodyHtml: join(sec('Who plays Snowbombing 2027?'))}),
  articleSection({id: 'listen', title: 'Which Snowbombing sets should you hear first?', bodyHtml: `${join(sec('Which Snowbombing sets should you hear first?'))}${festivalSet}${billSets}${secondMix}`}),
  articleFaq({items: faqItems, title: 'Snowbombing FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Dates, ticket rules, wristband access, travel and age limit, read on 4 October 2026: <a href="https://snowbombing.com/info" target="_blank" rel="noopener noreferrer">Snowbombing info and FAQ</a>. Parts of the FAQ still describe 2026.</li>
<li>Packages, prices and deposit, read on 4 October 2026: <a href="https://snowbombing.com/book" target="_blank" rel="noopener noreferrer">snowbombing.com/book</a>.</li>
<li>Venues, resort and line-up, read on 4 October 2026: <a href="https://snowbombing.com/experience/venues" target="_blank" rel="noopener noreferrer">venues</a>, <a href="https://snowbombing.com/experience/mayrhofen" target="_blank" rel="noopener noreferrer">Mayrhofen</a> and <a href="https://snowbombing.com/experience/lineup" target="_blank" rel="noopener noreferrer">line-up</a> pages.</li>
<li>Past editions: <a href="https://snowbombing.com/previous-lineups/snowbombing-2026" target="_blank" rel="noopener noreferrer">snowbombing.com previous line-ups</a>.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('snowbombing-festival.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Snowbombing', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/snowbombing-festival'),
  ogImage: 'https://thecatrave.com/img/og/snowbombing.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page snowbombing-page',
  structuredData, articleHtml
});

fs.writeFileSync('snowbombing-festival.html', html);
console.log('Built snowbombing-festival.html');
