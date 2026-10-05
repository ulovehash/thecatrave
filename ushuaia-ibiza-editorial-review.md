# Ushuaia Ibiza editorial review

Reviewed 2026-10-05 against `ushuaia-ibiza-draft.md`, `build-ushuaia-ibiza-article.mjs` and the built `ushuaia-ibiza.html`. Not independent: the same session gathered the evidence and wrote the page (no second-party review run).

## 1. Verdict

Publishable after the owner's read. Every dated or numeric claim traces to the official Ushuaia site (theushuaiaexperience.com), Clubtickets or Ibiza Spotlight, each opened on 2026-10-05. Where sources are silent or disagree (club-stated capacity, ANTS closing-party start time, DJ count in the lineup article, table minimum spend, 2027 dates), the page says so.

## 2. What works

- Head terms (ushuaia ibiza, ushuaia) sit in the title, answer block, hero and H2s; every keyword in `keywords/ushuaia-ibiza.json` appears literally (audit-keywords passes).
- Dress code and entry rules come from the club's own FAQ, with Ibiza Spotlight's looser wording set beside it.
- 2027 is stated as unpublished, not guessed.
- Three new Wikimedia Commons images, none reused from another guide.

## 3. Priority revisions

1. Sets block: none of the three sets was filmed at Ushuaia. The catalogue (`selector-data.json`) carries no set titled as filmed there, and oEmbed shows none. The block is labelled "Sets by 2026 Ushuaia residents" and says so. Owner to confirm that a block of residents' sets filmed elsewhere is acceptable, or drop it.
2. The ANTS 10 October start time conflicts between the calendar (from 12:00), the news page (5pm to 11pm) and the FAQ (Saturday from 3pm). All three are reported, none chosen.
3. Capacity: 7,000 is Ibiza Spotlight (2024); the 2011 review said 5,000; the club states none.
4. The Ibiza clubs, Pacha and best clubs in Europe guides do not link back to this page. Adding links is an edit to published copy and needs shown wording first (proposed in the hand-off report).
5. Date-sensitive: re-read the official calendar after the 10 October closing party and in spring 2027.

## 4. Fact-check ledger (all read 2026-10-05)

| Claim | Source |
|---|---|
| Closing parties 5 Oct (Guetta, Afrojack, Matt Sassari, Paul Reynolds) and 10 Oct (ANTS), 2026 residencies by weekday, elrow 2 Sept, HUGEL 20 Sept, calendar start 12:00 | https://theushuaiaexperience.com/club/en (calendar and events) |
| ANTS closing-party lineup (12 Aug 2026), doors 5pm to 11pm, opening party 26 April 2026 lineup and combined ticket (26 Mar 2026), September guide (2 Sept 2026) | https://theushuaiaexperience.com/club/en (news) |
| 18+, original photo ID, dress code, bags, re-entry, photos, drink pack 5 for €99.99, cancellation, hotel guests free, table terms, parking, taxi rank, accessibility, official ticketing platform | https://theushuaiaexperience.com/club/en/faq |
| VIP table request form, vip@ushuaiaibiza.com, +34 971 12 94 17, no prices listed | official VIP page |
| Address Ctra. Platja d'en Bossa, S/N, 07817 Sant Josep de sa Talaia | official site footer and FAQ |
| Tickets €30 to €130, opening party from €70, VIP from €500, Stage VIP from €150, bar prices, Line 14 and 3B, taxi €15 and €35, opened 2011, The Cloud | https://www.clubtickets.com/clubbing/ushuaia-ibiza |
| Capacity 7,000, Yann Pissenem and Abel Matutes, The Night League, opposite Hi Ibiza, €50 to over €100, taxi €16 and €32, 2019 24-hour opening, headliner names | https://www.ibiza-spotlight.com/magazine/2024/08/ibiza-virgins-guide-ushuaia (15 Aug 2024) |
| Capacity 5,000 in the 2011 opening review | Ibiza Spotlight 2011 review, read 2026-10-05 |
| Search volumes (bucketed) | Google Ads Keyword Planner, US, 2026-10-05 |
| Images: dance-floor-2023 (Saaremees, CC BY-SA 4.0), tomorrowland-2022 (Roberto Castano for Ushuaia Ibiza, CC BY-SA 4.0), ushuaia-tower-2015 (Phil Guest, CC BY-SA 2.0) | Wikimedia Commons file pages, downloaded locally |

## 5. Greps run on the draft

- Dashes (em or en): 0 hits.
- "full" or "whole" applied to a set: 0 hits.
- breakbeat, break, jungle, drum and bass: 0 hits.
- Markdown links inside FAQ answers: 0 hits.
- "not X but Y" constructions: 0 hits.
- Production teaching, sample packs, downloads: none.

## 6. Humanizer pass, three examples

1. Before: "People who search for Ushuaia Ibiza want one of a few things. Some want to know what a ticket costs. Others want the dress code, the closing-party lineup, or how to get there from Ibiza Town."
   After: "Most people searching for Ushuaia Ibiza want a ticket price, the dress code, the closing-party lineup or a way to get there from Ibiza Town."
2. Before: "The Ushuaia Ibiza lineup changes by night and is on the events calendar of the official site."
   After: "It changes by night and sits on the official events calendar."
3. Before: "Its other dates are in the residency table further down."
   After: "The residency table below has the other dates."

## 7. Checks

`node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs` (build + 22 audits), `npm run check:layout` (810 passed) and `npm run check:links` all pass. A second build is byte-identical. `git diff --check` is clean.
