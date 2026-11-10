// Build phonk-guide.html from phonk-guide-draft.md.
//
// Written on 2026-11-10 as the trial run of the subagent pipeline
// (PROCESS-AUDIT-2026-11-10.md). Research: Wikipedia (Phonk, with its drift
// phonk, rare phonk and funk automotivo sections), The Conversation (2024),
// Okayplayer (2012), Crack Magazine (2012) and Epidemic Sound (2025).
// Volumes are in keywords/phonk-guide.json: Keyword Planner ranges and the
// Ahrefs US points for four terms, labelled per term and never merged.
//
// Media sits in the draft as [Image: ...] and [Embed: ...] placeholder lines.
// A placeholder with no matching asset, or an asset with no placeholder,
// fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('phonk-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/phonk-guide';
const title = 'What Is Phonk? Phonk Music Meaning, Drift Phonk, Songs, Artists';
const description = 'What phonk is: the Memphis rap it is built on, what the word means, SpaceGhostPurrp, drift phonk, Brazilian phonk, the best phonk songs and the artists.';
const datePublished = '2026-11-10';
const dateModified = '2026-11-10';
const dateLabel = '10 November 2026';

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

// From Wikimedia Commons, downloaded to img/phonk/ on 2026-11-10,
// licences checked through the Commons API, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/phonk/${name}-${width}.webp`,
  srcset: `img/phonk/${name}-320.webp 320w, img/phonk/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Records from the artist's or label's own channel, sets from Boiler Room.
// All checked through YouTube oEmbed on 2026-11-10 and embedded by no other
// guide (media/phonk.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Beale Street': figure('beale-street-memphis-2006', 1200, 794,
    'Beale Street in Memphis at night, with neon signs above the bars',
    'Beale Street, Memphis, at night in 2006. Photograph: Curt Hart, CC BY 2.0.'),
  'Three 6 Mafia': figure('juicy-j-dj-paul-2009', 1024, 768,
    'Juicy J and DJ Paul of Three 6 Mafia, photographed in 2009',
    'Juicy J and DJ Paul of Three 6 Mafia in 2009. Photograph: Aaaarrrrgggghhhh!, CC BY 2.0.'),
  'Denzel Curry': figure('denzel-curry-2017', 1200, 800,
    'Denzel Curry performing on stage in 2017',
    'Denzel Curry in March 2017. Photograph: friedoxygen, CC BY 2.0.'),
  'drift car': figure('drift-adm-raceway-2021', 1200, 800,
    'A car drifting sideways through a corner in a cloud of tyre smoke',
    'A drift at ADM Raceway, Drift Expo festival, May 2021. Photograph: Michał Siergiejevicz, CC BY 2.0.'),
  'Tommy Wright III photo': figure('tommy-wright-iii-montreal-2019', 1104, 584,
    'Tommy Wright III performing at La Sala Rossa in Montreal',
    'Tommy Wright III at La Sala Rossa, Montreal, July 2019. Photograph: Bull-Doser, public domain.'),
  'Been Fweago': video('zrTzt3lrRaM', 'Phonk', 'SpaceGhostPurrp', 'Been Fweago',
    'From Mysterious Phonk, the 2012 album on 4AD, on the artist\'s Topic channel.'),
  'Pheel Tha Phonk': video('Qoi5LF9NDvo', 'Phonk', 'SpaceGhostPurrp', 'Pheel Tha Phonk 1990',
    'A 2013 video from the run of songs that carried the word, on SpaceGhostPurrp\'s channel.'),
  'Bringing The Phonk': video('BusMLlogMJs', 'Phonk', 'SpaceGhostPurrp', 'Bringing The Phonk',
    'From the Raider Klan years, on SpaceGhostPurrp\'s channel.'),
  'Tommy Wright III Boiler Room': video('domL07OypKk', 'Memphis rap', 'Tommy Wright III', 'Boiler Room Memphis: The Legends of Memphis Rap',
    'Tommy Wright III at Willie Mitchell\'s studio in Memphis, 2026.'),
  'DJ Smokey Boiler Room': video('APe7fhdkp9Q', 'Phonk', 'Dj Smokey', 'Boiler Room: LA',
    'DJ Smokey on the main stage of Boiler Room\'s Los Angeles showcase.'),
  'Scary Garry': video('z9nHtotESH4', 'Drift phonk', 'Kaito Shoma', 'Scary Garry, 2016',
    'One of the first drift phonk songs, from Kaito Shoma\'s channel.'),
  'Murder in My Mind': video('w-sQRS-Lc9k', 'Drift phonk', 'Kordhell', 'Murder in My Mind',
    'The single Kordhell is best known for, from his channel.'),
  'Rave': video('PTZgxW_3LIQ', 'Drift phonk', 'DXRK', 'Rave',
    'DXRK\'s best-known single, from the artist\'s channel.')
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (p.startsWith('### ')) return `<h3>${inline(p.slice(4))}</h3>`;
    if (/^- /.test(p)) return `<ul>${p.split('\n').map(li => `<li>${inline(li.replace(/^- /, ''))}</li>`).join('')}</ul>`;
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
  {id: 'sound', heading: 'What phonk music sounds like'},
  {id: 'meaning', heading: 'What phonk means'},
  {id: 'origins', heading: 'Where phonk came from'},
  {id: 'rare-phonk', heading: 'Rare phonk and SoundCloud'},
  {id: 'drift-phonk', heading: 'Drift phonk'},
  {id: 'brazilian-phonk', heading: 'Brazilian phonk'},
  {id: 'popularity', heading: 'Why phonk got so popular'},
  {id: 'best-songs', heading: 'The best phonk songs'},
  {id: 'artists', heading: 'Phonk artists'},
  {id: 'where-to-start', heading: 'Where to start with phonk'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Phonk',
    title: 'What is phonk? Phonk music, its meaning, drift phonk and the songs',
    deck: 'Memphis rap tapes, slowed and screwed, renamed on SoundCloud in 2012, then sped up in Russia and set to drifting cars: the two lives of phonk.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is phonk', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Two lives.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Phonk FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Phonk', 'Wikipedia: Phonk')}
${sourceLink('https://theconversation.com/how-a-global-crisis-drift-racing-and-memphis-hip-hop-gave-us-phonk-the-music-of-the-tiktok-generation-224960', 'The Conversation: How a global crisis, drift racing and Memphis hip-hop gave us phonk, Ward, Luttrell and Goold, 2024')}
${sourceLink('https://www.okayplayer.com/news/spaceghostpurrp-mysterious-phonk-interview-trayvon-trill-porn.html', 'Okayplayer: SpaceGhostPurrp interview, 2012')}
${sourceLink('https://crackmagazine.net/article/news/spaceghostpurrp/2', 'Crack Magazine: SpaceGhostPurrp, David Reed, 2012')}
${sourceLink('https://www.epidemicsound.com/blog/what-is-phonk-music/', 'Epidemic Sound: What is phonk music, 2025')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('phonk-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Phonk', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/phonk-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/phonk.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page phonk-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('phonk-guide.html', html);
console.log('Built phonk-guide.html');
