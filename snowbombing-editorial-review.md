# Snowbombing 2027 editorial review

Reviewed 2026-10-04 against `snowbombing-draft.md`, `build-snowbombing-article.mjs` and the built `snowbombing-festival.html`. Not independent: the same session gathered the evidence (Stage 6 not run by a second party).

## 1. Verdict
Ready after revisions: none blocking. Two Minor items below, both left as is pending owner view.

## 2. What already works
- Direct answer in the banner: dates, package-only sale, price from, deposit, age, acts.
- Stale 2026 wording on the official FAQ is named, not silently trusted.
- Every price and rule carries its read date (4 October 2026).
- Founding-year conflict on the festival's own site is stated, not resolved by guessing.

## 3. Priority revisions
None Blocker or Major.
- Minor: "The festival is not a single site." is a mild not-X contrast. It corrects a real assumption (one ticketed site), so kept.
- Minor: Rompa's Reggae Shack "books dub, reggae, jungle and bass" is the festival's own venue description, a fact about a room, not a genre aside. Kept.

## 4. Fact-check ledger
| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Core dates Mon 5 to Sat 10 April 2027, arrive Sun 4, leave Sun 11 | fact | snowbombing.com/info, read 2026-10-04 | high | keep |
| Weeklong packages only, min 5 nights, no day wristbands | fact | snowbombing.com/info | high | keep |
| From £399, £249 wristband included, £50 deposit, instalments by 1 March | fact | snowbombing.com/book | high (dated) | keep, dated |
| Sporthotel Strass £1,009, Strass Apartments £1,139, Edelweiss sold out | fact | snowbombing.com/book | high (dated) | keep, dated |
| 18+, photo ID, refunds only on cancellation, transfers 28 days and £30 | fact | snowbombing.com/info | high | keep |
| Archive 2000 to 2026 with no 2021, so 2027 would be 27th; FAQ says 1999 | fact | previous-lineups page vs FAQ | medium | kept as stated conflict |
| 2027 acts list | fact | snowbombing.com/experience/lineup | medium (changes) | labelled snapshot |
| Fatboy Slim set uploaded by DJ Mag | fact | catalogue `ZUPjBgE_gJg`, oEmbed 2026-10-04 | high | keep |

No Wikipedia in body or sources.

## 5. SEO preservation
New page. Terms `snowbombing` and `snowbombing 2027` appear verbatim (audit-keywords passes). Title 15 to 65 and description 70 to 165 pass audit-seo. FAQ text matches FAQPage data (built from the same items).

## 6. Coverage gaps
None supported by intent. Excluded on purpose: Tomorrowland Winter and other festivals (winter guide).

## 7. Cuts or merges
Unsupported claims in the first draft were cut before this review. FAQ "What is Snowbombing?" repeats the section opening; acceptable for FAQ.

## 8. Media actions
Four images, all new to this page, Commons, CC BY-SA 4.0 or CC BY 3.0, local webp, credited in captions. Fatboy Slim festival set plus five-act collection; both owner sets present via `ownSetListening`. `media/snowbombing-festival.json` exists.

## 9. Unresolved questions
- Re-read lineup and prices after each announcement (builder header says so; registered with end 2027-04-10).

## 10. Final acceptance checklist
| Area | Result | Evidence |
|---|---|---|
| Greps on built text | pass | Searched `complete|full|whole|uninterrupted|an hour|in full|Wikipedia|not .* but|matters|the point|crucial|vibrant|pivotal|landscape|dive into` and em/en dashes: zero hits. `jungle` 1 hit (Rompa's venue description, kept). `drum and bass`/`breaks` hits are only the site-generated Read next cards and the Bandcamp block |
| Dashes, triads | pass | no dashes found; lists of acts and venues are lists of fact |
| No breaks/dnb angle | pass | no aside, no link to jungle or dnb guide in body |
| Humanizer | ran | Changed: "a ski holiday where the music is included" to "a week in the mountains with the music built in"; unsupported "legendary" and atmosphere claims cut from first draft; "Bicep... huge" style praise removed. Three checked sentences left unchanged: "You cannot buy a ticket on its own." / "A line-up announced in stages will change before April, so treat this list as a snapshot." / "Lessons and equipment hire are sold separately." |
| Facts | pass | ledger above, source URLs in page sources block |
| Media | pass | audit-media, audit-og-cards via `node audit-all.mjs` |
| Implementation | pass | `npm run check:html`, `node audit-all.mjs`, `npm run check:layout` (766 passed), `npm run check:links` all passed after last edit |
