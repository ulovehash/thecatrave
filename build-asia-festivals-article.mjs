// Build best-electronic-music-festivals-asia.html from
// best-electronic-music-festivals-asia-draft.md.
//
// Intent: current choice and comparison for Asia (Keyword Planner ranges, all
// locations, keywords/best-electronic-music-festivals-asia.json). The head
// intent term has no measured volume; the page earns demand through the festival
// names (Ultra Japan, Wonderfruit, S2O Songkran, Sunburn, DWP). Facts were read
// on 2026-10-04 from official sites where they could be read and from named
// press where not (see the Sources block). Europe and the US have their own
// roundups; this page links to both and does not repeat them.
//
// Maintenance: registered in festival-editions.mjs with ends null, because most
// 2027 dates were not announced on 2026-10-04. Refresh as each festival
// announces, after Wonderfruit, Sunburn and DWP in December 2026, and after S2O
// in spring 2027. Zamna Phuket's date is press-reported until Zamna lists it.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-electronic-music-festivals-asia-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-electronic-music-festivals-asia';
const title = 'Best Electronic Music Festivals in Asia: 2027 Guide';
const description = 'The best electronic music festivals in Asia: Ultra Japan, Wonderfruit, S2O, Sunburn and DWP, with dates and sets to hear.';
const date = '2026-10-04';
const dateLabel = '4 October 2026';

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

// Images: Wikimedia Commons, new to this page, none reused from another guide.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/asia-festivals/${name}-1200.webp`,
  srcset: `img/asia-festivals/${name}-320.webp 320w, img/asia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  wonderfruit: fig('wonderfruit-2015', 1200, 900,
    'A gate reading A Taste of Wonder at sunset at the 2015 Wonderfruit festival',
    'The gate at Wonderfruit in December 2015, when the festival was held in Pattaya. Photograph: Sdegennaro, CC BY-SA 4.0.'),
  s2o: fig('s2o-2025', 1200, 800,
    'The S2O stage lit in orange with fire effects during a set by Prophecy',
    'Prophecy at S2O Songkran in Bangkok, 2025. Photograph: MikeAlca, CC BY-SA 4.0.'),
  sunburn: fig('sunburn-goa-2010', 1200, 800,
    'Lights and a stage at night at Sunburn Festival in Candolim, Goa',
    'Sunburn Festival at Candolim, Goa, on 29 December 2010, when it was held in Goa. Photograph: Vyacheslav Argenberg, CC BY 4.0.'),
  dwp: fig('dwp-2017', 1200, 800,
    'Garuda Land, the main stage of Djakarta Warehouse Project, in 2017',
    'Garuda Land, the main stage of Djakarta Warehouse Project, in December 2017. Photograph: Ismaya Live, CC BY-SA 4.0.'),
  'ultra-korea': fig('ultra-korea-2015', 1200, 1174,
    'The main stage and a crowd at night at Ultra Korea',
    'The main stage at Ultra Korea, June 2015. Photograph: Ultrafan123, CC BY-SA 4.0.')
};

// Sets: Wonderfruit and Ultra Korea come from selector-data.json (uploaded by
// Seoul Community Radio and MIXMIX TV); oEmbed-checked 2026-10-04. The catalogue
// holds no set for Ultra Japan, S2O, Sunburn, DWP or Zamna.
const embeds = {
  wonderfruit: articleVideoCollection({
    label: 'Wonderfruit, heard from home',
    description: 'A broadcast from the Wonderfruit Radio tiki bar on day 3 of the 2017 festival, uploaded by Seoul Community Radio.',
    items: [articleVideoCard({youtubeId: 'RYygHDuTQCY', genre: 'WONDERFRUIT, 2017', artist: 'Seoul Community Radio', title: 'Wonderfruit Radio, Tiki Bar'})]
  }),
  'ultra-korea': articleVideoCollection({
    label: 'Ultra Korea, heard from home',
    description: 'Three sets from the Ultra Korea 2018 afterparty at Hyundai Motor Studio, filmed by MIXMIX TV.',
    items: [
      articleVideoCard({youtubeId: 'TX1ksXLgHKA', genre: 'ULTRA KOREA, 2018', artist: 'Deepshower', title: 'Afterparty at Hyundai Motor Studio'}),
      articleVideoCard({youtubeId: '3VavBJPlKYc', genre: 'ULTRA KOREA, 2018', artist: 'Yamada', title: 'Afterparty at Hyundai Motor Studio'}),
      articleVideoCard({youtubeId: 'h4GXgykSLVw', genre: 'ULTRA KOREA, 2018', artist: 'Minimonster', title: 'Afterparty at Hyundai Motor Studio'})
    ]
  }),
  'owner-first': ownSetListening(0),
  'owner-second': ownSetListening(1)
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  const embed = block.match(/^\[\[embed:([a-z0-9-]+)\]\]$/);
  if (embed) return embeds[embed[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'Asian electronic music festivals compared, 2027', headers: rows[0], rows: rows.slice(1)});
  }
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  if (block.startsWith('- ')) {
    return `<ul>${block.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
  }
  return `<p>${inline(block)}</p>`;
};
const join = list => list.map(renderBlock).join('\n');
const sec = heading => blocks(getSection(heading));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(blocks(body))};
});

