// Build best-edm-festivals-australia.html from best-edm-festivals-australia-draft.md.
//
// Intent: current choice, by state and season. "music festivals in australia"
// and city terms belong to the listing sites and are left out
// (keywords/best-edm-festivals-australia.json).
//
// Maintenance: registered in festival-editions.mjs with ends: null. The season
// crosses New Year, so the table carries years. Refresh after each November
// and New Year edition announces its next dates.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('australia-festivals');

buildRoundup({
  file: 'best-edm-festivals-australia.html',
  path: '/best-edm-festivals-australia',
  draftFile: 'best-edm-festivals-australia-draft.md',
  title: 'Best EDM Festivals in Australia 2027: Beyond the Valley, Pitch',
  description: 'The best EDM festivals in Australia for 2027, with dates, states and sound, from Beyond the Valley and Pitch to Strawberry Fields and Ultra Australia.',
  date: '2026-10-31',
  dateLabel: '31 October 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best EDM festivals in Australia in 2027',
  deck: 'Australian EDM festivals compared by state, sound and season, from New Year in Victoria to the Grampians in March, with the dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best EDM festivals in Australia',
  answer: 'The best EDM festivals in Australia are Beyond the Valley in Victoria (28 December 2026 to 1 January 2027, sold out), Pitch at the foot of the Grampians (5 to 9 March 2027, sold out) and Strawberry Fields near Tocumwal (listed for 20 to 22 November 2026). Lost Paradise near Sydney is the New Year alternative, also sold out, Dreamstate is the big rave in February, and Ultra Australia is on 17 and 18 April 2027.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Australian EDM festivals FAQ.',
  breadcrumb: 'Best EDM Festivals in Australia',
  ogName: 'australia-festivals',
  bodyClass: 'australia-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Australian EDM festival dates for 2027 at a glance', 'at-a-glance', 'Dates at a glance'],
    ['What is the biggest EDM festival in Australia?', 'biggest', 'The biggest EDM festival'],
    ['What are the biggest raves in Australia?', 'raves', 'The biggest raves'],
    ['Melbourne and Victoria', 'victoria', 'Melbourne and Victoria'],
    ['Which festivals are for house and techno?', 'house-techno', 'House and techno'],
    ['Is Ultra back in Australia?', 'ultra', 'Ultra Australia'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Australian EDM festivals compared, 2026 to 2027',
    headers: ['Festival', 'Where', 'Next dates', 'Sound', 'Stay', 'Best for'],
    rows: [
      ['Subsonic', 'Monkerai, NSW', '13 to 15 November 2026', 'Electronic, four stages', 'Camping', 'A bush weekend'],
      ['Strawberry Fields', 'Tocumwal, NSW', '20 to 22 November 2026 (listed)', 'Electronic', 'Camping', 'The Murray in spring'],
      ['Beyond the Valley', 'Hesse, Victoria', '28 December 2026 to 1 January 2027 (sold out)', 'EDM and wider', 'Camping', 'The biggest New Year'],
      ['Lost Paradise', 'Glenworth Valley, NSW', '28 December 2026 to 1 January 2027 (sold out)', 'Electronic and wider', 'Camping', 'New Year near Sydney'],
      ['Dreamstate', 'Sydney; Melbourne', '6 and 7 February 2027 (reported)', 'Trance', 'City', 'One big night'],
      ['Pitch', 'Moyston, Victoria', '5 to 9 March 2027 (sold out)', 'House, techno', 'Camping', 'A club-minded festival'],
      ['Ultra Australia', 'Melbourne; Gold Coast', '17 and 18 April 2027', 'Big-stage EDM', 'City', 'Ultra at home'],
      ['Electric Island', 'Adelaide, Melbourne, Perth', 'Not announced (April in 2026)', 'Electronic', 'City', 'A waterfront day'],
      ['Knockout Outdoor', 'Sydney', 'Not announced (3 October in 2026)', 'Hardstyle, hardcore', 'City', 'Hard dance']
    ]
  },
  media: {
    grampians: fig('grampians-halls-gap', 1200, 800,
      'The Grampians range in Victoria seen from Halls Gap',
      'The Grampians from Halls Gap, the range Pitch sits beneath. Photograph: DXR, CC BY-SA 4.0.'),
    tocumwal: fig('tocumwal-beach', 1200, 803,
      'The town beach at Tocumwal on the Murray River',
      'Tocumwal on the Murray River, the town nearest Strawberry Fields. Photograph: Mattinbgn, CC BY 3.0.'),
    riverwood: fig('riverwood-downs', 1200, 398,
      'A sunset panorama over Riverwood Downs in Monkerai',
      'Riverwood Downs, the home of Subsonic. Photograph: Marc Dalmulder, CC BY 2.0.'),
    intercell: singleSet({
      label: 'Melbourne, heard from home',
      description: 'Clara Cuvé at Intercell in Naarm/Melbourne, filmed by Intercell in 2025. A visiting DJ at a Melbourne club night.',
      youtubeId: 'xBP4SB0Pbjw', genre: 'Melbourne, 2025', artist: 'Clara Cuvé', title: 'Intercell Naarm/Melbourne'
    })
  },
  sourcesHtml: `<ul>
<li>Dates from each festival's own site: <a href="https://beyondthevalley.com.au/" target="_blank" rel="noopener noreferrer">Beyond The Valley</a>, <a href="https://lostparadise.com.au/" target="_blank" rel="noopener noreferrer">Lost Paradise</a>, <a href="https://pitchfestival.com.au/" target="_blank" rel="noopener noreferrer">Pitch</a>, <a href="https://subsonicmusic.com.au/" target="_blank" rel="noopener noreferrer">Subsonic</a>, <a href="https://ultraaustralia.com/" target="_blank" rel="noopener noreferrer">Ultra Australia</a>, and the <a href="https://events.humanitix.com/emergentform" target="_blank" rel="noopener noreferrer">Rainbow Spirit ticket page</a>.</li>
<li>Listed or reported dates: Strawberry Fields (<a href="https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival" target="_blank" rel="noopener noreferrer">NSW Government events</a>), Dreamstate (<a href="https://www.sydneyshowground.com.au/whats-on/dreamstate/" target="_blank" rel="noopener noreferrer">Sydney Showground</a>, <a href="https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615" target="_blank" rel="noopener noreferrer">Noise11</a>), Electric Island (<a href="https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026" target="_blank" rel="noopener noreferrer">The Note</a>), Knockout Outdoor (<a href="https://www.thatfestivalsite.com/article/Knockout%20Outdoor%202026%20Ticket%20Prices%20Revealed" target="_blank" rel="noopener noreferrer">That Festival Site</a>).</li>
<li>hypersonic cancellation: <a href="https://hypersonicfestival.au/" target="_blank" rel="noopener noreferrer">hypersonicfestival.au</a>.</li>
<li>Beyond The Valley attendance: <a href="https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale" target="_blank" rel="noopener noreferrer">The Music Network</a> and <a href="https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/" target="_blank" rel="noopener noreferrer">Rolling Stone Australia</a>.</li>
<li>Poll ranks: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
</ul>`
});
