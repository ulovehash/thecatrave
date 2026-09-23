// Build new-years-eve-festivals.html from nye-festivals-draft.md.
//
// Asked for by the owner on 2026-09-23 as the seasonal festival angle that
// survives: the winter, spring, summer and autumn roundups were rejected on
// 2026-09-22 because their search results carry no dance music, while New
// Year's Eve results do. Research package: nye-festivals-research.md and the
// "Клубные города (волна 2)" entry in TOPIC-DOSSIERS.md. Volumes are Google
// Ads Keyword Planner ranges (All locations), recorded in
// keywords/nye-festivals.json. The dated block is registered in
// festival-editions.mjs and moves to the next New Year every year (owner,
// 14 September 2026). Stage 6 was not run as a separate pass.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('nye-festivals-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/new-years-eve-festivals';
const title = "Best New Year's Eve Festivals 2026 into 2027";
const description = "Countdown NYE, Decadence, HiJinx, Rhythm and Vines and Awakenings: the best New Year's Eve festivals for dance music in 2026, with dates and where they are.";
const datePublished = '2026-09-23';
const dateModified = '2026-09-23';
const dateLabel = '23 September 2026';

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

// From Wikimedia Commons, downloaded to img/nye-festivals/ on 2026-09-23,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nye-festivals/${name}-${width}.webp`,
  srcset: `img/nye-festivals/${name}-320.webp 320w, img/nye-festivals/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Each video is in the Selector catalogue and was checked for embedding
// through YouTube oEmbed on 2026-09-23. None is embedded by another guide.
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Dates from each festival's own site or press release, read 2026-09-23.
// Typed, not computed: the table moves to the next New Year every year, and
// festival-editions.mjs reminds on every build once 1 January 2027 has passed.
const checkSite = 'Check the site';
const media = {
  'Awakenings NYE': figure('awakenings-gashouder-nye-2017', 1200, 900,
    'Red light beams and a lit rig over the crowd inside the Gashouder at Awakenings in Amsterdam',
    'Awakenings in the Gashouder, Amsterdam, on 31 December 2017. Photograph: Ank Kumar, CC BY-SA 4.0.'),
  'Countdown NYE 2024': video('hCP_UosWZlI', 'Festival film', 'Insomniac', 'Countdown NYE 2024',
    "Insomniac's own film of Countdown NYE 2024, on Insomniac's channel."),
  'Tinlicker Concourse NYE': video('cd6buYLu5b0', 'Electronic', 'Tinlicker', 'The Concourse Project, Austin, New Year\'s Eve 2024',
    "Tinlicker's New Year's Eve 2024 set at The Concourse Project in Austin, on the venue's own channel."),
  'Awakenings NYE 2013': video('OtLn2sm0bP0', 'Techno', 'Adam Beyer and Joseph Capriati', 'Awakenings NYE Special, Gashouder, 31 December 2013',
    "Adam Beyer and Joseph Capriati at the Gashouder on New Year's Eve 2013, on Awakenings' own channel."),
  'Rhythm and Vines 2025': video('26R8sSY7tJ4', 'Festival film', 'Rhythm and Vines', 'Rhythm and Vines 2025 aftermovie',
    "The festival's own film of Rhythm and Vines 2025, near Gisborne."),
  'Beyond the Valley 2022': video('AkKskQ_VnwY', 'Festival film', 'Beyond the Valley', 'Beyond the Valley 2022 aftermovie',
    "The festival's own film of Beyond the Valley 2022."),
  'thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1),
  'Table: festivals': articleTable({
    headers: ['Festival', 'Where', "New Year's Eve 2026", 'Sound'],
    rows: [
      ['Countdown NYE', 'NOS Events Center, San Bernardino, California', '31 December 2026 and 1 January 2027', "Insomniac's EDM, five covered stages"],
      ['Decadence NYE', 'Colorado Convention Center, Denver, and Arizona', '30 and 31 December', 'EDM'],
      ['HiJinx', 'Pennsylvania Convention Center, Philadelphia', '30 and 31 December 2026', 'Bass music'],
      ['CRSSD Proper NYE', 'Petco Park, San Diego', '31 December 2026, 3pm, to 1 January 2027, 10pm', 'House, with This Never Happened and Daisy Chain'],
      ['Lights All Night', 'Dallas Market Hall, Texas', checkSite, 'EDM'],
      ['Eternal NYE', 'Orlando, Florida', checkSite, 'Bass music'],
      ['Awakenings NYE', 'Gashouder, Amsterdam', checkSite, 'Techno'],
      ['Rhythm and Vines', 'Waiohika Estate, Gisborne, New Zealand', checkSite, 'Camping festival'],
      ['Beyond the Valley', 'Near Melbourne, Australia', checkSite, 'Multi-day festival, several stages'],
      ['Field Day', 'The Domain, Sydney', '1 January 2027', 'Hip-hop, house, indie and electronic']
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
  {id: 'dates', heading: "New Year's Eve 2026: the festivals and their dates"},
  {id: 'united-states', heading: 'NYE festivals in the United States'},
  {id: 'europe', heading: "New Year's Eve in Europe: the clubs"},
  {id: 'australia-new-zealand', heading: 'Australia and New Zealand: New Year in summer'},
  {id: 'choose', heading: "How to choose a New Year's Eve festival"}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: "New Year's Eve",
    title: "The best New Year's Eve festivals, 2026 into 2027",
    deck: 'Two-night raves in American convention centres, summer camping festivals in New Zealand and Australia, and the clubs that own the night in Europe.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: "New Year's Eve festivals", bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Summer in one hemisphere, winter in the other.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: "New Year's Eve festivals FAQ.", openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://press.insomniac.com/blog/countdown-nye-will-expand-to-two-days-and-return-to-nos-event-center-for-2026-festival', 'Insomniac: Countdown NYE will expand to two days and return to NOS Event Center for 2026')}
${sourceLink('https://countdownnye.com/', 'Countdown NYE')}
${sourceLink('https://www.westword.com/music/decadence-colorado-2026-full-denver-lineup-40924879/', 'Westword: Decadence NYE 2026 drops full Denver lineup')}
${sourceLink('https://decadencenye.com/', 'Decadence NYE')}
${sourceLink('https://ra.co/events/310275', 'Resident Advisor: Decadence New Years Eve, Colorado Convention Center, 2011')}
${sourceLink('https://hijinxfest.com/', 'HiJinx Festival')}
${sourceLink('https://www.propernye.com/', 'CRSSD Proper NYE')}
${sourceLink('https://www.petcoparkinsider.com/crssd-proper', 'Petco Park Insider: CRSSD Proper NYE 2026 / NYD 2027')}
${sourceLink('https://www.dmagazine.com/arts-entertainment/2020/01/ten-years-in-lights-all-night-endures/', 'D Magazine: Ten Years In, Lights All Night Endures')}
${sourceLink('https://www.eternalnye.com/', 'Eternal NYE')}
${sourceLink('https://en.wikipedia.org/wiki/Awakenings_(festival)', 'Wikipedia: Awakenings (festival)')}
${sourceLink('https://www.nzherald.co.nz/gisborne-herald/news/caught-on-camera-rhythm-and-vines-over-the-years/SWYASJNH55HPVM7PU6HKS3YUQA/', 'NZ Herald: Rhythm and Vines over the years')}
${sourceLink('https://en.wikipedia.org/wiki/Rhythm_%26_Vines', 'Wikipedia: Rhythm & Vines')}
${sourceLink('https://www.outlooktraveller.com/destinations/international/countdown-to-2026-the-best-new-years-eve-festivals-and-celebrations-across-new-zealand', "Outlook Traveller: New Year's Eve festivals across New Zealand")}
${sourceLink('https://en.wikipedia.org/wiki/Beyond_the_Valley', 'Wikipedia: Beyond the Valley')}
${sourceLink('https://www.jonesaroundtheworld.com/new-years-eve/', 'Jones Around the World: The 12 Best New Years Eve Music Festivals in Australia')}
${sourceLink('https://mixesdb.com/w/2024-12-31_-_Tinlicker_@_NYE,_The_Concourse_Project,_Austin,_USA', 'Mixes DB: Tinlicker at The Concourse Project, Austin, 31 December 2024')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('new-years-eve-festivals.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: "New Year's Eve Festivals", canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/new-years-eve-festivals'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/nye-festivals.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page nye-festivals-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('new-years-eve-festivals.html', html);
console.log('Built new-years-eve-festivals.html');
