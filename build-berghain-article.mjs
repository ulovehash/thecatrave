// Build berghain.html from berghain-draft.md.
//
// Intent: "berghain" and its club, panorama bar, halle, kantine, lineup, sound,
// hours, tickets, dress code and queue terms (Keyword Planner, ranges only;
// keywords/berghain.json). "what is berghain", "how to get into berghain",
// "berghain door policy" and "berghain tursteher" are taken by
// best-clubs-in-berlin and are not claimed here. Facts come from berghain.berlin
// read on 2026-10-04 (home, /en/program/, kantine and halle programmes, event
// pages, /en/awareness/, /en/contact, /en/terms/, the 2025 and 2026 archive
// months), the Berliner Zentrum Industriekultur, the Berlin monuments database,
// the architects' project page, Crack, Groove, Mixmag and Resident Advisor.
//
// Maintenance: practical advice links to current venue programmes. The Klubnacht counts in the lineup section
// were taken from the official archive for 1 January to 3 October 2026.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleVideoCard, articleVideoCollection, articleHero, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('berghain-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/berghain';
const title = 'Berghain: Panorama Bar, Sound and Residents';
const description = 'Berghain explained: the former power station, Panorama Bar upstairs, Halle am Berghain, the Kantine, and the Ostgut Ton label.';
const published = '2026-10-04';
const date = '2026-10-08';
const dateLabel = '8 October 2026';

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

// Images: Wikimedia Commons, new to this page, none reused from another guide.
const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/berghain/${name}-1200.webp`,
  srcset: `img/berghain/${name}-320.webp 320w, img/berghain/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  facade: fig('berghain-facade', 1200, 900,
    'The grey neoclassical front of the Berghain building in Berlin, with a few people at the entrance and bicycles parked behind fences',
    'The Berghain building in Berlin, June 2007. Photograph: Jane Mejdahl, CC BY-SA 2.0.'),
  street: fig('berghain-heizkraftwerk', 1200, 1200,
    'The corner of the Berghain building seen from Am Wriezener Bahnhof, with a rust-coloured sculpture and graffiti at street level',
    'Berghain seen from Am Wriezener Bahnhof, 8 August 2024, cropped. Photograph: Gunnar Klack, CC BY-SA 4.0.'),
  queue: fig('berghain-queue', 1200, 808,
    'People standing behind metal barriers in front of the Berghain entrance, which is covered in graffiti',
    'People waiting at the Berghain entrance, December 2019. Photograph: Ben Kaden, CC BY 2.0.')
};
// Sets from this site's catalogue (selector-data.json), oEmbed-checked 2026-10-04
// (noembed titles all read "<artist> Boiler Room Berlin DJ Set"). Residents named by the press.
const residentSets = articleVideoCollection({
  label: 'Sets by Berghain residents',
  description: 'Boiler Room Berlin sets by four DJs the press names as Berghain or Panorama Bar residents.',
  items: [
    articleVideoCard({youtubeId: 'DGWL7YI_2rI', genre: 'Boiler Room', artist: 'Ben Klock', title: 'Ben Klock Boiler Room Berlin DJ Set'}),
    articleVideoCard({youtubeId: 'jQRI3b2SX8c', genre: 'Boiler Room', artist: 'Len Faki', title: 'Len Faki Boiler Room Berlin DJ Set'}),
    articleVideoCard({youtubeId: 'fgYVNi1vK1E', genre: 'Boiler Room', artist: 'Prosumer', title: 'Prosumer Boiler Room Berlin DJ Set'}),
    articleVideoCard({youtubeId: '0EX18zMgGig', genre: 'Boiler Room', artist: 'Tama Sumo', title: 'Tama Sumo Boiler Room Berlin DJ Set'})
  ]
});

const mixes = [
  ownSetListening(0, undefined, 'A DJ mix to hear while reading about the Berlin floor upstairs.'),
  ownSetListening(1, undefined, 'A second mix of my own, for the main room and its sound.')
];

const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  const listen = block.match(/^\[Listen: [^\]]*\]\(listen:(\d)\)$/);
  if (listen) return mixes[Number(listen[1])];
  if (block.startsWith('### ')) return `<h3 id="${slug(block.slice(4))}">${inline(block.slice(4))}</h3>`;
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: rows[0][0] === 'Floor' ? 'Klubnacht lineup, 10 October 2026' : 'Berghain event prices, October 2026', headers: rows[0], rows: rows.slice(1)});
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

