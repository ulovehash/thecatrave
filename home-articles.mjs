import fs from 'node:fs';
import {catalogueSets} from './catalogue.mjs';

export const homeArticleCatalog = [
  {
    page:'breakbeat-guide.html', category:'music-history', tags:['breaks','uk','nineties','sampling'], href:'/breakbeat-guide', type:'Guide', topic:'Breakbeat',
    title:'Breakbeat Music: History, Sound and Evolution',
    description:'From funk breaks and pirate radio to cracked VSTs and modern bass hybrids.',
    image:'img/amen-320.webp', srcset:'img/amen-320.webp 320w,img/amen-1200.webp 1200w',
    width:1200, height:800, alt:'The Amen break waveform and drum pattern'
  },
  {
    page:'jungle-music-guide.html', category:'music-history', tags:['breaks','uk','nineties','soundsystem'], href:'/jungle-music-guide', type:'Guide', topic:'Jungle',
    title:'Jungle Music: From Roots to Revival',
    description:'Pirate radio, dubplates, MC energy and the global return of a distinctly Black British sound.',
    image:'img/Dubplates-320.png', srcset:'img/Dubplates-320.png 320w,img/Dubplates.png 1024w',
    width:1024, height:1024, alt:'Illustrated dubplates representing jungle music culture'
  },
  {
    // Off the homepage grid since 2026-09-10 (owner): nine cards left one alone
    // on the last row of four. The oldest guide went. It stays in Read Next.
    page:'uk-electronic-music-evolution.html', category:'music-history', tags:['uk','history','overview'], href:'/uk-electronic-music-evolution', type:'Timeline', topic:'UK music',
    title:'The Evolution of UK Electronic Music',
    description:'Ten sounds that travelled from regional underground scenes into global culture.',
    image:'img/bmb-320.webp', srcset:'img/bmb-320.webp 320w,img/bmb.webp 1024w',
    width:1024, height:683, alt:'British electronic music artists performing in a dark club'
  },
  {
    page:'german-electronic-music.html', category:'music-history', tags:['techno','history','overview'], href:'/german-electronic-music', type:'Timeline', topic:'German music',
    title:'German Electronic Music History: From Kraftwerk to Techno',
    description:'Cologne studios, Düsseldorf electronic pop, Frankfurt trance and the Detroit-Berlin alliance.',
    image:'img/german-electronic/kraftwerk-stage-320.webp',
    srcset:'img/german-electronic/kraftwerk-stage-320.webp 320w,img/german-electronic/kraftwerk-stage-1200.webp 1200w',
    width:1200, height:901, alt:'Kraftwerk performing behind electronic consoles'
  },
  {
    page:'bass-music-guide.html', category:'music-history', tags:['bass','global','soundsystem'], href:'/bass-music-guide', type:'Guide', topic:'Bass music',
    title:'What Is Bass Music? History, Genres and Essential Tracks',
    description:'A global history connecting Jamaica, Miami, Britain, Los Angeles, Chicago, Durban and today’s hybrid club culture.',
    image:'img/bass-music/miami-bass-loc-ace-vic-480.jpg',
    srcset:'img/bass-music/miami-bass-loc-ace-vic-480.jpg 480w,img/bass-music/miami-bass-loc-ace-vic-1400.jpg 1400w',
    width:1400, height:933, alt:'Miami bass artists Loc Ace and Vic in front of a club sound system in 1993'
  },
  {
    page:'dubstep-guide.html', category:'music-history', tags:['bass','uk','twothousands','soundsystem'], href:'/dubstep-guide', type:'Guide', topic:'Dubstep',
    title:'What Is Dubstep? Origins, Sound and the Genre Split',
    description:'From south London record shops and 200-capacity basements to a genre that split into two sounds sharing one name.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'A vinyl cutting lathe with an acetate disc on the platter'
  },
  {
    page:'how-to-find-new-music.html', category:'digging', tags:['discovery','tools'], href:'/how-to-find-new-music', type:'Guide', topic:'Music discovery',
    title:'How to Find New Music: 10 Ways That Are Not an Algorithm',
    description:'Ten ways to hear something you have not heard before, from community radio to record credits, ordered by how much work they take.',
    image:'img/NOW-320.webp',
    srcset:'img/NOW-320.webp 320w,img/NOW-1024.webp 1024w',
    width:1024, height:1024, alt:'A record shop listening station'
  },
  {
    page:'uk-garage-guide.html', category:'music-history', tags:['uk','nineties','house','bass'], href:'/uk-garage-guide', type:'Guide', topic:'UK garage',
    title:'What Is UK Garage? The Sound, 2-Step, Speed Garage and Bassline',
    description:'London played an American record too fast until the beat broke. The branches it split into, and the numbers behind its revival.',
    image:'img/skream-320.webp',
    srcset:'img/skream-320.webp 320w,img/skream-1200.webp 1200w',
    width:1200, height:900, alt:'Skream playing a DJ set'
  },
  {
    page:'drum-and-bass-guide.html', category:'music-history', tags:['breaks','uk','nineties','bass'], href:'/drum-and-bass-guide', type:'Guide', topic:'Drum and bass',
    title:'What Is Drum and Bass? 174 BPM, History and Subgenres',
    description:'Fast breakbeats, deep sub-bass and the British rave continuum behind a global genre usually played between 170 and 180 BPM.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size DJing under green stage light'
  },
  {
    page:'best-boiler-room-sets.html', category:'digging', tags:['uk','house','bass','discovery'], href:'/best-boiler-room-sets', type:'List', topic:'Boiler Room',
    title:'Best Boiler Room Sets of All Time, Ranked and Measured',
    description:'Eighteen sets picked for what happens in them, beside the ten most-watched, counted across 8,206 Boiler Room recordings.',
    image:'img/boiler-room/carl-cox-320.webp',
    srcset:'img/boiler-room/carl-cox-320.webp 320w,img/boiler-room/carl-cox-1200.webp 1200w',
    width:1200, height:800, alt:'Carl Cox DJing at Amsterdam Dance Event'
  },
  {
    page:'what-is-burning-man.html', category:'festivals', tags:['house','history','discovery'], href:'/what-is-burning-man', type:'Guide', topic:'Burning Man',
    title:'What Is Burning Man? The Event, the City and the Music',
    description:'A participant-built city in the Nevada desert, with no central lineup or main stage, and the sound camps and art cars that programme their own music.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'The Robot Heart art car on the playa at Burning Man'
  },
  {
    page:'best-clubs-in-berlin.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-berlin', type:'Guide', topic:'Berlin clubs',
    title:'Best Clubs in Berlin: The Legends and the Ones Still Open',
    description:'The rooms that made Berlin a techno city, the famous clubs that closed, and the best clubs in Berlin that are still open.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'The entrance to Berghain in Berlin'
  },
  {
    page:'berghain.html', released:'2026-10-04T19:38:14+03:00', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/berghain', type:'Guide', topic:'Berghain',
    title:'Berghain: Panorama Bar, Sound and Residents',
    description:'Berghain explained: the former power station, Panorama Bar upstairs, Halle am Berghain, the Kantine, and the Ostgut Ton label.',
    image:'img/berghain/berghain-facade-320.webp',
    srcset:'img/berghain/berghain-facade-320.webp 320w,img/berghain/berghain-facade-1200.webp 1200w',
    width:1200, height:900, alt:'The grey neoclassical front of the Berghain building in Berlin, with a few people at the entrance'
  },
  {
    page:'best-clubs-in-paris.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-paris', type:'Guide', topic:'Paris clubs',
    title:'Best Clubs in Paris: From Le Palace to Rex Club',
    description:'Le Palace, Les Bains Douches and Rex Club: the clubs that made Paris nightlife, how each became famous, and the best clubs in Paris open now.',
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"The entrance to the former Les Bains Douches nightclub at 7 rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'best-clubs-in-barcelona.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-barcelona', type:'Guide', topic:'Barcelona clubs',
    title:'Best Clubs in Barcelona: From Zeleste to Razzmatazz',
    description:"Razzmatazz, Nitsa and Macarena Club: how Barcelona's biggest club grew out of a 1970s live venue, and the best clubs in Barcelona open now.",
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'The exterior of Sala Razzmatazz in the Poblenou district of Barcelona'
  },
  {
    page:'house-music-guide.html', category:'music-history', tags:['house','history','overview'], href:'/house-music-guide', type:'Guide', topic:'House music',
    title:'What Is House Music? History, Sound and Chicago Origins',
    description:'Frankie Knuckles, the Warehouse and the first Chicago records: what house music is, why it is called house, and the styles from deep house to afro house.',
    image:'img/house-music/frankie-knuckles-way-2022-320.webp',
    srcset:'img/house-music/frankie-knuckles-way-2022-320.webp 320w,img/house-music/frankie-knuckles-way-2022-1200.webp 1200w',
    width:1200, height:900, alt:'The honorary Frankie Knuckles Way street sign in Chicago'
  },
  {
    page:'techno-music-guide.html', category:'music-history', tags:['techno','history','overview'], href:'/techno-music-guide', type:'Guide', topic:'Techno',
    title:'What Is Techno? Detroit, the Belleville Three and Techno Today',
    description:'Juan Atkins, Derrick May and Kevin Saunderson: what techno is, why it is called techno, Underground Resistance, Berlin and the styles from minimal to hard techno.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills mixing records in a Detroit club in 2010'
  },
  {
    page:'best-clubs-in-nyc.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/best-clubs-in-nyc', type:'Guide', topic:'NYC clubs',
    title:'Best Clubs in NYC: Nightclubs for House and Techno, Then and Now',
    description:'Nowadays, Basement, Public Records, Good Room and Elsewhere: the best clubs in NYC for house and techno now, and the history from the Loft to Output.',
    image:'img/nyc-clubs/limelight-church-320.webp',
    srcset:'img/nyc-clubs/limelight-church-320.webp 320w,img/nyc-clubs/limelight-church-1200.webp 1200w',
    width:1200, height:900, alt:'The Gothic Revival church on Sixth Avenue that housed the Limelight nightclub'
  },
  {
    page:'best-clubs-in-tokyo.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/best-clubs-in-tokyo', type:'Guide', topic:'Tokyo clubs',
    title:'Best Clubs in Tokyo: WOMB, Contact and the Ban on Dancing',
    description:'WOMB, Contact, Vent and Circus Tokyo: the best clubs in Tokyo for house, techno and bass music, and the 68-year law against dancing that shaped them.',
    image:'img/tokyo-clubs/womb-shibuya-320.webp',
    srcset:'img/tokyo-clubs/womb-shibuya-320.webp 320w,img/tokyo-clubs/womb-shibuya-1200.webp 1200w',
    width:1200, height:800, alt:'The street-level entrance and signage of WOMB nightclub in Shibuya, Tokyo'
  },
  {
    page:'best-clubs-in-budapest.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/best-clubs-in-budapest', type:'Guide', topic:'Budapest clubs',
    title:'Best Clubs in Budapest: A38, Instant-Fogas and Turbina',
    description:"A38's converted cargo ship, the seven rooms of Instant-Fogas and Turbina's techno nights: the best clubs in Budapest now, and the ruin bars several grew out of.",
    image:'img/budapest-clubs/a38-ship-320.webp',
    srcset:'img/budapest-clubs/a38-ship-320.webp 320w,img/budapest-clubs/a38-ship-1200.webp 1200w',
    width:1200, height:900, alt:'The A38 ship moored on the Danube in Budapest, a converted 1968 cargo vessel'
  },
  {
    page:'best-clubs-in-prague.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/best-clubs-in-prague', type:'Guide', topic:'Prague clubs',
    title:'Best Clubs in Prague: Cross Club, Karlovy Lázně and Ankali',
    description:"Cross Club's salvaged machinery, Karlovy Lázně's five floors and Ankali's techno nights: the best clubs in Prague, mainstream and underground.",
    image:'img/prague-clubs/cross-club-interior-320.webp',
    srcset:'img/prague-clubs/cross-club-interior-320.webp 320w,img/prague-clubs/cross-club-interior-844.webp 844w',
    width:844, height:563, alt:"The interior of Cross Club's basement bar in Prague, built from salvaged metal and machine parts"
  },
  {
    page:'best-clubs-in-vienna.html', released:'2026-10-05T18:12:00+03:00', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/best-clubs-in-vienna', type:'Guide', topic:'Vienna clubs',
    title:'Best Clubs in Vienna: Flex, Grelle Forelle and Where to Dance Now',
    description:"The best clubs in Vienna now: Flex, Grelle Forelle, Das Werk, Fluc and SASS, plus what happened to Pratersauna, which stopped operating as a club in 2025.",
    image:'img/vienna-clubs/grelle-forelle-terrace-320.webp',
    srcset:'img/vienna-clubs/grelle-forelle-terrace-320.webp 320w,img/vienna-clubs/grelle-forelle-terrace-1200.webp 1200w',
    width:1200, height:675, alt:'The Grelle Forelle building on the Spittelauer Lände by the Donaukanal in Vienna, with a rainbow stripe on its facade'
  },
  {
    page:'best-clubs-in-manchester.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/best-clubs-in-manchester', type:'Guide', topic:'Manchester clubs',
    title:"Best Clubs in Manchester: From the Haçienda to the Warehouse Project",
    description:"The Haçienda closed in 1997, but its warehouse-first DIY streak still shapes the city: the best clubs in Manchester now, and the Warehouse Project's rise since.",
    image:'img/manchester-clubs/hacienda-bollards-320.webp',
    srcset:'img/manchester-clubs/hacienda-bollards-320.webp 320w,img/manchester-clubs/hacienda-bollards-800.webp 800w',
    width:800, height:600, alt:"Three of the Haçienda's surviving hazard-stripe bollards, on display in 2007"
  },
  {
    page:'best-clubs-in-bristol.html', category:'rave-spots', tags:['bass','jungle','history','discovery'], href:'/best-clubs-in-bristol', type:'Guide', topic:'Bristol clubs',
    title:'Best Clubs in Bristol: Motion, Lakota and Thekla',
    description:"Motion lost its lease in 2025 and moved, Lakota has run drum and bass since the 1990s, and a 1959 cargo ship still hosts club nights: the best clubs in Bristol.",
    image:'img/bristol-clubs/thekla-boat-320.webp',
    srcset:'img/bristol-clubs/thekla-boat-320.webp 320w,img/bristol-clubs/thekla-boat-1200.webp 1200w',
    width:1200, height:675, alt:"Thekla, a converted cargo ship moored in Bristol's Floating Harbour, seen from the waterside"
  },
  {
    page:'best-clubs-in-lisbon.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/best-clubs-in-lisbon', type:'Guide', topic:'Lisbon clubs',
    title:'Best Clubs in Lisbon: Lux Frágil, Ministerium and Kremlin',
    description:"Lux Frágil has anchored Lisbon since 1998, Ministerium runs Afro-house from a former ministry, and Musicbox closed in 2025: the best clubs in Lisbon now.",
    image:'img/lisbon-clubs/lux-fragil-320.webp',
    srcset:'img/lisbon-clubs/lux-fragil-320.webp 320w,img/lisbon-clubs/lux-fragil-552.webp 552w',
    width:552, height:400, alt:'The Lux Frágil building on Cais da Pedra, Lisbon'
  },
  {
    page:'best-clubs-in-mexico-city.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/best-clubs-in-mexico-city', type:'Guide', topic:'Mexico City clubs',
    title:'Best Clubs in Mexico City: Patrick Miller, M.N.Roy and Fünk',
    description:"Patrick Miller has run every Friday since 1983, M.N.Roy occupies a former Communist Party mansion, and Fünk opened in 2019: the best clubs in Mexico City now.",
    image:'img/mexico-city-clubs/roma-norte-street-320.webp',
    srcset:'img/mexico-city-clubs/roma-norte-street-320.webp 320w,img/mexico-city-clubs/roma-norte-street-1200.webp 1200w',
    width:1200, height:533, alt:'A street corner in the Roma Norte neighbourhood of Mexico City'
  },
  {
    page:'best-clubs-in-tbilisi.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-tbilisi', type:'Guide', topic:'Tbilisi clubs',
    title:'Tbilisi Clubs: Bassiani, Khidi and Mtkvarze Guide',
    description:'Tbilisi clubs and nightlife: Bassiani, KHIDI, Mtkvarze and Left Bank, how the 2018 raid and the 2024 strike shaped the scene, and the sets to hear.',
    image:'img/tbilisi-clubs/dinamo-arena-320.webp',
    srcset:'img/tbilisi-clubs/dinamo-arena-320.webp 320w,img/tbilisi-clubs/dinamo-arena-1200.webp 1200w',
    width:1200, height:900, alt:'The Boris Paichadze Dinamo Arena in Tbilisi during a football match, with fans in the foreground'
  },
  {
    page:'best-clubs-in-amsterdam.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-amsterdam', type:'Guide', topic:'Amsterdam clubs',
    title:'Best Clubs in Amsterdam: From RoXY to Radion',
    description:'Shelter, Radion, Lofi and the Gashouder: the best clubs in Amsterdam open now, why they run 24 hours, and the history from RoXY to De School.',
    image:'img/amsterdam-clubs/paradiso-320.webp',
    srcset:'img/amsterdam-clubs/paradiso-320.webp 320w,img/amsterdam-clubs/paradiso-1200.webp 1200w',
    width:1200, height:917, alt:'The brick front of Paradiso, a former church hall in Amsterdam'
  },
  {
    page:'best-clubs-in-ibiza.html', category:'rave-spots', tags:['house','history','discovery'], href:'/best-clubs-in-ibiza', type:'Guide', topic:'Ibiza clubs',
    title:'Best Clubs in Ibiza: Pacha, Amnesia, Hï and the Rest',
    description:'Hï, Pacha, Amnesia, DC-10, Ushuaïa and [UNVRS]: the best clubs in Ibiza now, the ones that closed, where to stay and when the season runs.',
    image:'img/ibiza-clubs/pacha-entrance-320.webp',
    srcset:'img/ibiza-clubs/pacha-entrance-320.webp 320w,img/ibiza-clubs/pacha-entrance-1200.webp 1200w',
    width:1200, height:675, alt:'The white entrance of Pacha in Ibiza Town with its red lettering'
  },
  {
    page:'best-clubbing-cities-in-europe.html', category:'rave-spots', tags:['techno','discovery','history'], href:'/best-clubbing-cities-in-europe', type:'List', topic:'Clubbing cities',
    title:'Best Clubbing Cities in Europe: Where to Go Out',
    description:'Berlin, Amsterdam, London, Ibiza, Tbilisi and seven more: the best clubbing cities in Europe, ranked by their clubs rather than bars and beaches.',
    image:'img/europe-clubbing-cities/cross-club-prague-320.webp',
    srcset:'img/europe-clubbing-cities/cross-club-prague-320.webp 320w,img/europe-clubbing-cities/cross-club-prague-1200.webp 1200w',
    width:1200, height:901, alt:'The courtyard of Cross Club in Prague, built from salvaged metal, pipes and machine parts'
  },
  {
    page:'new-years-eve-festivals.html', category:'festivals', tags:['discovery','techno','house'], href:'/new-years-eve-festivals', type:'List', topic:"New Year's Eve festivals",
    title:"Best New Year's Eve Festivals 2026 into 2027",
    description:"Countdown NYE, Decadence, HiJinx, Rhythm and Vines and Awakenings: the best New Year's Eve festivals for dance music in 2026, with dates and where they are.",
    image:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp',
    srcset:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp 320w,img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp 1200w',
    width:1200, height:900, alt:'Red light beams and a lit rig over the crowd inside the Gashouder at Awakenings in Amsterdam'
  },
  {
    page:'best-electronic-music-clubs-in-london.html', category:'rave-spots', tags:['jungle','history','discovery'], href:'/best-electronic-music-clubs-in-london', type:'Guide', topic:'London clubs',
    title:'Best Electronic Music Clubs in London: History and Where to Go',
    description:'The best electronic music clubs in London now, plus the rooms that shaped acid house, jungle, garage and dubstep.',
    image:'img/london-clubs/fabric-320.webp',
    srcset:'img/london-clubs/fabric-320.webp 320w,img/london-clubs/fabric-1200.webp 1200w',
    width:1200, height:810, alt:'The entrance to fabric on Charterhouse Street, London'
  },
  {
    page:'live-dj-sets.html', category:'digging', tags:['discovery','history','uk','jungle'], href:'/live-dj-sets', type:'Guide', topic:'Live DJ sets',
    title:'Where to Watch Live DJ Sets: Boiler Room, HÖR, NTS and More',
    description:`Where to watch DJ sets online, how the main platforms differ, and a route through ${catalogueSets()} archived recordings.`,
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'tomorrowland-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/tomorrowland-festival', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland Festival: Where It Is, How Big, and the Music',
    description:'A park in Boom, Belgium, that most of the world knows through a livestream: where Tomorrowland happens, how big it is, who owns it, and what plays off the Mainstage.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'The Tomorrowland Mainstage in 2014'
  },
  {
    page:'edc-las-vegas.html', category:'festivals', tags:['discovery','history','bass'], href:'/edc-las-vegas', type:'Guide', topic:'EDC Las Vegas',
    title:'EDC Las Vegas: What It Is, How Big, and the Music',
    description:'Electric Daisy Carnival at the Las Vegas Motor Speedway: where EDC happens, how half a million people a year grew out of a field in Chino, and what plays past kineticFIELD.',
    image:'img/edc/kinetic-field-2024-320.webp',
    srcset:'img/edc/kinetic-field-2024-320.webp 320w,img/edc/kinetic-field-2024-1200.webp 1200w',
    width:1200, height:900, alt:'kineticFIELD at EDC Las Vegas in 2024'
  },
  {
    page:'creamfields-festival.html', category:'festivals', tags:['discovery','history','uk','bass'], href:'/creamfields-festival', type:'Guide', topic:'Creamfields',
    title:'Creamfields Festival 2027: Location, Capacity, Age Limit',
    description:'Four days on the Daresbury estate every August bank holiday: where Creamfields happens, how a Liverpool house night grew into it, who owns it, and what plays beyond the Arc Stage.',
    image:'img/creamfields/steel-yard-2017-320.webp',
    srcset:'img/creamfields/steel-yard-2017-320.webp 320w,img/creamfields/steel-yard-2017-1200.webp 1200w',
    width:1200, height:801, alt:'The empty interior of the Steel Yard at Creamfields, an arched steel structure lit orange'
  },
  {
    page:'parookaville-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/parookaville-festival', type:'Guide', topic:'Parookaville',
    title:'Parookaville Festival: Where It Is, Who Runs It, the Music',
    description:'A festival staged as a city on an old RAF airbase at Weeze: where Parookaville happens, how three friends built it, how many people go, who runs it, and what plays there.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'The Parookaville Mainstage from the air in 2022, with the crowd in front of it and wind turbines on the horizon'
  },
  {
    page:'ultra-music-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/ultra-music-festival', type:'Guide', topic:'Ultra',
    title:'Ultra Music Festival 2027: Location, Age Limit, Attendance',
    description:'Ultra returns to Bayfront Park in Miami on 26 to 28 March 2027: the location, scale, history and music beyond the Main Stage.',
    image:'img/ultra/bayfront-2014-320.webp',
    srcset:'img/ultra/bayfront-2014-320.webp 320w,img/ultra/bayfront-2014-1200.webp 1200w',
    width:1200, height:900, alt:'Bayfront Park in Miami seen from above during Ultra Music Festival 2014'
  },
  {
    page:'untold-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/untold-festival', type:'Guide', topic:'Untold',
    title:'Untold Festival: Where It Is, How Big, and the Music',
    description:'Four days every August in Cluj-Napoca: when Untold 2027 is, where it happens, how a European Youth Capital party reached 500,000 admissions, and what plays past the main stage.',
    image:'img/untold/main-stage-2019-320.webp',
    srcset:'img/untold/main-stage-2019-320.webp 320w,img/untold/main-stage-2019-1200.webp 1200w',
    width:1200, height:900, alt:'A packed crowd with phone lights in front of the Untold main stage at night in 2019'
  },
  {
    page:'awakenings-festival.html', category:'festivals', tags:['discovery','history','techno'], href:'/awakenings-festival', type:'Guide', topic:'Awakenings',
    title:'Awakenings Festival: What It Is and Where It Happens',
    description:"Founded in Amsterdam in 1997, techno-only ever since: where Awakenings' summer festival and its Amsterdam Dance Event special happen, and why it's called Awakenings.",
    image:'img/awakenings/blimp-2007-320.webp',
    srcset:'img/awakenings/blimp-2007-320.webp 320w,img/awakenings/blimp-2007-1200.webp 1200w',
    width:1200, height:803, alt:"Awakenings' branded airship over the crowd with laser beams crossing the night sky"
  },
  {
    page:'what-is-coachella.html', category:'festivals', tags:['discovery','history','bass'], href:'/what-is-coachella', type:'Guide', topic:'Coachella',
    title:'What Is Coachella? 2027 Dates, Location and Music',
    description:'Two weekends every April at the Empire Polo Club in Indio: when Coachella 2027 is, how long it lasts, how a festival that lost money in 1999 grew, and what plays in the Sahara.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Festivalgoers on the grass at Coachella in 2018, palm trees and desert mountains behind them'
  },
  {
    page:'lollapalooza-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/lollapalooza-festival', type:'Guide', topic:'Lollapalooza',
    title:'Lollapalooza Chicago: Location, History and the Music',
    description:'Four days every summer in Grant Park, Chicago: where Lollapalooza happens, how it grew from a farewell tour and what plays across its stages.',
    image:'img/lollapalooza/skyline-2017-320.webp',
    srcset:'img/lollapalooza/skyline-2017-320.webp 320w,img/lollapalooza/skyline-2017-1200.webp 1200w',
    width:1200, height:900, alt:'A Lollapalooza crowd in Grant Park with the Chicago skyline behind it in 2017'
  },
  {
    page:'glastonbury-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/glastonbury-festival', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury Festival: 2027, Fallow Years and Headliners',
    description:'Five days most Junes at Worthy Farm in Somerset: when Glastonbury 2027 is, why there was no festival this year, where it is, how big it is, and every headliner by year.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'People on a hillside at night looking over the lit stages of Glastonbury in 2025'
  },
  {
    page:'sonar-festival-barcelona.html', category:'festivals', tags:['discovery','history','bass'], href:'/sonar-festival-barcelona', type:'Guide', topic:'Sónar',
    title:'Sónar Festival Barcelona: History, Music and 2027 Dates',
    description:'Three days every June in Barcelona since 1994: where Sónar happens, how a festival of advanced music grew to 150,000 people, who owns it now, OFFSónar, and Sónar 2027.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'A crowd at the SonarVillage stage at Fira Montjuïc, with the Palau Nacional behind'
  },
  {
    page:'mysteryland-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/mysteryland-festival', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland Festival: Where It Is, Its History, and 2027',
    description:'The oldest dance festival in the Netherlands by its own count, on the old Floriade grounds in Haarlemmermeer: when Mysteryland 2027 is, why it skipped 2026, who owns it, and what it plays.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland from the air in 2018, the main stage by a lake with a crowd in front of it'
  },
  {
    page:'primavera-sound-barcelona.html', category:'festivals', tags:['discovery','history','house'], href:'/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027: Location, Headliners by Year',
    description:'The Barcelona festival returns to Parc del Fòrum on 3 to 5 June 2027: its waterfront location, scale, music and city programme.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Festivalgoers gathered beside the waterfront at Primavera Sound Barcelona in 2019'
  },
  {
    page:'best-spotify-playlists.html', category:'digging', tags:['discovery','tools','house','bass'], href:'/best-spotify-playlists', type:'List', topic:'Spotify playlists',
    title:'Best Spotify Playlists: 12 Human-Curated Picks',
    description:'Twelve playlists with an identifiable point of view, from KEXP and Pitchfork to Four Tet, Bicep and the electronic underground.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Wired headphones, a portable music player and translucent cases on a scratched club table'
  },
  {
    page:'best-soundcloud-dj-mixes.html', category:'digging', tags:['discovery','techno','house','bass'], href:'/best-soundcloud-dj-mixes', type:'List', topic:'SoundCloud DJ mixes',
    title:'Best SoundCloud DJ Mixes, Plus One Personal Pick',
    description:'Eight editorial selections with a clear point of view, plus one clearly disclosed thecatrave mix worth your time.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'best-techno-mixes.html', category:'digging', tags:['techno','history','discovery'], href:'/best-techno-mixes', type:'List', topic:'Techno mixes',
    title:'Best Techno Mixes: 10 Essential DJ Sets',
    description:'Ten complete techno recordings, from Juan Atkins, Robert Hood and Jeff Mills to Wata Igarashi and Fadi Mohem.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills mixing records in a Detroit club in 2010'
  },
  {
    page:'best-techno-tracks.html', category:'digging', tags:['techno','discovery','history'], href:'/best-techno-tracks', type:'List', topic:'Techno tracks',
    title:'Best Techno Tracks: Nine Records That Built the Sound',
    description:'Nine techno records grouped by scene with a player each, from No UFO\'s in 1985 to Doppler in 2021.',
    image:'img/best-techno-tracks/richie-hawtin-fabric-320.webp',
    srcset:'img/best-techno-tracks/richie-hawtin-fabric-320.webp 320w,img/best-techno-tracks/richie-hawtin-fabric-1200.webp 1200w',
    width:1200, height:900, alt:'Richie Hawtin playing at Fabric in London'
  },
  {
    page:'best-electronic-albums.html', category:'digging', tags:['discovery','history'], href:'/best-electronic-albums', type:'Guide', topic:'Electronic albums',
    title:'Best Electronic Albums of All Time',
    description:'Sixteen electronic albums picked from three published rankings, with the year, the label and where each one places.',
    image:'img/best-electronic-albums/massive-320.webp',
    srcset:'img/best-electronic-albums/massive-320.webp 320w,img/best-electronic-albums/massive-1200.webp 1200w',
    width:1200, height:800, alt:'Massive Attack performing on stage at the Eurockéennes festival'
  },
  {
    page:'why-dj-mag-top-100-never-changes.html', category:'digging', tags:['discovery','history'], href:'/why-dj-mag-top-100-never-changes', type:'Essay', topic:'DJ Mag Top 100',
    title:'Why the DJ Mag Top 100 Barely Changes',
    description:'Five DJs in the top ten of every poll since 2015: the table, how the vote works, what campaigning is allowed and who the poll misses.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'best-trance-tracks.html', category:'digging', tags:['trance','history'], href:'/best-trance-tracks', type:'List', topic:'Trance',
    title:'Best Trance Tracks of All Time: 12 Records to Hear',
    description:'Twelve trance records from 1993 to 2012 with release years, UK chart peaks and a player for each, from Café del Mar to Concrete Angel.',
    image:'img/best-trance-tracks/tiesto-2010-320.webp',
    srcset:'img/best-trance-tracks/tiesto-2010-320.webp 320w,img/best-trance-tracks/tiesto-2010-1200.webp 1200w',
    width:1200, height:800, alt:'Tiësto at the decks in a Bangkok nightclub'
  },
  {
    page:'house-music-classics.html', category:'digging', tags:['house','discovery','history'], href:'/house-music-classics', type:'List', topic:'House classics',
    title:'House Music Classics: 10 Classic House Songs to Hear',
    description:'Ten classic house songs in order, from Inner City and Lil Louis to Stardust and Kings of Tomorrow, nine with a player and one fact each.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'best-dj-sets-of-all-time.html', category:'digging', tags:['discovery','house','techno','history'], href:'/best-dj-sets-of-all-time', type:'List', topic:'DJ sets',
    title:'Best DJ Sets of All Time: 30 You Can Hear',
    description:'Thirty official recordings, from Carl Cox at Space to Fabio and Grooverider, with named sets, substitutes and editorial picks clearly marked.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'best-house-music-playlists-spotify.html', category:'digging', tags:['house','discovery','tools'], href:'/best-house-music-playlists-spotify', type:'List', topic:'House playlists',
    title:'Best House Music Playlists on Spotify: 12 Curated Picks',
    description:'Ten focused house playlists plus two disclosed thecatrave selections spanning house, techno and the spaces between them.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Wired headphones, a portable music player and translucent cases on a scratched club table'
  },
  {
    page:'acid-house-guide.html', category:'music-history', tags:['history','uk','house','techno'], href:'/acid-house-guide', type:'Guide', topic:'Acid house',
    title:'What Is Acid House? From Chicago\'s TB-303 to the UK Rave Boom',
    description:'A $40 bass machine, three friends in Chicago, a DJ who played their tape four times in a night, and the British movement that borrowed the name.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Close-up of a Roland TB-303 Bass Line panel'
  },
  {
    page:'90s-rave-music.html', released:'2026-10-06T12:00:00+03:00', category:'music-history', tags:['history','uk','nineties','techno'], href:'/90s-rave-music', type:'Guide', topic:'90s rave music',
    title:'90s Rave Music: The Records, Scenes and Laws That Shaped It',
    description:'British hardcore, Belgian techno, Dutch gabber and the law that went after repetitive beats, with a record to hear for each.',
    image:'img/90s-rave-music/criminal-justice-bill-march-1994-320.webp',
    srcset:'img/90s-rave-music/criminal-justice-bill-march-1994-320.webp 320w,img/90s-rave-music/criminal-justice-bill-march-1994-800.webp 800w',
    width:800, height:600, alt:'A dense crowd in Trafalgar Square with banners during the march against the Criminal Justice Bill, July 1994'
  },
  {
    page:'trance-guide.html', category:'music-history', tags:['history','trance','psytrance'], href:'/trance-guide', type:'Guide', topic:'Trance',
    title:'What Is Trance Music? Origins, Artists and Sound',
    description:'A build, a breakdown and a drop, born in Frankfurt\'s clubs. Who built it, how Armin van Buuren and Tiësto took it to festival mainstages, and how psytrance split off.',
    image:'img/trance/armin-van-buuren-2017-320.webp',
    srcset:'img/trance/armin-van-buuren-2017-320.webp 320w,img/trance/armin-van-buuren-2017-1024.webp 1024w',
    width:1024, height:681, alt:'Armin van Buuren playing to a large crowd at Armin Only Embrace in Kyiv, 2017'
  },
  {
    page:'hardstyle-guide.html', category:'music-history', tags:['history','hardstyle','trance','techno'], href:'/hardstyle-guide', type:'Guide', topic:'Hardstyle',
    title:'What Is Hardstyle? History, Sound, Artists and Subgenres',
    description:'Reverse bass, distorted pitched kicks, the Dutch festival circuit and the split between euphoric and raw hardstyle.',
    image:'img/hardstyle/defqon1-red-2024-320.webp',
    srcset:'img/hardstyle/defqon1-red-2024-320.webp 320w,img/hardstyle/defqon1-red-2024-1280.webp 1280w',
    width:1280, height:720, alt:'The Red main stage at Defqon.1 in 2024'
  },
  {
    page:'movement-detroit.html', category:'festivals', tags:['history','techno','detroit','festivals'], href:'/movement-detroit', type:'Guide', topic:'Movement Detroit',
    title:'Movement Detroit: Festival History, Location and Techno Legacy',
    description:'From the free Detroit Electronic Music Festival in 2000 to six stages at Hart Plaza over Memorial Day weekend.',
    image:'img/movement-detroit/movement-hart-plaza-2026-320.webp',
    srcset:'img/movement-detroit/movement-hart-plaza-2026-320.webp 320w,img/movement-detroit/movement-hart-plaza-2026-1280.webp 1280w',
    width:1280, height:655, alt:'Movement Music Festival filling Hart Plaza in Detroit in 2026'
  },
  {
    page:'sziget-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','house','techno'], href:'/sziget-festival', type:'Guide', topic:'Sziget Festival',
    title:'Sziget Festival 2027: Dates, Music, Camping and Travel',
    description:'Five days on Óbuda Island, with pop, rock and hip-hop beside club stages, theatre, circus and a rail link into Budapest.',
    image:'img/sziget/island-2022-320.webp',
    srcset:'img/sziget/island-2022-320.webp 320w,img/sziget/island-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Aerial view across Sziget Festival on Óbuda Island in Budapest'
  },
  {
    page:'boomtown-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','jungle','techno'], href:'/boomtown-festival', type:'Guide', topic:'Boomtown Festival',
    title:'Boomtown Festival 2027: Dates, Location, History and Music',
    description:'A five-day camping festival built as a fictional city, with soundsystem culture, electronic music, live bands and street theatre.',
    image:'img/boomtown/opening-ceremony-2019-320.webp',
    srcset:'img/boomtown/opening-ceremony-2019-320.webp 320w,img/boomtown/opening-ceremony-2019-1200.webp 1200w',
    width:1200, height:900, alt:'Opening ceremony stage and crowd at Boomtown in 2019'
  },
  {
    page:'monegros-desert-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','techno','house'], href:'/monegros-desert-festival', type:'Guide', topic:'Monegros Desert Festival',
    title:'Monegros Desert Festival 2027: Date, History and Guide',
    description:'One long electronic event on exposed land near Fraga, with roots in Florida 135 and stages running through the night.',
    image:'img/monegros/festival-overview-2009-320.webp',
    srcset:'img/monegros/festival-overview-2009-320.webp 320w,img/monegros/festival-overview-2009-1200.webp 1200w',
    width:1200, height:900, alt:'Wide view of Monegros Desert Festival stages and crowd in 2009'
  },
  {
    page:'arc-music-festival.html', category:'festivals', tags:['festivals','history','house','techno','chicago'], href:'/arc-music-festival', type:'Guide', topic:'ARC Music Festival',
    title:'ARC Music Festival 2027: Chicago Guide, Stages and Travel',
    description:'Chicago house history, international techno, the compact Union Park site and the city-wide After Dark programme.',
    image:'img/arc-music-festival/arc-union-park-320.webp',
    srcset:'img/arc-music-festival/arc-union-park-320.webp 320w,img/arc-music-festival/arc-union-park-1200.webp 1024w',
    width:1024, height:768, alt:'Union Park in Chicago with the downtown skyline behind it'
  },
  {
    page:'airbeat-one-festival.html', category:'festivals', tags:['festivals','europe-festivals','techno','hardstyle','trance'], href:'/airbeat-one-festival', type:'Guide', topic:'Airbeat One Festival',
    title:'Airbeat One Festival 2027: Dates, Stages, Camping and Travel',
    description:'An airfield festival for EDM, techno, hardstyle and psytrance, with camping operating as part of the event.',
    image:'img/airbeat-one/airbeat-arena-320.webp',
    srcset:'img/airbeat-one/airbeat-arena-320.webp 320w,img/airbeat-one/airbeat-arena-1200.webp 1200w',
    width:1200, height:754, alt:'Crowd and production inside the Airbeat One Arena Stage in 2025'
  },
  {
    page:'exit-festival.html', category:'festivals', tags:['festivals','europe-festivals','history','house','techno'], href:'/exit-festival', type:'Guide', topic:'EXIT Festival',
    title:'EXIT Festival: History, Petrovaradin Fortress and What Comes Next',
    description:'From a Novi Sad student movement and the Dance Arena at Petrovaradin Fortress to the post-2025 global tour.',
    image:'img/exit-festival/exit-fortress-320.webp',
    srcset:'img/exit-festival/exit-fortress-320.webp 320w,img/exit-festival/exit-fortress-1200.webp 800w',
    width:800, height:509, alt:'Petrovaradin Fortress illuminated during EXIT Festival'
  },
  {
    page:'grime-music-guide.html', category:'music-history', tags:['uk','history','bass','jungle'], href:'/grime-music-guide', type:'Guide', topic:'Grime',
    title:'What Is Grime Music? Its Sound, History, Artists and Tracks',
    description:'Cold 140 BPM instrumentals, pirate radio, crews and clashes from East London, and the arguments about who started it.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Two Roll Deep MCs on a dark stage in New York in 2005'
  },
  {
    page:'best-electronic-music-festivals-europe.html', category:'festivals', tags:['discovery','techno','house','history'], href:'/best-electronic-music-festivals-europe', type:'List', topic:'Europe festivals',
    title:'Best Electronic Music Festivals in Europe 2027, Compared',
    description:'Fourteen major festivals and seven smaller ones, from Tomorrowland to Garbicz, compared by sound, scale, setting and 2027 dates.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'A daytime crowd under the steel canopy of the Futur Stage at Kappa FuturFestival in Turin'
  },
  {
    page:'best-edm-festivals-usa.html', category:'festivals', tags:['discovery','house','techno','history'], href:'/best-edm-festivals-usa', type:'List', topic:'US EDM festivals',
    title:'Best EDM Festivals in the US 2027: EDC, Ultra, Movement',
    description:'EDC Dusk and Dawn on 14–16 and 21–23 May, Ultra on 26–28 March, Movement on 29–31 May: US EDM festivals for 2027 by sound, with dates confirmed or not.',
    image:'img/us-festivals/beyond-wonderland-2010-320.webp',
    srcset:'img/us-festivals/beyond-wonderland-2010-320.webp 320w,img/us-festivals/beyond-wonderland-2010-1200.webp 1200w',
    width:1200, height:900, alt:'A DJ on the main stage at Beyond Wonderland in 2010 above a crowd'
  },
  {
    page:'dekmantel-festival.html', category:'festivals', tags:['discovery','house','techno'], href:'/dekmantel-festival', type:'Guide', topic:'Dekmantel',
    title:'Dekmantel Festival 2027: Dates, Tickets, Selectors, Amsterdam',
    description:'Dekmantel at the Amsterdamse Bos, 18+: 2027 dates (listed, not yet official), ticket rules, Selectors in Croatia on 19 to 23 August 2027 and sets to hear.',
    image:'img/dekmantel/midland-2017-320.webp',
    srcset:'img/dekmantel/midland-2017-320.webp 320w,img/dekmantel/midland-2017-1200.webp 1200w',
    width:1200, height:799, alt:'Midland playing a DJ set at Dekmantel Festival in 2017'
  },
  {
    page:'best-winter-music-festivals.html', released:'2026-10-04T14:19:28+03:00', category:'festivals', tags:['house','techno','discovery'], href:'/best-winter-music-festivals', type:'Guide', topic:'Winter festivals',
    title:'Best Winter Music Festivals 2027: Snowbombing, Igloofest, CTM',
    description:'Winter music festivals in 2027, from Tomorrowland Winter and Snowbombing to CTM, Elevate and Shapes, with dates marked confirmed or unconfirmed.',
    image:'img/winter-festivals/igloofest-2009-320.webp',
    srcset:'img/winter-festivals/igloofest-2009-320.webp 320w,img/winter-festivals/igloofest-2009-1200.webp 1200w',
    width:1200, height:800, alt:'Igloofest in Montreal in January 2009'
  },
  {
    page:'snowbombing-festival.html', released:'2026-10-04T14:19:28+03:00', category:'festivals', tags:['house','breaks'], href:'/snowbombing-festival', type:'Guide', topic:'Snowbombing',
    title:'Snowbombing 2027: Dates, Tickets, Mayrhofen',
    description:'Snowbombing 2027 runs 5 to 10 April in Mayrhofen, Austria. Dates, how packages and tickets work, where it is held and who plays.',
    image:'img/snowbombing/street-party-2016-320.webp',
    srcset:'img/snowbombing/street-party-2016-320.webp 320w,img/snowbombing/street-party-2016-1200.webp 1200w',
    width:1200, height:800, alt:'The Snowbombing Street Party in Mayrhofen in April 2016'
  },
  {
    page:'love-parade.html', released:'2026-10-05T11:57:26+03:00', category:'festivals', tags:['techno','history'], href:'/love-parade', type:'Guide', topic:'Love Parade',
    title:'Love Parade: History, Duisburg 2010 and Rave the Planet',
    description:'The Love Parade from Berlin in 1989 to Duisburg in 2010, why it ended, and Rave the Planet and the Street Parade, the parades that carry it on.',
    image:'img/love-parade/rave-the-planet-2023-320.webp',
    srcset:'img/love-parade/rave-the-planet-2023-320.webp 320w,img/love-parade/rave-the-planet-2023-1200.webp 1200w',
    width:1200, height:899, alt:'A crowd on the Straße des 17. Juni in Berlin at the Rave the Planet parade, 2023'
  },
  {
    page:'time-warp-festival.html', released:'2026-10-04T17:24:02+03:00', category:'festivals', tags:['techno','house'], href:'/time-warp-festival', type:'Guide', topic:'Time Warp',
    title:'Time Warp Festival 2027: Mannheim, Tickets, Line-up',
    description:'Time Warp 2027: when the Mannheim original runs, which cities host an edition, how tickets work and who plays.',
    image:'img/time-warp/monika-kruse-2016-320.webp',
    srcset:'img/time-warp/monika-kruse-2016-320.webp 320w,img/time-warp/monika-kruse-2016-1200.webp 1200w',
    width:1200, height:800, alt:'Monika Kruse behind the decks at Time Warp in Mannheim, high-fiving a person in front of the booth'
  },
  {
    page:'pacha-ibiza.html', released:'2026-10-04T20:48:49+03:00', category:'rave-spots', tags:['house','techno','history'], href:'/pacha-ibiza', type:'Guide', topic:'Pacha Ibiza',
    title:'Pacha Ibiza: Tickets, Dress Code and Calendar 2026',
    description:'Pacha Ibiza: how tickets, tables and the dress code work, where the club is, who owns it and how to read the 2026 calendar.',
    image:'img/pacha-ibiza/cherries-2014-320.webp',
    srcset:'img/pacha-ibiza/cherries-2014-320.webp 320w,img/pacha-ibiza/cherries-2014-1200.webp 1200w',
    width:1200, height:800, alt:'The red cherry signs of Pacha Ibiza lit at night'
  },
  {
    page:'ushuaia-ibiza.html', released:'2026-10-05T12:43:03+03:00', category:'rave-spots', tags:['house','techno'], href:'/ushuaia-ibiza', type:'Guide', topic:'Ushuaia Ibiza',
    title:'Ushuaia Ibiza: Tickets, Dress Code and Season Events',
    description:'Ushuaia Ibiza: what tickets cost, the dress code and entry rules, the 2026 residencies and closing parties, and what 2027 has not published.',
    image:'img/ushuaia-ibiza/dance-floor-2023-320.webp',
    srcset:'img/ushuaia-ibiza/dance-floor-2023-320.webp 320w,img/ushuaia-ibiza/dance-floor-2023-1200.webp 1200w',
    width:1200, height:800, alt:'The Ushuaia Ibiza dance floor packed around the pool at dusk'
  },
  {
    page:'best-clubs-in-belgrade.html', released:'2026-10-05T18:15:00+03:00', category:'rave-spots', tags:['techno','history','discovery'], href:'/best-clubs-in-belgrade', type:'Guide', topic:'Belgrade clubs',
    title:'Belgrade Clubs and Nightlife: Drugstore, Klub 20/44, Splavovi',
    description:'Drugstore, Klub 20/44 and Barutana: the Belgrade clubs worth a night, how the splavovi river rafts were cleared from the Sava, and Boiler Room sets to hear first.',
    image:'img/belgrade-clubs/sava-from-kalemegdan-320.webp',
    srcset:'img/belgrade-clubs/sava-from-kalemegdan-320.webp 320w,img/belgrade-clubs/sava-from-kalemegdan-1200.webp 1200w',
    width:1200, height:900, alt:'The Sava river in Belgrade seen from Kalemegdan fortress, with road bridges and moored boats'
  },
  {
    page:'best-nightclubs-in-the-world.html', released:'2026-10-06T22:30:00+03:00', category:'rave-spots', tags:['house','techno','history'], href:'/best-nightclubs-in-the-world', type:'Guide', topic:'Best nightclubs in the world',
    title:"Best Nightclubs in the World: 20 Clubs From DJ Mag's 2026 Top 100",
    description:'The best nightclubs in the world by region, from Ibiza and Berlin to Brazil, Miami and Tokyo, with DJ Mag ranks, sizes and sets to hear.',
    image:'img/best-nightclubs-in-the-world/echostage-2024-320.webp',
    srcset:'img/best-nightclubs-in-the-world/echostage-2024-320.webp 320w,img/best-nightclubs-in-the-world/echostage-2024-1200.webp 1200w',
    width:1200, height:856, alt:'The crowd at Echostage in Washington, DC in front of a lit stage and LED walls'
  },
  {
    page:'best-clubs-in-europe.html', released:'2026-10-04T21:46:12+03:00', category:'rave-spots', tags:['house','techno','history'], href:'/best-clubs-in-europe', type:'Guide', topic:'Best clubs in Europe',
    title:'Best Clubs in Europe: 23 Nightclubs Worth the Trip',
    description:'The best clubs in Europe by country, from Berghain and fabric to Pacha, with sets to hear from several rooms.',
    image:'img/best-clubs-in-europe/cavo-paradiso-2016-320.webp',
    srcset:'img/best-clubs-in-europe/cavo-paradiso-2016-320.webp 320w,img/best-clubs-in-europe/cavo-paradiso-2016-1200.webp 1200w',
    width:1200, height:900, alt:'Cavo Paradiso on its cliff above the sea in Mykonos, seen from the water'
  },
  {
    page:'fabric-london.html', released:'2026-10-04T19:38:15+03:00', category:'rave-spots', tags:['house','techno','history'], href:'/fabric-london', type:'Guide', topic:'fabric London',
    title:'fabric London: History, Rooms, Tickets and Dress Code',
    description:'fabric London in Farringdon: the three rooms, opening times, tickets, dress code, capacity, age limit and what happened in the 2016 closure.',
    image:'img/fabric-london/exterior-2017-320.webp',
    srcset:'img/fabric-london/exterior-2017-320.webp 320w,img/fabric-london/exterior-2017-1200.webp 1200w',
    width:1200, height:900, alt:'The front of fabric on Charterhouse Street in London in 2017'
  },
  {
    page:'printworks-london.html', released:'2026-10-05T11:32:49+03:00', category:'rave-spots', tags:['house','techno','history'], href:'/printworks-london', type:'Guide', topic:'Printworks London',
    title:'Printworks London: Reopening, Closure and History',
    description:'Printworks London closed in May 2023. What is officially planned, why it shut, its rooms and capacity, famous nights, Drumsheds and where to go instead.',
    image:'img/printworks-london/gate-2010-320.webp',
    srcset:'img/printworks-london/gate-2010-320.webp 320w,img/printworks-london/gate-2010-1200.webp 1200w',
    width:1200, height:797, alt:'A fenced gate at the Harmsworth Quays print works in Rotherhithe in 2010'
    },
    {
    page:'defqon-1.html', released:'2026-10-05T11:37:56+03:00', category:'festivals', tags:['discovery','history','hardstyle'], href:'/defqon-1', type:'Guide', topic:'Defqon.1',
    title:'Defqon.1 2027: Dates, Tickets, Sale Dates, Line-up',
    description:'Defqon.1 2027: dates, how the ticket sales work, why 2026 was cancelled, where it is held, the stage colours and how to get there.',
    image:'img/defqon-1/red-stage-2023-320.webp',
    srcset:'img/defqon-1/red-stage-2023-320.webp 320w,img/defqon-1/red-stage-2023-1200.webp 1280w',
    width:1280, height:720, alt:'The Red main stage at Defqon.1 2023 in daylight, with a crowd in front'
  },
  {
    page:'fusion-festival.html', released:'2026-10-05T12:44:19+03:00', category:'festivals', tags:['discovery','history','techno'], href:'/fusion-festival', type:'Guide', topic:'Fusion Festival',
    title:'Fusion Festival, Lärz Germany: 2027, 2028 Dates, Tickets',
    description:'Fusion Festival in Lärz, Germany: why there is no 2027 edition, the 2028 dates, how the ticket lottery works, the 2019 police dispute, stages and how to get there.',
    image:'img/fusion-festival/palapa-2019-320.webp',
    srcset:'img/fusion-festival/palapa-2019-320.webp 320w,img/fusion-festival/palapa-2019-1200.webp 1200w',
    width:1200, height:675, alt:'The Palapa stage at night during Fusion Festival 2019, with a crowd in purple light'
  },
  {
    page:'electric-forest-festival.html', released:'2026-10-04T20:48:49+03:00', category:'festivals', tags:['discovery','history','bass'], href:'/electric-forest-festival', type:'Guide', topic:'Electric Forest',
    title:'Electric Forest 2027: Tickets, Dates, Camping, Line-up',
    description:'Electric Forest 2027: when it is held in Rothbury, Michigan, how tickets and camping work, how to get there and what to pack.',
    image:'img/electric-forest/entrance-2018-320.webp',
    srcset:'img/electric-forest/entrance-2018-320.webp 320w,img/electric-forest/entrance-2018-1200.webp 1200w',
    width:1200, height:800, alt:'The wooden Electric Forest entrance arch with a crowd of festival-goers in front of it'
  },
  {
    page:'best-electronic-music-festivals-asia.html', released:'2026-10-04T21:46:12+03:00', category:'festivals', tags:['discovery','bass'], href:'/best-electronic-music-festivals-asia', type:'Guide', topic:'Asia festivals',
    title:'Best Electronic Music Festivals in Asia: 2027 Guide',
    description:'Ultra Japan, Wonderfruit, S2O, Sunburn, DWP and more: where they are, what they play and which 2027 dates are confirmed.',
    image:'img/asia-festivals/ultra-korea-2015-320.webp',
    srcset:'img/asia-festivals/ultra-korea-2015-320.webp 320w,img/asia-festivals/ultra-korea-2015-1200.webp 1200w',
    width:1200, height:1174, alt:'The main stage and a crowd at night at Ultra Korea'
  }
];

