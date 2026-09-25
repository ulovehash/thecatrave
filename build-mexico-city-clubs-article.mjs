// Build best-clubs-in-mexico-city.html from mexico-city-clubs-draft.md.
//
// Third guide in the owner's priority list after the wave-3/city-club batch
// (2026-09-25): rows 9-12 of the wave-3 summary table (TOPIC-DOSSIERS.md,
// "Ряды 9-12 сводной таблицы волны 3") ranked Mexico City joint-strongest of
// the five unresearched city-club candidates alongside Lisbon, on 5+ genuine
// editorial slots including a Resident Advisor city guide and a Google Local
// Pack of real venues. Research: Google Ads Keyword Planner volume reused
// from the 2026-09-24/25 pull (keywords/mexico-city-clubs.json), a fresh
// live Google SERP plus full reads of RA's own Mexico City guide and DJ
// Mag's 2024 feature on the city's underground for facts (2026-09-25), per
// KEYWORD-METHOD.md's 2026-09-22 tool switch. Stage 6 was not run as a
// separate pass, consistent with every city-club guide on this site so far.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with
// no placeholder, fails the build. Two Boiler Room embeds: Turbo Sonidero's
// 2025 SYSTEM sonidero set (Mexico City's own sound-system tradition) and
// Nic Fanciulli's 2018 set (media/mexico-city-clubs.json).
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('mexico-city-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-mexico-city';
const title = 'Best Clubs in Mexico City: Patrick Miller, M.N.Roy and Fünk';
const description = "Patrick Miller has run every Friday since 1983, M.N.Roy occupies a former Communist Party mansion, and Fünk opened in 2019: the best clubs in Mexico City now.";
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

// From Wikimedia Commons, downloaded to img/mexico-city-clubs/ on 2026-09-25,
// licences checked on each file page via the Commons API, used by no other
// guide on this site. None of the three images shows a venue itself (no
// licensed photograph of Patrick Miller, M.N.Roy or Fünk was found); each
// caption is explicit that it shows the neighbourhood, not the club.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/mexico-city-clubs/${name}-${width}.webp`,
  srcset: `img/mexico-city-clubs/${name}-320.webp 320w, img/mexico-city-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Confirmed as Mexico City-specific
// Boiler Room broadcasts via each video's own YouTube oEmbed title, 2026-09-25
// (media/mexico-city-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Zocalo': figure('zocalo-nightfall', 1200, 456,
    "The Zócalo, Mexico City's main square, seen from above at nightfall",
    "The Zócalo at nightfall. Patrick Miller began downtown, near here, before moving to its current Roma Norte home. Photograph: Uwebart, CC BY-SA 3.0."),
  'Roma Norte': figure('roma-norte-street', 1200, 533,
    "A street corner in the Roma Norte neighbourhood of Mexico City",
    "A Roma Norte street corner, photographed in 2014. Both Patrick Miller and M.N.Roy sit a few streets apart in this neighbourhood. Photograph: Carl Campbell, CC BY-SA 2.0."),
  'Condesa': figure('condesa-jacaranda', 1200, 900,
    "A jacaranda-lined street in the Condesa neighbourhood of Mexico City",
    "A flowering jacaranda on a Condesa street. Fünk Club sits on the border of Condesa and Hipódromo. Photograph: Lazjak, CC BY-SA 4.0."),
  'Turbo Sonidero': video('it0w2zniMOI', 'Cumbia', 'Turbo Sonidero', 'Boiler Room SYSTEM CDMX: Sonidero Special, 2025',
    "Turbo Sonidero's 2025 set for Boiler Room's SYSTEM series, a showcase for Mexico City's own sonidero sound-system tradition. From this site's catalogue of recorded DJ sets."),
  'Nic Fanciulli': video('j5hdgys4a-M', 'House', 'Nic Fanciulli', 'Boiler Room Mexico City, 2018',
    "Nic Fanciulli's 2018 Boiler Room Mexico City set, still one of the platform's most watched broadcasts from the city. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Patrick Miller', 'Roma Norte, since 1983, Fridays only', "Retro pop and disco around an open dance-off circle, run on the same format for decades", "The clearest link to the city's pre-internet club history"],
      ['M.N.Roy', 'Roma Norte, since the early 2010s', 'House, minimal and techno in a former Communist Party mansion redesigned by Chic by Accident', 'A private club built as much around its architecture as its bookings'],
      ['Fünk Club', 'Condesa/Hipódromo border, since 2019', 'International headliners and local crew residencies on a Funktion One sound system', "A basement room that helped establish the city's underground scene internationally"],
      ['Yu Yu Cine Club', 'Juárez, since 2017', 'A small, intimate basement room with Drama Bar downstairs, built for collaboration with other crews', 'An intimate, community-first night out']
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
  {id: 'patrick-miller-depth', heading: 'Patrick Miller, in more depth'},
  {id: 'best-clubs-now', heading: 'The best clubs in Mexico City now'},
  {id: 'mnroy-funk-current-scene', heading: 'M.N.Roy, Fünk and the current scene'},
  {id: 'where-to-go', heading: 'Where to go out in Mexico City'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Mexico City clubs',
    title: 'The best clubs in Mexico City, from Patrick Miller to M.N.Roy',
    deck: "A Roma Norte dance hall that has run every Friday since 1983, a former Communist Party mansion turned private club, and the basement rooms that have pulled international bookers to the city since 2017: the best clubs in Mexico City now.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Mexico City', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Four decades in a few square kilometres.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Mexico City clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://ra.co/guide/mx/mexicocity', 'Resident Advisor: RA Guide to Mexico City')}
${sourceLink('https://djmag.com/features/inside-mexico-citys-vibrant-electronic-underground', "DJ Mag: Inside Mexico City's vibrant electronic underground (2024)")}
${sourceLink('https://www.timeout.com/mexico-city/bars', 'Time Out Mexico City: Bars and Nightclubs')}
<li>Patrick Miller's 1983 founding, Journalists Club origin and current Mérida 17 address, per Mexico City's own tourism authority (mexicocity.cdmx.gob.mx) and Time Out.</li>
<li>M.N.Roy's Mérida 186 address, former Communist Party headquarters history and Chic by Accident interior design, per The Spaces, "Cult clubs: 12 legendary venues across the world."</li>
<li>Perreo Millennial's closure, announced 30 July 2026 with a final event on 13 August 2026, per Resident Advisor's own news feed.</li>
<li>M.N.Roy's exact opening date is given only as "the early 2010s"; no primary source confirming a precise month was found this session.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-mexico-city.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Mexico City', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-mexico-city'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/mexico-city-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page mexico-city-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-mexico-city.html', html);
console.log('Built best-clubs-in-mexico-city.html');
