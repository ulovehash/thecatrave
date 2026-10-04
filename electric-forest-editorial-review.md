# Electric Forest 2027 editorial review

Reviewed 2026-10-04 against `electric-forest-draft.md`, `build-electric-forest-article.mjs` and the built `electric-forest-festival.html`. Not independent: the same session gathered the evidence (Stage 6 not run by a second party).

## 1. Verdict
Ready after revisions: none blocking. Four Minor items below, left as is pending owner view.

## 2. What already works
- Direct answer in the banner: where, what the official site showed on 4 October 2026, what is known about passes and camping, and what is not announced.
- 2027 dates, tickets, lineup and prices are stated as unannounced. Aggregator guesses at late June 2027 are mentioned as guesses and not repeated.
- Every figure carries its read date (4 October 2026). The one price in circulation, about $600 for 2026 general admission, is attributed to a local newspaper and labelled unconfirmed.
- Lineup names appear only for the 2026 announcement, attributed to White Lake Mirror, and the page says that is not a record of who played.

## 3. Priority revisions
None Blocker or Major.
- Minor: `selector-data.json` holds none of 60 Electric Forest set videos found by YouTube search, so the listening band (required by audit-site-components) uses three artist-channel uploads outside the catalogue: Levity (920K views), Whethan (460K) and Of The Trees (404K), oEmbed 200 on 2026-10-04. Owner to confirm or swap.
- Minor: the Bandcamp block shows the two standard tracks, one of which has "Breaks" in its title. The copy carries no genre line.
- Minor: the keyword map listed `michigan` (1K to 10K). It is not claimed, because a bare generic term would block the TAKEN-KEYWORDS list for no gain. `rothbury` is claimed.
- Minor: Tripolee and The Observatory (10 to 100 each) are named in the stage list but have no H3, and The Hangar is left out because the official experiences page does not list it.

## 4. Fact-check ledger
All official pages are on electricforestfestival.com, opened in the Browser pane on 2026-10-04. Some official pages (pass types) were served from cache.
| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| 2026 edition 25 to 28 June, banner "June 25-28, 2026" | fact | official home | high | keep |
| Home and /tickets show only a thank you message; no 2027 date, no ticket page | fact | official home, /tickets | high | keep, dated |
| 2026 passes sold out | fact | /pass-types (cached) | medium | keep, attributed and dated |
| GA pass = 4 day wristband plus GA Campgrounds; car or RV pass separate, one per vehicle or campsite | fact | /pass-types | high | keep |
| Passes on AXS, group camping on FEVO, hotel packages on Easol, fees included in 2026 add on prices | fact | /pass-types | high | keep |
| Add ons: Uplift Lounge $150; Wednesday arrival $50 per campsite from 12:01 AM ET 24 June; Camp Kits from $279 | fact | /pass-types | high | keep |
| Shuttles from Grand Rapids, Detroit, Ann Arbor, Chicago, Columbus, New York City; two new routes in 2026; early arrival for riders | fact | /pass-types | high | keep |
| Arrival times by camping type; GA closes 4 PM ET Monday; hotel check in 3 PM | fact | official site | high | keep |
| South Toll Exit 136 (Winston Rd), North Toll Exit 140 (Stony Lake Rd); Will Call at Winston Speedway Box Office; satellite parking walk in; box office cashless | fact | /festival-info | high | keep |
| Camping shuttles (Wal-Mart/WESCO, Blueberry, waterpark) and hotel shuttles at 12, 2, 4, 5 AM | fact | official site | high | keep |
| All ages; 2 and under free; 3 and up need a wristband; 21+ for alcohol | fact | official FAQ | high | keep |
| Alcohol in campgrounds only, 1 case of beer and 1 box of wine per person; water bottle policy; prohibited items; totem 7 ft | fact | /festival-info | high | keep |
| Prep guide by the Sherwood Shepherds: mid 50s to 90+, rain each year, kit list | fact | /forest-prep-guide | high | keep |
| Stages list; Sherwood Forest holds The Observatory, Honeycomb, Grand Artique; The Brainery; Silent Disco; EF Radio; 5k on 27 June | fact | /experiences | high | keep |
| Double JJ: Jack and Jill Ranch 1937, Double JJ mid 1970s, waterpark, golf, trail rides, cabins, biggest western style dude ranch east of the Mississippi | fact | /double-jj-resort | high | keep, attributed |
| Posters 2011 to 2019 and 2022 to 2025 | fact | /a-look-back | high | keep |
| 2026 lineup names | fact | whitelakemirror.com, Dec 2025 | high | keep, attributed, "announcement not record" |
| About 100 artists; tickets on sale 12 Dec 2025 at noon; GA $600 | fact | oceanacountypress.com, 8 Dec 2025 | medium | keep; price labelled newspaper figure. Its "June 23 to 26" dates conflict with the official site and are not used |
| 2008 and 2009 Rothbury Music Festival; none in 2010; renamed 2011; first sell out 2014; two weekends in 2017 then one | fact | tvovermind.com, 1 July 2019 | medium | keep, attributed |
| Not held 2020 and 2021 (COVID), back 2022 | fact | oceanacountypress.com; official posters skip those years | medium | keep |
| Permit through summer 2035 | fact | theticket953.com, 22 Jan 2024 | medium | keep, attributed |
| Images: entrance arch and hammocks, both 1 July 2018, FifthLegend, CC BY 2.0 | fact | Commons file pages | high | keep |

