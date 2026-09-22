// Build grime-music-guide.html from grime-music-guide-draft.md.
//
// Intent: scene and genre understanding ("grime music" 3,600 a month worldwide
// on the 12-month average, "what is grime music" 700, "grime genre" 250,
// "grime artists" 150; owner-supplied Ahrefs, September 2026). The ranking
// pages give a generic definition of British rap; this one explains the
// instrumentals, the radio, the crews and the clashes, and says where the
// origin story is argued over. See grime-research.md.
//
// Listeners, not producers: no beat-making, no instrumentals to download.
// Two founding records, Eskimo and Pulse X, are also embedded on the bass music
// guide and the UK electronic timeline. Reused here with the owner's approval
// (2026-09-22): they are the records the producers section argues about.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('grime-music-guide-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/grime-music-guide';
const title = 'What Is Grime Music? Its Sound, History, Artists and Tracks';
const description = 'Grime is 140 BPM instrumentals, pirate radio, crews and clashes from East London. What it sounds like, where it came from, who made it and the records to hear.';
const date = '2026-09-22';
const dateLabel = '22 September 2026';

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

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const join = list => list.map(p => `<p>${inline(p)}</p>`).join('\n');
const render = text => join(paras(text));

const intro = paras(getSection('Introduction'));
const whatIs = paras(getSection('What is grime music'));
const sound = paras(getSection('What grime sounds like'));
const garage = paras(getSection('Out of garage'));
const producers = paras(getSection('Wiley, eskibeat and the producers'));
const radio = paras(getSection('Radio, crews and clashes'));
const naming = paras(getSection('What do you call it?'));
const breakthrough = paras(getSection('Dizzee, Kano and the first breakthrough'));
const popYears = paras(getSection('Form 696 and the pop years'));
const comeback = paras(getSection('The return, 2014 to 2017'));
const versus = paras(getSection('Grime, UK rap, drill and dubstep'));
const started = paras(getSection('Who started grime?'));
const now = paras(getSection('Grime now'));

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

// Images: Wikimedia Commons, downloaded, converted to webp, served locally and
// new to this guide. The UK electronic timeline's Dizzee Rascal photograph is
// deliberately not reused.
const wileyFigure = articleFigure({
  src: 'img/grime/wiley-flowdan-2005-1200.webp',
  srcset: 'img/grime/wiley-flowdan-2005-320.webp 320w, img/grime/wiley-flowdan-2005-1200.webp 1200w',
  width: 1200, height: 796,
  alt: 'Two Roll Deep MCs on a dark stage in 2005, one holding a microphone close in a white cap and silver vest',
  caption: 'Flowdan and Wiley of Roll Deep on stage in New York in August 2005. Wiley started the crew with friends from the estates of Bow. Photograph: kevin from south boston, CC BY-SA 2.0.',
  className: 'wide-archive-image'
});

