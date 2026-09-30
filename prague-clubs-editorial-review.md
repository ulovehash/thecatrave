# Editorial review: best-clubs-in-prague.html

Run 2026-09-24, after publication-ready build and before the owner asked to
confirm quality. This review should have run before that build, per
`ARTICLE-EDITORIAL-REVIEW.md`; it did not, and this file is that gap being
closed retroactively rather than silently.

## 1. Verdict

**Ready after revisions — revisions applied in this pass.** No remaining
blocker. One coverage gap (below) is a real limitation, not a defect, and is
left to the owner's call.

## 2. What already works

- The two-scenes framing (tourist mainstream vs. built-for-house-and-techno
  underground) is a real, sourced distinction, not a rhetorical device, and it
  gives the FAQ answers ("Is nightlife better in Prague or Budapest?") a
  genuine comparison to make.
- Every club named carries a specific, checkable fact (opening year, capacity
  or sound system, a DJ Mag ranking, or a closure), not a generic descriptor.
- The Ankali financial-crisis story and the Boiler Room Prague 2018 lineup are
  both real, dated events with named sources, not colour.
- The Cross Club image and one factual framing choice are deliberately
  different from `best-clubbing-cities-in-europe.html`'s existing coverage of
  the same club, with the reason recorded in `media/prague-clubs.json` rather
  than left implicit.

## 3. Priority revisions

**Applied in this pass, not just flagged:**

- **Major, factual — dress code overstated.** The draft said Karlovy Lázně
  "enforces a smart-casual door policy and turns away sportswear" with no
  source behind that specific claim. A fresh check found Duplex's dress code
  confirmed (livingprague.com) but Karlovy Lázně reported both ways: some
  guides describe a casual dress code, the club's own site says it has none.
  Rewrote the FAQ to state the conflict instead of picking a side. Cross Club
  and Ankali's "no dress code" held up against fresh sources and is
  unchanged.
