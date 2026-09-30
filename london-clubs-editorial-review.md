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


---

## Evidence addendum, 2026-09-30

Written under `ARTICLE-EDITORIAL-REVIEW.md` §0. This addendum does not replace the review above; it adds the evidence that review did not record. **It is not independent:** the same agent that scanned the page wrote it, it was run with the shell offline, and no live URL was opened in this pass. Nothing in the copy was edited. Proposed wording is listed under "Findings" and waits for the owner.

Page checked: `best-electronic-music-clubs-in-london.html` (built text, article body, sources section excluded).

### Greps on the built page

- `complete|full|whole|uninterrupted|an hour|in full`: 0 hit(s)
- `jungle|drum and bass|breaks` (this is not a drum and bass guide unless stated): 23 hit(s)
  -  London clubs Best Electronic Music Clubs in London 12 min read Updated 17 September 2026 From the Four Aces and the Blitz to Rage, the Blue Note and fabric: the London clubs behind acid house, jungle, garage and dubstep, and the
  - Contents Before acid house: sound systems, the Blitz and Heaven 1988: acid house finds its London rooms Rage, Labrynth and the Blue Note: where jungle found its rooms Ministry, The End and fabric: the big rooms Sundays, Scala and
  - Most of the rooms that gave London acid house, jungle, UK garage and dubstep have closed, so the history comes first.
  - Its Wikipedia article credits it with a part in reggae's evolution into dance music, from ska and rocksteady through dub and dancehall to jungle, and that is not a figure of speech: the same building turns up again in the jungle s
  - Rage, Labrynth and the Blue Note: where jungle found its rooms.
  - Through the 1990s its music moved from house to hardcore and finally to jungle and drum and bass, and The Prodigy made their first live public appearance there.
  - Wikipedia's article on jungle names the clubs where the sound was championed as AWOL, Roast and Telepathy, with DJs such as DJ Ron, DJ Hype, Randall, Fabio & Grooverider, Micky Finn, DJ Rap and Kenny Ken, and Kool FM on the pirate
  - The jungle guide follows the records; this page follows the rooms.
- `Wikipedia` in the body: 6 hit(s)
  - Its Wikipedia article credits it with a part in reggae's evolution into dance music, from ska and rocksteady through dub and dancehall to jungle, and that is not a figure of speech: the same building turns up again in the jungle s
  - For his Land of Oz nights Oakenfold brought in Jimmy Cauty and Alex Paterson of The Orb as ambient DJs in a room called the White Room, and Wikipedia's Heaven article calls those sessions the birth of ambient house.
  - His own Wikipedia article dates it to the end of May 1988 and calls it one of the first legal acid house clubs; the Astoria's article puts it in 1988 as well.
  - Wikipedia's article on Shoom says June 1987, which the other two contradict, and this page follows the two that agree.
  - Wikipedia's article on jungle names the clubs where the sound was championed as AWOL, Roast and Telepathy, with DJs such as DJ Ron, DJ Hype, Randall, Fabio & Grooverider, Micky Finn, DJ Rap and Kenny Ken, and Kool FM on the pirate
  - Wikipedia's article on UK garage gives an event at the Frog & Nightgown as an example.
- `not .* but`: 0 hit(s)
- `matters`: 0 hit(s)
- `the point`: 1 hit(s)
  - It is about the ones where the music was the point.
- Superlatives (`best-known|most famous|largest|biggest|legendary|world's`): 2 hit(s)
  - In July 1995 the label started its weekly Sunday Sessions, and they became legendary at the Blue Note in Hoxton, which the ICMP history says Eddie Piller founded.
  - What is the biggest club in London?

Hits that are the owner's own mix or Bandcamp copy ("Thirty tracks where breaks move…", "Protect Ya Breaks", "Berlin Race 1909", the author card) are protected promotion and are not counted as defects.

### Listening, links and reuse

- Embeds on the page: youtube=-Cd8DJnLdOQ,WNEOE5uXiK8,SbznUhiLGhg,oh2-Q58QnBE spotify=- soundcloud=3. The IDs are from the built HTML. Channel, view count and oEmbed result were **not** re-checked in this pass.
- Internal links: /acid-house-guide /jungle-music-guide /drum-and-bass-guide /uk-garage-guide /dubstep-guide /selector /best-clubs-in-bristol /live-dj-sets /boomtown-festival /state-of-electronic-music. None was justified individually in the original review.
- Figures: 6; shared with other pages: none. Checked against every other page's `<figure>` images after normalising size suffixes; the author photo is excluded.
- Owner promotion present: Bandcamp tracks (you-so-ghetto-lana-del-rey-jungle-remix,protect-ya-breaks) and own-set players. Protected.

### Humanizer record

No humanizer pass was re-run here, and the review above does not mention one, so there is no record that the pass happened. The grep hits above are the candidates.

### Stage 6

`london-clubs-research.md` says: "volume alongside. Stage 6 verdict at the end of this file, by a separate pass". That is a statement, not an independent validation; this addendum does not supply one.

### Findings (owner decision needed, nothing applied)

- Wikipedia appears six times in the body, four of them as the source for a disputed date or attribution ("Wikipedia's article on Shoom says June 1987, which the other two contradict"). Replace the Wikipedia attribution with a primary or press source. Wikipedia is never the best source for a disputed or numeric claim.
- Before: "It is about the ones where the music was the point." After: "It is about the rooms where the music came first."
- "became legendary" (Sunday Sessions) is the ICMP history's wording passed on as fact; attribute or cut.

### Open items

- The Shoom start date (June 1987 against May 1988) is unresolved between three Wikipedia articles. A primary source (Danny Rampling or contemporary press) is needed.
- Four YouTube embeds: no view-count evidence.
