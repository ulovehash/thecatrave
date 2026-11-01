# Best EDM festivals in Canada 2027 editorial review

Reviewed 2026-11-01 against `best-edm-festivals-canada-draft.md`, `build-canada-festivals-article.mjs`, `keywords/best-edm-festivals-canada.json`, `media/best-edm-festivals-canada.json` and the built `best-edm-festivals-canada.html`. Independent of the writer.

## 1. Verdict
Blocked until revisions. The structure, voice and keyword coverage are sound, and the §0 language greps are clean, but three Blockers stand, all reader-facing facts about the two festivals people will act on first. The page says resale is the only way into Shambhala, and Shambhala's own FAQ says it has no official resale platform. It marks VELD 2027 as provisional when the festival's own ticket page is selling it. It prints a VELD crowd figure that the named source does not contain. Nine Majors follow, mostly thin or misfiled sourcing, two media gaps, two false alt texts and one image licence that rests on an uploader's word. With the Blocker and Major wording applied, the page is ready for the owner.

Stage 6 of the topic process: an independent validator verdict exists for this topic in `TOPIC-DOSSIERS.md` (about line 2581). It covered topic selection, not this draft.

## 2. What already works
- The confirmed and listed distinction is stated in the criteria section and carried into the table. It is the right idea. VELD and FVDED are simply on the wrong side of it.
- Verified on the organiser's site as written: Shambhala 23 to 26 July 2027, Salmo River Ranch, 500 acres, six stages, 200+ artists, family-run, no sponsors, 1998 with about 500 people, 23,500 guests, crew and artists. Bass Coast 9 to 12 July 2027, Merritt, three hours from Vancouver, 19th year, five stages, 150+ DJs and producers, independent and artist-owned. MUTEK 28th edition, 24 to 29 August 2027.
- "Not announced" is true for Escapade and Piknic Électronik. Neither has published 2027 dates.
- Ile Soniq stays correctly labelled as listed. Its own site still shows 2026.
- The reasons in "Not on this list" are real, short and useful.
- All nine keyword terms read naturally. No section is written around a phrase.
- No dnb, jungle or breaks angle in the editorial copy. `breaks` appears only in the owner's own disclosed promotion.
- All images are new to this page, and the Ternion Sound embed is on the festival's own channel.

## 3. Priority revisions

Generator means `build-canada-festivals-article.mjs`. Everything else is in the draft.

### Blocker

**B1. "Resale is the only way in" is wrong for Shambhala, and it appears twice.** Shambhala's FAQ says it has no official resale platform, warns against third-party sellers, and offers its own online system for selling a ticket, a waitlist, and joining the crew as staff or a volunteer. As written, the page sends readers towards the third-party market the festival warns about. "Listed as sold out" is also too soft: the festival says its 2027 tickets are officially sold out.
- Old (line 79): "Shambhala Music Festival runs on 23 to 26 July 2027 at Salmo River Ranch, a 500-acre farm in Salmo, and the 2027 edition is already listed as sold out."
- New: "Shambhala Music Festival runs on 23 to 26 July 2027 at Salmo River Ranch, a 500-acre farm in Salmo, and the 2027 edition has sold out. The ways in now are the festival's waitlist, a ticket sold on through its own online system, or joining its crew as staff or a volunteer."
- Old (line 116): "Bass Coast is the easier camping ticket, because Shambhala 2027 is sold out and resale is the only way in."
- New: "Bass Coast is the easier camping ticket, because Shambhala 2027 has sold out."
- Old (line 134): "It is on 23 to 26 July 2027 at Salmo River Ranch in British Columbia. Tickets are listed as sold out, so resale is the only way in."
- New: "Shambhala runs from 23 to 26 July 2027 in British Columbia. It has sold out, so your options are its waitlist, its own ticket system or working on the crew."

