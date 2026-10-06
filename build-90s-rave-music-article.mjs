// Build 90s-rave-music.html from 90s-rave-music-draft.md.
//
// Intent: "90s rave music", "1990's rave music" and "90 rave music" (each 1K to
// 10K a month, Keyword Planner, 6 October 2026; TOPIC-DOSSIERS.md). Listener
// intent. The page is a map of the decade by scene and date, not a list of
// "best" records: the competitors are curated lists (Bandcamp Daily's deep
// cuts, Mixmag's US anthems, Radio X's best-of). The 1987 to 1990 UK boom is the
// acid house guide's and the jungle that grew out of hardcore is the jungle
// guide's; both are linked, not repeated. See keywords/90s-rave-music.json and
// media/90s-rave-music.json for the evidence.
//
// Listeners, not producers: nothing here explains how any record was made.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleVideoCard, articleVideoCollection,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('90s-rave-music-draft.md', 'utf8');
const canonical = 'https://thecatrave.com/90s-rave-music';
const title = '90s Rave Music: The Records, the Scenes and the Law';
const description = '90s rave music was never one genre: British hardcore, Belgian techno, Dutch gabber and the 1994 law aimed at raves, with a record to hear for each.';
const date = '2026-10-06';
const dateLabel = '6 October 2026';

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

// A paragraph that is exactly {{NAME}} becomes the media block registered under
// NAME; everything else is prose. Table paragraphs are dropped (the table is
// built from data below so its cells stay in one place).
function body(heading, media = {}) {
  return paras(getSection(heading)).map(p => {
    const marker = p.match(/^\{\{([A-Z0-9_]+)\}\}$/);
    if (marker) {
      if (!(marker[1] in media)) throw new Error(`No media registered for {{${marker[1]}}} in ${heading}`);
      return media[marker[1]];
    }
    if (p.startsWith('|')) return '';
    return `<p>${inline(p)}</p>`;
  }).join('\n');
}
const render = text => paras(text).map(p => `<p>${inline(p)}</p>`).join('\n');

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const answer = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: answer.replace(/\s+/g, ' '), answerHtml: render(answer)};
});

// Every YouTube player is the label's, the artist's or the auto-generated
// Topic channel's own upload, checked by YouTube oEmbed on 2026-10-06
// (media/90s-rave-music.json).
const lfoListening = articleVideoCollection({
  label: 'LFO, 1990',
  description: 'The Leeds record that Warp released as WAP 5 on 26 July 1990. The upload is Warp\'s own official video.',
  items: [articleVideoCard({youtubeId: 's-1Y2EqThyQ', genre: 'BLEEP, 1990', artist: 'LFO', title: 'LFO'})]
});

const charlyListening = articleVideoCollection({
  label: 'Charly, 1991',
  description: 'The Prodigy\'s second release, number 3 in the UK. The upload is the band\'s own official video.',
  items: [articleVideoCard({youtubeId: 'cSTBFZ-To2E', genre: 'TOYTOWN RAVE, 1991', artist: 'The Prodigy', title: 'Charly'})]
});

const weAreIeListening = articleVideoCollection({
  label: 'East London, 1991',
  description: 'The record often credited with laying the foundations for jungle. From the artist\'s Topic channel: the original extended edit, in a 2022 digital release on Hooj Choons.',
  items: [articleVideoCard({youtubeId: '_gx7Uv3sl5A', genre: 'EARLY JUNGLE ROOTS, 1991', artist: 'Lennie De Ice', title: 'We Are I.E.'})]
});

const mentasmListening = articleVideoCollection({
  label: 'Mentasm, 1991',
  description: 'Second Phase on R&S Records. The upload is the label\'s own.',
  items: [articleVideoCard({youtubeId: 'IHKYX9ETwUg', genre: 'TECHNO, 1991', artist: 'Second Phase', title: 'Mentasm'})]
});

const t99Listening = articleVideoCollection({
  label: 'Anasthasia, 1991',
  description: 'The Belgian duo\'s UK top 15 hit. From the Topic channel, taken from the 2013 compilation The Sound of Belgium.',
  items: [articleVideoCard({youtubeId: '5UaMBZQW50Q', genre: 'TECHNO, 1991', artist: 'T99', title: 'Anasthasia'})]
});

const poingListening = articleVideoCollection({
  label: 'Rotterdam, 1992',
  description: 'From Rotterdam Records\' early catalogue, uploaded by the label\'s channel.',
  items: [articleVideoCard({youtubeId: 'lQ6jZgMaZk4', genre: 'GABBER, 1992', artist: 'Rotterdam Termination Source', title: 'Poing'})]
});

