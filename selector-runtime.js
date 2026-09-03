(() => {
  const btn = document.getElementById('sel-go');
  const stage = document.getElementById('sel-stage');
  const count = document.getElementById('sel-count');
  if (!btn || !stage) return;

  let sets = [];
  const recent = [];               // ids of the last few picks, to avoid repeats

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
    if (!sets.length) return null;
    for (let tries = 0; tries < 12; tries += 1) {
      const item = sets[Math.floor(Math.random() * sets.length)];
      if (sets.length <= recent.length || !recent.includes(item.id)) {
        recent.push(item.id);
        if (recent.length > 10) recent.shift();
        return item;
      }
    }
    return sets[Math.floor(Math.random() * sets.length)];
  };

  const go = () => {
    const item = pick();
    if (!item) return;
    render(item);
    setButton('Pick another', 'ready', false);
  };

  btn.addEventListener('click', go);

  fetch('selector-data.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then(data => {
      sets = Array.isArray(data) ? data.filter(s => s && s.id) : [];
      if (!sets.length) {
        setButton('Catalogue is still being built', 'empty', true);
        return;
      }
      if (count) { count.textContent = `${sets.length.toLocaleString('en-US')} sets in the pool`; count.hidden = false; }
      setButton('Pick me a set', 'ready', false);

      const hashId = decodeURIComponent((location.hash || '').replace(/^#/, ''));
      const fromHash = hashId && sets.find(s => s.id === hashId);
      if (fromHash) {
        recent.push(fromHash.id);
        render(fromHash);
        setButton('Pick another', 'ready', false);
      }
    })
    .catch(() => setButton('Catalogue failed to load — reload the page', 'error', true));
})();
