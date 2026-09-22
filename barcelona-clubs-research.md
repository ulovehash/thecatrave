# Best clubs in Barcelona: research package

Status: pre-writing, stage 6 verdict not run. Evidence trail also logged in
`TOPIC-DOSSIERS.md` under "Клубы Парижа, Брюсселя, Барселоны + сезонные
фестивали (2026-09-22)". Tool switch (2026-09-22, `KEYWORD-METHOD.md`):
volumes below are Google Ads Keyword Planner (owner's account, US, All
languages, Google, last 12 months); PAA and SERP are a live browser search,
not Ahrefs. Ahrefs figures from the same day are kept alongside for
comparison, not merged into one number.

No Search Console preservation inventory exists: this is a new page. Two
existing pages share the city but not the intent: `/sonar-festival-barcelona`
and `/primavera-sound-barcelona` are festival pages, not clubs. Check for
cannibalisation at the decision-gate/stage-6 pass, not assumed clear here.

## Volumes (Google Ads Keyword Planner, US, 2026-09-22)

Account has no ad spend, so Google returns buckets, not points.

| Keyword | Avg. monthly searches |
|---|---|
| best clubs in barcelona | 1K – 10K |
| clubs in barcelona | 1K – 10K |
| barcelona nightlife | 100 – 1K |

For comparison, Ahrefs (exact match, clickstream, same day) had best clubs in
barcelona at 400 US / 2,000 global, clubs in barcelona at 600 US / 3,000
global, and barcelona nightlife at 1,900 US / 5,300 global — the largest
single head term across all seven candidates checked that day in Ahrefs.
Google Ads inverts the ranking between "clubs in barcelona" and "barcelona
nightlife" relative to Ahrefs; flagging rather than resolving it here.

## Live Google SERP and PAA (US/en, 2026-09-22)

**best clubs in barcelona.**
- PAA: What is the most popular nightclub in Barcelona? / Which club is the
  best in Barcelona? / Is Barcelona good for clubbing? / What is the best
  area in Barcelona for nightlife? (identical to the Ahrefs-sourced PAA
  pulled the same day, a rare exact match between the two tools.)
- People also search for: best clubs in Barcelona for young adults/students/
  18 year olds/30 year olds, best clubs in Barcelona for house music, night
  clubs in Barcelona La Rambla.
- Organic (from the earlier Ahrefs SERP pull, same day): studentfy (pos 6, 0
  RD), barcelona.com (pos 7, 31 RD), wherestherooftop (pos 8, 3 RD),
  youbarcelona (pos 9, 0 RD, but a landing page not an article),
  savoringtravel (pos 10, 0 RD). barcelona-life (pos 5, 39 RD) is the
  strongest genuine competitor. Tripadvisor (pos 4, 4 RD) is a thin listing
  aggregator. More open editorial slots with lower referring domains than
  either Paris or Berlin.

## Consensus venues named by competitors (2026-09-22 web search)

- **RA** (`ra.co/guides/clubs-in-barcelona`): Macarena Club, Input, Nitsa
  Club, La Terrrazza, LAUT, Les Enfants Brillants, Plaza Monumental de
  Barcelona, Moog Club, The Garage Of The Bass Valley, Studio Stereo.
- **Tripadvisor** "15 Best": Sala Razzmatazz, Opium Barcelona, Otto Zutz
  Club, Moog, Twenties Barcelona, City Hall Club, Antilla Barcelona.
- **barcelona-life**: Jamboree (hip-hop/r'n'b), Ocaña, Sauvage, plus a
  district framing (Gothic Quarter, Eixample, Port Olímpic beach clubs).
- **barcelona.com**: Opium Mar, Razzmatazz, Moog, La Terraza, Wet Deck at W
  Barcelona.
- **studentfy** and **savoringtravel** repeat Sutton Barcelona and Negro
  Rojo/Boca Chica respectively; single-sourced so far.

Repeated across 3+ independent lists already: **Razzmatazz** (Tripadvisor,
barcelona.com, and named directly by the owner's shortlist earlier this
session) and **Moog** (RA, Tripadvisor, barcelona.com). **Nitsa** (RA) and
**Macarena Club** (RA) are historically significant (see below) but only
single-sourced in the consensus lists read so far; under the FIGURES.md-
style rule they would still qualify as required through the history source,
the same way UFO qualified for the Berlin page despite thin consensus
coverage.

## History anchors found (2026-09-22)

**Nitsa**, inside **Sala Apolo**. Sala Apolo's own building dates to the
early 20th century (an ice rink, officially inaugurated September 1951, per
The New Barcelona Post) and has changed use repeatedly with the city.
Sources disagree on Nitsa's founding year by one: DJ Mag and Primavera Sound
(Sala Apolo's own retrospective) say 1994; Sala Apolo's current site and one
secondary source say Nitsa began in 1993 and moved into the Apolo building in
September 1996. Treat as "1993 or 1994" until resolved, not silently picked.
Called one of Barcelona's first electronic clubs, and DJ Mag's Top 100 Clubs
still lists it.

**Razzmatazz**: opened in 2000, "heir to the legendary Zeleste" (multiple
sources: Turisme de Catalunya, WeBarcelona, barcrawlbarcelona), which itself
opened in 1973 on Carrer Argenteria/Platería before closing to make way for
Razzmatazz. Five rooms/halls, each running different music. Named after the
Pulp song "Razzmatazz"; Wikipedia gives the Flaming Lips as the first act to
play the venue.

**Macarena Club**: per the initial web search, one of the smallest venues in
dance music, operating under the same name since the 1920s, originally a
flamenco tablao. Needs its own direct source read before print; currently
resting on the earlier aggregate web search only, not a dedicated look.

## Draft keyword map (future `keywords/barcelona-clubs.json`)

Not finalised, for the same reason as Paris: Google Ads gives ranges, and the
decision gate needs to settle whether the map records the Ahrefs point
value, the Google Ads bucket, or both, before `audit-keywords.mjs`-shaped
JSON is written for real.

## Open before a decision gate can be finalised

- Nitsa's founding year (1993 vs 1994) unresolved between sources.
- Macarena Club: no dedicated source read yet, resting on an aggregate
  search result.
- Cannibalisation check against `/sonar-festival-barcelona` and
  `/primavera-sound-barcelona` not run (different intent — festivals, not
  clubs — but not yet confirmed there's no overlapping anchor or FAQ).
- No images sourced or licence-checked.
- No stage-3/stage-5 pass through the new Google-only method beyond "People
  also search for" as a stand-in.

## Draft decision gate (ARTICLE-PRODUCTION-WORKFLOW.md §4) — for discussion, not final

- **Primary intent.** A reader picking or researching Barcelona's best/most
  notable clubs, old and current — the strongest of the three city
  candidates on both raw volume and open SERP slots.
- **Excluded intents.** Cannabis/weed clubs, sex/swinger clubs, padel/wine/
  social clubs (all real collisions in the matching-terms data); "for
  students/18-year-olds" age-targeted variants, which are a different
  angle, not this page; the two existing festival pages' intent.
- **Working title direction**, not final: "Best Clubs in Barcelona: From
  Nitsa to Razzmatazz."
- **Outline direction**, pending fact-check: history section (Sala Apolo's
  building history and Nitsa from 1993/94, then Zeleste 1973 → Razzmatazz
  2000) → "best clubs now" table weighted toward Razzmatazz and Moog (the
  only two names repeated 3+ times) → district framing (Gothic Quarter,
  Eixample, Port Olímpic beach clubs) → FAQ from the live PAA above.
