import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = '.cache/priority-enrichment';
fs.mkdirSync(root, { recursive: true });
const logPath = path.resolve(root, 'run.log');
const pidPath = path.resolve(root, 'run.pid');
if (fs.existsSync(pidPath)) {
  const pid = Number(fs.readFileSync(pidPath, 'utf8').trim());
  try { process.kill(pid, 0); console.log(`Priority enrichment is already running (PID ${pid}).`); process.exit(0); } catch {}
}
const output = fs.openSync(logPath, 'a');
const child = spawn(process.execPath, ['scripts/priority-enrichment-worker.mjs'], {
  detached: true, stdio: ['ignore', output, output], env: process.env
});
child.unref();
console.log(`Started priority enrichment. Log: ${logPath}`);
