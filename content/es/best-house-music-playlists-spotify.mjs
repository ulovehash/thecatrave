// Spanish house music playlists guide. Structure, playlists and facts from the English
// page (best-house-music-playlists-spotify-draft.md, build-best-house-music-playlists-spotify-article.mjs).
// Live es-ES SERP read 2026-10-09 (google.es, hl=es, gl=es) for "mejores playlists house
// spotify": Spotify playlists and "mejores playlists house de Spotify (2026)" lists lead;
// People also ask "¿Cuál es la mejor música house?", "¿Qué playlists recomiendan en Spotify?".
// The title carries the SERP wording; no Keyword Planner row, see keywords/es-best-house-music-playlists-spotify.json.

import {articleTable} from '../../site-components.mjs';

const link = (title, id) => `<a href="https://open.spotify.com/playlist/${id}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`;

export default {
  lang: 'es',
  name: 'es-best-house-music-playlists-spotify',
  file: 'es/mejores-playlists-house-spotify.html',
  draft: 'es/best-house-music-playlists-spotify-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-playlists-house-spotify',
  englishPath: '/best-house-music-playlists-spotify',
  ogImage: 'https://thecatrave.com/img/og/best-house-music-playlists-spotify.jpg',
  bodyClass: 'article-page house-playlists-page',
  minReadingMinutes: 7,

  title: 'Mejores playlists house en Spotify: 12 selecciones',
  description: 'Doce playlists de Spotify para la house music, de los clásicos de los 90 y los flujos de sellos a dos selecciones señaladas de thecatrave entre house, techno y más.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Playlists de house',
  heroTitle: 'Las mejores playlists de house en Spotify',
  deck: 'Diez selecciones de house enfocadas, más dos playlists señaladas de thecatrave que unen house y techno con una caja de discos electrónica más amplia.',
  answerLabel: 'MEJORES PLAYLISTS DE HOUSE EN SPOTIFY',
  breadcrumbName: 'Las mejores playlists de house en Spotify',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Las personas detrás de las playlists.',

  sections: [
    {id: 'criteria', heading: 'Cómo se eligieron estas playlists de house', title: 'Cómo se eligieron estas playlists de house.', tocLabel: 'Cómo se eligieron'},
    {id: 'foundations', heading: 'Fundamentos de la house y discos soulful', title: 'Fundamentos de la house y discos soulful.', tocLabel: 'Fundamentos y soulful', playlists: [{anchor:'nineties-house-classics', title:'90s House Classics', curator:'Spotify', id:'37i9dQZF1DWTU3Zl0elDUa'},
    {anchor:'soulful-house', title:'Soulful House', curator:'Spotify', id:'37i9dQZF1DX4q6087QOpL9'},
    {anchor:'housewerk-honey-dijon', title:'Housewerk NYE by Honey Dijon', curator:'Honey Dijon', id:'7cTINeBX9zKzGM7KsEYuR2'}]},
    {id: 'current', heading: 'House actual y filtros de sellos', title: 'House actual y filtros de sellos.', tocLabel: 'House actual y sellos', playlists: [{anchor:'housewerk', title:'Housewerk', curator:'Spotify', id:'37i9dQZF1DXa8NOEUWPn9W'},
    {anchor:'defected-2026', title:'Defected 2026', curator:'Defected Records', id:'7hkduGkMRHv6hy05nPdM45'},
    {anchor:'toolroom-tech-house', title:'Toolroom Tech House', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ'},
    {anchor:'selected-deep-house', title:'Deep House 2026 by Selected', curator:'Selected', id:'6vDGVr652ztNWKZuHvsFvx'}]},
    {id: 'routes', heading: 'Vías melódicas, mundiales y de artistas', title: 'Vías melódicas, mundiales y de artistas.', tocLabel: 'Melódica, mundial, artistas', playlists: [{anchor:'anjunadeep-2026', title:'Anjunadeep 2026', curator:'Anjunadeep', id:'2wSNKxLM217jpZnkAgYZPH'},
    {anchor:'afro-house-pulse', title:'Afro House Pulse', curator:'Spotify', id:'37i9dQZF1DX5wO3czN5dc1'},
    {anchor:'feel-my-bicep', title:'Feel My Bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT'}]},
    {id: 'thecatrave-playlists', heading: 'Las playlists de thecatrave: house, techno y más allá', title: 'Las playlists de thecatrave: house, techno y más allá.', tocLabel: 'Playlists de thecatrave', playlists: [{anchor:'rare-electronic-music', title:'Rare Electronic Music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', owned:true},
    {anchor:'emotional-electronic-music', title:'Emotional Electronic Music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', owned:true}]},
    {id: 'choose', heading: '¿Qué playlist de house elegir?', title: '¿Qué playlist de house elegir?', tocLabel: '¿Cuál elegir?'}
  ],

  media: () => ({
    'Comparativa de playlists': articleTable({
      headers: ['Playlist', 'Curador', 'Ideal para'],
      rows: [
        [link('90s House Classics', '37i9dQZF1DWTU3Zl0elDUa'), 'Spotify', 'Bases familiares de los años noventa'],
        [link('Soulful House', '37i9dQZF1DX4q6087QOpL9'), 'Spotify', 'Voces, teclados y producción soulful'],
        [link('Housewerk NYE by Honey Dijon', '7cTINeBX9zKzGM7KsEYuR2'), 'Honey Dijon', 'Linaje disco y selección personal'],
        [link('Housewerk', '37i9dQZF1DXa8NOEUWPn9W'), 'Spotify', 'Un panorama amplio de la house actual'],
        [link('Defected 2026', '7hkduGkMRHv6hy05nPdM45'), 'Defected Records', 'House vocal pensada para el club'],
        [link('Toolroom Tech House', '6J1r02xyO2qkMA9dDNZytJ'), 'Toolroom Records', 'Tech house actual bien enfocada'],
        [link('Deep House 2026 by Selected', '6vDGVr652ztNWKZuHvsFvx'), 'Selected', 'Deep y house vocal cuidados'],
        [link('Anjunadeep 2026', '2wSNKxLM217jpZnkAgYZPH'), 'Anjunadeep', 'Melodic house y subidas progresivas'],
        [link('Afro House Pulse', '37i9dQZF1DX5wO3czN5dc1'), 'Spotify', 'Artistas africanos y afro house mundial'],
        [link('Feel My Bicep', '4ac1R7BdsmDVK78bv3YAOT'), 'Bicep', 'La house junto a breaks y electro'],
        [link('Rare Electronic Music', '74KiWnE4fmEPigOa4SARz2'), 'thecatrave', 'House, techno, breaks y rave'],
        [link('Emotional Electronic Music', '0U2HwRmau3EW1IXoRRa1JD'), 'thecatrave', 'Música de club melódica de todos los géneros']
      ],
      label: 'Playlists de house, curadores y usos de escucha'
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
    description: 'Estos lanzamientos se mueven cerca de los bordes rotos y orientados al club de la house de arriba. Comprar uno apoya directamente la música y la escritura.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
