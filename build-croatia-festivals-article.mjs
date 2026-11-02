// Build best-music-festivals-croatia.html from best-music-festivals-croatia-draft.md.
//
// Intent: current choice, Croatia. Targets "music festivals croatia",
// "festivals in croatia", "festivals tisno" and the terms in
// keywords/best-music-festivals-croatia.json. Ultra Europe sits inside the
// Ultra guide; this page sends readers to its section there.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('croatia-festivals');

buildRoundup({
  file: 'best-music-festivals-croatia.html',
  path: '/best-music-festivals-croatia',
  draftFile: 'best-music-festivals-croatia-draft.md',
  title: 'Best Music Festivals in Croatia 2027: Ultra Europe, Hideout',
  description: 'Music festivals in Croatia for 2027, with dates, sound and setting: Ultra Europe in Split on 9 to 11 July, Hideout at Zrće and the Tisno summer from June to August.',
  date: '2026-11-02',
  dateLabel: '2 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best music festivals in Croatia in 2027',
  deck: 'Croatia\'s summer festivals compared by sound and setting, from a park in Split to the beach clubs of Zrće and the seaside site in Tisno, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best music festivals in Croatia',
  answer: 'The best music festivals in Croatia for 2027 depend on the week you want. For the biggest names: Ultra Europe in Split (9 to 11 July). For beach clubs: Hideout at Zrće (29 June to 2 July). For a small seaside site: Tisno, where Love International (7 to 13 July), Outlook Origins (22 to 26 July), Dekmantel Selectors (19 to 23 August) and Dimensions (26 to 31 August) follow one another.',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'Croatia music festivals FAQ.',
  breadcrumb: 'Best Music Festivals in Croatia',
  ogName: 'croatia-festivals',
  bodyClass: 'croatia-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Croatia music festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest music festival in Croatia?', 'biggest', 'The biggest music festival in Croatia'],
    ['Which Croatian festivals are on Zrće beach?', 'zrce', 'Festivals on Zrće beach'],
    ['What are the festivals in Tisno?', 'tisno', 'Festivals in Tisno'],
    ['Which other music festivals in Croatia are worth the trip?', 'other', 'Other festivals in Croatia'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Music festivals in Croatia compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Setting', 'Best for'],
    rows: [
      ['Sea Star', 'Umag', 'Not announced (28 to 31 May in 2026)', 'EDM, dance', 'Seaside complex', 'An early start'],
      ['INmusic', 'Zagreb', '27 to 29 June', 'Rock, alternative', 'Lake island', 'The capital'],
      ['Hideout', 'Zrće, Pag', '29 June to 2 July', 'House, techno', 'Beach clubs', 'Club nights by the sea'],
      ['Hospitality on the Beach', 'Tisno', 'Listed 30 June to 5 July', 'Drum and bass', 'Seaside site', 'The Hospital Records roster'],
      ['Love International', 'Tisno', '7 to 13 July', 'Wide electronic', 'Seaside site, boats', 'A week by the sea'],
      ['Ultra Europe', 'Split', '9 to 11 July', 'EDM, house, techno', 'Stadium park', 'The biggest names'],
      ['Terminal V Croatia', 'Tisno', '15 to 19 July', 'Techno', 'Seaside site', 'Techno by the sea'],
      ['Outlook Origins', 'Tisno', '22 to 26 July', 'Bass music', 'Seaside site', 'Dub, dubstep and more'],
      ['Dekmantel Selectors', 'Tisno', '19 to 23 August', 'House, techno and beyond', 'Seaside site', 'Dekmantel by the sea'],
      ['Dimensions', 'Tisno', '26 to 31 August', 'Wide electronic', 'Seaside site', 'The end of summer']
    ]
  },
  media: {
    'love-international': singleSet({
      label: 'Tisno, heard from home',
      description: 'DJ Subaru at Love International in Tisno, 2026, recorded by The Lot Radio.',
      youtubeId: 'rrO-L80-u7I', genre: 'Love International, 2026', artist: 'DJ Subaru', title: 'The Lot Radio'
    }),
    ultra: fig('ultra-europe-split-2015', 1200, 900,
      'The main stage and crowd at Ultra Europe at the Poljud Stadium in Split in 2015',
      'Ultra Europe at the Poljud Stadium in Split in 2015, before the move to Park Mladeži. Photograph: Shadster, CC BY-SA 4.0.'),
    hideout: fig('hideout-zrce-2015', 1200, 800,
      'A daytime crowd at Hideout festival on Zrće beach in 2015',
      'Hideout on Zrće beach in 2015. Photograph: Gary Brown, CC BY-SA 4.0.'),
    tisno: fig('tisno-night-2019', 1200, 900,
      'The harbour of Tisno lit up at night in 2019',
      'Tisno at night in 2019. Photograph: Linda Brakus, CC BY-SA 4.0.'),
    'sea-star': fig('sea-star-2018', 1200, 733,
      'Dimitri Vegas and Like Mike on the main stage at Sea Star festival in 2018',
      'Dimitri Vegas &amp; Like Mike on the main stage at Sea Star in 2018. Photograph: SSF\'s photo team, CC BY-SA 3.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://ultraeurope.com/" target="_blank" rel="noopener noreferrer">Ultra Europe</a> (and <a href="https://ultraeurope.com/tickets" target="_blank" rel="noopener noreferrer">its ticket page</a> for the age limit), <a href="https://hideoutfestival.com/faqs/" target="_blank" rel="noopener noreferrer">Hideout</a>, <a href="https://loveinternationalfestival.com/faqs" target="_blank" rel="noopener noreferrer">Love International</a>, <a href="https://www.outlookorigins.com/" target="_blank" rel="noopener noreferrer">Outlook Origins</a>, <a href="https://www.terminalv.co.uk/croatia" target="_blank" rel="noopener noreferrer">Terminal V Croatia</a>, <a href="https://www.dekmantelselectors.com/" target="_blank" rel="noopener noreferrer">Dekmantel Selectors</a>, <a href="https://www.inmusicfestival.com/" target="_blank" rel="noopener noreferrer">INmusic</a>, <a href="https://www.dimensionsfestival.com/" target="_blank" rel="noopener noreferrer">Dimensions</a>.</li>
<li>Listed date: <a href="https://www.technoairlines.com/festival/hospitality-on-the-beach-tisno-croatia-2027" target="_blank" rel="noopener noreferrer">Technoairlines on Hospitality on the Beach</a>. Terminal V's 2026 edition: <a href="https://mixmagnl.com/read/terminal-v-croatia-concludes-largest-edition-to-date-and-confirms-2027-return-news" target="_blank" rel="noopener noreferrer">Mixmag</a>.</li>
<li>Past editions: <a href="https://www.seastarfestival.com/" target="_blank" rel="noopener noreferrer">Sea Star</a>.</li>
<li>Sonus: <a href="https://www.zrce.com/events/sonus-festival-2026" target="_blank" rel="noopener noreferrer">Zrće</a>. Defected Croatia: <a href="https://www.glitterboxibiza.com/news/post/defected-croatia-a-message-from-our-ceo-wez-saunders" target="_blank" rel="noopener noreferrer">a message from Defected's chief executive</a>.</li>
<li>Ultra Europe's 2023 attendance and history: this site's guide to each, linked above, which cites its own sources.</li>
</ul>`
});
