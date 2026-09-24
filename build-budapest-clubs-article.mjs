// Build best-clubs-in-budapest.html from budapest-clubs-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go write these 3 articles next", items
// 4-6 of a ranked list of city club guides), alongside the Tokyo and Prague
// guides. Research: Google Ads Keyword Planner and a live Google search
// (keywords/budapest-clubs.json), per KEYWORD-METHOD.md's 2026-09-22 tool
// switch. An earlier pass researched this page through Ahrefs instead, against
// that documented default (defects.json,
// tokyo-budapest-prague-used-ahrefs-against-documented-default); the keyword
// map was redone on 2026-09-24 once the owner caught it, and reached the same
// conclusion a second way: "ruin bars budapest" and "budapest ruin bars" sit at
// 100K-1M, two full brackets above "budapest clubs" (10K-100K) -- most demand
// is for the bar-hopping ruin-bar circuit, a different intent from this page's,
// which covers where the dancing happens. Several of those clubs (Instant-
// Fogas) grew directly out of the ruin-bar scene, so it is named as context
// rather than avoided. Stage 6 was not run as a separate pass, as for the
// Tokyo and wave 3 guides: the owner asked for the three city guides straight
// after stages 1, 2 and 4.
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

const draft = fs.readFileSync('budapest-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-budapest';
const title = 'Best Clubs in Budapest: A38, Instant-Fogas and Turbina';
const description = "A38's converted cargo ship, the seven rooms of Instant-Fogas and Turbina's techno nights: the best clubs in Budapest now, and the ruin bars several grew out of.";
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

// From Wikimedia Commons, downloaded to img/budapest-clubs/ on 2026-09-24,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/budapest-clubs/${name}-${width}.webp`,
  srcset: `img/budapest-clubs/${name}-320.webp 320w, img/budapest-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Checked against Resident Advisor,
// Boiler Room and turbinabudapest.hu on 2026-09-24, embedded by no other guide
// (media/budapest-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Szimpla Kert': figure('szimpla-kert', 1200, 800,
    "The eclectic courtyard interior of Szimpla Kert, Budapest's original ruin bar",
    "Szimpla Kert on Kazinczy Street, photographed in 2017. It opened in 2002 and moved here in 2004, setting the template for District VII's ruin bars. Photograph: Fred Romero, CC BY 2.0."),
  'Fogas': figure('fogas-akacfa', 1200, 797,
    'The street-level building of Fogasház on Akácfa utca, Budapest',
    "Fogasház on Akácfa utca, photographed in 2017, the year it merged with the neighbouring Instant to form the Instant-Fogas complex. Photograph: Christo, CC BY-SA 4.0."),
  'A38 ship': figure('a38-ship', 1200, 900,
    'The A38 ship moored on the Danube in Budapest, a converted 1968 cargo vessel',
    'A38, moored by Petőfi Bridge, photographed in 2015. It opened as a club and concert hall in 2003, rebuilt from a 1968 Ukrainian cargo ship. Photograph: Rakás, CC BY-SA 4.0.'),
  'Route 8': video('dAB4K204nL0', 'Techno', 'Route 8', 'Boiler Room Budapest, at Turbina, 2021',
    "Route 8 playing Boiler Room's third Budapest broadcast, at Turbina in December 2021. From this site's catalogue of recorded DJ sets."),
  'Imre Kiss': video('Xnp6hnEs4Ns', 'House', 'Imre Kiss', 'Boiler Room Budapest x Lobster Theremin, 2017',
    "Imre Kiss playing Boiler Room's first Budapest broadcast, at Akvárium Klub in January 2017, alongside the UK label Lobster Theremin. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['A38', 'Danube, by Petőfi Bridge', 'A converted 1968 cargo ship, open since 2003', 'Live music and club nights in one hull'],
      ['Instant-Fogas Complex', 'Akácfa utca, District VII', 'Seven rooms and eighteen bars formed from two merged ruin bars in 2017', 'A whole night without changing address'],
      ['Turbina', 'District VIII', "Budapest's main touring room for techno and house", "Boiler Room's third Budapest broadcast, 2021"],
      ['Toldi Klub', 'Bajcsy-Zsilinszky út', 'The lobby of an 80-year-old cinema, electronic and live music after the last screening', 'A club with no dress code and a cinema by day']
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
  {id: 'ruin-bars-to-clubs', heading: 'From ruin bars to clubs'},
  {id: 'best-clubs-now', heading: 'The best clubs in Budapest now'},
  {id: 'techno-clubs', heading: 'Best techno clubs in Budapest'},
  {id: 'where-to-go', heading: 'Where to go out in Budapest'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Budapest clubs',
    title: 'The best clubs in Budapest, from A38 to Instant-Fogas',
    deck: "A city better known for ruin bars than clubs, and the smaller list of rooms, a converted cargo ship among them, built for dancing rather than drinking in a courtyard.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Budapest', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs beside the ruin bars.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Budapest clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/A38_(venue)', 'Wikipedia: A38 (venue)')}
${sourceLink('https://en.wikipedia.org/wiki/Szimpla_Kert', 'Wikipedia: Szimpla Kert')}
${sourceLink('https://www.a38.hu/en/history', 'A38: History')}
${sourceLink('https://welovebudapest.com/en/article/2024/04/01/nightlife-instant-fogas-party-complex-party-district-budapest/', 'We Love Budapest: Instant-Fogas, the party complex expanding to eight days a week (2024)')}
${sourceLink('https://welovebudapest.com/en/article/2018/07/17/authorities-close-budapest-s-corvin-club-and-aurora/', "We Love Budapest: Authorities close Budapest's Corvin Club and Auróra (2018)")}
${sourceLink('https://primate.hu/2025/01/17/kiderult-mi-fog-nyilni-a-corvinteto-helyen/', "Primate.hu: What will open where Corvintető was (2025)")}
${sourceLink('https://www.electronicbeats.net/larm-monologue', 'Electronic Beats: How Lärm became the underground techno club Budapest needed')}
${sourceLink('https://welovebudapest.com/cikk/2021/11/19/ejszakai-elet-forrosodik-a-budapesti-buliszcena-a-turbinaba-erkezik-a-boiler-room', 'We Love Budapest: Boiler Room arrives at Turbina (2021)')}
${sourceLink('https://ra.co/events/915127', 'Resident Advisor: Boiler Room Budapest x Lobster Theremin at Akvárium Klub (2017)')}
${sourceLink('https://boilerroom.tv/session/br-budapest-x-lobster-theremin/', 'Boiler Room: BR Budapest x Lobster Theremin (2017)')}
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
  readNext({items: relatedArticles('best-clubs-in-budapest.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Budapest', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-budapest'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/budapest-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page budapest-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-budapest.html', html);
console.log('Built best-clubs-in-budapest.html');
