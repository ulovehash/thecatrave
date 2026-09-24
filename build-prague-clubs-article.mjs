// Build best-clubs-in-prague.html from prague-clubs-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go write these 3 articles next", items
// 4-6 of a ranked list of city club guides), alongside the Tokyo and Budapest
// guides. TAKEN-KEYWORDS.md lists 'best nightclubs in prague' against
// best-clubbing-cities-in-europe.html, which already covers Cross Club in one
// paragraph with its own photograph. Flagged as a cannibalisation risk before
// writing; the owner chose to write this page anyway and differentiate it
// clearly (more venues, more history, a different Cross Club photograph) rather
// than skip Prague or fold it into the hub. Research: Google Ads Keyword
// Planner and a live Google search (keywords/prague-clubs.json), per
// KEYWORD-METHOD.md's 2026-09-22 tool switch. An earlier pass researched this
// page through Ahrefs instead, against that documented default (defects.json,
// tokyo-budapest-prague-used-ahrefs-against-documented-default); the keyword
// map was redone on 2026-09-24 once the owner caught it. Stage 6 was not run
// as a separate pass, as for the Tokyo and Budapest guides: the owner asked
// for the three city guides straight after stages 1, 2 and 4.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('prague-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-prague';
const title = 'Best Clubs in Prague: Cross Club, Karlovy Lázně and Ankali';
const description = "Cross Club's salvaged machinery, Karlovy Lázně's five floors and Ankali's techno nights: the best clubs in Prague, mainstream and underground.";
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

// From Wikimedia Commons, downloaded to img/prague-clubs/ on 2026-09-24,
// licences checked on each file page, used by no other guide. The Cross Club
// photograph is deliberately not the one used on
// best-clubbing-cities-in-europe.html (see media/prague-clubs.json).
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/prague-clubs/${name}-${width}.webp`,
  srcset: `img/prague-clubs/${name}-320.webp 320w, img/prague-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Checked against Resident Advisor
// and Boiler Room's own listings on 2026-09-24, embedded by no other guide
// (media/prague-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Cross Club': figure('cross-club-interior', 844, 563,
    "The interior of Cross Club's basement bar in Prague, built from salvaged metal and machine parts",
    "Cross Club's basement bar, photographed in 2012. The club opened in 2002 and was built from scrapheap materials rather than a design brief. Photograph: -crosspraha-, CC BY-SA 4.0."),
  'Wenceslas Square': figure('wenceslas-square', 1200, 750,
    'The National Museum at the top of Wenceslas Square in Prague',
    "Wenceslas Square, near the National Museum. Duplex and several of Prague's tourist-facing clubs sit within a few minutes' walk of here. Photograph: Muselsom, CC BY-SA 4.0."),
  'Fatty M': video('WY_Th5nrI90', 'Electronic', 'Fatty M', 'Boiler Room Prague, 2018',
    "Fatty M playing Boiler Room's first Czech Republic broadcast in December 2018. From this site's catalogue of recorded DJ sets."),
  'Eva Porating': video('6od6a-eiLUs', 'Electronic', 'Eva Porating', 'Boiler Room Prague, 2018',
    "Eva Porating on the same December 2018 Boiler Room Prague broadcast as Fatty M. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Karlovy Lázně', 'Old Town, by Charles Bridge', 'Five floors, one genre each, in a former spa building open since 1999', 'A whole night out without leaving one building'],
      ['Duplex', 'Wenceslas Square', 'A glass rooftop club with two dance platforms and city views', 'International bookings and a DJ Mag Top 100 listing'],
      ['Cross Club', 'Holešovice', 'Three floors of salvaged industrial machinery, open since 2002', 'Drum and bass, techno and dub with a DIY history'],
      ['Ankali', 'outside the centre', 'A techno room built around a custom Funktion-One system, open since 2017', 'Deep house through hard techno on a serious sound system']
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
  {id: 'cross-club-depth', heading: 'Cross Club, in more depth'},
  {id: 'best-clubs-now', heading: 'The best clubs in Prague now'},
  {id: 'techno-clubs', heading: 'Best techno clubs in Prague'},
  {id: 'where-to-go', heading: 'Where to go out in Prague'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Prague clubs',
    title: 'The best clubs in Prague, from Cross Club to Karlovy Lázně',
    deck: 'Two nightlife scenes that barely overlap: five-floor tourist complexes near Charles Bridge, and a smaller run of rooms built from salvaged machinery and a custom sound system for house and techno.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Prague', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Two scenes, one city.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Prague clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Cross_Club', 'Wikipedia: Cross Club')}
${sourceLink('https://www.atlasobscura.com/places/cross-club', 'Atlas Obscura: Cross Club')}
${sourceLink('https://english.radio.cz/cross-club-independent-culture-centre-a-twist-8556609', 'Radio Prague International: Cross Club, an independent culture centre with a twist')}
${sourceLink('https://www.karlovylazne.cz/about', "Karlovy Lázně: about")}
${sourceLink('https://djmag.com/top100clubs/2022/62/DupleX', 'DJ Mag: Top 100 Clubs 2022, DupleX')}
${sourceLink('https://djmag.com/top100clubs/2025/41/duplex', 'DJ Mag: Top 100 Clubs 2025, DupleX')}
${sourceLink('https://mixmag.net/read/edge-closure-prague-club-ankali-urges-support-secure-future-news', "Mixmag: Prague club Ankali urges support to secure its future (2025)")}
${sourceLink('https://ra.co/news/82717', 'Resident Advisor: Prague club Ankali at risk of closure (2025)')}
${sourceLink('https://boilerroom.tv/session/boiler-room-prague/', 'Boiler Room: Boiler Room Prague (2018)')}
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
  readNext({items: relatedArticles('best-clubs-in-prague.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Prague', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-prague'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/prague-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page prague-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-prague.html', html);
console.log('Built best-clubs-in-prague.html');
