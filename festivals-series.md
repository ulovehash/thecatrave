# Festivals series: one guide per festival

The owner's decision, 13 September 2026: one article per popular electronic
music festival. The list comes from the web-first pass logged in
`TOPIC-DOSSIERS.md` («Самые популярные фестивали электроники в мире»): names
taken from the ranking articles, then measured in Ahrefs. Global volume,
September 2026.

## The list and the proposed order

| # | Festival | Global | US | Status |
|---|---|---:|---:|---|
| — | Burning Man | — | — | **published** `/what-is-burning-man` |
| 1 | Tomorrowland | 363,000* | 42,000 | **published** `/tomorrowland-festival` |
| 2 | EDC Las Vegas | 25,000 | 20,000 | **published** `/edc-las-vegas` |
| 3 | Creamfields | 43,000 | 1,500 | **published** `/creamfields-festival` |
| 4 | Parookaville | 37,000 | 700 | **published** `/parookaville-festival` |
| 5 | Ultra Music Festival (+ Ultra Europe as a section) | 12,000 + 6,600 | 4,300 | **published** `/ultra-music-festival` |
| 6 | Untold | 11,000 | 700 | **written** `/untold-festival`, 2026-09-14, not pushed (`untold-research.md`) |
| 7 | Defqon.1 | 11,000 | 700 | volumes only |
| 8 | Dekmantel | 8,000 | 500 | volumes only |
| 9 | Amsterdam Dance Event | 7,900 | 700 | volumes only |
| 10 | Monegros | 7,800 | 100 | volumes only |
| 11 | Awakenings | 6,500 | 700 | volumes only |
| 12 | EXIT | 5,200 | 400 | volumes only |
| 13 | Movement Detroit | 4,300 | 4,000 | SERP checked: weak; TP 6,300 |
| 14 | Sónar | 3,800 | 250 | volumes only |

\* Includes Disney's Tomorrowland land and the 2015 film.

Order: by search volume and traffic potential, never by whether the demand
is American (the owner, 13 September 2026). EDC sits above Creamfields and
Parookaville on traffic potential. TP is measured per country, so each
festival's TP is re-read in its main market during its own research, and the
order may shift then. Below 3,500 (Sonus, Sunburn, Kappa FuturFestival, Time
Warp) not in the series unless the owner adds them.

Ultra Europe is an edition of Ultra, as Winter and Thailand are of
Tomorrowland: a section, not its own page. The owner confirmed this on
13 September 2026; it is the "Ultra Europe, in Split" section of
`/ultra-music-festival`.

## Per festival, before a structure is proposed

1. Web search the festival the way a reader would; take the articles that
   come back (`KEYWORD-METHOD.md` §1).
2. `site-explorer-organic-keywords` (`mode=exact`) on each article and on the
   festival's Wikipedia page: what they actually earn.
3. Matching terms on the name, classified: listener, dated/transactional,
   navigational, collision. Subtotal per class.
4. SERP for the two or three strongest informational forms, and PAA verbatim.
5. For a festival whose demand is national (Creamfields, Parookaville,
   Monegros, Untold), the SERP in that country too.
6. Related terms, `also_rank_for` and `also_talk_about`, on the festival form
   (`TOPIC-RESEARCH.md` stage 3). Two calls; skipping them left every guide
   from Tomorrowland to Untold without it (`defects.json`,
   festival-research-skipped-stages).
7. Log in `TOPIC-DOSSIERS.md`, then write `<festival>-research.md` in the
   shape of `tomorrowland-research.md`.
8. Stage 6 validation, by the prompt in `TOPIC-RESEARCH.md`, run by someone
   who did not gather the evidence (a separate agent, with the owner's go),
   before the structure goes to the owner. A research file that says "stage 6
   not run" is not ready for a structure.

Budget: about 8–12 Ahrefs calls per festival. One or two festivals per session
(`research-token-economy`).

## Shared across the series

- URL per festival, chosen from its SERP, not by template: `/what-is-burning-man`
  won on "what is", `/tomorrowland-festival` on "tomorrowland festival".
- Every guide: answer block, where and when (no years in headings), how big,
  history and owner, the music the festival actually books, Essential
  listening, FAQ from PAA, Read Next linking the rest of the series.
- No drum and bass written in where nobody asked for it: no paragraph on how
  little drum and bass a festival books, no owner-voice aside for listeners
  from breaks or jungle, no drum and bass line in the Bandcamp copy, no link to
  the drum and bass guide from a festival page. The owner, 14 September 2026:
  nobody asked for it.
- Next year's edition is targeted (the owner, 14 September 2026): every
  guide carries a "<festival> <next year>" block with the next edition's
  dates, sourced to the official site, and FAQ "When is <festival> <next
  year>?". The year in that block's heading is the one exception to "no years
  in headings". The block is refreshed every year when the festival ends and
  the following edition is announced; until dates are announced it says so
  rather than guessing. Line-ups, set times and ticket prices stay out.
  Measured 2027 forms (global, September 2026): tomorrowland 2027 16,000, edc
  2027 1,900 (TP 76,000, parent "edc"), burning man 2027 1,700, parookaville
  2027 1,200, untold 2027 1,100, ultra 2027 800, ultra miami 2027 800 (TP
  3,800), edc las vegas 2027 700, creamfields 2027 300, ultra music festival
  2027 200, ultra europe 2027 200.
- Listening: the festival's legendary and most popular sets (evidence: view
  counts on the official channel, "best sets" lists found by web search), from
  the festival's or artist's own channel, oEmbed-checked. Drum and bass or
  jungle only where it genuinely belongs to the festival, not forced in as the
  site's angle (the owner, 13 September 2026, after the first three guides
  built their listening around it).
- Images: openly licensed, new per guide; nothing borrowed between festival
  guides (`ARTICLE-PRODUCTION-WORKFLOW.md` §7).
- Figures per guide sourced through `FIGURES.md`, never from memory.
