// Build best-spotify-playlists.html from best-spotify-playlists-draft.md.
//
// The supplied data is competitor organic-keyword evidence, not Search
// Console for this site. Duplicate volumes differ between exports, so the
// research record keeps ranges. The page owns the listener recommendation
// intent; creation, submission, promotion and “most followed” are excluded.
//
// Every entry uses one compact official playlist frame. Three separate track
// iframes per entry would create 36 third-party players and misrepresent a
// playlist article as a track list. The compact frame shows a short playable
// sample while keeping the playlist as the object being recommended.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articlePlaylistPreview,
  articleSection, articleSources, articleStructuredData, articleTable,
  authorCard, bandcampSupport, breadcrumbStructuredData, faqStructuredData,
  infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-spotify-playlists-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-spotify-playlists';
const title = 'Best Spotify Playlists: 12 Human-Curated Picks';
const description = 'Twelve Spotify playlists selected for strong curation and music worth hearing, from KEXP and Pitchfork to Four Tet, Bicep and the electronic underground.';
const datePublished = '2026-09-21';
const dateModified = '2026-09-21';
const dateLabel = '21 September 2026';

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

function parsePlaylistEntries(heading) {
  return getSection(heading).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [entryTitle, ...body] = block.split('\n');
    const notes = paras(body.join('\n'));
    if (notes.length !== 1) throw new Error(`${entryTitle} must have one editorial paragraph`);
    return {entryTitle: entryTitle.trim(), description: notes[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')};
  });
}

const overallMeta = [
  {anchor:'kexp-new-this-week', title:'New This Week', curator:'KEXP', id:'60VayqPuLXaftoj2Wrqpti'},
  {anchor:'pitchfork-best-new-music', title:"Pitchfork's Best New Music", curator:'Pitchfork', id:'7q503YgioHAbo1iOIa67M8'},
  {anchor:'pigeons-and-planes', title:'Pigeons & Planes', curator:'Pigeons & Planes', id:'65xSncKQzG6Suseh5gfYP1'},
  {anchor:'gemsonvhs-monthly', title:'GemsOnVHS Monthly Playlist', curator:'GemsOnVHS', id:'7DMq5SZqREiM7qMbHoFw0j'}
];

const electronicMeta = [
  {anchor:'rare-electronic-music', title:'Rare Electronic Music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', owned:true},
  {anchor:'emotional-electronic-music', title:'Emotional Electronic Music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', owned:true},
  {anchor:'feel-my-bicep', title:'Feel My Bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT'},
  {anchor:'four-tet-playlist', title:"Four Tet's symbol-titled playlist", curator:'Four Tet', id:'2uzbATYxs9V8YQi5lf89WG'},
  {anchor:'altar', title:'Altar', curator:'Spotify', id:'37i9dQZF1DXa71eg5j9dKZ'},
  {anchor:'toolroom-tech-house', title:'Toolroom Tech House', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ'},
  {anchor:'danny-l-harle', title:"Danny L Harle's HUGE PLAYLIST", curator:'Danny L Harle', id:'5wtqmpRl17iVz2nW8U6njL'},
  {anchor:'ukf-drum-and-bass', title:'UKF Drum & Bass', curator:'UKF', id:'4oOZJEq1TBUti6PSouTo5M'}
];

function renderPlaylistList(heading, metadata) {
  const entries = parsePlaylistEntries(heading);
  if (entries.length !== metadata.length) throw new Error(`${heading}: ${entries.length} draft entries for ${metadata.length} playlists`);
  return `<div class="playlist-preview-list">${entries.map((entry, index) => {
    const item = metadata[index];
    if (!entry.entryTitle.includes(item.title)) {
      throw new Error(`${heading}: draft heading "${entry.entryTitle}" does not match "${item.title}"`);
    }
    return articlePlaylistPreview({...item, description: entry.description});
  }).join('\n')}</div>`;
}

const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const criteria = paras(getSection('How these playlists were chosen'));
const choosing = paras(getSection('Which Spotify playlist should you choose?'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [question, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: question.trim(), answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' '), answerHtml: join(paras(body))};
});

const figure = articleFigure({
  src: 'img/spotify-playlists/playlist-still-life-1200.webp',
  srcset: 'img/spotify-playlists/playlist-still-life-320.webp 320w, img/spotify-playlists/playlist-still-life-1200.webp 1200w',
  sizes: '(max-width: 760px) calc(100vw - 2rem), min(72rem, calc(100vw - 4rem))',
  width: 1200, height: 800,
  alt: 'Wired headphones, a portable music player and two translucent cases arranged on a scratched club table',
  caption: 'A playlist is useful when the choices reveal a listener behind them, not merely a mood keyword.',
  className: 'wide-archive-image'
});

