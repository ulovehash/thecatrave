// Build trance-guide.html from trance-guide-draft.md.
//
// Intent: definition plus origin ("trance music" 10K-100K a month worldwide,
// "what is trance music" 100-1K with a +900% three-month/YoY change, "psy
// trance" 1K-10K; Google Ads Keyword Planner, September 2026, keywords/trance.json).
// The page keeps the Frankfurt origin story, the mainstream-2000s breakthrough
// and psytrance's separate Goa lineage apart, since a reader searching "psy
// trance" is not looking for A State of Trance history. See media/trance.json
// for the six-source figure pass behind who gets a section here.
//
// Listeners, not producers: nothing here explains how to build a trance lead
// or a psytrance bassline.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('trance-guide-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/trance-guide';
const title = 'What Is Trance Music? Origins, Artists and Sound';
const description = "Trance is a build, a breakdown and a drop, born in Frankfurt's clubs. How Armin van Buuren and Tiësto took it to festival mainstages, and how psytrance split off.";
const date = '2026-09-26';
const dateLabel = '26 September 2026';

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
const whatIs = paras(getSection('What is trance music'));
const origins = paras(getSection('Where trance came from'));
const decade = paras(getSection("Trance's mainstream decade"));
const styles = paras(getSection('Trance styles and subgenres'));
const family = paras(getSection('Trance, house and techno'));
const today = paras(getSection('Trance today'));

// FAQ questions come from the draft's "### " headings, so the visible copy and
// the structured data cannot drift apart. Split on the marker wherever it is:
// the first question sits at the very start of the section.
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

// Images: Wikimedia Commons, downloaded, converted to webp and served locally.
// None is shared with another guide. Licences checked against the Commons file
// pages on 2026-09-26: Armin van Buuren (CC BY 2.0), Sven Väth (CC BY-SA 3.0,
// VRTS-archived press accreditation), Paul van Dyk (CC BY-SA 2.0, FlickreviewR-
// confirmed), Tiësto (CC BY-SA 4.0, self-published).
const arminFigure = articleFigure({
  src: 'img/trance/armin-van-buuren-2017-1024.webp',
  srcset: 'img/trance/armin-van-buuren-2017-320.webp 320w, img/trance/armin-van-buuren-2017-1024.webp 1024w',
  width: 1024, height: 681,
  alt: 'Armin van Buuren playing to a large crowd at Armin Only Embrace in Kyiv, 2017',
  caption: 'Armin van Buuren at Armin Only Embrace in Kyiv, 2017. DJ Mag readers voted him the world\'s number one DJ five years running, 2007 to 2012. Photograph: Vitaliy from Kharkiv, Ukraine, CC BY 2.0.',
  className: 'wide-archive-image'
});

const vathFigure = articleFigure({
  src: 'img/trance/sven-vath-2014-1024.webp',
  srcset: 'img/trance/sven-vath-2014-320.webp 320w, img/trance/sven-vath-2014-1024.webp 1024w',
  width: 1024, height: 1024,
  alt: 'Sven Väth DJing at Mayday in 2014',
  caption: 'Sven Väth at Mayday, 2014. His Frankfurt clubs and labels, Eye Q and Harthouse, are credited with shaping the sound that became trance. Photograph: Krd, CC BY-SA 3.0.',
  className: 'square-image'
});

const vanDykFigure = articleFigure({
  src: 'img/trance/paul-van-dyk-2007-1024.webp',
  srcset: 'img/trance/paul-van-dyk-2007-320.webp 320w, img/trance/paul-van-dyk-2007-1024.webp 1024w',
  width: 1024, height: 1365,
  alt: 'Paul van Dyk mixing at a club in Australia, 2007',
  caption: 'Paul van Dyk in 2007. His MFS Records and Tresor and E-Werk residencies built out the Berlin side of the scene almost as fast as Frankfurt did. Photograph: Ben Novakovic, CC BY-SA 2.0.',
  className: 'portrait-image'
});

