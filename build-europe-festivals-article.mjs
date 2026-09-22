// Build best-electronic-music-festivals-europe.html from
// best-electronic-music-festivals-europe-draft.md.
//
// Intent: current choice and comparison, maintained every year. Demand is
// small ("electronic music festivals in europe" 90 a month worldwide,
// "electronic music festivals europe" 80, about 220 across the viable Europe
// terms; owner-supplied Ahrefs, September 2026), so the page's larger job is to
// route readers into the festival guides this site already has. The URL has no
// year so it can be rolled forward; the title, H1 and table carry 2027.
//
// Maintenance: the page is registered in festival-editions.mjs with ends: null,
// so every build prints a reminder while any 2027 date on it is unannounced
// (Tomorrowland, Dekmantel and Monegros on 22 September 2026). Refresh in
// October to November, whenever a festival confirms dates, again in January
// before the main booking period, and roll the page to 2028 in September 2027.
// Change `date` only when facts on the page change.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('best-electronic-music-festivals-europe-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-electronic-music-festivals-europe';
const title = 'Best Electronic Music Festivals in Europe 2027, Compared';
const description = 'Fourteen major and seven smaller European electronic music festivals for 2027, compared by sound, scale, setting and dates, confirmed or not.';
const date = '2026-09-22';
const dateLabel = '22 September 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

