// Build sonar-festival-barcelona.html from sonar-draft.md.
//
// Festivals series (festivals-series.md). The structure and the evidence
// behind it are in sonar-research.md; the owner approved it on 2026-09-14.
//
// Keywords (GB volume, September 2026): sonar barcelona 500, sonar festival
// 450, off sonar 300, sonar festival barcelona 100, offsonar 90; global
// sonar 2027 30 and sonar istanbul 350. Line-ups, past-year line-ups and
// tickets are excluded on purpose; one dated price answer sits in the FAQ.
// The next edition's dates are targeted and refreshed every year. See
// keywords/sonar.json.
//
// The catalogue behind the Selector holds no set from the festival itself, so
// the players come from official broadcast partners' channels (ARTE Concert,
// Resident Advisor, DJ Mag), oEmbed-checked. Fan uploads are rejected even
// where they are the most viewed; media/sonar.json lists them.
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

const draft = fs.readFileSync('sonar-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/sonar-festival-barcelona';
const title = 'Sónar Festival Barcelona: History, Music and 2027 Dates';
const description = 'What Sónar is, where it happens in Barcelona, how a 1994 festival of 6,000 grew to 150,000, who owns it now, OFFSónar, and Sónar 2027 on 17 to 19 June.';
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

// All five from Wikimedia Commons, downloaded to img/sonar/, used by no other
// guide. Licences checked against the Commons API on 2026-09-14.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sonar/${name}-${width}.webp`,
  srcset: `img/sonar/${name}-320.webp 320w, img/sonar/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Video ids checked
// against YouTube's oEmbed author and watch-page data on 2026-09-14.
const media = {
  'SonarVillage at Fira Montjuïc': figure('sonar-by-day-2016', 1200, 801,
    'A crowd filling the open-air SonarVillage stage at Fira Montjuïc in afternoon sun, with the domed Palau Nacional on the hill behind',
    'SonarVillage at Fira Montjuïc during Sónar by Day in June 2016, below the Palau Nacional. The day programme left this site in 2026. Photograph: Nachetere, CC BY-SA 4.0.'),
  'Sónar+D at Llotja de Mar': figure('sonar-d-2026', 1200, 675,
    'A dim stone hall with an arched doorway and a chequered floor, with people at laptops and mixing desks along one side',
    'Sónar+D at Llotja de Mar in June 2026, its first year away from the music. Photograph: Zblace, CC BY-SA 4.0.',
    'archive-image'),
  'Beastie Boys at Sónar 2007': figure('beastie-boys-2007', 1200, 800,
    'Ad-Rock of the Beastie Boys in a grey fedora and striped shirt, crouching with a microphone on stage',
    'Ad-Rock of the Beastie Boys at Sónar in June 2007, when the bill reached well beyond electronic music. Photograph: bakameh, CC BY 2.0.'),
  'Justice at Sónar 2008': figure('justice-2008', 1200, 800,
    'The two members of Justice sitting on a wooden bench in front of a wall of painted Spanish tiles',
    'Justice, the French duo, in Barcelona for Sónar 2008. Photograph: Gerard Romans Camps, CC BY 2.0.'),
  'Moodymann at Sónar 2010': figure('moodymann-2010', 1000, 669,
    'Moodymann in sunglasses and a white head covering at a DJ table, with a Sónar 2010 banner behind him',
    'Moodymann at Sónar in June 2010, behind a Red Bull Music Academy table. Photograph: acidpolly, CC BY-SA 2.0.'),
  // DJ Mag's film, 1,989,530 views on 2026-09-14: the most watched Sónar set
  // found on an official channel. Fan uploads with more views are rejected.
  '_YPbpWeIx2Q': youtube('_YPbpWeIx2Q', 'Paul Kalkbrenner at Sónar Lisboa 2024, on the DJ Mag YouTube channel'),
  'ZnPUW6XJ--8': youtube('ZnPUW6XJ--8', 'Kerri Chandler, live from Resident Advisor\'s stage at Sónar, Barcelona, on the Resident Advisor YouTube channel'),
  'IeKlNAuzW8A': youtube('IeKlNAuzW8A', 'Adam Beyer b2b Enrico Sangiuliano at Drumcode, Off Sónar, Barcelona, on the DJ Mag YouTube channel'),
  // The closing listening: legendary and most-watched sets from the festival
  // (the owner, 2026-09-13). ARTE filmed five SonarClub shows on the Friday of
  // Sónar 2024 (sonar.es); these are its two best known. Views 2026-09-14:
  // Ben Böhmer 215,512, Richie Hawtin 105,085.
  'JaiCMTWjkJI': articleVideoCollection({
    label: 'Sónar on SonarClub',
    description: 'Ben Böhmer live and Richie Hawtin\'s DEX EFX X0X, from the same Friday night on SonarClub at Sónar 2024, filmed by ARTE Concert.',
    items: [
      articleVideoCard({youtubeId: 'JaiCMTWjkJI', genre: 'SonarClub, 2024', artist: 'Ben Böhmer', title: 'Live at Sónar 2024'}),
      articleVideoCard({youtubeId: 'kECNP2JMqC0', genre: 'SonarClub, 2024', artist: 'Richie Hawtin', title: 'DEX EFX X0X, Sónar 2024'})
    ]
  }),
  // Wikipedia for 1994 to 2018 (1994 and 1995 approximate there); 2025 from
  // Mixmag Italy, 2026 from We Rave You. Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Night venue', 'Attendance'],
    rows: [
      ['1994', 'Apolo', 'About 6,000'],
      ['1995', 'Poble Espanyol', 'About 12,000'],
      ['1996', 'Poble Espanyol', '18,000'],
      ['1997', 'Mar Bella pavilion', '28,000'],
      ['1998', 'Mar Bella pavilion', '38,000'],
      ['1999', 'Mar Bella pavilion', '43,000'],
      ['2000', 'Mar Bella pavilion', 'More than 53,000'],
      ['2013', 'Fira Gran Via', '121,000'],
      ['2017', 'Fira Gran Via', '123,000'],
      ['2018', 'Fira Gran Via', '126,000, from 119 countries'],
      ['2025', 'Fira Gran Via', '161,000, including 42,000 at Sónar Week events'],
      ['2026', 'Fira Gran Via, day and night', 'About 150,000'],
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
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'dates', heading: 'Sónar 2027: dates', title: 'Sónar 2027: dates.'},
  {id: 'where', heading: 'Where is Sónar festival in Barcelona?', title: 'Where is Sónar festival in Barcelona?', subsections: ['by-day-by-night', 'sonar-d']},
  {id: 'how-big', heading: 'How big is Sónar?', title: 'How big is Sónar?'},
  {id: 'history', heading: 'A short history of Sónar, and who owns it', title: 'A short history of Sónar, and who owns it.', subsections: ['around-the-world']},
  {id: 'music', heading: 'What Sónar is known for: the music', title: 'What Sónar is known for: the music.', kicker: 'The music'},
  {id: 'offsonar', heading: 'OFFSónar and Sónar Week', title: 'OFFSónar and Sónar Week.'},
  {id: 'from-home', heading: 'Essential listening', title: 'Essential listening.'}
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
    kicker: 'Sónar',
    title: 'Sónar Festival Barcelona',
    deck: 'Three days every June in Barcelona since 1994, by day and by night. Where it happens, how big it has grown, who owns it now, and what it sounds like.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Sónar', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival of advanced music.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  // The owner's two mixes, as on every festival guide: after the history,
  // then before the FAQ (audit-site-components.mjs, festivalGuidesPlayOwnSets).
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Sónar FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/S%C3%B3nar', 'Wikipedia: Sónar')}
${sourceLink('https://sonar.es/en', 'Sónar: official site (2027 dates)')}
${sourceLink('https://sonar.es/about/what-is-sonar', 'Sónar: What is Sónar')}
${sourceLink('https://sonar.es/en/news/lineup-completo-sonar-2026', 'Sónar: the full Sónar 2026 line-up, stage by stage')}
${sourceLink('https://sonar.es/en/tickets', 'Sónar: tickets')}
${sourceLink('https://sonar.es/en/news/revive-cinco-grandes-conciertos-del-viernes-por-la-noche-en-sonarclub', 'Sónar: relive five of the biggest shows from Friday at Sónar by Night with ARTE')}
${sourceLink('https://djmag.com/news/sonar-founders-step-away-festival-amid-superstructkkr-ownership-controversy', 'DJ Mag: Sónar founders step away from festival amid Superstruct/KKR ownership controversy')}
${sourceLink('https://mixmagit.com/read/sonar-2025-draws-161-000-attendees-and-announces-major-format-change-for-2026-news', 'Mixmag Italy: Sónar 2025 draws 161,000 attendees and announces major format change for 2026')}
${sourceLink('https://weraveyou.com/2026/06/sonar-2026-recap/', 'We Rave You: Sónar 2026 recap')}
${sourceLink('https://www.deephouseamsterdam.com/25-years-sonar-report/', 'Deep House Amsterdam: Report, 25 Years Of Sonar')}
${sourceLink('https://ra.co/news/35265', 'Resident Advisor: Sónar heads to Istanbul, Hong Kong in 2017')}
${sourceLink('https://thequietus.com/news/sonar-inaugural-lisbon-edition-2022/', 'The Quietus: Sónar to stage inaugural Lisbon event in 2022')}
${sourceLink('https://offsonar.co/', 'OFFSónar: official site')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Sónar has spent more than thirty years putting new electronic music in front of people who came to listen. My own is breakbeat, made at home. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('sonar-festival-barcelona.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Sónar Festival Barcelona', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/sonar.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page sonar-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('sonar-festival-barcelona.html', html);
console.log('Built sonar-festival-barcelona.html');
