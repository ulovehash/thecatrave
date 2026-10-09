// Build printworks-london.html from printworks-london-draft.md.
//
// Intent: "printworks london", "printworks" and the reopening, closure and
// history questions around them (Keyword Planner, bucketed ranges only;
// keywords/printworks-london.json). The venue is closed, so this is a closed and
// returning page, not a visitor guide. Facts come from British Land, the Canada
// Water and Southwark consultation pages, Broadwick, Mixmag, DJ Mag, Resident
// Advisor, the Guardian and the BBC, read on 2026-10-05. No Wikipedia.
//
// Maintenance: re-check the official site and Southwark planning pages for a
// reopening date, and whether the revised application was submitted.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('printworks-london-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/printworks-london';
const title = 'Printworks London: Reopening, Closure and History';
const description = 'Printworks London closed in May 2023. What is officially planned, why it shut, its rooms and capacity, famous nights, Drumsheds and where to go instead.';
const published = '2026-10-05';
const date = '2026-10-08';
const dateLabel = '8 October 2026';

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

// Image: Wikimedia Commons, new to this page, none reused from another guide.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/printworks-london/${name}-1200.webp`,
  srcset: `img/printworks-london/${name}-320.webp 320w, img/printworks-london/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'gate-2010': fig('gate-2010', 1200, 797,
    'A fenced gate with barbed wire and an East Deliveries sign at the Harmsworth Quays print works in Rotherhithe',
    'The Harmsworth Quays print works in Rotherhithe on 30 May 2010, seven years before it opened as Printworks. Photograph: Ben Sutherland, CC BY 2.0.')
};

const tableLabels = {Date: 'Printworks London reopening timeline', Detail: 'Printworks London and Drumsheds compared'};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabels[rows[0][0]] || 'Printworks London', headers: rows[0], rows: rows.slice(1)});
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

// Sets from this site's catalogue (selector-data.json), oEmbed-checked on
// 2026-10-05. Each was filmed at Printworks London, per the video titles.
const closing = articleVideoCollection({
  label: 'The closing weekend, 2023',
  description: 'Two sets filmed by DJ Mag in the last days of Printworks London.',
  items: [
    articleVideoCard({youtubeId: 'GPuZwMmd4YI', genre: 'Closing weekend', artist: 'Adriatique', title: 'Adriatique Live @ Printworks Closing Weekend'}),
    articleVideoCard({youtubeId: 'nrcgEPEuWQY', genre: 'Closing weekend', artist: 'CamelPhat', title: 'CamelPhat @ Printworks London Closing Weekend'})
  ]
});
const roomSet = articleVideoCollection({
  label: 'Printworks in 2017',
  description: 'Adam Beyer live from Printworks in its first year.',
  items: [
    articleVideoCard({youtubeId: '6ag9s7vfy_c', genre: 'Techno, 2017', artist: 'Adam Beyer', title: 'Adam Beyer live from PRINTWORKS, London 2017'})
  ]
});
const clubSets = articleVideoCollection({
  label: 'Filmed at Printworks London',
  description: 'Sonny Fodera and The Martinez Brothers, who were on the opening bill in 2017.',
  items: [
    articleVideoCard({youtubeId: 'XNwuQ24X39U', genre: 'House', artist: 'Sonny Fodera', title: 'Sonny Fodera DJ Set From Printworks London'}),
    articleVideoCard({youtubeId: 'l1g6nJXC9pI', genre: 'Tech house', artist: 'The Martinez Brothers', title: 'The Martinez Brothers Tech House DJ Set At Printworks London'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'coming-back', label: 'Is Printworks coming back?'},
  {id: 'official', label: 'Reopening: what is official'},
  {id: 'why-closed', label: 'Why did Printworks close?'},
  {id: 'history', label: 'History'},
  {id: 'rooms', label: 'Rooms and capacity'},
  {id: 'lineup', label: 'Events and lineup'},
  {id: 'drumsheds', label: 'Is Drumsheds the new Printworks?'},
  {id: 'instead', label: 'Where to go instead'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, London',
    title: 'Printworks London: reopening, closure and history',
    deck: 'The Rotherhithe venue that closed in May 2023: what is officially planned, why it shut, what it was, and where to go in the meantime.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Printworks London', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Closed, and planned to return.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'coming-back', title: 'Is Printworks coming back?', bodyHtml: join(sec('Is Printworks coming back?'))}),
  articleSection({id: 'official', title: 'Printworks reopening: what is official', bodyHtml: join(sec('Printworks reopening: what is official'))}),
  articleSection({id: 'why-closed', title: 'Why did Printworks close?', bodyHtml: `${join(sec('Why did Printworks close?'))}${closing}`}),
  articleSection({id: 'history', title: 'Printworks London history', bodyHtml: `${join(sec('Printworks London history'))}${firstMix}`}),
  articleSection({id: 'rooms', title: 'Printworks London rooms and capacity', bodyHtml: `${join(sec('Printworks London rooms and capacity'))}${roomSet}`}),
  articleSection({id: 'lineup', title: 'Printworks London events and lineup', bodyHtml: `${join(sec('Printworks London events and lineup'))}${clubSets}${secondMix}`}),
  articleSection({id: 'drumsheds', title: 'Is Drumsheds the new Printworks?', bodyHtml: join(sec('Is Drumsheds the new Printworks?'))}),
  articleSection({id: 'instead', title: 'Printworks London closed: where to go instead', bodyHtml: join(sec('Printworks London closed: where to go instead'))}),
  articleFaq({items: faqItems, title: 'Printworks London FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Reopening plans and 2024 application: ${ext('https://www.britishland.com/news/british-land-and-australiansuper-submit-application-to-revive-printworks-as-a-permanent-cultural-venue/', 'British Land')}, ${ext('https://www.theguardian.com/music/2024/feb/12/printworks-london-may-reopen-by-2026-after-developers-submit-plans', 'the Guardian')} and ${ext('https://www.timeout.com/london/news/printworks-is-set-to-reopen-as-a-massive-cultural-venue-with-gigs-and-a-rooftop-space-021224', 'Time Out')}.</li>
<li>Approval and return in 2026: ${ext('https://mixmag.net/read/printworks-london-plans-reopen-confirmed-2026-news', 'Mixmag')}. 2026 consultation: ${ext('https://canadawater.co.uk/latest/news/invitation-to-view-proposals-for-a-new-cultural-venue-at-printworks/', 'Canada Water')} and ${ext('https://salamandernews.org/2026-05-canada-water-printworks-consultation/', 'Salamander News')}. Operator page: ${ext('https://broadwick.com/divisions/spaces/printworks-london/', 'Broadwick')}.</li>
<li>Closure: ${ext('https://www.bbc.com/news/entertainment-arts-65427101', 'BBC, 1 May 2023')}, ${ext('https://mixmag.net/read/printworks-officially-shuttered-renovated-into-offices-news', 'Mixmag, July 2022')}, ${ext('https://ra.co/news/77877', 'Resident Advisor, 2 May 2023')}, ${ext('https://www.djmag.com/news/printworks-hopes-return-three-years-says-broadwick-live-after-massive-closing-weekend', 'DJ Mag')} and ${ext('https://www.theguardian.com/music/2023/may/02/save-the-last-dance-london-superclub-printworks-aims-to-reopen-in-2026', 'the Guardian, 2 May 2023')}.</li>
<li>Opening night, 4 February 2017: ${ext('https://ra.co/events/908779', 'Resident Advisor')}. Capacity, rooms and takeovers: ${ext('https://www.djmag.com/top100clubs/2023/2/Printworks-London', 'DJ Mag Top 100 Clubs 2023')}.</li>
<li>Drumsheds: ${ext('https://www.bbc.com/news/entertainment-arts-67273621', 'BBC, 4 November 2023')} and ${ext('https://www.theguardian.com/music/2025/jan/14/can-the-uks-biggest-nightclub-stay-open-drumsheds', 'the Guardian, 14 January 2025')}. Official site: ${ext('https://printworkslondon.co.uk', 'printworkslondon.co.uk')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('printworks-london.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: published, dateModified: date}),
  breadcrumbStructuredData({name: 'Printworks London', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/printworks-london'),
  ogImage: 'https://thecatrave.com/img/og/printworks-london.jpg',
  datePublished: published, dateModified: date,
  bodyClass: 'article-page printworks-london-page',
  structuredData, articleHtml
});

fs.writeFileSync('printworks-london.html', html);
console.log('Built printworks-london.html');
