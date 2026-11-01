// Build best-psytrance-festivals.html from best-psytrance-festivals-draft.md.
//
// Intent: current choice. The head term leans to calendars, so this page wins
// on "best", not on listing everything (keywords/best-psytrance-festivals.json).
// The organiser spells it Universo Paralello; the page follows the organiser.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('psytrance-festivals');

buildRoundup({
  file: 'best-psytrance-festivals.html',
  path: '/best-psytrance-festivals',
  draftFile: 'best-psytrance-festivals-draft.md',
  title: 'Best Psytrance Festivals 2027: Ozora, Boom and Universo Paralello',
  description: 'The best psytrance festivals for 2027, with dates, setting and what to expect, from Boom in Portugal and Ozora in Hungary to Universo Paralello in Brazil.',
  date: '2026-10-31',
  dateLabel: '31 October 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best psytrance festivals in 2027',
  deck: 'The main psytrance festivals compared by place, length and feel, from Boom and Ozora to the bush of central Victoria, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best psytrance festivals',
  answer: 'The best psytrance festivals for 2027 are Boom in Portugal (18 to 25 July, already sold out), Ozora in Hungary (listed for 23 July to 3 August) and Universo Paralello in Brazil (listed from 27 December 2026). In Europe, VooV, Hadra, Own Spirit, Mo:Dem, Burning Mountain and Indian Spirit are the other choices. In Australia, look at Rainbow Spirit in Victoria (5 to 8 March).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Psytrance festivals FAQ.',
  breadcrumb: 'Best Psytrance Festivals',
  ogName: 'psytrance-festivals',
  bodyClass: 'psytrance-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Psytrance festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest psytrance festival?', 'biggest', 'The biggest psytrance festival'],
    ['Which are the best psytrance festivals in Europe?', 'europe', 'Psytrance festivals in Europe'],
    ['Are there psytrance festivals in the USA?', 'usa', 'Psytrance festivals in the USA'],
    ['Where are the best psytrance festivals in Australia?', 'australia', 'Psytrance festivals in Australia'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Psytrance festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Length', 'Best for'],
    rows: [
      ['Universo Paralello', 'Pratigi, Bahia, Brazil', 'Listed from 27 December 2026', 'Beach', 'Over a week', 'New Year in the sun'],
      ['Rainbow Spirit', 'Glenaroua, Victoria, Australia', '5 to 8 March', 'Bush', 'Four days', 'Australia’s main gathering'],
      ['Burning Mountain', 'Zernez, Switzerland', '24 to 27 June', 'Alps, 1,500 m', 'Four days', 'A mountain setting'],
      ['VooV', 'Putlitz, Germany', 'Listed 16 to 19 July', 'Countryside', 'Four days', 'A smaller German gathering'],
      ['Boom', 'Idanha-a-Nova, Portugal', '18 to 25 July, sold out', 'Lake', 'Eight days', 'The widest programme'],
      ['Ozora', 'Dádpuszta, Hungary', 'Listed 23 July to 3 August', 'Open hills', 'About twelve days', 'The long stay'],
      ['Mo:Dem', 'Primišlje, Croatia', '2 to 8 August', 'River valley', 'Seven days', 'Darker sounds'],
      ['Indian Spirit', 'Eldena, Germany', '25 to 30 August', 'Countryside', 'Six days', 'A large German gathering'],
      ['Hadra', 'Allier, France', 'Not announced (27 to 30 August in 2026)', 'Lake', 'Four days', 'A French summer weekend'],
      ['Own Spirit', 'Huesca, Spain', '1 to 6 September', 'Reservoir', 'Six days', 'The end of summer']
    ]
  },
  media: {
    blanka: singleSet({
      label: 'Psytrance, heard from home',
      description: 'BLANKA for Boiler Room in Warsaw, filmed in 2026.',
      youtubeId: 'VF1Dy_RGJS4', genre: 'Warsaw, 2026', artist: 'BLANKA', title: 'Boiler Room: Warsaw'
    }),
    boom: fig('boom-being-fields-2018', 1200, 800,
      'Boom Festival seen from the Being Fields area in 2018',
      'Boom in 2018, seen from the Being Fields. Photograph: Racheland Deckard, CC BY-SA 4.0.'),
    ozora: fig('ozora-horizon-2018', 1200, 400,
      'A wide view of the horizon over the Ozora festival site in 2018',
      'The horizon at Ozora in 2018. Photograph: Max Ambio, CC0.'),
    universo: fig('universo-paralello-2009', 1200, 900,
      'Universo Paralello on the coast of Bahia in Brazil in 2009',
      'Universo Paralello, at New Year 2009. Photograph: Marco Langebeeke, CC BY 2.0.'),
    voov: fig('voov-2005', 1024, 768,
      'The VooV Experience festival in Germany in 2005',
      'VooV in July 2005. Photograph: Andy Weisner, CC BY-SA 2.0.'),
    hadra: fig('hadra-main-stage-2019', 1200, 721,
      'The main stage at Hadra Trance Festival in France in 2019',
      'The main stage at Hadra in August 2019. Photograph: Louciie-13, CC BY-SA 4.0, cropped.'),
    rainbow: fig('rainbow-serpent-2019', 1200, 900,
      'A rainbow over festival-goers at Rainbow Serpent in Victoria in January 2019',
      'Rainbow Serpent, as the festival was then called, in January 2019. Photograph: RaimbowTomcat, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://www.boomfestival.org/" target="_blank" rel="noopener noreferrer">Boom</a>, <a href="https://burning-mountain.ch/" target="_blank" rel="noopener noreferrer">Burning Mountain</a>, <a href="https://www.ownspiritfestival.org/" target="_blank" rel="noopener noreferrer">Own Spirit</a>, <a href="https://indian-spirit.de/" target="_blank" rel="noopener noreferrer">Indian Spirit</a> and <a href="https://modemfestival.com/home/" target="_blank" rel="noopener noreferrer">Mo:Dem</a>; Rainbow Spirit from its <a href="https://events.humanitix.com/emergentform" target="_blank" rel="noopener noreferrer">ticketing page</a>.</li>
<li>Boom tickets: <a href="https://www.boomfestival.org/news/boom-2027-tickets-sold-out" target="_blank" rel="noopener noreferrer">Boom, 13 October 2026</a>.</li>
<li>Listed dates: Technoairlines (VooV, Ozora), Techno Univers and Shotgun (Universo Paralello).</li>
<li>Boom attendance: Lusa via <a href="https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas" target="_blank" rel="noopener noreferrer">Notícias ao Minuto</a>, 24 July 2025, and <a href="https://boomfestival.org/news/letter-to-the-boomers-2025" target="_blank" rel="noopener noreferrer">Boom's letter after the 2025 edition</a>.</li>
<li>Ozora attendance: <a href="https://xpatloop.com/channels/2026/08/inside-ozora-how-safe-is-hungary%E2%80%99s-world-famous-psychedelic-festival.html" target="_blank" rel="noopener noreferrer">XpatLoop</a>.</li>
<li>Indian Spirit attendance: Grateful Web.</li>
<li>Shankra: <a href="https://www.suedostschweiz.ch/schweiz-und-welt/shankra-festival-2026-in-lostallo-gr-zum-dritten-mal-abgesagt-1911274" target="_blank" rel="noopener noreferrer">Südostschweiz</a> and <a href="https://www.rsi.ch/info/ticino-grigioni-e-insubria/Lostallo-niente-Shankra-Festival-per-il-terzo-anno-consecutivo--3789770.html" target="_blank" rel="noopener noreferrer">RSI</a>, June 2026.</li>
<li>Wild Horses: <a href="https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/" target="_blank" rel="noopener noreferrer">Beat</a>. Hadra: <a href="https://hadratrancefestival.net/" target="_blank" rel="noopener noreferrer">the festival's own site</a>.</li>
<li>A State of Trance US festival: Insomniac and EDM.com. Equinox Teaser USA: Bandsintown.</li>
</ul>`
});
