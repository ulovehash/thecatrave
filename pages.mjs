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
  { name: 'german-electronic', file: 'german-electronic-music.html',    path: '/german-electronic-music',      kind: 'guide', generator: 'build-german-electronic-article.mjs', card: { title: 'German electronic', caption: "Cologne studios, Kraftwerk, Frankfurt trance and the Detroit-Berlin alliance." } },
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
  { name: 'glastonbury',   file: 'glastonbury-festival.html',          path: '/glastonbury-festival',         kind: 'guide', generator: 'build-glastonbury-article.mjs', card: { title: 'Glastonbury', caption: "A dairy farm in Somerset, most Junes, and every headliner since 1970." } },
  { name: 'sonar',         file: 'sonar-festival-barcelona.html',      path: '/sonar-festival-barcelona',     kind: 'guide', generator: 'build-sonar-article.mjs', card: { title: 'Sónar', caption: "Barcelona's festival of advanced music, by day and by night since 1994." } },
  { name: 'mysteryland',   file: 'mysteryland-festival.html',          path: '/mysteryland-festival',         kind: 'guide', generator: 'build-mysteryland-article.mjs', card: { title: 'Mysteryland', caption: "A 1993 rave that settled in Haarlemmermeer, back in August 2027." } },
  { name: 'primavera-sound', file: 'primavera-sound-barcelona.html',    path: '/primavera-sound-barcelona',    kind: 'guide', generator: 'build-primavera-sound-article.mjs', card: { title: 'Primavera Sound', caption: "Barcelona's waterfront festival: location, dates, scale and music." } },
  { name: 'articles',      file: 'articles.html',                      path: '/articles',                     kind: 'index', generator: 'build-articles-page.mjs', card: { title: 'All articles', caption: "Long guides to dance music and club culture." } },
  // German. `lang` is what the gate reads to hold a page to its own language:
  // the chrome it must carry, the keyword map it must satisfy, the index and
  // the Read Next block it belongs to. A page without it is English, which is
  // what every page was until September 2026.
  { name: 'de-tomorrowland', lang: 'de', translationOf: '/tomorrowland-festival', file: 'de/tomorrowland-festival.html', path: '/de/tomorrowland-festival', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Tomorrowland', caption: "Ein Park in Belgien, den die Welt im Stream kennt." } },
  { name: 'de-parookaville', lang: 'de', translationOf: '/parookaville-festival', file: 'de/parookaville-festival.html', path: '/de/parookaville-festival', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Parookaville', caption: "Ein Festival als Stadt auf dem Flughafen Weeze." } },
  { name: 'de-coachella',    lang: 'de', translationOf: '/what-is-coachella', file: 'de/coachella-festival.html',    path: '/de/coachella-festival',    kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Coachella', caption: "Zwei Wochenenden im April in der Wüste von Kalifornien." } },
  { name: 'de-mysteryland',  lang: 'de', translationOf: '/mysteryland-festival', file: 'de/mysteryland-festival.html',  path: '/de/mysteryland-festival',  kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Mysteryland', caption: "Ein Rave von 1993, der in Haarlemmermeer sesshaft wurde." } },
  { name: 'de-untold',       lang: 'de', translationOf: '/untold-festival', file: 'de/untold-festival.html',       path: '/de/untold-festival',       kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Untold', caption: "Vier Tage im August in Cluj-Napoca, Siebenbürgen." } },
  { name: 'de-glastonbury',  lang: 'de', translationOf: '/glastonbury-festival', file: 'de/glastonbury-festival.html', path: '/de/glastonbury-festival', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Glastonbury', caption: "Fünf Tage im Juni auf einem Bauernhof in Somerset." } },
  { name: 'de-primavera-sound', lang: 'de', translationOf: '/primavera-sound-barcelona', file: 'de/primavera-sound-barcelona.html', path: '/de/primavera-sound-barcelona', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Primavera Sound', caption: "Das Festival am Meer in Barcelona: Ort, Termine, Größe, Musik." } },
  { name: 'de-burning-man',  lang: 'de', translationOf: '/what-is-burning-man', file: 'de/burning-man-festival.html', path: '/de/burning-man-festival', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Burning Man', caption: "Eine Stadt auf Zeit in der Wüste von Nevada." } },
  { name: 'de-berlin-clubs', lang: 'de', translationOf: '/best-clubs-in-berlin', file: 'de/clubs-berlin.html', path: '/de/clubs-berlin', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Clubs in Berlin', caption: "Vom UFO und dem Tresor bis zum Berghain und dem Sisyphos." } },
  { name: 'de-london-clubs', lang: 'de', translationOf: '/best-electronic-music-clubs-in-london', file: 'de/clubs-london.html', path: '/de/clubs-london', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Clubs in London', caption: "Die Räume hinter Acid House, Jungle, Garage und Dubstep." } },
  { name: 'de-drum-and-bass', lang: 'de', translationOf: '/drum-and-bass-guide', file: 'de/drum-and-bass.html', path: '/de/drum-and-bass', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Drum and Bass', caption: "174 BPM, Breakbeats und Sub-Bass aus Großbritannien." } },
  { name: 'de-dubstep',      lang: 'de', translationOf: '/dubstep-guide', file: 'de/dubstep.html', path: '/de/dubstep', kind: 'guide', generator: 'build-localized-articles.mjs', card: { title: 'Dubstep', caption: "Ein Wort, zwei Genres: von Croydon bis zur Festivalbühne." } },
  { name: 'de-articles',     lang: 'de', translationOf: '/articles', file: 'de/artikel.html',               path: '/de/artikel',               kind: 'index', generator: 'build-articles-page.mjs', card: { title: 'Alle Artikel', caption: "Ausführliche Guides zu Dance Music und Clubkultur." } },
  { name: 'selector',     file: 'selector.html',                      path: '/selector',                     kind: 'tool',  generator: 'build-selector.mjs', card: { title: 'The Selector', caption: "Press the button, pick a random DJ set." } }
];

export const langOf = page => page.lang || 'en';

// Which pages are the same page in another language. A translated entry names
// the English path it was translated from; both sides then announce each other
// with hreflang, which only counts when it is declared in both directions.
export function alternatesFor(path) {
  const translations = pages.filter(page => page.translationOf);
  const english = translations.find(page => page.path === path)?.translationOf || path;
  const family = translations.filter(page => page.translationOf === english);
  if (!family.length) return [];
  return [{lang: 'en', path: english}, ...family.map(page => ({lang: langOf(page), path: page.path}))]
    .map(entry => ({lang: entry.lang, href: `https://thecatrave.com${entry.path}`}));
}
export const guides = pages.filter(page => page.kind === 'guide');
export const guidesIn = lang => guides.filter(page => langOf(page) === lang);
export const files = pages.map(page => page.file);
export const routes = pages.map(({ path, name }) => ({ path, name }));
