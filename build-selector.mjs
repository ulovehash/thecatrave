import fs from 'node:fs';
import { articlePage, articleSection } from './site-components.mjs';
import { channels } from './selector-channels.mjs';

const canonical = 'https://thecatrave.com/selector';
const title = 'The Selector: a random DJ set, on demand';
const description = 'Press one button and get a full DJ set to watch, picked at random from Boiler Room, HÖR, The Lot Radio, Cercle, NTS and other live channels.';
const date = '2026-09-03';

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

// The tool itself sits at the top of the page. It carries the H1 so the first
// screen is the button, not an essay.
const toolHtml = `
<header class="article-hero selector-hero">
  <p class="article-kicker">Tool</p>
  <h1>The Selector</h1>
  <p class="subtitle article-deck">One button. One random DJ set, from the channels that actually stream them.</p>
</header>
<div class="selector" id="selector">
  <div class="sel-controls">
    <div class="sel-chipset">
      <p class="sel-chipset-label" id="sel-sources-label">Source</p>
      <div class="sel-sources" id="sel-sources" role="group" aria-labelledby="sel-sources-label"></div>
    </div>
    <div class="sel-chipset" id="sel-genres-wrap" hidden>
      <p class="sel-chipset-label" id="sel-genres-label">Genre</p>
      <div class="sel-genres" id="sel-genres" role="group" aria-labelledby="sel-genres-label"></div>
    </div>
    <label class="sel-popular"><input type="checkbox" id="sel-popular" disabled> Popular only</label>
  </div>
  <div class="sel-go-wrap">
    <button type="button" id="sel-go" class="sel-go" data-state="loading" disabled>Loading catalogue…</button>
    <span class="sel-burst" id="sel-burst" aria-hidden="true"></span>
  </div>
  <p class="sel-count" id="sel-count" hidden></p>
  <div class="sel-stage" id="sel-stage" aria-live="polite"></div>
  <noscript><p class="sel-noscript">The Selector needs JavaScript to shuffle and embed a player. The source channels are on YouTube: ${
    broadcasters.map(b => escapeHtml(b)).join(', ')
  }.</p></noscript>
</div>
`.trim();

// Below-the-fold context. Two internal links keep audit-seo's "main has >= 2
// internal links" check happy.
const aboutHtml = `
<p>The Selector solves one problem: you want to put on a proper DJ set and cannot decide which one. Press the button and it plays a full set, chosen at random from the live channels that actually publish them, currently ${escapeHtml(countLine)}.</p>
<p>The pool is pulled from the YouTube channels of Boiler Room, HÖR, The Lot Radio, Cercle, NTS, Rinse FM, Kiosk Radio and other radio stations and party brands. Only long-form uploads are kept, so it is full sets rather than clips or trailers, and the list refreshes weekly as the channels post more.</p>
<p>Filter by <strong>source</strong> or <strong>genre</strong>, or turn on <strong>Popular only</strong> to draw from the most-watched and most-liked sets in your selection. Genre is inferred from the artist's MusicBrainz tags, so some sets stay untagged. For the history rather than a set to put on, the <a href="/drum-and-bass-guide">drum and bass guide</a> and the <a href="/jungle-music-guide">jungle guide</a> cover where a lot of this music comes from.</p>
`.trim();

const articleHtml = [
  `<div class="selector-tool">${toolHtml}</div>`,
  articleSection({ id: 'about', title: 'What this is.', bodyHtml: aboutHtml }),
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  }
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
