// The next edition each festival guide carries, and the day it ends.
//
// The owner, 14 September 2026: every festival guide targets "<festival> <next
// year>" and the block is refreshed every year (festivals-series.md). Once an
// edition's last day has passed, its block describes the past, and
// audit-festival-editions.mjs says so on every build until the block and this
// file move to the following year. `ends` is null while the dates are not
// announced; the audit reminds about those too. Dates are from each festival's
// official site, read on 2026-09-14.
export const festivalEditions = [
  {page: 'sziget-festival.html', heading: 'Sziget Festival 2027', ends: '2027-08-14'},
  {page: 'boomtown-festival.html', heading: 'Boomtown 2027', ends: '2027-08-15'},
  {page: 'monegros-desert-festival.html', heading: 'Monegros Desert Festival 2027', ends: '2027-07-31'},
  {page: 'arc-music-festival.html', heading: 'ARC Music Festival 2027', ends: null},
  {page: 'airbeat-one-festival.html', heading: 'Airbeat One 2027', ends: '2027-07-11'},
  {page: 'untold-festival.html', heading: 'Untold 2027', ends: '2027-08-08'},
  // The French translation carries the same dates and rolls with the English
  // page.
  {page: 'fr/festival-untold.html', heading: 'Untold 2027', ends: '2027-08-08'},
  {page: 'what-is-coachella.html', heading: 'Coachella 2027', ends: '2027-04-18'},
  // Expected 29 July to 1 August 2027 from listings; null until the festival
  // confirms, so the build keeps reminding.
  {page: 'lollapalooza-festival.html', heading: 'Lollapalooza 2027', ends: null},
  {page: 'glastonbury-festival.html', heading: 'Glastonbury 2027', ends: '2027-06-27'},
  {page: 'tomorrowland-festival.html', heading: 'Tomorrowland 2027', ends: null},
  {page: 'edc-las-vegas.html', heading: 'EDC Las Vegas 2027', ends: '2027-05-23'},
  {page: 'de/edc-las-vegas.html', heading: 'EDC Las Vegas 2027', ends: '2027-05-23'},
  {page: 'fr/edc-las-vegas.html', heading: 'EDC Las Vegas 2027', ends: '2027-05-23'},
  {page: 'what-is-burning-man.html', heading: 'Burning Man 2027', ends: '2027-09-06'},
  {page: 'parookaville-festival.html', heading: 'Parookaville 2027', ends: '2027-07-18'},
  // Miami ends first; the block has to be rewritten once it has happened, even
  // though Ultra Europe (9 to 11 July) is still ahead.
  {page: 'ultra-music-festival.html', heading: 'Ultra Miami 2027 and Ultra Europe 2027', ends: '2027-03-28'},
  // The German and French translations carry the same dates and roll with the
  // English page.
  {page: 'de/ultra-music-festival.html', heading: 'Ultra Miami 2027 und Ultra Europe 2027', ends: '2027-03-28'},
  {page: 'fr/ultra-music-festival.html', heading: 'Ultra Miami 2027 et Ultra Europe 2027', ends: '2027-03-28'},
  {page: 'creamfields-festival.html', heading: 'Creamfields 2027', ends: '2027-08-29'},
  {page: 'de/creamfields-festival.html', heading: 'Creamfields 2027', ends: '2027-08-29'},
  {page: 'fr/festival-creamfields.html', heading: 'Creamfields 2027', ends: '2027-08-29'},
  {page: 'sonar-festival-barcelona.html', heading: 'Sónar 2027', ends: '2027-06-19'},
  {page: 'de/sonar-festival-barcelona.html', heading: 'Sónar 2027', ends: '2027-06-19'},
  // The Europe comparison carries fourteen festivals and seven smaller ones.
  // null while any of them has no 2027 date (on 2026-09-22: Tomorrowland,
  // Dekmantel, Monegros, Garbicz, Houghton, Draaimolen, Freerotation, and
  // Waking Life unconfirmed on its own site); once all are confirmed, set it
  // to the last one to end (Draaimolen, early September), then roll the page
  // to 2028. Fusion returns in 2028 (28 June to 2 July).
  {page: 'best-electronic-music-festivals-europe.html', heading: '2027 dates at a glance', ends: null},
  // US twin of the Europe page. On 2026-10-02 only EDC, Ultra, Movement and the
  // three Beyond Wonderland editions had 2027 dates; null until every festival
  // on the page has confirmed, then set to the last to end and roll to 2028.
  // Dekmantel: confirmed on dekmantel.com on 2026-11-02 for 29 July to 2 August
  // 2027 (an earlier listing of 28 July to 1 August was wrong).
  {page: 'dekmantel-festival.html', heading: 'When is Dekmantel 2027?', ends: '2027-08-02'},
  {page: 'best-winter-music-festivals.html', heading: 'Winter festival dates for 2027 at a glance', ends: null},
  // Dates unannounced on 2026-10-04; null until the festival publishes them.
  // Ultra Japan 2027 is dated (18 and 19 September); most others unannounced on 2026-10-04.
  {page: 'best-electronic-music-festivals-asia.html', heading: 'The festivals at a glance', ends: null},
  {page: 'electric-forest-festival.html', heading: 'Electric Forest 2027 dates', ends: null},
  // Fusion has no 2027 edition (a Fusion-free year); the next one is 28 June to 2 July 2028.
  {page: 'fusion-festival.html', heading: 'Fusion Festival 2027 and 2028', ends: '2028-07-02'},
  {page: 'defqon-1.html', heading: 'Defqon.1 2027 dates', ends: '2027-06-27'},
  {page: 'time-warp-festival.html', heading: 'When is Time Warp 2027?', ends: '2027-04-04'},
  {page: 'snowbombing-festival.html', heading: 'When is Snowbombing 2027?', ends: '2027-04-10'},
  {page: 'best-edm-festivals-usa.html', heading: 'US EDM festival dates for 2027 at a glance', ends: null},
  {page: 'best-techno-festivals.html', heading: 'Techno festival dates for 2027 at a glance', ends: null},
  {page: 'best-psytrance-festivals.html', heading: 'Psytrance festival dates for 2027 at a glance', ends: null},
  {page: 'best-edm-festivals-canada.html', heading: 'Canadian EDM festival dates for 2027 at a glance', ends: null},
  {page: 'best-edm-festivals-australia.html', heading: 'Australian EDM festival dates for 2027 at a glance', ends: null},
  {page: 'best-dance-music-festivals-uk.html', heading: 'UK dance festival dates for 2027 at a glance', ends: null},
  {page: 'best-music-festivals-amsterdam.html', heading: 'Amsterdam music festival dates for 2027 at a glance', ends: null},
  {page: 'best-drum-and-bass-festivals.html', heading: 'Drum and bass festival dates for 2027 at a glance', ends: null},
  {page: 'best-electronic-music-festivals-germany.html', heading: 'German electronic festival dates for 2027 at a glance', ends: null},
  {page: 'best-music-festivals-croatia.html', heading: 'Croatia music festival dates for 2027 at a glance', ends: null},
  {page: 'best-house-music-festivals.html', heading: 'House music festival dates for 2027 at a glance', ends: null},
  {page: 'best-edm-festivals-world.html', heading: "World's biggest EDM festival dates for 2027 at a glance", ends: null},
  {page: 'best-edm-festivals-las-vegas.html', heading: "EDM festival dates for 2027 at a glance", ends: null},
  {page: 'best-bass-music-festivals.html', heading: "Bass music festival dates for 2027 at a glance", ends: null},
  {page: 'best-electronic-music-festivals-portugal.html', heading: "Portugal electronic music festival dates for 2027 at a glance", ends: null},
  {page: 'best-edm-festivals-mexico.html', heading: "Mexico EDM festival dates for 2027 at a glance", ends: null},
  // The German and French translations carry the same dates and roll with the
  // English page.
  {page: 'de/electro-festivals-europa.html', heading: 'Termine 2027 im Überblick', ends: null},
  {page: 'fr/festivals-electro-europe.html', heading: 'Les dates 2027 en un coup d’œil', ends: null},
  {page: 'es/festivales-musica-electronica-europa.html', heading: 'Las fechas de 2027 de un vistazo', ends: null},
  {page: 'de/festivals-elektronische-musik-asien.html', heading: 'Die Festivals im Überblick', ends: null},
  {page: 'fr/festivals-musique-electronique-asie.html', heading: 'Les festivals en un coup d’œil', ends: null},
  {page: 'es/festivales-musica-electronica-asia.html', heading: 'Los festivales de un vistazo', ends: null},
  {page: 'de/winterfestivals.html', heading: 'Die Termine der Winterfestivals 2027 im Überblick', ends: null},
  {page: 'fr/festivals-hiver.html', heading: 'Les dates des festivals d’hiver 2027 en un coup d’œil', ends: null},
  {page: 'es/festivales-invierno.html', heading: 'Las fechas de los festivales de invierno de 2027 de un vistazo', ends: null},
  {page: 'de/edm-festivals-usa.html', heading: 'Die Termine 2027 im Überblick', ends: null},
  {page: 'de/edm-festivals-kanada.html', heading: 'Die Termine der EDM-Festivals in Kanada 2027 im Überblick', ends: null},
  {page: 'de/edm-festivals-australien.html', heading: 'Termine der EDM-Festivals in Australien 2027 im Überblick', ends: null},
  {page: 'de/techno-festivals.html', heading: 'Termine der Techno Festivals 2027 im Überblick', ends: null},
  {page: 'de/electric-forest-festival.html', heading: 'Termine für Electric Forest 2027', ends: null},
  {page: 'de/dekmantel-festival.html', heading: 'Wann ist Dekmantel 2027?', ends: '2027-08-02'},
  {page: 'de/psytrance-festivals.html', heading: 'Die Termine der Psytrance-Festivals 2027 im Überblick', ends: null},
  {page: 'fr/festivals-edm-etats-unis.html', heading: 'Les dates 2027 en un coup d’œil', ends: null},
  {page: 'fr/festivals-edm-canada.html', heading: 'Les dates des festivals EDM au Canada en 2027 en un coup d’œil', ends: null},
  {page: 'fr/festivals-edm-australie.html', heading: 'Dates des festivals EDM en Australie 2027 en un coup d’œil', ends: null},
  {page: 'fr/festivals-psytrance.html', heading: 'Les dates des festivals psytrance 2027 en un coup d’œil', ends: null},
  {page: 'es/festivales-edm-estados-unidos.html', heading: 'Las fechas de 2027 de un vistazo', ends: null},
  {page: 'es/festivales-musica-electronica-mexico.html', heading: 'Las fechas de 2027 de un vistazo', ends: null},
  {page: 'es/festivales-edm-canada.html', heading: 'Las fechas de los festivales EDM en Canadá en 2027 de un vistazo', ends: null},
  {page: 'es/festivales-edm-australia.html', heading: 'Fechas de los festivales EDM en Australia 2027 de un vistazo', ends: null},
  {page: 'es/festivales-psytrance.html', heading: 'Las fechas de los festivales de psytrance 2027 de un vistazo', ends: null},
  // New Year's Eve moves on every January: rewrite the table and the heading
  // for the next New Year once this one has passed.
  {page: 'new-years-eve-festivals.html', heading: "New Year's Eve 2026", ends: '2027-01-01'},
  // The translations roll with the English page.
  {page: 'de/silvester-rave.html', heading: 'Silvester 2026', ends: '2027-01-01'},
  {page: 'fr/festival-nouvel-an.html', heading: 'Nouvel An 2026', ends: '2027-01-01'},
  {page: 'es/festivales-nochevieja.html', heading: 'Nochevieja 2026: los festivales y sus fechas', ends: '2027-01-01'},
  // Summer roundup, added 2026-11-10: Tomorrowland, Electric Forest, HARD Summer,
  // Freerotation, Waking Life and The Great Beyond had no 2027 dates yet.
  {page: 'best-summer-electronic-music-festivals.html', heading: 'Summer festival dates for 2027 at a glance', ends: null},
];
