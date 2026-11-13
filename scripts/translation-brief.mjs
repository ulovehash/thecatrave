// Everything a translation needs to know about the repo, in one short print.
//
//   node scripts/translation-brief.mjs <english path, file or name> <lang>
//   node scripts/translation-brief.mjs /sonar-festival-barcelona es
//
// It replaces the searching a translation session otherwise does: in the
// September and October batches, finding sibling files and registration lines
// took 15–35% of each session's tokens (scripts/translate-run.md). It prints:
//   - the English page, its draft, media record and keyword map;
//   - every existing translation of it, with module, draft and keyword map;
//   - the sibling to start from (the newest translated module);
//   - the sibling's registration lines, to copy and adapt in one batch of edits;
//   - the files to create and the build-and-check command.
// It reads files only. It writes nothing.
import fs from 'node:fs';
import { pages } from '../pages.mjs';

const [query, lang] = process.argv.slice(2);
if (!query || !lang) {
  console.error('usage: node scripts/translation-brief.mjs <english path|file|name> <lang>');
  process.exit(2);
}

const english = pages.find(p => !p.lang && (p.path === query || p.path === `/${query}` || p.file === query || p.file === `${query}.html` || p.name === query));
if (!english) {
  console.error(`No English page matches "${query}" in pages.mjs`);
  process.exit(2);
}

const kb = file => fs.existsSync(file) ? `${(fs.statSync(file).size / 1024).toFixed(1)} KB` : 'missing';
const show = file => `${file} (${kb(file)})`;
const lines = file => fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('\n') : [];

