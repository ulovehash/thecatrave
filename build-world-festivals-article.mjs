// Build best-edm-festivals-world.html from best-edm-festivals-world-draft.md.
//
// Intent: electronic festivals only, ranked by reported attendance, each figure
// with its year and source. Targets "biggest edm festival in the world",
// "largest electronic music festival in the world" and the terms in
// keywords/best-edm-festivals-world.json. The general rock and pop head
// ("biggest music festivals in the world") is left alone on purpose. Planning
// detail lives on each festival's own guide; entries here stay short.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh the
// attendance figures after each summer season, add Tomorrowland 2027 when it is
// published, and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('world-festivals');
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

buildRoundup({
  file: 'best-edm-festivals-world.html',
  path: '/best-edm-festivals-world',
  draftFile: 'best-edm-festivals-world-draft.md',
  title: "World's Biggest EDM Festivals 2027: EDC, Untold, Tomorrowland",
  description: 'The biggest EDM festivals in the world, ranked by reported attendance with year and source: EDC Las Vegas, Untold, Tomorrowland and more, with 2027 dates.',
  date: '2026-11-03',
  dateLabel: '3 November 2026',
  kicker: 'Festival guide, 2027',
  h1: "The world's biggest EDM festivals in 2027",
  deck: 'Electronic music festivals ranked by the attendance each one reported, with the year, what the number counts and the 2027 dates, from Las Vegas and Cluj-Napoca to Boom and Zurich.',
  bannerLabel: "World's biggest EDM festivals",
  answer: "By reported attendance, the biggest EDM festival in the world is EDC Las Vegas or Untold in Romania: both reported more than 500,000 people in 2026, and EDC drew over 525,000 in 2024. Tomorrowland is third with 400,000. The free Street Parade in Zurich counted about 900,000 in 2026, but it has no tickets.",
  introTitle: 'A ranking by reported crowd.',
  faqTitle: 'Biggest EDM festivals FAQ.',
  breadcrumb: "World's Biggest EDM Festivals",
  ogName: 'world-festivals',
  bodyClass: 'world-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ["World's biggest EDM festival dates for 2027 at a glance", 'at-a-glance', '2027 dates at a glance'],
    ['Which is the biggest EDM festival in the world?', 'biggest', 'The biggest EDM festival'],
    ["Which are the rest of the world's biggest electronic music festivals?", 'rest', 'The rest of the ranking'],
    ['What is the largest electronic music festival in the world?', 'largest', 'The largest electronic festival'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: "World's biggest EDM festivals compared, 2027",
    headers: ['Festival', 'Where', 'Reported attendance', '2027 dates'],
    rows: [
      ['EDC Las Vegas', 'Las Vegas, US', 'Over 500,000 (2026); over 525,000 (2024)', '14 to 16 and 21 to 23 May'],
      ['Untold', 'Cluj-Napoca, Romania', 'Over 500,000 over four days (2026)', '5 to 8 August'],
      ['Tomorrowland', 'Boom, Belgium', '400,000 over two weekends (2026)', 'Not announced (17 to 19 and 24 to 26 July in 2026)'],
      ['Parookaville', 'Weeze, Germany', '225,000 over three show days and five camping days (2026)', '16 to 18 July'],
      ['Airbeat One', 'Neustadt-Glewe, Germany', '210,000 over five days (2026)', '7 to 11 July'],
      ['Ultra', 'Miami, US', '165,000, sold out (2026)', '26 to 28 March'],
      ['Ultra Europe', 'Split, Croatia', 'Over 150,000 (2023)', '9 to 11 July'],
      ['Awakenings', 'Hilvarenbeek, Netherlands', '119,000, announced at sell-out (2026)', '9 to 11 July'],
      ['Creamfields', 'Daresbury, England', 'Over 80,000 expected over four days (2026)', '26 to 29 August'],
      ['Street Parade (free)', 'Zurich, Switzerland', 'About 900,000 in one day (2026)', '14 August']
    ]
  },
  media: {
    untold: singleSet({
      label: 'Untold, heard from home',
      description: "David Guetta's set at Untold festival in Cluj-Napoca in 2023, published by DJ Mag.",
      youtubeId: 'b6cZJvIJhQ0', genre: 'Untold', artist: 'David Guetta', title: 'Live at Untold 2023'
    }),
    edc: fig('edc-las-vegas-2024', 1200, 672,
      'Lasers and the Ferris wheel at EDC Las Vegas at night in 2024',
      'EDC Las Vegas at Las Vegas Motor Speedway in May 2024. Photograph: Eric Polk, CC BY-SA 4.0.'),
    streetparade: fig('street-parade-2023', 1200, 800,
      'A large crowd in front of a stage at the Street Parade in Zurich in 2023',
      'The crowd at the Street Parade in Zurich in August 2023. Photograph: Peter Arnold, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>EDC Las Vegas: ${a('https://press.insomniac.com/blog/edc-las-vegas-introduces-new-dusk-till-dawn-2027-12-day-festival-concept-spanning-two-consecutive-weekends', 'Insomniac on the 2027 dates')}, ${a('https://mymodernmet.com/edc-2026-recap/', 'My Modern Met on 2026')}, ${a('https://www.digitalmusicnews.com/2024/05/23/edc-las-vegas-2024/', 'Digital Music News on the 2024 record')}.</li>
<li>Untold: ${a('https://news.pollstar.com/2026/08/10/untold-festival-romania-counts-more-than-500000-visitors-across-four-days/', 'Pollstar on 2026')}, ${a('https://untold.com/', 'the festival site')}.</li>
<li>Tomorrowland: ${a('https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', 'Bandwagon on 2026')}, ${a('https://belgium.tomorrowland.com/en/welcome/', 'the festival site')}.</li>
<li>Parookaville: ${a('https://www1.wdr.de/nrw/niederrhein/kreis-kleve/bilanz-parookaville-festival-2026-weeze-100.html', 'WDR on 2026')}, ${a('https://www.parookaville.com/en', 'the festival site')}.</li>
<li>Airbeat One: ${a('https://www.berliner-zeitung.de/article/airbeat-one-besucherrekord-10193471', 'Berliner Zeitung on 2026')}, ${a('https://airbeat-one.de/en/', 'the festival site')}.</li>
<li>Ultra: ${a('https://www.electricfeels.com/2026/04/01/ultra-music-festival-closes-out-triumphant-2026-edition-as-miami-dade-county-proclaims-march-28-as-ultra-music-festival-day/', 'Electric Feels on 2026')}, ${a('https://ultramusicfestival.com/', 'the festival site')}.</li>
<li>Ultra Europe: ${a('https://ultraeurope.com/worldwide/ultra-europe-concludes-ninth-edition-in-split-croatia-with-attendees-from-140-countries/', 'the organiser on 2023 and the 2027 dates')}.</li>
<li>Awakenings: ${a('https://mixmagde.com/read/awakenings-festival-2026-is-sold-out-and-set-to-make-history-with-its-biggest-edition-ever-news', 'Mixmag Germany on 2026')}, ${a('https://www.awakenings.com/en/', 'the festival site')}.</li>
<li>Creamfields: ${a('https://creamfields.com/news/three-huge-announcements-unveiled-for-2026/', 'the festival on 2026')}, ${a('https://www.timeout.com/uk/news/creamfields-has-revealed-its-huge-lineup-for-2026-with-calvin-harris-swedish-house-mafia-disclosure-and-more-022726', 'Time Out')}, ${a('https://creamfields.com/welcome/', 'the 2027 dates')}.</li>
<li>Street Parade: ${a('https://www.streetparade.com/en/historie', 'the organiser\'s history')}, ${a('https://www.streetparade.com/en/infos', 'the 2027 date')}.</li>
<li>Mysteryland: ${a('https://www.mysteryland.nl/this-is-mysteryland', 'the festival site')}.</li>
</ul>`
});
