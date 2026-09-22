// Build parookaville-festival.html from parookaville-draft.md.
//
// Festivals series (festivals-series.md), guide four, after Tomorrowland, EDC
// Las Vegas and Creamfields. The structure and the evidence behind it are in
// parookaville-research.md.
//
// The page keeps one evergreen English intent: location, scale, history,
// ownership, city concept and music. Lineups, set times, livestream schedules
// and detailed transactional ticket guidance remain outside its scope. The
// 2026-09-15 maintenance pass used current primary sources, not Ahrefs data.
//
// The catalogue behind the Selector holds no Parookaville set, so the players
// come from the festival's own YouTube channel (PAROOKAVILLE, @parookavilleTV)
// and the artists' own, oEmbed-checked.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines, so placement is decided in the draft and only rendered
// here. A placeholder with no matching asset fails the build, and so does an
// asset with no placeholder.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  ownSetListening, ownTrackListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
// The German translation of this page announces itself here, and this page
// announces it back: hreflang only counts when both sides declare it.
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('parookaville-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/parookaville-festival';
const title = 'Parookaville Festival: Where It Is, Who Runs It, the Music';
const description = 'Where Parookaville happens on an old RAF airbase at Weeze, how three friends built a festival staged as a city, how many people go, who runs it, and what plays.';
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

// All six from Wikimedia Commons, downloaded to img/parookaville/, used by no
// other guide. Licences checked against the Commons API on 2026-09-13.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/parookaville/${name}-${width}.webp`,
  srcset: `img/parookaville/${name}-320.webp 320w, img/parookaville/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-13.
const media = {
  // The owner's own track inside the text (owner, 2026-09-21: Berlin Race
  // 1909 wherever a guide touches Germany).
  'thecatrave Berlin Race 1909': ownTrackListening('berlin-race-1909', 'Not what the main stages play: a German city in breakbeat and dub techno. My own track.'),
  'Parookaville stage construction': figure('stage-build-2016', 1200, 752,
    'A stage facade of mock town buildings with scaffolding and a red and white chimney, cranes and forklifts in front, on the Parookaville site in 2016',
    'A Parookaville stage going up on the airfield in July 2016, the festival\'s second year: mock town buildings, a chimney and scaffolding. Photograph: Tama66, CC0.'),
  'ParookavilleMainLuftbild22': figure('mainstage-aerial-2022', 1200, 900,
    'The Parookaville Mainstage from the air in 2022, a red and gold stage with the crowd in front of it, tents and fields beyond and wind turbines on the horizon',
    'The Parookaville Mainstage from the air in July 2022, the first edition after the pandemic. The stage is rebuilt to a new design every year. Photograph: Timo, CC BY-SA 4.0.'),
  'Parookaville 2017 Regen': figure('rain-2017', 640, 1230,
    'A flooded festival ground at dusk, with the PAROOKAVILLE letters beyond the water and strings of lights on poles',
    'Standing water in front of the Parookaville sign in 2017, the year rain left cars stuck on the camping ground. Photograph: Ss279, CC BY-SA 4.0.',
    'archive-image'),
  'Townhall Parookaville Festival': figure('town-hall-2024', 1200, 675,
    'The Parookaville town hall, a domed building with horns on its roof and TOWNHALL in lit letters above an info point and a registration office',
    'The town hall at Parookaville in 2024, where citizens have their festival passports stamped. Photograph: Timolius, CC BY-SA 4.0.'),
  'Cloud Factory 2022': figure('cloud-factory-2022', 1200, 900,
    'A packed crowd under a lattice roof lit by blue and white beams inside the Cloud Factory hangar in 2022',
    'The Cloud Factory in 2022, an indoor stage in one of the airbase\'s old hangars. Photograph: Timo, CC BY-SA 4.0.'),
  'DJ Hardwell performing at Parookaville 2024': figure('hardwell-2024', 1200, 800,
    'Hardwell behind the decks at Parookaville in 2024, lit green, one hand raised towards the crowd',
    'Hardwell at Parookaville in 2024. He headlined in 2018 and 2023 and was back on the bill in 2025 and 2026. Photograph: Rudgrcom, CC BY 4.0.'),
  // Views read from YouTube on 2026-09-13: 728,553, festival channel.
  'QeifZyGcZmY': youtube('QeifZyGcZmY', 'Paul Elstak at Parookaville 2022, on the PAROOKAVILLE YouTube channel'),
  // The closing listening: the legendary and most-watched sets rather than the
  // site's own angle (the owner, 2026-09-13). Views read from YouTube on
  // 2026-09-13, across the festival's DJ-set playlists for 2015 to 2019 and
  // 2022 to 2025: W&W 2022 1,257,135 (festival channel, its most watched set,
  // ahead of Finch 2022 at 1,246,324 and Gestört aber Geil 2024 at 1,021,261);
  // Steve Aoki 2025 1.7M on his own channel, the most watched Parookaville set
  // found anywhere, ahead of Armin van Buuren 2024 at 1,102,636 on his.
  'lnOjzIlm1_g': articleVideoCollection({
    label: 'Parookaville, most watched',
    description: 'W&W in 2022, the most watched set on the festival\'s own channel; and Steve Aoki in 2025, on his own channel, who was on the first Parookaville bill in 2015.',
    items: [
      articleVideoCard({youtubeId: 'lnOjzIlm1_g', genre: 'Parookaville, 2022', artist: 'W&W', title: 'DJ set, Parookaville 2022'}),
      articleVideoCard({youtubeId: 'rWcNs6LcNpM', genre: 'Parookaville, 2025', artist: 'Steve Aoki', title: 'DJ set, Parookaville 2025'})
    ]
  }),
  // Totals and tickets from de.wikipedia's attendance table, which counts each
  // day's entry; 2019 matches Pollstar (85,000 tickets, more than 210,000
  // entries). The table's daily column is left out: its 40,000 to 45,000 for
  // 2022 to 2024 contradicts the 75,000 a day the same article gives for 2024.
  // Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Tickets sold', 'Total admissions'],
    rows: [
      ['2015', '25,000', '40,000'],
      ['2016', '50,000', '80,000'],
      ['2017', '80,000', '180,000'],
      ['2018', '80,000', '180,000'],
      ['2019', '85,000', '210,000'],
      ['2020', 'none', 'Cancelled; LIVE from the City, 100 guests a night'],
      ['2021', 'none', 'Cancelled'],
      ['2022', '75,000', '225,000'],
      ['2023', '75,000', '225,000'],
      ['2024', '75,000', '225,000'],
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
  {id: 'where', heading: 'Where Parookaville happens', title: 'Where Parookaville happens.', subsections: ['parookaville-2027']},
  {id: 'how-big', heading: 'How big Parookaville is', title: 'How big Parookaville is.'},
  {id: 'history', heading: 'A short history, and who owns Parookaville', title: 'A short history, and who owns Parookaville.'},
  {id: 'famous', heading: 'Why Parookaville is famous', title: 'Why Parookaville is famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Parookaville from home', title: 'Hearing Parookaville from home.'}
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
    kicker: 'Parookaville',
    title: 'Parookaville Festival',
    deck: 'A festival staged as a city, three days every July on an old RAF airbase at Weeze, near the Dutch border. Where it happens, how big it is, who runs it, and what plays past the Mainstage.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Parookaville', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival staged as a city.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Parookaville FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Parookaville', 'Wikipedia: Parookaville')}
${sourceLink('https://de.wikipedia.org/wiki/Parookaville', 'Wikipedia (German): Parookaville')}
${sourceLink('https://en.wikipedia.org/wiki/Weeze_Airport', 'Wikipedia: Weeze Airport')}
${sourceLink('https://www.parookaville.com/en/experience/the-city-of-dreams', 'Parookaville: The City of Dreams')}
${sourceLink('https://www.parookaville.com/de/experience/stages', 'Parookaville: Stages')}
${sourceLink('https://www.parookaville.com/en/tickets', 'Parookaville: 2027 tickets')}
${sourceLink('https://www.parookaville.com/en/future-city', 'Parookaville: Future City and digital tickets')}
${sourceLink('https://www.parookaville.com/en/data-privacy/', 'Parookaville: age and identity checks')}
${sourceLink('https://www.parookaville.com/de/impressum', 'Parookaville: imprint')}
${sourceLink('https://www.parookaville.com/en/artist/pendulum', 'Parookaville: Pendulum')}
${sourceLink('https://news.pollstar.com/2019/08/07/superstruct-entertainment-invests-in-german-parookaville-promoter-next-events/', 'Pollstar: Superstruct Entertainment invests in German Parookaville promoter Next Events')}
${sourceLink('https://media.kkr.com/news-details?news_id=d3c327f2-83d8-449a-b732-49885585be2f&amp;type=1', 'KKR: CVC joins KKR in the acquisition of Superstruct Entertainment')}
${sourceLink('https://meyersound.com/news/parookaville-2024/', 'Meyer Sound: Parookaville 2024')}
${sourceLink('https://www1.wdr.de/nrw/niederrhein/kreis-kleve/bilanz-parookaville-festival-2026-weeze-100.html', 'WDR: Parookaville 2026 attendance')}
${sourceLink('https://news.pollstar.com/2026/07/21/german-fests-lollapalooza-berlin-parookaville-hail-successful-editions-highfield-preps-for-its-last/', 'Pollstar: Parookaville 2026 sold out with more than 300 acts')}
${sourceLink('https://www.fazemag.de/das-war-parookaville-2017/','FAZE Magazin: Das war Parookaville 2017')}
${sourceLink('https://djmag.com/top100festivals/2026/10/parookaville', 'DJ Mag: Top 100 Festivals 2026, Parookaville')}
${sourceLink('https://en.wikipedia.org/wiki/Paul_Elstak', 'Wikipedia: Paul Elstak')}
${sourceLink('https://en.wikipedia.org/wiki/W%26W', 'Wikipedia: W&W')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Parookaville is a long way from the breaks and bass my own music comes out of, but Pendulum\'s booking in 2026 put drum and bass on its bill. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('parookaville-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Parookaville Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/parookaville-festival'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/parookaville.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page parookaville-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('parookaville-festival.html', html);
console.log('Built parookaville-festival.html');
