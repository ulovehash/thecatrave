// Build best-electronic-albums.html from best-electronic-albums-draft.md.
//
// Keywords (keywords/best-electronic-albums.json): "best electronic albums of
// all time" and "best electronic album ever", each 1K-10K (Keyword Planner,
// from TOPIC-DOSSIERS.md; no new measurement). The exact head "best electronic
// albums" is unmeasured and not claimed.
//
// Prose always sits between a figure and an embed (mediaAdjacencyRhythm).
//
// Every album embed is a Spotify album whose oEmbed title was checked against
// the release. Where the embed is a remaster or expanded edition the embed
// title says so. Years and labels come from MusicBrainz release data.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningCollection, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleTrackEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const raw = fs.readFileSync('best-electronic-albums-draft.md', 'utf8').replace(/—/g, ':');
const start = raw.indexOf('\n## Intro\n');
const end = raw.indexOf('\n---\n', start);
if (start < 0 || end < 0) throw new Error('Draft must have ## Intro and a closing ---');
const draft = raw.slice(start, end);

const canonical = 'https://thecatrave.com/best-electronic-albums';
const title = 'Best Electronic Albums of All Time: Three Rankings Compared';
const description = 'Best electronic albums of all time, from three rankings compared: sixteen albums with year, label and placings, and the seven that appear twice.';
const datePublished = '2026-10-06';
const dateModified = '2026-10-06';
const dateLabel = '6 October 2026';
const ogImage = 'https://thecatrave.com/img/og/best-electronic-albums.jpg';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const at = draft.indexOf(`\n## ${heading}\n`);
  if (at < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', at + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');

// Years and labels: MusicBrainz. Placings: the three lists named in the draft.
const albums = [
  {k: 'manmachine', artist: 'Kraftwerk', album: 'The Man-Machine', year: 1978, label: 'Capitol', id: '3eyz60xEK5dGEeZF1JJSi9', edition: '2009 remaster', ranks: 'Headphonesty 4'},
  {k: 'airports', artist: 'Brian Eno', album: 'Ambient 1: Music for Airports', year: 1978, label: "E'G, Polydor", id: '063f8Ej8rLVTz9KkjQKEMa', edition: '2004 remaster', ranks: 'Slant 6'},
  {k: 'violator', artist: 'Depeche Mode', album: 'Violator', year: 1990, label: 'Mute (Sire in the US)', id: '45YmvYK4hB4CgQgTMuNRm8', edition: '', ranks: 'Headphonesty 3'},
  {k: 'orb', artist: 'The Orb', album: 'Adventures Beyond the Ultraworld', year: 1991, label: 'Big Life', id: '0ee1sAau9a2DXQkAyezdwk', edition: '', ranks: 'Slant 4, Headphonesty 10'},
  {k: 'bluelines', artist: 'Massive Attack', album: 'Blue Lines', year: 1991, label: 'Wild Bunch, Virgin', id: '5mAPk4qeNqVLtNydaWbWlf', edition: '2012 mix and master', ranks: 'Slant 2, Headphonesty 15'},
  {k: 'saw', artist: 'Aphex Twin', album: 'Selected Ambient Works 85-92', year: 1992, label: 'Apollo', id: '7aNclGRxTysfh6z0d8671k', edition: '', ranks: 'Slant 3, Headphonesty 22'},
  {k: 'orbital', artist: 'Orbital', album: 'Orbital 2', year: 1993, label: 'Internal', id: '6cni6TMOVlY9jAbEGAjOif', edition: 'Brown Album expanded edition', ranks: 'Slant 11'},
  {k: 'dubno', artist: 'Underworld', album: 'dubnobasswithmyheadman', year: 1994, label: "Junior Boy's Own", id: '3WQpmFc7GonmzN40EjbbKY', edition: '20th anniversary remaster', ranks: 'Slant 13, Headphonesty 14', yearNote: 'Slant dates it 1993'},
  {k: 'leftism', artist: 'Leftfield', album: 'Leftism', year: 1995, label: 'Hard Hands', id: '6Hh2XrY2Yuse8omAzSabdp', edition: '', ranks: 'Slant 19, Headphonesty 13'},
  {k: 'homework', artist: 'Daft Punk', album: 'Homework', year: 1997, label: 'Virgin', id: '5uRdvUR7xCnHmUW8n64n9y', edition: '', ranks: 'Slant 18'},
  {k: 'mhrtc', artist: 'Boards of Canada', album: 'Music Has the Right to Children', year: 1998, label: 'Warp', id: '6LZiNXaDvhzvnXUubVOmNU', edition: '', ranks: 'Slant 22, Headphonesty 6'},
  {k: 'discovery', artist: 'Daft Punk', album: 'Discovery', year: 2001, label: 'Virgin', id: '2noRn2Aes5aoNVsU6iWThc', edition: '', ranks: 'Resident Advisor 7'},
  {k: 'dizzee', artist: 'Dizzee Rascal', album: 'Boy in da Corner', year: 2003, label: 'XL Recordings', id: '4Xab3wViIfg4Q89HNbouRW', edition: '', ranks: 'Resident Advisor 5'},
  {k: 'untrue', artist: 'Burial', album: 'Untrue', year: 2007, label: 'Hyperdub', id: '1oLxSFO8bJwsU2OmZY4cdU', edition: '', ranks: 'Resident Advisor 1, Headphonesty 28'},
  {k: 'doublecup', artist: 'DJ Rashad', album: 'Double Cup', year: 2013, label: 'Hyperdub', id: '7qnF9vN6t9NYusHu8SwFss', edition: '', ranks: 'Resident Advisor 8'},
  {k: 'ram', artist: 'Daft Punk', album: 'Random Access Memories', year: 2013, label: 'Columbia', id: '4m2880jivSbbyEGAKfITCa', edition: '', ranks: 'Headphonesty 2'}
];
const byKey = Object.fromEntries(albums.map(a => [a.k, a]));
const item = key => {
  const a = byKey[key];
  const embedTitle = `${a.album}${a.edition ? ` (${a.edition})` : ''} by ${a.artist}`;
  return {
    artist: a.artist, title: a.album, year: String(a.year),
    note: `${a.label}. ${a.ranks}.${a.yearNote ? ` ${a.yearNote}.` : ''}${a.edition ? ` The player is the ${a.edition}.` : ''}`,
    playerHtml: articleTrackEmbed({platform: 'spotify-album', id: a.id, title: embedTitle})
  };
};
const listening = {
  before: {id: 'albums-1978-1990', title: 'Three albums from 1978 to 1990.', description: 'Two from 1978 and one from 1990, each placed by one of the three lists.', keys: ['manmachine', 'airports', 'violator']},
  nineties: {id: 'albums-1991-1995', title: 'Six albums from 1991 to 1995.', description: 'Five are on two lists. Orbital 2 is here through Slant, and the band is on Headphonesty with a different album.', keys: ['orb', 'bluelines', 'saw', 'orbital', 'dubno', 'leftism']},
  turn: {id: 'albums-1997-2003', title: 'Four albums from 1997 to 2003.', description: 'Slant covers the start of this run and Resident Advisor the end.', keys: ['homework', 'mhrtc', 'discovery', 'dizzee']},
  late: {id: 'albums-2007-2013', title: 'Three albums from 2007 to 2013.', description: 'Two come from the Resident Advisor list and one from the Headphonesty vote.', keys: ['untrue', 'doublecup', 'ram']}
};
const usedListening = new Set();
const used = new Set();
function listen(name) {
  const spec = listening[name];
  if (!spec) throw new Error(`No listening group: ${name}`);
  usedListening.add(name);
  spec.keys.forEach(k => used.add(k));
  return articleListeningCollection({id: spec.id, title: spec.title, description: spec.description, items: spec.keys.map(item)});
}

