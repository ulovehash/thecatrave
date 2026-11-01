// Build best-techno-festivals.html from best-techno-festivals-draft.md.
//
// Intent: current choice, worldwide. Targets "best techno festivals" and the
// question terms in keywords/best-techno-festivals.json. The UK sits in
// best-dance-music-festivals-uk, which owns "techno festivals uk".
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('techno-festivals');

buildRoundup({
  file: 'best-techno-festivals.html',
  path: '/best-techno-festivals',
  draftFile: 'best-techno-festivals-draft.md',
  title: 'Best Techno Festivals 2027: Awakenings, Time Warp, Movement',
  description: 'The best techno festivals in the world for 2027, with dates, sound and who each one suits, from Awakenings and Time Warp to Movement in Detroit.',
  date: '2026-10-31',
  dateLabel: '31 October 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best techno festivals in the world in 2027',
  deck: 'The main techno festivals compared by sound, scale and setting, from indoor all-nighters in Germany to Detroit, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best techno festivals',
  answer: 'The best techno festivals for 2027 depend on the day you want. For a big techno weekend: Awakenings in the Netherlands (9 to 11 July). For a very large camping weekend: Nature One in Germany (29 July to 1 August). For a long indoor run: Time Warp in Mannheim (3 April). For the history: Movement in Detroit (29 to 31 May). For daytime in the open air: Kappa FuturFestival in Turin (2 to 4 July). For hard techno: MAYDAY in Dortmund (30 April).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Techno festivals FAQ.',
  breadcrumb: 'Best Techno Festivals',
  ogName: 'techno-festivals',
  bodyClass: 'techno-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Techno festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest techno festival in the world?', 'biggest', 'The biggest techno festival'],
    ['Which are the best techno festivals in Europe?', 'europe', 'Techno festivals in Europe'],
    ['Where are the best techno festivals in the USA?', 'usa', 'Techno festivals in the USA'],
    ['Which techno festivals go hardest?', 'hard', 'Hard techno festivals'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Techno festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Best for'],
    rows: [
      ['Verknipt', 'Amsterdam and Utrecht, Netherlands', '5 March, Ziggo Dome; listed 5 and 6 June, Strijkviertel', 'Hard techno', 'Up to 12,000 at the Ziggo Dome', 'Hard techno in an arena'],
      ['DGTL Amsterdam', 'Amsterdam, Netherlands', '26 to 28 March', 'Techno, house', 'Three days', 'A spring city weekend'],
      ['Time Warp', 'Mannheim, Germany', '3 April', 'Techno, house', '19 hours, five floors', 'One long indoor run'],
      ['MAYDAY', 'Dortmund, Germany', '30 April', 'Hard techno, raw, bounce, acid, classic techno', 'Four floors', 'Hard techno'],
      ['Horst', 'Vilvoorde, Belgium', 'Not announced (14 to 16 May in 2026)', 'Techno, house, arts', 'Three days in 2026', 'Design and architecture'],
      ['Movement', 'Detroit, USA', '29 to 31 May', 'Techno, house', 'Six stages', 'Techno where it began'],
      ['Terminal V', 'Glasgow, UK', '4 to 6 June', 'Hard techno', 'Three days', 'Hard techno in Scotland'],
      ['Kappa FuturFestival', 'Turin, Italy', '2 to 4 July', 'Techno, house', '125,000 attendances in 2026, six stages', 'Daytime in the open air'],
      ['Awakenings', 'Hilvarenbeek, Netherlands', '9 to 11 July', 'Techno', '119,000 visitors in 2026', 'A big techno weekend'],
      ['Stone Techno', 'Essen, Germany', '9 to 11 July', 'Techno', 'Three days', 'An industrial setting'],
      ['Dekmantel', 'Amsterdam, Netherlands', '29 July to 2 August', 'Techno, house and beyond', 'Five days', 'A wider programme'],
      ['Nature One', 'Kastellaun, Germany', '29 July to 1 August', 'Techno and wider electronic', 'Over 60,000 people, 20 floors', 'A very big camping weekend'],
      ['Monument', 'Veggli, Norway', '29 July to 1 August, reported sold out', 'Deep, hypnotic techno', 'Four days', 'A forest and a long trip'],
      ['ARC', 'Chicago, USA', 'Not announced (Labor Day weekend)', 'House, techno', 'Four days in 2026', 'A city park at the end of summer'],
      ['CRSSD', 'San Diego, USA', 'Spring not announced', 'House, techno, electro', 'Twice a year', 'A waterfront weekend']
    ]
  },
  media: {
    'nature-one': fig('nature-one-main-floor-2009', 1200, 900,
      'The crowd on the main floor at Nature One in Germany in 2009',
      'The main floor at Nature One in 2009. Photograph: Jochen Herrmann, CC BY-SA 3.0.'),
    kappa: fig('kappa-solar-2025', 1200, 900,
      'The Solar Stage at Kappa FuturFestival in Turin in July 2025',
      'The Solar Stage at Kappa FuturFestival in Parco Dora, Turin, in July 2025. Photograph: MadBob, CC BY 4.0.'),
    zollverein: fig('zollverein-night', 1200, 800,
      'The Zollverein coal mine complex in Essen lit up at night',
      'Zollverein in Essen at night, the home of Stone Techno. Photograph: Alex, CC BY 3.0.'),
    detroit: fig('detroit-festival-2002', 1200, 900,
      'The main stage of the Detroit Electronic Music Festival after dark in 2002',
      'The main stage of the Detroit Electronic Music Festival in May 2002, the event that became Movement. Photograph: Myself248, CC BY-SA 4.0.'),
    dekmantel: singleSet({
      label: 'Dekmantel, heard from home',
      description: 'Freddy K on the Radar stage at Dekmantel Ten, August 2024.',
      youtubeId: 'CLDcCyRpoD4', genre: 'Dekmantel, 2024', artist: 'Freddy K', title: 'Radar'
    })
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://www.awakenings.com/" target="_blank" rel="noopener noreferrer">Awakenings</a>, <a href="https://www.time-warp.de/" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://movementfestival.com/faqs" target="_blank" rel="noopener noreferrer">Movement</a>, <a href="https://www.kappafuturfestival.it/" target="_blank" rel="noopener noreferrer">Kappa FuturFestival</a>, <a href="https://www.nature-one.de/" target="_blank" rel="noopener noreferrer">Nature One</a>, <a href="https://www.mayday.de/" target="_blank" rel="noopener noreferrer">MAYDAY</a>, <a href="https://dgtl-festival.com/en/dgtl-amsterdam/" target="_blank" rel="noopener noreferrer">DGTL</a>, <a href="https://www.stone-techno.com/" target="_blank" rel="noopener noreferrer">Stone Techno</a>, <a href="https://www.dekmantel.com/" target="_blank" rel="noopener noreferrer">Dekmantel</a>, <a href="https://festival.mnmt.no/" target="_blank" rel="noopener noreferrer">Monument</a>.</li>
<li>Horst: <a href="https://www.horstartsandmusic.com/" target="_blank" rel="noopener noreferrer">the festival's site</a>.</li>
<li>Attendance: <a href="https://lespresso.it/c/cultura/2026/07/06/kappa-futur-festival-torino-2026-chiusura-messico-monterrey/63264" target="_blank" rel="noopener noreferrer">L'Espresso on Kappa FuturFestival</a>, <a href="https://nieuws.nl/entertainment/awakenings-beleeft-grootste-editie-ooit-met-119000-bezoekers" target="_blank" rel="noopener noreferrer">ANP via nieuws.nl on Awakenings</a>, and Nature One's own site.</li>
<li>Verknipt: <a href="https://www.festivalinfo.nl/news/59214/Verknipt-keert-maart-2027-terug-naar-de-Ziggo-Dome-voor-nieuwe-editie/" target="_blank" rel="noopener noreferrer">FestivalInfo on the Ziggo Dome</a> and <a href="https://www.technoairlines.com/festival/verknipt-festival-utrecht-netherlands-2027" target="_blank" rel="noopener noreferrer">Technoairlines on Utrecht</a>.</li>
<li>Monument's sell-out and age limit: <a href="https://www.technoairlines.com/festival/monument-festival-veggli-norway-2027" target="_blank" rel="noopener noreferrer">Technoairlines</a>.</li>
<li>Terminal V: <a href="https://www.timeout.com/uk/news/glasgow-clydeside-live-terminal-v-new-venue-092926" target="_blank" rel="noopener noreferrer">Time Out</a>.</li>
<li>Poll ranks: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
<li>Awakenings, Time Warp, Movement, Dekmantel and ARC: this site's guide to each festival, linked above, which cites its own sources.</li>
</ul>`
});
