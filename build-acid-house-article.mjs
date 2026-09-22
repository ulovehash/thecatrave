// Build acid-house-guide.html from acid-house-guide-draft.md.
//
// Intent: definition plus origin ("acid house" 5,900 a month worldwide, "what
// is acid house?" 6,300, "acid house music" 500; owner-supplied Ahrefs,
// September 2026). House music in general (58,000) is a different intent with
// its own SERP and is not targeted. The page keeps three things apart that the
// ranking pages run together: the TB-303 sound, the Chicago records that named
// it, and the British movement that borrowed the name. See
// acid-house-research.md for the brief and evidence.
//
// Listeners, not producers: nothing here explains how to programme a 303.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('acid-house-guide-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/acid-house-guide';
const title = "What Is Acid House? From Chicago's TB-303 to the UK Rave Boom";
const description = 'Acid house is Chicago house built on a Roland TB-303 line twisted by hand. How Phuture made it, why it is called acid, and how Britain turned it into rave.';
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
const whatIs = paras(getSection('What is acid house'));
const sound = paras(getSection('What acid house sounds like'));
const chicago = paras(getSection('Chicago: Phuture and Acid Tracks'));
const around = paras(getSection('The records around it'));
const naming = paras(getSection('Why it is called acid house'));
const india = paras(getSection('Was acid house invented in India?'));
const britain = paras(getSection('How acid house reached Britain'));
const backlash = paras(getSection('The Second Summer of Love and the backlash'));
const after = paras(getSection('After 1990: acid everywhere'));
const family = paras(getSection('Acid house, house and techno'));

// FAQ questions come from the draft's "### " headings, so the visible copy and
// the structured data cannot drift apart. Split on the marker wherever it is:
// the first question sits at the very start of the section.
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

// Images: Wikimedia Commons, downloaded, converted to webp and served locally.
// None is shared with another guide; the UK electronic timeline carries a
// different TB-303 photograph (the panel shot).
const tb303Figure = articleFigure({
  src: 'img/acid-house/roland-tb303-1982-1200.webp',
  srcset: 'img/acid-house/roland-tb303-1982-320.webp 320w, img/acid-house/roland-tb303-1982-1200.webp 1200w',
  width: 1200, height: 800,
  alt: 'Close-up of a Roland TB-303 Bass Line panel, with the accent knob and the words Computer Controlled',
  caption: 'A TB-303 made in 1982, still working. Roland stopped making the machine in 1984, which is why a Chicago producer could buy one second-hand for $40. Photograph: Alexandre Dulaunoy, CC BY-SA 2.0.',
  className: 'wide-archive-image'
});

const pierreFigure = articleFigure({
  src: 'img/acid-house/dj-pierre-2013-960.webp',
  srcset: 'img/acid-house/dj-pierre-2013-320.webp 320w, img/acid-house/dj-pierre-2013-960.webp 960w',
  width: 960, height: 639,
  alt: 'DJ Pierre, left, and Felix Da Housecat standing in front of a painted mural in 2013',
  caption: 'DJ Pierre, left, with Felix Da Housecat, his partner in Pierre\'s Pfantasy Club, in 2013. Pierre turned the knobs on "Acid Tracks". Photograph: TheArches, CC BY 2.0.',
  className: 'wide-archive-image'
});

const geraldFigure = articleFigure({
  src: 'img/acid-house/a-guy-called-gerald-2014-1200.webp',
  srcset: 'img/acid-house/a-guy-called-gerald-2014-320.webp 320w, img/acid-house/a-guy-called-gerald-2014-1200.webp 1200w',
  width: 1200, height: 800,
  alt: 'A Guy Called Gerald behind his equipment on stage under purple light',
  caption: 'A Guy Called Gerald at the Royal Festival Hall in 2014. He recorded "Voodoo Ray" in Manchester in 1988 and was a founding member of 808 State. Photograph: Victor Frankowski for Southbank Centre, CC BY 2.0.',
  className: 'wide-archive-image'
});

// Every record below is the label's, the artist's or the Topic channel's own
// upload, checked by YouTube oEmbed on 2026-09-22 (media/acid-house.json).
const acidTracksListening = articleVideoCollection({
  label: 'Acid Tracks',
  description: 'The record that named the genre, as Trax released it in 1987: one drum pattern and one 303 line, with the tone moving for twelve minutes.',
  items: [articleVideoCard({youtubeId: 'yKHGv6Es610', genre: 'ACID HOUSE, 1987', artist: 'Phuture', title: 'Acid Tracks'})]
});

const phutureSet = articleVideoCollection({
  label: 'Phuture live',
  description: 'Phuture playing live for Boiler Room in Chicago in 2014. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: '05oNuVLYFgw', genre: 'LIVE, 2014', artist: 'Phuture', title: 'Boiler Room Chicago'})]
});

