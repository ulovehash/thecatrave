// Build glastonbury-festival.html from glastonbury-draft.md.
//
// Festivals series (festivals-series.md), the third of the more popular
// festivals. The structure and the evidence behind it are in
// glastonbury-research.md, built from the owner's UK exports of the Wikipedia
// article's, the official site's and the subreddit's rankings, because the
// Ahrefs units ran out; TOPIC-RESEARCH.md stages 3, 4 and 6 were not run.
//
// Keywords (UK, latest month, September 2026): glastonbury 2027 18,000,
// glastonbury festival 13,000, why is there no glastonbury this year 2,600, is
// glastonbury on this year 2,500, glastonbury headliners by year 2,400, where
// is glastonbury 2,000, glastonbury 2027 dates 1,800, when is glastonbury 2027
// 1,700, how many people go to glastonbury 1,600, when does glastonbury finish
// 1,300, glastonbury headliners 1,100, and smaller forms. Registration,
// tickets, line-ups of a given year and the map are excluded. See
// keywords/glastonbury.json.
//
// The catalogue behind the Selector holds no Glastonbury set, so the players
// come from BBC Music's YouTube channel and R.E.M.'s own, oEmbed-checked.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines, so placement is decided in the draft and only rendered
// here. A placeholder with no matching asset fails the build, and so does an
// asset with no placeholder.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('glastonbury-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/glastonbury-festival';
const title = 'Glastonbury Festival: 2027, Fallow Years and Headliners';
const description = 'Glastonbury Festival at Worthy Farm: when Glastonbury 2027 is, why there is no festival this year, where it is, how big it is, and the headliners by year.';
const date = '2026-09-14';
const dateLabel = '14 September 2026';

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

