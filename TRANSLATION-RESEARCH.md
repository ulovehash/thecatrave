# Translation research

## Stage 1: choosing the language (2026-09-17)

Ahrefs `keywords-explorer-overview`, one call per country, the 26 guide seeds
(festival seeds as the bare name). Cost 1,638 units, plus 165 for a
`volume-by-country` test on "drum and bass". English/brand terms only: the
demand for native-language phrasings is measured in stage 2.

Volume / traffic potential per country:

| Guide seed | DE | ES | FR |
|---|---|---|---|
| tomorrowland | 35,000 / 20,000 | 15,000 / 12,000 | 32,000 / 2,300 |
| lollapalooza | 9,400 / 12,000 | 2,900 / 1,500 | 21,000 / 3,200 |
| parookaville | 31,000 / 6,200 | 200 / 100 | 1,100 / 90 |
| mysteryland | 2,000 / 1,500 | 200 / 100 | 1,100 / 700 |
| untold festival | 1,100 / 1,400 | 500 / 400 | 450 / 250 |
| coachella | 26,000 / 1,200 | 14,000 / 250 | 28,000 / 700 |
| glastonbury festival | 2,600 / 1,000 | 600 / 200 | 1,300 / 600 |
| primavera sound | 700 / 700 | 9,200 / 8,300 | 800 / 1,000 |
| best clubs in berlin | 450 / 600 | 30 / 40 | 20 / 60 |
| burning man | 11,000 / 350 | 7,100 / 1,300 | 13,000 / 3,500 |
| clubs in london | 400 / 350 | 70 / 20 | 150 / 90 |
| drum and bass | 1,600 / 250 | 800 / 150 | 700 / 250 |
| dubstep | 1,500 / 250 | 450 / 80 | 600 / 300 |
| sonar festival | 350 / 200 | 800 / 600 | 700 / 500 |
| find new music | 20 / 150 | 0 / – | 0 / – |
| ultra music festival | 400 / 100 | 300 / 40 | 200 / 60 |
| uk garage | 300 / 70 | 150 / 50 | 200 / 40 |
| breakbeat | 250 / 70 | 800 / 100 | 100 / 20 |
| edc las vegas | 350 / 60 | 90 / 50 | 200 / 100 |
| jungle music | 150 / 20 | 70 / 70 | 300 / 350 |
| creamfields | 300 / 10 | 150 / 0 | 200 / 150 |
| bass music | 100 / 10 | 30 / 0 | 80 / 100 |
| boiler room sets | 10 / – | 0 / – | 0 / – |
| live dj sets | 20 / – | 0 / – | 0 / – |
| german electronic music | 0 / – | 0 / – | 0 / – |
| uk electronic music | 0 / – | 0 / – | 0 / – |
| **Total** | **125,000 / 46,490** | **53,440 / 25,350** | **102,200 / 14,360** |

Verdict: German first. Countries measured: DE, ES, FR only (not AT/CH, LatAm, BE/CA).

## Stage 2: German keywords, batch 1 (2026-09-17)

`keywords-explorer-matching-terms`, country de, volume filter, one call per
festival. Cost 4,334 units. Maps: `keywords/de-*.json`.

| Guide | Head term | Volume | Also targeted |
|---|---|---:|---|
| Tomorrowland | tomorrowland | 35,000 | wo ist tomorrowland 700, tomorrowland winter 1,800, tomorrowland thailand 1,000, besucher 700, tickets preise 800, 2027 1,600 |
| Parookaville | parookaville | 31,000 | 2027 1,100, 2027 datum 800, tickets 1,200, gelände 300, besucherzahlen 350, weeze 400 |
| Coachella | coachella | 26,000 | was ist coachella 2,000, coachella festival 3,500, wann ist 600, wo ist 500, 2027 500, kritik 600 |
| Mysteryland | mysteryland | 2,000 | mysteryland festival 200, 2027 100 |
| Untold | untold festival | 1,100 | untold 2026 200, untold 2025 100 |

Dated, transactional and shopping clusters are rejected in each map with a
reason: `coachella outfit` (1,400), `parookaville outfit` (300),
`tomorrowland 2026` (50,000), the line-ups and the timetables.

**Lollapalooza is not translated.** German demand for it is Lollapalooza Berlin
(lollapalooza berlin 5,100, berlin 2026 4,900, and Ahrefs gives "lollapalooza"
itself the parent topic "lollapalooza berlin"), and the English guide is about
Chicago, with one sentence on Berlin. Translating it would answer the wrong
question. It returns to the queue when the English guide covers Berlin.
Coachella took its place in this batch.

## Published, batch 1

`/de/tomorrowland-festival`, `/de/parookaville-festival`,
`/de/coachella-festival`, `/de/mysteryland-festival`, `/de/untold-festival`,
with the German index at `/de/artikel`.

