import fs from 'node:fs';
import { articlePage, articleSection, articleFaq, faqStructuredData, breadcrumbStructuredData } from './site-components.mjs';
import { channels } from './selector-channels.mjs';

const canonical = 'https://thecatrave.com/selector';
const title = 'Discover New Music: One Button, One Random DJ Set';
const date = '2026-09-04';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let sets = [];
try {
  const parsed = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
  if (Array.isArray(parsed)) sets = parsed;
} catch {}

// Count the channels that actually have sets, not the ones configured. A new
// entry in selector-channels.mjs reaches the catalogue only after the weekly
// refresh has fetched it, and until then the page must not claim sets it does
// not have. Config order is kept, because it is curated.
const present = new Set(sets.map(s => s.broadcaster));
const broadcasters = sets.length
  ? channels.map(c => c.broadcaster).filter(b => present.has(b))
      .concat([...present].filter(b => !channels.some(c => c.broadcaster === b)))
  : [...new Set(channels.map(c => c.broadcaster))];
const countLine = sets.length
  ? `${sets.length.toLocaleString('en-US')} sets from ${broadcasters.length} channels`
  : `${broadcasters.length} channels`;
const setCount = sets.length ? sets.length.toLocaleString('en-US') : 'thousands of';

// The browser gets a compact copy, not the working file. Broadcaster and genre
// names are interned into two lookup tables and each set becomes a tuple, which
// roughly halves what the phone has to download and parse. selector-data.json
// stays exactly as it is, because thirteen build and enrichment scripts read
// it and none of them should have to learn a second format.
if (sets.length) {
  const bIndex = new Map(), gIndex = new Map();
  const intern = (map, value) => {
    if (!map.has(value)) map.set(value, map.size);
    return map.get(value);
  };
  const rows = sets.map(s => {
    const row = [s.id, s.artist || '', intern(bIndex, s.broadcaster), s.year || 0,
                 s.seconds || 0, s.views || 0, s.likes == null ? -1 : s.likes];
    if (s.genres && s.genres.length) row.push(s.genres.map(g => intern(gIndex, g)));
    return row;
  });
  fs.writeFileSync('selector-data.min.json', JSON.stringify({
    b: [...bIndex.keys()], g: [...gIndex.keys()], s: rows
  }) + '\n');
}
const channelList = broadcasters.join(', ');
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let sourceColors = {};
try { sourceColors = JSON.parse(fs.readFileSync('selector-channel-colors.json', 'utf8')); } catch {}
const sourceLogos = {};
for (const b of broadcasters) {
  const p = `img/selector/${slug(b)}.png`;
  if (fs.existsSync(p)) sourceLogos[b] = `/${p}`;
}

const taggedCount = sets.filter(s => s.genres && s.genres.length).length;
const genreNote = taggedCount
  ? ` <span class="sel-field-note">(${taggedCount.toLocaleString('en-US')} of ${sets.length.toLocaleString('en-US')} sets tagged)</span>`
  : '';

const description = sets.length
  ? `Discover new music without choosing it. One button plays a full DJ set at random from ${setCount}: Boiler Room, NTS, Cercle and community radio worldwide.`
  : 'Discover new music without choosing it. One button plays a full DJ set at random from Boiler Room, NTS, Cercle and community radio worldwide.';

// The whole tool is one panel on the first screen: title, then the primary
// action (the button, and the picked set right under it), then the filters that
// refine the next press. It carries the H1 so the first thing on the page is
// the instrument, not an essay.
const toolHtml = `
<section class="sel-panel" id="selector" aria-label="The Selector">
  <header class="sel-panel-head">
    <p class="article-kicker">The Selector</p>
    <h1>Press the button. Get a set.</h1>
    <p class="sel-deck">A way to find new music without choosing it. One full DJ set at random out of ${escapeHtml(countLine)}: Boiler Room, NTS, Cercle, HÖR and ${broadcasters.length - 4} more. Pick a mode for the most-watched, the underrated or the ones nobody has found yet, then narrow it to a source or a genre.</p>
  </header>
  <div class="sel-action">
    <p class="sel-count" id="sel-count">${escapeHtml(setCount)} sets</p>
    <div class="sel-go-wrap">
      <button type="button" id="sel-go" class="sel-go" data-state="loading" disabled>Loading catalogue…</button>
      <span class="sel-burst" id="sel-burst" aria-hidden="true"></span>
    </div>
    <div class="sel-stage" id="sel-stage" aria-live="polite"></div>
  </div>
  <div class="sel-body">
    <div class="sel-field">
      <p class="sel-field-label" id="sel-modes-label">Mode</p>
      <div class="sel-modes" id="sel-modes" role="radiogroup" aria-labelledby="sel-modes-label"></div>
    </div>
    <div class="sel-field">
      <p class="sel-field-label" id="sel-sources-label">Source</p>
      <div class="sel-sources" id="sel-sources" role="group" aria-labelledby="sel-sources-label"></div>
    </div>
    <div class="sel-field" id="sel-genres-wrap" hidden>
      <p class="sel-field-label" id="sel-genres-label">Genre${genreNote}</p>
      <div class="sel-genres" id="sel-genres" role="group" aria-labelledby="sel-genres-label"></div>
    </div>
  </div>
  <noscript><p class="sel-noscript">The Selector needs JavaScript to shuffle and embed a player. The source channels are on YouTube: ${
    broadcasters.map(b => escapeHtml(b)).join(', ')
  }.</p></noscript>
</section>
`.trim();

