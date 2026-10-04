# Time Warp 2027 editorial review

Reviewed 2026-10-04 against `time-warp-draft.md`, `build-time-warp-article.mjs` and the built `time-warp-festival.html`. Not independent: the same session gathered the evidence (Stage 6 not run by a second party).

## 1. Verdict
Ready after revisions: none blocking. Two Minor items below, left as is pending owner view.

## 2. What already works
- Direct answer in the banner: next Mannheim date, venue, hours, pass prices, age, what is not yet announced.
- Every date, price and rule carries its read date (4 October 2026) and is marked confirmed.
- No artist is named for Mannheim 2027 because the official page names none. The page says so and does not borrow past line-ups.
- The Time Warp US sets are labelled as filmed at The Lab NYC, not at the festival.

## 3. Priority revisions
None Blocker or Major.
- Minor: the ticket shop does not list what each pass includes, so the page says to check the shop. A gap in the source, stated.
- Minor: the second owner mix sits in the line-up section, not the listening section, to give that section media (audit-media). It is a set to hear, so it fits there.

## 4. Fact-check ledger
| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Mannheim Sat 3 April 2027, 19:00 to 14:00, Maimarkthalle, 18+ | fact | time-warp.de/germany/mannheim, read 2026-10-04 | high | keep |
| "Only German edition in 2027" | fact | same page | high | keep, attributed |
| Blue 79, Silver 169, Gold 229 EUR, fees 6.50, 15.00, 20.00 included | fact | tickets.time-warp.de, read 2026-10-04 | high (dated) | keep, dated |
| No refunds, mobile ticket, name unchecked at entry, VRN transport needs matching name | fact | ticket FAQ | high | keep |
| First edition 26 Nov 1994, Walzmühle, Ludwigshafen; Maimarkthalle for every Mannheim edition 2000 to 2026 | fact | time-warp.de/history | high | keep |
| 2024 "30 Years, 30 Hours"; 2025 and 2026 "5 Floors, 19 Hours"; 2026 Mannheim 21 March | fact | history | high | keep |
| Time Warp Autumn 7 and 8 Nov 2025 | fact | history | high | keep |
| Miami 25 Apr, Brasil 1 and 2 May, Colombia 10 Oct, Mexico 20 and 21 Nov, New York 20 and 21 Nov, Los Angeles 27 and 28 Nov 2026 | fact | official editions pages | high | keep |
| New York years 2014, 2015, 2019, 2021 to 2025 | fact | history | high | keep (replaced an unsupported "most years") |
| Past editions: Argentina 2014 to 2016, Holland 2008 to 2014, Madrid Oct 2024 and Oct 2025 | fact | history | high | keep |
| Loco Dice "Time Warp 2018" and three Time Warp US sets | fact | catalogue, oEmbed 2026-10-04 | high | keep |
| Images: crowd 2006 (CC BY-SA 2.5), Kruse 2016 (CC BY-SA 4.0), Neo Química Arena (CC0) | fact | Commons file pages | high | keep |

Removed from the first draft as unsupported: "Brazil longest-running", a sound system per floor, "one-off editions", and festival framing of the NYC studio sets. No Wikipedia in body or sources.

## 5. SEO preservation
New page. Terms such as `time warp 2027`, `time warp festival`, `time warp mannheim` and `time warp mannheim 2027` appear verbatim (audit-keywords passes after the Mannheim terms were added). Excluded on purpose: "time warp", "time warp song", "time warp rocky horror" (different intent). Title 51 characters, description 110 characters. FAQ text matches the FAQPage data.

## 6. Coverage gaps
Line-up and per-pass contents are unannounced or unlisted at source. Both are stated and the page is to be refreshed when they appear (registered in `festival-editions.mjs`, ends 2027-04-04).

## 7. Cuts or merges
Unsupported claims cut before this review (see section 4). FAQ answers repeat section openings, which is acceptable for FAQ.

## 8. Media actions
Three images, all new to this page, Commons, openly licensed, local webp (1200 and 320), credited in captions. Loco Dice festival set, three NYC sets in a collection, both owner sets via `ownSetListening`. `media/time-warp-festival.json` exists with no required records (single-festival guide).

## 9. Unresolved questions
- Re-read the Mannheim line-up and pass contents after each announcement.
- A 2027 date for the editions abroad is not yet published.

## 10. Final acceptance checklist
| Area | Result | Evidence |
|---|---|---|
| Greps on draft | pass | Searched `complete|full|whole|uninterrupted|crucial|vibrant|pivotal|landscape|dive into|legendary|iconic` and em/en dashes: zero hits. `not .* but`, `matters`, `the point`, `wikipedia`, `jungle`, `drum and bass`, `breakbeat`: no hits outside site-generated Read next cards and the Bandcamp block |
| Dashes, triads | pass | no dashes; the three pass prices and the list of rules are lists of fact |
| No breaks/dnb angle | pass | no aside or link to jungle, dnb or breaks guides in body |
| Humanizer | ran | Changed: "Brazil longest-running" claim removed; "most years" replaced with the listed years; a "Time Warp Mannheim" mention added in plain wording for the audited term. Sentences left unchanged on purpose: "No artist was announced for Mannheim 2027 on 4 October 2026." / "They were filmed in a New York studio, not at the festival." (corrects a real misreading of the video titles) / "The shop page does not list what each pass includes, so check the shop before you choose." |
| Facts | pass | ledger above; source URLs in the page sources block |
| Media | pass | `node audit-all.mjs` including audit-media and audit-og-cards |
| Implementation | pass | `npm run check:html`, `node audit-all.mjs`, `npm run check:layout` (770 passed), `npm run check:links` all exit 0 after the last edit |
