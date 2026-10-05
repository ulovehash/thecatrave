// Build ushuaia-ibiza.html from ushuaia-ibiza-draft.md.
//
// Intent: "ushuaia ibiza" and the practical terms around it (Keyword Planner,
// US, bucketed ranges only; keywords/ushuaia-ibiza.json). Facts come from the
// official site (theushuaiaexperience.com/club/en: calendar, news, FAQ, VIP;
// ushuaiaibiza.com redirects there) read on 2026-10-05, Clubtickets (the
// club's named ticketing platform) and Ibiza Spotlight's Insiders' Guide
// (15 Aug 2024). No Wikipedia, no Ahrefs.
//
// Maintenance: re-read the official calendar after the 2026 closing party
// (10 Oct) and again in spring. "ushuaia ibiza 2027" is claimed only as
// "not published"; replace that section with dates when the calendar shows
// them. The club states no capacity (7,000 is Ibiza Spotlight's figure), the
// ANTS closing-party start time differs between the calendar (12:00) and the
// news page (5pm to 11pm), and the official lineup article contradicts itself
// on the number of DJs; the draft words all three as unresolved.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('ushuaia-ibiza-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/ushuaia-ibiza';
const title = 'Ushuaia Ibiza: Tickets, Dress Code and Events 2026';
const description = 'Ushuaia Ibiza: what tickets cost, the dress code and entry rules, the 2026 residencies and closing parties, how to get there, and what is unpublished for 2027.';
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