const energyListening = articleVideoCollection({
  label: 'Energy Flash, 1990',
  description: 'The opening entry on Mixmag\'s list, first issued by R&S on Beltram Vol. 1. From the Topic channel, supplied to YouTube by R&S Records.',
  items: [articleVideoCard({youtubeId: 'BDj73pGQ6pE', genre: 'TECHNO, 1990', artist: 'Joey Beltram', title: 'Energy Flash'})]
});

const marchFigure = articleFigure({
  src: 'img/90s-rave-music/criminal-justice-bill-march-1994-800.webp',
  srcset: 'img/90s-rave-music/criminal-justice-bill-march-1994-320.webp 320w, img/90s-rave-music/criminal-justice-bill-march-1994-800.webp 800w',
  width: 800, height: 600,
  alt: 'A dense crowd in Trafalgar Square with banners and placards during the march against the Criminal Justice Bill',
  caption: 'A march against the Criminal Justice Bill, Trafalgar Square, London, 24 July 1994. Photograph: Altlondon, CC BY-SA 3.0.',
  className: 'wide-archive-image'
});

// The owner's own music, each clearly labelled as a present-day track and a
// paragraph away from other media. Neither is a 90s record, and the copy says so.
const breaksTrack = ownTrackListening('protect-ya-breaks', 'An artist break, not a 90s record: progressive breaks at 128 BPM with rap vocals and a downtempo switch-up, made now. My own track.');
const berlinTrack = ownTrackListening('berlin-race-1909', 'Also not a 90s record: breakbeat drums under dub techno space, made now. My own track.');

const strandTable = articleTable({
  headers: ['Strand', 'Years', 'Where', 'A record to start with'],
  rows: [
    ['Bleep', '1990', 'Leeds, Sheffield', 'LFO, "LFO" (1990)'],
    ['Toytown rave', '1991', 'Britain', 'The Prodigy, "Charly" (1991)'],
    ['Early jungle roots', '1991', 'East London', 'Lennie De Ice, "We Are I.E." (1991)'],
    ['Belgian and New York techno', '1991', 'Belgium, New York', 'Second Phase, "Mentasm" (1991)'],
    ['Gabber', '1992', 'Rotterdam', 'Rotterdam Termination Source, "Poing" (1992)'],
    ['American rave anthems', '1990 to 1999', 'United States', 'Joey Beltram, "Energy Flash" (1990)']
  ]
});

const tocItems = [
  {id: 'what-is', label: 'What is 90s rave music'},
  {id: 'britain', label: 'Hardcore in Britain'},
  {id: 'belgium', label: 'Belgium and New York'},
  {id: 'gabber', label: 'The Netherlands: gabber'},
  {id: 'law', label: 'Free parties and the law'},
  {id: 'usa', label: 'The United States'},
  {id: 'split', label: 'After 1992: the split'},
  {id: 'listen', label: 'How to listen now'}
];

const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;
const whatIs = paras(getSection('What is 90s rave music'));

// The first paragraph is the answer in the hero banner; the section body starts
// from the second so the two never share a sentence.
const whatIsHtml = `${render(whatIs[1])}${strandTable}`;

