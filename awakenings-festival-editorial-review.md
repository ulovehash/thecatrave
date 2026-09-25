# Editorial review: awakenings-festival.html

Run 2026-09-25, in-line with `ARTICLE-PRODUCTION-WORKFLOW.md`'s required
order: draft written, then this review, then layout and audits. Written by
the same session that researched and drafted the page, not a separate pass,
the same caveat as the Manchester review from the same batch.

## 1. Verdict

**Ready after revisions, revisions applied in this pass.** No remaining
blocker.

## 2. What already works

- The page's whole reason to exist is a genuine correction: Wikipedia (and
  several other sources) still describe the outdoor summer festival as
  running at Spaarnwoude, but the festival's own live site names Beekse
  Bergen, Hilvarenbeek, and Spaarnwoude now belongs to a separate, smaller
  spring event, Awakenings Upclose. That distinction is checkable against
  awakenings.com directly and is stated plainly in both the body and the FAQ.
- The name-origin story (Rocco Veenboer, Easter, the resurrection of Jesus)
  is a real, sourced, slightly odd fact that answers a genuine curiosity gap
  no competitor page (festivalmates.com, DJ Mag's profile) was checked to
  cover as directly.
- The 2006 police-raid paragraph states the city's own reason (hard drug use
  cited by the mayor) without repeating the organiser's disputed
  "arbitrariness" claim from the same Wikipedia section, which would have
  needed a second source to stand on its own.
- The single video embed (Maceo Plex, Mosaic x Awakenings at Gashouder ADE
  2018) is the only Awakenings-tagged entry in this site's own catalogue, and
  it is placed directly after the ADE paragraph it illustrates, not collected
  in an unrelated end block.

## 3. Priority revisions

**Applied in this pass, not just flagged:**

- **Major, factual, verification gap flagged rather than hidden.** DJ Mag's
  own Top 100 Festivals page for Awakenings returned a Cloudflare 520 error
  when checked directly. The 34th-place, down-14 ranking is sourced from
  Google's indexed copy of the same page and DJ Mag Germany's mirror article,
  both dated 2 July 2026, not the primary page. Recorded explicitly in
  `media/awakenings-festival.json` rather than presented as directly
  verified.
- **Major, factual, avoided rather than corrected.** No reliably sourced
  attendance or capacity figure for the summer festival was found across the
  sources checked (a "80,000 capacity" figure appeared in one earlier
  research note but was not re-verified this pass). Rather than publish an
  unverified number, the page states the sourced fact instead: the 2026
  edition sold out as the largest in the festival's history (Numéro
  Netherlands, 4 June 2026).
- **Minor, precision.** The first draft said Awakenings tickets "routinely
  sell out months ahead." The only dated evidence is a 4 June 2026 sellout
  report for a 10-12 July festival, about five to six weeks, not "months."
  Reworded to "sold out well before the 2026 gates opened," which the source
  actually supports.
- **Minor, repetition.** "Sold out as the largest in the festival's history"
  appeared in both the Answer block (which feeds the hero summary, read
  first) and the very next section's opening sentence. Cut from the "Where
  and when" section, which now leads with only the dates; the fact still
  appears once in the Answer and once, independently, in the FAQ's "How big"
  answer.
- **Minor, structural.** `audit-site-components.mjs` requires every guide
  generator to use the shared `articleTable()` component
  (`sharedArticleTableGenerators`); the first draft had no table. Rather than
  invent a table for its own sake, added a compact "Facts" table (founded,
  organiser, genre, both 2026/2027 date sets, DJ Mag rank) that genuinely
  organises the page's own scattered dates and facts into one reference
  point, placed after the paragraph that introduces the venue, not
  immediately under the H2.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Founded 30 March 1997, Gashouder, Amsterdam, first DJs named | fact | Wikipedia, "Awakenings (festival)" | high | Kept |
