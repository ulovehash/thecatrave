// The one command for updating the Selector catalogue, after adding a channel to
// selector-channels.mjs or to pick up new uploads:
//
//   npm run selector:refresh
//
// fetch-sets.mjs rewrites selector-data.json with title-derived genres only.
// Running it on its own drops every other genre signal (drum and bass once went
// from 2,030 sets to 45), so the steps that restore them live here, in order.
// The slow MusicBrainz artist lookup (scripts/enrich-genres.mjs, hours at one
// request a second) is not part of this; run it separately when you have time.
// Sets from channels with no signal stay tagged 'electronic' until it runs.
//
// A channel that is genuinely single-genre (a drum and bass label, a jungle
// station) belongs in CHANNEL_GENRES in scripts/genre-manual.mjs. Mixed-genre
// channels do not: a default there would mislabel them.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';

const env = { ...process.env };
if (!env.YOUTUBE_API_KEY && fs.existsSync('.env')) {
  const m = fs.readFileSync('.env', 'utf8').match(/^\s*YOUTUBE_API_KEY\s*=\s*(.*?)\s*$/m);
  if (m) env.YOUTUBE_API_KEY = m[1].replace(/^(['"])(.*)\1$/, '$2');
}
if (!env.YOUTUBE_API_KEY) {
  console.error('Missing YOUTUBE_API_KEY (environment or .env).');
  process.exit(1);
}

const steps = [
  ['fetch the new uploads', ['scripts/fetch-sets.mjs'], {}],
  ['tag Keep Hush from uploader keywords', ['scripts/genres-from-tags.mjs'], { BROADCASTER: 'Keep Hush' }],
  ['tag from YouTube title, description and keywords', ['scripts/genres-from-youtube-metadata.mjs'], {}],
  ['merge every genre signal', ['scripts/apply-genres.mjs'], {}],
  ['rebuild the Selector pages', ['build-selector.mjs'], {}],
  ['audit the Selector', ['audit-selector.mjs'], {}],
];

for (const [label, args, extra] of steps) {
  console.log(`\n▸ ${label}`);
  const r = spawnSync('node', args, { stdio: 'inherit', env: { ...env, ...extra } });
  if (r.status !== 0) {
    console.error(`\nStopped at: ${label}`);
    process.exit(r.status || 1);
  }
}
