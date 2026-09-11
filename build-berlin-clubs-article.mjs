// Build best-clubs-in-berlin.html from berlin-clubs-draft.md.
//
// Asked for by the owner on 2026-09-10: traffic from people looking for the
// best and famous clubs in Berlin. The page goes further back than the listings
// that hold the SERP (RA, Time Out, visitberlin) and covers the rooms that made
// Berlin a techno city (UFO, Tresor, the Bunker, E-Werk, Ostgut), which no
// competitor list names. The owner's own voice is in two places only, by their
// decision: the Berghain door and Sisyphos. See berlin-clubs-research.md and
// the «Клубы Берлина» entry in TOPIC-DOSSIERS.md.
//
// Keywords: best clubs in berlin 1,600 a month (global), berlin clubs 6,100,
// berlin nightlife 5,200, how to get into berghain 1,800, what is berghain 800.
// "berghain" itself (198,000) is excluded on purpose: it is navigational. See
// keywords/berlin-clubs.json.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleYoutubeEmbed, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('berlin-clubs-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-berlin';
const title = 'Best Clubs in Berlin: The Legends and the Ones Still Open';
const description = 'Berghain, Tresor, KitKat and the clubs that came before them: the best clubs in Berlin, how each became famous, and the sets to hear before you go.';
const date = '2026-09-10';
const dateLabel = '10 September 2026';

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

