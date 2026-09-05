// Build find-new-music.html from find-new-music-draft.md.
//
// This is the one article on the site where the Selector belongs in the body
// rather than in a promo band, because the article is a list of ways to find
// music and the tool is one of them. It sits third, after radio and after
// whole DJ sets, so it reads as the conclusion of the two methods above it
// rather than as an advert in position one. Every other entry is a real method
// that costs us nothing and sends the reader elsewhere, which is the price of
// the page being worth reading at all.
//
// Keyword cluster, checked in Ahrefs, about 6,450 searches a month worldwide:
// music discovery 1,800, discover new music 1,100, find new music 900,
// how to discover new music 900, discover new artists 300, music discovery
// websites 300, music discovery apps 200, how to find new music on spotify 200,
// best way to discover new music 150, new music discovery 150, where to find
// new music 150, how to find new artists 100, how to find music you like 90,
// music discovery tools 70, how to find underground music 40.
//
// The method list is not invented. The two most-watched videos on the subject,
// at 563,000 and 105,000 views, between them cover journalism, influencers,
// forums, NTS, labels, Every Noise at Once, following producers, critics and
// AOTY. Those are all here. What is added: whole DJ sets, the Selector,
// Bandcamp, Discogs and RateYourMusic, and one correction neither video makes,
// which is that Every Noise at Once stopped updating in 2023.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable, articleTrackEmbed, articleVideoCard,
  articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('find-new-music-draft.md', 'utf8').replace(/—/g, ':');
// The slug is the query: "how to find new music" is 1,400 a month worldwide,
// second only to "music discovery" in this cluster and ahead of both
// "how to discover new music" and "find new music" at 900 each.
const canonical = 'https://thecatrave.com/how-to-find-new-music';
const title = 'How to Find New Music: 10 Ways That Are Not an Algorithm';
const description = 'Ten music discovery methods that do not depend on a machine knowing your listening history, from community radio to record credits, ordered by effort.';
const date = '2026-09-05';
const dateLabel = '5 September 2026';

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
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const join = list => list.map(p => `<p>${inline(p)}</p>`).join('\n');
const render = text => join(paras(text));

const intro = paras(getSection('Introduction'));
const radio = paras(getSection('Radio'));
const djSets = paras(getSection('Whole DJ sets'));
const selector = paras(getSection('The Selector'));
const producers = paras(getSection('Follow the producer, not the artist'));
const everyNoise = paras(getSection('Every Noise at Once'));
const labels = paras(getSection('Labels that stick to one sound'));
const bandcamp = paras(getSection('Bandcamp'));
const critics = paras(getSection('Critics and end-of-year lists'));
const forums = paras(getSection('Forums and communities'));
const databases = paras(getSection('Discogs and RateYourMusic'));
const algorithm = paras(getSection('A note on the algorithm'));

const faqSection = getSection('FAQ');
// Split on the heading marker wherever it is, not only after a newline: the
// first question sits at the very start of the section, so splitting on
// "\n### " and dropping element zero silently swallowed it. Both new guides
// shipped a draft with one more question than the page showed.
const faqItems = faqSection.split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {
    question: q.trim().replace(/\?*$/, '?'),
    answer: body.replace(/\s+/g, ' '),
    answerHtml: render(body)
  };
});

// The summary table is the part an answer engine can lift whole, and the part a
// reader screenshots. Effort is the honest axis: the list is ordered by it.
const methodRows = [
  ['Community radio', 'None', 'NTS, Rinse FM, The Lot Radio, and the city stations nobody outside their city hears'],
  ['A whole DJ set', 'None', 'An hour of records somebody spent years learning to sequence'],
  ['The Selector', 'One click', '62,877 sets from 37 channels, picked at random, nothing remembered about you'],
  ['Producer credits', 'A minute', 'One producer leads sideways into a whole scene'],
  ['Every Noise at Once', 'A minute', 'A map of nearly 6,000 genres. Data frozen since 2023'],
  ['Record labels', 'An afternoon', 'A narrow label is a filter somebody else maintains for free'],
  ['Bandcamp', 'An afternoon', 'Artist-written tags, and the collections of people who bought the record'],
  ['Critics and AOTY', 'Ongoing', 'Find writers, not publications. Read the lists in spring'],
  ['Forums and Discord', 'Ongoing', 'The part of music recommendation that is still people'],
  ['Discogs and RateYourMusic', 'Ongoing', 'Databases that connect records to records, not listeners to listeners']
];

const introHtml = `${join(intro)}${articleTable({
  headers: ['Method', 'Effort', 'What it is'],
  rows: methodRows
})}`;

