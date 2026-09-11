// Build live-dj-sets.html from live-dj-sets-draft.md.
//
// A short history of the broadcasters that film DJ sets, from pirate radio to
// HÖR, plus the numbers from this site's own catalogue. The owner framed it on
// 2026-09-11: every platform like Boiler Room, not Boiler Room alone; named after
// the best category keyword that exists; a short history with no gossip, so the
// ownership section carries owners and dates and nothing else.
//
// Keywords: live sets 400, live dj sets 300, live dj set 250 a month worldwide
// (the SERP's weakest pages are DR3 and 5 RD, and its PAA asks "Where can I
// watch live DJ sets?"), plus the Boiler Room questions the best-sets page left
// free on purpose: what is boiler room 900, what is a boiler room set 400, what
// is a boiler room party 400. No platform-name template ("hör history", "cercle
// founder") has demand of its own. See keywords/live-dj-sets.json and
// live-dj-sets-research.md.
//
// Media rule for this page: every set is embedded from the platform's own
// channel, filmed in that platform's own room where the section is about the
// room, and none of them is a video the best-sets page already embeds.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleYoutubeEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('live-dj-sets-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/live-dj-sets';
const title = "Live DJ Sets: Where They're Filmed, From Boiler Room to HÖR";
const description = 'Where live DJ sets are filmed and streamed: a short history of Rinse, Boiler Room, NTS, The Lot, Cercle, Kiosk and HÖR, with numbers from 62,877 sets.';
const date = '2026-09-11';
const dateLabel = '11 September 2026';

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

// Each section is assembled from its paragraphs with media at fixed insertion
// points, so a paragraph count that drifts would slide a player against a
// photograph. Fail instead.
function section(heading, count) {
  const list = paras(getSection(heading));
  if (list.length !== count) throw new Error(`"${heading}" has ${list.length} paragraphs; media placement expects ${count}`);
  return list;
}

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

// Commons, downloaded and served from img/live-dj-sets/, none used elsewhere.
// No openly licensed photograph of Kiosk Radio's kiosk exists: the Commons
// files of the Parc Royal show the cast-iron bandstand, a different structure,
// so the section carries a player instead.
const rinseFigure = articleFigure({
  src: 'img/live-dj-sets/rinse-studio-900.webp',
  srcset: 'img/live-dj-sets/rinse-studio-320.webp 320w, img/live-dj-sets/rinse-studio-900.webp 900w',
  sizes: '(max-width: 760px) 100vw, 480px',
  width: 900, height: 1200,
  alt: 'A presenter laughing into a Rinse microphone in the Rinse FM studio, the Rinse logo on the wall behind her',
  caption: 'The Rinse studio in 2022, legal for eleven years by then and a long way from the kitchens and bedrooms it broadcast from as a pirate. Photograph: Khadejia, CC BY-SA 4.0.',
  className: 'portrait-image'
});

const redLightFigure = articleFigure({
  src: 'img/live-dj-sets/red-light-radio-612.webp',
  srcset: 'img/live-dj-sets/red-light-radio-320.webp 320w, img/live-dj-sets/red-light-radio-612.webp 612w',
  sizes: '(max-width: 760px) 100vw, 612px',
  width: 612, height: 612,
  alt: 'A DJ and a presenter in the red-lit Red Light Radio studio in Amsterdam, people walking past the window behind them',
  caption: 'Inside Red Light Radio on the Oudekerksplein: the DJ at the decks, the presenter at the microphone, and the street a pane of glass away. Photograph: Kars Alfrink, CC BY 2.0.',
  // 612px at source: shown at the 380px portrait width rather than enlarged.
  className: 'portrait-image'
});