const tocItems = [
  {id: 'criteria', label: 'How this list was chosen'},
  {id: 'at-a-glance', label: 'Festivals at a glance'},
  {id: 'ultra-japan', label: 'Ultra Japan'},
  {id: 'wonderfruit', label: 'Wonderfruit'},
  {id: 's2o', label: 'S2O Songkran'},
  {id: 'sunburn', label: 'Sunburn'},
  {id: 'dwp', label: 'DWP'},
  {id: 'ultra-korea', label: 'Ultra Korea'},
  {id: 'zamna', label: 'Zamna Thailand'},
  {id: 'by-country', label: 'Thailand, Japan, India'},
  {id: 'not-listed', label: 'Not on this list'}
];

const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Festival guide, 2027',
    title: 'The best electronic music festivals in Asia, 2027',
    deck: 'Ultra Japan, Wonderfruit, S2O Songkran, Sunburn, DWP, Ultra Korea and Zamna: where they are, what they play, and which 2027 dates are confirmed.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best electronic music festivals in Asia', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A list meant for choosing.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'criteria', title: 'How this list was chosen.', bodyHtml: join(sec('How this list was chosen'))}),
  articleSection({id: 'at-a-glance', title: 'The festivals at a glance.', bodyHtml: join(sec('The festivals at a glance'))}),
  articleSection({id: 'ultra-japan', title: 'Ultra Japan, Tokyo', bodyHtml: join(sec('Ultra Japan, Tokyo'))}),
  articleSection({id: 'wonderfruit', title: 'Wonderfruit, Thailand', bodyHtml: join(sec('Wonderfruit, Thailand'))}),
  articleSection({id: 's2o', title: 'S2O Songkran, Bangkok', bodyHtml: join(sec('S2O Songkran, Bangkok'))}),
  articleSection({id: 'sunburn', title: 'Sunburn Festival, Mumbai', bodyHtml: join(sec('Sunburn Festival, Mumbai'))}),
  articleSection({id: 'dwp', title: 'Djakarta Warehouse Project, Jakarta', bodyHtml: join(sec('Djakarta Warehouse Project, Jakarta'))}),
  articleSection({id: 'ultra-korea', title: 'Ultra Korea, Seoul', bodyHtml: join(sec('Ultra Korea, Seoul'))}),
  articleSection({id: 'zamna', title: 'Zamna Thailand', bodyHtml: join(sec('Zamna Thailand'))}),
  articleSection({id: 'by-country', title: 'EDM festivals in Thailand, Japan and India', bodyHtml: join(sec('EDM festivals in Thailand, Japan and India'))}),
  articleSection({id: 'not-listed', title: 'Not on this list, and why.', bodyHtml: join(sec('Not on this list, and why'))}),
  articleFaq({items: faqItems, title: 'Asian electronic music festivals FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Official sites, read on 4 October 2026: ${ext('https://ultrajapan.com', 'Ultra Japan')}, ${ext('https://www.wonderfruit.co', 'Wonderfruit')}, ${ext('https://s2ofestival.com', 'S2O')}, ${ext('https://www.sunburn.in', 'Sunburn')}, ${ext('https://dwpfest.com', 'DWP')}, ${ext('https://ultrakorea.com', 'Ultra Korea')}, ${ext('https://ultrasingapore.com', 'Ultra Singapore')}, ${ext('https://zamnafestival.com/events/zamna-on-the-beach-Thailand', 'Zamna On The Beach Thailand')}.</li>
<li>Ultra Japan 2026 line-up and ticket prices: ${ext('https://popii-land.jp/en/ultra-japan-2026-first-lineup-peggy-gou-en/', 'Popii Land')}.</li>
<li>Wonderfruit first wave of artists: ${ext('https://likdo.asia/magazine/wonderfruit-2026-announces-first-wave-of-artist-lineup/', 'LIKDO')}.</li>
<li>S2O 2026: ${ext('https://www.eventpop.me/e/87299', 'Eventpop ticket page')}, ${ext('https://edm-addicts.com/news/s2o-songkran-music-festival-returns-april-11-13-2026', 'EDM Addicts')} and ${ext('https://go2-thailand.com/blog/s2o-songkran-music-festival-2026-bangkok-edm-water-party/', 'Go2Thailand recap')}.</li>
<li>Sunburn 2026: ${ext('https://sunburn.in/the-19th-edition-of-sunburn-festival-moves-to-mahalaxmi-racecourse-with-a-reimagined-two-day-format/', 'the official announcement')} and ${ext('https://www.esquireindia.co.in/culture/books-and-music/sunburn-festival-2026-mumbai-dates-venue-tickets-lineup-and-everything-you-need-to-know', 'Esquire India')}.</li>
<li>DWP history, 2025 attendance and 2026 names: ${ext('https://www.edmtunes.com/2026/09/djakarta-warehouse-project-reveals-first-names-for-2026/', 'EDMTunes')}.</li>
<li>Zamna Phuket 2027: ${ext('https://iflyer.tv/en/article/2026/05/29/zamna-phuket/', 'iFLYER')} and ${ext('https://edm-addicts.com/news/zamna-festival-is-coming-to-phuket-in-january-2027-and-here-is-everything-you-need-to-know', 'EDM Addicts')}.</li>
<li>Thailand: ${ext('https://edm-addicts.com/news/808-festival-2026-is-back', '808 Festival, EDM Addicts')} and ${ext('https://go2-thailand.com/blog/thailand-tomorrowland-pattaya-first-asia-edition-2026/', 'Tomorrowland Thailand, Go2Thailand')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'The music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-electronic-music-festivals-asia.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Electronic Music Festivals in Asia', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/best-electronic-music-festivals-asia'),
  ogImage: 'https://thecatrave.com/img/og/asia-festivals.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page asia-festivals-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-electronic-music-festivals-asia.html', html);
console.log('Built best-electronic-music-festivals-asia.html');
