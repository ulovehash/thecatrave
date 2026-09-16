import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = '.cache/genre-refinement';
fs.mkdirSync(root, { recursive: true });
const logPath = path.resolve(root, 'run.log');
const pidPath = path.resolve(root, 'run.pid');
if (fs.existsSync(pidPath)) {
  const pid = Number(fs.readFileSync(pidPath, 'utf8').trim());
  try { process.kill(pid, 0); console.log(`Genre refinement is already running (PID ${pid}).`); process.exit(0); } catch {}
}

// This is a one-shot worker. A submitted launchd service may respawn after a
// clean exit, so use a detached process instead of a persistent service.
const output = fs.openSync(logPath, 'a');
const child = spawn(process.execPath, ['scripts/genre-refinement-worker.mjs'], {
  detached: true, stdio: ['ignore', output, output], env: process.env
});
child.unref();
console.log(`Started genre refinement. Log: ${logPath}`);
