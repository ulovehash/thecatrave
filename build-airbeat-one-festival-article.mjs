import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'airbeat-one-festival-draft.md', output:'airbeat-one-festival.html', bodyClass:'airbeat-one-festival-page',
  canonical:'https://thecatrave.com/airbeat-one-festival', ogImage:'img/og/airbeat-one-festival.jpg', shortName:'Airbeat One Festival',
  seoTitle:'Airbeat One Festival 2027: Dates, Stages, Camping and Travel',
  description:'Airbeat One Festival 2027 runs 7–11 July in Neustadt-Glewe. A guide to its EDM, techno, hardstyle and psytrance stages, camping and travel.',
  kicker:'Germany festival guide', h1:"Airbeat One Festival: Germany's Airfield Rave Guide",
  deck:'Four major electronic routes share an airfield in northern Germany, with camping functioning as part of the event rather than a quiet place beside it.',
  answerLabel:'What is Airbeat One Festival', introTitle:'Several electronic festivals sharing one airfield.', factsLabel:'Airbeat One Festival 2027 facts',
  facts:[['Dates','7–11 July 2027'],['Location','Neustadt-Glewe airfield, Germany'],['Theme','Australia'],['Edition','24th edition and 25th anniversary'],['Music','EDM, techno, hardstyle and psytrance'],['2027 lineup','In progress; check the official lineup page']],
  figures:{
    arena:{src:'img/airbeat-one/airbeat-arena-1200.webp',srcset:'img/airbeat-one/airbeat-arena-320.webp 320w, img/airbeat-one/airbeat-arena-1200.webp 1200w',width:1200,height:754,alt:'Crowd and production inside the Airbeat One Arena Stage in 2025',caption:'The covered Arena Stage in 2025. Airbeat One’s stage identities allow techno, harder styles and psytrance to operate as substantial programmes beside the Mainstage.',className:'wide-archive-image'},
    airfield:{src:'img/airbeat-one/airbeat-airfield-1200.webp',srcset:'img/airbeat-one/airbeat-airfield-320.webp 320w, img/airbeat-one/airbeat-airfield-1200.webp 1200w',width:1200,height:768,alt:'Aerial view of Neustadt-Glewe airfield in northern Germany',caption:'Neustadt-Glewe airfield before festival construction. The open site accommodates stages, camping and vehicle routes on one large footprint. Photograph: Carsten Steger, CC BY-SA 4.0.',className:'wide-archive-image'}
  },
  video:{description:'Neelix at Airbeat One 2024, the most-viewed set I found on the festival’s own channel (556,000 views), and Paul van Dyk on the 2025 Second Stage.',cards:[{youtubeId:'AWxxg3l89-k',genre:'AIRBEAT ONE, 2024',artist:'Neelix',title:'Live-Set at Airbeat One 2024'},{youtubeId:'wETX6I_EDUo',genre:'AIRBEAT ONE, 2025',artist:'Paul van Dyk',title:'Live from the Second Stage'}]},
  sections:[
    {heading:'Airbeat One 2027',id:'airbeat-one-2027',toc:'2027 dates and theme',title:'Airbeat One 2027.',tableAfter:1},
    {heading:'What music Airbeat One plays',id:'music',toc:'Music at Airbeat One',title:'What music Airbeat One plays.',videoAfter:1},
    {heading:'A festival built around stage identities',id:'stages',toc:'Stages',title:'A festival built around stage identities.',figure:'arena',figureAfter:1},
    {heading:'From Airbase One to Airbeat One',id:'history',toc:'History',title:'From Airbase One to Airbeat One.',ownSet:0},
    {heading:'Camping at Neustadt-Glewe',id:'camping',toc:'Camping',title:'Camping at Neustadt-Glewe.',figure:'airfield',figureAfter:1},
    {heading:'Getting there and planning the weekend',id:'planning',toc:'Travel and planning',title:'Getting there and planning the weekend.',ownSet:1}
  ],
  ownSetCopy:['My own multi-genre mix moves through techno and harder rave material as a personal route from Airbeat One’s stage spread, without standing in for its programme.', 'For a long airfield weekend: my own cross-genre set, with techno in the centre and several faster turns around it.'],
  bandcampCopy:'Airbeat One gives several electronic scenes their own stages. These thecatrave releases connect to its club-facing side, and buying one supports the music and this independent writing.',
  sources:[
    {label:'Airbeat One: official 2027 dates, anniversary and theme',url:'https://airbeat-one.de/en/info/'},
    {label:'Airbeat One: official stage guide',url:'https://airbeat-one.de/en/stages/'},
    {label:'Airbeat One: official camping information',url:'https://customerservice.airbeat-one.de/hc/en-150/articles/115004835489-Description-Camping-grounds-opening-hours'},
    {label:'Airbeat One: official travel information',url:'https://airbeat-one.de/en/getting-there/'},
    {label:'Wikimedia Commons: Arena Stage photograph and licence',url:'https://commons.wikimedia.org/wiki/File:Airbeat_One_Arena_Stage.jpg'}
  ]
});
