import fs from 'node:fs';

const root = process.argv.includes('--popular') ? '.cache/genre-popular' : '.cache/genre-background';
const pidFile = `${root}/run.pid`;
const logFile = `${root}/run.log`;
const reportFile = `${root}/report.json`;
let running = false;
let pid = null;
if (fs.existsSync(pidFile)) {
  pid = Number(fs.readFileSync(pidFile, 'utf8').trim());
  try { process.kill(pid, 0); running = true; } catch (error) {
    // Sandboxed shells can see the PID file but cannot signal a process that
    // launchctl or an approved parent started. EPERM means it is still alive.
    if (error.code === 'EPERM') running = true;
  }
}
console.log(running ? `running (PID ${pid})` : 'not running');
if (fs.existsSync(logFile)) {
  const lines = fs.readFileSync(logFile, 'utf8').trim().split(/\r?\n/);
  console.log(lines.slice(-12).join('\n'));
}
if (fs.existsSync(reportFile)) console.log(`report ready: ${reportFile}`);