**B2. VELD 2027 is marked provisional when the festival is selling it.** The page's rule is that a date from the festival's own site is confirmed. https://www.veldmusicfestival.com/ prints Downsview Park and "July 30 - 31, August 1", and https://veld.frontgatetickets.com/ lists "2027 VELD" at Downsview Park, Friday to Sunday, with 3-day passes and "VELD early bird pre-sale is now sold out". The save-the-date line is out of date. Five edits.
- Old (line 43): "VELD is held at Downsview Park in the north of Toronto, and is listed for 30 July to 1 August 2027 by Live Nation. The festival itself is showing a save-the-date and a waitlist for 2027."
- New: "VELD is held at Downsview Park in the north of Toronto, and the 2027 edition is on 30 July to 1 August. Early-bird passes have sold out, and the festival is taking sign-ups for the next release."
- Generator banner, old: "VELD in Toronto (listed for 30 July to 1 August)"
- New: "VELD in Toronto (30 July to 1 August)"
- Generator table, old: `'Listed 30 July to 1 August'`
- New: `'30 July to 1 August'`
- Old (line 116): "Toronto and Montreal are a short flight apart, and in 2027 the two festivals are listed one week apart, so you could do both."
- New: "Toronto and Montreal are a short flight apart, and in 2027 Ile Soniq's listed dates fall one week after VELD, so you could do both."
- Sources line: see M4.

**B3. "Nearly 50,000 a year" has no source, and the size comparison mixes measures.** The claim is credited to listings, and Technoairlines carries no such number. A yearly total of 50,000 is also hard to square with a three-day festival that estimates put at 30,000 or more a day. Published estimates conflict, so the figure goes. Separately, 76,000 is a two-day total and 23,500 is the number on site, so "smaller in numbers" compares unlike things, and the Ile Soniq figures came from the festival itself (the Montreal Times piece is marked as supplied by îLESONIQ). The comparison that holds is 43,000 on the best day against 23,500.
- Old (line 29): "Ile Soniq has the biggest published count: about 76,000 people over two days in 2025, with 43,000 on the Saturday. VELD is often called the largest in Canada and listings put it at nearly 50,000 a year, but the festival gives no recent official figure. Shambhala is smaller in numbers and much longer, with 23,500 guests, crew and artists across four days."
- New: "Ile Soniq has the biggest published count. The festival reported about 76,000 people over two days in 2025, with 43,000 on the Saturday, its largest single day. VELD is often called the largest in Canada, but it gives no recent official figure. Shambhala says it has 23,500 guests, crew and artists on site, a little over half Ile Soniq's best day, and it lasts four days."
- Generator table, old: `'Nearly 50,000 a year (listing)'`
- New: `'Three days, no official figure'`

### Major

**M1. FVDED's month comes from its own site, and the section is one sentence.** https://www.fvdedinthepark.com/ prints "fvded 2027", "SIGN UP FOR 2027" and "July 2027 - Holland Park, BC". By the page's rule that is confirmed, and it is missing from the sources.
- Old (line 95): "FVDED in the Park is listed for July 2027 at Holland Park in Surrey, and it is the big-stage option close to Vancouver."
- New: "FVDED in the Park returns to Holland Park in Surrey in July 2027, and it is the big-stage option close to Vancouver. The exact days are not out yet. It ran over two days in early July in 2024 and 2025."
- Generator table, old: `'Listed for July'`
- New: `'July, days not announced'`

**M2. "Other Toronto events" names nothing, and tells the reader to go elsewhere.** A section with no named event adds no idea, and "Ontario's other names" names none either. Electric Island is the obvious fit: a multi-stage electronic open-air series, in its 14th season in 2026 (NOW Toronto listings for Woodbine Park in May, the Portlands in June and dates in August).
- Old (line 39): "Toronto EDM festivals start with VELD, and Ontario's other names are smaller."
- New: "Toronto EDM festivals start with VELD. Electric Island is the smaller city option, and Ontario's other big name, Escapade, is in Ottawa."
- Old (line 47): "### Other Toronto events"
- New: "### Electric Island, Toronto"
- Old (line 49): "Toronto's other electronic events run through the summer on a smaller scale, mostly as day parties and one-off concerts. Check local listings close to your dates, as the programme changes each year."
- New: "Electric Island is an open-air concert and picnic series with several electronic stages. It ran its 14th season in 2026, from May to August, at Woodbine Park and in the Portlands. The 2027 dates have not been announced."
- Generator table, add as the first row: `['Electric Island', 'Toronto, Ontario', 'Not announced (May to August in 2026)', 'Electronic', 'A season of day events', 'A day out in the city'],`

