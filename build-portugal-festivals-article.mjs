// Build best-electronic-music-festivals-portugal.html from
// best-electronic-music-festivals-portugal-draft.md.
//
// Intent: current choice, Portugal. Head "music festivals portugal" is general
// music and seasonal; the page is written narrower, for "portugal electronic
// music festival" and the terms in keywords/best-electronic-music-festivals-portugal.json.
// Boom is one linked entry: the detail lives in best-psytrance-festivals.
// Waking Life is short and links best-electronic-music-festivals-europe.
//
// Maintenance: refresh as unannounced dates are published and roll to 2028 in
// September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('portugal-festivals');

buildRoundup({
  file: 'best-electronic-music-festivals-portugal.html',
  path: '/best-electronic-music-festivals-portugal',
  draftFile: 'best-electronic-music-festivals-portugal-draft.md',
  title: 'Best Electronic Festivals in Portugal 2027: Neopop, Boom, Somnii',
  description: 'The best electronic music festivals in Portugal for 2027, with dates: Neopop for techno, Boom for psytrance, Sónar and LISB-ON in Lisbon, RFM Somnii.',
  date: '2026-11-03',
  dateLabel: '3 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best electronic music festivals in Portugal in 2027',
  deck: 'The electronic festivals in Portugal compared by sound and setting, from a fort in Viana do Castelo to a beach at Figueira da Foz, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Electronic music festivals in Portugal',
  answer: 'The best electronic music festivals in Portugal for 2027 depend on the sound. For techno: Neopop in Viana do Castelo (5 to 7 August). For psytrance: Boom at Idanha-a-Nova (18 to 25 July, sold out). For EDM on a beach: RFM Somnii at Figueira da Foz (9 to 11 July). In and around Lisbon: Sónar Lisboa, LISB-ON and Suncébeat New Horizons (17 to 21 June).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Electronic music festivals in Portugal FAQ.',
  breadcrumb: 'Best Electronic Music Festivals in Portugal',
  ogName: 'portugal-festivals',
  bodyClass: 'portugal-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Portugal electronic music festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['Which is the best Portugal techno festival?', 'techno', 'Techno: Neopop'],
    ['Which Portugal psytrance festival is on in 2027?', 'psytrance', 'Psytrance: Boom'],
    ['Which electronic festivals are in and around Lisbon?', 'lisbon', 'Lisbon festivals'],
    ['Which music festivals in Portugal are on the beach or in the countryside?', 'beach-countryside', 'Beach and countryside'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Electronic music festivals in Portugal compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Setting', 'Best for'],
    rows: [
      ['Sónar Lisboa', 'Lisbon', 'Not announced (no 2026 edition; return unconfirmed)', 'City park', 'Sónar in the capital'],
      ['Suncébeat New Horizons', 'Costa da Caparica', '17 to 21 June', 'Beach club, boat parties', 'Soulful house and disco'],
      ['Waking Life', 'Crato', 'Not announced (17 to 22 June in 2026)', 'Countryside', 'A small week in June'],
      ['LISB-ON Jardim Sonoro', 'Lisbon', 'Not announced (3 and 4 July in 2026)', 'City park', 'House and techno in the city'],
      ['RFM Somnii', 'Figueira da Foz', '9 to 11 July', 'Beach', 'Big-stage EDM by the sea'],
      ['Boom', 'Idanha-a-Nova', '18 to 25 July, sold out', 'Lakeside estate', 'Psytrance'],
      ['Neopop', 'Viana do Castelo', '5 to 7 August', 'Fort', 'Techno']
    ]
  },
  media: {
    neopop: singleSet({
      label: 'Neopop, heard from home',
      description: "The Advent playing a live 90s set at Neopop in 2019, published by the festival.",
      youtubeId: 'gxBFWSARj5w', genre: 'Neopop', artist: 'The Advent', title: 'Live 90s set at Neopop 2019'
    }),
    fort: fig('santiago-da-barra-fort', 1200, 800,
      'Stone walls and a cobbled path inside the Forte de Santiago da Barra in Viana do Castelo',
      'The Forte de Santiago da Barra, Neopop’s site in Viana do Castelo. Photograph: Krzysztof Golik, CC BY-SA 4.0.'),
    somnii: fig('rfm-somnii-2017', 1200, 675,
      'The lit entrance arch of RFM Somnii on the beach at Figueira da Foz at night',
      'The entrance to RFM Somnii on the Figueira da Foz beach after sunset, 2017. Photograph: Joehawkins, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>Neopop 2026 (Antipop): <a href="https://mixmag.net/amp/neopop-celebrates-20-years-antipop-theme-2026-portugal" target="_blank" rel="noopener noreferrer">Mixmag</a> and <a href="https://www.noticiasaominuto.com/cultura/3032794/neopop-celebra-20-anos-de-musica-eletronica-entre-hoje-e-sabado-em-viana" target="_blank" rel="noopener noreferrer">Lusa via Notícias ao Minuto, 6 August 2026</a>; 2027 dates and passes: <a href="https://xceed.me/en/porto/event/neopop-festival-2027/241210/channel/maria-joana" target="_blank" rel="noopener noreferrer">the festival's ticket page on Xceed</a>.</li>
<li>Boom 2027: <a href="https://www.boomfestival.org/news/everything-you-need-to-know-about-boom-2027-tickets/" target="_blank" rel="noopener noreferrer">Boom's ticket guide</a> and <a href="https://theportugalpost.com/posts/portugals-boomland-reveals-2026-wellness-gathering-and-2027-30-year-fest" target="_blank" rel="noopener noreferrer">The Portugal Post</a>; tickets: <a href="https://www.boomfestival.org/news/boom-2027-tickets-sold-out" target="_blank" rel="noopener noreferrer">Boom</a>.</li>
<li>Sónar Lisboa: <a href="https://echoboomer.pt/sonar-lisboa-nao-se-realiza-em-2026-e-volta-em-2027/" target="_blank" rel="noopener noreferrer">Echo Boomer, 26 November 2025</a> and <a href="https://sonarlisboa.pt/" target="_blank" rel="noopener noreferrer">the festival's site</a>.</li>
<li>LISB-ON: <a href="https://lisb-on.pt/" target="_blank" rel="noopener noreferrer">the festival's site</a> and <a href="https://electronicgroove.com/lisb-on-reveals-first-names-for-2026-festival/" target="_blank" rel="noopener noreferrer">Electronic Groove</a>.</li>
<li>Suncébeat New Horizons 2027: <a href="https://echoboomer.pt/suncebeat-new-horizons-regressa-costa-da-caparica-2027/" target="_blank" rel="noopener noreferrer">Echo Boomer, 2 July 2026</a>.</li>
<li>RFM Somnii 2027: <a href="https://www.rfmsomnii.com/" target="_blank" rel="noopener noreferrer">the festival's site</a>, <a href="https://www.rfmsomnii.com/lineup/" target="_blank" rel="noopener noreferrer">2026 line-up</a> and <a href="https://rfm.pt/atualidade/amp/22496/rfm-somnii-intermarche-2027-ja-sao-conhecidas-as-datas-da-proxima-edicao-e-os-bilhetes-ja-estao-a-venda" target="_blank" rel="noopener noreferrer">RFM</a>.</li>
<li>Waking Life: <a href="https://it.ra.co/news/83885" target="_blank" rel="noopener noreferrer">Resident Advisor on the 2026 dates</a> and <a href="https://ra.co/news/82816" target="_blank" rel="noopener noreferrer">on the 2025 line-up</a>.</li>
<li>ZNA Gathering: <a href="https://www.znagathering.com/" target="_blank" rel="noopener noreferrer">the festival's site</a>.</li>
</ul>`
});