const aroundListening = articleVideoCollection({
  label: 'Before and around Acid Tracks',
  description: 'The first 303 record on vinyl, and the one DJ Pierre calls the first funky acid record.',
  items: [
    articleVideoCard({youtubeId: 'vq0OQ1wKLbY', genre: 'CHICAGO, 1986', artist: 'Sleezy D', title: "I've Lost Control"}),
    articleVideoCard({youtubeId: '_-MsJ-T1YhA', genre: 'ACID HOUSE, 1987', artist: 'Armando', title: 'Land of Confusion'})
  ]
});

const indiaListening = articleVideoCollection({
  label: 'Bombay, 1982',
  description: 'The opening track of Synthesizing: Ten Ragas to a Disco Beat, uploaded by Bombay Connection, the label that reissued it in 2010. A TB-303 sliding through a morning raga over a TR-808.',
  items: [articleVideoCard({youtubeId: 'NUqnPYwoiF4', genre: 'RAGA AND DISCO, 1982', artist: 'Charanjit Singh', title: 'Raga Bhairav'})]
});

const britainListening = articleVideoCollection({
  label: 'British acid, 1988',
  description: 'The two records most often called the first British acid house track, from London and from Manchester.',
  items: [
    articleVideoCard({youtubeId: 'yCNpciIixbk', genre: 'ACID HOUSE, 1988', artist: 'Baby Ford', title: 'Oochy Koochy'}),
    articleVideoCard({youtubeId: 'j7vxHOCeiQ4', genre: 'ACID HOUSE, 1988', artist: 'A Guy Called Gerald', title: 'Voodoo Ray'})
  ]
});

const panicListening = articleVideoCollection({
  label: 'The charts and the ban',
  description: 'The number 3 record the BBC dropped in October 1988, and the one that brought acid back to Top of the Pops two months later.',
  items: [
    articleVideoCard({youtubeId: 'ZrscxwrVRQ8', genre: 'ACID HOUSE, 1988', artist: 'D Mob', title: 'We Call It Acieed'}),
    articleVideoCard({youtubeId: '30Xi9HMrovk', genre: 'ACID HOUSE, 1988', artist: 'Stakker', title: 'Humanoid'})
  ]
});

const hardfloorListening = articleVideoCollection({
  label: 'Acid after acid house',
  description: 'Cologne, 1992: the record that put the 303 back in European clubs after the British panic.',
  items: [articleVideoCard({youtubeId: 'Un4CeV_l3pI', genre: 'ACID TECHNO, 1992', artist: 'Hardfloor', title: 'Acperience 1'})]
});

const geraldSet = articleVideoCollection({
  label: 'A Guy Called Gerald live',
  description: 'Gerald playing machines live for Boiler Room in 2013. From this site\'s catalogue of recorded DJ sets.',
  items: [articleVideoCard({youtubeId: 'zhr0_fadXxY', genre: 'LIVE, 2013', artist: 'A Guy Called Gerald', title: 'Boiler Room'})]
});

// The owner's own music inside the text (owner, 2026-09-21: at least two own
// players a guide, counting the mixes), each a paragraph away from other media.
const breaksTrack = ownTrackListening('protect-ya-breaks', 'Where Britain took the rhythm next: breaks at 128 BPM, close to acid house tempo. My own track.');
const ownMix = ownSetListening(0, 'en', 'For after the history: thirty tracks where breaks move between garage, bass music, techno and rave. My own mix.');

const familyTable = articleTable({
  headers: ['Style', 'Rough tempo', 'What leads the track', 'A record to start with'],
  rows: [
    ['Chicago house', '118 to 128 BPM', 'Drum machines with piano, strings, vocals or a conventional bassline', 'Marshall Jefferson, "Move Your Body"'],
    ['Acid house', '118 to 128 BPM', 'A TB-303 line in front, its filter moving all the time', 'Phuture, "Acid Tracks"'],
    ['Detroit techno', '120 to 135 BPM', 'Machine rhythm and synthesiser lines, little or no vocal', 'Rhythim Is Rhythim, "Strings of Life"'],
    ['Acid techno and acid trance', '130 to 145 BPM', 'The 303 over harder, faster techno drums', 'Hardfloor, "Acperience 1"']
  ]
});

