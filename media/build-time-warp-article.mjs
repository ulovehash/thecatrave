// Build time-warp-festival.html from time-warp-draft.md.
//
// Intent: "time warp festival" and the edition names (Keyword Planner, ranges
// only; keywords/time-warp-festival.json). "time warp" and "time warp song" are
// the Rocky Horror song and are not targeted. Facts come from time-warp.de read
// on 2026-10-04: home page, /germany/mannheim/, /history/, /tickets/ and the
// ticket shop at tickets.time-warp.de.
//
// Maintenance: registered in festival-editions.mjs with ends 2027-04-04 (the
// Mannheim edition runs overnight). Re-read the lineup, pass prices and the
// edition table after each announcement.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('time-warp-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/time-warp-festival';
const title = 'Time Warp Festival 2027: Mannheim, Tickets, Line-up';
const description = 'Time Warp 2027: when the Mannheim original runs, which cities host an edition, how tickets work and who plays.';
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
  src: `img/time-warp/${name}-1200.webp`,
  srcset: `img/time-warp/${name}-320.webp 320w, img/time-warp/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'crowd-2006': fig('tdk-2006', 1200, 900,
    'A packed dance floor facing a stage with video screens at Time Warp in 2006',
    'A crowd at Time Warp, 2006. Photograph: ftf, CC BY-SA 2.5.'),
  'neo-quimica': fig('neo-quimica-arena', 1200, 675,
    'The Neo Química Arena stadium in São Paulo at night, with a giant screen on its outer wall',
    'The Neo Química Arena in São Paulo, the venue of Time Warp Brasil in 2026, photographed in 2018 as Arena Corinthians. Photograph: Jorge Morales Piderit, CC0.'),
  'kruse-2016': fig('monika-kruse-2016', 1200, 800,
    'Monika Kruse behind the decks at Time Warp in Mannheim, high-fiving a person in front of the booth',
    'Monika Kruse at Time Warp in Mannheim, 2 April 2016. Photograph: Klaus Dieter Kieslich, CC BY-SA 4.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'Time Warp editions', headers: rows[0], rows: rows.slice(1)});
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
  label: 'Time Warp, heard from home',
  description: 'Loco Dice for Mixmag, titled Time Warp 2018.',
  items: [
    articleVideoCard({youtubeId: '9EkbEJuLzFo', genre: 'Time Warp', artist: 'Loco Dice', title: 'LOCO DICE. Time Warp 2018'})
  ]
});
const newYorkSets = articleVideoCollection({
  label: 'Time Warp US, in a New York studio',
  description: 'Three Mixmag sets filmed in The Lab NYC under the Time Warp US name.',
  items: [
    articleVideoCard({youtubeId: 'IliynzY39jE', genre: 'Time Warp US', artist: 'Seth Troxler', title: 'Time Warp US | Seth Troxler soulful deep tech set in The Lab NYC'}),
    articleVideoCard({youtubeId: 'eAmsviQcvhg', genre: 'Time Warp US', artist: 'Monkey Safari', title: 'Time Warp US | Monkey Safari house set in The Lab NYC'}),
    articleVideoCard({youtubeId: 'T62-tdTu3BI', genre: 'Time Warp US', artist: 'Thugfucker', title: 'Time Warp US | Thugfucker tech-house set in The Lab NYC'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is Time Warp?'},
  {id: 'dates', label: 'Time Warp 2027 dates'},
  {id: 'where', label: 'Where it is held'},
  {id: 'editions', label: 'Editions outside Mannheim'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'lineup', label: 'Who plays'},
  {id: 'listen', label: 'Sets to hear first'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Time Warp Festival 2027: Mannheim, tickets and line-up',
    deck: 'The techno and house festival that began in 1994: when the Mannheim original runs in 2027, which cities host an edition, how tickets work and who plays.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Time Warp 2027', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One name, several festivals.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Time Warp festival?', bodyHtml: `${join(sec('What is Time Warp festival?'))}${firstMix}`}),
  articleSection({id: 'dates', title: 'When is Time Warp 2027?', bodyHtml: join(sec('When is Time Warp 2027?'))}),
  articleSection({id: 'where', title: 'Where is Time Warp held in Mannheim?', bodyHtml: join(sec('Where is Time Warp held in Mannheim?'))}),
  articleSection({id: 'editions', title: 'Which Time Warp editions run outside Mannheim?', bodyHtml: join(sec('Which Time Warp editions run outside Mannheim?'))}),
  articleSection({id: 'tickets', title: 'How do Time Warp tickets work?', bodyHtml: join(sec('How do Time Warp tickets work?'))}),
  articleSection({id: 'lineup', title: 'Who plays Time Warp?', bodyHtml: `${join(sec('Who plays Time Warp?'))}${secondMix}`}),
  articleSection({id: 'listen', title: 'Which Time Warp sets should you hear first?', bodyHtml: `${join(sec('Which Time Warp sets should you hear first?'))}${festivalSet}${newYorkSets}`}),
  articleFaq({items: faqItems, title: 'Time Warp FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Mannheim date, hours, venue and age limit, read on 4 October 2026: ${ext('https://www.time-warp.de/germany/mannheim/', 'Time Warp Germany event page')}.</li>
<li>Edition dates, 1994 to 2026, read on 4 October 2026: ${ext('https://www.time-warp.de/', 'time-warp.de')} and ${ext('https://www.time-warp.de/history/', 'the history page')}.</li>
<li>Pass prices, read on 4 October 2026: ${ext('https://tickets.time-warp.de/f90301ebaeda45c2a03fa62edf7ff9a8/tickets', 'the Mannheim ticket shop')}. Ticket rules and the origin story: ${ext('https://www.time-warp.de/tickets/', 'time-warp.de/tickets')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('time-warp-festival.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Time Warp', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/time-warp-festival'),
  ogImage: 'https://thecatrave.com/img/og/time-warp.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page time-warp-page',
  structuredData, articleHtml
});

fs.writeFileSync('time-warp-festival.html', html);
console.log('Built time-warp-festival.html');
