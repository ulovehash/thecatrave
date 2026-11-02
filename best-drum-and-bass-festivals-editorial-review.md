# Editorial review: best-drum-and-bass-festivals

Reviewed 2026-11-02 against `best-drum-and-bass-festivals-draft.md`, `build-dnb-festivals-article.mjs` and the built `best-drum-and-bass-festivals.html`. The reviewer is independent of the writer. The draft changed while this review was running (an intro edit added "or dnb festivals"). Everything below is checked against the draft as it stood at about 12:02 on 2 November 2026, so any later edit needs a re-review. Stage 6 (owner read) has not been run.

## 1. Verdict

**Blocked until revisions.** The structure, the keyword placement and the media are sound. Five factual problems stop publication. The Rampage Open Air dates are incomplete. A 2026 attendance figure that was a forecast is stated as a result. The DnB Allstars dates and length are wrong. LOCUS Bali's date comes from a ticketing page but is shown as confirmed. The Rampage Weekend date disagrees with its own source. Several smaller claims have no source.

## 2. What already works

- Every festival has a 2027 date or an explicit "not announced", and the confirmed/listed split is explained in the criteria.
- The size section is honest: it gives both organisers' figures and says they are not comparable.
- The clash paragraph ("Rampage Open Air and Hospitality on the Beach overlap...") is useful to a reader planning a summer.
- Not-on-this-list is short and justified. The Boomtown line is supported by the site's own Boomtown guide.
- None of the house-rule triggers appear: no em or en dashes, no tool names, no research commentary, no whole-set framing, no production teaching.
- All seven media items are new to the site (md5 compared against every other `img/` directory), openly licensed and credited.
- The keyword, media and banned-phrase audits all pass.

## 3. Priority revisions

### Blockers

**B1. Rampage Open Air dates.** rampage.eu/news/rampage-open-air-2027 says "From July 1 to July 4th 2027". The date block on the same page reads 01-07 to 05-07, which probably includes departure day. Use the body text everywhere.
- Draft L31. Old: "The 2027 edition starts on 1 July." New: "The 2027 edition is on 1 to 4 July."
- Table. Old: `'From 1 July'` New: `'1 to 4 July'`
- Answer. Old: "Rampage Open Air in Belgium (from 1 July)" New: "Rampage Open Air in Belgium (1 to 4 July)"
- Description. Old: "Rampage Open Air from 1 July," New: "Rampage Open Air on 1 to 4 July,"
- FAQ L112. Old: "on 1 July and 5 to 7 August 2027." New: "on 1 to 4 July and 5 to 7 August 2027."
- FAQ L124. Old: "Rampage Open Air 2027 starts on 1 July at the Kristalpark in Lommel, Belgium." New: "Rampage Open Air 2027 is on 1 to 4 July in Lommel, Belgium."

**B2. 2026 attendance was a forecast.** The 2026 VRT article was published on 2 July, before the festival, and says "Zo'n 55.000 bezoekers zullen..." ("About 55,000 visitors will...").
- L27. Old: "and about 55,000 in 2026." New: "and expected about 55,000 in 2026."

**B3. Rampage Weekend has no source in the page, and the date is wrong.** The source does exist, at rampage.eu/news/rampage-weekend-2027. Its body text says "On March 5+6 2027, AFAS Dome", while its date block reads 05-03 to 07-03. Follow the body text, as for B1.
- L31. Old: "Its organisers also run Rampage Weekend, the indoor edition, on 5 to 7 March 2027, which gives the year an early start." New: "Its organisers also run Rampage Weekend, the indoor edition, at the AFAS Dome in Antwerp on 5 and 6 March 2027."
- Table. Old: `['Rampage Weekend', 'Belgium', '5 to 7 March', 'Indoor', 'Three days', 'An early start']` New: `['Rampage Weekend', 'Antwerp, Belgium', '5 and 6 March', 'Indoor arena', 'Two days', 'An early start']`
- FAQ L124. Old: "The indoor Rampage Weekend is on 5 to 7 March 2027." New: "The indoor Rampage Weekend is on 5 and 6 March 2027 at the AFAS Dome in Antwerp."
- Sources: add rampage.eu/news/rampage-weekend-2027 to the first line.

