// Build lollapalooza-festival.html from lollapalooza-draft.md.
//
// Festivals series (festivals-series.md), the second of the more popular
// festivals. The structure and the evidence behind it are in
// lollapalooza-research.md, built from the owner's export of Wikipedia's
// rankings because the Ahrefs units ran out; TOPIC-RESEARCH.md stages 3, 4 and
// 6 were not run.
//
// Keywords (US, latest month, September 2026): lollapalooza location 3,600,
// when does lollapalooza end 1,800, lollapalooza attendance 1,500, when is
// lollapalooza 1,300, how many people go to lollapalooza 1,100, lollapalooza
// dates 1,100, is lollapalooza only in chicago 1,000, how many people attend
// lollapalooza 1,000, lollapalooza india 1,000, lolla chicago 1,000,
// lollapalooza history 800, how many days is lollapalooza 800, what is
// lollapalooza 800, and smaller forms. The 2027 dates are given as expected,
// at the owner's instruction, because the festival had not confirmed them.
// See keywords/lollapalooza.json.
//
// The catalogue behind the Selector holds no Lollapalooza set, so the players
// come from the festival's YouTube channel and the artists' own, oEmbed-checked.
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

const draft = fs.readFileSync('lollapalooza-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/lollapalooza-festival';
const title = 'Lollapalooza Chicago: Location, History and the Music';
const description = 'Lollapalooza is a four-day festival in Grant Park, Chicago. Learn its location, history, scale, international editions and the music on Perry\'s Stage.';
const datePublished = '2026-09-14';
const dateModified = '2026-09-17';
const dateLabel = '17 September 2026';

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

// All four from Wikimedia Commons, downloaded to img/lollapalooza/, used by no
// other guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/lollapalooza/${name}-${width}.webp`,
  srcset: `img/lollapalooza/${name}-320.webp 320w, img/lollapalooza/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-14.
const media = {
  'Lollapalooza Chicago Skyline': figure('skyline-2017', 1200, 900,
    'A crowd on the grass in Grant Park during Lollapalooza 2017, a speaker tower to the left and the Chicago skyline behind',
    'The Grant Park Lollapalooza site in August 2017, with the Chicago skyline behind the crowd. Photograph: Lacrossewi, CC BY-SA 4.0.'),
  'Lollapalooza Chicago, Lacrossewi': figure('sign-2017', 1200, 916,
    'The word Lollapalooza in giant white inflatable letters in front of trees and a skyscraper, festivalgoers walking past in the foreground',
    'The festival\'s name in giant inflatable letters at the Grant Park entrance in 2017. Photograph: Lacrossewi, CC BY-SA 4.0.'),
  'Ric wallace Lollapalooza': figure('tour-1991', 1200, 868,
    'A large outdoor crowd facing a scaffold stage with a red-draped roof on the first Lollapalooza tour in 1991',
    'The crowd at an outdoor stop on the first Lollapalooza tour, in 1991. Photograph: Ric Wallace, CC BY 2.0.'),
  'Lollapalooza 2014, Chicago': figure('stage-2014', 1200, 900,
    'An empty main stage in Grant Park on the morning of Lollapalooza 2014, dirt ground in front and lakefront towers behind',
    'A main stage in Grant Park on the morning of 2 August 2014, before the gates opened, with the lakefront towers behind it. Photograph: swimfinfan, CC BY-SA 2.0.'),
  // Editions and venues from en.wikipedia's international expansion section.
  // Typed, not computed.
  'Table: editions': articleTable({
    headers: ['City', 'Venue', 'First edition'],
    rows: [
      ['Chicago, United States', 'Grant Park', '2005 (a touring festival from 1991)'],
      ['Santiago, Chile', 'Parque O\'Higgins', '2011'],
      ['São Paulo, Brazil', 'Jockey Club, then Interlagos from 2014', '2012'],
      ['Buenos Aires, Argentina', 'Hipódromo de San Isidro', '2014'],
      ['Berlin, Germany', 'Tempelhof, Treptower Park, Olympiastadion and Olympiapark from 2018', '2015'],
      ['Paris, France', 'Longchamp Racecourse', '2017'],
      ['Stockholm, Sweden', 'Gärdet', '2019 (editions in 2019, 2022 and 2023; paused for 2024)'],
      ['Mumbai, India', 'Mahalaxmi Racecourse', '2023'],
    ].map(row => row.map(escapeHtml))
  }),
  // Views read from his channel on 2026-09-14: about 1 million.
  '9TKqqBCmDHA': youtube('9TKqqBCmDHA', 'John Summit live at Lollapalooza Chicago 2026, on his YouTube channel'),
  // The closing listening: the legendary and most-watched (the owner,
  // 2026-09-13). Views read from YouTube on 2026-09-14: Lady Gaga with Semi
  // Precious Weapons, 6 August 2010, about 44 million on the festival's
  // channel, its most watched video; The Chainsmokers' official 2019 set, about
  // 3.9 million on theirs, the most watched full set found on an artist's own
  // channel.
  'EGh9zlN6eLo': articleVideoCollection({
    label: 'Lollapalooza, most watched',
    description: 'Lady Gaga joining Semi Precious Weapons in 2010, the most watched video on the festival\'s channel; and The Chainsmokers\' official 2019 set, the most watched full set on an artist\'s own channel.',
    items: [
      articleVideoCard({youtubeId: 'EGh9zlN6eLo', genre: 'Lollapalooza, 2010', artist: 'Lady Gaga with Semi Precious Weapons', title: 'Lollapalooza 2010'}),
      articleVideoCard({youtubeId: 'zns830Yl1b0', genre: 'Lollapalooza, 2019', artist: 'The Chainsmokers', title: 'Official live set, Lollapalooza Chicago 2019'})
    ]
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
  {id: 'lollapalooza-2027', heading: 'Lollapalooza 2027 date status', title: 'Lollapalooza 2027 date status.'},
  {id: 'where', heading: 'Where Lollapalooza is', title: 'Where Lollapalooza is.', subsections: ['only-chicago']},
  {id: 'when', heading: 'When Lollapalooza is, and how long it lasts', title: 'When Lollapalooza is, and how long it lasts.'},
  {id: 'how-big', heading: 'How big Lollapalooza is', title: 'How big Lollapalooza is.'},
  {id: 'meaning', heading: 'What Lollapalooza means', title: 'What Lollapalooza means.'},
  {id: 'history', heading: 'A short history, and who owns Lollapalooza', title: 'A short history, and who owns Lollapalooza.'},
  {id: 'stages', heading: 'The Lollapalooza stages', title: 'The Lollapalooza stages.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Lollapalooza from home', title: 'Hearing Lollapalooza from home.'}
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
    kicker: 'Lollapalooza',
    title: 'Lollapalooza Chicago',
    deck: 'Four days every summer in Grant Park on the Chicago lakefront. Where it happens, how a farewell tour became a permanent festival, and what plays across its stages.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Lollapalooza', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A farewell tour that stayed.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Lollapalooza FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.youtube.com/@lollapalooza', 'Lollapalooza on YouTube (channel description, view counts)')}
${sourceLink('https://www.lollapalooza.com/', 'Lollapalooza: official site')}
${sourceLink('https://www.lollapalooza.com/schedule', 'Lollapalooza: official schedule and 2027 announcement status')}
${sourceLink('https://support.lollapalooza.com/hc/en-us/articles/4402035626260-What-are-the-dates-and-hours-for-Lollapalooza-2026', 'Lollapalooza: official 2026 dates and hours')}
${sourceLink('https://itsbetterlive.livenationforbrands.com/at-lollapalooza-everyone-had-a-plan-nobody-stuck-to-it/', 'Live Nation: Lollapalooza 2026 attendance')}
${sourceLink('https://www.prnewswire.com/news-releases/live-nation-entertainment-expands-festival-portfolio-with-c3-presents-300012666.html', 'Live Nation: controlling stake in C3 Presents')}
${sourceLink('https://www.c3presents.com/festivals', 'C3 Presents: festivals and current Lollapalooza locations')}
${sourceLink('https://www.chicagoparkdistrict.com/about-us/news/chicago-park-district-celebrates-strong-2024-accomplishments-and-touts-progress', 'Chicago Park District: Lollapalooza daily attendance')}
${sourceLink('https://www.wbez.org/culture-the-arts/2022/08/01/lightfoot-announces-deal-to-keep-lollapalooza-in-grant-park-for-another-decade', 'WBEZ: current Grant Park agreement and attendance cap')}
${sourceLink('https://www.phoenixnewtimes.com/music/first-lollapalooza-concert-1991-phoenix-30th-anniversary-oral-history-perry-farrell-11591298/', 'Phoenix New Times: oral history of the first Lollapalooza concert')}
${sourceLink('https://www.svt.se/kultur/inget-lollapalooza-i-stockholm-nasta-ar--fkxone', 'SVT: Lollapalooza Stockholm pauses for 2024')}
${sourceLink('https://www.choosechicago.com/articles/festivals-special-events/lollapalooza/', 'Choose Chicago: Lollapalooza Chicago')}
${sourceLink('https://www.billboard.com/photos/lady-gaga-fires-up-lollapalooza-stage-dives-426763/', 'Billboard: Lady Gaga fires up Lollapalooza, stage-dives')}
${sourceLink('https://en.wikipedia.org/wiki/Lollapalooza', 'Wikipedia: Lollapalooza (supporting chronology)')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('lollapalooza-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Lollapalooza Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/lollapalooza.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page lollapalooza-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('lollapalooza-festival.html', html);
console.log('Built lollapalooza-festival.html');
