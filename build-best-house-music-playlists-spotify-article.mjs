// Build best-house-music-playlists-spotify.html from the approved editorial draft.
import fs from 'node:fs';
import {
  articleHero, articlePage, articlePlaylistPreview, articleSection, articleSources,
  articleStructuredData, articleTable, authorCard, bandcampSupport,
  breadcrumbStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-house-music-playlists-spotify-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-house-music-playlists-spotify';
const title = 'Best House Music Playlists on Spotify: 12 Curated Picks';
const description = 'Twelve Spotify playlists for house music, from 90s classics and label feeds to two disclosed thecatrave selections spanning house, techno and beyond.';
const datePublished = '2026-09-29';
const dateModified = '2026-10-08';
const dateLabel = '8 October 2026';
const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');
const playlistMeta = new Map([
  ['90s House Classics', {anchor:'nineties-house-classics', curator:'Spotify', id:'37i9dQZF1DWTU3Zl0elDUa', best:'Familiar 1990s foundations'}],
  ['Soulful House', {anchor:'soulful-house', curator:'Spotify', id:'37i9dQZF1DX4q6087QOpL9', best:'Vocals, keys and soulful production'}],
  ['Housewerk NYE by Honey Dijon', {anchor:'housewerk-honey-dijon', curator:'Honey Dijon', id:'7cTINeBX9zKzGM7KsEYuR2', best:'Disco lineage and personal selection'}],
  ['Housewerk', {anchor:'housewerk', curator:'Spotify', id:'37i9dQZF1DXa8NOEUWPn9W', best:'A broad current-house scan'}],
  ['Defected 2026', {anchor:'defected-2026', curator:'Defected Records', id:'7hkduGkMRHv6hy05nPdM45', best:'Vocal and club-facing house'}],
  ['Toolroom Tech House', {anchor:'toolroom-tech-house', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ', best:'Focused current tech house'}],
  ['Deep House 2026 by Selected', {anchor:'selected-deep-house', curator:'Selected', id:'6vDGVr652ztNWKZuHvsFvx', best:'Polished deep and vocal house'}],
  ['Anjunadeep 2026', {anchor:'anjunadeep-2026', curator:'Anjunadeep', id:'2wSNKxLM217jpZnkAgYZPH', best:'Melodic house and gradual builds'}],
  ['Afro House Pulse', {anchor:'afro-house-pulse', curator:'Spotify', id:'37i9dQZF1DX5wO3czN5dc1', best:'African artists and global Afro house'}],
  ['Feel My Bicep', {anchor:'feel-my-bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT', best:'House beside breaks and electro'}],
  ['Rare Electronic Music', {anchor:'rare-electronic-music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', best:'House, techno, breaks and rave', owned:true}],
  ['Emotional Electronic Music', {anchor:'emotional-electronic-music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', best:'Melodic club music across genres', owned:true}]
]);
function entries(heading) {
  const section = getSection(heading);
  const firstEntry = section.indexOf('### ');
  if (firstEntry < 0) throw new Error(`Missing playlist entries in ${heading}`);
  return section.slice(firstEntry).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [entryTitle, ...rest] = block.split('\n');
    const titleText = entryTitle.trim();
    const meta = playlistMeta.get(titleText);
    if (!meta) throw new Error(`Missing Spotify metadata for ${titleText}`);
    const copy = paras(rest.join('\n'));
    if (copy.length !== 1) throw new Error(`${titleText} must have one editorial paragraph`);
    return {title:titleText, description:copy[0], ...meta};
  });
}
const foundations = entries('House foundations and soulful records');
const current = entries('Current house and label filters');
const routes = entries('Melodic, global and artist-curated routes');
const owned = entries('thecatrave playlists: house, techno and beyond');
const all = [...foundations, ...current, ...routes, ...owned];
const render = items => `<div class="playlist-preview-list">${items.map(item => articlePlaylistPreview(item)).join('\n')}</div>`;
const playlistLink = item => `<a href="https://open.spotify.com/playlist/${item.id}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)} ↗</a>`;
const comparison = articleTable({headers:['Playlist', 'Curator', 'Best for'], rows:all.map(item => [playlistLink(item), escapeHtml(item.curator), escapeHtml(item.best)]), label:'House playlists, curators and listening uses'});
const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const criteria = paras(getSection('How these house playlists were chosen'));
const choosing = paras(getSection('Which house playlist should you choose?'));
const sources = getSection('Sources').split('\n').filter(line => line.startsWith('- ')).map(line => `<li>${inline(line.slice(2))}</li>`).join('');
const tocItems = [
  {id:'criteria', label:'How these house playlists were chosen'},
  {id:'foundations', label:'House foundations and soulful records'},
  {id:'current', label:'Current house and label filters'},
  {id:'routes', label:'Melodic, global and artist-curated routes'},
  {id:'thecatrave-playlists', label:'thecatrave playlists: house, techno and beyond'},
  {id:'choose', label:'Which house playlist should you choose?'}
];
const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;
const articleHtml = [
  articleHero({kicker:'House music playlists', title:'The best house music playlists on Spotify', deck:'Ten focused house selections, plus two disclosed thecatrave playlists that connect house and techno to a wider electronic record bag.', readingTime, dateModified, dateLabel, summaryHtml:infoBanner({label:'Best house music playlists on Spotify', bodyHtml:inline(answer[0]), className:'article-summary'}), tocItems}),
  articleSection({id:'introduction', title:'Choose the lane before the playlist.', bodyHtml:join(intro), className:'article-intro'}),
  articleSection({id:'criteria', title:'How these house playlists were chosen.', bodyHtml:join(criteria)}),
  articleSection({id:'foundations', title:'House foundations and soulful records.', bodyHtml:render(foundations)}),
  articleSection({id:'current', title:'Current house and label filters.', bodyHtml:render(current)}),
  articleSection({id:'routes', title:'Melodic, global and artist-curated routes.', bodyHtml:render(routes)}),
  articleSection({id:'thecatrave-playlists', title:'thecatrave playlists: house, techno and beyond.', bodyHtml:`<p>${inline(paras(getSection('thecatrave playlists: house, techno and beyond'))[0])}</p>${render(owned)}`}),
  articleSection({id:'choose', title:'Which house playlist should you choose?', bodyHtml:`${join(choosing)}${comparison}`}),
  authorCard({filled:true}),
  articleSources({bodyHtml:`<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed:true, description:'These releases sit close to the broken and club-focused edges of house covered above. Buying one supports the music and writing directly.', tracks:[
    {title:'thecatrave, Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks by thecatrave'},
    {title:'thecatrave, 60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items:relatedArticles('best-house-music-playlists-spotify.html')})
].join('\n');
const structuredData = [articleStructuredData({headline:title, description, canonical, image:'https://thecatrave.com/img/og/best-house-music-playlists-spotify.jpg', datePublished, dateModified}), breadcrumbStructuredData({name:'Best House Music Playlists on Spotify', canonical})];
const html = articlePage({alternates:alternatesFor('/best-house-music-playlists-spotify'), title, description, canonical, ogImage:'https://thecatrave.com/img/og/best-house-music-playlists-spotify.jpg', datePublished, dateModified, bodyClass:'article-page house-playlists-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-house-music-playlists-spotify.html', html);
console.log('Built best-house-music-playlists-spotify.html');
