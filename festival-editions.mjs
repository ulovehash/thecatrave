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
  // Dekmantel: on 2026-10-02 the official site had not confirmed 2027 Amsterdam
  // dates (listings say 28 July to 1 August). Set to 1 August 2027 once confirmed.
  {page: 'dekmantel-festival.html', heading: 'When is Dekmantel 2027?', ends: null},
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
  // The German and French translations carry the same dates and roll with the
  // English page.
  {page: 'de/electro-festivals-europa.html', heading: 'Termine 2027 im Überblick', ends: null},
  {page: 'fr/festivals-electro-europe.html', heading: 'Les dates 2027 en un coup d’œil', ends: null},
  {page: 'es/festivales-musica-electronica-europa.html', heading: 'Las fechas de 2027 de un vistazo', ends: null},
  // New Year's Eve moves on every January: rewrite the table and the heading
  // for the next New Year once this one has passed.
  {page: 'new-years-eve-festivals.html', heading: "New Year's Eve 2026", ends: '2027-01-01'},
  // The translations roll with the English page.
  {page: 'de/silvester-rave.html', heading: 'Silvester 2026', ends: '2027-01-01'},
  {page: 'fr/festival-nouvel-an.html', heading: 'Nouvel An 2026', ends: '2027-01-01'},
  {page: 'es/festivales-nochevieja.html', heading: 'Nochevieja 2026: los festivales y sus fechas', ends: '2027-01-01'}
];