// Images: Wikimedia Commons CC BY-SA, new to this page, none reused from another guide.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/ushuaia-ibiza/${name}-1200.webp`,
  srcset: `img/ushuaia-ibiza/${name}-320.webp 320w, img/ushuaia-ibiza/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'dance-floor-2023': fig('dance-floor-2023', 1200, 800,
    'The Ushuaia Ibiza dance floor packed around the pool at dusk, seen from a high window, with the hills and the bay behind',
    'The Ushuaia Ibiza dance floor and pool from above, 3 September 2023. Photograph: Saaremees, CC BY-SA 4.0.'),
  'tomorrowland-2022': fig('tomorrowland-2022', 1200, 800,
    'Dimitri Vegas and Like Mike behind the decks at Ushuaia Ibiza, one with a raised hand, in front of a blue video wall',
    'Dimitri Vegas and Like Mike at the Tomorrowland opening at Ushuaia Ibiza, 15 June 2022. Photograph: Roberto Castaño for Ushuaïa Ibiza, CC BY-SA 4.0.'),
  'ushuaia-tower-2015': fig('ushuaia-tower-2015', 1200, 800,
    'The white Ushuaia Tower of the beach hotel with flower sculptures on its wall, palm trees and a stone head in the foreground',
    'The Ushuaia Tower of the Ushuaia Beach Hotel, 11 September 2015. Photograph: Phil Guest, CC BY-SA 2.0.')
};

const tableLabels = {
  Item: 'Ushuaia Ibiza tickets and prices', Day: 'Ushuaia Ibiza residencies 2026', 'Way in': 'Getting to Ushuaia Ibiza', Rule: 'Ushuaia Ibiza entry rules'
};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabels[rows[0][0]] || 'Ushuaia Ibiza', headers: rows[0], rows: rows.slice(1)});
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
// 2026-10-05. The catalogue holds no set titled as filmed at Ushuaia, so these
// are sets by DJs who held a 2026 night there, and the block says so.
const residentSets = articleVideoCollection({
  label: 'Sets by 2026 Ushuaia residents',
  description: 'None of these was filmed at Ushuaia. They are recorded sets from this site\'s catalogue by DJs who held a night there in 2026.',
  items: [
    articleVideoCard({youtubeId: '9uKyeG-A26o', genre: 'Monday resident, 2023', artist: 'David Guetta', title: 'David Guetta Epic House Set From An Ibiza Villa'}),
    articleVideoCard({youtubeId: 'Jx3XjxUTmk0', genre: 'Opening party 2026 and 20 September, 2025', artist: 'HUGEL', title: 'HUGEL Latin House DJ Set Live From UNTOLD Festival'}),
    articleVideoCard({youtubeId: '3zNx1Cj1010', genre: 'Thursday resident, 2022', artist: 'Martin Garrix', title: 'Martin Garrix Historic DJ Set Atop The Empire State Building'})
  ]
});

const firstMix = ownSetListening(0, 'en', 'My own mix, for the journey home from a night out.');
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is Ushuaia Ibiza?'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'dress-code', label: 'Dress code'},
  {id: 'season-2026', label: '2026 season'},
  {id: 'events', label: 'Events and calendar'},
  {id: 'season-2027', label: '2027'},
  {id: 'vip', label: 'VIP and table'},
  {id: 'hotel', label: 'Beach hotel'},
  {id: 'where', label: 'Address'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, Ibiza',
    title: 'Ushuaia Ibiza: tickets, dress code and events 2026',
    deck: 'The open-air club and beach hotel on Platja d\'en Bossa: what tickets cost, what the door allows, how the 2026 season runs out, and what 2027 has not yet said.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Ushuaia Ibiza', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One club, several questions.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Ushuaia Ibiza?', bodyHtml: `${join(sec('What is Ushuaia Ibiza?'))}${firstMix}`}),
  articleSection({id: 'tickets', title: 'Ushuaia Ibiza tickets', bodyHtml: join(sec('Ushuaia Ibiza tickets'))}),
  articleSection({id: 'dress-code', title: 'Ushuaia Ibiza dress code', bodyHtml: join(sec('Ushuaia Ibiza dress code'))}),
  articleSection({id: 'season-2026', title: 'Ushuaia Ibiza 2026', bodyHtml: join(sec('Ushuaia Ibiza 2026'))}),
  articleSection({id: 'events', title: 'Ushuaia Ibiza events and calendar', bodyHtml: `${join(sec('Ushuaia Ibiza events and calendar'))}${residentSets}${secondMix}`}),
  articleSection({id: 'season-2027', title: 'Ushuaia Ibiza 2027', bodyHtml: join(sec('Ushuaia Ibiza 2027'))}),
  articleSection({id: 'vip', title: 'Ushuaia Ibiza VIP and table', bodyHtml: join(sec('Ushuaia Ibiza VIP and table'))}),
  articleSection({id: 'hotel', title: 'Ushuaia Beach Hotel', bodyHtml: join(sec('Ushuaia Beach Hotel'))}),
  articleSection({id: 'where', title: 'Ushuaia Ibiza address', bodyHtml: join(sec('Ushuaia Ibiza address'))}),
  articleFaq({items: faqItems, title: 'Ushuaia Ibiza FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Calendar, closing parties, residencies, opening party, FAQ, VIP terms, address, hours, age, bags, photography and drink pack, read on 5 October 2026: ${ext('https://theushuaiaexperience.com/club/en', 'the official Ushuaïa Ibiza site')} (calendar, news and ${ext('https://theushuaiaexperience.com/club/en/faq', 'FAQ')}). The lineup article is dated 12 August 2026, the September guide 2 September 2026 and the opening-party article 26 March 2026.</li>
<li>Ticket ranges, VIP ticket contents, bar prices, public transport and taxi figures: ${ext('https://www.clubtickets.com/clubbing/ushuaia-ibiza', 'Clubtickets')}, the club's named ticketing platform, read on 5 October 2026.</li>
<li>Ownership, capacity, history, the 2019 opening party format, prices and dress code notes: Ibiza Spotlight, ${ext('https://www.ibiza-spotlight.com/magazine/2024/08/ibiza-virgins-guide-ushuaia', 'Insiders\' Guide')} (15 August 2024), read on 5 October 2026.</li>
<li>Search demand: Google Ads Keyword Planner, United States, bucketed ranges, 5 October 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('ushuaia-ibiza.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Ushuaia Ibiza', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/ushuaia-ibiza'),
  ogImage: 'https://thecatrave.com/img/og/ushuaia-ibiza.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page ushuaia-ibiza-page',
  structuredData, articleHtml
});

fs.writeFileSync('ushuaia-ibiza.html', html);
console.log('Built ushuaia-ibiza.html');
