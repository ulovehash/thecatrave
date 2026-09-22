import fs from 'node:fs';
import {catalogueSets} from './catalogue.mjs';

export const homeArticleCatalog = [
  {
    page:'breakbeat-guide.html', tags:['breaks','uk','nineties','sampling'], href:'/breakbeat-guide', type:'Guide', topic:'Breakbeat',
    title:'Breakbeat Music: History, Sound and Evolution',
    description:'From funk breaks and pirate radio to cracked VSTs and modern bass hybrids.',
    image:'img/amen-320.webp', srcset:'img/amen-320.webp 320w,img/amen-1200.webp 1200w',
    width:1200, height:800, alt:'The Amen break waveform and drum pattern'
  },
  {
    page:'jungle-music-guide.html', tags:['breaks','uk','nineties','soundsystem'], href:'/jungle-music-guide', type:'Guide', topic:'Jungle',
    title:'Jungle Music: From Roots to Revival',
    description:'Pirate radio, dubplates, MC energy and the global return of a distinctly Black British sound.',
    image:'img/Dubplates-320.png', srcset:'img/Dubplates-320.png 320w,img/Dubplates.png 1024w',
    width:1024, height:1024, alt:'Illustrated dubplates representing jungle music culture'
  },
  {
    // Off the homepage grid since 2026-09-10 (owner): nine cards left one alone
    // on the last row of four. The oldest guide went. It stays in Read Next.
    page:'uk-electronic-music-evolution.html', tags:['uk','history','overview'], href:'/uk-electronic-music-evolution', type:'Timeline', topic:'UK music',
    title:'The Evolution of UK Electronic Music',
    description:'Ten sounds that travelled from regional underground scenes into global culture.',
    image:'img/bmb-320.webp', srcset:'img/bmb-320.webp 320w,img/bmb.webp 1024w',
    width:1024, height:683, alt:'British electronic music artists performing in a dark club'
  },
  {
    page:'german-electronic-music.html', tags:['techno','history','overview'], href:'/german-electronic-music', type:'Timeline', topic:'German music',
    title:'German Electronic Music History: From Kraftwerk to Techno',
    description:'Cologne studios, Düsseldorf electronic pop, Frankfurt trance and the Detroit-Berlin alliance.',
    image:'img/german-electronic/kraftwerk-stage-320.webp',
    srcset:'img/german-electronic/kraftwerk-stage-320.webp 320w,img/german-electronic/kraftwerk-stage-1200.webp 1200w',
    width:1200, height:901, alt:'Kraftwerk performing behind electronic consoles'
  },
  {
    page:'bass-music-guide.html', tags:['bass','global','soundsystem'], href:'/bass-music-guide', type:'Guide', topic:'Bass music',
    title:'What Is Bass Music? History, Genres and Essential Tracks',
    description:'A global history connecting Jamaica, Miami, Britain, Los Angeles, Chicago, Durban and today’s hybrid club culture.',
    image:'img/bass-music/miami-bass-loc-ace-vic-480.jpg',
    srcset:'img/bass-music/miami-bass-loc-ace-vic-480.jpg 480w,img/bass-music/miami-bass-loc-ace-vic-1400.jpg 1400w',
    width:1400, height:933, alt:'Miami bass artists Loc Ace and Vic in front of a club sound system in 1993'
  },
  {
    page:'dubstep-guide.html', tags:['bass','uk','twothousands','soundsystem'], href:'/dubstep-guide', type:'Guide', topic:'Dubstep',
    title:'What Is Dubstep? Origins, Sound and the Genre Split',
    description:'From south London record shops and 200-capacity basements to a genre that split into two sounds sharing one name.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'A vinyl cutting lathe with an acetate disc on the platter'
  },
  {
    page:'how-to-find-new-music.html', tags:['discovery','tools'], href:'/how-to-find-new-music', type:'Guide', topic:'Music discovery',
    title:'How to Find New Music: 10 Ways That Are Not an Algorithm',
    description:'Ten ways to hear something you have not heard before, from community radio to record credits, ordered by how much work they take.',
    image:'img/NOW-320.webp',
    srcset:'img/NOW-320.webp 320w,img/NOW-1024.webp 1024w',
    width:1024, height:1024, alt:'A record shop listening station'
  },
  {
    page:'uk-garage-guide.html', tags:['uk','nineties','house','bass'], href:'/uk-garage-guide', type:'Guide', topic:'UK garage',
    title:'What Is UK Garage? The Sound, 2-Step, Speed Garage and Bassline',
    description:'London played an American record too fast until the beat broke. The branches it split into, and the numbers behind its revival.',
    image:'img/skream-320.webp',
    srcset:'img/skream-320.webp 320w,img/skream-1200.webp 1200w',
    width:1200, height:900, alt:'Skream playing a DJ set'
  },
  {
    page:'drum-and-bass-guide.html', tags:['breaks','uk','nineties','bass'], href:'/drum-and-bass-guide', type:'Guide', topic:'Drum and bass',
    title:'What Is Drum and Bass? 174 BPM, History and Subgenres',
    description:'Fast breakbeats, deep sub-bass and the British rave continuum behind a global genre usually played between 170 and 180 BPM.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size DJing under green stage light'
  },
  {
    page:'best-boiler-room-sets.html', tags:['uk','house','bass','discovery'], href:'/best-boiler-room-sets', type:'List', topic:'Boiler Room',
    title:'Best Boiler Room Sets of All Time, Ranked and Measured',
    description:'Eighteen sets picked for what happens in them, beside the ten most-watched, counted across 8,206 Boiler Room recordings.',
    image:'img/boiler-room/carl-cox-320.webp',
    srcset:'img/boiler-room/carl-cox-320.webp 320w,img/boiler-room/carl-cox-1200.webp 1200w',
    width:1200, height:800, alt:'Carl Cox DJing at Amsterdam Dance Event'
  },
  {
    page:'what-is-burning-man.html', tags:['house','history','discovery'], href:'/what-is-burning-man', type:'Guide', topic:'Burning Man',
    title:'What Is Burning Man? The Event, the City and the Music',
    description:'A participant-built city in the Nevada desert, with no central lineup or main stage, and the sound camps and art cars that programme their own music.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'The Robot Heart art car on the playa at Burning Man'
  },
  {
    page:'best-clubs-in-berlin.html', tags:['techno','history','discovery'], href:'/best-clubs-in-berlin', type:'Guide', topic:'Berlin clubs',
    title:'Best Clubs in Berlin: The Legends and the Ones Still Open',
    description:'The rooms that made Berlin a techno city, the famous clubs that closed, and the best clubs in Berlin that are still open.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'The entrance to Berghain in Berlin'
  },
  {
    page:'best-clubs-in-paris.html', tags:['techno','history','discovery'], href:'/best-clubs-in-paris', type:'Guide', topic:'Paris clubs',
    title:'Best Clubs in Paris: From Le Palace to Rex Club',
    description:'Le Palace, Les Bains Douches and Rex Club: the clubs that made Paris nightlife, how each became famous, and the best clubs in Paris open now.',
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"The entrance to the former Les Bains Douches nightclub at 7 rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'best-clubs-in-barcelona.html', tags:['techno','history','discovery'], href:'/best-clubs-in-barcelona', type:'Guide', topic:'Barcelona clubs',
    title:'Best Clubs in Barcelona: From Zeleste to Razzmatazz',
    description:"Razzmatazz, Nitsa and Macarena Club: how Barcelona's biggest club grew out of a 1970s live venue, and the best clubs in Barcelona open now.",
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'The exterior of Sala Razzmatazz in the Poblenou district of Barcelona'
  },
  {
    page:'best-electronic-music-clubs-in-london.html', tags:['jungle','history','discovery'], href:'/best-electronic-music-clubs-in-london', type:'Guide', topic:'London clubs',
    title:'Best Electronic Music Clubs in London: History and Where to Go',
    description:'The best electronic music clubs in London now, plus the rooms that shaped acid house, jungle, garage and dubstep.',
    image:'img/london-clubs/fabric-320.webp',
    srcset:'img/london-clubs/fabric-320.webp 320w,img/london-clubs/fabric-1200.webp 1200w',
    width:1200, height:810, alt:'The entrance to fabric on Charterhouse Street, London'
  },
  {
    page:'live-dj-sets.html', tags:['discovery','history','uk','jungle'], href:'/live-dj-sets', type:'Guide', topic:'Live DJ sets',
    title:'Where to Watch Live DJ Sets: Boiler Room, HÖR, NTS and More',
    description:`Where to watch DJ sets online, how the main platforms differ, and a route through ${catalogueSets()} archived recordings.`,
    image:'img/live-dj-sets/the-lot-radio-320.webp',
    srcset:'img/live-dj-sets/the-lot-radio-320.webp 320w,img/live-dj-sets/the-lot-radio-1200.webp 1200w',
    width:1200, height:800, alt:'A DJ in the booth at The Lot Radio in Brooklyn'
  },
  {
    page:'tomorrowland-festival.html', tags:['discovery','history','bass'], href:'/tomorrowland-festival', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland Festival: Where It Is, How Big, and the Music',
    description:'A park in Boom, Belgium, that most of the world knows through a livestream: where Tomorrowland happens, how big it is, who owns it, and what plays off the Mainstage.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'The Tomorrowland Mainstage in 2014'
  },
  {
    page:'edc-las-vegas.html', tags:['discovery','history','bass'], href:'/edc-las-vegas', type:'Guide', topic:'EDC Las Vegas',
    title:'EDC Las Vegas: What It Is, How Big, and the Music',
    description:'Electric Daisy Carnival at the Las Vegas Motor Speedway: where EDC happens, how half a million people a year grew out of a field in Chino, and what plays past kineticFIELD.',
    image:'img/edc/kinetic-field-2024-320.webp',
    srcset:'img/edc/kinetic-field-2024-320.webp 320w,img/edc/kinetic-field-2024-1200.webp 1200w',
    width:1200, height:900, alt:'kineticFIELD at EDC Las Vegas in 2024'
  },
  {
    page:'creamfields-festival.html', tags:['discovery','history','uk','bass'], href:'/creamfields-festival', type:'Guide', topic:'Creamfields',
    title:'Creamfields Festival: Where It Is, How It Grew, the Music',
    description:'Four days on the Daresbury estate every August bank holiday: where Creamfields happens, how a Liverpool house night grew into it, who owns it, and what plays beyond the Arc Stage.',
    image:'img/creamfields/steel-yard-2017-320.webp',
    srcset:'img/creamfields/steel-yard-2017-320.webp 320w,img/creamfields/steel-yard-2017-1200.webp 1200w',
    width:1200, height:801, alt:'The empty interior of the Steel Yard at Creamfields, an arched steel structure lit orange'
  },
  {
    page:'parookaville-festival.html', tags:['discovery','history','bass'], href:'/parookaville-festival', type:'Guide', topic:'Parookaville',
    title:'Parookaville Festival: Where It Is, Who Runs It, the Music',
    description:'A festival staged as a city on an old RAF airbase at Weeze: where Parookaville happens, how three friends built it, how many people go, who runs it, and what plays there.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'The Parookaville Mainstage from the air in 2022, with the crowd in front of it and wind turbines on the horizon'
  },
  {
    page:'ultra-music-festival.html', tags:['discovery','history','bass'], href:'/ultra-music-festival', type:'Guide', topic:'Ultra',
    title:'Ultra Music Festival 2027: Miami Dates, Location and Music',
    description:'Ultra returns to Bayfront Park in Miami on 26 to 28 March 2027: the location, scale, history and music beyond the Main Stage.',
    image:'img/ultra/bayfront-2014-320.webp',
    srcset:'img/ultra/bayfront-2014-320.webp 320w,img/ultra/bayfront-2014-1200.webp 1200w',
    width:1200, height:900, alt:'Bayfront Park in Miami seen from above during Ultra Music Festival 2014'
  },
  {
    page:'untold-festival.html', tags:['discovery','history','bass'], href:'/untold-festival', type:'Guide', topic:'Untold',
    title:'Untold Festival: Where It Is, How Big, and the Music',
    description:'Four days every August in Cluj-Napoca: when Untold 2027 is, where it happens, how a European Youth Capital party reached 500,000 admissions, and what plays past the main stage.',
    image:'img/untold/main-stage-2019-320.webp',
    srcset:'img/untold/main-stage-2019-320.webp 320w,img/untold/main-stage-2019-1200.webp 1200w',
    width:1200, height:900, alt:'A packed crowd with phone lights in front of the Untold main stage at night in 2019'
  },
  {
    page:'what-is-coachella.html', tags:['discovery','history','bass'], href:'/what-is-coachella', type:'Guide', topic:'Coachella',
    title:'What Is Coachella? 2027 Dates, Location and Music',
    description:'Two weekends every April at the Empire Polo Club in Indio: when Coachella 2027 is, how long it lasts, how a festival that lost money in 1999 grew, and what plays in the Sahara.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Festivalgoers on the grass at Coachella in 2018, palm trees and desert mountains behind them'
  },
  {
    page:'lollapalooza-festival.html', tags:['discovery','history','bass'], href:'/lollapalooza-festival', type:'Guide', topic:'Lollapalooza',
    title:'Lollapalooza Chicago: Location, History and the Music',
    description:'Four days every summer in Grant Park, Chicago: where Lollapalooza happens, how it grew from a farewell tour and what plays across its stages.',
    image:'img/lollapalooza/skyline-2017-320.webp',
    srcset:'img/lollapalooza/skyline-2017-320.webp 320w,img/lollapalooza/skyline-2017-1200.webp 1200w',
    width:1200, height:900, alt:'A Lollapalooza crowd in Grant Park with the Chicago skyline behind it in 2017'
  },
  {
    page:'glastonbury-festival.html', tags:['discovery','history','bass'], href:'/glastonbury-festival', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury Festival: 2027, Fallow Years and Headliners',
    description:'Five days most Junes at Worthy Farm in Somerset: when Glastonbury 2027 is, why there was no festival this year, where it is, how big it is, and every headliner by year.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'People on a hillside at night looking over the lit stages of Glastonbury in 2025'
  },
  {
    page:'sonar-festival-barcelona.html', tags:['discovery','history','bass'], href:'/sonar-festival-barcelona', type:'Guide', topic:'Sónar',
    title:'Sónar Festival Barcelona: History, Music and 2027 Dates',
    description:'Three days every June in Barcelona since 1994: where Sónar happens, how a festival of advanced music grew to 150,000 people, who owns it now, OFFSónar, and Sónar 2027.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'A crowd at the SonarVillage stage at Fira Montjuïc, with the Palau Nacional behind'
  },
  {
    page:'mysteryland-festival.html', tags:['discovery','history','bass'], href:'/mysteryland-festival', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland Festival: Where It Is, Its History, and 2027',
    description:'The oldest dance festival in the Netherlands by its own count, on the old Floriade grounds in Haarlemmermeer: when Mysteryland 2027 is, why it skipped 2026, who owns it, and what it plays.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland from the air in 2018, the main stage by a lake with a crowd in front of it'
  },
  {
    page:'primavera-sound-barcelona.html', tags:['discovery','history','house'], href:'/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027: Dates, Location and Music',
    description:'The Barcelona festival returns to Parc del Fòrum on 3 to 5 June 2027: its waterfront location, scale, music and city programme.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Festivalgoers gathered beside the waterfront at Primavera Sound Barcelona in 2019'
  },
  {
    page:'best-spotify-playlists.html', tags:['discovery','tools','house','bass'], href:'/best-spotify-playlists', type:'List', topic:'Spotify playlists',
    title:'Best Spotify Playlists: 12 Human-Curated Picks',
    description:'Twelve playlists with an identifiable point of view, from KEXP and Pitchfork to Four Tet, Bicep and the electronic underground.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Wired headphones, a portable music player and translucent cases on a scratched club table'
  },
  {
    page:'acid-house-guide.html', tags:['history','uk','house','techno'], href:'/acid-house-guide', type:'Guide', topic:'Acid house',
    title:'What Is Acid House? From Chicago\'s TB-303 to the UK Rave Boom',
    description:'A $40 bass machine, three friends in Chicago, a DJ who played their tape four times in a night, and the British movement that borrowed the name.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Close-up of a Roland TB-303 Bass Line panel'
  },
  {
    page:'grime-music-guide.html', tags:['uk','history','bass','jungle'], href:'/grime-music-guide', type:'Guide', topic:'Grime',
    title:'What Is Grime Music? Its Sound, History, Artists and Tracks',
    description:'Cold 140 BPM instrumentals, pirate radio, crews and clashes from East London, and the arguments about who started it.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Two Roll Deep MCs on a dark stage in New York in 2005'
  },
  {
    page:'best-electronic-music-festivals-europe.html', tags:['discovery','techno','house','history'], href:'/best-electronic-music-festivals-europe', type:'List', topic:'Europe festivals',
    title:'Best Electronic Music Festivals in Europe 2027, Compared',
    description:'Fourteen major festivals and seven smaller ones, from Tomorrowland to Garbicz, compared by sound, scale, setting and 2027 dates.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'A daytime crowd under the steel canopy of the Futur Stage at Kappa FuturFestival in Turin'
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
    page:'de/tomorrowland-festival.html', tags:['discovery','history','bass'], href:'/de/tomorrowland-festival', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland 2027: Wo es stattfindet, wie groß es ist, welche Musik läuft',
    description:'Ein Park in Boom, Belgien, den die Welt vor allem im Livestream kennt: wo Tomorrowland stattfindet, wie viele Besucher kommen, wem es gehört und was abseits der Mainstage läuft.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'Die Tomorrowland-Mainstage im Jahr 2014'
  },
  {
    page:'de/parookaville-festival.html', tags:['discovery','history','bass'], href:'/de/parookaville-festival', type:'Guide', topic:'Parookaville',
    title:'Parookaville 2027: Gelände, Geschichte, Besucherzahlen und Musik',
    description:'Ein Festival als Stadt auf dem Flughafen Weeze: wo Parookaville liegt, wie drei Freunde es aufgebaut haben, wie viele Menschen kommen und was auf den Bühnen läuft.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'Die Parookaville-Mainstage aus der Luft im Jahr 2022, davor das Publikum, am Horizont Windräder'
  },
  {
    page:'de/coachella-festival.html', tags:['discovery','history','bass'], href:'/de/coachella-festival', type:'Guide', topic:'Coachella',
    title:'Was ist Coachella? Termine 2027, Ort und Musik',
    description:'Zwei Wochenenden im April im Empire Polo Club in Indio: wann Coachella 2027 stattfindet, wo es liegt, wie aus einem Verlustgeschäft von 1999 ein Milliardenfestival wurde und was im Sahara-Zelt läuft.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Festivalbesucher auf der Wiese von Coachella 2018, dahinter Palmen und die Berge der Wüste'
  },
  {
    page:'de/mysteryland-festival.html', tags:['discovery','history','bass'], href:'/de/mysteryland-festival', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland 2027: Gelände, Geschichte und Musik',
    description:'Nach eigener Zählung das älteste Dance-Festival der Niederlande, auf dem früheren Floriade-Gelände in Haarlemmermeer: wann Mysteryland 2027 stattfindet, warum 2026 ausfiel und was gespielt wird.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland aus der Luft im Jahr 2018, die Hauptbühne an einem See, davor das Publikum'
  },
  {
    page:'de/untold-festival.html', tags:['discovery','history','bass'], href:'/de/untold-festival', type:'Guide', topic:'Untold',
    title:'Untold Festival 2027: Ort, Größe und Musik',
    description:'Vier Tage jeden August in Cluj-Napoca: wann Untold 2027 stattfindet, wo es liegt, wie daraus eine Veranstaltung mit 500.000 Eintritten wurde und was neben der Hauptbühne läuft.',
    image:'img/untold/main-stage-2019-320.webp',
    srcset:'img/untold/main-stage-2019-320.webp 320w,img/untold/main-stage-2019-1200.webp 1200w',
    width:1200, height:900, alt:'Dichtes Publikum mit Handylichtern vor der Untold-Hauptbühne bei Nacht im Jahr 2019'
  },
  {
    page:'de/glastonbury-festival.html', tags:['discovery','history','bass'], href:'/de/glastonbury-festival', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury Festival 2027: Termine, Brachjahre und Headliner',
    description:'Fünf Tage in den meisten Junis auf der Worthy Farm in Somerset: wann Glastonbury 2027 stattfindet, warum 2026 ein Brachjahr war, wie groß es ist und wer Headliner war.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'Das Glastonbury Festival bei Nacht 2025, vom Hang über dem Tal aus gesehen'
  },
  {
    page:'de/primavera-sound-barcelona.html', tags:['discovery','history','house'], href:'/de/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027: Termine, Ort und Musik',
    description:'Das Festival in Barcelona kehrt vom 3. bis 5. Juni 2027 in den Parc del Fòrum zurück: das Gelände am Meer, die Größe, die Musik und das Programm in der Stadt.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Festivalbesucher am Wasser bei Primavera Sound Barcelona 2019'
  },
  {
    page:'de/burning-man-festival.html', tags:['house','history','discovery'], href:'/de/burning-man-festival', type:'Guide', topic:'Burning Man',
    title:'Was ist Burning Man? Die Stadt in der Wüste und ihre Musik',
    description:'Eine von den Teilnehmern gebaute Stadt in der Wüste Nevadas, ohne Line-up und ohne Hauptbühne: was dort passiert, was es kostet und was die Sound-Camps wie Robot Heart spielen.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'Das Art Car von Robot Heart auf der Playa bei Burning Man'
  },
  {
    page:'de/clubs-berlin.html', tags:['techno','history','discovery'], href:'/de/clubs-berlin', type:'Guide', topic:'Clubs in Berlin',
    title:'Die besten Clubs in Berlin: Legenden und die, die noch offen sind',
    description:'Vom UFO und dem Tresor bis zum Berghain und dem Sisyphos: die Räume, die Berlin zur Techno-Stadt gemacht haben, die Clubs, die geschlossen haben, und die, die noch offen sind.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'Der Eingang des Berghain in Berlin'
  },
  {
    page:'de/clubs-paris.html', tags:['techno','history','discovery'], href:'/de/clubs-paris', type:'Guide', topic:'Clubs in Paris',
    title:'Die besten Clubs in Paris: Von Le Palace bis zum Rex Club',
    description:"Le Palace, Les Bains Douches und der Rex Club: die Clubs, die Paris' Nachtleben geprägt haben, wie jeder berühmt wurde, und die besten Clubs in Paris heute.",
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"Der Eingang des ehemaligen Nachtclubs Les Bains Douches an der 7 Rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'de/clubs-barcelona.html', tags:['techno','history','discovery'], href:'/de/clubs-barcelona', type:'Guide', topic:'Clubs in Barcelona',
    title:'Die besten Clubs in Barcelona: Von Zeleste bis Razzmatazz',
    description:'Razzmatazz, Nitsa und Macarena Club: wie Barcelonas größter Club aus einem Live-Venue der 1970er wuchs, und die besten Clubs in Barcelona heute.',
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'Die Außenansicht von Sala Razzmatazz im Stadtteil Poblenou, Barcelona'
  },
  {
    page:'de/clubs-london.html', tags:['jungle','history','discovery'], href:'/de/clubs-london', type:'Guide', topic:'Clubs in London',
    title:'Clubs in London für elektronische Musik: Geschichte und heute',
    description:'Vom Four Aces und dem Blitz bis zu Rage, dem Blue Note und fabric: die Londoner Clubs hinter Acid House, Jungle, Garage und Dubstep, und die, die heute ein Wochenende wert sind.',
    image:'img/london-clubs/fabric-320.webp',
    srcset:'img/london-clubs/fabric-320.webp 320w,img/london-clubs/fabric-1200.webp 1200w',
    width:1200, height:810, alt:'Der Eingang von fabric an der Charterhouse Street, London'
  },
  {
    page:'de/drum-and-bass.html', tags:['breaks','uk','nineties','bass'], href:'/de/drum-and-bass', type:'Guide', topic:'Drum and Bass',
    title:'Was ist Drum and Bass? 174 BPM, Geschichte und Subgenres',
    description:'Schnelle Breakbeats, tiefer Sub-Bass und das britische Rave-Kontinuum hinter einem globalen Genre: wie sich Drum and Bass vom Jungle trennte, wie es gebaut ist und wohin es ging.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size legt unter grünem Bühnenlicht auf'
  },
  {
    page:'de/dubstep.html', tags:['bass','uk','twothousands','soundsystem'], href:'/de/dubstep', type:'Guide', topic:'Dubstep',
    title:'Was ist Dubstep? Herkunft, Sound und ein Wort für zwei Genres',
    description:'Ein Wort für zwei sehr verschiedene Musiken: wie sich ein Sound aus einem Plattenladen in Croydon in zwei Hälften teilte, und was aus der Version wurde, die nie verschwand.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'Eine Schneidemaschine für Vinyl mit einer Acetatscheibe auf dem Plattenteller'
  },
  {
    page:'de/beste-spotify-playlists.html', tags:['discovery','tools','house','bass'], href:'/de/beste-spotify-playlists', type:'Liste', topic:'Spotify-Playlists',
    title:'Beste Spotify-Playlists: 12 von Menschen kuratierte Empfehlungen',
    description:'Zwölf Playlists mit erkennbarem Standpunkt, von KEXP und Pitchfork bis Four Tet, Bicep und dem elektronischen Underground.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Kabelkopfhörer, ein tragbarer Musikplayer und transparente Hüllen auf einem zerkratzten Clubtisch'
  },
  {
    page:'de/acid-house.html', tags:['history','uk','house','techno'], href:'/de/acid-house', type:'Guide', topic:'Acid House',
    title:'Was ist Acid House? Von der TB-303 in Chicago zum britischen Rave',
    description:'Eine Bassmaschine für 40 Dollar, drei Freunde in Chicago, ein DJ, der ihr Band in einer Nacht viermal spielte, und die britische Bewegung, die sich den Namen lieh.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Nahaufnahme des Bedienfelds einer Roland TB-303 Bass Line'
  },
  {
    page:'de/grime.html', tags:['uk','history','bass','jungle'], href:'/de/grime', type:'Guide', topic:'Grime',
    title:'Was ist Grime? Sound, Geschichte, Künstler und wichtige Tracks',
    description:'Kalte Instrumentals bei 140 BPM, Piratenradio, Crews und Clashes aus dem Osten Londons, und der nie beigelegte Streit darüber, wer damit anfing.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Zwei MCs von Roll Deep 2005 auf einer dunklen Bühne in New York'
  },
  {
    page:'de/electro-festivals-europa.html', tags:['discovery','techno','house','history'], href:'/de/electro-festivals-europa', type:'Liste', topic:'Festivals in Europa',
    title:'Die besten Electro-Festivals in Europa 2027 im Vergleich',
    description:'Vierzehn große und sieben kleinere Festivals, von Tomorrowland bis Garbicz, verglichen nach Sound, Größe, Umgebung und Terminen 2027.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'Publikum bei Tag unter dem Stahldach der Futur Stage beim Kappa FuturFestival in Turin'
  }
];

