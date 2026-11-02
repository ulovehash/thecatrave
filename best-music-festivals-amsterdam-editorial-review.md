# Best music festivals in Amsterdam 2027 editorial review

Reviewed 2026-11-02 against `best-music-festivals-amsterdam-draft.md`, `build-amsterdam-festivals-article.mjs`, `keywords/best-music-festivals-amsterdam.json`, `media/best-music-festivals-amsterdam.json`, `next-festival-roundups-proposal.md` and the built `best-music-festivals-amsterdam.html`. Independent of the writer. Cross-checked against this site's `dekmantel-festival.html`, `awakenings-festival.html`, `mysteryland-festival.html`, `amsterdam-dance-event.html`, `defqon-1.html`, `best-techno-festivals.html` and `best-techno-festivals-editorial-review.md`.

## 1. Verdict
Blocked until revisions. The structure, the clash note, the "Not on this list" reasons and the image choices are sound, and the §0 language greps are clean. Two Blockers stand: one festival (909) has no source anywhere the reviewer could open, and Loveland is called the longest-running name on a list that also carries Mysteryland (1993). Eight Majors follow, mainly ADE's date status, AMF's Wikipedia-only history, two "first" claims the calendar contradicts, a table that omits Awakenings, and a page with no festival set at all. With the Blocker and Major wording below applied and rebuilt, the page is ready, subject to the owner's calls in section 9. Stage 6 validation was not run for this topic.

## 2. What already works
- Verified on organiser pages opened for this review: Dekmantel 29 July to 2 August 2027 at the Amsterdamse Bos, Dekmantel Selectors 19 to 23 August at The Garden, Tisno, and Lente Kabinet 15 and 16 May at Het Twiske, Oostzaan (all dekmantel.com/events/dekmantel-festival-2027); Loveland 14 and 15 August 2027 in Sloterpark (loveland.nl/festival); Wonderfeel 9 to 11 July 2027, "a three-day outdoor festival for classical music" (wonderfeel.nl); Mystic Garden moving to Horsterwold in Zeewolde as a weekender in 2026, after Amsterdam since 2012 (FestivalInfo news 56759); Kingsland at the Olympisch Stadion on Tuesday 27 April 2027 (FestivalInfo 37304); AMF 2026 on Saturday 24 October at the Johan Cruijff ArenA (FestivalInfo 36321).
- Verified against this site's guides: DGTL 26 to 28 March, founded 2013 by Apenkooi at NDSM (techno review ledger); Awakenings Upclose 15 and 16 May at Houtrak and Awakenings 9 to 11 July at Beekse Bergen, Hilvarenbeek (Awakenings guide); Mysteryland 27 to 29 August 2027 in Haarlemmermeer after a paused 2026 (Mysteryland guide); Defqon.1 24 to 27 June 2027 at Biddinghuizen (Defqon.1 guide); ADE 20 to 24 October 2027 (ADE guide); Dekmantel 2026 as the 12th edition (dekmantel.com).
- The Lente Kabinet and Awakenings Upclose clash on 15 and 16 May is real and is the only one in the city calendar.
- "Not on this list" gives real reasons. Wonderfeel and Mystic Garden are fair exclusions.
- No dnb or jungle angle. `breaks` appears only in the owner's own disclosed promotion blocks.
- Both images are new to this page (md5 checked against every `-1200.webp` in `img/`), and appear only here and on its own cards in `index.html`, `articles.html` and `home-articles.mjs`.
- The FAQ JSON matches the visible FAQ, all four questions (checked by script on the built page).

## 3. Priority revisions

Generator means `build-amsterdam-festivals-article.mjs`. Everything else is in the draft.

### Blocker