Left out as unsourced: 2027 dates and prices, the Hangar stage, any attendance figure, the "14th edition" count (the news item and the poster list do not reconcile), aggregator date guesses. No Wikipedia in body or sources.

## 5. SEO preservation
New page. `electric forest 2027`, `electric forest dates`, `electric forest festival`, `electric forest tickets`, `electric forest 2026`, `electric forest lineup`, `rothbury` and the camping, shuttle, hotel, packing list, age limit, rules, history and weekend terms appear verbatim (audit-keywords checks all 19). The bare head term `electric forest` (100K to 1M) stays with best-edm-festivals-usa and is not claimed or used as a heading. Title 54 characters, description 125 characters. FAQ text matches the FAQPage data. The `electric forest second weekend` and `electric forest weekend 2` terms are my phrasing of the map's "second weekend / weekend 2" and were not separately measured as those strings.

## 6. Coverage gaps
2027 dates, tickets, prices and lineup are unannounced at source. The page says so and is registered in `festival-editions.mjs` with `ends: null`, so every build reminds. A set recorded at Electric Forest is not in the catalogue.

Overlap with the US EDM festivals guide (`best-edm-festivals-usa`): that guide has a short Electric Forest entry (Double JJ Resort, began 2008 as the Rothbury Music Festival and renamed in 2011, 2026 on 25 to 28 June, no 2027 dates shown). This page repeats the venue, the 2008 start and the 2026 dates by necessity and adds tickets, camping, shuttles, rules and packing. It links to the US guide for the comparison, and the US guide is not edited. The US guide's 2025 attendance estimate (40,000 to 50,000) is not repeated here because this session did not source it.

## 7. Cuts or merges
Cut before this review: "psychedelic electronic project" and "jam band" labels for named acts (from memory, not sourced); "the festival has held its summer edition in late June in recent years"; "Good Life is the upgraded tier"; "packages are tied to the festival's own booking". FAQ answers repeat section openings, which is acceptable for FAQ.

## 8. Media actions
Two images, new to this page, Commons, CC BY 2.0, local webp (1200 and 320), credited in captions. The US guide's own Electric Forest image shows a different scene and is not reused. Three tables (add ons, arrival times, 2027 status) satisfy audit-media. Three artist-channel sets in a video collection (see section 3). `media/electric-forest-festival.json` exists with no required records (single-festival guide).

## 9. Unresolved questions
- Re-read dates, ticket page, prices and lineup when the 2027 announcement appears, then set `ends` in `festival-editions.mjs`.
- Whether to add short Tripolee and The Observatory H3s once the official site gives them more than a name.
- Whether the owner wants a festival set added if one is found outside the catalogue.

## 10. Final acceptance checklist
| Area | Result | Evidence |
|---|---|---|
| Greps on built page text | pass | `complete`, `whole`, `uninterrupted`, `an hour`, `jungle`, `drum and bass`, `Wikipedia`, `not .* but`, `matters`, `the point`, `crucial|vibrant|pivotal|landscape|dive into|legendary|iconic`, em and en dashes: zero hits. `full` and `in full`: one hit each, "in full sun" (weather, not a DJ set). `breaks`: one hit, the Bandcamp track title "Protect Ya Breaks" |
| Dashes, triads | pass | no dashes; lists are lists of fact (pass types, rules, kit) |
| No breaks/dnb angle | pass | no aside, link or genre line in body or Bandcamp copy |
| Humanizer | ran | Changed: "that mix is the festival's identity" cut as an empty claim; "Camping is the default way to attend" replaced with "Camping is built into the pass"; "For a sense of what the stages sound like, the sets worth hearing are..." replaced with "To hear something you do not know yet, the Selector plays a recorded DJ set at random." Sentences left unchanged on purpose: "Listing sites guess at late June 2027, but a guess is not a date, so this page waits for the festival." / "That is the announcement, not a record of who played." / "It is a place inside the festival, not the English woodland of the same name." |
| Facts | pass | ledger above; source URLs in the page sources block |
| Media | pass | audit-media (see run below) |
| Implementation | pass | `node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs` (exit 0), `npm run check:layout` (782 passed), `npm run check:links` (671 links) all pass after the last edit. Earlier runs failed audit-keywords, audit-media and audit-site-components; fixed by adding the second-weekend phrase, three tables and a listening collection |
