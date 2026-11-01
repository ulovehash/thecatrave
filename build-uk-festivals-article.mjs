// Build best-dance-music-festivals-uk.html from best-dance-music-festivals-uk-draft.md.
//
// Intent: current choice, by sound. Owns "techno festivals uk", so the techno
// guide carries no UK heading (keywords/best-dance-music-festivals-uk.json).
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// reported dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('uk-festivals');

buildRoundup({
  file: 'best-dance-music-festivals-uk.html',
  path: '/best-dance-music-festivals-uk',
  draftFile: 'best-dance-music-festivals-uk-draft.md',
  title: 'Best Dance Music Festivals in the UK 2027: Creamfields, Houghton',
  description: 'The best dance music festivals in the UK for 2027, with dates, places and sound, from Creamfields and Parklife to Houghton and Lost Village.',
  date: '2026-10-31',
  dateLabel: '31 October 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best dance music festivals in the UK in 2027',
  deck: 'UK dance festivals compared by sound, size and setting, from Creamfields to a wood in Lincolnshire, with the 2027 dates that are confirmed and the ones that are only reported.',
  bannerLabel: 'Best dance music festivals in the UK',
  answer: 'The best dance music festivals in the UK for 2027 are Creamfields in Cheshire (26 to 29 August) for scale, Houghton in Norfolk (5 to 8 August) for the sound, Parklife in Manchester (10 and 11 July) for a city weekend and Boomtown in Hampshire (11 to 15 August) for a rave. For techno, go to Terminal V in Glasgow or Junction 2 in London. For something small, go to Gottwood or Lost Village. For the widest range of music, go to We Out Here.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'UK dance festivals FAQ.',
  breadcrumb: 'Best Dance Music Festivals in the UK',
  ogName: 'uk-festivals',
  bodyClass: 'uk-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['UK dance festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['Which are the best techno festivals in the UK?', 'techno', 'Techno festivals'],
    ['Which are the best house music festivals in the UK?', 'house', 'House music festivals'],
    ['Where can you find a rave festival in the UK?', 'rave', 'Rave festivals'],
    ['Small dance festivals in the UK', 'small', 'Small dance festivals'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'UK dance music festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Best for'],
    rows: [
      ['Forbidden Forest', 'Belvoir Castle, Leicestershire', '28 to 30 May', 'Dance music', 'Three days', 'An early start to the season'],
      ['Terminal V', 'Glasgow, Scotland', '4 to 6 June', 'Techno', 'Three days, outdoors', 'Techno in Scotland'],
      ['Gottwood', 'Anglesey, Wales', 'Reported 10 to 13 June', 'House, techno', 'About 5,000', 'A small island trip'],
      ['Glastonbury', 'Pilton, Somerset', '23 to 27 June', 'All genres', 'Not a dance festival', 'Late-night areas'],
      ['Parklife', 'Heaton Park, Manchester', '10 to 11 July', 'Dance, pop, hip-hop', 'Two days', 'A city weekend'],
      ['Junction 2', 'Boston Manor Park, London', 'Summer, dates not announced', 'Techno', 'Not announced', 'Techno in London'],
      ['Houghton', 'Houghton Hall, Norfolk', '5 to 8 August', 'House, techno, dub, jazz, ambient', 'About 10,000 reported', 'The selectors'],
      ['Boomtown', 'Matterley Estate, Hampshire', '11 to 15 August', 'Techno, house, dub, reggae, ska', 'About 77,000 limit', 'A rave city'],
      ['We Out Here', 'Wimborne St Giles, Dorset', '19 to 22 August', 'Soul, hip-hop, house, jazz', 'Reported cap of 25,000', 'Open ears'],
      ['Creamfields', 'Daresbury, Cheshire', '26 to 29 August', 'EDM, house, techno', '80,000', 'The biggest crowd'],
      ['Lost Village', 'Swinderby, Lincolnshire', '26 to 29 August', 'House, techno', 'Up to 15,000 reported', 'A weekend in a wood']
    ]
  },
  media: {
    clyde: fig('queens-dock-glasgow', 1200, 674,
      'The old Queen’s Dock pumping house on the River Clyde in Glasgow',
      'The old Queen’s Dock pumping house on the Clyde, upriver from Terminal V’s new site. Photograph: Rosser1954, CC BY-SA 4.0.'),
    boston: fig('boston-manor-park', 1200, 901,
      'The lake in Boston Manor Park in west London',
      'The lake in Boston Manor Park, the home of Junction 2. Photograph: Ethan Doyle White, CC BY-SA 4.0.'),
    houghton: fig('houghton-hall', 1200, 792,
      'Houghton Hall in Norfolk seen across its grounds',
      'Houghton Hall in Norfolk, whose grounds hold the festival. Photograph: Hans A. Rosbach, CC BY-SA 3.0.'),
    boomtown: fig('boomtown-crowd-2019', 1200, 900,
      'A large crowd on the hillside in front of a stage at Boomtown in August 2019',
      'The crowd at Boomtown in August 2019. Photograph: Sam Warrenger, TheFestivals.UK, CC BY-SA 4.0.'),
    stgiles: fig('st-giles-house', 1200, 798,
      'St Giles House at Wimborne St Giles in Dorset',
      'St Giles House at Wimborne St Giles, the estate that hosts We Out Here. Photograph: Clive Perrin, CC BY-SA 2.0.'),
    belvoir: fig('belvoir-castle', 1200, 798,
      'Belvoir Castle on its hill above the Vale of Belvoir',
      'Belvoir Castle, the home of Forbidden Forest. Photograph: Julian Dowse, CC BY-SA 2.0.'),
    terminal: singleSet({
      label: 'Terminal V, heard from home',
      description: 'Alan Fitzpatrick for Terminal V Connect, filmed for Beatport Live in 2020.',
      youtubeId: 'Bdnbe9U8Boo', genre: 'Terminal V Connect, 2020', artist: 'Alan Fitzpatrick', title: 'Terminal V Connect'
    }),
    'boomtown-set': singleSet({
      label: 'Boomtown, heard from home',
      description: 'Carl Cox at Boomtown in 2019, from the festival’s own channel.',
      youtubeId: 'evP2tr-HaGM', genre: 'Boomtown, 2019', artist: 'Carl Cox', title: 'Nucleus, Boomtown 2019'
    }),
    creamfields: singleSet({
      label: 'Creamfields, heard from home',
      description: 'Jax Jones from Creamfields 2021, filmed by DJ Mag.',
      youtubeId: 'KB64mrDQkBU', genre: 'Creamfields, 2021', artist: 'Jax Jones', title: 'From Creamfields 2021'
    })
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://terminalv.co.uk/updates/terminalv-10-years-location-news" target="_blank" rel="noopener noreferrer">Terminal V</a>, <a href="https://www.forbidden-forest.co.uk/updates/you-asked-we-listened-whats-new-for-forbidden-forest-2027/" target="_blank" rel="noopener noreferrer">Forbidden Forest</a>, <a href="https://parklife.uk.com/" target="_blank" rel="noopener noreferrer">Parklife</a>, <a href="https://houghtonfestival.co.uk/" target="_blank" rel="noopener noreferrer">Houghton</a>, <a href="https://www.lostvillagefestival.com/" target="_blank" rel="noopener noreferrer">Lost Village</a>, <a href="https://www.weoutherefestival.com/" target="_blank" rel="noopener noreferrer">We Out Here</a>, <a href="https://www.junction2.london/" target="_blank" rel="noopener noreferrer">Junction 2</a>.</li>
<li>Reported dates: Visit Wales and Technoairlines (Gottwood), Technoairlines (Hideout).</li>
<li>Terminal V stages and setting: <a href="https://www.skiddle.com/news/all/Sigp-up-for-Terminal-V-2027-at-Clydeside-Live/62109/" target="_blank" rel="noopener noreferrer">Skiddle</a> and Time Out, 29 September 2026.</li>
<li>Capacity reports: festivalcalendar.uk (Houghton, Lost Village), The Lincolnite (Lost Village), Dorset Council licensing papers (We Out Here), Mixmag (Gottwood).</li>
<li>Poll ranks: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
<li>Creamfields, Boomtown and Glastonbury: this site's guide to each festival, linked above, which cites its own sources.</li>
</ul>`
});
