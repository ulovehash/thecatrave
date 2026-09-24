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