// Below-the-fold context, written for the queries this page can answer:
// "random DJ set", "random Boiler Room set", "best HÖR sets", "what set should
// I listen to". Keep the channel names as plain text so they read as entities.
const aboutHtml = `
<p>Finding a good DJ set has never been the difficulty. Nineteen channels put up more of them than anyone could get through, and that is the problem: with ${escapeHtml(setCount)} in front of you, picking one becomes its own small chore, and you end up watching nothing.</p>
<p>The Selector is for exactly that. Press the button and it plays a full set at random from ${escapeHtml(countLine)}. Press it again for another. Nothing is saved and nothing is personalised.</p>
<p>A DJ set is one continuous mix played by one DJ, usually an hour or more, recorded live in a club, a radio studio or a festival tent. It is not a playlist: the order, the blends and the pacing are the performance.</p>
<p>Three filters narrow the pool before it picks, and <strong>Mode</strong> is the one that changes the character of what you get. It decides how big an audience a set should already have.</p>
<ul>
  <li><strong>All</strong> shuffles the whole catalogue, all ${escapeHtml(setCount)} sets, nothing weighted either way.</li>
  <li><strong>Popular</strong> sticks to sets that already found a big audience. This is the one for a best-of: a popular ${escapeHtml(broadcasters[0])} set, a popular techno set, something you can put on knowing a lot of people rated it.</li>
  <li><strong>Hidden gems</strong> looks at how loved a set is next to how many people actually saw it. You get the ones a small crowd rated highly rather than the ones that simply got pushed.</li>
  <li><strong>Niche sets</strong> is the opposite end of Popular: the quiet part of the catalogue, where most artists have almost no audience yet. Worth it if you like getting there first.</li>
</ul>
<p>The other two filters stack on top of any mode. <strong>Source</strong> limits the pool to one channel, so you can pull a random ${escapeHtml(broadcasters[0])} set, or an ${escapeHtml(broadcasters[1] || 'HÖR')} set, or one from ${escapeHtml(broadcasters.slice(2, 6).join(', '))}. <strong>Genre</strong> covers house, techno, drum and bass, dubstep, UK garage, jungle, electro, breakbeat, hip-hop and disco where a set is tagged.</p>
<p>The pool is the long-form uploads of ${escapeHtml(channelList)}: real sets rather than clips, refreshed weekly. For the history behind the music, read the <a href="/drum-and-bass-guide">drum and bass guide</a>, the <a href="/jungle-music-guide">jungle guide</a>, the <a href="/breakbeat-guide">breakbeat guide</a> and the <a href="/dubstep-guide">dubstep guide</a>.</p>
`.trim();

