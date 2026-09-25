// Build best-clubs-in-lisbon.html from lisbon-clubs-draft.md.
//
// Second guide in the owner's priority list after the wave-3/city-club batch
// (2026-09-25): rows 9-12 of the wave-3 summary table (TOPIC-DOSSIERS.md,
// "Ряды 9-12 сводной таблицы волны 3") ranked Lisbon joint-strongest of the
// five unresearched city-club candidates alongside Mexico City, on five
// genuine editorial slots including a Resident Advisor city guide. Research:
// Google Ads Keyword Planner volume reused from the 2026-09-24/25 pull
// (keywords/lisbon-clubs.json), a fresh live Google SERP plus full reads of
// RA's own Lisbon guide, Lisbon Lux's dedicated local guide and DJ Mag's
// 2026 "Underground Resilience" feature for facts (2026-09-25), per
// KEYWORD-METHOD.md's 2026-09-22 tool switch. Stage 6 was not run as a
// separate pass, consistent with every city-club guide on this site so far.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with
// no placeholder, fails the build. Two Boiler Room embeds: Buraka Som
// Sistema's 2013 RBMA takeover set (Lisbon's own kuduro export) and Parris's
// 2019 Village Underground Lisboa set (media/lisbon-clubs.json).
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('lisbon-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-lisbon';
const title = 'Best Clubs in Lisbon: Lux Frágil, Ministerium and Kremlin';
const description = "Lux Frágil has anchored Lisbon since 1998, Ministerium runs Afro-house from a former ministry, and Musicbox closed in 2025: the best clubs in Lisbon now.";
const datePublished = '2026-09-25';
const dateModified = '2026-09-25';
const dateLabel = '25 September 2026';

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

// From Wikimedia Commons, downloaded to img/lisbon-clubs/ on 2026-09-25,
// licences checked on each file page via the Commons API, used by no other
// guide on this site.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/lisbon-clubs/${name}-${width}.webp`,
  srcset: `img/lisbon-clubs/${name}-320.webp 320w, img/lisbon-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Confirmed as Lisbon-specific
// Boiler Room broadcasts via each video's own YouTube oEmbed title, 2026-09-25
// (media/lisbon-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Lux Fragil': figure('lux-fragil', 552, 400,
    "The Lux Frágil building on Cais da Pedra, Lisbon",
    "Lux Frágil's Cais da Pedra building, a converted 1910 stevedoring warehouse. Photograph: Fssmgn, CC BY 3.0."),
  'Buraka Som Sistema': video('4_Jk34-b_Jw', 'Kuduro', 'Buraka Som Sistema', 'Boiler Room Lisboa x RBMA Takeover, 2013',
    "Buraka Som Sistema's 2013 Boiler Room Lisboa set, part of a Red Bull Music Academy takeover and still one of the most-watched Boiler Room broadcasts filmed in the city. From this site's catalogue of recorded DJ sets."),
  'Praça do Comércio': figure('praca-comercio', 1200, 824,
    "Praça do Comércio, Lisbon's riverside square, seen from ground level",
    "Praça do Comércio, photographed in 2018. Ministerium Club occupies a wing of this square, in rooms that once belonged to the Portuguese Ministry of Finance. Photograph: Berthold Werner, CC BY-SA 4.0."),
  'Pink Street': figure('pink-street-aerial', 1200, 900,
    "An aerial view of Rua Nova do Carvalho, Lisbon's pink-painted 'Pink Street'",
    "Rua Nova do Carvalho, known as Pink Street, seen from above. Musicbox ran under its arches for almost nineteen years before closing in September 2025. Photograph: FuriousYogi, CC BY-SA 4.0."),
  'Village Underground bus': figure('village-underground-bus', 1200, 799,
    "The double-decker bus at Village Underground Lisboa, part of the venue's creative campus",
    "Village Underground Lisboa's landmark double-decker bus, photographed in 2019. The Alcântara venue, built from stacked shipping containers and a converted warehouse, has run as a club and event space since 2017. Photograph: Keith Dixon, CC BY 2.0."),
  'Parris': video('MKuFgNjWLx8', 'UK bass', 'Parris', 'Boiler Room Lisbon: Village Underground, 2019',
    "Parris's 2019 Boiler Room set at Village Underground Lisboa. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Lux Frágil', 'Cais da Pedra, since 1998', 'House and techno in a converted dockside warehouse, hosted Dixon, Ben Klock and Freddy K among many others', "Lisbon's essential stop and its sunrise river terrace"],
      ['Ministerium Club', 'Praça do Comércio, since 2012', "House and techno in a former Ministry of Finance wing, plus Konda Records' Afro-house nights", 'Afro-house rarely served elsewhere in the city'],
      ['Kremlin', 'Santos, since 1988 (closed 2011, reopened 2016)', "A former convent's stone arches, one of the few 1990s Lisbon clubs to survive a closure and come back", "A genuine link to Lisbon's 1990s club history, not a revival of it"],
      ['Village Underground Lisboa', 'Alcântara, since 2017', 'A warehouse-scale creative campus in stacked shipping containers, running club and gig nights alongside its coworking space', 'The newer, warehouse end of the scene']
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
  {id: 'lux-fragil-depth', heading: 'Lux Frágil, in more depth'},
  {id: 'best-clubs-now', heading: 'The best clubs in Lisbon now'},
  {id: 'ministerium-kremlin', heading: 'Ministerium, Kremlin and the rest of the current scene'},
  {id: 'cais-do-sodre-lost', heading: 'Cais do Sodré and the venues Lisbon lost'},
  {id: 'where-to-go', heading: 'Where to go out in Lisbon'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Lisbon clubs',
    title: 'The best clubs in Lisbon, from Lux Frágil to Ministerium',
    deck: 'A converted dockside warehouse that has anchored the city since 1998, a former Ministry of Finance wing now known for Afro-house, and the club the neighbourhood lost in 2025: the best clubs in Lisbon now.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Lisbon', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A club scene that runs on the river.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Lisbon clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://ra.co/guide/pt/lisbon', "Resident Advisor: RA Guide to Lisbon")}
${sourceLink('https://www.timeout.com/lisbon/nightlife/the-best-lisbon-clubs', 'Time Out Lisbon: The 21 best clubs in Lisbon (2024)')}
${sourceLink('https://www.lisbonlux.com/lisbon-clubs/', 'Lisbon Lux: Lisbon Clubs, 2026 Guide')}
${sourceLink('https://djmag.com/features/underground-resilience-lisbons-diy-club-scene-refuses-give-dancefloor', "DJ Mag: Underground Resilience: Lisbon's DIY club scene refuses to give up on the dancefloor (2026)")}
<li>Lux Frágil's opening date, Cais da Pedra address and Frágil-era history, per Portuguese Wikipedia's well-cited "Lux Frágil" article.</li>
<li>Manuel Reis's death, 25 March 2018, per Expresso, Observador and Jornal Económico.</li>
<li>Musicbox's 2006 opening and September 2025 closure, per Liveurope, ICNS.lx and a Rock Bar Legends article dated 5 September 2026.</li>
<li>The Guardian's 2014 "25 best nightclubs in Europe" ranking of Lux Frágil could not be opened directly this session; it is reported here via two independent secondary citations (Time Out, Lisbon Serviced Apartments) rather than the original article, and is recorded as medium confidence in the editorial review's fact-check ledger.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-lisbon.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Lisbon', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-lisbon'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/lisbon-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page lisbon-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-lisbon.html', html);
console.log('Built best-clubs-in-lisbon.html');
