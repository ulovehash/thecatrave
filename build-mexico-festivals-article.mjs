// Build best-edm-festivals-mexico.html from best-edm-festivals-mexico-draft.md.
//
// Intent: current choice, Mexico. Targets "edm festivals mexico" and the terms in
// keywords/best-edm-festivals-mexico.json. EDC Mexico and Time Warp Mexico get one
// short linked entry each; their names are taken by /edc-las-vegas and
// /time-warp-festival, so they are not targeted here.
//
// Maintenance: refresh as unannounced dates are published and roll to 2028 in
// September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('mexico-festivals');

buildRoundup({
  file: 'best-edm-festivals-mexico.html',
  path: '/best-edm-festivals-mexico',
  draftFile: 'best-edm-festivals-mexico-draft.md',
  title: 'Best EDM Festivals in Mexico 2027: Zamna, Day Zero, Bahidorá',
  description: 'The best EDM festivals in Mexico for 2027, with dates and setting: Zamna and Day Zero in Tulum, Bahidorá in Morelos, and EDC and MUTEK in Mexico City.',
  date: '2026-11-03',
  dateLabel: '3 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best EDM festivals in Mexico in 2027',
  deck: 'The main electronic music festivals in Mexico compared by place and setting, from jungle nights in Tulum to a racetrack in Mexico City, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best EDM festivals in Mexico',
  answer: 'The best EDM festivals in Mexico for 2027 fall between November and February. In Tulum: Zamna, from 31 December 2026 to 10 January 2027, and Day Zero on 9 January. In February: Bahidorá at Las Estacas in Morelos (12 to 14 February) and EDC in Mexico City (19 to 21 February). Mexico City also has MUTEK MX and Time Warp in November 2026.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'EDM festivals in Mexico FAQ.',
  breadcrumb: 'Best EDM Festivals in Mexico',
  ogName: 'mexico-festivals',
  bodyClass: 'mexico-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Mexico EDM festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['Which Tulum EDM festival is worth the trip?', 'tulum', 'Tulum EDM festivals'],
    ['Which are the best EDM festivals in Mexico City?', 'mexico-city', 'EDM festivals in Mexico City'],
    ['Which other EDM festivals in Mexico are worth the trip?', 'other', 'Other EDM festivals in Mexico'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'EDM festivals in Mexico compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Best for'],
    rows: [
      ['MUTEK MX', 'Mexico City', 'Not announced (closing 6 to 8 November in 2026)', 'Venues across the city', 'Audiovisual and experimental'],
      ['Time Warp', 'Mexico City', 'Not announced (20 and 21 November in 2026)', 'Expo Santa Fe, indoor', 'Techno indoors'],
      ['Zamna', 'Tulum', '31 December 2026 to 10 January 2027', 'Jungle cenote site', 'Six nights over New Year'],
      ['Day Zero', 'Tulum', '9 January', 'Jungle', 'One night, dusk to sunrise'],
      ['Bahidorá', 'Las Estacas, Morelos', '12 to 14 February', 'River park, camping', 'Three days by a river'],
      ['EDC', 'Mexico City', '19 to 21 February', 'Racetrack', 'The biggest stages']
    ]
  },
  media: {
    zamna: singleSet({
      label: 'Zamna, heard from home',
      description: "Oliver Heldens recording Heldeep Radio #500 live at Zamna Tulum, published by the artist.",
      youtubeId: 'KuvaMUDaS-4', genre: 'Zamna Tulum', artist: 'Oliver Heldens', title: 'Heldeep Radio #500 live from Zamna Tulum'
    }),
    mutek: fig('mutek-mexico-city-2016', 1200, 800,
      'A performer standing inside a light projection on stage at MUTEK in Mexico City in 2016',
      'A performer at MUTEK in Mexico City in 2016, at the Teatro de la Ciudad. Photograph: Tania Victoria, Secretaría de Cultura Ciudad de México, CC BY-SA 2.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://zamnafestival.com/events/?country=mexico" target="_blank" rel="noopener noreferrer">Zamna</a> and <a href="https://zamnafestival.com/events/multipass-zamna-tulum-2027" target="_blank" rel="noopener noreferrer">its Multipass</a>, <a href="https://bahidora.com/" target="_blank" rel="noopener noreferrer">Bahidorá</a>, <a href="https://mexico.edc.com/" target="_blank" rel="noopener noreferrer">EDC Mexico</a>, <a href="https://www.dayzerofestival.com/tulum" target="_blank" rel="noopener noreferrer">Day Zero</a>.</li>
<li>Zamna's tenth season: <a href="https://magneticmag.com/2026/09/zamna-tulum-2027-dates-multipass-tickets/" target="_blank" rel="noopener noreferrer">Magnetic Magazine</a>.</li>
<li>Day Zero history and El Teatro: <a href="https://www.edmtunes.com/2026/08/damian-lazarus-reveals-full-day-zero-tulum-2027-lineup/" target="_blank" rel="noopener noreferrer">EDMTunes</a>.</li>
<li>Bahidorá stages and site: <a href="https://bahidora.com/explora/escenarios/" target="_blank" rel="noopener noreferrer">stages</a>, <a href="https://bahidora.com/explora/acerca-de/" target="_blank" rel="noopener noreferrer">about</a>, <a href="https://bahidora.com/explora/las-estacas/" target="_blank" rel="noopener noreferrer">Las Estacas</a>, <a href="https://bahidora.com/planea/tips-faqs/" target="_blank" rel="noopener noreferrer">FAQ</a>.</li>
<li>2026 editions: <a href="https://time-warp.de/" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://mexico.mutek.org/es/noticias/el-cierre-de-mutek-mx-22-se-acerca" target="_blank" rel="noopener noreferrer">MUTEK MX</a>. Last Afterlife Tulum: <a href="https://after.life/tulum" target="_blank" rel="noopener noreferrer">Afterlife</a>.</li>
<li>The BPM Festival: <a href="https://thebpmfestival.com/" target="_blank" rel="noopener noreferrer">its own site</a> and <a href="https://exclaim.ca/music/article/at_least_four_dead_in_shooting_at_mexicos_bpm_festival" target="_blank" rel="noopener noreferrer">Exclaim!</a> on the 2017 shooting.</li>
<li>Tulum International Airport opening: <a href="https://www.aviacionline.com/tulum-airport-mexican-caribbeans-new-gateway-officially-inaugurated" target="_blank" rel="noopener noreferrer">Aviacionline</a>.</li>
<li>EDC and Time Warp: this site's guide to each, linked above, which cites its own sources.</li>
</ul>`
});
