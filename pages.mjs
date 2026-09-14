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
  { name: 'best-boiler-room-sets', file: 'best-boiler-room-sets.html',     path: '/best-boiler-room-sets',        kind: 'guide', generator: 'build-boiler-room-article.mjs', card: { title: 'Boiler Room', caption: "The best sets of all time, beside the most watched." } },
  { name: 'burning-man',   file: 'what-is-burning-man.html',           path: '/what-is-burning-man',          kind: 'guide', generator: 'build-burning-man-article.mjs', card: { title: 'Burning Man', caption: "A desert city with no lineup, and the camps that play anyway." } },
  { name: 'berlin-clubs',  file: 'best-clubs-in-berlin.html',          path: '/best-clubs-in-berlin',         kind: 'guide', generator: 'build-berlin-clubs-article.mjs', card: { title: 'Berlin clubs', caption: "Tresor to Sisyphos: the legends and the ones still open." } },
  { name: 'london-clubs',   file: 'best-electronic-music-clubs-in-london.html', path: '/best-electronic-music-clubs-in-london',  kind: 'guide', generator: 'build-london-clubs-article.mjs', card: { title: 'London clubs', caption: "Heaven to FOLD: the rooms that made the music, and the best now." } },
  { name: 'live-dj-sets',  file: 'live-dj-sets.html',                 path: '/live-dj-sets',                 kind: 'guide', generator: 'build-live-dj-sets-article.mjs', card: { title: 'Live DJ sets', caption: "Pirate radio to HÖR: who films the sets, and since when." } },
  { name: 'tomorrowland',  file: 'tomorrowland-festival.html',         path: '/tomorrowland-festival',        kind: 'guide', generator: 'build-tomorrowland-article.mjs', card: { title: 'Tomorrowland', caption: "A park in Belgium the world watches, and what plays off the Mainstage." } },
  { name: 'edc',           file: 'edc-las-vegas.html',                path: '/edc-las-vegas',                kind: 'guide', generator: 'build-edc-article.mjs', card: { title: 'EDC Las Vegas', caption: "A racetrack in the desert, half a million people, and drum and bass past the main stage." } },
  { name: 'creamfields',   file: 'creamfields-festival.html',          path: '/creamfields-festival',         kind: 'guide', generator: 'build-creamfields-article.mjs', card: { title: 'Creamfields', caption: "A Liverpool house night's festival, and the drum and bass on its bill." } },
  { name: 'parookaville',  file: 'parookaville-festival.html',         path: '/parookaville-festival',        kind: 'guide', generator: 'build-parookaville-article.mjs', card: { title: 'Parookaville', caption: "An old RAF airbase turned festival city, and what plays on its stages." } },
  { name: 'ultra',         file: 'ultra-music-festival.html',          path: '/ultra-music-festival',         kind: 'guide', generator: 'build-ultra-article.mjs', card: { title: 'Ultra', caption: "Miami every March, Split every July, and drum and bass on the first bill." } },
  { name: 'untold',        file: 'untold-festival.html',               path: '/untold-festival',              kind: 'guide', generator: 'build-untold-article.mjs', card: { title: 'Untold', caption: "A stadium and a park in Transylvania, every August, and what plays past the main stage." } },
  { name: 'coachella',     file: 'what-is-coachella.html',             path: '/what-is-coachella',            kind: 'guide', generator: 'build-coachella-article.mjs', card: { title: 'Coachella', caption: "Two April weekends on a polo field in the desert, and what plays in the Sahara tent." } },
  { name: 'lollapalooza',  file: 'lollapalooza-festival.html',         path: '/lollapalooza-festival',        kind: 'guide', generator: 'build-lollapalooza-article.mjs', card: { title: 'Lollapalooza', caption: "Four summer days in Grant Park, and the farewell tour that turned into a festival." } },
  { name: 'articles',      file: 'articles.html',                      path: '/articles',                     kind: 'index', generator: 'build-articles-page.mjs', card: { title: 'All articles', caption: "Long guides to dance music and club culture." } },
  { name: 'selector',     file: 'selector.html',                      path: '/selector',                     kind: 'tool',  generator: 'build-selector.mjs', card: { title: 'The Selector', caption: "Press the button, pick a random DJ set." } }
];

export const guides = pages.filter(page => page.kind === 'guide');
export const files = pages.map(page => page.file);
export const routes = pages.map(({ path, name }) => ({ path, name }));
