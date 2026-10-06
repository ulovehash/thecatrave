import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft: 'sziget-festival-draft.md', output: 'sziget-festival.html', bodyClass: 'sziget-festival-page',
  canonical: 'https://thecatrave.com/sziget-festival', ogImage: 'img/og/sziget.jpg', shortName: 'Sziget Festival',
  seoTitle: 'Sziget Festival 2027: Dates, Music, Camping and Travel',
  description: 'Sziget Festival 2027 runs 10–14 August on Óbuda Island. A clear guide to its music, history, camping, Budapest transport and confirmed facts.',
  kicker: 'Budapest festival guide', h1: "Sziget Festival: A Guide to Budapest's Island of Freedom",
  deck: 'Five days on Óbuda Island, with pop, rock and hip-hop beside club stages, theatre, circus and a practical rail link into Budapest.',
  answerLabel: 'What is Sziget Festival', introTitle: 'A festival the size of a temporary Budapest district.',
  dateModified:'2026-10-06', dateLabel:'6 October 2026',
  factsLabel: 'Sziget Festival 2027 facts',
  facts: [['Dates', '10–14 August 2027'], ['Location', 'Óbuda Island, Budapest'], ['Format', 'Five-day multi-genre music and arts festival'], ['2027 lineup', 'Not yet announced'], ['Nearest rail stop', 'Filatorigát on the H5 HÉV'], ['Camping', 'Available with qualifying multi-day admission; 2027 products pending']],
  figures: {
    island: {src:'img/sziget/island-2022-1200.webp', srcset:'img/sziget/island-2022-320.webp 320w, img/sziget/island-2022-1200.webp 1200w', width:1200, height:900, alt:'Aerial view across Sziget Festival on Óbuda Island in Budapest', caption:'Óbuda Island during Sziget in 2022. The stages, temporary streets and smaller performance areas occupy a long island in the Danube. Photograph: Elekes Andor, CC BY-SA 4.0.', className:'wide-archive-image'},
    stage: {src:'img/sziget/stage-2014-1200.webp', srcset:'img/sziget/stage-2014-320.webp 320w, img/sziget/stage-2014-1200.webp 1200w', width:1200, height:795, alt:'Crowd facing the main stage at Sziget Festival in 2014', caption:'Sziget’s main stage in 2014. The festival grew far beyond the two-stage Diáksziget of 1993 while staying on the same island. Photograph: Steven Lek, CC BY-SA 4.0.', className:'wide-archive-image'}
  },
  video: {description:'Eelke Kleijn at the Colosseum in 2022, the most-viewed electronic set I could find on Sziget’s own channel (128,000 views), and Shimza at the Colosseum in 2025.', cards:[{youtubeId:'uOAywzuvfzg', genre:'SZIGET, 2022', artist:'Eelke Kleijn', title:'Live at the Colosseum'},{youtubeId:'KZvARnaDTEo', genre:'SZIGET, 2025', artist:'Shimza', title:'Live at Sziget Festival 2025'}]},
  sections: [
    {heading:'Sziget Festival 2027', id:'sziget-2027', toc:'2027 dates and location', title:'Sziget Festival 2027.', tableAfter:1},
    {heading:'What Sziget actually is', id:'what-is-sziget', toc:'What Sziget is', title:'What Sziget actually is.', figure:'island', figureAfter:1},
    {heading:'What music plays at Sziget', id:'music', toc:'Music at Sziget', title:'What music plays at Sziget.', videoAfter:1},
    {heading:'From Diáksziget to Sziget', id:'history', toc:'History', title:'From Diáksziget to Sziget.', figure:'stage', figureAfter:1, ownSet:0},
    {heading:'Camping or staying in Budapest', id:'camping', toc:'Camping or Budapest', title:'Camping or staying in Budapest.'},
    {heading:'Planning the island', id:'planning', toc:'Planning the island', title:'Plan your Sziget trip.', ownSet:1, planning:{
      festivalName:'Sziget 2027',
      intro:'Sziget can be either a camping festival or a Budapest city break. Price the pass, airport or rail transfer, sleeping setup and daily transport before choosing between the island and the city.',
      ticketIntro:'Current official 2027 prices. Online handling fees are shown separately; later tiers and gate prices may be higher.',
      ticketRows:[
        {label:'Five-day pass',note:'Basic camping included for qualifying multi-day admission',price:'€349 + €23 fee'},
        {label:'21-and-under five-day pass',note:'Age eligibility applies',price:'€279 + €18 fee'},
        {label:'VIP five-day pass',note:'VIP areas; accommodation is separate',price:'from €569 + fee'},
        {label:'Own-tent deposit',note:'Refundable when the tent is removed or returned correctly',price:'€30'}
      ],
      ticketNote:'Day tickets, premium camping, pre-pitched tents and hotel packages are separate products. Check the live shop because ticket tiers can change after the current allocation sells.',
      routes:[
        {title:'Budapest centre to Filatorigát by H5 HÉV',description:'Take M2 to Batthyány tér or tram 4/6 to Margit híd, then H5 to Filatorigát. The official estimate from the main stations is about 35–45 minutes.',link:{label:'Filatorigát station on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Filatorig%C3%A1t+H%C3%89V+Budapest'}},
        {title:'Budapest Airport by public transport',description:'Use 100E to Deák Ferenc tér, then M2 and H5, or 200E, M3, tram 1 and H5. The direct 100E fare is currently 2,500 HUF; other transfers require valid local tickets.'},
        {title:'International train, coach or festival package',description:'Arrive at a Budapest rail or coach terminal and finish by H5. Official Sziget Express, bus and hotel packages bundle selected transport with festival passes.',link:{label:'Official Sziget travel routes',url:'https://szigetfestival.com/en/travel/'}}
      ],
      routeNote:'The 2027 boat service and special airport shuttle timetable can change with river and operating conditions. Use BudapestGO and the live Sziget travel page before departure.',
      accommodation:{body:'Free basic camping is included with a full pass, three-day pass or at least two consecutive day tickets. Premium camps, pre-pitched tents, caravan pitches and Budapest hotels cost extra. City accommodation works because H5 runs to Filatorigát.',link:{label:'Compare official accommodation',url:'https://szigetfestival.com/en/accommodation/'}},
      spending:{body:'Sziget has not published a complete 2027 food and bar price list. The island is cashless, and an on-site ALDI sells food and forgotten essentials. Use confirmed transport costs as a floor and leave room for festival-priced meals and drinks.',items:[
        {label:'100E airport bus',value:'2,500 HUF (about €7)'},{label:'Typical station transfer',value:'about 1,000 HUF (€2.50)'},{label:'Two-day Sziget Citypass',value:'€41 + €3 fee'},{label:'Seven-day Sziget Citypass',value:'€83 + €5 fee'}
      ],link:{label:'Official cashless and festival information',url:'https://szigetfestival.com/en/festival-info'}},
      packing:['Ticket stored in a phone wallet and valid photo ID','Refillable non-glass water bottle, earplugs and power bank','Tent, sleeping mat and sleeping bag if using basic camping','Sun protection, rain layer and shoes for long daily walks','Tent-deposit voucher if bringing your own tent'],
      avoid:['Glass objects, fireworks, weapons and illegal drugs','Gas cookers, gas cylinders, grills and other flame equipment','Umbrellas, hammers and tools restricted by the visitor policy','Retail quantities of food, tobacco or other goods','Assuming an old festival map or boat timetable still applies'],
      rulesNote:'Entry and campsite rules can change before August. Sziget currently prohibits glass and flame-based cooking equipment, and requires the refundable tent deposit for visitors bringing their own tent.',
      links:[
        {label:'Official website',url:'https://szigetfestival.com/en/'},{label:'2027 tickets',url:'https://szigetfestival.com/en/tickets/'},{label:'Travel',url:'https://szigetfestival.com/en/travel/'},{label:'Accommodation',url:'https://szigetfestival.com/en/accommodation/'},{label:'Festival information',url:'https://szigetfestival.com/en/festival-info'},{label:'Óbuda Island on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Sziget+Festival+Budapest'}
      ],
      checked:'2026-10-06',checkedLabel:'6 October 2026'
    }}
  ],
  ownSetCopy:['My own cross-genre mix belongs here as a route from Sziget’s club stages into techno, breaks and bass music.', 'For the journey back into Budapest: my own multi-genre set, with techno in the mix rather than a claim to represent Sziget’s programme.'],
  bandcampCopy:'Sziget is broader than one electronic style. These thecatrave releases connect to its club-facing side, and buying one supports the music and this independent writing.',
  sources:[
    {label:'Sziget: official festival information and 2027 dates', url:'https://szigetfestival.com/en/festival-info'},
    {label:'Sziget: official travel information', url:'https://szigetfestival.com/en/travel'},
    {label:'Sziget: official accommodation information', url:'https://szigetfestival.com/en/accommodation'},
    {label:'Sziget: festival history', url:'https://szigetfestival.com/en/about-us'},
    {label:'Wikimedia Commons: Sziget 2022 photograph and licence', url:'https://commons.wikimedia.org/wiki/File:Sziget_2022_(1).jpg'}
  ]
});
