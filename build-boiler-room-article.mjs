// Build best-boiler-room-sets.html from best-boiler-room-sets-draft.md.
//
// A ranked list, which is a different shape from the genre guides, so the
// rule that holds it together is written here: two lists, kept apart. The
// most-watched table is measured from this site's catalogue of 8,206 Boiler
// Room sets; the ranked eighteen are a judgement. Every competing page mixes
// the two and presents memory as a ranking. The owner chose this structure on
// 2026-09-10, along with all genres and no controversy question in the FAQ.
//
// Keywords: best boiler room sets 1,100 a month worldwide, boiler room set
// 1,200, charli xcx boiler room 1,100 (FAQ only, it has its own parent topic).
// "what is a boiler room set" and "boiler room meaning" are excluded on purpose:
// they are a definition page, not this one. See keywords/best-boiler-room-sets.json.
//
// Each set in the ranking gets its own note and its own player. The owner asked
// for exactly that rather than a wall of videos, so a set with no note fails
// the build below instead of shipping as a bare embed.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable, articleYoutubeEmbed,
  authorCard, bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('best-boiler-room-sets-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-boiler-room-sets';
const title = 'Best Boiler Room Sets of All Time, Ranked and Measured';
const description = 'The best Boiler Room sets, from Carl Cox in Ibiza to Fred again.. in London, beside the most-watched sets counted across 8,206 recordings.';
const date = '2026-09-10';
const dateLabel = '10 September 2026';

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
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const join = list => list.map(p => `<p>${inline(p)}</p>`).join('\n');

const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const great = paras(getSection('What makes a Boiler Room set great'));
const watched = paras(getSection('The most-watched Boiler Room sets'));
const onward = paras(getSection('Where to go from here'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: join(paras(body))};
});

// All four from Wikimedia Commons, downloaded and served locally, none used by
// another guide. None of them is from a Boiler Room: no openly licensed photo
// of one exists on Commons, so each shows the artist and the caption says when.
const fredFigure = articleFigure({
  src: 'img/boiler-room/fred-again-1200.webp',
  srcset: 'img/boiler-room/fred-again-320.webp 320w, img/boiler-room/fred-again-1200.webp 1200w',
  width: 1200, height: 844,
  alt: 'Fred again.. performing on stage at Crystal Palace Bowl in London',
  caption: 'Fred again.. at Crystal Palace Bowl, London, in August 2025, on stage with Skepta, three years after the Boiler Room set that has more likes than any other. Photograph: Raph_PH, CC BY 4.0.',
  className: 'wide-archive-image'
});

const coxFigure = articleFigure({
  src: 'img/boiler-room/carl-cox-1200.webp',
  srcset: 'img/boiler-room/carl-cox-320.webp 320w, img/boiler-room/carl-cox-1200.webp 1200w',
  width: 1200, height: 800,
  alt: 'Carl Cox DJing at Amsterdam Dance Event in 2012',
  caption: 'Carl Cox at Amsterdam Dance Event in October 2012, ten months before the villa set that is still the second most-watched in Boiler Room\'s archive. Photograph: Sergey Kozak, CC BY 2.0.',
  className: 'wide-archive-image'
});

const ezFigure = articleFigure({
  src: 'img/boiler-room/dj-ez-1200.webp',
  srcset: 'img/boiler-room/dj-ez-320.webp 320w, img/boiler-room/dj-ez-1200.webp 1200w',
  width: 1200, height: 1440,
  alt: 'DJ EZ in 2012',
  caption: 'DJ EZ in 2012, the year of his 45-minute Boiler Room with Red Bull Music Academy, which has 2.8 million views of its own. The three-hour set came two years later. Photograph: Gareth Morton, CC BY 2.0.',
  className: 'wide-archive-image'
});