// The English draft and media record are named in the generator.
const generator = fs.existsSync(english.generator) ? fs.readFileSync(english.generator, 'utf8') : '';
const englishDraft = generator.match(/['"`]([a-z0-9-]+-draft\.md)['"`]/)?.[1];
const mediaRecord = generator.match(/media\/([a-z0-9-]+)\.json/)?.[0]
  ?? (fs.existsSync(`media/${english.name}.json`) ? `media/${english.name}.json` : null);

const translations = pages.filter(p => p.translationOf === english.path);
const moduleOf = page => {
  const key = page.name.replace(new RegExp(`^${page.lang}-`), '');
  return { key, module: `content/${page.lang}/${key}.mjs` };
};
const draftOf = page => {
  const { module } = moduleOf(page);
  const src = fs.existsSync(module) ? fs.readFileSync(module, 'utf8') : '';
  return src.match(/draft:\s*['"]([^'"]+)['"]/)?.[1] ?? '?';
};
const published = page => {
  const { module } = moduleOf(page);
  const src = fs.existsSync(module) ? fs.readFileSync(module, 'utf8') : '';
  return src.match(/datePublished:\s*['"]([^'"]+)['"]/)?.[1] ?? '';
};

const out = [];
out.push(`English  ${english.path}  ${english.file}  ${english.generator}`);
out.push(`  draft     ${englishDraft ? show(englishDraft) : 'not named in the generator: the generator holds the copy'}`);
if (mediaRecord) out.push(`  media     ${show(mediaRecord)}`);
out.push(`  keywords  ${show(`keywords/${english.name}.json`)}`);

const existing = translations.find(p => p.lang === lang);
out.push('', translations.length ? 'Translations' : 'Translations: none yet');
for (const page of translations) {
  const { module } = moduleOf(page);
  out.push(`  ${page.lang}  ${page.path}  ${show(module)}  ${show(draftOf(page))}  keywords/${page.name}.json ${fs.existsSync(`keywords/${page.name}.json`) ? '' : '(missing)'}`.trimEnd());
}
if (existing) {
  out.push('', `${lang} already exists: ${existing.path}. This is an update, not a new translation.`);
  console.log(out.join('\n'));
  process.exit(0);
}

// Start from the newest translated module: it carries the current component
// calls, media keys, dimensions and credits, so only the strings change.
const sibling = [...translations].sort((a, b) => published(b).localeCompare(published(a)))[0];
const key = sibling ? moduleOf(sibling).key : english.name;
out.push('', 'Create');
out.push(`  content/${lang}/${key}.mjs   module (copy the sibling, change only strings, paths and lang)`);
out.push(`  ${lang}/${key}-draft.md      draft, same [Image:] [Embed:] [Table:] lines as the sibling draft`);
out.push(`  keywords/${lang}-${key}.json  keyword map`);

if (!sibling) {
  // No sibling: the newest modules in the target language are the templates.
  const dir = `content/${lang}`;
  const newest = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.mjs'))
    .map(f => ({ f: `${dir}/${f}`, d: fs.readFileSync(`${dir}/${f}`, 'utf8').match(/datePublished:\s*['"]([^'"]+)['"]/)?.[1] ?? '' }))
    .sort((a, b) => b.d.localeCompare(a.d)).slice(0, 3).map(m => `${m.f} (${m.d})`) : [];
  out.push('', 'No translation to start from. Template: the newest module of the same kind among');
  out.push(...newest.map(m => `  ${m}`));
  out.push('  Media keys, credits and copy come from the English generator and media record above.');
} else {
  out.push('', `Start from ${sibling.lang}: ${moduleOf(sibling).module}, ${draftOf(sibling)}`);
  out.push('', `Registration lines of ${sibling.lang} (copy and adapt in one parallel batch of Edits)`);

  const grepLine = (file, needle) => lines(file).flatMap((line, i) => line.includes(needle) ? [`  ${file}:${i + 1}  ${line.trim().slice(0, 240)}`] : []);
  out.push(...grepLine('pages.mjs', `name: '${sibling.name}'`));

  // The catalogue card is a multi-line object: print it whole.
  const home = lines('home-articles.mjs');
  const at = home.findIndex(line => line.includes(`page:'${sibling.file}'`));
  if (at >= 0) {
    let start = at; while (start > 0 && !/^\s*\{\s*$/.test(home[start])) start--;
    let end = at; while (end < home.length - 1 && !/^\s*\},?\s*$/.test(home[end])) end++;
    out.push(`  home-articles.mjs:${start + 1}-${end + 1}  (the ${lang} card goes in the ${lang} catalogue of \`catalogs\`)`);
    out.push(...home.slice(start, end + 1).map(line => `      ${line.trim().slice(0, 200)}`));
  }

  const registry = grepLine('content/festival-planning-registry.mjs', `'${sibling.path}'`);
  if (registry.length) {
    out.push(...registry);
    out.push(`      festival planner: add '/${lang}/<slug>' to paths and a ${lang} argument to every tri() in this entry`);
  }
  out.push(...grepLine('festival-editions.mjs', `'${sibling.file}'`));
  // Festival roundups are listed by file in audit-next-festival-guides.mjs; a
  // translated roundup missing there is audited as an individual festival page.
  if (fs.readFileSync('audit-next-festival-guides.mjs', 'utf8').includes(`'${sibling.file}'`)) {
    out.push('  audit-next-festival-guides.mjs  roundups: add the new file next to the sibling\'s, or it is audited as a single-festival page');
  }

  // Festival planner: modules call localizedFestivalPlanning('<key>', lang),
  // and the block lives in content/festival-planning-data.mjs, not the registry.
  const siblingSrc = fs.existsSync(moduleOf(sibling).module) ? fs.readFileSync(moduleOf(sibling).module, 'utf8') : '';
  const planKey = siblingSrc.match(/localizedFestivalPlanning\(\s*['"]([^'"]+)['"]/)?.[1];
  if (planKey) {
    const data = lines('content/festival-planning-data.mjs');
    const start = data.findIndex(line => line.startsWith(`${sibling.lang}.${planKey} = {`) || line.startsWith(`data.${sibling.lang}.${planKey} = {`));
    let end = start; while (end >= 0 && end < data.length - 1 && !/^\};\s*$/.test(data[end])) end++;
    const target = data.findIndex(line => line.startsWith(`${lang}.${planKey} = {`) || line.startsWith(`data.${lang}.${planKey} = {`));
    const anchor = data.findIndex(line => line.startsWith(`const ${lang} = data.${lang}`));
    out.push(`  festival planner key '${planKey}': content/festival-planning-data.mjs`);
    out.push(start >= 0
      ? `      ${sibling.lang} block at lines ${start + 1}-${end + 1}: read those lines only (sed -n ${start + 1},${end + 1}p), translate, add as ${lang}.${planKey} = {...}`
      : `      no ${sibling.lang}.${planKey} block found: the planner may be inherited (data.fr copies data.de); grep the key`);
    out.push(target >= 0 ? `      ${lang}.${planKey} already exists at line ${target + 1}: check it, do not add a second`
      : anchor >= 0 ? `      put it after line ${anchor + 1} (const ${lang} = data.${lang}), before \`const normalize\``
      : `      no \`const ${lang} = data.${lang}\` line yet: add one before \`const normalize\``);
    out.push(...grepLine('audit-next-festival-guides.mjs', 'individualFestivalPages.length !=='));
    out.push('      raise that count, and its message, by one for each new festival page');
  }

  // Club pages: a layout entry, and a baseline written after the first build.
  const layouts = fs.existsSync('content/club-visit-layouts.json') ? JSON.parse(fs.readFileSync('content/club-visit-layouts.json', 'utf8')) : {};
  if (layouts[sibling.path]) {
    out.push(`  content/club-visit-layouts.json  "${sibling.path}" (copy under "/${lang}/<slug>", translate only the titles; section IDs stay)`);
    out.push(...JSON.stringify(layouts[sibling.path], null, 2).split('\n').map(line => `      ${line}`));
    out.push(`  content/club-visit-preservation.json  after the first build: node scripts/club-visit-baseline.mjs ${lang}/<slug>.html ${sibling.file}`);
  }
}

out.push('', 'Build and check, one Bash call');
out.push(`  node build-localized-articles.mjs ${lang}/${key} && node scripts/build.mjs --quiet && node audit-all.mjs --quiet && npm run check:html 2>&1 | tail -5`);
out.push('  then once, at the end of the batch: npm run check:layout 2>&1 | tail -15 && npm run check:links 2>&1 | tail -5');
console.log(out.join('\n'));
