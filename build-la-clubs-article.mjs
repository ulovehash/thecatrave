// Build best-clubs-in-los-angeles.html from la-clubs-draft.md.
//
// Asked for by the owner on 2026-11-08 ("lets create first 3 ... 1 by 1"),
// third of the Chicago, Miami and Los Angeles club guides. Research: the clubs
// and festivals entries in TOPIC-DOSSIERS.md. Volumes are in
// keywords/la-clubs.json: Keyword Planner ranges for the heads, Ahrefs US
// points for the long tail, labelled per term and never merged. The page leads
// with the dance clubs and leaves bottle service and hip-hop rooms aside.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('la-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-los-angeles';
const title = 'Best Clubs in Los Angeles: Nightclubs for House and Techno';
const description = 'The best clubs in Los Angeles for house and techno: Avalon Hollywood, Exchange LA, Academy LA, Sound, Lot 613 and Catch One, with their history.';
const datePublished = '2026-11-08';
const dateModified = '2026-11-08';
const dateLabel = '8 November 2026';

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

// From Wikimedia Commons, downloaded to img/la-clubs/ on 2026-11-08,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/la-clubs/${name}-${width}.webp`,
  srcset: `img/la-clubs/${name}-320.webp 320w, img/la-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Every set is from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-11-08 and embedded by no other guide (media/la-clubs.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

// Status from DJ Mag Top 100 Clubs 2026, 6AM, Time Out and the clubs' RA
// pages, checked 2026-11-08. Typed, not computed. Revisit every six months.
const media = {
  'Avalon exterior': figure('avalon-hollywood-2007', 1200, 900,
    'The ornate cream front of the Avalon building on Vine Street, with its entrance canopy and a street lamp',
    'Avalon on Vine Street, Hollywood, in June 2007. The building opened as the Hollywood Playhouse in 1927. Photograph: Minnaert, public domain.'),
  'Tigerheat at Avalon': figure('tigerheat-avalon-2019', 1200, 800,
    'A crowd on the Avalon dancefloor under green and yellow beams from the stage',
    'Tigerheat on the dancefloor at Avalon, June 2019. Photograph: Lanisha Cole, CC BY-SA 4.0.'),
  'Exchange building': figure('la-stock-exchange-building-2008', 900, 1200,
    'The grey stone front of the former Los Angeles Stock Exchange on Spring Street, between two trees',
    'The Los Angeles Stock Exchange building at 618 Spring Street, home of Exchange LA. Photograph: Los Angeles, CC BY-SA 3.0.'),
  'Catch One': figure('catch-one-2020', 1200, 494,
    "The two-storey Jewel's Catch One building on a corner of Pico Boulevard under a blue sky",
    "Jewel's Catch One on Pico Boulevard in December 2020. Photograph: Downtowngal, CC BY-SA 4.0."),
  'Hollywood Boulevard': figure('hollywood-boulevard-night', 900, 1164,
    'Hollywood Boulevard at dusk, with palm trees, a lit tower and people walking on the Walk of Fame',
    'Hollywood Boulevard near Vine Street at night. Photograph: Downtowngal, CC BY-SA 3.0.'),
  'Factory 93': video('uaQ6n3FHx0U', 'House', 'Sante and Sidney Charles', 'Factory 93 presents, Mixmag Lab LA, 2016',
    'Sante and Sidney Charles for Factory 93, the Insomniac warehouse series, recorded at the Mixmag Lab in Los Angeles in 2016.'),
  'Hot Since 82 Framework': video('Xm0F3XwiBY0', 'House', 'Hot Since 82', 'Framework presents Knee Deep in Los Angeles, Union Station, Beatport, 2023',
    'Hot Since 82 at Union Station for Framework, the party that runs Fridays at Sound.'),
  'Marques Wyatt': video('18nZvCPbYSA', 'House', 'Marques Wyatt', "Beatport x Ballantine's True Music: Los Angeles, 2021",
    'Marques Wyatt, a Los Angeles house DJ and one of the Framework DJs, playing for Beatport in the city.'),
  'Boys Noize': video('aH879o3tWfk', 'Techno', 'Boys Noize', 'Boiler Room LA: Lights Down Low, 2021',
    'Boys Noize at Lights Down Low, a Los Angeles party, for Boiler Room in 2021.'),
  'thecatrave mix': ownSetListening(0, 'en', 'Thirty tracks moving between garage, bass music, techno and rave, for the end of a Los Angeles night. My own mix.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Avalon Hollywood', 'Hollywood and Vine', 'A 1927 theatre, Insomniac since 2025, DJ Mag 64', 'Trance and progressive house, Tigerheat'],
      ['Exchange LA', 'Downtown, Spring Street', 'Four floors in the old Stock Exchange, DJ Mag 48', 'Mainstage nights and hard techno at Mutate'],
      ['Academy LA', 'Hollywood Boulevard', 'About 1,000, LED ceiling, two patios, DJ Mag 44', 'Big-room house and EDM'],
      ['Sound', 'Hollywood, Las Palmas', 'About 600, Funktion-One, since 2012, DJ Mag 86', 'House and techno, Framework on Fridays'],
      ['Lot 613', 'Arts District', 'A warehouse with a courtyard', 'Underground house and techno'],
      ['Catch One', 'Pico Boulevard', 'A dance club since 1973', 'History, queer nights and concerts']
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
  {id: 'avalon', heading: 'Avalon and the Hollywood Palace'},
  {id: 'exchange-la', heading: 'Exchange LA and the Stock Exchange building'},
  {id: 'insomniac', heading: 'Insomniac and the LA rave'},
  {id: 'best-clubs-now', heading: 'The best clubs in Los Angeles now'},
  {id: 'sound', heading: 'Sound and LA house music'},
  {id: 'catch-one', heading: 'Catch One'},
  {id: 'warehouses', heading: 'Warehouses and EDM clubs in Los Angeles'},
  {id: 'where-to-go', heading: 'Where to go out in Los Angeles'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Los Angeles clubs',
    title: 'The best clubs in Los Angeles, from Avalon to Exchange LA and Sound',
    deck: 'A 1927 theatre, a stock exchange and a house room in Hollywood: the dance clubs of Los Angeles, and the company behind most of them.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Los Angeles', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Clubs built around the sound.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Los Angeles clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Avalon_(Hollywood)', 'Wikipedia: Avalon (Hollywood)')}
${sourceLink('https://en.wikipedia.org/wiki/Los_Angeles_Stock_Exchange_Building', 'Wikipedia: Los Angeles Stock Exchange Building')}
${sourceLink('https://en.wikipedia.org/wiki/Insomniac_(promoter)', 'Wikipedia: Insomniac')}
${sourceLink('https://en.wikipedia.org/wiki/Electric_Daisy_Carnival', 'Wikipedia: Electric Daisy Carnival')}
${sourceLink('https://en.wikipedia.org/wiki/Jewel%27s_Catch_One', "Wikipedia: Jewel's Catch One")}
${sourceLink('https://djmag.com/top100clubs', 'DJ Mag Top 100 Clubs 2026')}
${sourceLink('https://6amgroup.com/articles/all/40-best-house-techno-clubs-in-north-america', '6AM: 40 best house and techno clubs in North America')}
${sourceLink('https://www.timeout.com/los-angeles/clubs/dance-clubs-in-la-the-best-places-to-dance-every-night-of-the-week', 'Time Out: Dance clubs in LA')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-los-angeles.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Los Angeles', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-los-angeles'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/la-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page la-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-los-angeles.html', html);
console.log('Built best-clubs-in-los-angeles.html');
