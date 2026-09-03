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

const runtime = fs.readFileSync('selector-runtime.js', 'utf8').trim();

const broadcasters = [...new Set(channels.map(c => c.broadcaster))];
const countLine = sets.length
  ? `${sets.length.toLocaleString('en-US')} sets from ${broadcasters.length} channels`
  : `${broadcasters.length} channels`;

// Plain-text fallback and a crawlable reason for the page to exist. Two internal
// links keep audit-seo's "main has >= 2 internal links" happy.
const introHtml = `
<p>The Selector is a small tool for one problem: you want to put on a proper DJ set and you cannot decide which one. Press the button and it plays a full set, chosen at random from the live channels that actually publish them, currently ${escapeHtml(countLine)}.</p>
<p>The pool is pulled from the YouTube uploads of Boiler Room, HÖR, The Lot Radio, Cercle, NTS, Rinse FM, Dekmantel, Kiosk Radio and a dozen more radio stations and party brands. Only long-form sets are kept; trailers, interviews and short clips are filtered out. The list refreshes so new sets appear as the channels post them.</p>
<p>If you want the background rather than a set to put on, the <a href="/drum-and-bass-guide">drum and bass guide</a> and the <a href="/jungle-music-guide">jungle guide</a> cover where a lot of this music comes from.</p>
`.trim();

const pickerHtml = `
<div class="selector" id="selector">
  <div class="sel-filter">
    <label for="sel-source">Source</label>
    <select id="sel-source" name="source" disabled>
      <option value="">All sources</option>
    </select>
  </div>
  <button type="button" id="sel-go" class="sel-go" data-state="loading" disabled>Loading catalogue…</button>
  <p class="sel-count" id="sel-count" hidden></p>
  <div class="sel-stage" id="sel-stage" aria-live="polite"></div>
</div>
`.trim();

const noscriptHtml = `<noscript><p>The Selector needs JavaScript to shuffle and embed a player. The source channels are on YouTube: ${
  broadcasters.map(b => escapeHtml(b)).join(', ')
}.</p></noscript>`;

const articleHtml = [
  `<header class="article-hero"><p class="article-kicker">Tool</p><h1>${escapeHtml('The Selector')}</h1><p class="subtitle article-deck">One button. One random DJ set, from the channels that actually stream them.</p></header>`,
  articleSection({ id: 'about', title: 'What this is.', bodyHtml: introHtml }),
  articleSection({ id: 'pick', title: 'Let the selector pick.', bodyHtml: pickerHtml + noscriptHtml }),
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
