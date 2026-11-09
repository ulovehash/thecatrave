// Build amapiano-guide.html from amapiano-guide-draft.md.
//
// Asked for by the owner on 2026-11-09 ("next 3"), first of the amapiano,
// San Francisco clubs and Montreal clubs guides. Research: Wikipedia
// (Amapiano and the song and artist pages), Red Bull (2024), the Evening
// Standard (2024) and Mixmag (2024). Volumes are in keywords/amapiano.json:
// Keyword Planner ranges and the Ahrefs US points for three terms, labelled
// per term and never merged.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('amapiano-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/amapiano-guide';
const title = 'What Is Amapiano? South African House Music, Songs, Artists';
const description = 'What amapiano is: the log drum and the pianos, where it came from, how it spread, the dance, the styles, the best amapiano songs and the artists.';
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

// From Wikimedia Commons, downloaded to img/amapiano/ on 2026-11-09,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/amapiano/${name}-${width}.webp`,
  srcset: `img/amapiano/${name}-320.webp 320w, img/amapiano/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Records from the label's or artist's own channel, sets from Boiler Room
// and Piano People. All checked through YouTube oEmbed on 2026-11-09 and
// embedded by no other guide (media/amapiano.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const stylesTable = articleTable({
  label: 'Amapiano styles',
  headers: ['Style', 'Where', 'What marks it', 'A record or name to know'],
  rows: [
    ['Private school piano', 'South Africa', 'Soulful: shakers, mellow log drums, progressive chords, live guitar, sax, violin and trumpet', 'Kelvin Momo'],
    ['Quantum sound', 'South Africa', 'Re-edits rooted in the taxi kick of gqom', 'RealShaunMusiq, Sizwe Nineteen, Nandipha808'],
    ['New age bacardi', 'Pretoria, about 2021', 'Amapiano merged with Pretoria\'s bacardi house', 'Mellow & Sleazy, "Trust Fund"'],
    ['Popiano', 'South Africa', 'Pop songwriting over amapiano', 'Kooldrink, DJ Lag and Tyla, "Overdue"'],
    ['Bique', 'Mozambique', 'Amapiano made in Mozambique', 'FOI and Jay Music, "Bique (Deep Groove)"'],
    ['Afropiano', 'Nigeria', 'Afrobeats artists on amapiano rhythms', 'Clemzy, L.A.X.'],
    ['Bongopiano', 'Tanzania', 'Bongo flava stars on amapiano', 'Diamond Platnumz, Marioo, Harmonize'],
    ['Ojapiano', 'Nigeria', 'Named after Kcee\'s record', 'Kcee']
  ]
});

const media = {
  'minibus taxi': figure('minibus-taxi-maboneng-2017', 1200, 846,
    'A white minibus taxi parked on a street in Maboneng, Johannesburg',
    'A minibus taxi in Maboneng, Johannesburg, December 2017. Photograph: Shade Schutze Photography, CC BY-SA 4.0.'),
  'Tyla': figure('tyla-montreux-2026', 1200, 800,
    'Tyla performing on stage at the Montreux Jazz Festival',
    'Tyla at the Montreux Jazz Festival, 2026. Photograph: Janeirohy, CC BY-SA 4.0.'),
  'Focalistic': figure('focalistic-2020', 840, 1080,
    'Focalistic, photographed in 2020',
    'Focalistic in 2020. Photograph: Michael\'s World, CC BY 3.0.'),
  'Kamo Mphela': figure('kamo-mphela-2021', 681, 450,
    'Kamo Mphela at the South African Music Awards, 2021',
    'Kamo Mphela at the South African Music Awards, 2021. Photograph: Alison DiLaurentis 1995, CC BY 4.0.'),
  'Sha Sha': figure('sha-sha-2020', 965, 999,
    'Sha Sha, photographed in 2020',
    'Sha Sha in 2020. Photograph: Plus TV Africa, CC BY 3.0.'),
  'Uncle Waffles': figure('uncle-waffles-2022', 736, 920,
    'Uncle Waffles, photographed in 2022',
    'Uncle Waffles in April 2022. Photograph: Musiclaborotry, CC BY-SA 4.0.'),
  'styles': stylesTable,
  'Down The Drain': video('U2jOEbs0uXM', 'Amapiano', 'Njelic and Thabza Tee', 'Down The Drain',
    'The log drum arrives after two minutes. From Njelic\'s channel.'),
  'Iskhathi': video('HK4LBA7zhlg', 'Amapiano', 'Kwiish SA', 'Iskhathi (Gong Gong)',
    'One of the records Mixmag names behind "Getting Late", from Africori\'s channel.'),
  'Love You Tonight': video('23A5UkCRCWg', 'Amapiano', 'MFR Souls featuring DJ Maphorisa, Sha Sha and Kabza De Small', 'Love You Tonight',
    'A Platinum record for the Katlehong duo, from MFR Souls\' channel.'),
  'Champion Sound': video('i-J0Fdze42M', 'Amapiano', 'Davido and Focalistic', 'Champion Sound',
    'The Nigeria and Pretoria collaboration, from Davido\'s channel.'),
  'DBN Gogo London': video('isYm52A9WFQ', 'Amapiano', 'DBN Gogo', 'Boiler Room SYSTEM: Amapiano London',
    'DBN Gogo at Boiler Room\'s amapiano night in London.'),
  'Getting Late': video('v6Tct3AAre0', 'Amapiano', 'Tyla featuring Kooldrink', 'Getting Late',
    'For many Europeans the first amapiano record, from Tyla\'s channel.'),
  'Water': video('XoiOOiuH8iI', 'Amapiano', 'Tyla', 'Water, 2023',
    'The record that put amapiano on the Billboard Hot 100, from Tyla\'s channel.'),
  'Overdue': video('uUNdhnMEZs0', 'Popiano', 'Tyla featuring DJ Lag and Kooldrink', 'Overdue, 2021',
    'Wikipedia\'s example of popiano, from Tyla\'s channel.'),
  'Soundcheck': video('Yuw9nuXDFIo', 'Amapiano', 'Vigro Deep', 'Soundcheck',
    'From one of amapiano\'s pioneering DJs.'),
  'Khuza Gogo': video('V0bL57BDMlo', 'Amapiano', 'DBN Gogo', 'Khuza Gogo',
    'A Platinum record, from DBN Gogo\'s channel.'),
  'Tanzania': video('WvxADzZMkEI', 'Amapiano', 'Uncle Waffles', 'Tanzania',
    'Uncle Waffles\' debut single, seven times Platinum, from her channel.'),
  'Adiwele': video('kjgzYp1Cm4Y', 'Amapiano', 'Young Stunna', 'Adiwele',
    'One of Young Stunna\'s best-known songs, from his channel.'),
  'Funa': video('TMTZhgdmzaM', 'Private school piano', 'Kelvin Momo featuring TBO and JaySax', 'Funa',
    'From the producer credited with private school piano, from Africori\'s channel.'),
  'Scorpion Kings Boiler Room': video('kDU9EsWkdl8', 'Amapiano', 'Scorpion Kings', 'Boiler Room x Ballantine\'s True Music 10: Johannesburg',
    'Kabza De Small and DJ Maphorisa at Boiler Room in Johannesburg.'),
  'Kelvin Momo Boiler Room': video('IlhMotZOKmo', 'Private school piano', 'Kelvin Momo', 'Boiler Room x Ballantine\'s True Music Studios: Johannesburg',
    'Kelvin Momo at Boiler Room in Johannesburg.'),
  'Scorpion Kings Piano People': video('snJYwbJuftY', 'Amapiano', 'Scorpion Kings', 'Live at Piano People, highlights',
    'Kabza De Small and DJ Maphorisa at a Piano People party, from Piano People\'s channel.')
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (p.startsWith('### ')) return `<h3>${inline(p.slice(4))}</h3>`;
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
  {id: 'sound', heading: 'What amapiano sounds like'},
  {id: 'meaning', heading: 'What amapiano means'},
  {id: 'origins', heading: 'Where amapiano came from'},
  {id: 'spread', heading: 'How amapiano spread'},
  {id: 'abroad', heading: 'Amapiano in London and abroad'},
  {id: 'dance', heading: 'The amapiano dance'},
  {id: 'styles', heading: 'Amapiano styles'},
  {id: 'best-songs', heading: 'The best amapiano songs'},
  {id: 'artists', heading: 'Amapiano artists'},
  {id: 'house', heading: 'Amapiano or house music'},
  {id: 'where-to-start', heading: 'Where to start with amapiano'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Amapiano',
    title: 'What is amapiano? South African house music, the songs and the artists',
    deck: 'Pianos, a rolling log drum and a tempo set so nobody has to sweat: the township sound that went from WhatsApp groups and minibus taxis to the Billboard Hot 100.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is amapiano', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The pianos.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Amapiano FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Amapiano', 'Wikipedia: Amapiano')}
${sourceLink('https://www.redbull.com/za-en/amapiano-history', "Red Bull: Amapiano history, South Africa's unique music genre, Themba Kriger, 2024")}
${sourceLink('https://ca.news.yahoo.com/amapiano-guide-music-sensation-sweeping-165638898.html', 'Evening Standard (via Yahoo): Amapiano, our guide to the music sensation sweeping the world, El Hunt, 2024')}
${sourceLink('https://mixmag.net/feature/amapiano-second-wave-south-africa-apartheid-kwaito-evolution-series', "Mixmag: Amapiano's second wave, how kwaito opened the door for amapiano's evolutions, Jake Colvin, 2024")}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('amapiano-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Amapiano', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/amapiano-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/amapiano.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page amapiano-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('amapiano-guide.html', html);
console.log('Built amapiano-guide.html');
