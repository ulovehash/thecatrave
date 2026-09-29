// Build movement-detroit.html from movement-detroit-draft.md.
//
// Intent: an evergreen explanation of Movement's location, history and Detroit
// context. Current lineups stay on the official site. See
// movement-detroit-research.md and media/movement-detroit.json.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard,
  articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('movement-detroit-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/movement-detroit';
const title = 'Movement Detroit: Festival History, Location and Techno Legacy';
const description = "Movement Detroit brings techno home to Hart Plaza each Memorial Day weekend. Learn the festival's history, location, stages and place in Detroit culture.";
const datePublished = '2026-09-29';
const dateModified = '2026-09-29';
const dateLabel = '29 September 2026';

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

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const join = list => list.map(p => `<p>${inline(p)}</p>`).join('\n');
const render = text => join(paras(text));

const intro = paras(getSection('Introduction'));
const whatIs = paras(getSection('What is Movement Detroit'));
const location = paras(getSection('Hart Plaza and the Detroit riverfront'));
const history = paras(getSection('From DEMF to Movement'));
const detroit = paras(getSection('Detroit techno on its home ground'));
const stages = paras(getSection('What music and stages to expect'));
const current = paras(getSection('Movement Detroit dates and lineup'));
const planning = paras(getSection('Planning the weekend'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {
    question: q.trim().replace(/\?*$/, '?'),
    answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' '),
    answerHtml: render(body)
  };
});

const hartFigure = articleFigure({
  src: 'img/movement-detroit/hart-plaza-1280.webp',
  srcset: 'img/movement-detroit/hart-plaza-320.webp 320w, img/movement-detroit/hart-plaza-1280.webp 1280w',
  width: 1280, height: 853,
  alt: 'Hart Plaza beside the Detroit River, with downtown Detroit buildings behind the concrete plaza',
  caption: 'Hart Plaza on the Detroit riverfront. Its amphitheatre, terraces and lower level determine how Movement feels and moves. Photograph: U.S. Army Corps of Engineers, public domain.',
  className: 'wide-archive-image'
});

const movementFigure = articleFigure({
  src: 'img/movement-detroit/movement-hart-plaza-2026-1280.webp',
  srcset: 'img/movement-detroit/movement-hart-plaza-2026-320.webp 320w, img/movement-detroit/movement-hart-plaza-2026-1280.webp 1280w',
  width: 1280, height: 655,
  alt: 'Movement Music Festival filling Hart Plaza in Detroit during the 2026 event',
  caption: 'Movement at Hart Plaza on 25 May 2026, photographed across the Detroit River. The festival remains inside the downtown site where DEMF began in 2000. Photograph: Chris Woodrich, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

const archiveListening = articleVideoCollection({
  label: 'DEMF in 2002',
  description: 'Detroit Historical Society footage from the festival before its current name settled: Juan Atkins on the main stage, followed by a reel containing Eddie Fowlkes and K-Hand.',
  items: [
    articleVideoCard({youtubeId: 'GTF4S78VTPw', genre: 'DEMF ARCHIVE, 2002', artist: 'Juan Atkins', title: 'Saturday main-stage set'}),
    articleVideoCard({youtubeId: '2mc8AkXYBdc', genre: 'DEMF ARCHIVE, 2002', artist: 'Eddie Fowlkes and K-Hand', title: 'Detroit Historical Society festival reel'})
  ]
});

const stageTable = articleTable({
  headers: ['Stage', 'Setting', 'Programming role'],
  rows: [
    ['Movement Stage', 'Hart Plaza amphitheatre', 'Largest names and headline-scale performances'],
    ['Detroit Stage', 'Outdoor festival stage', 'All-Detroit programme across generations'],
    ['Underground Stage', 'Below the main plaza level', 'Harder music in an enclosed concrete room'],
    ['Waterfront Stage', 'Beside the river and trees', 'Funk, hip-hop, breakbeats, ghettotech and other routes'],
    ['Stargate Stage', 'Open plaza setting', 'Detroit block-party character'],
    ['Pyramid Stage', 'Riverfront side of the site', 'Broad electronic programme with an open-air backdrop']
  ],
  label: 'Movement Detroit stages and programming roles'
});

const tocItems = [
  {id: 'what-is', label: 'What is Movement Detroit'},
  {id: 'location', label: 'Hart Plaza and the riverfront'},
  {id: 'history', label: 'From DEMF to Movement'},
  {id: 'detroit', label: 'Detroit techno on its home ground'},
  {id: 'stages', label: 'Music and stages'},
  {id: 'current', label: 'Dates and lineup'},
  {id: 'planning', label: 'Planning the weekend'}
];

const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Movement Detroit guide',
    title: 'Movement Detroit: techno in the city that made it',
    deck: 'From a free Detroit Electronic Music Festival in 2000 to six stages at Hart Plaza, with the city’s own artists kept inside the programme.',
    readingTime, dateModified, dateLabel,
    summaryHtml: infoBanner({label: 'What is Movement Detroit', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Techno comes home to the riverfront.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is Movement Detroit?', bodyHtml: join(whatIs)}),
  articleSection({id: 'location', title: 'Hart Plaza and the Detroit riverfront.', bodyHtml: `${join(location.slice(0, 2))}${hartFigure}${join(location.slice(2))}`}),
  articleSection({id: 'history', title: 'From DEMF to Movement.', kicker: '2000 to the present', bodyHtml: `${join(history.slice(0, 2))}${movementFigure}${join(history.slice(2))}${ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave. My own mix, placed here as a route beyond the archive.')}`}),
  articleSection({id: 'detroit', title: 'Detroit techno on its home ground.', bodyHtml: `${join(detroit)}${archiveListening}`}),
  articleSection({id: 'stages', title: 'What music and stages to expect.', bodyHtml: `${join(stages)}${stageTable}`}),
  articleSection({id: 'current', title: 'Movement Detroit dates and lineup.', bodyHtml: join(current)}),
  articleSection({id: 'planning', title: 'Planning the weekend.', bodyHtml: `${join(planning)}${ownSetListening(1, 'en', 'Breaks and techno for the hours after the festival. My own mix.')}`}),
  articleFaq({items: faqItems, title: 'Movement Detroit FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/detroit-electronic-music-festival-movement" target="_blank" rel="noopener noreferrer">Detroit Historical Society: Detroit Electronic Music Festival (Movement)</a></li>
<li><a href="https://www.detroithistorical.org/learn/online-research/blog/flashback-2002-detroit-electronic-music-festival" target="_blank" rel="noopener noreferrer">Detroit Historical Society: Flashback to the 2002 festival</a></li>
<li><a href="https://movementfestival.com/experience-page/experience" target="_blank" rel="noopener noreferrer">Movement: Hart Plaza and stage guide</a></li>
<li><a href="https://movementfestival.com/faqs" target="_blank" rel="noopener noreferrer">Movement: current festival FAQ and dates</a></li>
<li><a href="https://movementfestival.com/travel" target="_blank" rel="noopener noreferrer">Movement: official travel guide</a></li>
<li><a href="https://detroitmi.gov/departments/detroit-parks-recreation/parks-and-greenways/hart-plaza" target="_blank" rel="noopener noreferrer">City of Detroit: Hart Plaza</a></li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Detroit techno runs through this history. My own releases sit closer to breaks, techno and rave, and buying one supports the music and writing directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('movement-detroit.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Movement Detroit', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/movement-detroit'),
  ogImage: 'https://thecatrave.com/img/og/movement-detroit.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page movement-detroit-page',
  structuredData, articleHtml
});

fs.writeFileSync('movement-detroit.html', html);
console.log('Built movement-detroit.html');
