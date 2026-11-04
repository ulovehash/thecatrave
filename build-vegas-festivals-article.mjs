// Build best-edm-festivals-las-vegas.html from best-edm-festivals-las-vegas-draft.md.
//
// Intent: current choice, regional. Targets "edm festivals las vegas" and the
// terms in keywords/best-edm-festivals-las-vegas.json. EDC itself sits in
// edc-las-vegas (its keywords are taken); this page gives it one short linked
// entry and covers the other festivals in Las Vegas and within driving distance.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// unannounced dates are published and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('vegas-festivals');
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

buildRoundup({
  file: 'best-edm-festivals-las-vegas.html',
  path: '/best-edm-festivals-las-vegas',
  draftFile: 'best-edm-festivals-las-vegas-draft.md',
  title: 'Best EDM Festivals Las Vegas 2027: EDC, Breakaway, Goldrush',
  description: 'EDM festivals in Las Vegas for 2027: EDC in May, Breakaway at the Wynn in June, and the festivals a drive away in California, Arizona and Utah, with dates.',
  date: '2026-11-03',
  dateLabel: '3 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best EDM festivals in and around Las Vegas in 2027',
  deck: 'EDC and Breakaway in the city, and the festivals within driving distance in Southern California, Arizona and Utah, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best EDM festivals in Las Vegas',
  answer: 'The big Vegas EDM festival is EDC Las Vegas, at the Las Vegas Motor Speedway on 14 to 16 May and 21 to 23 May 2027. Breakaway holds a weekend at the Wynn each June. Within driving distance: Beyond Wonderland (26 and 27 March 2027), Nocturnal Wonderland and Escape Halloween (29 and 30 October 2027) in San Bernardino, Lightning in a Bottle (26 to 30 May 2027), Goldrush in Arizona (10 and 11 September 2027) and Das Energi in Utah (6 to 8 August 2027).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'EDM festivals in Las Vegas FAQ.',
  breadcrumb: 'Best EDM Festivals Las Vegas',
  ogName: 'vegas-festivals',
  bodyClass: 'vegas-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['EDM festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest EDM festival in Vegas?', 'biggest', 'The biggest EDM festival in Vegas'],
    ['Which EDM festivals in Vegas are there besides EDC?', 'besides-edc', 'Besides EDC'],
    ['What EDM events are happening in Las Vegas?', 'events', 'EDM events in Las Vegas'],
    ['EDM festivals within driving distance in California', 'california', 'California'],
    ['Which EDM festivals are in Arizona and Utah?', 'arizona-utah', 'Arizona and Utah'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'EDM festivals in and around Las Vegas, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Best for'],
    rows: [
      ['Beyond Wonderland', 'San Bernardino, CA', '26 and 27 March', 'Events center', 'The spring opener'],
      ['EDC Las Vegas', 'Las Vegas', '14 to 16 and 21 to 23 May', 'Motor speedway', 'The biggest one'],
      ['Lightning in a Bottle', 'Kern County, CA', '26 to 30 May', 'Lakeside camping', 'Five days camping'],
      ['Breakaway Vegas Takeover', 'Las Vegas', 'Not announced (12 to 14 June in 2026)', 'Resort day club and nightclub', 'A Vegas weekend in June'],
      ['HARD Summer', 'Inglewood, CA', 'Not announced (1 and 2 August in 2026)', 'Outdoor site', 'Los Angeles in summer'],
      ['Das Energi', 'Magna, near Salt Lake City', '6 to 8 August', 'Concert venue', 'Utah'],
      ['Splash House', 'Palm Springs, CA', 'Not announced (7 to 9 and 14 to 16 August in 2026)', 'Hotel pools', 'A pool party'],
      ['Goldrush', 'Chandler, AZ', '10 and 11 September', 'Western town', 'Arizona'],
      ['Nocturnal Wonderland', 'San Bernardino, CA', 'Not announced (19 and 20 September in 2026)', 'Regional park, camping', 'Camping in September'],
      ['CRSSD', 'San Diego', 'Not announced (spring); 26 and 27 September in 2026', 'Waterfront park', 'A waterfront weekend'],
      ['Escape Halloween', 'San Bernardino, CA', '29 and 30 October', 'Events center', 'Halloween in costume']
    ]
  },
  media: {
    edc: singleSet({
      label: 'EDC Las Vegas, heard from home',
      description: "Kaskade's set at EDC Las Vegas in 2026, published by Insomniac.",
      youtubeId: 'l5wro3bMZWc', genre: 'EDC Las Vegas', artist: 'Kaskade', title: 'Live at EDC Las Vegas 2026'
    }),
    lib: fig('lightning-in-a-bottle-2011', 1200, 900,
      'A wooden A-frame stage hung with fabric at Lightning in a Bottle in 2011',
      'The Woogie stage at Lightning in a Bottle in 2011. Photograph: Adam Wiggins, CC BY 2.0.'),
    escape: fig('escape-halloween-2022', 1200, 803,
      'A crowd with flags and raised hands in front of an indoor stage with flames at Escape Halloween in 2022',
      'Pyrotechnics during a DJ set on an indoor stage at Escape Halloween 2022, NOS Events Center, San Bernardino. Photograph: Scott Randall (SoCalNomad), CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: ${a('https://lasvegas.edc.com/', 'EDC Las Vegas')}, ${a('https://socal.beyondwonderland.com/', 'Beyond Wonderland')}, ${a('https://lightninginabottle.org/', 'Lightning in a Bottle')}, ${a('https://relentlessbeats.com/events/goldrush-2027-rawhide-event-center-091027', 'Goldrush')}, ${a('https://dasenergifestival.com/info-faq', 'Das Energi')}, ${a('https://escapehalloween.com/', 'Escape Halloween')}, ${a('https://relentlessbeats.com/events/system-overload-2027-rawhide-event-center-022627', 'System Overload')}.</li>
<li>EDC's size: ${a('https://press.insomniac.com/festival-assets/electric-daisy-carnival', 'Insomniac press')}.</li>
<li>Past editions and age limits: ${a('https://nocturnalwonderland.com/travel/location', 'Nocturnal Wonderland')}, ${a('https://escapehalloween.com/info/faq', 'Escape Halloween FAQ')}, ${a('https://hardsummer.com/', 'HARD Summer')}, ${a('https://crssdfest.com/', 'CRSSD')}, ${a('https://www.splashhouse.com/faq', 'Splash House')}, ${a('https://lightninginabottle.org/info-faq', 'Lightning in a Bottle FAQ')}, ${a('https://socal.beyondwonderland.com/info/faq', 'Beyond Wonderland FAQ')}, ${a('https://relentlessbeats.com/', 'Relentless Beats')}.</li>
<li>Breakaway Vegas Takeover 2026: ${a('https://www.edmtunes.com/2026/05/breakaway-vegas-takeover/', 'EDMTunes')} and ${a('https://www.breakawayfestival.com/', 'Breakaway')}.</li>
<li>Splash House 2026 venues: ${a('https://edmidentity.com/2026/02/10/splash-house-2026-dates-new-venue/', 'EDM Identity')}. HARD Summer venue: ${a('https://djlifemag.com/2026/01/hard-summer-returns-to-hollywood-park-26-edition/', 'DJ Life')} and ${a('https://www.8newsnow.com/law-vegas-now/5-edm-festivals-within-driving-distance-of-las-vegas/amp/', '8 News Now')}.</li>
<li>Las Vegas clubs: ${a('https://www.visitlasvegas.com/experience/post/your-guide-to-the-best-edm-parties-and-festivals-in-las-vegas/', 'Visit Las Vegas')}.</li>
<li>Tomorrowland Las Vegas: ${a('https://www.technoairlines.com/blog/tomorrowland-las-vegas-2027', 'Techno Airlines')}. UNITY and EDC: this site's guides, linked above, which cite their own sources.</li>
</ul>`
});
