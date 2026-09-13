// Build edc-las-vegas.html from edc-draft.md.
//
// Second guide of the festivals series (festivals-series.md), after Burning
// Man and Tomorrowland. The structure and the evidence behind it are in
// edc-research.md.
//
// Keywords: edc las vegas 20,000 a month (US, TP 75,000), electric daisy
// carnival 2,400, edc vegas 2,300, edc mexico 2,200, what is edc las vegas
// 1,100. Lineups, dated editions, ticket giveaways and outfits are excluded on
// purpose, and the everyday-carry collision gets one line. See
// keywords/edc.json.
//
// The catalogue behind the Selector holds Mixmag's 2016 Lab sets from the
// festival, but not on the festival's or an artist's own channel, so the
// players come from Insomniac's and Sub Focus's own YouTube channels.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines, so placement is decided in the draft and only rendered
// here. A placeholder with no matching asset fails the build, and so does an
// asset with no placeholder.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('edc-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/edc-las-vegas';
const title = 'EDC Las Vegas: What It Is, How Big, and the Music';
const description = 'Electric Daisy Carnival at the Las Vegas Motor Speedway: what EDC is, how many people go, how it left Los Angeles, and what plays beyond kineticFIELD.';
const date = '2026-09-13';
const dateLabel = '13 September 2026';

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

