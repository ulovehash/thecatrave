// French house music playlists guide. Structure, playlists and facts from the English
// page (best-house-music-playlists-spotify-draft.md, build-best-house-music-playlists-spotify-article.mjs).
// Wording is the page's own (the Google SERP check was blocked by a bot-check, so it was
// not verified there); volumes are null in keywords/fr-best-house-music-playlists-spotify.json.

import {articleTable} from '../../site-components.mjs';

const link = (title, id) => `<a href="https://open.spotify.com/playlist/${id}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`;

export default {
  lang: 'fr',
  name: 'fr-best-house-music-playlists-spotify',
  file: 'fr/meilleures-playlists-house-spotify.html',
  draft: 'fr/best-house-music-playlists-spotify-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleures-playlists-house-spotify',
  englishPath: '/best-house-music-playlists-spotify',
  ogImage: 'https://thecatrave.com/img/og/best-house-music-playlists-spotify.jpg',
  bodyClass: 'article-page house-playlists-page',
  minReadingMinutes: 7,

  title: 'Meilleures playlists house sur Spotify : 12 sélections',
  description: 'Douze playlists Spotify pour la house music, des classiques des années 90 et flux de labels à deux sélections signalées de thecatrave entre house, techno et plus.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Playlists house',
  heroTitle: 'Les meilleures playlists house sur Spotify',
  deck: 'Dix sélections house ciblées, plus deux playlists signalées de thecatrave qui relient house et techno à un bac à disques électronique plus large.',
  answerLabel: 'MEILLEURES PLAYLISTS HOUSE SUR SPOTIFY',
  breadcrumbName: 'Les meilleures playlists house sur Spotify',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Choisis la voie avant la playlist.',

  sections: [
    {id: 'criteria', heading: 'Comment ces playlists house ont été choisies', title: 'Comment ces playlists house ont été choisies.', tocLabel: 'Comment elles ont été choisies'},
    {id: 'foundations', heading: 'Fondations de la house et disques soulful', title: 'Fondations de la house et disques soulful.', tocLabel: 'Fondations et soulful', playlists: [{anchor:'nineties-house-classics', title:'90s House Classics', curator:'Spotify', id:'37i9dQZF1DWTU3Zl0elDUa'},
    {anchor:'soulful-house', title:'Soulful House', curator:'Spotify', id:'37i9dQZF1DX4q6087QOpL9'},
    {anchor:'housewerk-honey-dijon', title:'Housewerk NYE by Honey Dijon', curator:'Honey Dijon', id:'7cTINeBX9zKzGM7KsEYuR2'}]},
    {id: 'current', heading: 'House actuelle et filtres de labels', title: 'House actuelle et filtres de labels.', tocLabel: 'House actuelle et labels', playlists: [{anchor:'housewerk', title:'Housewerk', curator:'Spotify', id:'37i9dQZF1DXa8NOEUWPn9W'},
    {anchor:'defected-2026', title:'Defected 2026', curator:'Defected Records', id:'7hkduGkMRHv6hy05nPdM45'},
    {anchor:'toolroom-tech-house', title:'Toolroom Tech House', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ'},
    {anchor:'selected-deep-house', title:'Deep House 2026 by Selected', curator:'Selected', id:'6vDGVr652ztNWKZuHvsFvx'}]},
    {id: 'routes', heading: 'Routes mélodiques, mondiales et signées par des artistes', title: 'Routes mélodiques, mondiales et signées par des artistes.', tocLabel: 'Mélodique, mondial, artistes', playlists: [{anchor:'anjunadeep-2026', title:'Anjunadeep 2026', curator:'Anjunadeep', id:'2wSNKxLM217jpZnkAgYZPH'},
    {anchor:'afro-house-pulse', title:'Afro House Pulse', curator:'Spotify', id:'37i9dQZF1DX5wO3czN5dc1'},
    {anchor:'feel-my-bicep', title:'Feel My Bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT'}]},
    {id: 'thecatrave-playlists', heading: 'Les playlists thecatrave : house, techno et au-delà', title: 'Les playlists thecatrave : house, techno et au-delà.', tocLabel: 'Playlists thecatrave', playlists: [{anchor:'rare-electronic-music', title:'Rare Electronic Music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', owned:true},
    {anchor:'emotional-electronic-music', title:'Emotional Electronic Music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', owned:true}]},
    {id: 'choose', heading: 'Quelle playlist house choisir ?', title: 'Quelle playlist house choisir ?', tocLabel: 'Quelle playlist choisir ?'}
  ],

  media: () => ({
    'Comparatif des playlists': articleTable({
      headers: ['Playlist', 'Curateur', 'Idéale pour'],
      rows: [
        [link('90s House Classics', '37i9dQZF1DWTU3Zl0elDUa'), 'Spotify', 'Des bases familières des années 1990'],
        [link('Soulful House', '37i9dQZF1DX4q6087QOpL9'), 'Spotify', 'Voix, claviers et production soulful'],
        [link('Housewerk NYE by Honey Dijon', '7cTINeBX9zKzGM7KsEYuR2'), 'Honey Dijon', 'Filiation disco et sélection personnelle'],
        [link('Housewerk', '37i9dQZF1DXa8NOEUWPn9W'), 'Spotify', 'Un large panorama de la house actuelle'],
        [link('Defected 2026', '7hkduGkMRHv6hy05nPdM45'), 'Defected Records', 'Une house vocale tournée vers le club'],
        [link('Toolroom Tech House', '6J1r02xyO2qkMA9dDNZytJ'), 'Toolroom Records', 'Une tech house actuelle bien ciblée'],
        [link('Deep House 2026 by Selected', '6vDGVr652ztNWKZuHvsFvx'), 'Selected', 'Une deep et house vocale soignées'],
        [link('Anjunadeep 2026', '2wSNKxLM217jpZnkAgYZPH'), 'Anjunadeep', 'Melodic house et montées progressives'],
        [link('Afro House Pulse', '37i9dQZF1DX5wO3czN5dc1'), 'Spotify', 'Artistes africains et afro house mondiale'],
        [link('Feel My Bicep', '4ac1R7BdsmDVK78bv3YAOT'), 'Bicep', 'La house à côté des breaks et de l’electro'],
        [link('Rare Electronic Music', '74KiWnE4fmEPigOa4SARz2'), 'thecatrave', 'House, techno, breaks et rave'],
        [link('Emotional Electronic Music', '0U2HwRmau3EW1IXoRRa1JD'), 'thecatrave', 'Une musique de club mélodique tous genres']
      ],
      label: 'Playlists house, curateurs et usages d’écoute'
    })
  }),

  sources: [
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W', label: 'Spotify: Housewerk'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DWTU3Zl0elDUa', label: 'Spotify: 90s House Classics'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DX4q6087QOpL9', label: 'Spotify: Soulful House'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DX5wO3czN5dc1', label: 'Spotify: Afro House Pulse'},
    {href: 'https://open.spotify.com/playlist/74KiWnE4fmEPigOa4SARz2', label: 'Spotify: Rare Electronic Music'},
    {href: 'https://open.spotify.com/playlist/0U2HwRmau3EW1IXoRRa1JD', label: 'Spotify: Emotional Electronic Music'}
  ],

  bandcamp: {
    description: 'Ces sorties se tiennent près des bords brisés et tournés vers le club de la house abordés ci-dessus. En acheter une soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes par thecatrave'}
    ]
  }
};
