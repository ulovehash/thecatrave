// Build best-clubs-in-tokyo.html from tokyo-clubs-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go write these 3 articles next", items
// 4-6 of a ranked list of city club guides). Research: Google Ads Keyword
// Planner and a live Google search (keywords/tokyo-clubs.json), per
// KEYWORD-METHOD.md's 2026-09-22 tool switch. An earlier pass researched this
// page through Ahrefs instead, against that documented default
// (defects.json, tokyo-budapest-prague-used-ahrefs-against-documented-default);
// the keyword map was redone on 2026-09-24 once the owner caught it. "Clubs" is
// at least as ambiguous a word in Tokyo as in NYC: Keyword Planner's ideas for
// "tokyo clubs" are led by strip clubs, hostess clubs and host clubs, none of
// which this page covers. The page is about music-first house, techno and bass
// clubs, as in the NYC, Paris, Barcelona and Amsterdam guides. Stage 6 was not
// run as a separate pass, as for the wave 3 NYC/house/techno set: the owner
// asked for the three city guides straight after stages 1, 2 and 4.
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

const draft = fs.readFileSync('tokyo-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-tokyo';
const title = 'Best Clubs in Tokyo: WOMB, Contact and the Ban on Dancing';
const description = 'WOMB, Contact, Vent and Circus Tokyo: the best clubs in Tokyo for house, techno and bass music, and the 68-year law against dancing that shaped them.';
const datePublished = '2026-09-24';
const dateModified = '2026-09-24';
const dateLabel = '24 September 2026';

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

// From Wikimedia Commons, downloaded to img/tokyo-clubs/ on 2026-09-24,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/tokyo-clubs/${name}-${width}.webp`,
  srcset: `img/tokyo-clubs/${name}-320.webp 320w, img/tokyo-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Checked through YouTube oEmbed
// and against Boiler Room's own listings on 2026-09-24, embedded by no other
// guide (media/tokyo-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'ageHa': figure('ageha-studio-coast', 1200, 850,
    'The exterior of Studio Coast, the waterfront building in Shin-Kiba that housed ageHa',
    'Studio Coast in Shin-Kiba, home to ageHa from 2002 until its closure in January 2022, photographed in 2018. Photograph: Kakidai, CC BY-SA 4.0.'),
  'WOMB': figure('womb-shibuya', 1200, 800,
    'The street-level entrance and signage of WOMB nightclub in Shibuya, Tokyo',
    "WOMB's entrance in Shibuya, photographed in 2023. The club has run from this address since April 2000. Photograph: Dick Thomas Johnson, CC BY 2.0."),
  'Dogenzaka': figure('dogenzaka-shibuya', 1200, 900,
    'Dogenzaka at night, its steep street lined with illuminated signs for clubs, bars and karaoke boxes',
    'Dogenzaka, Shibuya, photographed at night in 2024. Most of the clubs in this guide sit on or just off this street. Photograph: Freddickfix, CC BY 4.0.'),
  'Chida': video('E2mThQ-g-24', 'House', 'Chida', 'Boiler Room Tokyo, 2014',
    "Chida's set from Boiler Room's first-ever Tokyo broadcast in June 2014, alongside Force of Nature and Monkey Timers. From this site's catalogue of recorded DJ sets."),
  'Wata Igarashi': video('S0yP6ZOl4z0', 'Techno', 'Wata Igarashi', 'Boiler Room Tokyo x TDME, 2016',
    "Wata Igarashi playing Boiler Room's Tokyo x TDME showcase in Shibuya in December 2016. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['WOMB', 'Shibuya', 'Four floors around a giant mirrorball, open since 2000', 'Techno, drum and bass and electro, and the annual WOMB Adventure festival'],
      ['Contact', 'Shibuya (Dogenzaka)', "A basement built as Air's successor, open since 2016", 'International techno and house bookings, and Boiler Room broadcasts'],
      ['Vent', 'Minami-Aoyama', 'A smaller room built around sound quality, open since 2016', 'A quieter, more serious night of house and techno'],
      ['Circus Tokyo', 'Shibuya', "Osaka's Club Circus's Tokyo outpost, open since 2015", 'Drum and bass and bass music alongside house and techno'],
      ['Solfa', 'Nakameguro', 'A smaller room outside the Shibuya cluster, open since 2009', 'Techno, bass, house, disco and soul, away from the main strip']
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
  {id: 'fueiho-law', heading: 'Fifty years of a law against dancing'},
  {id: 'air-and-ageha', heading: 'Air and the clubs before the reform'},
  {id: 'best-clubs-now', heading: 'The best clubs in Tokyo now'},
  {id: 'techno-clubs', heading: 'Best techno clubs in Tokyo'},
  {id: 'where-to-go', heading: 'Where to go out in Tokyo'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Tokyo clubs',
    title: 'The best clubs in Tokyo, from WOMB to the fight to legalise dancing',
    deck: "A city where dancing after 1am was a legal grey area until 2016, and where the best rooms for house, techno and bass music sit in Shibuya basements and a converted event hall on the docks.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Tokyo', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around a law against dancing.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Tokyo clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Businesses_Affecting_Public_Morals_Regulation_Act', 'Wikipedia: Businesses Affecting Public Morals Regulation Act')}
${sourceLink('https://en.wikipedia.org/wiki/Womb_(nightclub)', 'Wikipedia: Womb (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/AgeHa', 'Wikipedia: AgeHa')}
${sourceLink('https://djmag.com/news/tokyo-club-air-close', 'DJ Mag: Tokyo club Air to close (2015)')}
${sourceLink('https://djmag.com/top100clubs/2021/67/WOMB', 'DJ Mag: Top 100 Clubs 2021, WOMB')}
${sourceLink('https://djmag.com/top100clubs/2023/76/WOMB', 'DJ Mag: Top 100 Clubs 2023, WOMB')}
${sourceLink('https://www.japantimes.co.jp/culture/2022/02/11/music/tokyo-ageha-studio-coast-closes/', "The Japan Times: Tokyo club scene's 'temple' may be gone, ageHa closes (2022)")}
${sourceLink('https://crackmagazine.net/2016/06/japan-finally-lifted-no-dancing-law/', 'Crack Magazine: Japan has finally lifted their no dancing law (2016)')}
${sourceLink('https://ra.co/clubs/1661', 'Resident Advisor: WOMB, Tokyo')}
${sourceLink('https://ra.co/clubs/122892', 'Resident Advisor: Vent, Tokyo')}
${sourceLink('https://boilerroom.tv/session/boiler-room-tokyo-contact/', 'Boiler Room: Boiler Room Tokyo, Contact (2019)')}
${sourceLink('https://boilerroom.tv/session/tokyo-tdme-x-boiler-room/', 'Boiler Room: Tokyo, TDME x Boiler Room (2016)')}
${sourceLink('https://www.mixesdb.com/w/2014-06-20_-_Force_Of_Nature_@_Boiler_Room_Tokyo', 'MixesDB: Force of Nature at Boiler Room Tokyo (20 June 2014)')}
<li>Set counts and catalogue details are measured from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-tokyo.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Tokyo', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-tokyo'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/tokyo-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page tokyo-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-tokyo.html', html);
console.log('Built best-clubs-in-tokyo.html');
