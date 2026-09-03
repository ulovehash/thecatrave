(() => {
  const btn = document.getElementById('sel-go');
  const stage = document.getElementById('sel-stage');
  const count = document.getElementById('sel-count');
  const sources = document.getElementById('sel-sources');
  const popular = document.getElementById('sel-popular');
  if (!btn || !stage) return;

  let all = [];
  let pool = [];
  const recent = [];
  const active = new Set();          // selected broadcasters ("" set = all)

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setButton = (label, state, disabled) => {
    btn.textContent = label;
    btn.dataset.state = state;
    btn.disabled = !!disabled;
  };

  const fmtDuration = s => {
    if (!s) return '';
    const h = Math.floor(s / 3600);
    const m = Math.round((s % 3600) / 60);
    return h ? `${h}h ${m}m` : `${m}m`;
  };
  const escapeText = v => { const d = document.createElement('div'); d.textContent = v == null ? '' : String(v); return d.innerHTML; };
  const escapeAttr = v => escapeText(v).replace(/"/g, '&quot;');

  const render = item => {
    const meta = [item.broadcaster, item.published ? String(item.published).slice(0, 4) : '', fmtDuration(item.seconds)]
      .filter(Boolean).join(' · ');
    stage.innerHTML = `
      <div class="sel-card">
        <div class="sel-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}?rel=0&autoplay=1"
                  title="${escapeAttr(item.title || item.artist)}" loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
        </div>
        <p class="sel-artist">${escapeText(item.artist || item.title)}</p>
        <p class="sel-meta">${escapeText(meta)}</p>
        <p class="sel-links"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>
      </div>`;
    try { history.replaceState(null, '', '#' + item.id); } catch {}
  };

  // pool = catalogue, minus the source filter, minus the popular filter.
  const rebuildPool = () => {
    let next = active.size ? all.filter(s => active.has(s.broadcaster)) : all.slice();
    if (popular && popular.checked && next.some(s => s.likes != null)) {
      const scored = next.filter(s => s.likes != null).slice().sort((a, b) => b.likes - a.likes);
      next = scored.slice(0, Math.max(1, Math.ceil(scored.length / 3)));
    }
    pool = next;
    if (count) {
      const scope = active.size === 1 ? ` from ${[...active][0]}` : active.size ? ` from ${active.size} sources` : '';
      count.textContent = `${pool.length.toLocaleString('en-US')} sets${scope}${popular && popular.checked ? ', popular only' : ''}`;
      count.hidden = false;
    }
    if (!pool.length) setButton('Nothing matches — widen the filter', 'empty', true);
    else if (btn.dataset.state !== 'ready') setButton(recent.length ? 'Pick another' : 'Pick me a set', 'ready', false);
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
      setTimeout(() => { delete btn.dataset.spinning; }, 260);
    }
    render(item);
    setButton('Pick another', 'ready', false);
  };
  btn.addEventListener('click', go);

  // --- source chips -----------------------------------------------------------
  const buildChips = () => {
    if (!sources) return;
    const counts = new Map();
    for (const s of all) counts.set(s.broadcaster, (counts.get(s.broadcaster) || 0) + 1);
    const names = [...counts.keys()].sort((a, b) => a.localeCompare(b));

    const chip = (label, value, pressed) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sel-chip';
      b.dataset.value = value;
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      b.textContent = label;
      sources.appendChild(b);
      return b;
    };

    const allChip = chip('All', '', true);
    const chips = names.map(n => chip(`${n} (${counts.get(n)})`, n, false));

    const sync = () => {
      allChip.setAttribute('aria-pressed', active.size ? 'false' : 'true');
      chips.forEach(c => c.setAttribute('aria-pressed', active.has(c.dataset.value) ? 'true' : 'false'));
      rebuildPool();
    };

    allChip.addEventListener('click', () => { active.clear(); sync(); });
    chips.forEach(c => c.addEventListener('click', () => {
      const v = c.dataset.value;
      if (active.has(v)) active.delete(v); else active.add(v);
      sync();
    }));
  };

  if (popular) popular.addEventListener('change', rebuildPool);

  fetch('selector-data.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      all = Array.isArray(data) ? data.filter(s => s && s.id) : [];
      if (!all.length) { setButton('Catalogue is still being built', 'empty', true); return; }

      buildChips();
      if (popular && all.some(s => s.likes != null)) popular.disabled = false;
      rebuildPool();
      setButton('Pick me a set', 'ready', false);

      const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
      const fromHash = hashId && all.find(s => s.id === hashId);
      if (fromHash) { recent.push(fromHash.id); render(fromHash); setButton('Pick another', 'ready', false); }
    })
    .catch(() => setButton('Catalogue failed to load — reload the page', 'error', true));
})();
