// Build best-dj-sets-of-all-time.html from best-dj-sets-of-all-time-draft.md.
//
// Keywords (keywords/best-dj-sets-of-all-time.json): "best dj sets of all time"
// 100-1K worldwide (Keyword Planner, 5 October 2026), "best dj sets" 400 and
// "best dj set" 250 (Ahrefs dossier). Variants such as techno sets, youtube,
// soundcloud or reddit are recorded as not measured and are not claimed.
//
// Honesty rule for this page: each entry is the best officially published
// recording of its pick, and a set that is not the named one is labelled on the
// entry itself (Named, Substitute, Editorial pick). Every embed is an official
// upload checked by oEmbed on 5 October 2026 and none is embedded on another
// guide (the Frankie Knuckles, Richie Hawtin and Four Tet Dekmantel sets were
// dropped for that reason). The page has no hero photograph: no openly
// licensed one was confirmed.
import fs from 'node:fs';
import {
  articleFaq, articleHero, articlePage, articleSection, articleSources, articleStructuredData,
  articleListeningCollection, articleTrackEmbed, articleVideoCard, articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-dj-sets-of-all-time-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-dj-sets-of-all-time';
const title = 'Best DJ Sets of All Time: 30 You Can Hear';
const description = 'The best DJ sets of all time, from Carl Cox at Space and Black Coffee to Tale of Us, Skream and Fabio and Grooverider, each as an official recording.';
const datePublished = '2026-10-05';
const dateModified = '2026-10-05';
const dateLabel = '5 October 2026';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');

const yt = id => ['youtube', id];
const sc = path => ['soundcloud', `https%3A//soundcloud.com/${path}`];
const mc = path => ['mixcloud', `https://www.mixcloud.com/${path}`];
// Heading in the draft -> [platform, id or url]. A missing entry fails the build.
const players = new Map([
  ['Marshall Jefferson, The Lab NYC, Mixmag, 2015', yt('7cuTVGoi9ec')],
  ['Todd Terry, The Lab London, Mixmag, 2013', yt('3NrREoqmHNA')],
  ['Louie Vega, DJ Mag HQ, 2018', yt('Drk4mfQa4f0')],
  ['Kerri Chandler, Mixmag Live, 2017', yt('8x7n6KDfseI')],
  ['Theo Parrish, Boiler Room #29, 2010', sc('platform/br-29-theo-parrish')],
  ['A hip hop aside: DJ Jazzy Jeff, Boiler Room Philadelphia, 2017', yt('IvPdwoppGw4')],
  ['Black Coffee, Mixmag Live London, 2015', yt('wamL0A9Qzxg')],
  ['Solomun and Kollektiv Turmstrasse, Diynamic ADE showcase, Mixmag, 2014', yt('i7Zstp8jlgo')],
  ['Honey Dijon, The Lab Miami, Mixmag, 2016', yt('SP_hVmD3yI4')],
  ['The Black Madonna, DJ Mag Pool Party Miami, 2018', yt('SS58vs5WtGE')],
  ['Dixon, Cercle Festival, Ariane stage, 2024', yt('8ClF-beNXII')],
  ['Carl Craig, Detroit Classics set, Mixmag Live, 2012', yt('W7Lnhe2-Ea0')],
  ['Joey Beltram, The Lab NYC, Mixmag, 2018', yt('H4OqblkR-vA')],
  ['Sven Väth, Time Warp 2D2S, 2023', yt('jAb-PeSB-kk')],
  ['Nina Kraviz, Time Warp, 2017', yt('o5emoqTlYOk')],
  ['Adam Beyer, Awakenings Day One, 2016', yt('oyTzPIv2ZgE')],
  ['Tale of Us, Time Warp, 2016', yt('akdDY6PCBBM')],
  ['Charlotte de Witte, The Lab NYC, Mixmag, 2020', yt('Q9dzq_SWd3k')],
  ['Carl Cox, Space Ibiza closing, Global 700, 2016', mc('CarlCox/carl-cox-global-live-from-space-ibiza-the-final-chapter-global-700-part-1/')],
  ['Four Tet and Floating Points, the last night at Plastic People, 2015', sc('floatingpoints/floating-points-four-tet-final-plastic-people-2-1-2015')],
  ['Carl Cox b2b Fatboy Slim, Saatchi Gallery, Mixmag, 2019', yt('JL3b_fewO08')],
  ['John Digweed, Time Warp, floor 1, 2014', yt('ly-W-JvWc3Y')],
  ['Seth Troxler, Time Warp, floor 4, 2014', yt('e_TluqmgXuM')],
  ['Fatboy Slim, Cercle, Brighton i360, 2018', yt('8AvC05kXS9I')],
  ['Fabio and Grooverider, DJ Mag HQ, 2015', yt('Ehi2-SFYhzg')],
  ['DJ Randall, history of jungle set, The Lab London, Mixmag, 2016', yt('UgK8h9xRFls')],
  ['Goldie and Ulterior Motive, The Lab London, Mixmag, 2017', yt('dXxDphoxf4g')],
  ['Ben UFO, The Lot Radio, 2020', yt('ECQwhbX4-H0')],
  ['DJ Rashad and DJ Spinn, XLR8R Podcast 158, 2010', mc('xlr8r/podcast-158-dj-rashad-dj-spinn/')],
  ['Skream, Alter Ego, UK garage, Mixmag, 2015', yt('ZjRTmeJVo9o')]
]);
const used = new Set();

function player(heading, genre) {
  const spec = players.get(heading);
  if (!spec) throw new Error(`No player for entry: ${heading}`);
  used.add(heading);
  const [platform, ref] = spec;
  const label = heading.replace(/^A hip hop aside: /, '');
  const comma = label.indexOf(', ');
  const artist = label.slice(0, comma), setTitle = label.slice(comma + 2);
  if (platform === 'youtube') {
    return articleVideoCollection({label, description: `Watch the ${setTitle} recording on the official channel.`, items: [articleVideoCard({youtubeId: ref, genre, artist, title: setTitle})]});
  }
  const where = platform === 'mixcloud' ? 'Mixcloud' : 'SoundCloud';
  const year = (label.match(/(\d{4})\s*$/) || [])[1] || '';
  return articleListeningCollection({
    id: `listen-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    title: label,
    description: `Audio only, from the official upload on ${where}.`,
    tone: 'paper',
    items: [{artist, title: setTitle.replace(/,?\s*\d{4}\s*$/, ''), year, note: `Audio only, on ${where}.`, playerHtml: articleTrackEmbed({platform, url: ref, title: label})}]
  });
}

// One entry = heading, a paragraph, the player, then the rest. The player always
// follows a paragraph and precedes either more prose or the next heading.
function renderEntries(heading, genre) {
  return getSection(heading).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [entryTitle, ...rest] = block.split('\n');
    const copy = paras(rest.join('\n'));
    if (copy.length < 1 || copy.length > 3) throw new Error(`${entryTitle} must have one to three paragraphs`);
    return `<h3>${escapeHtml(entryTitle.trim())}</h3>${join(copy.slice(0, 1))}${player(entryTitle.trim(), genre)}${join(copy.slice(1))}`;
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const method = paras(getSection('How these 30 were chosen'));
const start = paras(getSection('Where to start'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: join(paras(body))};
});
const sources = getSection('Sources').split('\n').filter(line => line.startsWith('- ')).map(line => `<li>${inline(line.slice(2))}</li>`).join('');

const groups = [
  {id: 'house-origins', genre: 'HOUSE', heading: 'House: Chicago, New York and Detroit', h2: 'House: Chicago, New York and Detroit.'},
  {id: 'house-now', genre: 'HOUSE', heading: 'House now', h2: 'House now.'},
  {id: 'techno', genre: 'TECHNO', heading: 'Techno', h2: 'Techno.'},
  {id: 'marathons', genre: 'MARATHONS', heading: 'Marathons and closing nights', h2: 'Marathons and closing nights.'},
  {id: 'festival-floors', genre: 'FESTIVAL FLOORS', heading: 'Festival floors', h2: 'Festival floors.'},
  {id: 'jungle-dnb', genre: 'JUNGLE / DRUM AND BASS', heading: 'Jungle and drum and bass', h2: 'Jungle and drum and bass.'},
  {id: 'garage-footwork-radio', genre: 'GARAGE / FOOTWORK / RADIO', heading: 'Garage, footwork and radio', h2: 'Garage, footwork and radio.'}
];
const groupSections = groups.map(group => articleSection({id: group.id, title: group.h2, bodyHtml: renderEntries(group.heading, group.genre)}));
for (const heading of players.keys()) if (!used.has(heading)) throw new Error(`Unused player: ${heading}`);
if (used.size !== 30) throw new Error(`Expected 30 sets, found ${used.size}`);

const tocItems = [
  {id: 'method', label: 'How these 30 were chosen'},
  ...groups.map(group => ({id: group.id, label: group.heading})),
  {id: 'where-to-start', label: 'Where to start'},
  {id: 'faq', label: 'FAQ'}
];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({kicker: 'DJ sets', title: 'The best DJ sets of all time', deck: 'Thirty official recordings from house and techno to jungle, garage and footwork, with named sets, substitutes and editorial picks clearly marked.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'Best DJ sets of all time', bodyHtml: inline(answer[0]), className: 'article-summary'}), tocItems}),
  articleSection({id: 'introduction', title: 'The sets everyone names, and the ones you can hear.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'method', title: 'How these 30 were chosen.', bodyHtml: join(method)}),
  ...groupSections,
  articleSection({id: 'where-to-start', title: 'Where to start.', bodyHtml: join(start)}),
  articleFaq({items: faqItems, title: 'Best DJ sets FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed: true, description: 'Buying one of these supports the music and the writing directly.', tracks: [
    {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
    {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items: relatedArticles('best-dj-sets-of-all-time.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg', datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best DJ Sets of All Time', canonical}),
  faqStructuredData({items: faqItems})
];
const html = articlePage({alternates: alternatesFor('/best-dj-sets-of-all-time'), title, description, canonical, ogImage: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg', datePublished, dateModified, bodyClass: 'article-page best-dj-sets-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-dj-sets-of-all-time.html', html);
console.log('Built best-dj-sets-of-all-time.html');
