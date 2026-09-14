// Build creamfields-festival.html from creamfields-draft.md.
//
// Festivals series (festivals-series.md), after Burning Man and Tomorrowland.
// The structure and the evidence behind it are in creamfields-research.md.
//
// Keywords (GB volume, September 2026): creamfields south 3,100, where is
// creamfields 1,900, creamfields location 1,200, creamfields festival 1,100
// (TP 13,000), when is creamfields 450, creamfields capacity 350. Lineups,
// dated editions, set times, weather and tickets are excluded on purpose; one
// dated price answer sits in the FAQ. See keywords/creamfields.json.
//
// The catalogue behind the Selector holds 52 Creamfields sets, 51 of them
// Beatport's streams and none drum and bass, so the players come from the
// festival's own YouTube channel (Creamfields Official Page), oEmbed-checked.
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

const draft = fs.readFileSync('creamfields-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/creamfields-festival';
const title = 'Creamfields Festival: Where It Is, How It Grew, the Music';
const description = 'Where Creamfields happens in Cheshire, how a Liverpool house night became a four-day festival, how many people go, who owns it, and what plays beyond the Arc Stage.';
const date = '2026-09-13';
const dateLabel = '13 September 2026';

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

// All five from Wikimedia Commons, downloaded to img/creamfields/, used by no
// other guide. Licences checked against the Commons API on 2026-09-13.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/creamfields/${name}-${width}.webp`,
  srcset: `img/creamfields/${name}-320.webp 320w, img/creamfields/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-13.
const media = {
  'Farm track skirts Creamfields site': figure('daresbury-site-2014', 1024, 768,
    'A farm track beside green fencing at the edge of the Creamfields site near Daresbury, with fields and trees beyond',
    'The edge of the Creamfields site near Outer Wood, Daresbury, three days after the 2014 festival. Photograph: Raymond Knapman, CC BY-SA 2.0.'),
  'Creamfields Brasil 2013': figure('creamfields-brasil-2013', 1063, 704,
    'A crowd under a lit Creamfields stage roof at night at Creamfields Brasil in 2013',
    'Creamfields Brasil in January 2013, its third edition, at Jurerê Internacional in Florianópolis. The name has travelled to more than twenty countries. Photograph: Gerardo Lazzari, CC BY 2.0.'),
  'Cream buildings in Wolstenholme Square': figure('cream-wolstenholme-square-2011', 640, 480,
    'The black-painted Cream club buildings in Wolstenholme Square, Liverpool, with a Cream sign above a shuttered door',
    'The Cream buildings in Wolstenholme Square, Liverpool, in 2011, where the weekly house night that started Creamfields ran. The block was demolished in 2016. Photograph: John S Turner, CC BY-SA 2.0.',
    'archive-image'),
  'Creamfields Steel Yard structure': figure('steel-yard-2017', 1200, 801,
    'The empty interior of the Steel Yard, a long arched steel structure lit orange, before a show',
    'The Steel Yard, empty before a show in November 2017. The 15,000-capacity structure became a festival of its own. Photograph: OfficialCreamPress, CC BY-SA 4.0.'),
  'LilRockit at Cream': figure('cream-liverpool-2015', 1200, 801,
    'A DJ seen from behind at the decks at Cream in Liverpool, facing a packed dancefloor under balloons',
    'LilRockit DJing at Cream in Liverpool in December 2015, months before the building was demolished. Photograph: Leighroy4, CC BY-SA 4.0.'),
  'fVKywXvEl9g': youtube('fVKywXvEl9g', 'Creamfields 2019 After Series, Bass, Drum and Bass, on the Creamfields Official Page YouTube channel'),
  // The closing listening: legendary and most-watched sets rather than the
  // site's own angle (the owner, 2026-09-13). Views read from YouTube on
  // 2026-09-13: Ewan McVicar 2023 235,000 (his channel; his 2022 and 2023
  // Beatport uploads have fewer), Pete Tong 2025 (the festival's channel), who
  // played the first Creamfields in 1998.
  'BvXj6mCK0X4': articleVideoCollection({
    label: 'Creamfields, then and now',
    description: 'Ewan McVicar on the Steel Yard in 2023, the most watched of his Creamfields sets, on his own channel; and Pete Tong in 2025, from the festival\'s channel, who was on the first Creamfields bill in 1998.',
    items: [
      articleVideoCard({youtubeId: 'BvXj6mCK0X4', genre: 'Steel Yard, 2023', artist: 'Ewan McVicar', title: 'Steel Yard, Creamfields North 2023'}),
      articleVideoCard({youtubeId: 'UBqb6F7Jlho', genre: 'Creamfields, 2025', artist: 'Pete Tong', title: 'DJ set, Creamfields 2025'})
    ]
  }),
  // Weekend totals from Wikipedia's edition summary (multi-day passes counted
  // once per day); 2026 from Brit Brief and Skiddle. Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Where', 'Days', 'Attendance'],
    rows: [
      ['1998', 'Winchester', '1', '25,000'],
      ['1999 to 2005', 'Old Liverpool airport, Speke', '1', '50,000'],
      ['2006 and 2007', 'Daresbury', '1', '50,000'],
      ['2008', 'Daresbury', '2', '50,000'],
      ['2009', 'Daresbury', '2', '60,000, first sell-out'],
      ['2010', 'Daresbury', '2', '80,000'],
      ['2011', 'Daresbury', '2', '100,000'],
      ['2012', 'Daresbury', '3', '100,000, last day flooded out'],
      ['2013 to 2015', 'Daresbury', '3', '150,000'],
      ['2016', 'Daresbury', '4', '200,000'],
      ['2017 to 2019', 'Daresbury', '4', '280,000'],
      ['2020', 'none', '0', 'Cancelled for the pandemic'],
      ['2026', 'Daresbury', '4', 'More than 80,000 people, reported'],
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

// A section whose body carries ### subsections renders each as its own H3.
function renderWithSubsections(text, anchors) {
  const [lead, ...blocks] = text.split(/\n### /);
  if (blocks.length !== anchors.length) throw new Error(`Expected ${anchors.length} subsections, found ${blocks.length}`);
  return [render(lead), ...blocks.map((block, i) => {
    const [heading, ...rest] = block.split('\n');
    return `<h3 id="${anchors[i]}">${inline(heading.trim())}</h3>\n${render(rest.join('\n'))}`;
  })].join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'where', heading: 'Where Creamfields happens', title: 'Where Creamfields happens.', subsections: ['south', 'international', 'creamfields-2027']},
  {id: 'how-big', heading: 'How big Creamfields is', title: 'How big Creamfields is.'},
  {id: 'history', heading: 'A short history, and who owns Creamfields', title: 'A short history, and who owns Creamfields.'},
  {id: 'famous', heading: 'Why Creamfields is famous', title: 'Why Creamfields is famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Creamfields from home', title: 'Hearing Creamfields from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker,
  bodyHtml: s.subsections ? renderWithSubsections(getSection(s.heading), s.subsections) : render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Creamfields',
    title: 'Creamfields Festival',
    deck: 'A Liverpool club night\'s day out that became four days in a Cheshire field every August bank holiday. Where it happens, how big it is, who owns it, and what plays beyond the Arc Stage.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Creamfields', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A club night that became a festival.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Creamfields FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Creamfields', 'Wikipedia: Creamfields')}
${sourceLink('https://en.wikipedia.org/wiki/Cream_(nightclub)', 'Wikipedia: Cream (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/Daresbury', 'Wikipedia: Daresbury')}
${sourceLink('https://creamfields.com/history/', 'Creamfields: The History of Creamfields UK')}
${sourceLink('https://creamfields.com/history/2025-new-era/', 'Creamfields: Creamfields 2025, A New Era of the Fields')}
${sourceLink('https://creamfields.com/info/where-is-the-festival/', 'Creamfields: Where is the festival?')}
${sourceLink('https://creamfields.com/info/car/', 'Creamfields: How do I travel to the festival by car?')}
${sourceLink('https://creamfields.com/info/what-age-do-you-need-to-be-to-attend/', 'Creamfields: What age do you need to be to attend?')}
${sourceLink('https://www.nme.com/news/music/various-artists-2616-1250661', 'NME: Creamfields ends early following heavy flooding')}
${sourceLink('https://www.aol.co.uk/articles/creamfields-2026-chaos-stages-shut-081530000.html', 'Mirror via AOL: Creamfields 2026 chaos as stages shut down due to Bank Holiday storms')}
${sourceLink('https://britbrief.co.uk/entertainment/festivals/creamfields-2026-ends-with-80000-fans-at-daresbury.html', 'Brit Brief: Creamfields 2026 ends with 80,000 fans at Daresbury site')}
${sourceLink('https://electronicgroove.com/creamfields-marks-20-years-at-daresbury-with-2026-line-up/', 'Electronic Groove: Creamfields marks 20 years at Daresbury with 2026 line-up')}
${sourceLink('https://www.skiddle.com/news/all/All-you-need-to-know-about-Creamfields-2026/60796/', 'Skiddle: All you need to know about Creamfields 2026')}
${sourceLink('https://discover.ticketmaster.co.uk/festivals/creamfields-2025-line-up-deep-dive-64595/', 'Ticketmaster Discover: Creamfields 2025, line-up deep dive')}
${sourceLink('https://discover.ticketmaster.co.uk/festivals/creamfields-delivers-two-new-stages-and-an-all-star-line-up-for-2025-66551/', 'Ticketmaster Discover: Creamfields delivers two new stages and an all-star line-up for 2025')}
${sourceLink('https://www.festivalmates.com/blog/creamfields-2026-first-timers-guide', "FestivalMates: Creamfields 2026, the complete first-timer's guide")}
${sourceLink('https://www.skiddle.com/news/all/The-Best-DJ-Sets-of-All-Time/57700/', 'Skiddle: The Best DJ Sets of All Time')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Creamfields has made room for drum and bass beside its house and techno, and my own music comes out of the same breaks and bass lineage. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('creamfields-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Creamfields Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/creamfields.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page creamfields-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('creamfields-festival.html', html);
console.log('Built creamfields-festival.html');
