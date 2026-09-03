// Zero-dependency audit for The Selector tool page and its catalogue.
import fs from 'node:fs';

const html = fs.readFileSync('selector.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? ` (${detail})` : ''}`);
};

// --- page structure --------------------------------------------------------
check('one H1', (html.match(/<h1[ >]/g) || []).length === 1);
check('canonical is /selector', html.includes('<link rel="canonical" href="https://thecatrave.com/selector">'));
check('title present and bounded', /<title>[^<]{15,65}<\/title>/.test(html));
check('meta description present', /<meta name="description" content="[^"]{70,165}"/.test(html));
check('button present with a label', /<button[^>]*id="sel-go"[^>]*>[^<]+<\/button>/.test(html));
check('source filter present and labelled', /<label for="sel-source">[^<]+<\/label>\s*<select id="sel-source"/.test(html));
check('live result region present', /<div class="sel-stage" id="sel-stage" aria-live="polite">/.test(html));
check('runtime script linked', html.includes('<script src="selector-runtime.js" defer></script>'));
check('noscript fallback present', /<noscript>[\s\S]*channels[\s\S]*<\/noscript>/i.test(html));
check('WebApplication structured data', html.includes('"@type":"WebApplication"'));
check('no em dash in visible source', !html.includes('—'));
check('brand stays lowercase', !/(The CatRave|TheCatRave|the cat rave)/.test(html));
check('two internal links in main', ((html.slice(html.indexOf('<main')).match(/href="\/[a-z]/g) || []).length) >= 2);

// --- catalogue integrity (soft while the pool is still being built) -------
let sets = null;
try { sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8')); } catch {}
if (!Array.isArray(sets)) {
  failures.push('selector-data.json missing or not an array');
} else if (sets.length === 0) {
  console.log('note: selector-data.json is empty — run `node scripts/fetch-sets.mjs` to populate it.');
} else {
  const ids = sets.map(s => s && s.id);
  check('every set has an 11-char YouTube id', ids.every(id => /^[A-Za-z0-9_-]{11}$/.test(id || '')));
  check('no duplicate ids', new Set(ids).size === ids.length);
  check('every set has a broadcaster', sets.every(s => s && typeof s.broadcaster === 'string' && s.broadcaster));
  check('every set is long-form (>= 20 min)', sets.every(s => !s.seconds || s.seconds >= 1200));
  check('pool is not trivially small', sets.length >= 100, `${sets.length}`);
}

if (failures.length) {
  console.error('Selector audit failed:\n  ' + failures.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('Selector audit passed.');
}
