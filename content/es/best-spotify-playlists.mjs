// Traducción al español de la guía inglesa de las mejores playlists de Spotify.
// Palabras clave: Keyword Planner (España y Latinoamérica, español, 14 de
// noviembre de 2026) devolvió "playlist spotify" en 1K-10K en Latinoamérica y
// "mejores playlists spotify", "las mejores playlist de spotify" y "mejor
// playlist de spotify" en 100-1K o 10-100 (keywords/es-best-spotify-playlists.json).
import {articleFigure, articleTable} from '../../site-components.mjs';

const discovery = [
  {anchor:'kexp-new-this-week', title:'New This Week', curator:'KEXP', id:'60VayqPuLXaftoj2Wrqpti'},
  {anchor:'pitchfork-best-new-music', title:"Pitchfork's Best New Music", curator:'Pitchfork', id:'7q503YgioHAbo1iOIa67M8'},
  {anchor:'pigeons-and-planes', title:'Pigeons & Planes', curator:'Pigeons & Planes', id:'65xSncKQzG6Suseh5gfYP1'},
  {anchor:'gemsonvhs-monthly', title:'GemsOnVHS Monthly Playlist', curator:'GemsOnVHS', id:'7DMq5SZqREiM7qMbHoFw0j'}
];

const electronic = [
  {anchor:'rare-electronic-music', title:'Rare Electronic Music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', owned:true},
  {anchor:'emotional-electronic-music', title:'Emotional Electronic Music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', owned:true},
  {anchor:'feel-my-bicep', title:'Feel My Bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT'},
  {anchor:'four-tet-playlist', title:"Four Tet's symbol-titled playlist", curator:'Four Tet', id:'2uzbATYxs9V8YQi5lf89WG'},
  {anchor:'altar', title:'Altar', curator:'Spotify', id:'37i9dQZF1DXa71eg5j9dKZ'},
  {anchor:'toolroom-tech-house', title:'Toolroom Tech House', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ'},
  {anchor:'danny-l-harle', title:"Danny L Harle's HUGE PLAYLIST", curator:'Danny L Harle', id:'5wtqmpRl17iVz2nW8U6njL'},
  {anchor:'ukf-drum-and-bass', title:'UKF Drum & Bass', curator:'UKF', id:'4oOZJEq1TBUti6PSouTo5M'}
];

const link = (title, id) => `<a href="https://open.spotify.com/playlist/${id}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`;

export default {
  lang:'es',
  name:'es-best-spotify-playlists',
  file:'es/mejores-playlists-spotify.html',
  draft:'es/best-spotify-playlists-draft.md',
  canonical:'https://thecatrave.com/es/mejores-playlists-spotify',
  englishPath:'/best-spotify-playlists',
  ogImage:'https://thecatrave.com/img/og/best-spotify-playlists.jpg',
  image:'https://thecatrave.com/img/spotify-playlists/playlist-still-life-1200.webp',
  bodyClass:'article-page spotify-playlists-page',
  minReadingMinutes:8,

  title:'Mejores playlists Spotify: 12 elegidas por personas',
  description:'Las mejores playlists de Spotify con una selección clara: doce, de KEXP y Pitchfork a Four Tet, Bicep y el underground electrónico.',
  datePublished:'2026-11-14',
  dateModified:'2026-11-14',
  dateLabel:'14 de noviembre de 2026',

  heroKicker:'Playlists de Spotify',
  heroTitle:'Las mejores playlists de Spotify que merece la pena seguir',
  deck:'Doce playlists para novedades, favoritas de DJs y selecciones de sellos, de KEXP y Four Tet a Toolroom y UKF.',
  answerLabel:'Mejores playlists de Spotify',
  breadcrumbName:'Mejores playlists de Spotify',

  answerSection:'Respuesta',
  introSection:'Introducción',
  introTitle:'Detrás de una playlist debería notarse a alguien que escucha.',
  faqSection:'FAQ',
  faqLabel:'Preguntas sobre playlists de Spotify',
  faqTitle:'Preguntas frecuentes sobre playlists de Spotify.',

  sections:[
    {id:'criteria', heading:'Cómo se eligieron estas playlists', title:'Cómo se eligieron estas playlists.'},
    {id:'new-music', heading:'Las mejores playlists de Spotify para música nueva', title:'Las mejores playlists de Spotify para música nueva.', playlists:discovery},
    {id:'electronic', heading:'Las mejores playlists de Spotify para música electrónica y de baile', title:'Las mejores playlists de Spotify para música electrónica y de baile.', tocLabel:'Música electrónica y de baile', playlists:electronic},
    {id:'choose', heading:'¿Qué playlist Spotify elegir?', title:'¿Qué playlist Spotify elegir?'}
  ],

  media:() => ({
    'playlist-still-life':articleFigure({
      src:'img/spotify-playlists/playlist-still-life-1200.webp',
      srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w, img/spotify-playlists/playlist-still-life-1200.webp 1200w',
      sizes:'(max-width: 760px) calc(100vw - 2rem), min(72rem, calc(100vw - 4rem))',
      width:1200, height:800,
      alt:'Unos auriculares con cable, un reproductor de música portátil y dos fundas transparentes sobre una mesa de club rayada',
      caption:'Una playlist es útil cuando su selección deja ver a alguien que escucha, no solo una etiqueta de estado de ánimo.',
      className:'wide-archive-image'
    }),
    'Table: comparison':articleTable({
      headers:['Playlist','Curador','Ideal para'],
      rows:[
        [link('New This Week',discovery[0].id),'KEXP','Un feed amplio y actual de novedades'],
        [link("Pitchfork's Best New Music",discovery[1].id),'Pitchfork','Música ligada a reseñas publicadas'],
        [link('Pigeons & Planes',discovery[2].id),'Pigeons & Planes','Hip-hop nuevo y pop alternativo'],
        [link('GemsOnVHS Monthly',discovery[3].id),'GemsOnVHS','Descubrimientos de country, folk y roots'],
        [link('Rare Electronic Music',electronic[0].id),'thecatrave','Breaks, techno y música de club leftfield'],
        [link('Emotional Electronic Music',electronic[1].id),'thecatrave','Música de club melódica con peso'],
        [link('Feel My Bicep',electronic[2].id),'Bicep','Una caja de discos de baile en activo'],
        [link("Four Tet's playlist",electronic[3].id),'Four Tet','Un archivo profundo sin fronteras de género'],
        [link('Altar',electronic[4].id),'Spotify','Música electrónica alternativa actual'],
        [link('Toolroom Tech House',electronic[5].id),'Toolroom Records','Tech house actual y centrado'],
        [link("Danny L Harle's HUGE PLAYLIST",electronic[6].id),'Danny L Harle','Trance, hardcore y pop maximalista'],
        [link('UKF Drum & Bass',electronic[7].id),'UKF','Drum and bass actual y accesible']
      ]
    })
  }),

  sources:[
    {href:'https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/', label:'Spotify: Discovery-Driven Playlists (en inglés)'},
    {href:'https://www.gq-magazine.co.uk/article/best-spotify-playlists', label:'British GQ: The best Spotify playlists to escape the AI algorithm (en inglés)'},
    {href:'https://audiohype.io/resources/the-best-spotify-playlists/', label:'Audiohype: The Best Spotify Playlists in 2026 (en inglés)'},
    {href:'https://routenote.com/blog/most-followed-playlists-on-spotify/', label:'RouteNote: Top 10 most followed playlists on Spotify 2026 (en inglés)'},
  ],

  bandcamp:{
    description:'Las dos playlists de thecatrave de arriba empiezan con discos de otras personas. Estos son míos. Comprarlos apoya directamente la música y los artículos.',
    tracks:[
      {title:'Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks de thecatrave'},
      {title:'60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes de thecatrave'}
    ]
  }
};
