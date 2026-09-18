// Build mysteryland-festival.html from mysteryland-draft.md.
//
// Festivals series (festivals-series.md), after Creamfields; the owner chose
// Mysteryland on 14 September 2026 and supplied the organic-keyword exports.
// The structure and the evidence behind it are in mysteryland-research.md.
//
// Keywords (global volume, September 2026): mysteryland 2026 3,600, mysteryland
// 2025 1,800, mysteryland 2027 1,100, mysteryland festival 800 (TP 21,000),
// mysteryland tickets 700. There is no 2026 edition, so the 2026 intent is
// answered, and the 2027 dates come from the official site only; refresh them
// every year (festival-next-year rule). Line-ups and set times stay out. See
// keywords/mysteryland.json.
//
// The catalogue behind the Selector holds 2 Mysteryland sets (Mixmag, 2016), so
// the players come from the festival's own YouTube channel, oEmbed-checked.
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

const draft = fs.readFileSync('mysteryland-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/mysteryland-festival';
const title = 'Mysteryland Festival: Where It Is, Its History, and 2027';
const description = 'Mysteryland skips 2026 and returns to Haarlemmermeer on 27 to 29 August 2027. Where it happens, how a 1993 rave grew into it, who owns it, and what it plays.';
const date = '2026-09-14';
const dateLabel = '14 September 2026';

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

// All five from Wikimedia Commons, downloaded to img/mysteryland/, used by no
// other guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/mysteryland/${name}-${width}.webp`,
  srcset: `img/mysteryland/${name}-320.webp 320w, img/mysteryland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author (Mysteryland) on 2026-09-14.
const media = {
  'Main stage by the lake': figure('site-aerial-2018', 1200, 675,
    'An aerial view of Mysteryland in 2018: a huge decorated main stage on the shore of a lake, a dense crowd in front of it, and woodland, tents and paths around',
    'The main stage by the lake on the former Floriade grounds, from the air, at Mysteryland 2018. Photograph: Niels de Vries, CC BY-SA 4.0.'),
  'View from the pyramid': figure('floriade-pano-2007', 1200, 397,
    'A wide panorama over green festival grounds with a large red big-top tent, crowds on paths, ponds and a line of trees beyond',
    'Mysteryland in 2007, seen from the top of the grass pyramid on the Floriade grounds.'),
  'Cocoon area': figure('cocoon-2019', 1200, 900,
    'A stage under tall trees framed by three giant woven rings, with people dancing on a wooden floor in the sun',
    'Sven Väth\'s Cocoon area in the trees at Mysteryland 2019, seventeen years after it first hosted an area at the festival. Photograph: Gerard Koymans, CC BY-SA 4.0.'),
  'Hardwell at Mysteryland 2014': figure('hardwell-2014', 1200, 500,
    'Hardwell at the decks with both arms raised, flames bursting behind him and a night crowd beyond',
    'Hardwell at Mysteryland in August 2014. He was back on the main stage in 2023. Photograph: Nicoalsemgeest.com, CC BY 2.0.'),
  'Q-dance stage': figure('q-dance-2019', 1200, 900,
    'The Q-dance stage at Mysteryland 2019, a winged structure with a skull at its centre, seen from a grassy slope crowded with people',
    'The Q-dance hardstyle stage at Mysteryland 2019, with the crowd on the slope above it. Photograph: Gerard Koymans, CC BY-SA 4.0.'),
  'z4cO-cpjPoU': youtube('z4cO-cpjPoU', 'Mysteryland 2025, Sunday Drone Endshow, on the Mysteryland YouTube channel'),
  // Essential listening: the two most-watched sets among the channel's
  // recent uploads, views read on 2026-09-14 (Hardwell 2.8M, Charlotte de
  // Witte 2.4M), both on the festival's own channel.
  '_8acHa-APa8': articleVideoCollection({
    label: 'The same main stage, a year apart',
    description: 'Hardwell on the Mysteryland main stage in 2023 and Charlotte de Witte on it in 2024, the two most watched sets among the festival\'s recent uploads on its own channel.',
    items: [
      articleVideoCard({youtubeId: '_8acHa-APa8', genre: 'Main Stage, 2023', artist: 'Hardwell', title: 'Main Stage, Mysteryland 2023'}),
      articleVideoCard({youtubeId: 'mao2oVsWSxA', genre: 'Mainstage, 2024', artist: 'Charlotte de Witte', title: 'Mainstage, Mysteryland 2024'})
    ]
  }),
  // From the Dutch Wikipedia's history of the festival and the official site
  // (sites; 2025 and 2027 dates). Typed, not computed.
  'Table: history': articleTable({
    headers: ['Year', 'Where', 'Visitors'],
    rows: [
      ['1993', 'Midland Circuit, Lelystad', 'not published'],
      ['1994', 'Maasvlakte, Rotterdam', 'not published'],
      ['1995', 'no festival', ''],
      ['1996', 'Eindhoven airfield', '25,000'],
      ['1997', 'Bussloo', '25,000'],
      ['1998', 'Lingebos', '25,000'],
      ['1999 and 2000', 'Bussloo', '35,000'],
      ['2001', 'Six Flags Holland', 'not published'],
      ['2002', 'Ruigoord, Amsterdam', '20,000'],
      ['2003', 'Floriade grounds, Haarlemmermeer', '40,000'],
      ['2004 and 2005', 'Floriade grounds', 'more than 100,000 across the two'],
      ['2007 to 2009', 'Floriade grounds', 'more than 60,000 a year'],
      ['2013', 'Floriade grounds', '60,000, sold out'],
      ['2019', 'Floriade grounds', 'more than 100,000 over the weekend'],
      ['2020 and 2021', 'none', 'cancelled for the pandemic'],
      ['2025', 'Floriade grounds', 'last edition in its current form'],
      ['2026', 'none', 'paused'],
      ['2027', 'Haarlemmermeer', 'dated 27 to 29 August'],
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

// The next edition first, under a heading with its year, as in every festival
// guide (festival-editions.mjs, audit-festival-editions.mjs).
const sections = [
  {id: 'mysteryland-2027', heading: 'Mysteryland 2027, and why there is no 2026', title: 'Mysteryland 2027, and why there is no 2026.'},
  {id: 'where', heading: 'Where Mysteryland happens', title: 'Where Mysteryland happens.'},
  {id: 'how-big', heading: 'How big Mysteryland is', title: 'How big Mysteryland is.'},
  {id: 'history', heading: 'A short history, and who owns Mysteryland', title: 'A short history, and who owns Mysteryland.', subsections: ['usa-chile']},
  {id: 'famous', heading: 'Why Mysteryland is famous', title: 'Why Mysteryland is famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Mysteryland from home', title: 'Hearing Mysteryland from home.'}
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
    kicker: 'Mysteryland',
    title: 'Mysteryland Festival',
    deck: 'A 1993 rave that settled on the old Floriade grounds in Haarlemmermeer and grew into a weekend. Where it happens, why it is skipping 2026, who owns it, and what plays across its stages.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Mysteryland', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A rave that found a home.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // The owner's two mixes, as on every festival guide: after the history,
  // then before the FAQ (audit-site-components.mjs, festivalGuidesPlayOwnSets).
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Mysteryland FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://nl.wikipedia.org/wiki/Mysteryland', 'Wikipedia (Dutch): Mysteryland')}
${sourceLink('https://en.wikipedia.org/wiki/Mysteryland', 'Wikipedia: Mysteryland')}
${sourceLink('https://en.wikipedia.org/wiki/ID%26T', 'Wikipedia: ID&T')}
${sourceLink('https://www.mysteryland.nl/this-is-mysteryland', 'Mysteryland: 32 years and counting')}
${sourceLink('https://www.mysteryland.nl/info', 'Mysteryland: FAQ (2027 dates, location, minimum age)')}
${sourceLink('https://the-media-nanny_5.prowly.com/415471-mysteryland-celebrates-final-edition-in-its-current-iconic-form-next-month-set-to-return-in-2027-with-a-new-concept', 'Mysteryland press release: final edition in its current iconic form, return in 2027 with a new concept')}
${sourceLink('https://www.digitalmusicnews.com/2025/07/24/mysteryland-announces-break-for-2026-will-return-in-2027/', 'Digital Music News: Mysteryland announces break for 2026, will return in 2027')}
${sourceLink('https://www.festivalinsights.com/2025/08/mysteryland-announces-return-in-2027-after-creative-break/', 'Festival Insights: Mysteryland announces return in 2027 after creative break')}
${sourceLink('https://visithaarlemmermeer.nl/en/zien-doen/festival-events/mysteryland', 'Visit Haarlemmermeer: Mysteryland, the largest dance festival in the Netherlands')}
${sourceLink('https://www.spin.com/2013/08/mysteryland-festival-woodstock-site-us-original/', 'Spin: Mysteryland electronic festival headed to original Woodstock site')}
${sourceLink('https://www.billboard.com/music/music-news/mysteryland-usa-2017-canceled-lcd-soundsystem-geazy-major-lazer-woodstock-7760507/', 'Billboard: Mysteryland USA 2017 canceled by organizers')}
${sourceLink('https://www.youtube.com/@mysteryland', 'Mysteryland on YouTube')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'If this guide was useful, my own music is on Bandcamp. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('mysteryland-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Mysteryland Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/mysteryland-festival'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/mysteryland.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page mysteryland-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('mysteryland-festival.html', html);
console.log('Built mysteryland-festival.html');