**M3. "Not published here" is a note to self, and "Edition 28" is not scale.** Same fault as M5 in the psytrance review.
- Generator table, Escapade, old: `'Not published here'`. New: `'Three days in 2026'`.
- Generator table, FVDED, old: `'Not published here'`. New: `'Two days'`.
- Generator table, Chasing Summer, old: `'Not published here'`. New: `'About 30,000 a year (2023 report)'`.
- Generator table, MUTEK, old: `'Edition 28'`. New: `'Six days'`.
- Old (line 105): "Chasing Summer is the Calgary EDM festival, held at Max Bell Centre and called Alberta's largest outdoor EDM festival."
- New: "Chasing Summer is the Calgary EDM festival, held at Max Bell Centre and called Alberta's largest outdoor EDM festival, with a reported 30,000 people a year in 2023."

**M4. The sources list says something false and misses half the claims.** It files Piknic Électronik and Escapade under "2027 dates from each festival's own site", and neither has published any. VELD belongs in that line. FVDED, Shambhala's history and Chasing Summer's crowd have no source at all.
- Old: the `<ul>` at generator lines 82 to 87.
- New:
```
sourcesHtml: `<ul>
<li>2027 dates from each festival's own pages: <a href="https://www.shambhalamusicfestival.com/" target="_blank" rel="noopener noreferrer">Shambhala</a>, <a href="https://www.basscoast.ca/" target="_blank" rel="noopener noreferrer">Bass Coast</a>, <a href="https://montreal.mutek.org/" target="_blank" rel="noopener noreferrer">MUTEK</a>, <a href="https://www.veldmusicfestival.com/" target="_blank" rel="noopener noreferrer">VELD</a> and <a href="https://veld.frontgatetickets.com/" target="_blank" rel="noopener noreferrer">its ticket page</a>, <a href="https://www.fvdedinthepark.com/" target="_blank" rel="noopener noreferrer">FVDED in the Park</a> (month only).</li>
<li>2026 dates, with 2027 not announced: <a href="https://www.piknicelectronik.com/" target="_blank" rel="noopener noreferrer">Piknic Électronik</a>, <a href="https://613today.ca/events/2026-06-26-escapade-music-festival" target="_blank" rel="noopener noreferrer">Escapade</a>, <a href="https://nowtoronto.com/event/electric-island-2026-season-opener/" target="_blank" rel="noopener noreferrer">Electric Island</a>.</li>
<li>Listed dates: Live Nation, Ticketmaster and Discotech (Ile Soniq), Frontstage (Chasing Summer).</li>
<li>Scale: <a href="https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/" target="_blank" rel="noopener noreferrer">Montreal Times, with figures supplied by the festival</a> (Ile Soniq 2025), <a href="https://www.shambhalamusicfestival.com/about" target="_blank" rel="noopener noreferrer">Shambhala</a>, <a href="https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023" target="_blank" rel="noopener noreferrer">Daily Hive</a> (Chasing Summer).</li>
<li>Poll rank: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
</ul>`
```

**M5. FAQ size answer repeats the body and carries the old measure.** Shares "about 76,000 people over two days in 2025" and "23,500 guests, crew and artists" with line 29.
- Old (line 130): "Among the electronic music festivals Canada hosts, Ile Soniq is the largest with a published count, at about 76,000 people over two days in 2025. VELD is the other very large one, and Shambhala sells out with 23,500 guests, crew and artists on site."
- New: "Among the electronic music festivals Canada hosts, Ile Soniq has the largest published crowd, with 43,000 on its busiest day. VELD is the other very large one, though it publishes no figure, and Shambhala sells out at 23,500 people on the farm."

**M6. Figure to listening block with only 25 words between.** Lines 31 to 35: `figure:ilesoniq`, the 25-word "where you sleep" paragraph, `figure:first-mix`. `AGENTS.md` §7 asks for at least one substantial paragraph between an image and an embedded listening block. The Quebec H2 has no media until MUTEK, so the mix fits there.
- Old: `![Listening](figure:first-mix)` after line 33.
- New: delete it there and place it after the line 53 paragraph ("Montreal has the deepest electronic calendar..."), immediately before `### Ile Soniq`.

**M7. Second figure to listening block gap, 24 words.** Lines 87 to 91, `figure:basscoast`, one short paragraph, `figure:ternion`. Verified detail from the festival's site closes it.
- Old (line 89): "The festival films its own stages, so you can hear what it books before you go. This is Ternion Sound from the 2025 edition."
- New: "Beyond the stages there are more than 40 workshops and more than 50 interactive art pieces, and 2027 tickets are on sale with limited capacity. The festival also films its own stages, so you can hear what it books before you go. This is Ternion Sound from the 2025 edition."

