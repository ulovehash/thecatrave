// Build hardstyle-guide.html from hardstyle-guide-draft.md.
//
// Intent: a listener-first answer to "what is hardstyle". Production tutorials,
// workout playlists and exhaustive festival calendars are excluded. See
// hardstyle-guide-research.md and media/hardstyle.json.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningCollection, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable,
  articleTrackEmbed, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('hardstyle-guide-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/hardstyle-guide';
const title = 'What Is Hardstyle? History, Sound, Artists and Subgenres';
const description = 'Hardstyle grew from Dutch hard dance into a global festival sound. Hear its distorted kicks, reverse bass, key artists, and euphoric and raw branches.';
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
const whatIs = paras(getSection('What is hardstyle'));
const before = paras(getSection('Before the name'));
const scene = paras(getSection('A scene becomes hardstyle'));
const melodic = paras(getSection('The melodic turn'));
const branches = paras(getSection('Euphoric hardstyle and raw hardstyle'));
const comparison = paras(getSection('Hardstyle, hardcore and techno'));
const festivals = paras(getSection('Hardstyle festivals and the current scene'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const defqonFigure = articleFigure({
  src: 'img/hardstyle/defqon1-red-2024-1280.webp',
  srcset: 'img/hardstyle/defqon1-red-2024-320.webp 320w, img/hardstyle/defqon1-red-2024-1280.webp 1280w',
  width: 1280, height: 720,
  alt: 'The red main stage at Defqon.1 in 2024, with a large crowd facing the stage in daylight',
  caption: 'The Red stage at Defqon.1 in 2024. The festival separates hardstyle, hardcore and related sounds across colour-coded stages. Photograph: DELTAFXUniverse, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

const track = (platform, id, artist, title, year, note) => ({
  artist, title, year, note,
  playerHtml: articleTrackEmbed({platform, id, title: `${artist}, ${title}`})
});

const earlyListening = articleListeningCollection({
  id: 'early-hardstyle-listening',
  title: 'From reverse bass to a melodic centre',
  description: 'Two Scantraxx records from the point where early hardstyle began opening into a more melodic form.',
  items: [
    track('youtube', 'Q_N2Gv2_0IU', 'DJ Duro & The Prophet', 'Shizzle My Dizzle', '2005', 'Reverse bass, a hard-trance riff and the spare arrangement of the early Scantraxx sound.'),
    track('spotify', '6mOofVIiHmXHlvEapIN8k9', 'Blademasterz', 'Masterblade', '2006', 'Brennan Heart under his Blademasterz name, with melody taking more of the arrangement.')
  ]
});

const melodicListening = articleListeningCollection({
  id: 'melodic-hardstyle-listening',
  title: 'The late-2000s melodic turn',
  description: 'The lead melody and pitched kick become equal parts of the record.',
  items: [
    track('spotify', '5QTEBCV3eRst0uoLUHhJOr', 'Headhunterz', 'Rock Civilization', '2007', 'A compact example of the brighter lead sound and a kick following the tune.'),
    track('spotify', '1Ns5FtyALVwzFuRS4nH9xd', 'D-Block & S-te-Fan', 'Music Made Addict', '2009', 'A defining Scantraxx record from hardstyle’s melodic expansion.')
  ]
});

const branchListening = articleListeningCollection({
  id: 'raw-hardstyle-listening',
  title: 'Melody, pressure and the raw label',
  description: 'One record at the melodic and raw boundary, followed by the release that gave the darker branch its name.',
  items: [
    track('spotify', '06BmUrVuMtTdOuaf9CTYAz', 'B-Front & Frontliner', 'Magic', '2010', 'A large melody meeting the darker kick pressure that would define the split.'),
    track('spotify', '6GcT1R34r7r2OcTUPjUbUw', 'Zatox & Nikkita', 'Raw Style', '2011', 'The title that Scantraxx credits with naming raw hardstyle.')
  ]
});

const comparisonTable = articleTable({
  headers: ['Style', 'Typical tempo', 'Rhythmic centre', 'Melodic structure'],
  rows: [
    ['Hardstyle', '145 to 155 BPM', 'Distorted pitched kick and reverse bass', 'Long breakdowns and large leads are common'],
    ['Hardcore', '160 BPM and above', 'Faster, more abrasive kick patterns', 'Melody varies; impact often stays forward'],
    ['Techno', '125 to 150 BPM', 'Looped groove and machine rhythm', 'Usually less dependent on a long melodic breakdown'],
    ['Hard techno', '140 to 160 BPM', 'Driving techno groove with harder kick design', 'May borrow hardstyle sounds without its full arrangement']
  ],
  label: 'Hardstyle, hardcore and techno comparison'
});

const tocItems = [
  {id: 'what-is', label: 'What is hardstyle'},
  {id: 'before', label: 'Before the name'},
  {id: 'scene', label: 'A scene becomes hardstyle'},
  {id: 'melodic', label: 'The melodic turn'},
  {id: 'branches', label: 'Euphoric and raw hardstyle'},
  {id: 'comparison', label: 'Hardstyle, hardcore and techno'},
  {id: 'festivals', label: 'Festivals and the current scene'}
];

const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Hardstyle guide',
    title: 'Hardstyle: distorted kicks, reverse bass and festival scale',
    deck: 'A late-1990s exchange between hard house, hard trance and hardcore that became the central sound of a Dutch festival circuit.',
    readingTime, dateModified, dateLabel,
    summaryHtml: infoBanner({label: 'Hardstyle definition', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The kick carries the record.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is hardstyle?', bodyHtml: join(whatIs)}),
  articleSection({id: 'before', title: 'Before the name.', kicker: '1999 to 2002', bodyHtml: join(before)}),
  articleSection({id: 'scene', title: 'A scene becomes hardstyle.', kicker: 'The early 2000s', bodyHtml: `${join(scene)}${earlyListening}`}),
  articleSection({id: 'melodic', title: 'The melodic turn.', kicker: '2005 to 2010', bodyHtml: `${join(melodic.slice(0, 2))}${melodicListening}${join(melodic.slice(2))}`}),
  articleSection({id: 'branches', title: 'Euphoric hardstyle and raw hardstyle.', bodyHtml: `${join(branches.slice(0, 2))}${branchListening}${join(branches.slice(2))}`}),
  articleSection({id: 'comparison', title: 'Hardstyle, hardcore and techno.', bodyHtml: `${join(comparison)}${comparisonTable}`}),
  articleSection({id: 'festivals', title: 'Hardstyle festivals and the current scene.', bodyHtml: `${join(festivals.slice(0, 1))}${defqonFigure}${join(festivals.slice(1))}`}),
  articleFaq({items: faqItems, title: 'Hardstyle FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://www.scantraxx.com/news/scantraxx-recordz-is-born-history-of-hardstyle-column" target="_blank" rel="noopener noreferrer">Scantraxx: The birth of Scantraxx Recordz</a></li>
<li><a href="https://edmidentity.com/2023/03/11/dj-the-prophet-basscon-wasteland-interview/" target="_blank" rel="noopener noreferrer">EDM Identity: DJ The Prophet on the transition from hardcore to hardstyle</a></li>
<li><a href="https://www.q-dance.com/artists/31843145" target="_blank" rel="noopener noreferrer">Q-dance: DJ The Prophet</a></li>
<li><a href="https://www.scantraxx.com/news/og-raw" target="_blank" rel="noopener noreferrer">Scantraxx: the rise of raw hardstyle</a></li>
<li><a href="https://www.scantraxx.com/company" target="_blank" rel="noopener noreferrer">Scantraxx: company and label history</a></li>
<li><a href="https://en.wikipedia.org/wiki/Hardstyle" target="_blank" rel="noopener noreferrer">Wikipedia: Hardstyle source map</a></li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'My own work sits closer to breaks, techno and rave than hardstyle. Buying one of these releases supports the music and writing directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('hardstyle-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Hardstyle Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/hardstyle-guide'),
  ogImage: 'https://thecatrave.com/img/og/hardstyle.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page hardstyle-page',
  structuredData, articleHtml
});

fs.writeFileSync('hardstyle-guide.html', html);
console.log('Built hardstyle-guide.html');
