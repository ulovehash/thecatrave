# Editorial review: best-edm-festivals-world

Reviewed 2026-11-04 against `best-edm-festivals-world-draft.md`, `build-world-festivals-article.mjs`, the built `best-edm-festivals-world.html`, `keywords/best-edm-festivals-world.json` and `media/best-edm-festivals-world.json`. The reviewer is independent of the writer and of the stage 6 validator. Every source in the builder's Sources block was fetched with curl on 3 and 4 November 2026 and searched for the claim. Any later edit to the draft or builder needs a re-review. Stage 6 was run by an independent validator (TOPIC-DOSSIERS.md, "Third wave: stage 6 verdict"); the owner read has not been run.

## 1. Verdict

**Ready after revisions** (applied in this pass, see §10). Every 2027 date checks out against the festival's own page, and the ranking follows the figures as stated. Three entries misstate what their source says:

- Mysteryland is excluded for a reason that contradicts the page's own criteria (it ran in 2025), and "a new concept" is not on its site.
- Parookaville's 225,000 covers three show days plus five camping days with pre-parties, not "three show days".
- EDC's 525,000 is called a "record" twice, and "On that count it is the largest EDM festival in the world" follows the 2027 dates, where it means nothing. Insomniac's own release says 2027 is "being designed to have lower capacity", which a 2027 ranking should tell the reader.

The page fits the verdict: electronic only, ranked by reported attendance, short linked entries. The Tomorrowland entry is three sentences and links out, so it does not compete with the Tomorrowland guide.

## 2. What already works

- The intro answers the real problem first: festivals count crowds in different ways. Each entry gives the figure, the year and what it counts.
- The Street Parade is answered under "largest electronic music festival in the world" and kept out of the ticketed ranking, with the reason stated. That is honest and it captures the free-event reading of the query.
- Every 2027 date is on the festival's own site: EDC 14 to 16 and 21 to 23 May (lasvegas.electricdaisycarnival.com header and the Insomniac release), Untold 5 to 8 August, Parookaville 16 to 18 July, Airbeat One 7 to 11 July, Ultra 26 to 28 March, Ultra Europe 9 to 11 July, Awakenings 9 to 11 July, Creamfields 26 to 29 August, Street Parade Saturday 14 August, 13:00 to 00:00. Tomorrowland's site still shows only 2026.
- Pre-event figures are labelled in the body and table: Awakenings ("announced before it opened"), Creamfields ("expected").
- Both photographs are new to the site (no other builder or page references them), localised to `img/world-festivals/`, and the Commons API confirms author and licence: Eric Polk, CC BY-SA 4.0; Peter Arnold, CC BY-SA 4.0. Captions carry the required tail.
- No em or en dashes, no drum and bass angle, no production teaching, no whole-set framing.

## 3. Priority revisions

### Blockers

**B1. Mysteryland exclusion contradicts criterion 3.** Criterion 3 is "It ran in 2025 or 2026". mysteryland.nl lists a 2025 edition (22 to 24 August, Haarlemmermeer), so "there was no edition in 2026" does not exclude it. The real reason it cannot be ranked is that its figure is a yearly claim with no edition attached. "returns in 2027 with a new concept" is not on mysteryland.nl, which shows only a 2027 waitlist.
- L94. Old: "**Mysteryland.** The Dutch festival says it welcomes more than 125,000 visitors each year, but there was no edition in 2026, and it returns in 2027 with a new concept. See the [Mysteryland guide](/mysteryland-festival)." New: "**Mysteryland.** The Dutch festival says it welcomes more than 125,000 visitors each year, but it gives no figure for a single edition, and it did not run in 2026. See the [Mysteryland guide](/mysteryland-festival)."

**B2. Parookaville's figure is misdescribed.** WDR: "An drei Show- und fünf Camping-Tagen inklusive Pre-Partys feierten insgesamt 225.000". The count spans the camping days too.
- L53. Old: "WDR reported 225,000 visitors over three show days in 2026." New: "WDR reported 225,000 visitors in 2026, counted across three show days and five camping days with pre-parties."
- Table. Old: `'225,000 over three days (2026)'` New: `'225,000 over three show days and five camping days (2026)'`

