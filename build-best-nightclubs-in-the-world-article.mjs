// Build best-nightclubs-in-the-world.html from best-nightclubs-in-the-world-draft.md.
//
// Intent: "best nightclubs in the world", "best clubs in the world", "best clubs
// worldwide" and the terms around them (Keyword Planner, bucketed ranges only;
// keywords/best-nightclubs-in-the-world.json). A world roundup that links to the
// Europe guide by anchor text. Facts come from DJ Mag's Top 100 Clubs 2026 (list
// and profile pages, read 2026-10-06) and the INA's World's 100 Best Clubs page.
//
// Maintenance: refresh the table each April when the new DJ Mag poll lands, and
// replace the INA sentence once its 2026 list is published.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-nightclubs-in-the-world-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-nightclubs-in-the-world';
const title = "Best Nightclubs in the World: 20 Clubs From DJ Mag's 2026 Top 100";
const description = 'The best nightclubs in the world by region, from Ibiza and Berlin to Brazil, Miami and Tokyo, with DJ Mag ranks, sizes and sets to hear.';
const date = '2026-10-06';
const dateLabel = '6 October 2026';

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
  src: `img/best-nightclubs-in-the-world/${name}-1200.webp`,
  srcset: `img/best-nightclubs-in-the-world/${name}-320.webp 320w, img/best-nightclubs-in-the-world/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'studio-338-2020': fig('studio-338-2020', 1200, 801,
    'The Studio 338 building on the Greenwich Peninsula with a gasholder frame rising behind it',
    'Studio 338 on the Greenwich Peninsula, 1 February 2020. Photograph: Ewan-M, CC BY-SA 4.0.'),
  'echostage-2024': fig('echostage-2024', 1200, 856,
    'The crowd at Echostage in Washington, DC in front of a lit stage and LED walls',
    'Echostage, Washington, DC, 7 June 2024. Photograph: APK, CC BY 4.0.'),
  'club-space-2019': fig('club-space-2019', 1200, 801,
    'Crowd and mirrorballs under a canopy of plants on the Terrace at Club Space, Miami',
    'The Terrace at Club Space, Miami, 2 June 2019. Photograph: Lauren Maurell, CC BY-SA 4.0.'),
  'hakkasan-2016': fig('hakkasan-2016', 1200, 900,
    'Hakkasan in Las Vegas, a packed dance floor under pink lights with the DJ booth at right',
    'Hakkasan, Las Vegas, 7 October 2016. Photograph: David Jones, CC BY 2.0.'),
  'd-edge-2015': fig('d-edge-2015', 960, 640,
    'A DJ at the decks at D-Edge in São Paulo, with a banner reading Moving on the mixer',
    'A DJ at D-Edge, São Paulo, 15 October 2015. Photograph: LucasArr, CC BY-SA 4.0.')
};

// Sets from this site's catalogue (selector-data.json), oEmbed-checked on 2026-10-06.
const videos = {
  ibiza: articleVideoCollection({
    label: 'Recorded at Hï Ibiza',
    description: 'A 2022 session from the Hï Garden, published by DJ Mag.',
    items: [
      articleVideoCard({youtubeId: 'w8xQnshEIKg', genre: 'Hï Ibiza, 2022', artist: 'DJ Mag', title: 'Layla Benitez from the Hï Ibiza Garden'})
    ]
  }),
  'club-space': articleVideoCollection({
    label: 'Recorded at Club Space',
    description: 'Three 2023 sets from the club\'s own channel: Mochakk, Carl Cox and Mau P.',
    items: [
      articleVideoCard({youtubeId: '4iKfR3UBDpQ', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mochakk, sunrise set at Club Space Miami'}),
      articleVideoCard({youtubeId: 'CTvkbzE4Jus', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Carl Cox, sunrise set at Club Space Miami'}),
      articleVideoCard({youtubeId: '0mlnJ7Ic7TM', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mau P at Club Space Miami'})
    ]
  }),
  brazil: articleVideoCollection({
    label: 'Recorded at D-Edge',
    description: 'DJ Mag Live presents D-Edge, a 2017 session from São Paulo.',
    items: [
      articleVideoCard({youtubeId: 'PQtqN-azfM8', genre: 'D-Edge, 2017', artist: 'DJ Mag', title: 'DJ Mag Live presents D-Edge'})
    ]
  })
};

const tableLabel = headers => {
  if (headers[0] === 'Rank') return 'The 20 clubs in this guide';
  if (headers[0] === 'Club' && headers[2] === 'Open since') return 'Longest-running clubs';
  if (headers[1] === 'What marks it as a techno room') return 'Techno rooms on this page';
  return 'The biggest nightclubs by listed capacity';
};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  const video = block.match(/^!\[[^\]]*\]\(videos:([a-z0-9-]+)\)$/);
  if (video) return videos[video[1]];
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabel(rows[0]), headers: rows[0], rows: rows.slice(1)});
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

const tocItems = [
  {id: 'nightclubs', label: 'Best nightclubs'},
  {id: 'dance-clubs', label: 'By region'},
  {id: 'biggest', label: 'Biggest'},
  {id: 'famous', label: 'Longest-running'},
  {id: 'best-techno-clubs', label: 'Techno clubs'},
  {id: 'exclusive', label: 'Exclusive'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, world',
    title: 'Best nightclubs in the world: 20 clubs from DJ Mag\'s 2026 Top 100',
    deck: 'Twenty clubs on four continents, from [UNVRS] and Berghain to GREENVALLEY, Club Space, Zouk and WOMB, with ranks, sizes and the sets to hear.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best nightclubs in the world', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'What best means for a club.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'nightclubs', title: 'Best nightclubs in the world', bodyHtml: join(sec('Best nightclubs in the world'))}),
  articleSection({id: 'dance-clubs', title: 'Best dance clubs in the world, by region', bodyHtml: `${join(sec('Best dance clubs in the world, by region'))}${ownSetListening(0)}`}),
  articleSection({id: 'biggest', title: 'Biggest nightclubs in the world', bodyHtml: join(sec('Biggest nightclubs in the world'))}),
  articleSection({id: 'famous', title: 'World famous nightclubs: the longest-running rooms', bodyHtml: join(sec('World famous nightclubs: the longest-running rooms'))}),
  articleSection({id: 'best-techno-clubs', title: 'Best techno clubs in the world', bodyHtml: join(sec('Best techno clubs in the world'))}),
  articleSection({id: 'exclusive', title: 'Most exclusive clubs in the world', bodyHtml: join(sec('Most exclusive clubs in the world'))}),
  articleFaq({items: faqItems, title: 'Best nightclubs in the world FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Ranks, capacities, openings and club profiles, read on 6 October 2026: ${ext('https://djmag.com/top100clubs', 'DJ Mag Top 100 Clubs')} (2026 list and the profile page of each club) and the ${ext('https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', 'DJ Mag 2026 results article')}.</li>
<li>The World's 100 Best Clubs: ${ext('https://www.nightlifeinternational.org/en/the-world-s-100-best-clubs-2026', 'International Nightlife Association')}, voting and jury dates and nomination counts, read on 6 October 2026.</li>
<li>Facts on Drumsheds, The Warehouse Project, Bootshaus, Pacha, Amnesia, Tresor and Ministry of Sound come from the sources listed in the <a href="/best-clubs-in-europe">best clubs in Europe</a> guide.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-nightclubs-in-the-world.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Nightclubs in the World', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/best-nightclubs-in-the-world'),
  ogImage: 'https://thecatrave.com/img/og/best-nightclubs-in-the-world.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page best-nightclubs-in-the-world-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-nightclubs-in-the-world.html', html);
console.log('Built best-nightclubs-in-the-world.html');
