// Build why-dj-mag-top-100-never-changes.html from famous-djs-draft.md.
//
// Keywords (keywords/why-dj-mag-top-100-never-changes.json): the title carries "dj mag top 100"
// (10K-100K worldwide, Keyword Planner, 6 October 2026). The head term of the
// brief, "famous djs", is secondary and sits in the FAQ and the H3s. Terms the
// copy does not contain are recorded as rejected, not inserted.
//
// The page has no hero photograph. The og card and homepage card reuse the Lot
// Radio photo already in the repository; that is a stated exception to
// ARTICLE-PRODUCTION-WORKFLOW.md §7. Every embed is an official upload checked
// by oEmbed on 6 October 2026 and none is embedded on another page.
import fs from 'node:fs';
import {
  articleFaq, articleHero, articlePage, articleSection, articleSources, articleStructuredData,
  articleTable, articleVideoCard, articleVideoCollection, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const raw = fs.readFileSync('famous-djs-draft.md', 'utf8').replace(/—/g, ':');
const start = raw.indexOf('\n## Intro\n');
const end = raw.indexOf('\n---\n', start);
if (start < 0 || end < 0) throw new Error('Draft must have ## Intro and a closing ---');
const draft = raw.slice(start, end);

const canonical = 'https://thecatrave.com/why-dj-mag-top-100-never-changes';
const title = 'Why the DJ Mag Top 100 Barely Changes';
const description = 'Why the DJ Mag Top 100 barely changes: eleven years of top tens, how the vote works, what campaigning is allowed and who the poll leaves out.';
const datePublished = '2026-10-06';
const dateModified = '2026-10-06';
const dateLabel = '6 October 2026';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const at = draft.indexOf(`\n## ${heading}\n`);
  if (at < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', at + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');

// Official uploads only. artist and setTitle feed the video card.
const sets = {
  coffee: {id: '9JtTbx-hYWk', genre: 'HOUSE', artist: 'Black Coffee', title: 'Boiler Room South Africa, 2015'},
  witte: {id: '8NUiR9ZloPo', genre: 'TECHNO', artist: 'Charlotte de Witte', title: 'DJ Mag, Castelo de S. Jorge, Lisbon, 2022'},
  solomun: {id: 'mO9O184n0BM', genre: 'HOUSE', artist: 'Solomun', title: 'DJ Mag, Destino Ibiza, 2016'},
  cox: {id: 'ZdAwiV4T22I', genre: 'HOUSE / TECHNO', artist: 'Carl Cox', title: 'Cercle, Château de Chambord, 2018'},
  kraviz: {id: 'oFvqo1dil7M', genre: 'TECHNO', artist: 'Nina Kraviz', title: 'Cercle, Eiffel Tower, Paris, 2018'},
  vintage: {id: 'oCNucnhn6fU', genre: 'HOUSE', artist: 'Vintage Culture', title: 'Cercle, Museu do Amanhã, Rio de Janeiro, 2022'},
  landry: {id: 'yzRNEZ71kE8', genre: 'HARD TECHNO', artist: 'Sara Landry', title: 'Beatport, Amsterdam, 2025'}
};
const usedSets = new Set();
function player(key, description) {
  const spec = sets[key];
  if (!spec) throw new Error(`No set for placeholder: ${key}`);
  usedSets.add(key);
  const label = `${spec.artist}, ${spec.title}`;
  return articleVideoCollection({label, description, items: [articleVideoCard({youtubeId: spec.id, genre: spec.genre, artist: spec.artist, title: spec.title})]});
}

function playerGroup(keys) {
  const specs = keys.map(key => {
    const spec = sets[key];
    if (!spec) throw new Error(`No set for placeholder: ${key}`);
    usedSets.add(key);
    return spec;
  });
  return articleVideoCollection({
    label: specs.map(spec => spec.artist).join(', '),
    items: specs.map(spec => articleVideoCard({youtubeId: spec.id, genre: spec.genre, artist: spec.artist, title: spec.title}))
  });
}

function table(block) {
  const rows = block.split('\n').map(line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim()));
  const [headers, , ...body] = rows;
  return articleTable({headers: headers.map(inline), rows: body.map(row => row.map(inline))});
}

// Blocks are separated by blank lines: a table, an ### heading, a [[set:x]] or
// [[sets:x,y]] placeholder, or a paragraph.
function render(text) {
  const blocks = paras(text);
  return blocks.map((block, index) => {
    if (block.startsWith('|')) return table(block);
    if (block.startsWith('### ')) return `<h3>${escapeHtml(block.slice(4).trim())}</h3>`;
    const group = block.match(/^\[\[sets:([\w,]+)\]\]$/);
    if (group) return playerGroup(group[1].split(','));
    const set = block.match(/^\[\[set:(\w+)\]\]$/);
    if (set) return player(set[1], blocks[index - 1]);
    if (/^\[\[set:\w+\]\]$/.test(blocks[index + 1] || '')) return '';
    return `<p>${inline(block)}</p>`;
  }).join('\n');
}