// All three from Wikimedia Commons, downloaded to img/glastonbury/, used by no
// other guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/glastonbury/${name}-${width}.webp`,
  srcset: `img/glastonbury/${name}-320.webp 320w, img/glastonbury/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Headliners by year from en.wikipedia's line-ups table; fallow and cancelled
// years from its history. Typed, not computed.
const headlinerRows = [
  ['1970', 'Tyrannosaurus Rex (replacing the Kinks)'],
  ['1971', 'David Bowie'],
  ['1979', 'Tim Blake, Peter Gabriel'],
  ['1981', 'Hawkwind, Ginger Baker'],
  ['1982', 'Van Morrison, Jackson Browne'],
  ['1983', 'Curtis Mayfield, UB40'],
  ['1984', 'The Smiths, Weather Report, Black Uhuru'],
  ['1985', 'Echo & the Bunnymen, Joe Cocker, The Boomtown Rats'],
  ['1986', 'The Cure, The Psychedelic Furs, Level 42'],
  ['1987', 'Elvis Costello, Van Morrison, The Communards'],
  ['1988', 'Fallow year'],
  ['1989', 'Elvis Costello, Van Morrison, Suzanne Vega'],
  ['1990', 'The Cure, Happy Mondays, Sinéad O\'Connor'],
  ['1991', 'Fallow year'],
  ['1992', 'Carter USM, Shakespears Sister, Youssou N\'Dour'],
  ['1993', 'The Black Crowes, Christy Moore, Lenny Kravitz'],
  ['1994', 'Levellers, Elvis Costello, Peter Gabriel'],
  ['1995', 'Oasis, Pulp, The Cure'],
  ['1996', 'Fallow year'],
  ['1997', 'Radiohead, The Prodigy, Ash'],
  ['1998', 'Primal Scream, Blur, Pulp'],
  ['1999', 'R.E.M., Manic Street Preachers, Skunk Anansie'],
  ['2000', 'David Bowie, Travis, The Chemical Brothers'],
  ['2001', 'Fallow year'],
  ['2002', 'Coldplay, Rod Stewart, Stereophonics'],
  ['2003', 'R.E.M., Radiohead, Moby'],
  ['2004', 'Paul McCartney, Oasis, Muse'],
  ['2005', 'The White Stripes, Coldplay, Basement Jaxx'],
  ['2006', 'Fallow year'],
  ['2007', 'Arctic Monkeys, The Killers, The Who'],
  ['2008', 'Kings of Leon, Jay-Z, The Verve'],
  ['2009', 'Neil Young, Bruce Springsteen, Blur'],
  ['2010', 'Gorillaz, Muse, Stevie Wonder'],
  ['2011', 'Beyoncé, U2, Coldplay'],
  ['2012', 'Fallow year (the London Olympics)'],
  ['2013', 'Arctic Monkeys, The Rolling Stones, Mumford & Sons'],
  ['2014', 'Arcade Fire, Metallica, Kasabian'],
  ['2015', 'Florence and the Machine, Kanye West, The Who'],
  ['2016', 'Muse, Adele, Coldplay'],
  ['2017', 'Radiohead, Foo Fighters, Ed Sheeran'],
  ['2018', 'Fallow year'],
  ['2019', 'Stormzy, The Killers, The Cure'],
  ['2020 and 2021', 'Cancelled for the pandemic'],
  ['2022', 'Billie Eilish, Paul McCartney, Kendrick Lamar'],
  ['2023', 'Arctic Monkeys, Guns N\' Roses, Elton John'],
  ['2024', 'Dua Lipa, Coldplay, SZA'],
  ['2025', 'The 1975, Neil Young, Olivia Rodrigo'],
  ['2026', 'Fallow year'],
  ['2027', '23 to 27 June; headliners not yet announced']
];

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-14.
const media = {
  'Pilton, Glastonbury Festival Site': figure('aerial-2022', 1200, 800,
    'Worthy Farm from the air in June 2022, green fields divided by hedges and filled with tents, marquees and coloured canopies',
    'Worthy Farm from the air in June 2022, days before the festival, its fields already filled with tents, marquees and stages. Photograph: Lewis Clarke, CC BY-SA 2.0.'),
  // 640 wide at source, so it keeps its own size rather than being enlarged.
  'The Pyramid Stage - Glastonbury 2008': figure('pyramid-2008', 640, 480,
    'The white Pyramid Stage in the distance on a clear evening in 2008, tall flags and a seated crowd with folding chairs in the foreground',
    'The Pyramid Stage on a clear evening in June 2008, flags and a seated crowd in the field in front of it. Photograph: Sharon Loxton, CC BY-SA 2.0.', 'archive-image'),
  'Glastonbury Festival 2025 - Night': figure('night-2025', 1200, 800,
    'People silhouetted on a hillside at night in 2025, looking over a valley of lit stages, striped towers and strings of lights',
    'The festival at night on 26 June 2025, seen from the hillside above the site, with the lit stages and fields spread across the valley. Photograph: Raph_PH, CC BY 4.0.'),
  'Table: headliners': articleTable({
    headers: ['Year', 'Headliners'],
    rows: headlinerRows.map(row => row.map(escapeHtml))
  }),
  // Views read from BBC Music's channel on 2026-09-14: about 3.8 million.
  '1n6GvSfjE8M': youtube('1n6GvSfjE8M', 'The Prodigy, Breathe, at Glastonbury 2025, on the BBC Music YouTube channel'),
  // The closing listening: the legendary and most-watched (the owner,
  // 2026-09-13). Views read from YouTube on 2026-09-14: Coldplay's "Fix You"
  // from 2024, about 67 million on BBC Music, the most watched Glastonbury
  // upload found; R.E.M.'s complete 1999 BBC broadcast, about 2.2 million on
  // the band's own channel, the most watched full headline set found on an
  // artist's own channel.
  'kM-94LhhQTs': articleVideoCollection({
    label: 'Glastonbury, most watched',
    description: 'Coldplay playing "Fix You" at the 2024 festival, on BBC Music\'s channel; and R.E.M.\'s whole 1999 headline set, as the BBC broadcast it, on theirs.',
    items: [
      articleVideoCard({youtubeId: 'kM-94LhhQTs', genre: 'Glastonbury, 2024', artist: 'Coldplay', title: 'Fix You, Glastonbury 2024'}),
      articleVideoCard({youtubeId: 'DurDZkK58VE', genre: 'Glastonbury, 1999', artist: 'R.E.M.', title: 'Live from Glastonbury Festival, 1999'})
    ]
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).find(k => p.includes(k));
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

// The next-edition section comes first: its year is refreshed every June when
// the festival ends (festival-editions.mjs reminds the build).
const sections = [
  {id: 'glastonbury-2027', heading: 'Glastonbury 2027: dates', title: 'Glastonbury 2027: dates.'},
  {id: 'fallow-year', heading: 'Why there is no Glastonbury this year', title: 'Why there is no Glastonbury this year.'},
  {id: 'where', heading: 'Where Glastonbury Festival is', title: 'Where Glastonbury Festival is.'},
  {id: 'when', heading: 'When Glastonbury is, and how long it lasts', title: 'When Glastonbury is, and how long it lasts.'},
  {id: 'how-big', heading: 'How big Glastonbury is', title: 'How big Glastonbury is.'},
  {id: 'history', heading: 'A short history, and who runs Glastonbury', title: 'A short history, and who runs Glastonbury.'},
  {id: 'stages', heading: 'The Pyramid Stage and the rest of the site', title: 'The Pyramid Stage and the rest of the site.'},
  {id: 'headliners', heading: 'Glastonbury headliners by year', title: 'Glastonbury headliners by year.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Glastonbury from home', title: 'Hearing Glastonbury from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Glastonbury',
    title: 'Glastonbury Festival',
    deck: 'Five days most Junes on a dairy farm in Somerset. When the next one is, why there was none this year, where it happens, how big it is, and who has headlined.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Glastonbury', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival on a dairy farm.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Glastonbury FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Glastonbury_Festival', 'Wikipedia: Glastonbury Festival')}
${sourceLink('https://www.glastonburyfestivals.co.uk/info/', 'Glastonbury Festival: Info')}
${sourceLink('https://www.glastonburyfestivals.co.uk/news/glastonbury-2027-ticket-information-confirmed/', 'Glastonbury Festival: Glastonbury 2027 ticket information confirmed')}
${sourceLink('https://en.wikipedia.org/wiki/Arcadia_Spectacular', 'Wikipedia: Arcadia Spectacular')}
${sourceLink('https://www.ingenia.org.uk/articles/the-arcadia-spider-from-junk-to-spectacle/', 'Ingenia: The Arcadia spider, from junk to spectacle')}
${sourceLink('https://www.wallpaper.com/art/glastonbury-arcadia-dragonfly-interview', 'Wallpaper: The story behind Arcadia\'s new Dragonfly stage')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('glastonbury-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Glastonbury Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/glastonbury.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page glastonbury-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('glastonbury-festival.html', html);
console.log('Built glastonbury-festival.html');
