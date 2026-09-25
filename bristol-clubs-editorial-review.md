# Editorial review: best-clubs-in-bristol.html

Run 2026-09-25, before the build was reported as finished, per `ARTICLE-PRODUCTION-WORKFLOW.md` §6. This is the first city-club guide on this site to get the humanizer/fact-check/SEO pass before a "done" report rather than after, following the gap the Prague review closed retroactively.

## 1. Verdict

**Ready.** No remaining blocker. Two coverage gaps (below) are real limitations, not defects, left to the owner's call.

## 2. What already works

- Every venue named carries a specific, checkable fact (opening year, capacity, a DJ Mag ranking, a lease dispute, named bookings), not a generic descriptor.
- Motion's 2025 closure and relocation is a real, dated, multi-source news story, not colour: Resident Advisor, Mixmag, BristolWorld and The Tab all independently confirm the lease non-renewal, the #KEEPMOTIONMOVING campaign, and the move to Victoria Terrace.
- Lakota's drum and bass credentials rest on named, checkable bookings (Metalheadz Blue Note Sessions, Jungle Cakes, Eatbrain, Neuroheadz, Andy C and Tonn Piper on NYE 2021), not an assertion that Bristol "is" a drum and bass city.
- The two Boiler Room video embeds (Hodge and Shanti Celeste, both Bristol-specific 2015 broadcasts) were found by web research first, cross-checked against the Selector catalogue by artist name, then confirmed against each video's own YouTube oEmbed title, the same method used for the Prague guide's embeds. Neither is claimed to have happened at a named club, because neither source says so.
- The two-scenes framing (Motion/Lakota's bass-and-warehouse scene vs. Thekla's gig-first boat) mirrors the Prague guide's own structure (tourist mainstream vs. built-for-house-and-techno underground) without copying its content, and the comparison is genuine, not decorative.

## 3. Priority revisions

**Applied in this pass:**

- **Major, factual — Motion's capacity after relocation.** The original draft's FAQ answer risked implying the 4,000-capacity figure still applied post-move. Checked: no source read (RA, Mixmag, BristolWorld, motion-bristol.com's own site) states a capacity for the new Victoria Terrace building. The FAQ now explicitly says press coverage has not confirmed a new-building capacity, rather than letting the old figure stand unqualified.
- **Major, voice — a not-X-but-Y construction in the opening paragraph.** "not a stag-do circuit, but a city that gave drum and bass some of its early rooms" staged a contrast the rest of the paragraph did not need. Rewritten as a direct statement (humanizer pass, 2026-09-25).
- **Minor, grammar — a comma splice in the Motion section.** "it was the venue that Bristol's biggest touring DJs, and its own drum and bass scene ... treated as home ground" read as a broken relative clause. Removed the stray comma after "DJs" (humanizer pass, 2026-09-25).
- **Minor — Lakota's opening year.** Two independent sources disagree (music.co.uk: "running club nights since 1990"; The Tab: "opening in 1992"). Neither is a primary source (no Wikipedia article exists for the venue) and neither is clearly more authoritative, so the draft says "since the early 1990s" rather than picking one figure. Recorded in the fact-check ledger below rather than silently resolved.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Motion opened 2006, former skatepark, Avon Street | fact | Resident Advisor (venue/event pages) | high | Kept |
| Motion: 4,000 capacity, five rooms, DJ Mag 11th best club in the world / UK's best large club | fact | Resident Advisor (RA's own venue description, repeated across many event pages) | medium-high | Kept; no specific year given for the DJ Mag ranking in any source read, so the draft does not attach one |
| Motion's Avon Street lease not renewed, announced Nov 2024, closure due July 2025 | fact | Resident Advisor, Mixmag, BristolWorld, The Tab, Daily Express (independently converging, Nov 2024-May 2025) | high | Kept |
| #KEEPMOTIONMOVING crowdfunder, target roughly £250,000 | fact | FIXR Blog | medium | Kept, single source |
| Motion closed at Avon Street July 2025, reopened at Unit 2, Victoria Terrace | fact | motion-bristol.com's own events archive (a booking page naming the new address) | high | Kept |
| Grade II-listed Avon Street building | fact | Daily Express | medium | Kept, single source, but a specific, checkable claim |
| Lakota: 6 Upper York Street, four dance floors, "home of the underground" | fact / tagline | Resident Advisor (RA's own venue description) | high | Kept, tagline attributed as RA's own phrase |
| Lakota opening year | fact | music.co.uk ("since 1990") vs. The Tab ("opening in 1992") | low | Qualified: "since the early 1990s," conflict not resolved |
| Lakota: Metalheadz Blue Note Sessions, Jungle Cakes, Eatbrain, Neuroheadz nights | fact | Resident Advisor (individual event listings) | medium-high | Kept |
| Andy C and Tonn Piper, Lakota NYE 2021 | fact | Bristol24/7 (Dec 2021) | high | Kept |
| Roni Size and Reprazent, Bristol-based, Mercury Prize win, 1990s | fact | already fact-checked and sourced on this site's own `drum-and-bass-guide.html` | high | Kept, consistent with the existing guide, not re-derived from memory |
| Thekla: built Germany 1959, arrived Bristol 1983, opened as The Old Profanity Showboat 1 May 1984 | fact | Thekla's own Instagram account; AgilityPR/DHP Family press release | high | Kept |
| Thekla run by DHP Family, also behind Nottingham's Rock City | fact | AgilityPR/DHP Family press release | medium | Kept |
| Hodge, Boiler Room Bristol, filmed 6 August 2015 | fact | Apple Music DJ-mix listing; confirmed against `selector-data.json` and the video's own YouTube oEmbed title | high | Kept |
| Shanti Celeste, Boiler Room Bristol, filmed 28 September 2015, signed to Julio Bashmore's Broadwalk label | fact | Apple Music DJ-mix listing; Juno Daily (Oct 2015); confirmed against `selector-data.json` and the video's own YouTube oEmbed title | high | Kept |
| Neither Boiler Room Bristol set ties to a named venue | absence of a claim | checked Apple Music listing, YouTube title/description via oEmbed, and the web search results themselves | medium | Draft explicitly does not attach either set to Lakota, Motion or any other room |

Sources are Resident Advisor, Mixmag, Bristol24/7, BristolWorld, The Tab, Daily Express, the FIXR Blog, Apple Music and the venues' own channels: specialist and local-press tier, not primary interviews. That is the right tier for a current-affairs venue story (a 2025 lease dispute, a relocation); it would not be enough for a contested origin claim, and the one place this guide has a genuinely unresolved origin question (Lakota's opening year) is flagged rather than picked.