// The German guides. They are a separate catalogue, not flags on the English
// one: the homepage, the RSS feed and the English Read Next blocks all read
// that list, and a translated page has no business in any of them. Cards link
// to German readers' own index and to each other.
//
// The images are the English guides' images, on purpose. A translation
// illustrates the same festival with the same evidence, and a German reader is
// not served by a different photograph of the same stage. This is the "strong
// editorial reason" ARTICLE-PRODUCTION-WORKFLOW.md §7 asks for, stated rather
// than assumed, and the captions are translated with the prose.
export const germanArticleCatalog = [
  {
    page:'de/tomorrowland-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/tomorrowland-festival', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland 2027: Wo es stattfindet, wie groß es ist, welche Musik läuft',
    description:'Ein Park in Boom, Belgien, den die Welt vor allem im Livestream kennt: wo Tomorrowland stattfindet, wie viele Besucher kommen, wem es gehört und was abseits der Mainstage läuft.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'Die Tomorrowland-Mainstage im Jahr 2014'
  },
  {
    page:'de/parookaville-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/parookaville-festival', type:'Guide', topic:'Parookaville',
    title:'Parookaville 2027: Gelände, Geschichte, Besucherzahlen und Musik',
    description:'Ein Festival als Stadt auf dem Flughafen Weeze: wo Parookaville liegt, wie drei Freunde es aufgebaut haben, wie viele Menschen kommen und was auf den Bühnen läuft.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Die Parookaville-Mainstage aus der Luft im Jahr 2022, davor das Publikum, am Horizont Windräder'
  },
  {
    page:'de/coachella-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/coachella-festival', type:'Guide', topic:'Coachella',
    title:'Was ist Coachella? Termine 2027, Ort und Musik',
    description:'Zwei Wochenenden im April im Empire Polo Club in Indio: wann Coachella 2027 stattfindet, wo es liegt, wie aus einem Verlustgeschäft von 1999 ein Milliardenfestival wurde und was im Sahara-Zelt läuft.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Festivalbesucher auf der Wiese von Coachella 2018, dahinter Palmen und die Berge der Wüste'
  },
  {
    page:'de/mysteryland-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/mysteryland-festival', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland 2027: Gelände, Geschichte und Musik',
    description:'Nach eigener Zählung das älteste Dance-Festival der Niederlande, auf dem früheren Floriade-Gelände in Haarlemmermeer: wann Mysteryland 2027 stattfindet, warum 2026 ausfiel und was gespielt wird.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland aus der Luft im Jahr 2018, die Hauptbühne an einem See, davor das Publikum'
  },
  {
    page:'de/sziget-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','house','techno'], href:'/de/sziget-festival', type:'Guide', topic:'Sziget Festival',
    title:'Sziget Festival 2027: Termine, Musik, Camping und Anreise',
    description:'Fünf Tage auf der Óbuda-Insel in Budapest: wann das Sziget 2027 stattfindet, welche Musik dort läuft, wie Camping und die Anreise mit der H5 funktionieren und was bestätigt ist.',
    image:'img/sziget/island-2022-320.webp',
    srcset:'img/sziget/island-2022-320.webp 320w,img/sziget/island-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Luftbild des Sziget Festivals auf der Óbuda-Insel in Budapest'
  },
  {
    page:'de/awakenings-festival.html', category:'festivals', tags:['festivals','europe-festivals','techno','history','discovery'], href:'/de/awakenings-festival', type:'Guide', topic:'Awakenings Festival',
    title:'Awakenings Festival 2027: Was es ist und wo es stattfindet',
    description:'1997 in Amsterdam gegründet, seitdem nur Techno: wo das Sommerfestival und der Special zum Amsterdam Dance Event stattfinden und woher der Name kommt.',
    image:'img/awakenings/blimp-2007-320.webp',
    srcset:'img/awakenings/blimp-2007-320.webp 320w,img/awakenings/blimp-2007-1200.webp 1200w',
    width:1200, height:803, alt:'Das Awakenings-Luftschiff über dem Publikum, Laserstrahlen kreuzen den Nachthimmel'
  },
  {
    page:'de/hardstyle.html', category:'music-history', tags:['history','hardstyle','trance','techno'], href:'/de/hardstyle', type:'Guide', topic:'Hardstyle',
    title:'Was ist Hardstyle? Geschichte, Sound, Künstler und Subgenres',
    description:'Reverse Bass, verzerrte Kicks mit Tonhöhe, der niederländische Festivalzirkus und die Spaltung in euphorischen und rauen Hardstyle.',
    image:'img/hardstyle/defqon1-red-2024-320.webp',
    srcset:'img/hardstyle/defqon1-red-2024-320.webp 320w,img/hardstyle/defqon1-red-2024-1280.webp 1280w',
    width:1280, height:720, alt:'Die rote Hauptbühne des Defqon.1 im Jahr 2024'
  },
  {
    page:'de/house-musik.html', category:'music-history', tags:['house','history','overview'], href:'/de/house-musik', type:'Guide', topic:'House-Musik',
    title:'Was ist House-Musik? Geschichte, Sound und Chicagos Anfänge',
    description:'Frankie Knuckles, das Warehouse und die ersten Chicagoer Platten: was House-Musik ist, warum sie House heißt und die Stile von Deep House bis Afro House.',
    image:'img/house-music/frankie-knuckles-way-2022-320.webp',
    srcset:'img/house-music/frankie-knuckles-way-2022-320.webp 320w,img/house-music/frankie-knuckles-way-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Das Ehrenstraßenschild Frankie Knuckles Way in Chicago'
  },
  {
    page:'de/techno-musik.html', category:'music-history', tags:['techno','history','overview'], href:'/de/techno-musik', type:'Guide', topic:'Techno-Musik',
    title:'Was ist Techno-Musik? Detroit, Belleville Three, Techno heute',
    description:'Techno ist maschinengemachte Tanzmusik aus Detroit: die Belleville Three, warum sie Techno heißt, Underground Resistance, Berlin, Minimal und Hard Techno.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills legt 2010 in einem Club in Detroit auf'
  },
  {
    page:'de/airbeat-one-festival.html', category:'festivals', tags:['festivals','europe-festivals','techno','hardstyle','trance'], href:'/de/airbeat-one-festival', type:'Guide', topic:'Airbeat One Festival',
    title:'Airbeat One Festival 2027: Termine, Stages, Camping und Anreise',
    description:'Ein Flugplatz-Festival für EDM, Techno, Hardstyle und Psytrance, bei dem das Camping zum Event gehört.',
    image:'img/airbeat-one/airbeat-arena-320.webp',
    srcset:'img/airbeat-one/airbeat-arena-320.webp 320w,img/airbeat-one/airbeat-arena-1200.webp 1200w',
    width:1200, height:754, alt:'Publikum und Produktion in der Airbeat-One-Arena-Stage 2025'
  },
  {
    page:'de/trance-musik.html', category:'music-history', tags:['history','trance','psytrance'], href:'/de/trance-musik', type:'Guide', topic:'Trance',
    title:'Was ist Trance-Musik? Ursprung, Künstler und Sound',
    description:'Aufbau, Breakdown und Drop, geboren in Frankfurts Clubs: wie Trance zur Festival-Mainstage wurde und wie Psytrance sich abspaltete.',
    image:'img/trance/armin-van-buuren-2017-320.webp',
    srcset:'img/trance/armin-van-buuren-2017-320.webp 320w,img/trance/armin-van-buuren-2017-1024.webp 1024w',
    width:1024, height:681, alt:'Armin van Buuren vor großem Publikum bei Armin Only Embrace in Kiew, 2017'
  },
  {
    page:'de/monegros-desert-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','techno','house'], href:'/de/monegros-desert-festival', type:'Guide', topic:'Monegros Desert Festival',
    title:'Monegros Desert Festival 2027: Termin, Geschichte und Guide',
    description:'Ein 22-Stunden-Rave in der Wüste bei Fraga: Termin 2027, Geschichte, Musik, Anreise und die praktischen Grenzen.',
    image:'img/monegros/festival-overview-2009-320.webp',
    srcset:'img/monegros/festival-overview-2009-320.webp 320w,img/monegros/festival-overview-2009-1200.webp 1200w',
    width:1200, height:900, alt:'Weitblick auf Stages und Publikum des Monegros Desert Festival 2009'
  },
  {
    page:'de/lollapalooza-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/lollapalooza-festival', type:'Guide', topic:'Lollapalooza',
    title:'Lollapalooza Chicago: Ort, Geschichte und Musik',
    description:'Lollapalooza ist ein viertägiges Festival im Grant Park in Chicago: Ort, Geschichte, Größe und die Musik.',
    image:'img/lollapalooza/skyline-2017-320.webp',
    srcset:'img/lollapalooza/skyline-2017-320.webp 320w,img/lollapalooza/skyline-2017-1200.webp 1200w',
    width:1200, height:900, alt:'Menschenmenge im Grant Park bei Lollapalooza 2017 vor der Skyline von Chicago'
  },
  {
    page:'de/clubs-budapest.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-budapest', type:'Guide', topic:'Clubs in Budapest',
    title:'Die besten Clubs in Budapest: A38, Instant-Fogas, Turbina',
    description:'Das Frachtschiff A38, die sieben Räume des Instant-Fogas und Techno im Turbina: die besten Clubs in Budapest heute.',
    image:'img/budapest-clubs/a38-ship-320.webp',
    srcset:'img/budapest-clubs/a38-ship-320.webp 320w,img/budapest-clubs/a38-ship-1200.webp 1200w',
    width:1200, height:900, alt:'Das Schiff A38 an der Donau in Budapest, ein umgebautes Frachtschiff von 1968'
  },
  {
    page:'de/clubs-prag.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-prag', type:'Guide', topic:'Clubs in Prag',
    title:'Die besten Clubs in Prag: Cross Club, Karlovy Lázně, Ankali',
    description:'Die geschweißte Maschinerie des Cross Club, die fünf Etagen von Karlovy Lázně und Technonächte im Ankali: die besten Clubs in Prag.',
    image:'img/prague-clubs/cross-club-interior-320.webp',
    srcset:'img/prague-clubs/cross-club-interior-320.webp 320w,img/prague-clubs/cross-club-interior-844.webp 844w',
    width:844, height:563, alt:'Die Kellerbar des Cross Club in Prag, gebaut aus Altmetall und Maschinenteilen'
  },
  {
    page:'de/clubs-lissabon.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-lissabon', type:'Guide', topic:'Clubs in Lissabon',
    title:'Die besten Clubs in Lissabon: Lux Frágil, Ministerium, Kremlin',
    description:'Das Lux Frágil prägt Lissabon seit 1998, das Ministerium spielt Afro-House im früheren Ministerium, die Musicbox schloss 2025.',
    image:'img/lisbon-clubs/lux-fragil-320.webp',
    srcset:'img/lisbon-clubs/lux-fragil-320.webp 320w,img/lisbon-clubs/lux-fragil-552.webp 552w',
    width:552, height:400, alt:'Das Gebäude des Lux Frágil an der Cais da Pedra in Lissabon'
  },
  {
    page:'de/clubs-tokio.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-tokio', type:'Guide', topic:'Clubs in Tokio',
    title:'Die besten Clubs in Tokio: WOMB, Contact und das Tanzverbot',
    description:'WOMB, Contact, Vent und Circus Tokyo: die besten Clubs in Tokio für House, Techno und Bass Music.',
    image:'img/tokyo-clubs/womb-shibuya-320.webp',
    srcset:'img/tokyo-clubs/womb-shibuya-320.webp 320w,img/tokyo-clubs/womb-shibuya-1200.webp 1200w',
    width:1200, height:800, alt:'Der Eingang des Nachtclubs WOMB in Shibuya, Tokio'
  },
  {
    page:'de/clubs-new-york.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-new-york', type:'Guide', topic:'Clubs in New York',
    title:'Die besten Clubs in New York: House und Techno, früher und heute',
    description:'Nowadays, Basement, Public Records, Good Room und Elsewhere: die besten Clubs in New York für House und Techno heute.',
    image:'img/nyc-clubs/limelight-church-320.webp',
    srcset:'img/nyc-clubs/limelight-church-320.webp 320w,img/nyc-clubs/limelight-church-1200.webp 1200w',
    width:1200, height:900, alt:'Die neugotische Backsteinkirche an der Sixth Avenue, die zum Limelight wurde'
  },
  {
    page:'de/exit-festival.html', category:'festivals', tags:['festival','history','discovery'], href:'/de/exit-festival', type:'Guide', topic:'EXIT Festival',
    title:'EXIT Festival: Von Novi Sad zur weltweiten Tour',
    description:'Geschichte, Festung Petrovaradin, Dance Arena und was nach der letzten serbischen Ausgabe 2025 passiert.',
    image:'img/exit-festival/exit-crowd-320.webp',
    srcset:'img/exit-festival/exit-crowd-320.webp 320w,img/exit-festival/exit-crowd-1200.webp 1200w',
    width:1200, height:784, alt:'Dichtes Publikum in der Festung Petrovaradin beim EXIT Festival'
  },
  {
    page:'de/clubs-manchester.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/clubs-manchester', type:'Guide', topic:'Clubs in Manchester',
    title:'Die besten Clubs in Manchester: Von der Haçienda zum Warehouse Project',
    description:'White Hotel, Soup, Eastern Bloc Records, The Loft und Hidden: die besten Clubs in Manchester heute und das Erbe der Haçienda.',
    image:'img/manchester-clubs/hacienda-bollards-320.webp',
    srcset:'img/manchester-clubs/hacienda-bollards-320.webp 320w,img/manchester-clubs/hacienda-bollards-800.webp 800w',
    width:800, height:600, alt:'Erhaltene Poller der Haçienda mit Warnstreifen'
  },
  {
    page:'de/clubs-bristol.html', category:'rave-spots', tags:['drum-and-bass','techno','history','discovery'], href:'/de/clubs-bristol', type:'Guide', topic:'Clubs in Bristol',
    title:'Die besten Clubs in Bristol: Motion, Lakota und Thekla',
    description:'Motion, Lakota und das Frachtschiff Thekla: die besten Clubs in Bristol und Bristols Drum-and-Bass-Geschichte.',
    image:'img/bristol-clubs/thekla-boat-320.webp',
    srcset:'img/bristol-clubs/thekla-boat-320.webp 320w,img/bristol-clubs/thekla-boat-1200.webp 1200w',
    width:1200, height:675, alt:'Thekla, ein umgebautes Frachtschiff im Floating Harbour von Bristol'
  },
  {
    page:'de/boomtown-festival.html', category:'festivals', tags:['drum-and-bass','festival','discovery'], href:'/de/boomtown-festival', type:'Guide', topic:'Boomtown Festival',
    title:'Boomtown Festival 2027: Termine, Ort, Geschichte und Musik',
    description:'Boomtown Festival 2027 läuft vom 11. bis 15. August auf dem Matterley Estate. Musik, Handlung und was man vor dem ersten Besuch wissen sollte.',
    image:'img/boomtown/opening-ceremony-2019-320.webp',
    srcset:'img/boomtown/opening-ceremony-2019-320.webp 320w,img/boomtown/opening-ceremony-2019-1200.webp 1200w',
    width:1200, height:900, alt:'Die Eröffnungszeremonie 2019 auf der Bühne mit Publikum bei Boomtown'
  },
  {
    page:'de/movement-detroit.html', category:'festivals', tags:['techno','festival','detroit'], href:'/de/movement-detroit', type:'Guide', topic:'Movement Detroit',
    title:'Movement Detroit: Geschichte, Ort, Bühnen und Termine 2027',
    description:'Movement Detroit bringt Techno jedes Memorial-Day-Wochenende ins Hart Plaza. Geschichte, Bühnen und Termine 2027 im Überblick.',
    image:'img/movement-detroit/hart-plaza-320.webp',
    srcset:'img/movement-detroit/hart-plaza-320.webp 320w,img/movement-detroit/hart-plaza-1280.webp 1280w',
    width:1280, height:853, alt:'Das Hart Plaza am Detroit River, dahinter die Gebäude der Innenstadt von Detroit'
  },
  {
    page:'de/arc-music-festival.html', category:'festivals', tags:['house','techno','festival'], href:'/de/arc-music-festival', type:'Guide', topic:'ARC Music Festival',
    title:'ARC Music Festival 2027: Chicago-Guide, Bühnen und Anreise',
    description:'Das ARC Music Festival bringt House und Techno in den Union Park in Chicago. Bühnen, Anreise mit der CTA und die offene Ausgabe 2027.',
    image:'img/arc-music-festival/arc-frankie-knuckles-way-320.webp',
    srcset:'img/arc-music-festival/arc-frankie-knuckles-way-320.webp 320w,img/arc-music-festival/arc-frankie-knuckles-way-1200.webp 1200w',
    width:1200, height:900, alt:'Straßenschild Frankie Knuckles Way in Chicago'
  },
  {
    page:'de/clubs-mexiko-stadt.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/de/clubs-mexiko-stadt', type:'Guide', topic:'Clubs in Mexiko-Stadt',
    title:'Die besten Clubs in Mexiko-Stadt: Patrick Miller, M.N.Roy und Fünk',
    description:'Patrick Miller, M.N.Roy, Fünk Club und Yu Yu Cine Club: die besten Clubs in Mexiko-Stadt heute und ihre Geschichte seit 1983.',
    image:'img/mexico-city-clubs/roma-norte-street-320.webp',
    srcset:'img/mexico-city-clubs/roma-norte-street-320.webp 320w,img/mexico-city-clubs/roma-norte-street-1200.webp 1200w',
    width:1200, height:533, alt:'Eine Straßenecke im Viertel Roma Norte in Mexiko-Stadt'
  },
  {
    page:'de/live-dj-sets-ansehen.html', category:'digging', tags:['discovery','history','uk','jungle'], href:'/de/live-dj-sets-ansehen', type:'Guide', topic:'Live-DJ-Sets',
    title:'Live-DJ-Sets ansehen: Boiler Room, HÖR, NTS und mehr',
    description:'Wo du DJ-Sets online ansehen kannst, wie sich die großen Plattformen unterscheiden und ein Weg durch Tausende archivierte Aufnahmen.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'Ein DJ in der Kabine von The Lot Radio in Brooklyn'
  },
  {
    page:'de/beste-soundcloud-dj-mixes.html', category:'digging', tags:['discovery','house','techno','breaks'], href:'/de/beste-soundcloud-dj-mixes', type:'Guide', topic:'SoundCloud-DJ-Mixes',
    title:'Die besten SoundCloud-DJ-Mixes, plus ein persönlicher Tipp',
    description:'Acht der besten SoundCloud-DJ-Mixes, von Wata Igarashi und Ogazón bis Djrum und SHERELLE, dazu ein klar gekennzeichneter Mix von thecatrave.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'Ein DJ in der Kabine von The Lot Radio in Brooklyn'
  },
  {
    page:'de/beste-techno-mixes.html', category:'digging', tags:['discovery','techno','history'], href:'/de/beste-techno-mixes', type:'Guide', topic:'Techno-Mixes',
    title:'Die besten Techno-Mixes: 10 wesentliche DJ-Sets',
    description:'Zehn wesentliche Techno-Mixes von Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd und mehr.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills mischt 2010 in einem Club in Detroit'
  },
  {
    page:'de/beste-house-playlists-spotify.html', category:'digging', tags:['discovery','house'], href:'/de/beste-house-playlists-spotify', type:'Guide', topic:'House-Playlists',
    title:'Die besten House-Playlists auf Spotify: 12 Empfehlungen',
    description:'Zwölf Spotify-Playlists für House-Musik, von 90er-Klassikern und Label-Feeds bis zu zwei gekennzeichneten Auswahlen von thecatrave.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Kabelkopfhörer, ein tragbarer Musikplayer und zwei transparente Hüllen auf einem zerkratzten Clubtisch'
  },
  {
    page:'de/untold-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/untold-festival', type:'Guide', topic:'Untold',
    title:'Untold Festival 2027: Ort, Größe und Musik',
    description:'Vier Tage jeden August in Cluj-Napoca: wann Untold 2027 stattfindet, wo es liegt, wie daraus eine Veranstaltung mit 500.000 Eintritten wurde und was neben der Hauptbühne läuft.',
    image:'img/untold/main-stage-2019-320.webp',
    srcset:'img/untold/main-stage-2019-320.webp 320w,img/untold/main-stage-2019-1200.webp 1200w',
    width:1200, height:900, alt:'Dichtes Publikum mit Handylichtern vor der Untold-Hauptbühne bei Nacht im Jahr 2019'
  },
  {
    page:'de/glastonbury-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/glastonbury-festival', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury Festival 2027: Termine, Brachjahre und Headliner',
    description:'Fünf Tage in den meisten Junis auf der Worthy Farm in Somerset: wann Glastonbury 2027 stattfindet, warum 2026 ein Brachjahr war, wie groß es ist und wer Headliner war.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'Das Glastonbury Festival bei Nacht 2025, vom Hang über dem Tal aus gesehen'
  },
  {
    page:'de/primavera-sound-barcelona.html', category:'festivals', tags:['discovery','history','house'], href:'/de/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027: Ort, Headliner nach Jahr',
    description:'Das Festival in Barcelona kehrt vom 3. bis 5. Juni 2027 in den Parc del Fòrum zurück: das Gelände am Meer, die Größe, die Musik und das Programm in der Stadt.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Festivalbesucher am Wasser bei Primavera Sound Barcelona 2019'
  },
  {
    page:'de/burning-man-festival.html', category:'festivals', tags:['house','history','discovery'], href:'/de/burning-man-festival', type:'Guide', topic:'Burning Man',
    title:'Was ist Burning Man? Die Stadt in der Wüste und ihre Musik',
    description:'Eine von den Teilnehmern gebaute Stadt in der Wüste Nevadas, ohne Line-up und ohne Hauptbühne: was dort passiert, was es kostet und was die Sound-Camps wie Robot Heart spielen.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'Das Art Car von Robot Heart auf der Playa bei Burning Man'
  },
  {
    page:'de/clubs-berlin.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/de/clubs-berlin', type:'Guide', topic:'Clubs in Berlin',
    title:'Die besten Clubs in Berlin: Legenden und die, die noch offen sind',
    description:'Vom UFO und dem Tresor bis zum Berghain und dem Sisyphos: die Räume, die Berlin zur Techno-Stadt gemacht haben, die Clubs, die geschlossen haben, und die, die noch offen sind.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'Der Eingang des Berghain in Berlin'
  },
  {
    page:'de/berghain.html', released:'2026-10-06T12:00:00+03:00', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/de/berghain', type:'Guide', topic:'Berghain',
    title:'Berghain: Panorama Bar, Sound und Resident-DJs',
    description:'Das Berghain erklärt: das ehemalige Kraftwerk, die Panorama Bar, die Halle, die Kantine am Berghain und das Label Ostgut Ton.',
    image:'img/berghain/berghain-facade-320.webp',
    srcset:'img/berghain/berghain-facade-320.webp 320w,img/berghain/berghain-facade-1200.webp 1200w',
    width:1200, height:900, alt:'Die graue neoklassizistische Fassade des Berghain-Gebäudes in Berlin, mit einigen Menschen am Eingang'
  },
  {
    page:'de/clubs-paris.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/de/clubs-paris', type:'Guide', topic:'Clubs in Paris',
    title:'Die besten Clubs in Paris: Von Le Palace bis zum Rex Club',
    description:"Le Palace, Les Bains Douches und der Rex Club: die Clubs, die Paris' Nachtleben geprägt haben, wie jeder berühmt wurde, und die besten Clubs in Paris heute.",
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"Der Eingang des ehemaligen Nachtclubs Les Bains Douches an der 7 Rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'de/clubs-barcelona.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/de/clubs-barcelona', type:'Guide', topic:'Clubs in Barcelona',
    title:'Die besten Clubs in Barcelona: Von Zeleste bis Razzmatazz',
    description:'Razzmatazz, Nitsa und Macarena Club: wie Barcelonas größter Club aus einem Live-Venue der 1970er wuchs, und die besten Clubs in Barcelona heute.',
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'Die Außenansicht von Sala Razzmatazz im Stadtteil Poblenou, Barcelona'
  },
  {
    page:'de/clubs-amsterdam.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/de/clubs-amsterdam', type:'Guide', topic:"Clubs in Amsterdam",
    title:"Clubs in Amsterdam: vom RoXY bis zum Radion",
    description:"Shelter, Radion, Lofi und der Gashouder: die besten Clubs in Amsterdam heute, warum sie 24 Stunden offen haben, und die Geschichte vom RoXY bis zur De School.",
    image:'img/amsterdam-clubs/paradiso-320.webp',
    srcset:'img/amsterdam-clubs/paradiso-320.webp 320w,img/amsterdam-clubs/paradiso-1200.webp 1200w',
    width:1200, height:917, alt:"Die Backsteinfassade des Paradiso, eines ehemaligen Kirchensaals in Amsterdam"
  },
  {
    page:'de/clubs-ibiza.html', category:'rave-spots', tags:['house','history','discovery'], href:'/de/clubs-ibiza', type:'Guide', topic:"Clubs auf Ibiza",
    title:"Clubs auf Ibiza: Pacha, Amnesia, Hï und der Rest",
    description:"Hï, Pacha, Amnesia, DC-10, Ushuaïa und [UNVRS]: die besten Clubs auf Ibiza heute, die geschlossenen, wo man wohnt und wann die Saison läuft.",
    image:'img/ibiza-clubs/pacha-entrance-320.webp',
    srcset:'img/ibiza-clubs/pacha-entrance-320.webp 320w,img/ibiza-clubs/pacha-entrance-1200.webp 1200w',
    width:1200, height:675, alt:"Der weiße Eingang des Pacha in Ibiza-Stadt mit roter Schrift"
  },
  {
    page:'de/partystaedte-europa.html', category:'rave-spots', tags:['techno','discovery','history'], href:'/de/partystaedte-europa', type:'List', topic:"Partystädte Europa",
    title:"Die besten Partystädte Europas zum Clubben",
    description:"Berlin, Amsterdam, London, Ibiza, Tiflis und sieben weitere: die besten Partystädte Europas, geordnet nach ihren Clubs statt nach Bars und Stränden.",
    image:'img/europe-clubbing-cities/cross-club-prague-320.webp',
    srcset:'img/europe-clubbing-cities/cross-club-prague-320.webp 320w,img/europe-clubbing-cities/cross-club-prague-1200.webp 1200w',
    width:1200, height:901, alt:"Der Innenhof des Cross Club in Prag, gebaut aus geborgenem Metall, Rohren und Maschinenteilen"
  },
  {
    page:'de/silvester-rave.html', category:'festivals', tags:['discovery','techno','house'], href:'/de/silvester-rave', type:'List', topic:"Silvester-Rave",
    title:"Silvester-Rave und Festivals 2026/27: die besten",
    description:"FCKNYE, Countdown NYE, Decadence, Rhythm and Vines und Awakenings: die besten Silvester-Raves und Festivals für elektronische Musik 2026, mit Terminen.",
    image:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp',
    srcset:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp 320w,img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp 1200w',
    width:1200, height:900, alt:"Rote Lichtstrahlen über der Menge im Gashouder bei Awakenings in Amsterdam"
  },
  {
    page:'de/clubs-london.html', category:'rave-spots', tags:['jungle','history','discovery'], href:'/de/clubs-london', type:'Guide', topic:'Clubs in London',
    title:'Clubs in London für elektronische Musik: Geschichte und heute',
    description:'Vom Four Aces und dem Blitz bis zu Rage, dem Blue Note und fabric: die Londoner Clubs hinter Acid House, Jungle, Garage und Dubstep, und die, die heute ein Wochenende wert sind.',
    image:'img/london-clubs/fabric-320.webp',
    srcset:'img/london-clubs/fabric-320.webp 320w,img/london-clubs/fabric-1200.webp 1200w',
    width:1200, height:810, alt:'Der Eingang von fabric an der Charterhouse Street, London'
  },
  {
    page:'de/neue-musik-finden.html', category:'digging', tags:['discovery','tools'], href:'/de/neue-musik-finden', type:'Guide', topic:'Musik entdecken',
    title:'Neue Musik finden: 10 Wege ohne Algorithmus',
    description:'Zehn Wege, etwas zu hören, das du noch nicht kennst, von Community-Radio bis zu Produzenten-Credits, nach Aufwand geordnet.',
    image:'img/NOW-320.webp',
    srcset:'img/NOW-320.webp 320w,img/NOW-1024.webp 1024w',
    width:1024, height:1024, alt:'Eine Hörstation in einem Plattenladen'
  },
  {
    page:'de/beste-boiler-room-sets.html', category:'digging', tags:['uk','house','bass','discovery'], href:'/de/beste-boiler-room-sets', type:'Liste', topic:'Boiler Room',
    title:'Die besten Boiler-Room-Sets aller Zeiten: gerankt, gemessen',
    description:'Die besten Boiler-Room-Sets, von Carl Cox auf Ibiza bis Fred again.. in London, neben den meistgesehenen Sets, gezählt über 8.206 Aufnahmen.',
    image:'img/boiler-room/carl-cox-320.webp',
    srcset:'img/boiler-room/carl-cox-320.webp 320w, img/boiler-room/carl-cox-1200.webp 1200w',
    width:1200, height:800, alt:'Carl Cox legt beim Amsterdam Dance Event auf'
  },
  {
    page:'de/deutsche-elektronische-musik.html', category:'music-history', tags:['techno','history','overview'], href:'/de/deutsche-elektronische-musik', type:'Timeline', topic:'Deutsche Musik',
    title:'Deutsche elektronische Musik: Geschichte von Kraftwerk bis Techno',
    description:'Kölner Studios, Düsseldorfer Elektropop, Frankfurter Trance und die Allianz zwischen Detroit und Berlin.',
    image:'img/german-electronic/kraftwerk-stage-320.webp',
    srcset:'img/german-electronic/kraftwerk-stage-320.webp 320w,img/german-electronic/kraftwerk-stage-1200.webp 1200w',
    width:1200, height:901, alt:'Kraftwerk bei einem Auftritt hinter elektronischen Pulten'
  },
  {
    page:'de/britische-elektronische-musik.html', category:'music-history', tags:['uk','history','overview'], href:'/de/britische-elektronische-musik', type:'Timeline', topic:'Britische Musik',
    title:'Britische elektronische Musik: Genres, Szenen und Geschichte',
    description:'Wie Acid House, Bleep, Jungle, UK Garage, Grime und Dubstep zusammenhängen, von den Raves der 1980er bis zu den Szenen von heute.',
    image:'img/bmb-320.webp', srcset:'img/bmb-320.webp 320w,img/bmb.webp 1024w',
    width:1024, height:683, alt:'Britische Künstler der elektronischen Musik bei einem Auftritt in einem dunklen Club'
  },
  {
    page:'de/drum-and-bass.html', category:'music-history', tags:['breaks','uk','nineties','bass'], href:'/de/drum-and-bass', type:'Guide', topic:'Drum and Bass',
    title:'Was ist Drum and Bass? 174 BPM, Geschichte und Subgenres',
    description:'Schnelle Breakbeats, tiefer Sub-Bass und das britische Rave-Kontinuum hinter einem globalen Genre: wie sich Drum and Bass vom Jungle trennte, wie es gebaut ist und wohin es ging.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size legt unter grünem Bühnenlicht auf'
  },
  {
    page:'de/dubstep.html', category:'music-history', tags:['bass','uk','twothousands','soundsystem'], href:'/de/dubstep', type:'Guide', topic:'Dubstep',
    title:'Was ist Dubstep? Herkunft, Sound und ein Wort für zwei Genres',
    description:'Ein Wort für zwei sehr verschiedene Musiken: wie sich ein Sound aus einem Plattenladen in Croydon in zwei Hälften teilte, und was aus der Version wurde, die nie verschwand.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'Eine Schneidemaschine für Vinyl mit einer Acetatscheibe auf dem Plattenteller'
  },
  {
    page:'de/beste-spotify-playlists.html', category:'digging', tags:['discovery','tools','house','bass'], href:'/de/beste-spotify-playlists', type:'Liste', topic:'Spotify-Playlists',
    title:'Beste Spotify-Playlists: 12 von Menschen kuratierte Empfehlungen',
    description:'Zwölf Playlists mit erkennbarem Standpunkt, von KEXP und Pitchfork bis Four Tet, Bicep und dem elektronischen Underground.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Kabelkopfhörer, ein tragbarer Musikplayer und transparente Hüllen auf einem zerkratzten Clubtisch'
  },
  {
    page:'de/acid-house.html', category:'music-history', tags:['history','uk','house','techno'], href:'/de/acid-house', type:'Guide', topic:'Acid House',
    title:'Was ist Acid House? Von der TB-303 in Chicago zum britischen Rave',
    description:'Eine Bassmaschine für 40 Dollar, drei Freunde in Chicago, ein DJ, der ihr Band in einer Nacht viermal spielte, und die britische Bewegung, die sich den Namen lieh.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Nahaufnahme des Bedienfelds einer Roland TB-303 Bass Line'
  },
  {
    page:'de/grime.html', category:'music-history', tags:['uk','history','bass','jungle'], href:'/de/grime', type:'Guide', topic:'Grime',
    title:'Was ist Grime? Sound, Geschichte, Künstler und wichtige Tracks',
    description:'Kalte Instrumentals bei 140 BPM, Piratenradio, Crews und Clashes aus dem Osten Londons, und der nie beigelegte Streit darüber, wer damit anfing.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Zwei MCs von Roll Deep 2005 auf einer dunklen Bühne in New York'
  },
  {
    page:'de/electro-festivals-europa.html', category:'festivals', tags:['discovery','techno','house','history'], href:'/de/electro-festivals-europa', type:'Liste', topic:'Festivals in Europa',
    title:'Die besten Electro-Festivals in Europa 2027 im Vergleich',
    description:'Vierzehn große und sieben kleinere Festivals, von Tomorrowland bis Garbicz, verglichen nach Sound, Größe, Umgebung und Terminen 2027.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'Publikum bei Tag unter dem Stahldach der Futur Stage beim Kappa FuturFestival in Turin'
  },
  {
    page:'de/ultra-music-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/ultra-music-festival', type:'Guide', topic:'Ultra',
    title:'Ultra Music Festival 2027: Ort, Altersgrenze, Besucherzahl',
    description:'Ultra kehrt vom 26. bis 28. März 2027 in den Bayfront Park in Miami zurück: Ort, Größe, Geschichte, Ultra Europe in Split und die Musik jenseits der Main Stage.',
    image:'img/ultra/bayfront-2014-320.webp',
    srcset:'img/ultra/bayfront-2014-320.webp 320w,img/ultra/bayfront-2014-1200.webp 1200w',
    width:1200, height:900, alt:'Der Bayfront Park in Miami von oben während des Ultra Music Festivals 2014'
  },
  {
    page:'de/edc-las-vegas.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/edc-las-vegas', type:'Guide', topic:'EDC Las Vegas',
    title:'EDC Las Vegas 2027: Was das EDC ist, wie groß, welche Musik',
    description:'Der Electric Daisy Carnival auf dem Las Vegas Motor Speedway: wo das EDC stattfindet, wie daraus eine halbe Million Menschen im Jahr wurden und was jenseits von kineticFIELD läuft.',
    image:'img/edc/kinetic-field-2024-320.webp',
    srcset:'img/edc/kinetic-field-2024-320.webp 320w,img/edc/kinetic-field-2024-1200.webp 1200w',
    width:1200, height:900, alt:'kineticFIELD bei EDC Las Vegas 2024'
  },
  {
    page:'de/uk-garage.html', category:'music-history', tags:['uk','nineties','house','bass'], href:'/de/uk-garage', type:'Guide', topic:'UK Garage',
    title:'Was ist UK Garage? Sound, 2-Step, Speed Garage und Bassline',
    description:'London spielte eine amerikanische Platte zu schnell, bis der Beat brach. Die Zweige, in die sich UK Garage teilte, und die Zahlen hinter seinem Revival.',
    image:'img/skream-320.webp',
    srcset:'img/skream-320.webp 320w,img/skream-1200.webp 1200w',
    width:1200, height:900, alt:'Skream bei einem DJ-Set'
  },
  {
    page:'de/creamfields-festival.html', category:'festivals', tags:['discovery','history','uk','bass'], href:'/de/creamfields-festival', type:'Guide', topic:'Creamfields',
    title:'Creamfields 2027: Ort, Kapazität, Altersgrenze',
    description:'Vier Tage auf dem Anwesen Daresbury, jedes Jahr am August Bank Holiday: wo Creamfields stattfindet, wie eine Liverpooler House-Nacht daraus wurde, wem es gehört und was jenseits der Arc Stage läuft.',
    image:'img/creamfields/steel-yard-2017-320.webp',
    srcset:'img/creamfields/steel-yard-2017-320.webp 320w,img/creamfields/steel-yard-2017-1200.webp 1200w',
    width:1200, height:801, alt:'Das leere Innere des Steel Yard bei Creamfields, eine orange beleuchtete Stahlkonstruktion mit Bögen'
  },
  {
    page:'de/jungle.html', category:'music-history', tags:['breaks','uk','nineties','soundsystem'], href:'/de/jungle', type:'Guide', topic:'Jungle',
    title:'Was ist Jungle-Musik? Geschichte, Sound und wichtige Tracks',
    description:'Piratenradio, Dubplates, die Energie der MCs und die weltweite Rückkehr eines ausgesprochen Schwarzen britischen Sounds.',
    image:'img/Dubplates-320.png', srcset:'img/Dubplates-320.png 320w,img/Dubplates.png 1024w',
    width:1024, height:1024, alt:'Illustrierte Dubplates als Sinnbild der Jungle-Kultur'
  },
  {
    page:'de/breakbeat.html', category:'music-history', tags:['breaks','history','uk','nineties'], href:'/de/breakbeat', type:'Guide', topic:'Breakbeat',
    title:'Was ist Breakbeat? Genre, Geschichte, Künstler und Stile',
    description:'Von Funk-Breaks und dem Hip-Hop der Bronx zum britischen Rave, nach Florida und Andalusien, zu Big Beat, Nu-Skool und den Breaks von heute.',
    image:'img/amen-320.webp', srcset:'img/amen-320.webp 320w,img/amen-1200.webp 1200w',
    width:1200, height:800, alt:'Die Wellenform und das Drum-Muster des Amen Break'
  },
  {
    page:'de/sonar-festival-barcelona.html', category:'festivals', tags:['discovery','history','bass'], href:'/de/sonar-festival-barcelona', type:'Guide', topic:'Sónar',
    title:'Sónar Festival Barcelona 2027: Termine, Geschichte, Musik',
    description:'Drei Tage jeden Juni in Barcelona seit 1994, bei Tag und bei Nacht: wo Sónar stattfindet, wie es wuchs, wem es heute gehört, und Sónar 2027 vom 17. bis 19. Juni.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'Ein Publikum vor der Bühne SonarVillage auf der Fira Montjuïc, dahinter der Palau Nacional'
  },
  {
    page:'de/bass-music.html', category:'music-history', tags:['bass','global','soundsystem'], href:'/de/bass-music', type:'Guide', topic:'Bass Music',
    title:'Was ist Bass Music? Geschichte, Genres und wichtige Tracks',
    description:'Eine weltweite Geschichte, die Jamaika, Miami, Großbritannien, Los Angeles, Chicago, Durban und die hybride Clubkultur von heute verbindet.',
    image:'img/bass-music/miami-bass-loc-ace-vic-480.jpg',
    srcset:'img/bass-music/miami-bass-loc-ace-vic-480.jpg 480w,img/bass-music/miami-bass-loc-ace-vic-1400.jpg 1400w',
    width:1400, height:933, alt:'Die Miami-Bass-Künstler Loc Ace und Vic vor einer Club-Soundanlage im Jahr 1993'
  }
];