const tocItems = [
  {id: 'what-is', label: 'What is acid house'},
  {id: 'sound', label: 'What it sounds like'},
  {id: 'chicago', label: 'Chicago: Phuture and Acid Tracks'},
  {id: 'records', label: 'The records around it'},
  {id: 'name', label: 'Why it is called acid house'},
  {id: 'india', label: 'Was it invented in India?'},
  {id: 'britain', label: 'How it reached Britain'},
  {id: 'backlash', label: 'The Second Summer of Love and the backlash'},
  {id: 'after', label: 'After 1990'},
  {id: 'family', label: 'Acid house, house and techno'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Acid house guide',
    title: 'Acid house: the TB-303 sound and how it reached Britain',
    deck: 'A bass machine nobody wanted, three friends in Chicago, a DJ who played their tape four times in one night, and a British youth movement that borrowed the name.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Acid house definition', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A machine nobody wanted.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is acid house?', bodyHtml: join(whatIs)}),
  articleSection({id: 'sound', title: 'What acid house sounds like.', kicker: 'The TB-303', bodyHtml: `${join(sound.slice(0, 3))}${tb303Figure}${join(sound.slice(3))}`}),
  articleSection({id: 'chicago', title: 'Chicago: Phuture and "Acid Tracks".', kicker: '1985 to 1987', bodyHtml: `${join(chicago.slice(0, 1))}${pierreFigure}${join(chicago.slice(1, 5))}${acidTracksListening}${join(chicago.slice(5))}${phutureSet}`}),
  articleSection({id: 'records', title: 'The records around it.', kicker: 'Chicago, 1986 to 1988', bodyHtml: `${join(around.slice(0, 3))}${aroundListening}${join(around.slice(3))}`}),
  articleSection({id: 'name', title: 'Why it is called acid house.', kicker: 'The name', bodyHtml: join(naming)}),
  articleSection({id: 'india', title: 'Was acid house invented in India?', kicker: 'Charanjit Singh, 1982', bodyHtml: `${join(india.slice(0, 2))}${indiaListening}${join(india.slice(2))}`}),
  articleSection({id: 'britain', title: 'How acid house reached Britain.', kicker: '1987 to 1989', bodyHtml: `${join(britain.slice(0, 4))}${geraldFigure}${join(britain.slice(4))}${britainListening}`}),
  articleSection({id: 'backlash', title: 'The Second Summer of Love and the backlash.', kicker: '1988 to 1990', bodyHtml: `${join(backlash.slice(0, 3))}${panicListening}${join(backlash.slice(3))}${breaksTrack}`}),
  articleSection({id: 'after', title: 'After 1990: acid everywhere.', bodyHtml: `${join(after.slice(0, 1))}${hardfloorListening}${join(after.slice(1))}${geraldSet}`}),
  articleSection({id: 'family', title: 'Acid house, house and techno.', bodyHtml: `${join(family)}${familyTable}${ownMix}`}),
  articleFaq({items: faqItems, title: 'Acid house FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://daily.redbullmusicacademy.com/2012/12/dj-pierre-interview/" target="_blank" rel="noopener noreferrer">Red Bull Music Academy Daily: The Story of Acid House, as told by DJ Pierre (2012)</a></li>
<li><a href="https://djmag.com/content/game-changers-phuture-acid-tracks" target="_blank" rel="noopener noreferrer">DJ Mag: Game Changers, Phuture "Acid Tracks" (2014)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Acid_Tracks" target="_blank" rel="noopener noreferrer">Wikipedia: Acid Tracks</a></li>
<li><a href="https://en.wikipedia.org/wiki/Synthesizing:_Ten_Ragas_to_a_Disco_Beat" target="_blank" rel="noopener noreferrer">Wikipedia: Synthesizing: Ten Ragas to a Disco Beat</a></li>
<li><a href="https://en.wikipedia.org/wiki/Roland_TB-303" target="_blank" rel="noopener noreferrer">Wikipedia: Roland TB-303</a></li>
<li><a href="https://en.wikipedia.org/wiki/Second_Summer_of_Love" target="_blank" rel="noopener noreferrer">Wikipedia: Second Summer of Love</a></li>
<li><a href="https://en.wikipedia.org/wiki/We_Call_It_Acieed" target="_blank" rel="noopener noreferrer">Wikipedia: We Call It Acieed</a></li>
<li><a href="https://www.vice.com/en/article/history-smiley-face-acid-house-rave-culture/" target="_blank" rel="noopener noreferrer">Vice: A brief history of the smiley face, rave culture's most ubiquitous symbol</a></li>
<li><a href="https://mixmag.net/feature/the-history-of-acid-house-in-100-tracks" target="_blank" rel="noopener noreferrer">Mixmag: The history of acid house in 100 tracks</a></li>
<li>Set counts and artist frequencies are measured from this site's own catalogue of 62,877 recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Acid house handed Britain the rave, and the rave handed it breakbeat. These sit on that side of the family. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('acid-house-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Acid House Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/acid-house.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page acid-house-page',
  structuredData, articleHtml
});

fs.writeFileSync('acid-house-guide.html', html);
console.log('Built acid-house-guide.html');
