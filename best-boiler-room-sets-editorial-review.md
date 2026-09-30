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


---

## Evidence addendum, 2026-09-30

Written under `ARTICLE-EDITORIAL-REVIEW.md` §0. This addendum does not replace the review above; it adds the evidence that review did not record. **It is not independent:** the same agent that scanned the page wrote it, it was run with the shell offline, and no live URL was opened in this pass. Nothing in the copy was edited. Proposed wording is listed under "Findings" and waits for the owner.

Page checked: `best-boiler-room-sets.html` (built text, article body, sources section excluded).

### Greps on the built page

- `complete|full|whole|uninterrupted|an hour|in full`: 5 hit(s)
  - The full ranking of eighteen follows, next to the ten most-watched sets as measured.
  - Open it and press the button: a Boiler Room set, or one from the whole catalogue, chosen for you.
  - One of the biggest names in dance music plays three quarters of an hour of house and tech house in a private villa, not a club.
  - He started on digital, moved to vinyl and then to CDs, with MC Majestic on the mic for half an hour, and ran through bassline, UK garage and 2-step: Wookie, DJ Zinc, Zed Bias, Sticky, Scott Garcia.
  - #17 Folamour, FLY Open Air 2019 Filmed at FLY Open Air in Edinburgh in 2019, an hour of disco, funk and house at a festival.
- `jungle|drum and bass|breaks` (this is not a drum and bass guide unless stated): 6 hit(s)
  - Between the two lists, one set that was never filmed: breaks moving through garage, bass music, techno and grime.
  - It is the only drum and bass set among the ten most-watched, at 14.68 million views and 219,003 likes.
  - Where the music came from is in our drum and bass guide .
  - Article by thecatrave Breakbeat, bass and rave DJ, producer and selector.
  - These are mine, from the breaks and bass side.
  - Support ↗ Protect Ya Breaks by thecatrave Berlin Race 1909 by thecatrave Continue reading Read next.
- `Wikipedia` in the body: 0 hit(s)
- `not .* but`: 0 hit(s)
- `matters`: 0 hit(s)
- `the point`: 0 hit(s)
- Superlatives (`best-known|most famous|largest|biggest|legendary|world's`): 3 hit(s)
  - The biggest sets by views are rarely the most loved by the people watching them.
  - One of the biggest names in dance music plays three quarters of an hour of house and tech house in a private villa, not a club.
  - 122,084 likes on 4.34 million views is 28.1 per thousand, the thirteenth highest rate of any Boiler Room set past a million views, and the only one in that group by a band whose best-known record came out in the 1990s.

Hits that are the owner's own mix or Bandcamp copy ("Thirty tracks where breaks move…", "Protect Ya Breaks", "Berlin Race 1909", the author card) are protected promotion and are not counted as defects.

### Listening, links and reuse

- Embeds on the page: youtube=bk6Xst6euQk,c0-hvjV2A5Y,x9VYKrtziSg,vy-k0FopsmY,-5EQIiabJvk,T1tcUfUhR5U,OraL6lKoyXE,e8WVP3ClDsM,rKPBq_j4buQ,Zy_JR9_Y8dE,Bj8425Ma6F8,jQRI3b2SX8c,IUjWumGIqe8,j5y2GBks5j4,uhAp3o71U48,VT1a7whqhC4,rAOHJqJMYDA,wL-VMOGAhzE,ddeAyYF_uwg spotify=- soundcloud=3. The IDs are from the built HTML. Channel, view count and oEmbed result were **not** re-checked in this pass.
- Internal links: /live-dj-sets /selector /uk-garage-guide /dubstep-guide /drum-and-bass-guide /how-to-find-new-music /creamfields-festival /best-spotify-playlists /best-soundcloud-dj-mixes. None was justified individually in the original review.
- Figures: 5; shared with other pages: none. Checked against every other page's `<figure>` images after normalising size suffixes; the author photo is excluded.
- Owner promotion present: Bandcamp tracks (protect-ya-breaks,berlin-race-1909) and own-set players. Protected.

### Humanizer record

No humanizer pass was re-run here, and the review above does not mention one, so there is no record that the pass happened. The grep hits above are the candidates.

### Stage 6

`best-boiler-room-sets-research.md` says: "- Stage 6 of `TOPIC-RESEARCH.md` has not been run as a separate pass. The owner's". That is a statement, not an independent validation; this addendum does not supply one.

### Findings (owner decision needed, nothing applied)

- Before: "#17 Folamour, FLY Open Air 2019 Filmed at FLY Open Air in Edinburgh in 2019, an hour of disco, funk and house at a festival." After: "Filmed at FLY Open Air in Edinburgh in 2019, disco, funk and house at a festival."
- Before: "plays three quarters of an hour of house and tech house in a private villa" After: "plays house and tech house in a private villa" (WRITING.md: leave a set's length to the player)

### Open items

- View counts and like ratios (14.68 million / 219,003; 4.34 million / 122,084 = 28.1 per thousand) were not re-checked. They change daily and need a dated source.
- Nineteen YouTube embeds.
