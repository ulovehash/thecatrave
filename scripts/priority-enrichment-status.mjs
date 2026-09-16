import fs from 'node:fs';

const root = '.cache/priority-enrichment';
const pidFile = `${root}/run.pid`;
let running = false;
let pid = null;
if (fs.existsSync(pidFile)) {
  pid = Number(fs.readFileSync(pidFile, 'utf8').trim());
  try { process.kill(pid, 0); running = true; } catch (error) { if (error.code === 'EPERM') running = true; }
}
console.log(running ? `running (PID ${pid})` : 'not running');
if (fs.existsSync(`${root}/run.log`)) {
  const lines = fs.readFileSync(`${root}/run.log`, 'utf8').trim().split(/\r?\n/);
  console.log(lines.slice(-12).join('\n'));
}
if (fs.existsSync(`${root}/report.json`)) {
  const report = JSON.parse(fs.readFileSync(`${root}/report.json`, 'utf8'));
  console.log(`last result: ${report.resolvedSets} sets from ${report.matchedArtists}/${report.queuedArtists} artists`);
}