// The French guides, on the same terms as the German ones above: their own
// catalogue, the English guides' images with translated captions.
export const frenchArticleCatalog = [
  {
    page:'fr/festival-tomorrowland.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-tomorrowland', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland 2027 : lieu, fréquentation, histoire et musique',
    description:'Un parc de Boom, en Belgique, que le monde connaît surtout par le livestream : où a lieu Tomorrowland, combien de personnes y vont, à qui il appartient et ce qui se joue loin de la Mainstage.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'La Mainstage de Tomorrowland en 2014'
  },
  {
    page:'fr/festival-coachella.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-coachella', type:'Guide', topic:'Coachella',
    title:'Qu’est-ce que Coachella ? Dates 2027, lieu, taille et musique',
    description:'Deux week-ends d’avril à l’Empire Polo Club d’Indio : quand a lieu Coachella 2027, où il se trouve, comment une perte de 1999 est devenue un festival géant, et ce qui se joue sous la tente Sahara.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Des festivaliers sur la pelouse de Coachella en 2018, derrière eux des palmiers et les montagnes du désert'
  },
  {
    page:'fr/burning-man.html', category:'festivals', tags:['house','history','discovery'], href:'/fr/burning-man', type:'Guide', topic:'Burning Man',
    title:'Qu’est-ce que Burning Man ? La ville du désert et sa musique',
    description:'Une ville construite par ses participants dans le désert du Nevada, sans affiche ni grande scène : ce qui s’y passe, ce que ça coûte et ce que jouent les sound camps comme Robot Heart.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'L’art car de Robot Heart sur la playa de Burning Man'
  },
  {
    page:'fr/festival-glastonbury.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-glastonbury', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury 2027 : dates, années de jachère et têtes d’affiche',
    description:'Cinq jours la plupart des mois de juin à Worthy Farm, dans le Somerset : quand a lieu Glastonbury 2027, pourquoi 2026 était une année de jachère, sa taille et ses têtes d’affiche.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'Le festival de Glastonbury la nuit en 2025, vu de la colline au-dessus de la vallée'
  },
  {
    page:'fr/boite-de-nuit-berlin.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-berlin', type:'Guide', topic:'Clubs de Berlin',
    title:'Boite de nuit Berlin : les meilleurs clubs et leurs légendes',
    description:'De l’UFO et du Tresor au Berghain et au Sisyphos : les salles qui ont fait de Berlin une ville techno, les clubs célèbres qui ont fermé, et ceux qui sont encore ouverts.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'L’entrée du Berghain à Berlin'
  },
  {
    page:'fr/trouver-de-la-nouvelle-musique.html', category:'digging', tags:['discovery','tools'], href:'/fr/trouver-de-la-nouvelle-musique', type:'Guide', topic:'Découverte musicale',
    title:'Trouver de la nouvelle musique : 10 méthodes sans algorithme',
    description:'Dix façons d’entendre ce que vous ne connaissez pas encore, de la radio communautaire aux crédits de production, classées selon l’effort demandé.',
    image:'img/NOW-320.webp',
    srcset:'img/NOW-320.webp 320w,img/NOW-1024.webp 1024w',
    width:1024, height:1024, alt:'Une borne d’écoute dans un magasin de disques'
  },
  {
    page:'fr/meilleurs-sets-boiler-room.html', category:'digging', tags:['uk','house','bass','discovery'], href:'/fr/meilleurs-sets-boiler-room', type:'Liste', topic:'Boiler Room',
    title:'Les meilleurs sets Boiler Room de tous les temps, classés et mesurés',
    description:'Les meilleurs sets Boiler Room, de Carl Cox à Ibiza à Fred again.. à Londres, à côté des plus regardés, comptés sur 8 206 enregistrements.',
    image:'img/boiler-room/carl-cox-320.webp',
    srcset:'img/boiler-room/carl-cox-320.webp 320w, img/boiler-room/carl-cox-1200.webp 1200w',
    width:1200, height:800, alt:'Carl Cox aux platines à l’Amsterdam Dance Event'
  },
  {
    page:'fr/musique-electronique-allemande.html', category:'music-history', tags:['techno','history','overview'], href:'/fr/musique-electronique-allemande', type:'Chronologie', topic:'Musique allemande',
    title:'Musique électronique allemande : de Kraftwerk à la techno',
    description:'Studios de Cologne, pop électronique de Düsseldorf, trance de Francfort et alliance entre Détroit et Berlin.',
    image:'img/german-electronic/kraftwerk-stage-320.webp',
    srcset:'img/german-electronic/kraftwerk-stage-320.webp 320w,img/german-electronic/kraftwerk-stage-1200.webp 1200w',
    width:1200, height:901, alt:'Kraftwerk sur scène derrière des pupitres électroniques'
  },
  {
    page:'fr/musique-electronique-britannique.html', category:'music-history', tags:['uk','history','overview'], href:'/fr/musique-electronique-britannique', type:'Chronologie', topic:'Musique britannique',
    title:'Musique électronique britannique : genres, scènes et histoire',
    description:'Comment l’acid house, la bleep, la jungle, le UK garage, le grime et le dubstep se relient, des raves des années 1980 aux scènes d’aujourd’hui.',
    image:'img/bmb-320.webp', srcset:'img/bmb-320.webp 320w,img/bmb.webp 1024w',
    width:1024, height:683, alt:'Artistes britanniques de musique électronique sur scène dans un club sombre'
  },
  {
    page:'fr/boite-de-nuit-londres.html', category:'rave-spots', tags:['jungle','history','discovery'], href:'/fr/boite-de-nuit-londres', type:'Guide', topic:'Boite de nuit Londres',
    title:'Boite de nuit Londres : les meilleurs clubs, de Heaven à FOLD',
    description:"Du Four Aces et du Blitz à Rage, au Blue Note et à fabric : les clubs londoniens derrière l'acid house, la jungle, le garage et le dubstep, et ceux qui valent un week-end aujourd'hui.",
    image:'img/london-clubs/fabric-320.webp',
    srcset:'img/london-clubs/fabric-320.webp 320w,img/london-clubs/fabric-1200.webp 1200w',
    width:1200, height:810, alt:"L'entrée de fabric sur Charterhouse Street, Londres"
  },
  {
    page:'fr/berghain.html', released:'2026-10-06T12:00:00+03:00', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/berghain', type:'Guide', topic:'Berghain',
    title:'Berghain : Panorama Bar, son et DJ résidents',
    description:'Le Berghain expliqué : l’ancienne centrale, le Panorama Bar à l’étage, la Halle am Berghain, la Kantine et le label Ostgut Ton.',
    image:'img/berghain/berghain-facade-320.webp',
    srcset:'img/berghain/berghain-facade-320.webp 320w,img/berghain/berghain-facade-1200.webp 1200w',
    width:1200, height:900, alt:'La façade grise néoclassique du bâtiment du Berghain à Berlin, avec quelques personnes à l’entrée'
  },
  {
    page:'fr/boite-de-nuit-paris.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-paris', type:'Guide', topic:'Boite de nuit Paris',
    title:'Boite de nuit Paris : les meilleures boîtes, du Palace au Rex Club',
    description:"Le Palace, Les Bains Douches et le Rex Club : les boîtes qui ont façonné la nuit parisienne, comment chacune est devenue célèbre, et les meilleures boîtes de nuit à Paris aujourd'hui.",
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"L'entrée de l'ancienne boîte de nuit Les Bains Douches, 7 rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'fr/boite-de-nuit-barcelone.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-barcelone', type:'Guide', topic:'Boite de nuit Barcelone',
    title:'Boite de nuit Barcelone : les meilleures boîtes, de Zeleste à Razzmatazz',
    description:"Razzmatazz, Nitsa et Macarena Club : comment la plus grande boîte de Barcelone est née d'une salle de concerts des années 1970, et les meilleures boîtes de nuit à Barcelone aujourd'hui.",
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'La façade de Sala Razzmatazz dans le quartier de Poblenou, Barcelone'
  },
  {
    page:'fr/boite-de-nuit-amsterdam.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-amsterdam', type:'Guide', topic:"Boite de nuit Amsterdam",
    title:"Boite de nuit Amsterdam : les meilleurs clubs",
    description:"Shelter, Radion, Lofi et le Gashouder : les meilleures boîtes de nuit à Amsterdam aujourd'hui, pourquoi elles ouvrent 24 heures, et l'histoire du RoXY à De School.",
    image:'img/amsterdam-clubs/paradiso-320.webp',
    srcset:'img/amsterdam-clubs/paradiso-320.webp 320w,img/amsterdam-clubs/paradiso-1200.webp 1200w',
    width:1200, height:917, alt:"La façade en brique du Paradiso, ancienne salle d'église à Amsterdam"
  },
  {
    page:'fr/boite-de-nuit-ibiza.html', category:'rave-spots', tags:['house','history','discovery'], href:'/fr/boite-de-nuit-ibiza', type:'Guide', topic:"Boite de nuit Ibiza",
    title:"Boite de nuit Ibiza : Pacha, Amnesia, Hï et les autres",
    description:"Hï, Pacha, Amnesia, DC-10, Ushuaïa et [UNVRS] : les meilleures boîtes de nuit à Ibiza, celles qui ont fermé, où loger et quand dure la saison.",
    image:'img/ibiza-clubs/pacha-entrance-320.webp',
    srcset:'img/ibiza-clubs/pacha-entrance-320.webp 320w,img/ibiza-clubs/pacha-entrance-1200.webp 1200w',
    width:1200, height:675, alt:"L'entrée blanche du Pacha à Ibiza-ville, avec ses lettres rouges"
  },
  {
    page:'fr/villes-faire-la-fete-europe.html', category:'rave-spots', tags:['techno','discovery','history'], href:'/fr/villes-faire-la-fete-europe', type:'List', topic:"Faire la fête en Europe",
    title:"Villes pour faire la fête en Europe : les clubs",
    description:"Berlin, Amsterdam, Londres, Ibiza, Tbilissi et sept autres : les meilleures villes pour faire la fête en Europe, classées par leurs clubs plutôt que leurs bars.",
    image:'img/europe-clubbing-cities/cross-club-prague-320.webp',
    srcset:'img/europe-clubbing-cities/cross-club-prague-320.webp 320w,img/europe-clubbing-cities/cross-club-prague-1200.webp 1200w',
    width:1200, height:901, alt:"La cour du Cross Club à Prague, construite en métal récupéré et en pièces de machines"
  },
  {
    page:'fr/festival-nouvel-an.html', category:'festivals', tags:['discovery','techno','house'], href:'/fr/festival-nouvel-an', type:'List', topic:"Festival du Nouvel An",
    title:"Festival du Nouvel An 2026-2027 : les meilleurs",
    description:"FCKNYE, Countdown NYE, Decadence, Rhythm and Vines et Awakenings : les meilleurs festivals du Nouvel An pour la musique électronique en 2026, avec dates et lieux.",
    image:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp',
    srcset:'img/nye-festivals/awakenings-gashouder-nye-2017-320.webp 320w,img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp 1200w',
    width:1200, height:900, alt:"Des faisceaux rouges au-dessus de la foule dans le Gashouder, à Awakenings, Amsterdam"
  },
  {
    page:'fr/primavera-sound-barcelona.html', category:'festivals', tags:['discovery','history','house'], href:'/fr/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027 : lieu, têtes d’affiche par an',
    description:'Le festival de Barcelone revient au Parc del Fòrum du 3 au 5 juin 2027 : son site face à la mer, sa taille, sa musique et son programme en ville.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Des festivaliers au bord de l’eau à Primavera Sound Barcelona en 2019'
  },
  {
    page:'fr/drum-and-bass.html', category:'music-history', tags:['breaks','uk','nineties','bass'], href:'/fr/drum-and-bass', type:'Guide', topic:'Drum and bass',
    title:'Qu’est-ce que la drum and bass ? 174 BPM, histoire et sous-genres',
    description:'Des breakbeats rapides, une sub-bass profonde et le continuum rave britannique derrière un genre mondial : comment la drum and bass s’est séparée de la jungle, comment elle est construite et où elle est allée.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size aux platines sous une lumière de scène verte'
  },
  {
    page:'fr/dubstep.html', category:'music-history', tags:['bass','uk','twothousands','soundsystem'], href:'/fr/dubstep', type:'Guide', topic:'Dubstep',
    title:'Qu’est-ce que le dubstep ? Origines, son et deux genres, un mot',
    description:'Un mot pour deux musiques très différentes : comment un son né chez un disquaire de Croydon s’est scindé en deux, et ce qu’est devenue la version qui n’a jamais disparu.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'Un tour de gravure vinyle avec un disque acétate sur le plateau'
  },
  {
    page:'fr/festival-mysteryland.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-mysteryland', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland 2027 : dates, site, histoire et musique',
    description:'Le plus ancien festival de musique électronique des Pays-Bas selon lui-même, sur l’ancien site de la Floriade : quand Mysteryland 2027 a lieu, pourquoi 2026 est en pause et ce qu’on y joue.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland vu du ciel en 2018, la grande scène au bord d’un lac avec le public devant'
  },
  {
    page:'fr/festival-sziget.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','house','techno'], href:'/fr/festival-sziget', type:'Guide', topic:'Sziget Festival',
    title:'Sziget Festival 2027 : dates, musique, camping et accès',
    description:'Cinq jours sur l’île d’Óbuda à Budapest : quand a lieu le Sziget en 2027, quelle musique on y joue, comment fonctionnent le camping et l’accès par la H5, et ce qui est confirmé.',
    image:'img/sziget/island-2022-320.webp',
    srcset:'img/sziget/island-2022-320.webp 320w,img/sziget/island-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Vue aérienne du Sziget Festival sur l’île d’Óbuda à Budapest'
  },
  {
    page:'fr/festival-awakenings.html', category:'festivals', tags:['festivals','europe-festivals','techno','history','discovery'], href:'/fr/festival-awakenings', type:'Guide', topic:'Festival Awakenings',
    title:'Festival Awakenings 2027 : ce que c’est et où il a lieu',
    description:'Fondé à Amsterdam en 1997, techno exclusivement depuis : où ont lieu le festival d’été et le rendez-vous de l’Amsterdam Dance Event, et d’où vient le nom.',
    image:'img/awakenings/blimp-2007-320.webp',
    srcset:'img/awakenings/blimp-2007-320.webp 320w,img/awakenings/blimp-2007-1200.webp 1200w',
    width:1200, height:803, alt:'Le dirigeable d’Awakenings au-dessus du public, des faisceaux laser traversant le ciel nocturne'
  },
  {
    page:'fr/hardstyle.html', category:'music-history', tags:['history','hardstyle','trance','techno'], href:'/fr/hardstyle', type:'Guide', topic:'Hardstyle',
    title:'Qu’est-ce que le hardstyle ? Histoire, son, artistes, styles',
    description:'Reverse bass, grosses caisses distordues, circuit de festivals néerlandais et scission entre hardstyle euphorique et raw hardstyle.',
    image:'img/hardstyle/defqon1-red-2024-320.webp',
    srcset:'img/hardstyle/defqon1-red-2024-320.webp 320w,img/hardstyle/defqon1-red-2024-1280.webp 1280w',
    width:1280, height:720, alt:'La scène principale rouge du Defqon.1 en 2024'
  },
  {
    page:'fr/musique-house.html', category:'music-history', tags:['house','history','overview'], href:'/fr/musique-house', type:'Guide', topic:'Musique house',
    title:'Qu’est-ce que la musique house ? Histoire, son, origines',
    description:'Frankie Knuckles, le Warehouse et les premiers disques de Chicago : ce qu’est la musique house, pourquoi on dit house et les styles de la deep house à l’afro house.',
    image:'img/house-music/frankie-knuckles-way-2022-320.webp',
    srcset:'img/house-music/frankie-knuckles-way-2022-320.webp 320w,img/house-music/frankie-knuckles-way-2022-1200.webp 1200w',
    width:1200, height:900, alt:'La plaque Frankie Knuckles Way à Chicago'
  },
  {
    page:'fr/techno.html', category:'music-history', tags:['techno','history','overview'], href:'/fr/techno', type:'Guide', topic:'Techno',
    title:'Qu’est-ce que la techno ? Détroit, Belleville Three, aujourd’hui',
    description:'La techno, musique de danse de machines née à Détroit : les Belleville Three, d’où vient le nom, Underground Resistance, Berlin, minimal et hard techno.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills mixe dans un club de Détroit en 2010'
  },
  {
    page:'fr/airbeat-one-festival.html', category:'festivals', tags:['festivals','europe-festivals','techno','hardstyle','trance'], href:'/fr/airbeat-one-festival', type:'Guide', topic:'Airbeat One Festival',
    title:'Airbeat One Festival 2027 : dates, scènes, camping, accès',
    description:'Un festival sur aérodrome pour l’EDM, la techno, le hardstyle et la psytrance, où le camping fait partie de l’événement.',
    image:'img/airbeat-one/airbeat-arena-320.webp',
    srcset:'img/airbeat-one/airbeat-arena-320.webp 320w,img/airbeat-one/airbeat-arena-1200.webp 1200w',
    width:1200, height:754, alt:'Public et production dans l’Arena Stage d’Airbeat One en 2025'
  },
  {
    page:'fr/musique-trance.html', category:'music-history', tags:['history','trance','psytrance'], href:'/fr/musique-trance', type:'Guide', topic:'Trance',
    title:'Qu’est-ce que la musique trance ? Origines, artistes, son',
    description:'Une montée, un breakdown et un drop, nés dans les clubs de Francfort : comment la trance a gagné les festivals et comment la psytrance a divergé.',
    image:'img/trance/armin-van-buuren-2017-320.webp',
    srcset:'img/trance/armin-van-buuren-2017-320.webp 320w,img/trance/armin-van-buuren-2017-1024.webp 1024w',
    width:1024, height:681, alt:'Armin van Buuren devant une foule immense à Armin Only Embrace à Kiev, 2017'
  },
  {
    page:'fr/monegros-desert-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','techno','house'], href:'/fr/monegros-desert-festival', type:'Guide', topic:'Monegros Desert Festival',
    title:'Monegros Desert Festival 2027 : date, histoire et guide',
    description:'Une rave de 22 heures dans le désert près de Fraga : date 2027, histoire, musique, accès et limites pratiques.',
    image:'img/monegros/festival-overview-2009-320.webp',
    srcset:'img/monegros/festival-overview-2009-320.webp 320w,img/monegros/festival-overview-2009-1200.webp 1200w',
    width:1200, height:900, alt:'Vue d’ensemble des scènes et du public du Monegros Desert Festival en 2009'
  },
  {
    page:'fr/festival-lollapalooza.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-lollapalooza', type:'Guide', topic:'Lollapalooza',
    title:'Lollapalooza Chicago : lieu, histoire et musique',
    description:'Lollapalooza est un festival de quatre jours à Grant Park, Chicago : lieu, histoire, taille et musique.',
    image:'img/lollapalooza/skyline-2017-320.webp',
    srcset:'img/lollapalooza/skyline-2017-320.webp 320w,img/lollapalooza/skyline-2017-1200.webp 1200w',
    width:1200, height:900, alt:'Une foule à Grant Park pendant Lollapalooza 2017 devant la ligne d’horizon de Chicago'
  },
  {
    page:'fr/boite-de-nuit-budapest.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-budapest', type:'Guide', topic:'Boîtes de nuit à Budapest',
    title:'Les meilleures boîtes de nuit à Budapest : A38 et Instant-Fogas',
    description:'Le cargo A38, les sept salles de l’Instant-Fogas et la techno de Turbina : les meilleures boîtes de nuit de Budapest.',
    image:'img/budapest-clubs/a38-ship-320.webp',
    srcset:'img/budapest-clubs/a38-ship-320.webp 320w,img/budapest-clubs/a38-ship-1200.webp 1200w',
    width:1200, height:900, alt:'Le navire A38 amarré sur le Danube à Budapest, un cargo de 1968 reconverti'
  },
  {
    page:'fr/boite-de-nuit-prague.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-prague', type:'Guide', topic:'Boîtes de nuit à Prague',
    title:'Les meilleures boîtes de nuit à Prague : Cross Club et Ankali',
    description:'La ferraille du Cross Club, les cinq étages de Karlovy Lázně et les nuits techno de l’Ankali : les meilleures boîtes de nuit de Prague.',
    image:'img/prague-clubs/cross-club-interior-320.webp',
    srcset:'img/prague-clubs/cross-club-interior-320.webp 320w,img/prague-clubs/cross-club-interior-844.webp 844w',
    width:844, height:563, alt:'Le bar en sous-sol du Cross Club à Prague, bâti avec du métal de récupération et des pièces de machines'
  },
  {
    page:'fr/boite-de-nuit-lisbonne.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-lisbonne', type:'Guide', topic:'Boîtes de nuit à Lisbonne',
    title:'Les meilleures boîtes de nuit à Lisbonne : Lux Frágil, Kremlin',
    description:'Le Lux Frágil fait Lisbonne depuis 1998, le Ministerium passe de l’afro-house dans un ancien ministère, Musicbox a fermé en 2025.',
    image:'img/lisbon-clubs/lux-fragil-320.webp',
    srcset:'img/lisbon-clubs/lux-fragil-320.webp 320w,img/lisbon-clubs/lux-fragil-552.webp 552w',
    width:552, height:400, alt:'Le bâtiment du Lux Frágil sur la Cais da Pedra à Lisbonne'
  },
  {
    page:'fr/boite-de-nuit-tokyo.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-tokyo', type:'Guide', topic:'Boîtes de nuit à Tokyo',
    title:'Les meilleures boîtes de nuit à Tokyo : WOMB, Contact',
    description:'WOMB, Contact, Vent et Circus Tokyo : les meilleures boîtes de nuit à Tokyo pour la house, la techno et la bass music.',
    image:'img/tokyo-clubs/womb-shibuya-320.webp',
    srcset:'img/tokyo-clubs/womb-shibuya-320.webp 320w,img/tokyo-clubs/womb-shibuya-1200.webp 1200w',
    width:1200, height:800, alt:'L’entrée de la boîte de nuit WOMB à Shibuya, Tokyo'
  },
  {
    page:'fr/boite-de-nuit-new-york.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-new-york', type:'Guide', topic:'Boîtes de nuit à New York',
    title:'Boîtes de nuit à New York : house et techno, hier et aujourd’hui',
    description:'Nowadays, Basement, Public Records, Good Room et Elsewhere : les meilleures boîtes de nuit à New York pour la house et la techno.',
    image:'img/nyc-clubs/limelight-church-320.webp',
    srcset:'img/nyc-clubs/limelight-church-320.webp 320w,img/nyc-clubs/limelight-church-1200.webp 1200w',
    width:1200, height:900, alt:'L’église néogothique de la Sixth Avenue devenue le Limelight'
  },
  {
    page:'fr/exit-festival.html', category:'festivals', tags:['festival','history','discovery'], href:'/fr/exit-festival', type:'Guide', topic:'Festival EXIT',
    title:'EXIT Festival : de Novi Sad à la tournée mondiale',
    description:'Histoire, forteresse de Petrovaradin, Dance Arena et ce qui suit la dernière édition serbe de 2025.',
    image:'img/exit-festival/exit-crowd-320.webp',
    srcset:'img/exit-festival/exit-crowd-320.webp 320w,img/exit-festival/exit-crowd-1200.webp 1200w',
    width:1200, height:784, alt:'Foule dense dans la forteresse de Petrovaradin pendant le festival EXIT'
  },
  {
    page:'fr/boite-de-nuit-manchester.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/fr/boite-de-nuit-manchester', type:'Guide', topic:'Boîtes de nuit à Manchester',
    title:'Les meilleures boîtes de nuit à Manchester : de l’Haçienda au Warehouse Project',
    description:'White Hotel, Soup, Eastern Bloc Records, The Loft et Hidden : les meilleures boîtes de nuit à Manchester aujourd’hui et l’héritage de l’Haçienda.',
    image:'img/manchester-clubs/hacienda-bollards-320.webp',
    srcset:'img/manchester-clubs/hacienda-bollards-320.webp 320w,img/manchester-clubs/hacienda-bollards-800.webp 800w',
    width:800, height:600, alt:'Bornes rayées de l’Haçienda conservées'
  },
  {
    page:'fr/boite-de-nuit-bristol.html', category:'rave-spots', tags:['drum-and-bass','techno','history','discovery'], href:'/fr/boite-de-nuit-bristol', type:'Guide', topic:'Boîtes de nuit à Bristol',
    title:'Les meilleures boîtes de nuit à Bristol : Motion, Lakota et Thekla',
    description:'Motion, Lakota et le cargo Thekla : les meilleures boîtes de nuit à Bristol et l’histoire drum and bass de la ville.',
    image:'img/bristol-clubs/thekla-boat-320.webp',
    srcset:'img/bristol-clubs/thekla-boat-320.webp 320w,img/bristol-clubs/thekla-boat-1200.webp 1200w',
    width:1200, height:675, alt:'Thekla, un cargo reconverti amarré dans le Floating Harbour de Bristol'
  },
  {
    page:'fr/boomtown-festival.html', category:'festivals', tags:['drum-and-bass','festival','discovery'], href:'/fr/boomtown-festival', type:'Guide', topic:'Boomtown Festival',
    title:'Boomtown Festival 2027 : dates, lieu, histoire et musique',
    description:'Boomtown Festival 2027 se tient du 11 au 15 août au Matterley Estate. Musique, histoire et ce qu’il faut savoir avant une première visite.',
    image:'img/boomtown/opening-ceremony-2019-320.webp',
    srcset:'img/boomtown/opening-ceremony-2019-320.webp 320w,img/boomtown/opening-ceremony-2019-1200.webp 1200w',
    width:1200, height:900, alt:'La scène de la cérémonie d’ouverture 2019 et la foule à Boomtown'
  },
  {
    page:'fr/movement-detroit.html', category:'festivals', tags:['techno','festival','detroit'], href:'/fr/movement-detroit', type:'Guide', topic:'Movement Detroit',
    title:'Movement Detroit : histoire, lieu, scènes et dates 2027',
    description:'Movement Detroit ramène la techno à Hart Plaza chaque week-end du Memorial Day. Histoire, scènes et dates 2027 du festival.',
    image:'img/movement-detroit/hart-plaza-320.webp',
    srcset:'img/movement-detroit/hart-plaza-320.webp 320w,img/movement-detroit/hart-plaza-1280.webp 1280w',
    width:1280, height:853, alt:'Hart Plaza au bord de la rivière Detroit, avec les immeubles du centre de Détroit derrière'
  },
  {
    page:'fr/arc-music-festival.html', category:'festivals', tags:['house','techno','festival'], href:'/fr/arc-music-festival', type:'Guide', topic:'ARC Music Festival',
    title:'ARC Music Festival 2027 : guide de Chicago, scènes et accès',
    description:'L’ARC Music Festival apporte house et techno à Union Park, à Chicago. Scènes, accès en CTA et édition 2027 à confirmer.',
    image:'img/arc-music-festival/arc-frankie-knuckles-way-320.webp',
    srcset:'img/arc-music-festival/arc-frankie-knuckles-way-320.webp 320w,img/arc-music-festival/arc-frankie-knuckles-way-1200.webp 1200w',
    width:1200, height:900, alt:'Panneau de rue Frankie Knuckles Way à Chicago'
  },
  {
    page:'fr/boite-de-nuit-mexico.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/fr/boite-de-nuit-mexico', type:'Guide', topic:'Boîtes de nuit à Mexico',
    title:'Les meilleures boîtes de nuit à Mexico : Patrick Miller, M.N.Roy et Fünk',
    description:'Patrick Miller, M.N.Roy, Fünk Club et Yu Yu Cine Club : les meilleures boîtes de nuit à Mexico aujourd’hui et leur histoire depuis 1983.',
    image:'img/mexico-city-clubs/roma-norte-street-320.webp',
    srcset:'img/mexico-city-clubs/roma-norte-street-320.webp 320w,img/mexico-city-clubs/roma-norte-street-1200.webp 1200w',
    width:1200, height:533, alt:'Un coin de rue du quartier de Roma Norte à Mexico'
  },
  {
    page:'fr/regarder-des-sets-dj-en-direct.html', category:'digging', tags:['discovery','history','uk','jungle'], href:'/fr/regarder-des-sets-dj-en-direct', type:'Guide', topic:'Sets DJ en direct',
    title:'Regarder des sets DJ en direct : Boiler Room, HÖR, NTS',
    description:'Où regarder des DJ sets en ligne, en quoi les grandes plateformes diffèrent, et un chemin à travers des milliers d’enregistrements archivés.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'Un DJ dans la cabine de The Lot Radio à Brooklyn'
  },
  {
    page:'fr/meilleurs-mix-dj-soundcloud.html', category:'digging', tags:['discovery','house','techno','breaks'], href:'/fr/meilleurs-mix-dj-soundcloud', type:'Guide', topic:'Mix DJ SoundCloud',
    title:'Meilleurs mix DJ SoundCloud, plus un choix personnel',
    description:'Huit des meilleurs mix DJ SoundCloud, de Wata Igarashi et Ogazón à Djrum et SHERELLE, plus un mix de thecatrave clairement signalé.',
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'Un DJ dans la cabine de The Lot Radio à Brooklyn'
  },
  {
    page:'fr/meilleurs-mix-techno.html', category:'digging', tags:['discovery','techno','history'], href:'/fr/meilleurs-mix-techno', type:'Guide', topic:'Mix techno',
    title:'Meilleurs mix techno : 10 DJ sets essentiels',
    description:'Dix mix techno essentiels de Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd et d’autres.',
    image:'img/techno/jeff-mills-2010-320.webp',
    srcset:'img/techno/jeff-mills-2010-320.webp 320w,img/techno/jeff-mills-2010-1200.webp 1200w',
    width:1200, height:798, alt:'Jeff Mills mixant des disques dans un club de Détroit en 2010'
  },
  {
    page:'fr/meilleures-playlists-house-spotify.html', category:'digging', tags:['discovery','house'], href:'/fr/meilleures-playlists-house-spotify', type:'Guide', topic:'Playlists house',
    title:'Meilleures playlists house sur Spotify : 12 sélections',
    description:'Douze playlists Spotify pour la house music, des classiques des années 90 et flux de labels à deux sélections signalées de thecatrave.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Écouteurs filaires, un lecteur portable et deux boîtiers transparents sur une table de club rayée'
  },
  {
    page:'fr/festival-parookaville.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-parookaville', type:'Guide', topic:'Parookaville',
    title:'Parookaville 2027 : site, fréquentation, histoire et musique',
    description:'Un festival mis en scène comme une ville sur l’aéroport de Weeze : où se trouve Parookaville, comment trois amis l’ont bâti, combien de monde y vient et ce qui passe sur ses scènes.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'La Mainstage de Parookaville vue du ciel en 2022, le public devant et des éoliennes à l’horizon'
  },
  {
    page:'fr/sonar-barcelone.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/sonar-barcelone', type:'Guide', topic:'Sónar',
    title:'Sónar Barcelone : histoire, musique et dates 2027',
    description:'Trois jours chaque mois de juin à Barcelone depuis 1994, le jour et la nuit : où a lieu Sónar, comment il a grandi, à qui il appartient aujourd’hui, et Sónar 2027 du 17 au 19 juin.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'Une foule devant la scène SonarVillage à Fira Montjuïc, avec le Palau Nacional derrière'
  },
  {
    page:'fr/meilleures-playlists-spotify.html', category:'digging', tags:['discovery','tools','house','bass'], href:'/fr/meilleures-playlists-spotify', type:'Liste', topic:'Playlists Spotify',
    title:'Meilleures playlists Spotify : 12 sélections humaines',
    description:'Douze playlists au point de vue reconnaissable, de KEXP et Pitchfork à Four Tet, Bicep et l’underground électronique.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Un casque filaire, un lecteur de musique portable et des boîtiers translucides sur une table de club rayée'
  },
  {
    page:'fr/acid-house.html', category:'music-history', tags:['history','uk','house','techno'], href:'/fr/acid-house', type:'Guide', topic:'Acid house',
    title:'Qu’est-ce que l’acid house ? De la TB-303 aux raves britanniques',
    description:'Une machine à basse à 40 dollars, trois amis à Chicago, un DJ qui a passé leur cassette quatre fois dans la nuit, et le mouvement britannique qui a repris le nom.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Gros plan sur le panneau d’une Roland TB-303 Bass Line'
  },
  {
    page:'fr/grime.html', category:'music-history', tags:['uk','history','bass','jungle'], href:'/fr/grime', type:'Guide', topic:'Grime',
    title:'Le grime, c’est quoi ? Son, histoire, artistes et morceaux clés',
    description:'Des instrumentaux froids à 140 BPM, la radio pirate, les crews et les clashs de l’est de Londres, et la dispute jamais tranchée sur qui l’a lancé.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Deux MC de Roll Deep sur une scène sombre à New York en 2005'
  },
  {
    page:'fr/festivals-electro-europe.html', category:'festivals', tags:['discovery','techno','house','history'], href:'/fr/festivals-electro-europe', type:'Liste', topic:'Festivals en Europe',
    title:'Les meilleurs festivals électro en Europe en 2027, comparés',
    description:'Quatorze grands festivals et sept plus petits, de Tomorrowland à Garbicz, comparés par son, taille, cadre et dates 2027.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'Un public en plein jour sous la charpente d’acier de la Futur Stage au Kappa FuturFestival, à Turin'
  },
  {
    page:'fr/ultra-music-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/ultra-music-festival', type:'Guide', topic:'Ultra',
    title:'Ultra Music Festival 2027 : lieu, âge minimum, fréquentation',
    description:'L’Ultra revient au Bayfront Park de Miami du 26 au 28 mars 2027 : le lieu, la taille, l’histoire, Ultra Europe à Split et la musique loin de la Main Stage.',
    image:'img/ultra/bayfront-2014-320.webp',
    srcset:'img/ultra/bayfront-2014-320.webp 320w,img/ultra/bayfront-2014-1200.webp 1200w',
    width:1200, height:900, alt:'Le Bayfront Park de Miami vu d’en haut pendant l’Ultra Music Festival 2014'
  },
  {
    page:'fr/edc-las-vegas.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/edc-las-vegas', type:'Guide', topic:'EDC Las Vegas',
    title:'EDC Las Vegas 2027 : le festival, sa taille et sa musique',
    description:'L’Electric Daisy Carnival au Las Vegas Motor Speedway : où a lieu l’EDC, comment il est arrivé à un demi-million de personnes par an et ce qui se joue loin de kineticFIELD.',
    image:'img/edc/kinetic-field-2024-320.webp',
    srcset:'img/edc/kinetic-field-2024-320.webp 320w,img/edc/kinetic-field-2024-1200.webp 1200w',
    width:1200, height:900, alt:'kineticFIELD à EDC Las Vegas en 2024'
  },
  {
    page:'fr/uk-garage.html', category:'music-history', tags:['uk','nineties','house','bass'], href:'/fr/uk-garage', type:'Guide', topic:'UK garage',
    title:'C’est quoi le UK garage ? Son, 2-step, speed garage, bassline',
    description:'Londres a joué un disque américain trop vite, jusqu’à casser le beat. Les branches entre lesquelles le UK garage s’est partagé, et les chiffres de son revival.',
    image:'img/skream-320.webp',
    srcset:'img/skream-320.webp 320w,img/skream-1200.webp 1200w',
    width:1200, height:900, alt:'Skream pendant un DJ set'
  },
  {
    page:'fr/festival-creamfields.html', category:'festivals', tags:['discovery','history','uk','bass'], href:'/fr/festival-creamfields', type:'Guide', topic:'Creamfields',
    title:'Creamfields 2027 : lieu, capacité, âge minimum',
    description:'Quatre jours sur le domaine de Daresbury chaque fin août : où a lieu Creamfields, comment une soirée house de Liverpool l’a fait naître, à qui il appartient et ce qui se joue loin de l’Arc Stage.',
    image:'img/creamfields/steel-yard-2017-320.webp',
    srcset:'img/creamfields/steel-yard-2017-320.webp 320w,img/creamfields/steel-yard-2017-1200.webp 1200w',
    width:1200, height:801, alt:'L’intérieur vide du Steel Yard à Creamfields, une structure d’acier en arches éclairée en orange'
  },
  {
    page:'fr/jungle.html', category:'music-history', tags:['breaks','uk','nineties','soundsystem'], href:'/fr/jungle', type:'Guide', topic:'Jungle',
    title:'C’est quoi la jungle music ? Histoire, son et morceaux clés',
    description:'Radio pirate, dubplates, énergie des MC et retour mondial d’un son profondément noir et britannique.',
    image:'img/Dubplates-320.png', srcset:'img/Dubplates-320.png 320w,img/Dubplates.png 1024w',
    width:1024, height:1024, alt:'Des dubplates illustrés, symboles de la culture jungle'
  },
  {
    page:'fr/breakbeat.html', category:'music-history', tags:['breaks','history','uk','nineties'], href:'/fr/breakbeat', type:'Guide', topic:'Breakbeat',
    title:'Qu’est-ce que le breakbeat ? Genre, histoire, artistes, styles',
    description:'Des breaks funk et du hip-hop du Bronx à la rave britannique, à la Floride et à l’Andalousie, au big beat, au nu-skool et aux breaks actuels.',
    image:'img/amen-320.webp', srcset:'img/amen-320.webp 320w,img/amen-1200.webp 1200w',
    width:1200, height:800, alt:'La forme d’onde et le motif de batterie du break Amen'
  },
  {
    page:'fr/festival-untold.html', category:'festivals', tags:['discovery','history','bass'], href:'/fr/festival-untold', type:'Guide', topic:'Untold',
    title:'Untold Festival 2027 : le festival de Cluj, en Roumanie',
    description:'Quatre jours chaque mois d’août à Cluj-Napoca : quand a lieu Untold 2027, où il se tient, comment il est devenu un festival de 500 000 entrées et ce qui se joue à côté de la scène principale.',
    image:'img/untold/main-stage-2019-320.webp',
    srcset:'img/untold/main-stage-2019-320.webp 320w,img/untold/main-stage-2019-1200.webp 1200w',
    width:1200, height:900, alt:'Une foule dense, téléphones levés, devant la scène principale d’Untold de nuit en 2019'
  },
  {
    page:'fr/bass-music.html', category:'music-history', tags:['bass','global','soundsystem'], href:'/fr/bass-music', type:'Guide', topic:'Bass music',
    title:'Qu’est-ce que la bass music ? Histoire, genres et morceaux clés',
    description:'Une histoire mondiale qui relie la Jamaïque, Miami, la Grande-Bretagne, Los Angeles, Chicago, Durban et la culture club hybride d’aujourd’hui.',
    image:'img/bass-music/miami-bass-loc-ace-vic-480.jpg',
    srcset:'img/bass-music/miami-bass-loc-ace-vic-480.jpg 480w,img/bass-music/miami-bass-loc-ace-vic-1400.jpg 1400w',
    width:1400, height:933, alt:'Les artistes de Miami bass Loc Ace et Vic devant une sono de club en 1993'
  }
];

