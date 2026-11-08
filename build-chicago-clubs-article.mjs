// Build best-clubs-in-chicago.html from chicago-clubs-draft.md.
//
// Asked for by the owner on 2026-11-08 ("lets create first 3 ... 1 by 1"),
// first of the Chicago, Miami and Los Angeles club guides. Research: the clubs
// and festivals entries in TOPIC-DOSSIERS.md. Volumes are in
// keywords/chicago-clubs.json: Keyword Planner ranges for the heads, Ahrefs US
// points for the long tail, labelled per term and never merged. The page is
// about music-first dance clubs, as the NYC, Paris and Amsterdam guides are.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('chicago-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-chicago';
const title = 'Best Clubs in Chicago: Nightclubs for House and Techno';
const description = 'The best clubs in Chicago for house and techno: Smart Bar, Podlasie, Spybar, Sound-Bar, Le Nocturne and Radius, and the Warehouse where house began.';
const datePublished = '2026-11-08';
const dateModified = '2026-11-08';
const dateLabel = '8 November 2026';

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

// From Wikimedia Commons, downloaded to img/chicago-clubs/ on 2026-11-08,
// licences checked through the Commons API, used by no other guide. The house
// music guide uses the ADE 2012 Knuckles photo and the ARC guide the Frankie
// Knuckles Way sign, so neither is used here.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/chicago-clubs/${name}-${width}.webp`,
  srcset: `img/chicago-clubs/${name}-320.webp 320w, img/chicago-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-11-08 and embedded by no other guide (media/chicago-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out ("The best clubs in Chicago for dancing", 8 December
// 2025), 6AM (2023), DJ Mag Top 100 Clubs 2026 and the clubs' listings,
// checked 2026-11-08. Typed, not computed. Revisit every six months.
const media = {
  'Warehouse': figure('chicago-warehouse-2024', 640, 480,
    'The brick building at 206 South Jefferson Street that housed the Warehouse, seen from the street in 2024',
    'The Warehouse building at 206 South Jefferson Street, on the block named Frankie Knuckles Way, in October 2024. A Chicago Landmark since 2023. Photograph: Te-tukk, CC BY-SA 4.0.'),
  'Frankie Knuckles': figure('frankie-knuckles-mighty-2012', 1200, 1141,
    'Frankie Knuckles behind the decks at a San Francisco club in 2012',
    'Frankie Knuckles playing The Mighty in San Francisco in 2012, thirty years after he left the Warehouse. Photograph: HaeB, CC BY-SA 4.0.'),
  'Metro': figure('chicago-metro-sign', 1200, 807,
    'The vertical Metro sign on the front of the building on North Clark Street',
    'The Metro sign at 3730 North Clark Street. Smart Bar is in the basement. Photograph: Joi Ito, CC BY 2.0.'),
  'Derrick Carter': figure('derrick-carter-2023', 1200, 1161,
    'Derrick Carter DJing on a boat at night, lit from below',
    'Derrick Carter, a Smart Bar resident, playing a boat party on the Hudson in July 2023. Photograph: voorts, CC BY-SA 4.0.'),
  'Chicago River': figure('chicago-river-night', 1200, 900,
    'The Chicago River and the downtown skyline lit up at night',
    'The Chicago River at night, with River North on the left bank. Photograph: Spatms, CC BY-SA 4.0.'),
  'Black Madonna': video('PsR7gAUZ-Wg', 'House', 'The Black Madonna', 'Boiler Room: Streaming From Isolation, 2020',
    'The Black Madonna, a former Smart Bar resident, playing house and disco for Boiler Room in 2020.'),
  'Layton Giordani Radius': video('q139iC5vMpc', 'Techno', 'Layton Giordani', 'Drumcode Radio Live from Radius, Chicago',
    'Layton Giordani recorded live at Radius in Pilsen for Drumcode, 2023.'),
  'Derrick Carter Boiler Room': video('AahI0K_YGqA', 'House', 'Derrick Carter', 'Boiler Room, São Paulo, 2018',
    'Derrick Carter playing soulful house for Boiler Room in São Paulo.'),
  'Chosen Few': video('eoF8isbPQac', 'House', 'Chosen Few DJs', 'Alan King and Wayne Williams, live from Defected HQ',
    'Two of the Chosen Few DJs, Alan King and Wayne Williams, playing Chicago house for Defected in 2024.'),
  'Adam Beyer Prysm': video('w0Xx2qewZ58', 'Techno', 'Adam Beyer', 'Drumcode Radio Live from Prysm, Chicago',
    'Adam Beyer recorded live at Prysm for Drumcode in 2026.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the end of a Chicago night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Smart Bar', 'Wrigleyville', 'A 400-capacity basement under Metro, open since 1982', 'House and techno, and Queen! on Sundays'],
      ['Podlasie Club', 'Avondale', 'A Polish bar from 1986 with club nights since 2021', 'Eclectic, local bookings in a small room'],
      ['Spybar', 'River North', 'A 300-capacity club, open since 1995', 'Techno, house and electro'],
      ['Sound-Bar', 'River North', 'A larger club, open since 2004', 'Progressive house and techno'],
      ['Le Nocturne', 'Uptown', 'A 25,000-watt system; Ron Carroll and Paul Johnson were residents', 'Chicago house'],
      ['Radius', 'East Pilsen', 'A former steel factory, 5,500 across two rooms', 'Big touring techno and house'],
      ['Primary', 'Near North Side', 'An intimate electronic club at 5 West Division Street', 'House, tech house and techno']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
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

const sections = [
  {id: 'warehouse', heading: 'The Warehouse and the birth of house'},
  {id: 'music-box', heading: 'The Music Box and Ron Hardy'},
  {id: 'smart-bar', heading: 'Smart Bar and the Metro'},
  {id: 'best-clubs-now', heading: 'The best clubs in Chicago now'},
  {id: 'house-clubs', heading: 'Chicago house music clubs'},
  {id: 'techno-clubs', heading: 'Chicago techno clubs and EDM rooms'},
  {id: 'where-to-go', heading: 'Where to go out in Chicago'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Chicago clubs',
    title: 'The best clubs in Chicago, from the Warehouse to Smart Bar',
    deck: 'House music took its name from a Chicago club. The rooms that still book it properly are few, and worth knowing.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Chicago', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around the sound.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Chicago clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Warehouse_(nightclub)', 'Wikipedia: The Warehouse (Chicago)')}
${sourceLink('https://en.wikipedia.org/wiki/Frankie_Knuckles', 'Wikipedia: Frankie Knuckles')}
${sourceLink('https://en.wikipedia.org/wiki/Ron_Hardy', 'Wikipedia: Ron Hardy')}
${sourceLink('https://en.wikipedia.org/wiki/Metro_Chicago', 'Wikipedia: Metro Chicago and Smart Bar')}
${sourceLink('https://www.timeout.com/chicago/clubs/the-best-dance-clubs-in-chicago', 'Time Out: The best nightclubs and dance clubs in Chicago (2025)')}
${sourceLink('https://www.timeout.com/chicago/news/the-hottest-nightclub-in-chicago-is-hiding-in-a-polish-dive-bar-093025', 'Time Out: The hottest nightclub in Chicago is hiding in a Polish dive bar')}
${sourceLink('https://6amgroup.com/best-house-techno-clubs-north-america', '6AM: 40 best house and techno clubs in North America')}
${sourceLink('https://djmag.com/top100clubs/2026/79/radius', 'DJ Mag Top 100 Clubs 2026: Radius')}
${sourceLink('https://www.choosechicago.com/blog/music/where-to-hear-house-music-in-chicago-top-clubs-and-venues/', 'Choose Chicago: where to hear house music in Chicago')}
${sourceLink('https://www.chicago.gov/city/en/depts/bacp/provdrs/liquor_licenses/supp_info.html', 'City of Chicago: liquor licence information')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-chicago.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Chicago', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-chicago'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/chicago-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page chicago-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-chicago.html', html);
console.log('Built best-clubs-in-chicago.html');