- **Major, voice — four "X rather than Y" constructions in one ~600-word
  article.** ("weathered rather than resolved", a Boiler Room lineup that
  "read as a statement... rather than just an import", built its reputation
  "on sound rather than location", "reported as ongoing rather than
  resolved.") One or two of this shape can be a deliberate, informative
  contrast; four in one short piece is the pattern the `humanizer` skill
  exists to catch. Rewrote three of the four as direct statements. Left two
  isolated, spaced-apart instances elsewhere (scrapheap decor vs. a design
  brief; a sound-system-first build vs. a look) because each carries real
  information the reader would otherwise not have, per the skill's own
  exception for a contrast that corrects an assumption rather than just
  adding weight.
- **Minor, factual overreach — unsourced interpretation.** "A lineup that
  read as a statement about the city's own scene rather than just an import"
  was my own reading of a lineup, presented as fact, with no source saying
  that. Cut; the factual lineup (three Prague artists alongside two British
  DJs) makes the point on its own.
- **Minor — soft claim without a source.** "Eva Porating, then still finding
  an international audience" implied a documented career stage I hadn't
  actually checked. Cut to the fact that holds up: she played the broadcast
  and later became a HÖR regular.
- **Minor — decorative word.** "A steampunk landscape of welded pipes, cogs
  and moving mechanical parts" used "landscape" as an abstract flourish
  rather than describing anything literally landscape-shaped. Reworded to
  state what is actually there.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Karlovy Lázně dress code | fact | nightflow.com vs. karlovylazne.cz (conflict) | low | Qualified: states the conflict, does not assert either side |
| Duplex turns away sportswear | fact | livingprague.com | medium | Kept |
| Cross Club / Ankali have no dress code | fact | oh-my-prague.com, perfectitinerary.io | medium | Kept |
| Ankali's April 2025 crisis, still booking into 2026 | fact | Mixmag, DJ Mag, RA (2025); this pass's own event checks (2026) | high | Kept |
| Boiler Room Prague, Dec 2018, lineup | fact | Boiler Room, RA | high | Kept; interpretive add-on cut |
| Cross Club founding, crowdfunding, 2002 | fact | Wikipedia, Atlas Obscura, Radio Prague International | high | Kept |
| Karlovy Lázně "largest club in Central Europe" | claim, sourced as the club's own marketing | karlovylazne.cz | medium | Kept, attributed as the club's own claim, not stated as independently verified |

Sources used are travel/nightlife guides and specialist outlets (Mixmag, DJ
Mag, RA, Radio Prague International), not primary interviews. That is the
right tier for practical visitor facts like a door policy; it would not be
enough for a contested origin story, and none of this page's origin claims
(Cross Club's founding, Ankali's opening) rest on that tier alone.

## 5. SEO preservation

New page, no existing URL or Search Console history to preserve. Primary
intent ("best clubs in prague") is answered in the opening line of the
Answer block and the infoBanner summary. Targeted terms
(`keywords/prague-clubs.json`) all appear in body copy; verified by
`audit-keywords.mjs`, which passes.

## 6. Coverage gaps

- **Major, acknowledged, not fixed in this pass.** The "best clubs in Prague
  now" table names four venues: Karlovy Lázně, Duplex, Cross Club, Ankali.
  Competing pages (bestclubsprague.com, Time Out-style lists) typically run
  10-15. Two more names surfaced in the original SERP research and were never
  followed up: EPIC Prague (tied for the top search position) and SaSaZu (an
  Asian-fusion restaurant/concert hall in the Holešovice market hall, known
  for large international bookings). This is a real thinness, not a
  defect in what's there: every club named is well-sourced, but four is a
  narrower list than a reader comparing this page to a competitor's would
  expect. Raised to the owner; awaiting a decision on whether to expand.

## 7. Cuts or merges

None beyond the interpretive sentence and soft claim cut in §3. No repetition
or filler found beyond the AI-tell instances already addressed.

## 8. Media actions

None. Media matrix (`media/prague-clubs.json`) unchanged except for
recording the dress-code sourcing added in this pass.

## 9. Unresolved questions

- Expand the club table beyond four (see §6)? Needs the owner's call, and
  real research (EPIC Prague, SaSaZu, and a fresh check for other venues) if
  yes, not names added from memory.
- No German or French translation exists yet for this page.

## 10. Final acceptance checklist

- Facts: **pass**, after the dress-code correction above.
- Editorial quality / voice: **pass**, after the AI-tell rewrites above.
- SEO preservation: **pass** (new page; targeted terms present, audit green).
- Media: **pass**, no changes needed.
- Implementation readiness: **pass** — rebuilt, `audit-all.mjs` and
  `npm run check:layout` both green after this pass's edits.

This review was written after the page was already built and audited, not
before, which is out of the order `ARTICLE-PRODUCTION-WORKFLOW.md` sets. The
Tokyo and Budapest guides from the same batch have not had this pass run yet.


---

## Evidence addendum, 2026-09-30

Written under `ARTICLE-EDITORIAL-REVIEW.md` §0. This addendum does not replace the review above; it adds the evidence that review did not record. **It is not independent:** the same agent that scanned the page wrote it, it was run with the shell offline, and no live URL was opened in this pass. Nothing in the copy was edited. Proposed wording is listed under "Findings" and waits for the owner.

Page checked: `best-clubs-in-prague.html` (built text, article body, sources section excluded).

### Greps on the built page

- `complete|full|whole|uninterrupted|an hour|in full`: 1 hit(s)
  - Club Area Music and character Best for Karlovy Lázně Old Town, by Charles Bridge Five floors, one genre each, in a former spa building open since 1999 A whole night out without leaving one building Duplex Wenceslas Square A glass
- `jungle|drum and bass|breaks` (this is not a drum and bass guide unless stated): 4 hit(s)
  - Its basement room has run drum and bass, techno, dub and experimental electronic nights since the early years, drawing a bookings policy closer to a UK bass-music club than a Central European tourist venue, and giving Prague's und
  - Club Area Music and character Best for Karlovy Lázně Old Town, by Charles Bridge Five floors, one genre each, in a former spa building open since 1999 A whole night out without leaving one building Duplex Wenceslas Square A glass
  - Article by thecatrave Breakbeat, bass and rave DJ, producer and selector.
  - Support ↗ Protect Ya Breaks by thecatrave Berlin Race 1909 by thecatrave Continue reading Read next.
- `Wikipedia` in the body: 0 hit(s)
- `not .* but`: 0 hit(s)
- `matters`: 0 hit(s)
- `the point`: 0 hit(s)
- Superlatives (`best-known|most famous|largest|biggest|legendary|world's`): 2 hit(s)
  - What is the biggest club in Prague?
  - Each floor runs a different genre, from a silent disco to a vintage Cadillac used as a DJ booth for 1950s to 1970s music, and it markets itself as the largest club in Central Europe.

Hits that are the owner's own mix or Bandcamp copy ("Thirty tracks where breaks move…", "Protect Ya Breaks", "Berlin Race 1909", the author card) are protected promotion and are not counted as defects.

### Listening, links and reuse

- Embeds on the page: youtube=WY_Th5nrI90,6od6a-eiLUs spotify=- soundcloud=0. The IDs are from the built HTML. Channel, view count and oEmbed result were **not** re-checked in this pass.
- Internal links: /best-clubs-in-nyc /best-clubs-in-tokyo /best-clubs-in-budapest /best-clubs-in-manchester. None was justified individually in the original review.
- Figures: 3; shared with other pages: none. Checked against every other page's `<figure>` images after normalising size suffixes; the author photo is excluded.
- Owner promotion present: Bandcamp tracks (protect-ya-breaks,berlin-race-1909) and own-set players. Protected.

### Humanizer record

No humanizer pass was re-run here. The review above mentions the humanizer 1 time(s) but records no before/after sentences, so the earlier pass is unevidenced. The grep hits above are the candidates it should have caught.

### Stage 6

No research file was found for this guide (prague-clubs-research.md, prague-clubs-research.md, prague-clubs-research.md, prague-research.md), so there is no Stage 6 record to cite. This addendum does not supply one.

### Findings (owner decision needed, nothing applied)

- "a bookings policy closer to a UK bass-music club than a Central European tourist venue" is a bass-music comparison on a city guide and is unsourced.

### Open items

- Two YouTube embeds: no view-count evidence.
