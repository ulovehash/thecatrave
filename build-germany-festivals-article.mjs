// Build best-electronic-music-festivals-germany.html from best-electronic-music-festivals-germany-draft.md.
//
// Intent: current choice, Germany. Targets "music festivals germany", "edm
// festival germany" and the terms in keywords/best-electronic-music-festivals-germany.json.
// Time Warp, Parookaville, Airbeat One and Fusion have their own guides; this
// page compares and sends readers there.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('germany-festivals');

buildRoundup({
  file: 'best-electronic-music-festivals-germany.html',
  path: '/best-electronic-music-festivals-germany',
  draftFile: 'best-electronic-music-festivals-germany-draft.md',
  title: 'Electronic Music Festivals in Germany 2027: Time Warp, Nature One',
  description: 'Electronic music festivals in Germany for 2027, with dates, size and setting: Time Warp on 3 April, Parookaville and Sea You in July, Nature One from 29 July.',
  date: '2026-11-02',
  dateLabel: '2 November 2026',
  kicker: 'Festival guide, 2027',
  h1: 'The best electronic music festivals in Germany in 2027',
  deck: 'Germany\'s techno and EDM festivals compared by size, setting and sound, from an indoor all-nighter in Mannheim to a former missile base in the Hunsrück, with the 2027 dates.',
  bannerLabel: 'Best electronic music festivals in Germany',
  answer: 'The best electronic music festivals in Germany for 2027 depend on the trip you want. For techno: Time Warp in Mannheim (3 April), MAYDAY in Dortmund (30 April) and Stone Techno in Essen (9 to 11 July). For a very large camping weekend: Parookaville at Airport Weeze (16 to 18 July), Airbeat One at Neustadt-Glewe (7 to 11 July) and Nature One (29 July to 1 August). For a stadium: World Club Dome in Frankfurt (4 to 6 June).',
  introTitle: 'A list meant for choosing.',
  faqTitle: 'German electronic music festivals FAQ.',
  breadcrumb: 'Best Electronic Music Festivals in Germany',
  ogName: 'germany-festivals',
  bodyClass: 'germany-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['German electronic festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What is the biggest EDM festival in Germany?', 'biggest', 'The biggest EDM festival in Germany'],
    ['Which are the best techno festivals in Germany?', 'techno', 'Techno festivals in Germany'],
    ['Where are Germany\'s big EDM festivals?', 'edm', 'EDM festivals in Germany'],
    ['Which smaller festivals are worth the trip?', 'smaller', 'Smaller festivals'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Electronic music festivals in Germany compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Setting', 'Best for'],
    rows: [
      ['Time Warp', 'Mannheim', '3 April', 'Techno, house', 'Indoor halls', 'One long night'],
      ['MAYDAY', 'Dortmund', '30 April', 'Hard techno', 'Indoor halls', 'The eve of May Day'],
      ['World Club Dome', 'Frankfurt', '4 to 6 June', 'EDM, house, techno', 'Football stadium', 'A city weekend'],
      ['Docklands', 'Münster', '12 June', 'House, techno, trance', 'Open air', 'A single day'],
      ['Airbeat One', 'Neustadt-Glewe', '7 to 11 July', 'EDM, hardstyle, techno', 'Airfield, camping', 'A themed main stage'],
      ['Stone Techno', 'Essen', '9 to 11 July', 'Techno', 'Former coal mine', 'An industrial landmark'],
      ['Parookaville', 'Airport Weeze', '16 to 18 July', 'EDM, house, hardstyle', 'Built town, camping', 'The biggest crowd'],
      ['Sea You', 'Freiburg', '16 to 18 July', 'House, techno, EDM', 'Lake', 'The south-west'],
      ['Nature One', 'Kastellaun', '29 July to 1 August', 'Techno and beyond', 'Former missile base, camping', 'The end of summer'],
      ['SonneMondSterne', 'Saalburg-Ebersdorf', 'Not announced (6 to 9 August in 2026)', 'EDM, techno', 'Open air', 'A lakeside weekend']
    ]
  },
  media: {
    'time-warp': singleSet({
      label: 'Time Warp, heard from home',
      description: 'Honey Dijon presents Sinister on Floor 2 at Time Warp Mannheim, 2026.',
      youtubeId: 'Ec6_yhRURSQ', genre: 'Time Warp, 2026', artist: 'Honey Dijon', title: 'Sinister'
    }),
    airbeat: fig('airbeat-one-mainstage-2019', 1200, 600,
      'The themed main stage at Airbeat One festival in 2019',
      'The main stage at Airbeat One in 2019. Photograph: Q1q2q3q, CC BY-SA 4.0.'),
    mayday: fig('mayday-dortmund-2009', 1200, 800,
      'A crowd and light show inside the Westfalenhallen at MAYDAY in 2009',
      'MAYDAY at the Westfalenhallen in Dortmund in 2009. Photograph: Arne Müseler, CC BY-SA 3.0 DE.'),
    'world-club-dome': fig('world-club-dome-2013', 1200, 900,
      'The stage and crowd at World Club Dome in 2013',
      'World Club Dome in 2013. Photograph: Tobias Franz, CC BY 2.0.'),
    'sea-of-love': fig('sea-of-love-tunisee-2011', 1200, 900,
      'A festival main stage by the Tunisee lake near Freiburg in 2011',
      'Sea of Love at the Tunisee in 2011, the lake where Sea You is held. Photograph: Gzen92, CC BY-SA 4.0.')
  },
  sourcesHtml: `<ul>
<li>2027 dates from each festival's own site: <a href="https://www.time-warp.de/" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://www.mayday.de/info" target="_blank" rel="noopener noreferrer">MAYDAY</a>, <a href="https://www.worldclubdome.com/info" target="_blank" rel="noopener noreferrer">World Club Dome</a>, <a href="https://www.docklands-festival.de/" target="_blank" rel="noopener noreferrer">Docklands</a>, <a href="https://airbeat-one.de/info/" target="_blank" rel="noopener noreferrer">Airbeat One</a>, <a href="https://www.stone-techno.com/" target="_blank" rel="noopener noreferrer">Stone Techno</a>, <a href="https://www.parookaville.com/en/info" target="_blank" rel="noopener noreferrer">Parookaville</a>, <a href="https://www.seayou-festival.de/" target="_blank" rel="noopener noreferrer">Sea You</a> (and <a href="https://www.seayou-festival.de/faq" target="_blank" rel="noopener noreferrer">its FAQ</a>), <a href="https://www.nature-one.de/info" target="_blank" rel="noopener noreferrer">Nature One</a>.</li>
<li>SonneMondSterne: <a href="https://www.sonnemondsterne.de/p/faq" target="_blank" rel="noopener noreferrer">the festival's FAQ</a>.</li>
<li>Fusion in 2027: <a href="https://www.berliner-zeitung.de/article/fusion-festival-faellt-2027-aus-das-ist-der-grund-10007201" target="_blank" rel="noopener noreferrer">Berliner Zeitung</a>.</li>
<li>Parookaville, Time Warp, Airbeat One, Fusion and the Love Parade: this site's guide to each, linked above, which cites its own sources.</li>
</ul>`
});
