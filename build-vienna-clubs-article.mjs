// Build best-clubs-in-vienna.html from vienna-clubs-draft.md.
//
// Written 2026-10-05 after the owner approved the outline in vienna-research-package.md.
// Facts were read live on 2026-10-05 (see Sources and vienna-clubs-editorial-review.md).
// Left out because unresolved: capacities (Flex, Grelle Forelle, SASS), a single founding
// year for Das Werk, Pratersauna's status after September 2026. Keywords:
// keywords/vienna-clubs.json. Media record: media/vienna-clubs.json.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...] placeholder
// lines. A placeholder with no matching asset, or an asset with no placeholder, fails
// the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('vienna-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-vienna';
const title = 'Best Clubs in Vienna: Flex, Grelle Forelle and Where to Dance Now';
const description = "The best clubs in Vienna now: Flex, Grelle Forelle, Das Werk, Fluc and SASS, plus what happened to Pratersauna, which stopped operating as a club in 2025.";
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

// From Wikimedia Commons, downloaded to img/vienna-clubs/ on 2026-10-05, licences
// checked on each file page, used by no other guide (media/vienna-clubs.json).
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/vienna-clubs/${name}-${width}.webp`,
  srcset: `img/vienna-clubs/${name}-320.webp 320w, img/vienna-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue, oEmbed-checked on 2026-10-05, embedded by
// no other guide (media/vienna-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Flex': figure('flex-entrance', 1000, 652,
    'The lit Flex sign above the entrance to the club in Vienna at night',
    'The entrance to Flex on the Donaukanal, December 2007. Photograph: Sven Gross-Selbeck, CC BY-SA 3.0.'),
  'Grelle Forelle': figure('grelle-forelle-terrace', 1200, 675,
    'The Grelle Forelle building on the Spittelauer Lände by the Donaukanal in Vienna, with a rainbow stripe on its facade',
    'Grelle Forelle and its terrace on the Donaukanal, 16 June 2018. Photograph: Peter Gugerell, CC0.'),
  'Riana Holley': video('4FA2h4YGV2A', 'Techno', 'Riana Holley', 'HÖR ON TOUR Vienna, 3 June 2026',
    "Riana Holley on HÖR ON TOUR Vienna, held at Grelle Forelle with MIXED VIENNA. From this site's catalogue of recorded DJ sets."),
  'Peter Kruder': video('eZh2vhmype4', 'Electronic', 'Peter Kruder', 'Boiler Room Vienna DJ set',
    "Peter Kruder of Kruder & Dorfmeister on Boiler Room Vienna, 2015. From this site's catalogue of recorded DJ sets."),
  'Dorian Concept': video('8sN1RgyYcpw', 'Electronic', 'Dorian Concept', 'Boiler Room Vienna live set',
    "Dorian Concept's live set on Boiler Room Vienna, September 2014. From this site's catalogue of recorded DJ sets."),
  'Vaal': video('Pq7oNSGc07Y', 'Techno', 'Vaal', 'Boiler Room x Eristoff Day & Night, Vienna',
    "Vaal at the June 2019 Boiler Room x Eristoff session in an abandoned hotel. From this site's catalogue of recorded DJ sets."),
  'JASSS': video('OapoX4niFSA', 'Techno', 'JASSS', 'Boiler Room: Vienna',
    "JASSS at the August 2021 Boiler Room day rave at Draussen. From this site's catalogue of recorded DJ sets."),
  'DJ Python': video('5NBNUYUIBB0', 'Electronic', 'DJ Python', 'Boiler Room: Vienna',
    "DJ Python at the same August 2021 Boiler Room day rave at Draussen. From this site's catalogue of recorded DJ sets."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Entry'],
    rows: [
      ['Flex', 'Donaukanal, Augartenbrücke', 'A disused U4 tunnel on the canal, open since 1995, with concerts and club nights', 'Club events listed 16+ in October 2026'],
      ['Grelle Forelle', 'Spittelauer Lände', 'Two floors, Kitchenfloor and Clubfloor, open since December 2011', '21+, no photos, video or audio recording'],
      ['Das Werk', 'Spittelauer Lände', 'Five railway arches, in the Stadtbahn arches since spring 2013', 'Check the night'],
      ['Fluc', 'Praterstern', 'Shipping-container club and concert space, reopened in 2006', 'Open Monday to Saturday'],
      ['SASS Music Club', 'Karlsplatz', 'Crystal ceiling and gold-leaf walls, club nights Thursday to Saturday', '18+ with ID'],
      ['Das Techno Cafe', 'Volksgarten Pavillon', 'Weekly Tuesday night since 1996, in the warm months', 'Open-door policy']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (p.startsWith('- ')) return `<ul>${p.split(/\n(?=- )/).map(i => `<li>${inline(i.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
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
  {id: 'best-clubs-now', heading: 'The best clubs in Vienna now'},
  {id: 'flex', heading: 'Flex, the tunnel by the canal'},
  {id: 'techno-clubs', heading: 'Vienna techno clubs: Grelle Forelle and Das Werk'},
  {id: 'fluc-sass-volksgarten', heading: 'Fluc, SASS and the Volksgarten'},
  {id: 'pratersauna', heading: 'What happened to Pratersauna'},
  {id: 'nightlife', heading: 'Vienna nightlife by area'},
  {id: 'vienna-sound', heading: 'The Vienna sound'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Vienna clubs',
    title: 'The best clubs in Vienna, from Flex to Grelle Forelle',
    deck: 'A canal tunnel, railway arches, shipping containers and a crystal-ceilinged room at Karlsplatz: the Vienna clubs open now, and what happened to Pratersauna.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Vienna', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Vienna after Pratersauna.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Vienna clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://de.wikipedia.org/wiki/Pratersauna', 'Wikipedia (German): Pratersauna')}
${sourceLink('https://ra.co/news/84515', 'Resident Advisor: Pratersauna insolvency (January 2026)')}
${sourceLink('https://www.falter.at/', 'Falter: Pratersauna, unpaid rent and insolvency (December 2025 to January 2026)')}
${sourceLink('https://www.heute.at/', 'heute.at: Pratersauna Urban Pool Club (27 July 2026)')}
${sourceLink('https://www.grelleforelle.com/', 'Grelle Forelle: about, age and photo policy')}
${sourceLink('https://www.flex.at/', 'Flex: programme, October 2026')}
${sourceLink('https://en.wikipedia.org/wiki/Flex_(club)', 'Wikipedia: Flex')}
${sourceLink('https://www.vienna.at/', 'vienna.at: Fluc, opening and hours')}
${sourceLink('https://de.wikipedia.org/wiki/Volksgarten_(Wien)', 'Wikipedia (German): Volksgarten and its pavilion')}
${sourceLink('https://en.wikipedia.org/wiki/Mego_(record_label)', 'Wikipedia: Mego')}
${sourceLink('https://boilerroom.tv/', 'Boiler Room: Vienna sessions, 2014, 2015, 2019 and 2021')}
<li>Photographs: Wikimedia Commons, credited in each caption.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-vienna.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Vienna', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-vienna'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/vienna-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page vienna-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-vienna.html', html);
console.log('Built best-clubs-in-vienna.html');
