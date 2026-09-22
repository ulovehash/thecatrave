// French translation of the English best Spotify playlists article.
// Search language was qualified with the live French SERP on 22 September
// 2026. No paid Ahrefs fields were requested: see
// best-spotify-playlists-translation-research.md.
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
  lang:'fr',
  name:'fr-meilleures-playlists-spotify',
  file:'fr/meilleures-playlists-spotify.html',
  draft:'fr/meilleures-playlists-spotify-draft.md',
  canonical:'https://thecatrave.com/fr/meilleures-playlists-spotify',
  englishPath:'/best-spotify-playlists',
  ogImage:'https://thecatrave.com/img/og/best-spotify-playlists.jpg',
  image:'https://thecatrave.com/img/spotify-playlists/playlist-still-life-1200.webp',
  bodyClass:'article-page spotify-playlists-page',
  minReadingMinutes:8,

  title:'Meilleures playlists Spotify : 12 sélections humaines',
  description:'Douze playlists Spotify au choix affirmé, de KEXP et Pitchfork à Four Tet, Bicep et l’underground électronique.',
  datePublished:'2026-09-22',
  dateModified:'2026-09-22',
  dateLabel:'22 septembre 2026',

  heroKicker:'Playlists Spotify',
  heroTitle:'Les meilleures playlists Spotify à suivre',
  deck:'Douze playlists au point de vue reconnaissable, classées selon ce qu’elles permettent d’entendre, pas selon leur nombre d’abonnés.',
  answerLabel:'Meilleures playlists Spotify',
  breadcrumbName:'Meilleures playlists Spotify',

  answerSection:'Réponse',
  introSection:'Introduction',
  introTitle:'Une playlist devrait révéler une personne qui écoute.',
  faqSection:'FAQ',
  faqLabel:'Questions sur les playlists Spotify',
  faqTitle:'Questions fréquentes sur les playlists Spotify.',

  sections:[
    {id:'criteria', heading:'Comment ces playlists ont été choisies', title:'Comment ces playlists ont été choisies.'},
    {id:'new-music', heading:'Les meilleures playlists Spotify pour découvrir de la musique', title:'Les meilleures playlists Spotify pour découvrir de la musique.', playlists:discovery},
    {id:'electronic', heading:'Les meilleures playlists Spotify de musique électronique et de dance music', title:'Les meilleures playlists Spotify de musique électronique et de dance music.', tocLabel:'Musique électronique et dance music', playlists:electronic},
    {id:'choose', heading:'Quelle playlist Spotify choisir ?', title:'Quelle playlist Spotify choisir ?'}
  ],

  media:() => ({
    'nature morte playlists':articleFigure({
      src:'img/spotify-playlists/playlist-still-life-1200.webp',
      srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w, img/spotify-playlists/playlist-still-life-1200.webp 1200w',
      sizes:'(max-width: 760px) calc(100vw - 2rem), min(72rem, calc(100vw - 4rem))',
      width:1200, height:800,
      alt:'Un casque filaire, un lecteur de musique portable et deux boîtiers translucides sur une table de club rayée',
      caption:'Une playlist devient utile lorsque ses choix révèlent une personne qui écoute, pas seulement un mot-clé d’ambiance.',
      className:'wide-archive-image'
    }),
    'comparaison des playlists':articleTable({
      headers:['Playlist','Programmateur','Idéale pour'],
      rows:[
        [link('New This Week',discovery[0].id),'KEXP','Un large flux actuel de nouveautés'],
        [link("Pitchfork's Best New Music",discovery[1].id),'Pitchfork','De la musique liée à des critiques publiées'],
        [link('Pigeons & Planes',discovery[2].id),'Pigeons & Planes','Le hip-hop émergent et l’alternative pop'],
        [link('GemsOnVHS Monthly',discovery[3].id),'GemsOnVHS','Des découvertes country, folk et roots'],
        [link('Rare Electronic Music',electronic[0].id),'thecatrave','Les breaks, la techno et la musique de club leftfield'],
        [link('Emotional Electronic Music',electronic[1].id),'thecatrave','La musique de club mélodique avec du poids'],
        [link('Feel My Bicep',electronic[2].id),'Bicep','Un sac de disques de dance music en activité'],
        [link("Four Tet's playlist",electronic[3].id),'Four Tet','Une archive profonde qui résiste aux genres'],
        [link('Altar',electronic[4].id),'Spotify','La musique électronique alternative actuelle'],
        [link('Toolroom Tech House',electronic[5].id),'Toolroom Records','Une tech house hebdomadaire et ciblée'],
        [link("Danny L Harle's HUGE PLAYLIST",electronic[6].id),'Danny L Harle','La trance, le hardcore et la pop maximaliste'],
        [link('UKF Drum & Bass',electronic[7].id),'UKF','La drum and bass actuelle et accessible']
      ]
    })
  }),

  sources:[
    {href:'https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/', label:'Spotify: Discovery-Driven Playlists'},
    {href:'https://www.gq-magazine.co.uk/article/best-spotify-playlists', label:'British GQ: The best Spotify playlists to escape the AI algorithm'},
    {href:'https://audiohype.io/resources/the-best-spotify-playlists/', label:'Audiohype: The Best Spotify Playlists in 2026'},
    {href:'https://routenote.com/blog/most-followed-playlists-on-spotify/', label:'RouteNote: Top 10 most followed playlists on Spotify 2026'},
    {href:'https://open.spotify.com/', label:'Les douze pages Spotify ont été vérifiées directement le 21 septembre 2026'}
  ],

  bandcamp:{
    description:'Les deux playlists de thecatrave ci-dessus commencent par les disques des autres. Ceux-ci sont les miens. Un achat soutient directement la musique et les articles.',
    tracks:[
      {title:'Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks par thecatrave'},
      {title:'60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes par thecatrave'}
    ]
  }
};
