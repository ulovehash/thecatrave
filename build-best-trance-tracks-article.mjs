// Build best-trance-tracks.html from best-trance-tracks-draft.md.
//
// Keywords (keywords/best-trance-tracks.json): the seven phrases measured at
// 1K-10K each in Keyword Planner (all locations) and supplied in the brief.
// No new volumes were measured for this page.
//
// Every player is an official upload checked by YouTube oEmbed on 6 October 2026.
// Three photographs, all Wikimedia Commons, none shared with another guide.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningCollection, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleTrackEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const raw = fs.readFileSync('best-trance-tracks-draft.md', 'utf8').replace(/—/g, ':');
const start = raw.indexOf('\n## Intro\n');
const end = raw.indexOf('\n---\n', start);
if (start < 0 || end < 0) throw new Error('Draft must have ## Intro and a closing ---');
const draft = raw.slice(start, end);

const canonical = 'https://thecatrave.com/best-trance-tracks';
const title = 'Best Trance Tracks of All Time: 12 Records to Hear';
const description = 'Best trance tracks of all time: twelve records from 1993 to 2012 with release years, UK chart peaks and a player for each, from Café del Mar to Concrete Angel.';
const datePublished = '2026-10-06';
const dateModified = '2026-10-08';
const dateLabel = '8 October 2026';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
function getSection(heading) {
  const at = draft.indexOf(`\n## ${heading}\n`);
  if (at < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', at + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');

const figures = {
  armin: articleFigure({
    src: 'img/best-trance-tracks/armin-van-buuren-2008-1200.webp',
    srcset: 'img/best-trance-tracks/armin-van-buuren-2008-320.webp 320w, img/best-trance-tracks/armin-van-buuren-2008-1200.webp 1200w',
    width: 1200, height: 900,
    alt: 'Armin van Buuren with a raised fist behind the decks, green lasers in front of him',
    caption: 'Armin van Buuren live, 2008. Photograph: Davide Pasca, CC BY 2.0.',
    className: 'wide-archive-image'
  }),
  corsten: articleFigure({
    src: 'img/best-trance-tracks/ferry-corsten-2010-1200.webp',
    srcset: 'img/best-trance-tracks/ferry-corsten-2010-320.webp 320w, img/best-trance-tracks/ferry-corsten-2010-1200.webp 1200w',
    width: 1200, height: 800,
    alt: 'Ferry Corsten playing live in Edmonton, Canada',
    caption: 'Ferry Corsten live in Edmonton, Canada, 2010. Photograph: Celwin Frenzen, CC BY 3.0.',
    className: 'wide-archive-image'
  }),
  tiesto: articleFigure({
    src: 'img/best-trance-tracks/tiesto-2010-1200.webp',
    srcset: 'img/best-trance-tracks/tiesto-2010-320.webp 320w, img/best-trance-tracks/tiesto-2010-1200.webp 1200w',
    width: 1200, height: 800,
    alt: 'Tiësto at the decks in a Bangkok nightclub',
    caption: 'Tiësto at 808 Nightclub, Bangkok, 2010. Photograph: Vyacheslav Argenberg, CC BY 4.0.',
    className: 'wide-archive-image'
  })
};

const usedFigures = new Set();
const ownTrackKeys = new Set();
function table(block) {
  const rows = block.split('\n').slice(1).map(line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim()));
  const [headers, , ...body] = rows;
  return articleTable({headers: headers.map(inline), rows: body.map(row => row.map(inline))});
}
function collection(block) {
  const [head, ...lines] = block.split('\n');
  const [id, heading, desc] = head.replace(/^\[\[collection:\s*/, '').replace(/\]\]$/, '').split('|').map(v => v.trim());
  const items = lines.filter(l => l.startsWith('- ')).map(l => {
    const [artist, name, year, ytId, note] = l.slice(2).split('|').map(v => v.trim());
    if (!ytId || !note) throw new Error(`Bad track line: ${l}`);
    return {artist, title: name, year, note, playerHtml: articleTrackEmbed({platform: 'youtube', id: ytId, title: `${artist}, ${name}`})};
  });
  return articleListeningCollection({id, title: heading, description: desc, tone: 'cyan', items});
}
function render(text) {
  return paras(text).map(block => {
    const fig = block.match(/^\[\[figure:(\w+)\]\]$/);
    if (fig) { if (!figures[fig[1]]) throw new Error(`No figure ${fig[1]}`); usedFigures.add(fig[1]); return figures[fig[1]]; }
    if (block.startsWith('[[collection:')) return collection(block);
    if (block.startsWith('[[table]]')) return table(block.replace(/^\[\[table\]\]\n?/, '[[table]]\n'));
    const own = block.match(/^\[\[own:\s*([\w-]+)\s*\|\s*(.+)\]\]$/s);
    if (own) { ownTrackKeys.add(own[1]); return ownTrackListening(own[1], own[2].trim()); }
    if (block.startsWith('### ')) return `<h3>${escapeHtml(block.slice(4).trim())}</h3>`;
    return `<p>${inline(block)}</p>`;
  }).join('\n');
}