**B4. DnB Allstars Thailand.** Megatix lists "Phuket 22–24 Jan 2027" at Azulea Phuket, "Strictly 20+". The draft gives one day.
- L87. Old: "DnB Allstars, the UK promoter, takes an event to Phuket, listed for 22 January 2027. It is the earliest date of the year." New: "DnB Allstars, the UK promoter, takes a three-day event to Azulea in Phuket, listed for 22 to 24 January 2027, for ages 20 and over. It is the earliest date on this list."
- Table. Old: `'Listed 22 January', 'Island', 'One date'` New: `'Listed 22 to 24 January', 'Island', 'Three days'`

**B5. LOCUS Bali is listed, not confirmed.** The only source is TicketFairy, a ticketing site. The criteria say a date from a listing or ticketing site is marked as listed.
- L83. Old: "on 17 to 20 June 2027, for ages 18 and over." New: "listed for 17 to 20 June 2027, for ages 18 and over."
- Table. Old: `'17 to 20 June'` New: `'Listed 17 to 20 June'`
- Sources: move the TicketFairy link from "2027 dates from each festival's own site" to "Listed dates".

### Major

**M1. The criterion overstates.** Outlook Origins and Beyond Mars both book other bass music, so "whole programme" is not true of the list.
- L13. Old: "Drum and bass is the whole programme, or nearly all of it." New: "Drum and bass is the core of the programme."

**M2. Hospitality in the Park.** The only source is Wikipedia. hospitalitydnb.com is JavaScript-rendered and could not be read. "Has no current edition" is stronger than the evidence allows.
- L93. Old: "Hospital Records' London park festival has no current edition. The label's festival now is Hospitality on the Beach, above." New: "Hospital Records' London park festival has not announced a 2027 edition. The label's beach festival, above, is the one with a 2027 date."
- FAQ L120. Old: "and Hospital Records' Hospitality in the Park has no current edition." New: "and Hospital Records' Hospitality in the Park has not announced a 2027 edition."
- Sources: replace the Wikipedia link with a Hospital Records page that the owner opens and confirms by hand, or remove the line once the wording above is in.

**M3. The Netsky line and caption have no source.** Nothing opened supports "released on Hospital for years" or the caption's "held in the Diemerbos near Amsterdam". The sentence also stages the picture.
- L59. Old: "If you follow the Hospital roster, this is the one built around it. Netsky, pictured below at Liquicity in 2015, released on Hospital for years." New: "If you follow the Hospital roster, this is the one built around it."
- Caption. Old: "Netsky at Liquicity in 2015, when the festival was held in the Diemerbos near Amsterdam. Photograph: Nederlandse Leeuw, CC BY-SA 4.0." New: "Netsky at Liquicity in 2015. Photograph: Nederlandse Leeuw, CC BY-SA 4.0."
- Move the figure under the Liquicity section, or drop it. It no longer belongs under Hospitality.

**M4. Beyond Mars location.** Technoairlines says South Gloucestershire and also "near Swindon", which contradicts "near Bristol". The opening sentence is also vague.
- L71. Old: "Beyond Mars is the dedicated one. It is listed for 3 to 7 June 2027 in South Gloucestershire, near Bristol, with drum and bass and other heavy electronic music." New: "Beyond Mars is a festival built around drum and bass. It is listed for 3 to 7 June 2027 in the South Gloucestershire countryside, with drum and bass and other heavy electronic music."

