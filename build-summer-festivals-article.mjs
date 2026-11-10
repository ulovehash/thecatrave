// Build best-summer-electronic-music-festivals.html from best-summer-electronic-music-festivals-draft.md.
//
// Intent: choosing a summer weekend, worldwide, Europe and the US. The owner
// asked for real underground sections next to the big festivals (2026-11-10):
// "alternatives to Garbicz" in Europe and their US counterparts.
// Keywords: keywords/best-summer-electronic-music-festivals.json. Media:
// media/best-summer-electronic-music-festivals.json, all new to the site.
//
// Maintenance: registered in festival-editions.mjs with ends: null. Refresh as
// listed dates are confirmed and roll to 2028 in September 2027.
import fs from 'node:fs';
import {buildRoundup, figureSet, singleSet} from './festival-roundup.mjs';

const fig = figureSet('summer-festivals');
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

buildRoundup({
  file: 'best-summer-electronic-music-festivals.html',
  path: '/best-summer-electronic-music-festivals',
  draftFile: 'best-summer-electronic-music-festivals-draft.md',
  title: 'Best Summer EDM and Electronic Music Festivals 2027',
  description: 'Summer 2027 festival dates in Europe and the US: EDM\'s big stages like Tomorrowland, Untold and Creamfields, and underground ones like Garbicz and The Great Beyond.',
  date: '2026-11-10',
  dateLabel: '10 November 2026',
  kicker: 'Festival guide, summer 2027',
  h1: 'The best summer EDM and electronic music festivals of 2027',
  deck: 'Summer electronic music festivals in Europe and the US, from the big stages to the small underground weekends in forests and campgrounds, with the 2027 dates that are confirmed and the ones that are not.',
  bannerLabel: 'Best summer festivals',
  answer: 'The biggest summer EDM festivals of 2027 are Tomorrowland in Belgium (dates not yet announced), Untold in Romania (5 to 8 August), Creamfields in England (26 to 29 August) and Beyond Wonderland at the Gorge in Washington (25 to 27 June). Away from EDM, the underground choices are Garbicz in Poland, NACHTI in Germany (30 July to 1 August) or The Great Beyond in Minnesota.',
  introTitle: 'Two kinds of summer.',
  faqTitle: 'Summer festivals FAQ.',
  breadcrumb: 'Best Summer Electronic Music Festivals',
  ogName: 'summer-festivals',
  bodyClass: 'summer-festivals-page',
  sections: [
    ['How this list was chosen', 'criteria', 'How this list was chosen'],
    ['Summer festival dates for 2027 at a glance', 'at-a-glance', '2027 dates at a glance'],
    ['What are the biggest summer EDM festivals?', 'biggest', 'The biggest summer festivals'],
    ['House and techno in summer', 'house-techno', 'House and techno'],
    ['Underground summer festivals in Europe', 'underground-europe', 'Underground in Europe'],
    ['Underground summer festivals in the US', 'underground-us', 'Underground in the US'],
    ['Not on this list, and why', 'not-listed', 'Not on this list, and why'],
    ['How to choose', 'choose', 'How to choose']
  ],
  table: {
    label: 'Summer festivals compared, 2027',
    headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Best for'],
    rows: [
      ['Kala', 'Dhërmi, Albania', '2 to 9 June', 'Electronic', 'Small, hotel included', 'A beach week'],
      ['Gottwood', 'Anglesey, Wales', 'Reported 10 to 13 June', 'Electronic', 'About 5,000', 'A woodland weekend'],
      ['Waking Life', 'Crato, Portugal', 'Not announced (16 to 22 June in 2026)', 'Electronic', 'Small, non-profit', 'The solstice week'],
      ['Sónar', 'Barcelona, Spain', '17 to 19 June', 'Electronic, experimental', 'About 150,000 in 2026', 'A city festival'],
      ['Defqon.1', 'Biddinghuizen, Netherlands', '24 to 27 June', 'Hardstyle, hard dance', 'Large camping, sold out', 'Hard dance'],
      ['Beyond Wonderland at the Gorge', 'George, Washington', '25 to 27 June', 'Big-stage EDM', 'Large camping', 'A big US weekend'],
      ['Tec-Troit', 'Detroit, Michigan', 'Listed 25 to 27 June', 'Detroit techno', 'Free, all ages', 'Detroit artists'],
      ['Electric Forest', 'Rothbury, Michigan', 'Not announced (25 to 28 June in 2026)', 'EDM', 'Large camping', 'The forest at night'],
      ['Kappa FuturFestival', 'Turin, Italy', '2 to 4 July', 'Techno, house', 'Large', 'Techno in a city park'],
      ['Awakenings', 'Hilvarenbeek, Netherlands', '9 to 11 July', 'Techno', 'Large', 'Techno all weekend'],
      ['Ultra Europe', 'Split, Croatia', '9 to 11 July', 'Big-stage EDM', 'Large', 'A coast holiday'],
      ['Bass Coast', 'Merritt, BC, Canada', '9 to 12 July', 'Bass music, electronic', 'Five stages, 150+ artists', 'An independent campout'],
      ['Freerotation', 'Clyro, Wales', 'Not announced (10 to 12 July in 2026)', 'Electronic', 'Members only', 'Those who know a member'],
      ['Tomorrowland', 'Boom, Belgium', 'Not announced (two weekends in July)', 'Big-stage EDM', 'About 400,000 in 2026', 'The spectacle'],
      ['Dirtybird Campout', 'Piercy, California', 'Listed 15 to 18 July', 'House', 'Campground', 'A playful house weekend'],
      ['Parookaville', 'Weeze, Germany', '16 to 18 July', 'Big-stage EDM', 'About 75,000 a day', 'A festival town'],
      ['The Great Beyond', 'Minnesota', 'Not announced (24 to 26 July in 2026)', 'Psychedelic techno', 'Small campout', 'An underground US campout'],
      ['Garbicz', 'Garbicz, Poland', 'Listed 29 July to 2 August', 'Electronic', 'About 11,000', 'A forest by a lake'],
      ['Dekmantel', 'Amsterdam, Netherlands', '29 July to 2 August', 'House, techno, disco', 'Large', 'Deep booking'],
      ['NACHTI', 'Olganitz, Germany', '30 July to 1 August', 'Electronic', 'About 3,000', 'A small lakeside weekend'],
      ['HARD Summer', 'Inglewood, California', 'Not announced (1 to 2 August in 2026)', 'EDM', 'Large', 'Los Angeles'],
      ['Houghton', 'Norfolk, England', '5 to 8 August', 'House, techno, electronic', 'About 10,000', 'Long sets, all night'],
      ['Untold', 'Cluj-Napoca, Romania', '5 to 8 August', 'Big-stage EDM', 'Large, four nights', 'A big stage in a city'],
      ['Elements', 'Long Pond, Pennsylvania', 'Listed 6 to 8 August', 'House, techno', 'Large camping', 'House and techno in the US'],
      ['Field Maneuvers', 'Norfolk, England', '20 to 22 August', 'Electronic', 'Small', 'A secret site'],
      ['Creamfields', 'Daresbury, England', '26 to 29 August', 'Big-stage EDM', 'About 80,000', 'The end of the British summer']
    ]
  },
  media: {
    'tomorrowland-photo': fig('tomorrowland-main-stage-2026', 1200, 800,
      'The Tomorrowland main stage at Boom at night, July 2026',
      'The Tomorrowland main stage at Boom, 18 July 2026. Photograph: Ludovic Delot, CC BY 4.0.'),
    'tomorrowland-set': singleSet({
      label: 'Tomorrowland, heard from home',
      description: 'Charlotte de Witte on a Tomorrowland stage in 2018, filmed by the festival.',
      youtubeId: 'mWvdsMwnGmM', genre: 'Tomorrowland, 2018', artist: 'Charlotte de Witte', title: 'Live at Tomorrowland Belgium'
    }),
    'untold-photo': fig('untold-2024', 1200, 798,
      'A crowd at Untold festival in 2024',
      'Untold, 2024. Photograph: Nuță Lucian, CC BY-SA 2.0.'),
    'gorge-photo': fig('gorge-amphitheatre-2006', 1200, 803,
      'The Gorge Amphitheatre above the Columbia River in George, Washington',
      'The Gorge Amphitheatre in George, Washington, the venue of Beyond Wonderland at the Gorge, in 2006. Photograph: Daniel from Calgary, Canada, CC BY 2.0.'),
    'dekmantel-set': singleSet({
      label: 'Dekmantel, heard from home',
      description: 'Ron Trent on the Radar stage at Dekmantel in August 2024, filmed by the festival.',
      youtubeId: '-d42GSJTBec', genre: 'Dekmantel, 2024', artist: 'Ron Trent', title: 'Live at Dekmantel'
    }),
    'nachtdigital-photo': fig('nachtdigital-olganitz-2014', 1200, 675,
      'A daytime crowd dancing under a canopy at Nachtdigital in Olganitz, August 2014',
      'Nachtdigital at Bungalowdorf Olganitz, August 2014. Photograph: Robert Richter for Nachtdigital, CC BY 2.0.'),
    'dirtybird-set': singleSet({
      label: 'Dirtybird Campout, heard from home',
      description: 'Claude VonStroke, who founded the Dirtybird label, at Dirtybird Campout West in 2017.',
      youtubeId: 'vtYFY51LhqE', genre: 'Dirtybird Campout, 2017', artist: 'Claude VonStroke', title: 'Live at Dirtybird Campout'
    }),
    'basscoast-set': singleSet({
      label: 'Bass Coast, heard from home',
      description: 'DJ Minx at Bass Coast 2026, filmed by the festival.',
      youtubeId: 'XRhnqMMchQc', genre: 'Bass Coast, 2026', artist: 'DJ Minx', title: 'Live at Bass Coast'
    })
  },
  sourcesHtml: `<ul>
<li>2027 dates and history from each festival's own site: ${a('https://belgium.tomorrowland.com/', 'Tomorrowland')}, ${a('https://www.awakenings.com/en/', 'Awakenings')}, ${a('https://www.kappafuturfestival.it/', 'Kappa FuturFestival')}, ${a('https://www.dekmantelfestival.com/', 'Dekmantel')}, ${a('https://www.defqon1.com/', 'Defqon.1')}, ${a('https://pnw.beyondwonderland.com/', 'Beyond Wonderland at the Gorge')}, ${a('https://www.electricforest.com/', 'Electric Forest')}, ${a('https://hardsummer.com/', 'HARD Summer')}, ${a('https://nachtdigital.de/', 'NACHTI')}, ${a('https://www.houghtonfestival.co.uk/', 'Houghton')}, ${a('https://fieldmaneuvers.com/', 'Field Maneuvers')}, ${a('https://2026.wakinglife.pt/', 'Waking Life')}, ${a('https://www.basscoast.ca/', 'Bass Coast')}, ${a('https://www.northernnights.org/', 'Northern Nights')}.</li>
<li>Untold, Parookaville, Creamfields, Ultra Europe and Sónar: this site's guide to each festival, linked above, which cites its own sources.</li>
<li>The Great Beyond: ${a('https://ra.co/news/84527', 'Resident Advisor')}. Unknown Perception's 2027 date: ${a('https://ra.co/events/2564895', 'Resident Advisor listing')}.</li>
<li>Listed dates, not yet confirmed by the festival: ${a('https://www.technoairlines.com/festival/garbicz-festival-garbicz-poland-2027', 'Techno Airlines')} (Garbicz) and ticket listings (Elements, Tec-Troit, Dirtybird Campout).</li>
<li>Poll rank and context: ${a('https://djmag.com/top100festivals', 'DJ Mag: Top 100 Festivals 2026')}.</li>
</ul>`
});

// The guide first shipped as /best-summer-edm-festivals (2026-11-10) and moved
// the same day: EDM is not the word for its underground half (defects.json,
// edm-label-over-underground). GitHub Pages has no server redirects, so this
// stub sends people on. It is not in pages.mjs, so no audit, sitemap or card
// treats it as a page.
const movedTo = 'https://thecatrave.com/best-summer-electronic-music-festivals';
fs.writeFileSync('best-summer-edm-festivals.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved: Best Summer EDM and Electronic Music Festivals 2027</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="${movedTo}"><meta http-equiv="refresh" content="0; url=${movedTo}"></head><body><p>This page has moved to <a href="${movedTo}">${movedTo}</a>.</p></body></html>\n`);
console.log('Wrote best-summer-edm-festivals.html as a redirect stub');
