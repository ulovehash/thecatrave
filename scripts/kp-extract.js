// Keyword Planner results extractor. Paste the whole file into one
// claude-in-chrome javascript_tool call on the "Keyword ideas" results page.
// Run sequence and limits: scripts/kp-run.md. Selectors verified 2026-11-10.
// Returns compact JSON; rows are TSV: section(S seed / I idea), keyword,
// bucket code, 3-month change, YoY change, competition.
// If it returns resume:true, paste it again: state lives on window.__kp.
await (async () => {
  const BUDGET_MS = 20000, MAX_PAGES = 20;
  const t0 = Date.now();
  const sleep = (t) => new Promise((r) => setTimeout(r, t));
  const text = () => document.body.innerText;
  const LEGEND = { '1M – 10M': 'M', '100K – 1M': 'A', '10K – 100K': 'B', '1K – 10K': 'C', '100 – 1K': 'D', '10 – 100': 'E', '0 – 10': 'F' };
  const bucket = (s) => { const k = s.replace(/\s*[-–]\s*/g, ' – ').trim(); return LEGEND[k] || k; };
  const box = () => [...document.querySelectorAll('div.main')].find((e) => e.scrollHeight > e.clientHeight + 100);
  const label = () => { const m = text().match(/(\d+)\s*[-–]\s*(\d+) of (\d+)/); return m ? { s: +m[1], e: +m[2], t: +m[3], raw: m[0] } : null; };
  const ideasAvail = (text().match(/([\d,]+) keyword ideas available/) || [])[1] || null;

  const fail = (error) => ({ ok: false, error, url: location.href, title: document.title, snippet: text().slice(0, 300).replace(/\s+/g, ' ') });
  if (!innerHeight) return fail('viewport is 0x0: the tab is hidden or minimised, so the table cannot scroll');
  if (!document.querySelector('.particle-table-row')) return fail('no results table rows');
  if (!box()) return fail('no scrollable div.main');
  let L = label();
  if (!L) return fail('no pagination label');

  const sig = L.t + '|' + ideasAvail;
  if (!window.__kp || window.__kp.sig !== sig) window.__kp = { sig, out: new Map(), sec: '', done: {} };
  const S = window.__kp;

  const grab = () => {
    let first = true;
    document.querySelectorAll('.particle-table-row').forEach((r) => {
      const c = [...r.querySelectorAll('ess-cell')].map((x) => x.innerText.trim().replace(/\s+/g, ' '));
      if (c.length === 1) { S.sec = /provided/i.test(c[0]) ? 'S' : 'I'; first = false; return; }
      if (!c[0] || c.length < 5) return;
      if (first && S.out.has(c[0])) S.sec = S.out.get(c[0])[0];
      first = false;
      if (!S.out.has(c[0])) S.out.set(c[0], [S.sec || '?', c[0], bucket(c[1]), c[2], c[3], c[4]]);
    });
  };
  const scan = async (step) => {
    document.querySelectorAll('div').forEach((e) => { if (e.scrollLeft) e.scrollLeft = 0; });
    const el = box(); el.scrollTop = 0; await sleep(500);
    for (let y = 0; y <= el.scrollHeight; y += step) { el.scrollTop = y; await sleep(300); grab(); }
  };

  for (let p = 0; p < MAX_PAGES; p++) {
    L = label();
    if (!S.done[L.s]) {
      const before = S.out.size, want = L.e - L.s + 1;
      await scan(150);
      if (S.out.size - before < want) await scan(90);
      S.done[L.s] = S.out.size - before;
    }
    if (L.e >= L.t) break;
    if (Date.now() - t0 > BUDGET_MS) return { ok: false, resume: true, label: L.raw, rows: S.out.size };
    const next = document.querySelector('[aria-label="Go to the next page"]');
    if (!next || next.disabled || next.getAttribute('aria-disabled') === 'true') return fail('next page button missing at ' + L.raw);
    next.click();
    const old = L.raw;
    for (let i = 0; i < 40 && label() && label().raw === old; i++) await sleep(250);
    await sleep(800);
  }

  const order = 'MABCDEF';
  const rows = [...S.out.values()];
  const rank = (r) => (r[0] === 'S' ? -1 : order.indexOf(r[2]) < 0 ? 9 : order.indexOf(r[2]));
  rows.sort((a, b) => rank(a) - rank(b)); // stable: KP relevance order kept inside a bucket
  const t = document.body.innerText;
  return {
    ok: rows.length === L.t,
    label: L.raw,
    total: L.t,
    rows: rows.length,
    perPage: S.done,
    ideasAvailable: ideasAvail,
    seeds: rows.filter((r) => r[0] === 'S').length,
    unknownSection: rows.filter((r) => r[0] === '?').length,
    adultExcluded: /Exclude adult ideas/i.test(t),
    allLocations: /All locations/i.test(t),
    english: /English/.test(t),
    legend: 'M 1M–10M, A 100K–1M, B 10K–100K, C 1K–10K, D 100–1K, E 10–100, F 0–10',
    tsv: rows.map((r) => r.join('\t')).join('\n'),
  };
})();