**M8. Two alt texts describe what is not in the picture.** The MUTEK image shows a stage, a lawn and a few people. The Piknic image shows the Calder sculpture and a few passers-by, with one speaker stack at the left. Neither shows an audience or a crowd.
- Generator, old: `'An audience at MUTEK in Montreal in May 2015'`
- New: `'A festivalgoer on the lawn in front of the MUTEK stage in Montreal in May 2015'`
- Generator, old: `'A crowd at Piknic Électronik in Parc Jean-Drapeau in July 2016'`
- New: `"Calder's sculpture L'Homme in Parc Jean-Drapeau during Piknic Électronik in July 2016, with a speaker stack on the left"`

**M9. The Bass Coast image licence rests on the uploader's word.** `File:Basscoast_2018_album_3_1900x.jpg` was uploaded by Krystinuuu on 19 October 2018. Its source is the festival's own photo gallery, the author is given as "Bass Coast Festival official", no photographer is named, and no VRT permission is on the page. The picture looks professional, and the project rule on licences exists because of exactly this kind of exposure. Unless the festival confirms the licence (section 9), remove it. The section still carries the Ternion Sound embed, so it does not go bare.
- Old (line 87): `![Bass Coast, 2018](figure:basscoast)`
- New: delete, with the `basscoast: fig(...)` entry in the generator (lines 73 to 75) and the two `img/canada-festivals/bass-coast-2018-*` files.
- `media/best-edm-festivals-canada.json`, old: ", Bass Coast 2018 (Bass Coast Festival, CC BY-SA 4.0)"
- New: delete.
- If the image is removed, M7's longer paragraph stays anyway. It is the section's only text on what happens at the festival.

### Minor

**m1. Official spelling and a vague sentence at Ile Soniq.** Humanizer item 1 as well. The Montreal Times piece names three stages, so "a lot" overstates what is known.
- Old (line 57): "Ile Soniq takes over Parc Jean-Drapeau, on the islands in the St Lawrence,"
- New: "Ile Soniq, written îLESONIQ by the festival, takes over Parc Jean-Drapeau, on the islands in the St Lawrence,"
- Old: "It is two days with a lot of stages and a very easy metro ride home."
- New: "It runs for two days across several stages, and the metro stops at the park."

**m2. Cleft sentence and repeated "It is" closer at Shambhala.** Humanizer item 2.
- Old (line 79): "Bass music is what it is known for. It is a long drive from anywhere."
- New: "It is known for bass music, and it is a long drive from anywhere."

**m3. Piknic "afternoon".** One 2026 listing runs an event from 18:00 to 01:30, so "afternoon" undersells it. Sundays are not stated in the section that needs them. Humanizer item 3.
- Old (line 67): "Piknic Électronik is a season of outdoor parties at Parc Jean-Drapeau, and the 2026 season ran from 17 May to 18 October."
- New: "Piknic Électronik is a season of outdoor parties at Parc Jean-Drapeau, mostly on Sundays, and the 2026 season ran from 17 May to 18 October."
- Old: "It is a good way to see the city's scene for the price of an afternoon."
- New: "It is a good way to see the city's scene without buying a festival pass."
- Generator table, old: `'A Sunday afternoon'`. New: `'A Sunday in the park'`.

**m4. Igloofest appears twice, with the same link, 40 lines apart.** Line 71 is a staged opener and the proposal asks for one link. The target page has `id="igloofest"`.
- Old (line 71): "Winter is different in Montreal: Igloofest is covered in the guide to [the best winter music festivals](/best-winter-music-festivals)."
- New: delete.
- Old (line 111): "It is a Montreal winter festival, so it belongs in the [winter guide](/best-winter-music-festivals)."
- New: "It is a Montreal winter festival, so it belongs in the guide to [the best winter music festivals](/best-winter-music-festivals#igloofest)."

**m5. "Ottawa and Calgary" opens with an H3 and no introduction, and the two sections share one template.** Keeps `ottawa edm festival` and `calgary edm festival` verbatim.
- Add after line 97: "Beyond Toronto, Montreal and British Columbia, these two cities each have one main summer EDM festival."
- Old (line 101): "Escapade is the Ottawa EDM festival. The 2026 edition was on 26 to 28 June on the RA Centre grounds, and the 2027 dates have not been announced."
- New: "The main Ottawa EDM festival is Escapade. The 2026 edition was on 26 to 28 June on the RA Centre grounds, and the 2027 dates have not been announced."

