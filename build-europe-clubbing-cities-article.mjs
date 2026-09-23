// Build best-clubbing-cities-in-europe.html from europe-clubbing-cities-draft.md.
//
// Asked for by the owner on 2026-09-23, with the Amsterdam clubs, Ibiza clubs
// and New Year's Eve festivals pages. The hub for the city guides. Research
// package: europe-clubbing-cities-research.md and the "Клубные города
// (волна 2)" entry in TOPIC-DOSSIERS.md. Scope decided the same day: clubbing
// cities, with beach resorts named only to set them aside. Volumes are Google
// Ads Keyword Planner ranges (All locations), recorded in
// keywords/europe-clubbing-cities.json. Stage 6 was not run as a separate pass.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('europe-clubbing-cities-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubbing-cities-in-europe';
const title = "Best Clubbing Cities in Europe: Where to Go Out";
const description = "Berlin, Amsterdam, London, Ibiza, Tbilisi and seven more: the best clubbing cities in Europe, ranked by their clubs rather than bars and beaches.";
const datePublished = '2026-09-23';
const dateModified = '2026-09-23';
const dateLabel = '23 September 2026';

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

// From Wikimedia Commons, downloaded to img/europe-clubbing-cities/ on 2026-09-23,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/europe-clubbing-cities/${name}-${width}.webp`,
  srcset: `img/europe-clubbing-cities/${name}-320.webp 320w, img/europe-clubbing-cities/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Each video is in the Selector catalogue and was checked for embedding
// through YouTube oEmbed on 2026-09-23. None is embedded by another guide.
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Facts from each city guide on this site and from the sources below,
// checked 2026-09-23. Typed, not computed. Revisit every six months.
const media = {
  'Cross Club': figure('cross-club-prague', 1200, 901,
    'The courtyard of Cross Club in Prague, built from salvaged metal, pipes and machine parts',
    'Cross Club in Holešovice, Prague, open since 2002, photographed in 2024. Photograph: Fry72, CC BY-SA 4.0.'),
  'Anetha Amsterdam': video('Lg0Mkj4D9xo', 'Techno', 'Anetha', 'DJ set, Boiler Room Amsterdam, 2018',
    "Anetha's set for Boiler Room in Amsterdam in 2018, on Boiler Room's own channel."),
  'Buraka Som Sistema Lisbon': video('4_Jk34-b_Jw', 'Kuduro', 'Buraka Som Sistema', 'Boiler Room Lisboa x Red Bull Music Academy, 2013',
    "Buraka Som Sistema's set for Boiler Room in Lisbon in 2013, on Boiler Room's own channel."),
  'Kancheli Zitto Bassiani': video('blO-TbxAMhM', 'Techno', 'Kancheli and Zitto', 'Boiler Room x Bassiani, Tbilisi, 2018',
    "Kancheli and Zitto at Bassiani in 2018, on Boiler Room's own channel."),
  'Tommy Four Seven Prague': video('tfrZCnhooGo', 'Techno', 'Tommy Four Seven', 'Boiler Room Prague, 2018',
    "Tommy Four Seven's set for Boiler Room in Prague in 2018, on Boiler Room's own channel."),
  'DJ Seinfeld Budapest': video('BMtfZNMFMG4', 'House', 'DJ Seinfeld', 'Boiler Room Budapest, 2020',
    "DJ Seinfeld's set for Boiler Room in Budapest in 2020, on Boiler Room's own channel."),
  'FJAAK Krakow': video('YJ6wGIWf2VA', 'Techno', 'FJAAK', "Boiler Room x Ballantine's True Music, Krakow, 2019",
    "FJAAK's set for Boiler Room in Krakow in 2019, on Boiler Room's own channel."),
  'Daria Kolosova Belgrade': video('h2UwuQxyBGc', 'Techno', 'Daria Kolosova', 'Boiler Room Belgrade at Drugstore, 2021',
    "Daria Kolosova at Drugstore in Belgrade in 2021, on Boiler Room's own channel."),
  'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave. My own mix.'),
  'Table: cities': articleTable({
    headers: ['City', 'Clubs to know', 'Best for'],
    rows: [
      ['Berlin', 'Tresor (1991), Berghain (2004)', 'Techno and long weekends'],
      ['Amsterdam', 'Shelter, Radion, the Gashouder', '24-hour nights and Amsterdam Dance Event in October'],
      ['London', 'fabric (1999)', 'Three rooms and a long club history'],
      ['Ibiza', 'Hï, Pacha, Amnesia, DC-10, [UNVRS]', 'The biggest rooms, late April to mid-October only'],
      ['Barcelona', 'Razzmatazz, Nitsa at Sala Apolo', 'A city break, with Sónar in June'],
      ['Tbilisi', 'Bassiani (2014), KHIDI', 'Techno with a strict door'],
      ['Prague', 'Cross Club (2002)', 'A club built from salvaged machinery'],
      ['Budapest', 'A38, Lärm', 'Ruin bars first, clubs after'],
      ['Lisbon', 'Lux Frágil (1998)', 'A riverside club'],
      ['Paris', 'Rex Club (1988)', 'House and techno history'],
      ['Krakow', 'Prozak 2.0 (2012)', 'A medieval basement'],
      ['Belgrade', 'Drugstore (2012)', 'A former slaughterhouse']
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
  {id: 'compare', heading: 'The quick answer: how the cities compare'},
  {id: 'three-capitals', heading: 'Berlin, Amsterdam and London: the three club capitals'},
  {id: 'south-and-west', heading: 'Ibiza, Barcelona, Lisbon and Paris: the south and west'},
  {id: 'east', heading: 'Tbilisi, Prague, Budapest, Krakow and Belgrade: the east'},
  {id: 'choose', heading: 'How to choose a city'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Clubbing cities',
    title: 'The best clubbing cities in Europe',
    deck: 'Twelve cities judged by their clubs, from Berghain and fabric to Bassiani and Drugstore, with a guide for each where there is one.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubbing cities in Europe', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs, not resorts.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: "Clubbing cities FAQ.", openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('/best-clubs-in-berlin', 'thecatrave: Best clubs in Berlin')}
${sourceLink('/best-electronic-music-clubs-in-london', 'thecatrave: Best electronic music clubs in London')}
${sourceLink('/best-clubs-in-amsterdam', 'thecatrave: Best clubs in Amsterdam')}
${sourceLink('/best-clubs-in-ibiza', 'thecatrave: Best clubs in Ibiza')}
${sourceLink('/best-clubs-in-barcelona', 'thecatrave: Best clubs in Barcelona')}
${sourceLink('/best-clubs-in-paris', 'thecatrave: Best clubs in Paris')}
${sourceLink('https://en.wikipedia.org/wiki/Bassiani', 'Wikipedia: Bassiani')}
${sourceLink('https://en.wikipedia.org/wiki/Cross_Club', 'Wikipedia: Cross Club')}
${sourceLink('https://www.atlasobscura.com/places/cross-club', 'Atlas Obscura: Cross Club')}
${sourceLink('https://en.wikipedia.org/wiki/A38_(venue)', 'Wikipedia: A38 (venue)')}
${sourceLink('https://justbudapest.com/rave-techno-electronic-music-venues/', 'Just Budapest: A Guide to Budapest Rave, Techno and Electronic Music Venues')}
${sourceLink('https://www.inyourpocket.com/krakow/prozak-20_18565v', 'In Your Pocket Kraków: Prozak 2.0')}
${sourceLink('https://www.electronicbeats.net/how-belgrades-club-scene-grew-from-wartime-rave-roots', "Telekom Electronic Beats: How Belgrade's Club Scene Grew From Wartime Rave Roots")}
${sourceLink('https://drugstorebeograd.com/', 'Drugstore Beograd')}
${sourceLink('https://www.thelisbonconnection.com/world-famous-club-lisbon-lux-fragil-unique-river-location-john-malkovitch/', 'The Lisbon Connection: Lux Frágil')}
${sourceLink('https://djmag.com/top100clubs/2015/93/Lux-Fragil', 'DJ Mag Top 100 Clubs 2015: Lux Frágil')}
${sourceLink('https://shesabroadagain.com/best-party-places-in-europe/', "She's Abroad Again: 25 Best Party Places in Europe")}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubbing-cities-in-europe.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: "Best Clubbing Cities in Europe", canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubbing-cities-in-europe'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/europe-clubbing-cities.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page europe-clubbing-cities-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubbing-cities-in-europe.html', html);
console.log('Built best-clubbing-cities-in-europe.html');
