// German translation of the English best Spotify playlists article.
// Search language was qualified with the live German SERP on 22 September
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
  lang:'de',
  name:'de-beste-spotify-playlists',
  file:'de/beste-spotify-playlists.html',
  draft:'de/beste-spotify-playlists-draft.md',
  canonical:'https://thecatrave.com/de/beste-spotify-playlists',
  englishPath:'/best-spotify-playlists',
  ogImage:'https://thecatrave.com/img/og/best-spotify-playlists.jpg',
  image:'https://thecatrave.com/img/spotify-playlists/playlist-still-life-1200.webp',
  bodyClass:'article-page spotify-playlists-page',
  minReadingMinutes:8,

  title:'Beste Spotify-Playlists: 12 von Menschen kuratierte Empfehlungen',
  description:'Zwölf Spotify-Playlists mit klarer Auswahl, von KEXP und Pitchfork bis Four Tet, Bicep und dem elektronischen Underground.',
  datePublished:'2026-09-22',
  dateModified:'2026-09-22',
  dateLabel:'22. September 2026',

  heroKicker:'Spotify-Playlists',
  heroTitle:'Die besten Spotify-Playlists, denen es sich zu folgen lohnt',
  deck:'Zwölf Playlists mit erkennbarem Standpunkt, geordnet danach, was sie hörbar machen, nicht nach der Zahl ihrer Follower.',
  answerLabel:'Beste Spotify-Playlists',
  breadcrumbName:'Beste Spotify-Playlists',

  answerSection:'Kurzantwort',
  introSection:'Einleitung',
  introTitle:'Eine Playlist sollte einen Hörer erkennen lassen.',
  faqSection:'FAQ',
  faqLabel:'Fragen zu Spotify-Playlists',
  faqTitle:'Häufige Fragen zu Spotify-Playlists.',

  sections:[
    {id:'criteria', heading:'Wie diese Playlists ausgewählt wurden', title:'Wie diese Playlists ausgewählt wurden.'},
    {id:'new-music', heading:'Die besten Spotify-Playlists für neue Musik', title:'Die besten Spotify-Playlists für neue Musik.', playlists:discovery},
    {id:'electronic', heading:'Die besten Spotify-Playlists für elektronische Musik und Dance Music', title:'Die besten Spotify-Playlists für elektronische Musik und Dance Music.', tocLabel:'Elektronische Musik und Dance Music', playlists:electronic},
    {id:'choose', heading:'Welche Spotify-Playlist solltest du wählen?', title:'Welche Spotify-Playlist solltest du wählen?'}
  ],

  media:() => ({
    'Playlist-Stillleben':articleFigure({
      src:'img/spotify-playlists/playlist-still-life-1200.webp',
      srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w, img/spotify-playlists/playlist-still-life-1200.webp 1200w',
      sizes:'(max-width: 760px) calc(100vw - 2rem), min(72rem, calc(100vw - 4rem))',
      width:1200, height:800,
      alt:'Kabelkopfhörer, ein tragbarer Musikplayer und zwei transparente Hüllen auf einem zerkratzten Clubtisch',
      caption:'Eine Playlist ist nützlich, wenn ihre Auswahl einen Hörer erkennen lässt und nicht bloß einen Stimmungsbegriff.',
      className:'wide-archive-image'
    }),
    'Playlist-Vergleich':articleTable({
      headers:['Playlist','Kurator','Am besten für'],
      rows:[
        [link('New This Week',discovery[0].id),'KEXP','Einen breiten aktuellen Feed mit Neuerscheinungen'],
        [link("Pitchfork's Best New Music",discovery[1].id),'Pitchfork','Musik, die mit veröffentlichten Rezensionen verbunden ist'],
        [link('Pigeons & Planes',discovery[2].id),'Pigeons & Planes','Neuen Hip-Hop und Alternative Pop'],
        [link('GemsOnVHS Monthly',discovery[3].id),'GemsOnVHS','Entdeckungen in Country, Folk und Roots'],
        [link('Rare Electronic Music',electronic[0].id),'thecatrave','Breaks, Techno und Leftfield-Clubmusik'],
        [link('Emotional Electronic Music',electronic[1].id),'thecatrave','Melodische Clubmusik mit Gewicht'],
        [link('Feel My Bicep',electronic[2].id),'Bicep','Eine aktive Plattentasche für Dance Music'],
        [link("Four Tet's playlist",electronic[3].id),'Four Tet','Ein tiefes Archiv ohne Genregrenzen'],
        [link('Altar',electronic[4].id),'Spotify','Aktuelle alternative elektronische Musik'],
        [link('Toolroom Tech House',electronic[5].id),'Toolroom Records','Fokussierten wöchentlichen Tech House'],
        [link("Danny L Harle's HUGE PLAYLIST",electronic[6].id),'Danny L Harle','Trance, Hardcore und maximalistischen Pop'],
        [link('UKF Drum & Bass',electronic[7].id),'UKF','Aktuellen zugänglichen Drum and Bass']
      ]
    })
  }),

  sources:[
    {href:'https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/', label:'Spotify: Discovery-Driven Playlists'},
    {href:'https://www.gq-magazine.co.uk/article/best-spotify-playlists', label:'British GQ: The best Spotify playlists to escape the AI algorithm'},
    {href:'https://audiohype.io/resources/the-best-spotify-playlists/', label:'Audiohype: The Best Spotify Playlists in 2026'},
    {href:'https://routenote.com/blog/most-followed-playlists-on-spotify/', label:'RouteNote: Top 10 most followed playlists on Spotify 2026'},
    {href:'https://open.spotify.com/', label:'Alle zwölf Spotify-Playlist-Seiten wurden am 21. September 2026 direkt geprüft'}
  ],

  bandcamp:{
    description:'Die beiden Playlists von thecatrave oben beginnen mit den Platten anderer Menschen. Diese hier sind von mir. Ein Kauf unterstützt die Musik und die Artikel direkt.',
    tracks:[
      {title:'Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks von thecatrave'},
      {title:'60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes von thecatrave'}
    ]
  }
};
