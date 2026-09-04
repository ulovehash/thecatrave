(() => {
  const btn = document.getElementById('sel-go');
  const stage = document.getElementById('sel-stage');
  const count = document.getElementById('sel-count');
  const sourcesEl = document.getElementById('sel-sources');
  const genresEl = document.getElementById('sel-genres');
  const genresWrap = document.getElementById('sel-genres-wrap');
  const popular = document.getElementById('sel-popular');
  const burst = document.getElementById('sel-burst');
  if (!btn || !stage) return;

  let all = [];
  let pool = [];
  const recent = [];
  const activeSources = new Set();
  const activeGenres = new Set();
  const UNTAGGED = ' untagged';

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let sourceLogos = {};
  try { sourceLogos = JSON.parse(document.getElementById('sel-source-logos').textContent) || {}; } catch {}

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
  const heat = s => s.likes || 0;
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
      item.year ? ['Year', String(item.year)] : null,
      item.seconds ? ['Length', fmtDuration(item.seconds)] : null,
      item.views != null ? ['Views', fmtCount(item.views)] : null
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
        <p class="sel-links"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>
      </div>`;
    try { history.replaceState(null, '', '#' + item.id); } catch {}
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
    if (popular && popular.checked && next.some(s => s.likes != null)) {
      const scored = next.filter(s => s.likes != null).slice().sort((a, b) => heat(b) - heat(a));
      next = scored.slice(0, Math.max(1, Math.ceil(scored.length / 3)));
    }
    pool = next;
    if (count) {
      const bits = [];
      if (activeSources.size === 1) bits.push([...activeSources][0]);
      else if (activeSources.size) bits.push(`${activeSources.size} sources`);
      if (activeGenres.size) bits.push([...activeGenres].map(g => (g === UNTAGGED ? 'untagged' : g)).join(' / '));
      if (popular && popular.checked) bits.push('popular');
      count.textContent = `${pool.length.toLocaleString('en-US')} sets${bits.length ? ' · ' + bits.join(' · ') : ''}`;
      count.hidden = false;
    }
    if (!pool.length) setButton('Nothing matches, widen the filter', 'empty', true);
    else if (btn.dataset.state !== 'ready') setButton(recent.length ? 'Pick another' : 'Pick me a set', 'ready', false);
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

  const go = () => {
    const item = pick();
    if (!item) return;
    if (!reduceMotion) {
      btn.dataset.spinning = 'true';
      setTimeout(() => { delete btn.dataset.spinning; }, 300);
      salute();
    }
    render(item);
    setButton('Pick another', 'ready', false);
  };
  btn.addEventListener('click', go);
  if (popular) popular.addEventListener('change', rebuildPool);

  function makeChips(container, entries, activeSet, iconFor) {
    if (!container) return;
    container.textContent = '';
    const chip = (label, value, pressed) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sel-chip';
      b.dataset.value = value;
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      const icon = iconFor ? iconFor(value) : '';
      if (icon) b.innerHTML = `${icon}<span>${escapeText(label)}</span>`;
      else b.textContent = label;
      container.appendChild(b);
      return b;
    };
    const allChip = chip('All', '', !activeSet.size);
    const chips = entries.map(([label, value]) => chip(label, value, activeSet.has(value)));
    const sync = () => {
      allChip.setAttribute('aria-pressed', activeSet.size ? 'false' : 'true');
      chips.forEach(c => c.setAttribute('aria-pressed', activeSet.has(c.dataset.value) ? 'true' : 'false'));
      rebuildPool();
    };
    allChip.addEventListener('click', () => { activeSet.clear(); sync(); });
    chips.forEach(c => c.addEventListener('click', () => {
      const v = c.dataset.value;
      if (activeSet.has(v)) activeSet.delete(v); else activeSet.add(v);
      sync();
    }));
  }

  function buildFilters() {
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
    makeChips(sourcesEl,
      [...srcCounts.keys()].sort((a, b) => a.localeCompare(b)).map(n => [`${n} (${srcCounts.get(n)})`, n]),
      activeSources, sourceIcon);
    const ranked = [...genCounts.entries()].filter(([, n]) => n >= 10).sort((a, b) => b[1] - a[1]);
    if (ranked.length) {
      const genres = ranked.slice(0, 18).map(([g, n]) => [`${g} (${n})`, g]);
      if (untaggedCount) genres.push(['untagged', UNTAGGED]);
      makeChips(genresEl, genres, activeGenres);
      if (genresWrap) genresWrap.hidden = false;
    }
    if (popular && all.some(s => s.likes != null)) popular.disabled = false;
  }

  fetch('selector-data.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      all = Array.isArray(data) ? data.filter(s => s && s.id) : [];
      if (!all.length) { setButton('Catalogue is still being built', 'empty', true); return; }
      buildFilters();
      rebuildPool();
      setButton('Pick me a set', 'ready', false);
      const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
      const fromHash = hashId && all.find(s => s.id === hashId);
      if (fromHash) { recent.push(fromHash.id); render(fromHash); setButton('Pick another', 'ready', false); }
    })
    .catch(() => setButton('Catalogue failed to load — reload the page', 'error', true));
})();