The five English pages changed only in the head: each now carries the
`hreflang` link to its translation. No English editorial copy was touched.

Next by measured German traffic potential: Glastonbury (1,000), Primavera Sound
(700), Berlin clubs (600), Burning Man (350), London clubs (350).

## Stage 2: German keywords, batch 2 (2026-09-18)

`keywords-explorer-matching-terms`, country de, volume ≥ 50, no SERP. Seven
seeds plus two checks the batch needed (`dnb`, `berghain`). Cost 4,158 units
(22 per row), against ~6,300 approved; the pool stood at 59.8% of 800,000
afterwards. Maps: `keywords/de-*.json`.

| Guide | German URL | Head term | Volume | Also targeted |
|---|---|---|---:|---|
| Glastonbury | `/de/glastonbury-festival` | glastonbury | 6,300 | glastonbury festival 2,600, glastonbury festival 2027 200, glastonbury 2027 100 |
| Primavera Sound | `/de/primavera-sound-barcelona` | primavera sound | 700 | barcelona 350, porto 90, festival 60, 2027 (under 50, next edition) |
| Berlin clubs | `/de/clubs-berlin` | clubs berlin | 5,500 | berlin clubs 2,800, clubs in berlin 1,300, techno clubs berlin 800, berghain türsteher 3,100, die besten clubs in berlin 90, bekannte clubs berlin 80 |
| Burning Man | `/de/burning-man-festival` | burning man | 11,000 | burning man festival 3,200, burning man tickets 350, was ist burning man 100, burning man 2027 100 |
| London clubs | `/de/clubs-london` | clubs london | 500 | clubs in london 400, london clubs 350 |
| Drum and bass | `/de/drum-and-bass` | drum and bass | 1,600 | liquid drum and bass 70 |
| Dubstep | `/de/dubstep` | dubstep | 1,500 | dubstep musik 250, was ist dubstep 80 |

Intent check, before translating: all seven German demands are about what the
English guides cover, so none was replaced (Lollapalooza, in batch 1, was).

- **Berlin clubs.** German demand is larger and more practical than the English
  guide: berghain 59,000 and berghain berlin 19,000 (navigational), berghain
  outfit 1,900, berghain von innen 3,000, clubs berlin heute 350, and the gay,
  sex and swinger listings. Only what the English guide answers was targeted;
  berghain türsteher is the door section. The rest is rejected in the map.
- **Burning Man.** Collisions rejected: the adult searches, Cara Delevingne
  (800), the outfit cluster, a 2025 death in the news, and "the burning man"
  (probably the 2011 film).
- **London clubs.** The seed's German SERP is half football (premier league
  clubs london 600, london fussball clubs 600). The nightlife terms are small
  but match the guide.
- **Drum and bass.** No German phrasing has volume: "was ist drum and bass" is
  under 50, and "dnb" (2,900) is the Deutsche Nationalbibliothek. City party
  searches are event listings.
- **Dubstep.** "dubstep musik" is the one German phrasing. The English questions
  in the German pull ("what is dubstep?" 250) stay with the English page;
  "lizenzfreie dubstep musik" asks for files (WRITING.md).

Dated editions, line-ups, tickets as a purchase and outfits are rejected in
every map with a reason, as in batch 1.

Structure decisions:

- `build-localized-articles.mjs` now renders the non-festival guides too:
  optional owner's mixes, contents labels, a reading-time floor, the Article
  image, and longest-first placeholder matching (SITE-COMPONENTS.md). The genre
  guides' listening blocks, placed by paragraph index in the English
  generators, are placed by `[Embed: ...]` lines in the German drafts.
- No SVG with English text sits in any of the seven bodies. The drum and bass
  schematic (`img/dnb/dnb-cover.webp`) is only the card and share image, and
  the German card uses the Roni Size photograph, as the English one does.
- The Burning Man comparison table, appended to the introduction in the English
  generator, is a `[Tabelle: Vergleich]` placeholder at the end of the German
  introduction.
- Imperial units converted (Glastonbury, Burning Man); quotations in the
  dubstep guide translated, sources unchanged.
- One English inconsistency found while translating: the London guide counts
  its lists as three and as four. Logged in defects.json
  (`london-clubs-list-count-inconsistent`), open until the owner approves the
  English wording; the German avoids the number.

## Published, batch 2

`/de/glastonbury-festival`, `/de/primavera-sound-barcelona`,
`/de/clubs-berlin`, `/de/burning-man-festival`, `/de/clubs-london`,
`/de/drum-and-bass`, `/de/dubstep`, listed on `/de/artikel`. The seven English
pages changed in the head only (hreflang).

Next by measured German traffic potential (stage 1): Sónar (200), Ultra (100),
UK garage (70), breakbeat (70), EDC (60).