const figs = {
  kraftwerk: {name: 'kraftwerk', size: 850, w: 850, h: 635, alt: 'Kraftwerk on stage in Stockholm behind a row of illuminated consoles', caption: 'Kraftwerk, number 1 on Slant with Trans-Europe Express, live in Stockholm in 2004. Photograph: Andréas Hagström, CC BY-SA 3.0.'},
  massive: {name: 'massive', size: 1200, w: 1200, h: 800, alt: 'Massive Attack performing on stage at the Eurockéennes festival', caption: 'Massive Attack, whose Blue Lines is number 2 on Slant, at the Eurockéennes festival in 2008. Photograph: Festival Eurockéennes, CC BY 2.0.'},
  underworld: {name: 'underworld', size: 1200, w: 1200, h: 896, alt: 'Underworld performing at the Brixton Academy in London', caption: 'Underworld, on two lists with dubnobasswithmyheadman, at the Brixton Academy in London. Photograph: Phil Whitehouse, CC BY 2.0.'},
  daftpunk: {name: 'daftpunk', size: 1200, w: 1200, h: 900, alt: 'Daft Punk in 2013, two figures in helmets', caption: 'Daft Punk in 2013, the year of Random Access Memories, the band with an album on all three lists. Photograph: Sony Music Entertainment, CC BY 4.0.'}
};
const usedFigs = new Set();
function fig(key) {
  const f = figs[key];
  if (!f) throw new Error(`No figure: ${key}`);
  usedFigs.add(key);
  const base = `img/best-electronic-albums/${f.name}`;
  const big = `${base}-${f.size}.webp`;
  return articleFigure({
    src: big, srcset: `${base}-320.webp 320w, ${big} ${f.w}w`, width: f.w, height: f.h,
    alt: f.alt, caption: f.caption, className: 'wide-archive-image'
  });
}

