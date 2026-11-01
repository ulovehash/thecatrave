// Build best-edm-festivals-canada.html from best-edm-festivals-canada-draft.md.
//
// Intent: current choice, by province. No independent roundup ranked for this
// in Canada (keywords/best-edm-festivals-canada.json). Igloofest stays in the
// winter guide and is linked, not covered.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('canada-festivals');

buildRoundup({
  file: 'best-edm-festivals-canada.html',
  path: '/best-edm-festivals-canada',
  draftFile: 'best-edm-festivals-canada-draft.md',
  title: 'Best EDM Festivals in Canada 2027: VELD, Shambhala, Ile Soniq',
  description: 'The best EDM festivals in Canada for 2027, with dates, cities and sound, from VELD in Toronto and Shambhala in BC to Ile Soniq in Montreal.',
  date: '2026-10-31',
  dateLabel: '31 October 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best EDM festivals in Canada in 2027',
  deck: 'Canadian EDM festivals compared by province, sound and scale, from city parks in Toronto and Montreal to camping weekends in British Columbia, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best EDM festivals in Canada',
  answer: 'The best EDM festivals in Canada for 2027 are VELD in Toronto (30 July to 1 August), Ile Soniq in Montreal (listed for 7 and 8 August) and Shambhala in British Columbia (23 to 26 July, sold out). For a smaller camping festival, go to Bass Coast (9 to 12 July). For experimental electronic music, go to MUTEK in Montreal (24 to 29 August).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Canadian EDM festivals FAQ.',
  breadcrumb: 'Best EDM Festivals in Canada',
  ogName: 'canada-festivals',
  bodyClass: 'canada-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Canadian EDM festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest EDM festival in Canada?', 'biggest', 'The biggest EDM festival'],
    ['Toronto and Ontario', 'ontario', 'Toronto and Ontario'],
    ['Montreal and Quebec', 'quebec', 'Montreal and Quebec'],
    ['British Columbia', 'british-columbia', 'British Columbia'],
    ['Ottawa and Calgary', 'ottawa-calgary', 'Ottawa and Calgary'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Canadian EDM festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Best for'],
    rows: [
      ['Electric Island', 'Toronto, Ontario', 'Not announced (May to August in 2026)', 'Electronic', 'A season of day events', 'A day out in the city'],
      ['Escapade', 'Ottawa, Ontario', 'Not announced (26 to 28 June in 2026)', 'EDM', 'Three days in 2026', 'A weekend in Ottawa'],
      ['Bass Coast', 'Merritt, BC', '9 to 12 July', 'Bass music and electronic', 'Five stages, 150+ artists', 'An independent camping weekend'],
      ['FVDED in the Park', 'Surrey, BC', 'July, days not announced', 'EDM and hip-hop', 'Two days', 'A big stage near Vancouver'],
      ['Shambhala', 'Salmo, BC', '23 to 26 July (sold out)', 'Bass music and electronic', '23,500 on site', 'A long camping weekend'],
      ['VELD', 'Toronto, Ontario', '30 July to 1 August', 'Big-stage EDM', 'Three days, no official figure', 'Headliners in Ontario'],
      ['Chasing Summer', 'Calgary, Alberta', 'Listed 31 July to 1 August', 'EDM', 'About 30,000 a year (2023 report)', 'A summer weekend in Alberta'],
      ['Ile Soniq', 'Montreal, Quebec', 'Listed 7 to 8 August', 'Big-stage EDM and hip-hop', '76,000 over two days in 2025', 'Headliners in a city park'],
      ['MUTEK', 'Montreal, Quebec', '24 to 29 August', 'Experimental electronic', 'Six days', 'Listening closely'],
      ['Piknic Électronik', 'Montreal, Quebec', 'Not announced (May to October in 2026)', 'House, techno', 'A season of parties', 'A Sunday in the park']
    ]
  },
  media: {
    ilesoniq: fig('ilesoniq-bynon-2018', 1200, 802,
      'Bynon performing at Ile Soniq in Montreal in August 2018',
      'Bynon at Ile Soniq in Montreal, August 2018. Photograph: Kylefowlermtl, CC BY-SA 4.0.'),
    veld: fig('veld-deadmau5-2016', 1200, 749,
      'deadmau5 on stage at VELD Music Festival in Toronto in July 2016',
      'deadmau5 at VELD in July 2016. Photograph: Visualbass Photography, CC BY-SA 2.0.'),
    mutek: fig('mutek-2015', 1200, 900,
      'A festivalgoer on the lawn in front of the MUTEK stage in Montreal in May 2015',
      'MUTEK in Montreal, May 2015. Photograph: Jeangagnon, CC BY-SA 3.0.'),
    piknic: fig('piknic-electronik-2016', 1200, 900,
      "Calder's sculpture L'Homme in Parc Jean-Drapeau during Piknic Électronik in July 2016, with a speaker stack on the left",
      'Piknic Électronik at Parc Jean-Drapeau in July 2016. Photograph: Jeangagnon, CC BY-SA 4.0.'),
    shambhala: fig('shambhala-2003', 1200, 900,
      'A DJ at the decks in the trees at Shambhala Music Festival in 2003',
      'A DJ at Shambhala in August 2003. Photograph: Nelson Becker, Touchstones Nelson, public domain.'),
    ternion: singleSet({
      label: 'Bass Coast, heard from home',
      description: 'Ternion Sound at Bass Coast 2025, filmed by the festival.',
      youtubeId: 'D68S0Mg6aBc', genre: 'Bass Coast, 2025', artist: 'Ternion Sound', title: 'Live at Bass Coast'
    })
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own pages: <a href="https://www.shambhalamusicfestival.com/" target="_blank" rel="noopener noreferrer">Shambhala</a>, <a href="https://www.basscoast.ca/" target="_blank" rel="noopener noreferrer">Bass Coast</a>, <a href="https://montreal.mutek.org/" target="_blank" rel="noopener noreferrer">MUTEK</a>, <a href="https://www.veldmusicfestival.com/" target="_blank" rel="noopener noreferrer">VELD</a> and <a href="https://veld.frontgatetickets.com/" target="_blank" rel="noopener noreferrer">its ticket page</a>, <a href="https://www.fvdedinthepark.com/" target="_blank" rel="noopener noreferrer">FVDED in the Park</a> (month only).</li>
<li>2026 dates, with 2027 not announced: <a href="https://www.piknicelectronik.com/" target="_blank" rel="noopener noreferrer">Piknic Électronik</a>, <a href="https://613today.ca/events/2026-06-26-escapade-music-festival" target="_blank" rel="noopener noreferrer">Escapade</a>, <a href="https://nowtoronto.com/event/electric-island-2026-season-opener/" target="_blank" rel="noopener noreferrer">Electric Island</a>.</li>
<li>Listed dates: Live Nation, Ticketmaster and Discotech (Ile Soniq), Frontstage (Chasing Summer).</li>
<li>Scale: <a href="https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/" target="_blank" rel="noopener noreferrer">Montreal Times, with figures supplied by the festival</a> (Ile Soniq 2025), <a href="https://www.shambhalamusicfestival.com/about" target="_blank" rel="noopener noreferrer">Shambhala</a>, <a href="https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023" target="_blank" rel="noopener noreferrer">Daily Hive</a> (Chasing Summer).</li>
<li>Poll rank: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
</ul>`
});
