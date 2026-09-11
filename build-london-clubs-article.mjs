// Build best-electronic-music-clubs-in-london.html from london-clubs-draft.md.
//
// The URL was /clubs-in-london for its first hour. The owner moved it on
// 2026-09-11 so the address says what the page is: electronic music clubs,
// not London nightlife. It keeps 'best' and 'clubs in london' from the head
// terms. The old address is written below as a redirect stub.
//
// Asked for by the owner on 2026-09-11 as a guide to the UK's legendary and
// best clubs. Measured, the national framing had no search demand (best clubs
// in the uk: 30 a month), so the owner moved it to London. The stage 6 verdict
// made it history-led: the rooms that made acid house, jungle, garage and
// dubstep first, then a short table of the clubs open now, because a best-of
// list is the one format where this site is the weaker page. The bottle-service
// London that shares the SERP is named once, in the introduction, and not
// recommended. See london-clubs-research.md and the «Клубы Лондона» entry in
// TOPIC-DOSSIERS.md.
//
// Keywords: clubs in london 3,300 a month (GB), best clubs in london 2,500.
// The variants are one query typed many ways, not a sum. See
// keywords/london-clubs.json. Canon: media/london-clubs.json (The End and the
// Blue Note are required by the owner's decision).
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('london-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-electronic-music-clubs-in-london';
const title = 'Clubs in London: The Legends and the Best Ones Open Now';
const description = 'Heaven, Shoom, the Blue Note and fabric: the London clubs that made acid house, jungle, garage and dubstep, and the best clubs in London open now.';
const date = '2026-09-11';
const dateLabel = '11 September 2026';

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

// All four from Wikimedia Commons, downloaded to img/london-clubs/ on
// 2026-09-11, licences read from each file page, used by no other guide.
// A Corsica Studios photograph was downloaded and rejected: it shows a
// guitarist at a gig and says nothing about the club.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/london-clubs/${name}-${width}.webp`,
  srcset: `img/london-clubs/${name}-320.webp 320w, img/london-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Every YouTube id
// was checked against YouTube's oEmbed author on 2026-09-11: Mixmag, Beatport
// and Rinse FM's own channels. All four sets are in the Selector catalogue.
const media = {
  'Blitz site': figure('blitz-site', 900, 1200,
    'The former Blitz club building at 4 Great Queen Street, Covent Garden, with a plaque for Spandau Ballet by the door',
    "4 Great Queen Street in 2019. The Blitz's Tuesday night ran here in 1979 and 1980; the plaque by the door marks Spandau Ballet's first gig. Photograph: Spudgun67, CC BY-SA 4.0.",
    'portrait-image'),
  'Astoria': figure('astoria-2008', 1200, 803,
    'The London Astoria on Charing Cross Road under scaffolding in October 2008',
    'The Astoria in October 2008, with workmen preparing it for demolition. Trip ran here from 1988. Photograph: Fallschirmjäger, CC BY-SA 3.0.'),
  'fabric front': figure('fabric', 1200, 810,
    'The blue front and steel doors of fabric on Charterhouse Street, London',
    'fabric on Charterhouse Street in 2020, in the old Metropolitan Cold Stores opposite Smithfield Market. Photograph: Lolita Montana, CC BY-SA 2.0.'),
  'Scala': figure('scala', 900, 1200,
    'Scala lit up at night on Pentonville Road, King\'s Cross, with its red neon sign',
    "Scala at King's Cross in August 2024. A cinema until 1993, a club since 1999, and one of the rooms most associated with UK garage. Photograph: No Swan So Fine, CC BY-SA 4.0.",
    'portrait-image'),
  'Metalheadz in The Lab': youtube('-Cd8DJnLdOQ',
    "Metalheadz in The Lab LDN: Lenzman and Jubei b2b Ulterior Motive, on Mixmag's YouTube channel"),
  'fabric special': youtube('WNEOE5uXiK8',
    "Terry Francis, Howie B and Keith Reilly, a fabric special at the Brighton Music Conference 2024, on Beatport's YouTube channel"),
  // The page's one Essential-listening block: two sets on Rinse FM's own
  // channel, from two of the clubs in the table.
  'London sets': articleVideoCollection({
    description: "Two London rooms from the table, filmed by Rinse FM: Oneman live from Phonox in Brixton, January 2025, and Slimzee with D Double E and Riko Dan at Drumsheds, November 2024.",
    items: [
      {youtubeId: 'SbznUhiLGhg', genre: 'Rinse Live From Phonox', artist: 'Oneman', title: 'Live from Phonox, Brixton'},
      {youtubeId: 'oh2-Q58QnBE', genre: 'Rinse Live From Drumsheds 2024', artist: 'Slimzee feat. D Double E & Riko Dan', title: 'Live from Drumsheds, Edmonton'}
    ].map(articleVideoCard)
  }),
  // Which of the three lists read in September 2026 names each club: RA's
  // guide, Time Out (updated 29 July 2026), Condé Nast Traveller. Opening
  // years only where a source gives one. Typed, not computed. Revisit every
  // six months.
  'Table: now': articleTable({
    headers: ['Club', 'Where', 'Opened', 'Named by', 'Status, September 2026'],
    rows: [
      ['fabric', 'Farringdon', '1999', 'RA, Time Out, Condé Nast', 'Open'],
      ['The Cause', 'Silvertown', '2018 (here since 2023)', 'RA, Time Out, Condé Nast', 'Open'],
      ['FOLD', 'Canning Town', '2018', 'RA, Time Out, Condé Nast', 'Open'],
      ['The Carpet Shop', 'Peckham', 'n/a', 'RA, Time Out, Condé Nast', 'Open'],
      ['Dalston Superstore', 'Dalston', 'n/a', 'RA, Time Out, Condé Nast', 'Open'],
      ['Phonox', 'Brixton', 'n/a', 'RA, Time Out, Condé Nast', 'Open'],
      ['MOT', 'South Bermondsey', 'n/a', 'RA, Time Out, Condé Nast', 'Open'],
      ['Drumsheds', 'Edmonton', 'n/a', 'Time Out, Condé Nast', 'Open'],
      ['Ministry of Sound', 'Elephant and Castle', '1991', 'Time Out, Condé Nast', 'Open'],
      ['Heaven', 'Charing Cross', '1979', 'Time Out, Condé Nast', 'Open'],
      ['Colour Factory', 'Hackney Wick', 'n/a', 'RA, Time Out', 'Open'],
      ['Ormside Projects', 'South Bermondsey', 'n/a', 'RA, Time Out', 'Open'],
      ['Night Tales', 'Hackney Central', 'n/a', 'RA, Time Out', 'Open'],
      ['KOKO', 'Camden', 'n/a', 'RA, Time Out', 'Open'],
      ['XOYO', 'Shoreditch', '2010', 'Time Out', 'Open'],
      ['Brixton Jamm', 'Brixton', 'n/a', 'Condé Nast', 'Open']
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

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'before-acid-house', heading: 'Before acid house: sound systems, the Blitz and Heaven'},
  {id: 'acid-house', heading: '1988: acid house finds its London rooms'},
  {id: 'jungle-rooms', heading: 'Rage, Labrynth and the Blue Note: where jungle found its rooms'},
  {id: 'big-rooms', heading: 'Ministry, The End and fabric: the big rooms'},
  {id: 'garage-dubstep', heading: 'Sundays, Scala and Plastic People: garage and dubstep'},
  {id: 'best-clubs-now', heading: 'The best clubs in London now'},
  {id: 'hear-london', heading: 'Hear London before you go'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'London clubs',
    title: 'Clubs in London: the rooms that made the music, and the best ones now',
    deck: 'From the Four Aces and the Blitz to Rage, the Blue Note and fabric: the London clubs behind acid house, jungle, garage and dubstep, and the ones worth your weekend now.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Clubs in London', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The music first, then next weekend.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'London clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/The_Four_Aces_Club', 'Wikipedia: The Four Aces Club')}
${sourceLink('https://en.wikipedia.org/wiki/Blitz_Kids_(New_Romantics)', 'Wikipedia: Blitz Kids (New Romantics)')}
${sourceLink('https://en.wikipedia.org/wiki/Heaven_(nightclub)', 'Wikipedia: Heaven (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/Shoom', 'Wikipedia: Shoom')}
${sourceLink('https://en.wikipedia.org/wiki/Nicky_Holloway', 'Wikipedia: Nicky Holloway')}
${sourceLink('https://en.wikipedia.org/wiki/London_Astoria', 'Wikipedia: London Astoria')}
${sourceLink('https://en.wikipedia.org/wiki/Acid_house', 'Wikipedia: Acid house')}
${sourceLink('https://en.wikipedia.org/wiki/Second_Summer_of_Love', 'Wikipedia: Second Summer of Love')}
${sourceLink('https://en.wikipedia.org/wiki/Jungle_music', 'Wikipedia: Jungle music')}
${sourceLink('https://en.wikipedia.org/wiki/Metalheadz', 'Wikipedia: Metalheadz')}
${sourceLink('https://en.wikipedia.org/wiki/Ministry_of_Sound', 'Wikipedia: Ministry of Sound')}
${sourceLink('https://en.wikipedia.org/wiki/The_End_(club)', 'Wikipedia: The End (club)')}
${sourceLink('https://en.wikipedia.org/wiki/Trash_(nightclub)', 'Wikipedia: Trash (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/Fabric_(club)', 'Wikipedia: Fabric (club)')}
${sourceLink('https://en.wikipedia.org/wiki/UK_garage', 'Wikipedia: UK garage')}
${sourceLink('https://en.wikipedia.org/wiki/Scala_(club)', 'Wikipedia: Scala (club)')}
${sourceLink('https://en.wikipedia.org/wiki/Dubstep', 'Wikipedia: Dubstep')}
${sourceLink('https://en.wikipedia.org/wiki/Corsica_Studios', 'Wikipedia: Corsica Studios')}
${sourceLink('https://en.wikipedia.org/wiki/Printworks_(London)', 'Wikipedia: Printworks (London)')}
${sourceLink('https://en.wikipedia.org/wiki/Fold_(nightclub)', 'Wikipedia: Fold (nightclub)')}
${sourceLink('https://en.wikipedia.org/wiki/The_Cause_(London)', 'Wikipedia: The Cause (London)')}
${sourceLink('https://en.wikipedia.org/wiki/Drumsheds', 'Wikipedia: Drumsheds')}
${sourceLink('https://www.icmp.ac.uk/blog/a-history-london-nightclubs', 'ICMP: A History of London Nightclubs')}
${sourceLink('https://ra.co/guides/clubs-in-london', 'Resident Advisor: Best Clubs in London, 2026')}
${sourceLink('https://www.timeout.com/london/clubs/the-best-clubs-in-london', 'Time Out: The best clubs in London, updated July 2026')}
${sourceLink('https://www.cntraveller.com/article/best-clubs-in-london', 'Condé Nast Traveller: The best clubs in London')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks: a jungle remix and a breakbeat track, the two musics this page follows from Rage to the Blue Note. Buying one supports my work directly.',
    tracks: [
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-electronic-music-clubs-in-london.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Clubs in London', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/london-clubs.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page london-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-electronic-music-clubs-in-london.html', html);
console.log('Built best-electronic-music-clubs-in-london.html');

// The first URL, live for about an hour on 2026-09-11 and linked from the
// homepage, /articles, Read Next and the sitemap in that time. GitHub Pages
// has no server redirects, so this stub sends people on and tells search
// engines where the page lives. It is not in pages.mjs, so no audit, sitemap
// or card treats it as a page.
fs.writeFileSync('clubs-in-london.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved: ${title}</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="${canonical}"><meta http-equiv="refresh" content="0; url=${canonical}"></head><body><p>This page has moved to <a href="${canonical}">${canonical}</a>.</p></body></html>\n`);
console.log('Wrote clubs-in-london.html as a redirect stub');