const ownDescriptions = {
  'no-genre-no-problem': 'Glitch, IDM and ambient without one scene to belong to. My own track.',
  'late-summer-cloud-dance': 'Another track of mine, for the end of the run.'
};
const usedOwn = new Set();
function own(key) {
  if (!ownDescriptions[key]) throw new Error(`No own-track description: ${key}`);
  usedOwn.add(key);
  return ownTrackListening(key, ownDescriptions[key]);
}

function albumTable() {
  const rows = albums.map(a => [a.artist, a.album, a.yearNote ? `${a.year} (${a.yearNote})` : String(a.year), a.label, a.ranks].map(escapeHtml));
  return articleTable({label: 'The sixteen albums with year, label and list placings', headers: ['Artist', 'Album', 'Year', 'Label', 'Placing'], rows});
}

function render(text) {
  return paras(text).map(block => {
    const l = block.match(/^\[\[listen:(\w+)\]\]$/); if (l) return listen(l[1]);
    const f = block.match(/^\[\[fig:(\w+)\]\]$/); if (f) return fig(f[1]);
    const o = block.match(/^\[\[own:([\w-]+)\]\]$/); if (o) return own(o[1]);
    if (block === '[[table]]') return albumTable();
    return `<p>${inline(block)}</p>`;
  }).join('\n');
}

const intro = paras(getSection('Intro'));
const faqItems = getSection('FAQ').split('\n').filter(line => line.startsWith('**')).map(line => {
  const m = line.match(/^\*\*(.+?)\*\*\s+(.+)$/);
  if (!m) throw new Error(`Bad FAQ line: ${line}`);
  return {question: m[1].trim(), answer: m[2].trim(), answerHtml: `<p>${inline(m[2].trim())}</p>`};
});

const sections = [
  {id: 'best-electronic-album-ever', heading: 'What is the best electronic album ever?', h2: 'What is the best electronic album ever?'},
  {id: 'how-picked', heading: 'How the 16 were picked', h2: 'How the 16 were picked.'},
  {id: 'albums-1978-1990-section', heading: '1978 to 1990', h2: '1978 to 1990.'},
  {id: 'albums-1991-1995-section', heading: '1991 to 1995', h2: '1991 to 1995.'},
  {id: 'albums-1997-2003-section', heading: '1997 to 2003', h2: '1997 to 2003.'},
  {id: 'albums-2007-2013-section', heading: '2007 to 2013', h2: '2007 to 2013.'},
  {id: 'table', heading: 'The 16 albums in one table', h2: 'The 16 albums in one table.'},
  {id: 'next', heading: 'Where to go next', h2: 'Where to go next.'}
];
const bodySections = sections.map(s => articleSection({id: s.id, title: s.h2, bodyHtml: render(getSection(s.heading))}));
for (const k of Object.keys(listening)) if (!usedListening.has(k)) throw new Error(`Unused listening group: ${k}`);
for (const k of albums.map(a => a.k)) if (!used.has(k)) throw new Error(`Album not embedded: ${k}`);
for (const k of Object.keys(figs)) if (!usedFigs.has(k)) throw new Error(`Unused figure: ${k}`);
for (const k of Object.keys(ownDescriptions)) if (!usedOwn.has(k)) throw new Error(`Unused own track: ${k}`);

const tocItems = [...sections.map(s => ({id: s.id, label: s.heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(4, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sources = [
  '[Headphonesty, 30 Essential Electronic Music Albums According to Audiophiles](https://www.headphonesty.com/2026/08/essential-electronic-music-albums-audiophiles/) (August 2026), a reader vote with percentages.',
  'Slant Magazine, 25/20: the best electronic albums of the twentieth century (30 June 2002, Sal Cinquemani), a poll of 300 journalists, DJs and label staff.',
  '[Resident Advisor, The Best Electronic Records of 2000-25](https://ra.co/features/4482) (2025), 100 records including EPs and compilations.',
  'MusicBrainz release data.',
].map(line => `<li>${inline(line)}</li>`).join('');

const articleHtml = [
  articleHero({kicker: 'Electronic albums', title: 'Best Electronic Albums of All Time', deck: 'Three published rankings, three different number ones, and sixteen albums counted across them, each with its year, label and placing.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'The short version', bodyHtml: inline(intro[0]), className: 'article-summary'}), tocItems}),
  articleSection({id: 'introduction', title: 'Three lists, three number ones.', bodyHtml: join(intro.slice(1)), className: 'article-intro'}),
  ...bodySections,
  articleFaq({items: faqItems, title: 'Best electronic albums FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed: true, description: 'Buying one of these supports the music and the writing directly.', tracks: [
    {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'},
    {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
  ]}),
  readNext({items: relatedArticles('best-electronic-albums.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: ogImage, datePublished, dateModified}),
  breadcrumbStructuredData({name: title, canonical}),
  faqStructuredData({items: faqItems})
];
const html = articlePage({alternates: alternatesFor('/best-electronic-albums'), title, description, canonical, ogImage, datePublished, dateModified, bodyClass: 'article-page best-electronic-albums-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-electronic-albums.html', html);
console.log('Built best-electronic-albums.html');
