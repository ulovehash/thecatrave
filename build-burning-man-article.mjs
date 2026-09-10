// Build what-is-burning-man.html from burning-man-draft.md.
//
// The one guide on this site that is not about UK dance music. The owner asked
// for it on 2026-09-10; the reason it earns a place is the section on the sound
// camps, which is the only part of the topic that uses the author's standing.
// See burning-man-research.md and burning-man-editorial-review.md.
//
// Keywords: what is burning man 22,000 a month (US), where is burning man
// 8,300, black rock city 7,800, what happens at burning man 3,600, mayan
// warrior 3,600, robot heart 700. "burning man 2026" and tickets are excluded
// on purpose: dated and transactional. See keywords/burning-man.json.
//
// The catalogue behind the Selector holds no Burning Man sets at all, so both
// players come from the camps' own YouTube channels, not from the catalogue.
//
// Media sits in the draft as [Image: ...] and [Embed: ...] placeholder lines,
// so the placement is decided by the writer in the draft and only rendered
// here. A placeholder with no matching asset fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('burning-man-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/what-is-burning-man';
const title = 'What Is Burning Man? The Event, the City and the Music';
const description = 'A week-long city in the Nevada desert, not a festival with a lineup. What happens there, where it is, what it costs, and what the sound camps actually play.';
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

// All four from Wikimedia Commons, downloaded to img/burning-man/, used by no
// other guide.
const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/burning-man/${name}-${width}.webp`,
  srcset: `img/burning-man/${name}-320.webp 320w, img/burning-man/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Keyed by a phrase from the placeholder line in the draft. Both video ids were
