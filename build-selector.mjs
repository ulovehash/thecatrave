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
  <p class="subtitle article-deck">Press the button to pick a random set.</p>
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
<p>Can't decide which DJ set to put on? Press the button for a full one at random, currently ${escapeHtml(countLine)}. Narrow it by <strong>source</strong>, or turn on <strong>Popular only</strong> for the most-liked.</p>
<p>The pool is the long-form uploads of Boiler Room, HÖR, The Lot Radio, NTS, Rinse FM, Kiosk Radio and other radio stations and party brands: real sets rather than clips, refreshed weekly. For the history behind the music, see the <a href="/drum-and-bass-guide">drum and bass guide</a> and the <a href="/jungle-music-guide">jungle guide</a>.</p>
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
