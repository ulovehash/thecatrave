import fs from 'node:fs';
import { articlePage, articleSection, articleFaq, faqStructuredData, breadcrumbStructuredData } from './site-components.mjs';
import { channels } from './selector-channels.mjs';

const canonical = 'https://thecatrave.com/selector';
const title = 'Random DJ Set Picker: Boiler Room, HÖR, NTS, Beatport';
const date = '2026-09-04';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let sets = [];
try {
  const parsed = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
  if (Array.isArray(parsed)) sets = parsed;
} catch {}

const broadcasters = [...new Set(channels.map(c => c.broadcaster))];
const countLine = sets.length
  ? `${sets.length.toLocaleString('en-US')} sets from ${broadcasters.length} channels`
  : `${broadcasters.length} channels`;
const setCount = sets.length ? sets.length.toLocaleString('en-US') : 'thousands of';
const channelList = broadcasters.join(', ');
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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
  ? `Can't decide what DJ set to watch? One button plays a random full set from ${setCount} Boiler Room, HÖR, NTS, Beatport and Rinse FM uploads. Filter by source or genre.`
  : 'Can\'t decide what DJ set to watch? Press one button for a random full set from Boiler Room, HÖR, NTS, Beatport, Rinse FM and more. Filter by source or genre.';

// The whole tool is one panel on the first screen: title, then the primary
// action (the button, and the picked set right under it), then the filters that
// refine the next press. It carries the H1 so the first thing on the page is
// the instrument, not an essay.
const toolHtml = `
<section class="sel-panel" id="selector" aria-label="The Selector">
  <header class="sel-panel-head">
    <p class="article-kicker">Tool</p>
    <h1>The Selector</h1>
    <p class="sel-deck">A random DJ set picker. Press the button for one full set at random from ${escapeHtml(countLine)}, or filter to the source or genre you want.</p>
  </header>
  <div class="sel-go-wrap">
    <button type="button" id="sel-go" class="sel-go" data-state="loading" disabled>Loading catalogue…</button>
    <span class="sel-burst" id="sel-burst" aria-hidden="true"></span>
  </div>
  <div class="sel-stage" id="sel-stage" aria-live="polite"></div>
  <div class="sel-body">
    <div class="sel-field">
      <p class="sel-field-label" id="sel-sources-label">Source</p>
      <div class="sel-sources" id="sel-sources" role="group" aria-labelledby="sel-sources-label"></div>
    </div>
    <div class="sel-field" id="sel-genres-wrap" hidden>
      <p class="sel-field-label" id="sel-genres-label">Genre${genreNote}</p>
      <div class="sel-genres" id="sel-genres" role="group" aria-labelledby="sel-genres-label"></div>
    </div>
    <div class="sel-toggle-row">
      <label class="sel-popular"><input type="checkbox" id="sel-popular" checked disabled> Popular only <span class="sel-popular-note">(most-liked third of the catalogue)</span></label>
      <p class="sel-count" id="sel-count" hidden></p>
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
<p>The Selector is for when you want a DJ set but don't want to choose one. Press the button and it plays a full set picked at random from a catalogue of ${escapeHtml(countLine)}. Press it again for another. Nothing is saved and nothing is personalised.</p>
<p>Two filters narrow the pool before it picks. <strong>Source</strong> limits it to one channel, so you can pull a random ${escapeHtml(broadcasters[0])} set, or an ${escapeHtml(broadcasters[1] || 'HÖR')} set, or one from ${escapeHtml(broadcasters.slice(2, 6).join(', '))}. <strong>Popular only</strong> keeps just the most-liked third of the catalogue, which is the closest thing here to a "best sets" list. <strong>Genre</strong> covers house, techno, drum and bass, dubstep, UK garage, jungle, electro, breakbeat, hip-hop and disco where a set is tagged.</p>
<p>The pool is the long-form uploads of ${escapeHtml(channelList)}: real sets rather than clips, refreshed weekly. For the history behind the music, read the <a href="/drum-and-bass-guide">drum and bass guide</a>, the <a href="/jungle-music-guide">jungle guide</a>, the <a href="/breakbeat-guide">breakbeat guide</a> and the <a href="/dubstep-guide">dubstep guide</a>.</p>
`.trim();

const faqItems = [
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
    answer: `Turn on Popular only. It limits the pool to the most-liked third of the catalogue before the random pick, so every result is a set that already has a big audience. Combine it with a Source or Genre filter for the most-liked techno set, the most-liked HÖR set, and so on.`,
    answerHtml: `<p>Turn on <strong>Popular only</strong>. It limits the pool to the most-liked third of the catalogue before the random pick, so every result is a set that already has a big audience. Combine it with a Source or Genre filter for the most-liked techno set, the most-liked HÖR set, and so on.</p>`
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
  articleSection({ id: 'about', title: 'What this is.', bodyHtml: aboutHtml }),
  articleFaq({ id: 'faq', title: 'Questions about picking a set.', items: faqItems }),
  `<script type="application/json" id="sel-source-logos">${JSON.stringify(sourceLogos).replace(/</g, '\\u003c')}</script>`,
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
      'Popular only mode for the most-liked sets'
    ],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  },
  breadcrumbStructuredData({ name: 'The Selector', canonical }),
  faqStructuredData({ items: faqItems })
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/thecatrave-home-1200.webp',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page selector-page',
  structuredData, articleHtml
});

fs.writeFileSync('selector.html', html);
console.log(`Built selector.html — ${sets.length} sets in catalogue`);
