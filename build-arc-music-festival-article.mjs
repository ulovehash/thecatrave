import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'arc-music-festival-draft.md', output:'arc-music-festival.html', bodyClass:'arc-music-festival-page',
  canonical:'https://thecatrave.com/arc-music-festival', ogImage:'img/og/arc-music-festival.jpg', shortName:'ARC Music Festival',
  seoTitle:'ARC Music Festival 2027: Chicago Guide, Stages and Travel',
  description:'ARC Music Festival brings house and techno to Union Park in Chicago. Learn about its stages, history, CTA travel, After Dark and pending 2027 edition.',
  kicker:'Chicago festival guide', h1:'ARC Music Festival: Chicago House, Techno and Union Park',
  deck:'A compact Labor Day festival where Chicago house history, Detroit techno and the international club circuit share Union Park.',
  answerLabel:'What is ARC Music Festival', introTitle:'Chicago artists share the bill.', factsLabel:'ARC Music Festival 2027 facts',
  facts:[['2027 dates','Not yet announced'],['Location','Union Park, Chicago'],['Music','House and techno'],['Age','18 plus'],['2027 lineup','Not yet announced'],['Official updates','Registration is open on the ARC website']],
  figures:{
    frankie:{src:'img/arc-music-festival/arc-frankie-knuckles-way-1200.webp',srcset:'img/arc-music-festival/arc-frankie-knuckles-way-320.webp 320w, img/arc-music-festival/arc-frankie-knuckles-way-1200.webp 1200w',width:1200,height:900,alt:'Frankie Knuckles Way street sign in Chicago',caption:'Frankie Knuckles Way marks the block beside the former Warehouse site. ARC draws on this history by billing Chicago artists beside current international headliners. Photograph: Sarah Stierch, CC BY 4.0.',className:'wide-archive-image'},
    park:{src:'img/arc-music-festival/arc-union-park-1200.webp',srcset:'img/arc-music-festival/arc-union-park-320.webp 320w, img/arc-music-festival/arc-union-park-1200.webp 1024w',width:1024,height:768,alt:'Union Park in Chicago with the downtown skyline behind it',caption:'Union Park is compact and close to the CTA. Its limited footprint also puts several festival sound systems near one another. Photograph: soundfromwayout, CC BY 2.0.',className:'wide-archive-image'}
  },
  video:{description:'Boys Noize b2b VTSS at ARC for Mixmag Lab, and Nicole Moudaber at the 2025 edition. These are the most-viewed sets from ARC that I could find on YouTube.',cards:[{youtubeId:'_jysvzxpb0Q',genre:'MIXMAG LAB x ARC',artist:'Boys Noize b2b VTSS',title:'Mixmag Lab x ARC Music Festival'},{youtubeId:'6g7HHRV0HSE',genre:'ARC, 2025',artist:'Nicole Moudaber',title:'ARC Music Festival Chicago 2025'}]},
  sections:[
    {heading:'ARC Music Festival 2027',id:'arc-2027',toc:'2027 status',title:'ARC Music Festival 2027.',tableAfter:1},
    {heading:'What music ARC plays',id:'music',toc:'Music at ARC',title:'What music ARC plays.',videoAfter:1},
    {heading:'Why Chicago changes the festival',id:'chicago',toc:'Why Chicago matters',title:'Why Chicago changes the festival.',figure:'frankie',figureAfter:1},
    {heading:'How ARC started',id:'history',toc:'History',title:'How ARC started.',ownSet:0},
    {heading:'Union Park and the stages',id:'union-park',toc:'Union Park and stages',title:'Union Park and the stages.',figure:'park',figureAfter:1},
    {heading:'Getting there and planning the night',id:'planning',toc:'Transport and After Dark',title:'Getting there and planning the night.',ownSet:1}
  ],
  ownSetCopy:['My own multi-genre mix follows ARC’s club-facing route through house, techno and harder turns without claiming to reproduce one edition’s lineup.', 'For the trip from Union Park into the night: my own set, moving across techno, breaks and bass music as a personal after-hours route.'],
  bandcampCopy:'ARC is grounded in club music rather than one fixed subgenre. These thecatrave releases connect to its house and techno side, and buying one supports the music and this independent writing.',
  sources:[
    {label:'ARC Music Festival: official site and 2027 updates',url:'https://arcmusicfestival.com/'},
    {label:'ARC Music Festival: official FAQ and transport information',url:'https://arcmusicfestival.com/faqs/'},
    {label:'Roland: interview with the ARC founders',url:'https://articles.roland.com/arc-music-festival-house-comes-home/'},
    {label:'Resident Advisor: inaugural ARC Music Festival listing',url:'https://ra.co/events/1434826'},
    {label:'Wikimedia Commons: Union Park photograph and licence',url:'https://commons.wikimedia.org/wiki/File:Chicago_Union_Park.jpg'}
  ]
});
