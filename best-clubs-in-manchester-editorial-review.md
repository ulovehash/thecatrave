# Editorial review: best-clubs-in-manchester.html

Run 2026-09-25, in-line with `ARTICLE-PRODUCTION-WORKFLOW.md`'s required order:
draft written, then this review, then layout and audits. Written by the same
session that researched and drafted the page, not a separate pass, which
`TOPIC-RESEARCH.md`'s stage-6 rule would call out for a verdict on whether to
write the page at all; the owner had already decided to write it (row 7 of the
wave-3 ranked list, `TOPIC-DOSSIERS.md`), so this review covers whether the
draft that resulted is accurate and readable, not whether the topic was worth
picking.

## 1. Verdict

**Ready after revisions, revisions applied in this pass.** No remaining
blocker. One coverage gap (below) is a real limitation, left to the owner.

## 2. What already works

- The two-era framing (the closed Haçienda that built the reputation vs.
  the seasonal Warehouse Project and small independent rooms that carry it
  now) is a real, sourced distinction, not a rhetorical device, and every
  venue named carries a specific, checkable fact (opening year, sound system,
  a DJ Mag ranking, or a closure).
- The Warehouse Project's full venue history (Strangeways brewery, two stints
  under Piccadilly station, Victoria Warehouse, Depot Mayfield, and the 2023
  Rotterdam edition) is the complete sequence from Wikipedia, not a
  simplified version that skips a location.
- The bass/grime paragraph (LEVELZ, Hidden's jungle and drum & bass nights)
  is a real, sourced claim tying the site's own genre interest to Manchester
  specifically, not an inserted aside of the kind `WRITING.md` prohibits.
- Both catalogue video embeds are tied to real, verifiable facts: Swing Ting's
  title names Soup directly, and LEVELZ is named as an unplaced Boiler Room
  Manchester broadcast rather than pinned to a venue that was never confirmed.

## 3. Priority revisions

**Applied in this pass, not just flagged:**

- **Major, factual, caught during visual QA, not the humanizer pass.** The
  Haçienda bollards image's alt text and media record claimed the bollards
  are "outside the apartment block built on the club's demolished site." A
  screenshot of the rendered page showed an indoor display (a stage, a glass
  case, interpretive panels), not a street. The Flickr original is titled "24
  Hour Party People" with the Spanish caption "esto seguia estando cuando yo
  fui en el 91" ("this was still there when I went in [19]91"), and its date
  (26 August 2007) falls inside Urbis's "Haçienda 25" exhibition (mid-July
  2007 to mid-February 2008, Wikipedia), which is the likely context, but the
  file page itself does not confirm the venue. Rewrote the alt text to state
  only what the image shows (three bollards on display in 2007) and recorded
  the full reasoning, including what remains unconfirmed, in
  `media/best-clubs-in-manchester.json` rather than asserting a location. The
  visible caption never carried the wrong claim; only the alt text and the
  media record did, so nothing published on the page itself was wrong before
  this pass, but both would have been if left uncorrected.
- **Major, factual, timeline.** The first draft placed Madonna's January 1984
  Haçienda show after the 1986 "Nude" house night and the 1988 "Hot" acid
  house night in the same paragraph, so a reader encountered 1986, 1988, then
  1984, out of order. Reordered the paragraph to state events chronologically
  and reworded the transition so it no longer implies acid house arrived in
  1986 rather than 1988.
- **Major, factual, completeness.** The Warehouse Project paragraph originally
  named only two of its four venue moves (a disused brewery and the tunnels
  under Piccadilly station) before Depot Mayfield, silently skipping Victoria
  Warehouse in Trafford Park (2012-13) and the fact that Store Street hosted
  it twice, not once (2007-11, then again 2014-18). A reader checking
  Wikipedia would have found the page's version incomplete. Rewrote to name
  all four locations and both Store Street stints.
- **Minor, voice, humanizer pass.** The "Where to go out" section and the
  dress-code FAQ answer both ended on the identical sentence, "built around
  sound systems and bookings, not door policy" / "in keeping with a scene
  built around sound systems and bookings rather than door policy," a
  repeated-closer pattern. Shortened the FAQ answer to state the fact once
  without repeating the earlier sentence's reasoning.
