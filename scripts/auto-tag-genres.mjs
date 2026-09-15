// Run the unattended, conservative genre pipeline using keyless public data.
// Results are cached by the underlying scripts, so the command can be stopped
// and resumed without repeating completed lookups.
//
// Full Wikidata pass, no slow Discogs calls:
//   node scripts/auto-tag-genres.mjs
//
// Add the 500 highest-impact uncached recurring artists from Discogs:
//   DISCOGS_LIMIT=500 node scripts/auto-tag-genres.mjs
//
// Short verification run:
//   WIKIDATA_BATCHES=2 node scripts/auto-tag-genres.mjs

import { spawnSync } from 'node:child_process';

const wikidataBatches = process.env.WIKIDATA_BATCHES ?? '';
const discogsLimit = Math.max(0, Number(process.env.DISCOGS_LIMIT || 0));
const catalogDump = process.env.CATALOG_DUMP || '';

function run(script, extraEnv = {}) {
  console.log(`\n== ${script} ==`);
  const result = spawnSync(process.execPath, [script], {
    stdio: 'inherit',
    env: { ...process.env, ...extraEnv }
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

run('scripts/build-artist-registry.mjs');
run('scripts/build-genre-review-queue.mjs');
run('scripts/genres-wikidata.mjs', {
  MIN_SETS: '1',
  ...(wikidataBatches ? { MAX_BATCHES: wikidataBatches } : {})
});

if (discogsLimit > 0) {
  run('scripts/genres-from-discogs.mjs', {
    MIN_SETS: process.env.DISCOGS_MIN_SETS || '2',
    LIMIT: String(discogsLimit)
  });
}

if (catalogDump) run('scripts/genres-from-catalog-dump.mjs');

run('scripts/genres-title-rollup.mjs');
run('scripts/apply-genres.mjs');
run('scripts/build-genre-review-queue.mjs');
run('build-selector.mjs');
run('audit-selector.mjs');

console.log('\nAutomatic genre pass complete.');
