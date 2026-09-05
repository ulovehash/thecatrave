// Build uk-garage-guide.html from uk-garage-guide-draft.md.
//
// The guide is aimed at listeners, not producers. That is a deliberate call:
// the biggest UK garage videos on YouTube are production tutorials, roughly
// 700,000 views across them, but our own breakbeat guide's "#make-breakbeat"
// anchor drew 1,649 impressions and zero clicks in three months. Impressions
// from the wrong audience are worth nothing, so there is no section here on
// how to make the stuff.
//
// The sections are mapped to searches that exist, checked in Ahrefs: uk garage
// 5,500 a month worldwide, bassline about 3,300 of its 6,600 once the generic
// musical sense is discounted, 2 step 3,700 with "what is 2 step", speed garage
// 700, garage music genre 500, uk garage artists 500, old school garage 450,
// uk garage bpm 450, what is uk garage 350.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('uk-garage-guide-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/uk-garage-guide';
const title = 'What Is UK Garage? The Sound, 2-Step, Speed Garage and Bassline';
const description = 'UK garage is London playing American house too fast until it broke. The sound, the branches it split into, and the numbers behind its revival.';
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
const whatIs = paras(getSection('What is UK garage'));
const naming = paras(getSection('Why it is called garage'));
const sound = paras(getSection('The sound: tempo, swing and the broken beat'));
const speed = paras(getSection('Speed garage'));
const twoStep = paras(getSection('2-step'));
const bassline = paras(getSection('Bassline'));
const vsHouse = paras(getSection('Garage and house: what is actually different'));
const napa = paras(getSection('Ayia Napa'));
const became = paras(getSection('How garage became dubstep and grime'));
const classics = paras(getSection('The classics'));
const nowPlaying = paras(getSection('Who is playing it now'));
const revival = paras(getSection('The revival, in numbers'));

// FAQ questions come from the draft's "### " headings so the copy and the
// structured data can never drift apart.
const faqSection = getSection('FAQ');
const faqItems = faqSection.split(/\n### /).slice(1).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {
    question: q.trim().replace(/\?*$/, '?'),
    answer: body.replace(/\s+/g, ' '),
    answerHtml: render(body)
  };
});

// The branch table is the piece a reader screenshots: it answers "what is the
// difference between 2-step and speed garage and bassline" in one glance, which
// is three separate searches.
const branchRows = [
  ['Speed garage', '1995 to 1998', 'Four to the floor, jungle bassline underneath', 'Double 99, "Ripgroove"'],
  ['2-step', '1997 to 2002', 'Two kicks removed, the beat skips, sped-up vocals', 'Artful Dodger, "Re-Rewind"'],
  ['Bassline', '2002 onward, Sheffield', 'Four to the floor again, bass carries the melody', 'T2, "Heartbroken"'],
  ['Future garage', 'Late 2000s onward', 'Garage swing slowed and softened, sub-bass', 'Burial, "Archangel"'],
  ['Current revival', '2020 onward', 'All three branches at once, louder bass', 'Interplanetary Criminal and Eliza Rose, "B.O.T.A."']
];

const tempoRows = [
  ['House', '120 to 128 BPM', 'Kick on all four beats'],
  ['UK garage', '130 to 135 BPM', 'Broken, or four to the floor in speed garage and bassline'],
  ['Grime', '140 BPM', 'Garage drums with the swing taken out'],
  ['Dubstep', '140 BPM', 'Half-time, so it feels like 70'],
  ['Jungle and drum and bass', '160 to 175 BPM', 'Chopped breakbeat']
];

const skreamFigure = articleFigure({
  src: 'img/skream-1200.webp',
  srcset: 'img/skream-320.webp 320w, img/skream-1200.webp 1200w',
  width: 1200, height: 900,
  alt: 'Skream playing a DJ set behind a mixer',
  caption: 'Skream, who made dubstep records as a teenager and now plays garage sets. The catalogue holds his 2012 Boiler Room back to back with Disclosure, with three and a half million views.',
  className: 'wide-archive-image'
});

// Full bleed and cyan, matching the other guides: the shared-components audit
// requires every article to carry at least one listening band, and requires it
// to be full bleed so it does not sit in a narrow column mid-article.
const garageClassics = articleListeningBand({
  platform: 'spotify',
  id: 'uk-garage-classics-playlist',
  kicker: 'Essential listening',
  title: 'UK Garage Classics.',
  description: 'The records the sections above keep pointing at, in one place, for when the argument is made and you would rather just hear it.',
  src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWTUpSHnVOTvA?utm_source=generator',
  iframeTitle: 'UK Garage Classics playlist on Spotify',
  fullBleed: true,
  tone: 'cyan'
});

const soundHtml = `${join(sound)}${articleTable({
  headers: ['Genre', 'Tempo', 'What the drums do'],
  rows: tempoRows
})}`;