## 5. SEO preservation

New page, no existing URL or Search Console history to preserve. Primary intent ("best clubs in bristol") is answered in the opening line of the Answer block and the infoBanner summary. The one targeted term (`keywords/bristol-clubs.json`) appears in body copy; verified by `audit-keywords.mjs`, which passes. Meta description was 172 characters on first draft (over the 165-character ceiling `audit-seo.mjs` enforces) and was shortened to 160 characters in this pass without dropping either headline fact (the 2025 move, Lakota's history, Thekla's age).

## 6. Coverage gaps

- **Major, acknowledged, not fixed in this pass.** The "best clubs in Bristol now" table names three venues: Motion, Lakota, Thekla. SWX, Marble Factory, Basement 45 and The Fleece are named in prose (and in one FAQ answer) but were not researched to the same depth and do not have their own table row, image or deep-dive section. Competing listicles (Skiddle, StagWeb) typically run five to eight. This is the same shape of gap the Prague review flagged for its own four-venue table, and is raised to the owner rather than padded with unverified detail.
- **Major, acknowledged.** No licensed photograph exists for Motion, the guide's most-discussed venue, at either its old or new address. The Motion section and its FAQ answers run on text alone. Checked Wikimedia Commons under several search terms; nothing found.
- **Minor.** Motion's post-relocation capacity is not confirmed by any source read. The FAQ states this explicitly rather than reusing the old Avon Street figure.
- **Minor.** Lakota's exact opening year (1990 vs. 1992) is unresolved between two secondary sources; no primary source (venue history page, Wikipedia) was found to settle it.

## 7. Cuts or merges

The not-X-but-Y opening and the comma splice in the Motion section (§3) are the only prose changes made in this pass. No repetition, filler or AI-vocabulary tells were found beyond those two; the draft does not use em dashes, decorative bold or stock phrases from the humanizer skill's watch list.

## 8. Media actions

None beyond what's recorded in `media/bristol-clubs.json` at the time of writing (the two video embeds' sourcing and the "no venue named" caveat were written into the media file at the same time as the draft, not added retroactively in this review).

## 9. Unresolved questions

- Expand the club table beyond three (see §6)? Needs the owner's call, and real research (SWX, Marble Factory, Basement 45, The Fleece) if yes, not names added from a listing without reading a primary source on each.
- Motion's post-relocation capacity, once press coverage catches up.
- Lakota's exact opening year, if a primary source ever surfaces.
- No German or French translation exists yet for this page.

## 10. Final acceptance checklist

- Facts: **pass**, after the capacity-qualification fix in §3.
- Editorial quality / voice: **pass**, after the humanizer-pass rewrites in §3.
- SEO preservation: **pass** (new page; targeted term present, description within length, audit green).
- Media: **pass**, both embeds sourced and verified; two real coverage gaps (Motion's photo, the fourth-and-beyond venues) acknowledged rather than hidden.
- Implementation readiness: **pass** — rebuilt, `node audit-all.mjs`, `npm run check:html`, `npm run check:links` and `npm run check:layout` (458 tests) all green after this pass's edits.

This review ran before the build was reported as finished, per the gate `ARTICLE-PRODUCTION-WORKFLOW.md` §6 sets, rather than being added afterward.
