// Build best-house-music-festivals.html from best-house-music-festivals-draft.md.
//
// Intent: current choice, worldwide. Targets "house music festivals", "house
// festivals", "chosen few picnic" and the terms in
// keywords/best-house-music-festivals.json. The genre itself sits in
// house-music-guide; this page is for picking a festival.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// unannounced dates are published and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('house-festivals');

buildRoundup({
  file: 'best-house-music-festivals.html',
  path: '/best-house-music-festivals',
  draftFile: 'best-house-music-festivals-draft.md',
  title: 'Best House Music Festivals 2027: ARC, Movement, Loveland',
  description: 'The best house music festivals for 2027, with dates and setting: ARC and the Chosen Few Picnic in Chicago, Movement in Detroit, Loveland, DGTL and Croatia.',
  date: '2026-11-02',
  dateLabel: '2 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best house music festivals in 2027',
  deck: 'The main house music festivals compared by city, setting and size, from a park picnic in Chicago to a week on the Croatian coast, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best house music festivals',
  answer: 'The best house music festivals for 2027 depend on where you want to be. In Chicago: ARC in Union Park over Labor Day weekend and the Chosen Few Picnic in Jackson Park in July. In Detroit: Movement in Hart Plaza (29 to 31 May). In Europe: DGTL (26 to 28 March) and Loveland (14 and 15 August) in Amsterdam, and Love International in Croatia (7 to 13 July).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'House music festivals FAQ.',
  breadcrumb: 'Best House Music Festivals',
  ogName: 'house-festivals',
  bodyClass: 'house-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['House music festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['Which are the best house music festivals in the US?', 'us', 'House music festivals in the US'],
    ['Which are the best house festivals in Europe?', 'europe', 'House festivals in Europe'],
    ['Are there house music festivals in the UK?', 'uk', 'House music festivals in the UK'],
    ['Which smaller house festivals are worth the trip?', 'smaller', 'Smaller house festivals'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'House music festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Best for'],
    rows: [
      ['DGTL', 'Amsterdam', '26 to 28 March', 'Former shipyard', 'The start of the season'],
      ['Movement', 'Detroit', '29 to 31 May', 'Riverfront plaza', 'House and techno together'],
      ['Love International', 'Tisno, Croatia', '7 to 13 July', 'Seaside site, boats', 'A week by the sea'],
      ['Chosen Few Picnic', 'Chicago', 'Not announced (11 July in 2026)', 'City park', 'Where house began'],
      ['Loveland', 'Amsterdam', '14 and 15 August', 'City park', 'A city park in August'],
      ['ARC', 'Chicago', 'Not announced (4 to 7 September in 2026)', 'City park', 'Labor Day weekend'],
      ['HRFST', 'Bunnik, near Utrecht', '2 October', 'Fort', 'A day in a fort'],
      ['Soenda Indoor', 'Utrecht', 'Not announced (next: 21 November 2026)', 'Indoor hall', 'A winter date']
    ]
  },
  media: {
    minx: singleSet({
      label: 'Movement, heard from home',
      description: 'DJ Minx at Movement presents: Live from Detroit, with Beatport.',
      youtubeId: 'h77XrnRB3kc', genre: 'Movement', artist: 'DJ Minx', title: 'Live from Detroit'
    }),
    movement: fig('movement-ciel-2019', 1200, 800,
      'Ciel playing a DJ set at Movement festival in Detroit in 2019',
      'Ciel at Movement in Detroit in 2019. Photograph: Clay Blankenbeckler, CC BY 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://movementfestival.com/faqs" target="_blank" rel="noopener noreferrer">Movement</a>, <a href="https://basscoast.ca/pages/faq" target="_blank" rel="noopener noreferrer">Bass Coast</a>, <a href="https://parklife.uk.com/" target="_blank" rel="noopener noreferrer">Parklife</a>, <a href="https://loveland.nl/festival/" target="_blank" rel="noopener noreferrer">Loveland</a>, <a href="https://dgtl-festival.com/en/dgtl-amsterdam/" target="_blank" rel="noopener noreferrer">DGTL</a>, <a href="https://loveinternationalfestival.com/faqs" target="_blank" rel="noopener noreferrer">Love International</a>.</li>
<li>Past editions: <a href="https://arcmusicfestival.com/faqs/" target="_blank" rel="noopener noreferrer">ARC</a>, <a href="https://www.chosenfewdjs.com/" target="_blank" rel="noopener noreferrer">the Chosen Few DJs</a>, <a href="https://www.soenda.net/" target="_blank" rel="noopener noreferrer">Soenda</a>.</li>
<li>HRFST 2027: <a href="https://www.geheimeliefde.nl/hrfst" target="_blank" rel="noopener noreferrer">the organiser's page</a>.</li>
<li>Defected Croatia: <a href="https://www.glitterboxibiza.com/news/post/defected-croatia-a-message-from-our-ceo-wez-saunders" target="_blank" rel="noopener noreferrer">a message from Defected's chief executive</a>.</li>
<li>ARC and Movement: this site's guide to each, linked above, which cites its own sources.</li>
</ul>`
});