// The Spanish guides, on the same terms as the German and French ones: their own
// catalogue, the English guides' images with translated captions.
export const spanishArticleCatalog = [
  {
    page:'es/ushuaia-ibiza.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/es/ushuaia-ibiza', type:'Guía', topic:'Ushuaia Ibiza',
    title:'Ushuaia Ibiza: entradas, dress code y eventos de la temporada',
    description:'Ushuaia Ibiza: cuánto cuestan las entradas, el dress code, las residencias de 2026, el hotel, el VIP y cómo llegar a Platja d\'en Bossa.',
    image:'img/ushuaia-ibiza/dance-floor-2023-320.webp',
    srcset:'img/ushuaia-ibiza/dance-floor-2023-320.webp 320w,img/ushuaia-ibiza/dance-floor-2023-1200.webp 1200w',
    width:1200, height:800, alt:'La pista de Ushuaia Ibiza llena alrededor de la piscina al anochecer'
  },
  {
    page:'es/pacha-ibiza.html', category:'rave-spots', tags:['house','techno','history','discovery'], href:'/es/pacha-ibiza', type:'Guía', topic:'Pacha Ibiza',
    title:'Pacha Ibiza: entradas, dress code y calendario 2026',
    description:'Pacha Ibiza: cuánto cuestan las entradas, cómo funciona la mesa VIP y el dress code, dónde está el club, quién es el dueño y cómo leer el calendario 2026.',
    image:'img/pacha-ibiza/cherries-2014-320.webp',
    srcset:'img/pacha-ibiza/cherries-2014-320.webp 320w,img/pacha-ibiza/cherries-2014-1200.webp 1200w',
    width:1200, height:800, alt:'La fachada de Pacha Ibiza de noche, con los letreros rojos de las cerezas iluminados'
  },
  {
    page:'es/berghain.html', category:'rave-spots', tags:['techno','house','history','discovery'], href:'/es/berghain', type:'Guía', topic:'Berghain',
    title:'Berghain Berlín: qué es, Panorama Bar, sonido y residentes',
    description:'Berghain explicado: la antigua central, Panorama Bar arriba, la Halle, la Kantine, la entrada, el dress code y el sello Ostgut Ton.',
    image:'img/berghain/berghain-facade-320.webp',
    srcset:'img/berghain/berghain-facade-320.webp 320w,img/berghain/berghain-facade-1200.webp 1200w',
    width:1200, height:900, alt:'La fachada gris neoclásica del edificio de Berghain en Berlín, con algunas personas en la entrada'
  },
  {
    page:'es/primavera-sound-barcelona.html', category:'festivals', tags:['discovery','history','house'], href:'/es/primavera-sound-barcelona', type:'Guía', topic:'Primavera Sound',
    title:'Primavera Sound 2027: fechas, lugar y cabezas de cartel por año',
    description:'Primavera Sound Barcelona 2027 es del 3 al 5 de junio en el Parc del Fòrum, tras 293.000 asistencias en 2025. Cabezas de cartel por año, lugar y edición de Oporto.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Asistentes junto al agua en Primavera Sound Barcelona en 2019, bajo un cielo azul despejado'
  },
  {
    page:'es/discotecas-barcelona.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/es/discotecas-barcelona', type:'Guía', topic:'Discotecas Barcelona',
    title:'Discotecas Barcelona: las mejores, de Zeleste a Razzmatazz',
    description:'Compara Razzmatazz, Nitsa, Macarena Club y Moog por barrio y por música, y lee la historia de las salas de Barcelona.',
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'La fachada de Sala Razzmatazz en el barrio de Poblenou, Barcelona'
  },
  {
    page:'es/discotecas-berlin.html', category:'rave-spots', tags:['techno','history','discovery'], href:'/es/discotecas-berlin', type:'Guía', topic:'Discotecas Berlín',
    title:'Discotecas Berlín: los mejores clubes y sus leyendas',
    description:'De UFO y Tresor a Berghain y Sisyphos: las salas que hicieron de Berlín una ciudad techno, los clubes famosos que cerraron y los que siguen abiertos.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'La entrada de Berghain en Berlín'
  },
  {
    page:'es/discotecas-ibiza.html', category:'rave-spots', tags:['house','history','discovery'], href:'/es/discotecas-ibiza', type:'Guía', topic:'Discotecas Ibiza',
    title:'Discotecas Ibiza: Pacha, Amnesia, Hï y las demás',
    description:'Hï, Pacha, Amnesia, DC-10, Ushuaïa y [UNVRS]: las mejores discotecas de Ibiza, las que cerraron, dónde alojarse y cuándo dura la temporada.',
    image:'img/ibiza-clubs/pacha-entrance-320.webp',
    srcset:'img/ibiza-clubs/pacha-entrance-320.webp 320w,img/ibiza-clubs/pacha-entrance-1200.webp 1200w',
    width:1200, height:675, alt:'La entrada blanca de Pacha en Ibiza ciudad, con sus letras rojas'
  },
  {
    page:'es/festival-glastonbury.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history'], href:'/es/festival-glastonbury', type:'Guía', topic:'Glastonbury',
    title:'Festival de Glastonbury: qué es, dónde es y fechas de 2027',
    description:'Cinco días en una granja de Somerset, en Inglaterra: cuándo es Glastonbury 2027, por qué no hubo festival en 2026, dónde es, qué tamaño tiene y quién ha sido headliner.',
    image:'img/glastonbury/aerial-2022-320.webp',
    srcset:'img/glastonbury/aerial-2022-320.webp 320w,img/glastonbury/aerial-2022-1200.webp 1200w',
    width:1200, height:800, alt:'Worthy Farm vista desde el aire en junio de 2022, con los campos llenos de tiendas y carpas'
  },
  {
    page:'es/monegros-desert-festival.html', category:'festivals', tags:['festivals','europe-festivals','discovery','history','techno','house'], href:'/es/monegros-desert-festival', type:'Guía', topic:'Monegros Desert Festival',
    title:'Monegros Desert Festival 2027: fecha, historia y cómo llegar',
    description:'Un único evento electrónico larguísimo cerca de Fraga, en Aragón, con raíces en la Florida 135: fecha de 2027, historia, música, formato nocturno y cómo llegar.',
    image:'img/monegros/festival-overview-2009-320.webp',
    srcset:'img/monegros/festival-overview-2009-320.webp 320w,img/monegros/festival-overview-2009-1200.webp 1200w',
    width:1200, height:900, alt:'Vista general de los escenarios y el público del Monegros Desert Festival en 2009'
  },
  {
    page:'es/sonar-barcelona.html', category:'festivals', tags:['discovery','history','bass'], href:'/es/sonar-barcelona', type:'Guía', topic:'Sónar',
    title:'Sónar Barcelona: qué es, dónde es y fechas de 2027',
    description:'Tres días cada junio en Barcelona desde 1994, de día y de noche: dónde es el Sónar, cómo ha crecido, de quién es ahora y el Sónar 2027, del 17 al 19 de junio.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'Una multitud ante el escenario SonarVillage en Fira Montjuïc, con el Palau Nacional detrás'
  },
  {
    page:'es/tomorrowland-festival.html', category:'festivals', tags:['discovery','history','bass'], href:'/es/tomorrowland-festival', type:'Guía', topic:'Tomorrowland',
    title:'Tomorrowland: qué es, dónde es y cuándo es en 2027',
    description:'Un parque de Boom, en Bélgica, que el mundo conoce sobre todo por la retransmisión: qué es Tomorrowland, dónde se celebra, cuánta gente va, de quién es y qué suena lejos de la Mainstage.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'La Mainstage de Tomorrowland en 2014'
  }
];

