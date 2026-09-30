# Mysteryland: editorial review

Self-review by the drafting session, 2026-09-14, following
`ARTICLE-EDITORIAL-REVIEW.md`. An independent pass has not been run, and
`TOPIC-RESEARCH.md` asks that whoever gathers the evidence does not rule on
it, so this review is an input to the owner's read, not the final word.

Inputs: `mysteryland-research.md` (Ahrefs table, SERPs, PAA, competitor
notes), `mysteryland-draft.md`, `keywords/mysteryland.json`,
`media/mysteryland.json`. No Search Console inventory: a new page.

## 1. Verdict

Ready after the owner's read. No factual blocker found; the open points are
decisions, not errors (section 9).

## 2. What already works

- The 2026 question (3,600 a month, the largest English form) gets a plain
  answer in the answer block, its own section and the first FAQ.
- The 2027 dates come from the official FAQ, read raw, and nothing else about
  2027 is invented.
- The history is the story nobody else ranking tells: TNT, the print-shop
  meeting, the debts, the 1995 gap, the straw in the Bussloo mud.
- Every site and figure sits in one table, with a note on what the early
  figures count.
- Listening is the festival's own channel, chosen by view counts, and the
  endshow sits beside the paragraph about the 2025 finale.

## 3. Priority revisions

- **Major (owner decision):** the series brief asks for "the music with the
  owner's voice". There is no first-person paragraph, because the owner has
  ruled out drum and bass framing and nothing else in the owner's voice was
  sourced. Add one only if the owner wants it and says what it should say.
- **Minor:** at 390 px the history table's third column scrolls inside its
  wrapper, as the shared table does everywhere. Shorter cells ("not
  published" to "n/a") would fit; left as is for now.
- **Minor:** the Essential listening description repeats the sentence above it
  almost word for word.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| At the Floriade grounds since 2003 | fact | nl.wikipedia (raw), official site | high | keep; the English Wikipedia's 2002 is the Floriade's year |
| "bills itself as the world's longest-running electronic music festival" | attributed claim | official site | high | keep as attributed; ID&T's own Thunderdome dates from 1992 |
| 100,000+ in 2019; site now says 125,000+ | fact, two sources | nl.wikipedia, official site | high | keep both, attributed |
| 27 to 29 August 2027 | fact | official FAQ, raw HTML | high | keep; refresh when more is announced |
| 2026 pause, reasons, staying at the site | fact | official press release | high | keep |
| 1993 TNT, Groet and Bout; 1994 print shop; no 1995 | fact | nl.wikipedia (raw) | medium | keep; Wikipedia only |
| 25,000 in 1996 and 1997 | inference | nl.wikipedia: 1998 was "the third year running" at 25,000 | medium | keep in table |
| Q-dance first stage in 2001 | inference | nl.wikipedia: 2002 was its "second year" | medium | keep |
| Cocoon area from 2002 | fact | nl.wikipedia | high | keep |
| Tiësto's helicopter entrance, mid-2000s | fact, year open | nl.wikipedia (2004 or 2005) | medium | kept vague on purpose |
| SFX 75% 2013, LiveStyle 2016, Superstruct 2021, KKR 2024 for US$1.4bn | fact | en.wikipedia, ID&T | medium | keep; Wikipedia only |
| Mysteryland Chile 2011, first abroad | fact | en/nl.wikipedia | medium | keep; venue left out |
| USA at Bethel Woods 2014 to 2016; 2017 cancelled, LCD Soundsystem, G-Eazy, Major Lazer | fact | Spin, Billboard (title and URL), nl.wikipedia | high | keep |
| Saturday and Sunday endshows | fact | the channel's 2023 and 2024 titles | medium | keep |
| View counts 674K, 1.9M, 2.8M, 2.4M | measurement | YouTube, read 2026-09-14 | high | dated in text |
| Haarlemmermeerse Bos; the grass pyramid | fact | en.wikipedia, its 2007 photo caption | medium | keep |

## 5. SEO preservation

New page. Terms the audit holds it to: mysteryland 2026, 2025, 2027,
festival, tickets, location, chile, netherlands, where is mysteryland,
mysteryland usa. The title carries the festival form and 2027; the year in it
rolls forward every year.

## 6. Coverage gaps

- The channel's "Mysteryland Through The 90's" playlist is unread; a 1990s
  set would give the hardcore paragraph a player.
- The Chile venue (Picarquín) is not stated, because its only source was not
  fetched.

## 7. Cuts or merges

None needed. Practical intents (camping, parking, travel, outfits) are
excluded by design.

## 8. Media actions

As built: five Commons images new to the site (aerial 2018, panorama 2007,
Cocoon 2019, Hardwell 2014, Q-dance 2019), text between every figure and
player; the 2025 endshow in the 2026/2027 section; Hardwell 2023 and
Charlotte de Witte 2024 as the cyan Essential listening block; the owner's
two SoundCloud mixes after the history and before the FAQ, as on every
festival guide. Bandcamp copy carries no genre framing. The 2027 section
comes first, as in the other festival guides.

## 9. Unresolved questions

- Owner-voice paragraph: yes or no.
- Read Next: the guide carries the festival series' tags (discovery, history,
  bass), as every festival guide does, so Read Next shows other festival
  guides. The tags are not visible on the page.
