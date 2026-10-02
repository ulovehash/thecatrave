// Build best-edm-festivals-usa.html from best-edm-festivals-usa-draft.md.
//
// Intent: current choice and comparison, the US twin of the Europe page.
// Targets "best edm festivals in the us" and "best edm festivals" (Keyword
// Planner, US, 100 to 1K a month each; keywords/best-edm-festivals-usa.json).
// The URL has no year so it can be rolled forward; the title, H1 and table
// carry 2027.
//
// Maintenance: registered in festival-editions.mjs with ends: null, so every
// build prints a reminder while any 2027 date on it is unannounced. On
// 2026-10-02 only EDC, Ultra, Movement and the three Beyond Wonderland
// editions had dates. Refresh whenever a festival confirms, again in January,
// and roll to 2028 in September 2027.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-edm-festivals-usa-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-edm-festivals-usa';
const title = 'Best EDM Festivals in the US 2027: EDC, Ultra, Movement';
const description = 'EDC Dusk and Dawn on 14–16 and 21–23 May, Ultra on 26–28 March, Movement on 29–31 May: US EDM festivals for 2027 by sound, with dates confirmed or not.';
const date = '2026-10-02';
const dateLabel = '2 October 2026';

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

// Images: Wikimedia Commons, new to this page. None repeats an image from the
// festival guides this page links to.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/us-festivals/${name}-1200.webp`,
  srcset: `img/us-festivals/${name}-320.webp 320w, img/us-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'beyond-wonderland': fig('beyond-wonderland-2010', 1200, 900,
    'A DJ on the main stage at Beyond Wonderland in 2010, with a crowd below',
    'The main stage at Beyond Wonderland in March 2010. Photograph: Roxanna Salceda, CC BY-SA 2.0.'),
  'iii-points': fig('iii-points-2017', 1200, 900,
    'VIRGO performing on the Mind Melt stage at III Points in Miami in 2017',
    'VIRGO on the Mind Melt stage at III Points in Miami, October 2017. Photograph: Alienasomnia, CC BY-SA 4.0.'),
  'electric-forest': fig('electric-forest-2018', 1200, 600,
    'Festival-goers at Electric Forest in Rothbury, Michigan, in July 2018',
    'Electric Forest in Rothbury, Michigan, in July 2018. Photograph: FifthLegend, CC BY 2.0.')
};

// Blocks: paragraphs, "### " subheadings (a festival each), "- " lists and
// "![alt](figure:key)" markers that place a figure after the block above it.
const slug = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/,.*$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z-]+)\)$/);
  if (figure) return figures[figure[1]];
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
const glance = paras(getSection('US EDM festival dates for 2027 at a glance'));
const biggest = paras(getSection('What is the biggest EDM festival in the US?'));
const houseTechno = paras(getSection('Which US festivals are best for house and techno?'));
const bass = paras(getSection('Where does bass music live in the US?'));
const forest = paras(getSection('Which US festival is a week in the woods?'));
const smaller = paras(getSection('Smaller festivals worth the trip'));
const notListed = paras(getSection('Not on this list, and why'));
const choose = paras(getSection('How to choose'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(paras(body))};
});

// Every figure below was read on 2026-10-02 from the festival's own site or
// its promoter's page, or comes from this site's guide to the festival.
// "Not published here" means no figure was verified for this page.
const festivals = [
  ['EDC Las Vegas', 'Las Vegas, Nevada', 'EDC Dusk 14 to 16 May, EDC Dawn 21 to 23 May', 'Big-stage EDM', '500,000+ across the weekend', 'Camping', 'The full production'],
  ['Ultra', 'Miami, Florida', '26 to 28 March', 'Big-stage EDM', 'About 165,000 admissions', 'City', 'A festival and a Miami trip'],
  ['EDC Orlando', 'Orlando, Florida', 'Not announced (6 to 8 November in 2026)', 'Big-stage EDM', 'Not published here', 'Not published here', 'EDC outside Las Vegas'],
  ['Beyond Wonderland', 'San Bernardino, California; Joliet, Illinois; George, Washington', '26 to 27 March; 10 to 13 June; 25 to 27 June', 'Electronic dance music', 'Not published here', 'Camping (Midwest and The Gorge)', 'A camping weekend near you'],
  ['HARD Summer', 'Los Angeles, California', 'Not announced (1 to 2 August in 2026)', 'Electronic and hip-hop', 'Not published here', 'Not published here', 'Electronic and hip-hop together'],
  ['Movement', 'Detroit, Michigan', '29 to 31 May', 'Techno, house', 'Six stages', 'City', 'Techno where it began'],
  ['ARC', 'Chicago, Illinois', 'Not announced (4 to 7 September in 2026)', 'House, techno', 'Not published here', 'City', 'House in Chicago'],
  ['CRSSD', 'San Diego, California', 'Not announced (spring); 26 to 27 September in 2026', 'House, techno, electro, indie dance', 'About 15,000 a day (spring 2024)', 'City', 'A waterfront weekend'],
  ['III Points', 'Miami, Florida', 'Not announced (16 to 17 October in 2026)', 'Indie, electronic, hip-hop, experimental', 'Not published here', 'City', 'Electronic music among the arts'],
  ['Lost Lands', 'Thornville, Ohio', 'Not announced (18 to 20 September in 2026)', 'Bass music', 'Sold out in 2026', 'Camping', 'Bass music, camping'],
  ['Bass Canyon', 'George, Washington', 'Not announced (14 to 16 August in 2026)', 'Bass music', 'Not published here', 'Camping', 'Bass music in a canyon'],
  ['Electric Forest', 'Rothbury, Michigan', 'Not announced (25 to 28 June in 2026)', 'Jam bands and electronic', '40,000 to 50,000 (2025 estimate)', 'Camping', 'A week in the woods']
];

const festivalTable = articleTable({
  label: 'Major US EDM festivals compared, 2027',
  headers: ['Festival', 'Where', '2027 dates', 'Sound', 'Scale', 'Stay', 'Best for'],
  rows: festivals
});

// Set from this site's catalogue, uploaded by the host that filmed it,
// oEmbed-checked on 2026-10-02.
const crssdSet = articleVideoCollection({
  label: 'CRSSD, heard from home',
  description: 'Dusky live from CRSSD Fest in the fall of 2018, filmed by Mixmag. The house and techno the festival is known for.',
  items: [articleVideoCard({youtubeId: '4gqM7WMrGEw', genre: 'CRSSD, 2018', artist: 'Dusky', title: 'Live from CRSSD Fest'})]
});

// Two owner mixes, as on every festival guide (site-components.mjs ownSets).
const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const at = (list, heading) => list.findIndex(block => block === `### ${heading}`);
const iiiIdx = at(houseTechno, 'III Points, Miami');