const plaqueFigure = articleFigure({
  src: 'img/grime/jammer-plaque-leytonstone-1200.webp',
  srcset: 'img/grime/jammer-plaque-leytonstone-320.webp 320w, img/grime/jammer-plaque-leytonstone-1200.webp 1200w',
  width: 1200, height: 900,
  alt: 'A blue Waltham Forest Heritage plaque for Jammer, saying Lord of the MICS was founded in the basement of this house in 2003',
  caption: 'The Waltham Forest Heritage plaque on Jammer\'s family house in Leytonstone, put up in 2019. It dates Lord of the Mics to 2003; the first DVD came out in 2004. Photograph: Spudgun67, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

const skeptaFigure = articleFigure({
  src: 'img/grime/skepta-field-day-2016-1200.webp',
  srcset: 'img/grime/skepta-field-day-2016-320.webp 320w, img/grime/skepta-field-day-2016-1200.webp 1200w',
  width: 1200, height: 802,
  alt: 'Skepta rapping at the front of a festival main stage with DJs behind him',
  caption: 'Skepta on the main stage at Field Day in London in June 2016, a month after Konnichiwa came out. It won the Mercury Prize that September. Photograph: Jwslubbock, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

// Every video id below passed YouTube oEmbed on 2026-09-22 and is the label's,
// the artist's, VEVO or the Topic channel's own upload (media/grime.json).
const functionsListening = articleVideoCollection({
  label: 'The instrumental',
  description: 'A grime instrumental released as a record in its own right, in 2004. Stormzy used the same beat for "Shut Up" in 2015.',
  items: [articleVideoCard({youtubeId: '-uy0XIlnz4U', genre: 'GRIME INSTRUMENTAL, 2004', artist: 'Ruff Sqwad', title: 'Functions on the Low'})]
});

const garageListening = articleVideoCollection({
  label: 'Garage tipping over',
  description: 'Wiley\'s garage crew in 2000: MCs at the front, the vocal hooks gone, the bass getting darker.',
  items: [articleVideoCard({youtubeId: 'LWc5vFPAOmg', genre: 'GARAGE TO GRIME, 2000', artist: 'Pay As U Go', title: 'Know We'})]
});

const producersListening = articleVideoCollection({
  label: 'Producers first',
  description: 'The records the section describes: Wiley\'s eskibeat, the Pulse X bass pulse, Terror Danjah with four MCs on one beat, and the Leytonstone producer who started Lord of the Mics.',
  items: [
    articleVideoCard({youtubeId: 'LkdEOY0bf4U', genre: 'ESKIBEAT, 2002', artist: 'Wiley', title: 'Eskimo'}),
    articleVideoCard({youtubeId: '4bMQTU2iI1E', genre: 'GRIME, 2002', artist: 'Youngstar (Musical Mob)', title: 'Pulse X'}),
    articleVideoCard({youtubeId: 'SqdJuhC16Zw', genre: 'GRIME, 2003', artist: 'Terror Danjah', title: 'Cock Back'}),
    articleVideoCard({youtubeId: '_mxxpgNyV54', genre: 'GRIME, 2005', artist: 'Jammer', title: 'Murkle Man'})
  ]
});

const rinseSet = articleVideoCollection({
  label: 'Grime on the radio',
  description: 'The format grime grew up in, filmed: a Rinse FM grime show in 2014, with P Money, D Double E, Big Narstie and Jammer passing the microphone. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: '1wk3uOxQ5F4', genre: 'RADIO, 2014', artist: 'Rinse FM', title: 'P Money, D Double E, Big Narstie and Jammer'})]
});

const namingListening = articleVideoCollection({
  label: 'The naming argument',
  description: 'Wiley\'s 2004 single asking what the music should be called. It reached number 31.',
  items: [articleVideoCard({youtubeId: 'tvCaWKqyKjg', genre: 'GRIME, 2004', artist: 'Wiley', title: 'Wot Do U Call It?'})]
});

const dizzeeListening = articleVideoCollection({
  label: 'The breakthrough',
  description: 'The first single from Boy in da Corner, which won the Mercury Prize in 2003.',
  items: [articleVideoCard({youtubeId: 'YH0KWX2a8zY', genre: 'GRIME, 2003', artist: 'Dizzee Rascal', title: 'I Luv U'})]
});

const followersListening = articleVideoCollection({
  label: 'Through the door',
  description: 'Kano\'s breakthrough, and the eleven-MC single that reached number 11 and was banned from London venues.',
  items: [
    articleVideoCard({youtubeId: 'Mznv4ACjkzc', genre: 'GRIME, 2004', artist: 'Kano', title: "P's and Q's"}),
    articleVideoCard({youtubeId: 'nlmhlWECMUk', genre: 'GRIME, 2004', artist: 'Lethal Bizzle', title: 'Pow! (Forward)'})
  ]
});

const returnListening = articleVideoCollection({
  label: 'The return, 2014 to 2015',
  description: 'Three singles that brought grime back to the charts, each sounding closer to the early records than to the pop years.',
  items: [
    articleVideoCard({youtubeId: 'HNnrW54xPaY', genre: 'GRIME, 2014', artist: 'Meridian Dan', title: 'German Whip'}),
    articleVideoCard({youtubeId: '_xQKWnvtg6c', genre: 'GRIME, 2014', artist: 'Skepta', title: "That's Not Me"}),
    articleVideoCard({youtubeId: 'RqQGUJK7Na4', genre: 'GRIME, 2015', artist: 'Stormzy', title: 'Shut Up'})
  ]
});

const anniversarySet = articleVideoCollection({
  label: 'Twenty years on',
  description: 'Rinse FM marking twenty years of Boy in da Corner in 2023, with Dizzee Rascal, JME, P Money, Jammer and Kruz Leone. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'vuh71pbNFC8', genre: 'RADIO, 2023', artist: 'Rinse FM', title: '20 years of Boy in da Corner'})]
});

// The owner's own music (owner, 2026-09-21: at least two own players a guide).
const tempoTrack = ownTrackListening('look', 'Grime\'s tempo, somewhere else: future bass, glitch and breakbeat at 140 BPM. My own track.');
const ownMix = ownSetListening(0, 'en', 'A set that moves the way grime DJs do now: breaks through garage, bass music, techno and grime. My own mix.');

const versusTable = articleTable({
  headers: ['', 'Tempo', 'What the beat does', 'Where and when'],
  rows: [
    ['Grime', 'About 140 BPM', 'Sparse, syncopated drums, square-wave riffs, sub-bass, MCs in double time', 'East London, early 2000s'],
    ['UK garage', '130 to 135 BPM', 'Swung, skipping 2-step drums, sung vocal hooks', 'London, mid-1990s'],
    ['Dubstep', 'About 140 BPM, felt at half time', 'Mostly instrumental, space and sub-bass', 'South London, early 2000s'],
    ['UK drill', 'About 140 BPM, felt at half time', 'Sliding 808 bass, shuffled hi-hats, dark storytelling', 'South London, early 2010s, from Chicago drill'],
    ['UK rap', 'Anything', 'The broad category: grime, drill and slower hip-hop styles', 'Across Britain']
  ]
});

const tocItems = [
  {id: 'what-is', label: 'What is grime music'},
  {id: 'sound', label: 'What grime sounds like'},
  {id: 'garage', label: 'Out of garage'},
  {id: 'producers', label: 'Wiley, eskibeat and the producers'},
  {id: 'radio', label: 'Radio, crews and clashes'},
  {id: 'name', label: 'What do you call it?'},
  {id: 'breakthrough', label: 'Dizzee, Kano and the first breakthrough'},
  {id: 'pop-years', label: 'Form 696 and the pop years'},
  {id: 'return', label: 'The return, 2014 to 2017'},
  {id: 'versus', label: 'Grime, UK rap, drill and dubstep'},
  {id: 'who-started', label: 'Who started grime?'},
  {id: 'now', label: 'Grime now'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Grime music guide',
    title: 'Grime music: what it is, where it came from and how it sounds',
    deck: 'Cold 140 BPM instrumentals, pirate radio, crews and clashes from East London, and the arguments about who started it that have never been settled.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Grime music definition', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'More than British rap.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is grime music?', bodyHtml: join(whatIs)}),
  articleSection({id: 'sound', title: 'What grime sounds like.', kicker: '140 BPM', bodyHtml: `${join(sound)}${functionsListening}`}),
  articleSection({id: 'garage', title: 'Out of garage.', kicker: '1999 to 2001', bodyHtml: `${join(garage.slice(0, 2))}${garageListening}${join(garage.slice(2))}`}),
  articleSection({id: 'producers', title: 'Wiley, eskibeat and the producers.', kicker: '2001 to 2005', bodyHtml: `${join(producers.slice(0, 1))}${wileyFigure}${join(producers.slice(1, 3))}${producersListening}${join(producers.slice(3))}`}),
  articleSection({id: 'radio', title: 'Radio, crews and clashes.', bodyHtml: `${join(radio.slice(0, 1))}${rinseSet}${join(radio.slice(1, 3))}${plaqueFigure}${join(radio.slice(3))}`}),
  articleSection({id: 'name', title: 'What do you call it?', kicker: 'The name', bodyHtml: `${join(naming.slice(0, 2))}${namingListening}${join(naming.slice(2))}`}),
  articleSection({id: 'breakthrough', title: 'Dizzee, Kano and the first breakthrough.', kicker: '2003 to 2005', bodyHtml: `${join(breakthrough.slice(0, 1))}${dizzeeListening}${join(breakthrough.slice(1))}${followersListening}`}),
  articleSection({id: 'pop-years', title: 'Form 696 and the pop years.', kicker: '2005 to 2013', bodyHtml: join(popYears)}),
  articleSection({id: 'return', title: 'The return, 2014 to 2017.', bodyHtml: `${join(comeback.slice(0, 1))}${skeptaFigure}${join(comeback.slice(1, 3))}${returnListening}${join(comeback.slice(3))}`}),
  articleSection({id: 'versus', title: 'Grime, UK rap, drill and dubstep.', bodyHtml: `${join(versus.slice(0, 1))}${versusTable}${join(versus.slice(1))}${tempoTrack}`}),
  articleSection({id: 'who-started', title: 'Who started grime?', kicker: 'Disputed', bodyHtml: join(started)}),
  articleSection({id: 'now', title: 'Grime now.', bodyHtml: `${join(now.slice(0, 1))}${anniversarySet}${join(now.slice(1))}${ownMix}`}),
  articleFaq({items: faqItems, title: 'Grime music FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://www.fabriclondon.com/posts/hyperdub-archive-eski-beat-an-interview-with-wiley-part-1-october-2003" target="_blank" rel="noopener noreferrer">Hyperdub archive via fabric: Eski Beat, an interview with Wiley by Martin Clark (October 2003)</a></li>
<li><a href="https://daily.redbullmusicacademy.com/2015/05/wiley-feature/" target="_blank" rel="noopener noreferrer">Red Bull Music Academy Daily: Wiley, The Eski Boy, by Emma Warren (2015)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Grime_music" target="_blank" rel="noopener noreferrer">Wikipedia: Grime music</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lord_of_the_Mics" target="_blank" rel="noopener noreferrer">Wikipedia: Lord of the Mics</a></li>
<li><a href="https://en.wikipedia.org/wiki/Boy_in_da_Corner" target="_blank" rel="noopener noreferrer">Wikipedia: Boy in da Corner</a></li>
<li><a href="https://ra.co/news/40408" target="_blank" rel="noopener noreferrer">Resident Advisor: Form 696 scrapped by London's Metropolitan Police (2017)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Konnichiwa_(Skepta_album)" target="_blank" rel="noopener noreferrer">Wikipedia: Konnichiwa (Skepta album)</a></li>
<li><a href="https://djmag.com/news/grammys-2024-skrillex-flowdan-fred-agains-rumble-wins-best-danceelectronic-recording" target="_blank" rel="noopener noreferrer">DJ Mag: Rumble wins Best Dance/Electronic Recording at the 2024 Grammys</a></li>
<li>Set counts and artist frequencies are measured from this site's own catalogue of 62,824 recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Grime grew up beside jungle and garage on the same pirate stations. These sit on the breaks side of that family. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('grime-music-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Grime Music Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/grime.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page grime-page',
  structuredData, articleHtml
});

fs.writeFileSync('grime-music-guide.html', html);
console.log('Built grime-music-guide.html');
