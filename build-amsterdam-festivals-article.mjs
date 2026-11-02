// Build best-music-festivals-amsterdam.html from best-music-festivals-amsterdam-draft.md.
//
// Intent: current choice, Amsterdam and day trips from it. Targets "amsterdam
// music festivals" and the terms in keywords/best-music-festivals-amsterdam.json.
// ADE has its own guide at /amsterdam-dance-event; this page sends readers there.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('amsterdam-festivals');

buildRoundup({
  file: 'best-music-festivals-amsterdam.html',
  path: '/best-music-festivals-amsterdam',
  draftFile: 'best-music-festivals-amsterdam-draft.md',
  title: 'Best Music Festivals in Amsterdam 2027: DGTL, Dekmantel, AMF',
  description: 'Music festivals in Amsterdam for 2027, with dates, sound and setting: DGTL in March, Dekmantel in July, Loveland in August and AMF during ADE in October.',
  date: '2026-11-02',
  dateLabel: '2 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best music festivals in Amsterdam in 2027',
  deck: 'Amsterdam\'s dance festivals compared by sound and setting, from the docklands in March to the stadium in October, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best music festivals in Amsterdam',
  answer: 'The best music festivals in Amsterdam for 2027 depend on the season. In spring: DGTL at NDSM Docklands (26 to 28 March) and Lente Kabinet in Het Twiske (15 and 16 May). In summer: Dekmantel in the Amsterdamse Bos (29 July to 2 August) and Loveland in Sloterpark (14 and 15 August). In autumn: the Amsterdam Dance Event (20 to 24 October), with the Amsterdam Music Festival in the Johan Cruijff ArenA on a date still to be announced.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Amsterdam music festivals FAQ.',
  breadcrumb: 'Best Music Festivals in Amsterdam',
  ogName: 'amsterdam-festivals',
  bodyClass: 'amsterdam-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Amsterdam music festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the Amsterdam Music Festival?', 'amf', 'The Amsterdam Music Festival'],
    ['Which are the best techno festivals in Amsterdam?', 'techno', 'Techno festivals in Amsterdam'],
    ['Which Amsterdam festivals are for house and dance music?', 'house', 'House and dance festivals'],
    ['When is the Amsterdam Dance Event?', 'ade', 'The Amsterdam Dance Event'],
    ['Which music festivals in the Netherlands are near Amsterdam?', 'netherlands', 'Festivals near Amsterdam'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Amsterdam music festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Setting', 'Best for'],
    rows: [
      ['DGTL', 'NDSM Docklands', '26 to 28 March', 'Techno, house', 'Former shipyard', 'The start of the season'],
      ['Kingsland', 'Olympic Stadium', 'Listed 27 April', 'Dance music', 'Stadium, King\'s Day', 'The national holiday'],
      ['Lente Kabinet', 'Het Twiske', '15 and 16 May', 'House, techno, dance', 'Lakes and meadows', 'Spring outdoors'],
      ['Awakenings Upclose', 'Houtrak', '15 and 16 May', 'Techno', 'Recreation area', 'A smaller Awakenings'],
      ['Awakenings', 'Hilvarenbeek', '9 to 11 July', 'Techno', 'Recreation area', 'The main Awakenings weekend'],
      ['Dekmantel', 'Amsterdamse Bos', '29 July to 2 August', 'Techno, house and beyond', 'Woodland park', 'A wider programme'],
      ['Loveland', 'Sloterpark', '14 and 15 August', 'House, techno, dance', 'City park', 'A city park in August'],
      ['Mysteryland', 'Haarlemmermeer', '27 to 29 August', 'Wide electronic', 'Camping festival', 'A big weekend near the city'],
      ['ADE', 'Across the city', '20 to 24 October', 'Every electronic style', 'Clubs, venues, conference', 'A week of nights'],
      ['Amsterdam Music Festival', 'Johan Cruijff ArenA', 'Not announced (during ADE)', 'Big-room house, dance', 'Stadium', 'The biggest names']
    ]
  },
  media: {
    dgtl: singleSet({
      label: 'DGTL, heard from home',
      description: 'Âme DJ and Trikk at DGTL Amsterdam, April 2026.',
      youtubeId: 'V6nwn7gfWb8', genre: 'DGTL, 2026', artist: 'Âme DJ and Trikk', title: 'NDSM Docklands'
    }),
    ndsm: fig('ndsm-panorama-2025', 1200, 600,
      'A panorama of NDSM Docklands in Amsterdam Noord in 2025',
      'NDSM Docklands in Amsterdam Noord in 2025, the home of DGTL. Photograph: PA0CCB, CC BY-SA 4.0.'),
    twiske: fig('twiske-2019', 1200, 800,
      'Water and green banks in the Twiske nature area north of Amsterdam',
      'Het Twiske, north of Amsterdam, where Lente Kabinet is held. Photograph: PersianDutchNetwork, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://dgtl-festival.com/en/dgtl-amsterdam/" target="_blank" rel="noopener noreferrer">DGTL</a>, <a href="https://www.dekmantel.com/events/dekmantel-festival-2027" target="_blank" rel="noopener noreferrer">Dekmantel</a>, <a href="https://www.awakenings.com/en/events/2027/05/awakenings-upclose-2027/396040/" target="_blank" rel="noopener noreferrer">Awakenings Upclose</a>, <a href="https://www.awakenings.com/en/events/2027/07/awakenings-festival-2027/399344/" target="_blank" rel="noopener noreferrer">Awakenings</a>, <a href="https://loveland.nl/festival/" target="_blank" rel="noopener noreferrer">Loveland</a>.</li>
<li>Listed date: <a href="https://www.festivalinfo.nl/festival/37304/Kingsland-Festival-Amsterdam/2027/" target="_blank" rel="noopener noreferrer">FestivalInfo on Kingsland</a>.</li>
<li>AMF and its 2026 edition: <a href="https://www.festivalinfo.nl/festival/36321/Amsterdam-Music-Festival/2026/" target="_blank" rel="noopener noreferrer">FestivalInfo</a>.</li>
<li>Mystic Garden's move: <a href="https://www.festivalinfo.nl/news/56759/Mystic-Garden-Festival-wordt-in-2026-weekender-op-nieuwe-locatie/" target="_blank" rel="noopener noreferrer">FestivalInfo</a>. Wonderfeel: <a href="https://www.wonderfeel.nl/" target="_blank" rel="noopener noreferrer">the festival's site</a>.</li>
<li>Lente Kabinet: <a href="https://www.dekmantel.com/" target="_blank" rel="noopener noreferrer">Dekmantel</a>.</li>
<li>Mysteryland, ADE, Dekmantel, Awakenings and Defqon.1: this site's guide to each, linked above, which cites its own sources.</li>
</ul>`
});