const tocItems = [
  {id: 'criteria', label: 'How this list was chosen'},
  {id: 'at-a-glance', label: '2027 dates at a glance'},
  {id: 'biggest', label: 'The biggest EDM festival'},
  {id: 'house-techno', label: 'House and techno'},
  {id: 'bass', label: 'Bass music'},
  {id: 'forest', label: 'A week in the woods'},
  {id: 'smaller', label: 'Smaller festivals worth the trip'},
  {id: 'not-listed', label: 'Not on this list, and why'},
  {id: 'choose', label: 'How to choose'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const answer = 'The best EDM festivals in the US for 2027 depend on what you want to hear. For the biggest production: EDC Las Vegas (EDC Dusk 14 to 16 May, EDC Dawn 21 to 23 May) and Ultra in Miami (26 to 28 March). For house and techno: Movement in Detroit (29 to 31 May), ARC in Chicago and CRSSD in San Diego. For bass music: Lost Lands in Ohio and Bass Canyon in Washington. For camping in the woods: Electric Forest in Michigan. Only EDC, Ultra, Movement and the three Beyond Wonderland editions had confirmed 2027 dates when this page was checked.';

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'The best EDM festivals in the US in 2027',
    deck: 'Twelve US festivals compared by what they play, how big they are, where you sleep and when they are, with the 2027 dates that are confirmed and the ones that are not.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best EDM festivals in the US', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A list meant for choosing.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'criteria', title: 'How this list was chosen.', bodyHtml: join(criteria)}),
  articleSection({id: 'at-a-glance', title: 'US EDM festival dates for 2027 at a glance.', bodyHtml: `${join(glance)}${festivalTable}`}),
  articleSection({id: 'biggest', title: 'What is the biggest EDM festival in the US?', kicker: 'EDM and the main stage', bodyHtml: `${join(biggest)}${firstMix}`}),
  articleSection({id: 'house-techno', title: 'Which US festivals are best for house and techno?', bodyHtml: `${join(houseTechno.slice(0, iiiIdx))}${crssdSet}${join(houseTechno.slice(iiiIdx))}`}),
  articleSection({id: 'bass', title: 'Where does bass music live in the US?', bodyHtml: join(bass)}),
  articleSection({id: 'forest', title: 'Which US festival is a week in the woods?', bodyHtml: join(forest)}),
  articleSection({id: 'smaller', title: 'Smaller festivals worth the trip.', kicker: 'Off the poll', bodyHtml: `${join(smaller)}${ownTrackListening('late-summer-cloud-dance', 'A track of mine, to listen to between festivals.')}`}),
  articleSection({id: 'not-listed', title: 'Not on this list, and why.', bodyHtml: join(notListed)}),
  articleSection({id: 'choose', title: 'How to choose.', bodyHtml: `${join(choose)}${secondMix}`}),
  articleFaq({items: faqItems, title: 'US EDM festivals FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>2027 dates, read on 2 October 2026: <a href="https://www.insomniac.com/" target="_blank" rel="noopener noreferrer">Insomniac</a> (EDC, EDC Orlando, Beyond Wonderland, Dreamstate), <a href="https://movementfestival.com/faqs" target="_blank" rel="noopener noreferrer">Movement FAQ</a>, <a href="https://www.basscanyon.com/" target="_blank" rel="noopener noreferrer">Bass Canyon</a>, <a href="https://www.electricforest.com/" target="_blank" rel="noopener noreferrer">Electric Forest</a>, <a href="https://www.lostlands.com/" target="_blank" rel="noopener noreferrer">Lost Lands</a>.</li>
<li>Dates and scale for Ultra, Movement, ARC, Coachella, Lollapalooza and Burning Man: this site's guide to each festival, linked above, which cites its own sources.</li>
<li><a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a></li>
<li>Beyond Wonderland Midwest move to Chicagoland Speedway: Electronic Midwest, 15 June 2026. Lost Lands 2026 weather evacuation: EDMTunes. Bonnaroo 2027 cancellation: EDM Sauce. Electric Zoo operator filing: reporting on Avant Gardner's Chapter 11 filing of 4 August 2025.</li>
<li>HARD Summer genres, founding and first event: Wikipedia.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between festivals, the music I make myself: breaks with techno and dub in them. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-edm-festivals-usa.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best EDM Festivals in the US', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/best-edm-festivals-usa'),
  ogImage: 'https://thecatrave.com/img/og/us-festivals.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page us-festivals-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-edm-festivals-usa.html', html);
console.log('Built best-edm-festivals-usa.html');
