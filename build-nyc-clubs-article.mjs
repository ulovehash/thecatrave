// Build best-clubs-in-nyc.html from nyc-clubs-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go first 3"), with the house music
// and techno guides. Research: the "Пакет волны 3" entries in
// TOPIC-DOSSIERS.md. Volumes are Google Ads Keyword Planner ranges (All
// locations), recorded in keywords/nyc-clubs.json, except the NYC variants,
// which were measured for the United States only. "Clubs" is an ambiguous
// word in New York: Keyword Planner's ideas for "nyc clubs" are led by jazz
// clubs, comedy clubs, gay bars and private members' clubs, none of which this
// page covers. The page is about music-first dance clubs, as in the Paris,
// Barcelona and Amsterdam guides. Stage 6 was not run as a separate pass: the
// owner asked for the three articles straight after stages 1 to 5.
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

const draft = fs.readFileSync('nyc-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-nyc';
const title = 'Best Clubs in NYC: From the Paradise Garage to Nowadays';
const description = 'Nowadays, Basement, Public Records, Good Room and Elsewhere: the best clubs in NYC for house and techno now, and the history from the Loft to Output.';
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

// From Wikimedia Commons, downloaded to img/nyc-clubs/ on 2026-09-24,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nyc-clubs/${name}-${width}.webp`,
  srcset: `img/nyc-clubs/${name}-320.webp 320w, img/nyc-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-09-24 and embedded by no other guide (media/nyc-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out ("12 Best Clubs in NYC"), the clubs' own sites,
// Gothamist and DJ Mag, checked 2026-09-24. Typed, not computed. Revisit
// every six months.
const media = {
  'Studio 54': figure('studio-54-entrance', 800, 1203,
    'The marquee and doors of the Studio 54 theatre on West 54th Street at night',
    'The entrance to Studio 54 on West 54th Street, a Broadway theatre since 1998. The club ran here from 1977 to 1980. Photograph: David Goehring, CC BY 2.0.'),
  'Limelight': figure('limelight-church', 1200, 900,
    'The brownstone Gothic Revival church at Sixth Avenue and West 20th Street, seen from the street',
    'The former Church of the Holy Communion at Sixth Avenue and West 20th Street, which became the Limelight in November 1983. Photograph: Beyond My Ken, CC BY-SA 4.0.'),
  'Knockdown Center': figure('knockdown-center', 1080, 1080,
    'The brick factory buildings and tall chimney of the Knockdown Center in Maspeth under a grey sky',
    'The Knockdown Center in Maspeth, Queens, a former glass and door factory. Basement is in the tunnels underneath it. Photograph: Kazuhisa Otsubo, CC BY 2.0.'),
  'Louie Vega Output': video('ss0aadTtAhQ', 'House', 'Louie Vega', 'Mixmag Live at Output, 2016',
    "Louie Vega playing Output in Williamsburg for Mixmag in 2016, three years before the club closed."),
  'Mister Saturday Night Boiler Room': video('mG3kGYFyw-Q', 'House', 'Mister Saturday Night', 'Boiler Room, episode 002, 2015',
    "Eamon Harkin and Justin Carter's party with Boiler Room in 2015, the year Nowadays opened. From this site's catalogue of recorded DJ sets."),
  'Louie Vega Lot Radio': video('5EC4BynJ1MA', 'House', 'Louie Vega', 'The Lot Radio, 2018',
    "Louie Vega on The Lot Radio in December 2018. From this site's catalogue of recorded DJ sets."),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the long end of a New York night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Nowadays', 'Ridgewood, Queens', 'House and techno on an SBS Slammer system, no phones on the floor, an outdoor space', 'Mister Sunday and the Nonstop weekends'],
      ['Basement', 'Maspeth, Queens', 'Techno in brick tunnels under the Knockdown Center, open since 2019', 'Hard techno and a strict door'],
      ['Public Records', 'Gowanus, Brooklyn', 'A hi-fi club room in the former ASPCA headquarters, with a restaurant and bar', 'A dinner and a dancefloor in one building'],
      ['Good Room', 'Greenpoint, Brooklyn', 'A DJ-led main room and the smaller Bad Room', 'House and disco parties'],
      ['Elsewhere', 'East Williamsburg, Brooklyn', 'A 700-capacity hall, a smaller room and a rooftop, open since 2017', 'Bigger bookings and all-night parties'],
      ['Paragon', 'Bed-Stuy, Brooklyn', 'Techno modelled on early American techno, reopened in 2025 with Kevin Saunderson', 'Detroit and New York techno'],
      ['Signal', 'Williamsburg, Brooklyn', 'A 210-capacity warehouse room with a d&b Audiotechnik system, open since 2025', 'A small room with serious sound'],
      ['House of Yes', 'Bushwick, Brooklyn', 'A performance-led club, open since 2015', 'Costume and theatre nights']
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
  {id: 'loft-and-garage', heading: 'The Loft, the Paradise Garage and Studio 54'},
  {id: 'eighties-nineties', heading: 'Danceteria to Twilo: the 1980s and 1990s'},
  {id: 'brooklyn', heading: 'Brooklyn takes over'},
  {id: 'best-clubs-now', heading: 'The best clubs in NYC now'},
  {id: 'techno-clubs', heading: 'Best techno clubs in NYC'},
  {id: 'house-clubs', heading: 'House music clubs in NYC'},
  {id: 'where-to-go', heading: 'Where to go out in NYC'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'NYC clubs',
    title: 'The best clubs in NYC, from the Paradise Garage to Nowadays',
    deck: 'The city that invented the modern club, spent ninety years licensing dancing, and moved its best rooms to Brooklyn and Queens.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in NYC', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around the sound.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'NYC clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/The_Loft_(New_York_City)', 'Wikipedia: The Loft (New York City)')}
${sourceLink('https://en.wikipedia.org/wiki/Paradise_Garage', 'Wikipedia: Paradise Garage')}
${sourceLink('https://en.wikipedia.org/wiki/Studio_54', 'Wikipedia: Studio 54')}
${sourceLink('https://en.wikipedia.org/wiki/Limelight_(nightclub)', 'Wikipedia: The Limelight')}
${sourceLink('https://en.wikipedia.org/wiki/New_York_City_Cabaret_Law', 'Wikipedia: New York City Cabaret Law')}
${sourceLink('https://pitchfork.com/news/brooklyn-dance-club-output-closing/', 'Pitchfork: Brooklyn dance club Output closing')}
${sourceLink('https://djmag.com/features/mister-saturday-night-15-years-new-york-party-nowadays-eamon-harkin-justin-carter', 'DJ Mag: Mister Saturday Night, 15 years of a New York party')}
${sourceLink('https://gothamist.com/arts-entertainment/nycs-best-techno-club-vibe-checks-you-at-the-door-so-i-tried-to-get-in', "Gothamist: NYC's best techno club vibe checks you at the door (2023)")}
${sourceLink('https://www.timeout.com/newyork/nightlife/best-clubs-in-nyc', 'Time Out: 12 best clubs in NYC for techno, house and more')}
${sourceLink('https://nowadays.nyc/about', 'Nowadays: hours and location')}
${sourceLink('https://www.elsewhere.club/about', 'Elsewhere: about')}
${sourceLink('https://publicrecords.nyc', 'Public Records')}
${sourceLink('https://djmag.com/news/new-york-club-paragon-reopen-thanks-generous-lifeline-kevin-saunderson', 'DJ Mag: New York club Paragon to reopen thanks to a lifeline from Kevin Saunderson (2025)')}
${sourceLink('https://djmag.com/new-brooklyn-club-signal-opens', 'DJ Mag: New Brooklyn club Signal opens (2025)')}
${sourceLink('https://www.fortgreenepark.org/all-programs/soul-summit', 'Fort Greene Park Conservancy: Soul Summit')}
${sourceLink('https://dannykrivit.net/718-sessions', 'Danny Krivit: 718 Sessions')}
<li>Set counts are measured from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-nyc.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in NYC', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-nyc'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/nyc-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page nyc-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-nyc.html', html);
console.log('Built best-clubs-in-nyc.html');