**B3. EDC: "record" is unsourced, one sentence is orphaned, and the 2027 capacity cut is missing.** Digital Music News gives "over 525,000 attendees" for 2024 but does not call it a record. The Insomniac release (20 May 2026) says "The 2027 festival is being designed to have lower capacity". It also calls 2026 "hundreds of thousands"; the "more than 500,000" is My Modern Met's.
- L31. Old: "The 2026 edition, on 15 to 17 May, drew more than 500,000 people over three days, and the 2024 edition set a record of over 525,000. For 2027 Insomniac is splitting it into two weekends: EDC Dusk on 14 to 16 May and EDC Dawn on 21 to 23 May, inside a 12 day run from 13 to 24 May that Insomniac calls Dusk Till Dawn. On that count it is the largest EDM festival in the world." New: "The 2026 edition, on 15 to 17 May, drew more than 500,000 people over three days, and the 2024 edition drew over 525,000. That 2024 figure is the highest any ticketed festival on this list has published, so on the numbers it is the largest EDM festival in the world. For 2027 Insomniac is splitting it into two weekends: EDC Dusk on 14 to 16 May and EDC Dawn on 21 to 23 May, inside a 12 day run from 13 to 24 May that Insomniac calls Dusk Till Dawn. It says the 2027 festival is being designed with a lower capacity."
- L87. Old: "Both put their 2026 figure above 500,000, and EDC holds the higher single record, with over 525,000 in 2024." New: "Both put their 2026 figure above 500,000, and EDC has the higher single figure, over 525,000 in 2024."
- Table. Old: `'Over 500,000 (2026); record over 525,000 (2024)'` New: `'Over 500,000 (2026); over 525,000 (2024)'`
- Banner answer. Old: "and EDC's record is over 525,000 in 2024." New: "and EDC drew over 525,000 in 2024."

### Major

**M1. FAQ superlatives with no source, and the FAQ repeats the banner.** "so it is usually called the biggest" and "It does have the largest online audience" are not on any source. Bandwagon says "record-breaking 233 million livestream views", a Tomorrowland record, not a comparison.
- L108. Old: "EDC Las Vegas and Untold both reported more than 500,000 people in 2026. EDC's record is over 525,000, set in 2024, so it is usually called the biggest electronic music festival in the world." New: "On published figures, EDC Las Vegas. Its 525,000 in 2024 is the highest any ticketed festival here has reported, with Untold close behind at more than 500,000 in 2026, which makes EDC the biggest electronic music festival in the world for now. Insomniac plans a lower capacity for 2027."
- L112. Old: "It does have the largest online audience, with 233 million livestream views in 2026." New: "Its livestreams set a record of their own in 2026, with 233 million views."

**M2. Airbeat One 2027 is the 25th anniversary, not the 25th edition.** The site's own Airbeat One guide: "The organiser counts 2027 as both the 25th anniversary and the 24th edition."
- L57. Old: "The 2027 edition is its 25th, on 7 to 11 July." New: "The 2027 edition marks its 25th anniversary, on 7 to 11 July."

**M3. Untold's bill.** Pollstar's 2026 line-up is "led by Sting, Flo Rida, Lewis Capaldi, Tash Sultana, Afrojack, Carl Cox, Kygo, The Chainsmokers, Steve Aoki". "The bill is led by electronic acts" is not what the source says. "The first edition in 2015 had 240,000" is on the site's Untold guide but on none of the sources this page cites; it adds nothing to a 2027 ranking.
- L37. Old: "The first edition in 2015 had 240,000. The bill is led by electronic acts, and in 2026 it also had pop names such as Sting and Lewis Capaldi." New: "Most of the bill is electronic, with Afrojack, Carl Cox, Kygo and Martin Garrix in 2026, alongside pop names such as Sting and Lewis Capaldi."

**M4. The criteria do not say that some figures were given before the festival, or are old.** The entries label them, the criteria should too.
- L17. Old: "Each entry says what its number means." New: "Each entry says what its number means. Two figures, for Awakenings and Creamfields, were given before the 2026 festival opened, and Ultra Europe's is from 2023, the last year its organisers published one."

### Minor

**m1. "filmed by DJ Mag".** The oEmbed author is DJ Mag; who filmed it is not stated.
- L39. Old: "filmed by DJ Mag." New: "published by DJ Mag."
- Builder `singleSet` description, same change.