// checked against YouTube's oEmbed author on 2026-09-10: Robot Heart's own
// channel and MayanWarrior's own channel.
const media = {
  'Earth from Space': figure('esa', 1004, 753,
    'Satellite image of Black Rock City in the Nevada desert, an arc of streets around an open centre',
    'Black Rock City from orbit during Burning Man 2024. The arc of streets and the open centre, where the Man stands, are visible from space. Contains modified Copernicus Sentinel data (2024), processed by ESA.'),
  '747 Art Car': figure('art-car-747', 1200, 699,
    'The 747 art car, a Boeing 747 fuselage converted into a mutant vehicle, on the playa at Burning Man',
    "Big Imagination's 747, one of the licensed mutant vehicles that cross the playa at walking pace. Photograph: Steve Jurvetson, CC BY 2.0."),
  'Robot Heart, Peretz': figure('robot-heart', 1200, 799,
    'The Robot Heart art car on the playa at Burning Man, a bus crowned with a large illuminated heart',
    'The Robot Heart bus on the playa. Its sets run from the middle of the night until well after sunrise. Photograph: Peretz Partensky, CC BY 2.0.'),
  '1987 poster': figure('poster-1987', 345, 450,
    'Poster for the 1987 Burning Man on Baker Beach, San Francisco',
    'The poster for the second burn, in 1987, still on Baker Beach in San Francisco, three years before the move to the desert.',
    'archive-image'),
  'XwK7sA9PuCE': youtube('XwK7sA9PuCE', "Lee Burridge, Robot Heart, Burning Man 2019, on Robot Heart's YouTube channel"),
  'MNkApftw_iM': youtube('MNkApftw_iM', "YAMAGUCCI, Mayan Warrior, Burning Man 2025, on Mayan Warrior's YouTube channel"),
  // The closing section's listening: one set from each camp the page covers,
  // both from 2025, both oEmbed-checked 2026-09-10 (Lee Burridge's own channel,
  // MayanWarrior's own channel). Different sets from the two in the body.
  'S7OBT3kQAHQ': articleVideoCollection({
    label: 'Burning Man 2025, two camps',
    description: 'Two full sets from Burning Man 2025, one from each camp above: Lee Burridge\'s Saturday sunrise at Robot Heart, and John Summit on Mayan Warrior. Long recordings, made for the hours nobody schedules.',
    items: [
      articleVideoCard({youtubeId: 'S7OBT3kQAHQ', genre: 'Robot Heart, 2025', artist: 'Lee Burridge', title: 'Live From Robot Heart, Burning Man 2025'}),
      articleVideoCard({youtubeId: 'd8zUK6nAbr8', genre: 'Mayan Warrior, 2025', artist: 'John Summit', title: 'Mayan Warrior, Burning Man 2025'})
    ]
  }),
  // Attendance, from Wikipedia's figures (the Burning Man census is not yet
  // checked; see burning-man-editorial-review.md). Typed, not computed.
  'Table: attendance': articleTable({
    headers: ['Year', 'Attendance', 'What happened'],
    rows: [
      ['1986', '35', 'First burn, Baker Beach, San Francisco'],
      ['2019', '78,850', 'The peak'],
      ['2020', 'none', 'Cancelled for the pandemic, the first cancellation'],
      ['2021', 'none', 'Cancelled again'],
      ['2023', '74,126', 'Rain floods the playa over Labor Day weekend'],
      ['2024', '69,141', 'First year since 2011 not to sell out'],
      ['2025', '72,181', '']
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
  {id: 'black-rock-city', heading: 'Black Rock City', title: 'Black Rock City.'},
  {id: 'what-happens', heading: 'What happens at Burning Man', title: 'What happens at Burning Man.'},
  {id: 'principles', heading: 'The ten principles', title: 'The ten principles.'},
  {id: 'music', heading: 'Is Burning Man a music festival?', title: 'Is Burning Man a music festival?', kicker: 'The music', subsections: ['sound-camps', 'robot-heart', 'mayan-warrior']},
  {id: 'history', heading: 'A short history of Burning Man', title: 'A short history of Burning Man.'},
  {id: 'controversy', heading: 'Why is Burning Man so controversial?', title: 'Why is Burning Man so controversial?'},
  {id: 'from-home', heading: 'Hearing Burning Man from home', title: 'Hearing Burning Man from home.'}
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
    kicker: 'Burning Man',
    title: 'What Is Burning Man?',
    deck: 'A city built in the Nevada desert for one week a year, with no lineup and nothing for sale. What happens there, and what its sound camps actually play.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Burning Man', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A city, not a festival.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Burning Man FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://burningman.org/black-rock-city/preparation/first-timers-guide/', "Burning Man Project: First-Timers' Guide")}
${sourceLink('https://burningman.org/about/10-principles/', 'Burning Man Project: The 10 Principles of Burning Man')}
${sourceLink('https://burningman.org/black-rock-city/preparation/infrastructure/sound-policy/', 'Burning Man Project: Sound Policy in Black Rock City')}
${sourceLink('https://burningman.org/black-rock-city/ticketing-information/', 'Burning Man Project: Ticketing Information')}
${sourceLink('https://burningman.org/black-rock-city/bring-your-art/art-grants-programs/temple/brc-temple-grant-history/', 'Burning Man Project: Temple History and Meaning')}
${sourceLink('https://journal.burningman.org/2021/11/black-rock-city/tales-from-the-playa/burning-mans-first-sound-camp/', "Burning Man Journal: Meet the DJs Who Started Burning Man's First Sound Camp")}
${sourceLink('https://journal.burningman.org/2015/07/philosophical-center/tenprinciples/whats-actually-going-on-with-dance-music-at-burning-man/', "Burning Man Journal: What's Actually Going On with Dance Music at Burning Man")}
${sourceLink('https://journal.burningman.org/2024/01/black-rock-city/leaving-no-trace/2023-moop-map/', 'Burning Man Journal: Leaving No Trace 2023, the MOOP Map')}
${sourceLink('https://journal.burningman.org/2026/09/news/official-announcements/participant-passes-away-at-2026-burning-man-event/', 'Burning Man Journal: Participants Pass Away at 2026 Burning Man Event')}
${sourceLink('https://www.billboard.com/music/music-news/burning-man-robot-heart-george-mueller-geo-founder-died-9630680/', "Billboard: How Burning Man's Famed Robot Heart Camp Is Carrying on After the Death of Founder George Mueller")}
${sourceLink('https://www.billboard.com/music/music-news/mayan-warrior-fire-interview-burning-man-art-car-1235398142/', "Billboard: Burning Man's Mayan Warrior Art Car Destroyed in Fire")}
${sourceLink('https://edmallday.com/mayan-warrior-is-pausing-its-art-car-at-burning-man-2026/', 'EDM All Day: Mayan Warrior Is Pausing Its Art Car at Burning Man 2026')}
${sourceLink('https://en.wikipedia.org/wiki/Burning_Man', 'Wikipedia: Burning Man')}
${sourceLink('https://en.wikipedia.org/wiki/Burning_Man_2023', 'Wikipedia: Burning Man 2023')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Nobody books the DJs at Burning Man; they bring the music themselves. This is mine, from the breaks and bass side. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('what-is-burning-man.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'What Is Burning Man?', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/burning-man.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page burning-man-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('what-is-burning-man.html', html);
console.log('Built what-is-burning-man.html');