**B1. 909 has no source.** The Sources line says "Lentekabinet and 909: the organisers' own sites" with no link. Lente Kabinet is now sourced (dekmantel.com, see M6). For 909, neither 909festival.nl nor 909festival.com resolved, and no other page on the site mentions it. Its venue, its 2027 dates and its sound are all unsupported. The writer must add the URL that gives 5 and 6 June 2027 and the Amsterdamse Bos to `sourcesHtml`. If no organiser page can be opened, remove 909 from the page with these edits:
- Old: "DGTL and Dekmantel are the two to plan around, and Awakenings Upclose and 909 add smaller dates in May and June. All four mix techno with house to some degree, Dekmantel most of all."
- New: "DGTL and Dekmantel are the two to plan around, and Awakenings Upclose adds a smaller date in May. All three mix techno with house to some degree, Dekmantel most of all."
- Delete the whole `### 909, Amsterdamse Bos` subsection (heading and paragraph). Keep `![Listening](figure:first-mix)` where it is, after the Awakenings Upclose paragraph.
- Generator table, delete: `['909', 'Amsterdamse Bos', '5 and 6 June', 'Techno, house', 'Woodland park', 'An early summer weekend'],`
- FAQ, old: "Loveland, Lentekabinet, Awakenings Upclose and 909 fill the months between."
- New: "Loveland, Lente Kabinet and Awakenings Upclose fill the months between."
- FAQ, old: "Yes. DGTL at NDSM Docklands, Dekmantel and 909 in the Amsterdamse Bos, and Awakenings Upclose at Houtrak all book techno"
- New: "Yes. DGTL at NDSM Docklands, Dekmantel in the Amsterdamse Bos and Awakenings Upclose at Houtrak all book techno"
- Sources, old: "<li>Lentekabinet and 909: the organisers' own sites.</li>" (see M6 for the replacement).

