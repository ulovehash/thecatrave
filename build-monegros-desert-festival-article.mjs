import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'monegros-desert-festival-draft.md', output:'monegros-desert-festival.html', bodyClass:'monegros-desert-festival-page',
  canonical:'https://thecatrave.com/monegros-desert-festival', ogImage:'img/og/monegros.jpg', shortName:'Monegros Desert Festival',
  seoTitle:'Monegros Desert Festival 2027: Date, History and Guide',
  description:'Monegros Desert Festival 2027 is scheduled for 31 July near Fraga, Spain. Learn its history, music, desert format, location and practical limits.',
  kicker:'Spain festival guide', h1:'Monegros Desert Festival 2027: The Desert Rave Explained',
  deck:'One long electronic event on exposed land between Barcelona and Zaragoza, rooted in Florida 135 and built for competing stages through the night.',
  answerLabel:'What is Monegros Desert Festival', introTitle:'One long night requires its own plan.', factsLabel:'Monegros Desert Festival 2027 facts',
  facts:[['Date','Saturday 31 July 2027'],['Location','N-II, kilometre 416, near Fraga, Aragón'],['Format','One-day electronic festival running overnight'],['2027 lineup','Not yet announced'],['Latest measured format','22 hours and ten stages in 2026'],['Camping','No general multi-day festival campsite']],
  figures:{
    overview:{src:'img/monegros/festival-overview-2009-1200.webp',srcset:'img/monegros/festival-overview-2009-320.webp 320w, img/monegros/festival-overview-2009-1200.webp 1200w',width:1200,height:900,alt:'Wide view of Monegros Desert Festival stages and crowd in 2009',caption:'Monegros Desert Festival in 2009, when the event had already grown far beyond its early gatherings linked to Florida 135. Photograph: BigSus, CC BY-SA 3.0.',className:'wide-archive-image'},
    desert:{src:'img/monegros/desert-landscape-1200.webp',srcset:'img/monegros/desert-landscape-320.webp 320w, img/monegros/desert-landscape-1200.webp 1200w',width:1200,height:675,alt:'Dry exposed landscape in the Monegros region of Aragón',caption:'The exposed Monegros landscape explains the festival’s practical demands: heat and distance are part of the site, not decorative branding. Photograph: Smoobs, CC BY 2.0.',className:'wide-archive-image'}
  },
  video:{description:'Sama’ Abdulhadi for Beatport at Monegros, the most-viewed Monegros set I could find (1.9 million views), and Indira Paganotto closing the 2025 edition on the festival’s own channel.',cards:[{youtubeId:'V4lH-KzsQi0',genre:'MONEGROS, BEATPORT LIVE',artist:'Sama’ Abdulhadi',title:'DJ set at Monegros Desert Festival'},{youtubeId:'sx6_l6skb5o',genre:'MONEGROS, 2025',artist:'Indira Paganotto',title:'Closing Monegros Desert Festival 2025'}]},
  sections:[
    {heading:'Monegros Desert Festival 2027',id:'monegros-2027',toc:'2027 date and location',title:'Monegros Desert Festival 2027.',tableAfter:1},
    {heading:'What Monegros is',id:'what-is-monegros',toc:'What Monegros is',title:'What Monegros is.',figure:'overview',figureAfter:1},
    {heading:'From Florida 135 to the desert',id:'history',toc:'History',title:'From Florida 135 to the desert.',ownSet:0},
    {heading:'Who runs Monegros',id:'operator',toc:'Who runs Monegros',title:'Who runs Monegros.'},
    {heading:'What music plays at Monegros',id:'music',toc:'Music at Monegros',title:'What music plays at Monegros.',videoAfter:1},
    {heading:'The site and the overnight format',id:'site',toc:'The overnight format',title:'The site and the overnight format.',figure:'desert',figureAfter:1},
    {heading:'Preparing for Monegros',id:'planning',toc:'Preparing for Monegros',title:'Preparing for Monegros.',ownSet:1}
  ],
  ownSetCopy:['My own set moves between techno, breaks and bass music. It is a personal route from this history, not a substitute for the Monegros archive.', 'A final multi-genre thecatrave mix for the overnight journey, with techno at its centre and room for other club forms.'],
  bandcampCopy:'Monegros is defined by long-form electronic programming. These thecatrave releases connect to its harder club-facing side, and buying one supports the music and writing directly.',
  sources:[
    {label:'Monegros: official festival site and lineup status',url:'https://monegrosfestival.com/'},
    {label:'Monegros: official festival history',url:'https://monegrosfestival.com/en/history/'},
    {label:'Monegros: official DJ set archive',url:'https://monegrosfestival.com/en/dj-sets/'},
    {label:'Enterticket: Monegros Desert Festival 2027 date',url:'https://www.enterticket.es/'},
    {label:'Wikimedia Commons: Monegros Festival overview and licence',url:'https://commons.wikimedia.org/wiki/File:Monegros_Desert_Festival_-_Vista_general.jpg'}
  ]
});
