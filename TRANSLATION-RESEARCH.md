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
