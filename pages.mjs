// Every page the site publishes, in one place.
//
// This list used to live in six files: package.json, scripts/check.mjs,
// tests/routes.ts, audit-seo.mjs, audit-site-components.mjs and, in generator
// form, scripts/build.mjs. Adding a page meant six edits, and missing one did
// not break anything loudly. It quietly dropped the page out of that layer, so
// the gate went green by not looking.
//
// Everything imports this instead. `kind` is what a page owes the gate: a guide
// carries the full article contract (FAQ, dates, read-next, listening bands),
// the tool and the home page carry their own.

export const pages = [
  { name: 'home',          file: 'index.html',                         path: '/',                             kind: 'home',  generator: 'build-home.mjs' },
  { name: 'breakbeat',     file: 'breakbeat-guide.html',               path: '/breakbeat-guide',              kind: 'guide', generator: 'build-breakbeat-article.mjs' },
  { name: 'jungle',        file: 'jungle-music-guide.html',            path: '/jungle-music-guide',           kind: 'guide', generator: 'build-jungle-article.mjs' },
  { name: 'uk',            file: 'uk-electronic-music-evolution.html', path: '/uk-electronic-music-evolution', kind: 'guide', generator: 'build-uk-article.mjs' },
  { name: 'bass-music',    file: 'bass-music-guide.html',              path: '/bass-music-guide',             kind: 'guide', generator: 'build-bass-music-article.mjs' },
  { name: 'dubstep',       file: 'dubstep-guide.html',                 path: '/dubstep-guide',                kind: 'guide', generator: 'build-dubstep-article.mjs' },
  { name: 'drum-and-bass', file: 'drum-and-bass-guide.html',           path: '/drum-and-bass-guide',          kind: 'guide', generator: 'build-dnb-article.mjs' },
  { name: 'selector',      file: 'selector.html',                      path: '/selector',                     kind: 'tool',  generator: 'build-selector.mjs' }
];

export const guides = pages.filter(page => page.kind === 'guide');
export const files = pages.map(page => page.file);
export const routes = pages.map(({ path, name }) => ({ path, name }));
