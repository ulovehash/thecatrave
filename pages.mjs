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
  { name: 'home',          file: 'index.html',                         path: '/',                             kind: 'home',  generator: 'build-home.mjs', card: { title: 'thecatrave', caption: "Breakbeat, bass and rave. DJ, producer, selector." } },
  { name: 'breakbeat',     file: 'breakbeat-guide.html',               path: '/breakbeat-guide',              kind: 'guide', generator: 'build-breakbeat-article.mjs', card: { title: 'Breakbeat', caption: "Funk breaks, pirate radio and the sound that never left." } },
  { name: 'jungle',        file: 'jungle-music-guide.html',            path: '/jungle-music-guide',           kind: 'guide', generator: 'build-jungle-article.mjs', card: { title: 'Jungle', caption: "Dubplates, MC energy and a Black British sound that came back." } },
  { name: 'uk',            file: 'uk-electronic-music-evolution.html', path: '/uk-electronic-music-evolution', kind: 'guide', generator: 'build-uk-article.mjs', card: { title: 'UK electronic', caption: "Ten sounds that went from regional scenes to global culture." } },
  { name: 'bass-music',    file: 'bass-music-guide.html',              path: '/bass-music-guide',             kind: 'guide', generator: 'build-bass-music-article.mjs', card: { title: 'Bass music', caption: "Jamaica, Miami, Britain, Durban. One idea, many accents." } },
  { name: 'dubstep',       file: 'dubstep-guide.html',                 path: '/dubstep-guide',                kind: 'guide', generator: 'build-dubstep-article.mjs', card: { title: 'Dubstep', caption: "South London basements to one word meaning two genres." } },
  { name: 'how-to-find-new-music', file: 'how-to-find-new-music.html',            path: '/how-to-find-new-music',               kind: 'guide', generator: 'build-find-new-music-article.mjs', card: { title: 'How to find new music', caption: "Ten ways to hear something new, none of them an algorithm." } },
  { name: 'uk-garage',     file: 'uk-garage-guide.html',                path: '/uk-garage-guide',              kind: 'guide', generator: 'build-uk-garage-article.mjs', card: { title: 'UK garage', caption: "London played an American record too fast and broke the beat." } },
  { name: 'drum-and-bass', file: 'drum-and-bass-guide.html',           path: '/drum-and-bass-guide',          kind: 'guide', generator: 'build-dnb-article.mjs', card: { title: 'Drum and bass', caption: "174 BPM, chopped breaks and sub-bass, from Metalheadz on." } },
  { name: 'selector',      file: 'selector.html',                      path: '/selector',                     kind: 'tool',  generator: 'build-selector.mjs', card: { title: 'The Selector', caption: "Press the button, pick a random DJ set." } }
];

export const guides = pages.filter(page => page.kind === 'guide');
export const files = pages.map(page => page.file);
export const routes = pages.map(({ path, name }) => ({ path, name }));
