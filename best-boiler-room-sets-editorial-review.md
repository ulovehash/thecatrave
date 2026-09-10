# Best Boiler Room Sets: editorial review

Protocol: `ARTICLE-EDITORIAL-REVIEW.md`. Reviewed 2026-09-10 **in the same
session that wrote the draft**. That is weaker than the protocol intends. An
independent pass is recommended before publication.

## 1. Verdict

Ready after revisions. Revisions 1–4 below are already applied. Two items need
the owner's decision (section 9).

## 2. What already works

- Two lists kept apart. The measured table and the editorial ranking never
  borrow each other's authority.
- Every ranked set has its own note, with a dated fact and a sourced reason,
  plus its own player.
- Catalogue numbers no competitor has: likes, like rate by era, the Hawtin
  omission in Boiler Room's own chart, and Tokyo being fifth, not first.
- The direct answer resolves both "most viewed" and "most loved" in the first
  screen.

## 3. Priority revisions (applied)

1. Major: views written as people ("nine million people", "3.53 million
   people"). Rewritten as views.
2. Major: "the set almost everybody who watches them has seen" was not
   measurable. Replaced with the measured claim: most-watched set of the 2020s,
   55.25M.
3. Minor: Garnier entry ended on an empty superlative. Replaced with a concrete
   description.
4. Blocker (fixed before build): the Wikipedia link with parentheses would have
   broken the markdown link parser. The URL is now percent-encoded.

## 4. Fact-check ledger

| Claim | Type | Source | Confidence | Action |
|---|---|---|---|---|
| Boiler Room founded March 2010, Bellville and Richards, Ustream | fact | Wikipedia | high | keep |
| Solomun, Tulum, 14 Jan 2015, Papaya Playa Project | fact | setlist.fm | medium | keep |
| Carl Cox villa set 15 Aug 2013 | fact | 1001Tracklists, MixesDB | high | keep |
| Sama' Abdulhadi, Ramallah 22 Jun 2018, first BR in Ramallah | fact | boilerroom.tv session, search summary | high | keep |
| Her later arrest | fact | search summary conflates it with a later, unrelated event | low | **removed** |
| Kaytranada, Montreal 002, 27 Sep 2013, bill | fact | boilerroom.tv session | high | keep |
| Yukimatsu: tumour 2016, construction job, Tokyo early 2025 | fact | Wikipedia | high | keep |
| DJ EZ 4 Feb 2014, 3h+, digital to vinyl to CD, MC Majestic | fact | Fact, TRENCH | high | keep |
| Skream b2b Disclosure, W Hotel, Nov 2012, pillows | fact / quote | Vice (via search) | medium | keep, attributed to Vice |
| Charli xcx 22 Feb 2024, 99 Scott Ave; 25,000+ RSVPs | fact | setlist.fm, Wikipedia | high | keep |
| Guests at PARTYGIRL (Addison Rae, Julia Fox) | fact | Point Blank snippet only | low | **not used** |
| Chase & Status recorded 16 Sep 2023, Colour Factory, Takura, Flowdan | fact | RA, EDM.com | high | keep |
| Underworld debut 2 Aug 2025, Burgess Park, 80 min | fact | setlist.fm | high | keep |
| DJ Ramon Sucesso b. 2002 Belford Roxo, Primavera 30 May 2024 | fact | Wikipedia, TMDQA | high | keep |
| Uncle Waffles "Adiwele" clip Oct 2021, BR Feb 2022, DBN Gogo curated | fact | Wikipedia, boilerroom.tv | high | keep |
| Folamour FLY 2019 in Edinburgh | fact | Apple Music (1001Tracklists gives a different date) | medium | keep year only |
| Mall Grab Melbourne late 2022 | fact | Gray Area, 1001Tracklists (dates differ) | medium | keep "late 2022" |
| All view, like, rate and length figures | measured | selector-data.json, Sep 2026 | high | keep; see open defect `catalogue-numbers-unchecked` |
| "Recommendations" explanation of Solomun's low rate | inference | none | labelled "our reading" | keep as labelled |

## 5. SEO preservation

A new page, so there is nothing to preserve. All 8 terms in
`keywords/best-boiler-room-sets.json` are present (`audit-keywords` passes).
Title, H1 and meta express the same intent.

## 6. Coverage gaps

- The Reddit thread holding position 1 was not read, so the consensus check is
  partial. Recorded as a `known_gap` in `media/best-boiler-room-sets.json`.
- Point Blank known only from search snippets (HTTP 403).

## 7. Cuts or merges

None beyond section 3. "Where to go from here" is short on purpose: it carries
the Selector and discovery links.

## 8. Media actions

Done. 19 YouTube players, 1 SoundCloud band, 4 CC photographs. Text separates
every figure from every player (`mediaAdjacencyRhythm` passes).

## 9. Unresolved questions (owner)

1. FAQ has five questions, not three. The shared audit requires at least five,
   so the two remaining real PAA questions were added.
2. The homepage grid now has 9 cards, and 9 mod 4 leaves one orphan. The layout
   test fails on it. This is a homepage design decision.
3. Read Next on `uk-garage-guide.html` and `how-to-find-new-music.html` now
   shows this page, because `relatedArticles()` scores by tags. This is a change
   to published pages.

## 10. Final acceptance checklist

- Facts: pass, with low-confidence claims removed.
- Editorial quality: pass, same-session review.
- SEO: pass.
- Media: pass.
- Implementation: pass except the homepage orphan test (item 9.2).
