// Build best-bass-music-festivals.html from best-bass-music-festivals-draft.md.
//
// Intent: current choice, worldwide. Targets "bass music festivals", "bass
// festivals", "bass coast festival", "dubstep festivals" and the terms in
// keywords/best-bass-music-festivals.json. Bass Canyon and Lost Lands are
// short and link to best-edm-festivals-usa, which owns "bass canyon". The genre itself sits in
// bass-music-guide and dubstep-guide; this page is for picking a festival.
// Drum and bass festivals get one linked line only.
//
// Maintenance: refresh as unannounced dates are published (Lost Lands, Wakaan)
// and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('bass-festivals');

buildRoundup({
  file: 'best-bass-music-festivals.html',
  path: '/best-bass-music-festivals',
  draftFile: 'best-bass-music-festivals-draft.md',
  title: 'Best Bass Music Festivals 2027: Lost Lands, Outlook, Bass Coast',
  description: 'The best bass music festivals for 2027 with dates: Outlook Origins, Boomtown and Bassfest in Europe, Bass Coast, Bass Canyon and Lost Lands in North America.',
  date: '2026-11-03',
  dateLabel: '3 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best bass music festivals in 2027',
  deck: 'The main bass music festivals in Europe and North America compared by place and setting, from five days on the Croatian coast to camping weekends in Ohio and British Columbia, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best bass music festivals',
  answer: 'The best bass music festivals for 2027 depend on the side of the Atlantic. In Europe: Outlook Origins in Croatia (22 to 26 July), Boomtown in Hampshire (11 to 15 August) and Bassfest in Sheffield (listed for 17 and 18 July). In North America: Bass Coast in British Columbia (9 to 12 July), Sound Haven in Tennessee (29 July to 1 August), Bass Canyon in Washington (13 to 15 August) and Lost Lands in Ohio, whose 2027 dates are not announced.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Bass music festivals FAQ.',
  breadcrumb: 'Best Bass Music Festivals',
  ogName: 'bass-festivals',
  bodyClass: 'bass-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Bass music festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['Which are the best bass festivals in the UK and Europe?', 'europe', 'Bass festivals in the UK and Europe'],
    ['Which are the best bass music festivals in the US and Canada?', 'north-america', 'Bass music festivals in the US and Canada'],
    ['Where are the best dubstep festivals?', 'dubstep', 'Dubstep festivals'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Bass music festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Best for'],
    rows: [
      ['Bass Coast', 'Merritt, British Columbia', '9 to 12 July', 'Camping, limited capacity', 'An artist-owned weekend'],
      ['Bassfest', 'Sheffield', '17 and 18 July (listed)', 'Outdoor bowl', 'Two days in Sheffield'],
      ['Outlook Origins', 'Tisno, Croatia', '22 to 26 July', 'Seaside site, boats', 'Five days by the sea'],
      ['Shambhala', 'Salmo River Ranch, British Columbia', '23 to 26 July (sold out)', 'Ranch', 'A ranch weekend, if you hold a ticket'],
      ['Sound Haven', 'Tracy City, Tennessee', '29 July to 1 August', 'Camping', 'Stages that never clash'],
      ['Boomtown', 'Matterley Estate, Hampshire', '11 to 15 August', 'Country estate', 'A large weekend in England'],
      ['Bass Canyon', 'George, Washington', '13 to 15 August', 'Amphitheatre', 'The Gorge'],
      ['Lost Lands', 'Thornville, Ohio', 'Not announced (18 to 20 September in 2026)', 'Camping', 'Dubstep at scale'],
      ['Wakaan', 'Mulberry Mountain, Arkansas', 'Not announced (1 to 3 October in 2026)', 'Mountain camping', 'The end of the season']
    ]
  },
  media: {
    outlook: singleSet({
      label: 'Outlook Origins, heard from home',
      description: 'Youngsta and J:Kenzo with Crazy D at Outlook Origins in 2025, from the festival’s own channel.',
      youtubeId: 'q2E90QbSjBs', genre: 'Outlook Origins, 2025', artist: 'Youngsta and J:Kenzo with Crazy D', title: 'Live from Outlook Origins 2025'
    }),
    lostlands: fig('lost-lands-dion-timmer-2019', 1200, 900,
      'Dion Timmer\'s name on the LED screen of a stage at Lost Lands in 2019, above the crowd',
      'Dion Timmer\'s name on the stage screen at Lost Lands in 2019. Photograph: LindsayIlana, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://outlookorigins.com/" target="_blank" rel="noopener noreferrer">Outlook Origins</a> (and its <a href="https://outlookorigins.com/faqs" target="_blank" rel="noopener noreferrer">FAQ</a>), <a href="https://www.boomtownfair.co.uk/" target="_blank" rel="noopener noreferrer">Boomtown</a>, <a href="https://basscoast.ca/" target="_blank" rel="noopener noreferrer">Bass Coast</a> (and its <a href="https://basscoast.ca/pages/faq" target="_blank" rel="noopener noreferrer">FAQ</a>), <a href="https://www.shambhalamusicfestival.com/" target="_blank" rel="noopener noreferrer">Shambhala</a>, <a href="https://soundhavenfestival.com/" target="_blank" rel="noopener noreferrer">Sound Haven</a> (and its <a href="https://soundhavenfestival.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a>), <a href="https://www.basscanyon.com/" target="_blank" rel="noopener noreferrer">Bass Canyon</a>.</li>
<li>Bassfest 2027, listed: <a href="https://www.skiddle.com/whats-on/Sheffield/Don-Valley-Bowl/Bassfest-Summer-Festival-2026/42362070/" target="_blank" rel="noopener noreferrer">the Skiddle ticket page and FAQ</a>.</li>
<li>Past editions and age limits: <a href="https://www.lostlandsfestival.com/faq" target="_blank" rel="noopener noreferrer">Lost Lands</a> and <a href="https://lostlands.frontgatetickets.com/event/7nuf54cayx3j1p90" target="_blank" rel="noopener noreferrer">its ticket page</a>, <a href="https://wakaanfestival.com/festival-faqs/" target="_blank" rel="noopener noreferrer">Wakaan</a>.</li>
<li>Lost Lands 2026: <a href="https://edmmaniac.com/lost-lands-lineup-2026/" target="_blank" rel="noopener noreferrer">EDM Maniac</a>. Wakaan 2026: <a href="https://edmidentity.com/2026/08/19/wakaan-music-festival-2026-lineup/" target="_blank" rel="noopener noreferrer">EDM Identity</a>.</li>
<li>NASS: <a href="https://skiddle.com/festivals/nass-festival" target="_blank" rel="noopener noreferrer">Skiddle</a>. Dub Camp 2026: <a href="https://www.jds.fr/nantes/concerts/reggae/dub-camp-2026-1572246_A" target="_blank" rel="noopener noreferrer">JDS</a>.</li>
<li>Boomtown and the Canadian festivals: this site's guides, linked above, which cite their own sources.</li>
</ul>`
});