**m6. "A farm in the Kootenays" is in both the deck and the intro.**
- Generator deck, old: "to a farm in the Kootenays,"
- New: "to camping weekends in British Columbia,"

**m7. Media record does not name the Commons files.** The note in `media/best-edm-festivals-canada.json` gives authors only, which is why MUTEK could not be matched to one file in a series of fourteen (section 8). Add the `File:` name of each image to the note.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| VELD 30 July to 1 August 2027, Downsview Park | date | https://www.veldmusicfestival.com/ and https://veld.frontgatetickets.com/ ("2027 VELD", Fri to Sun). Live Nation venue page agrees | high | B2 |
| VELD save-the-date and waitlist | date | Superseded: Front Gate shows passes, early bird pre-sale sold out | high that it is stale | B2 |
| VELD nearly 50,000 a year | numeric | Not in Technoairlines. No page opened supports it. Other estimates conflict. https://www.musicfestivalwizard.com/festivals/veld-music-festival-2024/ returned 403 on reopening | none | B3, cut |
| VELD often called the largest in Canada | superlative | Technoairlines says Toronto's largest open-air dance music event; other sources put it second to Ile Soniq | medium | keep "often called" |
| VELD 40th in DJ Mag 2026, only entry | poll | https://djmag.com/top100festivals, not rechecked, as instructed | high | keep |
| Ile Soniq 76,000 over two days, 43,000 Saturday, 30% from outside Quebec | numeric | https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/ ("supplied by îLESONIQ") | high for the text, self-reported | B3, attribute |
| Ile Soniq 11th edition, 8 and 9 August 2026 | date | https://first3only.com/music/festivals/ilesoniq-2026-reveals-lineup-for-the-11th-edition/ | high | keep |
| Ile Soniq 7 and 8 August 2027 | date | https://www.technoairlines.com/festival/ilesoniq-montreal-canada-2027, https://app.discotech.me/events/38257605-ilesoniq-2027-2-jours-at-ilesoniq. Official https://www.ilesoniq.com/en/ still 2026 | medium | keep as listed; section 9 |
| Ile Soniq "a lot of stages" | numeric | Montreal Times names three | medium | m1 |
| Metro to Parc Jean-Drapeau | fact | Not opened on this pass; station is named for the park | medium | m1, softened |
| Shambhala 23 to 26 July 2027, Salmo River Ranch, sold out | date | https://www.shambhalamusicfestival.com/ ("officially sold out") | high | B1 for wording |
| Shambhala resale the only way in | fact | Shambhala FAQ: no official resale platform, own online system, waitlist, crew | high that it is wrong | B1 |
| Shambhala 23,500 guests, crew and artists | numeric | https://www.shambhalamusicfestival.com/about | high, self-reported | keep; add source M4 |
| Shambhala 1998, about 500 people | date | /about ("some 500 people"), CBC via search snippet (403 on opening) | high | keep |
| 500 acres, six stages, 200+ artists, family-run, no sponsors | numeric | Shambhala info pages ("non-sponsored, family-run") | high | keep |
| Bass Coast 9 to 12 July 2027, Merritt, 3 hours from Vancouver, 19th year, five stages, 150+ | date, numeric | https://www.basscoast.ca/ | high | keep |
| Bass Coast 40+ workshops, 50+ art pieces, limited capacity | numeric | https://www.basscoast.ca/ | high | M7 |
| FVDED July 2027, Holland Park | date | https://www.fvdedinthepark.com/ | high | M1 |
| FVDED two days, early July 2024 and 2025 | date | https://dailyhive.com/vancouver/fvded-in-the-park-dates-2024, https://first3only.com/music/festivals/fvded-in-the-park-festival-sets-2025-dates/ | high | M1 |
| MUTEK 28th edition, 24 to 29 August 2027 | date | https://montreal.mutek.org/ | high | keep |
| Piknic 17 May to 18 October 2026, no 2027 dates | date | https://www.piknicelectronik.com/, https://cultmtl.com/2026/04/piknic-electronik-just-dropped-the-full-lineup-for-their-2026-edition-running-may-17-to-oct-18/ | high | keep; M4 for source line |
| Piknic mostly Sundays, evening hours | fact | CultMTL for Sundays; one listing for hours | medium | m3 |
| Escapade 26 to 28 June 2026, RA Centre, no 2027 dates | date | https://613today.ca/events/2026-06-26-escapade-music-festival, Resident Advisor listing; official homepage shows no dates | high | keep; M4 |
| Chasing Summer 1 and 2 August 2026, Max Bell Centre | date | Resident Advisor, Festival Abroad | high | keep |
| Chasing Summer 31 July and 1 August 2027 | date | Frontstage, search snippet only, site not reachable | low | keep as "one listing"; section 9 |
| Chasing Summer Alberta's largest | superlative | https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023 ("Alberta's largest EDM event"), Curiocity | medium | keep "called" |
| Chasing Summer 30,000 a year | numeric | Same Daily Hive piece ("brings in 30,000 people every year"), 2023 | medium | M3, dated |
| Electric Island 14th season, 2026 dates and sites | date | https://nowtoronto.com/event/electric-island-2026-season-opener/, https://nowtoronto.com/event/electric-island-august-7-8-electronic-music-concert-series/, https://www.technoairlines.com/festival/electric-island-toronto-on-canada-2026 | medium to high | M2 |
| Three biggest within three weeks | date | Derived: 23 July to 8 August, 16 days | high | keep |
| Toronto and Montreal one week apart | date | Derived from VELD and listed Ile Soniq dates | medium | B2 wording |
| Montreal deepest electronic calendar | interpretive | Supported by the three named events on the page, plus Igloofest | medium | keep as judgement |
| Osheaga carries electronic acts as part of a wider bill | fact | Common knowledge, not opened | medium | keep |
| Ternion Sound at Bass Coast 2025, D68S0Mg6aBc | embed | oEmbed 200: "Ternion Sound DJ Set \| Live at Bass Coast 2025", author Bass Coast Festival. `selector-data.json`: 2025, 5,302 s, 24,789 views. Only other occurrence is the catalogue | high | keep |
| Image licences | licence | Six Commons pages, section 8 | high for five, low for Bass Coast | M9 |

