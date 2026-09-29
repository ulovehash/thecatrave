import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'boomtown-festival-draft.md', output:'boomtown-festival.html', bodyClass:'boomtown-festival-page',
  canonical:'https://thecatrave.com/boomtown-festival', ogImage:'img/og/boomtown.jpg', shortName:'Boomtown Festival',
  seoTitle:'Boomtown Festival 2027: Dates, Location, History and Music',
  description:'Boomtown Festival 2027 runs 11–15 August at Matterley Estate. Learn how its fictional city, music, storyline, history and camping format work.',
  kicker:'UK festival guide', h1:'Boomtown Festival: The City, Its Music and 2027 Dates',
  deck:'A five-day camping festival built as a fictional city, where drum and bass, soundsystem culture, techno, punk and live music occupy different districts.',
  answerLabel:'What is Boomtown Festival', introTitle:'A festival designed to be explored.', factsLabel:'Boomtown Festival 2027 facts',
  facts:[['Dates','11–15 August 2027'],['Location','Matterley Estate near Winchester, Hampshire'],['Edition','Chapter Six: Wild Style'],['Format','Five-day, over-18 camping festival'],['2027 lineup','Not yet announced'],['Planning horizon','Current site permission runs through 2030']],
  figures:{
    opening:{src:'img/boomtown/opening-ceremony-2019-1200.webp',srcset:'img/boomtown/opening-ceremony-2019-320.webp 320w, img/boomtown/opening-ceremony-2019-1200.webp 1200w',width:1200,height:900,alt:'Opening ceremony stage and crowd at Boomtown in 2019',caption:'The 2019 opening ceremony made the annual chapter visible at arena scale. Street theatre and smaller rooms carry the same fictional city between the large stages. Photograph: Sam Warrenger / TheFestivals.UK, CC BY-SA 4.0.',className:'wide-archive-image'},
    scrapyard:{src:'img/boomtown/scrapyard-2019-1200.webp',srcset:'img/boomtown/scrapyard-2019-320.webp 320w, img/boomtown/scrapyard-2019-1200.webp 1200w',width:1200,height:900,alt:'Industrial Scrapyard stage scenery at Boomtown in 2019',caption:'The Scrapyard district in 2019. Boomtown gives genres and venues a physical address, although names and geography change between chapters. Photograph: Sam Warrenger / TheFestivals.UK, CC BY 4.0.',className:'wide-archive-image'}
  },
  video:{description:'Pearson Sound at Anara in 2025 shows how a focused electronic set can sit inside Boomtown’s much wider city.',card:{youtubeId:'OFuZ3lsZKxc',genre:'BOOMTOWN, 2025',artist:'Pearson Sound',title:'Live at Anara'}},
  sections:[
    {heading:'Boomtown 2027',id:'boomtown-2027',toc:'2027 dates and location',title:'Boomtown 2027.',tableAfter:1},
    {heading:'A festival built as a city',id:'festival-city',toc:'A festival built as a city',title:'A festival built as a city.',figure:'opening',figureAfter:1},
    {heading:'What music Boomtown plays',id:'music',toc:'Music at Boomtown',title:'What music Boomtown plays.',videoAfter:1},
    {heading:'From 2009 to Matterley Estate',id:'history',toc:'History',title:'From 2009 to Matterley Estate.',figure:'scrapyard',figureAfter:1,ownSet:0},
    {heading:'Who owns Boomtown',id:'ownership',toc:'Who owns Boomtown',title:'Who owns Boomtown.'},
    {heading:'Matterley Estate and a first visit',id:'planning',toc:'Planning a first visit',title:'Matterley Estate and a first visit.',ownSet:1}
  ],
  ownSetCopy:['My own multi-genre mix follows the same open route between bass music, techno and rave, without pretending to stand in for Boomtown’s programme.', 'For the hours after the city closes: my own set moving through techno, breaks and bass music.'],
  bandcampCopy:'Boomtown’s programme moves across scenes rather than one genre. These thecatrave releases connect to its electronic side, and buying one supports the music and writing directly.',
  sources:[
    {label:'Boomtown: official 2027 dates and chapter',url:'https://www.boomtownfair.co.uk/'},
    {label:'Boomtown: official festival history',url:'https://www.boomtownfair.co.uk/discover/history/'},
    {label:'South Downs National Park: Matterley Estate planning information',url:'https://www.southdowns.gov.uk/'},
    {label:'UK Companies House: Boomtown Festival UK Limited',url:'https://find-and-update.company-information.service.gov.uk/'},
    {label:'Wikimedia Commons: 2019 opening ceremony photograph and licence',url:'https://commons.wikimedia.org/wiki/File:Boomtown_Fair_Opening_Ceremony_2019_Chapter_11.jpg'}
  ]
});
