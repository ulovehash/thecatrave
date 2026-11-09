// Build gabber-guide.html from gabber-guide-draft.md.
//
// Asked for by the owner on 2026-11-09 ("lets create first 3 ... 1 by 1"),
// first of the gabber, italo disco and Brazilian funk guides. Research: the
// gabber entry in TOPIC-DOSSIERS.md, Wikipedia (Gabber, Hardcore (electronic
// dance music), Happy hardcore, Paul Elstak, Marc Acardipane) and the Guardian's
// 2019 Thunderdome history. Volumes are in keywords/gabber.json: Keyword Planner
// ranges and Ahrefs US points, labelled per term and never merged. Happy
// hardcore is folded in as a section rather than a page of its own.
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

const draft = fs.readFileSync('gabber-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/gabber-guide';
const title = 'What Is Gabber? Gabber Music, Hardcore Techno and Happy Hardcore';
const description = 'What gabber is: Rotterdam hardcore techno, Thunderdome, the gabber look and hakken, happy hardcore, gabber vs hardstyle, and where to start.';
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

// From Wikimedia Commons, downloaded to img/gabber/ on 2026-11-09,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/gabber/${name}-${width}.webp`,
  srcset: `img/gabber/${name}-320.webp 320w, img/gabber/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Records from the label's or artist's own channel, sets from the Selector
// catalogue. All checked through YouTube oEmbed on 2026-11-09 and embedded by
// no other guide (media/gabber.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Paul Elstak': figure('paul-elstak-2011', 768, 632,
    'Paul Elstak smiling, holding a gold award plaque in one hand and a glass of champagne in the other',
    'Paul Elstak with a gold award in May 2011. He founded Rotterdam Records in 1992. Photograph: Kristel van den Hooven, CC BY 3.0.'),
  'Dominator crowd': figure('dominator-2014', 640, 640,
    'A large crowd on sand in daylight, in front of a festival stage built like a dark castle',
    'The crowd at Dominator, a Dutch hardcore festival, in July 2014. Photograph: Vincent Teeuwen, CC BY 2.0.'),
  'Gabbers unite': figure('gabbers-unite-groningen-2019', 900, 1200,
    'A red, white and blue flag printed with the words Gabbers unite, hanging behind a window in Groningen',
    'A "Gabbers unite" Dutch flag in a window in Groningen, February 2019. Photograph: Donald Trung Quoc Don, CC BY-SA 4.0.'),
  'Masters of Hardcore': figure('masters-of-hardcore-2018', 1200, 900,
    'A packed indoor hall facing a distant stage lit in red, at Masters of Hardcore',
    'Masters of Hardcore, the 2018 edition, Tournament of Tyrants. Photograph: KaiKnight2, CC BY-SA 4.0.'),
  'Gabber night': figure('gabber-night-banska-bystrica-2017', 1200, 800,
    'Two men cheering with fists raised at a club night, one in a black and green shirt printed with the word Gabber',
    'Fans at a gabber night in Banská Bystrica, Slovakia, in December 2017. Photograph: Maverick L., CC BY 2.0.'),
  'We Have Arrived': video('MAVErwmRhMI', 'Hardcore', 'Mescalinum United', 'We Have Arrived, 1990',
    'Marc Acardipane as Mescalinum United, the 1990 record credited as the first hardcore techno track.'),
  'Welcome to the Thunderdome': video('57AnoJ-etS0', 'Gabber', 'DJ Dano', 'Welcome to the Thunderdome',
    'DJ Dano of the Dreamteam, with the record that became the theme of Thunderdome.'),
  'Party Animals': video('SXGLhpIyL3Q', 'Gabber', 'Party Animals', 'Have You Ever Been Mellow',
    'Party Animals, the Mokum act that took gabber into the Dutch charts.'),
  'Rainbow in the Sky': video('3Svn9SlxmDc', 'Happy hardcore', 'DJ Paul Elstak', 'Rainbow in the Sky, 1995',
    'Paul Elstak\'s 1995 record, the best-known Dutch happy hardcore track.'),
  'Marc Acardipane': video('Vh9bp1T80KU', 'Hardcore', 'Marc Acardipane', 'Boiler Room x HARD DANCE NYC: Spinoff Gabber, 2019',
    'Marc Acardipane at Boiler Room\'s Hard Dance night in New York, 2019.'),
  'Lenny Dee': video('GU4BLGqTvVQ', 'Hardcore', 'Lenny Dee and Frankie Bones', 'The Lot Radio, 5 September 2019',
    'Lenny Dee, founder of Industrial Strength Records, back to back with Frankie Bones at The Lot Radio in New York.'),
  'Nkisi': video('eiM4NSBlmwo', 'Hardcore', 'Nkisi', 'Boiler Room x HARD DANCE LDN, 2019',
    'Nkisi at Boiler Room\'s Hard Dance night in London, 2019.'),
  'Paul Seul': video('GooLT6QWX5E', 'Gabber', 'Paul Seul', 'Kiosk Radio, 21 October 2022',
    'Paul Seul of the Casual Gabberz crew, playing gabber and hardcore on Kiosk Radio.'),
  'Table: genres': articleTable({
    headers: ['Style', 'Where and when', 'Tempo', 'What to listen for'],
    rows: [
      ['Gabber', 'Rotterdam and Amsterdam, early 1990s', '140 to 190 BPM', 'A kick distorted until it hums, relentless'],
      ['Happy hardcore', 'Britain and the Netherlands, from 1992', 'About 170 BPM', 'Pianos, high vocals, major keys'],
      ['Hardstyle', 'The Netherlands, late 1990s', '145 to 155 BPM', 'Reverse bass, long melodic breakdowns'],
      ['Frenchcore and uptempo', 'France and the Netherlands, 2010s', 'Over 200 BPM', 'Faster again, louder, often melodic']
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
  {id: 'origins', heading: 'Where gabber came from'},
  {id: 'the-word', heading: 'The word gabber'},
  {id: 'thunderdome', heading: 'Thunderdome and the gabber parties'},
  {id: 'gabber-look', heading: 'The gabber look and hakken'},
  {id: 'against-racism', heading: 'Gabber against racism'},
  {id: 'happy-hardcore', heading: 'Happy hardcore'},
  {id: 'gabber-vs-hardstyle', heading: 'Gabber vs hardstyle'},
  {id: 'hardcore-now', heading: 'Hardcore techno now'},
  {id: 'where-to-start', heading: 'Where to start with gabber'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Gabber',
    title: 'What is gabber? Rotterdam hardcore, Thunderdome and happy hardcore',
    deck: 'A distorted kick, a Rotterdam label and the biggest Dutch youth culture of the 1990s, with its brighter offshoot, happy hardcore.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is gabber', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Hardcore, and the Dutch sound inside it.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Gabber FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Gabber', 'Wikipedia: Gabber')}
${sourceLink('https://en.wikipedia.org/wiki/Hardcore_(electronic_dance_music_genre)', 'Wikipedia: Hardcore (electronic dance music genre)')}
${sourceLink('https://en.wikipedia.org/wiki/Happy_hardcore', 'Wikipedia: Happy hardcore')}
${sourceLink('https://en.wikipedia.org/wiki/Paul_Elstak', 'Wikipedia: Paul Elstak')}
${sourceLink('https://en.wikipedia.org/wiki/Marc_Acardipane', 'Wikipedia: Marc Acardipane')}
${sourceLink('https://www.theguardian.com/music/2019/oct/30/thunderdome-the-dutch-rave-with-the-worlds-fastest-hardest-music', 'The Guardian: Thunderdome, Holly Dicker, 2019')}
${sourceLink('https://www.masterclass.com/articles/gabber-music-guide', 'MasterClass: Gabber music guide')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('gabber-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Gabber', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/gabber-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/gabber.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page gabber-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('gabber-guide.html', html);
console.log('Built gabber-guide.html');