| Name origin (Rocco Veenboer, Easter, resurrection of Jesus) | fact | Wikipedia | high | Kept |
| 2000 move to Now & Wow/NDSM; Westergasfabriek reopened Feb 2005 | fact | Wikipedia | high | Kept |
| October/November 2006 police raids, 131 and 82 arrests; NYE 2006 permit denied | fact | Wikipedia | high | Kept; organiser's disputed "arbitrariness" claim left out as a single-source contested claim |
| 2014 foreign expansion (London, New York, Manchester, Antwerp) | fact | Wikipedia | high | Kept |
| 2015 SFX (now LiveStyle) acquisition | fact | Wikipedia | high | Kept |
| 2020 free online edition during COVID | fact | Wikipedia | high | Kept |
| ADE special at the Gashouder since 2012 | fact | Wikipedia | high | Kept |
| Main summer festival now at Beekse Bergen, Hilvarenbeek, not Spaarnwoude | fact | awakenings.com itself (live, 2026-09-25), festivalmates.com, Festivals United | high | Kept; corrects Wikipedia and other stale sources explicitly |
| Spaarnwoude now hosts Awakenings Upclose, a separate event | fact | awakenings.com itself (live) | high | Kept |
| 2026 dates (10-12 July), 2027 dates (9-11 July) | fact | awakenings.com itself (live) | high | Kept |
| ADE 2026 dates (21-25 October) | fact | awakenings.com itself (live) | high | Kept |
| 2026 edition sold out, "largest in festival's history" | fact | Numéro Netherlands, 4 June 2026 | medium-high | Kept |
| DJ Mag Top 100 Festivals 2026: 34th, down 14 | fact | Google's indexed copy of djmag.com; DJ Mag Germany mirror, both 2 July 2026 | medium | Kept, sourcing gap disclosed in §3 |
| Techno-only genre identity; themed editions (minimal, Detroit, schranz, Drumcode, Kne'Deep) | fact | Wikipedia | high | Kept |
| Adam Beyer, Carl Cox, Joseph Capriati as names most tied to the festival | inference, labelled as such by placement | Google Ads Keyword Planner's Refine-keywords Artist grouping | medium | Kept as a named association, not asserted as a formal lineup claim |
| Maceo Plex, Mosaic x Awakenings at Gashouder ADE, 2018 | fact | video title in `selector-data.json` | high | Kept |
| Tickets sold out "months ahead" | claim | none supporting "months" specifically | low | Corrected to match the actual sourced timeframe (§3) |

## 5. SEO preservation

New page, no existing URL or Search Console history to preserve. Primary
intent ("awakenings festival" / "what is awakenings festival") is answered
in the opening line of the Answer block and the infoBanner summary. Targeted
terms (`keywords/awakenings-festival.json`) all appear in body copy;
verified by `audit-keywords.mjs`, which passes.

## 6. Coverage gaps

- **Minor, acknowledged.** No verified attendance/capacity figure (§3).
  A future pass could chase a primary number (an Insomniac-style press page,
  a Dutch news report) rather than the range this pass found unconfirmed.
- **Minor, acknowledged.** DJ Mag's rank is sourced secondhand because the
  primary page errored (§3). Worth re-checking djmag.com directly on a
  future pass.
- No photograph exists of the current Beekse Bergen site; the page uses a
  2007 Gashouder-era photograph instead, recorded as a known gap in
  `media/awakenings-festival.json` rather than left implicit.

## 7. Cuts or merges

The organiser's "arbitrariness" claim about the 2006 permit denial (§4)
was left out rather than cut after inclusion: it is a single-source,
contested characterisation, not a fact the page needs. No other repetition
or filler found beyond the closer-duplication fixed in §3; `grep` for
dash characters and the site's stock-word list (`audit-banned-phrases.mjs`)
both came back clean, and no "not X but Y" constructions were found in the
draft at all.

## 8. Media actions

- Added the "Facts" table (§3); no other media changes. The image and
  video embed were placed correctly on first build:
  `audit-site-components.mjs`'s adjacency check (`mediaAdjacencyRhythm`)
  passed without needing a reorder.

## 9. Unresolved questions

- Verified attendance figure and a direct (non-mirrored) DJ Mag source, both
  noted in §6, are open for a future pass.
- No German or French translation exists yet for this page.

## 10. Final acceptance checklist

- Facts: **pass**, after the ticket-timeframe correction and the disclosed
  DJ Mag sourcing gap above.
- Editorial quality / voice: **pass**; draft read for AI writing tells before
  and after the fact-check pass, none found (no dashes, no stock vocabulary,
  no "not X but Y" constructions, one repeated closer cut in §3).
- SEO preservation: **pass** (new page; targeted terms present, title within
  length, `audit-seo.mjs` and `audit-keywords.mjs` both green).
- Media: **pass**; `audit-media.mjs` and `audit-site-components.mjs` green.
- Implementation readiness: **pass** -- rebuilt, `node audit-all.mjs`,
  `npm run check:html`, `npm run check:links` and `npm run check:layout`
  (454 tests, including this page's own desktop/tablet/mobile layout and
  accessibility checks) all green. One test-environment issue found and
  fixed during this pass, not a page defect: a leftover manual-QA server on
  port 4173 was silently answering Playwright's requests without the
  extensionless-route rewriting `scripts/serve.mjs` provides, so the
  mobile accessibility check hit a 404 page and failed on a missing
  `lang` attribute that has nothing to do with this guide. Stopping that
  server and rerunning fixed it; worth remembering for future sessions doing
  manual visual QA before running Playwright.