const tiestoFigure = articleFigure({
  src: 'img/trance/tiesto-2017-1024.webp',
  srcset: 'img/trance/tiesto-2017-320.webp 320w, img/trance/tiesto-2017-1024.webp 1024w',
  width: 1024, height: 765,
  alt: 'Tiësto playing live at Airbeat One Festival, 2017',
  caption: 'Tiësto at Airbeat One Festival, 2017. His set at the 2004 Athens Olympics opening ceremony put trance in front of the largest single audience the genre had reached. Photograph: Julia Keiser, CC BY-SA 4.0.',
  className: 'wide-archive-image'
});

// Every record below is the label's, the artist's or the broadcaster's own
// upload, checked by YouTube oEmbed on 2026-09-26 (media/trance.json).
const arminListening = articleVideoCollection({
  label: 'Armin van Buuren live',
  description: 'Armin van Buuren playing from Ushuaïa Ibiza for DJ Mag. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'z9KgKX4K3MM', genre: 'DJ MAG, 2025', artist: 'Armin van Buuren', title: 'Live From Ushuaïa Ibiza'})]
});

const vathListening = articleVideoCollection({
  label: 'Sven Väth live',
  description: 'Sven Väth playing for Boiler Room x Eristoff\'s "Into The Dark" in Marseille. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'nFS-qV6EuX0', genre: 'LIVE, 2018', artist: 'Sven Väth', title: 'Into The Dark, Marseille'})]
});

const vanDykListening = articleVideoCollection({
  label: 'Paul van Dyk live',
  description: 'Paul van Dyk playing the Mixmag Lab in Amsterdam. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'cx5QQFnY7ic', genre: 'MIXMAG, 2025', artist: 'Paul van Dyk', title: 'Mixmag Lab Amsterdam'})]
});

const tiestoListening = articleVideoCollection({
  label: 'Tiësto live',
  description: 'Tiësto playing a Beatport Live set for ReConnect. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'sBaY_AF6zA0', genre: 'BEATPORT LIVE, 2020', artist: 'Tiësto', title: 'ReConnect'})]
});

// The owner's own music inside the text, honestly placed: neither track claims
// trance lineage, only a real tempo or listening-context proximity.
const degenerationTrack = ownTrackListening('degeneration', 'Garage, dubstep and breaks in one remix, 132 BPM: inside trance\'s tempo range, built from an entirely different rhythm. My own remix.');
const ownMix = ownSetListening(0, 'en', 'For after the history: thirty tracks where breaks move between garage, bass music, techno and rave, if you want a different palette next. My own mix.');

const familyTable = articleTable({
  headers: ['Style', 'Rough tempo', 'What leads the track', 'A record to start with'],
  rows: [
    ['Trance', '130 to 145 BPM', 'A melodic build, a breakdown, then the drums return', 'Paul van Dyk, "For an Angel"'],
    ['Progressive house', '118 to 128 BPM', 'A groove built to loop, tension raised gradually, no hard drop', 'Sasha & Digweed, "Xpander"'],
    ['Techno', '120 to 135 BPM', 'Machine rhythm, little or no melody, minimal vocal', 'Jeff Mills, "The Bells"'],
    ['Psytrance', '140 to 150 BPM', 'A rolling 16th-note bassline under layered psychedelic sound design', 'Infected Mushroom, "The Legend of the Black Shawarma"']
  ]
});

const stylesTable = articleTable({
  headers: ['Trance subgenre', 'Also called', 'What sets it apart'],
  rows: [
    ['Uplifting trance', 'Euphoric trance', 'Major-key, anthemic melodies over the classic build-breakdown-drop'],
    ['Progressive trance', '', 'Longer, more gradual arrangements and a deeper low end'],
    ['Vocal trance', '', 'A sung hook foregrounded over the same structural bones'],
    ['Hard trance', '', 'Faster tempo and a harder kick, closer to techno'],
    ['Psytrance', 'Psychedelic trance', 'Goa lineage, a rolling 16th-note bassline, 140 to 150 BPM']
  ]
});

