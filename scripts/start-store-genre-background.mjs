import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = '.cache/store-popular';
fs.mkdirSync(root, { recursive: true });
const log = path.resolve(root, 'run.log');
const pid = path.resolve(root, 'run.pid');
if (fs.existsSync(pid)) {
  const current = Number(fs.readFileSync(pid, 'utf8').trim());
  try { process.kill(current, 0); console.log(`Public store lookup is already running (PID ${current}).`); process.exit(0); } catch {}
}
const label = 'com.thecatrave.genre-store-popular';
spawnSync('/bin/launchctl', ['remove', label], { stdio: 'ignore' });
const result = spawnSync('/bin/launchctl', [
  'submit', '-l', label, '-o', log, '-e', log, '--',
  process.execPath, path.resolve('scripts/genres-from-public-store.mjs')
], { encoding: 'utf8' });
if (result.status !== 0) {
  console.error(result.stderr || `launchctl exited with ${result.status}`);
  process.exit(result.status || 1);
}
console.log(`Started public store lookup. Log: ${log}`);
