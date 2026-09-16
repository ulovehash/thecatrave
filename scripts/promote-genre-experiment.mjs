import fs from 'node:fs';
import { promoteVerifiedCandidates } from './genre-background-core.mjs';

const root = process.argv.includes('--popular') ? '.cache/genre-popular' : '.cache/genre-background';
const reportFile = `${root}/report.json`;
const outputFile = 'selector-open-genre-cache.json';

if (!fs.existsSync(reportFile)) {
  console.error(`Missing ${reportFile}. Run npm run genres:experiment first.`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
const promoted = promoteVerifiedCandidates(report.candidates, 0.9);
const previous = fs.existsSync(outputFile) ? JSON.parse(fs.readFileSync(outputFile, 'utf8')) : {};
const merged = { ...previous, ...promoted };
fs.writeFileSync(outputFile, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`${outputFile}: ${Object.keys(promoted).length} verified sets promoted, ${Object.keys(merged).length} total.`);
