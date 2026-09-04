import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articleListeningCollection,
  articlePage, articleSection, articleSources, articleStructuredData, articleTable,
  articleTrackEmbed, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('drum-and-bass-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/drum-and-bass-guide';
const title = 'What Is Drum and Bass? History, Sound and Subgenres';
const description = 'Drum and bass is what jungle became after the mid-1990s split: 174 BPM, breakbeats and sub-bass built into a global genre. The history, the sound, the subgenres.';
const date = '2026-09-02';
const dateLabel = '2 September 2026';

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

function getSubsection(sectionText, heading) {
  const start = sectionText.indexOf(`### ${heading}`);
  if (start < 0) throw new Error(`Missing subsection: ${heading}`);
  const bodyStart = sectionText.indexOf('\n', start) + 1;
  const next = sectionText.indexOf('\n### ', bodyStart);
  return sectionText.slice(bodyStart, next < 0 ? sectionText.length : next).trim();
}

function paragraphs(text) {
  return text.split(/\n\s*\n/).map(block => block.trim()).filter(block => {
    if (!block) return false;
    if (/^###?\s/.test(block)) return false;
    return true;
  });
}

const p = value => `<p>${inline(value)}</p>`;
const join = list => list.map(p).join('');

// Editorial sections from the approved draft.
const introEnd = draft.indexOf('\n## DRUM AND BASS DEFINITION');
const intro = draft.slice(draft.indexOf('\n', draft.indexOf('# What is drum and bass?')) + 1, introEnd).trim();
const definition = paragraphs(getSection('DRUM AND BASS DEFINITION'));
const splitScene = paragraphs(getSection('Where jungle ended'));
const built = paragraphs(getSection('How drum and bass is built: 174 BPM, the break and the low end'));
const metalheadz = paragraphs(getSection('Metalheadz and the dark turn'));
const atmospheric = paragraphs(getSection('The atmospheric line: Speed, Bristol and Good Looking'));
const subgenres = paragraphs(getSection('The subgenres and what they mean'));
const global = paragraphs(getSection('How drum and bass stopped being British'));
const now = paragraphs(getSection('Where drum and bass is now'));

const faqText = getSection('Drum and bass FAQ');
const faqHeadings = [...faqText.matchAll(/^### (.+)$/gm)].map(match => match[1]);
const faqItems = faqHeadings.map(question => {
  const answer = paragraphs(getSubsection(faqText, question)).join(' ');
  return {question, answer, answerHtml: p(answer)};
});

const tocItems = [
  ['where-jungle-ended', 'Where jungle ended'],
  ['sound', 'How drum and bass is built'],
  ['metalheadz', 'Metalheadz and the dark turn'],
  ['atmospheric', 'Speed, Bristol and Good Looking'],
  ['subgenres', 'The subgenres explained'],
  ['global', 'How it stopped being British'],
  ['now', 'Where drum and bass is now'],
  ['faq', 'Drum and bass FAQ']
].map(([id, label]) => ({id, label}));

// Essential listening. Every record on the site-wide dated collection geometry.
// The 1990s drum and bass catalogue on streaming is a mess of remasters, edits and
// compilation re-rips, so exact tracks use a verified YouTube upload of the original
// record; the extended route is one official Spotify playlist. One colour rule:
// every Essential listening block is cyan, and no body section is toned, so the
// block always reads as the same distinct panel on the paper page.
// `img/dnb/dnb-cover.webp` (the chopped-breakbeat schematic) is kept only as the
// homepage card and social share image; it is not placed in the article body.

// Archive photographs, downloaded from Wikimedia Commons and served locally as
// responsive webp so the article never depends on a third-party hotlink. Every
// source is Creative Commons or public domain; the credit sits in the caption.
const roniSizeFigure = articleFigure({
  src: 'img/dnb/roni-size.webp',
  srcset: 'img/dnb/roni-size-320.webp 320w, img/dnb/roni-size.webp 1120w',
  width: 1120, height: 747,
  alt: 'Roni Size performing behind a mixer at the Astropolis festival in 2009',
  caption: 'Roni Size at Astropolis, 2009. New Forms was made in Bristol with Reprazent and won the 1997 Mercury Prize. Photograph: neomusicstore, CC BY 2.0.',
  className: 'wide-archive-image'
});

const noisiaFigure = articleFigure({
  src: 'img/dnb/noisia.webp',
  srcset: 'img/dnb/noisia-320.webp 320w, img/dnb/noisia.webp 1280w',
  width: 1280, height: 720,
  alt: 'The three members of Noisia performing on stage at Brixton Academy in London in 2015',
  caption: 'Noisia at Brixton Academy, 2015. Neurofunk built in Groningen and played worldwide: the sound as a precision-engineering exercise. Photograph: Emma Louise, CC BY 3.0.',
  className: 'wide-archive-image'
});

const markyFigure = articleFigure({
  src: 'img/dnb/dj-marky.webp',
  srcset: 'img/dnb/dj-marky-320.webp 320w, img/dnb/dj-marky.webp 1120w',
  width: 1120, height: 840,
  alt: 'DJ Marky playing a record at the Lov.e club in Sao Paulo',
  caption: 'DJ Marky at Lov.e, Sao Paulo, 2008. LK routed a Brazilian record through a Bristol label and into every British club that year. Photograph: Moretti, CC BY-SA 3.0.',
  className: 'wide-archive-image'
});

// Spotify (compact 152px row) where a verified canonical master exists; YouTube
// (16:9) where it does not. A block of nothing but 16:9 rows reads as a wall.
const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const splitListening = articleListeningCollection({
  id: 'split-listening', tone: 'cyan',
  title: 'The distance in one year.',
  description: 'The record that carried jungle into the charts, and the record that, twelve months later, carried the new name onto a major label.',
  items: listeningItems([
    {year: '1994', artist: 'M-Beat featuring General Levy', title: 'Incredible', youtube: 'GDwNn8bJ2CQ',
      note: 'Ragga jungle at number 39 in the UK singles chart. This is the sound, and the word, some producers then walked away from.'},
    {year: '1995', artist: 'Goldie', title: 'Inner City Life', youtube: 'i-P98B2skts',
      note: 'From Timeless. The same lineage on a major label, with strings and a broadsheet review, filed under drum and bass rather than jungle.'}
  ])
});

const soundListening = articleListeningCollection({
  id: 'sound-listening', tone: 'cyan',
  title: 'Two-step and rolling.',
  description: 'The two drum feels the genre runs on, both from 1995, both around 174, with the bass doing opposite amounts of work.',
  items: listeningItems([
    {year: '1995', artist: 'Alex Reece', title: 'Pulp Fiction', spotify: '4bsF2ZJgmq2JiDfyIV3CaX',
      note: 'The two-step template: a kick and a snare with air around them, the track gliding rather than tumbling.'},
    {year: '1995', artist: 'Dillinja', title: 'The Angels Fell', youtube: '0wWTqipgm2I',
      note: 'The rolling break, more of the original drums left intact, with the sub-bass carrying the weight underneath.'}
  ])
});

const metalheadzListening = articleListeningCollection({
  id: 'metalheadz-listening', tone: 'cyan',
  title: 'The dark turn.',
  description: 'The record people reach for when they want to show what the dark side of drum and bass sounded like.',
  items: listeningItems([
    {year: '1996', artist: 'Doc Scott', title: 'Shadow Boxing', youtube: '7Z-6e3zIE2k',
      note: 'Released under his Nasty Habits alias. Distortion, compression and a machine-shop rhythm, a year before the Torque compilation collected the sound.'}
  ])
});

const atmosphericListening = articleListeningCollection({
  id: 'atmospheric-listening', tone: 'cyan',
  title: 'The other answer to 1995.',
  description: 'The jazz-facing branch, from the Good Looking blueprint to the record that won the Mercury Prize.',
  items: listeningItems([
    {year: '1993', artist: 'LTJ Bukem', title: 'Music', youtube: 'hp8DkZyE9h8',
      note: 'Strings, a soft break and no drop in the modern sense. The reference point for what got marketed as intelligent drum and bass.'},
    {year: '1997', artist: 'Roni Size and Reprazent', title: 'Brown Paper Bag', spotify: '3ZQs8RHO3lPZoUwpavPENL',
      note: 'From New Forms, made in Bristol, Mercury Prize 1997. The drum and bass record owned by people who owned no other.'}
  ])
});

const subgenreRows = [
  ['Drum and bass (the core)', '1994 onward', 'Around 174 BPM, breakbeats, sub-bass as a lead voice', 'The source: the form jungle became'],
  ['Liquid, or liquid funk', '2000 onward', 'Melodic and soulful, rolling two-step, vocals and chords', 'The mellow line, named after Fabio’s 2000 mix CD'],
  ['Jump-up', 'Mid-1990s onward', 'Big cartoonish basslines, simple breaks, built for the party', 'Split early from breakbeat science; DJ Zinc, Aphrodite'],
  ['Techstep', '1996 to 1999', 'Machine-led, industrial, sci-fi; distortion and compression', 'The hard turn away from jazz; No U-Turn and Torque'],
  ['Neurofunk', 'Late 1990s onward', 'Techstep with funk precision and mid-range design, not sub-bass', 'Descends from techstep; Ed Rush and Optical, then Noisia'],
  ['Darkstep and drumfunk', 'Late 1990s onward', 'Very fast dark drums; dense hand-edited breaks', 'Wings of the same tree; drumfunk is the Photek and Paradox lineage'],
  ['Halftime', '2010s onward', 'Drum and bass sound design at a half-time drum feel', 'The point where its tempo logic meets dubstep’s']
];

const subgenreListening = articleListeningCollection({
  id: 'subgenre-listening', tone: 'cyan',
  title: 'Two of the branches.',
  description: 'The melodic side and the machine side of the table above, so the terms have a sound attached.',
  items: listeningItems([
    {year: '2000', artist: 'Calibre', title: 'Mystic', youtube: 'yenh56lBQoU',
      note: 'Liquid: rolling, warm, soulful, and the version of drum and bass that travelled furthest.'},
    {year: '2010', artist: 'Noisia', title: 'Machine Gun', spotify: '6s9XbbtulHcMwMDzsyoEO7',
      note: 'Neurofunk built in Groningen and played worldwide: the sound as a precision-engineering exercise.'}
  ])
});

const globalListening = articleListeningCollection({
  id: 'global-listening', tone: 'cyan',
  title: 'Not a British record.',
  description: 'A São Paulo record routed through a Bristol label, and, twenty years later, jungle folded back into a drum and bass album.',
  items: listeningItems([
    {year: '2002', artist: 'DJ Marky and XRS featuring Stamina MC', title: 'LK', spotify: '1fIZzCIwKKGBRDkLA8VukW',
      note: 'Built on a Jorge Ben sample, released through Bryan Gee’s V Recordings, and in every British club that year.'},
    {year: '2024', artist: 'Nia Archives', title: 'Silence Is Loud', spotify: '1LqFMtMW44W8XQ1OtV43gg',
      note: 'The title track of the 2024 album that reached number 16 in the UK, folding jungle’s breaks and reggae feel back in.'}
  ])
});

const massivePlaylist = articleListeningBand({
  platform: 'spotify',
  id: 'dnb-massive-playlist',
  kicker: 'Essential listening',
  title: 'Massive Drum & Bass: extended playlist.',
  description: 'Spotify’s standing drum and bass playlist, for continuing past the exact records once they have made the argument.',
  src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5wDmLW735Yd?utm_source=generator',
  iframeTitle: 'Massive Drum & Bass playlist on Spotify',
  fullBleed: true,
  tone: 'cyan'
});

const subgenresHtml = `${join(subgenres.slice(0, 1))}${noisiaFigure}${join(subgenres.slice(1))}${articleTable({
  headers: ['Term', 'Roughly when', 'What it means', 'Relationship to the core'],
  rows: subgenreRows
})}${subgenreListening}`;

const articleHtml = [
  articleHero({
    kicker: 'Drum and bass guide',
    title: 'What is drum and bass?',
    deck: 'How jungle became a genre: 174 BPM, chopped breaks and sub-bass, a technical school, a set of institutions and, within a decade, festivals on five continents.',
    readingTime: `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Drum and bass definition', bodyHtml: inline(definition[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The music jungle turned into.', bodyHtml: join(paragraphs(intro)), className: 'article-intro'}),
  articleSection({id: 'where-jungle-ended', title: 'Where jungle ended.', kicker: '1994 to 1995', bodyHtml: `${join(splitScene)}${splitListening}`}),
  articleSection({id: 'sound', title: 'How drum and bass is built: 174 BPM, the break and the low end.', bodyHtml: `${join(built)}${soundListening}`}),
  articleSection({id: 'metalheadz', title: 'Metalheadz and the dark turn.', bodyHtml: `${join(metalheadz.slice(0, 3))}${metalheadzListening}${join(metalheadz.slice(3))}`}),
  articleSection({id: 'atmospheric', title: 'The atmospheric line: Speed, Bristol and Good Looking.', bodyHtml: `${join(atmospheric.slice(0, 2))}${roniSizeFigure}${join(atmospheric.slice(2))}${atmosphericListening}`}),
  articleSection({id: 'subgenres', title: 'The subgenres and what they mean.', bodyHtml: subgenresHtml}),
  articleSection({id: 'global', title: 'How drum and bass stopped being British.', kicker: '2000s onward', bodyHtml: `${join(global.slice(0, 2))}${markyFigure}${join(global.slice(2))}${globalListening}`}),
  articleSection({id: 'now', title: 'Where drum and bass is now.', bodyHtml: `${join(now)}${massivePlaylist}`}),
  articleFaq({items: faqItems, title: 'Drum and bass FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://en.wikipedia.org/wiki/Drum_and_bass" target="_blank" rel="noopener noreferrer">Wikipedia: Drum and bass</a></li>
<li><a href="https://www.beatportal.com/articles/4445-beatports-definitive-history-of-drum-bass" target="_blank" rel="noopener noreferrer">Beatportal: Beatport's Definitive History of Drum &amp; Bass</a></li>
<li><a href="https://en.wikipedia.org/wiki/Metalheadz" target="_blank" rel="noopener noreferrer">Wikipedia: Metalheadz</a></li>
<li><a href="https://en.wikipedia.org/wiki/Timeless_(Goldie_album)" target="_blank" rel="noopener noreferrer">Wikipedia: Timeless</a></li>
<li><a href="https://djmag.com/news/drum-bass-streams-increased-94-past-three-years-spotify-reports" target="_blank" rel="noopener noreferrer">DJ Mag: Drum &amp; bass streams increased 94% in three years, Spotify reports</a></li>
<li><a href="https://en.wikipedia.org/wiki/Nia_Archives" target="_blank" rel="noopener noreferrer">Wikipedia: Nia Archives</a></li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'These releases sit closest to the breaks and bass pressure in this article. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('drum-and-bass-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: 'https://thecatrave.com/img/dnb/dnb-cover.webp', datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Drum and Bass Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/drum-and-bass.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page dnb-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('drum-and-bass-guide.html', html);
console.log('Built drum-and-bass-guide.html');
