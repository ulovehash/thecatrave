// Build best-clubs-in-san-francisco.html from sf-clubs-draft.md.
//
// Asked for by the owner on 2026-11-09 ("next 3"), second of the amapiano, San
// Francisco and Montreal guides. Research: the clubs entry in TOPIC-DOSSIERS.md
// and a Keyword Planner pass of 2026-11-09 (keywords/sf-clubs.json). The page
// is about music-first dance clubs, as the Chicago, NYC and LA guides are.
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

const draft = fs.readFileSync('sf-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-san-francisco';
const title = 'Best Clubs in San Francisco: Nightclubs for House and Techno';
const description = 'The best clubs in San Francisco for house and techno: Public Works, Audio, Monarch, 1015 Folsom and the EndUp, plus DNA Lounge, Oasis and the city\u2019s disco history.';
const datePublished = '2026-11-09';
const dateModified = '2026-11-09';
const dateLabel = '9 November 2026';

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

// From Wikimedia Commons, downloaded to img/sf-clubs/ on 2026-11-09, licences
// checked through the Commons API, used by no other guide. The Chicago guide's
// Frankie Knuckles photo was taken at The Mighty in San Francisco, so it is not
// reused here.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/sf-clubs/${name}-${width}.webp`,
  srcset: `img/sf-clubs/${name}-320.webp 320w, img/sf-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Official, label, artist or club uploads. All checked through YouTube oEmbed
// on 2026-11-09 and embedded by no other guide (media/sf-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out ("16 Best Nightclubs in San Francisco", 6 August 2024)
// and 6AM (2023), checked 2026-11-09. Typed, not computed. Revisit every six
// months.
const media = {
  'Patrick Cowley': figure('patrick-cowley-1982', 428, 537,
    'A black-and-white portrait of Patrick Cowley',
    'Patrick Cowley, pictured in The Voice, a San Francisco paper, in 1982, the year he died. Public domain.'),
  'You Make Me Feel': video('c3vtOEiO6TY', 'Disco', 'Sylvester', 'You Make Me Feel (Mighty Real)',
    'Sylvester’s 1978 single from Step II, with Patrick Cowley on synthesizer.'),
  'Menergy': video('bPny1esdZrk', 'Hi-NRG', 'Patrick Cowley', 'Menergy',
    'Patrick Cowley’s 1981 record, the one the EndUp named its Menergy parties after. Uploaded by Unidisc.'),
  'EndUp': figure('the-endup-sf', 1200, 900,
    'The white EndUp building with its vertical sign, on a SoMa street corner in daylight',
    'The EndUp at 401 6th Street, open since 1973. Photograph: Blackguard SF, CC BY-SA 4.0.'),
  'Do You Wanna Funk': video('PeYUTbU_iTw', 'Hi-NRG', 'Patrick Cowley', 'Do You Wanna Funk? (feat. Sylvester)',
    'Cowley and Sylvester together in 1982. Uploaded by Unidisc.'),
  'GAWP EndUp': video('4LjKuzWRTeY', 'House', 'GAWP', 'Live at the EndUp',
    'A set recorded at the EndUp for Soundproof TV.'),
  'Baker Beach': figure('baker-beach-golden-gate', 1200, 824,
    'The Golden Gate Bridge at twilight, seen from the sand at Baker Beach',
    'Baker Beach and the Golden Gate Bridge, where the Wicked crew threw their first Full Moon party. Photograph: Brocken Inaglory, CC BY-SA 3.0.'),
  'Wicked': video('M252Fz6t9zc', 'House', 'Wicked crew', 'Tribute, Lost Radio show special',
    'A five-hour radio tribute to the Wicked crew, uploaded by DJ Thomas White.'),
  '1015 Folsom': figure('ferry-corsten-1015-folsom-2003', 1200, 900,
    'Ferry Corsten in headphones at the turntables in the 1015 Folsom DJ booth',
    'Ferry Corsten playing 1015 Folsom in February 2003. Photograph: MinceyFresh, CC BY-SA 2.0.'),
  'Joeski Public Works': video('ROW9zOWCugg', 'House', 'Joeski', 'Live at Public Works, July 2025',
    'Joeski playing house at Public Works in the Mission.'),
  'Tensnake Halcyon': video('MHgL4HF3VpY', 'House', 'Tensnake', 'In the Booth at Halcyon SF',
    'Tensnake recorded in the booth at Halcyon, from the club’s own channel.'),
  'AC Slater Audio': video('xvvLW_mQtHg', 'House', 'AC Slater', 'Live at Audio SF, April 2026',
    'AC Slater recorded at Audio on 11th Street.'),
  'Mark Farina': figure('mark-farina-2015', 1200, 800,
    'Mark Farina at the decks in blue light, with hands raised in the crowd',
    'Mark Farina in 2015. He started Mushroom Jazz in San Francisco in 1992. Photograph: Nick Solari, CC BY-SA 2.0.'),
  'Mark Farina Defected': video('sWt0HPcJcGI', 'House', 'Mark Farina', 'Defected Broadcasting House, episode 8',
    'Mark Farina playing house for Defected.'),
  'DNA Lounge': figure('dna-lounge-2020', 1200, 609,
    'The grey DNA Lounge building on Eleventh Street, its DNA sign above the front',
    'DNA Lounge at 375 Eleventh Street in 2020. Photograph: HaeB, CC BY-SA 4.0.'),
  'Bootie': video('18l6bYyl6j0', 'Mashup', 'Bootie Mashup', 'Live from DNA Lounge, 14 November 2020',
    'Bootie, DNA Lounge’s Saturday mashup party, streamed from the club.'),
  'Oasis': figure('oasis-sf-2025', 1200, 901,
    'Oasis at night, a low building painted with a mural and lit blue, its name on the wall',
    'Oasis at 298 11th Street in November 2025. Photograph: Pi.1415926535, CC BY-SA 4.0.'),
  'Disco Heat': video('f8A91DMBfbA', 'Disco', 'Sylvester', 'Dance (Disco Heat)',
    'The second single from Sylvester’s Step II, 1978.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the end of a San Francisco night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Public Works', 'Mission', 'Funktion-One and sprung hardwood floors', 'House and techno'],
      ['Audio', 'SoMa', 'The first Funktion-One 3D surround system', 'Techno, house and EDM'],
      ['Monarch', 'SoMa', 'A basement club with a Void Acoustics system', 'Dancing close to the sound'],
      ['1015 Folsom', 'SoMa', 'Five rooms over three floors, about 1,500 people', 'Big nights since 1989'],
      ['The EndUp', 'SoMa', 'Open since 1973, with a patio', 'After hours and the Sunday tea dance'],
      ['Halcyon', 'SoMa', 'On 6AM’s list of North America’s best', 'House and techno'],
      ['The Great Northern', 'Mission', 'A “FutureDeco” room at 119 Utah Street', 'Mostly electronic music'],
      ['DNA Lounge', 'SoMa', 'Open since 1985, four dance floors', 'Mashup, goth and alternative nights'],
      ['Oasis', 'SoMa', 'A former bathhouse, 8,000 square feet', 'LGBTQ+ nights and drag']
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
  {id: 'trocadero', heading: 'Trocadero Transfer and hi-NRG'},
  {id: 'endup', heading: 'The EndUp'},
  {id: 'nineties', heading: '1990s house and the Wicked crew'},
  {id: 'best-clubs-now', heading: 'The best clubs in San Francisco now'},
  {id: 'techno-house', heading: 'San Francisco techno and house music clubs'},
  {id: 'dna-lounge', heading: 'DNA Lounge and alternative nights'},
  {id: 'lgbtq', heading: 'LGBTQ+ clubs in San Francisco'},
  {id: 'where-to-go', heading: 'Where to go out in San Francisco'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'San Francisco clubs',
    title: 'The best clubs in San Francisco, from the Trocadero to Public Works',
    deck: 'Hi-NRG was born on a SoMa dance floor and the EndUp has been open since 1973. The rooms that carry that on are a short walk apart.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in San Francisco', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around the sound.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'San Francisco clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.timeout.com/san-francisco/nightlife/best-nightclubs-in-san-francisco', 'Time Out: 16 best nightclubs in San Francisco (2024)')}
${sourceLink('https://6amgroup.com/best-house-techno-clubs-north-america', '6AM: 40 best house and techno clubs in North America')}
${sourceLink('https://en.wikipedia.org/wiki/The_EndUp', 'Wikipedia: The EndUp')}
${sourceLink('https://en.wikipedia.org/wiki/Trocadero_Transfer', 'Wikipedia: Trocadero Transfer')}
${sourceLink('https://en.wikipedia.org/wiki/1015_Folsom', 'Wikipedia: 1015 Folsom')}
${sourceLink('https://en.wikipedia.org/wiki/DNA_Lounge', 'Wikipedia: DNA Lounge')}
${sourceLink('https://en.wikipedia.org/wiki/Patrick_Cowley', 'Wikipedia: Patrick Cowley')}
${sourceLink('https://en.wikipedia.org/wiki/Sylvester_(singer)', 'Wikipedia: Sylvester')}
${sourceLink('https://en.wikipedia.org/wiki/Mark_Farina', 'Wikipedia: Mark Farina')}
${sourceLink('https://ra.co/news/37388', 'Resident Advisor: New club, Halcyon, opens in San Francisco (2016)')}
${sourceLink('https://sfstandard.com/2026/07/17/oasis-drag-cabaret-returns-sf/', 'SF Standard: Oasis drag cabaret returns (2026)')}
${sourceLink('https://sfbgarchive.48hills.org/sfbgarchive/2011/04/19/wicked-man/', 'SF Bay Guardian: \u201cWicked, man\u201d (2011)')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-san-francisco.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in San Francisco', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-san-francisco'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/sf-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page sf-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-san-francisco.html', html);
console.log('Built best-clubs-in-san-francisco.html');