const lotFigure = articleFigure({
  src: 'img/live-dj-sets/the-lot-radio-1200.webp',
  srcset: 'img/live-dj-sets/the-lot-radio-320.webp 320w, img/live-dj-sets/the-lot-radio-1200.webp 1200w',
  width: 1200, height: 800,
  alt: 'DJ Daria Kolomiec in the booth at The Lot Radio, its walls covered in stickers',
  caption: 'Daria Kolomiec in the booth at The Lot Radio in July 2022. The studio is half of a 20-foot shipping container; the other half sells coffee. Photograph: Ohwellimhere, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

// Measured from selector-data.json on 2026-09-11. Typed rather than computed so
// the table cannot drift away from the prose that quotes it when the catalogue
// refreshes. "First upload" is the year of the earliest set in the catalogue,
// not the year the broadcaster started, and the table says so.
const numbersTable = articleTable({
  headers: ['Broadcaster', 'Sets', 'First upload', 'Views', 'Most-watched set'],
  rows: [
    ['Boiler Room', '8,206', '2012', '1,774M', 'Solomun, Tulum, 2015 (76.2M)'],
    ['Cercle', '178', '2016', '984M', 'Boris Brejcha, Grand Palais, 2019 (68.4M)'],
    ['Mixmag', '1,943', '2012', '464M', 'Alison Wonderland, The Lab LA, 2015 (15.4M)'],
    ['HÖR', '9,708', '2019', '239M', '¥ØU$UK€ ¥UK1MAT$U, 2022 (5.4M)'],
    ['The Lot Radio', '9,998', '2017', '50M', 'Adam Port, 2024 (3.9M)'],
    ['Rinse FM', '895', '2013', '19M', 'Grime Show: P Money, D Double E, Big Narstie & Jammer, 2014 (1.0M)'],
    ['NTS Radio', '264', '2015', '13M', 'Aphex Twin at Field Day, 2017 (1.7M)'],
    ['Keep Hush', '1,517', '2016', '12M', '¥ØU$UK€ ¥UK1MAT$U, Tokyo, 2022 (0.9M)'],
    ['Kiosk Radio', '8,558', '2018', '8M', 'Acid Arab, 2020 (0.2M)']
  ].map(row => row.map(escapeHtml))
});

// Every id checked against YouTube's oEmbed title and channel on 2026-09-11.
const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));

// The page's one audio player, and the only recording on it from before
// anybody filmed a DJ: Rinse in 2001, still a pirate, uploaded by its
// co-founder Slimzee to his own SoundCloud (checked by oEmbed, 2026-09-11). It
// sits after the paragraph that says a pirate set was gone unless somebody
// taped it, because this is one that somebody did.
const pirateBand = articleListeningBand({
  platform: 'soundcloud',
  id: 'rinse-2001',
  kicker: 'Essential listening',
  title: 'Pay As U Go Cartel on Slimzee\'s show, Rinse FM, 2001. The full show.',
  description: 'A pirate broadcast from nine years before Rinse was legal, MCs over garage, uploaded by the station\'s co-founder himself.',
  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/103244834&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
  iframeTitle: 'Pay As U Go Cartel, Slew Show, Rinse FM 2001, on Slimzee\'s SoundCloud',
  fullBleed: true,
  tone: 'cyan'
});

const pirate = section('Before the camera: pirate radio', 6);
const pirateHtml = [
  join(pirate.slice(0, 2)), rinseFigure, join(pirate.slice(2, 3)), pirateBand, join(pirate.slice(3, 4)),
  youtube('1wk3uOxQ5F4', 'Grime Show: P Money, D Double E, Big Narstie and Jammer, on Rinse FM\'s YouTube channel, 2014'),
  join(pirate.slice(4, 5)), redLightFigure, join(pirate.slice(5))
].join('\n');

const boiler = section('Boiler Room: what it is, and what a Boiler Room set is', 5);
const boilerHtml = [
  join(boiler.slice(0, 3)),
  youtube('kiy05zewUpg', 'Floating Points, five-hour set, Boiler Room New York, on Boiler Room\'s YouTube channel'),
  join(boiler.slice(3))
].join('\n');