const intro = paras(getSection('Intro'));
const faqItems = getSection('FAQ').split('\n').filter(line => line.startsWith('**')).map(line => {
  const m = line.match(/^\*\*(.+?)\*\*\s+(.+)$/);
  if (!m) throw new Error(`Bad FAQ line: ${line}`);
  return {question: m[1].trim(), answer: m[2].trim(), answerHtml: `<p>${inline(m[2].trim())}</p>`};
});

const sections = [
  {id: 'top-ten-table', heading: 'Eleven years, five names', h2: 'Eleven years, five names.'},
  {id: 'how-the-vote-works', heading: 'How the DJ Mag Top 100 vote works', h2: 'How the DJ Mag Top 100 vote works.'},
  {id: 'campaigning', heading: 'Campaigning is allowed', h2: 'Campaigning is allowed.'},
  {id: 'criticisms', heading: 'The criticisms on record', h2: 'The criticisms on record.'},
  {id: 'who-is-famous', heading: 'Who is famous, and who the poll misses', h2: 'Who is famous, and who the poll misses.'},
  {id: 'where-it-moves', heading: 'Where the list does move', h2: 'Where the list does move.'},
  {id: 'first-famous-djs', heading: 'The first famous DJs', h2: 'The first famous DJs.'},
  {id: 'why-the-same-names', heading: 'So why the same names?', h2: 'So why the same names?'},
  {id: 'listen', heading: 'Official sets from Nina Kraviz, Vintage Culture and Sara Landry', h2: 'Official sets from Nina Kraviz, Vintage Culture and Sara Landry.'}
];
const bodySections = sections.map(s => articleSection({id: s.id, title: s.h2, bodyHtml: render(getSection(s.heading))}));
for (const key of Object.keys(sets)) if (!usedSets.has(key)) throw new Error(`Unused set: ${key}`);

const tocItems = [...sections.map(s => ({id: s.id, label: s.heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sources = [
  'DJ Mag, Top 100 DJs results pages for 2015 to 2025 (djmag.com/top100djs), including the 2025 analysis, the voting rules, the campaigning rules and the 2026 voting announcement.',
  '[Wikipedia, DJ Mag Top 100 DJs](https://en.wikipedia.org/wiki/DJ_Mag_Top_100_DJs), for the winners from 1997 to 2014.',
  '[Wikipedia, Disc jockey](https://en.wikipedia.org/wiki/Disc_jockey), for the early hip hop DJs.',
  'The Guardian, Ben Child, October 2010, on the poll.',
  'HuffPost, Kevin Yu, July 2013, on the poll and marketing.',
  'EDMTunes, December 2017, on Laidback Luke\'s tweets about the poll.',
  'EDMTunes, October 2019, on Martin Garrix\'s interview. The quote is taken from EDMTunes, not the original Dutch outlet.',
  'EDM.com, September 2021, on the Reddit campaign for Thicc Booty McSpin Daddy.',
  'dBs Insider, 25 greatest DJs of all time (April 2026); Rave Bonfire, electronic music DJs; thedjlist.com DJ ranking.',
].map(line => `<li>${inline(line)}</li>`).join('');

const articleHtml = [
  articleHero({kicker: 'DJ Mag Top 100', title, deck: 'Five DJs have been in the top ten of every poll since 2015. This looks at the table, the vote, the rules and the DJs it leaves out.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'The short version', bodyHtml: inline(intro[0]), className: 'article-summary'}), tocItems}),
  articleSection({id: 'introduction', title: 'The same names, eleven years running.', bodyHtml: join(intro.slice(1)), className: 'article-intro'}),
  ...bodySections,
  articleFaq({items: faqItems, title: 'DJ Mag Top 100 FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed: true, description: 'Buying one of these supports the music and the writing directly.', tracks: [
    {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
    {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items: relatedArticles('why-dj-mag-top-100-never-changes.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: 'https://thecatrave.com/img/og/why-dj-mag-top-100-never-changes.jpg', datePublished, dateModified}),
  breadcrumbStructuredData({name: title, canonical}),
  faqStructuredData({items: faqItems})
];
const html = articlePage({alternates: alternatesFor('/why-dj-mag-top-100-never-changes'), title, description, canonical, ogImage: 'https://thecatrave.com/img/og/why-dj-mag-top-100-never-changes.jpg', datePublished, dateModified, bodyClass: 'article-page why-dj-mag-top-100-never-changes-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('why-dj-mag-top-100-never-changes.html', html);
console.log('Built why-dj-mag-top-100-never-changes.html');
