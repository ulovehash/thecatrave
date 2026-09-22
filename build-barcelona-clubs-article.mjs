// Build best-clubs-in-barcelona.html from barcelona-clubs-draft.md.
//
// Asked for by the owner on 2026-09-22, alongside the Paris clubs page.
// Research package and stage 6 (not yet run): barcelona-clubs-research.md and
// the "Клубы Парижа, Брюсселя, Барселоны + сезонные фестивали" entry in
// TOPIC-DOSSIERS.md. Tool switch in effect for this pass (KEYWORD-METHOD.md):
// volumes come from Google Ads Keyword Planner and live Google search, not
// the Ahrefs API; both figures are kept side by side in
// keywords/barcelona-clubs.json rather than merged. Distinct intent from the
// existing /sonar-festival-barcelona and /primavera-sound-barcelona pages:
// those are festivals, this is year-round clubs.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('barcelona-clubs-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-barcelona';
const title = 'Best Clubs in Barcelona: From Zeleste to Razzmatazz';
const description = "Razzmatazz, Nitsa and Macarena Club: how Barcelona's biggest club grew out of a 1970s live venue, and the best clubs in Barcelona open now.";
const datePublished = '2026-09-22';
const dateModified = '2026-09-22';
const dateLabel = '22 September 2026';

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

// From Wikimedia Commons, downloaded to img/barcelona-clubs/ on 2026-09-22,
// licence checked on the file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/barcelona-clubs/${name}-${width}.webp`,
  srcset: `img/barcelona-clubs/${name}-320.webp 320w, img/barcelona-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Status from RA's 2026 guide, Tripadvisor and barcelona.com, checked
// 2026-09-22. Typed, not computed. Revisit every six months.
const media = {
  'Razzmatazz exterior': figure('razzmatazz-exterior', 1280, 822,
    "The exterior of Sala Razzmatazz in the Poblenou district of Barcelona",
    'Razzmatazz in Poblenou, on the site cleared for it after Zeleste closed. Photograph: Zarateman, public domain (CC0).'),
  'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, 'en', 'Thirty tracks where breaks move between garage, bass music, techno and rave. My own mix.'),
  'thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1),
  'thecatrave Look': ownTrackListening('look', 'Future bass, glitch and breakbeat, close to the small, close-quarters energy a room the size of Macarena Club runs on. My own track.'),
  'Honey Dijon Barcelona': articleVideoCollection({
    label: 'Honey Dijon, DJ set filmed in Barcelona',
    description: "Honey Dijon's set for Mixmag's Burn Energy Tour, filmed in Barcelona rather than inside any one club on this page, on Mixmag's own YouTube channel.",
    items: [articleVideoCard({youtubeId: 'l35ok-7n2IU', genre: 'House', artist: 'Honey Dijon', title: 'DJ set, Burn Energy Tour x Mixmag, Barcelona'})]
  }),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Razzmatazz', 'Poblenou', 'Five rooms, each with its own policy, from techno and house to indie and pop', "The city's biggest club, several nights under one roof"],
      ['Sala Apolo (Nitsa)', 'Poble Sec', 'An electronic club night running since 1996 inside a much older concert hall', 'A long, serious electronic booking policy in a historic room'],
      ['Macarena Club', 'Barri Gòtic, off La Rambla', 'A single dance floor, capacity about 300, electronic dance music', 'An intimate room that feels closer to a house party than a club'],
      ['Moog', 'Barri Gòtic', "Long-running and named across every current guide checked for this page", 'A dependable stop in the old town']
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
  {id: 'zeleste-razzmatazz', heading: 'Zeleste, Razzmatazz and the room that grew out of a live venue', title: 'Zeleste, Razzmatazz and the room that grew out of a live venue.'},
  {id: 'apolo-nitsa', heading: 'Sala Apolo and Nitsa', title: 'Sala Apolo and Nitsa.'},
  {id: 'macarena', heading: 'Macarena Club: a flamenco tablao that became a dance-music room', title: 'Macarena Club: a flamenco tablao that became a dance-music room.'},
  {id: 'best-clubs-now', heading: 'The best clubs in Barcelona now', title: 'The best clubs in Barcelona now.'},
  {id: 'where-to-go', heading: 'Where to go: Gothic Quarter, Eixample and the beach clubs', title: 'Where to go: Gothic Quarter, Eixample and the beach clubs.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Barcelona clubs',
    title: 'The best clubs in Barcelona, from Zeleste to Razzmatazz',
    deck: "A live venue that became the city's biggest club, an electronic night thirty years deep in a former concert hall, and a flamenco room turned dance floor: the best clubs in Barcelona now.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Barcelona', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Buildings changing use, not clubs starting from nothing.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Barcelona clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Razzmatazz_(club)', 'Wikipedia: Razzmatazz (club)')}
${sourceLink('https://www.webarcelona.net/nightlife-barcelona/razzmatazz', "WeBarcelona: Razzmatazz, on Zeleste's 1973 opening")}
${sourceLink('https://www.catalunya.com/razzmatazz-17-18003-14', 'Turisme de Catalunya: Razzmatazz Barcelona')}
${sourceLink('https://www.thenewbarcelonapost.com/en/history-sala-apolo/', 'The New Barcelona Post: Did you know that Sala Apolo was an amusement park?')}
${sourceLink('https://djmag.com/nitsa', 'DJ Mag: Nitsa, Top 100 Clubs')}
${sourceLink('https://www.primaverasound.com/en/primavera-pro/nitsa-club-30-years', "Primavera Sound: Nitsa Club, 30 anys transformant l'escena electrònica")}
${sourceLink('https://www.sala-apolo.com/en/clubs/nitsa', 'Sala Apolo: Nitsa')}
${sourceLink('https://ra.co/features/2226', 'Resident Advisor: RA In Residence, Macarena Club')}
${sourceLink('https://ra.co/guides/clubs-in-barcelona', "Resident Advisor: Best Clubs in Barcelona in 2026")}
${sourceLink('https://www.barcelona-tourist-guide.com/en/club/macarena-club-barcelona.html', 'Barcelona Tourist Guide: Macarena Club in Barcelona')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-barcelona.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Barcelona', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-barcelona'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/barcelona-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page barcelona-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-barcelona.html', html);
console.log('Built best-clubs-in-barcelona.html');