// All five from Wikimedia Commons, downloaded to img/edc/, used by no other
// guide. Licences checked against the Commons API on 2026-09-13.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/edc/${name}-${width}.webp`,
  srcset: `img/edc/${name}-320.webp 320w, img/edc/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-13.
const media = {
  'EDC2024 Overview': figure('overview-2024', 1200, 521,
    'A wide view of the EDC Las Vegas grounds at night, stages and rides lit up inside the speedway',
    'The festival grounds inside the Las Vegas Motor Speedway in 2024: stages, rides and art spread across the infield. Photograph: Eric Polk, CC BY-SA 4.0.'),
  'EDC Mexico 2023': figure('mexico-2023', 1200, 800,
    'The main stage at EDC Mexico in 2023, a large themed stage above the crowd at the Mexico City racetrack',
    'The main stage at EDC Mexico in 2023, at the Autódromo Hermanos Rodríguez. Photograph: Ludovic Delot, CC BY-SA 4.0.'),
  'Electric Daisy Carnival 2011': figure('las-vegas-2011', 1200, 900,
    'The cosmicMEADOW stage in the foreground and kineticFIELD behind it at EDC Las Vegas in 2011',
    'The first Las Vegas edition, 2011: cosmicMEADOW in front, kineticFIELD behind. Photograph: Roman Fuchs, CC BY-SA 3.0.'),
  'EDC2024 Kinetic Field Tiesto': figure('kinetic-field-2024', 1200, 900,
    'kineticFIELD at night during Tiësto\'s set at EDC Las Vegas 2024, the stage lit above a packed crowd',
    'kineticFIELD during Tiësto\'s set in 2024. Photograph: Eric Polk, CC BY-SA 4.0.'),
  'Camo&Krooked': figure('camo-krooked-2014', 1200, 471,
    'Camo & Krooked seen from behind the decks at EDC Las Vegas in 2014, flame cannons over a large crowd',
    'Camo & Krooked at EDC Las Vegas in 2014, the year they were booked on bassPOD, the stage Bassrush hosts for drum and bass and dubstep. Photograph: Uafmusic VIE, CC BY-SA 4.0.'),
  // The closing listening: drum and bass on the main stage, and the rave act the
  // music section argues for, both from 2026.
  'RwEV5Mo7fY8': articleVideoCollection({
    label: 'EDC Las Vegas 2026',
    description: 'Two full sets from the stages this guide argues for: Sub Focus playing drum and bass on kineticFIELD, from his own channel, and Underworld on cosmicMEADOW, from Insomniac\'s. Both from the 30th anniversary in 2026.',
    items: [
      articleVideoCard({youtubeId: 'RwEV5Mo7fY8', genre: 'kineticFIELD, 2026', artist: 'Sub Focus', title: 'EDC Las Vegas 2026'}),
      articleVideoCard({youtubeId: '4wzyC3J6-NU', genre: 'cosmicMEADOW, 2026', artist: 'Underworld', title: 'Live at EDC Las Vegas 2026'})
    ]
  }),
  // Attendance, from Wikipedia and 2026 reports (Beatportal). Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Attendance', 'Where, and what happened'],
    rows: [
      ['1991', '3,500', 'Chino, California: Stephen Hauptfuhr\'s first Electric Daisy Carnival'],
      ['2000', '24,000', 'Tulare, California; noise complaints ended the contract'],
      ['2010', 'about 185,000', 'Los Angeles Memorial Coliseum, two days'],
      ['2011', '230,000 (reported)', 'First year at the Las Vegas Motor Speedway, three days'],
      ['2012', '320,000', ''],
      ['2014', '345,000 tickets', 'All sold before the gates opened'],
      ['2018', 'about 411,400', 'First year in May; camping added'],
      ['2019', '465,000', ''],
      ['2020', 'none', 'Cancelled for the pandemic'],
      ['2023', '525,000', 'The record'],
      ['2026', 'more than 500,000', '30th anniversary, sold out']
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
  {id: 'where', heading: 'Where EDC Las Vegas happens', title: 'Where EDC Las Vegas happens.', subsections: ['orlando', 'mexico', 'abroad']},
  {id: 'how-big', heading: 'How big EDC Las Vegas is', title: 'How big EDC Las Vegas is.'},
  {id: 'history', heading: 'A short history, and who owns EDC', title: 'A short history, and who owns EDC.'},
  {id: 'famous', heading: 'Why EDC got so famous', title: 'Why EDC got so famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing EDC from home', title: 'Hearing EDC from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker,
  bodyHtml: s.subsections ? renderWithSubsections(getSection(s.heading), s.subsections) : render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

// Until the page has its catalogue entry in home-articles.mjs, relatedArticles()
// does not know it and throws, and readNext() refuses an empty list. Borrow the
// Tomorrowland guide's list with a warning, so the page can be checked before
// the shared files are edited; the full build runs with the entry in place.
let related;
try {
  related = relatedArticles('edc-las-vegas.html');
} catch (error) {
  console.warn(`Read Next borrowed from the Tomorrowland guide: ${error.message}. Add the catalogue entry to home-articles.mjs.`);
  related = relatedArticles('tomorrowland-festival.html');
}

const articleHtml = [
  articleHero({
    kicker: 'Electric Daisy Carnival',
    title: 'EDC Las Vegas',
    deck: 'Three nights at a racetrack in the desert, and more people than any other electronic music festival. Where it happens, how big it really is, who owns it, and what plays away from kineticFIELD.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is EDC Las Vegas', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The biggest night out in the desert.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'EDC Las Vegas FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Electric_Daisy_Carnival', 'Wikipedia: Electric Daisy Carnival')}
${sourceLink('https://en.wikipedia.org/wiki/Insomniac_(promoter)', 'Wikipedia: Insomniac (promoter)')}
${sourceLink('https://www.beatportal.com/articles/1422831-edc-las-vegas-to-split-into-two-consecutive-weekends-in-2027', 'Beatportal: EDC Las Vegas to Split Into Two Consecutive Weekends in 2027')}
${sourceLink('https://djmag.com/news/edc-las-vegas-expands-12-days-and-two-full-weekends-2027', 'DJ Mag: EDC Las Vegas expands to 12 days and two full weekends in 2027')}
${sourceLink('https://djmag.com/news/edc-las-vegas-2026-full-line-announced', 'DJ Mag: EDC Las Vegas 2026 full line-up announced')}
${sourceLink('https://djmag.com/news/heres-how-stream-edc-las-vegas-2026-home', "DJ Mag: Here's how to stream EDC Las Vegas 2026 from home")}
${sourceLink('https://weraveyou.com/2026/05/the-prodigy-edc-las-vegas-2026-first-time-cosmicmeadow/', 'We Rave You: The Prodigy to play EDC Las Vegas for the first time ever')}
${sourceLink('https://raverrafting.com/epic-stages-edc-las-vegas-2014/2014/07/16/', 'RaverRafting: The Epic Stages of EDC Las Vegas 2014')}
${sourceLink('https://discotech.me/festivals/guide-to-edc-las-vegas-stages/', 'Discotech: Guide to EDC Las Vegas Stages')}
${sourceLink('https://mymodernmet.com/edc-2026-recap/', 'My Modern Met: EDC 2026, Half a Million People Under One Electric Sky')}
${sourceLink('https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', 'Bandwagon: Tomorrowland Belgium 2026 wraps with 400,000 fans')}
${sourceLink('https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', 'Las Vegas Weekly: Insomniac and Tomorrowland go b2b for Unity at Sphere')}
${sourceLink('https://www.youtube.com/watch?v=QjaVBJJ7xhE', 'Mixmag on YouTube: Rusko (jungle set) in The Lab at EDC Las Vegas')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The drum and bass on bassPOD and the breakbeat The Prodigy brought to cosmicMEADOW come out of the same breaks and bass lineage as my own music. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: related})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'EDC Las Vegas', canonical}),
  faqStructuredData({items: faqItems})
];

// The social card is drawn by scripts/build-og-cards.py once the page is in
// pages.mjs. Until then, point at the kineticFIELD photograph, with a warning.
const ogFile = fs.existsSync('img/og/edc.jpg') ? 'img/og/edc.jpg' : 'img/edc/kinetic-field-2024-1200.webp';
if (ogFile !== 'img/og/edc.jpg') console.warn('img/og/edc.jpg missing: run scripts/build-og-cards.py after adding the page to pages.mjs.');

const html = articlePage({
  title, description, canonical,
  ogImage: `https://thecatrave.com/${ogFile}`,
  datePublished: date, dateModified: date,
  bodyClass: 'article-page edc-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('edc-las-vegas.html', html);
console.log('Built edc-las-vegas.html');