**M5. Let It Roll's former mine has no source.** letitroll.cz and letitroll.eu say only "Jezero Most" or "Lake Most". The world's-biggest claim and the 25,000+ figure are now confirmed ("The world's biggest Drum & Bass festival", "25 000+ návštěvníků ročně").
- L5. Old: "when Let It Roll fills a former mining lake in the Czech Republic." New: "when Let It Roll fills a lakeside site in the Czech Republic." Alternatively, keep the wording and add a source for the mine history.
- L39 and FAQ L116. Old: "a lake made from a former open-cast mine near the town of Most" New: "a lake near the town of Most". The same alternative applies.
- Table. Old: `'Former mining lake'` New: `'Lake'`. Change this only if the source is not added.
- L27. Old: "says it draws more than 25,000 people." New: "says it draws more than 25,000 people a year."

**M6. The Sources list misfiles two items.** The "own site" line includes Sun and Bass, which has no 2027 date. Move it to a "Past editions" line. LOCUS is covered in B5.

### Minor

**m1. Intro.** Several of the "between them" festivals fall outside the July to August window (Malta in April, Bali in June, Phuket in January).
- L5. Old: "Between them sit the Croatian coast, a Dutch lake and a run of smaller weekends from Malta to Bali." New: "Around them sit the Croatian coast, a Dutch lake and smaller festivals from Malta to Bali."

**m2. Staging and a claim of auditing.**
- L27. Old: "It depends on how you count. Rampage Open Air reported" New: "Rampage Open Air reported"
- L27. Old: "Neither figure is independently audited, and the two may not be counted the same way." New: "Both figures come from the organisers, and the two may not be counted the same way."

**m3. Calendar wording.** Change this so the page never puts "full" next to the festival context.
- L21. Old: "and Liquicity and Outlook Origins overlap in the last full week of July," New: "and Liquicity and Outlook Origins overlap from 23 to 25 July,"

**m4. The calendar point appears twice.** L102 repeats L21.
- L102. Old: "Then look at the calendar. Rampage Open Air and Let It Roll are a month apart, so you can do both in one year. Liquicity and Outlook Origins share a week in July, and so do Rampage and Hospitality on the Beach." New: "Then look at the calendar. Rampage Open Air and Let It Roll are a month apart, so you can do both in one year."

**m5. Outlook Origins genres.** The festival describes itself only as "UK soundsystem music in all its multitudes". The trailing "more than" clause is a not-X-but-Y construction.
- L55. Old: "and books drum and bass alongside dubstep, dub and other bass music. The 2027 edition is on 22 to 26 July. It is a week by the sea with boat parties, more than a weekend on a site." New: "and books drum and bass alongside the rest of UK soundsystem music. The 2027 edition is on 22 to 26 July, with boat parties on the Adriatic."

**m6. Liquicity location.** The FAQ gives Festivalweg 1, Oudkarspel. Neither "near Alkmaar" nor "recreation lake" is on that page. This is an owner check. If no source is found, change "a recreation lake near Alkmaar" to "a lake in North Holland".

**m7. WAH Malta end date.** Skiddle's event page says Sunday 2 May, but a listing block on its news page says Monday 3 May. Keep "listed" and 2 May, and recheck before publication.

## 4. Fact-check ledger

