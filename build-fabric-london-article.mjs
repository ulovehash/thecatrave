// Build fabric-london.html from fabric-london-draft.md.
//
// Intent: "fabric london", "fabric nightclub" and the practical terms around
// them (Keyword Planner, bucketed ranges only; keywords/fabric-london.json).
// Facts come from fabriclondon.com read on 2026-10-04 (home, /faq,
// /info/entry-policy, /info/accessibility, /info/phone-safety, /private-hire,
// /residents, /whats-on, two posts on the sound systems) and, for 2016, the
// joint Islington Council and fabric statement as published by Time Out, plus
// Resident Advisor and Mixmag. No Wikipedia. Ticket prices are not quoted: the
// club does not publish them and ra.co could not be read.
//
// Maintenance: re-read the What's On page, the FAQ hours and the entry policy
// each autumn. The capacity, the 2016-to-now change in the age rule and the
// opening date are unconfirmed at source and are worded as such in the draft.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('fabric-london-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/fabric-london';
const title = 'fabric London: History, Rooms, Tickets and Dress Code';
const description = 'fabric London in Farringdon: the three rooms, opening times, tickets, dress code, capacity, age limit and what happened in the 2016 closure.';
const date = '2026-10-04';
const dateLabel = '4 October 2026';

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
  src: `img/fabric-london/${name}-1200.webp`,
  srcset: `img/fabric-london/${name}-320.webp 320w, img/fabric-london/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'exterior-2017': fig('exterior-2017', 1200, 900,
    'The front of fabric on Charterhouse Street in London, a narrow stone and brick building between two larger ones, with its name above the doors',
    'fabric London on Charterhouse Street, 19 July 2017. Photograph: Paul Williams, CC BY-SA 2.0.'),
  'entrance-2020': fig('entrance-2020', 1200, 810,
    'The blue-painted entrance of fabric London with a pair of steel doors and two posters',
    'The entrance to fabric London, 1 February 2020. Photograph: Lolita Montana, CC BY-SA 2.0.'),
  'neon-night-2013': fig('neon-night-2013', 1200, 797,
    'Seen from above, a crowd dancing under mirror balls and beams of yellow and blue light at fabric London during a neon party',
    'A neon party at fabric London, 31 January 2013. Photograph: uclu photosoc, CC BY-SA 2.0.')
};

const tableLabels = {Route: 'Ways to buy fabric London tickets', Night: 'fabric London opening times', Room: 'The three rooms at fabric London'};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabels[rows[0][0]] || 'fabric London', headers: rows[0], rows: rows.slice(1)});
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

// Sets from this site's catalogue (selector-data.json), oEmbed-checked on
// 2026-10-04. Each was filmed at fabric: Beatport names Room One in the video
// description; the Boiler Room descriptions name a fabric takeover and fabric.
const clubSets = articleVideoCollection({
  label: 'Filmed at fabric London',
  description: 'Josh Caffe in Room One for Beatport, and two Boiler Room sessions from a night with fabric in 2014.',
  items: [
    articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'Room One, 2021', artist: 'Josh Caffe', title: 'Josh Caffe at Fabric, London Unlocked'}),
    articleVideoCard({youtubeId: '_Rc8VLhRLzs', genre: 'Boiler Room, 2014', artist: 'Swindle', title: 'Swindle Fabriclive x Boiler Room London Live Show'}),
    articleVideoCard({youtubeId: 'ldIX1k06dVw', genre: 'Boiler Room, 2014', artist: 'Elijah and Skiliam, Royal-T, Flava D', title: 'Fabriclive x Boiler Room London DJ Set'})
  ]
});
const panel = articleVideoCollection({
  label: 'The 2016 panel',
  description: 'Boiler Room UK, Can Nightlife be Saved? Live from Fabric: a panel, not a DJ set.',
  items: [
    articleVideoCard({youtubeId: 'sqIg6hhJLrQ', genre: 'Panel, 2016', artist: 'Boiler Room UK', title: 'Can Nightlife be Saved? Live from Fabric'})
  ]
});

const firstMix = ownSetListening(0);
const secondMix = ownSetListening(1);

const tocItems = [
  {id: 'what-is', label: 'What is fabric London?'},
  {id: 'tickets', label: 'Tickets'},
  {id: 'hours', label: 'Opening times and address'},
  {id: 'dress-code', label: 'Dress code'},
  {id: 'capacity', label: 'Capacity and rooms'},
  {id: 'lineup', label: 'Line-up and events'},
  {id: 'closure-2016', label: 'What happened in 2016?'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, London',
    title: 'fabric London: history, rooms, tickets and dress code',
    deck: 'The Farringdon club that opened in 1999: how its three rooms work, when it opens, how tickets and the dress code work, and what happened in 2016.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'fabric London', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One club, several questions.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is fabric London?', bodyHtml: `${join(sec('What is fabric London?'))}${firstMix}`}),
  articleSection({id: 'tickets', title: 'Tickets', bodyHtml: join(sec('Tickets'))}),
  articleSection({id: 'hours', title: 'Opening times and address', bodyHtml: join(sec('Opening times and address'))}),
  articleSection({id: 'dress-code', title: 'What is the dress code?', bodyHtml: join(sec('What is the dress code?'))}),
  articleSection({id: 'capacity', title: 'Capacity and rooms', bodyHtml: join(sec('Capacity and rooms'))}),
  articleSection({id: 'lineup', title: 'Line-up and events', bodyHtml: `${join(sec('Line-up and events'))}${clubSets}${secondMix}`}),
  articleSection({id: 'closure-2016', title: 'What happened in 2016?', bodyHtml: `${join(sec('What happened in 2016?'))}${panel}`}),
  articleFaq({items: faqItems, title: 'fabric London FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Opening times, dress code, age limit, search policy, cloakroom, music policy and directions, read on 4 October 2026: ${ext('https://fabriclondon.com/faq', 'fabric London FAQ')}.</li>
<li>Entry rules, ID and ticket entry times: ${ext('https://fabriclondon.com/info/entry-policy', 'entry policy')}. Room access and the lift: ${ext('https://fabriclondon.com/info/accessibility', 'accessibility page')}. Photos: ${ext('https://fabriclondon.com/info/phone-safety', 'no photo policy')}.</li>
<li>Hire capacities by room and venue size: ${ext('https://fabriclondon.com/private-hire', 'private hire page')}. Founding residents: ${ext('https://fabriclondon.com/residents', 'residents page')}. Listings and ticket links: ${ext('https://fabriclondon.com/whats-on', 'What\'s On')}.</li>
<li>Room 1 dance floor and sound systems: ${ext('https://fabriclondon.com/posts/weve-upgraded-our-dancefloor', 'dance floor post')} and ${ext('https://fabriclondon.com/posts/a-major-sound-system-upgrade-to-rooms-2-3', 'Rooms 2 and 3 post')}.</li>
<li>2016 council and club statement, 21 November 2016: ${ext('https://www.timeout.com/london/blog/fabric-is-saved-112116', 'Time Out')}. Revocation, 7 September 2016: ${ext('https://ra.co/news/36182', 'Resident Advisor')}. Reopening weekend, 2 December 2016: ${ext('https://www.timeout.com/london/blog/fabric-is-officially-reopening-heres-everything-you-need-to-know-120216', 'Time Out')}.</li>
<li>Building history and opening year: ${ext('https://www.timeout.com/london/clubs/14-things-you-didnt-know-about-fabric', 'Time Out')} and ${ext('https://mixmag.net/feature/fabric-forever-remembering-one-of-the-best-clubs-the-uk-has-ever-seen', 'Mixmag')}, which also gives the 2016 capacity of 2500.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('fabric-london.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'fabric London', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/fabric-london'),
  ogImage: 'https://thecatrave.com/img/og/fabric-london.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page fabric-london-page',
  structuredData, articleHtml
});

fs.writeFileSync('fabric-london.html', html);
console.log('Built fabric-london.html');
