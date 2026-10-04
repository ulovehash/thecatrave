// Build best-clubs-in-europe.html from best-clubs-in-europe-draft.md.
//
// Intent: "best clubs in europe" and the terms around it (Keyword Planner,
// bucketed ranges only; keywords/best-clubs-in-europe.json). A Europe-only
// roundup. The "best clubs in the world" and "best nightclubs in the world"
// terms are answered in one short FAQ item and are not targeted further.
// "best clubbing cities in europe" belongs to best-clubbing-cities-in-europe.
//
// Facts come from DJ Mag's Top 100 Clubs 2026 (page, article and profile
// pages, read 2026-10-04), club sites, Berliner Zentrum Industriekultur, the
// Tresor Foundation, Gray Area, Mixmag, Time Out, Resident Advisor, Visit Paris
// Region and In Your Pocket. No Wikipedia.
//
// Maintenance: refresh the DJ Mag table each April when the new poll lands.
// Rex Club (DJ Mag 2022 profile) and Lux Frágil (2021 profile) rest on older
// profiles and should be re-checked first. The [UNVRS] capacity is left out
// because DJ Mag's profile and article disagree.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-clubs-in-europe-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/best-clubs-in-europe';
const title = 'Best Clubs in Europe: 23 Nightclubs Worth the Trip';
const description = 'The best clubs in Europe by country, from Berghain and fabric to Pacha, with sets to hear from several rooms.';
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
  src: `img/best-clubs-in-europe/${name}-1200.webp`,
  srcset: `img/best-clubs-in-europe/${name}-320.webp 320w, img/best-clubs-in-europe/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});
const figures = {
  'tresor-2008': fig('tresor-2008', 1200, 981,
    'The lit blue exterior wall at night of the former power station building in Berlin that houses the Tresor club',
    'The building that houses Tresor in Berlin, 4 September 2008. Photograph: Boca Dorada, CC BY-SA 2.0.'),
  'hi-ibiza-2022': fig('hi-ibiza-2022', 1200, 800,
    'A DJ playing in the Club Room at Hï Ibiza with a crowd holding up phone lights',
    'The Club Room at Hï Ibiza, 12 July 2022. Photograph: Juliamgmt, CC BY-SA 4.0.'),
  'amnesia-2013': fig('amnesia-2013', 1200, 900,
    'Sven Väth at the decks at Amnesia in Ibiza with the crowd in front of the booth',
    'Sven Väth playing his Cocoon party at Amnesia, Ibiza, September 2013. Photograph: Nsf12, CC BY-SA 3.0.'),
  'tenax-2016': fig('tenax-2016', 1200, 800,
    'The packed crowd inside Tenax in Florence with Fatboy Slim playing',
    'Inside Tenax in Florence with Fatboy Slim playing, 12 March 2016. Photograph: Luca Bergami, CC BY-SA 4.0.'),
  'rex-club-2011': fig('rex-club-2011', 1200, 800,
    'Nicolas Jaar playing live at Rex Club in Paris in a haze of smoke and stage light',
    'Nicolas Jaar live at Rex Club, Paris, April 2011. Photograph: Pascal Montary, CC BY 2.0.'),
  'cavo-paradiso-2016': fig('cavo-paradiso-2016', 1200, 900,
    'Cavo Paradiso on its cliff above the sea in Mykonos, seen from the water',
    'Cavo Paradiso, Mykonos, 19 June 2016. Photograph: Zigomitros Athanasios, CC BY-SA 4.0.'),
  'revelin-2010': fig('revelin-2010', 1200, 797,
    'The Revelin Fortress and its surroundings in Dubrovnik seen from the old harbour',
    'The Revelin Fortress, Dubrovnik, 29 March 2010. Photograph: LBM1948, CC BY-SA 4.0.')
};

// Sets from this site's catalogue (selector-data.json), oEmbed-checked on
// 2026-10-04. The Sven Väth Pacha set is also on the Pacha and Ibiza guides;
// disclosed in the review.
const videos = {
  spain: articleVideoCollection({
    label: 'Recorded at Hï and Pacha',
    description: 'A 2019 CamelPhat restream presented by Hï Ibiza, and Sven Väth\'s Cocoon night at Pacha in 2018.',
    items: [
      articleVideoCard({youtubeId: '8IsNzsE_8v8', genre: 'Hï Ibiza, 2019', artist: 'DJ Mag', title: 'Hï Ibiza presents CamelPhat, restream from 2019'}),
      articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, Pacha 2018', artist: 'Mixmag', title: 'Sven Väth. Cocoon. Pacha 2018.'})
    ]
  }),
  uk: articleVideoCollection({
    label: 'fabric and Ministry of Sound',
    description: 'Josh Caffe at fabric for Beatport, and a Ministry of Sound night for DJ Mag.',
    items: [
      articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'fabric London Unlocked', artist: 'Beatport', title: 'Josh Caffe at fabric'}),
      articleVideoCard({youtubeId: '7r68Nx38hlY', genre: 'Ministry of Sound', artist: 'DJ Mag', title: 'Dance For Stevie at Ministry of Sound'})
    ]
  }),
  techno: articleVideoCollection({
    label: 'A listening guide to Tresor',
    description: 'An NTS radio guide to Tresor classics, not recorded at the club.',
    items: [
      articleVideoCard({youtubeId: 'OcU74Xc6ko8', genre: 'Tresor classics', artist: 'NTS', title: 'Tresor Club Techno and Electro Classics'})
    ]
  })
};

const tableLabel = headers => {
  if (headers[1] === 'City') return 'The 23 clubs in this guide';
  if (headers[1] === 'Listed capacity') return 'European clubs by listed capacity';
  return 'DJ Mag Top 100 Clubs 2026, European entries';
};
const blocks = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
const renderBlock = block => {
  const figure = block.match(/^!\[[^\]]*\]\(figure:([a-z0-9-]+)\)$/);
  if (figure) return figures[figure[1]];
  const video = block.match(/^!\[[^\]]*\]\(videos:([a-z0-9-]+)\)$/);
  if (video) return videos[video[1]];
  if (block.startsWith('### ')) return `<h3>${inline(block.slice(4))}</h3>`;
  if (block.startsWith('|')) {
    const rows = block.split('\n').filter((_, i) => i !== 1).map(line => line.split('|').slice(1, -1).map(cell => inline(cell.trim())));
    return articleTable({label: tableLabel(rows[0]), headers: rows[0], rows: rows.slice(1)});
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
  {id: 'nightclubs', label: 'Best nightclubs'},
  {id: 'dance-clubs', label: 'By country'},
  {id: 'top-clubs', label: 'By size'},
  {id: 'europe-clubs', label: 'Entry and phones'},
  {id: 'dj-mag', label: 'DJ Mag Top 100'},
  {id: 'best-techno-clubs', label: 'Techno clubs'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const answer = getSection('Answer').replace(/\s+/g, ' ');
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articleHtml = [
  articleHero({
    kicker: 'Club guide, Europe',
    title: 'Best clubs in Europe: 23 nightclubs worth the trip',
    deck: 'Twenty-three European clubs in ten countries, from Berghain and Tresor to Pacha and Cavo Paradiso, with what each room is and the sets to hear.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Europe', bodyHtml: inline(answer), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Choosing among 23 rooms.', bodyHtml: join(sec('Introduction')), className: 'article-intro'}),
  articleSection({id: 'nightclubs', title: 'Best nightclubs in Europe', bodyHtml: join(sec('Best nightclubs in Europe'))}),
  articleSection({id: 'dance-clubs', title: 'Best dance clubs in Europe, by country', bodyHtml: join(sec('Best dance clubs in Europe, by country'))}),
  articleSection({id: 'top-clubs', title: 'Top clubs in Europe by size', bodyHtml: join(sec('Top clubs in Europe by size'))}),
  articleSection({id: 'europe-clubs', title: 'Europe clubs: entry, phones and age', bodyHtml: join(sec('Europe clubs: entry, phones and age'))}),
  articleSection({id: 'dj-mag', title: 'DJ Mag Top 100 Clubs 2026: which European clubs are on it', bodyHtml: `${join(sec('DJ Mag Top 100 Clubs 2026: which European clubs are on it'))}${ownSetListening(0)}`}),
  articleSection({id: 'best-techno-clubs', title: 'Best techno clubs', bodyHtml: join(sec('Best techno clubs'))}),
  articleFaq({items: faqItems, title: 'Best clubs in Europe FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li>Rankings, capacities, openings and club profiles, read on 4 October 2026: ${ext('https://djmag.com/top100clubs', 'DJ Mag Top 100 Clubs')} (2026 list and profile pages), the ${ext('https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', 'DJ Mag 2026 results article')} (15 April 2026), the ${ext('https://djmag.com/top100clubs/2021/85/Lux-Fragil', 'Lux Frágil 2021 profile')} and the DJ Mag 2022 Rex Club profile. Ranks 63 to 100 were also checked against the ibiza1radio.com mirror of the list.</li>
<li>Berghain: ${ext('https://berghain.berlin/', 'berghain.berlin')}, ${ext('https://industriekultur.berlin/ort/berghain/', 'Berliner Zentrum Industriekultur')} and ${ext('https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', 'Mixmag on the sound system')} (18 October 2023).</li>
<li>Tresor: ${ext('https://tresor.foundation/en/geschichte/', 'Tresor Foundation history page')}.</li>
<li>Ibiza: ${ext('https://www.pacha.com/', 'pacha.com')}, ${ext('https://grayarea.co/magazine/dc10-ibiza-the-first-ever-residencies', 'Gray Area on DC-10')}, ${ext('https://djmag.com/news/amnesia-ibiza-announces-50th-anniversary-celebrations-2026', 'DJ Mag on Amnesia\'s 50th year')} and ${ext('https://www.hiibiza.com/', 'hiibiza.com')}.</li>
<li>fabric: ${ext('https://www.fabriclondon.com/faq', 'fabriclondon.com')}, ${ext('https://ra.co/news/36182', 'Resident Advisor')} (September 2016), Time Out (November 2016) and Mixmag.</li>
<li>Rex Club opening hours and first electronic night: Visit Paris Region. Prozak 2.0: ${ext('https://www.inyourpocket.com/krakow/prozak-20_18565v', 'In Your Pocket Kraków')}.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Away from the dance floor, the music I make myself. Buying one supports my work directly.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-europe.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Best Clubs in Europe', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/best-clubs-in-europe'),
  ogImage: 'https://thecatrave.com/img/og/best-clubs-in-europe.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page best-clubs-in-europe-page',
  structuredData, articleHtml
});

fs.writeFileSync('best-clubs-in-europe.html', html);
console.log('Built best-clubs-in-europe.html');