| Claim | Status | Source |
|---|---|---|
| Rampage Open Air 2027, Lommel | Confirmed, but dates wrong (B1) | rampage.eu/news/rampage-open-air-2027 |
| Kristalpark | Supported for 2025 | VRT 2025 |
| 66,000 visitors in 2025, a record | Confirmed | VRT 2025 |
| About 55,000 in 2026 | Forecast only (B2) | VRT 2026 |
| Rampage Weekend 2027 | Source exists, dates wrong (B3) | rampage.eu/news/rampage-weekend-2027 |
| Let It Roll 5 to 7 August 2027, 18+ | Confirmed | letitroll.cz, letitroll.eu |
| Biggest D&B festival in the world, 25,000+ | Confirmed as an organiser claim | letitroll.eu |
| Former open-cast mine | No source (M5) | none |
| Liquicity 23 to 25 July, Geestmerambacht, 18+ | Confirmed | festival.liquicity.com FAQ |
| Near Alkmaar, recreation lake | No source (m6) | none |
| Outlook Origins 22 to 26 July, Tisno, boat parties | Confirmed | outlookorigins.com |
| Outlook genre list | Not on the page (m5) | none |
| Hospitality on the Beach 30 June to 5 July | Listed | Technoairlines |
| Netsky on Hospital; Liquicity in Diemerbos 2015 | No source (M3) | none |
| Sun and Bass since 2004; 5 to 12 Sept 2026 | Confirmed | sunandbass.net |
| Beyond Mars 3 to 7 June, South Glos | Listed; "near Bristol" contradicted (M4) | Technoairlines |
| WAH Malta 29 April to 2 May, Sub Focus | Listed; end date conflict (m7) | Skiddle |
| LOCUS Bali 17 to 20 June, Nuanu, 18+ | Ticketing site only (B5) | TicketFairy |
| DnB Allstars Phuket | Wrong: 22 to 24 Jan, 20+ (B4) | Megatix |
| Hospitality in the Park ended | Wikipedia only (M2) | none acceptable |
| Boomtown has dnb stages within a wider festival | Supported | site's Boomtown guide |

## 5. SEO preservation

- The title, H1 and banner carry "drum and bass festivals". The intro carries "dnb festivals", and "dnb festival" appears in the keyword file. The keyword audit passes. None of the fixes above removes a tracked phrase. B1 changes the description but keeps "drum and bass festivals".
- §0 grep evidence on the built page (2,100 words):
  - "full": 1 ("last full week of July", a calendar use; reworded in m3).
  - "whole": 1 (criterion; changed in M1).
  - "jungle": 1 (the link to the dnb guide, fine on a dnb page).
  - "Wikipedia": 1 (Sources; M2).
  - "pictured": 1 (staging; M3).
  - "breaks": 3 (the site's own promotion block).
  - em dash, en dash, "not X but", "matters", "the point", "keyword", "research": 0.
- Humanizer record: staging ("It depends on how you count", "pictured below"), one not-X-but-Y ("more than a weekend on a site") and one closer ("It is the late-summer choice") were flagged. The closer is acceptable as a "best for" line. The rest are fixed above.
- Banner and FAQ comparison: once B1 and B3 are applied, the answer box, description, table, body and FAQ agree on every date. Before the fixes they disagree on Rampage (from 1 July vs 1 to 4 July) and Rampage Weekend.

## 6. Coverage gaps

- None of the gaps blocks publication. The UK coverage is thin (one festival) but is handled with a link to the UK guide.
- Hospitality's other events (for example Hospitality in the Dock) are not mentioned. That is fine for 2027 unless the owner finds a dated edition.

## 7. Cuts or merges

- Cut the Netsky sentence (M3) and the duplicate calendar sentence (m4).
- No sections need merging.

## 8. Media actions

- Move or drop the Netsky figure (M3) and trim its caption.
- `media/best-drum-and-bass-festivals.json` should name each Commons source file, as the techno review also asked.
- No reuse from other guides: the md5 check found no matches.

## 9. Unresolved questions

- Is the mine history of Jezero Most to be sourced or dropped? (M5)
- Is there a Hospital Records page on Hospitality in the Park? (M2)
- WAH Malta: does it end on 2 or 3 May? (m7)
- Liquicity "near Alkmaar": keep it or generalise it? (m6)

## 10. Final acceptance checklist

- [ ] B1 to B5 applied in the draft and the generator (table, answer, description and FAQ).
- [ ] M1 to M6 applied, or the owner's decision recorded.
- [ ] Sources list reorganised (own site, listed, past editions; no Wikipedia).
- [ ] Rebuild, then confirm by grep that "From 1 July", "5 to 7 March" and "22 January 2027" are gone.
- [ ] Keyword, media and banned-phrase audits still pass. All three passed on the pre-fix build.
- [ ] `npm run check:html`, `node audit-all.mjs`, `npm run check:layout` and `npm run check:links` pass.
- [ ] Stage 6 owner read.