const samaFigure = articleFigure({
  src: 'img/boiler-room/sama-1200.webp',
  srcset: 'img/boiler-room/sama-320.webp 320w, img/boiler-room/sama-1200.webp 1200w',
  width: 1200, height: 800,
  alt: "Sama' Abdulhadi DJing at the Festival Internacional Cervantino in Guanajuato, Mexico, in 2025",
  caption: "Sama' Abdulhadi at the Festival Internacional Cervantino in Guanajuato, Mexico, in 2025. Before Ramallah in 2018 she was a respected local DJ; the Boiler Room set in between is the clearest case in the archive of the format making a career. Photograph: TSolange, CC BY-SA 4.0.",
  className: 'wide-archive-image'
});

// The one set on the page offered as audio, because the section it sits in
// argues that a set should survive with the screen off. Boiler Room's own
// SoundCloud upload, not a reupload.
const lenFakiBand = articleListeningBand({
  platform: 'soundcloud',
  id: 'len-faki-audio',
  kicker: 'Essential listening',
  title: 'Len Faki, Boiler Room Berlin, 2014. The full mix.',
  description: 'Boiler Room\'s own audio upload of the set ranked eleventh below. Ninety-three minutes of techno, and the fairest test of whether a set works without the picture.',
  src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/platform/len-faki&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  iframeTitle: 'Len Faki Boiler Room Berlin DJ Set on SoundCloud',
  fullBleed: true,
  tone: 'cyan'
});

// Measured from selector-data.json in September 2026. Typed rather than
// computed so the table cannot drift away from the prose that quotes it when
// the catalogue refreshes.
const watchedRows = [
  ['1', 'Solomun', 'Tulum', '2015', '76.19M', '452,859', '5.9'],
  ['2', 'Carl Cox', 'Ibiza', '2013', '74.26M', '424,683', '5.7'],
  ['3', 'Fred again..', 'London', '2022', '55.25M', '766,903', '13.9'],
  ['4', 'Kaytranada', 'Montréal', '2013', '25.12M', '359,823', '14.3'],
  ['5', '¥ØU$UK€ ¥UK1MAT$U', 'Tokyo', '2025', '20.39M', '532,202', '26.1'],
  ['6', 'Maceo Plex', 'Berlin', '2014', '16.83M', '113,408', '6.7'],
  ['7', 'Richie Hawtin', 'Amsterdam', '2012', '15.58M', '91,350', '5.9'],
  ['8', "Sama' Abdulhadi", 'Ramallah', '2018', '15.24M', '297,397', '19.5'],
  ['9', 'David August', 'Berlin', '2014', '14.80M', '129,168', '8.7'],
  ['10', 'Chase & Status', 'London', '2023', '14.68M', '219,003', '14.9']
].map(row => row.map(escapeHtml));

const watchedTable = articleTable({
  headers: ['#', 'Set', 'Filmed in', 'Year', 'Views', 'Likes', 'Likes per 1,000 views'],
  rows: watchedRows
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: `${label}, on Boiler Room's YouTube channel`
});

