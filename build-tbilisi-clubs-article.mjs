// Build best-clubs-in-tbilisi.html from tbilisi-clubs-draft.md.
//
// Researched 2026-10-05 per ARTICLE-PRODUCTION-WORKFLOW.md: Keyword Planner
// ranges (keywords/tbilisi-clubs.json), a live Google read of "tbilisi
// nightlife" and "tbilisi clubs", and venue facts checked against the venues'
// own sites and named outlets (media/tbilisi-clubs.json). Contested figures
// (2018 arrest numbers, Cafe Gallery's opening year, prices) are left out
// rather than guessed. Media sits in the draft as [Image: ...], [Embed: ...]
// and [Table: ...] placeholder lines; a placeholder with no matching asset, or
// an asset with no placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('tbilisi-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-tbilisi';
const title = 'Tbilisi Clubs: Bassiani, Khidi and Mtkvarze Guide';
const description = 'Tbilisi clubs and nightlife: Bassiani, KHIDI, Mtkvarze and Left Bank, how the 2018 raid and the 2024 strike shaped the scene, and the sets to hear.';
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

// From Wikimedia Commons, downloaded to img/tbilisi-clubs/ on 2026-10-05,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/tbilisi-clubs/${name}-${width}.webp`,
  srcset: `img/tbilisi-clubs/${name}-320.webp 320w, img/tbilisi-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue, filmed in Tbilisi by Boiler Room,
// and embedded by no other guide (media/tbilisi-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Dinamo Arena': figure('dinamo-arena', 1200, 900,
    'The Boris Paichadze Dinamo Arena in Tbilisi during a football match, with fans in the foreground',
    'The Boris Paichadze Dinamo Arena, photographed during a match in 2013. Bassiani sits beneath the stadium. Photograph: DJMX, CC BY-SA 3.0.'),
  'Khidi bridge': figure('vakhushti-bagrationi-bridge', 1200, 800,
    'The underside of Vakhushti Bagrationi Bridge in Tbilisi',
    "Vakhushti Bagrationi Bridge, photographed in 2019. KHIDI, whose name is the Georgian word for bridge, is built beneath it. Photograph: Wagon, CC BY-SA 4.0."),
  'Raid protest': figure('raid-protest-2018', 1200, 803,
    "Protesters in Tbilisi against the government's drug policy and the police raid on nightclubs",
    "People in Tbilisi protesting the government's drug policy and the police raid on nightclubs, photographed on 14 May 2018. Photograph: Gvantsa Popkhadze, CC BY 2.0."),
  'Zurkin': video('BqtBMIReS68', 'Electronic', 'Zurkin', 'Boiler Room Tbilisi: We Dance Together, We Fight Together, 2018',
    "Zurkin playing Boiler Room's night at Bassiani on 27 May 2018, held in the week the club reopened. From this site's catalogue of recorded DJ sets."),
  'Shlomo': video('qB-FFednKkY', 'Techno', 'Shlømo', 'Boiler Room Tbilisi: KHIDI, 2019',
    "Shlømo playing Boiler Room's first Tbilisi night at KHIDI in March 2019. From this site's catalogue of recorded DJ sets."),
  'Nkisi': video('eTTdNlDyTNI', 'Hardcore', 'Nkisi', 'Boiler Room Tbilisi: KHIDI, 2022',
    "Nkisi playing Boiler Room's KHIDI night in July 2022. From this site's catalogue of recorded DJ sets."),
  'Vulkanski': video('ajap3GRYpSA', 'Techno', 'Vulkanski', 'Boiler Room Tbilisi: KHIDI, 2022',
    "Vulkanski playing Boiler Room's KHIDI night in July 2022. From this site's catalogue of recorded DJ sets."),
  'Pablo Bozzi': video('pKl7GVk60Ow', 'Electro', 'Pablo Bozzi', 'Boiler Room Tbilisi: KHIDI, 2022',
    "Pablo Bozzi playing Boiler Room's KHIDI night in July 2022. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Where', 'Character', 'When'],
    rows: [
      ['Bassiani', 'Akaki Tsereteli Avenue, beneath Dinamo Arena', 'Opened 2014, main room in a former Olympic swimming pool, no photography', 'Event nights, check the listing'],
      ['KHIDI', 'Beneath Vakhushti Bagrationi Bridge', 'Opened 2016, two stages: KHIDI and G2', 'Fridays and Saturdays'],
      ['Mtkvarze', 'Baratashvili Street', 'A former Soviet-era fish restaurant, opened before Bassiani', 'Fridays and Saturdays'],
      ['Left Bank', 'Dodo Abashidze Street 10', 'Live music and clubnights in the same venue', 'Live on Thursday and Sunday, clubnights Friday and Saturday'],
      ['Café Gallery', 'Off Rustaveli Avenue', 'A cafe by day and a late-night club, one of the longest-running in the city', 'Late, at weekends; check before going']
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
  {id: 'club-scene', heading: 'How Tbilisi built a club scene'},
  {id: 'raid-and-strike', heading: 'The 2018 raid and the club strike'},
  {id: 'best-clubs-now', heading: 'The best clubs in Tbilisi now'},
  {id: 'techno', heading: 'Tbilisi techno: what to listen to'},
  {id: 'getting-in', heading: 'Getting in and what to expect'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Tbilisi clubs',
    title: 'The best clubs in Tbilisi, from Bassiani to Mtkvarze',
    deck: "A swimming pool under a football stadium, a former fish restaurant and a club under a bridge: the rooms behind Tbilisi's techno reputation, and what two crises did to them.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Tbilisi', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Tbilisi clubs in short.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Tbilisi clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://georgia.travel/khidi-club', 'Georgia Travel: KHIDI')}
${sourceLink('https://leftbank.club/about', 'Left Bank: About')}
${sourceLink('https://www.huckmag.com/article/tbilisi-nightclubs-reopen-bassiani-left-bank-khidi-new-year-protests', 'Huck: As Tbilisi\'s famed nightclubs reawaken, a murky future awaits (2025)')}
${sourceLink('https://oc-media.org/interior-minister-apologises-over-tbilisi-nightclub-raids-as-far-right-groups-plan-daily-protests/', 'OC Media: Interior minister apologises over Tbilisi nightclub raids (2018)')}
${sourceLink('https://mixmag.net/read/tblisi-club-bassiani-has-re-opened-after-forced-closure-news', 'Mixmag: Tbilisi club Bassiani has re-opened after forced closure (2018)')}
${sourceLink('https://www.dazeddigital.com/music/article/41340/1/inside-bassiani-tbilisi-georgia-techno-protests', 'Dazed: How techno became the sound of protest in Georgia')}
${sourceLink('https://crackmagazine.net/article/long-reads/sites-of-resistance-nightlife-culture-in-2018/', 'Crack Magazine: Sites of Resistance, nightlife culture in 2018')}
${sourceLink('https://emerging-europe.com/dance-together-fight-together-trouble-tbilisi-clubland/', 'Emerging Europe: We Dance Together, We Fight Together (2018)')}
${sourceLink('https://boilerroom.tv/session/boiler-room-georgia-bassiani/', 'Boiler Room: Tbilisi, We Dance Together, We Fight Together (2018)')}
${sourceLink('https://ra.co/news/82847', 'Resident Advisor: Tbilisi venues march on Independence Day (2025)')}
${sourceLink('https://ra.co/news/76508', 'Resident Advisor: KHIDI raided (2021)')}
${sourceLink('https://ra.co/news/84386', 'Resident Advisor: TES closes (2026)')}
${sourceLink('https://ra.co/news/85297', 'Resident Advisor: Mtkvarze launches The Saturnalia (2026)')}
<li>Set counts and catalogue details are measured from this site's own catalogue of recorded DJ sets, as of October 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'One of my own tracks. Buying it supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-tbilisi.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Tbilisi', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-tbilisi'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/tbilisi-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page tbilisi-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-tbilisi.html', html);
console.log('Built best-clubs-in-tbilisi.html');
