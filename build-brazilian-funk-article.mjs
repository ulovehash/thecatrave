// Build brazilian-funk-guide.html from brazilian-funk-guide-draft.md.
//
// Asked for by the owner on 2026-11-09 ("lets create first 3 ... 1 by 1"),
// third of the gabber, italo disco and Brazilian funk guides. Research:
// Wikipedia (Funk carioca and the song and artist pages), The FADER (2023),
// Bandcamp Daily (2024) and the Guardian (2023). Volumes are in
// keywords/brazilian-funk.json: Keyword Planner ranges and the Ahrefs US
// points for two terms, labelled per term and never merged.
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

const draft = fs.readFileSync('brazilian-funk-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/brazilian-funk-guide';
const title = 'What Is Brazilian Funk? Baile Funk, Funk Carioca and Songs';
const description = 'What Brazilian funk is: the sound, where funk carioca came from, what a baile funk is, the styles, the biggest songs and artists, and phonk.';
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

// From Wikimedia Commons, downloaded to img/brazilian-funk/ on 2026-11-09,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/brazilian-funk/${name}-${width}.webp`,
  srcset: `img/brazilian-funk/${name}-320.webp 320w, img/brazilian-funk/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Records from the label's or artist's own channel, sets from Boiler Room
// catalogue. All checked through YouTube oEmbed on 2026-11-09 and embedded by
// no other guide (media/brazilian-funk.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const stylesTable = articleTable({
  label: 'Brazilian funk styles',
  headers: ['Style', 'Where and when', 'What marks it', 'A record or name to know'],
  rows: [
    ['Proibidão', 'Rio de Janeiro, early 1990s', 'Lyrics about the drug trade and the war with the police', 'Played at bailes, not on radio'],
    ['Funk melody', 'Rio de Janeiro', 'Electro rhythms and romantic lyrics, led by women', 'Anitta, Perlla'],
    ['Funk ostentação', 'São Paulo, 2008', 'Cars, motorcycles, drink and leaving the favela', 'KondZilla, MC Lan'],
    ['Brega funk', 'Recife, early 2010s', 'MIDI pianos, caixa snares, 160 to 180 BPM in half time', 'Pabllo Vittar, "Parabéns"'],
    ['Rasteirinha', 'About 96 BPM', 'Atabaques, tambourines and beatboxing', 'MC WM, "Fuleragem"'],
    ['Rave funk', 'Created by DJ GBR, 2016', 'Funk mixed with electronic music', 'Kevinho, "É Rave Que Fala Né"'],
    ['150 BPM', 'Rio de Janeiro, 2018', 'Faster tempo, taken up by carnival blocos in 2019', 'Kevin o Chris, "Ela É do Tipo"'],
    ['Mandelão', 'São Paulo, late 2010s', 'Repetitive lyrics, raw production, blown-out bass', 'Bibi Babydoll, "Automotivo Bibi Fogosa"'],
    ['Bruxaria', 'São Paulo South Zone, 2020s', 'Aggressive, horror atmosphere', 'DJ K, DJ Arana, DJ Blakes']
  ]
});

const media = {
  'A FESTA': figure('a-festa-rio-2017', 1200, 800,
    'A woman with dark curly hair singing into a microphone on a stage, a crowd in front of her',
    'On stage at A FESTA, a night with MC Linn da Quebrada and MC Carol in Rio de Janeiro, April 2017. Photograph: Ramon Aquim, Mídia NINJA, CC BY-SA 2.0.'),
  'DJ Marlboro': figure('dj-marlboro-2013', 353, 419,
    'DJ Marlboro in a cap, smiling, photographed in 2013',
    'DJ Marlboro in 2013. Photograph: Olimor, CC BY-SA 3.0.'),
  'Tati Quebra Barraco': figure('tati-quebra-barraco-2021', 1021, 1200,
    'Tati Quebra Barraco smiling, photographed in 2021',
    'Tati Quebra Barraco in 2021. Photograph: Humor Multishow, CC BY-SA 4.0.'),
  'Liga do Funk': figure('liga-do-funk-sao-paulo-2013', 1200, 800,
    'A group of young people seated in rows at a meeting in São Paulo',
    'A meeting of the Liga do Funk at Galeria Olido, São Paulo, November 2013. Photograph: Circuito Fora do Eixo, CC BY-SA 2.0.'),
  'Kevin o Chris': figure('kevin-o-chris-2023', 796, 1200,
    'Kevin o Chris, photographed in 2023',
    'Kevin o Chris in 2023. Photograph: Humor Multishow, CC BY 3.0.'),
  'KondZilla': figure('kondzilla-2023', 899, 1200,
    'KondZilla speaking on a stage at Web Summit Rio',
    'KondZilla at Web Summit Rio, 2023. Photograph: Web Summit Rio, CC BY 2.0.'),
  'Anitta': figure('anitta-2024', 491, 602,
    'Anitta, photographed in 2024',
    'Anitta in 2024. Photograph: Attractive Mindset, CC BY 3.0.'),
  'styles': stylesTable,
  'Planet Rock': video('9J3lwZjHenA', 'Electro', 'Afrika Bambaataa and the Soulsonic Force', 'Planet Rock, 1982',
    'The record DJ Marlboro named as the main influence on funk carioca, from Tommy Boy\'s channel.'),
  'Furacão 2000': video('9QASL0SjNGQ', 'Brazilian funk', 'Furacão 2000', 'Boiler Room Rio de Janeiro: Carnaval',
    'The Rio sound team that popularised funk across Brazil in the 1990s, at Boiler Room\'s carnival party.'),
  'Quem Que Caguetou': video('xqq7g-H1WHY', 'Brazilian funk', 'Black Alien and Speed', 'Quem Que Caguetou',
    'The record used in a European car commercial in 2003, from Speed\'s channel.'),
  'Bucky Done Gun': video('2LFdPVf1diw', 'Brazilian funk', 'M.I.A.', 'Bucky Done Gun, 2005',
    'M.I.A.\'s funk-based single, from XL Recordings\' channel.'),
  'Pon de Floor': video('pHEkIiQpwI8', 'Dancehall', 'Major Lazer', 'Pon de Floor, 2009',
    'The record that became the basis of Beyoncé\'s "Run the World (Girls)".'),
  'DJ K': video('BhYwzsA4Vfo', 'Brazilian funk', 'DJ K', 'Boiler Room LA: Favela Worldwide',
    'DJ K, who calls his style bruxaria, at Boiler Room in Los Angeles.'),
  'Olha a Explosão': video('3yd_eoMOvqk', 'Brazilian funk', 'MC Kevinho', 'Olha a Explosão, 2016',
    'The video that passed a billion views on the KondZilla channel.'),
  'Bum Bum Tam Tam': video('_P7S2lKif-A', 'Brazilian funk', 'MC Fioti', 'Bum Bum Tam Tam, 2017',
    'MC Fioti\'s Bach-sampling number one in the Netherlands, from the KondZilla channel.'),
  'Vai Malandra': video('kDhptBT_-VI', 'Brazilian funk', 'Anitta, MC Zaac and Maejor', 'Vai Malandra, 2017',
    'Produced by Tropkillaz and DJ Yuri Martins, from Anitta\'s channel.'),
  'Fala Mal de Mim': video('KhE4zBwKx_M', 'Brazilian funk', 'Ludmilla', 'Fala Mal de Mim',
    'The record Ludmilla first became known for.'),
  'Fuleragem': video('4N2iMmHcHys', 'Brazilian funk', 'MC WM', 'Fuleragem',
    'The best-known rasteirinha record, from the KondZilla channel.'),
  'Parabéns': video('RAQmKOsonhc', 'Brega funk', 'Pabllo Vittar featuring Psirico', 'Parabéns',
    'Brega funk from Recife, from Pabllo Vittar\'s channel.'),
  'Automotivo Bibi Fogosa': video('N0pDBF00ygQ', 'Brazilian funk', 'Bibi Babydoll and DJ Brunin XM', 'Automotivo Bibi Fogosa',
    'Number one on Spotify in Ukraine in 2023, from Bibi Babydoll\'s channel.'),
  'São Paulo': video('2kjolTLZ_Mg', 'Brazilian funk', 'The Weeknd and Anitta', 'São Paulo, 2024',
    'Rave funk on the international chart, from The Weeknd\'s channel.'),
  'Rennan da Penha': video('s3rjrd6jOrk', 'Brazilian funk', 'Rennan da Penha', 'Boiler Room Rio de Janeiro: Carnaval',
    'Rennan da Penha, co-founder of the 150 BPM style, at Boiler Room\'s carnival party in Rio.')
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
  {id: 'sound', heading: 'What Brazilian funk sounds like'},
  {id: 'origins', heading: 'Where funk carioca came from'},
  {id: 'baile', heading: 'What happens at a baile funk'},
  {id: 'tamborzao', heading: 'Tamborzão and the 1990s'},
  {id: 'global', heading: 'How baile funk went global'},
  {id: 'styles', heading: 'Brazilian funk styles'},
  {id: 'biggest-songs', heading: 'The biggest Brazilian funk songs'},
  {id: 'artists', heading: 'Brazilian funk artists'},
  {id: 'phonk', heading: 'Brazilian funk or phonk'},
  {id: 'where-to-start', heading: 'Where to start with Brazilian funk'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Brazilian funk',
    title: 'What is Brazilian funk? Baile funk, funk carioca and the songs',
    deck: 'An MC, a DJ and a sound system turned all the way up: the dance music of Rio\'s favelas, from Miami bass loops to São Paulo\'s street parties.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Brazilian funk', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Funk, but not that funk.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Brazilian funk FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Funk_carioca', 'Wikipedia: Funk carioca')}
${sourceLink('https://www.thefader.com/2023/08/31/baile-funk-introduction-primer-dj-k-badsista-d-silvestre-dj-k-dj-ramemes-mc-lan', "The FADER: An introduction to baile funk's abrasive, addictive new wave, Nadine Smith, 2023")}
${sourceLink('https://daily.bandcamp.com/lists/brazilian-funk-list', 'Bandcamp Daily: The Endlessly Evolving World of Brazilian Funk, Filipe Costa, 2024')}
${sourceLink('https://www.theguardian.com/music/2023/nov/14/if-it-doesnt-smell-like-funk-somethings-wrong-with-your-recipe-brazilian-baile-funk-goes-global-again', "The Guardian: Brazilian baile funk goes global, again, Felipe Maia, 2023")}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('brazilian-funk-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Brazilian funk', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/brazilian-funk-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/brazilian-funk.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page brazilian-funk-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('brazilian-funk-guide.html', html);
console.log('Built brazilian-funk-guide.html');
