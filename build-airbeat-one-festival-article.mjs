import {buildFestivalArticle} from './build-next-festival-article.mjs';

buildFestivalArticle({
  draft:'airbeat-one-festival-draft.md', output:'airbeat-one-festival.html', bodyClass:'airbeat-one-festival-page',
  canonical:'https://thecatrave.com/airbeat-one-festival', ogImage:'img/og/airbeat-one-festival.jpg', shortName:'Airbeat One Festival',
  seoTitle:'Airbeat One Festival 2027: Dates, Stages, Camping and Travel',
  description:'Airbeat One Festival 2027 runs 7–11 July in Neustadt-Glewe. A guide to its EDM, techno, hardstyle and psytrance stages, camping and travel.',
  kicker:'Germany festival guide', h1:"Airbeat One Festival: Germany's Airfield Rave Guide",
  deck:'Four major electronic routes share an airfield in northern Germany, with camping functioning as part of the event rather than a quiet place beside it.',
  answerLabel:'What is Airbeat One Festival', introTitle:'Several electronic festivals sharing one airfield.', factsLabel:'Airbeat One Festival 2027 facts',
  dateModified:'2026-10-06', dateLabel:'6 October 2026',
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
    {heading:'Getting there and planning the weekend',id:'planning',toc:'Travel and planning',title:'Plan your Airbeat One weekend.',ownSet:1,planning:{
      festivalName:'Airbeat One 2027',
      intro:'Airbeat One combines a festival ticket, a specific campsite product and, for drivers, a separate vehicle or parking product. Match those three before checkout, because a ticket for one camping area does not grant access to another.',
      ticketIntro:'The official 2027 ticket page is currently password-protected and does not expose public prices. Check the live shop before paying; do not rely on an older edition’s price.',
      ticketColumns:['Product','Current status'],
      ticketRows:[
        {label:'Festival ticket',note:'7–11 July 2027',price:'Check live shop'},
        {label:'Camping ticket',note:'Choose the correct camping ground',price:'Separate product'},
        {label:'Car vignette',note:'Required for the matching camping or parking area',price:'Separate product'},
        {label:'Airport or city coach',note:'Berlin, Hamburg and selected routes',price:'Paid add-on'}
      ],
      ticketNote:'The organiser’s booking guide requires compatible festival, camping and vehicle products. Some parking products have no on-site sale, so resolve the exact combination before travelling.',
      routes:[
        {title:'Train to Neustadt-Glewe, then free shuttle',description:'Regional trains serve Neustadt-Glewe from the Hamburg or Berlin direction. The free Yellow and Green shuttle lines connect the station with the south and north festival entrances.',link:{label:'Neustadt-Glewe station on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Bahnhof+Neustadt-Glewe'}},
        {title:'Long-distance train to Ludwigslust',description:'Ludwigslust has broader rail connections. Airbeat One lists a paid onward coach from that station; reserve it rather than assuming the local free shuttle reaches Ludwigslust.'},
        {title:'Berlin or Hamburg airport coach',description:'Paid festival coach tours run from BER and Hamburg Airport. Buy the correct return trip in the official shop; the alternative is rail to Neustadt-Glewe and the free station shuttle.',link:{label:'Official airport route',url:'https://airbeat-one.de/en/getting-there/airplane/'}}
      ],
      routeNote:'The free local shuttles have route-specific operating hours. After midnight, the Purple Line runs only towards day parking P5, not back to Airbeat One.',
      accommodation:{body:'Most visitors camp on the airfield, but camping access is ticketed by zone. Kiss-and-ride passengers are shuttled to the camping entrance, and only people holding the relevant camping ticket may enter. Hotels require a planned shuttle, taxi or rail connection.',link:{label:'Official booking combinations',url:'https://airbeat-one.de/en/how-to-book/'}},
      spending:{body:'Airbeat One has not published a complete 2027 menu or bar price list. You may bring food and drinks into the campsite in any quantity, subject to the site-wide glass ban. Outside food and drink are not allowed inside the festival arena.',items:[
        {label:'Local station shuttle',value:'Free'},{label:'Campsite food court',value:'Prices not published'},{label:'24-hour campsite vending',value:'Available'},{label:'Nearest supermarkets',value:'about 1 km away'}
      ],link:{label:'Official campsite food information',url:'https://customerservice.airbeat-one.de/hc/en-150/articles/115004834245-food-drinks-at-the-camp-site'}},
      packing:['Ticket set for festival, correct campsite and vehicle if used','Photo ID, rail or coach booking and tickets saved offline','Tent, sleeping kit, earplugs and a power bank','Food and drinks decanted into non-glass containers for camping','Foldable water bottle and arena bag no larger than A4'],
      avoid:['Glass anywhere on the airfield, including the campsite','Arena bags larger than A4 or backpacks','Food, drinks, cans, rigid bottles or hydration bladders in the arena','Open fires; campsite barbecues remain subject to weather restrictions','Arriving by car without the correct pre-booked vignette'],
      rulesNote:'Camping permits food and drink but prohibits glass. The arena rules are stricter: no brought food or drink, backpacks, cans or rigid bottles. Recheck weather restrictions on gas cartridges and barbecues before departure.',
      links:[
        {label:'Official website',url:'https://airbeat-one.de/en/'},{label:'2027 tickets',url:'https://airbeat-one.de/en/tickets/'},{label:'How to book',url:'https://airbeat-one.de/en/how-to-book/'},{label:'Travel and shuttles',url:'https://airbeat-one.de/en/getting-there/'},{label:'Festival airfield on Google Maps',url:'https://www.google.com/maps/search/?api=1&query=Airbeat+One+Festival+Neustadt-Glewe'}
      ],
      checked:'2026-10-06',checkedLabel:'6 October 2026'
    }}
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
