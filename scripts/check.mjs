// Orchestrates the full quality gate: zero-dependency audits, then the
// browser-based layers against a local server that mirrors GitHub Pages.
// Zero-dependency orchestration; the layers themselves are dev dependencies.

import { execFileSync, spawn } from 'node:child_process';
import net from 'node:net';
import { files } from '../pages.mjs';

// The port is never assumed free. A server left running by another checkout —
// or by a git worktree of this one — answers on 4173 too, and then every
// browser layer silently measures somebody else's files: a CSS fix made here
// was reported as still broken by Playwright because the pages under test came
// from the main checkout. Take a free port instead, and hand the same one to
// Playwright through the environment so both halves agree.
const PORT = Number(process.env.CHECK_PORT) || await freePort();

function freePort() {
  return new Promise((res, rej) => {
    const probe = net.createServer();
    probe.on('error', rej);
    probe.listen(0, '127.0.0.1', () => {
      const { port } = probe.address();
      probe.close(() => res(port));
    });
  });
}

const steps = [];
// `id` is what you pass on the command line to run one layer on its own, which
// is what the check:* scripts in package.json do. Defining each layer once here
// means the npm scripts cannot drift from what CI actually runs.
const record = (id, name, fn) => steps.push({ id, name, fn });

const sh = (cmd, args, env) => execFileSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });
const waitForPort = (port, timeoutMs = 15000) => new Promise((res, rej) => {
  const deadline = Date.now() + timeoutMs;
  const attempt = () => {
    const socket = net.connect(port, '127.0.0.1');
    socket.on('connect', () => { socket.destroy(); res(); });
    socket.on('error', () => {
      socket.destroy();
      if (Date.now() > deadline) rej(new Error(`port ${port} did not open`));
      else setTimeout(attempt, 200);
    });
  };
  attempt();
});

record('audit', 'audits (zero-dep)', () => sh('node', ['audit-all.mjs']));
record('html', 'html-validate', () => sh('npx', ['html-validate', ...files]));
record('links', 'linkinator (broken links & assets)', () => sh('npx', ['linkinator', `http://localhost:${PORT}`, '--recurse', '--skip', '^https?://(?!localhost)']));
record('layout', 'playwright (layout, a11y)', () => sh('npx', ['playwright', 'test'], { CHECK_PORT: String(PORT) }));
record('vitals', 'unlighthouse (perf, SEO, a11y, CWV budgets)', () => sh('npx', ['unlighthouse-ci', '--site', `http://localhost:${PORT}`, '--config-file', 'unlighthouse.config.ts'], { CHECK_PORT: String(PORT) }));

const only = process.argv.slice(2);
const unknown = only.filter(id => !steps.some(step => step.id === id));
if (unknown.length) {
  console.error(`unknown layer(s): ${unknown.join(', ')}\nknown: ${steps.map(s => s.id).join(', ')}`);
  process.exit(2);
}
const selected = only.length ? steps.filter(step => only.includes(step.id)) : steps;

const server = spawn('node', ['scripts/serve.mjs', String(PORT), '.'], { stdio: 'ignore' });
server.on('exit', code => {
  if (code) { console.error(`server on port ${PORT} exited with code ${code}`); process.exit(1); }
});
const shutdown = () => { try { server.kill(); } catch {} };
process.on('exit', shutdown);
process.on('SIGINT', () => { shutdown(); process.exit(130); });

const failures = [];
try {
  await waitForPort(PORT);
  for (const { name, fn } of selected) {
    process.stdout.write(`\n=== ${name} ===\n`);
    try { fn(); } catch { failures.push(name); }
  }
} finally {
  shutdown();
}

if (failures.length) {
  console.error(`\n✗ quality gate failed: ${failures.join(', ')}`);
  process.exit(1);
}
console.log('\n✔ quality gate passed.');
