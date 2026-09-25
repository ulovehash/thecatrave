import fs from 'node:fs';
import { isNotASet } from './parse-artist.mjs';

const dataFile = 'selector-data.json';
const sets = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const videos = JSON.parse(fs.readFileSync('selector-videos-cache.json', 'utf8'));
const kept = sets.filter(set => !isNotASet(videos[set.id]?.t, set.broadcaster));
fs.writeFileSync(dataFile, `${JSON.stringify(kept)}\n`);
console.log(`Removed ${sets.length - kept.length} non-set videos; ${kept.length} sets remain.`);
