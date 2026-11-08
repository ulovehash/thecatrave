// Build best-clubs-in-miami.html from miami-clubs-draft.md.
//
// Asked for by the owner on 2026-11-08 ("lets create first 3 ... 1 by 1"),
// second of the Chicago, Miami and Los Angeles club guides. Research: the clubs
// and festivals entries in TOPIC-DOSSIERS.md. Volumes are in
// keywords/miami-clubs.json: Keyword Planner ranges for the heads, Ahrefs US
// points for the long tail, labelled per term and never merged. The page leads
// with music-first clubs and answers the LIV and E11EVEN questions in prose.
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

const draft = fs.readFileSync('miami-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-miami';
const title = 'Best Clubs in Miami: Nightclubs for House and Techno';
const description = 'The best clubs in Miami for house and techno: Club Space and its Terrace, Floyd, Jolene, Do Not Sit On The Furniture, M2 and Domicile, plus LIV and E11EVEN.';
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

// From Wikimedia Commons, downloaded to img/miami-clubs/ on 2026-11-08,
// licences checked through the Commons API, used by no other guide. The world
// clubs guide uses the 2019 Terrace photo and the Ultra guide the Bayfront
// shots, so neither is used here.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/miami-clubs/${name}-${width}.webp`,
  srcset: `img/miami-clubs/${name}-320.webp 320w, img/miami-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-11-08 and embedded by no other guide (media/miami-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out ("Best clubs in Miami", updated January 2026), 6AM,
// DJ Mag Top 100 Clubs 2026 and the clubs' RA pages, checked 2026-11-08.
// Typed, not computed. Revisit every six months.
const media = {
  'Club Space exterior': figure('club-space-exterior-2025', 1200, 900,
    'The black Club Space sign on the side of the club in Downtown Miami, with the E11EVEN sign on the building next door',
    'Club Space in Park West, Downtown Miami, in July 2025, with E11EVEN next door. Photograph: InvadingInvader, CC BY 4.0.'),
  'Danny Tenaglia': figure('danny-tenaglia-2007', 964, 1236,
    'Danny Tenaglia smiling in a crowded club, wearing a white cap and a chain',
    'Danny Tenaglia in 2007. He played the opening night of Club Space in 2000. Photograph: Kevin3141, CC BY 2.0.'),
  'WMC pool party': figure('wmc-2009-pool-party', 1200, 717,
    'A crowd with raised arms at an outdoor pool party under palm trees',
    'A Beatport pool party during the Winter Music Conference, 29 March 2009. Photograph: Vincent Escudero, CC BY 2.0.'),
  'LIV': figure('liv-fontainebleau-2011', 1200, 896,
    'The dancefloor at LIV in the Fontainebleau, lit purple, with lights over the crowd',
    'LIV at the Fontainebleau, Miami Beach, in April 2011. Photograph: Ines Hegedus-Garcia, CC BY 2.0.'),
  'Ocean Drive': figure('ocean-drive-carlyle-2018', 1200, 803,
    'The Art Deco front of the Carlyle on Ocean Drive with its pink neon sign at dusk',
    'The Carlyle on Ocean Drive, South Beach, in August 2018. Photograph: Radomianin, public domain.'),
  'Martinez Brothers Space': video('J6E0tzn_atA', 'House', 'The Martinez Brothers', "Live from Club Space's 32-hour closing party, Mixmag, 2019",
    "The Martinez Brothers at Club Space's 32-hour closing party, filmed by Mixmag in 2019."),
  'Deep Dish Terrace': video('FkXtP2WBh7I', 'House', 'Deep Dish', 'The Terrace at Club Space',
    'Deep Dish, Dubfire and Sharam, on the Terrace at Club Space, presented by Link Miami Rebels.'),
  'Danny Tenaglia Boiler Room': video('-ep50fB1HFc', 'House', 'Danny Tenaglia', 'Boiler Room, Miami, 2017',
    'Danny Tenaglia playing for Boiler Room in Miami.'),
  'Behrouz': video('JH0orYzf6jY', 'House', 'Behrouz', "Danny Tenaglia's 60th birthday, Beatport Live, 2021",
    'Behrouz, who opened Do Not Sit On The Furniture, playing for Beatport at the party for Danny Tenaglia\'s 60th birthday.'),
  'Adam Beyer Factory Town': video('3wOKANodMf8', 'Techno', 'Adam Beyer', 'Drumcode Radio Live from Factory Town, Miami',
    'Adam Beyer recorded live at Factory Town in Hialeah for Drumcode, 2025.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the end of a Miami night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Club Space', 'Park West, Downtown', 'Three rooms, about 2,000, open around the clock, since 2000', 'Sunrise on the Terrace, touring house and techno'],
      ['Floyd', 'Park West, Downtown', 'A small red room inside the Club Space building', 'House and techno, separate tickets'],
      ['Jolene Sound Room', 'Downtown', 'A hi-fi basement in a 90-year-old building', 'Disco and house'],
      ['Do Not Sit On The Furniture', 'South Beach', 'A small club off Lincoln Road, opened by Behrouz', 'Deep and melodic house'],
      ['M2', 'South Beach', 'A 35,000-square-foot former theatre, run by Ultra Worldwide', 'Big techno on Resistance nights'],
      ['Domicile', 'Allapattah', 'A black-walled club, opened around 2023', 'Hard techno and trance'],
      ['MODE Downtown', 'Downtown', 'A two-storey club with a basement dancefloor', 'Afro-house, electro and Detroit techno']
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
  {id: 'club-space', heading: 'Club Space and the Terrace'},
  {id: 'danny-tenaglia', heading: 'Danny Tenaglia and the Miami sound'},
  {id: 'miami-music-week', heading: 'The Winter Music Conference and Miami Music Week'},
  {id: 'best-clubs-now', heading: 'The best clubs in Miami now'},
  {id: 'house-clubs', heading: 'Miami house music clubs'},
  {id: 'techno-clubs', heading: 'Miami techno clubs and EDM rooms'},
  {id: 'where-to-go', heading: 'Where to go out in Miami'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Miami clubs',
    title: 'The best clubs in Miami, from the Terrace at Club Space to Do Not Sit',
    deck: 'Miami is famous for bottle service. The clubs where the music is the point are fewer, and they are the reason DJs come back every March.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Miami', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around the sound.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Miami clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Club_Space', 'Wikipedia: Club Space')}
${sourceLink('https://en.wikipedia.org/wiki/Winter_Music_Conference', 'Wikipedia: Winter Music Conference')}
${sourceLink('https://en.wikipedia.org/wiki/Miami_Music_Week', 'Wikipedia: Miami Music Week')}
${sourceLink('https://en.wikipedia.org/wiki/Danny_Tenaglia', 'Wikipedia: Danny Tenaglia')}
${sourceLink('https://en.wikipedia.org/wiki/LIV_(nightclub)', 'Wikipedia: LIV')}
${sourceLink('https://en.wikipedia.org/wiki/E11even', 'Wikipedia: E11EVEN')}
${sourceLink('https://www.timeout.com/miami/nightlife/best-clubs-in-miami', 'Time Out: Best clubs in Miami (2026)')}
${sourceLink('https://6amgroup.com/articles/all/40-best-house-techno-clubs-in-north-america', '6AM: 40 best house and techno clubs in North America')}
${sourceLink('https://djmag.com/top100clubs/2026/14/club-space', 'DJ Mag Top 100 Clubs 2026: Club Space')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-miami.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Miami', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-miami'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/miami-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page miami-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-miami.html', html);
console.log('Built best-clubs-in-miami.html');
