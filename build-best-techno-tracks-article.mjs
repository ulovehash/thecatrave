// Build best-techno-tracks.html from best-techno-tracks-draft.md.
//
// A list of tracks, a different intent from techno-music-guide (genre history)
// and best-techno-mixes (DJ sets). Both are linked from the introduction.
// Evidence, ledger and unverified items: best-techno-tracks-editorial-review.md.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articleListeningCollection, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleTrackEmbed, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('best-techno-tracks-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-techno-tracks';
const title = 'Best Techno Tracks: Nine Records That Built the Sound';
const description = 'Nine techno tracks, from No UFO\'s and Strings of Life to The Bells and Doppler, each with a player and the facts behind it.';
const datePublished = '2026-10-06';
const dateModified = '2026-10-08';
const dateLabel = '8 October 2026';

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

// Both photographs from Wikimedia Commons, downloaded to img/best-techno-tracks/
// on 2026-10-06, licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-techno-tracks/${name}-${width}.webp`,
  srcset: `img/best-techno-tracks/${name}-320.webp 320w, img/best-techno-tracks/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const spotify = (id, name) => articleTrackEmbed({platform: 'spotify', id, title: name});
const bandcamp = (id, url, name) => articleTrackEmbed({platform: 'bandcamp', id, url, title: name});
const soundcloud = (url, name) => articleTrackEmbed({platform: 'soundcloud', url, title: name});

const media = {
  'no-ufos': spotify('0shMp9Vkjr8X77jQCWlaEP', "Model 500, No UFO's"),
  'strings-of-life': spotify('78ZQfXjoaHU2QjXqWpa8l9', 'Rhythim Is Rhythim, Strings of Life'),
  'energy-flash': bandcamp('2779115416', 'https://randsrecords.bandcamp.com/track/energy-flash', 'Joey Beltram, Energy Flash'),
  'spastik': bandcamp('2542530288', 'https://richiehawtin.bandcamp.com/track/spastik', 'Plastikman, Spastik'),
  'the-bells': spotify('0ISxyAhfop0MoMeAUw72RN', 'Jeff Mills, The Bells'),
  'phylyps-trak': spotify('4KsL7ddeairY2OMs8OFRSR', 'Basic Channel, Phylyps Trak'),
  'subzero': bandcamp('3711497848', 'https://benklock.bandcamp.com/track/subzero', 'Ben Klock, Subzero'),
  'jaguar': soundcloud('https://soundcloud.com/undergroundresistance/djrolandojaguar', 'The Aztec Mystic, Jaguar'),
  'doppler': soundcloud('https://soundcloud.com/kntxtmusic/charlotte-de-witte-doppler', 'Charlotte de Witte, Doppler'),
  'Richie Hawtin at Fabric': figure('richie-hawtin-fabric', 1200, 900,
    'Richie Hawtin playing at Fabric in London',
    'Richie Hawtin at Fabric, London, 2008. He released Spastik as Plastikman. Photograph: Raminta Malinauskaite, CC BY-SA 3.0.'),
  'Charlotte de Witte in Rotterdam': figure('charlotte-de-witte-rotterdam', 900, 1120,
    'Charlotte de Witte at work behind the decks at Toffler in Rotterdam',
    'Charlotte de Witte at work at Toffler, Rotterdam. Photograph: Alan Overbeek, CC BY-SA 4.0.'),
  'thecatrave Berlin Race 1909': ownTrackListening('berlin-race-1909', 'My own track, made while I lived in Berlin. It is not on the list.'),
  'thecatrave No Genre No Problem': ownTrackListening('no-genre-no-problem', 'My first finished track, and not on the list.'),
  chosen: articleTable({
    headers: ['Track', 'Artist', 'Year', 'Label'],
    rows: [
      ["No UFO's", 'Model 500', '1985', 'Metroplex', '1'],
      ['Strings of Life', 'Rhythim Is Rhythim', '1987', 'Transmat', '0 (my addition)'],
      ['Energy Flash', 'Joey Beltram', '1990', 'R&S Records', '2'],
      ['Spastik', 'Plastikman', '1993', 'Plus 8', '2'],
      ['The Bells', 'Jeff Mills', '1996', 'Purpose Maker', '2'],
      ['Phylyps Trak', 'Basic Channel', '1993', 'Basic Channel', '0 (my addition)'],
      ['Subzero', 'Ben Klock', '2009', 'Ostgut Ton', '1'],
      ['Jaguar', 'The Aztec Mystic', '1999', 'Underground Resistance', '1'],
      ['Doppler', 'Charlotte de Witte', '2021', 'KNTXT', '0 (my addition)']
    ].map(row => row.slice(0, 4).map(escapeHtml))
  })
};
const used = new Set();
const trackFacts = {
  'no-ufos': {artist: 'Model 500', title: "No UFO's", year: '1985', note: 'Metroplex. The vocal version.'},
  'strings-of-life': {artist: 'Rhythim Is Rhythim', title: 'Strings of Life', year: '1987', note: 'Transmat.'},
  'energy-flash': {artist: 'Joey Beltram', title: 'Energy Flash', year: '1990', note: 'R&S Records.'},
  'spastik': {artist: 'Plastikman', title: 'Spastik', year: '1993', note: 'Plus 8.'},
  'the-bells': {artist: 'Jeff Mills', title: 'The Bells', year: '1996', note: 'Purpose Maker.'},
  'phylyps-trak': {artist: 'Basic Channel', title: 'Phylyps Trak', year: '1993', note: 'Basic Channel.'},
  'subzero': {artist: 'Ben Klock', title: 'Subzero', year: '2009', note: 'Ostgut Ton.'},
  'jaguar': {artist: 'The Aztec Mystic', title: 'Jaguar', year: '1999', note: 'Underground Resistance.'},
  'doppler': {artist: 'Charlotte de Witte', title: 'Doppler', year: '2021', note: 'KNTXT.'}
};
let pendingTracks = [];

function render(text) {
  return paras(text).map(p => {
    if (/^### /.test(p)) return `<h3>${inline(p.slice(4))}</h3>`;
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    if (trackFacts[key]) {
      pendingTracks.push({...trackFacts[key], playerHtml: media[key]});
      return '';
    }
    return media[key];
  }).filter(Boolean).join('\n');
}

// Track players sit together in one Essential listening block after each
// section's prose, as on the other list guides.
function renderWithListening(text, id) {
  pendingTracks = [];
  const body = render(text);
  const items = pendingTracks;
  pendingTracks = [];
  if (!items.length) return body;
  const block = articleListeningCollection({id: `listen-${id}`, label: id, tone: 'cyan', items});
  // A figure and a listening block may not touch (mediaAdjacencyRhythm), so when
  // the section ends on an image the block goes before the paragraph above it.
  const at = body.lastIndexOf('<figure');
  const endsOnFigure = at !== -1 && body.slice(at).indexOf('</figure>') + at + 9 >= body.trimEnd().length;
  const para = endsOnFigure ? body.lastIndexOf('<p>', at) : -1;
  return para !== -1 ? `${body.slice(0, para)}${block}\n${body.slice(para)}` : `${body}\n${block}`;
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'how-chosen', heading: 'Nine different approaches to techno'},
  {id: 'detroit-chicago', heading: 'Detroit and Chicago, 1985 to 1987'},
  {id: 'rave-acid-minimalism', heading: 'Rave pressure and acid minimalism, 1990 to 1996'},
  {id: 'berlin-dub-techno', heading: 'Berlin and dub techno'},
  {id: 'underground-resistance', heading: 'Underground Resistance and Doppler'},
  {id: 'play-first', heading: 'Which techno track should you play first?'},
  {id: 'break-from-list', heading: 'Music by thecatrave'}
].map(s => ({...s, title: s.heading.endsWith('?') ? s.heading : `${s.heading}.`}));

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, bodyHtml: renderWithListening(getSection(s.heading), s.id)
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Techno tracks',
    title: 'Best techno tracks: nine records that built the sound',
    deck: 'Nine techno records grouped by scene, each with a player and the facts behind it, from Detroit in 1985 to 2021.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best techno tracks', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A list of records, not a history.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Techno tracks FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.attackmagazine.com/technique/deconstructed/model-500-no-ufos/', "Attack Magazine: Deconstructed, Model 500, No UFO's")}
${sourceLink('https://articles.roland.com/strings-of-life-derrick-may/', 'Roland Articles: Strings of Life, Derrick May')}
${sourceLink('https://daily.redbullmusicacademy.com/2017/05/interview-derrick-may/', 'Red Bull Music Academy Daily: Derrick May interview')}
${sourceLink('https://www.insomniac.com/?p=84044', 'Insomniac: Rhythim Is Rhythim, Strings of Life')}
${sourceLink('https://www.insomniac.com/?p=40063', 'Insomniac: DJ Rolando, Knights of the Jaguar')}
${sourceLink('https://attackmagazine.com/?p=79387', 'Attack Magazine: Joey Beltram, Energy Flash')}
${sourceLink('https://www.insomniac.com/music/from-the-crate-plastikman-spastik/', 'Insomniac: From the Crate, Plastikman, Spastik')}
${sourceLink('https://xlr8r.com/?p=113950', 'XLR8R: Jeff Mills, The Bells')}
${sourceLink('https://ra.co/reviews/24143', 'Resident Advisor: RA Rewind, Basic Channel, Phylyps Trak')}
${sourceLink('https://benklock.bandcamp.com/track/subzero', 'Ben Klock on Bandcamp: Subzero')}
${sourceLink('https://charlottedewittemusic.bandcamp.com/album/formula-ep', 'Charlotte de Witte on Bandcamp: Formula EP')}
${sourceLink('https://www.timeout.com/newyork/nightlife/best-techno-songs-of-all-time', 'Time Out New York: Best techno songs of all time')}
${sourceLink('https://dmy.co/10-best/the-10-best-techno-tracks-according-to-benjamin-damage/', 'Dummy: The 10 best techno tracks according to Benjamin Damage')}
${sourceLink('https://www.musicindustryhowto.com/techno-songs/', 'Music Industry How To: Techno songs')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'One of my own tracks. Buying it supports my work directly.',
    tracks: [
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-techno-tracks.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Techno Tracks', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-techno-tracks'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/best-techno-tracks.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page best-techno-tracks-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-techno-tracks.html', html);
console.log('Built best-techno-tracks.html');
