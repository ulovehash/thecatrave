// Build untold-festival.html from untold-draft.md.
//
// Festivals series (festivals-series.md), guide six, after Tomorrowland, EDC
// Las Vegas, Creamfields, Parookaville and Ultra. The structure and the
// evidence behind it are in untold-research.md.
//
// Keywords (global volume, September 2026): untold festival 11,000, untold 2027
// 1,100, untold cluj 800, untold festival romania 600, untold music festival
// 400, untold live 300, untold festival cluj 150, untold cluj napoca 100,
// untold festival location 90, untold festival 2027 60, where is untold
// festival 40, what is untold festival 10. The bare head "untold" is
// Romanian-served and collides with a film and a perfume, so the page targets
// the English festival form. The next edition is targeted on purpose (the
// owner, 2026-09-14) and its section is refreshed every year; line-ups, set
// times and ticket prices are excluded. See keywords/untold.json.
//
// The catalogue behind the Selector holds two Untold sets, both Mixmag techno
// films from 2018; one is the music section's player. The rest come from the
// festival's and the artists' own YouTube channels, oEmbed-checked.
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

const draft = fs.readFileSync('untold-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/untold-festival';
const title = 'Untold Festival: Where It Is, How Big, and the Music';
const description = 'Untold festival in Cluj-Napoca, Romania: when Untold 2027 is, where it happens, how it reached 500,000 admissions, who runs it, and what plays.';
const datePublished = '2026-09-14';
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

// All five from Wikimedia Commons, downloaded to img/untold/, used by no other
// guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/untold/${name}-${width}.webp`,
  srcset: `img/untold/${name}-320.webp 320w, img/untold/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-14.
const media = {
  'Cluj-Napoca Cluj Arena 1': figure('cluj-arena', 1200, 799,
    'Cluj Arena from inside, an oval football stadium with a curved roof over grey seats, a green pitch and a running track, under a blue sky',
    'Cluj Arena, the 30,355-seat football stadium that holds the Untold main stage, on an ordinary day in September 2014. Photograph: Валерий Дед, CC BY 3.0.'),
  // 960 wide at source, so it keeps its own size rather than being enlarged.
  'Untold Festival, main stage': figure('main-stage-2015', 960, 407,
    'A wide night panorama of Cluj Arena at Untold 2015, the pitch and every stand packed, the lit main stage at the far left',
    'The main stage inside Cluj Arena at the first Untold, in 2015, with the pitch and the stands full. Photograph: Travelcristi, CC BY-SA 4.0.'),
  'Untold Festival, RaveNationCZ': figure('wolf-stage-2018', 1200, 900,
    'The top of the Untold main stage in 2018, two giant painted wolf heads, one blue and one pink, reaching over an ornate gold arch against a clear sky',
    'The main stage in 2018, the edition the festival titled Wolf Spirit. Photograph: RaveNationCZ, CC BY-SA 4.0.'),
  'Untold2019 main stage': figure('main-stage-2019', 1200, 900,
    'A packed crowd holding up phone lights in front of the purple and gold Untold main stage at night in 2019, the stadium stands full behind',
    'The main stage at night in 2019, the edition titled The Codex of Magic, with the stadium\'s stands full behind the pitch. Photograph: VladRusuRomania, CC BY-SA 4.0.'),
  'Untold2019 fans': figure('fans-flag-2019', 1200, 560,
    'A group of festivalgoers sitting and standing with a Romanian flag in front of the bearded-wizard main stage at Untold 2019, in daylight',
    'Festivalgoers with a Romanian flag in front of the 2019 main stage. Photograph: VladRusuRomania, CC BY-SA 4.0.'),
  // Views read from the festival's channel, sorted by popularity, on
  // 2026-09-14: 3 million, the channel's most watched video.
  'o1u2sT8ah58': youtube('o1u2sT8ah58', 'UNTOLD Festival 2018 official aftermovie, on the UNTOLD YouTube channel'),
  // One of the two Untold sets in the catalogue (Mixmag, 2018): 153,212 views
  // in selector-data.
  'rk3SYpd5HSc': youtube('rk3SYpd5HSc', 'Pan-Pot techno set at Untold 2018, on the Mixmag YouTube channel'),
  // The closing listening: the legendary and most-watched sets rather than the
  // site's own angle (the owner, 2026-09-13). Views read from YouTube on
  // 2026-09-14: Armin van Buuren 2017 7.9M on his own channel, the most
  // watched Untold set found anywhere (his 2025 set has 522K); Steve Aoki's
  // 2021 headline set 532K on his. The festival's own channel carries no full
  // festival set in its top thirty; its most watched set, Lost Frequencies'
  // Overnight (430K), was a May 2020 stream, not the festival.
  'DjQCkSSblIk': articleVideoCollection({
    label: 'Untold, most watched',
    description: 'Armin van Buuren\'s five-and-a-half-hour main stage set from 2017, the most watched Untold set on any channel; and Steve Aoki\'s 2021 headline set, from the September edition after the pandemic.',
    items: [
      articleVideoCard({youtubeId: 'DjQCkSSblIk', genre: 'Untold, 2017', artist: 'Armin van Buuren', title: 'Live at Untold Festival 2017'}),
      articleVideoCard({youtubeId: '402OrPvfYlU', genre: 'Untold, 2021', artist: 'Steve Aoki', title: 'Untold headline set 2021'})
    ]
  }),
  // Admissions are typed, not computed. UNTOLD's official retrospective gives
  // 340,000 for 2017 and more than 355,000 for 2018; later years retain the
  // documented sources in untold-research.md.
  'Table: attendance': articleTable({
    headers: ['Year', 'Dates', 'Admissions'],
    rows: [
      ['2015', '30 July to 2 August', '240,000'],
      ['2016', '4 to 7 August', '300,000'],
      ['2017', '3 to 6 August', '340,000'],
      ['2018', '2 to 5 August', 'more than 355,000'],
      ['2019', '1 to 4 August', '370,000'],
      ['2020', '', 'Cancelled for the pandemic'],
      ['2021', '9 to 12 September', '265,000'],
      ['2022', '4 to 7 August', '360,000'],
      ['2023', '3 to 6 August', '420,000'],
      ['2024', '8 to 11 August', '427,000'],
      ['2025', '7 to 10 August', '470,000'],
      ['2026', '6 to 9 August', 'more than 500,000'],
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

// The next-edition section comes first: its year is refreshed every August
// when the festival ends (festival-editions.mjs reminds the build).
const sections = [
  {id: 'untold-2027', heading: 'Untold 2027: dates and the Star Edition', title: 'Untold 2027: dates and the Star Edition.'},
  {id: 'where', heading: 'Where Untold happens', title: 'Where Untold happens.', subsections: ['beyond-cluj']},
  {id: 'how-big', heading: 'How big Untold is', title: 'How big Untold is.'},
  {id: 'history', heading: 'A short history, and who runs Untold', title: 'A short history, and who runs Untold.'},
  {id: 'famous', heading: 'Why Untold is famous', title: 'Why Untold is famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Untold from home', title: 'Hearing Untold from home.'}
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
    kicker: 'Untold',
    title: 'Untold Festival',
    deck: 'Four days every August in a football stadium and a city park in Transylvania. When the next one is, where it happens, how big it is, who runs it, and what plays past the main stage.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Untold Festival', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival built for a city\'s year.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Untold FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Untold_Festival', 'Wikipedia: Untold Festival')}
${sourceLink('https://ro.wikipedia.org/wiki/Untold_Festival', 'Wikipedia (Romanian): Untold Festival')}
${sourceLink('https://en.wikipedia.org/wiki/Cluj_Arena', 'Wikipedia: Cluj Arena')}
${sourceLink('https://en.wikipedia.org/wiki/BTarena', 'Wikipedia: BTarena')}
${sourceLink('https://web.archive.org/web/20230205200231/https://republica.ro/cum-a-devenit-romania-cool-pentru-cei-mai-mari-dj-ai-lumii-fondatorul-untold-despre-povestea-nespusa-a', 'Republica: interview with Bogdan Buta, founder of UNTOLD (Romanian, archived)')}
${sourceLink('https://news.pollstar.com/2026/08/10/untold-festival-romania-counts-more-than-500000-visitors-across-four-days/', 'Pollstar: Untold Festival Romania counts more than 500,000 visitors across four days')}
${sourceLink('https://untold.com/', 'UNTOLD: official site')}
${sourceLink('https://tickets.untold.com/?_lang=en', 'UNTOLD: official ticket shop for 2027')}
${sourceLink('https://www.untold.com/info/547d8741-5739-485b-a1a4-85fb0552f93c', 'UNTOLD: official terms for the 2027 festival')}
${sourceLink('https://untold.com/news/c313b7e0-60c6-4968-a63e-44126e59a43c', 'UNTOLD: official festival history and attendance')}
${sourceLink('https://invest.untold.com/', 'UNTOLD: investment page and leadership')}
${sourceLink('https://djmag.com/top100festivals/2026/3/untold-festival', 'DJ Mag: Untold Festival, Top 100 Festivals 2026')}
${sourceLink('https://djmag.com/news/armin-van-buuren-shares-full-seven-hour-untold-festival-set-watch', 'DJ Mag: Armin van Buuren shares full seven-hour Untold Festival set')}
${sourceLink('https://www.arminvanbuuren.com/videos/armin-van-buuren-live-at-untold-festival-2017-55-hours-set/', 'Armin van Buuren: Live at Untold Festival 2017 (5,5 hours set)')}
${sourceLink('https://www.digi24.ro/stiri/actualitate/evenimente/curtea-de-conturi-untold-finantat-ilegal-de-autoritati-542323', 'Digi24: Curtea de Conturi: UNTOLD, finanțat ilegal de autorități (Romanian)')}
${sourceLink('https://www.researchgate.net/publication/335778193_The_UNTOLD_story_Event_tourism%27s_negative_impact_on_residents%27_community_life_and_well-being', 'Moisescu et al.: The UNTOLD story, Worldwide Hospitality and Tourism Themes, 2019')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('untold-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Untold Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/untold-festival'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/untold.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page untold-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('untold-festival.html', html);
console.log('Built untold-festival.html');
