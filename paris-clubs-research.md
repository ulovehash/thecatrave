# Best clubs in Paris: research package

Status: pre-writing, stage 6 verdict not run. Evidence trail also logged in
`TOPIC-DOSSIERS.md` under "Клубы Парижа, Брюсселя, Барселоны + сезонные
фестивали (2026-09-22)". Tool switch (2026-09-22, `KEYWORD-METHOD.md`):
volumes below are Google Ads Keyword Planner (owner's account, US, All
languages, Google, last 12 months); PAA and SERP are a live browser search,
not Ahrefs. Where an Ahrefs number was already on record from the same day
it is marked as such and kept for comparison, not merged into one figure.

No Search Console preservation inventory exists: this is a new page.

## Volumes (Google Ads Keyword Planner, US, 2026-09-22)

Account has no ad spend, so Google returns buckets, not points.

| Keyword | Avg. monthly searches |
|---|---|
| best clubs in paris | 1K – 10K |
| clubs in paris | 1K – 10K |
| paris nightlife | 100 – 1K |

For comparison, Ahrefs (exact match, clickstream, same day) had best clubs in
paris at 200 US / 1,000 global, clubs in paris at 300 US / 1,700 global, paris
nightlife at 700 US / 1,900 global. The two disagree by an order of magnitude;
neither overwrites the other in this record.

## Live Google SERP and PAA (US/en, 2026-09-22)

**best clubs in paris.**
- PAA: What is the best nightclub in Paris? / What area of Paris is best for
  nightlife? / What is the #1 nightclub in the world? / What are the coolest
  bars in Paris?
- People also search for: best clubs in paris reddit, best night club in
  Paris for tourist, best nightclubs in Paris for adults/students, for young
  people, for Americans, famous Paris nightclubs.
- Organic (from the earlier Ahrefs SERP pull, same day, not re-verified live
  position-by-position): RA guide (pos 4, 1 referring domain), Timeout (pos
  5, 13 RD), Tripadvisor (pos 6, 1,807 RD, listing aggregator), access.sb
  (pos 9, 1,789 RD, listing aggregator), doitinparis (pos 10, 2 RD). Reddit
  holds two slots as UGC. Three genuinely thin editorial pages (RA, Timeout,
  doitinparis) is the winnability signal.

## Consensus venues named by competitors (2026-09-22 web search)

- **RA** (`ra.co/guides/clubs-in-paris`): Essaim, La Station (Gare des
  Mines), Badaboum, Rex Club, Virage, Fvtvr, La Java, Nodd Club.
- **Tripadvisor** "15 Best": Palais Maillot, Supersonic, Pop In, 911 Paris,
  Glazart, La Suite, Badaboum.
- **doitinparis** "New Hotspots": MishMish, Mia Mao, La Fête, FVTVR, MAISON
  3, LA NUIT, VICE VERSA.
- **access.sb** "Top 10": Club Panthéon, and others not yet read in full.
- Neighbourhood framing repeated across sources: the 11th arrondissement
  (Oberkampf, Bastille, rue Jean-Pierre Timbaud) as the main bar-hop strip;
  the 10th around Canal Saint-Martin (MishMish, Mia Mao, Essaim, Point
  Éphémère) as the walkable cluster.

Badaboum and Rex Club/Fvtvr are the only names repeated across more than one
list so far (Badaboum: RA + Tripadvisor; Fvtvr: RA + doitinparis). Everything
else is single-sourced at this stage; a proper FIGURES.md-style cross-
reference (4+ sources, plus a history pass) has not been run yet.

## History anchor found (2026-09-22, needs a second source before print)

**Rex Club**, 5 boulevard Poissonnière, basement of the Grand Rex cinema.
Opened as a venue earlier, but its electronic-music identity dates to 1988,
at the start of the acid house wave (RA, DJ Mag, both dated 30 May
2023/28 May 2023 on its 35th anniversary, so 1988 is corroborated twice by
trade press). Became a hub for French techno and house; outgoing.world
names Daft Punk and Laurent Garnier as having "made history" there, but that
specific claim is single-sourced (a listings/ticketing site) and needs a
stronger citation before it goes in the article as fact rather than as
repeated club lore.

**Les Bains Douches** (also "Les Bains"): opened as a nightclub in December
1978 (The Culture Crush, citing Jacques Renault and François Coat leasing the
site) inside a former 1885 bathhouse (Bonjour Paris). Legendary 1980s venue
for Paris nightlife and a stopover for international stars (NYT). Closed and
reopened in 2015 as a nightclub/hotel/restaurant (NYT, France.fr). One source
(Les Bains' own site) instead dates "the birth of the legendary club" to
1972; this conflicts with the 1978 date given by press and needs resolving,
not averaging, before publication.

**Le Palace**: appears repeatedly in "people also search for" alongside Les
Bains Douches as Paris's other legendary closed club, but no source was read
for it this pass. Open item.

## Draft keyword map (future `keywords/paris-clubs.json`)

Not finalised. Google Ads Keyword Planner gives ranges, not points, so a
keyword map that requires a specific number per term (the existing
`audit-keywords.mjs` convention) needs a decision on which figure to record
per term before this file is written for real: the Ahrefs point estimate,
the Google Ads bucket midpoint, or both side by side. Flagging for the
decision gate rather than picking silently.

## Open before a decision gate can be finalised

- Le Palace: no source read yet.
- Les Bains Douches founding date conflict (1972 vs 1978) unresolved.
- Only 2 of the consensus venues (Badaboum, Fvtvr) are corroborated by more
  than one competitor list; the rest need a third and fourth source pass
  before being called "required" under the FIGURES.md-style rule.
- No images have been sourced or licence-checked yet.
- No stage-3 (related/also-talk-about equivalent) or stage-5 (competitor
  keyword mining) pass has been run through the new Google-only method; this
  package used only "People also search for" as that stand-in so far.

## Draft decision gate (ARTICLE-PRODUCTION-WORKFLOW.md §4) — for discussion, not final

- **Primary intent.** A reader picking or researching Paris's best/most
  notable clubs, old and current.
- **Excluded intents.** Tonight's listings/tickets (RA already owns that);
  jazz clubs, comedy clubs, strip/swinger clubs (all real collisions in the
  matching-terms data); German/French-language demand (a separate `fr/` page
  could exist later, not this pass).
- **Working title direction.** Something in the Berlin/London family, e.g.
  "Best Clubs in Paris: From Les Bains Douches to Rex Club" — not final,
  needs the Le Palace and Bains Douches fact-check closed first.
- **Outline direction**, pending fact-check: history section (Les Bains
  Douches/Le Palace era, then Rex Club as the techno/house hub since 1988) →
  a "best clubs now" table drawing on RA/Tripadvisor/doitinparis, weighted
  toward names that repeat across sources → neighbourhood section (11th
  arrondissement vs Canal Saint-Martin) → FAQ from the live PAA above.
  This is a direction, not an approved outline.
