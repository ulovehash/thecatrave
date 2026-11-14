// What a translation batch cost, read from its Claude Code transcripts.
//
//   node scripts/translation-cost.mjs                 newest session of this worktree
//   node scripts/translation-cost.mjs <session.jsonl> a given session
//   node scripts/translation-cost.mjs --reads         also: did each review subagent read
//                                                     ARTICLE-EDITORIAL-REVIEW.md and WRITING.md whole
//   --pages N                                         override the page count
//
// Raw tokens are input + output + cache read + cache write, per API message.
// The measure is the priced cost, in input-token equivalents:
// priced = input + 1.25 cache write + 0.1 cache read + 5 output.
// Raw tokens hid that batch 2's writer subagents saved nothing: Spanish batch 2
// was 5.76M priced against 5.88M for batch 1. Budget: 0.7M priced a page.
// It reads files only. It writes nothing.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = name => args.includes(name);
const pagesArg = args.includes('--pages') ? Number(args[args.indexOf('--pages') + 1]) : null;
let main = args.find(a => a.endsWith('.jsonl'));
if (!main) {
  const dir = path.join(os.homedir(), '.claude/projects', process.cwd().replace(/[/.]/g, '-'));
  const newest = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.jsonl'))
    .map(f => path.join(dir, f)).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0] : null;
  if (!newest) { console.error(`No transcript in ${dir}. Pass the session .jsonl.`); process.exit(2); }
  main = newest;
}
const subDir = main.replace(/\.jsonl$/, '/subagents');
const subs = fs.existsSync(subDir) ? fs.readdirSync(subDir).filter(f => f.endsWith('.jsonl')).map(f => path.join(subDir, f)) : [];

const modulePat = /content\/(de|fr|es|[a-z]{2})\/([a-z0-9-]+)\.mjs$/;
const pages = new Set();

function read(file) {
  const seen = new Set();
  const r = { priced: 0, tokens: 0, steps: 0, ctx: 0, peak: 0, model: '', label: '', reads: new Set() };
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    let rec; try { rec = JSON.parse(line); } catch { continue; }
    if (rec.type === 'user' && !r.label) {
      const c = rec.message?.content;
      const text = typeof c === 'string' ? c : (c?.find?.(x => x.type === 'text')?.text ?? '');
      const page = text.match(/\b([a-z]{2}\/[a-z0-9-]+)-draft\.md/)?.[1];
      r.label = (/review/i.test(text.slice(0, 300)) ? 'review ' : '') + (page ?? text.replace(/\s+/g, ' ').slice(0, 60));
    }
    if (rec.type !== 'assistant') continue;
    const m = rec.message;
    for (const c of Array.isArray(m.content) ? m.content : []) {
      if (c.type !== 'tool_use') continue;
      const p = c.input?.file_path ?? '';
      // A module counts as written by Write, or by a shell redirect, cp or tee.
      if (c.name === 'Write' && modulePat.test(p)) pages.add(p.match(modulePat).slice(1).join('/'));
      for (const w of String(c.input?.command ?? '').matchAll(/(?:>\s*|cp\s+\S+\s+|tee\s+)\S*?content\/([a-z]{2})\/([a-z0-9-]+)\.mjs/g)) pages.add(`${w[1]}/${w[2]}`);
      if (c.name === 'Read' && !c.input.limit && !c.input.offset) r.reads.add(path.basename(p));
    }
    if (seen.has(m.id)) continue;
    seen.add(m.id);
    const u = m.usage ?? {};
    const ctx = (u.input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0);
    r.tokens += ctx + (u.output_tokens ?? 0);
    r.priced += (u.input_tokens ?? 0) + 1.25 * (u.cache_creation_input_tokens ?? 0) + 0.1 * (u.cache_read_input_tokens ?? 0) + 5 * (u.output_tokens ?? 0);
    r.ctx += ctx; r.peak = Math.max(r.peak, ctx); r.steps++;
    r.model = m.model ?? r.model;
  }
  return r;
}

const M = n => `${(n / 1e6).toFixed(2)}M`;
const K = n => `${Math.round(n / 1000)}k`;
const top = read(main);
const parts = subs.map(f => ({ file: f, ...read(f) }));
const subTokens = parts.reduce((s, p) => s + p.tokens, 0);
const total = top.tokens + subTokens;
const subPriced = parts.reduce((s, p) => s + p.priced, 0);
const priced = top.priced + subPriced;
const n = pagesArg ?? pages.size;

console.log(`session ${path.basename(main)}`);
console.log(`  main      ${M(top.priced)} priced  ${M(top.tokens)} raw  ${top.steps} steps  avg ctx ${K(top.ctx / Math.max(top.steps, 1))}  peak ${K(top.peak)}  ${top.model}`);
for (const p of parts.sort((a, b) => b.priced - a.priced)) {
  console.log(`  subagent  ${M(p.priced)} priced  ${M(p.tokens)} raw  ${p.steps} steps  peak ${K(p.peak)}  ${p.model.replace('claude-', '')}  ${p.label}`);
}
console.log(`cost: ${M(priced)} priced, ${n} pages${pagesArg ? '' : ' (modules written; --pages N if wrong)'}, ${n ? M(priced / n) : '?'}/page priced; main ${M(top.priced)} in ${top.steps} steps, subagents ${M(subPriced)} in ${parts.length}; raw ${M(total)}${top.steps > 40 ? '  OVER the 40-step budget' : ''}${n && priced / n > 0.7e6 ? '  OVER 0.7M/page priced' : ''}`);

if (flag('--reads')) {
  const need = ['ARTICLE-EDITORIAL-REVIEW.md', 'WRITING.md'];
  const reviews = parts.filter(p => /review/i.test(p.label));
  console.log(`\nreview subagents that read ${need.join(' and ')} whole:`);
  for (const p of reviews) {
    const missing = need.filter(f => !p.reads.has(f));
    console.log(`  ${missing.length ? 'RE-RUN' : 'ok    '}  ${p.label}${missing.length ? `  (missing ${missing.join(', ')})` : ''}`);
  }
  if (!reviews.length) console.log('  none found: no subagent prompt mentions "review"');
}