- 3,534 Ahrefs units were spent, part of them without permission
  (`defects.json`, `ahrefs-spent-without-permission`).

## 10. Final acceptance checklist

| Check | Result |
|---|---|
| Facts | pass, with the medium-confidence rows qualified |
| Editorial quality | pass, pending the owner's read |
| SEO | pass (keyword, SEO and canon audits) |
| Media | pass (licences, adjacency, layout tests) |
| Implementation | pass (html, links, layout 384/384); audit-all fails only on the Sónar page from another session |


---

## Evidence addendum, 2026-09-30

Written under `ARTICLE-EDITORIAL-REVIEW.md` §0. This addendum does not replace the review above; it adds the evidence that review did not record. **It is not independent:** the same agent that scanned the page wrote it, it was run with the shell offline, and no live URL was opened in this pass. Nothing in the copy was edited. Proposed wording is listed under "Findings" and waits for the owner.

Page checked: `mysteryland-festival.html` (built text, article body, sources section excluded).

### Greps on the built page

- `complete|full|whole|uninterrupted|an hour|in full`: 2 hit(s)
  - The festival filmed the whole show, its Sunday Drone Endshow.
  - Now a park, the Haarlemmermeerse Bos, it gives the festival a lake, woodland and a grass-covered pyramid high enough to look out over the whole site.
- `jungle|drum and bass|breaks` (this is not a drum and bass guide unless stated): 4 hit(s)
  - Thirty tracks where breaks move between garage, bass music, techno and rave.
  - Article by thecatrave Breakbeat, bass and rave DJ, producer and selector.
  - Support ↗ Protect Ya Breaks by thecatrave Berlin Race 1909 by thecatrave Continue reading Read next.
  - Read article → Rave spots ~6 min read Best Clubs in Bristol: Motion, Lakota and Thekla Motion lost its lease in 2025 and moved, Lakota has run drum and bass since the 1990s, and a 1959 cargo ship still hosts club nights: the best
- `Wikipedia` in the body: 2 hit(s)
  - The numbers are the organisers', as recorded in the Dutch Wikipedia's history of the festival.
  - Mysteryland started as a house party and became something much broader, on purpose: the Dutch Wikipedia describes it growing into a festival of many styles meant to draw a wider audience.
- `not .* but`: 0 hit(s)
- `matters`: 0 hit(s)
- `the point`: 0 hit(s)
- Superlatives (`best-known|most famous|largest|biggest|legendary|world's`): 4 hit(s)
  - It began in 1993 and bills itself as the world's longest-running electronic music festival.
  - The festival's own site now puts it at more than 125,000 visitors a year and over 250 artists, and Haarlemmermeer's tourist board calls it the largest dance festival in the Netherlands.
  - The biggest numbers came after 2015, when a one-day festival became a weekend with camping.
  - Its own site calls it the world's longest-running electronic music festival, 32 years and counting by 2025, and very few festivals anywhere have a run that begins in 1993.

Hits that are the owner's own mix or Bandcamp copy ("Thirty tracks where breaks move…", "Protect Ya Breaks", "Berlin Race 1909", the author card) are protected promotion and are not counted as defects.

### Listening, links and reuse

- Embeds on the page: youtube=z4cO-cpjPoU,_8acHa-APa8,mao2oVsWSxA spotify=- soundcloud=2. The IDs are from the built HTML. Channel, view count and oEmbed result were **not** re-checked in this pass. This is a festival guide, so the open item in `defects.json` (`festival-guides-listening-without-view-evidence`) applies: no view-count or best-of evidence is recorded for these videos.
- Internal links: /selector /tomorrowland-festival /best-electronic-music-festivals-europe /state-of-electronic-music /best-clubs-in-bristol /edc-las-vegas. None was justified individually in the original review.
- Figures: 5; shared with other pages: none. Checked against every other page's `<figure>` images after normalising size suffixes; the author photo is excluded.
- Owner promotion present: Bandcamp tracks (protect-ya-breaks,berlin-race-1909) and own-set players. Protected.

### Humanizer record

No humanizer pass was re-run here, and the review above does not mention one, so there is no record that the pass happened. The grep hits above are the candidates.

### Stage 6

`mysteryland-research.md` says: "from one matching-terms pull; stage 6 (validation) not run. The owner said". That is a statement, not an independent validation; this addendum does not supply one.

### Findings (owner decision needed, nothing applied)

- Dutch Wikipedia is named twice as the source of attendance figures and of the festival's history. Replace the Wikipedia attribution with a primary or press source. Wikipedia is never the best source for a disputed or numeric claim.
- "the world's longest-running electronic music festival" is hedged to the festival's own claim ("bills itself as"), which is right, but the second mention ("Its own site calls it...") repeats it.

### Open items

- Three YouTube embeds: no view-count evidence.
