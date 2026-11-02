// Build best-drum-and-bass-festivals.html from best-drum-and-bass-festivals-draft.md.
//
// Intent: current choice, worldwide. Targets "drum and bass festivals" and the
// terms in keywords/best-drum-and-bass-festivals.json. The genre itself sits in
// drum-and-bass-guide; this page is for picking a festival.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('dnb-festivals');

buildRoundup({
  file: 'best-drum-and-bass-festivals.html',
  path: '/best-drum-and-bass-festivals',
  draftFile: 'best-drum-and-bass-festivals-draft.md',
  title: 'Best Drum and Bass Festivals 2027: Rampage, Let It Roll',
  description: 'The best drum and bass festivals for 2027, with dates, size and setting: Rampage Open Air on 1 to 4 July, Let It Roll on 5 to 7 August, Liquicity and Croatia.',
  date: '2026-11-02',
  dateLabel: '2 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best drum and bass festivals in 2027',
  deck: 'The main drum and bass festivals compared by size, setting and sound, from a Belgian lakeside to the Croatian coast, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best drum and bass festivals',
  answer: 'The best drum and bass festivals for 2027 depend on the trip you want. For the biggest crowd: Rampage Open Air in Belgium (1 to 4 July) or Let It Roll in the Czech Republic (5 to 7 August). For liquid drum and bass: Liquicity in the Netherlands (23 to 25 July). For a week by the sea: Outlook Origins in Croatia (22 to 26 July) or Hospitality on the Beach (listed for 30 June to 5 July).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Drum and bass festivals FAQ.',
  breadcrumb: 'Best Drum and Bass Festivals',
  ogName: 'dnb-festivals',
  bodyClass: 'dnb-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Drum and bass festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest drum and bass festival?', 'biggest', 'The biggest drum and bass festival'],
    ['Where are the best drum and bass festivals in Europe?', 'europe', 'Drum and bass festivals in Europe'],
    ['Are there drum and bass festivals in England?', 'england', 'Drum and bass festivals in England'],
    ['Which drum and bass festivals are further afield?', 'further', 'Further afield'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Drum and bass festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Scale', 'Best for'],
    rows: [
      ['DnB Allstars Thailand', 'Phuket, Thailand', 'Listed 22 to 24 January', 'Island', 'Three days', 'A winter trip'],
      ['Rampage Weekend', 'Antwerp, Belgium', '5 and 6 March', 'Indoor arena', 'Two days', 'An early start'],
      ['WAH Malta', 'Malta', 'Listed 29 April to 2 May', 'Several venues', 'Four days', 'A spring island break'],
      ['Beyond Mars', 'South Gloucestershire, England', 'Listed 3 to 7 June', 'Countryside', 'Five days', 'Drum and bass in England'],
      ['LOCUS Bali', 'Tabanan, Bali', 'Listed 17 to 20 June', 'Creative park', 'Four days', 'A long-haul holiday'],
      ['Hospitality on the Beach', 'Tisno, Croatia', 'Listed 30 June to 5 July', 'Coast', 'Six days', 'The Hospital Records roster'],
      ['Rampage Open Air', 'Lommel, Belgium', '1 to 4 July', 'Lake and beach', '66,000 visitors in 2025', 'The biggest crowd'],
      ['Outlook Origins', 'Tisno, Croatia', '22 to 26 July', 'Coast', 'Five days', 'A week by the sea'],
      ['Liquicity', 'Geestmerambacht, Netherlands', '23 to 25 July', 'Lake', 'Three days', 'Liquid drum and bass'],
      ['Let It Roll', 'Most, Czech Republic', '5 to 7 August', 'Lakeside site', 'More than 25,000 people', 'A big summer weekend'],
      ['Sun and Bass', 'San Teodoro, Sardinia', 'Not announced (5 to 12 September in 2026)', 'Beach town', 'A week', 'The end of summer']
    ]
  },
  media: {
    rampage: singleSet({
      label: 'Rampage Open Air, heard from home',
      description: 'Eskei83 at Rampage Open Air in Lommel, 2026.',
      youtubeId: '5BP6Q6UlYHs', genre: 'Rampage Open Air, 2026', artist: 'Eskei83', title: 'Main stage'
    }),
    'let-it-roll': fig('let-it-roll-2014', 1200, 600,
      'Camo and Krooked performing Zeitgeist on the main stage at Let It Roll in 2014',
      'Camo &amp; Krooked present Zeitgeist at Let It Roll in 2014. Photograph: Uafmusic_VIE, CC BY-SA 4.0.'),
    liquicity: fig('liquicity-galaxy-2016', 1200, 675,
      'The Galaxy stage at Liquicity festival in daylight in 2016',
      'The Galaxy stage at Liquicity in 2016. Photograph: Nederlandse Leeuw, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://rampage.eu/news/rampage-open-air-2027" target="_blank" rel="noopener noreferrer">Rampage Open Air</a>, <a href="https://rampage.eu/news/rampage-weekend-2027" target="_blank" rel="noopener noreferrer">Rampage Weekend</a>, <a href="https://www.letitroll.cz/info-let-it-roll/" target="_blank" rel="noopener noreferrer">Let It Roll</a>, <a href="https://festival.liquicity.com/practical/faq/" target="_blank" rel="noopener noreferrer">Liquicity</a>, <a href="https://www.outlookorigins.com/" target="_blank" rel="noopener noreferrer">Outlook Origins</a>.</li>
<li>Listed dates: <a href="https://www.technoairlines.com/festival/hospitality-on-the-beach-tisno-croatia-2027" target="_blank" rel="noopener noreferrer">Technoairlines on Hospitality on the Beach</a>, <a href="https://www.technoairlines.com/festival/beyond-mars-festival-south-gloucestershire-united-kingdom-2027" target="_blank" rel="noopener noreferrer">Technoairlines on Beyond Mars</a>, <a href="https://www.skiddle.com/festivals/wah-malta/" target="_blank" rel="noopener noreferrer">Skiddle on WAH Malta</a>, <a href="https://megatix.in.th/events/dnballstars2027-gbp" target="_blank" rel="noopener noreferrer">Megatix on DnB Allstars Thailand</a>, <a href="https://www.ticketfairy.com/event/locus-bali-2027" target="_blank" rel="noopener noreferrer">TicketFairy on LOCUS Bali</a>.</li>
<li>Past editions: <a href="https://www.sunandbass.net/" target="_blank" rel="noopener noreferrer">Sun and Bass</a>.</li>
<li>WAH Malta's first headliner: <a href="https://www.skiddle.com/news/all/WAH-Malta-announces-Sub-Focus-as-first-2027-headliner/62169/" target="_blank" rel="noopener noreferrer">Skiddle</a>.</li>
<li>Rampage attendance: <a href="https://www.vrt.be/vrtnws/nl/2025/07/06/rampage-open-air-in-lommel-blikt-terug-op-editie-2025/" target="_blank" rel="noopener noreferrer">VRT on 2025</a> and <a href="https://www.vrt.be/vrtnws/nl/2026/07/01/voorbeschouwing-rampage-open-air-2026-nieuw-podium-lommel/" target="_blank" rel="noopener noreferrer">VRT on 2026</a>.</li>
</ul>`
});
