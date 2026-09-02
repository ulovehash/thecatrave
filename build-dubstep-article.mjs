import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articleListeningCollection,
  articlePage, articleSection, articleSources, articleStructuredData, articleTable,
  articleTrackEmbed, articleYoutubeEmbed, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('dubstep-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/dubstep-guide';
const title = 'What Is Dubstep? Origins, Sound, and Why One Word Covers Two Genres';
const description = 'Dubstep began in south London record shops and 200 capacity basements, then split into two genres sharing one name. The history, the sound, the scenes and where it is now.';
const date = '2026-09-01';
const dateLabel = '1 September 2026';

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

function getSubsection(sectionText, heading) {
  const start = sectionText.indexOf(`### ${heading}`);
  if (start < 0) throw new Error(`Missing subsection: ${heading}`);
  const bodyStart = sectionText.indexOf('\n', start) + 1;
  const next = sectionText.indexOf('\n### ', bodyStart);
  return sectionText.slice(bodyStart, next < 0 ? sectionText.length : next).trim();
}

function paragraphs(text) {
  return text.split(/\n\s*\n/).map(block => block.trim()).filter(block => {
    if (!block) return false;
    if (/^###?\s/.test(block)) return false;
    return true;
  });
}

const p = value => `<p>${inline(value)}</p>`;
const render = text => paragraphs(text).map(p).join('');
const join = list => list.map(p).join('');
const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: `${label} on YouTube`
});

// Editorial sections from the approved draft.
const introEnd = draft.indexOf('\n## DUBSTEP DEFINITION');
const intro = draft.slice(draft.indexOf('\n', draft.indexOf('# What is dubstep?')) + 1, introEnd).trim();
const definition = paragraphs(getSection('DUBSTEP DEFINITION'));
const croydon = paragraphs(getSection('Croydon, Big Apple and a sound with no name'));
const built = paragraphs(getSection('How dubstep is built: 140 BPM, half-time and dubstep bass'));
const scene = paragraphs(getSection('FWD>>, DMZ and the economics of a dubplate'));
const split = paragraphs(getSection('How one word came to mean two things'));
const bristol = paragraphs(getSection('Bristol: the line that never broke'));
const berlin = paragraphs(getSection('Berlin: dubstep meets techno'));
const subgenres = paragraphs(getSection('The subgenres and what they actually mean'));
const now = paragraphs(getSection('Where dubstep is now'));