No Wikipedia in the body or sources. A Wikipedia mirror was read only as a pointer for VELD figures and is not a source for anything kept. Pages that could not be opened: Frontstage (no DNS), musicfestivalwizard.com (403), cbc.ca (403), v13.net (403), https://www.basscoast.ca/tickets (404), and the Technoairlines FVDED 2027 URL (404).

## 5. SEO preservation
- Keyword map terms, all retained verbatim after every revision above: ile soniq, shambhala music festival, music festivals canada, edm festivals canada, edm festival in canada, toronto edm festivals, ottawa edm festival, calgary edm festival, biggest edm festival in canada. The seven single-occurrence phrases are "best EDM festivals Canada has to offer", "What EDM festivals are in Canada?", "Toronto EDM festivals start", "Ottawa EDM festival", "Calgary EDM festival", "electronic music festivals Canada hosts" and the biggest H2. M2, M5 and m5 were written around them.
- H2s and FAQ match `festival-roundups-proposal.md` section 3. `edm festivals canada 2027` returned no volume, so nothing claims it as a measured term.
- Title is 61 characters. Canonical, `datePublished` and `dateModified` are correct, and the FAQPage JSON-LD matches the visible FAQ. It must follow M5 and B1 when rebuilt.
- 2027 dates are carried in the title, H1, banner, table and each section. Registered at `festival-editions.mjs` line 69 with `ends: null`.
- Humanizer ran on the draft. Three before and after sentences:
  1. "It is two days with a lot of stages and a very easy metro ride home." became "It runs for two days across several stages, and the metro stops at the park."
  2. "Bass music is what it is known for. It is a long drive from anywhere." became "It is known for bass music, and it is a long drive from anywhere."
  3. "It is a good way to see the city's scene for the price of an afternoon." became "It is a good way to see the city's scene without buying a festival pass."
  No not-X-but-Y contrasts, one-line closers, dashes or stock vocabulary were found. The main tell was paragraphs closing on "It is" or "It suits". After these edits the remaining ones (VELD, MUTEK) are spaced enough to stay.

### §0 greps on built page text
Run on tag-stripped text of `best-edm-festivals-canada.html` (2,064 words) with a Python regex.

