import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'exit-festival-draft.md', output:'exit-festival.html', bodyClass:'exit-festival-page',
  canonical:'https://thecatrave.com/exit-festival', ogImage:'img/og/exit-festival.jpg', shortName:'EXIT Festival',
  seoTitle:'EXIT Festival: History, Petrovaradin Fortress and What Comes Next',
  description:'EXIT Festival grew from a 2000 student movement into a major Novi Sad event. Trace Petrovaradin, the Dance Arena, the 2025 final edition and global tour.',
  kicker:'Festival history', h1:'EXIT Festival: From Novi Sad to the Global Tour',
  deck:'A student movement became a fortress festival with one of Europe’s best-known electronic arenas. After 2025, the name began travelling without its Novi Sad home.',
  answerLabel:'What happened to EXIT Festival', introTitle:'The fortress era ended after 25 years.', factsLabel:'EXIT Festival current status',
  dateModified:'2026-10-06', dateLabel:'6 October 2026',
  facts:[['Founded','2000 at University Park, Novi Sad'],['Fortress editions','2001–2025 at Petrovaradin Fortress'],['Final Serbian edition announced','10–13 July 2025'],['2026 format','Global tour and separate new festivals'],['Novi Sad return','Not confirmed'],['Core music','Multi-genre, with house and techno centred at the Dance Arena']],
  figures:{
    fortress:{src:'img/exit-festival/exit-fortress-1200.webp',srcset:'img/exit-festival/exit-fortress-320.webp 320w, img/exit-festival/exit-fortress-1200.webp 800w',width:800,height:509,alt:'Petrovaradin Fortress illuminated during EXIT Festival',caption:'Petrovaradin Fortress during EXIT. The walls, gates and moat shaped how the Novi Sad festival worked from 2001 through 2025. Photograph: EXIT photo team, CC BY-SA 3.0.',className:'wide-archive-image'},
    crowd:{src:'img/exit-festival/exit-crowd-1200.webp',srcset:'img/exit-festival/exit-crowd-320.webp 320w, img/exit-festival/exit-crowd-1200.webp 1200w',width:1200,height:784,alt:'Dense crowd inside Petrovaradin Fortress during EXIT Festival in 2015',caption:'A crowd inside Petrovaradin Fortress in 2015. EXIT’s stages occupied a working historic site rather than a purpose-built festival field. Photograph: Jelena Ivanovic, EXIT photo team, CC BY-SA 3.0.',className:'wide-archive-image'}
  },
  video:{description:'Keinemusik in 2023 and Nina Kraviz in 2016, two of the most-viewed sets from the mts Dance Arena on EXIT’s own channel (5.4 million and 3.7 million views).',cards:[{youtubeId:'6L0GMr8FFyc',genre:'EXIT DANCE ARENA, 2023',artist:'Keinemusik',title:'Live at the mts Dance Arena'},{youtubeId:'WJnhTXQ6a9Y',genre:'EXIT DANCE ARENA, 2016',artist:'Nina Kraviz',title:'Live at the mts Dance Arena'}]},
  sections:[
    {heading:'What happened after EXIT 2025',id:'after-2025',toc:'What happened after 2025',title:'What happened after EXIT 2025.',tableAfter:1},
    {heading:'From a student movement to the fortress',id:'history',toc:'From protest to the fortress',title:'From a student movement to the fortress.',figure:'fortress',figureAfter:1,ownSet:0},
    {heading:'Petrovaradin Fortress and the Dance Arena',id:'petrovaradin',toc:'Petrovaradin and Dance Arena',title:'Petrovaradin Fortress and the Dance Arena.',figure:'crowd',figureAfter:1},
    {heading:'What music EXIT played',id:'music',toc:'Music at EXIT',title:'What music EXIT played.',videoAfter:1},
    {heading:'EXIT as a festival network',id:'network',toc:'The wider EXIT network',title:'EXIT as a festival network.'},
    {heading:'How to follow EXIT now',id:'current-events',toc:'How to follow EXIT now',title:'Plan an EXIT event now.',ownSet:1,planning:{
      festivalName:'EXIT Global Tour',
      intro:'There is no confirmed 2027 EXIT Festival at Petrovaradin Fortress to plan around. EXIT now publishes separate events by destination, so choose the named event first and use that event’s ticket, venue and travel information rather than old Novi Sad advice.',
      ticketIntro:'Current official status. Prices and travel depend on the individual event; no single EXIT pass covers the network.',
      ticketColumns:['Event or product','Current status'],
      ticketRows:[
        {label:'EXIT Festival, Novi Sad 2027',note:'No fortress return announced',price:'Not on sale'},
        {label:'EXIT Global Tour',note:'Separate destination events',price:'Sold per event'},
        {label:'Starlight Festival, Egypt',note:'8–11 October 2026 at Giza',price:'See event link'},
        {label:'EXIT2Montenegro',note:'Ulcinj and Budva dates announced for 2026',price:'See event link'}
      ],
      ticketNote:'A historical EXIT Festival article is not a current ticket seller. Follow the official Global Tour page to the named event and verify its year, country and venue before booking anything non-refundable.',
      routes:[
        {title:'Choose the event and country first',description:'Open the official Global Tour page, select the named event and confirm that its date and venue match the ticket page. Each destination has different entry and transport rules.',link:{label:'Official EXIT Global Tour',url:'https://www.exitfest.org/global-tour'}},
        {title:'Ignore legacy Novi Sad transport advice',description:'Petrovaradin Fortress directions, Novi Sad accommodation and old camping information apply to the 2001–2025 fortress editions, not automatically to a current tour event.'},
        {title:'Build the route from the event venue',description:'Use the venue link supplied by the specific event, then compare its official shuttle or public-transport advice with the local transport operator before departure.'}
      ],
      routeNote:'Because the tour spans different countries, there is no honest single shuttle, airport or Google Maps link for every EXIT-branded event.',
      accommodation:{body:'Accommodation is destination-specific. Do not book Novi Sad for a Global Tour date in Montenegro or Egypt, and do not assume a campsite exists. Use the selected event’s official page, then verify the property address and cancellation policy.',link:{label:'Select the current event',url:'https://www.exitfest.org/global-tour'}},
      spending:{body:'EXIT has not published one network-wide food, drink or cashless tariff. Currency, payment method, water access and vendor prices depend on the selected event and country.',items:[
        {label:'Novi Sad 2027 prices',value:'Not available'},{label:'Tour ticket price',value:'Varies by event'},{label:'Food and bar prices',value:'Check selected event'},{label:'Local transport',value:'Check destination operator'}
      ],link:{label:'Official tour and ticket routes',url:'https://www.exitfest.org/global-tour'}},
      packing:['Passport or accepted photo ID for the selected country','Correct event ticket saved offline','Travel insurance and any required entry documents','Weather-specific clothing, earplugs and power bank','Local currency or payment method confirmed by the event'],
      avoid:['Buying a “Novi Sad 2027” ticket from an unofficial seller','Using a 2025 fortress map for another country’s event','Assuming one EXIT ticket covers multiple tour destinations','Booking non-refundable transport before venue confirmation','Copying old campsite, bag or alcohol rules to a new event'],
      rulesNote:'Rules must be checked on the selected event page. Age limits, bags, re-entry, water and prohibited items are not safely transferable from the former fortress festival to every new destination.',
      links:[
        {label:'Official EXIT website',url:'https://www.exitfest.org/'},{label:'Global Tour and event tickets',url:'https://www.exitfest.org/global-tour'},{label:'Official EXIT history',url:'https://www.exitfest.org/en/about-us'},{label:'Petrovaradin Fortress on Google Maps (historic venue)',url:'https://www.google.com/maps/search/?api=1&query=Petrovaradin+Fortress+Novi+Sad'}
      ],
      checked:'2026-10-06',checkedLabel:'6 October 2026'
    }}
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