const faqItems = [
  {
    question: 'How do you discover new music without an algorithm?',
    answer: 'You stop choosing. An algorithm hands you more of what you already played, so the way out is a source it has no say over. The Selector picks a full DJ set at random from 37 channels, and the modes decide how far off the beaten track you land: the well-watched end, the quiet end, or the sets that are loved out of all proportion to how many people found them.',
    answerHtml: '<p>You stop choosing. An algorithm hands you more of what you already played, so the way out is a source it has no say over. The Selector picks a full DJ set at random from 37 channels, and the modes decide how far off the beaten track you land: the well-watched end, the quiet end, or the sets that are loved out of all proportion to how many people found them.</p>',
  },
  {
    question: 'What is the best way to find new music you have never heard?',
    answer: 'Listen to a DJ you do not know. A set is an hour of tracks someone spent years selecting, so one good set introduces you to more music than an afternoon of skipping through singles. Set the Selector to Niche sets and it will only play from the quiet end of the catalogue, where the sets almost nobody has found are.',
    answerHtml: '<p>Listen to a DJ you do not know. A set is an hour of tracks someone spent years selecting, so one good set introduces you to more music than an afternoon of skipping through singles. Set the Selector to <strong>Niche sets</strong> and it will only play from the quiet end of the catalogue, where the sets almost nobody has found are.</p>',
  },
  {
    question: 'How does The Selector pick a set?',
    answer: `You press one button and it plays a full DJ set chosen at random from its catalogue of ${countLine}. Press again for another. There is no algorithm learning your taste and no history kept.`,
    answerHtml: `<p>You press one button and it plays a full DJ set chosen at random from its catalogue of ${escapeHtml(countLine)}. Press again for another. There is no algorithm learning your taste and no history kept.</p>`
  },
  {
    question: 'Can I get a random Boiler Room set?',
    answer: `Yes. Open the Source filter and choose Boiler Room, then press the button to shuffle only Boiler Room sets. The same works for HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle and every other channel in the list.`,
    answerHtml: `<p>Yes. Open the Source filter and choose Boiler Room, then press the button to shuffle only Boiler Room sets. The same works for HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle and every other channel in the list.</p>`
  },
  {
    question: 'How do I find the best or most popular sets?',
    answer: `Pick the Popular mode. It keeps the pool to sets that already have a big audience, so every result is one a lot of people have watched and rated. Combine it with a Source or Genre filter for a popular techno set, a popular HÖR set, and so on. Hidden gems does the opposite: it favours sets that are loved out of proportion to how many people saw them, so you get what a small crowd rated highly instead of what simply got pushed. Niche sets goes to the quiet end of the catalogue, where most of the artists have almost no audience yet.`,
    answerHtml: `<p>Pick the <strong>Popular</strong> mode. It keeps the pool to sets that already have a big audience, so every result is one a lot of people have watched and rated. Combine it with a Source or Genre filter for a popular techno set, a popular HÖR set, and so on.</p><p><strong>Hidden gems</strong> does the opposite: it favours sets that are loved out of proportion to how many people saw them, so you get what a small crowd rated highly instead of what simply got pushed. <strong>Niche sets</strong> goes to the quiet end of the catalogue, where most of the artists have almost no audience yet.</p>`
  },
  {
    question: 'What is the difference between Popular, Hidden gems and Niche sets?',
    answer: `It comes down to how much of an audience a set already has. Popular gives you the well-watched end of whatever you have filtered to, Niche sets the quiet end. Hidden gems sits apart from both: it cares about how loved a set is relative to how many people saw it, so a set can be a gem whether it has ten thousand views or a million. All drops the weighting and shuffles the full catalogue.`,
    answerHtml: `<p>It comes down to how much of an audience a set already has. <strong>Popular</strong> gives you the well-watched end of whatever you have filtered to, <strong>Niche sets</strong> the quiet end. <strong>Hidden gems</strong> sits apart from both: it cares about how loved a set is relative to how many people saw it, so a set can be a gem whether it has ten thousand views or a million. <strong>All</strong> drops the weighting and shuffles the full catalogue.</p>`
  },
  {
    question: 'Which channels does it pull from?',
    answer: `${channelList}. Every one is a public YouTube channel and the catalogue is refreshed weekly.`,
    answerHtml: `<p>${escapeHtml(channelList)}. Every one is a public YouTube channel and the catalogue is refreshed weekly.</p>`
  },
  {
    question: 'Can I filter by genre?',
    answer: `Yes, where a set is tagged. The Genre row covers house, techno, drum and bass, dubstep, UK garage, jungle, electro, breakbeat, hip-hop, disco and more. Sets that could not be tagged sit in an "untagged" bucket you can include or exclude.`,
    answerHtml: `<p>Yes, where a set is tagged. The Genre row covers house, techno, drum and bass, dubstep, UK garage, jungle, electro, breakbeat, hip-hop, disco and more. Sets that could not be tagged sit in an "untagged" bucket you can include or exclude.</p>`
  },
  {
    question: 'Do the sets play here or on YouTube?',
    answer: `Each pick embeds the full set on this page with a link out to watch it on YouTube. Nothing is downloaded and there is no account, sign-up or install.`,
    answerHtml: `<p>Each pick embeds the full set on this page with a link out to watch it on YouTube. Nothing is downloaded and there is no account, sign-up or install.</p>`
  }
];

const articleHtml = [
  toolHtml,
  articleSection({ id: 'about', title: 'Choosing is the hard part.', bodyHtml: aboutHtml }),
  articleFaq({ id: 'faq', title: 'Questions about finding new music.', items: faqItems }),
  `<script type="application/json" id="sel-source-logos">${JSON.stringify(sourceLogos).replace(/</g, '\\u003c')}</script>`,
  `<script type="application/json" id="sel-source-colors">${JSON.stringify(sourceColors).replace(/</g, '\\u003c')}</script>`,
  `<script src="selector-runtime.js" defer></script>`
].join('\n');

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Selector',
    url: canonical,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    description,
    isAccessibleForFree: true,
    featureList: [
      'Random DJ set picker',
      'Filter by source channel (Boiler Room, HÖR, NTS, Beatport, Rinse FM and more)',
      'Filter by genre',
      'Pick modes: popular, hidden gems and niche sets'
    ],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  },
  breadcrumbStructuredData({ name: 'The Selector', canonical }),
  faqStructuredData({ items: faqItems })
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/selector.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page selector-page',
  structuredData, articleHtml
});

fs.writeFileSync('selector.html', html);
console.log(`Built selector.html — ${sets.length} sets in catalogue`);
