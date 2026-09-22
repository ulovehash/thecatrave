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
  {page: 'untold-festival.html', heading: 'Untold 2027', ends: '2027-08-08'},
  {page: 'what-is-coachella.html', heading: 'Coachella 2027', ends: '2027-04-18'},
  // Expected 29 July to 1 August 2027 from listings; null until the festival
  // confirms, so the build keeps reminding.
  {page: 'lollapalooza-festival.html', heading: 'Lollapalooza 2027', ends: null},
  {page: 'glastonbury-festival.html', heading: 'Glastonbury 2027', ends: '2027-06-27'},
  {page: 'tomorrowland-festival.html', heading: 'Tomorrowland 2027', ends: null},
  {page: 'edc-las-vegas.html', heading: 'EDC Las Vegas 2027', ends: '2027-05-23'},
  {page: 'what-is-burning-man.html', heading: 'Burning Man 2027', ends: '2027-09-06'},
  {page: 'parookaville-festival.html', heading: 'Parookaville 2027', ends: '2027-07-18'},
  // Miami ends first; the block has to be rewritten once it has happened, even
  // though Ultra Europe (9 to 11 July) is still ahead.
  {page: 'ultra-music-festival.html', heading: 'Ultra Miami 2027 and Ultra Europe 2027', ends: '2027-03-28'},
  {page: 'creamfields-festival.html', heading: 'Creamfields 2027', ends: '2027-08-29'},
  {page: 'sonar-festival-barcelona.html', heading: 'Sónar 2027', ends: '2027-06-19'},
  // The Europe comparison carries fourteen festivals. null while any of them
  // has no 2027 date (Tomorrowland, Dekmantel and Monegros on 2026-09-22);
  // once all are confirmed, set it to the last one to end (Creamfields and
  // Mysteryland, 29 August 2027), then roll the page to 2028.
  {page: 'best-electronic-music-festivals-europe.html', heading: '2027 dates at a glance', ends: null}
];
