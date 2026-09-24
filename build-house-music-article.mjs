// Build house-music-guide.html from house-music-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go first 3"), with the techno guide
// and the NYC clubs guide. Research: the "Пакет волны 3" entries in
// TOPIC-DOSSIERS.md. Volumes are Google Ads Keyword Planner ranges (All
// locations), recorded in keywords/house-music.json. "house music" was left
// out of the acid house guide on purpose as "a candidate guide of its own"
// (keywords/acid-house.json). Stage 6 was not run as a separate pass: the
// owner asked for the three articles straight after stages 1 to 5.
//
// Listeners, not producers: nothing here explains how to make house music.
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

const draft = fs.readFileSync('house-music-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/house-music-guide';
const title = 'What Is House Music? History, Sound and Chicago Origins';
const description = 'House music is Chicago dance music built on a four-on-the-floor kick: why it is called house, Frankie Knuckles, the first records and the styles since.';
const datePublished = '2026-09-24';
const dateModified = '2026-09-24';
const dateLabel = '24 September 2026';

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

// From Wikimedia Commons, downloaded to img/house-music/ on 2026-09-24,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/house-music/${name}-${width}.webp`,
  srcset: `img/house-music/${name}-320.webp 320w, img/house-music/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Exact records are the Topic channel's, the label's or the artist's own
// upload; sets are from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-09-24 and embedded by no other guide (media/house-music.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'TR-808 and TR-909': figure('roland-tr808-tr909', 1200, 896,
    'A Roland TR-808 drum machine leaning against a wall beside a Roland TR-909 on a studio floor',
    'A Roland TR-808 and a TR-909, packed for a studio move. Both were sold as practice machines for musicians; Chicago house was built on them. Photograph: Brandon Daniel, CC BY-SA 2.0.'),
  'Frankie Knuckles at ADE': figure('frankie-knuckles-ade-2012', 1200, 800,
    'Frankie Knuckles behind the decks at a club in Amsterdam, lit in purple, with people crowding the booth',
    'Frankie Knuckles playing at the Sugar Factory in Amsterdam during Amsterdam Dance Event, October 2012, a year and a half before he died. Photograph: deepstereo, CC BY 2.0.'),
  'Frankie Knuckles Way': figure('frankie-knuckles-way-2022', 1200, 900,
    'A brown Chicago street sign reading Honorary The Godfather of House Music Frankie Knuckles Way',
    'The honorary street sign on Jefferson Street in Chicago, the block where the Warehouse stood, renamed in 2004. Photograph: Sarah Stierch, CC BY 4.0.'),
  'Frankie Knuckles Boiler Room NYC': video('644UU55eyzk', 'House', 'Frankie Knuckles', 'DJ set, Boiler Room New York, 2013',
    "Frankie Knuckles playing for Boiler Room in New York in 2013, on Boiler Room's own channel."),
  'On and On': video('ef868Dctwkg', 'House, 1984', 'Jesse Saunders', 'On & On',
    'The record most often called the first house record, from 1984.'),
  'Your Love': video('ottFhv0zD_8', 'House, 1987', 'Frankie Knuckles', 'Your Love',
    'Jamie Principle\'s song as Knuckles released it in 1987, after a year of playing it from tape.'),
  'Move Your Body': video('dZVxqo2xAd4', 'House, 1986', 'Marshall Jefferson', 'Move Your Body',
    '"The House Music Anthem", on Trax Records\' own channel.'),
  'Can You Feel It': video('DrxPFBEr5Bo', 'Deep house, 1986', 'Mr. Fingers', 'Can You Feel It',
    'Larry Heard as Mr. Fingers: the record where deep house begins.'),
  'Kerri Chandler Rain': video('weyCHkdL-HI', 'Deep house', 'Kerri Chandler', 'Rain',
    'Kerri Chandler\'s "Rain", on Nervous Records\' own channel.'),
  'Love Can\'t Turn Around': video('wch77HlcVl0', 'House, 1986', 'Farley "Jackmaster" Funk', "Love Can't Turn Around",
    'The Chicago record that reached number 10 in Britain in September 1986, with Darryl Pandy singing.'),
  'Promised Land': video('BJyD_TPeJAI', 'House, 1987', 'Joe Smooth', 'Promised Land',
    'Joe Smooth\'s Chicago anthem from 1987. Carl Cox and Green Velvet closed Chicago\'s ARC festival with it in 2024.'),
  'One More Time': video('FGBhQbmPwH8', 'French house, 2000', 'Daft Punk', 'One More Time',
    'Daft Punk\'s French house single from November 2000, on the duo\'s own channel.'),
  'Black Coffee Cercle': video('SGqg_ZzThDU', 'Afro house', 'Black Coffee', 'Salle Wagram, Paris, for Cercle',
    'Black Coffee playing for Cercle in Paris. From this site\'s catalogue of recorded DJ sets.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave. My own mix.'),
  'Table: subgenres': articleTable({
    headers: ['Style', 'Where and when', 'What it sounds like', 'A record to start with'],
    rows: [
      ['Chicago house', 'Chicago, 1984 onwards', 'Drum machines, a deep bassline, a repeated vocal line', 'Marshall Jefferson, "Move Your Body"'],
      ['Deep house', 'Chicago, 1985 onwards', 'Slower and warmer, jazz and soul chords, long pads', 'Mr. Fingers, "Can You Feel It"'],
      ['Acid house', 'Chicago, 1987', 'A TB-303 bassline twisted by hand at the front', 'Phuture, "Acid Tracks"'],
      ['Garage house', 'New York and New Jersey, 1980s', 'Gospel piano, strong vocals, close to disco', 'Kerri Chandler, "Rain"'],
      ['Ghetto house', 'Chicago, early 1990s', 'Faster and rawer, from the Dance Mania label', 'Paul Johnson'],
      ['French house', 'Paris, late 1990s', 'Samples of funk and disco records, often filtered', 'Daft Punk, "One More Time"'],
      ['Tech house', 'Britain and Spain, 1990s', 'Techno drums with house groove', 'No single founding record'],
      ['Afro house and amapiano', 'South Africa, 1990s to 2020s', 'House rhythm with kwaito, jazz and local percussion', 'Black Coffee']
    ].map(row => row.map(escapeHtml))
  }),
  'Table: comparison': articleTable({
    headers: ['', 'House', 'Techno', 'EDM'],
    rows: [
      ['Where', 'Chicago, early 1980s', 'Detroit, mid 1980s', 'US festivals, from about 2010'],
      ['Tempo', 'About 118 to 128 BPM', 'About 120 to 150 BPM', 'Varies with the style'],
      ['What leads', 'Groove, bassline, often a vocal', 'Machine rhythm and texture, rarely a vocal', 'Drops and big synth hooks'],
      ['What the word means', 'A genre', 'A genre', 'A marketing term for a scene']
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
  {id: 'what-is-house-music', heading: 'What is house music', title: 'What is house music?'},
  {id: 'sound', heading: 'What house music sounds like'},
  {id: 'warehouse', heading: 'The Warehouse and Frankie Knuckles'},
  {id: 'name', heading: 'Why is it called house music', title: 'Why is it called house music?'},
  {id: 'first-records', heading: 'The first house records'},
  {id: 'deep-and-acid', heading: 'Deep house and acid house'},
  {id: 'garage', heading: 'New York and New Jersey: garage house'},
  {id: 'global', heading: 'How house music went global'},
  {id: 'types', heading: 'Types of house music'},
  {id: 'house-techno-edm', heading: 'House, techno and EDM'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'House music guide',
    title: 'House music: from the Warehouse in Chicago to everywhere',
    deck: 'A DJ who re-cut disco records on tape, a club full of dancers nobody else catered for, and the records they made when nobody was making the ones they wanted.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'House music definition', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Records nobody was making.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'House music FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/House_music', 'Wikipedia: House music')}
${sourceLink('https://en.wikipedia.org/wiki/Frankie_Knuckles', 'Wikipedia: Frankie Knuckles')}
${sourceLink('https://en.wikipedia.org/wiki/Chicago_house', 'Wikipedia: Chicago house')}
${sourceLink('https://en.wikipedia.org/wiki/Move_Your_Body_(Marshall_Jefferson_song)', 'Wikipedia: Move Your Body (Marshall Jefferson song)')}
${sourceLink('https://en.wikipedia.org/wiki/Jack_Your_Body', 'Wikipedia: Jack Your Body')}
${sourceLink('https://en.wikipedia.org/wiki/Paradise_Garage', 'Wikipedia: Paradise Garage')}
${sourceLink('https://djmag.com/features/all-night-long-40-essential-tracks-40-years-of-house-music', 'DJ Mag: 40 essential tracks from 40 years of house music (2024)')}
${sourceLink('https://splice.com/blog/what-is-house-music/', 'Splice: What is house music? History, artists and subgenres')}
<li>Set counts are measured from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('house-music-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'House Music Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/house-music-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/house-music.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page house-music-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('house-music-guide.html', html);
console.log('Built house-music-guide.html');
