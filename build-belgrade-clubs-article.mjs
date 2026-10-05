// Build best-clubs-in-belgrade.html from belgrade-clubs-draft.md.
//
// Written 2026-10-05 after the owner approved the research package
// (belgrade-research-package.md). Keywords: Google Ads Keyword Planner, all
// locations (keywords/belgrade-clubs.json). Every venue claim comes from the
// venue's own site, Resident Advisor news, boilerroom.tv or a dated local guide;
// anything single-source or unresolved (2026 splav moorings, the Freestyler
// address, Kult's current programme) is hedged or left out. Media is
// [Image: ...], [Embed: ...] and [Table: ...] placeholder lines in the draft; a
// placeholder with no asset, or an asset with no placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('belgrade-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-belgrade';
const title = 'Belgrade Clubs and Nightlife: Drugstore, Klub 20/44, Splavovi';
const description = 'Drugstore, Klub 20/44 and Barutana: the Belgrade clubs worth a night, how the splavovi river rafts were cleared from the Sava, and Boiler Room sets to hear first.';
const datePublished = '2026-10-05';
const dateModified = '2026-10-05';
const dateLabel = '5 October 2026';

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

// From Wikimedia Commons, downloaded to img/belgrade-clubs/ on 2026-10-05,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/belgrade-clubs/${name}-${width}.webp`,
  srcset: `img/belgrade-clubs/${name}-320.webp 320w, img/belgrade-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Boiler Room's own uploads. Titles read from YouTube oEmbed and sessions from
// boilerroom.tv/city/belgrade on 2026-10-05; embedded by no other guide
// (media/belgrade-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Sava from Kalemegdan': figure('sava-from-kalemegdan', 1200, 900,
    'The Sava river in Belgrade seen from Kalemegdan fortress, with road bridges and moored boats',
    "The Sava from Kalemegdan fortress, photographed in 2007. Belgrade's splavs were moored along rivers like this one. Photograph: Petar Milošević, CC BY 3.0."),
  'Savski kej raft': figure('savski-kej-raft', 1200, 900,
    'A floating building moored along the Savski kej embankment on the Sava in Belgrade',
    'A moored floating building on the Savski kej, photographed in April 2011, before the 2023 and 2024 clearances. Photograph: darkobajic, CC BY 3.0.'),
  'Marko Nastic': video('Yr1MNU8V-2w', 'Techno', 'Marko Nastić', 'MAD in Belgrade x Boiler Room, 2014',
    "Marko Nastić playing Boiler Room's stage at the MAD in Belgrade festival in May 2014. From this site's catalogue of recorded DJ sets."),
  'Ancient Methods': video('14ksGZfcgHM', 'Techno', 'Ancient Methods', 'Boiler Room x Belgrade: Drugstore, 2019',
    "Ancient Methods at Drugstore in 2019, under Boiler Room's own title for the session. From this site's catalogue of recorded DJ sets."),
  'Tijana T': video('xjO25HRDe-w', 'Techno', 'Tijana T', 'Boiler Room Belgrade at Klub 20/44, 2017',
    "Tijana T on the deck of the Klub 20/44 boat for Boiler Room in September 2017. From this site's catalogue of recorded DJ sets."),
  '33.10.3402': video('rJqr7_Q2uxE', 'Techno', '33.10.3402', 'Boiler Room Belgrade: Drugstore, 2019',
    "33.10.3402 playing Drugstore's first Boiler Room session in March 2019. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Where', 'Character', 'Open (per local guides, 2026)'],
    rows: [
      ['Drugstore', 'Bulevar Despota Stefana 115, Palilula', 'A former slaughterhouse; DIY from 2012, in this space since 2014', 'Friday and Saturday'],
      ['Klub 20/44', 'Karađorđeva 44', 'Moved from a boat on the Sava on 31 December 2024', 'Thursday to Saturday'],
      ['Barutana', 'Kalemegdan fortress', 'Open-air club outside an 18th-century gunpowder magazine', 'Reopened 5 June 2026'],
      ['Kult', 'Čumićevo sokače 3', 'House to techno, capacity about 350; opened December 2022', 'Programme not confirmed'],
      ['Lift', 'Cetinjska 15, Dorćol', 'A DJ bar rather than a club', 'Check its own listings']
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
  {id: 'belgrade-nightlife-history', heading: 'Belgrade nightlife in one pass'},
  {id: 'best-clubs-now', heading: 'The best clubs in Belgrade now'},
  {id: 'drugstore', heading: 'Drugstore Belgrade club: the former slaughterhouse'},
  {id: 'klub-20-44', heading: 'Klub 20/44, from the boat to Karađorđeva'},
  {id: 'barutana', heading: 'Barutana Belgrade, the club in the fortress'},
  {id: 'techno', heading: 'Belgrade techno: the best techno club Belgrade has'},
  {id: 'splavovi', heading: 'Belgrade splavovi and the river clubs'},
  {id: 'where-to-go', heading: 'Where to go out in Belgrade'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Belgrade clubs',
    title: 'Belgrade clubs and nightlife, from Drugstore to the river rafts',
    deck: "A club in a former slaughterhouse, another that moved off its boat, and river rafts the city spent two years clearing: where Belgrade's electronic music happens now.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Belgrade clubs', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Belgrade clubs beyond the bars.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Belgrade clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://drugstorebeograd.com/', 'Drugstore: official site')}
${sourceLink('https://boilerroom.tv/city/belgrade', 'Boiler Room: Belgrade sessions')}
${sourceLink('https://ra.co/news/81854', 'Resident Advisor: Klub 20/44 reopens at Karađorđeva 44 (25 December 2024)')}
${sourceLink('https://nosleepfestival.com/', 'No Sleep Festival: official site')}
<li>Balkan Insight, history of the Belgrade splavs (13 June 2016); Vreme (24 May 2023), Danas (9 May 2024) and RTS / Direktno (13 August 2024) on the clearance of the rafts from the Savski kej.</li>
<li>StillInBelgrade, 10 clubs and DJ bars in Belgrade (17 February 2026), for opening nights and capacity; clubber.rs, for Barutana's history and its June 2026 reopening; Belgrade My Way, for the move of the rafts since 2025.</li>
<li>Set titles and sessions were checked on Boiler Room's own channel and boilerroom.tv on 5 October 2026. Catalogue details are from this site's own catalogue of recorded DJ sets.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-belgrade.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Belgrade Clubs and Nightlife', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-belgrade'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/belgrade-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page belgrade-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-belgrade.html', html);
console.log('Built best-clubs-in-belgrade.html');
