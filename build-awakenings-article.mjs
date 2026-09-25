// Build awakenings-festival.html from awakenings-draft.md.
//
// Festivals series (festivals-series.md), row 11, "volumes only" until this
// pass. Picked by the owner on 2026-09-25 alongside Manchester clubs,
// replacing Boom Festival: stages 1-2-4 research found Boom has zero article
// slots on both its head term and its question form, while Awakenings' "what
// is awakenings festival" opens real editorial slots (festivalmates.com, DJ
// Mag's Top 100 Festivals profile), the same navigational-head-but-answerable
// pattern as Burning Man, Tomorrowland and EDC Las Vegas
// (TOPIC-DOSSIERS.md, 'Manchester clubs, Boom Festival, Awakenings Festival
// (2026-09-25)'). Research: Google Ads Keyword Planner and a live Google
// search (keywords/awakenings-festival.json), per KEYWORD-METHOD.md's
// 2026-09-22 tool switch. Stage 6 was not run as a separate pass, the same
// shortcut used for the rest of this batch.
//
// The catalogue behind the Selector holds one Awakenings-tagged set (Maceo
// Plex, Mosaic x Awakenings at the Gashouder during ADE 2018), used below.
//
// Media sits in the draft as [Image: ...] and [Embed: ...] placeholder
// lines, so placement is decided in the draft and only rendered here. A
// placeholder with no matching asset fails the build, and so does an asset
// with no placeholder.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('awakenings-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/awakenings-festival';
const title = 'Awakenings Festival: What It Is and Where It Happens';
const description = "Founded in Amsterdam in 1997, techno-only ever since: where Awakenings' summer festival and its Amsterdam Dance Event special happen, and why it's called Awakenings.";
const datePublished = '2026-09-25';
const dateModified = '2026-09-25';
const dateLabel = '25 September 2026';

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

// From Wikimedia Commons, downloaded to img/awakenings/ on 2026-09-25,
// licence checked on the file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/awakenings/${name}-${width}.webp`,
  srcset: `img/awakenings/${name}-320.webp 320w, img/awakenings/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// From the Selector catalogue. Checked against the video's own title on
// 2026-09-25, embedded by no other guide (media/awakenings-festival.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Blimp': figure('blimp-2007', 1200, 803,
    "Awakenings' branded airship over the crowd with laser beams crossing the night sky",
    "Awakenings, 2007. Photograph: Boris van Hoytema, CC BY 2.0."),
  'Maceo Plex': video('gR_nkH5B35s', 'Techno', 'Maceo Plex', 'Mosaic x Awakenings at Gashouder ADE, 2018',
    "Maceo Plex at the Gashouder during Awakenings' 2018 Amsterdam Dance Event special. From this site's catalogue of recorded DJ sets."),
  'Table: Facts': articleTable({
    headers: ['Fact', 'Detail'],
    rows: [
      ['Founded', '30 March 1997, Gashouder, Amsterdam'],
      ['Organiser', 'Monumental Productions, owned by LiveStyle since 2015'],
      ['Genre', 'Techno only'],
      ['Summer festival 2026', '10 to 12 July, Beekse Bergen, Hilvarenbeek, sold out'],
      ['Summer festival 2027', '9 to 11 July, Beekse Bergen, Hilvarenbeek'],
      ['Amsterdam Dance Event special 2026', '21 to 25 October, Gashouder, Amsterdam'],
      ['DJ Mag Top 100 Festivals 2026', '34th, down 14 places']
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
  {id: 'where', heading: 'Where and when Awakenings happens', title: 'Where and when Awakenings happens.'},
  {id: 'history', heading: 'A short history, and who owns Awakenings', title: 'A short history, and who owns Awakenings.'},
  {id: 'music', heading: 'What plays at Awakenings', title: 'What plays at Awakenings.', kicker: 'The music'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Awakenings',
    title: 'Awakenings Festival',
    deck: "A Dutch techno festival founded in Amsterdam in 1997, techno and only techno ever since. Where the summer festival and the Amsterdam Dance Event special happen, the accidental origin of the name, and who plays.",
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Awakenings Festival', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One genre, almost thirty years.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'history' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Awakenings Festival FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Awakenings_(festival)', 'Wikipedia: Awakenings (festival)')}
${sourceLink('https://www.awakenings.com', 'Awakenings: official site')}
${sourceLink('https://www.awakenings.com/how-to-travel-festival26', 'Awakenings: how to travel to Awakenings Festival 2026')}
${sourceLink('https://djmag.com/top100festivals', 'DJ Mag: Top 100 Festivals 2026')}
<li>Video embed is drawn from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Awakenings is a long way from the breakbeat I make myself. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('awakenings-festival.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Awakenings Festival', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/awakenings-festival'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/awakenings.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page awakenings-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('awakenings-festival.html', html);
console.log('Built awakenings-festival.html');
