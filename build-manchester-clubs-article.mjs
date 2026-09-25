// Build best-clubs-in-manchester.html from manchester-clubs-draft.md.
//
// Row 7 of the wave-3 ranked city/festival candidate list (2026-09-24),
// picked by the owner on 2026-09-25 alongside Awakenings Festival, replacing
// Boom Festival, which stages 1-2-4 research found has zero article slots on
// both its head term and its question form (TOPIC-DOSSIERS.md,
// 'Manchester clubs, Boom Festival, Awakenings Festival (2026-09-25)').
// Research: Google Ads Keyword Planner and a live Google search
// (keywords/best-clubs-in-manchester.json), per KEYWORD-METHOD.md's
// 2026-09-22 tool switch. Stage 6 was not run as a separate pass, following
// the same shortcut used for the NYC/Tokyo/Budapest/Prague wave-3 guides:
// the owner asked to write both remaining candidates straight after
// stages 1, 2 and 4.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('manchester-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-manchester';
const title = 'Best Clubs in Manchester: Haçienda to Warehouse Project';
const description = "The Haçienda closed in 1997, but its warehouse-first DIY streak still shapes the city: the best clubs in Manchester now, and the Warehouse Project's rise since.";
const datePublished = '2026-09-25';
const dateModified = '2026-09-25';
const dateLabel = '25 September 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
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

// From Wikimedia Commons, downloaded to img/manchester-clubs/ on 2026-09-25,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/manchester-clubs/${name}-${width}.webp`,
  srcset: `img/manchester-clubs/${name}-320.webp 320w, img/manchester-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Both sets are from the Selector catalogue. Checked against the venue and
// crew names in the draft on 2026-09-25, embedded by no other guide
// (media/best-clubs-in-manchester.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Hacienda': figure('hacienda-bollards', 800, 600,
    "Three of the Haçienda's surviving hazard-stripe bollards, on display in 2007",
    "The Haçienda's bollards, photographed in 2007, five years after the club itself was demolished. Photograph: a_marga, CC BY-SA 2.0."),
  'Northern Quarter': figure('northern-quarter', 1200, 720,
    "A street in Manchester's Northern Quarter, the converted-warehouse district around Oldham Street",
    "The Northern Quarter, home to Soup and Eastern Bloc Records and most of the city's independent bars. Photograph: Jorge Franganillo, CC BY 4.0."),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['The White Hotel', 'Salford', 'A converted garage with a forward-thinking, eclectic booking policy and a strong queer following', 'DIY, underground programming and rarely-booked international artists'],
      ['Soup', 'Northern Quarter', 'A bar and intimate club space, formerly Soup Kitchen, focused on local and cult talent', 'A community-first night out without a big-name lineup'],
      ['Eastern Bloc Records', 'Northern Quarter', 'A record shop since 1985 that runs low-ceiling, vinyl-only ‘Open to Close’ nights', 'Manchester’s own DJs, played on vinyl start to finish'],
      ['The Loft', 'city centre outskirts', 'A 200-capacity room on a custom Funktion-One system, opened 2021, house-focused', 'Headsy tech house through deeper old-school sounds'],
      ['Hidden', 'city centre', 'A multi-storey venue on a Void Acoustics system, open since 2015', 'House and techno alongside heavy jungle and drum & bass'],
      ['Stage & Radio', 'city centre', 'A former 1946 jazz club reopened for dance music in 2016, with its own community radio station', 'Underground UK DJs and soundsystem culture']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

media['Swing Ting'] = video('b1lOaex4kZw', 'Grime', 'Swing Ting', 'Bass, beats and grime, @ Soup, Manchester, 2021',
  "Swing Ting, the Manchester bass, beats and grime crew, recorded at Soup, one of the current clubs above. From this site's catalogue of recorded DJ sets.");
media['LEVELZ'] = video('GtJhGigH1mw', 'Grime', 'LEVELZ', 'Boiler Room: Manchester, 2016',
  "LEVELZ, the Manchester crew that grew out of the city's grime and bassline scenes, on Boiler Room's own Manchester broadcast. From this site's catalogue of recorded DJ sets.");

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'hacienda-legacy', heading: "The Haçienda's legacy"},
  {id: 'best-clubs-now', heading: 'The best clubs in Manchester now'},
  {id: 'where-to-go', heading: 'Where to go out in Manchester'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Manchester clubs',
    title: "Best clubs in Manchester, from the Haçienda's legacy to the Warehouse Project",
    deck: "The club that built Manchester's reputation closed in 1997. What replaced it is a seasonal warehouse series and a handful of small, sound-system-first rooms across the Northern Quarter and Salford.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Manchester', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A reputation built on a building that no longer exists.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Manchester clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/The_Ha%C3%A7ienda', "Wikipedia: The Haçienda")}
${sourceLink('https://en.wikipedia.org/wiki/The_Warehouse_Project', 'Wikipedia: The Warehouse Project')}
${sourceLink('https://ra.co/guides/clubs-in-manchester', 'Resident Advisor: The Best Clubs in Manchester in 2026')}
${sourceLink('https://nightclub.org.uk/club/the-white-hotel', 'nightclub.org.uk: The White Hotel')}
${sourceLink('https://www.manchestertourism.org', 'Manchester Tourism: Best Nightclubs in Manchester')}
<li>Video embeds are drawn from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-manchester.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Manchester', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-manchester'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/manchester-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page manchester-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-manchester.html', html);
console.log('Built best-clubs-in-manchester.html');