const intro = paras(getSection('Intro'));
const faqItems = getSection('FAQ').split('\n').filter(line => line.startsWith('**')).map(line => {
  const m = line.match(/^\*\*(.+?)\*\*\s+(.+)$/);
  if (!m) throw new Error(`Bad FAQ line: ${line}`);
  return {question: m[1].trim(), answer: m[2].replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'), answerHtml: `<p>${inline(m[2].trim())}</p>`};
});

const sections = [
  {id: 'how-chosen', heading: 'Chart hits and fan favourites'},
  {id: 'before-the-charts', heading: 'Before the charts: 1993 to 1995'},
  {id: 'chart-years', heading: 'The chart years: the best trance tunes of 1998 and 1999'},
  {id: 'superstar-years', heading: 'The superstar DJ years: 2004 to 2012'},
  {id: 'best-ever', heading: 'Which is the best trance track ever?'},
  {id: 'a-break', heading: 'Two tracks of my own'}
];
const h2 = s => /[?.]$/.test(s) ? s : `${s}.`;
const bodySections = sections.map(s => articleSection({id: s.id, title: h2(s.heading), bodyHtml: render(getSection(s.heading))}));
for (const key of Object.keys(figures)) if (!usedFigures.has(key)) throw new Error(`Unused figure: ${key}`);
if (ownTrackKeys.size < 2) throw new Error('Need at least two own tracks');

const tocItems = [...sections.map(s => ({id: s.id, label: s.heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(5, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sources = [
  '[Official Charts](https://www.officialcharts.com/songs/), song chart histories for 9PM (Till I Come), Saltwater, Children, Silence, Café del Mar, For an Angel, Adagio for Strings, Satellite, Shivers/Serenity and Out of the Blue, read 6 October 2026.',
  'A State of Trance all-time Top 1000: the [2021 results](https://www.astateoftrance.com/armin-van-buuren-reveals-all-time-a-state-of-trance-top-1000-list/) and the [2024 results](https://www.astateoftrance.com/all-time-a-state-of-trance-top-1000-list/).',
  '[DJ Mag, How Paul van Dyk\'s For An Angel changed trance forever](https://djmag.com/features/how-paul-van-dyks-angel-changed-trance-forever), for the 1994 MFS release and the E-Werk Remix.',
  'Release dates for 9 PM (Till I Come), Saltwater, Out of the Blue, Shivers, Communication Part 3 and Concrete Angel come from discography and reference pages, not from a label page.',
  'Photographs from Wikimedia Commons: Davide Pasca (CC BY 2.0), Celwin Frenzen (CC BY 3.0), Vyacheslav Argenberg (CC BY 4.0).'
].map(line => `<li>${inline(line)}</li>`).join('');

const articleHtml = [
  articleHero({kicker: 'Trance', title, deck: 'Twelve trance records from 1993 to 2012, with release years, UK chart peaks and a player for each.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'The short version', bodyHtml: inline(intro[0]), className: 'article-summary'}), tocItems}),
  articleSection({id: 'introduction', title: 'A list of records, not a history of the genre.', bodyHtml: join(intro.slice(1)), className: 'article-intro'}),
  ...bodySections,
  articleFaq({items: faqItems, title: 'Best trance tracks FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed: true, description: 'Buying one of these supports the music and the writing directly.', tracks: [
    {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
    {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items: relatedArticles('best-trance-tracks.html')})
].join('\n');

const ogImage = 'https://thecatrave.com/img/og/best-trance-tracks.jpg';
const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: ogImage, datePublished, dateModified}),
  breadcrumbStructuredData({name: title, canonical}),
  faqStructuredData({items: faqItems})
];
const html = articlePage({alternates: alternatesFor('/best-trance-tracks'), title, description, canonical, ogImage, datePublished, dateModified, bodyClass: 'article-page best-trance-tracks-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-trance-tracks.html', html);
console.log('Built best-trance-tracks.html');
