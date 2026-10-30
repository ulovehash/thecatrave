// Build amsterdam-dance-event.html from amsterdam-dance-event-draft.md.
//
// Research verdict WRITE (TOPIC-DOSSIERS.md, ADE entry, 2026-10-30). Dates,
// pass and ticket rules, visitor figures and event counts are the organiser's
// own (amsterdamdanceevent.com FAQ, About and ticket pages, read 2026-10-30).
// Keywords are Ahrefs global volumes (keywords/amsterdam-dance-event.json).
// Review: amsterdam-dance-event-editorial-review.md.
//
// Media sits in the draft as [Image: ...] and [Embed: ...] placeholder lines.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleVideoCard, articleVideoCollection,
  authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('amsterdam-dance-event-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/amsterdam-dance-event';
const title = 'ADE Amsterdam 2027: When Is Amsterdam Dance Event?';
const description = "ADE 2027 runs 20 to 24 October in Amsterdam. What Amsterdam Dance Event is, how the Pro Pass and festival tickets differ, and where 1,200+ events happen.";
const datePublished = '2026-10-30';
const dateModified = '2026-10-30';
const dateLabel = '30 October 2026';

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

// From Wikimedia Commons, File:Azotti in Amsterdam Dance Event.jpg (A1, CC BY-SA 4.0,
// 21 October 2017), downloaded to img/amsterdam-dance-event/ on 2026-10-30,
// licence checked on the file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/amsterdam-dance-event/${name}-${width}.webp`,
  srcset: `img/amsterdam-dance-event/${name}-320.webp 320w, img/amsterdam-dance-event/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// From the Selector catalogue (media/amsterdam-dance-event.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'ADE': figure('ade', 1200, 899,
    'A DJ at a Pioneer DJ setup beside a yellow illuminated ADE sign at Amsterdam Dance Event',
    'Azotti playing at Amsterdam Dance Event, 21 October 2017. Photograph: A1, CC BY-SA 4.0.'),
  'Yanamaste': video('OiWSnOA6ZEo', 'Techno', 'Yanamaste', 'Intercell x Yanamaste Invites ADE, 2025',
    "Yanamaste's Intercell set from Amsterdam Dance Event, 2025."),
  'Huntemann': video('ZBYRRvI1Vfs', 'Tech house', 'Joran van Pol & Oliver Huntemann', 'Ideal Audio at ADE, Mixmag, 2013',
    "Joran van Pol and Oliver Huntemann at Amsterdam Dance Event, filmed by Mixmag in 2013.")
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
  {id: 'dates', heading: 'ADE dates: when is ADE 2027?', title: 'ADE dates: when is ADE 2027?'},
  {id: 'what-is', heading: 'Is ADE a festival? What Amsterdam Dance Event is', title: 'Is ADE a festival? What Amsterdam Dance Event is.'},
  {id: 'where', heading: 'Where ADE Amsterdam happens', title: 'Where ADE Amsterdam happens.'},
  {id: 'tickets', heading: 'Tickets and what ADE costs', title: 'Tickets and what ADE costs.'},
  {id: 'hearing', heading: 'Hearing ADE', title: 'Hearing ADE.', kicker: 'Sets played there'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(4, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Amsterdam Dance Event',
    title: 'Amsterdam Dance Event (ADE) 2027',
    deck: 'A five-day electronic music conference and club festival every October. When ADE 2027 is, what you can buy and where the events happen.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is ADE', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Can you simply go to ADE?', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'where' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'ADE FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.amsterdamdanceevent.com', 'Amsterdam Dance Event: official site')}
${sourceLink('https://www.amsterdamdanceevent.com/about-ade', 'Amsterdam Dance Event: about ADE')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'ADE covers more than the breakbeat I make myself. Buying a track supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('amsterdam-dance-event.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Amsterdam Dance Event', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/amsterdam-dance-event'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/amsterdam-dance-event.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page ade-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('amsterdam-dance-event.html', html);
console.log('Built amsterdam-dance-event.html');