**m2. Street Parade paragraph says "free" three times, and the ticketed answer is split by an image.**
- L79. Old: "It is a free, one day street parade through the city, with no ticket. The organiser counted 900,000 people in 2026, 800,000 in 2025 and 920,000 in 2024. The parade is free, so the figure is an estimate of the crowd in the streets." New: "It is a one day parade through the city, with no ticket. The organiser puts the crowd at 900,000 in 2026, 800,000 in 2025 and 920,000 in 2024, estimates of the people in the streets rather than a ticket count."
- "For the Berlin parade it grew out of" overstates the link. New: "For the Berlin parade that came before it".
- L83 to L87: join "The largest electronic music festival with tickets…" and "Both put their 2026 figure…" into one paragraph and place the Street Parade image after it.

## 4. Fact-check ledger

| Claim | Status | Source opened |
|---|---|---|
| EDC 2027: Dusk 14 to 16 May, Dawn 21 to 23 May, run 13 to 24 May | Confirmed | press.insomniac.com release of 20 May 2026; lasvegas.electricdaisycarnival.com header "May 14-16 & 21-23, 2027" |
| EDC 2027 lower capacity | Confirmed, was missing (B3) | Insomniac release |
| EDC 2026 more than 500,000, 15 to 17 May | Confirmed (press; Insomniac says "hundreds of thousands") | mymodernmet.com/edc-2026-recap |
| EDC 2024 over 525,000 | Confirmed; "record" not on source (B3) | digitalmusicnews.com 23 May 2024 |
| Untold 2026 more than 500,000, four days, nine stages, Cluj Arena | Confirmed | Pollstar 10 Aug 2026 |
| Untold bill led by electronic acts | Not what source says (M3) | Pollstar |
| Untold 2015 240,000 | Not on cited sources (M3, cut) | site's Untold guide only |
| Untold 2027 5 to 8 August | Confirmed | untold.com |
| Tomorrowland 2026 400,000, 200+ countries, 17 to 19 and 24 to 26 July, 233m views | Confirmed | bandwagon.asia 29 Jul 2026; belgium.tomorrowland.com |
| Tomorrowland largest online audience | No source (M1) | none |
| Tomorrowland 2027 not announced | Confirmed as of 4 Nov 2026 | belgium.tomorrowland.com, tomorrowland.com show no 2027 |
| Parookaville 225,000 over three show days | Wrong scope (B2) | wdr.de Bilanz 2026 |
| Parookaville 2027 16 to 18 July | Confirmed | parookaville.com/en |
| Airbeat One 210,000, five days, record, organiser figure | Confirmed | berliner-zeitung.de 13 Jul 2026 ("Nach Angaben des Veranstalters") |
| Airbeat One 2027 7 to 11 July; "its 25th" | Dates confirmed; 24th edition, 25th anniversary (M2) | airbeat-one.de/en; site's Airbeat One guide |
| Ultra 2026 165,000, 100 countries, sold out | Confirmed | electricfeels.com 1 Apr 2026 |
| Ultra 2027 26 to 28 March | Confirmed | ultramusicfestival.com ("27th edition", "Ultra Miami 2027") |
| Ultra Europe 2023 more than 150,000, 140+ countries, ninth edition; 2027 9 to 11 July | Confirmed | ultraeurope.com news of 19 Jul 2023, site header |
| Awakenings 2026 119,000, record, announced at sell-out (pre-event) | Confirmed, labelled | mixmagde.com 6 Jun 2026 ("will welcome") |
| Awakenings 2027 9 to 11 July | Confirmed | awakenings.com/en |
| Creamfields 2026 over 80,000 expected, four days (pre-event) | Confirmed, labelled | creamfields.com news; timeout.com |
| Creamfields 2027 26 to 29 August, 30 years | Confirmed | creamfields.com/welcome ("Celebrating 30 years") |
| Street Parade 900,000 (2026), 800,000 (2025), 920,000 (2024, "estimated") | Confirmed | streetparade.com/en/historie |
| Street Parade 2027 Sat 14 Aug, 13:00 to 00:00 | Confirmed | streetparade.com/en/infos |
| Mysteryland 125,000 each year; no 2026; "new concept" | Figure and missing 2026 confirmed; ran 2025 (B1); "new concept" not on source | mysteryland.nl/this-is-mysteryland, mysteryland.nl |

