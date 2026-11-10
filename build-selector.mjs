import fs from 'node:fs';
import { articlePage, breadcrumbStructuredData, languageSwitch } from './site-components.mjs';
import { channels } from './selector-channels.mjs';
import { alternatesFor, pages } from './pages.mjs';
import { t } from './i18n.mjs';

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

// The first press must not wait for the catalogue (defects.json,
// selector-button-waits-for-catalogue: 1.85 MB before the button worked). So
// the page carries a small sample inline, a few sets from every channel, plus
// the counts the chips show, and the full file loads behind it while the
// browser is idle. The sample is chosen by a hash of the id, not at random, so
// a rebuild with an unchanged catalogue writes an unchanged page.
const hashId = id => { let h = 2166136261; for (const ch of id) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
const FIRST_PER_CHANNEL = 7;
const first = (() => {
  if (!sets.length) return null;
  const byChannel = new Map();
  for (const s of sets) {
    if (!byChannel.has(s.broadcaster)) byChannel.set(s.broadcaster, []);
    byChannel.get(s.broadcaster).push(s);
  }
  const sample = [...byChannel.values()].flatMap(list =>
    list.slice().sort((a, b) => hashId(a.id) - hashId(b.id)).slice(0, FIRST_PER_CHANNEL));
  const bIndex = new Map(), gIndex = new Map();
  const intern = (map, value) => { if (!map.has(value)) map.set(value, map.size); return map.get(value); };
  const rows = sample.map(s => {
    const row = [s.id, s.artist || '', intern(bIndex, s.broadcaster), s.year || 0,
                 s.seconds || 0, s.views || 0, s.likes == null ? -1 : s.likes];
    if (s.genres && s.genres.length) row.push(s.genres.map(g => intern(gIndex, g)));
    return row;
  });
  // the counts are the whole catalogue's, so the chips are right from the start
  const genCounts = new Map();
  let untagged = 0;
  for (const s of sets) {
    if (!(s.genres || []).length) untagged += 1;
    for (const g of s.genres || []) genCounts.set(g, (genCounts.get(g) || 0) + 1);
  }
  const lengths = {short: 0, hour: 0, long: 0};
  for (const s of sets) {
    if (!s.seconds) continue;
    lengths[s.seconds < 2700 ? 'short' : s.seconds < 4500 ? 'hour' : 'long'] += 1;
  }
  const rates = sets.filter(s => s.likes != null && s.views >= 1000).map(s => s.likes / s.views).sort((a, b) => a - b);
  return {
    b: [...bIndex.keys()], g: [...gIndex.keys()], s: rows,
    c: {
      b: [...byChannel].map(([name, list]) => [name, list.length]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
      g: [...genCounts].filter(([, n]) => n >= 10).sort((a, b) => b[1] - a[1]).slice(0, 18),
      u: untagged,
      l: lengths
    },
    p: rates.length ? Number(rates[rates.length >> 1].toFixed(5)) : 0.024
  };
})();
const channelList = broadcasters.join(', ');
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let sourceColors = {};
try { sourceColors = JSON.parse(fs.readFileSync('selector-channel-colors.json', 'utf8')); } catch {}
const sourceLogos = {};
for (const b of broadcasters) {
  const p = `img/selector/${slug(b)}.png`;
  if (fs.existsSync(p)) sourceLogos[b] = `/${p}`;
}

// Channels added in the last NEW_DAYS days (the `added` date in
// selector-channels.mjs) get a banner. Only channels that already have sets
// are named, so it never promises a channel the refresh has not fetched.
const NEW_DAYS = 30;
const newChannels = channels
  .filter(c => c.added && (Date.now() - Date.parse(c.added)) / 864e5 <= NEW_DAYS && present.has(c.broadcaster))
  .map(c => c.broadcaster);
const newKey = channels.filter(c => newChannels.includes(c.broadcaster)).map(c => c.added).sort().pop() || '';

const NEW_BANNER = {
  en: {kicker: 'New on the Selector', lead: n => `${n} new channels:`, close: 'Dismiss'},
  de: {kicker: 'Neu im Selector', lead: n => `${n} neue Kanäle:`, close: 'Schließen'},
  fr: {kicker: 'Nouveau dans le Selector', lead: n => `${n} nouvelles chaînes :`, close: 'Fermer'}
};

// Add to home screen (selector-install.js shows it on every device). The two
// tips are for browsers that cannot open an install sheet from the page:
// Safari on iPhone and iPad, and Android browsers other than Chrome's family.
const INSTALL = {
  en: {
    button: 'Add to home screen',
    sub: 'Opens like an app, one tap away',
    ios: 'On iPhone or iPad: tap Share, then Add to Home Screen. The Selector then opens from its own icon.',
    other: 'Open your browser menu and choose Add to Home screen or Install app.'
  },
  de: {
    button: 'Zum Home-Bildschirm',
    sub: 'Öffnet sich wie eine App, mit einem Tipp',
    ios: 'Auf iPhone oder iPad: Tippe auf Teilen, dann auf „Zum Home-Bildschirm“. Der Selector öffnet sich dann über sein eigenes Symbol.',
    other: 'Öffne das Browsermenü und wähle „Zum Startbildschirm hinzufügen“ oder „App installieren“.'
  },
  fr: {
    button: 'Ajouter à l’écran d’accueil',
    sub: 'S’ouvre comme une appli, en un geste',
    ios: 'Sur iPhone ou iPad : touchez Partager, puis « Sur l’écran d’accueil ». Le Selector s’ouvre alors depuis sa propre icône.',
    other: 'Ouvrez le menu du navigateur et choisissez « Ajouter à l’écran d’accueil » ou « Installer l’application ».'
  }
};

// The page furniture: window names, the TV, the transport. Runtime strings
// (what changes while a set plays) live in the copy's `ui` block instead.
const PAGE = {
  en: {
    offAir: 'Off air', tuner: 'Tuner', tunerLabel: 'Tune the Selector', channels: 'Channels',
    crate: 'Crate', about: 'About', how: 'How it works',
    testcard: 'No signal · press play', testcardLabel: 'Play a random set',
    idleArtist: 'Nothing playing yet', idleMeta: 'Press play and the Selector picks a set for you.',
    back: 'Back', backLabel: 'Previous set', share: 'Share', youtube: 'YouTube',
    volume: 'Volume', volumeTitle: 'Volume: drag, scroll or use the arrow keys. Click to mute.', nextTitle: 'Next set',
    hint: 'Space next · B back · S save', clear: 'Clear filters',
    statSets: 'sets', statChannels: 'channels', channelsHint: 'Switch on one or several'
  },
  de: {
    offAir: 'Sendepause', tuner: 'Tuner', tunerLabel: 'Selector einstellen', channels: 'Kanäle',
    crate: 'Plattenkiste', about: 'Über', how: 'So funktioniert’s',
    testcard: 'Kein Signal · Play drücken', testcardLabel: 'Zufälliges Set abspielen',
    idleArtist: 'Noch läuft nichts', idleMeta: 'Drück Play, und der Selector sucht dir ein Set aus.',
    back: 'Zurück', backLabel: 'Voriges Set', share: 'Teilen', youtube: 'YouTube',
    volume: 'Lautstärke', volumeTitle: 'Lautstärke: ziehen, scrollen oder Pfeiltasten. Klicken schaltet stumm.', nextTitle: 'Nächstes Set',
    hint: 'Leertaste nächstes · B zurück · S merken', clear: 'Filter zurücksetzen',
    statSets: 'Sets', statChannels: 'Kanäle', channelsHint: 'Einen oder mehrere einschalten'
  },
  fr: {
    offAir: 'Hors antenne', tuner: 'Réglages', tunerLabel: 'Régler le Selector', channels: 'Chaînes',
    crate: 'Bac à disques', about: 'À propos', how: 'Comment ça marche',
    testcard: 'Pas de signal · appuyez sur lecture', testcardLabel: 'Lancer un set au hasard',
    idleArtist: 'Rien en lecture', idleMeta: 'Appuyez sur lecture et le Selector choisit un set pour vous.',
    back: 'Retour', backLabel: 'Set précédent', share: 'Partager', youtube: 'YouTube',
    volume: 'Volume', volumeTitle: 'Volume : faites glisser, défilez ou utilisez les flèches. Cliquez pour couper le son.', nextTitle: 'Set suivant',
    hint: 'Espace suivant · B retour · S garder', clear: 'Effacer les filtres',
    statSets: 'sets', statChannels: 'chaînes', channelsHint: 'Activez-en une ou plusieurs'
  }
};

const taggedCount =sets.filter(s => s.genres && s.genres.length).length;

// What every language's copy is written from: the live numbers, formatted by
// the copy itself so each language groups its digits its own way.
const context = {
  total: sets.length,
  tagged: taggedCount,
  broadcasters,
  channelList,
  escapeHtml
};

// The English page. Translations are content/<lang>/selector.mjs, which export
// the same shape; the runtime strings (`ui`) default to the English in
// selector-runtime.js, so English carries none.
function englishCopy({total, tagged, broadcasters, channelList, escapeHtml}) {
  const countLine = total
    ? `${total.toLocaleString('en-US')} sets from ${broadcasters.length} channels`
    : `${broadcasters.length} channels`;
  const setCount = total ? total.toLocaleString('en-US') : 'thousands of';
  const genreNote = tagged
    ? ` <span class="sel-field-note">(${tagged.toLocaleString('en-US')} of ${total.toLocaleString('en-US')} sets tagged)</span>`
    : '';
  return {
    title: 'Discover New Music: One Button, One Random DJ Set',
    description: total
      ? `Discover new music without choosing it. One button plays a DJ set at random from ${setCount}: Boiler Room, NTS, Cercle and community radio worldwide.`
      : 'Discover new music without choosing it. One button plays a DJ set at random from Boiler Room, NTS, Cercle and community radio worldwide.',
    appName: 'The Selector',
    h1: 'Press the button. Get a set.',
    deck: `Find new music without choosing it: one random DJ set out of ${escapeHtml(setCount)}, from Boiler Room, NTS, HÖR and ${broadcasters.length - 3} more channels.`,
    count: `${escapeHtml(setCount)} sets`,
    loading: 'Loading catalogue…',
    libraryLabel: 'Your sets',
    savedTab: 'Saved',
    recentTab: 'Recently played',
    libraryNote: 'Kept in this browser only.',
    modeLabel: 'Mode',
    sourceLabel: 'Source',
    genreLabel: `Genre${genreNote}`,
    lengthLabel: 'Length',
    noscript: `The Selector needs JavaScript to shuffle and embed a player. The source channels are on YouTube: ${
      broadcasters.map(b => escapeHtml(b)).join(', ')
    }.`,
    aboutTitle: 'Choosing is the hard part.',
    // Short on purpose: this page gets no search traffic, so the copy is for the
    // person holding the remote, not for a query (owner, 2026-11-10).
    aboutHtml: `
<p>There are more good DJ sets online than anyone could get through, so choosing one becomes a chore and you end up watching nothing. Press the button and the Selector picks for you: a set at random from ${escapeHtml(countLine)}. Not feeling it? Press again.</p>
<p>No need to register, no ads, and your saved lists stay only in your browser.</p>
`.trim(),
    howHtml: `
<ul class="how-list">
  <li><strong>The button</strong> plays a set at random. Space does the same, B goes back to the last one, S saves it.</li>
  <li><strong>Mode</strong> decides how well known the set is. <strong>Popular</strong>: sets a big audience already rated. <strong>Hidden gems</strong>: sets a small crowd loved. <strong>Niche sets</strong>: artists almost nobody has found yet. <strong>All</strong>: no weighting.</li>
  <li><strong>Channels</strong> you switch on are the only ones it plays from, say Boiler Room and NTS.</li>
  <li><strong>Genre</strong> and <strong>Length</strong> narrow it further, to techno under 45 minutes for example. Genre only covers sets that carry a tag.</li>
  <li><strong>Saved</strong> and <strong>Recently played</strong> keep the sets you want to find again.</li>
</ul>
<p>Sets play from YouTube, embedded on this page, and new uploads join the catalogue every week. For the music behind them, read the <a href="/articles">guides</a> or start with <a href="/best-dj-sets-of-all-time">the best DJ sets of all time</a>.</p>
`.trim(),
    featureList: [
      'Random DJ set picker',
      'Filter by source channel (Boiler Room, HÖR, NTS, Beatport, Rinse FM and more)',
      'Filter by genre',
      'Filter by set length',
      'Pick modes: popular, hidden gems and niche sets'
    ]
  };
}

function build(lang, copy, {file, path}) {
  const canonical = `https://thecatrave.com${path}`;
  const P = PAGE[lang] || PAGE.en;
  const ui = copy.ui || {};
  const fmt = n => n.toLocaleString(ui.numberLocale || 'en-US');
  // The page is a desk of windows: the player (a TV, what is on, the transport),
  // the tuner beside it, then channels, the crate, about, and the questions.
  // Every window shares one frame, so the markup says it once.
  const win = (name, cls, label, inner, labelledby) => `<section class="win${cls ? ' ' + cls : ''}" ${
    labelledby ? `aria-labelledby="${labelledby}"` : `aria-label="${escapeHtml(label)}"`}>
    <div class="titlebar"><span class="box" aria-hidden="true"></span><span class="name">${name}</span></div>
    ${inner}
  </section>`;

  const nb = NEW_BANNER[lang] || NEW_BANNER.en;
  const bannerHtml = newChannels.length ? `<aside class="newch" id="sel-new" data-key="${escapeHtml(newKey)}" aria-label="${escapeHtml(nb.kicker)}" hidden>
      <p class="k">${escapeHtml(nb.kicker)}</p>
      <p class="t"><strong>${escapeHtml(nb.lead(newChannels.length))}</strong> ${newChannels.map(escapeHtml).join(', ')}.</p>
      <button type="button" id="sel-new-close" aria-label="${escapeHtml(nb.close)}">&times;</button>
    </aside>` : '';
  const install = INSTALL[lang] || INSTALL.en;
  const installHtml = `<div class="install" id="sel-install" hidden>
      <button type="button" class="install-btn" id="sel-install-btn" aria-controls="sel-install-tip" aria-expanded="false"><span class="app" aria-hidden="true"></span><span class="lbl">${escapeHtml(install.button)}<small>${escapeHtml(install.sub)}</small></span><span class="plus" aria-hidden="true">+</span></button>
      <p class="install-tip" id="sel-install-tip" data-ios="${escapeHtml(install.ios)}" data-other="${escapeHtml(install.other)}" hidden></p>
    </div>`;

  // the channel readout: two seven-segment digits drawn as SVG, lit by the
  // runtime segment by segment; unlit segments stay as faint ghosts, like a real LED
  function segmentDigits() {
    const g = .45;
    const h = y => `${2 + g},${y} ${3 + g},${y - 1} ${9 - g},${y - 1} ${10 - g},${y} ${9 - g},${y + 1} ${3 + g},${y + 1}`;
    const v = (x, a, b) => `${x},${a + g} ${x + 1},${a + 1 + g} ${x + 1},${b - 1 - g} ${x},${b - g} ${x - 1},${b - 1 - g} ${x - 1},${a + 1 + g}`;
    const segs = { a: h(2), b: v(11, 2, 10), c: v(11, 10, 18), d: h(18), e: v(1, 10, 18), f: v(1, 2, 10), g: h(10) };
    const digit = dx => `<g class="dg" transform="translate(${dx} 0)">${Object.entries(segs).map(([k, pts]) => `<polygon data-s="${k}"${k === 'g' ? ' class="on"' : ''} points="${pts}"/>`).join('')}</g>`;
    return `<svg viewBox="0 0 31 20" focusable="false"><g transform="translate(3.2 0) skewX(-8)">${digit(0)}${digit(15)}</g></svg>`;
  }
  const play = '<svg class="i-play" viewBox="0 0 20 20"><path d="M5 2.5 17.5 10 5 17.5z" fill="currentColor"/></svg>';
  const player = win(escapeHtml(copy.appName), 'player', copy.appName, `<div class="tv">
      <div class="screen" id="sel-screen">
        <button type="button" class="testcard" id="sel-testcard" aria-label="${escapeHtml(P.testcardLabel)}">
          <span class="plate"><span class="plate-row" aria-hidden="true"><span class="cat"></span><span class="pk">${play}</span></span><span>${escapeHtml(P.testcard)}</span></span>
        </button>
        <span class="static" id="sel-static" hidden aria-hidden="true"></span>
        <span class="osd" id="sel-osd" hidden aria-hidden="true"><b id="sel-osd-ch"></b><span id="sel-osd-name"></span></span>
        <span class="osd-vol" id="sel-osd-vol" hidden aria-hidden="true"><i id="sel-osd-vol-l">VOLUME</i><span class="bars" id="sel-osd-bars"></span><b id="sel-osd-vol-n"></b></span>
        <p class="notice" id="sel-notice" hidden></p>
      </div>
      <div class="tv-panel">
        <span class="ch-led" id="sel-led" aria-hidden="true">${segmentDigits()}</span>
        <span class="pwr" id="sel-pwr" data-live="false" aria-hidden="true"></span>
        <span class="badge" aria-hidden="true">Selector</span>
        <span class="kw v"><button type="button" class="knob vol" id="sel-vol" role="slider" aria-label="${escapeHtml(P.volume)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" title="${escapeHtml(P.volumeTitle)}"></button><i aria-hidden="true">VOL</i></span>
        <span class="kw"><button type="button" class="knob" id="sel-knob" tabindex="-1" aria-hidden="true" title="${escapeHtml(P.nextTitle)}"></button><i aria-hidden="true">CH</i></span>
      </div>
      <div class="transport">
        <div class="go-wrap">
          <button type="button" class="go" id="sel-go"><span class="ico" aria-hidden="true">${play}<svg class="i-next" viewBox="0 0 20 20"><path d="M2.5 2.5 13 10 2.5 17.5zM14 2.5h3.5v15H14z" fill="currentColor"/></svg></span><span id="sel-go-t">${escapeHtml(ui.pickMe || 'Pick me a set')}</span></button>
          <span class="burst" id="sel-burst" aria-hidden="true"></span>
        </div>
        <button type="button" class="key k-back" id="sel-back" disabled aria-label="${escapeHtml(P.backLabel)}"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4h2v12H4zM16 4v12L7 10z" fill="currentColor"/></svg>${escapeHtml(P.back)}</button>
        <button type="button" class="key k-save" id="sel-save" aria-pressed="false" disabled><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 17 3 10a4 4 0 0 1 7-5 4 4 0 0 1 7 5z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg><span id="sel-save-t">${escapeHtml(ui.keySave || 'Save')}</span></button>
        <button type="button" class="key k-share" id="sel-share" disabled><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10M6 7l4-4 4 4M4 12v5h12v-5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>${escapeHtml(P.share)}</button>
        <a class="key k-yt" id="sel-yt" aria-disabled="true"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 4H4v12h12v-4M11 3h6v6M17 3l-8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>${escapeHtml(P.youtube)}</a>
      </div>
    </div>
    <div class="now idle" id="sel-now" aria-live="polite">
      <span class="logo" id="sel-logo" aria-hidden="true"></span>
      <p class="artist" id="sel-artist">${escapeHtml(P.idleArtist)}</p>
      <p class="meta" id="sel-meta">${escapeHtml(P.idleMeta)}</p>
      <p class="tags" id="sel-tags"></p>
    </div>
    ${installHtml}
    <p class="hint">${escapeHtml(P.hint)}</p>`);

  const tuner = win(escapeHtml(P.tuner), 'tuner', P.tunerLabel, `<div class="tune">
      <p class="poolline"><span id="sel-pool">${copy.count}</span><button type="button" class="linkbtn" id="sel-clear" hidden>${escapeHtml(P.clear)}</button></p>
      <div class="seg" id="sel-modes" role="radiogroup" aria-label="${escapeHtml(copy.modeLabel)}"></div>
      <p class="seg-note" id="sel-mode-note"></p>
      <div class="grp g-genre"><p class="grp-h" id="sel-h-genre">${copy.genreLabel}</p><div class="chips" id="sel-c-genre" role="group" aria-labelledby="sel-h-genre"></div></div>
      <div class="grp g-length"><p class="grp-h" id="sel-h-length">${escapeHtml(copy.lengthLabel)}</p><div class="chips" id="sel-c-length" role="group" aria-labelledby="sel-h-length"></div></div>
    </div>`);

  const channelsWin = win(`${escapeHtml(P.channels)} <span id="sel-ch-n">${broadcasters.length}</span>`, 'channels', P.channels, `<div class="tune">
      <div class="grp g-ch"><p class="grp-h" id="sel-h-ch">${escapeHtml(P.channelsHint)}</p><div class="chips" id="sel-c-ch" role="group" aria-labelledby="sel-h-ch"></div></div>
    </div>`);

  const crate = win(escapeHtml(P.crate), '', copy.libraryLabel, `<div class="tabs" role="tablist" aria-label="${escapeHtml(copy.libraryLabel)}">
      <button type="button" role="tab" id="sel-tab-saved" aria-selected="true" aria-controls="sel-crate-panel" data-list="saved">${escapeHtml(copy.savedTab)} <span id="sel-n-saved">0</span></button>
      <button type="button" role="tab" id="sel-tab-recent" aria-selected="false" aria-controls="sel-crate-panel" data-list="recent" tabindex="-1">${escapeHtml(copy.recentTab)} <span id="sel-n-recent">0</span></button>
    </div>
    <div id="sel-crate-panel" role="tabpanel" aria-labelledby="sel-tab-saved"><ol class="crate" id="sel-crate"></ol></div>
    <p class="foot">${escapeHtml(copy.libraryNote)}</p>`);

  const about = win(escapeHtml(P.about), '', P.about, `<div class="about">
      <div class="stat"><div><b id="sel-st-sets">${fmt(sets.length)}</b><span>${escapeHtml(P.statSets)}</span></div><div><b id="sel-st-ch">${broadcasters.length}</b><span>${escapeHtml(P.statChannels)}</span></div></div>
      <section id="about" aria-labelledby="sel-about-h"><h2 id="sel-about-h">${escapeHtml(copy.aboutTitle)}</h2>${copy.aboutHtml}</section>
    </div>`, null);

  const how = win(escapeHtml(P.how), 'faq-win', P.how, `<div class="faq how">${copy.howHtml}</div>`);

  const toolHtml = `<div class="desk" id="selector">
  <div class="intro">
    <h1>${escapeHtml(copy.h1)}</h1>
    <p>${copy.deck}</p>
    ${bannerHtml}
  </div>
  ${player}
  <div class="tuner-slot">${tuner}</div>
  ${channelsWin}
  <div class="row2">${crate}${about}</div>
  ${how}
</div>
<noscript><p class="sel-noscript">${copy.noscript}</p></noscript>
<p class="toast" id="sel-toast" role="status" hidden></p>
<p class="sr" id="sel-sr" aria-live="assertive"></p>`;

  // set names can carry an em dash, which the page itself must never show, so
  // the inline data spells it as an escape
  const safeJson = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2014/g, '\\u2014');
  const json = (id, value) => `<script type="application/json" id="${id}">${safeJson(value)}</script>`;
  const articleHtml = [
    toolHtml,
    // A few sets per channel, so the first press plays at once while the whole
    // catalogue (selector-data.min.json, megabytes) loads behind it.
    first ? `<script type="application/json" id="sel-first">${safeJson(first)}</script>` : '',
    json('sel-source-logos', sourceLogos),
    json('sel-source-colors', sourceColors),
    copy.ui ? json('sel-i18n', copy.ui) : '',
    `<script src="selector-runtime.js" defer></script>`,
    `<script src="/selector-install.js" defer></script>`
  ].filter(Boolean).join('\n');

  // site-header is the class every page's one header carries (audit-site-components);
  // the Selector's menubar restyles it as .bar
  const header = `<header class="site-header bar"><a class="wordmark" href="${escapeHtml(t(lang).homePath)}" aria-label="${escapeHtml(t(lang).homeLabel)}">thecatrave<span>*</span></a><div class="right"><span class="onair" id="sel-onair" data-live="false"><i aria-hidden="true"></i><span id="sel-onair-t">${escapeHtml(P.offAir)}</span></span><time id="sel-clock" aria-hidden="true">--:--</time>${languageSwitch({lang, alternates: alternatesFor(path)})}</div></header>`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: copy.appName,
      url: canonical,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      description: copy.description,
      ...(lang === 'en' ? {} : { inLanguage: t(lang).inLanguage }),
      isAccessibleForFree: true,
      featureList: copy.featureList,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    breadcrumbStructuredData({ name: copy.appName, canonical, lang })
  ];

  const html = articlePage({
    title: copy.title, description: copy.description, canonical,
    ogImage: 'https://thecatrave.com/img/og/selector.jpg',
    datePublished: date, dateModified: date,
    bodyClass: 'article-page selector-page',
    structuredData, articleHtml,
    lang, alternates: alternatesFor(path), header
  });

  // The Selector is the one page that can live on a home screen: its own
  // manifest per language (start_url and scope are that language's page), and
  // a 180px icon for iOS in place of the site favicon.
  const manifest = `${path.replace(/\/$/, '')}.webmanifest`;
  const appHead = `<link rel="manifest" href="${escapeHtml(manifest)}"><meta name="apple-mobile-web-app-title" content="Selector">`;
  const withApp = html
    .replace('<link rel="apple-touch-icon" href="/favicon.png">', `<link rel="apple-touch-icon" href="/img/selector-app/apple-touch-icon.png">${appHead}`);
  if (withApp === html) throw new Error('build-selector: apple-touch-icon link not found; the manifest was not added.');

  fs.writeFileSync(file, withApp);
  console.log(`Built ${file} — ${sets.length} sets in catalogue`);
}

for (const page of pages.filter(entry => entry.generator === 'build-selector.mjs')) {
  const lang = page.lang || 'en';
  const copy = lang === 'en' ? englishCopy(context) : (await import(`./content/${lang}/selector.mjs`)).default(context);
  build(lang, copy, page);
}
