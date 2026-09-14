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
  {page: 'tomorrowland-festival.html', heading: 'Tomorrowland 2027', ends: null},
  {page: 'edc-las-vegas.html', heading: 'EDC Las Vegas 2027', ends: '2027-05-23'},
  {page: 'what-is-burning-man.html', heading: 'Burning Man 2027', ends: '2027-09-06'},
  {page: 'parookaville-festival.html', heading: 'Parookaville 2027', ends: '2027-07-18'},
  // Miami ends first; the block has to be rewritten once it has happened, even
  // though Ultra Europe (9 to 11 July) is still ahead.
  {page: 'ultra-music-festival.html', heading: 'Ultra Miami 2027 and Ultra Europe 2027', ends: '2027-03-28'},
  {page: 'creamfields-festival.html', heading: 'Creamfields 2027', ends: '2027-08-29'}
];