const tocItems = [
  {id: 'what-is', label: 'What is trance music'},
  {id: 'origins', label: 'Where trance came from'},
  {id: 'decade', label: "Trance's mainstream decade"},
  {id: 'styles', label: 'Trance styles and subgenres'},
  {id: 'family', label: 'Trance, house and techno'},
  {id: 'today', label: 'Trance today'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Trance guide',
    title: 'Trance: the build, the breakdown and the drop',
    deck: 'A Frankfurt club scene that named itself, a Berlin DJ who built out half the story before anyone had settled on a name for it, and two mainstream-era DJs whose rivalry filled festival mainstages for a decade.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Trance definition', bodyHtml: 'Trance is dance music at 130 to 145 BPM built around one repeated melody, a long breakdown and the return of the drums.', className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'The lights coming back on.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is trance music?', bodyHtml: join(whatIs)}),
  articleSection({id: 'origins', title: 'Where trance came from.', kicker: 'Frankfurt, early 1990s', bodyHtml: `${join(origins.slice(0, 2))}${vathFigure}${vathListening}${join(origins.slice(2))}${vanDykFigure}${vanDykListening}`}),
  articleSection({id: 'decade', title: "Trance's mainstream decade.", kicker: '1990s to 2000s', bodyHtml: `${join(decade.slice(0, 1))}${arminFigure}${arminListening}${join(decade.slice(1))}${tiestoFigure}${tiestoListening}${degenerationTrack}`}),
  articleSection({id: 'styles', title: 'Trance styles and subgenres.', bodyHtml: `${join(styles)}${stylesTable}`}),
  articleSection({id: 'family', title: 'Trance, house and techno.', bodyHtml: `${join(family)}${familyTable}`}),
  articleSection({id: 'today', title: 'Trance today.', bodyHtml: `${join(today)}${ownMix}`}),
  articleFaq({items: faqItems, title: 'Trance FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://en.wikipedia.org/wiki/Trance_music" target="_blank" rel="noopener noreferrer">Wikipedia: Trance music</a></li>
<li><a href="https://www.beatportal.com/articles/51518-beatports-definitive-history-of-trance" target="_blank" rel="noopener noreferrer">Beatportal: Beatport's definitive history of trance</a></li>
<li><a href="https://www.discogs.com/master/13879-Dance-2-Trance-We-Came-In-Peace" target="_blank" rel="noopener noreferrer">Discogs: Dance 2 Trance, We Came In Peace (1990)</a></li>
<li><a href="https://edmidentity.com/2023/12/13/germanys-trance-legacy-from-berlin-to-frankfurt/" target="_blank" rel="noopener noreferrer">EDM Identity: Germany's trance legacy, from Berlin to Frankfurt</a></li>
<li><a href="https://djmag.com/top100djs/2006" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 DJs 2006</a>, <a href="https://djmag.com/top100djs/2010" target="_blank" rel="noopener noreferrer">2010</a> and <a href="https://djmag.com/top100djs/2012" target="_blank" rel="noopener noreferrer">2012</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ti%C3%ABsto" target="_blank" rel="noopener noreferrer">Wikipedia: Tiësto</a></li>
<li><a href="https://en.wikipedia.org/wiki/Platipus_Records" target="_blank" rel="noopener noreferrer">Wikipedia: Platipus Records</a></li>
<li><a href="https://en.wikipedia.org/wiki/Psychedelic_trance" target="_blank" rel="noopener noreferrer">Wikipedia: Psychedelic trance</a></li>
<li><a href="https://djmag.com/djmag-top-100-djs" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 DJs</a></li>
<li>Set counts and artist frequencies are measured from this site's own catalogue of 64,242 recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Trance is not the sound I make, but its build-and-release instinct is one every dance genre borrows from somewhere. These sit on my own side of the family. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('trance-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Trance Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/trance-guide'),
  ogImage: 'https://thecatrave.com/img/og/trance.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page trance-page',
  structuredData, articleHtml
});

fs.writeFileSync('trance-guide.html', html);
console.log('Built trance-guide.html');
