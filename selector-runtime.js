(() => {
  const btn = document.getElementById('sel-go');
  const stage = document.getElementById('sel-stage');
  const count = document.getElementById('sel-count');
  const sourcesEl = document.getElementById('sel-sources');
  const genresEl = document.getElementById('sel-genres');
  const genresWrap = document.getElementById('sel-genres-wrap');
  const lengthsEl = document.getElementById('sel-lengths');
  const lengthsWrap = document.getElementById('sel-lengths-wrap');
  const modesEl = document.getElementById('sel-modes');
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
  // roughly two rows on a phone, which is enough for the group to read as a list
  const SOURCE_PEEK = 5;
  const GENRE_PEEK = 8;
  const burst = document.getElementById('sel-burst');
  if (!btn || !stage) return;

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
    stillBuilding: 'Catalogue is still being built',
    loadFailed: 'Catalogue failed to load — reload the page',
    year: 'Year',
    length: 'Length',
    views: 'Views',
    watch: 'Watch on YouTube ↗',
    save: '♡ Save',
    saved: '♥ Saved',
    emptySaved: 'Nothing saved yet. Press ♡ Save under a set to keep it here.',
    emptyRecent: 'Nothing played yet.',
    remove: 'Remove {name} from saved'
  };
  try { Object.assign(L, JSON.parse(document.getElementById('sel-i18n').textContent) || {}); } catch {}
  const fill = (text, values) => text.replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m));
  const num = n => n.toLocaleString(L.numberLocale);

  let all = [];
  let pool = [];
  const recent = [];
  const activeSources = new Set();
  const activeGenres = new Set();
  const activeLengths = new Set();
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
  // the deck promises a set out of all 62,877.
  let mode = 'any';

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let sourceLogos = {};
  try { sourceLogos = JSON.parse(document.getElementById('sel-source-logos').textContent) || {}; } catch {}
  // One colour per channel, generated by scripts/channel-colors.py: taken from
  // the logo where the logo has one, and a spread-out tint where it is a
  // black-and-white wordmark. Applied per chip rather than as CSS rules so a
  // new channel is coloured the moment it appears, with no stylesheet to edit.
  let sourceColors = {};
  try { sourceColors = JSON.parse(document.getElementById('sel-source-colors').textContent) || {}; } catch {}

  // Below the two-column layout the filters sit under the button, and 37 source
  // chips put a screen of scrolling between the reader and the rest of the page.
  // So the long groups show their first rows and park the rest behind a chip
  // that says how many are hidden: the row has to look like a lid, not like the
  // whole shelf. Anything switched on stays visible however far down the list it
  // sits, or a filter you set would vanish when you collapsed the group.
  const NARROW = window.matchMedia && window.matchMedia('(max-width: 63.99rem)');
  const isNarrow = () => (NARROW ? NARROW.matches : false);
  const repeek = [];

  const setButton = (label, state, disabled) => {
    btn.textContent = label;
    btn.dataset.state = state;
    btn.disabled = !!disabled;
  };
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

  const render = item => {
    const name = item.artist || item.broadcaster;
    const label = item.title || (item.artist ? `${item.artist} · ${item.broadcaster}` : item.broadcaster);
    // show every genre tag, leading with the one the pool was filtered by
    const gs = item.genres || [];
    const matched = gs.find(x => activeGenres.has(x));
    const genreList = matched ? [matched, ...gs.filter(x => x !== matched)] : gs;
    const facts = [
      item.year ? [L.year, String(item.year)] : null,
      item.seconds ? [L.length, fmtDuration(item.seconds)] : null,
      item.views != null ? [L.views, fmtCount(item.views)] : null
    ].filter(Boolean)
      .map(([k, v]) => `<span><b>${k}:</b> ${escapeText(v)}</span>`)
      .join('');
    const tags = [];
    if (item.artist) {
      const lg = sourceLogos[item.broadcaster];
      const img = lg ? `<img class="sel-chip-logo" src="${escapeAttr(lg)}" width="14" height="14" alt="" loading="lazy" decoding="async">` : '';
      tags.push(`<span class="sel-tag-source" data-value="${escapeAttr(item.broadcaster)}">${img}${escapeText(item.broadcaster)}</span>`);
    }
    for (const g of genreList) tags.push(`<span class="sel-tag-genre">${escapeText(g)}</span>`);
    stage.innerHTML = `
      <div class="sel-card">
        <div class="sel-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}?rel=0&autoplay=1"
                  title="${escapeAttr(label)}" loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
        </div>
        <p class="sel-artist">${escapeText(name)}</p>
        ${tags.length ? `<p class="sel-tags">${tags.join('')}</p>` : ''}
        ${facts ? `<p class="sel-facts">${facts}</p>` : ''}
        <p class="sel-links">${saveButton(item)}<a href="https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}" target="_blank" rel="noopener noreferrer">${escapeText(L.watch)}</a></p>
      </div>`;
    try { history.replaceState(null, '', '#' + item.id); } catch {}
    remember(item);
  };

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
    if (count) {
      const bits = [];
      if (activeSources.size === 1) bits.push([...activeSources][0]);
      else if (activeSources.size) bits.push(fill(L.sources, {n: activeSources.size}));
      if (activeGenres.size) bits.push([...activeGenres].map(g => (g === UNTAGGED ? L.untagged : g)).join(' / '));
      if (activeLengths.size) bits.push(LENGTHS.filter(l => activeLengths.has(l[1])).map(l => l[0]).join(' / '));
      const label = (MODES.find(m => m[1] === mode) || [])[0];
      if (mode !== 'any' && label) bits.push(label.toLocaleLowerCase(L.numberLocale));
      // each part is its own unbreakable run, so a narrow screen wraps between
      // "popular" and "from 7K views" instead of between "from" and "7K"
      count.innerHTML = [fill(L.sets, {n: num(pool.length)}), ...bits]
        .map(b => `<span>${escapeText(b)}</span>`).join(' · ');
      count.hidden = false;
    }
    if (!pool.length) setButton(L.nothingMatches, 'empty', true);
    else if (btn.dataset.state !== 'ready') setButton(recent.length ? L.pickAnother : L.pickMe, 'ready', false);
  };

  const SPARK_COLORS = ['var(--acid)', 'var(--cyan)', 'var(--yellow)', 'var(--coral)', 'var(--ink)'];
  const SPARKS = 12;
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
      if (pool.length <= recent.length || !recent.includes(item.id)) {
        recent.push(item.id);
        if (recent.length > 15) recent.shift();
        return item;
      }
    }
    return pool[Math.floor(Math.random() * pool.length)];
  };

  // Analytics must never be load-bearing. gtag is absent on localhost by design
  // and disabled in the owner's browser, so every call here has to be a no-op
  // rather than a thrown error inside a click handler.
  const track = (name, params) => { try { if (window.gtag) window.gtag('event', name, params || {}); } catch {} };
  let current = null;
  let dealCount = 0;

  const selectedValue = active => active.size === 0 ? 'none' : active.size === 1 ? [...active][0] : 'multiple';
  const poolBucket = size => size <= 50 ? '1-50' : size <= 500 ? '51-500' : size <= 5000 ? '501-5000' : '5000+';

  const go = () => {
    const item = pick();
    if (!item) return;
    current = item;
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
      filtered: !!(activeSources.size || activeGenres.size || activeLengths.size || mode !== 'any'),
      selected_source: selectedValue(activeSources),
      selected_genre: selectedValue(activeGenres),
      selected_length: selectedValue(activeLengths),
      result_source: item.broadcaster || '',
      result_genre: item.genres && item.genres.length ? item.genres[0] : 'untagged',
      pool_bucket: poolBucket(pool.length)
    });
    if (!reduceMotion) {
      btn.dataset.spinning = 'true';
      setTimeout(() => { delete btn.dataset.spinning; }, 300);
      salute();
    }
    render(item);
    setButton(L.pickAnother, 'ready', false);
  };
  btn.addEventListener('click', go);

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

  const library = document.getElementById('sel-library');
  const libList = document.getElementById('sel-library-list');
  const libTabs = library ? [...library.querySelectorAll('.sel-library-tab')] : [];
  const savedN = document.getElementById('sel-saved-n');
  const playedN = document.getElementById('sel-recent-n');
  let libView = saved.length ? 'saved' : 'recent';

  function saveButton(item) {
    const on = isSaved(item.id);
    return `<button type="button" class="sel-save" aria-pressed="${on}" data-id="${escapeAttr(item.id)}">${escapeText(on ? L.saved : L.save)}</button>`;
  }

  function renderLibrary() {
    if (!library || !libList) return;
    library.hidden = !saved.length && !played.length;
    if (savedN) savedN.textContent = String(saved.length);
    if (playedN) playedN.textContent = String(played.length);
    libTabs.forEach(t => {
      const on = t.dataset.list === libView;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (on) libList.setAttribute('aria-labelledby', t.id);
    });
    const list = libView === 'saved' ? saved : played;
    if (!list.length) {
      libList.innerHTML = `<li class="sel-library-empty">${libView === 'saved'
        ? escapeText(L.emptySaved)
        : escapeText(L.emptyRecent)}</li>`;
      return;
    }
    libList.innerHTML = list.map(s => {
      const name = s.artist || s.broadcaster || s.id;
      const sub = s.artist ? s.broadcaster : '';
      const playing = current && current.id === s.id;
      const remove = libView === 'saved'
        ? `<button type="button" class="sel-library-remove" data-id="${escapeAttr(s.id)}" aria-label="${escapeAttr(fill(L.remove, {name}))}">×</button>`
        : '';
      return `<li${playing ? ' aria-current="true"' : ''}><button type="button" class="sel-library-play" data-id="${escapeAttr(s.id)}"><span class="sel-library-name">${escapeText(name)}</span>${
        sub ? `<span class="sel-library-src">${escapeText(sub)}</span>` : ''}</button>${remove}</li>`;
    }).join('');
  }

  function remember(item) {
    current = item;
    played = [snapshot(item), ...played.filter(s => s.id !== item.id)].slice(0, PLAYED_MAX);
    writeList(PLAYED_KEY, played);
    renderLibrary();
  }

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
    const on = !isSaved(id);
    if (on) {
      const item = (current && current.id === id ? current : null) || all.find(s => s.id === id);
      if (!item) return;
      saved = [snapshot(item), ...saved];
      // the first save is the moment the list becomes worth looking at
      libView = 'saved';
    } else {
      saved = saved.filter(s => s.id !== id);
    }
    writeList(SAVED_KEY, saved);
    track('set_saved', { on, source: current ? current.broadcaster : '' });
    stage.querySelectorAll('.sel-save').forEach(b => {
      if (b.dataset.id !== id) return;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.textContent = on ? L.saved : L.save;
      if (on) floatHearts(b);
    });
    renderLibrary();
  };

  const playFromLibrary = id => {
    const known = all.find(s => s.id === id);
    const item = known || saved.find(s => s.id === id) || played.find(s => s.id === id);
    if (!item) return;
    track('library_play', { list: libView, source: item.broadcaster || '' });
    recent.push(item.id);
    if (recent.length > 15) recent.shift();
    render(known || { ...item });
    if (all.length) setButton(L.pickAnother, 'ready', false);
    const top = stage.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.5) {
      stage.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  if (library) {
    library.addEventListener('click', e => {
      const t = e.target && e.target.closest ? e.target : null;
      if (!t) return;
      const tab = t.closest('.sel-library-tab');
      if (tab) { libView = tab.dataset.list; renderLibrary(); return; }
      const rm = t.closest('.sel-library-remove');
      if (rm) { toggleSave(rm.dataset.id); return; }
      const play = t.closest('.sel-library-play');
      if (play) playFromLibrary(play.dataset.id);
    });
    // two tabs, one tab stop, arrows move between them
    libTabs.forEach(tab => tab.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const next = libTabs.find(x => x !== tab);
      if (!next) return;
      libView = next.dataset.list;
      renderLibrary();
      next.focus();
    }));
  }
  renderLibrary();

  if (stage) stage.addEventListener('click', e => {
    const b = e.target && e.target.closest ? e.target.closest('.sel-save') : null;
    if (b) toggleSave(b.dataset.id);
  });

  // The outbound click is the one that means something: the set was taken away
  // rather than left playing in the corner of a tab.
  if (stage) stage.addEventListener('click', e => {
    const a = e.target && e.target.closest ? e.target.closest('.sel-links a') : null;
    if (a) track('set_opened', {
      mode,
      source: current ? current.broadcaster : '',
      id: current ? current.id : '',
      pick_number: Math.min(dealCount, 4)
    });
  });

  // Mode is one-of-four, unlike Source and Genre which are multi-select. So it is
  // a radio group, not a row of independent toggles: role="radio"/aria-checked,
  // a single tab stop, and arrow keys to move between the options.
  function buildModeChips() {
    if (!modesEl) return;
    modesEl.textContent = '';
    const chips = MODES.map(([label, value, note]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sel-chip';
      b.setAttribute('role', 'radio');
      b.dataset.value = value;
      b.setAttribute('aria-checked', value === mode ? 'true' : 'false');
      b.tabIndex = value === mode ? 0 : -1;
      // the unfiltered option states the real size of the catalogue
      const line = value === 'any' ? fill(L.allSets, {n: num(all.length)}) : note;
      b.innerHTML = `<span class="sel-chip-name">${escapeText(label)}</span>${
        line ? `<span class="sel-chip-note">${escapeText(line)}</span>` : ''}`;
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
  }

  function makeChips(container, entries, activeSet, iconFor, paintFor, peek, facet) {
    if (!container) return;
    container.textContent = '';
    // name and count are separate so narrow screens can drop the count and fit
    // more chips per row
    const chip = (name, value, pressed, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sel-chip';
      b.dataset.value = value;
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      const tint = paintFor && paintFor(value);
      if (tint) {
        b.style.setProperty('--chip-on-bg', tint.bg);
        b.style.setProperty('--chip-on-fg', tint.fg);
        b.style.setProperty('--chip-hover', tint.bg);
        b.style.setProperty('--chip-hover-fg', tint.fg);
      }
      const icon = iconFor ? iconFor(value) : '';
      b.innerHTML = `${icon}<span class="sel-chip-name">${escapeText(name)}</span>${
        n == null ? '' : `<span class="sel-chip-n">(${escapeText(n)})</span>`}`;
      container.appendChild(b);
      return b;
    };
    const allChip = chip(L.all, '', !activeSet.size);
    const chips = entries.map(([name, value, n]) => chip(name, value, activeSet.has(value), n));

    let expanded = false;
    let more = null;
    if (peek && chips.length > peek) {
      more = document.createElement('button');
      more.type = 'button';
      more.className = 'sel-chip sel-chip-more';
      more.addEventListener('click', () => { expanded = !expanded; applyPeek(); });
      container.appendChild(more);
    }
    const applyPeek = () => {
      if (!more) return;
      const clamp = isNarrow() && !expanded;
      chips.forEach((c, i) => { c.hidden = clamp && i >= peek && !activeSet.has(c.dataset.value); });
      const hidden = chips.filter(c => c.hidden).length;
      more.hidden = !isNarrow() || (!hidden && !expanded);
      more.textContent = hidden ? fill(L.more, {n: hidden}) : L.fewer;
      more.setAttribute('aria-expanded', hidden ? 'false' : 'true');
      more.setAttribute('aria-label', fill(hidden ? L.moreLabel : L.fewerLabel, {n: hidden, total: chips.length}));
    };
    if (more) { repeek.push(applyPeek); applyPeek(); }

    const sync = () => {
      allChip.setAttribute('aria-pressed', activeSet.size ? 'false' : 'true');
      chips.forEach(c => c.setAttribute('aria-pressed', activeSet.has(c.dataset.value) ? 'true' : 'false'));
      applyPeek();
      rebuildPool();
    };
    allChip.addEventListener('click', () => { activeSet.clear(); track('filter_used', {facet, value: 'all'}); sync(); });
    chips.forEach(c => c.addEventListener('click', () => {
      const v = c.dataset.value;
      if (activeSet.has(v)) activeSet.delete(v); else activeSet.add(v);
      track('filter_used', {facet, value: v, on: activeSet.has(v)});
      sync();
    }));
  }

  function buildFilters() {
    const rates = all.filter(s => s.likes != null && s.views >= 1000)
      .map(s => s.likes / s.views).sort((a, b) => a - b);
    if (rates.length) gemPrior = rates[rates.length >> 1];
    const srcCounts = new Map();
    const genCounts = new Map();
    let untaggedCount = 0;
    for (const s of all) {
      srcCounts.set(s.broadcaster, (srcCounts.get(s.broadcaster) || 0) + 1);
      const g = s.genres || [];
      if (!g.length) untaggedCount += 1;
      for (const x of g) genCounts.set(x, (genCounts.get(x) || 0) + 1);
    }
    const sourceIcon = value => {
      const src = sourceLogos[value];
      return src ? `<img class="sel-chip-logo" src="${escapeAttr(src)}" width="18" height="18" alt="" loading="lazy" decoding="async">` : '';
    };
    // biggest channel first, the same ordering the genre chips use, so the row
    // reads as a ranking rather than an alphabet nobody scans
    makeChips(sourcesEl,
      [...srcCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([n, c]) => [n, n, c]),
      activeSources, sourceIcon, value => sourceColors[value] || null, SOURCE_PEEK, 'source');
    const ranked = [...genCounts.entries()].filter(([, n]) => n >= 10).sort((a, b) => b[1] - a[1]);
    if (ranked.length) {
      const genres = ranked.slice(0, 18).map(([g, n]) => [g, g, n]);
      if (untaggedCount) genres.push([L.untagged, UNTAGGED]);
      makeChips(genresEl, genres, activeGenres, null, null, GENRE_PEEK, 'genre');
      if (genresWrap) genresWrap.hidden = false;
    }
    const lenCounts = LENGTHS.map(([name, value, lo, hi]) =>
      [name, value, all.filter(s => s.seconds >= lo && s.seconds < hi).length]);
    if (lenCounts.some(l => l[2])) {
      makeChips(lengthsEl, lenCounts.filter(l => l[2]), activeLengths, null, null, null, 'length');
      if (lengthsWrap) lengthsWrap.hidden = false;
    }
    if (all.some(s => s.likes != null)) buildModeChips();
    if (NARROW && NARROW.addEventListener) NARROW.addEventListener('change', () => repeek.forEach(f => f()));
  }

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

  fetch('/selector-data.min.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      all = expand(data);
      if (!all.length) { setButton(L.stillBuilding, 'empty', true); return; }
      buildFilters();
      rebuildPool();
      setButton(L.pickMe, 'ready', false);
      const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
      const fromHash = hashId && all.find(s => s.id === hashId);
      if (fromHash) { recent.push(fromHash.id); render(fromHash); setButton(L.pickAnother, 'ready', false); }
    })
    .catch(() => setButton(L.loadFailed, 'error', true));
})();
