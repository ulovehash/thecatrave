// Build italo-disco-guide.html from italo-disco-guide-draft.md.
//
// Asked for by the owner on 2026-11-09 ("lets create first 3 ... 1 by 1"),
// second of the gabber, italo disco and Brazilian funk guides. Research:
// Wikipedia (Italo disco, its list of artists and songs, and the song pages),
// the Guardian (2008), DJ Mag (2022) and MasterClass (2021). Volumes are in
// keywords/italo-disco.json: Keyword Planner ranges and the Ahrefs US point
// for the head term, labelled per term and never merged.
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

const draft = fs.readFileSync('italo-disco-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/italo-disco-guide';
const title = 'What Is Italo Disco? Italian Disco Music, Songs and Artists';
const description = 'What Italo disco is: the sound, where it came from, how ZYX named it, the biggest Italo disco hits and artists, its link to house, and the revival.';
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

// From Wikimedia Commons, downloaded to img/italo-disco/ on 2026-11-09,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/italo-disco/${name}-${width}.webp`,
  srcset: `img/italo-disco/${name}-320.webp 320w, img/italo-disco/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Records from the label's or artist's own channel, sets from the Selector
// catalogue. All checked through YouTube oEmbed on 2026-11-09 and embedded by
// no other guide (media/italo-disco.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Giorgio Moroder': figure('giorgio-moroder-first-avenue', 1200, 800,
    'Giorgio Moroder, white-haired, pointing out from a dark stage under blue light',
    'Giorgio Moroder on stage at First Avenue in Minneapolis. Photograph: Andy Witchger, CC BY 2.0.'),
  'Ryan Paris': figure('ryan-paris-2023', 1200, 800,
    'Ryan Paris smiling in a blue patterned jacket in front of green leaves',
    'Ryan Paris at ZDF-Fernsehgarten in Mainz, May 2023. Photograph: Sven Mandel, CC BY-SA 4.0.'),
  'Gazebo': figure('gazebo-2012', 900, 1200,
    'Gazebo singing into a microphone on a stage lit red, dressed in black',
    'Gazebo on stage in 2012. Photograph: giorgioerriquez, CC BY 2.0.'),
  'Sabrina Salerno': figure('sabrina-salerno-2012', 1200, 839,
    'Sabrina Salerno singing on a dark stage, one hand in her hair, wearing a black vest and a gold necklace',
    'Sabrina Salerno on stage in 2012. Photograph: giorgioerriquez, CC BY 2.0.'),
  'Savage': figure('savage-2014', 800, 1200,
    'Savage smiling on stage in a black hat and dark jacket, holding a microphone',
    'Savage on stage in 2014. Photograph: Tansev, CC BY-SA 3.0.'),
  'Alexander Robotnick': figure('alexander-robotnick-2007', 1200, 800,
    'Alexander Robotnick in glasses, bent over a laptop and a mixer on a club stage',
    'Alexander Robotnick at Batofar in 2007. Photograph: Bit Boy, CC BY 2.0.'),
  'Spacer Woman': video('nZDPCjEoIMI', 'Italo disco', 'Charlie', 'Spacer Woman, 1983',
    'Charlie\'s space record, from the label\'s own channel.'),
  "I'm Ready": video('gqc06bfkC2s', 'Italo disco', 'Kano', "I'm Ready, 1980",
    'Kano\'s first record, later reissued in New York by Emergency Records.'),
  'Dirty Talk': video('i5nt1ji_IKc', 'Italo disco', 'Klein + M.B.O.', 'Dirty Talk, 1982',
    'Mario Boncaldo and Tony Carrasco\'s debut single as Klein + M.B.O.'),
  'Dolce Vita': video('EXmABxvHTG4', 'Italo disco', 'Ryan Paris', 'Dolce Vita, 1983',
    'Ryan Paris\'s debut single, a top-five hit in Britain, from the ZYX Italo channel.'),
  'I Like Chopin': video('Dtrgwqei7ww', 'Italo disco', 'Gazebo', 'I Like Chopin, 1983',
    'Gazebo\'s number one in more than 15 countries, from his own channel.'),
  'Self Control': video('1_TQjEn6cpQ', 'Italo disco', 'Raf', 'Self Control, 1984',
    'Raf\'s original, before Laura Branigan\'s cover.'),
  'Tarzan Boy': video('--6CdAypJsQ', 'Italo disco', 'Baltimora', 'Tarzan Boy, 1985',
    'Baltimora\'s debut single, with the Tarzan cry in the refrain.'),
  'Boys': video('_OIPDU8kCNo', 'Italo disco', 'Sabrina', 'Boys (Summertime Love), 1987',
    'Sabrina\'s number one in France and Switzerland, number three in Britain.'),
  "Don't Cry Tonight": video('0uxm9YU7Uxg', 'Italo disco', 'Savage', "Don't Cry Tonight, 1983",
    'Savage\'s best-known record, from his own channel.'),
  "Problèmes d'amour": video('oX1Vge8zAjw', 'Italo disco', 'Alexander Robotnick', "Problèmes d'amour, 1983",
    'One of the four records on I-F\'s 1999 mix.'),
  'Feel the Drive': video('Jy_TBjn_vh8', 'Italo disco', "Doctor's Cat", 'Feel the Drive, 1983',
    'Called one of the earliest house songs by SPIN in 1989.'),
  'David Vunk': video('U_6Vc5mO8Lg', 'Italo disco', 'David Vunk', 'Boiler Room, 2018',
    'David Vunk, a guest of the London Italo nights of 2008, at Boiler Room.'),
  'Daniele Baldelli': video('NxcjqylIlV0', 'Italo disco', 'Daniele Baldelli', 'Boiler Room, 2012',
    'Daniele Baldelli at Boiler Room in 2012.'),
  'Pablo Bozzi': video('YapYOL6U4l4', 'Italo disco', 'Pablo Bozzi', 'HÖR Berlin, 2022',
    'Pablo Bozzi, one of the current producers DJ Mag names, at HÖR in Berlin.')
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
  {id: 'sound', heading: 'The Italo disco sound'},
  {id: 'origins', heading: 'Where Italo disco came from'},
  {id: 'the-name', heading: 'Who named it Italo disco'},
  {id: 'biggest-hits', heading: 'The biggest Italo disco hits'},
  {id: 'artists', heading: 'Italo disco artists'},
  {id: 'house-music', heading: 'Italo disco and house music'},
  {id: 'what-happened', heading: 'What happened to Italo disco'},
  {id: 'revival', heading: 'The Italo disco revival'},
  {id: 'where-to-start', heading: 'Where to start with Italo disco'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Italo disco',
    title: 'What is Italo disco? The sound, the songs and the artists',
    deck: 'Drum machines, synthesizers and English sung by Italians: the dance music Italy made in the early 1980s, and what it gave house.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Italo disco', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Italian disco after disco.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Italo disco FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Italo_disco', 'Wikipedia: Italo disco')}
${sourceLink('https://en.wikipedia.org/wiki/List_of_Italo_disco_artists_and_songs', 'Wikipedia: List of Italo disco artists and songs')}
${sourceLink('https://www.theguardian.com/music/musicblog/2008/sep/01/sceneandhearditalodisco', 'The Guardian: Scene and heard: Italo-disco, John McDonnell, 2008')}
${sourceLink('https://djmag.com/features/italo-disco-eternal-evolution', "DJ Mag: Italo disco's eternal evolution, Joe Roberts, 2022")}
${sourceLink('https://www.masterclass.com/articles/italo-disco-guide', 'MasterClass: Italo disco guide')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('italo-disco-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Italo disco', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/italo-disco-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/italo-disco.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page italo-disco-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('italo-disco-guide.html', html);
console.log('Built italo-disco-guide.html');
