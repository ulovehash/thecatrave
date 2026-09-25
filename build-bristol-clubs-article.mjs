// Build best-clubs-in-bristol.html from bristol-clubs-draft.md.
//
// Next in the owner's priority list after the wave-3/Manchester/Awakenings
// batch (2026-09-25): a fresh SERP-priority pass over rows 9-12 of the wave-3
// summary table (TOPIC-DOSSIERS.md, "Ряды 9-12 сводной таблицы волны 3")
// ranked Bristol first of the five unresearched city-club candidates, on the
// strength of genuine editorial slots (CN Traveller, Skiddle, Visit Bristol,
// StagWeb) and being the one city where the club scene itself, not just the
// owner's own genre, is documented drum-and-bass/jungle territory. Research:
// Google Ads Keyword Planner volume reused from the 2026-09-24 pull
// (keywords/bristol-clubs.json), live Google search and Resident
// Advisor/Bristol24/7/press reading for facts (2026-09-25), per
// KEYWORD-METHOD.md's 2026-09-22 tool switch. Stage 6 was not run as a
// separate pass, consistent with every city-club guide on this site so far.
//
// Media sits in the draft as [Image: ...] and [Table: ...] placeholder
// lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build. No video: no Selector-catalogue set was
// found genuinely tied to a Bristol venue in this pass (media/bristol-clubs.json).
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('bristol-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-bristol';
const title = 'Best Clubs in Bristol: Motion, Lakota and Thekla';
const description = "Motion lost its lease in 2025 and moved, Lakota has run drum and bass since the 1990s, and a 1959 cargo ship still hosts club nights: the best clubs in Bristol.";
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

// From Wikimedia Commons, downloaded to img/bristol-clubs/ on 2026-09-25,
// licences checked on each file page via the Commons API, used by no other
// guide on this site.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/bristol-clubs/${name}-${width}.webp`,
  srcset: `img/bristol-clubs/${name}-320.webp 320w, img/bristol-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Confirmed as Bristol-specific
// Boiler Room broadcasts (not just Boiler Room generic) via each video's own
// YouTube oEmbed title and Apple Music's DJ-mix listing dates, 2026-09-25
// (media/bristol-clubs.json). Neither source ties either set to a named
// club, so the draft does not attach them to Lakota, Motion or any other
// single venue.
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Lakota': figure('lakota-exterior', 700, 946,
    "The exterior of Lakota nightclub on Upper York Street, Bristol",
    "Lakota's Upper York Street building, photographed in 2011. Resident Advisor's own listing calls it Bristol's “home of the underground.” Photograph: Neil Owen, CC BY-SA 2.0."),
  'Hodge': video('rGCDKpkPUqI', 'Bass', 'Hodge', 'Boiler Room Bristol, 2015',
    "Hodge's Boiler Room Bristol set, filmed 6 August 2015. From this site's catalogue of recorded DJ sets."),
  'Shanti Celeste': video('dgv4ktxwTHA', 'House', 'Shanti Celeste', 'Boiler Room Bristol, 2015',
    "Shanti Celeste's Boiler Room Bristol set, filmed 28 September 2015, not long after she signed to Julio Bashmore's Broadwalk label. From this site's catalogue of recorded DJ sets."),
  'Thekla': figure('thekla-boat', 1200, 675,
    "Thekla, a converted cargo ship moored in Bristol's Floating Harbour, seen from the waterside",
    "Thekla, photographed in 2023. Built in Germany in 1959, the ship arrived in Bristol in 1983 and opened as a venue the following year. Photograph: The wub, CC BY-SA 4.0."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Motion', 'Victoria Terrace, since 2025 (previously Avon Street, 2006-2025)', 'A five-room warehouse complex, DJ Mag-ranked among the world’s best large clubs at its original site', 'Big touring bookings and Bristol’s own drum and bass nights'],
      ['Lakota', 'Upper York Street', 'Four floors running drum and bass, jungle, hardcore, dubstep, psytrance and techno since the early 1990s', 'A genuine link to Bristol’s bass-music history, not a revival of it'],
      ['Thekla', 'Floating Harbour', 'A converted 1959 cargo ship, gigs first and club nights second, run by DHP Family since the venue opened in 1984', 'A night out built around a room nobody else has']
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
  {id: 'motion-depth', heading: 'Motion, in more depth'},
  {id: 'best-clubs-now', heading: 'The best clubs in Bristol now'},
  {id: 'lakota-bass-music', heading: "Lakota and Bristol's bass-music line"},
  {id: 'where-to-go', heading: 'Where to go out in Bristol'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Bristol clubs',
    title: 'The best clubs in Bristol, from Motion to Lakota',
    deck: 'A five-room warehouse club that lost its building in 2025 and moved rather than closed, a four-floor room on Upper York Street that never stopped booking drum and bass, and a 1959 cargo ship still running club nights from the same mooring.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Bristol', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A different kind of clubbing city.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Bristol clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://ra.co/clubs', 'Resident Advisor: Motion Bristol and Lakota, Bristol, venue pages')}
${sourceLink('https://mixmag.net', 'Mixmag: Motion Bristol to shut down in July, announces plans for a new home (2025)')}
${sourceLink('https://www.bristolworld.com/business/motion-bristol-to-sadly-close-down-after-20-years', 'BristolWorld: Motion Bristol to sadly close down after 20 years (2025)')}
${sourceLink('https://www.bristol247.com', 'Bristol24/7: coverage of Motion, Lakota and Thekla club nights')}
${sourceLink('https://www.express.co.uk', 'Daily Express: Huge UK music venue shutting doors in weeks (2025)')}
<li>Thekla's own history, and its 1 May 1984 opening date as The Old Profanity Showboat, per the venue's Instagram account and an AgilityPR/DHP Family press release.</li>
<li>Hodge and Shanti Celeste's 2015 Boiler Room Bristol sets: dated via Apple Music's DJ-mix listings, confirmed via each video's own YouTube oEmbed title.</li>
<li>Lakota's opening period is given as "the early 1990s" because two independent sources disagree on the exact year (one says 1990, another 1992); both are recorded in the editorial review's fact-check ledger rather than one being picked without a stronger source.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-bristol.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Bristol', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-bristol'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/bristol-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page bristol-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-bristol.html', html);
console.log('Built best-clubs-in-bristol.html');
