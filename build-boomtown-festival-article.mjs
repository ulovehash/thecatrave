import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'boomtown-festival-draft.md', output:'boomtown-festival.html', bodyClass:'boomtown-festival-page',
  canonical:'https://thecatrave.com/boomtown-festival', ogImage:'img/og/boomtown.jpg', shortName:'Boomtown Festival',
  dateModified:'2026-10-06', dateLabel:'6 October 2026',
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
  video:{description:'The Wailers at Boomtown 2014 is the most-viewed Boomtown performance video I found (17 million views). Altern 8 for Boiler Room at Boomtown 2023 is the electronic counterpart.',cards:[{youtubeId:'nx8LYGtQdDs',genre:'BOOMTOWN, 2014',artist:'The Wailers',title:'Three Little Birds / One Love'},{youtubeId:'aKxwl7rFCAE',genre:'BOOMTOWN, 2023',artist:'Altern 8',title:'Boiler Room x Sports Banger'}]},
  sections:[
    {heading:'Boomtown 2027',id:'boomtown-2027',toc:'2027 dates and location',title:'Boomtown 2027.',tableAfter:1},
    {heading:'A festival built as a city',id:'festival-city',toc:'A festival built as a city',title:'A festival built as a city.',figure:'opening',figureAfter:1},
    {heading:'What music Boomtown plays',id:'music',toc:'Music at Boomtown',title:'What music Boomtown plays.',videoAfter:1},
    {heading:'From 2009 to Matterley Estate',id:'history',toc:'History',title:'From 2009 to Matterley Estate.',figure:'scrapyard',figureAfter:1,ownSet:0},
    {heading:'Who owns Boomtown',id:'ownership',toc:'Who owns Boomtown',title:'Who owns Boomtown.'},
    {heading:'Matterley Estate and a first visit',id:'planning',toc:'Planning a first visit',title:'Plan your Boomtown trip.',ownSet:1,planning:{
      festivalName:'Boomtown 2027',
      intro:'Boomtown is a demanding five-day camping trip as well as a festival. Work out the entry ticket, journey, sleeping setup and realistic daily spend before deciding what the weekend costs.',
      ticketIntro:'Current 2027 entry prices. General camping is included; booking fees, transport not named in the ticket and optional upgrades are extra.',
      ticketRows:[
        {label:'Thursday public-transport entry',note:'General camping included',price:'£315'},
        {label:'Thursday standard entry',note:'General camping included',price:'£370'},
        {label:'Wednesday public-transport entry',note:'Extra arrival day included',price:'£385'},
        {label:'Wednesday standard entry',note:'Extra arrival day included',price:'£440'},
        {label:'Eco Bond',note:'Reclaim by returning sorted campsite waste',price:'£20'}
      ],
      ticketNote:'A public-transport entry ticket is valid only when you arrive by an approved public-transport route. At the time checked, Camp Orchid upgrades were £130–£140 and a standard campervan pass was £220.',
      routes:[
        {title:'Train to Winchester, then shuttle to West Gate',description:'Winchester is the nearest main station, about three miles away. Boomtown runs a wheelchair-accessible shuttle; the detailed 2027 timetable is due in July.',link:{label:'Winchester station on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Winchester+Railway+Station'}},
        {title:'Direct National Express festival coach',description:'Coaches run to the city gates from more than 50 UK departure points. Public-transport ticket holders receive a booking voucher and must reserve the journey by 1 July.'},
        {title:'Car, taxi or private drop-off',description:'Buy parking through the ticket account. Taxis and private drop-offs use West Gate; pre-book the return and follow festival road signs rather than local shortcuts.',link:{label:'Official driving and drop-off instructions',url:'https://www.boomtownfair.co.uk/info/travel'}}
      ],
      routeNote:'Coach and shuttle allowance: one soft-sided bag or suitcase up to 20 kg and 75 × 50 × 32 cm, plus three camping items. Trolleys must collapse before boarding.',
      accommodation:{body:'General camping is included. Camp Orchid West is the practical upgrade for public-transport arrivals; Camp Orchid South is closer to car parking. Current pre-pitched options start in the hundreds of pounds, so compare the total per person before booking.',link:{label:'Compare official camping options',url:'https://www.boomtownfair.co.uk/info/camping'}},
      spending:{body:'Boomtown has not published 2027 menus. These are previous-edition budgeting benchmarks, not guaranteed prices. Free drinking water is available from site taps and bars; 2027 purchases use the cashless wristband.',items:[{label:'Full meal',value:'about £12–£15'},{label:'Beer or cider',value:'about £7–£7.50'},{label:'Soft drink',value:'about £3'},{label:'Selected 2026 meal deal',value:'£6'}],link:{label:'How Boomtown cashless payments work',url:'https://www.boomtownfair.co.uk/info/cash-free'}},
      packing:['Ticket saved offline and valid photo ID','Refillable water bottle, earplugs and power bank','Waterproof layer, sun protection and sturdy shoes','Medication in original labelled packaging','Head torch, tent, sleeping bag and sleeping mat'],
      avoid:['Glass bottles, gazebos, barbecues and speakers over 30 cm','Spirits or alcohol above the current limit','Cooking equipment when a fire restriction is active','A trolley that cannot collapse for coach or shuttle travel','Luggage you cannot move across steep ground yourself'],
      rulesNote:'Current weekend alcohol limit: choose one of 16 × 440 ml beer or cider cans, 18 × 250 ml premixed spirit cans, a 3-litre wine box, or 7 litres of beer or cider in sealed plastic bottles or cans. No spirits, glass or alcohol on re-entry.',
      links:[
        {label:'Official website',url:'https://www.boomtownfair.co.uk/'},
        {label:'2027 tickets',url:'https://www.boomtownfair.co.uk/tickets?direct=true'},
        {label:'Travel',url:'https://www.boomtownfair.co.uk/info/travel'},
        {label:'Camping',url:'https://www.boomtownfair.co.uk/info/camping'},
        {label:'App and current map',url:'https://www.boomtownfair.co.uk/app'},
        {label:'Entry rules',url:'https://www.boomtownfair.co.uk/legal/terms'},
        {label:'Accessibility',url:'https://www.boomtownfair.co.uk/accessibility'},
        {label:'Matterley Estate on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Matterley+Estate+Winchester'}
      ],
      checked:'2026-10-06',checkedLabel:'6 October 2026'
    }}
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
