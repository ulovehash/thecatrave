(() => {
  const btn = document.getElementById('sel-go');
  const stage = document.getElementById('sel-stage');
  const count = document.getElementById('sel-count');
  const source = document.getElementById('sel-source');
  if (!btn || !stage) return;

  let all = [];                    // full catalogue
  let pool = [];                   // catalogue after the source filter
  const recent = [];              // ids of the last few picks, to avoid repeats

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
    const dur = fmtDuration(item.seconds);
    const meta = [item.broadcaster, item.published ? String(item.published).slice(0, 4) : '', dur]
      .filter(Boolean).join(' · ');
    stage.innerHTML = `
      <div class="sel-card">
        <div class="sel-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}?rel=0&autoplay=1"
                  title="${escapeAttr(item.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowfullscreen></iframe>
        </div>
        <p class="sel-artist">${escapeText(item.artist || item.title)}</p>
        <p class="sel-meta">${escapeText(meta)}</p>
        <p class="sel-links"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>
      </div>`;
    try { history.replaceState(null, '', '#' + item.id); } catch {}
  };

  const pick = () => {
    if (!pool.length) return null;
    for (let tries = 0; tries < 12; tries += 1) {
      const item = pool[Math.floor(Math.random() * pool.length)];
      if (pool.length <= recent.length || !recent.includes(item.id)) {
        recent.push(item.id);
        if (recent.length > 10) recent.shift();
        return item;
      }
    }
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const go = () => {
    const item = pick();
    if (!item) return;
    render(item);
    setButton('Pick another', 'ready', false);
  };

  const applyFilter = () => {
    const b = source ? source.value : '';
    pool = b ? all.filter(s => s.broadcaster === b) : all.slice();
    if (count) {
      count.textContent = `${pool.length.toLocaleString('en-US')} sets${b ? ` from ${b}` : ' in the pool'}`;
      count.hidden = false;
    }
    if (!pool.length) {
      setButton('No sets for this source', 'empty', true);
    } else if (btn.dataset.state !== 'ready') {
      setButton('Pick me a set', 'ready', false);
    }
  };

  btn.addEventListener('click', go);
  if (source) source.addEventListener('change', applyFilter);

  fetch('selector-data.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      all = Array.isArray(data) ? data.filter(s => s && s.id) : [];
      if (!all.length) {
        setButton('Catalogue is still being built', 'empty', true);
        return;
      }

      // Fill the source dropdown from the broadcasters actually present.
      if (source) {
        const counts = new Map();
        for (const s of all) counts.set(s.broadcaster, (counts.get(s.broadcaster) || 0) + 1);
        [...counts.keys()].sort((a, b) => a.localeCompare(b)).forEach(name => {
          const opt = document.createElement('option');
          opt.value = name;
          opt.textContent = `${name} (${counts.get(name)})`;
          source.appendChild(opt);
        });
        source.disabled = false;
      }

      pool = all.slice();
      applyFilter();
      setButton('Pick me a set', 'ready', false);

      const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
      const fromHash = hashId && all.find(s => s.id === hashId);
      if (fromHash) {
        recent.push(fromHash.id);
        render(fromHash);
        setButton('Pick another', 'ready', false);
      }
    })
    .catch(() => setButton('Catalogue failed to load — reload the page', 'error', true));
})();