```
complete          0
full              0
whole             0
uninterrupted     0
an hour           0
in full           0
jungle            0
drum and bass     0
dnb               0
Wikipedia         0
not .{0,60} but   0
matters           0
the point         0
em dash           0
en dash           0
ahrefs|keyword|planner|research|verified|fact-check   0
drug|mdma|lsd|substance|harm   0
crucial|enduring|vibrant|pivotal|landscape|testament|delve   0
minutes           0
hours             1   ("three hours from Vancouver")
breaks            3
  "across house, techno, breaks and rave"   (own playlist blurb)
  "Thirty tracks where breaks move between garage, bass music, techno and rave"   (own mix blurb)
  "moving through breaks, garage, dubstep, grime, techno and more"   (own mix blurb)
check             2   (Bandcamp button; "Check local listings", removed by M2; no printed check date)
```

The three `breaks` hits are the owner's disclosed promotion and stay. M1 adds no check dates and m1 adds no process notes. `audit-banned-phrases.mjs` and the other audits were not run, as this review was instructed not to run them.

### Banner, first section, FAQ comparison
Six-word overlap test. Banner and intro: none. Banner and FAQ: none. Intro and FAQ: none. Intro and body: none. Banner and body: only the date string "listed for 30 July to 1", closed by B2. Body and FAQ: "about 76,000 people over two days in 2025", "23,500 guests, crew and artists", "on 23 to 26 July 2027 at Salmo River Ranch" and "resale is the only way in", all closed by B1 and M5. No shared sentence after revision.

## 6. Coverage gaps
- The FAQ question "What are the largest music festivals in Canada?" is a general one and the answer covers only electronic festivals. The "Among the electronic music festivals" qualifier keeps it honest and carries a keyword. A sourced line on Osheaga or Festival d'été would serve the question better, but neither figure was verified here, so no wording is proposed.
- Ticket status for Ile Soniq 2027: two-day tickets are reportedly on sale through Live Nation. No claim is made on the page.
- Escapade's age limit (16+ in 2026) is useful to readers and could go in with the 2027 dates.

## 7. Cuts or merges
- Cut "nearly 50,000 a year" (B3) and "resale is the only way in" (B1).
- Cut the save-the-date line (B2) and "Check local listings" (M2).
- Cut line 71 on Igloofest (m4).
- No section needs merging. VELD's 40th place appears in both the criteria and its own section, and both uses do work, so it stays.

## 8. Media actions

| Key | File | Commons page opened | Author | Licence | Result |
|---|---|---|---|---|---|
| ilesoniq | `ilesoniq-bynon-2018` | `File:Bynon_IleSoniq.jpg` | Kylefowlermtl | CC BY-SA 4.0 | Matches caption; 11 August 2018; 5,564 × 3,717 |
| veld | `veld-deadmau5-2016` | `File:Deadmau5_at_Veld_Music_Festival.jpg` | Visualbass Photography (EXIF Tobias Wang); Flickr, posted by veldmusicfestival | CC BY-SA 2.0 | Matches caption; 30 July 2016; 5,358 × 3,572, cropped to 1200 × 749. Also the guide's card image |
| mutek | `mutek-2015` | `File:Mutek,_Montreal_2015_-_02.jpg` | Jeangagnon | CC BY-SA 3.0 | Author and licence match for that file. The exact file in the series is not recorded, m7. Alt text wrong, M8 |
| piknic | `piknic-electronik-2016` | `File:Piknic_Electronik_-_01.jpg`, also 02 and 03 | Jeangagnon | CC BY-SA 4.0 | Matches caption; 16 July 2016; 5,152 × 3,864. Alt text wrong, M8 |
| shambhala | `shambhala-2003` | `File:Shambhala_Music_Festival_(2003)_(44363804455).jpg` | Nelson Becker, Touchstones Nelson | Public Domain Mark 1.0 | Matches caption; 17 August 2003; 2,560 × 1,920; Commons review 15 September 2022 |
| basscoast | `bass-coast-2018` | `File:Basscoast_2018_album_3_1900x.jpg` | "Bass Coast Festival official", uploader Krystinuuu | CC BY-SA 4.0, no VRT | Licence claim unconfirmed, M9. 1,899 × 1,266, not upscaled |