// In rank order. Every id is Boiler Room's own upload, checked against YouTube's
// oEmbed title on 2026-09-10, and every one is in the site's catalogue.
const sets = [
  {anchor: 'fred-again', id: 'c0-hvjV2A5Y', label: 'Fred again.., Boiler Room London', figure: fredFigure},
  {anchor: 'sama-abdulhadi', id: 'x9VYKrtziSg', label: "Sama' Abdulhadi, Boiler Room Palestine"},
  {anchor: 'carl-cox', id: 'vy-k0FopsmY', label: 'Carl Cox, Boiler Room Ibiza Villa Takeovers', figure: coxFigure},
  {anchor: 'kaytranada', id: '-5EQIiabJvk', label: 'Kaytranada, Boiler Room Montreal'},
  {anchor: 'yousuke-yukimatsu', id: 'T1tcUfUhR5U', label: '¥ØU$UK€ ¥UK1MAT$U, Boiler Room Tokyo'},
  {anchor: 'dj-ez', id: 'OraL6lKoyXE', label: 'DJ EZ, Boiler Room London'},
  {anchor: 'skream-disclosure', id: 'e8WVP3ClDsM', label: 'Skream b2b Disclosure, Boiler Room London at the W Hotel'},
  {anchor: 'charli-xcx', id: 'rKPBq_j4buQ', label: 'Charli xcx, Boiler Room PARTYGIRL'},
  {anchor: 'chase-and-status', id: 'Zy_JR9_Y8dE', label: 'Chase & Status, Boiler Room London'},
  {anchor: 'laurent-garnier', id: 'Bj8425Ma6F8', label: 'Laurent Garnier, Boiler Room x Dekmantel'},
  {anchor: 'len-faki', id: 'jQRI3b2SX8c', label: 'Len Faki, Boiler Room Berlin'},
  {anchor: 'nicolas-jaar', id: 'IUjWumGIqe8', label: 'Nicolas Jaar, Boiler Room New York'},
  {anchor: 'pinkpantheress', id: 'j5y2GBks5j4', label: 'PinkPantheress, Boiler Room London with IFFY FM'},
  {anchor: 'dj-ramon-sucesso', id: 'uhAp3o71U48', label: 'DJ Ramon Sucesso, Boiler Room x Primavera Sound'},
  {anchor: 'uncle-waffles', id: 'VT1a7whqhC4', label: 'Uncle Waffles, Boiler Room Johannesburg'},
  {anchor: 'underworld', id: 'rAOHJqJMYDA', label: 'Underworld, Boiler Room London'},
  {anchor: 'folamour', id: 'wL-VMOGAhzE', label: 'Folamour, Boiler Room x FLY Open Air'},
  {anchor: 'mall-grab', id: 'ddeAyYF_uwg', label: 'Mall Grab, Boiler Room Melbourne'}
];
// DJ EZ's photograph sits in his entry; placed here rather than in the list
// above so the two-paragraph rule below is visible where it is enforced.
sets[5].figure = ezFigure;