const articleHtml = [
  articleHero({
    kicker: '90s rave music',
    title: '90s rave music: the records, the scenes and the law',
    deck: 'A bleep record from Leeds, a toytown hit, Belgian techno, Rotterdam gabber and a field in Worcestershire. What was played at raves between 1990 and 1999, and what the law made of it.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: '90s rave music definition', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'One night, six sounds.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is 90s rave music?', bodyHtml: whatIsHtml}),
  articleSection({id: 'britain', title: '1990\'s rave music: hardcore in Britain.', kicker: '1990 to 1992', bodyHtml: body('1990\'s rave music: hardcore in Britain', {LFO: lfoListening, CHARLY: charlyListening, WE_ARE_IE: weAreIeListening})}),
  articleSection({id: 'belgium', title: 'Belgium and New York: "Mentasm" and "Anasthasia".', kicker: '1991', bodyHtml: body('Belgium and New York: "Mentasm" and "Anasthasia"', {MENTASM: mentasmListening, T99: t99Listening})}),
  articleSection({id: 'gabber', title: 'The Netherlands: gabber.', kicker: '1992', bodyHtml: body('The Netherlands: gabber', {POING: poingListening})}),
  articleSection({id: 'law', title: 'Free parties and the law.', kicker: '1992 to 1994', bodyHtml: body('Free parties and the law', {CJB_FIGURE: marchFigure})}),
  articleSection({id: 'usa', title: 'The United States.', kicker: '1990 to 1999', bodyHtml: body('The United States', {ENERGY_FLASH: energyListening})}),
  articleSection({id: 'split', title: 'After 1992: the split.', bodyHtml: body('After 1992: the split', {PROTECT_YA_BREAKS: breaksTrack})}),
  articleSection({id: 'listen', title: 'How to listen now.', bodyHtml: body('How to listen now', {BERLIN_RACE: berlinTrack})}),
  articleFaq({items: faqItems, title: '90s rave music FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://daily.bandcamp.com/lists/90s-rave-deep-cuts-list" target="_blank" rel="noopener noreferrer">Bandcamp Daily: '90s Rave Music: The Deep Cuts, by Joe Muggs (2025)</a></li>
<li><a href="https://www.radiox.co.uk/features/x-lists/best-90s-rave-tracks/" target="_blank" rel="noopener noreferrer">Radio X: The best 90s rave tracks</a></li>
<li><a href="https://mixmag.net/feature/20-best-us-rave-anthems-90s" target="_blank" rel="noopener noreferrer">Mixmag: The 20 best US rave anthems of the 90s</a></li>
<li><a href="https://909originals.com/2020/07/26/interview-how-lfo-made-lfo-909originals-catches-up-with-gez-varley-on-the-30th-anniversary-of-a-techno-classic/" target="_blank" rel="noopener noreferrer">909originals: How LFO made "LFO", with Gez Varley (2020)</a></li>
<li><a href="https://musicweek.com/talent/read/full-throttle-the-prodigy-s-chart-history-in-numbers/075523" target="_blank" rel="noopener noreferrer">Music Week: The Prodigy's chart history in numbers</a></li>
<li><a href="https://en.wikipedia.org/wiki/Charly_(song)" target="_blank" rel="noopener noreferrer">Wikipedia: Charly (song)</a></li>
<li><a href="https://en.wikipedia.org/wiki/We_Are_I.E." target="_blank" rel="noopener noreferrer">Wikipedia: We Are I.E.</a></li>
<li><a href="https://909originals.com/2018/10/04/throwback-thursday-shut-up-and-dance-ravin-im-ravin-may-1992/" target="_blank" rel="noopener noreferrer">909originals: Shut Up and Dance, "Raving I'm Raving" (2018)</a></li>
<li><a href="https://daily.redbullmusicacademy.com/2014/05/key-tracks-mundo-muzique-on-mentasm" target="_blank" rel="noopener noreferrer">Red Bull Music Academy Daily: Key Tracks, Mundo Muzique on Second Phase's "Mentasm" (2014)</a></li>
<li><a href="https://en.wikipedia.org/wiki/T99" target="_blank" rel="noopener noreferrer">Wikipedia: T99</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rotterdam_Termination_Source" target="_blank" rel="noopener noreferrer">Wikipedia: Rotterdam Termination Source</a> and <a href="https://en.wikipedia.org/wiki/Gabber" target="_blank" rel="noopener noreferrer">Gabber</a></li>
<li><a href="https://en.wikipedia.org/wiki/Castlemorton_Common_Festival" target="_blank" rel="noopener noreferrer">Wikipedia: Castlemorton Common Festival</a> and <a href="https://909originals.com/2018/05/22/castlemorton-how-a-field-in-rural-worcestershire-changed-the-party-scene-forever-may-1992/" target="_blank" rel="noopener noreferrer">909originals: Castlemorton (2018)</a></li>
<li><a href="https://www.legislation.gov.uk/ukpga/1994/33/section/63/enacted" target="_blank" rel="noopener noreferrer">legislation.gov.uk: Criminal Justice and Public Order Act 1994, section 63 as enacted</a> and <a href="https://www.legislation.gov.uk/ukpga/1994/33/section/63" target="_blank" rel="noopener noreferrer">as amended</a></li>
<li><a href="https://en.wikipedia.org/wiki/Music_for_the_Jilted_Generation" target="_blank" rel="noopener noreferrer">Wikipedia: Music for the Jilted Generation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Breakbeat_hardcore" target="_blank" rel="noopener noreferrer">Wikipedia: Breakbeat hardcore</a>, citing Simon Reynolds, <em>Energy Flash</em> (1998)</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks, neither a 90s record. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('90s-rave-music.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: '90s Rave Music', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  alternates: alternatesFor('/90s-rave-music'),
  ogImage: 'https://thecatrave.com/img/og/90s-rave-music.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page rave-music-page',
  structuredData, articleHtml
});

fs.writeFileSync('90s-rave-music.html', html);
console.log('Built 90s-rave-music.html');
