// Build techno-music-guide.html from techno-music-draft.md.
//
// Asked for by the owner on 2026-09-24 ("go first 3"), with the house music
// guide and the NYC clubs guide. Research: the "Пакет волны 3" entries in
// TOPIC-DOSSIERS.md. Volumes are Google Ads Keyword Planner ranges (All
// locations), recorded in keywords/techno-music.json. The German electronic
// music and Berlin clubs guides own "german techno" and "berlin techno"; this
// page targets the genre itself and links to both for the German side. Stage 6 was not run as a separate pass: the
// owner asked for the three articles straight after stages 1 to 5.
//
// Listeners, not producers: nothing here explains how to make techno.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard, articleVideoCollection, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('techno-music-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/techno-music-guide';
const title = 'What Is Techno? Detroit, the Belleville Three and Techno Today';
const description = 'Techno is machine-made dance music from Detroit: the Belleville Three, why it is called techno, Underground Resistance, Berlin, minimal and hard techno.';
const datePublished = '2026-09-24';
const dateModified = '2026-09-24';
const dateLabel = '24 September 2026';

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
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

// From Wikimedia Commons, downloaded to img/techno/ on 2026-09-24,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno/${name}-${width}.webp`,
  srcset: `img/techno/${name}-320.webp 320w, img/techno/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Exact records are the Topic channel's, the label's or the artist's own
// upload; sets are from the Selector catalogue. All checked through YouTube
// oEmbed on 2026-09-24 and embedded by no other guide (media/techno-music.json).
const video = (youtubeId, genre, artist, videoTitle, text) => articleVideoCollection({
  label: `${artist}, ${videoTitle}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const media = {
  'Derrick May': figure('derrick-may-2015', 820, 883,
    'Close portrait of Derrick May in glasses and a dark jacket',
    'Derrick May, who ran the Transmat label and made "Strings of Life", in 2015. Photograph: Natalie Chickee, CC BY-SA 4.0.'),
  'Juan Atkins': figure('juan-atkins-2010', 620, 808,
    'Juan Atkins in a grey hooded top in a dark club',
    'Juan Atkins in Detroit in 2010. He made "Clear" as Cybotron and "No UFO\'s" as Model 500. Photograph: Angie Linder, CC BY-SA 2.0.'),
  'Jeff Mills': figure('jeff-mills-2010', 1200, 798,
    'Jeff Mills mixing on a club DJ booth with people watching behind him',
    'Jeff Mills playing in Detroit in June 2010. He co-founded Underground Resistance with Mike Banks. Photograph: Angie Linder, CC BY-SA 2.0.'),
  'Clear': video('Unc8kDUzbU8', 'Electro, 1983', 'Cybotron', 'Clear',
    'Juan Atkins and Richard Davis as Cybotron, two years before techno had its first record.'),
  'No UFO\'s': video('xcdOBLH_AXs', 'Techno, 1985', 'Model 500', 'No UFO\'s',
    'Juan Atkins as Model 500 on his own Metroplex label: the record usually called the first techno record.'),
  'Strings of Life': video('vGFw2qeUp0s', 'Techno, 1987', 'Rhythim Is Rhythim', 'Strings of Life',
    'Derrick May\'s record, claimed by house and techno alike.'),
  'Big Fun': video('Gr-zG-IXDyo', 'House, 1988', 'Inner City', 'Big Fun',
    'Kevin Saunderson\'s Inner City, on the group\'s own channel: number eight in Britain in 1988.'),
  'The Bells': video('S-BlgAQ7uRQ', 'Techno, 1996', 'Jeff Mills', 'The Bells',
    'Jeff Mills\'s record from 1996, on every list of techno classics.'),
  'Robert Hood Boiler Room': video('TaFJGvwaczU', 'Minimal techno', 'Robert Hood', 'DJ set, Boiler Room x Red Bull Music Academy, 2013',
    'Robert Hood, the Underground Resistance member who started minimal techno. From this site\'s catalogue of recorded DJ sets.'),
  'Energy Flash': video('BDj73pGQ6pE', 'Techno, 1990', 'Joey Beltram', 'Energy Flash',
    'The New York producer\'s record for the Belgian label R&S, from 1990.'),
  'Sara Landry Boiler Room': video('EIQlDpgAY5Y', 'Hard techno', 'Sara Landry', 'Boiler Room x Teletech Festival, 2023',
    'The most-watched set tagged hard techno in this site\'s catalogue of recorded DJ sets.'),
  'Kevin Saunderson Boiler Room': video('gvvb-SNL9tM', 'Techno', 'Kevin Saunderson', 'DJ set, Boiler Room Chicago, 2014',
    'Kevin Saunderson playing for Boiler Room in Chicago. From this site\'s catalogue of recorded DJ sets.'),
  'thecatrave mix': ownSetListening(1, 'en', 'My own mix, for after the history.'),
  'Table: styles': articleTable({
    headers: ['Style', 'Where and when', 'What it sounds like', 'Where to start'],
    rows: [
      ['Detroit techno', 'Detroit, mid 1980s', 'Machine funk, strings and synthesiser lines', 'Model 500, "No UFO\'s"'],
      ['Minimal techno', 'Detroit, early 1990s', 'Drums, bassline and groove, nothing else', 'Robert Hood, Minimal Nation'],
      ['Dub techno', 'Early 1990s', 'Techno crossed with Jamaican dub: deep bass, slow chords, heavy delay', 'No single founding record'],
      ['Acid techno', '1990s', 'A TB-303 line over harder techno drums', 'Hardfloor, "Acperience 1"'],
      ['Melodic techno', 'Europe, late 2000s to 2010s', 'Techno rhythm with long melodic progressions, 120 to 128 BPM', 'Tale of Us, ARTBAT, Stephan Bodzin'],
      ['Hard techno', 'Europe, 2010s to 2020s', 'Fast and distorted, the kick in front', 'Sara Landry']
    ].map(row => row.map(escapeHtml))
  }),
  'Table: comparison': articleTable({
    headers: ['', 'Techno', 'House'],
    rows: [
      ['Where', 'Detroit, mid 1980s', 'Chicago, early 1980s'],
      ['Tempo', 'About 120 to 150 BPM', 'About 118 to 128 BPM'],
      ['What leads', 'Machine rhythm and texture', 'Groove, bassline, often a vocal'],
      ['Roots', 'Kraftwerk, electro, funk, Chicago house', 'Disco, soul, Philadelphia and Salsoul records'],
      ['A record to start with', 'Model 500, "No UFO\'s"', 'Marshall Jefferson, "Move Your Body"']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'what-is-techno', heading: 'What is techno', title: 'What is techno?'},
  {id: 'sound', heading: 'What techno sounds like'},
  {id: 'detroit', heading: 'Detroit and the Belleville Three'},
  {id: 'name', heading: 'Why is it called techno', title: 'Why is it called techno?'},
  {id: 'strings-of-life', heading: 'Strings of Life and the Music Institute'},
  {id: 'underground-resistance', heading: 'Underground Resistance and the second wave'},
  {id: 'berlin', heading: 'Berlin and the techno alliance'},
  {id: 'types', heading: 'Types of techno'},
  {id: 'today', heading: 'Techno today and Detroit now'},
  {id: 'techno-vs-house', heading: 'Techno vs house'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title || `${s.heading}.`, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Techno guide',
    title: 'Techno: from Detroit to Berlin and back',
    deck: 'Three friends from a small town outside Detroit, a radio DJ who played Kraftwerk next to Funkadelic, and the machine music that found its biggest audience in Europe.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Techno definition', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Music that sounds like technology.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Techno FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Techno', 'Wikipedia: Techno')}
${sourceLink('https://en.wikipedia.org/wiki/Detroit_techno', 'Wikipedia: Detroit techno')}
${sourceLink('https://en.wikipedia.org/wiki/Belleville_Three', 'Wikipedia: The Belleville Three')}
${sourceLink('https://en.wikipedia.org/wiki/No_UFO%27s', "Wikipedia: No UFO's")}
${sourceLink('https://en.wikipedia.org/wiki/Strings_of_Life', 'Wikipedia: Strings of Life')}
${sourceLink('https://en.wikipedia.org/wiki/Underground_Resistance', 'Wikipedia: Underground Resistance')}
${sourceLink('https://en.wikipedia.org/wiki/Robert_Hood', 'Wikipedia: Robert Hood')}
${sourceLink('https://en.wikipedia.org/wiki/Movement_Electronic_Music_Festival', 'Wikipedia: Movement Electronic Music Festival')}
${sourceLink('https://musicbrainz.org/release/d0a0ade7-14fb-4ff9-9ebb-44be77c5f579', 'MusicBrainz: Robert Hood, Minimal Nation (Axis, 1994)')}
<li>Set counts are measured from this site's own catalogue of recorded DJ sets, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('techno-music-guide.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Techno Music Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/techno-music-guide'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/techno-music.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page techno-music-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('techno-music-guide.html', html);
console.log('Built techno-music-guide.html');