const selectorFigure = articleFigure({
  src: 'img/og/selector.jpg',
  srcset: 'img/og/selector.jpg 1200w',
  width: 1200, height: 630,
  alt: 'The Selector: one button that plays a random DJ set',
  caption: 'The Selector holds 62,877 sets from 37 channels. It keeps no account and no history, which is why it cannot narrow your taste the way a recommendation engine does.',
  className: 'wide-archive-image'
});

const radioListening = articleListeningBand({
  platform: 'spotify',
  id: 'find-new-music-radio',
  kicker: 'Essential listening',
  title: 'An hour from a station you have never heard of.',
  description: 'NTS puts its shows on Spotify as well as its own archive. Any one of them makes the argument of this article better than another paragraph would.',
  src: 'https://open.spotify.com/embed/show/2BOLPpDNlSjFrjrTJdOMSb?utm_source=generator',
  iframeTitle: 'NTS Radio on Spotify',
  fullBleed: true,
  tone: 'cyan'
});

// Six stations from the list above, each with its most-watched set, all pulled
// from this site's own catalogue so every id is a set that exists and is still
// public. The point of the article is that a station you have never heard of is
// worth an hour, and this is the cheapest way to prove it.
const stationsListening = articleVideoCollection({
  label: 'One set from each station',
  description: 'The stations named above, each with the set of theirs that most people have watched. The last one has six thousand views, which is the whole argument about geography in a single number.',
  items: [
    articleVideoCard({youtubeId: 'nzvLiwUK3R8', genre: 'NTS RADIO', artist: 'Aphex Twin', title: 'Live at Field Day'}),
    articleVideoCard({youtubeId: '1wk3uOxQ5F4', genre: 'RINSE FM', artist: 'P Money and D Double E', title: 'Rinse FM'}),
    articleVideoCard({youtubeId: 't1IDxfnENvk', genre: 'THE LOT RADIO', artist: 'Adam Port', title: 'The Lot Radio, Brooklyn'})
  ]
});

// The three nobody outside their own city hears, which is the point the DJ set
// section is making rather than the one the radio section is making.
const smallStations = articleVideoCollection({
  label: 'Three hours from three cities',
  description: 'Kiosk Radio broadcasts from a shack in a Brussels park, and the last of these has six thousand views. An hour each, and none of them chosen by anything that knows who you are.',
  items: [
    articleVideoCard({youtubeId: 'kumeF99xnoM', genre: 'KIOSK RADIO', artist: 'Acid Arab', title: 'Kiosk Radio, Brussels'}),
    articleVideoCard({youtubeId: 'a1don952lRk', genre: 'SEOUL COMMUNITY RADIO', artist: 'Vladimir Cauchemar', title: 'Seoul Community Radio'}),
    articleVideoCard({youtubeId: '3PxqtjIRcMA', genre: 'MANILA COMMUNITY RADIO', artist: 'Perception Is Real', title: 'Manila Community Radio'})
  ]
});

// Two diagrams, drawn here rather than sourced, because the thing being
// explained is a shape and not a place: what a recommender does to taste over
// time, and what following a credit opens up that following an artist does not.
// Services cannot be illustrated without screenshotting them, which the site's
// licensing rule does not allow.
const loopFigure = articleFigure({
  src: 'img/find-new-music/taste-loop.svg',
  width: 1000, height: 460,
  alt: 'Two diagrams. On the left a closed loop where what you played feeds a recommender that suggests more of the same. On the right an open line from an unpersonalised source to a wider next play.',
  caption: 'A recommender can only work from what you already played, so every turn lands closer to the last. A source that has never heard of you cannot do that.',
  className: 'wide-archive-image'
});

const producerFigure = articleFigure({
  src: 'img/find-new-music/producer-graph.svg',
  width: 1000, height: 420,
  alt: 'A diagram comparing following an artist, which leads to their own back catalogue, with following a producer, which leads to every artist they worked with and on to those artists labels.',
  caption: 'An artist\'s back catalogue mostly sounds like that artist. A producer\'s is twenty artists filtered through one pair of ears, and each of those leads on to a label.',
  className: 'wide-archive-image'
});

const shopFigure = articleFigure({
  src: 'img/find-new-music/record-store-1200.webp',
  srcset: 'img/find-new-music/record-store-320.webp 320w, img/find-new-music/record-store-1200.webp 1200w',
  width: 1200, height: 800,
  alt: 'The interior of a second-hand record shop, racks of vinyl along both walls',
  caption: 'A shop is a filter somebody maintains by hand, which is what a good label is too. Photograph by Chicken4War, CC BY-SA 4.0, via Wikimedia Commons.',
  className: 'wide-archive-image'
});