const [bestIntro, ...entryBlocks] = getSection('The best Boiler Room sets').split(/\n### /);
if (entryBlocks.length !== sets.length) {
  throw new Error(`Draft ranks ${entryBlocks.length} sets, generator has players for ${sets.length}`);
}

const bestHtml = [join(paras(bestIntro)), ...entryBlocks.map((block, index) => {
  const [heading, ...rest] = block.split('\n');
  const set = sets[index];
  if (!heading.startsWith(`#${index + 1} `)) throw new Error(`Rank out of order at "${heading}"`);
  const notes = paras(rest.join('\n'));
  if (!notes.length) throw new Error(`"${heading}" has a player and no note`);
  // A photograph needs a paragraph on either side of it, or it ends up pressed
  // against the player (AGENTS.md section 7).
  if (set.figure && notes.length < 2) throw new Error(`"${heading}" needs two paragraphs to carry a photograph`);
  const body = set.figure
    ? `${join(notes.slice(0, 1))}${set.figure}${join(notes.slice(1))}`
    : join(notes);
  return `<h3 id="${set.anchor}">${inline(heading.trim())}</h3>\n${body}${youtube(set.id, set.label)}`;
})].join('\n');

const greatHtml = `${join(great.slice(0, 1))}${samaFigure}${join(great.slice(1, 3))}${lenFakiBand}${join(great.slice(3))}`;
// The numbers in this section are the Selector's numbers, so the section shows
// the Selector: a fresh screenshot narrowed to Boiler Room, not the generic one
// the discovery guide already uses. The player is hidden in the capture,
// because headless YouTube shows a sign-in wall instead of a set.
const selectorFigure = articleFigure({
  src: 'img/boiler-room/selector-1200.webp',
  srcset: 'img/boiler-room/selector-320.webp 320w, img/boiler-room/selector-1200.webp 1200w',
  width: 1200, height: 690,
  alt: 'The Selector on thecatrave, with the source narrowed to Boiler Room',
  caption: 'The Selector narrowed to Boiler Room, the source of every number on this page. <a href="/selector">Open it</a> and press the button: one of 8,206 Boiler Room sets, or of all 62,877, chosen for you.',
  className: 'wide-archive-image'
});

// Paragraph four introduces the Selector and the figure; paragraph five is the
// Solomun note, which keeps text between the screenshot and the player.
const watchedHtml = `${join(watched.slice(0, 1))}${watchedTable}${join(watched.slice(1, 4))}${selectorFigure}${join(watched.slice(4))}${youtube('bk6Xst6euQk', 'Solomun, Boiler Room Tulum')}`;
if (watched.length !== 5) throw new Error(`Most-watched section has ${watched.length} paragraphs; the figure placement expects 5`);

const tocItems = [
  {id: 'what-makes', label: 'What makes a Boiler Room set great'},
  {id: 'most-watched', label: 'The most-watched Boiler Room sets'},
  {id: 'best', label: 'The best Boiler Room sets, ranked'},
  {id: 'where-next', label: 'Where to go from here'},
  {id: 'faq', label: 'FAQ'}
];

const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Boiler Room',
    title: 'Best Boiler Room Sets of All Time',
    deck: 'Two lists, kept apart: the ten most-watched Boiler Room sets as measured across 8,206 recordings, and eighteen picked for what actually happens in them.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best Boiler Room sets', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Two lists, kept apart.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-makes', title: 'What makes a Boiler Room set great.', bodyHtml: greatHtml}),
  articleSection({id: 'most-watched', title: 'The most-watched Boiler Room sets.', kicker: 'Measured', bodyHtml: watchedHtml}),
  articleSection({id: 'best', title: 'The best Boiler Room sets.', kicker: 'Ranked', bodyHtml: bestHtml}),
  articleSection({id: 'where-next', title: 'Where to go from here.', bodyHtml: join(onward)}),
  articleFaq({items: faqItems, title: 'Boiler Room sets FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://boilerroom.tv/playlist/top-10-all-time/" target="_blank" rel="noopener noreferrer">Boiler Room: Top 10 All Time</a></li>
<li><a href="https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29" target="_blank" rel="noopener noreferrer">Wikipedia: Boiler Room (music broadcaster)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Yousuke_Yukimatsu" target="_blank" rel="noopener noreferrer">Wikipedia: Yousuke Yukimatsu</a></li>
<li><a href="https://www.vice.com/en/article/boiler-room-disclosure-b2b-skream/" target="_blank" rel="noopener noreferrer">Vice: Boiler Room, Disclosure b2b Skream</a></li>
<li><a href="https://www.factmag.com/2014/01/31/dj-ez-to-play-three-hour-set-on-boiler-room-next-month/" target="_blank" rel="noopener noreferrer">Fact: DJ EZ to play three hour set on Boiler Room</a></li>
<li><a href="https://www.setlist.fm/setlist/charli-xcx/2024/99-scott-ave-brooklyn-ny-3ab89fb.html" target="_blank" rel="noopener noreferrer">setlist.fm: Charli xcx at 99 Scott Ave, Brooklyn, 22 February 2024</a></li>
<li><a href="https://www.setlist.fm/setlist/underworld/2025/burgess-park-london-england-6b5812da.html" target="_blank" rel="noopener noreferrer">setlist.fm: Underworld at Burgess Park, 2 August 2025</a></li>
<li><a href="https://sonicstate.com/news/2022/08/11/fred-again-hybrid-set-for-boiler-room/" target="_blank" rel="noopener noreferrer">Sonicstate: Fred again.. hybrid set for Boiler Room</a></li>
<li><a href="https://whynow.co.uk/read/best-boiler-room-sets" target="_blank" rel="noopener noreferrer">whynow: We rank the 10 best Boiler Room sets of all time</a></li>
<li>View counts, like counts, set lengths and like rates are measured from this site's own catalogue of 62,877 recorded DJ sets, 8,206 of them Boiler Room's, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Most people first watch a DJ at close range on Boiler Room. These are mine, from the breaks and bass side. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-boiler-room-sets.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Boiler Room Sets', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/best-boiler-room-sets.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page boiler-room-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-boiler-room-sets.html', html);
console.log('Built best-boiler-room-sets.html');
