// The media of the breakbeat guide, for its translations.
//
// The English page (breakbeat-guide.html, build-breakbeat-article.mjs) places
// its listening groups before subheadings and its images after paragraphs,
// matched by their opening words. The translations place the same blocks with
// placeholder lines at the same positions. This file holds what both languages
// share: the tracks and their players, the group and playlist players, the
// owner's own music and the history map, drawn from translated labels. Each
// language's module builds its own figures and comparison table.
//
// Rendered as on the English page: the Chemical Brothers photograph is keyed to
// a paragraph opening that no longer exists in the English draft, so the
// English page does not show it, and neither do the translations.
//
// This file sits at the root of content/, not in a language folder, so
// build-localized-articles.mjs does not take it for a page.
import {
  articleListeningBand, articleListeningCollection, articleTrackEmbed, ownTrackListening
} from '../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = value => value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// The English page's track list, in its order; the notes are each language's.
export const breakbeatTracks = [
  {year: '1969', artist: 'The Winstons', title: 'Amen, Brother', embed: {type: 'spotify', id: '2jnj8onRgXr1uErISf3F9j'}},
  {year: '1970', artist: 'James Brown', title: 'Funky Drummer', embed: {type: 'spotify', id: '61D6PGXxHI5iB10tQGgOEv'}},
  {year: '1972', artist: 'Lyn Collins', title: 'Think (About It)', embed: {type: 'spotify', id: '1kG2PZ8geznbDA8I6iWeDi'}},
  {year: '1973', artist: 'Incredible Bongo Band', title: 'Apache', embed: {type: 'spotify', id: '2ZvUoTx8BggYceQJz24xgG'}},
  {year: '1988', artist: 'Mantronix', title: 'King of the Beats', embed: {type: 'spotify', id: '5odEZsaNzWnNihJjibL49h'}},
  {year: '1989', artist: 'Shut Up and Dance', title: '£10 to Get In', embed: {type: 'spotify-playlist', id: '05VlU7NQ48rCqPRQiEnXsj'}},
  {year: '1991', artist: 'SL2', title: 'DJs Take Control', embed: {type: 'spotify', id: '0sE1Ta0tO8eWIjlVPaWfse'}},
  {year: '1991', artist: '2 Bad Mice', title: 'Bombscare', embed: {type: 'spotify', id: '5XOV549T7vl4Q3Z9MNZqeV'}},
  {year: '1991', artist: 'The Prodigy', title: 'Charly', embed: {type: 'spotify', id: '2PQnjk1iMjwqvHsY5ExHSA'}},
  {year: '1992', artist: 'SL2', title: 'On a Ragga Tip', embed: {type: 'youtube', id: 'LRy15WXFj7U'}},
  {year: '1995', artist: 'The Chemical Brothers', title: 'Chemical Beats', embed: {type: 'spotify', id: '2uFngE6ePszeJV3Cbtrfpc'}},
  {year: '1995', artist: 'The Chemical Brothers', title: 'Leave Home', embed: {type: 'spotify', id: '6LoFbENZwUbb0UVVA3jgQy'}},
  {year: '1996', artist: 'Überzone', title: 'Botz', embed: {type: 'youtube', id: '6Gy3mAbPLhA'}},
  {year: '1998', artist: 'DJ Icey', title: 'This Is How My Drummer Drums', embed: {type: 'youtube', id: '5zSTWBHlYUA'}},
  {year: '1999', artist: 'Hybrid', title: 'Finished Symphony', embed: {type: 'spotify', id: '7nUwU36boOFB8QL7oFeM1z'}},
  {year: '2000', artist: 'Plump DJs', title: 'Electric Disco', embed: {type: 'spotify', id: '5AjUSWK2RtYPxPIXYElrBA'}},
  {year: '2001', artist: 'Stanton Warriors', title: 'Da Antidote', embed: {type: 'spotify-playlist', id: '7zKXwyQSg9dRQvaTpO1nOQ'}},
  {year: '2017', artist: 'BICEP', title: 'Glue', embed: {type: 'spotify', id: '2aJDlirz6v2a4HREki98cP'}},
  {year: '2018', artist: 'Skee Mask', title: '50 Euro to Break Boost', embed: {type: 'soundcloud', url: 'https%3A//soundcloud.com/ilian-tape/skee-mask-50-euro-to-break-boost'}},
  {year: '2021', artist: 'Overmono', title: 'So U Kno', embed: {type: 'youtube', id: 'SRVxRUJxITY'}},
  {year: '2024', artist: 'thecatrave', title: 'Berlin Race 1909', embed: {type: 'spotify', id: '1iq7tX1EWPR7INIjkxhGSu'}}
];

// Placeholder key -> the English group's track numbers, in the English order
// of appearance.
const groups = {
  'breaks-before-genre': [1, 2, 3, 4],
  'british-rave-group': [5, 6, 7, 8, 9],
  'florida-group': [13],
  'acid-west-coast-group': [11, 12],
  'crossover-group': [10],
  'nu-skool-group': [14, 15, 16],
  'contemporary-group': [17, 18, 19, 20, 21]
};