const branchesHtml = `${join(bassline)}${articleTable({
  headers: ['Branch', 'Roughly when', 'What it does', 'The record'],
  rows: branchRows
})}`;

const tocItems = [
  {id: 'what-is', label: 'What is UK garage'},
  {id: 'naming', label: 'Why it is called garage'},
  {id: 'sound', label: 'The sound and the tempo'},
  {id: 'speed-garage', label: 'Speed garage'},
  {id: 'two-step', label: '2-step'},
  {id: 'bassline', label: 'Bassline'},
  {id: 'vs-house', label: 'Garage and house'},
  {id: 'ayia-napa', label: 'Ayia Napa'},
  {id: 'dubstep-grime', label: 'How it became dubstep and grime'},
  {id: 'classics', label: 'The classics'},
  {id: 'now', label: 'Who is playing it now'},
  {id: 'revival', label: 'The revival, in numbers'}
];

const readingTime = `${Math.max(9, Math.round(draft.split(/\s+/).length / 225))} min read`;

const articleHtml = [
  articleHero({
    kicker: 'UK garage guide',
    title: 'What is UK garage?',
    deck: 'London took an American record, played it too fast, and broke the beat. What came out of that, and why more of it is being played now than at any point since 1999.',
    readingTime,
    dateModified: date,
    dateLabel,
    summaryHtml: infoBanner({label: 'UK garage definition', bodyHtml: inline(whatIs[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A misunderstanding that became a genre.', bodyHtml: join(intro), className: 'article-intro'}),
  articleSection({id: 'what-is', title: 'What is UK garage?', bodyHtml: join(whatIs)}),
  articleSection({id: 'naming', title: 'Why it is called garage, and what New York has to do with it.', kicker: 'The name', bodyHtml: join(naming)}),
  articleSection({id: 'sound', title: 'The sound: 130 BPM and a beat that will not sit still.', bodyHtml: soundHtml}),
  articleSection({id: 'speed-garage', title: 'Speed garage: the branch that kept the four to the floor.', kicker: '1995 to 1998', bodyHtml: join(speed)}),
  articleSection({id: 'two-step', title: '2-step: the two missing kicks that made it famous.', kicker: '1997 to 2002', bodyHtml: `${join(twoStep.slice(0, 2))}${skreamFigure}${join(twoStep.slice(2))}`}),
  articleSection({id: 'bassline', title: 'Bassline: what happened when garage went north.', kicker: 'Sheffield', bodyHtml: branchesHtml}),
  articleSection({id: 'vs-house', title: 'Garage and house: what is actually different.', bodyHtml: join(vsHouse)}),
  articleSection({id: 'ayia-napa', title: 'Ayia Napa: four summers in Cyprus.', bodyHtml: join(napa)}),
  articleSection({id: 'dubstep-grime', title: 'How garage became dubstep and grime.', kicker: '2001 to 2005', bodyHtml: join(became)}),
  articleSection({id: 'classics', title: 'The classics, and what each one explains.', bodyHtml: `${join(classics)}${garageClassics}`}),
  articleSection({id: 'now', title: 'Who is playing it now.', bodyHtml: join(nowPlaying)}),
  articleSection({id: 'revival', title: 'The revival, in numbers.', bodyHtml: join(revival)}),
  articleFaq({items: faqItems, title: 'UK garage FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
<li><a href="https://en.wikipedia.org/wiki/UK_garage" target="_blank" rel="noopener noreferrer">Wikipedia: UK garage</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bassline_(music_genre)" target="_blank" rel="noopener noreferrer">Wikipedia: Bassline (music genre)</a></li>
<li><a href="https://www.bbc.co.uk/news/entertainment-arts-62768901" target="_blank" rel="noopener noreferrer">BBC News: Eliza Rose scores UK's 1,400th number one single</a></li>
<li><a href="https://en.wikipedia.org/wiki/Re-Rewind" target="_blank" rel="noopener noreferrer">Wikipedia: Re-Rewind</a></li>
<li><a href="https://en.wikipedia.org/wiki/Heartbroken_(T2_song)" target="_blank" rel="noopener noreferrer">Wikipedia: Heartbroken</a></li>
<li><a href="https://en.wikipedia.org/wiki/Paradise_Garage" target="_blank" rel="noopener noreferrer">Wikipedia: Paradise Garage</a></li>
<li>Set counts, artist frequencies and view figures are measured from this site's own catalogue of 62,877 recorded DJ sets across 37 channels, as of September 2026.</li>
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'These sit on the breaks and bass side of the same family. Buying one supports my work directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('uk-garage-guide.html')})
].join('\n');

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'UK Garage Guide', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/uk-garage.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page uk-garage-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('uk-garage-guide.html', html);
console.log('Built uk-garage-guide.html');
