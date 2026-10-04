# Best winter music festivals 2027 editorial review

Reviewed 2026-10-04 against `best-winter-music-festivals-draft.md`, `build-winter-festivals-article.mjs` and the built `best-winter-music-festivals.html`. Not independent: the same session gathered the evidence.

## 1. Verdict
Ready after revisions: no blockers, but eight of thirteen dates are listing-sourced, which the page discloses in a Source column. Owner decides whether to re-verify before pushing.

## 2. What already works
- Source column (Confirmed, Listed, Listed weak, Unconfirmed) makes date confidence visible per festival.
- Astropolis is printed with no invented day.
- Three groups by reader intent, including the quiet picks the owner asked for (Hibernation, Caprices, Shapes, CTM, Elevate, Rise, Astropolis).
- Tomorrowland Winter is covered and linked to its own guide without targeting its keyword.

## 3. Priority revisions
- Major: Tomorrowland Winter, Snow Machine, Nameless Winter, Contact Winter, Caprices, Rise and Hibernation dates rest on listings or social posts. Disclosed, but should be re-checked on each festival's own site before the next refresh.
- Minor: Snow Machine Reddit sentence cut on owner instruction 2026-10-04 (logged in defects.json); built page and all audits re-run after the cut.
- Minor: CTM has no image (only Commons photo found shows a copyrighted poster).

## 4. Fact-check ledger
| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Igloofest 14 Jan to 6 Feb 2027, Edmonton 4 to 6 March | fact | igloofest official site, read 2026-10-04 | high | keep |
| CTM 28th edition 22 to 31 Jan 2027, "Process…ing" | fact | CTM official site | high | keep |
| Elevate 4 to 7 March 2027 | fact | Elevate official site | high | keep |
| Shapes 15 to 21 March 2027 | fact | Shapes official site | high | keep |
| Snowbombing 5 to 10 April 2027 | fact | snowbombing.com | high | keep |
| Tomorrowland Winter 20 to 27 March | fact | listing | medium | labelled Listed |
| Hibernation 19 to 21 March, tenth edition | fact | promoter Instagram, Shotgun, listing; own site stale | low | labelled Listed, weak, and explained |
| Caprices winter dates, reported by RA 9 Dec 2025 | fact | RA report, listing | medium | labelled Listed |
| RA Top Ten mentions (Shapes March 2024 and 2025, CTM Jan 2024, Rise Dec 2025) | fact | Resident Advisor | medium (from research notes, not re-opened in this review) | re-open before push if the owner wants high |
| Rise "99 percent sold out" | fact | listing | low | worded as "the listing described it" |

No Wikipedia in body or sources.

## 5. SEO preservation
New page. Eleven keyword terms verbatim (audit-keywords passes); "winter festivals europe" was dropped rather than wedged in. Tomorrowland Winter named only, not targeted (see `TAKEN-KEYWORDS.md`). Registered in `festival-editions.mjs`, heading "Winter festival dates for 2027 at a glance".

## 6. Coverage gaps
Other quiet winter festivals may exist; the owner approved the list as it stands.

## 7. Cuts or merges
None needed. Contact Winter is flagged as the one pre-new-year entry and points to the New Year's Eve guide.

## 8. Media actions
Five new images (Commons, credited, local webp, two CC0) plus Caprices set embed and both owner sets. None reused from another guide. `media/best-winter-music-festivals.json` exists.

## 9. Unresolved questions
- Re-verify the seven listing-sourced dates on festival sites before pushing?
- Resolved: Reddit line cut. Seven listing-only dates committed as listed, per owner.

## 10. Final acceptance checklist
| Area | Result | Evidence |
|---|---|---|
| Greps on built text | pass | Searched `complete|full|whole|uninterrupted|an hour|in full|jungle|drum and bass|Wikipedia|not .* but|matters|the point|crucial|vibrant|pivotal|landscape` and em/en dashes: zero hits. `breaks` only in site-generated Bandcamp and Read next blocks |
| Dashes, triads | pass | none found; the three-item lists (Hibernation, Caprices, Shapes) are three real festivals |
| No breaks/dnb angle | pass | no aside, no dnb or jungle link |
| Humanizer | ran | Changed: "winter rave" and "snow machine festival" sentences rewritten to read naturally instead of keyword-first; "winter festivals europe" dropped rather than wedged. Three checked unchanged: "A winter festival is a different trip from a summer one." / "Treat the dates with care." / "This page is updated once Astropolis announces them." |
| Facts | pass with Major | ledger above |
| Media | pass | audit-media, audit-og-cards in `node audit-all.mjs` |
| Implementation | pass | `check:html`, `audit-all`, `check:layout` (766 passed), `check:links` after last edit |
