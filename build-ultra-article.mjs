// Build ultra-music-festival.html from ultra-draft.md.
//
// Fifth guide of the festivals series (festivals-series.md), after Burning
// Man, Tomorrowland, EDC Las Vegas and Creamfields. The structure and the
// evidence behind it are in ultra-research.md. Ultra Europe is a section of
// this page, not a page of its own: the owner's decision, 13 September 2026.
//
// Keywords: ultra miami 6,900 a month (US, TP 7,100), ultra music festival
// 4,300 (US, 12,000 global, TP 6,800), ultra europe 1,600 (US, 6,600 global),
// ultra split 900 (Croatia, TP 2,300), ultra croatia 500, ultra festival 500.
// Lineups, dated editions and tickets are excluded on purpose, and the Ultra
// Records collision gets one line. See keywords/ultra.json.
//
// The festival's own channel (UMF TV) is mostly aftermovies, so the full sets
// come from the artists' own YouTube channels.
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

const draft = fs.readFileSync('ultra-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/ultra-music-festival';
const title = 'Ultra Music Festival: Miami, Ultra Europe and the Music';
const description = 'Ultra in Miami every March: where it happens at Bayfront Park, how big it is, who owns it, Ultra Europe in Split, and what plays beyond the Main Stage.';
const datePublished = '2026-09-13';
const dateModified = '2026-09-15';
const dateLabel = '15 September 2026';

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

// All five from Wikimedia Commons, downloaded to img/ultra/, used by no other
// guide. Licences checked against the Commons API on 2026-09-13; the full
// record, and the flyer scans rejected, are in media/ultra.json.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/ultra/${name}-${width}.webp`,
  srcset: `img/ultra/${name}-320.webp 320w, img/ultra/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author on 2026-09-13.
const media = {
  'Bayfront Park, 2014': figure('bayfront-2014', 1200, 900,
    'Bayfront Park in downtown Miami seen from above during Ultra 2014, the Main Stage and tents beside the marina and Biscayne Bay',
    'Bayfront Park from above during the 2014 festival, the Main Stage beside the marina on Biscayne Bay. Photograph: Pietro, CC BY-SA 3.0.'),
  'Panoramic View of Bayfront Park': figure('bayfront-2013', 1200, 795,
    'A fisheye panorama of Bayfront Park set up for Ultra in 2013, with stage structures and tents between the Miami skyline and the bay',
    'Bayfront Park on the Thursday before the second weekend of 2013, the only year Ultra ran over two. Photograph: Robert Giordano, CC BY-SA 3.0.'),
  'Ultra Music Festival 20110326': figure('bicentennial-2011', 1200, 666,
    'An aerial view of Ultra at Bicentennial Park in 2011, a packed crowd in front of the Main Stage with downtown Miami towers behind',
    'Ultra at Bicentennial Park in 2011, its first year over three days and its last before the move back to Bayfront Park. Photograph: Averette, CC BY 3.0.'),
  'Split, Ultra Europe 2015': figure('poljud-2015', 1200, 900,
    'A daytime crowd on the pitch of the Poljud Stadium in Split during Ultra Europe 2015, under the stadium\'s arched roof',
    'The Main Stage crowd on the pitch at the Poljud Stadium in Split during Ultra Europe 2015. Photograph: Shadster, CC BY-SA 4.0.'),
  'Swedish House Mafia on Platform': figure('swedish-house-mafia-2018', 1200, 1008,
    'Swedish House Mafia silhouetted on a raised platform in blue light and smoke above the crowd at Ultra Miami 2018',
    'Swedish House Mafia on their platform at Ultra in 2018, closing the festival in their first live appearance as a group since 2013. Photograph: HollywoodAdam78, CC BY-SA 4.0.'),
  // The drum and bass evidence for the music section: Knife Party's 2016
  // closing set turning into Pendulum (Miami New Times). Pendulum's own channel
  // (pendulumlive, @pendulum); 2.4 million views on 2026-09-13.
  'EYMJizj3Qq8': youtube('EYMJizj3Qq8', "Pendulum / Knife Party, Headline Set Ultra 2016, on Pendulum's own YouTube channel"),
  // The closing listening: the festival's legendary and most-watched sets
  // (festivals-series.md). Both on Miami New Times' 2026 list of Ultra's best
  // performances; views read from YouTube on 2026-09-13: Skrillex 94.3 million
  // (his channel), Hardwell 35.7 million (his channel, UMF.TV's broadcast).
  'V2VmcuOEqEg': articleVideoCollection({
    label: 'Ultra\'s most watched',
    description: 'Two full Main Stage sets: Skrillex in 2015, more than 94 million views on his own channel, and Hardwell in 2013, more than 35 million on his.',
    items: [
      articleVideoCard({youtubeId: 'V2VmcuOEqEg', genre: 'Main Stage, 2015', artist: 'Skrillex', title: 'Live at Ultra Music Festival 2015'}),
      articleVideoCard({youtubeId: 'jXOgYxUf6Ts', genre: 'Main Stage, 2013', artist: 'Hardwell', title: 'Live at Ultra Music Festival 2013'})
    ]
  }),
  // Attendance totals are summed admissions across each multi-day edition,
  // not unique visitors or ticket counts. Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Attendance', 'Where, and what happened'],
    rows: [
      ['1999', 'about 10,000', 'Collins Park, Miami Beach: one day on the beach'],
      ['2001', '21,000', 'First year at Bayfront Park'],
      ['2006', '48,000', 'First year at Bicentennial Park'],
      ['2010', 'over 100,000 (Ultra\'s figure)', 'First sell-out, two days; Wikipedia\'s table gives 93,000'],
      ['2011', '100,000', 'First three-day edition'],
      ['2013', '330,000', 'Two weekends, the fifteenth anniversary'],
      ['2014 to 2018', '165,000 admissions', 'Bayfront Park, summed across three days'],
      ['2019', '170,000', 'Virginia Key, its only year there'],
      ['2020 and 2021', 'none', 'Cancelled for the pandemic'],
      ['2022 to 2026', '165,000 admissions', 'Summed across three days; attendees from 100 countries in 2026']
    ].map(row => row.map(escapeHtml))
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
  return {
    question: q.trim().replace(/\?*$/, '?'),
    answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' '),
    answerHtml: render(body)
  };
});

const sections = [
  {id: 'where', heading: 'Where Ultra Music Festival happens', title: 'Where Ultra Music Festival happens.', subsections: ['ultra-2027']},
  {id: 'how-big', heading: 'How big Ultra is', title: 'How big Ultra is.'},
  {id: 'history', heading: 'A short history, and who owns Ultra', title: 'A short history, and who owns Ultra.'},
  {id: 'worldwide', heading: 'Ultra around the world', title: 'Ultra around the world.'},
  {id: 'ultra-europe', heading: 'Ultra Europe, in Split', title: 'Ultra Europe, in Split.'},
  {id: 'famous', heading: 'Why Ultra got so famous', title: 'Why Ultra got so famous.'},
  {id: 'music', heading: 'What the music actually is', title: 'What the music actually is.', kicker: 'The music'},
  {id: 'from-home', heading: 'Hearing Ultra from home', title: 'Hearing Ultra from home.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker,
  bodyHtml: s.subsections ? renderWithSubsections(getSection(s.heading), s.subsections) : render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

// Until the page has its catalogue entry in home-articles.mjs, relatedArticles()
// does not know it and throws, and readNext() refuses an empty list. Borrow the
// Tomorrowland guide's list with a warning, so the page can be checked before
// the shared files are edited; the full build runs with the entry in place.
let related;
try {
  related = relatedArticles('ultra-music-festival.html');
} catch (error) {
  console.warn(`Read Next borrowed from the Tomorrowland guide: ${error.message}. Add the catalogue entry to home-articles.mjs.`);
  related = relatedArticles('tomorrowland-festival.html');
}

const articleHtml = [
  articleHero({
    kicker: 'Ultra Music Festival',
    title: 'Ultra Music Festival',
    deck: 'A park on Biscayne Bay at the end of Miami Music Week, and a name that now runs festivals from Split to São Paulo. Where Ultra happens, how big it really is, who owns it, and what plays away from the Main Stage.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Ultra Music Festival', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The festival that closes Miami Music Week.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // the owner's two mixes: one mid-guide after the history, one before the FAQ
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Ultra Music Festival FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://ultramusicfestival.com/ticketing-terms-and-conditions-2027', 'Ultra Music Festival: 2027 Ticketing Terms and Conditions')}
${sourceLink('https://ultramusicfestival.com/', 'Ultra Music Festival: official 2027 dates and current ticket status')}
${sourceLink('https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults?InquiryDirectionType=PreviousRecord&InquiryType=EntityName&SearchNameOrder=EVENTENTS+L120000583930', 'Florida Division of Corporations: Event Entertainment Group, Inc.')}
${sourceLink('https://law.justia.com/cases/florida/third-district-court-of-appeal/2017/3d16-0338.html', 'Florida Third District Court of Appeal: Omes v. Ultra Enterprises, Inc.')}
${sourceLink('https://www.miamiherald.com/news/local/community/miami-dade/article315519662.html', "Miami Herald: Miami Extends Ultra's Run at Bayfront Park")}
${sourceLink('https://djmag.com/news/watch-swedish-house-mafias-set-ultra-miami-2026', "DJ Mag: Watch Swedish House Mafia's Set from Ultra Miami 2026")}
${sourceLink('https://www.miaminewtimes.com/music/best-ultra-music-festival-performances-of-all-time-22695840/', 'Miami New Times: Best Ultra Music Festival Performances of All Time')}
${sourceLink('https://www.miaminewtimes.com/music/ultra-music-festival-facing-10-million-lawsuit-from-injured-security-guard-erica-mack-6442197', 'Miami New Times: Ultra Music Festival Facing $10 Million Lawsuit From Injured Security Guard Erica Mack')}
${sourceLink('https://www.electricfeels.com/2026/04/01/ultra-music-festival-closes-out-triumphant-2026-edition-as-miami-dade-county-proclaims-march-28-as-ultra-music-festival-day/', 'Electric Feels: Ultra Music Festival Closes Out Triumphant 2026 Edition')}
${sourceLink('https://ultraeurope.com/worldwide/ultra-europe-concludes-ninth-edition-in-split-croatia-with-attendees-from-140-countries/', 'Ultra Europe: Ultra Europe concludes ninth edition in Split, Croatia with attendees from 140+ countries')}
${sourceLink('https://ultraeurope.com/tickets/festival', 'Ultra Europe: official 2027 dates and tickets')}
${sourceLink('https://www.croatiaweek.com/ultra-europe-2026-split-calvin-harris/', 'Croatia Week: Calvin Harris to headline ULTRA Europe 2026 in Split')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'LTJ Bukem on the first Ultra bill and Pendulum closing the 2016 edition come out of the same breaks and bass lineage as my own music. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: related})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Ultra Music Festival', canonical}),
  faqStructuredData({items: faqItems})
];

// The social card is drawn by scripts/build-og-cards.py once the page is in
// pages.mjs. Until then, point at the Bayfront Park photograph, with a warning.
const ogFile = fs.existsSync('img/og/ultra.jpg') ? 'img/og/ultra.jpg' : 'img/ultra/bayfront-2014-1200.webp';
if (ogFile !== 'img/og/ultra.jpg') console.warn('img/og/ultra.jpg missing: run scripts/build-og-cards.py after adding the page to pages.mjs.');

const html = articlePage({
  title, description, canonical,
  ogImage: `https://thecatrave.com/${ogFile}`,
  datePublished, dateModified,
  bodyClass: 'article-page ultra-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('ultra-music-festival.html', html);
console.log('Built ultra-music-festival.html');