// Blocks: paragraphs, "### " subheadings (a festival each) and "- " lists.
// Subheading ids come from the festival name so a festival can be linked to.
const slug = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/,.*$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  if (block.startsWith('### ')) {
    const name = block.slice(4).trim();
    return `<h3 id="${slug(name)}">${inline(name)}</h3>`;
  }
  if (block.startsWith('- ')) {
    return `<ul>${block.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
  }
  return `<p>${inline(block)}</p>`;
};
const join = list => list.map(renderBlock).join('\n');
const paras = blocks;

const intro = paras(getSection('Introduction'));
const criteria = paras(getSection('How this list was chosen'));
const glance = paras(getSection('The festivals at a glance'));
const bigStages = paras(getSection('Big stages'));
const hard = paras(getSection('Hard dance'));
const techno = paras(getSection('Techno and house'));
const desert = paras(getSection('Desert and themed cities'));
const smaller = paras(getSection('Smaller festivals worth the trip'));
const notListed = paras(getSection('Not on this list, and why'));
const choose = paras(getSection('How to choose'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(paras(body))};
});

// Every figure below is sourced: the festival's own site, read on
// 2026-09-22, or this site's guide to the festival, which cites its own
// sources. "Not published here" means no figure was verified for this page.
const festivals = [
  ['Tomorrowland', 'Boom, Belgium', 'Not announced (late July in recent years)', 'Big-room EDM, house, techno', 'Up to 200,000 a weekend', 'DreamVille campsite', 'A first big festival'],
  ['Untold', 'Cluj-Napoca, Romania', '5 to 8 August', 'Big-room EDM, techno', '500,000+ admissions over four days (2026)', 'City', 'A festival and a city break'],
  ['Parookaville', 'Weeze, Germany', '16 to 18 July', 'Festival mainstream EDM', 'About 75,000 a day', 'Camping', 'A themed weekend'],
  ['Creamfields', 'Daresbury, England', '26 to 29 August', 'House, trance, big-room', '80,000 (2026)', 'Camping', 'A British house and trance crowd'],
  ['Ultra Europe', 'Split, Croatia', '9 to 11 July', 'Big-room EDM', 'Not published here', 'City', 'A beach holiday with a festival'],
  ['Mysteryland', 'Haarlemmermeer, Netherlands', '27 to 29 August', 'Techno and house to hardstyle', '125,000+ a year (festival figure)', 'Camping', 'Variety near Amsterdam'],
  ['Defqon.1', 'Biddinghuizen, Netherlands', '24 to 27 June', 'Hardstyle, hardcore', 'About 268,000 visitors (2025)', 'Camping', 'Hardstyle fans'],
  ['Awakenings', 'Hilvarenbeek, Netherlands', '9 to 11 July', 'Techno', 'Not published here', 'Camping', 'A techno weekend'],
  ['Dekmantel', 'Amsterdam, Netherlands', 'Not announced (late July to early August recently)', 'Techno, house, electro, disco, experimental', 'Not published here', 'City, day festival', 'Discovering DJs'],
  ['Time Warp', 'Mannheim, Germany', '3 April', 'Techno, house', '40,000+', 'One indoor night', 'Techno in a single night'],
  ['Kappa FuturFestival', 'Turin, Italy', '2 to 4 July', 'Techno, house', 'Not published here', 'City, midday to midnight', 'Daylight techno'],
  ['Sónar', 'Barcelona, Spain', '17 to 19 June', 'Electronic, experimental, live acts', 'About 150,000 (2026)', 'City', 'An adventurous programme'],
  ['Monegros Desert Festival', 'Fraga, Spain', 'Not announced (July)', 'Many electronic styles', 'Not published here', 'One night, VIP tents', 'One extreme night'],
  ['Boomtown', 'Near Winchester, England', '11 to 15 August', 'Reggae and dub to techno, live bands', 'Licensed for 75,000+', 'Camping', 'A festival as a world of its own']
];

const smallerFestivals = [
  ['Garbicz', 'Near Torzym, Poland', 'Not announced (30 July to 3 August in 2026)', 'House, techno, ambient, live acts', 'About 11,000 (2026)', 'Camping', 'Long sets in the woods'],
  ['NACHTI', 'Olganitz, Germany', '30 July to 1 August', 'Electronic club music and live acts', 'About 3,000 (Nachtdigital years)', 'Bungalows and camping', 'A small, carefully booked weekend'],
  ['Houghton', 'Houghton Hall, Norfolk, England', 'Not announced (August)', 'House, techno, leftfield', 'About 10,000', 'Camping', 'Music around the clock'],
  ['Draaimolen', 'Tilburg, Netherlands', 'Not announced (early September)', 'Techno, ambient, experimental', 'Not published here', 'City, day festival', 'Techno without the crowds'],
  ['Waking Life', 'Crato, Portugal', 'Mid-June (not yet on the official site)', 'Electronic, experimental, world', 'Not published here', 'Camping and tipis', 'A solstice week in the countryside'],
  ['Kala', 'Dhërmi, Albania', '2 to 9 June', 'Dance music, DJs and live acts', 'Not published here', 'Hotel included', 'A beach week'],
  ['Freerotation', 'Clyro, Wales', 'Not announced (July)', 'Deep house, techno', 'Not published here', 'Members only', 'If someone invites you']
];

const smallerTable = articleTable({
  label: 'Smaller European festivals compared, 2027',
  headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Stay', 'Best for'],
  rows: smallerFestivals
});

const festivalTable = articleTable({
  label: 'Major European festivals compared, 2027',
  headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Stay', 'Best for'],
  rows: festivals.map(([name, ...rest]) => [name, ...rest])
});

// Images: Wikimedia Commons, new to this page. None repeats an image from the
// festival guides this page links to.
const defqonFigure = articleFigure({
  src: 'img/europe-festivals/defqon1-red-stage-2022-1200.webp',
  srcset: 'img/europe-festivals/defqon1-red-stage-2022-320.webp 320w, img/europe-festivals/defqon1-red-stage-2022-1200.webp 1200w',
  width: 1200, height: 900,
  alt: 'The Red main stage at Defqon.1 in 2022, a winged stage set above a large daytime crowd',
  caption: 'The Red stage at Defqon.1 in 2022, the hardstyle main stage. Each stage at the festival is named by colour and given to one style. Photograph: Blyra92, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

const kappaFigure = articleFigure({
  src: 'img/europe-festivals/kappa-futurfestival-2025-1200.webp',
  srcset: 'img/europe-festivals/kappa-futurfestival-2025-320.webp 320w, img/europe-festivals/kappa-futurfestival-2025-1200.webp 1200w',
  width: 1200, height: 900,
  alt: 'A daytime crowd under the steel canopy of the Futur Stage at Kappa FuturFestival in Parco Dora, Turin',
  caption: 'The Futur Stage at Kappa FuturFestival in July 2025, under the steel frame of a former industrial hall in Parco Dora, Turin. Photograph: MadBob, CC BY 4.0.',
  className: 'wide-archive-image'
});

const monegrosFigure = articleFigure({
  src: 'img/europe-festivals/monegros-desert-2009-1200.webp',
  srcset: 'img/europe-festivals/monegros-desert-2009-320.webp 320w, img/europe-festivals/monegros-desert-2009-1200.webp 1200w',
  width: 1200, height: 900,
  alt: 'A packed crowd in bright sun at Monegros Desert Festival, with a speaker tower and tents behind',
  caption: 'Monegros Desert Festival at one in the afternoon in 2009. The festival runs from Saturday afternoon to Sunday noon in the Aragón desert near Fraga. Photograph: BigSus, CC BY 2.5.',
  className: 'wide-archive-image'
});

const nachtiFigure = articleFigure({
  src: 'img/europe-festivals/nachtdigital-2014-1200.webp',
  srcset: 'img/europe-festivals/nachtdigital-2014-320.webp 320w, img/europe-festivals/nachtdigital-2014-1200.webp 1200w',
  width: 1200, height: 675,
  alt: 'A DJ playing under blue light and strip lights in a dark room at Nachtdigital in 2014',
  caption: 'Nachtdigital at Bungalowdorf Olganitz in 2014, when the festival still carried that name. Photograph: Robert Richter for Nachtdigital, CC BY 2.0.',
  className: 'wide-archive-image'
});

// The Garbicz set is the artist's own upload (none is in the catalogue),
// oEmbed-checked on 2026-09-22.
const garbiczSet = articleVideoCollection({
  label: 'Garbicz, heard from home',
  description: 'Ezio Aguiar\'s sunrise set at Garbicz in 2025, uploaded by the artist. The festival runs through the night, and the morning sets are the ones people talk about.',
  items: [articleVideoCard({youtubeId: 'IhBa3o5YYME', genre: 'GARBICZ, 2025', artist: 'Ezio Aguiar', title: 'Sunrise set'})]
});

// Sets from this site's catalogue, uploaded by the festival or the host that
// filmed them. Both passed YouTube oEmbed on 2026-09-22.
const dekmantelSet = articleVideoCollection({
  label: 'Dekmantel, heard from home',
  description: 'Four Tet on The Loop stage at Dekmantel in 2025, uploaded by the festival. The kind of long, wide-ranging set the festival is known for.',
  items: [articleVideoCard({youtubeId: 'E4NXVs4SlhE', genre: 'DEKMANTEL, 2025', artist: 'Four Tet', title: 'The Loop'})]
});

const boomtownSet = articleVideoCollection({
  label: 'Boomtown, heard from home',
  description: 'Pearson Sound at the Anara stage at Boomtown in 2025, filmed by Keep Hush. One of the dozens of smaller venues inside the festival city.',
  items: [articleVideoCard({youtubeId: 'OFuZ3lsZKxc', genre: 'BOOMTOWN, 2025', artist: 'Pearson Sound', title: 'Anara stage'})]
});

// Two owner mixes, as on every festival guide (site-components.mjs ownSets).
const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

// Split each festival group at its subheadings so media can sit after the
// festival it belongs to.
const after = (list, heading) => list.findIndex(block => block === `### ${heading}`);
const techIdx = {time: after(techno, 'Time Warp, Germany'), sonar: after(techno, 'Sónar, Spain')};
const desertIdx = after(desert, 'Boomtown, England');
const smallIdx = {nachti: after(smaller, 'NACHTI, Germany'), houghton: after(smaller, 'Houghton, England')};

const tocItems = [
  {id: 'criteria', label: 'How this list was chosen'},
  {id: 'at-a-glance', label: '2027 dates at a glance'},
  {id: 'big-stages', label: 'Big stages'},
  {id: 'hard-dance', label: 'Hard dance'},
  {id: 'techno-house', label: 'Techno and house'},
  {id: 'desert-cities', label: 'Desert and themed cities'},
  {id: 'smaller', label: 'Smaller festivals worth the trip'},
  {id: 'not-listed', label: 'Not on this list, and why'},
  {id: 'choose', label: 'How to choose'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const answer = 'The best electronic music festivals in Europe for 2027 depend on what you want to hear. For big-stage EDM: Tomorrowland in Belgium, Untold in Romania, Parookaville in Germany, Creamfields in England, Ultra Europe in Croatia and Mysteryland in the Netherlands. For hardstyle: Defqon.1. For techno and house: Awakenings, Dekmantel, Time Warp, Kappa FuturFestival and Sónar. For something stranger: one night at Monegros in the Spanish desert, or the themed city of Boomtown. For smaller, more underground weekends: Garbicz in Poland, NACHTI in Germany, Houghton in England, Waking Life in Portugal and Kala in Albania. Tomorrowland, Dekmantel and Monegros had not announced 2027 dates when this page was checked.';

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'The best electronic music festivals in Europe in 2027',
    deck: 'Fourteen major festivals and seven smaller ones, compared by what they play, how big they are, where you sleep and when they are, with the 2027 dates that are confirmed and the ones that are not.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best electronic music festivals in Europe', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A list meant for choosing.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'criteria', title: 'How this list was chosen.', bodyHtml: join(criteria)}),
  articleSection({id: 'at-a-glance', title: '2027 dates at a glance.', bodyHtml: `${join(glance)}${festivalTable}`}),
  articleSection({id: 'big-stages', title: 'Big stages.', kicker: 'EDM and the mainstage', bodyHtml: `${join(bigStages)}${firstMix}`}),
  articleSection({id: 'hard-dance', title: 'Hard dance.', bodyHtml: `${join(hard)}${defqonFigure}`}),
  articleSection({id: 'techno-house', title: 'Techno and house.', bodyHtml: `${join(techno.slice(0, techIdx.time))}${dekmantelSet}${join(techno.slice(techIdx.time, techIdx.sonar))}${kappaFigure}${join(techno.slice(techIdx.sonar))}`}),
  articleSection({id: 'desert-cities', title: 'Desert and themed cities.', bodyHtml: `${join(desert.slice(0, desertIdx))}${monegrosFigure}${join(desert.slice(desertIdx))}${boomtownSet}`}),
  articleSection({id: 'smaller', title: 'Smaller festivals worth the trip.', kicker: 'Underground and boutique', bodyHtml: `${join(smaller.slice(0, 1))}${smallerTable}${join(smaller.slice(1, smallIdx.nachti))}${garbiczSet}${join(smaller.slice(smallIdx.nachti, smallIdx.houghton))}${nachtiFigure}${join(smaller.slice(smallIdx.houghton))}`}),
  articleSection({id: 'not-listed', title: 'Not on this list, and why.', bodyHtml: join(notListed)}),
  articleSection({id: 'choose', title: 'How to choose.', bodyHtml: `${join(choose)}${secondMix}`}),
  articleFaq({items: faqItems, title: 'European electronic music festivals FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>2027 dates, read on each festival's official site on 22 September 2026: <a href="https://www.defqon1.com/" target="_blank" rel="noopener noreferrer">Defqon.1</a>, <a href="https://www.awakenings.com/en/" target="_blank" rel="noopener noreferrer">Awakenings</a>, <a href="https://www.time-warp.de/" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://www.kappafuturfestival.it/" target="_blank" rel="noopener noreferrer">Kappa FuturFestival</a>, <a href="https://www.boomtownfair.co.uk/" target="_blank" rel="noopener noreferrer">Boomtown</a>, <a href="https://www.monegrosfestival.com/" target="_blank" rel="noopener noreferrer">Monegros</a>, <a href="https://www.dekmantelfestival.com/" target="_blank" rel="noopener noreferrer">Dekmantel</a>, <a href="https://belgium.tomorrowland.com/" target="_blank" rel="noopener noreferrer">Tomorrowland</a>.</li>
<li>Dates and scale for Untold, Parookaville, Creamfields, Ultra Europe, Mysteryland and Sónar: this site's guide to each festival, linked above, which cites its own sources.</li>
<li><a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a></li>
<li><a href="https://en.wikipedia.org/wiki/Defqon.1_Festival" target="_blank" rel="noopener noreferrer">Wikipedia: Defqon.1</a>, <a href="https://en.wikipedia.org/wiki/Time_Warp_(festival)" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://en.wikipedia.org/wiki/Boomtown_(festival)" target="_blank" rel="noopener noreferrer">Boomtown</a></li>
<li><a href="https://ra.co/news/85120" target="_blank" rel="noopener noreferrer">Resident Advisor: EXIT Festival relocates to Montenegro for 2026</a></li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself: breaks with techno and dub in them. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-electronic-music-festivals-europe.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Electronic Music Festivals in Europe', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/europe-festivals.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page europe-festivals-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-electronic-music-festivals-europe.html', html);
console.log('Built best-electronic-music-festivals-europe.html');
