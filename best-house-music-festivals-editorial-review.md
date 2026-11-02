# Editorial review: best-house-music-festivals

Reviewed 2026-11-02 against `best-house-music-festivals-draft.md`, `build-house-festivals-article.mjs` and the built `best-house-music-festivals.html`. The reviewer is independent of the writer. Everything below is checked against the draft as it stood at about 12:02 on 2 November 2026, so any later edit needs a re-review. Stage 6 (owner read) has not been run.

## 1. Verdict

**Blocked until revisions.** The Chicago, Detroit and Amsterdam spine is right, and the confirmed dates for Movement, DGTL, Loveland, Love International, Parklife and Bass Coast are correct. Two entries are wrong or unsupported.

- HRFST is not a deep house festival. Its own site lists techno, house, melodic, trance and disco. Its 2027 date (2 October 2027) is published, but the table says "Not announced". That also makes the FAQ "Is there a deep house festival?" false.
- The Afro Nation line rests on a source that could not be opened, and it carries process commentary ("when this list was made").

Five superlatives have no source, and two claims are written from memory. The page has no dnb angle, aside, link or Bandcamp line beyond the built-in block.

## 2. What already works

- The intro opens on Chicago, which is where a reader searching "house music festivals" expects to start. "chosen few picnic" (1000) gets its own H3 and FAQ.
- Undated festivals show their 2026 date as a guide, and the criteria say so. That is honest and useful.
- The Movement and Bass Coast photographs are new to the site and openly licensed (CC BY 4.0 and CC0).
- No em or en dashes, no tool names, no whole-set framing, no production teaching.
- The keyword, media and banned-phrase audits pass.

## 3. Priority revisions

### Blockers

**B1. HRFST is misdescribed and its date is out of date.** hrfst.nl redirects to geheimeliefde.nl/hrfst. That page gives "Datum: 2 oktober 2027" and "Locatie: Fort bij Vechten", at Achterdijk 12, Bunnik, 18+, and the music as "techno, house, melodic, trance en disco beats". "Deep house" is not on the page.
- L81. Old: "HRFST is a deep house festival at Fort Vechten, a fort at Bunnik, near Utrecht. The 2026 edition was on 3 October, and the 2027 date has not been announced. It is for ages 18 and over." New: "HRFST is a one-day festival at Fort bij Vechten, a fort at Bunnik, near Utrecht, with house alongside techno, melodic, trance and disco. The 2027 edition is on 2 October, for ages 18 and over."
- Table. Old: `['HRFST', 'Bunnik, near Utrecht', 'Not announced (3 October in 2026)', 'Fort', 'Deep house']` New: `['HRFST', 'Bunnik, near Utrecht', '2 October', 'Fort', 'A day in a fort']`
- FAQ L118 to L120: cut the question "Is there a deep house festival?" and its answer. No festival on the page supports it.
- Keyword file: "deep house festival" (100) can then no longer be placed truthfully, so remove it from `keywords/best-house-music-festivals.json` and record why. This is the owner's call: the keyword audit will fail if the phrase leaves the page while it stays in the file.
- Sources: replace the Follow the Beat link (403) with geheimeliefde.nl/hrfst on the "own site" line.
- Note: on the new description, HRFST is a weak fit for criterion 1 ("house is the core"). The owner may prefer to cut it. If so, also change "Three smaller festivals" at L71 to "Two smaller festivals".

