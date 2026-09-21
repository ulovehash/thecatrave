// Build tomorrowland-festival.html from tomorrowland-draft.md.
//
// First guide of the festivals series (festivals-series.md), after Burning
// Man. The structure and the evidence behind it are in
// tomorrowland-research.md; the owner approved it on 2026-09-13.
//
// Keywords: tomorrowland festival 2,100 a month (US, TP 32,000), where is
// tomorrowland 1,900, tomorrowland belgium 1,700, tomorrowland thailand 3,500,
// tomorrowland winter 1,300, what is tomorrowland 800. Lineups, dated editions
// and tickets are excluded on purpose, and the Disney and film collisions get
// one line. See keywords/tomorrowland.json.
//
// The catalogue behind the Selector holds no Tomorrowland sets, so every
// player comes from Tomorrowland's or the artist's own YouTube channel.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines, so placement is decided in the draft and only rendered
// here. A placeholder with no matching asset fails the build, and so does an
// asset with no placeholder.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
// The German translation of this page announces itself here, and this page
// announces it back: hreflang only counts when both sides declare it.
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('tomorrowland-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/tomorrowland-festival';
const title = 'Tomorrowland Festival: Location, Size, History and Music';
const description = 'Tomorrowland is an electronic music festival in Boom, Belgium. Learn where it is, how many people attend, who owns it, its history and what music it plays.';
const datePublished = '2026-09-13';
const dateModified = '2026-09-15';
const dateLabel = '15 September 2026';

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

// All five from Wikimedia Commons, downloaded to img/tomorrowland/, used by no
// other guide. Licences checked against the Commons API on 2026-09-13.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/tomorrowland/${name}-${width}.webp`,
  srcset: `img/tomorrowland/${name}-320.webp 320w, img/tomorrowland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-13.
const media = {
  'Retreat to Dreamville': figure('dreamville-2014', 1200, 795,
    'Tents and festival-goers in DreamVille, the Tomorrowland campsite, in 2014',
    'DreamVille, the Tomorrowland campsite, in 2014. Its packages are sold together with the festival ticket. Photograph: sergejf, CC BY 2.0.'),
  'Main Stage 2008': figure('mainstage-2008', 1024, 768,
    'The Tomorrowland main stage in 2008, a modest stage in daylight with a crowd in front',
    'The Mainstage in 2008, three years into the festival and long before it became the stage people know from the livestream. Photograph: TheWorldIsMine, CC BY-SA 2.0.'),
  '2014 Main Stage': figure('mainstage-2014', 1200, 708,
    'The Tomorrowland 2014 Mainstage, a vast themed stage set above the crowd',
    'The Mainstage in 2014, the tenth edition. Photograph: sergejf, CC BY 2.0.'),
  'Brussels Airport': figure('brussels-airport-2013', 1200, 795,
    'Brussels Airport arrivals hall decorated for Tomorrowland visitors in 2013',
    'Brussels Airport dressed for Tomorrowland arrivals in 2013. Global Journey packages fly visitors in with Brussels Airlines. Photograph: Brussels Airport, CC BY-SA 2.0.'),
  'Carl Cox': figure('carl-cox-2008', 1024, 768,
    'Carl Cox DJing at Tomorrowland in 2008',
    'Carl Cox at Tomorrowland in 2008. Techno has had a stage at the festival since its early years. Photograph: TheWorldIsMine, CC BY-SA 2.0.'),
  'WdWnCTkqIRs': youtube('WdWnCTkqIRs', "Dimitri Vegas & Like Mike, Live At Tomorrowland 2025 Mainstage, on Dimitri Vegas & Like Mike's YouTube channel"),
  // The closing listening: the festival's legendary and most-watched sets, not
  // the site's own angle (the owner, 2026-09-13). View counts read from YouTube
  // on 2026-09-13: Hardwell 28.4 million (his channel), Swedish House Mafia
  // 375,000 (Tomorrowland's channel).
  'ZG1AT6tylA4': articleVideoCollection({
    label: 'Tomorrowland\'s most watched',
    description: 'Two Mainstage sets: Hardwell in 2013, more than 28 million views on his own channel, and Swedish House Mafia in 2025, from Tomorrowland\'s.',
    items: [
      articleVideoCard({youtubeId: 'ZG1AT6tylA4', genre: 'Mainstage, 2013', artist: 'Hardwell', title: 'Live at Tomorrowland 2013'}),
      articleVideoCard({youtubeId: 'H1b8hXkGyTo', genre: 'Mainstage, 2025', artist: 'Swedish House Mafia', title: 'Tomorrowland 2025, Mainstage'})
    ]
  }),
  // Attendance, from Wikipedia and 2026 reports (Pollstar). Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Attendance', 'What happened'],
    rows: [
      ['2005', 'About 10,000', 'First edition, 14 August'],
      ['2010', '180,000', ''],
      ['2017 to 2019', '400,000', 'Two weekends'],
      ['2020 and 2021', 'none', 'Cancelled for the pandemic'],
      ['2022', '600,000', 'Three weekends, the record'],
      ['2023 and 2024', '400,000', ''],
      ['2026', '400,000', 'Visitors from more than 200 countries']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).find(k => p.includes(k));
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

// A section whose body carries ### subsections renders each as its own H3.
function renderWithSubsections(text, anchors) {
  const [lead, ...blocks] = text.split(/\n### /);
  if (blocks.length !== anchors.length) throw new Error(`Expected ${anchors.length} subsections, found ${blocks.length}`);
  return [render(lead), ...blocks.map((block, i) => {
    const [heading, ...rest] = block.split('\n');
    return `<h3 id="${anchors[i]}">${inline(heading.trim())}</h3>\n${render(rest.join('\n'))}`;
  })].join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'where', heading: 'Where Tomorrowland happens', title: 'Where Tomorrowland happens.', subsections: ['winter', 'thailand', 'brasil', 'usa', 'tomorrowland-2027']},
  {id: 'how-big', heading: 'How big Tomorrowland is', title: 'How big Tomorrowland is.'},
  {id: 'history', heading: 'A short history, and who owns Tomorrowland', title: 'A short history, and who owns Tomorrowland.'},
  {id: 'famous', heading: 'Why Tomorrowland got so famous', title: 'Why Tomorrowland got so famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Tomorrowland from home', title: 'Hearing Tomorrowland from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker,
  bodyHtml: s.subsections ? renderWithSubsections(getSection(s.heading), s.subsections) : render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Tomorrowland',
    title: 'Tomorrowland Festival',
    deck: 'A festival in a Belgian park that most of the world knows through a screen. Where it happens, how big it really is, who owns it, and what plays away from the Mainstage.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Tomorrowland', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The festival most people watch.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Tomorrowland FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://belgium.tomorrowland.com/en/welcome/down-memory-lane/', 'Tomorrowland Belgium: Down Memory Lane')}
${sourceLink('https://winter.tomorrowland.com/en/welcome/down-memory-lane/', 'Tomorrowland Winter: Down Memory Lane')}
${sourceLink('https://faq.tomorrowland.com/hc/en-us/articles/4402621418132-Where-and-when-will-Tomorrowland-Belgium-2027-take-place', 'Tomorrowland Belgium: Where and when will the 2027 edition take place?')}
${sourceLink('https://press.tomorrowland.com/', 'Tomorrowland press information: ownership and organisation')}
${sourceLink('https://en.wikipedia.org/wiki/Tomorrowland_(festival)', 'Wikipedia: Tomorrowland (festival)')}
${sourceLink('https://news.pollstar.com/2026/07/29/tomorrowland-breaks-own-livestream-record/', 'Pollstar: Tomorrowland Breaks Own Livestream Record')}
${sourceLink('https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', 'Bandwagon: Tomorrowland Belgium 2026 wraps with 400,000 fans')}
${sourceLink('https://djmag.com/news/tomorrowland-2025-mainstage-fire-reportedly-caused-ethanol-spill-during-testing', 'DJ Mag: Tomorrowland 2025 Mainstage fire reportedly caused by ethanol spill during testing')}
${sourceLink('https://www.euronews.com/culture/2025/07/18/belgiums-tomorrowland-festival-opens-after-massive-fire-destroyed-main-stage', "Euronews: Belgium's Tomorrowland festival opens after massive fire destroyed main stage")}
${sourceLink('https://www.revolution935.com/2026/01/24/tomorrowland26/', 'Revolution 935: Tomorrowland Belgium 2026 Tickets')}
${sourceLink('https://consciouselectronic.com/2026/07/25/tomorrowland-las-vegas-2027-rumor-mill/', 'Conscious Electronic: Is Tomorrowland heading to Las Vegas in 2027?')}
${sourceLink('https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', 'Las Vegas Weekly: Insomniac and Tomorrowland go b2b for Unity at Sphere')}
${sourceLink('https://www.1001tracklists.com/tracklist/p3duwuk/chase-status-mainstage-tomorrowland-weekend-2-belgium-2026-07-26.html', '1001Tracklists: Chase & Status, Mainstage, Tomorrowland weekend 2, 2026')}
${sourceLink('https://www.1001tracklists.com/tracklist/2rpp1hzt/camo-and-krooked-netsky-and-friends-stage-tomorrowland-weekend-2-belgium-2017-07-28.html', '1001Tracklists: Camo & Krooked, Netsky & Friends stage, Tomorrowland 2017')}
${sourceLink('https://weraveyou.com/2019/07/tomorrowland-iconic-sets-ever/', 'We Rave You: Tomorrowland, the most iconic sets of all time')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The drum and bass on Tomorrowland\'s hosted stages comes out of the same breaks and bass lineage as my own music. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('tomorrowland-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Tomorrowland Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/tomorrowland-festival'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/tomorrowland.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page tomorrowland-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('tomorrowland-festival.html', html);
console.log('Built tomorrowland-festival.html');
