(() => {
  const $ = id => document.getElementById(id);
  const btn = $('sel-go');
  const screen = $('sel-screen');
  if (!btn || !screen) return;
  const goText = $('sel-go-t');
  const modesEl = $('sel-modes');
  const poolEl = $('sel-pool');

  // Popular makes an absolute claim, so it takes a real slice off the top rather
  // than a third. At a third the floor was 7K views, which nobody would call
  // popular; at a tenth it is 62K. 6,266 sets is still more than anyone will get
  // through, and because the share is taken from the filtered pool, asking for
  // popular inside one channel still gives that channel's top rather than
  // nothing.
  const POPULAR_SHARE = 0.1;

  // Hidden gems makes a relative claim by definition, so likes-per-view is the
  // right measure. The views floor was not: at 3,000 it admitted 98% of Boiler
  // Room and one set out of 228 from Manila, which quietly turned the mode into
  // a channel filter. Smoothing does the job the floor was there for. A set with
  // 10 views and 3 likes cannot score 30% because the pseudo-views drag it back
  // to the catalogue average, and no channel gets excluded wholesale.
  const GEM_SMOOTHING = 200;
  let gemPrior = 0.024;                // replaced with the measured median at load

  // Niche is about being overlooked, not about being new. On raw views it was
  // largely the latter: 56% of 2026 uploads landed in it against 2% of 2016,
  // because a set posted in May has not had time to be found yet. Views per year
  // since upload asks the question the name asks. Year is the finest date the
  // catalogue carries, so a set is treated as mid-year and never younger than
  // four months.
  const NOW = new Date().getFullYear() + new Date().getMonth() / 12;
  const perYear = s => s.views / Math.max(0.35, NOW - ((s.year || 2020) + 0.5));
  // channels and genres show their first rows and park the rest behind "+N more"
  const SOURCE_PEEK = 10;
  const GENRE_PEEK = 8;

  // Every word the tool writes itself. The English is here; a translated page
  // (/de/selector, /fr/selector) overrides it with the #sel-i18n block that
  // build-selector.mjs writes from content/<lang>/selector.mjs. Anything the
  // block leaves out stays English rather than going blank.
  const L = {
    numberLocale: 'en-US',
    modes: { any: ['All', ''], popular: ['Popular', 'the most-watched sets'], gems: ['Hidden gems', 'underrated sets'], deep: ['Niche sets', 'hear them first'] },
    lengths: { short: 'Under 45 min', hour: '45–75 min', long: 'Over 75 min' },
    allSets: 'all {n} sets',
    sets: '{n} sets',
    sources: '{n} sources',
    untagged: 'untagged',
    all: 'All',
    more: '+{n} more',
    fewer: 'Show fewer',
    moreLabel: 'Show {n} more, {total} in total',
    fewerLabel: 'Show fewer, {total} in total',
    pickMe: 'Pick me a set',
    pickAnother: 'Pick another',
    nothingMatches: 'Nothing matches, widen the filter',
    loadFailed: 'Catalogue failed to load, reload the page',
    views: '{n} views',
    keySave: 'Save',
    keySaved: 'Saved',
    emptySaved: 'Nothing saved yet. Press Save, or S, while a set plays.',
    emptyRecent: 'Nothing played yet.',
    remove: 'Remove {name} from saved',
    onAir: 'On air',
    tuning: 'Tuning',
    paused: 'Paused',
    ended: 'Ended',
    noSignal: 'No signal',
    tapToStart: 'Tap the picture to start the set',
    unavailable: 'That set is no longer on YouTube. Picking another…',
    linkCopied: 'Link copied',
    savedToast: 'Saved to your crate',
    volume: 'Volume {n}',
    muted: 'Muted',
    nowPlaying: 'Now playing: {name}'
  };
  try { Object.assign(L, JSON.parse($('sel-i18n').textContent) || {}); } catch {}
  const fill = (text, values) => text.replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m));
  const num = n => n.toLocaleString(L.numberLocale);

  const UNTAGGED = ' untagged';

  // Durations barely vary: 73% of the catalogue sits between 45 and 75 minutes,
  // because a radio hour is a radio hour. Even buckets would put three quarters
  // of everything under one chip and narrow nothing, so the boundaries are drawn
  // around that spike rather than on round numbers. The filter earns its place
  // at the two ends — the short slot and the long haul — which are otherwise
  // unreachable: ask for 25 minutes today and you get an hour nine times in ten.
  const LENGTHS = [
    [L.lengths.short, 'short', 0, 45 * 60],
    [L.lengths.hour, 'hour', 45 * 60, 75 * 60],
    [L.lengths.long, 'long', 75 * 60, Infinity]
  ];

  // How the pool is narrowed before the random pick. "deep" exists so the long
  // tail of artists gets played too, not just whatever already has an audience.
  // Name is the hook, note says plainly what you will actually get back.
  const MODES = ['any', 'popular', 'gems', 'deep'].map(value => [L.modes[value][0], value, L.modes[value][1]]);
  // All, not Popular. Popular is a tenth of the catalogue, so opening on it
  // would mean the first press of the button never reaches the other nine, and
  // the deck promises a set out of the whole catalogue.
  let mode = 'any';

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let sourceLogos = {};
  try { sourceLogos = JSON.parse($('sel-source-logos').textContent) || {}; } catch {}
  // One colour per channel, generated by scripts/channel-colors.py: taken from
  // the logo where the logo has one, and a spread-out tint where it is a
  // black-and-white wordmark. Applied per chip rather than as CSS rules so a
  // new channel is coloured the moment it appears, with no stylesheet to edit.
  let sourceColors = {};
  try { sourceColors = JSON.parse($('sel-source-colors').textContent) || {}; } catch {}

  // On a phone the channel list puts a screen of scrolling between the reader
  // and the rest of the page. So the long groups show their first rows and park
  // the rest behind a chip that says how many are hidden: the row has to look
  // like a lid, not like the whole shelf. Anything switched on stays visible
  // however far down the list it sits, or a filter you set would vanish when you
  // collapsed the group. Genres fold on every width: eighteen of them push the
  // length chips out of the tuner.
  const NARROW = window.matchMedia && window.matchMedia('(max-width: 959px)');
  const isNarrow = () => (NARROW ? NARROW.matches : false);
  const repeek = [];

  const fmtDuration = s => {
    if (!s) return '';
    let m = Math.round(s / 60);
    const h = Math.floor(m / 60);
    m -= h * 60;
    return h ? `${h}h ${m}m` : `${m}m`;
  };
  const fmtCount = n => (n == null ? '' : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}K` : String(n));
  const escapeText = v => { const d = document.createElement('div'); d.textContent = v == null ? '' : String(v); return d.innerHTML; };
  const escapeAttr = v => escapeText(v).replace(/"/g, '&quot;');

  // selector-data.min.json is the compact build of selector-data.json: names
  // interned into lookup tables, one tuple per set. Half the bytes to download
  // and parse; expanded back into plain objects here so nothing downstream has
  // to know about the packing.
  const expand = data => {
    if (Array.isArray(data)) return data.filter(s => s && s.id);
    if (!data || !Array.isArray(data.s)) return [];
    const b = data.b || [], g = data.g || [];
    return data.s.map(([id, artist, bi, year, seconds, views, likes, gi]) => {
      const set = { id, artist, broadcaster: b[bi], year: year || null,
                    seconds, views, likes: likes === -1 ? null : likes };
      if (gi && gi.length) set.genres = gi.map(i => g[i]);
      return set;
    }).filter(s => s && s.id);
  };

  // The first press must not wait for the catalogue: the page carries a sample
  // of every channel inline, with the whole catalogue's chip counts, and the
  // full file loads behind it.
  let first = null;
  try { first = JSON.parse($('sel-first').textContent); } catch {}
  let all = first ? expand(first) : [];
  let full = false;
  if (first && first.p) gemPrior = first.p;

  let pool = [];
  const recent = [];
  const back = [];               // this visit, for Back
  const activeSources = new Set();
  const activeGenres = new Set();
  const activeLengths = new Set();

  // Analytics must never be load-bearing. gtag is absent on localhost by design
  // and disabled in the owner's browser, so every call here has to be a no-op
  // rather than a thrown error inside a click handler.
  const track = (name, params) => { try { if (window.gtag) window.gtag('event', name, params || {}); } catch {} };
  let current = null;
  let dealCount = 0;

  const selectedValue = active => active.size === 0 ? 'none' : active.size === 1 ? [...active][0] : 'multiple';
  const poolBucket = size => size <= 50 ? '1-50' : size <= 500 ? '51-500' : size <= 5000 ? '501-5000' : '5000+';

  const filtered = () => !!(activeSources.size || activeGenres.size || activeLengths.size || mode !== 'any');

  const rebuildPool = () => {
    let next = all;
    if (activeSources.size) next = next.filter(s => activeSources.has(s.broadcaster));
    if (activeGenres.size) {
      next = next.filter(s => {
        const g = s.genres || [];
        return g.some(x => activeGenres.has(x)) || (activeGenres.has(UNTAGGED) && g.length === 0);
      });
    }
    if (activeLengths.size) {
      const ranges = LENGTHS.filter(l => activeLengths.has(l[1]));
      next = next.filter(s => s.seconds > 0 && ranges.some(([, , lo, hi]) => s.seconds >= lo && s.seconds < hi));
    }
    const third = list => list.slice(0, Math.max(1, Math.ceil(list.length / 3)));
    if (mode === 'gems') {
      // loved per view rather than most-watched: the sets that punch above
      // their audience, smoothed so a handful of views cannot fake a high rate
      const smoothed = s => (s.likes + GEM_SMOOTHING * gemPrior) / (s.views + GEM_SMOOTHING);
      const scored = next.filter(s => s.likes != null && s.views != null)
        .slice().sort((a, b) => smoothed(b) - smoothed(a));
      if (scored.length) next = third(scored);
    } else if (mode === 'deep') {
      // the quiet end of the catalogue, so the long tail of artists gets played
      const scored = next.filter(s => s.views != null).slice().sort((a, b) => perYear(a) - perYear(b));
      if (scored.length) next = third(scored);
    } else if (mode === 'popular') {
      // "most-watched" taken literally, so the label, the chip note and the copy
      // all describe the same thing
      const scored = next.filter(s => s.views != null).slice().sort((a, b) => b.views - a.views);
      if (scored.length) next = scored.slice(0, Math.max(1, Math.ceil(scored.length * POPULAR_SHARE)));
    }
    pool = next;
    // Until the catalogue is in, the pool is the sample and its size would
    // mislead, so the line keeps the server-rendered total.
    if (poolEl && full) {
      const bits = [];
      if (activeSources.size === 1) bits.push(escapeText([...activeSources][0]));
      else if (activeSources.size) bits.push(escapeText(fill(L.sources, {n: activeSources.size})));
      if (activeGenres.size) bits.push(escapeText([...activeGenres].map(g => (g === UNTAGGED ? L.untagged : g)).join(' / ')));
      if (activeLengths.size) bits.push(escapeText(LENGTHS.filter(l => activeLengths.has(l[1])).map(l => l[0]).join(' / ')));
      const label = (MODES.find(m => m[1] === mode) || [])[0];
      if (mode !== 'any' && label) bits.push(escapeText(label.toLocaleLowerCase(L.numberLocale)));
      // each part is its own unbreakable run, so a narrow screen wraps between
      // the parts instead of inside one
      poolEl.innerHTML = [fill(escapeText(L.sets), {n: `<b>${num(pool.length)}</b>`}), ...bits]
        .map(b => `<span>${b}</span>`).join(' · ');
    }
    const clear = $('sel-clear');
    if (clear) clear.hidden = !filtered();
    if (!pool.length) { btn.disabled = true; goText.textContent = L.nothingMatches; }
    else { btn.disabled = false; goText.textContent = current ? L.pickAnother : L.pickMe; }
    btn.toggleAttribute('data-next', !!current && !!pool.length);
  };

  const SPARK_COLORS = ['var(--acid)', 'var(--cyan)', 'var(--yellow)', 'var(--coral)', 'var(--ink)'];
  const SPARKS = 12;
  const burst = $('sel-burst');
  const salute = () => {
    if (!burst) return;
    burst.textContent = '';
    for (let i = 0; i < SPARKS; i += 1) {
      const s = document.createElement('span');
      s.className = 'sel-spark';
      const angle = (Math.PI * 2 * i) / SPARKS + (Math.random() - 0.5) * 0.5;
      const dist = 46 + Math.random() * 50;
      s.style.setProperty('--tx', `${(Math.cos(angle) * dist).toFixed(1)}px`);
      s.style.setProperty('--ty', `${(Math.sin(angle) * dist - dist * 0.35).toFixed(1)}px`);   // bias the spray upward
      s.style.setProperty('--rot', `${((Math.random() * 2 - 1) * 220).toFixed(0)}deg`);
      s.style.setProperty('--c', SPARK_COLORS[i % SPARK_COLORS.length]);
      s.style.animationDelay = `${(Math.random() * 40).toFixed(0)}ms`;
      burst.appendChild(s);
    }
    setTimeout(() => { burst.textContent = ''; }, 660);
  };

  const pick = () => {
    if (!pool.length) return null;
    for (let i = 0; i < 12; i += 1) {
      const item = pool[Math.floor(Math.random() * pool.length)];
      if (pool.length <= recent.length || !recent.includes(item.id)) return item;
    }
    return pool[Math.floor(Math.random() * pool.length)];
  };

  // Saved and Recently played. The first thing a listener asked for: they moved
  // on to the next set, refreshed, and the one they liked was gone. The site is
  // static with no accounts, so both lists live in this browser's localStorage.
  // Every read and write is guarded, because a private window or blocked site
  // data throws rather than coming back empty, and the button has to keep
  // working either way. A snapshot is stored rather than a bare id, so a set
  // that drops out of a later catalogue refresh still has a name and still plays.
  const SAVED_KEY = 'sel-saved';
  const PLAYED_KEY = 'sel-played';
  const PLAYED_MAX = 20;
  const readList = key => {
    try {
      const v = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(v) ? v.filter(x => x && typeof x.id === 'string') : [];
    } catch { return []; }
  };
  const writeList = (key, list) => { try { localStorage.setItem(key, JSON.stringify(list)); } catch {} };
  const snapshot = item => ({ id: item.id, artist: item.artist || '', broadcaster: item.broadcaster || '' });
  let saved = readList(SAVED_KEY);
  let played = readList(PLAYED_KEY);
  const isSaved = id => saved.some(s => s.id === id);
  let libView = saved.length ? 'saved' : 'recent';

  // ---- the screen: an embed, a burst of snow when the channel changes ----
  let frame = null;
  let started = false;
  let startTimer = 0;
  let snowTimer = 0;
  const air = (live, label) => {
    const onair = $('sel-onair');
    if (onair) onair.dataset.live = String(live);
    const pwr = $('sel-pwr');
    if (pwr) pwr.dataset.live = String(live);
    const t = $('sel-onair-t');
    if (t) t.textContent = label;
  };
  const notice = text => { const n = $('sel-notice'); if (!n) return; n.textContent = text; n.hidden = !text; };
  // the seven-segment readout on the control strip, and the green on-screen
  // display an old set flashes over the picture when the channel or volume changes
  const SEG = { 0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg', 5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg', '-': 'g' };
  const segShow = text => {
    const led = $('sel-led');
    if (!led) return;
    led.querySelectorAll('.dg').forEach((g, i) => {
      const on = SEG[text[i]] || '';
      g.querySelectorAll('[data-s]').forEach(p => p.classList.toggle('on', on.includes(p.dataset.s)));
    });
  };
  const chNum = () => dealCount ? String(((dealCount - 1) % 99) + 1).padStart(2, '0') : '--';
  const chLed = () => segShow(chNum());
  let osdTimer = 0;
  const osdShow = which => {
    const ch = $('sel-osd'), vo = $('sel-osd-vol');
    if (!ch || !vo) return;
    ch.hidden = which !== ch;
    vo.hidden = which !== vo;
    clearTimeout(osdTimer);
    osdTimer = setTimeout(() => { ch.hidden = true; vo.hidden = true; }, which === ch ? 3200 : 1600);
  };
  const osdChannel = item => {
    const ch = $('sel-osd');
    if (!ch) return;
    $('sel-osd-ch').textContent = chNum();
    $('sel-osd-name').textContent = item.broadcaster;
    osdShow(ch);
  };
  const osdVolume = () => {
    const vo = $('sel-osd-vol');
    if (!vo) return;
    $('sel-osd-vol-l').textContent = vol ? 'VOLUME' : 'MUTE';
    $('sel-osd-bars').style.setProperty('--v', String(vol));
    $('sel-osd-vol-n').textContent = vol ? String(vol) : '';
    osdShow(vo);
  };
  let toastTimer = 0;
  const toast = text => {
    const el = $('sel-toast');
    if (!el) return;
    el.textContent = text;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 1800);
  };
  // the player window's own title bar carries the tool's name in the page language
  const appName = ((document.querySelector('.selector-page .player .titlebar .name') || {}).textContent || 'The Selector').trim();

  const paint = item => {
    const name = item.artist || item.broadcaster;
    $('sel-now').classList.remove('idle');
    $('sel-artist').textContent = name;
    $('sel-meta').innerHTML = [item.year, fmtDuration(item.seconds), item.views != null ? fill(L.views, {n: fmtCount(item.views)}) : '']
      .filter(Boolean).map(escapeText).join(' · ');
    // every genre tag after the channel, leading with the one the pool was filtered by
    const gs = item.genres || [];
    const matched = gs.find(x => activeGenres.has(x));
    const genreList = matched ? [matched, ...gs.filter(x => x !== matched)] : gs;
    const c = sourceColors[item.broadcaster] || {};
    const tags = [];
    if (item.artist) tags.push(`<span class="tag src" style="--chip-bg:${escapeAttr(c.bg || '#0a0a0a')};--chip-fg:${escapeAttr(c.fg || '#f1eee7')}">${escapeText(item.broadcaster)}</span>`);
    for (const g of genreList.slice(0, 4)) tags.push(`<span class="tag">${escapeText(g)}</span>`);
    $('sel-tags').innerHTML = tags.join('');
    const logo = $('sel-logo');
    const lg = sourceLogos[item.broadcaster];
    if (logo) logo.style.backgroundImage = lg ? `url("${lg}")` : '';
    const yt = $('sel-yt');
    yt.href = `https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}`;
    yt.target = '_blank';
    yt.rel = 'noopener noreferrer';
    yt.removeAttribute('aria-disabled');
    $('sel-back').disabled = !back.length;
    $('sel-share').disabled = false;
    paintSave();
  };
  const paintSave = () => {
    const sv = $('sel-save');
    if (!current) { sv.disabled = true; return; }
    sv.disabled = false;
    const on = isSaved(current.id);
    sv.setAttribute('aria-pressed', on ? 'true' : 'false');
    $('sel-save-t').textContent = on ? L.keySaved : L.keySave;
  };

  const play = (item, { push = true } = {}) => {
    if (!item) return;
    if (push && current && current.id !== item.id) back.push(current);
    current = item;
    recent.push(item.id);
    if (recent.length > 15) recent.shift();
    played = [snapshot(item), ...played.filter(s => s.id !== item.id)].slice(0, PLAYED_MAX);
    writeList(PLAYED_KEY, played);
    $('sel-testcard').hidden = true;
    notice('');
    if (frame) frame.remove();
    const name = item.artist || item.broadcaster;
    frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}?rel=0&autoplay=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;
    frame.title = item.artist ? `${item.artist} · ${item.broadcaster}` : item.broadcaster;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.addEventListener('load', () => listen(frame));
    screen.prepend(frame);
    // the set changes channel: a burst of snow, the readout ticks, the knob turns
    chLed();
    osdChannel(item);
    const knob = $('sel-knob');
    if (knob) knob.style.setProperty('--r', `${(dealCount * 47) % 360}deg`);
    if (!reduceMotion) {
      const st = $('sel-static');
      if (st) { st.hidden = false; clearTimeout(snowTimer); snowTimer = setTimeout(() => { st.hidden = true; }, 480); }
    }
    started = false;
    clearTimeout(startTimer);
    // phones often refuse autoplay with sound: say so instead of sitting on a black frame
    startTimer = setTimeout(() => { if (!started && current === item) notice(L.tapToStart); }, 4000);
    air(false, L.tuning);
    paint(item);
    try { history.replaceState(null, '', '#' + item.id); } catch {}
    document.title = `▶ ${item.artist ? `${item.artist} · ${item.broadcaster}` : item.broadcaster} · ${appName}`;
    const sr = $('sel-sr');
    if (sr) sr.textContent = fill(L.nowPlaying, {name: item.artist ? `${item.artist}, ${item.broadcaster}` : name});
    rebuildPool();
    renderLibrary();
  };

  // YouTube's embed speaks postMessage when asked: enough to know playing,
  // paused and "this video cannot be embedded" (errors 100/101/150), so a set
  // that has gone from YouTube is replaced instead of sitting on an error.
  const listen = f => {
    const hello = () => { try { f.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 'sel', channel: 'widget' }), '*'); } catch {} };
    hello(); setTimeout(hello, 400); setTimeout(hello, 1200);
  };
  window.addEventListener('message', e => {
    let host = '';
    try { host = new URL(e.origin).hostname; } catch { return; }
    if (!/(^|\.)youtube(-nocookie)?\.com$/.test(host)) return;
    if (!frame || e.source !== frame.contentWindow) return;
    let d;
    try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch { return; }
    if (!d) return;
    if (d.event === 'onError') { unavailable(); return; }
    const st = d.event === 'onStateChange' ? d.info : d.event === 'infoDelivery' && d.info ? d.info.playerState : undefined;
    if (st === 1) { if (!started) applyVol(); started = true; notice(''); air(true, L.onAir); }
    else if (st === 2) air(false, L.paused);
    else if (st === 3) air(false, L.tuning);
    else if (st === 0) air(false, L.ended);
  });
  const unavailable = () => {
    const gone = current;
    air(false, L.noSignal);
    notice(L.unavailable);
    setTimeout(() => { if (current === gone) play(pick(), { push: false }); }, 1600);
  };

  // ---- volume knob: the embed's own volume, through the YouTube player API ----
  // Drag up or down, scroll, or use the arrow keys; a plain click mutes and
  // unmutes. Phones hide it: iOS ignores a page setting media volume, and the
  // side buttons do it anyway.
  let vol = 80;
  let unmuted = 80;
  try { const s = localStorage.getItem('sel-vol'); if (s !== null && +s >= 0 && +s <= 100) vol = +s; } catch {}
  const ytCommand = (func, args = []) => { try { if (frame) frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*'); } catch {} };
  function applyVol() { ytCommand(vol ? 'unMute' : 'mute'); ytCommand('setVolume', [vol]); }
  const setVol = (v, show = true) => {
    vol = Math.max(0, Math.min(100, Math.round(v)));
    if (vol) unmuted = vol;
    const k = $('sel-vol');
    if (!k) return;
    k.style.setProperty('--r', `${-135 + vol * 2.7}deg`);
    k.setAttribute('aria-valuenow', String(vol));
    k.setAttribute('aria-valuetext', vol ? fill(L.volume, {n: vol}) : L.muted);
    applyVol();
    try { localStorage.setItem('sel-vol', String(vol)); } catch {}
    if (show) {
      osdVolume();
    }
  };
  (() => {
    const k = $('sel-vol');
    if (!k) return;
    setVol(vol, false);
    k.addEventListener('keydown', e => {
      const step = { ArrowUp: 5, ArrowRight: 5, ArrowDown: -5, ArrowLeft: -5, PageUp: 20, PageDown: -20 }[e.key];
      if (step) { e.preventDefault(); setVol(vol + step); }
      else if (e.key === 'Home') { e.preventDefault(); setVol(0); }
      else if (e.key === 'End') { e.preventDefault(); setVol(100); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setVol(vol ? 0 : unmuted); }
    });
    k.addEventListener('wheel', e => { e.preventDefault(); setVol(vol + (e.deltaY < 0 ? 5 : -5)); }, { passive: false });
    let drag = null;
    k.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, v: vol, moved: false }; try { k.setPointerCapture(e.pointerId); } catch {} });
    k.addEventListener('pointermove', e => {
      if (!drag) return;
      const d = (e.clientX - drag.x) - (e.clientY - drag.y);
      if (Math.abs(d) > 3) drag.moved = true;
      if (drag.moved) setVol(drag.v + d * 0.8);
    });
    k.addEventListener('pointerup', () => { if (drag && !drag.moved) setVol(vol ? 0 : unmuted); drag = null; });
    k.addEventListener('pointercancel', () => { drag = null; });
  })();

  const go = () => {
    const item = pick();
    if (!item) return;
    dealCount += 1;
    // What the button is for. The parameters are the question worth asking of
    // it: does anyone narrow the catalogue before pressing, and does narrowing
    // make them press again.
    track('selector_deal', {
      mode,
      sources: activeSources.size,
      genres: activeGenres.size,
      lengths: activeLengths.size,
      pool: pool.length,
      pick_number: Math.min(dealCount, 4),
      filtered: filtered(),
      selected_source: selectedValue(activeSources),
      selected_genre: selectedValue(activeGenres),
      selected_length: selectedValue(activeLengths),
      result_source: item.broadcaster || '',
      result_genre: item.genres && item.genres.length ? item.genres[0] : 'untagged',
      pool_bucket: poolBucket(pool.length)
    });
    if (!reduceMotion) salute();
    play(item);
  };
  btn.addEventListener('click', go);
  $('sel-testcard').addEventListener('click', go);
  const knob = $('sel-knob');
  if (knob) knob.addEventListener('click', go);
  $('sel-back').addEventListener('click', () => { const p = back.pop(); if (p) play(p, { push: false }); });

  // The same salute the deal button gets, in the save button's own register:
  // a few hearts drift up out of it and fade. Only on saving, never on unsaving.
  const HEART_COLORS = ['var(--coral)', 'var(--acid)', 'var(--yellow)', 'var(--cyan)', 'var(--ink)'];
  const floatHearts = button => {
    if (reduceMotion) return;
    for (let i = 0; i < 5; i += 1) {
      const h = document.createElement('span');
      h.className = 'sel-heart';
      h.setAttribute('aria-hidden', 'true');
      h.textContent = '♥';
      h.style.setProperty('--dx', `${((Math.random() - 0.5) * 70).toFixed(0)}px`);
      h.style.setProperty('--rot', `${((Math.random() - 0.5) * 50).toFixed(0)}deg`);
      h.style.setProperty('--s', (0.8 + Math.random() * 0.7).toFixed(2));
      h.style.setProperty('--c', HEART_COLORS[i % HEART_COLORS.length]);
      h.style.animationDelay = `${i * 60}ms`;
      button.appendChild(h);
      h.addEventListener('animationend', () => h.remove());
    }
  };

  const toggleSave = id => {
    const target = typeof id === 'string' ? id : current && current.id;
    if (!target) return;
    const on = !isSaved(target);
    if (on) {
      const item = (current && current.id === target ? current : null) || all.find(s => s.id === target);
      if (!item) return;
      saved = [snapshot(item), ...saved];
      // the first save is the moment the list becomes worth looking at
      libView = 'saved';
      toast(L.savedToast);
    } else {
      saved = saved.filter(s => s.id !== target);
    }
    writeList(SAVED_KEY, saved);
    track('set_saved', { on, source: current ? current.broadcaster : '' });
    if (current && current.id === target) {
      paintSave();
      if (on) floatHearts($('sel-save'));
    }
    renderLibrary();
  };
  $('sel-save').addEventListener('click', () => toggleSave());

  $('sel-share').addEventListener('click', async () => {
    if (!current) return;
    const url = location.href.split('#')[0] + '#' + current.id;
    const title = current.artist ? `${current.artist} · ${current.broadcaster}` : current.broadcaster;
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch {}
      return;
    }
    try { await navigator.clipboard.writeText(url); toast(L.linkCopied); } catch { toast(url); }
  });

  // The outbound click is the one that means something: the set was taken away
  // rather than left playing in the corner of a tab.
  $('sel-yt').addEventListener('click', e => {
    if (!current) { e.preventDefault(); return; }
    track('set_opened', {
      mode,
      source: current.broadcaster,
      id: current.id,
      pick_number: Math.min(dealCount, 4)
    });
  });

  // keyboard: the deck answers to the keys a player answers to, unless you are in a field
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.defaultPrevented) return;
    const tag = (e.target && e.target.tagName || '').toLowerCase();
    if (['input', 'select', 'textarea', 'summary', 'a'].includes(tag) || (e.target && e.target.isContentEditable)) return;
    if (tag === 'button' && (e.key === ' ' || e.key === 'Enter')) return;
    if (e.key === ' ' || e.key === 'n' || e.key === 'N') { e.preventDefault(); go(); }
    else if (e.key === 'b' || e.key === 'B') $('sel-back').click();
    else if ((e.key === 's' || e.key === 'S') && current) toggleSave();
  });

  // ---- crate ----
  const crate = $('sel-crate');
  const libTabs = [$('sel-tab-saved'), $('sel-tab-recent')].filter(Boolean);
  function renderLibrary() {
    if (!crate) return;
    const savedN = $('sel-n-saved');
    const playedN = $('sel-n-recent');
    if (savedN) savedN.textContent = String(saved.length);
    if (playedN) playedN.textContent = String(played.length);
    libTabs.forEach(t => {
      const on = t.dataset.list === libView;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      const panel = $('sel-crate-panel');
      if (on && panel) panel.setAttribute('aria-labelledby', t.id);
    });
    const list = libView === 'saved' ? saved : played;
    if (!list.length) {
      crate.innerHTML = `<li><span class="empty">${escapeText(libView === 'saved' ? L.emptySaved : L.emptyRecent)}</span></li>`;
      return;
    }
    crate.innerHTML = list.map(s => {
      const name = s.artist || s.broadcaster || s.id;
      const sub = s.artist ? s.broadcaster : '';
      const playing = current && current.id === s.id;
      const remove = libView === 'saved'
        ? `<button type="button" class="x" data-id="${escapeAttr(s.id)}" aria-label="${escapeAttr(fill(L.remove, {name}))}">×</button>`
        : '';
      return `<li${playing ? ' aria-current="true"' : ''}><button type="button" class="play" data-id="${escapeAttr(s.id)}"><span class="n">${escapeText(name)}</span>${
        sub ? `<span class="s">${escapeText(sub)}</span>` : ''}</button>${remove}</li>`;
    }).join('');
  }
  const playFromLibrary = id => {
    const known = all.find(s => s.id === id);
    const item = known || saved.find(s => s.id === id) || played.find(s => s.id === id);
    if (!item) return;
    track('library_play', { list: libView, source: item.broadcaster || '' });
    play(known || { ...item });
    const top = screen.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.5) {
      screen.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };
  if (crate) crate.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target : null;
    if (!t) return;
    const rm = t.closest('.x');
    if (rm) { toggleSave(rm.dataset.id); return; }
    const p = t.closest('.play');
    if (p) playFromLibrary(p.dataset.id);
  });
  libTabs.forEach(tab => {
    tab.addEventListener('click', () => { libView = tab.dataset.list; renderLibrary(); });
    // two tabs, one tab stop, arrows move between them
    tab.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const next = libTabs.find(x => x !== tab);
      if (!next) return;
      libView = next.dataset.list;
      renderLibrary();
      next.focus();
    });
  });

  // Mode is one-of-four, unlike Source and Genre which are multi-select. So it is
  // a radio group, not a row of independent toggles: role="radio"/aria-checked,
  // a single tab stop, and arrow keys to move between the options.
  const modeNote = () => {
    const note = $('sel-mode-note');
    if (!note) return;
    const m = MODES.find(x => x[1] === mode) || MODES[0];
    // the unfiltered option states the real size of the catalogue
    const total = full ? all.length : (first && first.c ? first.c.b.reduce((n, [, c]) => n + c, 0) : all.length);
    note.textContent = mode === 'any' ? fill(L.allSets, {n: num(total)}) : m[2];
  };
  function buildModeChips() {
    if (!modesEl) return;
    modesEl.textContent = '';
    const chips = MODES.map(([label, value]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.dataset.value = value;
      b.setAttribute('aria-checked', value === mode ? 'true' : 'false');
      b.tabIndex = value === mode ? 0 : -1;
      b.textContent = label;
      modesEl.appendChild(b);
      return b;
    });
    const select = (chip, focus) => {
      mode = chip.dataset.value;
      track('filter_used', {facet: 'mode', value: mode});
      chips.forEach(x => {
        const on = x === chip;
        x.setAttribute('aria-checked', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
      });
      if (focus) chip.focus();
      modeNote();
      rebuildPool();
    };
    const STEP = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    chips.forEach((c, i) => {
      c.addEventListener('click', () => select(c));
      c.addEventListener('keydown', e => {
        if (e.key === 'Home' || e.key === 'End') {
          e.preventDefault();
          select(chips[e.key === 'Home' ? 0 : chips.length - 1], true);
          return;
        }
        const step = STEP[e.key];
        if (!step) return;
        e.preventDefault();
        select(chips[(i + step + chips.length) % chips.length], true);
      });
    });
    modeNote();
    return chips;
  }

  const syncers = [];
  function makeChips(container, entries, activeSet, { iconFor, paintFor, peek, always, facet } = {}) {
    if (!container) return;
    container.textContent = '';
    const folds = () => always || isNarrow();
    const chip = (name, value, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.dataset.value = value;
      const tint = paintFor && paintFor(value);
      if (tint) {
        b.style.setProperty('--on-bg', tint.bg);
        b.style.setProperty('--on-fg', tint.fg);
        b.style.setProperty('--hov', tint.bg);
        b.style.setProperty('--hov-fg', tint.fg);
      }
      const icon = iconFor && value ? iconFor(value) : '';
      b.innerHTML = `${icon}<span>${escapeText(name)}</span>${n == null ? '' : `<span class="n">${num(n)}</span>`}`;
      container.appendChild(b);
      return b;
    };
    const allChip = chip(L.all, '', null);
    allChip.classList.add('all');
    const chips = entries.map(([name, value, n]) => chip(name, value, n));

    let expanded = false;
    let more = null;
    if (peek && chips.length > peek) {
      more = document.createElement('button');
      more.type = 'button';
      more.className = 'chip more';
      more.addEventListener('click', () => { expanded = !expanded; applyPeek(); });
      container.appendChild(more);
    }
    const applyPeek = () => {
      if (!more) return;
      const clamp = folds() && !expanded;
      chips.forEach((c, i) => { c.hidden = clamp && i >= peek && !activeSet.has(c.dataset.value); });
      const hidden = chips.filter(c => c.hidden).length;
      more.hidden = !folds() || (!hidden && !expanded);
      more.textContent = hidden ? fill(L.more, {n: hidden}) : L.fewer;
      more.setAttribute('aria-expanded', hidden ? 'false' : 'true');
      more.setAttribute('aria-label', fill(hidden ? L.moreLabel : L.fewerLabel, {n: hidden, total: chips.length}));
    };
    if (more) repeek.push(applyPeek);

    const paintPressed = () => {
      allChip.setAttribute('aria-pressed', activeSet.size ? 'false' : 'true');
      chips.forEach(c => c.setAttribute('aria-pressed', activeSet.has(c.dataset.value) ? 'true' : 'false'));
      applyPeek();
    };
    syncers.push(paintPressed);
    paintPressed();
    const sync = () => { paintPressed(); rebuildPool(); };
    allChip.addEventListener('click', () => { activeSet.clear(); track('filter_used', {facet, value: 'all'}); sync(); });
    chips.forEach(c => c.addEventListener('click', () => {
      const v = c.dataset.value;
      if (activeSet.has(v)) activeSet.delete(v); else activeSet.add(v);
      track('filter_used', {facet, value: v, on: activeSet.has(v)});
      sync();
    }));
  }

  // The chips are built once, from the counts the page carries for the whole
  // catalogue, so they do not shift under the reader when the full file lands.
  let modeChips = null;
  function buildFilters() {
    const c = first && first.c;
    const sourceIcon = value => {
      const src = sourceLogos[value];
      return src ? `<img src="${escapeAttr(src)}" width="16" height="16" alt="" loading="lazy" decoding="async">` : '';
    };
    // biggest channel first, the same ordering the genre chips use, so the row
    // reads as a ranking rather than an alphabet nobody scans
    const srcEntries = c ? c.b.map(([n, k]) => [n, n, k]) : (() => {
      const m = new Map();
      for (const s of all) m.set(s.broadcaster, (m.get(s.broadcaster) || 0) + 1);
      return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([n]) => [n, n, null]);
    })();
    makeChips($('sel-c-ch'), srcEntries, activeSources,
      { iconFor: sourceIcon, paintFor: value => sourceColors[value] || null, peek: SOURCE_PEEK, facet: 'source' });
    const genres = c ? c.g.map(([g, n]) => [g, g, n]) : [];
    if (c && c.u) genres.push([L.untagged, UNTAGGED, c.u]);
    if (genres.length) makeChips($('sel-c-genre'), genres, activeGenres, { peek: GENRE_PEEK, always: true, facet: 'genre' });
    else { const g = document.querySelector('.selector-page .g-genre'); if (g) g.hidden = true; }
    const lens = LENGTHS.map(([name, value]) => [name, value, c && c.l ? c.l[value] : null]).filter(l => l[2] == null || l[2] > 0);
    makeChips($('sel-c-length'), lens, activeLengths, { facet: 'length' });
    modeChips = buildModeChips();
    if (NARROW && NARROW.addEventListener) NARROW.addEventListener('change', () => repeek.forEach(f => f()));
  }

  const clearBtn = $('sel-clear');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    activeSources.clear(); activeGenres.clear(); activeLengths.clear();
    track('filter_used', {facet: 'all', value: 'all'});
    syncers.forEach(f => f());
    if (modeChips && mode !== 'any') {
      mode = 'any';
      modeChips.forEach(x => { const on = x.dataset.value === 'any'; x.setAttribute('aria-checked', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1; });
      modeNote();
    }
    rebuildPool();
  });

  // ---- clock ----
  const clock = $('sel-clock');
  const tick = () => { if (clock) clock.textContent = new Date().toLocaleTimeString(L.numberLocale, { hour: '2-digit', minute: '2-digit', hour12: false }); };
  tick();
  setInterval(tick, 15000);

  // ---- boot: usable now, complete later ----
  buildFilters();
  rebuildPool();
  renderLibrary();
  const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
  const tryHash = () => {
    if (!hashId || current) return;
    const s = all.find(x => x.id === hashId);
    if (s) play(s, { push: false });
  };
  tryHash();

  const loadFull = () => fetch('/selector-data.min.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      const next = expand(data);
      if (!next.length) throw new Error('empty');
      all = next;
      full = true;
      const rates = all.filter(s => s.likes != null && s.views >= 1000)
        .map(s => s.likes / s.views).sort((a, b) => a - b);
      if (rates.length) gemPrior = rates[rates.length >> 1];
      const st = $('sel-st-sets');
      if (st) st.textContent = num(all.length);
      modeNote();
      rebuildPool();
      tryHash();
    })
    .catch(() => { if (poolEl) poolEl.insertAdjacentText('beforeend', ` · ${L.loadFailed}`); });
  // a hash that is not in the sample should not wait for the browser to go idle
  if (hashId && !current) loadFull();
  else ('requestIdleCallback' in window ? window.requestIdleCallback : setTimeout)(loadFull, { timeout: 1500 });
})();

// "New channels" banner. Server-rendered but hidden, so it only appears when
// this browser has not dismissed the current batch (keyed by its added date).
(() => {
  const box = document.getElementById('sel-new');
  if (!box) return;
  const key = 'sel-new-dismissed';
  let seen = '';
  try { seen = localStorage.getItem(key) || ''; } catch {}
  if (seen === box.dataset.key) return;
  box.hidden = false;
  document.getElementById('sel-new-close').addEventListener('click', () => {
    box.hidden = true;
    try { localStorage.setItem(key, box.dataset.key); } catch {}
  });
})();