const radio = section('Radio with a camera: NTS, The Lot Radio and Kiosk Radio', 6);
const radioHtml = [
  join(radio.slice(0, 3)), lotFigure, join(radio.slice(3, 4)),
  youtube('oC969p-rxfo', 'Nina Kraviz at The Lot Radio, 21 March 2017, on The Lot Radio\'s YouTube channel'),
  join(radio.slice(4, 5)),
  youtube('kumeF99xnoM', 'Acid Arab at Kiosk Radio, Brussels, 23 January 2020, on Kiosk Radio\'s YouTube channel'),
  join(radio.slice(5))
].join('\n');

const other = section('Other ways to film a set: The Lab, Cercle and Keep Hush', 5);
const otherHtml = [
  join(other.slice(0, 1)),
  youtube('f0coQKqxzU0', 'Black Coffee in The Lab LDN, on Mixmag\'s YouTube channel, 2014'),
  join(other.slice(1, 2)),
  youtube('ttFxqD8qWYg', 'Cercle: the first show, To Van Kao in Derek Barbolla\'s living room, Paris, on Cercle\'s YouTube channel'),
  join(other.slice(2)),
  youtube('zzoxXIHJcFI', 'Tasha, all-vinyl jungle set, Keep Hush Live: 1985 Music Takeover 2, on Keep Hush\'s YouTube channel')
].join('\n');

const lockdown = section('2020: HÖR, and the year every club became a stream', 4);
const lockdownHtml = [
  join(lockdown.slice(0, 2)),
  youtube('QA0EdK2RjPg', 'Disclosure, Boiler Room: Streaming From Isolation #13, on Boiler Room\'s YouTube channel, 2020'),
  join(lockdown.slice(2, 3)),
  youtube('GG2IQguY-J0', 'Ellen Allien at HÖR Berlin, 4 April 2020, on HÖR\'s YouTube channel'),
  join(lockdown.slice(3))
].join('\n');

const owners = section('Who owns the platforms now', 2);

const numbers = section('Live DJ sets by the numbers', 4);
const numbersHtml = [
  join(numbers.slice(0, 1)), numbersTable, join(numbers.slice(1, 2)),
  youtube('vqz8c4ZP3Wg', 'Boris Brejcha at the Grand Palais in Paris for Cercle, 2019, on Cercle\'s YouTube channel'),
  join(numbers.slice(2))
].join('\n');

const watch = section('Where to watch live DJ sets', 2);

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: join(paras(body))};
});

const tocItems = [
  {id: 'pirate-radio', label: 'Before the camera: pirate radio'},
  {id: 'boiler-room', label: 'Boiler Room'},
  {id: 'radio-with-a-camera', label: 'NTS, The Lot Radio and Kiosk Radio'},
  {id: 'other-formats', label: 'The Lab, Cercle and Keep Hush'},
  {id: 'hor-and-2020', label: '2020 and HÖR'},
  {id: 'owners', label: 'Who owns the platforms now'},
  {id: 'numbers', label: 'Live DJ sets by the numbers'},
  {id: 'where-to-watch', label: 'Where to watch live DJ sets'},
  {id: 'faq', label: 'FAQ'}
];

