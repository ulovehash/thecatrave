import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'arc-music-festival-draft.md', output:'arc-music-festival.html', bodyClass:'arc-music-festival-page',
  canonical:'https://thecatrave.com/arc-music-festival', ogImage:'img/og/arc-music-festival.jpg', shortName:'ARC Music Festival',
  seoTitle:'ARC Music Festival 2027: Chicago Guide, Stages and Travel',
  description:'ARC Music Festival brings house and techno to Union Park in Chicago. Learn about its stages, history, CTA travel, After Dark and pending 2027 edition.',
  kicker:'Chicago festival guide', h1:'ARC Music Festival: Chicago House, Techno and Union Park',
  deck:'A compact Labor Day festival where Chicago house history, Detroit techno and the international club circuit share Union Park.',
  answerLabel:'What is ARC Music Festival', introTitle:'Chicago artists share the bill.', factsLabel:'ARC Music Festival 2027 facts',
  dateModified:'2026-10-06', dateLabel:'6 October 2026',
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
    {heading:'Getting there and planning the night',id:'planning',toc:'Transport and After Dark',title:'ARC festival Chicago: plan your trip.',ownSet:1,planning:{
      festivalName:'ARC Music Festival',
      intro:'ARC is straightforward by Chicago standards: Union Park sits beside an accessible CTA station and has no attendee parking. The uncertain part is 2027 itself, so do not book a non-refundable trip until the dates and ticket sale are official.',
      ticketIntro:'ARC has not announced 2027 dates or prices. These are the current official sale statuses, not estimated prices.',
      ticketColumns:['Pass','Current status'],
      ticketRows:[
        {label:'2027 general admission',note:'Dates and sale not announced',price:'Not available'},
        {label:'2027 Global VIP',note:'Dates and sale not announced',price:'Not available'},
        {label:'2027 ICON VIP+',note:'Dates and sale not announced',price:'Not available'},
        {label:'ARC After Dark',note:'Separate events; festival pass holders receive purchase access',price:'Separate ticket'}
      ],
      ticketNote:'The official site is collecting sign-ups for 2027. Do not use old 2026 pass prices as a quote for the next edition.',
      routes:[
        {title:'CTA Green or Pink Line to Ashland',description:'Ashland station is at Union Park’s north-west corner and has an accessible entrance. This is the most direct rail route.',link:{label:'Ashland CTA station on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Ashland+Green+Pink+Line+Chicago'}},
        {title:'CTA bus 9 or 20',description:'The Ashland 9 stops along the park’s west edge. The Madison 20 stops south of the park and connects directly with Ogilvie Transportation Center, near Union Station.'},
        {title:'Airport to downtown, then CTA',description:'Use the Blue Line from O’Hare or Orange Line from Midway, transfer onto the Green or Pink Line, and finish at Ashland. Check the CTA trip planner for weekend works.'}
      ],
      routeNote:'ARC provides no attendee parking and sanctions no public festival lots around Union Park. Use CTA or a rideshare drop-off rather than circling the neighbourhood.',
      accommodation:{body:'ARC has no camping. Stay near the Green or Pink Line, in the West Loop, or downtown near a simple CTA connection. The organiser links to an official hotel booking partner, but compare the final rate and cancellation terms directly.',link:{label:'Official ARC hotel link',url:'https://arcmusicfestival.com/faqs/'}},
      spending:{body:'ARC has not published 2027 food or bar menus. The festival is cash-free and accepts cards and major phone wallets; there are no ATMs. Vegan and vegetarian food is available, and documented dietary needs may be brought through security.',items:[
        {label:'2027 food prices',value:'Not published'},{label:'2027 bar prices',value:'Not published'},{label:'Water refills',value:'Free stations on site'},{label:'Cash',value:'Not accepted'}
      ],link:{label:'Official ARC FAQ',url:'https://arcmusicfestival.com/faqs/'}},
      packing:['Government-issued photo ID showing age 18 or over','Digital ticket saved before approaching the gate','Empty removable-bladder hydration pack or permitted bottle','Sunscreen, rain layer and earplugs','Small bag within the 16 × 16 × 8 inch limit'],
      avoid:['Backpacks or bags larger than 16 × 16 × 8 inches','Outside food or drink without documented dietary need','Glass or metal containers, coolers, chairs and umbrellas','Planning to leave and re-enter on the same day','Driving to Union Park without a confirmed private parking plan'],
      rulesNote:'ARC is 18+, requires valid government photo ID and permits one entry per day. Current hours, 14:00–22:00, belong to the announced edition and must be rechecked when 2027 details appear.',
      links:[
        {label:'Official website',url:'https://arcmusicfestival.com/'},{label:'Tickets and pass status',url:'https://arcmusicfestival.com/tickets/'},{label:'FAQ and travel',url:'https://arcmusicfestival.com/faqs/'},{label:'What to bring',url:'https://arcmusicfestival.com/whattobring/'},{label:'Union Park on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Union+Park+Chicago'}
      ],
      checked:'2026-10-06',checkedLabel:'6 October 2026'
    }}
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
