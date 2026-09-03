// Orchestrates the full quality gate: zero-dependency audits, then the
// browser-based layers against a local server that mirrors GitHub Pages.
// Zero-dependency orchestration; the layers themselves are dev dependencies.

import { execFileSync, spawn } from 'node:child_process';
import net from 'node:net';

const PORT = 4173;
const steps = [];
const record = (name, fn) => steps.push({ name, fn });

const sh = (cmd, args) => execFileSync(cmd, args, { stdio: 'inherit' });
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

record('audits (zero-dep)', () => sh('node', ['audit-all.mjs']));
record('html-validate', () => sh('npx', ['html-validate', 'index.html', 'breakbeat-guide.html', 'jungle-music-guide.html', 'uk-electronic-music-evolution.html', 'bass-music-guide.html', 'dubstep-guide.html', 'drum-and-bass-guide.html', 'selector.html']));
record('linkinator (broken links & assets)', () => sh('npx', ['linkinator', `http://localhost:${PORT}`, '--recurse', '--skip', '^https?://(?!localhost)']));
record('playwright (layout, a11y)', () => sh('npx', ['playwright', 'test']));
record('unlighthouse (perf, SEO, a11y, CWV budgets)', () => sh('npx', ['unlighthouse-ci', '--site', `http://localhost:${PORT}`, '--config-file', 'unlighthouse.config.ts']));

const server = spawn('node', ['scripts/serve.mjs', String(PORT), '.'], { stdio: 'ignore' });
const shutdown = () => { try { server.kill(); } catch {} };
process.on('exit', shutdown);
process.on('SIGINT', () => { shutdown(); process.exit(130); });

const failures = [];
try {
  await waitForPort(PORT);
  for (const { name, fn } of steps) {
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