// A Bandcamp player in the Bandcamp section: the platform hands out this embed
// code for exactly this, so it is licensed use rather than a borrowed asset,
// and it demonstrates the argument of the paragraph beside it.
const bandcampExample = articleTrackEmbed({
  platform: 'bandcamp',
  id: '3822639635',
  url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks',
  title: 'Protect Ya Breaks by thecatrave'
});

const tocItems = [
  {id: 'radio', label: 'Community radio'},
  {id: 'dj-sets', label: 'Whole DJ sets'},
  {id: 'selector', label: 'The Selector'},
  {id: 'producers', label: 'Follow the producer'},
  {id: 'every-noise', label: 'Every Noise at Once'},
  {id: 'labels', label: 'Record labels'},
  {id: 'bandcamp', label: 'Bandcamp'},
  {id: 'critics', label: 'Critics and lists'},
  {id: 'forums', label: 'Forums'},
  {id: 'databases', label: 'Discogs and RateYourMusic'},
  {id: 'algorithm', label: 'A note on the algorithm'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Guide',
    title: 'How to find new music',
    deck: 'Ten ways to hear something you have not heard before, none of which depend on a machine knowing what you played last week. Ordered by how much work they take.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'The short version', bodyHtml: inline('Put on a community radio station. When you find a show you like, listen to the whole thing. And when you cannot face choosing, let something else choose for you.'), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Too much music, and you keep playing the same things.', bodyHtml: introHtml, className: 'article-intro'}),
  articleSection({id: 'radio', title: '1. Community radio.', kicker: 'No effort', bodyHtml: `${join(radio.slice(0, 3))}${stationsListening}${join(radio.slice(3))}${radioListening}`}),
  articleSection({id: 'dj-sets', title: '2. Whole DJ sets, not singles.', kicker: 'No effort', bodyHtml: `${join(djSets.slice(0, 2))}${smallStations}${join(djSets.slice(2))}`}),
  articleSection({id: 'selector', title: '3. The Selector.', kicker: 'One click', bodyHtml: `${join(selector.slice(0, 2))}${selectorFigure}${join(selector.slice(2))}`}),
  articleSection({id: 'producers', title: '4. Follow the producer, not the artist.', kicker: 'A minute', bodyHtml: `${join(producers.slice(0, 2))}${producerFigure}${join(producers.slice(2))}`}),
  articleSection({id: 'every-noise', title: '5. Every Noise at Once.', kicker: 'A minute', bodyHtml: join(everyNoise)}),
  articleSection({id: 'labels', title: '6. Labels that stick to one sound.', kicker: 'An afternoon', bodyHtml: `${join(labels.slice(0, 2))}${shopFigure}${join(labels.slice(2))}`}),
  articleSection({id: 'bandcamp', title: '7. Bandcamp.', kicker: 'An afternoon', bodyHtml: `${join(bandcamp.slice(0, 2))}${bandcampExample}${join(bandcamp.slice(2))}`}),
  articleSection({id: 'critics', title: '8. Critics and end-of-year lists.', kicker: 'Ongoing', bodyHtml: join(critics)}),
  articleSection({id: 'forums', title: '9. Forums and communities.', kicker: 'Ongoing', bodyHtml: join(forums)}),
  articleSection({id: 'databases', title: '10. Discogs and RateYourMusic.', kicker: 'Ongoing', bodyHtml: join(databases)}),
  articleSection({id: 'algorithm', title: 'A note on the algorithm.', bodyHtml: `${join(algorithm.slice(0, 1))}${loopFigure}${join(algorithm.slice(1))}`}),
  articleFaq({items: faqItems, title: 'Finding new music: FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://www.nts.live" target="_blank" rel="noopener noreferrer">NTS Radio</a></li>
<li><a href="https://rinse.fm" target="_blank" rel="noopener noreferrer">Rinse FM</a></li>
<li><a href="https://www.thelotradio.com" target="_blank" rel="noopener noreferrer">The Lot Radio</a></li>
<li><a href="https://everynoise.com" target="_blank" rel="noopener noreferrer">Every Noise at Once</a></li>
<li><a href="https://daily.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp Daily</a></li>
<li><a href="https://www.discogs.com" target="_blank" rel="noopener noreferrer">Discogs</a></li>
<li><a href="https://rateyourmusic.com" target="_blank" rel="noopener noreferrer">RateYourMusic</a></li>
<li><a href="https://www.albumoftheyear.org" target="_blank" rel="noopener noreferrer">Album of the Year</a></li>
<li>Set counts and view figures are measured from this site's own catalogue of 62,877 recorded DJ sets across 37 channels, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'If the argument for buying music from the people who made it lands, this is where mine lives.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('how-to-find-new-music.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'How to Find New Music', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/how-to-find-new-music.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page find-new-music-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('how-to-find-new-music.html', html);
console.log('Built how-to-find-new-music.html');