export const catalogs = {en: homeArticleCatalog, de: germanArticleCatalog, fr: frenchArticleCatalog, es: spanishArticleCatalog};

const catalogFor = lang => {
  const catalog = catalogs[lang];
  if (!catalog) throw new Error(`No article catalogue for language: ${lang}`);
  return catalog;
};

export function homeArticlesWithReadingTimes(lang = 'en') {
  return catalogFor(lang).map(item => {
    // A page being generated for the first time does not exist on disk yet; fall
    // back so the first build succeeds, then the real value is picked up on the
    // rebuild that ARTICLE-PRODUCTION-WORKFLOW.md §9 already requires.
    if (!fs.existsSync(item.page)) return {...item, readingTime:'~15 min'};
    const article = fs.readFileSync(item.page, 'utf8');
    const readingTime = article.match(/<p class="reading-time">([^<]+)<\/p>/)?.[1];
    const minutes = readingTime?.match(/(\d+)\s*min/i)?.[1];
    if (!minutes) throw new Error(`Could not read the article duration from ${item.page}`);
    return {...item, readingTime:`~${minutes} min`};
  });
}

// The homepage lists articles newest first, by the datePublished each generated
// page already declares, so a new article goes to the top without anyone
// reordering the catalogue by hand. Same-day ties go to the entry with the later
// optional `released` timestamp (the commit time it was first published), then to
// the entry added to the catalogue later. Read Next keeps catalogue order: its tie-breaking depends
// on it, and it should not shift every time something is published.
//
// The grid always shows exactly HOME_CARDS, two full rows of four: when a new
// article is published, the oldest one drops off the homepage (owner,
// 2026-09-10). It stays in the catalogue, so Read Next still links to it.
// This replaced a per-article onHome:false flag, which had to be moved by hand
// every time the count changed.
const HOME_CARDS = 8;