// All six from Wikimedia Commons, downloaded to img/berlin-clubs/ on
// 2026-09-10, licences checked on each file page, used by no other guide.
// Exteriors only: Berghain does not allow photographs inside.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berlin-clubs/${name}-${width}.webp`,
  srcset: `img/berlin-clubs/${name}-320.webp 320w, img/berlin-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Both YouTube ids
// were checked against YouTube's oEmbed author on 2026-09-10: Drumcode's own
// channel (drumcodeofficial) and HÖR's own channel (@hoer.berlin). Der Klang
// der Familie comes from Dr. Motte's own SoundCloud (oEmbed author checked
// 2026-09-11): the original release, remastered in 2010. Every YouTube upload
// was a fan channel, and the Spotify copy first used sat on a retro-house
// compilation, not on a release by the artist.
const media = {
  'Tresor 2003': figure('tresor-2003', 1200, 900,
    'The entrance to the original Tresor club on Leipziger Strasse in Berlin, 2003',
    "Tresor's first home, on Leipziger Strasse, in September 2003. The club closed here two years later. Photograph: MichaelBrossmann, public domain."),
  'Tresor door': figure('tresor-door', 1200, 900,
    'A door from the Tresor club on display in the Berlin Global exhibition at the Humboldt Forum',
    'A door from the original Tresor, now part of the Berlin Global exhibition at the Humboldt Forum. Photograph: Fridolin freudenfett, CC BY-SA 4.0.'),
  'Berghain entrance': figure('berghain', 1200, 800,
    'The entrance to Berghain in the former Friedrichshain heating plant, Berlin',
    'The entrance to Berghain in 2017. This is as far as photographs go. Photograph: Michael Mayer, CC BY 2.0.'),
  'Bar 25': figure('bar25', 1200, 900,
    'Bar 25 on the bank of the Spree in Berlin, August 2009',
    'Bar 25 on the Spree in August 2009, a year before it closed. Photograph: Cornelius Bartke, CC BY-SA 2.0.'),
  'Watergate': figure('watergate', 1200, 800,
    'The Watergate nightclub seen from the Spree river in Berlin',
    'Watergate from the Spree in 2013. It closed at the end of 2024. Photograph: Alexander, CC BY-SA 2.0.'),
  'Sisyphos': figure('sisyphos', 1200, 800,
    'The Sisyphos club on Hauptstraße in Berlin-Rummelsburg',
    'Sisyphos on Hauptstraße in Rummelsburg in 2022, on the old factory site the party grew into. Photograph: Rio65trio, CC BY-SA 4.0.'),
  'Der Klang der Familie': articleListeningBand({
    platform: 'soundcloud',
    id: 'klang-der-familie',
    kicker: 'Essential listening',
    title: '3 Phase featuring Dr. Motte, Der Klang der Familie: the original release.',
    description: "Tresor Records' sixth release, and the title of the oral history of Berlin techno. Both sides of the 12-inch, Der Klang der Familie and Open Your Mind, remastered, on Dr. Motte's own SoundCloud.",
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    iframeTitle: "Der Klang der Familie and Open Your Mind by 3 Phase featuring Dr. Motte, on Dr. Motte's SoundCloud",
    fullBleed: true,
    tone: 'cyan'
  }),
  'Teenage Mutants live from Sisyphos': youtube('zjfPd4jNZao',
    "Teenage Mutants live from Sisyphos, Berlin, Drumcode Radio Live DCR829, on Drumcode's YouTube channel"),
  'Ellen Allien HÖR': youtube('GG2IQguY-J0',
    "Ellen Allien, TTT x HÖR, on HÖR Berlin's YouTube channel"),
  // Status from RA's 2026 guide, Time Out and the clubs' Wikipedia articles,
  // checked 2026-09-10. Typed, not computed. Revisit every six months.
  'Table: now': articleTable({
    headers: ['Club', 'Where', 'Opened', 'Known for', 'Status, September 2026'],
    rows: [
      ['Tresor', 'Köpenicker Straße, Mitte', '1991 (here since 2007)', 'Detroit and Berlin techno; its own label since 1991', 'Open'],
      ['Berghain / Panorama Bar', 'Friedrichshain', '2004', 'Techno and house; no photographs', 'Open'],
      ['KitKatClub', 'Brückenstraße, Mitte', '1994 (here since 2007)', 'Techno; a strict fetish and glamour dress code', 'Open'],
      ['Kater (formerly Kater Blau)', 'North bank of the Spree, Friedrichshain', '2014', 'Marathon parties; the Bar 25 family', 'Open'],
      ['Sisyphos', 'Hauptstraße, Rummelsburg', '2009', 'Friday night to Monday morning; five floors', 'Open'],
      ['Club der Visionaere', 'Alt-Treptow, on the canal', 'Early 2000s', 'Minimal', 'Open'],
      ['OST', 'A former power station', 'n/a', 'Several rooms in one industrial building', 'Open'],
      ['Wilde Renate', 'Near the Elsenbrücke, Friedrichshain', '2007', 'Theme parties in a former apartment building', 'Open; lease extended December 2025']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    // Longest match wins: "Sisyphos" is also inside "Teenage Mutants live from Sisyphos".
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

// A section whose body carries ### subsections renders each as its own H3.
function renderWithSubsections(text, anchors) {
  const [lead, ...blocks] = text.split(/\n### /);
  if (blocks.length !== anchors.length) throw new Error(`Expected ${anchors.length} subsections, found ${blocks.length}`);
  return [render(lead), ...blocks.map((block, i) => {
    const [heading, ...rest] = block.split('\n');
    return `<h3 id="${anchors[i]}">${inline(heading.trim())}</h3>\n${render(rest.join('\n'))}`;
  })].join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'before-berghain', heading: 'Before Berghain: how Berlin became a techno city', title: 'Before Berghain: how Berlin became a techno city.'},
  {id: 'berghain', heading: 'Berghain and Panorama Bar', title: 'Berghain and Panorama Bar.', subsections: ['the-door']},
  {id: 'closed-legends', heading: 'The legends that closed', title: 'The legends that closed.'},
  {id: 'best-clubs-now', heading: 'The best clubs in Berlin now', title: 'The best clubs in Berlin now.', subsections: ['sisyphos']},
  {id: 'how-berlin-clubs-work', heading: 'How Berlin clubs work: dress code, phones, the weekend', title: 'How Berlin clubs work: dress code, phones, the weekend.'},
  {id: 'hear-berlin', heading: 'Hear Berlin before you go', title: 'Hear Berlin before you go.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker,
  bodyHtml: s.subsections ? renderWithSubsections(getSection(s.heading), s.subsections) : render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Berlin clubs',
    title: 'The best clubs in Berlin, and the legends behind them',
    deck: 'From UFO and Tresor to Berghain and Sisyphos: the rooms that made Berlin a techno city, the famous clubs that closed, and the ones still open.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Berlin', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Legends first, then next weekend.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Berlin clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Tresor_(club)', 'Wikipedia: Tresor (club)')}
${sourceLink('https://en.wikipedia.org/wiki/Tresor_Records', 'Wikipedia: Tresor Records')}
${sourceLink('https://www.vice.com/en/article/der-klang-der-familie-the-sound-of-the-family-felix-denk-interview-berlin-techno-berlin-wall-tresor-ufo/', 'VICE: interview with Felix Denk on Der Klang der Familie, 2014')}
${sourceLink('https://en.wikipedia.org/wiki/Berghain', 'Wikipedia: Berghain')}
${sourceLink('https://de.wikipedia.org/wiki/E-Werk_(Berlin)', 'Wikipedia (de): E-Werk (Berlin)')}
${sourceLink('https://en.wikipedia.org/wiki/Bar_25', 'Wikipedia: Bar 25')}
${sourceLink('https://de.wikipedia.org/wiki/Kater_Blau', 'Wikipedia (de): Kater Blau')}
${sourceLink('https://de.wikipedia.org/wiki/Watergate_(Club)', 'Wikipedia (de): Watergate (Club)')}
${sourceLink('https://de.wikipedia.org/wiki/Salon_zur_Wilden_Renate', 'Wikipedia (de): Salon zur Wilden Renate')}
${sourceLink('https://en.wikipedia.org/wiki/KitKatClub', 'Wikipedia: KitKatClub')}
${sourceLink('https://de.wikipedia.org/wiki/Sisyphos_(Berlin)', 'Wikipedia (de): Sisyphos (Berlin)')}
${sourceLink('https://www.tagesspiegel.de/berlin/streifzug-durch-die-clubs-von-berlin-jetzt-steigt-die-party-in-lichtenberg/10119176.html', 'Tagesspiegel: Jetzt steigt die Party in Lichtenberg, 2014')}
${sourceLink('https://www.fazemag.de/sisyphos-ist-vorerst-zu/', 'FAZE Mag: Sisyphos ist vorerst zu, 2014')}
${sourceLink('https://ra.co/guides/clubs-in-berlin', 'Resident Advisor: Best Clubs in Berlin, 2026')}
${sourceLink('https://www.bbc.com/travel/article/20240322-berlin-techno-scene-gains-unesco-status', "BBC Travel: How Berlin's techno scene transformed the city and gained UNESCO status, 2024")}
${sourceLink('https://hoer.live/imprint/', 'HÖR: imprint')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks, one of them with Berlin in its title. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-berlin.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Clubs in Berlin', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/berlin-clubs.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page berlin-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-berlin.html', html);
console.log('Built best-clubs-in-berlin.html');