const faqText = getSection('Dubstep FAQ');
const faqHeadings = [...faqText.matchAll(/^### (.+)$/gm)].map(match => match[1]);
const faqItems = faqHeadings.map(question => {
  const answer = paragraphs(getSubsection(faqText, question)).join(' ');
  return {question, answer, answerHtml: p(answer)};
});

const tocItems = [
  ['croydon', 'Croydon and Big Apple'],
  ['sound', 'How dubstep is built'],
  ['scene', 'FWD>>, DMZ and dubplates'],
  ['split', 'How one word came to mean two things'],
  ['bristol', 'Bristol'],
  ['berlin', 'Berlin'],
  ['subgenres', 'The subgenres explained'],
  ['now', 'Where dubstep is now'],
  ['faq', 'Dubstep FAQ']
].map(([id, label]) => ({id, label}));

// Figures. Both assets are local and unused by any other article.
const dubplateLathe = articleFigure({
  src: 'img/dubstep/dubplate-lathe.webp',
  srcset: 'img/dubstep/dubplate-lathe-320.webp 320w, img/dubstep/dubplate-lathe.webp 961w',
  width: 961, height: 540,
  alt: 'A vinyl cutting lathe with an acetate disc on the platter',
  caption: 'Thirty pounds, about fifty plays, then the grooves were gone. Scarcity was not a marketing strategy, it was a physical property of the format.',
  className: 'wide-archive-image'
});

// Archive images, downloaded and served locally as responsive webp so the article
// does not depend on third-party hotlink or anti-bot behaviour. Openly licensed
// sources carry their credit in the caption.
const bigApple = articleFigure({
  src: 'img/dubstep/big-apple-records.webp',
  srcset: 'img/dubstep/big-apple-records-320.webp 320w, img/dubstep/big-apple-records.webp 720w',
  width: 720, height: 482,
  alt: 'The shopfront of Big Apple Records in Croydon around the year 2000',
  caption: 'Big Apple Records, Croydon, around 2000. The people serving, the people hanging around and the people making the records were largely the same people. Photograph: Bigapplerecords, CC BY-SA 3.0.',
  className: 'wide-archive-image'
});

const fwdBerlin = articleFigure({
  src: 'img/dubstep/fwd-berlin.webp',
  srcset: 'img/dubstep/fwd-berlin-320.webp 320w, img/dubstep/fwd-berlin.webp 980w',
  width: 980, height: 650,
  alt: 'Sgt Pokes and Loefah at an FWD night in Berlin in 2006',
  caption: 'Sgt Pokes and Loefah running FWD in Berlin, 2006. The same MC and the same selector as Brixton, thirteen hundred kilometres east. Photograph by Stephan Machac.',
  className: 'wide-archive-image'
});

const soundSystem = articleFigure({
  src: 'img/dubstep/sound-system.webp',
  srcset: 'img/dubstep/sound-system-320.webp 320w, img/dubstep/sound-system.webp 1200w',
  width: 1200, height: 800,
  alt: 'A hand-built speaker stack towering over the street at Notting Hill Carnival',
  caption: 'A sound system going up on the street at Notting Hill Carnival. The Caribbean sound-system tradition dubstep grew out of never stopped assembling, and the deep side never had to be revived to stay in the room. Photograph: Jay Bergesen, CC BY 2.0.',
  className: 'wide-archive-image'
});

const burialPortrait = articleFigure({
  src: 'img/dubstep/burial-portrait.webp',
  srcset: 'img/dubstep/burial-portrait-320.webp 320w, img/dubstep/burial-portrait.webp 703w',
  width: 703, height: 504,
  alt: 'Portrait of Burial, the south London producer behind Untrue',
  caption: 'Burial stayed anonymous through a Mercury nomination. The scene protected that, which tells you what it valued in 2007.',
  className: 'square-image'
});

// Every section that describes an era, an artist or a sound carries exact tracks in the
// site-wide Essential listening geometry, using the shared dated listening collection.
// Spotify carries the row where a canonical master exists; the dubplate and vinyl-only
// records that were never released to streaming keep a YouTube player in the same block.
// Long-form documentaries are not exact tracks, so they stay plain embeds.
const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const croydonListening = articleListeningCollection({
  id: 'croydon-listening', tone: 'cyan',
  title: 'Before and after the name.',
  description: 'The sound before and just after it had a name. Three years apart, both made within a few miles of the same record shop.',
  items: listeningItems([
    {year: 'Tempa, 2002', artist: 'Horsepower Productions', title: 'Gorgon Sound', spotify: '2eKcQqAYex36Eju94neF4l',
      note: 'The dub-facing garage that fed the sound: heavy on delay and bassline, made before anyone needed a word for it.'},
    {year: 'Tempa, 2005', artist: 'Skream', title: 'Midnight Request Line', youtube: 'vJGXRQ9vBoU',
      note: 'The Croydon sound with the name attached. Written above Big Apple Records, it carried dubstep to dancefloors that had never heard of the shop.'}
  ])
});

const builtListening = articleListeningCollection({
  id: 'built-listening', tone: 'yellow',
  title: 'Space and wobble at one tempo.',
  description: 'The two poles of the technique. One record is almost entirely space, the other is almost entirely wobble, and both sit at the same tempo with the same drum pattern.',
  items: listeningItems([
    {year: 'DMZ, 2006', artist: 'Loefah', title: 'Mud', youtube: 'd_KtXqmKCFE',
      note: 'Almost entirely space. The kick and snare sit far apart, the sub-bass does the rest, and very little else happens: half-time in its barest form.'},
    {year: 'Tempa, 2008', artist: 'Benga and Coki', title: 'Night', youtube: 'FHDvybumHAk',
      note: 'The wobble as the whole record. The same 140 and the same drum pattern as Mud, with a low-frequency oscillator turning the bass into the hook.'}
  ])
});

const dmzListening = articleListeningCollection({
  id: 'dmz-listening', tone: 'cyan',
  title: 'The DMZ years, and after.',
  description: 'What the DMZ years sounded like, and what came out of them. The first was written for a room with a system in it. The second was written for headphones at four in the morning.',
  items: listeningItems([
    {year: 'DMZ, 2006', artist: 'Digital Mystikz', title: 'Anti War Dub', youtube: '--jr22La8Nk',
      note: 'Written for a room with a system in it: meditative repetition, dub sirens and weight you are meant to feel rather than hear.'},
    {year: 'Hyperdub, 2007', artist: 'Burial', title: 'Archangel', spotify: '2agb1CPPGWXqXnrKn6cx7u',
      note: 'The same vocabulary taken indoors. Untrue earned a Mercury nomination while its maker stayed anonymous.'}
  ])
});

const splitListening = articleListeningCollection({
  id: 'split-listening', tone: 'coral',
  title: 'One tempo, opposite priorities.',
  description: 'The distance in one place. Both records sit at the same tempo with the same drum pattern, and the second moves the weight from sub-bass into distorted mid-range. The first was made by a founder of DMZ.',
  items: listeningItems([
    {year: 'DMZ, 2008', artist: 'Coki', title: 'Spongebob', youtube: 'cIpc817U_R4',
      note: 'The harder direction, made inside the scene. Dazed put it first on their list of tracks that define brostep, and it came from a founder of DMZ.'},
    {year: '2010', artist: 'Skrillex', title: 'Scary Monsters and Nice Sprites', spotify: '4rwpZEcnalkuhPyGkEdhu0',
      note: 'The weight moved from sub-bass into distorted mid-range, where a festival field can hear it. Three Grammy awards followed in 2012.'}
  ])
});

const bristolListening = articleListeningCollection({
  id: 'bristol-listening', tone: 'cyan',
  title: 'The Bristol line.',
  description: 'Bristol heard dub before it heard dubstep, and it shows: slower, heavier, less interested in the drop than in the pressure around it.',
  items: listeningItems([
    {year: 'Tectonic, 2006', artist: 'Pinch', title: 'Qawwali', spotify: '36tSNnMctCGaxQp0JVGBLC',
      note: 'Tectonic in its first year: slower and stranger than London, more indebted to dub and techno than to garage, and still the template for the deep side.'}
  ])
});

const berlinListening = articleListeningCollection({
  id: 'berlin-listening', tone: 'yellow',
  title: 'Where the two cities meet.',
  description: 'The record where dubstep and Berlin techno meet. A Skull Disco track rebuilt by one of techno’s most idiosyncratic producers, running past eighteen minutes.',
  items: listeningItems([
    {year: 'Skull Disco, 2007', artist: 'Shackleton', title: 'Blood On My Hands, Ricardo Villalobos Apocalypso Now Mix', youtube: 'KQr6m2l2J-Y',
      note: 'Dubstep treated as raw material for a techno set: the arrangement stretches past eighteen minutes and never resolves into a drop.'}
  ])
});

const subgenreListening = articleListeningCollection({
  id: 'subgenre-listening', tone: 'paper',
  title: 'Two of the later branches.',
  description: 'Two of the later branches, so the table above has a sound attached to it rather than only a definition.',
  items: listeningItems([
    {year: 'Riddim', artist: 'Bommer and Crowell', title: 'Yasuo', youtube: 'fP2O6JcnJJI',
      note: 'Riddim: minimal, repetitive and triplet based, descended from brostep rather than from the original sound.'},
    {year: '2014', artist: 'Seven Lions featuring Kerli', title: 'Worlds Apart', youtube: 'ULqdjtDI-bs',
      note: 'Melodic dubstep: the tempo kept, the darkness discarded, with trance and progressive chord work in its place.'}
  ])
});

const dubstepClassics = articleListeningBand({
  platform: 'spotify',
  id: 'dubstep-classics-playlist',
  kicker: 'Essential listening',
  title: 'Dubstep classics: extended playlist.',
  description: 'A wider route through the records most people mean when they say dubstep, weighted towards the louder side the table above tries to sort out.',
  src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4arVIN5Cg4U?utm_source=generator',
  iframeTitle: 'Dubstep Classics playlist on Spotify',
  fullBleed: true,
  tone: 'yellow'
});

const bassweight = youtube('YVcX0Oc5j5E', 'Bassweight, a dubstep documentary');
const homiesHateSkrillex = youtube('-hLlVVKRwk0', 'All My Homies Hate Skrillex by Timbah.On.Toast');

const thecatraveTrack = articleListeningBand({
  platform: 'soundcloud',
  id: 'dubstep-thecatrave-remix',
  kicker: 'thecatrave',
  title: 'Mylene Farmer, Degeneration. Electronica, breaks and dubstep remix.',
  description: 'An example of the same techniques working outside the genre they came from: half-time weight and breaks under a French pop vocal, which is what happens once a genre becomes a set of tools.',
  src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/thecatrave/mylene-farmer-degeneration')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
  iframeTitle: 'Mylene Farmer, Degeneration remix by thecatrave on SoundCloud',
  fullBleed: true,
  tone: 'cyan'
});

const subgenreRows = [
  ['Dubstep (original, later called deep)', '2002 onward', '140 BPM, half-time drums, sub-bass, space', 'The source'],
  ['Brostep', '2010 onward', 'Distorted mid-range, festival dynamics, aggressive drops', 'Same tempo and drum pattern, opposite frequency priority'],
  ['Riddim', 'Mid 2010s onward', 'Minimal, repetitive, heavily triplet based', 'Descends from brostep, not from the original sound'],
  ['Melodic dubstep', 'Early 2010s onward', 'Emotional chord work, trance and progressive influence', 'Borrows the tempo, discards the darkness'],
  ['Chillstep', 'Early 2010s onward', 'Soft, ambient, vocal led', 'A streaming category more than a scene'],
  ['Future garage', 'Late 2000s onward', 'Garage swing, dubstep sound design, restrained', 'A sibling developing in parallel'],
  ['Post-dubstep', '2010 onward', 'Producers who used the vocabulary and left', 'A label applied later by writers, not a scene anyone joined']
];

// Media rhythm. Every figure is separated from every player by at least one paragraph,
// no figure follows a heading directly, and no two figures are adjacent.
const croydonHtml = `${join(croydon.slice(0, 2))}${bigApple}${join(croydon.slice(2, 4))}${croydonListening}${join(croydon.slice(4))}`;

const builtHtml = `${join(built)}${builtListening}`;

const sceneHtml = `${join(scene.slice(0, 3))}${dubplateLathe}${join(scene.slice(3, 5))}${bassweight}${join(scene.slice(5, 7))}${dmzListening}${join(scene.slice(7))}${burialPortrait}`;

const splitHtml = `${join(split.slice(0, 3))}${splitListening}${join(split.slice(3, 5))}${homiesHateSkrillex}${join(split.slice(5))}`;

const bristolHtml = `${join(bristol.slice(0, 2))}${bristolListening}${join(bristol.slice(2))}`;

const berlinHtml = `${join(berlin.slice(0, 2))}${fwdBerlin}${join(berlin.slice(2))}${berlinListening}`;

// The shared genre-table class carries the styling, as on the breakbeat, jungle and UK guides.
const subgenresHtml = `${join(subgenres)}${articleTable({
  headers: ['Term', 'Roughly when', 'What it means', 'Relationship to the original'],
  rows: subgenreRows
})}${subgenreListening}`;

const nowHtml = `${join(now.slice(0, 2))}${soundSystem}${join(now.slice(2, 3))}${thecatraveTrack}${join(now.slice(3))}${dubstepClassics}`;

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'Dubstep guide',
    title: 'What is dubstep?',
    deck: 'One word covers two very different musics. How a sound built in a Croydon record shop split in half, and what happened to the version that never went away.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'Dubstep definition', bodyHtml: inline(definition[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Two answers to the same question.', bodyHtml: render(intro), className: 'article-intro'}),
  articleSection({id: 'croydon', title: 'Croydon, Big Apple and a sound with no name.', kicker: 'Origins', bodyHtml: croydonHtml}),
  articleSection({id: 'sound', title: 'How dubstep is built: 140 BPM, half-time and dubstep bass.', bodyHtml: builtHtml, className: 'tone-cyan'}),
  articleSection({id: 'scene', title: 'FWD>>, DMZ and the economics of a dubplate.', bodyHtml: sceneHtml}),
  articleSection({id: 'split', title: 'How one word came to mean two things.', kicker: '2010 to 2012', bodyHtml: splitHtml, className: 'tone-yellow'}),
  articleSection({id: 'bristol', title: 'Bristol: the line that never broke.', bodyHtml: bristolHtml}),
  articleSection({id: 'berlin', title: 'Berlin: dubstep meets techno.', bodyHtml: berlinHtml, className: 'tone-cyan'}),
  articleSection({id: 'subgenres', title: 'The subgenres and what they actually mean.', bodyHtml: subgenresHtml}),
  articleSection({id: 'now', title: 'Where dubstep is now.', bodyHtml: nowHtml, className: 'tone-coral'}),
  articleFaq({items: faqItems, title: 'Dubstep FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://www.vice.com/en/article/an-oral-history-of-dubstep-vice-lauren-martin-610/" target="_blank" rel="noopener noreferrer">VICE: The oral history of dubstep</a></li>
<li><a href="https://www.museumofyouthculture.com/a-brief-history-of-early-dubstep/" target="_blank" rel="noopener noreferrer">Museum of Youth Culture: A brief history of early dubstep</a></li>
<li><a href="https://www.dazeddigital.com/music/article/64343/1/what-is-brostep-five-key-tracks-skrillex-fred-again-dubstep" target="_blank" rel="noopener noreferrer">Dazed: What is brostep, in five key tracks</a></li>
<li><a href="https://www.clashmusic.com/features/nuff-wheel-ups-exploring-dubplate-culture/" target="_blank" rel="noopener noreferrer">Clash: Nuff wheel ups, exploring dubplate culture</a></li>
<li><a href="https://legacy.boilerroom.tv/dubstep-from-croydon-to-kreuzberg-beyond/" target="_blank" rel="noopener noreferrer">Boiler Room: Dubstep from Croydon to Kreuzberg and beyond</a></li>
<li><a href="https://www.factmag.com/2015/06/03/transatlantic-vibrations-10-years-of-dmz-and-dub-war/" target="_blank" rel="noopener noreferrer">FACT: Ten years of DMZ and Dub War</a></li>
<li><a href="https://djmag.com/features/how-big-apple-records-became-birthplace-of-dubstep" target="_blank" rel="noopener noreferrer">DJ Mag: How Big Apple Records became the birthplace of dubstep</a></li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'These releases sit closest to the breaks and bass side of this article. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('dubstep-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, image: 'https://thecatrave.com/img/dubstep/dubplate-lathe.webp', datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'Dubstep Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/dubstep/dubplate-lathe.webp',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page dubstep-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('dubstep-guide.html', html);
console.log('Built dubstep-guide.html');
