import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'exit-festival-draft.md', output:'exit-festival.html', bodyClass:'exit-festival-page',
  canonical:'https://thecatrave.com/exit-festival', ogImage:'img/og/exit-festival.jpg', shortName:'EXIT Festival',
  seoTitle:'EXIT Festival: History, Petrovaradin Fortress and What Comes Next',
  description:'EXIT Festival grew from a 2000 student movement into a major Novi Sad event. Trace Petrovaradin, the Dance Arena, the 2025 final edition and global tour.',
  kicker:'Festival history', h1:'EXIT Festival: From Novi Sad to the Global Tour',
  deck:'A student movement became a fortress festival with one of Europe’s best-known electronic arenas. After 2025, the name began travelling without its Novi Sad home.',
  answerLabel:'What happened to EXIT Festival', introTitle:'The fortress era ended after 25 years.', factsLabel:'EXIT Festival current status',
  facts:[['Founded','2000 at University Park, Novi Sad'],['Fortress editions','2001–2025 at Petrovaradin Fortress'],['Final Serbian edition announced','10–13 July 2025'],['2026 format','Global tour and separate new festivals'],['Novi Sad return','Not confirmed'],['Core music','Multi-genre, with house and techno centred at the Dance Arena']],
  figures:{
    fortress:{src:'img/exit-festival/exit-fortress-1200.webp',srcset:'img/exit-festival/exit-fortress-320.webp 320w, img/exit-festival/exit-fortress-1200.webp 800w',width:800,height:509,alt:'Petrovaradin Fortress illuminated during EXIT Festival',caption:'Petrovaradin Fortress during EXIT. The walls, gates and moat shaped how the Novi Sad festival worked from 2001 through 2025. Photograph: EXIT photo team, CC BY-SA 3.0.',className:'wide-archive-image'},
    crowd:{src:'img/exit-festival/exit-crowd-1200.webp',srcset:'img/exit-festival/exit-crowd-320.webp 320w, img/exit-festival/exit-crowd-1200.webp 1200w',width:1200,height:784,alt:'Dense crowd inside Petrovaradin Fortress during EXIT Festival in 2015',caption:'A crowd inside Petrovaradin Fortress in 2015. EXIT’s stages occupied a working historic site rather than a purpose-built festival field. Photograph: Jelena Ivanovic, EXIT photo team, CC BY-SA 3.0.',className:'wide-archive-image'}
  },
  video:{description:'Space Motion at the 2025 Dance Arena records the scale and late-night setting of the final Novi Sad edition.',card:{youtubeId:'wbBthuF42TU',genre:'EXIT DANCE ARENA, 2025',artist:'Space Motion',title:'Live at the Dance Arena'}},
  sections:[
    {heading:'What happened after EXIT 2025',id:'after-2025',toc:'What happened after 2025',title:'What happened after EXIT 2025.',tableAfter:1},
    {heading:'From a student movement to the fortress',id:'history',toc:'From protest to the fortress',title:'From a student movement to the fortress.',figure:'fortress',figureAfter:1,ownSet:0},
    {heading:'Petrovaradin Fortress and the Dance Arena',id:'petrovaradin',toc:'Petrovaradin and Dance Arena',title:'Petrovaradin Fortress and the Dance Arena.',figure:'crowd',figureAfter:1},
    {heading:'What music EXIT played',id:'music',toc:'Music at EXIT',title:'What music EXIT played.',videoAfter:1},
    {heading:'EXIT as a festival network',id:'network',toc:'The wider EXIT network',title:'EXIT as a festival network.'},
    {heading:'How to follow EXIT now',id:'current-events',toc:'How to follow EXIT now',title:'How to follow EXIT now.',ownSet:1}
  ],
  ownSetCopy:['My own multi-genre mix belongs after the fortress history as a personal route through techno, breaks and bass music, not a reconstruction of the Dance Arena.', 'For the current, location-by-location EXIT era: my own set offers one electronic route while each official event keeps its own programme.'],
  bandcampCopy:'EXIT’s fortress programme crossed rock, hip-hop and club music. These thecatrave releases connect to its electronic side, and buying one supports the music and this independent writing.',
  sources:[
    {label:'EXIT: official history and founding account',url:'https://www.exitfest.org/en/about-us'},
    {label:'EXIT: statement announcing the final Serbian edition',url:'https://www.exitfest.org/en/exit-festival-announces-final-edition-in-serbia-amid-undemocratic-pressures'},
    {label:'EXIT: 2026 global tour',url:'https://www.exitfest.org/global-tour'},
    {label:'EXIT: clarification on new festivals and the global tour',url:'https://www.exitfest.org/en/were-not-moving-exit-to-skopje-or-egypt-were-creating-new-festivals-by-the-great-pyramids-of-giza-and-around-the-world'},
    {label:'Le Monde: reporting on EXIT, protests and public funding',url:'https://www.lemonde.fr/en/international/article/2025/07/03/the-exit-music-festival-in-serbia-faces-closure-as-government-cracks-down-on-dissent_6742968_4.html'}
  ]
});
