// Build best-clubs-in-amsterdam.html from amsterdam-clubs-draft.md.
//
// Asked for by the owner on 2026-09-23, with the Ibiza clubs, Europe clubbing
// cities and New Year's Eve festivals pages. Research package:
// amsterdam-clubs-research.md and the "Клубные города (волна 2)" entry in
// TOPIC-DOSSIERS.md. Volumes are Google Ads Keyword Planner ranges (All
// locations), recorded in keywords/amsterdam-clubs.json. Stage 6 was not run
// as a separate pass: the owner approved writing all four on the packages.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('amsterdam-clubs-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-amsterdam';
const title = 'Best Clubs in Amsterdam: From RoXY to Radion';
const description = 'Shelter, Radion, Lofi and the Gashouder: the best clubs in Amsterdam open now, why they run 24 hours, and the history from RoXY to De School.';
const datePublished = '2026-09-23';
const dateModified = '2026-09-23';
const dateLabel = '23 September 2026';

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

// From Wikimedia Commons, downloaded to img/amsterdam-clubs/ on 2026-09-23,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/amsterdam-clubs/${name}-${width}.webp`,
  srcset: `img/amsterdam-clubs/${name}-320.webp 320w, img/amsterdam-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Each video is in the Selector catalogue and was checked for embedding
// through YouTube oEmbed on 2026-09-23. None is embedded by another guide.
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out (updated 7 February 2025), Dirty Disco, I amsterdam and
// the r/TheOverload threads, checked 2026-09-23. Typed, not computed.
// Revisit every six months.
const media = {
  'Paradiso': figure('paradiso', 1200, 917,
    'The brick front of Paradiso, a former church hall in Amsterdam',
    'Paradiso, built in 1879 and 1880 as a meeting hall and open as a music venue since 30 March 1968. Photograph: Andreas Praefcke, CC BY 3.0.'),
  'Gashouder': figure('gashouder', 1200, 800,
    'The round iron gasholder of the Westergasfabriek in Amsterdam, seen from the park',
    'The Gashouder at the Westergasfabriek, where Awakenings has run since 1997. Photograph: Bert van As, Rijksdienst voor het Cultureel Erfgoed, CC BY-SA 4.0.'),
  'Richie Hawtin Amsterdam': video('sui24hHDZDI', 'Techno', 'Richie Hawtin', 'DJ set, Boiler Room Amsterdam, 2012',
    "Richie Hawtin's set for Boiler Room in Amsterdam in 2012, on Boiler Room's own channel."),
  'Maceo Plex Awakenings Gashouder': video('gR_nkH5B35s', 'Techno', 'Maceo Plex', 'Mosaic x Awakenings at the Gashouder, ADE 2018',
    "Maceo Plex at the Gashouder during Amsterdam Dance Event 2018, filmed by Mixmag."),
  'Dave Clarke Amsterdam ADE': video('IVohvU3WApo', 'Techno', 'Dave Clarke', 'DJ set, Boiler Room Amsterdam x ADE, 2014',
    "Dave Clarke's set for Boiler Room during Amsterdam Dance Event in 2014, on Boiler Room's own channel."),
  'Motor City Drum Ensemble Dekmantel': video('p6ozF0Y-PzU', 'House', 'Motor City Drum Ensemble', 'Boiler Room x Dekmantel Festival, Amsterdam, 2014',
    "Motor City Drum Ensemble at Dekmantel in 2014, on Boiler Room's own channel."),
  'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the long end of an Amsterdam night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Shelter', "Noord, under the A'DAM Tower", 'Techno and house on a Funktion-One system, 24-hour permit since 2016', 'A long night across the IJ'],
      ['Radion', 'Nieuw-West', 'Techno in the former ACTA building, 24-hour permit since 2015', 'Bare concrete rooms and industrial techno'],
      ['Lofi', 'Sloterdijk', 'A creative venue in an old bus warehouse', 'The local crowd'],
      ['Garage Noord', 'Noord', 'Diverse, progressive bookings in a former car repair workshop', 'A small room'],
      ['Warehouse Elementenstraat', 'Near the harbour', 'Four rooms of techno, reopened in 2014', 'The biggest regular club nights'],
      ['Melkweg', 'Leidseplein', 'A concert hall since 1970 with club nights', 'A night that starts with a band'],
      ['Paradiso', 'Leidseplein', 'A former church hall, a venue since 1968', "The city's most famous venue"]
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
  {id: 'where-it-started', heading: 'Where it started: RoXY, Mazzo and iT'},
  {id: 'club-11-to-de-school', heading: 'From Club 11 to De School'},
  {id: 'best-clubs-now', heading: 'The best clubs in Amsterdam now'},
  {id: 'techno-clubs', heading: 'Best techno clubs in Amsterdam'},
  {id: 'day-long-licences', heading: 'Why Amsterdam clubs stay open all day'},
  {id: 'where-to-go', heading: 'Where to go out: Noord, Nieuw-West and the centre'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Amsterdam clubs',
    title: 'The best clubs in Amsterdam, from RoXY to Radion',
    deck: 'The club that started Dutch dance music, the 24-hour rooms that replaced it, and the Amsterdam clubs worth a night now.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Amsterdam', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs outside the canal belt.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Amsterdam clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.vice.com/en/article/ade-amsterdams-most-legendary-clubs/', "Vice: Amsterdam's Most Legendary Clubs")}
${sourceLink('https://3voor12.vpro.nl/artikelen/heimwee-naar-club-11', 'VPRO 3voor12: Heimwee naar Club 11')}
${sourceLink('https://rozenbergquarterly.com/high-amsterdam-van-roxy-tot-regelgeving/', 'Rozenberg Quarterly: High Amsterdam, van RoXY tot regelgeving')}
${sourceLink('https://en.wikipedia.org/wiki/Paradiso_(Amsterdam)', 'Wikipedia: Paradiso (Amsterdam)')}
${sourceLink('https://en.wikipedia.org/wiki/Melkweg', 'Wikipedia: Melkweg')}
${sourceLink('https://en.wikipedia.org/wiki/De_School', 'Wikipedia: De School')}
${sourceLink('https://en.wikipedia.org/wiki/Awakenings_(festival)', 'Wikipedia: Awakenings (festival)')}
${sourceLink('https://www.timeout.com/amsterdam/nightlife/best-clubs-in-amsterdam', 'Time Out: The 13 best clubs in Amsterdam, updated 7 February 2025')}
${sourceLink('https://www.dirtydiscoradio.com/best-clubs-amsterdam', 'Dirty Disco: The Best Clubs in Amsterdam for House and Techno Fans')}
${sourceLink('https://adamtoren.nl/shelter/', "A'DAM Toren: Shelter")}
${sourceLink('https://mixmag.net/read/two-new-venues-awarded-24-hour-licenses-in-amsterdam-news', 'Mixmag: Two Amsterdam venues have been awarded 24-hour licenses')}
${sourceLink('https://www.pbs.org/newshour/show/behind-amsterdams-infamous-club-scene-this-night-mayor-keeps-the-peace', "PBS NewsHour: Behind Amsterdam's thriving club scene, this 'night mayor' keeps the peace")}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-amsterdam.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Amsterdam', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-amsterdam'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/amsterdam-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page amsterdam-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-amsterdam.html', html);
console.log('Built best-clubs-in-amsterdam.html');