**B2. Afro Nation: unsupported, with process commentary.** afronation.com returned 403, so "its programme is Afrobeats" is unverified. "appears in searches" and "when this list was made" describe the research, not the festival.
- L94. Old: "**Afro Nation.** It appears in searches for Afro house festivals, but its programme is Afrobeats, not Afro house. No festival given over to Afro house had published 2027 dates when this list was made." Two options:
  - New (if the owner sources the Afrobeats claim from the festival's own page): "**Afro Nation.** Its programme is built around Afrobeats rather than Afro house. No festival given over to Afro house has published 2027 dates."
  - New (if it is not sourced): cut the entry. The Defected line then stands alone.
- "afro house festival" (100) is tracked. If the entry is cut, the phrase leaves the page. Either keep the phrase in a sourced sentence or remove it from the keyword file. This is the owner's call.

### Major

**M1. Unsupported superlatives.**
- L5. Old: "Detroit's Movement opens the American season at the end of May," New: "Detroit's Movement comes at the end of May,"
- L27. Old: "Chicago and Detroit hold the three that matter most for house: ARC, the Chosen Few Picnic and Movement." New: "Chicago and Detroit have three of the festivals on this list: ARC, the Chosen Few Picnic and Movement."
- L49. Old: "The Netherlands has the densest run of house festivals in Europe, and Croatia has the longest week." New: "In Europe, the list has two festivals in Amsterdam and a week on the Croatian coast." (The Utrecht-area HRFST and Soenda sit in the smaller section.)
- L53. Old: "The 2027 edition is on 26 to 28 March, the earliest big house and techno date in Europe." New: "The 2027 edition is on 26 to 28 March, the earliest date on this list."
- L67. Old: "Parklife in Manchester is the biggest UK festival with house throughout its programme, though its line-up also takes in rap, pop and other dance music." New: "Parklife in Manchester has house through its programme, alongside rap, pop and other dance music."
- FAQ L116. Old: "Parklife in Manchester, on 10 and 11 July 2027, is the biggest UK festival with house through its programme." New: "Parklife in Manchester, on 10 and 11 July 2027, has house through its programme."

**M2. Loveland "since 1995" has no source.** loveland.nl does not say it.
- L57. Old: "Loveland has run since 1995 and holds its summer festival in Sloterpark," New: "Loveland holds its summer festival in Sloterpark,"
- Table "Best for". Old: `'A long-running city party'` New: `'A city park in August'`. Keep the old wording only if a source for the history is added.

**M3. Love International is described from memory.** Its FAQ says it "first took place in Croatia over 20 years ago". It does not name Tisno as the origin and it lists no genres.
- L61. Old: "It carries on from The Garden Festival, which began in Tisno more than 20 years ago, and it books house and disco through the week." New: "It carries on from The Garden Festival, which first took place in Croatia more than 20 years ago." Keep "house and disco" only with a source.

**M4. Bass Coast "on five stages" has no source.** basscoast.ca/pages/faq confirms 9 to 12 July 2027, Merritt and 19+, but not the stage count.
- L75. Old: "on 9 to 12 July 2027, on five stages, for ages 19 and over." New: "on 9 to 12 July 2027, for ages 19 and over."
- The draft's own wording ("a wide range of electronic music, house among it") means Bass Coast fails criterion 1. Either relax the criterion to "House music is a large part of the programme" or keep Bass Coast and accept the tension. This is the owner's call. Parklife has the same issue.

**M5. Two links point at unpublished pages.** `/best-music-festivals-amsterdam` (L53) and `/best-music-festivals-croatia` (L61) are untracked and have not been pushed. Publish those pages first, or in the same push. Otherwise the link check fails on `main`.

### Minor

**m1. Chosen Few line.** "It is a family day in a park more than a rave" is a not-X-but-Y construction and is not sourced.
- L35. Old: "It is a family day in a park more than a rave, and the one on this list closest to where the music started." New: "It is the festival on this list closest to where the music started."

**m2. Soenda wording.** "Latest" reads as past, but 21 November 2026 is still ahead.
- L85. Old: "The latest edition is on 21 November 2026, and the 2027 date has not been announced." New: "The next edition is on 21 November 2026, and the 2027 date has not been announced."
- Table. Old: `'Not announced (21 November 2026)'` New: `'Not announced (next: 21 November 2026)'`
- Sources: change soenda.com to soenda.net (the address it redirects to).

**m3. The calendar is repeated.** L100 restates L21. Keep L21 and change the start of L100. Old: "Then look at the calendar. The weekend of 10 and 11 July is crowded, with Parklife and Bass Coast on it, and the Chosen Few Picnic may land there too. Check dates" New: "Check dates"

**m4. Movement and techno.** "Detroit is the home of techno" is supported by the site's Movement guide ("Detroit techno"). It can stay.

## 4. Fact-check ledger

| Claim | Status | Source |
|---|---|---|
| Movement 29 to 31 May 2027, Hart Plaza, Memorial Day | Confirmed | movementfestival.com FAQ |
| Movement books techno and house | Supported | site's Movement guide |
| ARC 4 to 7 Sept 2026, Union Park, 18+, Labor Day | Confirmed | arcmusicfestival.com, site's ARC guide |
| Chosen Few 36th, 11 July 2026, 45,000, Jackson Park | Confirmed | chosenfewdjs.com |
| DGTL 26 to 28 March 2027, NDSM | Confirmed | dgtl-festival.com |
| Earliest in Europe | No source (M1) | none |
| Loveland 14 and 15 Aug 2027, Sloterpark | Confirmed | loveland.nl |
| Loveland since 1995 | No source (M2) | none |
| Love International 7 to 13 July, 5 stages, 2 boats | Confirmed | loveinternationalfestival.com |
| Began in Tisno; house and disco | Not on source (M3) | none |
| Parklife 10 and 11 July 2027, Heaton Park, 17+ | Confirmed | parklife.uk.com |
| Parklife biggest UK with house | No source (M1) | none |
| Bass Coast 9 to 12 July 2027, Merritt, 19+ | Confirmed | basscoast.ca FAQ |
| Bass Coast five stages | No source (M4) | none |
| HRFST deep house; 2027 not announced | Wrong (B1) | geheimeliefde.nl/hrfst |
| Soenda Indoor 21 Nov 2026, Werkspoorkathedraal, ~6,000, 18+ | Confirmed | soenda.net |
| Defected Croatia ended 2026 | Confirmed | Defected post |
| Afro Nation is Afrobeats | Unverified (B2) | none (403) |

## 5. SEO preservation

- The title, H1 and banner carry "house music festivals". "house festivals" and "best house music festivals" are in the H2s and the body, and "chosen few picnic" has its own H3 and FAQ. The keyword audit passes on the pre-fix build.
- B1 removes "deep house festival" (100) and B2 may remove "afro house festival" (100). The owner must decide whether to drop both from the keyword file, because otherwise the audit fails. No other fix touches a tracked phrase.
- §0 grep evidence on the built page (1,886 words):
  - "when this list was made": 1 (B2).
  - "breaks": 3 (own promotion block).
  - "drum and bass", "jungle", "dnb": 0.
  - em dash, en dash, "full", "whole", "not X but", "the point", "keyword", "research": 0.
  - "matter": 1 ("matter most", M1).
- Humanizer record:
  - Inflated or unsupported superlatives: five (M1).
  - not-X-but-Y: two ("more than a rave", "Afrobeats, not Afro house").
  - Process commentary: one (B2).
  - Staging: none.
- Banner and FAQ comparison: the answer box, description, table and FAQ agree on every confirmed date. HRFST is the only disagreement, because its source has moved on (B1).

## 6. Coverage gaps

- None of the gaps blocks publication.
- Ibiza is absent. That is defensible, since its house programme is club residencies rather than festivals.
- Once HRFST is corrected, the page has no deep house or Afro house festival. Say nothing about this rather than invent one.

## 7. Cuts or merges

- Cut the deep house FAQ (B1), and possibly the Afro Nation entry (B2).
- Cut the duplicate calendar sentence (m3).

## 8. Media actions

- None blocking.
- `media/best-house-music-festivals.json` should name each Commons source file.
- Only two photographs for ten festivals is thin but acceptable. The Chosen Few Picnic would be the strongest addition if an openly licensed image exists.

## 9. Unresolved questions

- Keep HRFST under its real description, or cut it? (B1)
- Source the Afro Nation claim, or cut the entry? (B2)
- What happens to "deep house festival" and "afro house festival" in the keyword file?
- Relax criterion 1 for Bass Coast and Parklife? (M4)

## 10. Final acceptance checklist

- [ ] B1 and B2 applied, with the owner's keyword-file decision recorded.
- [ ] M1 to M4 applied in the draft and generator (table, FAQ, Sources).
- [ ] The Amsterdam and Croatia guides published with or before this page (M5).
- [ ] Rebuild, then confirm by grep that "deep house festival", "when this list was made", "matter most" and "since 1995" are gone unless they have been sourced.
- [ ] Keyword, media and banned-phrase audits pass.
- [ ] `npm run check:html`, `node audit-all.mjs`, `npm run check:layout` and `npm run check:links` pass.
- [ ] Stage 6 owner read.
