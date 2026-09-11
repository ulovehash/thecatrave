# Clubs in London: editorial review

Protocol: `ARTICLE-EDITORIAL-REVIEW.md`, run 2026-09-11 over `london-clubs-draft.md`
before the final build. The reviewer is also the author. The independent passes
on this topic were stage 6 (validation, a separate agent) and the automated
audits; this review is one pass by the author and should be read that way.

## 1. Verdict

**Ready after revisions.** Nine revisions were applied before the final build
(section 4). No blocker remains.

## 2. What already works

- The criterion is stated in the first hundred words, and the bottle-service
  London that shares the SERP gets one paragraph of prose, as the stage 6 ruling
  required. It is not a list of names.
- The spine runs through rooms, not genres: Four Aces → Labrynth, Heaven →
  Spectrum → Rage → Goldie → Metalheadz → the Blue Note, garage's second room →
  the Sunday Scene → Scala, Plastic People → FWD>>. Each link has a source.
- Disagreements are named, not smoothed: Trip's date, and ICMP's dates for
  The End and Printworks, which the page does not use.
- Black British and Caribbean contributions sit at the start of the story
  (the Four Aces, founded by Sir Collins and Newton Dunbar) rather than in an aside.
- Every image is evidence: a building, a date, a loss.

## 3. Priority revisions

None open. All were applied; see the ledger.

## 4. Fact-check ledger

| Claim in the first draft | Type | Source | Action |
|---|---|---|---|
| fabric "is on every one of the four lists... a claim no other club in London can make" | fact | the canon: The Cause and FOLD are also 4 of 4 | **corrected**: "only The Cause and FOLD can say the same" |
| FAQ: most popular by lists is "fabric" | fact | same | **corrected**: no single winner; all three named |
| "FOLD is the newest club on every list" | fact | Time Out lists Palais (2026) and The Divine (2024); The Cause also opened in 2018 | **removed** |
| the Astoria is where "London's acid house went legal" | overclaim | Nicky Holloway: "one of the first legal acid house clubs" | **qualified** |
| "within a year each [of the four] had a London night" | fact | no source gives Johnny Walker a night | **corrected** to three |
| jungle "had turned harder and faster" | fact | UK garage: "a harsher, more techstep influenced sound" | **corrected** to "harsher" |
| "Metalheadz still puts its DJs in front of a London crowd" beside a 2014 film | tense | the video is 2014 | **dated** |
| "Keith Reilly still plays" | tense | the Beatport video is 2024 | **dated** |
| Trip opened end of May 1988 | fact | Nicky Holloway; London Astoria (1988); Acid house (June 1988); Shoom says June 1987 | kept, disagreement named in the prose |
| The Four Aces "was the first club to open in Hackney" | fact | Wikipedia, The Four Aces Club, single source | kept; medium confidence |
| The Blue Note was in Hoxton and founded by Eddie Piller | fact | ICMP only; Metalheadz confirms the Blue Note, not the location | kept, attributed to ICMP in the prose |
| Heaven's Land of Oz as "the birth of ambient house" | interpretation | Wikipedia, Heaven | kept, attributed to the article in the prose |
| Drumsheds "set up after The Cause had settled nearby" | fact | Wikipedia, Drumsheds | kept |
| Corsica Studios closed 28 March 2026 | fact | Wikipedia (closing announced Sept 2025) + RA (last night) | kept |

## 5. SEO preservation

New page; no inventory. `audit-keywords.mjs` confirms all nine terms in
`keywords/london-clubs.json` are present. Title, H1 and meta express the same
intent without repeating each other. The FAQ is three verbatim PAA questions
and two from the questions pull; `faqStructuredData` is generated from the
same visible items.

## 6. Coverage gaps

- **The owner's voice.** The page has none. The owner made The End and the Blue
  Note required and has standing in this music; §5 was never asked. One
  first-person passage, in the jungle section, would be the page's strongest
  point of difference. Needs the owner.
- Turnmills stays rejected (one source); a reader who went there will notice.
- The Colosseum, The Gass Club and Frog & Nightgown are named as Wikipedia names
  them, with no address. Placing them needs a source.

## 7. Cuts or merges

The Phonox embed was moved out of the table section into the one
Essential-listening collection with the Drumsheds set, which the site contract
requires and which leaves the table section cleaner.

## 8. Media actions

Published as listed in `london-clubs-research.md` ("Media as published"). The
Corsica Studios photograph was rejected on viewing.

## 9. Unresolved questions

- The owner's first-person material (above).
- Whether the Manchester / Haçienda page is next: stage 6 ranked it second on
  procedure and expects it to overtake London once researched.

## 10. Final acceptance checklist

| Check | Result |
|---|---|
| Facts | pass, after the corrections in section 4 |
| Editorial quality | pass; no owner voice (section 6) |
| SEO preservation | pass (new page, keyword audit green) |
| Media | pass; licences read, images viewed, embeds checked by oEmbed |
| Implementation | pass: build, 13 audits, html-validate, links, 231 layout tests |