- Reuse: no image shared with another guide. The filenames occur in `articles.html`, `index.html` and `home-articles.mjs` only for this guide's own card, which uses `veld-deadmau5-2016`.
- Embed: D68S0Mg6aBc is on this page and in the `selector-data.json` catalogue only. Festival channel, 24,789 views, oEmbed 200.
- Quality: all six viewed at 1200 wide. No watermark, no upscaling. The MUTEK picture shows a nearly empty lawn by day, and the Piknic picture is really a sculpture. Both are accurate after M8 but weak. All three Piknic files checked are the same scene and none mentions a crowd.
- Sequence: no image or listening block is directly adjacent, and none follows an H2 or H3 directly. M6 and M7 close the two thin gaps. After them, each figure to embed gap is a full paragraph.
- Word counts: Intro 60, criteria 120, glance 37, biggest 95, Toronto and Ontario 118, Montreal and Quebec 199, British Columbia 176, Ottawa and Calgary 82, not listed 42, choose 76, FAQ 139. No bare section is over 450.
- Coverage: criteria, glance, biggest, Ontario, Quebec, BC, Ottawa and Calgary, and choose all carry media, 8 of 9 argued sections. Bare: not listed. Passes the 60% line, and still does if M9 removes one image.
- Colour: own-listening components stay cyan, and the Ternion block uses the shared "Essential listening" component. No body section is toned.

## 9. Unresolved questions
1. Bass Coast photo. Ask the festival whether the gallery image is released under CC BY-SA and who shot it. Without that answer, apply M9. A replacement with clear permission can go in the same place if one turns up.
2. Ile Soniq 2027. Its site still reads as 2026. Move it to confirmed in the banner, table, line 57 and line 116 once it publishes.
3. Chasing Summer 2027 rests on one search snippet from a site that could not be reached. The owner may prefer "The 2027 dates have not been announced" and `'Not announced (1 and 2 August in 2026)'` in the table.
4. A VELD crowd figure. If a press or organiser figure with a date turns up, add it to line 29. None opened was reliable enough to print.
5. Electric Island sits outside the proposal's named list. It passes the three criteria, but the owner may prefer to cut the H3 and keep one line under the VELD section. If so, drop the table row in M2.
6. Better images for MUTEK and Piknic. Crowd pictures with clear licences would serve these sections better, if the series or MUTEK's later years hold one.
7. Read next is generated by `relatedArticles`: `/berghain`, `/best-clubs-in-nyc`, `/best-clubs-in-tokyo`, `/best-clubs-in-budapest`. Weak fit for a festival guide, as noted on the psytrance review.
8. No published page links in yet except `articles.html` and `index.html`. `/best-edm-festivals-usa` does not mention Canada, so it has no reciprocal link. Showing the owner exact wording first is required before editing that live guide.
9. Defects to log in `defects.json` when fixing, as this review may not edit it: alt text that contradicts the image (M8), and `audit-media.mjs` not measuring how short a paragraph between a figure and a listening block can be (M6, M7).

### Internal links
| Link | Where | Why it belongs |
|---|---|---|
| `/best-winter-music-festivals` | Line 71, cut by m4 | Duplicate of the line below |
| `/best-winter-music-festivals#igloofest` | Not on this list, m4 | Exclusion reason, lands on `<h3 id="igloofest">` |
| `/best-edm-festivals-usa` | How to choose | Next stop for North American readers; not reciprocal, see 9.8 |
| `/berghain`, `/best-clubs-in-nyc`, `/best-clubs-in-tokyo`, `/best-clubs-in-budapest` | Read next, auto | Weak fit, see 9.7 |

No jungle or dnb link appears.

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Facts | Fail until B1 to B3, M1 to M5 applied | Section 4 ledger; each row names the page opened or marks it low |
| Editorial | Pass after M2, M5 and m2 to m5 | §0 greps in section 5 all 0 except disclosed `breaks`; no shared sentence after M5; no em dashes, check dates, keyword tools or drug content |
| SEO | Pass | Nine terms retained in every new wording; H2s match the proposal; 2027 dates carried |
| Media | Fail until M6 to M9 applied | Six licences read on Commons, one unconfirmed; no reuse; word counts under 450; 8 of 9 sections carry media |
| Implementation | Fail until the revisions are built | Audits not run for this review, as instructed. After editing run `node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs`, `npm run check:layout`, `npm run check:links` |