**B2. Loveland is not the longest-running name on the list.** Mysteryland, in the table and in the "near Amsterdam" section, began in 1993 (this site's Mysteryland guide), and ADE in 1996. The cited loveland.nl/festival page does not give 1995 either.
- Old: "Loveland has run since 1995 and holds its summer festival in Sloterpark, on the west side of the city. The 2027 edition is on 14 and 15 August. It is the longest-running name on this list."
- New: "Loveland holds its summer festival in Sloterpark, on the west side of the city. The 2027 edition is on 14 and 15 August."
- If the writer opens a source for the 1995 start, the first sentence may read "Loveland has run since 1995 and holds its summer festival in Sloterpark, on the west side of the city." The superlative stays cut.

### Major

**M1. ADE's dates are confirmed, not listed, and the location count contradicts the ADE guide.** This site's ADE guide gives 20 to 24 October 2027 "according to the organisers' own FAQ" and "more than 1,200 events in over 300 locations". The draft relies on FestivalInfo, which says "bijna 300". Six edits.
- Old (AMF section): "The 2027 date has not been announced, but it falls inside ADE week, which is listed for 20 to 24 October 2027."
- New: "The 2027 date has not been announced, but it falls inside ADE week, which runs from 20 to 24 October 2027."
- Old (ADE section): "ADE is listed for 20 to 24 October 2027. It is five days of club nights, concerts and a conference, with more than 1,200 events at nearly 300 locations across the city, and AMF and DGTL's own ADE events sit inside it."
- New: "ADE 2027 is on 20 to 24 October. It is five days of club nights, concerts and a conference, with more than 1,200 events in over 300 locations across the city, and AMF is one of them."
- Old (FAQ): "AMF is held during the Amsterdam Dance Event, which is listed for 20 to 24 October 2027, and the 2026 edition was on 24 October."
- New: "AMF is held during the Amsterdam Dance Event, which runs from 20 to 24 October 2027, and the 2026 edition was on 24 October."
- Generator table, old: `'Listed 20 to 24 October'`
- New: `'20 to 24 October'`
- Generator `answer`, old: "In autumn: the Amsterdam Music Festival in the Johan Cruijff ArenA during ADE, listed for 20 to 24 October."
- New: "In autumn: the Amsterdam Dance Event (20 to 24 October), with the Amsterdam Music Festival in the Johan Cruijff ArenA on a date still to be announced."
- Generator sources, old: "<li>Listed dates: <a href=\"https://www.festivalinfo.nl/festival/37304/Kingsland-Festival-Amsterdam/2027/\" ...>FestivalInfo on Kingsland</a>, <a href=\"https://www.festivalinfo.nl/festival/37415/Amsterdam-Dance-Event/2027/\" ...>FestivalInfo on ADE</a> and <a href=\"https://www.festivalinfo.nl/festival/37100/Defqon-1/2027/\" ...>FestivalInfo on Defqon.1</a>.</li>"
- New: "<li>Kingsland's listed date and venue: <a href=\"https://www.festivalinfo.nl/festival/37304/Kingsland-Festival-Amsterdam/2027/\" target=\"_blank\" rel=\"noopener noreferrer\">FestivalInfo</a>.</li>" and add Defqon.1 and Awakenings to the own-guides line (see M6).
- "DGTL's own ADE events" is cut because no source on the page or in the ADE guide says so.

**M2. AMF's history rests on Wikipedia, and its genres do not match even that.** §0: Wikipedia is never the best source and a Wikipedia-only claim is qualified or cut. Wikipedia gives no source for the RAI venue or the 25,000 figure, and its infobox says "house, dance, trance and electro", not techno or hardstyle. FestivalInfo lists editions from 2013 and names the Johan Cruijff ArenA as co-organiser.
- Old: "The Amsterdam Music Festival, AMF for short, is the arena event of the Amsterdam Dance Event week. The first edition was held in 2013 at the RAI with 25,000 people, organised by ALDA and ID&T, and it moved to the Amsterdam ArenA, now the Johan Cruijff ArenA, in 2014. The music is mostly big-room house and dance music, with techno, trance and hardstyle in the mix."
- New: "The Amsterdam Music Festival, AMF for short, is the stadium event of the Amsterdam Dance Event week. It began in 2013 and is held at the Johan Cruijff ArenA, which co-organises it. The bill is built on big-name DJs from big-room house and dance music."
- Generator table, old: `'Big-room house, dance'` stays.
- Generator sources, old: "<li>AMF history: <a href=\"https://en.wikipedia.org/wiki/Amsterdam_Music_Festival\" ...>Wikipedia: Amsterdam Music Festival</a>; the 2026 edition: <a href=\"https://www.festivalinfo.nl/festival/36321/Amsterdam-Music-Festival/2026/\" ...>FestivalInfo</a>.</li>"
- New: "<li>AMF editions, venue and the 2026 date: <a href=\"https://www.festivalinfo.nl/festival/36321/Amsterdam-Music-Festival/2026/\" target=\"_blank\" rel=\"noopener noreferrer\">FestivalInfo</a>.</li>"
- If the owner wants the ALDA, ID&T and RAI history kept, the writer must open and cite the dance.nl announcement that Wikipedia references, not Wikipedia itself.

**M3. DGTL is not the first big date of the Dutch season.** This site's techno guide puts Verknipt at the Ziggo Dome on 5 March 2027.
- Old: "The 2027 edition is on 26 to 28 March, which makes it the first big date of the Dutch season."
- New: "The 2027 edition is on 26 to 28 March, the first date on this list."

**M4. Lente Kabinet does not open the outdoor season.** DGTL in March and Kingsland on 27 April are both earlier. The organiser is the Dekmantel team (dekmantel.com lists it among its own events), and the festival spells its name "Lente Kabinet".
- Old: "### Lentekabinet, Het Twiske" / "Lentekabinet opens the outdoor season in Het Twiske, a nature area of lakes and meadows just north of Amsterdam. The 2027 edition is on 15 and 16 May."
- New: "### Lente Kabinet, Het Twiske" / "Lente Kabinet is the Dekmantel team's spring festival, held in Het Twiske, a nature area of lakes and meadows at Oostzaan, just north of Amsterdam. The 2027 edition is on 15 and 16 May."
- Replace "Lentekabinet" with "Lente Kabinet" everywhere else: the at-a-glance line, the house H2 lead, How to choose, the generator `answer` and the table row `['Lentekabinet', ...]`. No keyword term depends on the spelling.

**M5. The table omits Awakenings,** which the page covers in two sections and the FAQ. Insert by date, after Lente Kabinet and Upclose rows (or after 909 if B1 keeps it).
- Generator, insert: `['Awakenings', 'Hilvarenbeek', '9 to 11 July', 'Techno', 'Recreation area', 'The main Awakenings weekend'],`

**M6. Sources are incomplete.** Lente Kabinet has no link, and Awakenings and Defqon.1 should point to this site's guides.
- Generator, old: "<li>Lentekabinet and 909: the organisers' own sites.</li>"
- New: "<li>Lente Kabinet: <a href=\"https://www.dekmantel.com/events/dekmantel-festival-2027\" target=\"_blank\" rel=\"noopener noreferrer\">Dekmantel's events page</a>, which also gives Dekmantel Selectors.</li>" plus the 909 source from B1 if kept.
- Generator, old: "<li>Mysteryland, ADE and Dekmantel: this site's guide to each, linked above, which cites its own sources.</li>"
- New: "<li>Mysteryland, ADE, Dekmantel, Awakenings and Defqon.1: this site's guide to each, linked above, which cites its own sources.</li>"

**M7. "Early July is quiet ... because" is an unsupported cause.**
- Old: "Early July is quiet in the city, because the big Dutch weekends then, Awakenings among them, are held elsewhere in the country."
- New: "Nothing on this list is in the city between early June and the end of July. Awakenings, on 9 to 11 July, is near Tilburg."
- If B1 cuts 909, use: "Nothing on this list is in the city between mid-May and the end of July. Awakenings, on 9 to 11 July, is near Tilburg."

**M8. The page has no festival set.** Every other roundup carries at least one set from a festival on its list (`build-canada-`, `-uk-`, `-australia-`, `-europe-festivals-article.mjs`; defect `festival-guides-listening-without-view-evidence`). Here every listening block is the owner's own promotion. Recommended: Job Jobse at Dekmantel 2024, from the Dekmantel channel, 297,672 views in `selector-data.json` (the most-viewed Dekmantel item in the catalogue), tagged house, techno, trance, and used on no other page (grep of `*.html` and `*.mjs`). oEmbed was not run in this review; the writer must run it and record the returned title before publishing, and correct `title` to match it.
- Draft, after the Dekmantel paragraph and before `### Awakenings Upclose, Houtrak`, insert: "This is Job Jobse at Dekmantel in 2024, from the festival's own channel.", blank line, `![Listening](figure:dekmantel)`
- Generator `media`, add: `dekmantel: singleSet({ label: 'Dekmantel, heard from home', description: 'Job Jobse at Dekmantel, 2024, filmed by the festival.', youtubeId: 'NB3RQmZbKmA', genre: 'Dekmantel, 2024', artist: 'Job Jobse', title: 'Dekmantel 2024' }),` and add `singleSet` to the import.
- `media/best-music-festivals-amsterdam.json`, `note`, old: "Listening blocks are the shared roundup defaults."
- New: "Set: Job Jobse at Dekmantel 2024 (Dekmantel channel, NB3RQmZbKmA, 297,672 catalogue views). Other listening blocks are the shared roundup defaults."
- Adjacency: the NDSM figure is followed by the Dekmantel heading and paragraph before the set, and the set is followed by the Upclose paragraph (and 909, if kept) before the first own mix. §7 holds.

### Minor

**m1. The intro overstates "inside the city" and the tram.** Houtrak, Het Twiske, the Amsterdamse Bos and Haarlemmermeer are outside the city limits, DGTL is a ferry ride and Dekmantel a shuttle.
- Old: "Most of these festivals take place inside the city, in parks, woods and old docklands, so you can sleep in a hotel and take a tram home."
- New: "Most of these festivals take place in or just outside the city, in parks, woods and old docklands, so you can sleep in a hotel and be back the same night."

**m2. A not-X-but-Y line.**
- Old: "It is not a festival site but a city-wide week, and the [ADE guide](/amsterdam-dance-event) covers how to plan it."
- New: "The events are spread across the city's clubs, venues and arenas, and the [ADE guide](/amsterdam-dance-event) covers how to plan it."

**m3. Wonderfeel's "and" should be "but".**
- Old: "It appears on lists of Dutch summer festivals, and it is a classical music festival, on 9 to 11 July 2027."
- New: "It appears on lists of Dutch summer festivals, but it is a classical music festival, on 9 to 11 July 2027 near Baarn."

**m4. FAQ superlative.** No source ranks these three as the biggest; Mysteryland is larger.
- Old: "DGTL in March, Dekmantel in late July and the Amsterdam Music Festival during ADE in October are the three biggest names."
- New: "DGTL in March, Dekmantel in late July and the Amsterdam Music Festival during ADE in October are the main dates of the year."

**m5. The calendar line skips Dekmantel.**
- Old: "March, May, August and October each have a reason to come, and ADE week is the busiest time of year for hotels."
- New: "March, May, the end of July, August and October each have a reason to come, and ADE week is the busiest time of year for hotels."

**m6. Awakenings is introduced twice with dates and the same link.** Trim the techno-section copy and leave the full line in the "near Amsterdam" section.
- Old: "The main Awakenings festival is in Hilvarenbeek, near Tilburg, on 9 to 11 July, and the [Awakenings guide](/awakenings-festival) explains the difference."
- New: "The main Awakenings festival is in Hilvarenbeek in July, covered below."

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| 909 in the Amsterdamse Bos, 5 and 6 June 2027 | Date, venue | None opened; 909festival.nl and .com did not resolve | Unsupported | B1 |
| Loveland since 1995, longest-running on the list | History, superlative | loveland.nl/festival silent; Mysteryland guide gives 1993 | False as written | B2 |
| Loveland 14 and 15 August, Sloterpark | Date, venue | loveland.nl/festival | High | Keep |
| ADE 20 to 24 October 2027 | Date | ADE guide, organiser FAQ | High | M1, not "listed" |
| ADE over 300 locations | Figure | ADE guide (ADE programme); FestivalInfo says nearly 300 | Medium | M1, follow the organiser |
| DGTL's own ADE events | Fact | None | Unsupported | Cut, M1 |
| AMF 2013 at RAI, 25,000, ALDA and ID&T, ArenA 2014 | History | Wikipedia only; RAI and 25,000 uncited there | Low | M2 |
| AMF techno and hardstyle | Genre | None; Wikipedia says house, dance, trance, electro | Unsupported | M2 |
| AMF 2026 on 24 October, Johan Cruijff ArenA | Date | FestivalInfo 36321 | High | Keep |
| DGTL 26 to 28 March, 2013, Apenkooi, NDSM | Date, history | dgtl-festival.com via techno review | High | Keep |
| DGTL first big date of the Dutch season | Superlative | Contradicted by Verknipt, 5 March (techno guide) | False | M3 |
| Dekmantel 29 July to 2 August, Selectors 19 to 23 August | Date | dekmantel.com events page | High | Keep |
| Dekmantel 2026 was the 12th | History | dekmantel.com article cited by its events page | High | Keep |
| Lente Kabinet 15 and 16 May, Het Twiske, Oostzaan | Date, venue | dekmantel.com events page | High | M4 |
| Lente Kabinet opens the outdoor season | Superlative | Contradicted by DGTL and Kingsland | False | M4 |
| Lente Kabinet "House, techno, dance" | Genre | None opened | Low | Section 9 |
| Awakenings Upclose 15 and 16 May, Houtrak; Awakenings 9 to 11 July, Hilvarenbeek | Date, venue | Awakenings guide; awakenings.com in sources | High | Keep |
| Kingsland Olympisch Stadion, Tuesday 27 April 2027 | Date, venue | FestivalInfo 37304, status not stated | Medium | Keep as listed |
| Kingsland "Dance music" | Genre | FestivalInfo names no genre | Low | Section 9 |
| Mysteryland 27 to 29 August 2027, skipped 2026 | Date | Mysteryland guide | High | Keep |
| Defqon.1 24 to 27 June 2027, Biddinghuizen | Date | Defqon.1 guide (Q-dance) | High | Keep, M6 |
| Mystic Garden to Zeewolde in 2026 | Status | FestivalInfo news 56759 (Horsterwold, Zeewolde, 21 to 23 August 2026) | High | Keep |
| Wonderfeel classical, 9 to 11 July 2027 | Date, genre | wonderfeel.nl | High | m3 |
| Early July quiet because the big weekends are elsewhere | Causal | None | Unsupported | M7 |
| NDSM a short ferry ride from Centraal | Practical | Stable public fact | High | Keep |

## 5. SEO preservation

- Title, H1, slug and every term in `keywords/best-music-festivals-amsterdam.json` survive the fix wording. The H2s that carry `techno festivals in amsterdam`, `amsterdam music festival` and `music festivals netherlands` are unchanged. B1 removes no keyword phrase.
- `node audit-banned-phrases.mjs` passed (8 rules, 285 pages). `node audit-keywords.mjs` passed (1,518 terms, 271 pages). `node audit-media.mjs` passed (271 guides). All need re-running after the edits. The build and `audit-all.mjs` were not run.

**§0 greps on built body text (2,120 words).** complete 0; full 0; whole 1 ("The whole city is out that day", about King's Day, stays); uninterrupted 0; an hour 0; in full 0; jungle 0; drum and bass 0; dnb 0; breaks 3, all in the owner's playlist and mix blurbs (own promotion, stays); Wikipedia 1, in Sources (M2 removes it); not X but 2, "not a festival site but a city-wide week" (m2) and the AMF "and not a weekend in a field" clause, which reads as a plain choice and stays; matters 0; the point 0; em dash 0; en dash 0; ahrefs, keyword, planner, research, verified, fact-check, checked 0; start to finish, one piece, as it was played 0; minutes 0; hours 0; stock AI vocabulary (crucial, vibrant, pivotal, landscape, testament, delve, enduring, iconic, legendary) 0. listed 10: Kingsland, ADE and the criteria and advice lines; M1 removes the ADE ones. Production teaching: none.

**Humanizer record.** No record was supplied. A pass was made here in report mode. Three sentences changed:
- "It is the longest-running name on this list." Cut (B2), a one-line closer that is also false.
- "It is not a festival site but a city-wide week" becomes "The events are spread across the city's clubs, venues and arenas" (m2).
- "Lentekabinet opens the outdoor season in Het Twiske" becomes "Lente Kabinet is the Dekmantel team's spring festival, held in Het Twiske" (M4).
Checked and kept: "The whole city is out that day, so book a bed early." Plain advice. "AMF is one night in a stadium, so it suits people who want the big names and the production, and not a weekend in a field." Plain. "Pick the kind of day you want first." Shared with the other roundups' How to choose, an accepted series pattern.

**Banner, section and FAQ comparison.** The banner and intro share no sentence (both open on the year's shape but in different words). The banner and FAQ 1 share only festival names and months. FAQ 2 repeats the AMF section's two facts in a new sentence; acceptable for a date question.

## 6. Coverage gaps

- Jungle Weekender was named in the approved structure (`next-festival-roundups-proposal.md`) and is absent, with no line in "Not on this list". The owner should say whether it was dropped on purpose. If it is added, it must be described for what it books and not given a dnb angle beyond that.
- The approved structure had an H2 "Where are the EDM festivals in Amsterdam?" (`edm festivals amsterdam`) and "Electronic music festivals outside the city". The draft folds both into other headings; the keyword audit still passes. Owner's call, no fix required.
- Stage 6 was not run.

## 7. Cuts or merges

- Cut "It is the longest-running name on this list" (B2) and "DGTL's own ADE events" (M1).
- 909 is cut only if no source is found (B1).
- The Awakenings repeat is trimmed (m6). No section should be cut otherwise.

## 8. Media actions

| Item | Source | Licence | Result |
|---|---|---|---|
| NDSM Docklands panorama 2025 | Commons, file name not recorded | CC BY-SA 4.0, PA0CCB (per caption and media record) | File page not read in this review |
| Het Twiske 2019 | Commons, file name not recorded | CC BY-SA 4.0, PersianDutchNetwork | File page not read in this review |
| Job Jobse at Dekmantel 2024 (proposed) | Dekmantel YouTube, NB3RQmZbKmA | Embed | M8; oEmbed to run |

- Add both Commons file names to `media/best-music-festivals-amsterdam.json`, which names no source file, so a later reviewer can read the licence pages.
- Both images are unique by md5 and used only on this page and its own cards.
- No figure is adjacent to an embed now or after M8.
- Own playlist, two own mixes, own track and the Bandcamp block stay (own promotion).

## 9. Unresolved questions

1. **909 (B1).** Supply a source, or approve the cut.
2. **Kingsland's place on the list.** The first test is that electronic or dance music is at the centre of the programme. FestivalInfo calls Kingsland "the music festival" with live acts and DJs and names no genre. If its bill is mainly Dutch pop and hip-hop, it belongs under "Not on this list". The writer should open a recent lineup before publishing.
3. **Lente Kabinet's sound.** The table's "House, techno, dance" has no source. Confirm from a lineup or change to the organiser's own description.
4. **Jungle Weekender** (section 6).
5. **Published Dekmantel guide is stale (not edited).** `dekmantel-festival.html` still says "Dekmantel's own site has not confirmed 2027 dates yet" and gives the listed 28 July to 1 August. dekmantel.com now gives 29 July to 2 August 2027. The techno review already proposed the replacement wording; this page links to that guide, so the two disagree on the same date until it is fixed. It should go into `defects.json` with that fix.
6. **M8 set choice.** Job Jobse is recommended because it is the most-viewed unused Dekmantel item. Four Tet at The Loop (E4NXVs4SlhE) is on the Europe and Dekmantel guides already.

**Internal links**

| Target | Status |
|---|---|
| /best-techno-festivals, /dekmantel-festival, /awakenings-festival, /amsterdam-dance-event, /mysteryland-festival, /defqon-1, /best-electronic-music-festivals-europe, /best-clubs-in-amsterdam | Live |

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Dates | Fail until M1 | ADE shown as listed; all other dates match sources in section 4 |
| Reader claims | Fail until B2, M2, M3, M4, M7 | Section 4 |
| Sources | Fail until B1, M2, M6 | 909 and Lente Kabinet unlinked; Wikipedia in Sources |
| Em and en dashes | Pass | Grep 0 and 0 on built text |
| Check dates and process commentary | Pass | Grep for research, verified, checked, keyword, planner: 0 |
| Wikipedia in body | Fail until M2 | 1 hit, Sources list |
| Emphasis on a set being whole | Pass | full, complete, in one piece 0; "whole" is about King's Day |
| dnb angle | Pass | jungle, drum and bass, dnb 0; breaks only in own promotion |
| Production teaching | Pass | No such copy |
| 2027 dates on every festival | Pass | Every entry has a 2027 date or "not announced" (AMF) |
| Table, answer, description, FAQ agree | Fail until M1, M5 | ADE "listed" in table, answer and FAQ; Awakenings missing from the table |
| Keywords | Pass | audit-keywords passed |
| Media licences | Not checked | File names not recorded; section 8 |
| Media placement | Pass | audit-media passed; no figure next to an embed |
| Festival set | Fail until M8 | No set from a listed festival |
| FAQ schema | Pass | Script compared all four JSON answers with visible text |
| Stage 6 | Not run | Not in scope for this review |