// The French guides, on the same terms as the German ones above: their own
// catalogue, the English guides' images with translated captions.
export const frenchArticleCatalog = [
  {
    page:'fr/festival-tomorrowland.html', tags:['discovery','history','bass'], href:'/fr/festival-tomorrowland', type:'Guide', topic:'Tomorrowland',
    title:'Tomorrowland 2027 : lieu, fréquentation, histoire et musique',
    description:'Un parc de Boom, en Belgique, que le monde connaît surtout par le livestream : où a lieu Tomorrowland, combien de personnes y vont, à qui il appartient et ce qui se joue loin de la Mainstage.',
    image:'img/tomorrowland/mainstage-2014-320.webp',
    srcset:'img/tomorrowland/mainstage-2014-320.webp 320w,img/tomorrowland/mainstage-2014-1200.webp 1200w',
    width:1200, height:708, alt:'La Mainstage de Tomorrowland en 2014'
  },
  {
    page:'fr/festival-coachella.html', tags:['discovery','history','bass'], href:'/fr/festival-coachella', type:'Guide', topic:'Coachella',
    title:'Qu’est-ce que Coachella ? Dates 2027, lieu, taille et musique',
    description:'Deux week-ends d’avril à l’Empire Polo Club d’Indio : quand a lieu Coachella 2027, où il se trouve, comment une perte de 1999 est devenue un festival géant, et ce qui se joue sous la tente Sahara.',
    image:'img/coachella/grounds-2018-320.webp',
    srcset:'img/coachella/grounds-2018-320.webp 320w,img/coachella/grounds-2018-1200.webp 1200w',
    width:1200, height:677, alt:'Des festivaliers sur la pelouse de Coachella en 2018, derrière eux des palmiers et les montagnes du désert'
  },
  {
    page:'fr/burning-man.html', tags:['house','history','discovery'], href:'/fr/burning-man', type:'Guide', topic:'Burning Man',
    title:'Qu’est-ce que Burning Man ? La ville du désert et sa musique',
    description:'Une ville construite par ses participants dans le désert du Nevada, sans affiche ni grande scène : ce qui s’y passe, ce que ça coûte et ce que jouent les sound camps comme Robot Heart.',
    image:'img/burning-man/robot-heart-320.webp',
    srcset:'img/burning-man/robot-heart-320.webp 320w,img/burning-man/robot-heart-1200.webp 1200w',
    width:1200, height:799, alt:'L’art car de Robot Heart sur la playa de Burning Man'
  },
  {
    page:'fr/festival-glastonbury.html', tags:['discovery','history','bass'], href:'/fr/festival-glastonbury', type:'Guide', topic:'Glastonbury',
    title:'Glastonbury 2027 : dates, années de jachère et têtes d’affiche',
    description:'Cinq jours la plupart des mois de juin à Worthy Farm, dans le Somerset : quand a lieu Glastonbury 2027, pourquoi 2026 était une année de jachère, sa taille et ses têtes d’affiche.',
    image:'img/glastonbury/night-2025-320.webp',
    srcset:'img/glastonbury/night-2025-320.webp 320w,img/glastonbury/night-2025-1200.webp 1200w',
    width:1200, height:800, alt:'Le festival de Glastonbury la nuit en 2025, vu de la colline au-dessus de la vallée'
  },
  {
    page:'fr/boite-de-nuit-berlin.html', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-berlin', type:'Guide', topic:'Clubs de Berlin',
    title:'Boite de nuit Berlin : les meilleurs clubs et leurs légendes',
    description:'De l’UFO et du Tresor au Berghain et au Sisyphos : les salles qui ont fait de Berlin une ville techno, les clubs célèbres qui ont fermé, et ceux qui sont encore ouverts.',
    image:'img/berlin-clubs/berghain-320.webp',
    srcset:'img/berlin-clubs/berghain-320.webp 320w,img/berlin-clubs/berghain-1200.webp 1200w',
    width:1200, height:800, alt:'L’entrée du Berghain à Berlin'
  },
  {
    page:'fr/boite-de-nuit-paris.html', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-paris', type:'Guide', topic:'Boite de nuit Paris',
    title:'Boite de nuit Paris : les meilleures boîtes, du Palace au Rex Club',
    description:"Le Palace, Les Bains Douches et le Rex Club : les boîtes qui ont façonné la nuit parisienne, comment chacune est devenue célèbre, et les meilleures boîtes de nuit à Paris aujourd'hui.",
    image:'img/paris-clubs/les-bains-douches-entrance-320.webp',
    srcset:'img/paris-clubs/les-bains-douches-entrance-320.webp 320w,img/paris-clubs/les-bains-douches-entrance-1280.webp 1280w',
    width:1280, height:1707, alt:"L'entrée de l'ancienne boîte de nuit Les Bains Douches, 7 rue du Bourg-l'Abbé, Paris"
  },
  {
    page:'fr/boite-de-nuit-barcelone.html', tags:['techno','history','discovery'], href:'/fr/boite-de-nuit-barcelone', type:'Guide', topic:'Boite de nuit Barcelone',
    title:'Boite de nuit Barcelone : les meilleures boîtes, de Zeleste à Razzmatazz',
    description:"Razzmatazz, Nitsa et Macarena Club : comment la plus grande boîte de Barcelone est née d'une salle de concerts des années 1970, et les meilleures boîtes de nuit à Barcelone aujourd'hui.",
    image:'img/barcelona-clubs/razzmatazz-exterior-320.webp',
    srcset:'img/barcelona-clubs/razzmatazz-exterior-320.webp 320w,img/barcelona-clubs/razzmatazz-exterior-1280.webp 1280w',
    width:1280, height:822, alt:'La façade de Sala Razzmatazz dans le quartier de Poblenou, Barcelone'
  },
  {
    page:'fr/primavera-sound-barcelona.html', tags:['discovery','history','house'], href:'/fr/primavera-sound-barcelona', type:'Guide', topic:'Primavera Sound',
    title:'Primavera Sound Barcelona 2027 : dates, lieu et musique',
    description:'Le festival de Barcelone revient au Parc del Fòrum du 3 au 5 juin 2027 : son site face à la mer, sa taille, sa musique et son programme en ville.',
    image:'img/primavera-sound/festival-crowd-320.webp',
    srcset:'img/primavera-sound/festival-crowd-320.webp 320w,img/primavera-sound/festival-crowd-1200.webp 1200w',
    width:1200, height:800, alt:'Des festivaliers au bord de l’eau à Primavera Sound Barcelona en 2019'
  },
  {
    page:'fr/drum-and-bass.html', tags:['breaks','uk','nineties','bass'], href:'/fr/drum-and-bass', type:'Guide', topic:'Drum and bass',
    title:'Qu’est-ce que la drum and bass ? 174 BPM, histoire et sous-genres',
    description:'Des breakbeats rapides, une sub-bass profonde et le continuum rave britannique derrière un genre mondial : comment la drum and bass s’est séparée de la jungle, comment elle est construite et où elle est allée.',
    image:'img/dnb/roni-size-320.webp',
    srcset:'img/dnb/roni-size-320.webp 320w,img/dnb/roni-size.webp 1120w',
    width:1120, height:747, alt:'Roni Size aux platines sous une lumière de scène verte'
  },
  {
    page:'fr/dubstep.html', tags:['bass','uk','twothousands','soundsystem'], href:'/fr/dubstep', type:'Guide', topic:'Dubstep',
    title:'Qu’est-ce que le dubstep ? Origines, son et deux genres, un mot',
    description:'Un mot pour deux musiques très différentes : comment un son né chez un disquaire de Croydon s’est scindé en deux, et ce qu’est devenue la version qui n’a jamais disparu.',
    image:'img/dubstep/dubplate-lathe-320.webp',
    srcset:'img/dubstep/dubplate-lathe-320.webp 320w,img/dubstep/dubplate-lathe.webp 961w',
    width:961, height:540, alt:'Un tour de gravure vinyle avec un disque acétate sur le plateau'
  },
  {
    page:'fr/festival-mysteryland.html', tags:['discovery','history','bass'], href:'/fr/festival-mysteryland', type:'Guide', topic:'Mysteryland',
    title:'Mysteryland 2027 : dates, site, histoire et musique',
    description:'Le plus ancien festival de musique électronique des Pays-Bas selon lui-même, sur l’ancien site de la Floriade : quand Mysteryland 2027 a lieu, pourquoi 2026 est en pause et ce qu’on y joue.',
    image:'img/mysteryland/site-aerial-2018-320.webp',
    srcset:'img/mysteryland/site-aerial-2018-320.webp 320w,img/mysteryland/site-aerial-2018-1200.webp 1200w',
    width:1200, height:675, alt:'Mysteryland vu du ciel en 2018, la grande scène au bord d’un lac avec le public devant'
  },
  {
    page:'fr/festival-parookaville.html', tags:['discovery','history','bass'], href:'/fr/festival-parookaville', type:'Guide', topic:'Parookaville',
    title:'Parookaville 2027 : site, fréquentation, histoire et musique',
    description:'Un festival mis en scène comme une ville sur l’aéroport de Weeze : où se trouve Parookaville, comment trois amis l’ont bâti, combien de monde y vient et ce qui passe sur ses scènes.',
    image:'img/parookaville/mainstage-aerial-2022-320.webp',
    srcset:'img/parookaville/mainstage-aerial-2022-320.webp 320w,img/parookaville/mainstage-aerial-2022-1200.webp 1200w',
    width:1200, height:900, alt:'La Mainstage de Parookaville vue du ciel en 2022, le public devant et des éoliennes à l’horizon'
  },
  {
    page:'fr/sonar-barcelone.html', tags:['discovery','history','bass'], href:'/fr/sonar-barcelone', type:'Guide', topic:'Sónar',
    title:'Sónar Barcelone : histoire, musique et dates 2027',
    description:'Trois jours chaque mois de juin à Barcelone depuis 1994, le jour et la nuit : où a lieu Sónar, comment il a grandi, à qui il appartient aujourd’hui, et Sónar 2027 du 17 au 19 juin.',
    image:'img/sonar/sonar-by-day-2016-320.webp',
    srcset:'img/sonar/sonar-by-day-2016-320.webp 320w,img/sonar/sonar-by-day-2016-1200.webp 1200w',
    width:1200, height:801, alt:'Une foule devant la scène SonarVillage à Fira Montjuïc, avec le Palau Nacional derrière'
  },
  {
    page:'fr/meilleures-playlists-spotify.html', tags:['discovery','tools','house','bass'], href:'/fr/meilleures-playlists-spotify', type:'Liste', topic:'Playlists Spotify',
    title:'Meilleures playlists Spotify : 12 sélections humaines',
    description:'Douze playlists au point de vue reconnaissable, de KEXP et Pitchfork à Four Tet, Bicep et l’underground électronique.',
    image:'img/spotify-playlists/playlist-still-life-320.webp',
    srcset:'img/spotify-playlists/playlist-still-life-320.webp 320w,img/spotify-playlists/playlist-still-life-1200.webp 1200w',
    width:1200, height:800, alt:'Un casque filaire, un lecteur de musique portable et des boîtiers translucides sur une table de club rayée'
  },
  {
    page:'fr/acid-house.html', tags:['history','uk','house','techno'], href:'/fr/acid-house', type:'Guide', topic:'Acid house',
    title:'Qu’est-ce que l’acid house ? De la TB-303 aux raves britanniques',
    description:'Une machine à basse à 40 dollars, trois amis à Chicago, un DJ qui a passé leur cassette quatre fois dans la nuit, et le mouvement britannique qui a repris le nom.',
    image:'img/acid-house/roland-tb303-1982-320.webp',
    srcset:'img/acid-house/roland-tb303-1982-320.webp 320w,img/acid-house/roland-tb303-1982-1200.webp 1200w',
    width:1200, height:800, alt:'Gros plan sur le panneau d’une Roland TB-303 Bass Line'
  },
  {
    page:'fr/grime.html', tags:['uk','history','bass','jungle'], href:'/fr/grime', type:'Guide', topic:'Grime',
    title:'Le grime, c’est quoi ? Son, histoire, artistes et morceaux clés',
    description:'Des instrumentaux froids à 140 BPM, la radio pirate, les crews et les clashs de l’est de Londres, et la dispute jamais tranchée sur qui l’a lancé.',
    image:'img/grime/wiley-flowdan-2005-320.webp',
    srcset:'img/grime/wiley-flowdan-2005-320.webp 320w,img/grime/wiley-flowdan-2005-1200.webp 1200w',
    width:1200, height:796, alt:'Deux MC de Roll Deep sur une scène sombre à New York en 2005'
  },
  {
    page:'fr/festivals-electro-europe.html', tags:['discovery','techno','house','history'], href:'/fr/festivals-electro-europe', type:'Liste', topic:'Festivals en Europe',
    title:'Les meilleurs festivals électro en Europe en 2027, comparés',
    description:'Quatorze grands festivals et sept plus petits, de Tomorrowland à Garbicz, comparés par son, taille, cadre et dates 2027.',
    image:'img/europe-festivals/kappa-futurfestival-2025-320.webp',
    srcset:'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w,img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
    width:1200, height:900, alt:'Un public en plein jour sous la charpente d’acier de la Futur Stage au Kappa FuturFestival, à Turin'
  }
];

export const catalogs = {en: homeArticleCatalog, de: germanArticleCatalog, fr: frenchArticleCatalog};

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
// reordering the catalogue by hand. Same-day ties go to the entry added to the
// catalogue later. Read Next keeps catalogue order: its tie-breaking and card
// numbers depend on it, and they should not shift every time something is
// published.
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

// Every article, newest first, for the /articles page. Each carries its
// catalogue-position number, the same one Read Next shows.
export function allArticlesNewestFirst(lang = 'en') {
  const published = item => {
    if (!fs.existsSync(item.page)) return '9999-12-31';
    const date = fs.readFileSync(item.page, 'utf8').match(/article:published_time" content="([^"]+)"/)?.[1];
    if (!date) throw new Error(`Could not read the publication date from ${item.page}`);
    return date;
  };
  return homeArticlesWithReadingTimes(lang)
    .map((item, index) => ({item:{...item, number:`A${String(index + 1).padStart(2, '0')}`}, index, date: published(item)}))
    .sort((a, b) => b.date.localeCompare(a.date) || b.index - a.index)
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
  const all = homeArticlesWithReadingTimes(lang)
    .map((item, index) => ({...item, number:`A${String(index + 1).padStart(2, '0')}`}));
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