export function homeArticlesNewestFirst(lang = 'en') {
  return allArticlesNewestFirst(lang).slice(0, HOME_CARDS);
}

// Every article, newest first, for the /articles page.
export function allArticlesNewestFirst(lang = 'en') {
  const published = item => {
    if (!fs.existsSync(item.page)) return '9999-12-31';
    const date = fs.readFileSync(item.page, 'utf8').match(/article:published_time" content="([^"]+)"/)?.[1];
    if (!date) throw new Error(`Could not read the publication date from ${item.page}`);
    return date;
  };
  return homeArticlesWithReadingTimes(lang)
    .map((item, index) => ({item, index, date: published(item)}))
    .sort((a, b) => b.date.localeCompare(a.date)
      || (b.item.released ? Date.parse(b.item.released) : 0) - (a.item.released ? Date.parse(a.item.released) : 0)
      || b.index - a.index)
    .map(entry => entry.item);
}

// Related-article cards for the in-article Read Next block. Same catalog, same card
// shape as the homepage grid, with the current article removed so a page never
// recommends itself.
// Related means related, not "everything else". This used to return the whole
// catalogue minus the current page, which was seven cards per article at eight
// articles and would have been nineteen at twenty. Now it scores by shared
// tags and keeps the best few.
//
// Ties break towards the article that appears earlier in the catalogue, which
// is the order the site already treats as editorial priority. A page whose tags
// match nothing still gets RELATED_MIN cards so the block is never empty or
// lonely: the discovery guide shares no tags with any genre guide, and a
// dangling single card looks like a mistake rather than a choice.
const RELATED_MAX = 4;
const RELATED_MIN = 3;

export function relatedArticles(currentPage, lang = 'en') {
  const all = homeArticlesWithReadingTimes(lang);
  const current = all.find(item => item.page === currentPage || item.href === currentPage);
  if (!current) throw new Error(`relatedArticles received an unknown page: ${currentPage}`);

  const mine = new Set(current.tags || []);
  const others = all.filter(item => item !== current);
  const scored = others.map((item, index) => ({
    item,
    index,
    shared: (item.tags || []).filter(tag => mine.has(tag)).length
  }));

  scored.sort((a, b) => b.shared - a.shared || a.index - b.index);
  const withTags = scored.filter(entry => entry.shared > 0).slice(0, RELATED_MAX);
  const chosen = withTags.length >= RELATED_MIN
    ? withTags
    : scored.slice(0, RELATED_MIN);
  return chosen.map(entry => entry.item);
}
