// Build best-clubs-in-montreal.html from mtl-clubs-draft.md.
//
// Asked for by the owner on 2026-11-09 ("next 3"), third of the amapiano, San
// Francisco and Montreal guides. Research: the clubs entry in TOPIC-DOSSIERS.md
// and a Keyword Planner pass of 2026-11-09 (keywords/mtl-clubs.json). The page
// is about music-first dance clubs, as the Chicago, NYC, LA and SF guides are.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('mtl-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-montreal';
const title = 'Best Clubs in Montreal: Nightclubs for House and Techno';
const description = 'The best clubs in Montreal for house and techno: Stereo, Newspeak, Salon Daom\u00e9, Bar Datcha and New City Gas, plus the Village, Piknic \u00c9lectronik and Igloofest.';
const datePublished = '2026-11-09';
const dateModified = '2026-11-09';
const dateLabel = '9 November 2026';

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

// From Wikimedia Commons, downloaded to img/mtl-clubs/ on 2026-11-09, licences
// checked through the Commons API, used by no other guide. The Canada festivals
// guide's MUTEK and Piknic photos and the winter guide's 2009 Igloofest photo
// are not reused here.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/mtl-clubs/${name}-${width}.webp`,
  srcset: `img/mtl-clubs/${name}-320.webp 320w, img/mtl-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Official, label, artist, festival or club uploads. All checked through
// YouTube oEmbed on 2026-11-09 and embedded by no other guide
// (media/mtl-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from Time Out ("The best clubs in Montreal right now", 15 October
// 2024), Cult MTL (Best of MTL 2026) and Tourisme Montréal (September 2026),
// checked 2026-11-09. Typed, not computed. Revisit every six months.
const media = {
  'Ouimet': video('wOPJ-F16n1Y', 'Disco', 'Robert Ouimet and Pierre Gagnon', 'On Montréal Disco',
    'The Limelight’s resident DJ in conversation for the Red Bull Music Academy.'),
  'Foufounes': figure('foufounes-electriques-2019', 1200, 900,
    'The front of Les Foufounes Électriques on Sainte-Catherine Street East, with its sign above the door',
    'Les Foufounes Électriques at 87 Sainte-Catherine Street East in 2019, open since 1983. Photograph: Jeangagnon, CC BY-SA 4.0.'),
  'Tiga': figure('tiga-2005', 1200, 800,
    'Tiga in a cap and headphones at the decks, lit blue and green',
    'Tiga DJing in 2005. He was throwing parties in Montreal from 1990. Photograph: Scott Sandars, CC BY-SA 2.0.'),
  'Sunglasses at Night': video('l7tNo5S6xEE', 'Electroclash', 'Tiga', 'Sunglasses at Night',
    'The 2001 single that reached No. 23 in the UK.'),
  'Stereo': figure('stereo-montreal-2014', 1200, 790,
    'A wall of red, yellow and black posters at Stereo, listing DJs such as Alan Fitzpatrick, Sam Paganini and Nick Warren',
    'Lineup posters at Stereo in July 2014. Photograph: Tony Webster, CC BY 2.0.'),
  'Sam Paganini Stereo': video('fwae4UmH9zc', 'Techno', 'Sam Paganini', 'Live at Stereo, Montreal',
    'Sam Paganini, one of the names on the poster wall above, recorded at Stereo.'),
  'Markus Schulz Stereo': video('wDwL2aoI5lc', 'Trance', 'Markus Schulz', 'World Tour: Stereo, Montreal, October 2024',
    'Markus Schulz at Stereo, uploaded to his own channel.'),
  'New City Gas': figure('new-city-gas-2017', 1200, 900,
    'The old brick and wood buildings of the New City Gas works in Griffintown, with cranes and the downtown skyline behind',
    'New City Gas in Griffintown in 2017, in a gaslight plant from 1859. Photograph: Jeangagnon, CC BY-SA 4.0.'),
  'SAT': figure('sat-montreal-2011', 1200, 900,
    'The Société des arts technologiques on Saint-Laurent Boulevard, with its dome behind and a cyclist passing',
    'The Société des arts technologiques in 2011, MUTEK’s main venue. Photograph: Jean Gagnon, CC BY-SA 3.0.'),
  'Akufen': video('WwFqfMbaIcI', 'Microhouse', 'Akufen', 'MUTEKLIVE223',
    'Akufen live, from MUTEK Montréal’s own channel.'),
  'Village': figure('village-boules-roses-2016', 900, 1200,
    'Strings of pink balls hung over Sainte-Catherine Street East in the Village, with rainbow flags below',
    'Claude Cormier’s Boules roses over Sainte-Catherine Street East in the Village, 2016. Photograph: art_inthecity, CC BY 2.0.'),
  'Black & Blue': video('sJvQgTE8IGk', 'House', 'Bad Boy Club Montréal', 'Black & Blue 2014: Aftermovie',
    'The 2014 Black & Blue festival, from the foundation’s own channel.'),
  'Piknic': figure('piknic-cattaneo-2026', 1200, 688,
    'The Piknic Électronik stage lit with red and orange laser lines',
    'Hernán Cattáneo at Piknic Électronik in August 2026. Photograph: Sarran Hamilton, CC BY 4.0.'),
  'Inner City': video('7nPDVa3SCyI', 'House', 'Inner City', 'Boiler Room x Piknic Electronik 2022',
    'Inner City at Piknic Électronik, filmed by Boiler Room.'),
  'Igloofest': figure('igloofest-2025', 828, 1200,
    'A packed night crowd at Igloofest under blue and purple lights',
    'Igloofest on New Year’s Eve going into 2025. Photograph: Juliabazin, CC0.'),
  'Danny Daze': video('lQOJC5Z6lzk', 'Electro', 'Danny Daze', 'Boiler Room Montreal: Igloofest',
    'Danny Daze at Igloofest, filmed by Boiler Room.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the end of a Montreal night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Stereo', 'Village', 'After hours from 2am, no alcohol, founded 1998', 'House and techno until morning'],
      ['Newspeak', 'Village', 'First on Time Out’s 2024 list', 'Techno, minimal and deep house'],
      ['Salon Daomé', 'Saint-Laurent', 'Open Tuesday to Sunday', 'House and techno'],
      ['Bar Datcha', 'Mile End', 'Local DJs and Multi Culti nights', 'Underground electronic music'],
      ['Stereobar', 'Village', 'Under Stereo, until 3am', 'The night before Stereo'],
      ['Club Unity', 'Village', 'Two floors and a rooftop', 'Techno and house in the small room'],
      ['New City Gas', 'Griffintown', 'An 1859 gas plant, 40,000 square feet', 'EDM headliners'],
      ['Cabaret Berlin', 'Village', 'Minimal techno, queer goth, Italo disco', 'Alternative nights'],
      ['Système', 'Plaza St-Hubert', 'Third in Cult MTL’s 2026 readers’ poll', 'Dancing'],
      ['Velvet Speakeasy', 'Old Montreal', 'A speakeasy that hosts Igloofest afterparties', 'House and techno']
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
  {id: 'cabarets', heading: 'Cabarets and Prohibition'},
  {id: 'limelight', heading: 'Limelight and Montreal disco'},
  {id: 'foufs', heading: 'Les Foufounes Électriques and the 1990s'},
  {id: 'stereo', heading: 'Stereo'},
  {id: 'best-clubs-now', heading: 'The best clubs in Montreal now'},
  {id: 'techno-house', heading: 'Montreal techno and house music'},
  {id: 'lgbtq', heading: 'Gay Village and LGBTQ+ clubs'},
  {id: 'festivals', heading: 'Montreal festivals: Piknic, Igloofest and MUTEK'},
  {id: 'where-to-go', heading: 'Where to go out in Montreal'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Montreal clubs',
    title: 'The best clubs in Montreal, from the Limelight to Stereo',
    deck: 'Montreal has been a party town since Prohibition, and its most famous club opens at 2am. In summer and winter the dance floor moves outdoors.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Montreal', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A party town since the 1920s.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Montreal clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.timeout.com/montreal/nightlife/best-clubs-in-montreal', 'Time Out: The best clubs in Montreal right now (2024)')}
${sourceLink('https://cultmtl.com/2026/10/best-clubs-nightclubs-in-montreal/', 'Cult MTL: Best of MTL 2026, best nightclub')}
${sourceLink('https://www.mtl.org/en/experience/get-your-nightlife-montreal', 'Tourisme Montr\u00e9al: The ultimate guide to nightlife in Montr\u00e9al')}
${sourceLink('https://6amgroup.com/articles/all/40-best-house-techno-clubs-in-north-america', '6AM: 40 best house and techno clubs in North America')}
${sourceLink('https://en.wikipedia.org/wiki/History_of_Montreal_cabarets', 'Wikipedia: History of Montreal cabarets')}
${sourceLink('https://en.wikipedia.org/wiki/Limelight_(Montreal)', 'Wikipedia: Limelight (Montreal)')}
${sourceLink('https://en.wikipedia.org/wiki/Les_Foufounes_%C3%89lectriques', 'Wikipedia: Les Foufounes \u00c9lectriques')}
${sourceLink('https://en.wikipedia.org/wiki/Tiga_(musician)', 'Wikipedia: Tiga')}
${sourceLink('https://en.wikipedia.org/wiki/Stereo_nightclub', 'Wikipedia: Stereo nightclub')}
${sourceLink('https://en.wikipedia.org/wiki/Angel_Moraes', 'Wikipedia: Angel Moraes')}
${sourceLink('https://en.wikipedia.org/wiki/Gay_Village,_Montreal', 'Wikipedia: Gay Village, Montreal')}
${sourceLink('https://en.wikipedia.org/wiki/Bad_Boy_Club_Montr%C3%A9al', 'Wikipedia: Bad Boy Club Montr\u00e9al')}
${sourceLink('https://en.wikipedia.org/wiki/Piknic_%C3%89lectronik', 'Wikipedia: Piknic \u00c9lectronik')}
${sourceLink('https://en.wikipedia.org/wiki/Igloofest', 'Wikipedia: Igloofest')}
${sourceLink('https://en.wikipedia.org/wiki/MUTEK', 'Wikipedia: MUTEK')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-montreal.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Montreal', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-montreal'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/mtl-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page mtl-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-montreal.html', html);
console.log('Built best-clubs-in-montreal.html');