const tocItems = [
  {id: 'visiting', label: 'Plan your visit'},
  {id: 'panorama-bar', label: 'What is Panorama Bar?'},
  {id: 'halle', label: 'What is Halle am Berghain?'},
  {id: 'kantine', label: 'What is the Kantine?'},
  {id: 'lineup', label: 'Who plays Berghain?'},
  {id: 'sound', label: 'What does Berghain sound like?'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, Berlin',
    title: 'Berghain: Panorama Bar, sound and residents',
    deck: 'The music, rooms and residents, with practical advice on choosing a night, tickets, the door and getting home.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Berghain', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'visiting', title: 'Plan your visit', bodyHtml: `<span id="hours-tickets"></span>${join(sec('Opening hours and tickets'))}`}),
  articleSection({id: 'introduction', title: 'A power station in Friedrichshain.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'panorama-bar', title: 'What is Panorama Bar?', bodyHtml: join(sec('What is Panorama Bar?'))}),
  articleSection({id: 'halle', title: 'What is Halle am Berghain?', bodyHtml: join(sec('What is Halle am Berghain?'))}),
  articleSection({id: 'kantine', title: 'What is the Berghain Kantine?', bodyHtml: join(sec('What is the Berghain Kantine?'))}),
  articleSection({id: 'lineup', title: 'Who plays Berghain?', bodyHtml: join(sec('Who plays Berghain?'))}),
  articleSection({id: 'sound', title: 'What does Berghain sound like?', bodyHtml: `${join(sec('What does Berghain sound like?'))}${residentSets}`}),
  articleFaq({items: faqItems, title: 'Berghain FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Programme, floors, prices, hours, address and house information: ${ext('https://www.berghain.berlin/en/', 'berghain.berlin')}, its ${ext('https://www.berghain.berlin/en/program/', 'programme')}, ${ext('https://www.berghain.berlin/en/program/kantine-am-berghain/', 'Kantine programme')}, ${ext('https://www.berghain.berlin/en/program/halle/', 'Halle programme')}, ${ext('https://www.berghain.berlin/en/contact', 'contact page')}, ${ext('https://www.berghain.berlin/en/awareness/', 'awareness page')} and the ${ext('https://www.berghain.berlin/en/program/archive/2026/05/', '2026 programme archive')}.</li>
<li>Building history, former uses of each space and capacity: ${ext('https://industriekultur.berlin/ort/berghain/', 'Berliner Zentrum Industriekultur')}. Monument listing: ${ext('https://denkmaldatenbank.berlin.de/daobj.php?obj_dok_nr=09085197', 'Landesdenkmalamt Berlin, Denkmaldatenbank, object 09085197')}.</li>
<li>Interior, foyer installation and Panorama Bar fittings: ${ext('https://www.karhard.de/projects/berghain', 'Karhard architects, Berghain project page')}.</li>
<li>Ostgut dates and the residents: ${ext('https://crackmagazine.net/article/long-reads/now-time-marcel-dettmann-ben-klock-interviewed/', 'Crack, Marcel Dettmann and Ben Klock interviewed, 2017')} and ${ext('https://groove.de/2022/10/10/ein-nachruf-auf-ostgut-booking-mehr-als-ein-weiterer-technoclub/', 'Groove, obituary for Ostgut Booking, 2022')}.</li>
<li>Sound system: ${ext('https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', 'Mixmag, 18 October 2023')} and ${ext('https://groove.de/2023/10/23/berghain-soundanlage-nach-18-jahren-ausgetauscht/', 'Groove, 23 October 2023')}. Mix series: ${ext('https://ra.co/news/12034', 'Resident Advisor, 26 April 2010')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Between club nights, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('berghain.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: published, dateModified: date}),
  breadcrumbStructuredData({name: 'Berghain', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/berghain'),
  ogImage: 'https://thecatrave.com/img/og/berghain.jpg',
  datePublished: published, dateModified: date,
  bodyClass: 'article-page berghain-page',
  structuredData, articleHtml
});

fs.writeFileSync('berghain.html', html);
console.log('Built berghain.html');