const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Live DJ sets',
    title: 'Live DJ Sets: The Platforms That Film Them',
    deck: 'Pirate radio, a webcam in London, a shipping container in Brooklyn and a white-tiled room in Berlin: who films DJ sets, since when, and what 62,877 of their recordings add up to.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Live DJ sets', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Where to put the camera.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'pirate-radio', title: 'Before the camera: pirate radio.', bodyHtml: pirateHtml}),
  articleSection({id: 'boiler-room', title: 'Boiler Room: what it is, and what a Boiler Room set is.', bodyHtml: boilerHtml}),
  articleSection({id: 'radio-with-a-camera', title: 'Radio with a camera: NTS, The Lot Radio and Kiosk Radio.', bodyHtml: radioHtml}),
  articleSection({id: 'other-formats', title: 'Other ways to film a set: The Lab, Cercle and Keep Hush.', bodyHtml: otherHtml}),
  articleSection({id: 'hor-and-2020', title: '2020: HÖR, and the year every club became a stream.', bodyHtml: lockdownHtml}),
  articleSection({id: 'owners', title: 'Who owns the platforms now.', bodyHtml: join(owners)}),
  articleSection({id: 'numbers', title: 'Live DJ sets by the numbers.', kicker: 'Measured', bodyHtml: numbersHtml}),
  articleSection({id: 'where-to-watch', title: 'Where to watch live DJ sets.', bodyHtml: join(watch)}),
  articleFaq({items: faqItems, title: 'Live DJ sets FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://en.wikipedia.org/wiki/Rinse_FM" target="_blank" rel="noopener noreferrer">Wikipedia: Rinse FM</a></li>
<li><a href="https://en.wikipedia.org/wiki/Red_Light_Radio" target="_blank" rel="noopener noreferrer">Wikipedia: Red Light Radio</a></li>
<li><a href="https://ra.co/news/72625" target="_blank" rel="noopener noreferrer">Resident Advisor: Amsterdam's Red Light Radio will close in June</a></li>
<li><a href="https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29" target="_blank" rel="noopener noreferrer">Wikipedia: Boiler Room (music broadcaster)</a></li>
<li><a href="https://boilerroom.tv/playlist/streaming-from-isolation/" target="_blank" rel="noopener noreferrer">Boiler Room: Streaming From Isolation</a></li>
<li><a href="https://en.wikipedia.org/wiki/NTS_Radio" target="_blank" rel="noopener noreferrer">Wikipedia: NTS Radio</a></li>
<li><a href="https://en.wikipedia.org/wiki/The_Lot_Radio" target="_blank" rel="noopener noreferrer">Wikipedia: The Lot Radio</a></li>
<li><a href="https://ra.co/news/33465" target="_blank" rel="noopener noreferrer">Resident Advisor: The Lot Radio opens in a shipping container in Brooklyn</a></li>
<li><a href="https://www.kioskradio.com/about" target="_blank" rel="noopener noreferrer">Kiosk Radio: About</a></li>
<li><a href="https://mixmag.net/sound-collective/the-lab" target="_blank" rel="noopener noreferrer">Mixmag: The Lab</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cercle_%28company%29" target="_blank" rel="noopener noreferrer">Wikipedia: Cercle (company)</a></li>
<li><a href="https://www.billboard.com/articles/news/dance/8519925/cercle-interview-2019/" target="_blank" rel="noopener noreferrer">Billboard: How party streaming platform Cercle hosts shows at the Eiffel Tower, a remote Bolivian salt flat and more</a></li>
<li><a href="https://dmy.co/features/inside-keep-hush-uk-music-members-club" target="_blank" rel="noopener noreferrer">DMY: Inside Keep Hush, the UK's number one music members' club</a></li>
<li><a href="https://www.adam-audio.com/blog/hoer-berlin/" target="_blank" rel="noopener noreferrer">ADAM Audio: HÖR Berlin</a></li>
<li><a href="https://ra.co/news/85346" target="_blank" rel="noopener noreferrer">Resident Advisor: HÖR acquired by Berlin-based music services company 99Solutions</a></li>
<li><a href="https://www.gl-systemhaus.de/en/blog/one-year-united-we-stream" target="_blank" rel="noopener noreferrer">One year of lockdown, one year of United We Stream</a></li>
<li>Set counts, first-upload years and view counts are measured from this site's own catalogue of 62,877 recorded DJ sets from 37 broadcasters' YouTube channels, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Jungle was heard on pirate radio before anyone filmed a DJ. These are mine, from the breaks and jungle side. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('live-dj-sets.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Live DJ Sets', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/live-dj-sets.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page live-dj-sets-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('live-dj-sets.html', html);
console.log('Built live-dj-sets.html');