Ranking after fixes, by stated figure: EDC Las Vegas (over 500,000 in 2026, over 525,000 in 2024), Untold (over 500,000, 2026), Tomorrowland (400,000, 2026), Parookaville (225,000, 2026), Airbeat One (210,000, 2026), Ultra (165,000, 2026), Ultra Europe (over 150,000, 2023), Awakenings (119,000 pre-event, 2026), Creamfields (over 80,000 expected, 2026). Order matches the figures. Street Parade (about 900,000, free) is answered separately and not ranked.

## 5. SEO preservation

- Title "World's Biggest EDM Festivals 2027: EDC, Untold, Tomorrowland" is 61 characters; description is 154. Neither changes.
- Keyword audit by count on the built page text (pre-fix): "biggest edm festival in the world" 4, "largest electronic music festival in the world" 2, "largest music festival in the world" 1, "biggest electronic music festival in the world" 1, "largest edm festival in the world" 1, "world's biggest edm festival" 5, "world's biggest electronic music festivals" 1, "largest electronic music festival" 3. B3 and M1 rewrite the only sentences holding "largest edm festival in the world" and "biggest electronic music festival in the world"; both phrases are kept verbatim in the new wording.
- TAKEN-KEYWORDS.md: none of the eight terms is listed. "biggest edm festival in the world" appears in `keywords/best-edm-festivals-usa.json` only under rejected terms ("world-level intent, not a US list"), so it is free. That file records it at 100 against 1000 here; Keyword Planner bucket, not a conflict worth a block.
- Cannibalisation: Tomorrowland, EDC and Untold entries are short, factual and link to their guides; no H2 or H3 targets a festival's own name. The Europe and USA roundups are linked from "How to choose", not repeated.
- Internal links: all 17 resolve to tracked pages (`git ls-files` check).
- §0 grep evidence on the built page (2,166 words):
  - complete, full, whole, uninterrupted, "an hour", "in full": 0.
  - jungle, drum and bass, Wikipedia, em dash, en dash, "matter", "the point", not…but: 0.
  - breaks: 3, all in the owner's own playlist and mix blocks (promotion, keep).
  - Bandcamp: 4, the shared support card and footer; card copy has no dnb line.
  - largest: "largest online audience" (M1), orphaned EDC line (B3).
  - record: EDC twice (B3); Airbeat and Awakenings are on source.
- Humanizer record (three changes): "The bill is led by electronic acts" became "Most of the bill is electronic, with Afrojack, Carl Cox, Kygo and Martin Garrix"; "It is a free, one day street parade… The parade is free, so…" became one statement of the fact; "so it is usually called the biggest" became a claim derived from the figures.
- Banner, first section and FAQ: banner and FAQ 1 shared "both reported more than 500,000… EDC's record is over 525,000". FAQ 1 is rewritten (M1).

## 6. Coverage gaps

- None blocks publication. Sensation, Defqon.1 and EDC Mexico could be candidates if they publish a year-specific figure; not added without one.

## 7. Cuts or merges

- Cut "The first edition in 2015 had 240,000" (M3) and the orphaned EDC sentence (B3).
- Merge the split ticketed-answer paragraph (m2).

## 8. Media actions

- Set b6cZJvIJhQ0: oEmbed returns "David Guetta's Live DJ Set From UNTOLD Festival 2023", author DJ Mag, embeddable. Placed in the Untold entry, which it supports. View count could not be read from the shell (consent wall); record it from the browser before push.
- Images: no change.

## 9. Unresolved questions

- Should the EDC versus Untold call change once EDC 2027 runs at its lower capacity? Refresh after May 2027 (the builder's maintenance note covers it).
- Is Ultra Europe's 2023 figure still acceptable to rank on, three years on? It is labelled; the owner may prefer to drop it to "Not on this list".
- Record the set's view count (§0).

## 10. Final acceptance checklist

- [x] B1 to B3 applied in draft and builder (table, banner answer). Evidence: after rebuild, "new concept", "set a record of over", "On that count", "largest online", "usually called" and "filmed by" return 0; "over three show days" returns 1, the corrected table cell ("and five camping days"). FAQPage schema carries the new FAQ text.
- [x] M1 to M4 and m1, m2 applied.
- [x] Keyword phrases kept: per-term counts re-run after rebuild, all at least 1.
- [x] All 2027 dates match the festival sites (ledger).
- [ ] Set view count recorded.
- [ ] `npm run check:html`, `node audit-all.mjs`, `npm run check:layout`, `npm run check:links` (not run here, by instruction; only `node build-world-festivals-article.mjs` was run).
- [ ] Owner read.
