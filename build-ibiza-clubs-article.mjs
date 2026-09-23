// Build best-clubs-in-ibiza.html from ibiza-clubs-draft.md.
//
// Asked for by the owner on 2026-09-23, with the Amsterdam clubs, Europe
// clubbing cities and New Year's Eve festivals pages. Research package:
// ibiza-clubs-research.md and the "Клубные города (волна 2)" entry in
// TOPIC-DOSSIERS.md. Volumes are Google Ads Keyword Planner ranges (All
// locations), recorded in keywords/ibiza-clubs.json. Stage 6 was not run as a
// separate pass: the owner approved writing all four on the packages.
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

const draft = withCatalogue(fs.readFileSync('ibiza-clubs-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-ibiza';
const title = "Best Clubs in Ibiza: Pacha, Amnesia, H\u00ef and the Rest";
const description = "H\u00ef, Pacha, Amnesia, DC-10, Ushua\u00efa and [UNVRS]: the best clubs in Ibiza now, the ones that closed, where to stay and when the season runs.";
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

// From Wikimedia Commons, downloaded to img/ibiza-clubs/ on 2026-09-23,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/ibiza-clubs/${name}-${width}.webp`,
  srcset: `img/ibiza-clubs/${name}-320.webp 320w, img/ibiza-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Each video is in the Selector catalogue and was checked for embedding
// through YouTube oEmbed on 2026-09-23. None is embedded by another guide.
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Club facts from Wikipedia, Ibiza Spotlight, Resident Advisor and Mixmag,
// checked 2026-09-23. Typed, not computed. Revisit every season.
const media = {
  'Pacha entrance': figure('pacha-entrance', 1200, 675,
    'The white entrance of Pacha in Ibiza Town with its red lettering',
    'Pacha, open in Ibiza Town since June 1973, photographed in 2018. Photograph: Dominic Milton Trott, CC BY 2.0.'),
  'Privilege pool': figure('privilege-pool', 1200, 896,
    'The DJ booth of Privilege Ibiza above the pool in the middle of the dancefloor, lit blue',
    'Privilege in 2014, with the booth above the pool. Guinness listed it as the largest nightclub in the world; it closed after 2019 and reopened as [UNVRS] in 2025. Photograph: Rauletemunoz, CC BY-SA 3.0.'),
  'Solomun Pacha': video('vbWFtk0JnqE', 'House', 'Solomun and Andhim', 'Pacha, Ibiza, 2014',
    'Solomun and Andhim at Pacha in 2014, filmed by Mixmag.'),
  'Sven Vath Cocoon Pacha': video('y37cDo_CTu4', 'Techno', 'Sven Väth', 'Cocoon, Pacha, 2018',
    "Sven Väth, whose Cocoon party Amnesia hosts, playing a Cocoon night at Pacha in 2018, filmed by Mixmag."),
  'Nicole Moudaber Space': video('bSto8j4ziCg', 'Techno', 'Nicole Moudaber', 'Music Is Revolution, Space, Ibiza, 2014',
    'Nicole Moudaber at Space in 2014, two years before it closed, filmed by Mixmag.'),
  'Fanciulli Voorn Ushuaia': video('yvG85jBbjaE', 'Tech house', 'Nic Fanciulli and Joris Voorn', 'ANTS, Ushuaïa, Ibiza, 2014',
    'Nic Fanciulli and Joris Voorn at ANTS in Ushuaïa, the open-air club, in 2014, filmed by Mixmag.'),
  'Jamie Jones Ibiza villa': video('AGdA7cmSkFk', 'House', 'Jamie Jones', 'Boiler Room Ibiza Villa Takeovers, 2013',
    "Jamie Jones for Boiler Room's Ibiza Villa Takeovers in 2013, on Boiler Room's own channel."),
  'thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Open since', 'Known for'],
    rows: [
      ['Hï Ibiza', "Playa d'en Bossa", '2017, on the Space site', 'DJ Mag readers\' number one club, 2022 to 2025'],
      ['Pacha', 'Ibiza Town', '1973', 'The oldest club brand on the island, first opened in Sitges in 1967'],
      ['Amnesia', 'San Rafael', '1976', 'Main room and terrace for around 5,000; its fiftieth season in 2026'],
      ['DC-10', 'Salinas road', '1999', 'Circoloco on Mondays'],
      ['Ushuaïa', "Playa d'en Bossa", '2011', 'An open-air club in a hotel, finishing at 11pm'],
      ['[UNVRS]', 'San Rafael', '2025, on the Privilege site', 'Billed as the first hyperclub, capacity 10,000'],
      ['Es Paradis', 'San Antonio', 'One of the oldest on the island', 'The club in San Antonio']
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
  {id: 'pacha-and-amnesia', heading: 'Pacha and Amnesia: the first two'},
  {id: 'clubs-that-closed', heading: 'The clubs that closed: Ku, Privilege and Space'},
  {id: 'best-clubs-now', heading: 'The best clubs in Ibiza now'},
  {id: 'where-to-stay', heading: 'Where in Ibiza to stay for clubbing'},
  {id: 'season', heading: 'The Ibiza season: opening and closing'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Ibiza clubs',
    title: 'The best clubs in Ibiza: Pacha, Amnesia, Hï and the rest',
    deck: 'Two clubs from the 1970s, two that closed and came back under new names, and the best clubs in Ibiza for the season ahead.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Ibiza', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A season, not a city.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: "Ibiza clubs FAQ.", openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.ibiza-spotlight.com/magazine/2023/07/10-surprising-facts-about-pacha-ibiza', 'Ibiza Spotlight: 10 surprising facts about Pacha Ibiza')}
${sourceLink('https://en.wikipedia.org/wiki/The_Pacha_Group', 'Wikipedia: The Pacha Group')}
${sourceLink('https://ra.co/news/14731', 'Resident Advisor: Get to know Amnesia and Pacha')}
${sourceLink('https://en.wikipedia.org/wiki/Amnesia_(nightclub)', 'Wikipedia: Amnesia (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/Privilege_Ibiza', 'Wikipedia: Privilege Ibiza')}
${sourceLink('https://en.wikipedia.org/wiki/Space_(Ibiza_nightclub)', 'Wikipedia: Space (Ibiza nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/H%C3%AF_Ibiza', 'Wikipedia: Hï Ibiza')}
${sourceLink('https://en.wikipedia.org/wiki/DC10_(nightclub)', 'Wikipedia: DC10 (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/Ushua%C3%AFa_Ibiza', 'Wikipedia: Ushuaïa Ibiza')}
${sourceLink('https://ra.co/news/81114', 'Resident Advisor: Ibiza club Privilege to reopen in 2025 as [UNVRS]')}
${sourceLink('https://mixmag.net/read/privilege-unvrs-ibiza-white-isle-night-league-will-smith-ufo-news', 'Mixmag: New Ibiza club [UNVRS] will open on former Privilege site in 2025')}
${sourceLink('https://www.dirtydiscoradio.com/best-ibiza-clubs', 'Dirty Disco: The Best Ibiza Clubs in 2026')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-ibiza.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: "Best Clubs in Ibiza", canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-ibiza'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/ibiza-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page ibiza-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-ibiza.html', html);
console.log('Built best-clubs-in-ibiza.html');
