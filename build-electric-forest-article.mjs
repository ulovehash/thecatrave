// Build electric-forest-festival.html from electric-forest-draft.md.
//
// Intent: long-tail Electric Forest terms (Keyword Planner, ranges only;
// keywords/electric-forest-festival.json). The bare head term "electric forest"
// belongs to best-edm-festivals-usa and is not claimed here; this page links to
// that guide for the overview. Facts come from electricforestfestival.com and
// local news, all read on 2026-10-04 (see the Sources block).
//
// Maintenance: registered in festival-editions.mjs with ends null, because the
// 2027 dates were not announced on 2026-10-04. When the festival publishes
// them, rewrite the "Electric Forest 2027 dates" block, set `ends`, and
// re-read the ticket, camping and shuttle sections.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('electric-forest-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/electric-forest-festival';
const title = 'Electric Forest 2027: Tickets, Dates, Camping, Line-up';
const description = 'Electric Forest 2027: when it is held in Rothbury, Michigan, how tickets and camping work, how to get there and what to pack.';
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
  src: `img/electric-forest/${name}-1200.webp`,
  srcset: `img/electric-forest/${name}-320.webp 320w, img/electric-forest/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  entrance: fig('entrance-2018', 1200, 801,
    'The wooden Electric Forest entrance arch with a crowd of festival-goers in front of it',
    'The entrance to Electric Forest, 1 July 2018. Photograph: FifthLegend, CC BY 2.0.'),
  hammocks: fig('hammocks-2018', 1200, 801,
    'People resting in hammocks hung among the trees at Electric Forest',
    'Hammocks among the trees at Electric Forest, 1 July 2018. Photograph: FifthLegend, CC BY 2.0.')
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: `Electric Forest ${block.split('\n')[0].split('|')[1].trim().toLowerCase()}`, headers: rows[0], rows: rows.slice(1)});
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

// Sets uploaded by the artists' own channels, found by YouTube search and
// oEmbed-checked 2026-10-04. They are not in selector-data.json.
const festivalSets = articleVideoCollection({
  label: 'Electric Forest, heard from home',
  description: 'Three sets from the artists’ own YouTube channels, each titled as recorded at Electric Forest.',
  items: [
    articleVideoCard({youtubeId: '_A3n8oIbwtc', genre: 'Electric Forest', artist: 'Levity', title: 'Live at Electric Forest 2024'}),
    articleVideoCard({youtubeId: 'OdDOnJ-aP4k', genre: 'Electric Forest', artist: 'Whethan', title: 'Live at Electric Forest 2025'}),
    articleVideoCard({youtubeId: '-eVk7dh8dO4', genre: 'Electric Forest', artist: 'Of The Trees', title: 'Live at Electric Forest 2025'})
  ]
});

const tocItems = [
  {id: 'what-is', label: 'What is Electric Forest?'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'electric-forest-2026', label: 'Electric Forest 2026'},
  {id: 'dates', label: 'Electric Forest 2027 dates'},
  {id: 'lineup', label: 'Lineup'},
  {id: 'where', label: 'Where it is held'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'Electric Forest 2027: tickets, dates, camping and line-up',
    deck: 'The Rothbury, Michigan festival: what is known about 2027 dates, how passes and camping work, how to get there and what to pack.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Electric Forest dates', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival with practical questions.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Electric Forest festival?', bodyHtml: join(sec('What is Electric Forest festival?'))}),
  articleSection({id: 'tickets', title: 'Electric Forest tickets', bodyHtml: join(sec('Electric Forest tickets'))}),
  articleSection({id: 'electric-forest-2026', title: 'Electric Forest 2026', bodyHtml: join(sec('Electric Forest 2026'))}),
  articleSection({id: 'dates', title: 'Electric Forest 2027 dates', bodyHtml: join(sec('Electric Forest 2027 dates'))}),
  articleSection({id: 'lineup', title: 'Electric Forest lineup', bodyHtml: `${join(sec('Electric Forest lineup'))}${festivalSets}`}),
  articleSection({id: 'where', title: 'Where is Electric Forest? Rothbury, Michigan', bodyHtml: join(sec('Where is Electric Forest? Rothbury, Michigan'))}),
  articleFaq({items: faqItems, title: 'Electric Forest FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Dates, passes, add-ons, arrival times and shuttles, read on 4 October 2026: ${ext('https://electricforestfestival.com/', 'electricforestfestival.com')}, ${ext('https://electricforestfestival.com/pass-types', 'pass types')} and ${ext('https://electricforestfestival.com/tickets', 'tickets')}.</li>
<li>Rules, driving directions, prohibited items and the prep guide, read on 4 October 2026: ${ext('https://electricforestfestival.com/festival-info', 'festival info')} and ${ext('https://electricforestfestival.com/forest-prep-guide', 'the Forest prep guide')}.</li>
<li>Stages, Sherwood Forest and The Brainery, and past posters, read on 4 October 2026: ${ext('https://electricforestfestival.com/experiences', 'experiences')} and ${ext('https://electricforestfestival.com/a-look-back', 'a look back')}.</li>
<li>The venue, read on 4 October 2026: ${ext('https://electricforestfestival.com/double-jj-resort', 'the Double JJ Resort page')}.</li>
<li>The 2026 lineup announcement, December 2025: ${ext('https://whitelakemirror.com/article/2025/12/electric-forest-sets-dates-lineup-for-june-2026-event', 'White Lake Mirror')} and ${ext('https://oceanacountypress.com/2025/12/08/electric-forest-drops-2026-lineup-tickets-go-on-sale-friday/', 'Oceana County Press')}, the source of the reported general admission price.</li>
<li>History: ${ext('https://tvovermind.com/the-history-and-evolution-of-the-electric-forest-festival/', 'TV Overmind, 2019')} and the permit extension, ${ext('https://theticket953.com/ixp/689/p/electric-forest-festival-rothbury-michigan-extended/', 'The Ticket 95.3, 2024')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('electric-forest-festival.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Electric Forest', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/electric-forest-festival'),
  ogImage: 'https://thecatrave.com/img/og/electric-forest.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page electric-forest-page',
  structuredData, articleHtml
});

fs.writeFileSync('electric-forest-festival.html', html);
console.log('Built electric-forest-festival.html');