- **Minor, keyword honesty.** `keywords/best-clubs-in-manchester.json`
  originally listed five near-duplicate long-tail phrases ("best dance clubs
  in manchester," "best manchester nightclubs," "best nightclubs manchester,"
  "good clubs in manchester," "good night clubs in manchester") alongside the
  page's own head term. Forcing all five into the copy on top of the four
  terms that fit naturally would have been the keyword-stuffing `WRITING.md`
  warns against. Moved the five to `rejected` with the reasoning recorded,
  kept four terms that could be placed naturally: `manchester nightlife`, the
  correctly-ordered `manchester night clubs` (in the FAQ's best-area answer),
  `hacienda manchester` (given once as the plain-spelling variant of the name
  the rest of the page writes correctly as `Haçienda`), and `the warehouse
  project manchester` (also a genuine disambiguator now that the series runs
  a Rotterdam edition too, not only a keyword placement).
- **Minor, technical.** The page's SEO title was 68 characters, over
  `audit-seo.mjs`'s 65-character ceiling. Shortened from "Best Clubs in
  Manchester: From the Haçienda to the Warehouse Project" to "Best Clubs in
  Manchester: Haçienda to Warehouse Project" (55 characters); the hero H1
  keeps the longer, more narrative phrasing, which is not subject to the same
  limit.
- **Minor, structural.** `audit-site-components.mjs` requires at least five
  FAQ items per article; the draft had four. Added a fifth, "What's the most
  famous nightclub in Manchester?", supported by real PASF signal
  (`keywords/best-clubs-in-manchester.json`'s research notes) and answerable
  honestly: historically the Haçienda, among open venues the Warehouse
  Project on the strength of its 2025 DJ Mag ranking.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Haçienda opened 21 May 1982, closed 28 June 1997, demolished 2002 | fact | Wikipedia (The Haçienda), citing contemporary press | high | Kept |
| Haçienda site now an apartment block licensing the name from Peter Hook | fact | Wikipedia | high | Kept |
| Madonna's first UK show at the Haçienda, January 1984 | fact | Wikipedia, citing The Guardian | high | Kept, reordered for chronology |
| "Nude" (1986) and "Hot" (1988) nights, house and acid house | fact | Wikipedia | high | Kept |
| UK's first ecstasy-related death at the club, 14 July 1989 | fact | Wikipedia | high | Kept |
| Warehouse Project founded 2006 by Sacha Lord and Sam Kandel, ex-Sankeys | fact | Wikipedia | high | Kept |
| Warehouse Project venue history (brewery, Store Street x2, Victoria Warehouse, Depot Mayfield since 2019) | fact | Wikipedia | high | Corrected: two venues had been silently dropped |
| Warehouse Project Rotterdam edition since 2023 | fact | Wikipedia | high | Kept; also used as the disambiguation reason to place "the warehouse project manchester" naturally |
| DJ Mag ranked Warehouse Project 4th-best club in the world, 2025 | fact | Wikipedia, citing DJ Mag's own Top 100 Clubs list | high | Kept |
| Current venue list and descriptions (White Hotel, Soup, Eastern Bloc Records, The Loft, Hidden, Stage & Radio) | fact | Resident Advisor, "The Best Clubs in Manchester in 2026" (ra.co, dated 7 January 2026) | high | Kept |
| No dress code at White Hotel, Hidden, Warehouse Project | fact | nightclub.org.uk (White Hotel); manchestertourism.org | medium | Kept |
| Haçienda bollards photo shows the club's current location | fact | none found | none | Removed the claim; caption now describes only what the image shows |
| Swing Ting recorded at Soup, 2021 | fact | video title in `selector-data.json`, matches RA's current Soup listing | high | Kept |
| LEVELZ, Boiler Room Manchester, 2016, specific venue | fact | YouTube title ("Manchester Boiler Room: LEVELZ (LVL 15)"); venue not independently confirmed | medium | Kept, described without naming an unconfirmed venue |

## 5. SEO preservation

New page, no existing URL or Search Console history to preserve. Primary
intent ("best clubs in manchester") is answered in the opening line of the
Answer block and the infoBanner summary. Targeted terms
(`keywords/best-clubs-in-manchester.json`) all appear in body copy after the
revisions in §3; verified by `audit-keywords.mjs`, which passes. SEO title
shortened to 55 characters per `audit-seo.mjs`'s 65-character ceiling (§3).

## 6. Coverage gaps

- **Minor, acknowledged, not fixed in this pass.** The "best clubs in
  Manchester now" table names six venues from Resident Advisor's guide.
  Competing pages (Manchester's Finest, DesignMyNight) typically list more,
  including some genuinely different venues (e.g. 42s, Joshua Brooks). Not
  added here because RA is the strongest dance-music-specific authority of
  the sources checked and its January 2026 list is current; a future pass
  could cross-reference a second source the way the Tokyo/Budapest/Prague
  wave did for their venue tables.
- No photograph exists (Creative Commons, public domain, or licensed) of any
  of the six currently-operating clubs. Recorded in
  `media/best-clubs-in-manchester.json`'s `known_gaps` rather than left
  implicit; the page uses the Haçienda bollards and a Northern Quarter street
  image instead of a generic stock substitute.

## 7. Cuts or merges

None beyond the repeated closer cut in §3. No other repetition or filler
found; `grep` for dash characters and the site's stock-word list
(`audit-banned-phrases.mjs`) both came back clean.

## 8. Media actions

- Haçienda bollards image: alt text corrected (§3); visible caption was
  already accurate and unchanged.
- No other media changes. Both video embeds and both images were placed
  correctly on first build: `audit-site-components.mjs`'s adjacency check
  (`mediaAdjacencyRhythm`) passed without needing a reorder.

## 9. Unresolved questions

- Expand the club table beyond RA's six with a second source? Owner's call,
  same open question Prague left for its own table.
- No German or French translation exists yet for this page.

## 10. Final acceptance checklist

- Facts: **pass**, after the bollards-caption, chronology and Warehouse
  Project venue-history corrections above.
- Editorial quality / voice: **pass**, after the humanizer pass and the
  repeated-closer cut above; `humanizer` skill run with
  `prague-clubs-draft.md` as the voice sample.
- SEO preservation: **pass** (new page; targeted terms present after §3's
  keyword-honesty pass, title within length, `audit-seo.mjs` and
  `audit-keywords.mjs` both green).
- Media: **pass**, after the alt-text correction; `audit-media.mjs` and
  `audit-site-components.mjs` green.
- Implementation readiness: **pass** — rebuilt, `node audit-all.mjs`,
  `npm run check:html`, `npm run check:links` and `npm run check:layout`
  (450 tests, including this page's own desktop/tablet/mobile layout and
  accessibility checks) all green after this pass's edits. Visual QA done at
  desktop and mobile widths in the browser pane; the Haçienda-bollards defect
  in §3 was caught this way, not by any automated check.