const playlistTableLink = (title, id) => `<a href="https://open.spotify.com/playlist/${id}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)} ↗</a>`;
const comparisonTable = articleTable({
  headers: ['Playlist', 'Curator', 'Best for'],
  rows: [
    [playlistTableLink('New This Week', overallMeta[0].id), 'KEXP', 'A broad current release feed'],
    [playlistTableLink("Pitchfork's Best New Music", overallMeta[1].id), 'Pitchfork', 'Music tied to published reviews'],
    [playlistTableLink('Pigeons & Planes', overallMeta[2].id), 'Pigeons & Planes', 'Emerging hip-hop and alternative pop'],
    [playlistTableLink('GemsOnVHS Monthly', overallMeta[3].id), 'GemsOnVHS', 'Country, folk and roots discoveries'],
    [playlistTableLink('Rare Electronic Music', electronicMeta[0].id), 'thecatrave', 'Breaks, techno and leftfield club music'],
    [playlistTableLink('Emotional Electronic Music', electronicMeta[1].id), 'thecatrave', 'Melodic club music with weight'],
    [playlistTableLink('Feel My Bicep', electronicMeta[2].id), 'Bicep', 'A working dance-music record bag'],
    [playlistTableLink("Four Tet's playlist", electronicMeta[3].id), 'Four Tet', 'A deep, genre-resistant archive'],
    [playlistTableLink('Altar', electronicMeta[4].id), 'Spotify', 'Current alternative electronic music'],
    [playlistTableLink('Toolroom Tech House', electronicMeta[5].id), 'Toolroom Records', 'Focused weekly tech house'],
    [playlistTableLink("Danny L Harle's HUGE PLAYLIST", electronicMeta[6].id), 'Danny L Harle', 'Trance, hardcore and maximal pop'],
    [playlistTableLink('UKF Drum & Bass', electronicMeta[7].id), 'UKF', 'Current accessible drum and bass']
  ]
});

const tocItems = [
  {id:'criteria', label:'How these playlists were chosen'},
  {id:'new-music', label:'Best playlists for finding new music'},
  {id:'electronic', label:'Best electronic and dance playlists'},
  {id:'choose', label:'Which playlist should you choose?'},
  {id:'faq', label:'FAQ'}
];

const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;
const introHtml = `${join(intro.slice(0, 2))}${figure}${join(intro.slice(2))}`;

const articleHtml = [
  articleHero({
    kicker: 'Spotify playlists',
    title: 'The best Spotify playlists worth following',
    deck: 'Twelve playlists with an identifiable point of view, arranged by what they help you hear rather than how many followers they have.',
    readingTime, dateModified, dateLabel,
    summaryHtml: infoBanner({label:'Best Spotify playlists', bodyHtml:inline(answer[0]), className:'article-summary'}),
    tocItems
  }),
  articleSection({id:'introduction', title:'A playlist should reveal a listener.', bodyHtml:introHtml, className:'article-intro'}),
  articleSection({id:'criteria', title:'How these playlists were chosen.', bodyHtml:join(criteria)}),
  articleSection({id:'new-music', title:'Best Spotify playlists for finding new music.', bodyHtml:renderPlaylistList('Best Spotify playlists for finding new music', overallMeta)}),
  articleSection({id:'electronic', title:'Best electronic and dance Spotify playlists.', bodyHtml:renderPlaylistList('Best electronic and dance Spotify playlists', electronicMeta)}),
  articleSection({id:'choose', title:'Which Spotify playlist should you choose?', bodyHtml:`${join(choosing)}${comparisonTable}<p>For scene context, continue with the guides to <a href="/bass-music-guide">bass music</a>, <a href="/uk-garage-guide">UK garage</a>, <a href="/dubstep-guide">dubstep</a> and <a href="/drum-and-bass-guide">drum and bass</a>.</p>`}),
  articleFaq({items:faqItems, title:'Spotify playlist FAQ.', openFirst:true}),
  authorCard({filled:true}),
  articleSources({bodyHtml:`<ul>
<li><a href="https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/" target="_blank" rel="noopener noreferrer">Spotify: Discovery-Driven Playlists</a></li>
<li><a href="https://www.gq-magazine.co.uk/article/best-spotify-playlists" target="_blank" rel="noopener noreferrer">British GQ: The best Spotify playlists to escape the AI algorithm</a></li>
<li><a href="https://audiohype.io/resources/the-best-spotify-playlists/" target="_blank" rel="noopener noreferrer">Audiohype: The Best Spotify Playlists in 2026</a></li>
<li><a href="https://routenote.com/blog/most-followed-playlists-on-spotify/" target="_blank" rel="noopener noreferrer">RouteNote: Top 10 most followed playlists on Spotify 2026</a></li>
<li>All twelve Spotify playlist pages were checked directly on 21 September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed:true,
    description:'The two thecatrave playlists above begin with other people\'s records. These are mine. Buying one supports the music and the writing directly.',
    tracks:[
      {title:'Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks by thecatrave'},
      {title:'60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes by thecatrave'}
    ]
  }),
  readNext({items:relatedArticles('best-spotify-playlists.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline:title, description, canonical, image:'https://thecatrave.com/img/og/best-spotify-playlists.jpg', datePublished, dateModified}),
  breadcrumbStructuredData({name:'Best Spotify Playlists', canonical}),
  faqStructuredData({items:faqItems})
];

const html = articlePage({
  alternates:alternatesFor('/best-spotify-playlists'),
  title, description, canonical,
  ogImage:'https://thecatrave.com/img/og/best-spotify-playlists.jpg',
  datePublished, dateModified,
  bodyClass:'article-page spotify-playlists-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-spotify-playlists.html', html);
console.log('Built best-spotify-playlists.html');