// The English map, redrawn with each language's labels. Same geometry, links
// and dates.
function historyMap(map) {
  const node = (x, y, w, [title, date], klass = '') => `<g class="map-node ${klass}" tabindex="0"><rect x="${x}" y="${y}" width="${w}" height="60" rx="2"/><text x="${x + 12}" y="${y + 24}"><tspan>${escapeHtml(title)}</tspan><tspan class="map-date" x="${x + 12}" dy="20">${escapeHtml(date)}</tspan></text></g>`;
  const n = map.nodes;
  return `<figure class="genre-map breakbeat-map"><svg viewBox="0 0 1040 470" role="img" aria-labelledby="bb-map-title bb-map-desc"><title id="bb-map-title">${escapeHtml(map.title)}</title><desc id="bb-map-desc">${escapeHtml(map.desc)}</desc><g class="map-columns">${map.columns.map((label, index) => `<text x="${[20, 220, 470, 730][index]}" y="28">${escapeHtml(label)}</text>`).join('')}</g><g class="map-links"><path d="M180 116 C205 116 195 100 220 100"/><path d="M180 230 C205 230 195 100 220 100"/><path d="M180 230 C205 230 195 190 220 190"/><path d="M180 230 C205 230 195 280 220 280"/><path d="M180 230 C205 230 195 370 220 370"/><path d="M410 100 C440 100 440 100 470 100"/><path d="M410 100 C440 100 440 190 470 190"/><path d="M410 190 C440 190 440 280 470 280"/><path d="M410 280 C440 280 440 370 470 370"/><path d="M410 370 C550 370 590 280 730 280"/><path d="M660 100 C695 100 695 100 730 100"/><path d="M660 190 C695 190 695 190 730 190"/><path d="M660 280 C695 280 695 280 730 280"/><path d="M660 370 C695 370 695 370 730 370"/></g>${node(20, 86, 160, n[0])}${node(20, 200, 160, n[1])}${node(220, 70, 190, n[2])}${node(220, 160, 190, n[3])}${node(220, 250, 190, n[4])}${node(220, 340, 190, n[5])}${node(470, 70, 190, n[6])}${node(470, 160, 190, n[7])}${node(470, 250, 190, n[8])}${node(470, 340, 190, n[9])}${node(730, 70, 280, n[10])}${node(730, 160, 280, n[11])}${node(730, 250, 280, n[12])}${node(730, 340, 280, n[13])}</svg><ol class="genre-map-mobile">${map.mobile.map(([when, what, detail]) => `<li><span>${escapeHtml(when)}</span><strong>${escapeHtml(what)}</strong><p>${escapeHtml(detail)}</p></li>`).join('')}</ol><figcaption>${escapeHtml(map.caption)}</figcaption></figure>`;
}

// copy: {notes: [21 notes], groups: {key: [title, description]}, playerTitle,
//   floridaPlaylist, nuSkoolPlaylist: {title, description, iframeTitle},
//   protectYaBreaks, contemporaryMix: {kicker, title, description, iframeTitle},
//   popCulture: {label, text}, map}
export function breakbeatMedia(lang, copy) {
  const tracks = breakbeatTracks.map((track, index) => ({
    ...track, note: copy.notes[index], anchor: `track-${slug(`${track.artist}-${track.title}`)}`
  }));
  const media = {};
  for (const [key, numbers] of Object.entries(groups)) {
    const [title, description] = copy.groups[key];
    media[key] = articleListeningCollection({
      lang, id: `listen-${key}`, title, description, tone: 'cyan',
      items: numbers.map(number => tracks[number - 1]).map(track => ({
        ...track,
        playerHtml: articleTrackEmbed({platform: track.embed.type, id: track.embed.id, url: track.embed.url, title: `${track.artist}, ${track.title}`})
      }))
    });
  }
  media['florida-playlist'] = articleListeningBand({
    platform: 'spotify', id: 'breakbeat-florida-playlist', kicker: copy.listening, ...copy.floridaPlaylist,
    src: 'https://open.spotify.com/embed/playlist/0siRXruXSaatxiMoL41G1o?utm_source=generator', tone: 'cyan'
  });
  media['nu-skool-playlist'] = articleListeningBand({
    platform: 'spotify', id: 'breakbeat-nu-skool-playlist', kicker: copy.listening, ...copy.nuSkoolPlaylist,
    src: 'https://open.spotify.com/embed/playlist/6BfYBqrSm30CXrqFwecv5d?utm_source=generator', tone: 'cyan'
  });
  // The owner's own music, where the English page plays it.
  media['thecatrave protect-ya-breaks'] = ownTrackListening('protect-ya-breaks', copy.protectYaBreaks, lang);
  media['contemporary-mix'] = articleListeningBand({
    platform: 'soundcloud', id: 'breakbeat-contemporary-mix', ...copy.contemporaryMix,
    src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    fullBleed: true, tone: 'cyan'
  });
  media['pop-culture'] = `<blockquote class="article-listen"><strong>${escapeHtml(copy.popCulture.label)}</strong> ${copy.popCulture.html}</blockquote>`;
  media['history-map'] = historyMap(copy.map);
  return media;
}
