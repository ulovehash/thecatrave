import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';

const popular = process.argv.includes('--popular');
const root = popular ? '.cache/genre-popular' : '.cache/genre-background';
fs.mkdirSync(root, { recursive: true });
const logPath = path.resolve(root, 'run.log');
const pidPath = path.resolve(root, 'run.pid');
if (fs.existsSync(pidPath)) {
  const pid = Number(fs.readFileSync(pidPath, 'utf8').trim());
  try {
    process.kill(pid, 0);
    console.log(`Genre experiment is already running (PID ${pid}). Log: ${logPath}`);
    process.exit(0);
  } catch {}
}

if (process.platform === 'darwin') {
  const label = popular ? 'com.thecatrave.genre-popular' : 'com.thecatrave.genre-experiment';
  spawnSync('/bin/launchctl', ['remove', label], { stdio: 'ignore' });
  const result = spawnSync('/bin/launchctl', [
    'submit', '-l', label, '-o', logPath, '-e', logPath, '--',
    process.execPath, path.resolve('scripts/genre-background-worker.mjs'), ...(popular ? ['--popular'] : [])
  ], { encoding: 'utf8' });
  if (result.status !== 0) {
    console.error(result.stderr || `launchctl exited with ${result.status}`);
    process.exit(result.status || 1);
  }
  console.log(`Started genre experiment with macOS launchctl (${label}).`);
} else {
  const output = fs.openSync(logPath, 'a');
  const child = spawn(process.execPath, ['scripts/genre-background-worker.mjs', ...(popular ? ['--popular'] : [])], {
    detached: true,
    stdio: ['ignore', output, output],
    env: process.env
  });
  child.unref();
  console.log(`Started genre experiment in background (PID ${child.pid}).`);
}
console.log(`Log: ${logPath}`);
