// Build love-parade.html from love-parade-draft.md.
//
// Intent: "loveparade", "love parade 2026" and the successors (Keyword Planner,
// ranges only; keywords/love-parade.json). Facts come from ravetheplanet.com
// (history, 2026 press release, UNESCO certificate page), bpb.de, dw.com and
// streetparade.com, read on 2026-10-05. Attendance figures are organiser
// estimates and the page says so. The Essen/Dortmund order is disputed between
// sources and is stated as disputed. No catalogue set is claimed as a Love
// Parade appearance.
//
// Maintenance: re-read the Rave the Planet and Street Parade dates each spring.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('love-parade-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/love-parade';
const title = 'Love Parade: History, Duisburg 2010 and Rave the Planet';
const description = 'The Love Parade from Berlin in 1989 to Duisburg in 2010, why it ended, and Rave the Planet and the Street Parade, the parades that carry it on.';
const date = '2026-10-05';
const dateLabel = '5 October 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value));
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

// One image only: Wikimedia Commons, new to this page.
const figures = {
  'rtp-2023': articleFigure({
    src: 'img/love-parade/rave-the-planet-2023-1200.webp',
    srcset: 'img/love-parade/rave-the-planet-2023-320.webp 320w, img/love-parade/rave-the-planet-2023-1200.webp 1200w',
    width: 1200, height: 899,
    alt: 'A crowd on the Straße des 17. Juni in Berlin at the Rave the Planet parade, with trees and floats in the distance',
    caption: 'The Rave the Planet parade on the Straße des 17. Juni in Berlin, 8 July 2023. Photograph: Sargoth, CC BY-SA 4.0.',
    className: 'wide-archive-image'
  })
};

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: 'Rave the Planet parades', headers: rows[0], rows: rows.slice(1)});
  }
  if (block.startsWith('- ')) {
    return `<ul>${block.split(/\n(?=- )/).map(item => `<li>${inline(item.slice(2).replace(/\s+/g, ' '))}</li>`).join('')}</ul>`;
  }
  return `<p>${inline(block)}</p>`;
};
const join = list => list.map(renderBlock).join('\n');
const sec = heading => blocks(getSection(heading));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), answerHtml: join(blocks(body))};
});

// Sets from this site's catalogue (selector-data.json), oEmbed-checked 2026-10-05.
const berlinSets = articleVideoCollection({
  label: 'Berlin techno, heard from home',
  description: 'Three sets from Berlin, none of them recorded at the Love Parade.',
  items: [
    articleVideoCard({youtubeId: 'uInltd4OkTQ', genre: 'Techno', artist: 'Sven Väth', title: 'Sven Väth Boiler Room Berlin Groove Magazine DJ set'}),
    articleVideoCard({youtubeId: 'sj_ulHgaf40', genre: 'Techno', artist: 'DJ Hell', title: 'DJ Hell Boiler Room Berlin DJ Set'}),
    articleVideoCard({youtubeId: 'GG2IQguY-J0', genre: 'Techno', artist: 'Ellen Allien', title: 'TTT X HÖR - Ellen Allien / April 4 / 10pm-11pm'})
  ]
});

const tocItems = [
  {id: 'meaning', label: 'What it meant'},
  {id: 'begin', label: '1989 and the Berlin years'},
  {id: 'ruhr', label: 'After Berlin'},
  {id: 'duisburg', label: 'Duisburg 2010 and why it ended'},
  {id: 'still', label: 'Still happening?'},
  {id: 'rtp', label: 'Rave the Planet'},
  {id: 'street-parade', label: 'Street Parade'},
  {id: 'listen', label: 'Sets to hear'}
];

const readingTime = `${Math.max(5, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Rave history',
    title: 'Love Parade: history, Duisburg 2010 and Rave the Planet',
    deck: 'The Berlin techno parade of 1989 to 2010, why it ended, and the parades that carry it on.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Love Parade', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Three questions behind one name.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'meaning', title: 'What is the Love Parade meaning?', bodyHtml: `${join(sec('What is the Love Parade meaning?'))}${ownSetListening(0)}`}),
  articleSection({id: 'begin', title: 'How did the Love Parade begin in 1989?', bodyHtml: join(sec('How did the Love Parade begin in 1989?'))}),
  articleSection({id: 'ruhr', title: 'Where was the Love Parade held after Berlin?', bodyHtml: `${join(sec('Where was the Love Parade held after Berlin?'))}${ownTrackListening('berlin-race-1909', 'My own Berlin track, made for listening.')}`}),
  articleSection({id: 'duisburg', title: 'What happened at the Loveparade Duisburg 2010?', bodyHtml: join(sec('What happened at the Loveparade Duisburg 2010?'))}),
  articleSection({id: 'still', title: 'Is the Love Parade still happening?', bodyHtml: join(sec('Is the Love Parade still happening?'))}),
  articleSection({id: 'rtp', title: 'What is Rave the Planet?', bodyHtml: `${join(sec('What is Rave the Planet?'))}${ownSetListening(1)}`}),
  articleSection({id: 'street-parade', title: 'What is the Street Parade in Zurich?', bodyHtml: `${join(sec('What is the Street Parade in Zurich?'))}${ownTrackListening('late-summer-cloud-dance', 'Another track of mine, for the end of a summer.')}`}),
  articleSection({id: 'listen', title: 'Which Berlin sets should you hear first?', bodyHtml: `${join(sec('Which Berlin sets should you hear first?'))}${berlinSets}`}),
  articleFaq({items: faqItems, title: 'Love Parade FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Founding, 1989 to 1999 attendance, the 1996 move and the 2001 to 2010 timeline, read on 5 October 2026: ${ext('https://www.bpb.de/themen/recht-justiz/513688/die-geschichte-von-techno-und-der-loveparade/', 'Federal Agency for Civic Education (bpb)')} and ${ext('https://www.ravetheplanet.com/en/history/', 'Rave the Planet history')}.</li>
<li>Duisburg 2010 casualties and the trial: ${ext('https://www.dw.com/en/questions-but-no-answers-on-anniversary-of-love-parade-tragedy/a-18606671', 'DW')}. The organiser's statement of 25 July 2010: ${ext('https://ra.co/news/12551', 'Resident Advisor')}.</li>
<li>Rave the Planet 2026 and the next date: ${ext('https://www.ravetheplanet.com/en/rave-the-planet-parade-2026-press-release-review/', '2026 press release')}. Cultural heritage listing: ${ext('https://www.ravetheplanet.com/en/unesco-urkunde/', 'certificate page')}.</li>
<li>Street Parade history and dates: ${ext('https://www.streetparade.com/en/historie', 'streetparade.com/en/historie')} and ${ext('https://www.streetparade.com/en', 'streetparade.com')}.</li>
<li>Photograph: ${ext('https://commons.wikimedia.org/wiki/File:Rave_the_Planet_2023_K.jpg', 'Wikimedia Commons')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between history lessons, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('love-parade.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Love Parade', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/love-parade'),
  ogImage: 'https://thecatrave.com/img/og/love-parade.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page love-parade-page',
  structuredData, articleHtml
});

fs.writeFileSync('love-parade.html', html);
console.log('Built love-parade.html');
