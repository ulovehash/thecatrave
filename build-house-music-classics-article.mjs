// Build house-music-classics.html from house-music-classics-draft.md.
//
// Keywords (keywords/house-music-classics.json): "house music classics",
// "house classics" and "classic house songs", each 1K-10K worldwide (Keyword
// Planner, 6 October 2026, ranges only). Intent: a short, ordered listening
// list of ten records, 1988 to 2001. It is deliberately not the house music
// guide (/house-music-guide, "classic house music"), which tells the history
// and already embeds the earlier records; none of those is embedded here.
//
// Every embed is an artist, label, VEVO or Topic upload, checked through
// YouTube oEmbed on 6 October 2026, and none is embedded on another guide.
// Two Commons photographs (TR-909, Crystal Waters), served locally; neither is
// used by another guide. The card reuses the Lot Radio photo, as
// best-dj-sets-of-all-time does.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources, articleStructuredData, articleTable,
  articleVideoCard, articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('house-music-classics-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/house-music-classics';
const title = 'House Music Classics: 10 Classic House Songs to Hear';
const description = 'House music classics in order, from Inner City and Lil Louis to Stardust and Kings of Tomorrow: ten classic house songs, nine with a player and one fact each.';
const datePublished = '2026-10-06';
const dateModified = '2026-10-06';
const dateLabel = '6 October 2026';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');

// Heading in the draft -> [YouTube id, genre label, artist, video title]. A
// missing entry fails the build. All checked by oEmbed on 6 October 2026.
const players = new Map([
  ['Inner City, Good Life, 1988', ['KJxJxr9RlKM', 'House, 1988', 'Inner City', 'Good Life']],
  ['Lil Louis, French Kiss, 1989', ['rmOAVfEDyhA', 'House, 1989', 'Lil\' Louis', 'French Kiss (The Original Underground Mix)']],
  ['Alison Limerick, Where Love Lives, 1991', ['Wep5nUkLcDk', 'House, 1991', 'Alison Limerick', 'Where Love Lives (Classic Club Mix)']],
  ['Crystal Waters, Gypsy Woman (She\'s Homeless), 1991', ['_KztNIg4cvE', 'House, 1991', 'Crystal Waters', 'Gypsy Woman (She\'s Homeless)']],
  ['Robin S, Show Me Love, 1993', ['onZbcgPaAJM', 'House, 1993', 'Robin S', 'Show Me Love (StoneBridge Club Mix, 2020 remaster)']],
  ['Everything But the Girl, Missing (Todd Terry Remix), 1995', ['IAkY5m00rpY', 'House, 1995', 'Everything But the Girl', 'Missing (Todd Terry Remix)']],
  ['Stardust, Music Sounds Better With You, 1998', ['FQlAEiCb8m0', 'French house, 1998', 'Stardust', 'Music Sounds Better With You']],
  ['Armand van Helden, You Don\'t Know Me, 1999', ['rnlp_avexYQ', 'House, 1999', 'Armand van Helden', 'You Don\'t Know Me (Radio Edit)']],
  ['Kings of Tomorrow, Finally, 2001', ['9X0WEvHptEE', 'House, 2001', 'Kings of Tomorrow', 'Finally (Radio Edit)']]
]);
const used = new Set();

// Passion has no player: the only upload found has unconfirmed rights.
const noPlayer = new Set(['Gat Decor, Passion, 1992']);

function player(heading) {
  if (noPlayer.has(heading)) return '';
  const spec = players.get(heading);
  if (!spec) throw new Error(`No player for entry: ${heading}`);
  used.add(heading);
  const [youtubeId, genre, artist, videoTitle] = spec;
  return articleVideoCollection({
    label: `${artist}, ${videoTitle}`,
    description: `Play ${videoTitle} from the official upload.`,
    items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
  });
}

// Photographs go after an entry's last paragraph, never next to a player.
const figures = new Map([
  ['Inner City, Good Life, 1988', articleFigure({
    src: 'img/house-music-classics/roland-tr-909-1200.webp',
    srcset: 'img/house-music-classics/roland-tr-909-320.webp 320w, img/house-music-classics/roland-tr-909-1200.webp 1200w',
    width: 1200, height: 709,
    alt: 'Front panel of a Roland TR-909 drum machine with its sixteen step buttons and tempo display',
    caption: 'The Roland TR-909, the drum machine Kevin Saunderson used for the "Good Life" instrumental. Photograph: Brandon Daniel, CC BY-SA 2.0.',
    className: 'wide-archive-image'
  })],
  ['Crystal Waters, Gypsy Woman (She\'s Homeless), 1991', articleFigure({
    src: 'img/house-music-classics/crystal-waters-2012-900.webp',
    srcset: 'img/house-music-classics/crystal-waters-2012-320.webp 320w, img/house-music-classics/crystal-waters-2012-900.webp 900w',
    width: 900, height: 1350,
    alt: 'Crystal Waters singing into a microphone on an outdoor stage',
    caption: 'Crystal Waters on stage at the Capital Pride festival in Washington, DC, in 2012. She wrote "Gypsy Woman" after watching a homeless woman in the same city. Photograph: Elvert Barnes, CC BY-SA 2.0.',
    className: 'portrait-image'
  })]
]);

// One entry = heading, first paragraph, player, then the rest.
function renderEntries(heading) {
  return getSection(heading).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [entryTitle, ...rest] = block.split('\n');
    const copy = paras(rest.join('\n'));
    if (copy.length < 1 || copy.length > 3) throw new Error(`${entryTitle} must have one to three paragraphs`);
    return `<h3>${escapeHtml(entryTitle.trim())}</h3>${join(copy.slice(0, 1))}${player(entryTitle.trim())}${join(copy.slice(1))}${figures.get(entryTitle.trim()) || ''}`;
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const method = paras(getSection('How these ten were chosen'));
const others = paras(getSection('Before 1988, and the other classics'));
const breakIntro = paras(getSection('Two tracks of mine, as a break'));
const start = paras(getSection('Where to start'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  const answerHtml = join(paras(body));
  // Plain-text answer for the schema: tags become spaces and entities are
  // decoded, which is how the audit reads the visible answer.
  const answer = answerHtml.replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer, answerHtml};
});
const sources = getSection('Sources').split('\n').filter(line => line.startsWith('- ')).map(line => `<li>${inline(line.slice(2))}</li>`).join('');

const glanceTable = articleTable({headers: ['Year', 'Record', 'Named by'], rows: [
  ['1988', 'Inner City, Good Life', 'NME, Billboard'],
  ['1989', 'Lil Louis, French Kiss', 'NME'],
  ['1991', 'Alison Limerick, Where Love Lives', '6AM Group, Billboard'],
  ['1991', 'Crystal Waters, Gypsy Woman', 'Billboard'],
  ['1992', 'Gat Decor, Passion', 'NME'],
  ['1993', 'Robin S, Show Me Love', 'NME, Billboard'],
  ['1995', 'Everything But the Girl, Missing (Todd Terry Remix)', 'Billboard'],
  ['1998', 'Stardust, Music Sounds Better With You', 'NME, Billboard'],
  ['1999', 'Armand van Helden, You Don\'t Know Me', '6AM Group, Billboard'],
  ['2001', 'Kings of Tomorrow, Finally', '6AM Group, Billboard']
]});
const elsewhereTable = articleTable({headers: ['Record', 'Where it is played'], rows: [
  ['Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles, Farley "Jackmaster" Funk', '<a href="/house-music-guide">House music guide</a>'],
  ['Phuture, Acid Tracks; A Guy Called Gerald, Voodoo Ray', '<a href="/acid-house-guide">Acid house guide</a>'],
  ['Rhythim Is Rhythim, Strings of Life', '<a href="/techno-music-guide">Techno guide</a>']
]});
const records = articleSection({id: 'classic-house-songs', title: 'Classic house songs, 1988 to 2001.', bodyHtml: '<p>Each record below has a short account of why it lasted, a player for the official upload, and the lists that named it. They run in order of release, from the Chicago and Detroit years to the French filter-disco wave.</p>\n' + renderEntries('Classic house songs, 1988 to 2001')});
for (const heading of players.keys()) if (!used.has(heading)) throw new Error(`Unused player: ${heading}`);
if (used.size + noPlayer.size !== 10) throw new Error(`Expected 10 records, found ${used.size + noPlayer.size}`);

const ownBreak = articleSection({
  id: 'artist-music', title: 'Two tracks of mine, as a break.',
  bodyHtml: join(breakIntro) +
    ownTrackListening('berlin-race-1909', 'Breakbeat drums under dub techno space. My own track, and not a house record.') +
    ownTrackListening('no-genre-no-problem', 'Glitch, IDM and ambient without one scene to belong to. My own track, and not a house record.')
});

const tocItems = [
  {id: 'method', label: 'How these ten were chosen'},
  {id: 'classic-house-songs', label: 'Classic house songs'},
  {id: 'before-1988', label: 'Before 1988'},
  {id: 'artist-music', label: 'Two tracks of mine'},
  {id: 'where-to-start', label: 'Where to start'},
  {id: 'faq', label: 'FAQ'}
];
const readingTime = `${Math.max(5, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({kicker: 'House', title: 'House music classics', deck: 'Ten classic house songs in the order they came out, from Inner City in 1988 to Kings of Tomorrow in 2001, nine with a player.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'House music classics', bodyHtml: inline(answer[0]), className: 'article-summary'}), tocItems}),
  articleSection({id: 'introduction', title: 'A listening list, not a history.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'method', title: 'How these ten were chosen.', bodyHtml: join(method) + glanceTable}),
  records,
  articleSection({id: 'before-1988', title: 'Before 1988, and the other classics.', bodyHtml: join(others) + elsewhereTable}),
  ownBreak,
  articleSection({id: 'where-to-start', title: 'Where to start.', bodyHtml: join(start)}),
  articleFaq({items: faqItems, title: 'House classics FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed: true, description: 'Buying one of these supports the music and the writing directly.', tracks: [
    {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
    {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items: relatedArticles('house-music-classics.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: 'https://thecatrave.com/img/og/house-music-classics.jpg', datePublished, dateModified}),
  breadcrumbStructuredData({name: 'House Music Classics', canonical}),
  faqStructuredData({items: faqItems})
];
const html = articlePage({alternates: alternatesFor('/house-music-classics'), title, description, canonical, ogImage: 'https://thecatrave.com/img/og/house-music-classics.jpg', datePublished, dateModified, bodyClass: 'article-page house-music-classics-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('house-music-classics.html', html);
console.log('Built house-music-classics.html');
