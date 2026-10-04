// Build pacha-ibiza.html from pacha-ibiza-draft.md.
//
// Intent: "pacha ibiza" and the practical terms around it (Keyword Planner,
// bucketed ranges only; keywords/pacha-ibiza.json). Facts come from pacha.com
// read on 2026-10-04 (home, /contact-us, /vip-events, /events, /artists,
// /shuttle-information), Ibiza Spotlight (Insiders' Guide 14 Mar 2025, "10
// surprising facts" 20 Jul 2023, closing weekend page), Gray Area, Ibiza Rocks,
// Resident Advisor (news 38057) and FIVE Holdings' own release. No Wikipedia.
//
// Maintenance: re-read pacha.com events, tickets and the FAQ each autumn and
// spring. The guest list, a club-stated capacity, the minimum spend for tables
// and the origin of the name are unconfirmed or disputed at source and are
// worded as such in the draft. "pacha ibiza 2027" is not claimed until a 2027
// date appears on pacha.com.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('pacha-ibiza-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/pacha-ibiza';
const title = 'Pacha Ibiza: Tickets, Dress Code and Calendar 2026';
const description = 'Pacha Ibiza: how tickets, tables and the dress code work, where the club is, who owns it and how to read the 2026 calendar.';
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
  src: `img/pacha-ibiza/${name}-1200.webp`,
  srcset: `img/pacha-ibiza/${name}-320.webp 320w, img/pacha-ibiza/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'cherries-2014': fig('cherries-2014', 1200, 800,
    'The front of Pacha Ibiza at night with its red cherry signs lit on the building, above a street sign for Carrer de Paris',
    'The cherry signs on Pacha Ibiza, 14 September 2014. Photograph: Angel Abril Ruiz, CC BY 2.0.'),
  'main-room-2008': fig('main-room-2008', 1200, 900,
    'A crowd dancing on the Main Room floor at Pacha Ibiza under a large white fringed lamp',
    'The Main Room at Pacha Ibiza, 15 May 2008. Photograph: pravin.premkumar, CC BY 2.0.'),
  'party-2013': fig('party-2013', 1200, 900,
    'A performer on a stage at a party at Pacha Ibiza, with peace sign decorations behind',
    'A party at Pacha Ibiza, 2013. Photograph: BOMBMAN, CC BY 2.0.')
};

const tableLabels = {Item: 'Pacha Ibiza tickets and entry facts', Date: 'Pacha Ibiza closing week 2026'};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabels[rows[0][0]] || 'Pacha Ibiza', headers: rows[0], rows: rows.slice(1)});
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
// 2026-10-04. Each title names Pacha. Two are also on the Ibiza clubs guide
// (the only catalogue sets titled as filmed at Pacha); disclosed in the review.
const clubSets = articleVideoCollection({
  label: 'Filmed at Pacha Ibiza',
  description: 'The Vagabundos opening party at Pacha in 2016 for DJ Mag, and two Mixmag sets from Pacha in 2018 and 2014.',
  items: [
    articleVideoCard({youtubeId: 'iT3Ebi3ZHiA', genre: 'Vagabundos opening party, 2016', artist: 'DJ Mag', title: 'Vagabundos 2016 Opening Party at Pacha Ibiza'}),
    articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, 2018', artist: 'Sven Väth', title: 'SVEN VÄTH. Cocoon. Pacha 2018.'}),
    articleVideoCard({youtubeId: 'vbWFtk0JnqE', genre: 'Pacha, 2014', artist: 'Solomun and Andhim', title: 'SOLOMUN + ANDHIM @ Pacha, Ibiza 2014'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is Pacha Ibiza?'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'dress-code', label: 'Dress code'},
  {id: 'season-2026', label: '2026 season'},
  {id: 'events', label: 'Events and calendar'},
  {id: 'vip', label: 'VIP and table'},
  {id: 'where', label: 'Where is it?'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, Ibiza',
    title: 'Pacha Ibiza: tickets, dress code and calendar 2026',
    deck: 'The Ibiza Town club with the cherry logo: what tickets cost, what the door allows, how the 2026 calendar ran, and who owns it now.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Pacha Ibiza club', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One club, several questions.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Pacha Ibiza?', bodyHtml: `${join(sec('What is Pacha Ibiza?'))}${firstMix}`}),
  articleSection({id: 'tickets', title: 'Pacha Ibiza tickets', bodyHtml: join(sec('Pacha Ibiza tickets'))}),
  articleSection({id: 'dress-code', title: 'Pacha Ibiza dress code', bodyHtml: join(sec('Pacha Ibiza dress code'))}),
  articleSection({id: 'season-2026', title: 'Pacha Ibiza 2026', bodyHtml: join(sec('Pacha Ibiza 2026'))}),
  articleSection({id: 'events', title: 'Pacha Ibiza events and calendar', bodyHtml: `${join(sec('Pacha Ibiza events and calendar'))}${clubSets}${secondMix}`}),
  articleSection({id: 'vip', title: 'Pacha Ibiza VIP and table', bodyHtml: join(sec('Pacha Ibiza VIP and table'))}),
  articleSection({id: 'where', title: 'Where is Pacha Ibiza?', bodyHtml: join(sec('Where is Pacha Ibiza?'))}),
  articleFaq({items: faqItems, title: 'Pacha Ibiza FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Prices, tickets, hours, age, dress code, last entry, VIP, events and residencies, read on 4 October 2026: ${ext('https://www.pacha.com/', 'pacha.com')}, ${ext('https://www.pacha.com/contact-us', 'FAQ and contact')}, ${ext('https://www.pacha.com/vip-events', 'VIP page')}, ${ext('https://www.pacha.com/events', 'events')}, ${ext('https://www.pacha.com/artists', 'artists')} and ${ext('https://www.pacha.com/shuttle-information', 'shuttle information')}.</li>
<li>Capacity, location, dress code notes, history and the cherry logo: Ibiza Spotlight, ${ext('https://www.ibiza-spotlight.com/magazine/2025/03/ibiza-virgins-guide-pacha', 'Insiders\' Guide')} (14 March 2025) and ${ext('https://www.ibiza-spotlight.com/magazine/2023/07/10-surprising-facts-about-pacha-ibiza', '10 surprising facts')} (20 July 2023). Closing weekend: ${ext('https://www.ibiza-spotlight.com/night/promoters/pacha-closing-party', 'Ibiza Spotlight')}.</li>
<li>History, rooms, address and the Flower Power party: ${ext('https://grayarea.co/magazine/from-farmhouse-to-dancefloor-the-first-djs-and-residencies-at-pacha-ibiza', 'Gray Area article')} and ${ext('https://grayarea.co/venues/pacha-ibiza', 'venue page')}.</li>
<li>2026 opening weekend and Music On residency: ${ext('https://www.ibizarocks.com/stories/pacha-2026-opening-weekend/', 'Ibiza Rocks opening weekend')} (21 January 2026) and ${ext('https://www.ibizarocks.com/stories/marco-carola-music-on-pacha-2026/', 'Music On')} (26 January 2026).</li>
<li>Ownership: ${ext('https://www.five-holdings.com/five-acquires-the-pacha-group/', 'FIVE Holdings release')} (October 2023) and ${ext('https://ra.co/news/38057', 'Resident Advisor')} (3 February 2017).</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('pacha-ibiza.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Pacha Ibiza', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/pacha-ibiza'),
  ogImage: 'https://thecatrave.com/img/og/pacha-ibiza.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page pacha-ibiza-page',
  structuredData, articleHtml
});

fs.writeFileSync('pacha-ibiza.html', html);
console.log('Built pacha-ibiza.html');
