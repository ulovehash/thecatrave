# Best EDM festivals in Australia 2027 editorial review

Reviewed 2026-10-31 against `best-edm-festivals-australia-draft.md`, `build-australia-festivals-article.mjs` and the built `best-edm-festivals-australia.html`. Independent of the writer.

## 1. Verdict
Blocked. Do not publish. The structure, tone and keyword mapping are sound, but the page recommends a cancelled event, says Ultra Australia has no 2027 dates when its own site prints them, hides that Pitch has sold out, uses a headline image whose licence looks unsafe, and breaks the media spacing rule once. Five Blockers and seven Majors below. All of them are copy or data fixes; no restructure of the page is needed beyond rebuilding the raves section.

Process record, as given to this review: Stage 6 validation was not run for this topic. `CLAUDE.md` says no verdict on a topic before every stage is filled in, so the choice of topic itself remains unvalidated; this verdict is on the page only.

## 2. What already works
- The table-first shape answers the question quickly, and the year is printed on every date, which a season crossing New Year needs.
- Beyond the Valley, Lost Paradise and Subsonic facts check out against the organisers' own sites.
- Rainbow Spirit and Wild Horses are correctly handed to the psytrance guide.
- No dance-music production teaching, no keyword tools named, no em or en dashes, no Wikipedia, no check dates.
- The opening sentence no longer repeats the banner (humanizer record, §10).
- Owner's playlist, two mixes and track are disclosed promotion and stay. The word "breaks" appears only inside those owner blocks.
- All six measured keyword phrases are present and survive every revision below.

## 3. Priority revisions

Every revision here is proposed wording for an unpublished page. Nothing has been edited. Under `CLAUDE.md`, each finding should be entered in `defects.json` before it is fixed; this review was limited to one file and has not done so.

### Blocker 1: hypersonic is cancelled
`https://hypersonicfestival.au/` says, signed by Team hypersonic: "hypersonic Sydney and Melbourne will not be going ahead in 2026." It gives the Friday move in Melbourne as the reason, and offers refunds or a transfer to Dreamstate 2027. `https://symbiotic.net.au/hypersonic-cancellation/` carries the matching FAQ. Press and listings are stale. A search of 31 October found no report of the cancellation, so the organiser page is the only evidence, and it outranks them. The notice carries no calendar date.

Banner, generator `answer`:
- Old: `The best EDM festivals in Australia are Beyond the Valley in Victoria (28 December 2026 to 1 January 2027, sold out), Pitch at the foot of the Grampians (5 to 9 March 2027) and Strawberry Fields near Tocumwal (20 to 22 November 2026). Lost Paradise near Sydney is the New Year alternative, hypersonic is the big rave in November, and Ultra Australia points to April 2027 without dates so far.`
- New: `The best EDM festivals in Australia are Beyond the Valley in Victoria (28 December 2026 to 1 January 2027, sold out), Pitch at the foot of the Grampians (5 to 9 March 2027, sold out) and Strawberry Fields near Tocumwal (listed for 20 to 22 November 2026). Lost Paradise near Sydney is the New Year alternative, also sold out, Dreamstate is the big rave in February, and Ultra Australia is on 17 and 18 April 2027.`

Raves section opener:
- Old: `The biggest Australian raves are indoor or city-park events that move between capitals, rather than camping festivals. Dance music fans usually mean three names.`
- New: `The biggest Australian raves are city events on showgrounds, racecourses and beaches, rather than camping festivals. Dreamstate, Knockout Outdoor and Electric Island are the three to know.`
- Reason as well as the cancellation: none of the named events is indoor or in a city park, and "usually mean three names" has no source.

Raves section, the hypersonic H3:
- Old: `### hypersonic` and `hypersonic plays Melbourne Showground on 20 November 2026 and Royal Randwick in Sydney on 21 November 2026, with Armin van Buuren, W&W and Showtek on the bill. It is the closest thing here to the European big-room rave. The 2027 dates have not been announced.`
- New: `### Dreamstate` and `Dreamstate Australia is reported for Sydney Showground on 6 February 2027 and Flemington Racecourse in Melbourne on 7 February 2027, with Tiësto headlining on a trance set.`

Add after it:
- New: `### Knockout Outdoor` and `Knockout Outdoor is the hard-dance event, with hardstyle and hardcore at ENGIE Stadium in Sydney. Its seventh year ran on 3 October 2026, and no 2027 date is listed yet.`
- Condition: "no 2027 date is listed yet" could not be proved, because `knockoutoutdoor.com.au` returned an empty page. Check the festival's own channels before it ships.

Table, hypersonic row:
- Old: `['hypersonic', 'Melbourne; Sydney', '20 and 21 November 2026', 'Big-room, trance, hardstyle', 'City', 'One big night'],`
- New, placed after Lost Paradise: `['Dreamstate', 'Sydney; Melbourne', '6 and 7 February 2027 (reported)', 'Trance', 'City', 'One big night'],`
- Add after Electric Island: `['Knockout Outdoor', 'Sydney', 'Not announced (3 October in 2026)', 'Hardstyle, hardcore', 'City', 'Hard dance'],`

Not on this list, add:
- New: `- **hypersonic.** Its organisers cancelled the Melbourne and Sydney shows due in November 2026, and no return has been announced.`

How to choose:
- Old: `Decide on the season first. November has Strawberry Fields, Subsonic and hypersonic. New Year has Beyond the Valley and Lost Paradise. March has Pitch, and April usually has Ultra Australia.`
- New: `Decide on the season first. November has Strawberry Fields and Subsonic. New Year has Beyond the Valley and Lost Paradise. February has Dreamstate, March has Pitch, and April has Ultra Australia.`
- Old: `Then choose how you want to spend it. Beyond the Valley has the largest crowd, Pitch is the smaller house and techno weekend, and hypersonic is one big night.`
- New: `Then choose how you want to spend it. Beyond the Valley has the largest crowd, Pitch is the smaller house and techno weekend, and Dreamstate is one big night.`

### Blocker 2: Ultra Australia has dates and venues
`https://ultraaustralia.com/` is titled "Home - Ultra Australia April 17 & 18, 2027" and names Flemington Racecourse, Melbourne and Broadwater Parklands, Gold Coast, with presale sign-up. The page says the opposite in five places. The site does not say in what I read which day belongs to which city, so do not assign them.

Section:
- Old: `Yes. The Ultra festival Australia last saw ran on 11 April 2026 at Flemington in Melbourne, with an Ultra Beach day on the Gold Coast on 12 April. For 2027 the festival points to April again, without dates or venues so far, so wait for those before you book. It ranks 86th in DJ Mag's list. For the parent festival, see the [Ultra guide](/ultra-music-festival).`
- New: `Yes. The next Ultra festival Australia hosts is on 17 and 18 April 2027, at Flemington Racecourse in Melbourne and Broadwater Parklands on the Gold Coast, the same two-city format as 2026. It ranks 86th in DJ Mag's list. For the parent festival, see the [Ultra guide](/ultra-music-festival).`

Table:
- Old: `['Ultra Australia', 'Not announced', 'April 2027, dates not announced', 'Big-stage EDM', 'City', 'Ultra at home'],`
- New: `['Ultra Australia', 'Melbourne; Gold Coast', '17 and 18 April 2027', 'Big-stage EDM', 'City', 'Ultra at home'],`

FAQ, which also stops repeating the section:
- Old: `The festival points to April 2027, but dates and venues have not been announced. The 2026 edition ran on 11 April at Flemington in Melbourne, with an Ultra Beach day on the Gold Coast on 12 April.`
- New: `Ultra Australia is on 17 and 18 April 2027, split between Melbourne and the Gold Coast. Presale sign-up is open on the festival's site.`

The banner is corrected under Blocker 1 and the sources under Major 7.

### Blocker 3: Pitch has sold out and the page does not say so
`https://pitchfestival.com.au/` says tickets for Pitch 2027 "have instantly sold out" and points to a Tixel waitlist. The page calls Pitch the first choice for house and techno and never says this, which sends readers to a ticket they cannot buy. The same site calls 2027 the tenth edition.

Section:
- Old: `Pitch Music and Arts is on 5 to 9 March 2027 at Moyston, at the foot of the Grampians, and it will be the festival's 10th anniversary. It ranks 84th in DJ Mag's list. It suits anyone who wants a smaller camping festival with a club-minded programme, and it falls well after the New Year rush.`
- New: `Pitch Music and Arts is on 5 to 9 March 2027 at Moyston, at the foot of the Grampians, for its 10th edition, and tickets have sold out, with a Tixel waitlist on the festival's site. It suits anyone who wants a smaller camping festival with a club-minded programme, and it falls well after the New Year rush.`

Table:
- Old: `['Pitch', 'Moyston, Victoria', '5 to 9 March 2027', 'House, techno', 'Camping', 'A club-minded festival'],`
- New: `['Pitch', 'Moyston, Victoria', '5 to 9 March 2027 (sold out)', 'House, techno', 'Camping', 'A club-minded festival'],`

FAQ, which also stops repeating the section:
- Old: `Pitch is held at Moyston in Victoria, at the foot of the Grampians. The next edition is on 5 to 9 March 2027, and it is the festival's 10th anniversary.`
- New: `In Moyston, western Victoria. The next edition is in March 2027 and is already sold out.`

How to choose:
- Old: `The summer camping festivals sell out fast, and the sold-out ones above are resale only.`
- New: `Beyond the Valley, Lost Paradise and Pitch have all sold out, so resale is the only way in.`

### Blocker 4: the Beyond the Valley image fails the licence gate
The Commons page for `File:Nelly_Furtado_at_Beyond_the_Valley_2022.jpg` claims CC BY 2.5 and credits Martin Philbey, but its source is an NME feature, it was uploaded by a third party through UploadWizard, and it has no permission statement or licence review. That is a press photograph with a licence tag added by someone else. AGENTS §8 rules out rights-reserved press photographs. The image also shows a pop singer on an EDM guide.

Remove it from three places: `media.btv` and `![Beyond the Valley, 2022](figure:btv)`; the card in `home-articles.mjs` lines 600 to 601; and the cover in `scripts/og-articles-covers.json` line 3 and `scripts/build-og-cards.py` line 127, then rebuild `img/og/australia-festivals.jpg` and `img/og/articles.jpg`. Delete `img/australia-festivals/beyond-the-valley-2022-*`. Use `grampians-halls-gap` for the card and cover unless a Commons image with a real permission record is found. Update the note in `media/best-edm-festivals-australia.json`.

### Blocker 5: figure placed directly against a listening block
Listen Out's figure is immediately followed by the owner's SoundCloud mix band, which AGENTS §7 forbids. `audit-media.mjs` passed anyway, so the audit does not catch figure-then-own-mix. Log that gap in `defects.json`.

Major 1 below removes the figure and closes this. If the owner keeps the figure, add a substantial paragraph between it and `![Listening](figure:first-mix)`.

### Major 1: Listen Out is on hiatus, not back
Listen Out paused in July 2025 and replaced the festival with one-off "Listen Out Presents" parties. `musick.com.au/festival/listen-out-2026/` says it is on hiatus, and no return has been announced. "Listings for 2026 disagree" is stale at 31 October and describes research, not the festival.

- Old: `### Listen Out`, `Listen Out skipped 2025 and has come back in a different format. Listings for 2026 disagree on cities and dates, so check the festival before making plans.`, and `![Listen Out, 2017](figure:listenout)`
- New: delete all three, and the table row `['Listen Out', 'Check the festival', 'Not confirmed', 'Dance and hip-hop', 'City', 'A day out']`.
- Add to Not on this list: `- **Listen Out.** It paused in 2025 for smaller Listen Out Presents parties, and no return of the festival has been announced.`
- Delete `media.listenout` from the generator and the image files, and update the media JSON.

### Major 2: the confirmed and listed promise is not kept
The intro, deck and criteria promise that each date is marked confirmed or listed. No table row carries a marker, apart from Listen Out's "Not confirmed". The sources line also files Subsonic and Ultra as listing-only though both are on their own sites.

Criteria:
- Old: `A date from the festival's own site is shown as confirmed. A date found only on a listing site is marked as listed. Because the season crosses New Year, the table gives the year for every date.`
- New: `Because the season crosses New Year, the table gives the year for every date, and marks any date not yet shown on the festival's own site.`

Table:
- Old: `['Strawberry Fields', 'Tocumwal, NSW', '20 to 22 November 2026', 'Electronic', 'Camping', 'The Murray in spring'],`
- New: `['Strawberry Fields', 'Tocumwal, NSW', '20 to 22 November 2026 (listed)', 'Electronic', 'Camping', 'The Murray in spring'],`

Section:
- Old: `Strawberry Fields is on 20 to 22 November 2026 at The Wildlands, 300 hectares on Tuppal Road near Tocumwal, close to the Murray. The 2027 dates have not been announced.`
- New: `Strawberry Fields is listed for 20 to 22 November 2026 at The Wildlands on Tuppal Road near Tocumwal, close to the Murray. Tickets for 2026 were sold by ballot, and the organisers have not yet confirmed 2027.`
- Reasons: the organiser's site could not be opened under any address tried; "300 hectares" has no source anywhere; and the NSW Government events page shows a 19 to 21 November 2027 session, so a flat "not announced" is unsafe.

Dates paragraph:
- Old: `Several festivals here have an edition coming up in late 2026, and they have not yet announced 2027. Those rows show the coming date, so you can plan the nearest one.`
- New: `Several festivals here have an edition coming up in November 2026, before any 2027 date from their organisers. Those rows show the coming date, so you can plan the nearest one.`

### Major 3: the attendance source is dead and the figure lacks its frame
`https://www.scoope.nl/?p=27013` returns 404. The figure stands, but it is 40,000 across four days. Beyond the Valley's largest-festival line is on Untitled Group's site, not the festival's, and the sentence about where the figure comes from is process commentary.

- Old: `Beyond the Valley is the biggest, with 40,000 people reported at its sold-out 10th edition. That figure comes from the organisers' announcement, and it is the highest published here for a dance-led festival. It describes itself as Australia's largest multi-day festival.`
- New: `Beyond the Valley is the biggest, with 40,000 people across four days at its sold-out 10th edition, the highest attendance figure on this list. Its organiser, Untitled Group, calls it Australia's largest multi-day festival.`

### Major 4: "a sold-out run each year" is unproved, and the FAQ claims too much from the poll
Sell-outs were found for 2023, 2025 and 2026; 2024 was not verified. "Ranks highest of the Australian festivals" needs the full DJ Mag list, which returned 403.

- Old: `Among dance-led festivals, Beyond the Valley is the most popular, with 40,000 people reported at its 10th edition and a sold-out run each year. It also ranks highest of the Australian festivals in DJ Mag's list, at 67th.`
- New: `Among dance-led festivals, it is Beyond the Valley, which drew 40,000 people to Barunah Plains at its last edition and sold out the next one in presale. DJ Mag's reader poll places it 67th.`

### Major 5: DJ Mag's poll is not a measure of audience size, and Pitch's rank is unverified
It is a poll, so it measures votes. Only Ultra's 86th was read on an opened page (stagehoppers.com). Beyond the Valley's 67th rests on a djmag.com URL in search results, and Pitch's 84th has no opened source at all. Blocker 3 already removes the repeat in the Pitch section.

- Old: `DJ Mag's Top 100 Festivals for 2026 is used as a guide to audience size. Beyond the Valley is 67th, Pitch is 84th and Ultra Australia is 86th.`
- New: `DJ Mag's Top 100 Festivals for 2026, a reader poll, is used as a rough guide to profile. Beyond the Valley is 67th, Pitch is 84th and Ultra Australia is 86th.`
- Condition: open the ranks page in Chrome before publishing. If 84th cannot be proved, drop `Pitch is 84th and`.

### Major 6: Clara Cuvé is a visiting German DJ, not Melbourne's sound
She is a Munich-born, Berlin-based DJ, so the set shows a Melbourne club night but not "the city's own sound". The embed itself stays.

- Old: `The city's own sound is worth hearing before you go. This set was filmed by Intercell in Melbourne in 2025.`
- New: `Melbourne's club nights are worth hearing before you go. This set is the German DJ Clara Cuvé at Intercell in the city in 2025, filmed by Intercell.`
- Old: `Clara Cuvé at Intercell in Naarm/Melbourne, filmed by Intercell in 2025. A club night, for the city’s sound.`
- New: `Clara Cuvé at Intercell in Naarm/Melbourne, filmed by Intercell in 2025. A visiting DJ at a Melbourne club night.`
- The generator also needs to state a factual reason, and this one does.

### Major 7: the sources list misdescribes what was used
- Old: the four `<li>` items in `sourcesHtml`.
- New, each with its link:
  - `Dates from each festival's own site: Beyond The Valley, Lost Paradise, Pitch, Subsonic, Ultra Australia, and the Rainbow Spirit ticket page.`
  - `Listed or reported dates: Strawberry Fields (NSW Government events), Dreamstate (Sydney Showground, Noise11), Electric Island (The Note), Knockout Outdoor (That Festival Site).`
  - `hypersonic cancellation: hypersonicfestival.au.`
  - `Beyond The Valley attendance: The Music Network and Rolling Stone Australia.`
  - `Poll ranks: DJ Mag: Top 100 Festivals 2026.`
- URLs: `https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale`, `https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/`, `https://ultraaustralia.com/`, `https://events.humanitix.com/emergentform`, `https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival`, `https://www.sydneyshowground.com.au/whats-on/dreamstate/`, `https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615`, `https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026`, `https://www.thatfestivalsite.com/article/Knockout%20Outdoor%202026%20Ticket%20Prices%20Revealed`, `https://hypersonicfestival.au/`.

### Minor
- Melbourne superlative with no source. Old: `Melbourne is the centre of Australian electronic music, and most of this list is within a few hours of the city.` New: `Most of this list is within a few hours of Melbourne.`
- Rainbow Spirit. Old: `is the main psytrance gathering, and it is covered` New: `is the psytrance option, and it is covered`
- Asia link. Old: `For the rest of the region, see` New: `For festivals further north, see`. Australia is not in Asia, and the Asia guide mentions it once.
- Beyond the Valley billing. Old: `It is produced by Untitled Group with triple j.` New: `It is presented by Untitled Group and triple j.`
- Press styles the hypersonic name in capitals or title case. Moot if Blocker 1 is applied, except in the Not on this list bullet, where the organiser's own lowercase is used.

## 4. Fact-check ledger
| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| hypersonic Melbourne 20 Nov, Sydney 21 Nov 2026 | fact | https://hypersonicfestival.au/ (cancelled); https://symbiotic.net.au/hypersonic-cancellation/ | high that it is cancelled; organiser notice undated | Remove (Blocker 1) |
| hypersonic bill: Armin van Buuren, W&W, Showtek | fact | https://beat.com.au/armin-van-buuren-to-headline-hypersonic-festivals-massive-2026-return/ | superseded | Remove |
| Ultra 2027 "without dates or venues" | fact | https://ultraaustralia.com/ | high that this is false | Replace (Blocker 2) |
| Ultra 2026: 11 April Flemington, 12 April Gold Coast | fact | thenote.com.au via search summary, not opened | medium | Removed by rewrite except "same two-city format" |
| Ultra Australia 86th | fact | https://stagehoppers.com/djmag-top100-festivals-2026/ | medium | Keep |
| Beyond the Valley 67th | fact | djmag.com/top100festivals/2026/67/beyond-valley, URL in results, page 403 | medium-low | Open in Chrome before publishing |
| Pitch 84th | fact | https://djmag.com/top100festivals 403; not on any opened page | low | Open in Chrome or cut (Major 5) |
| "highest of the Australian festivals" in DJ Mag | superlative | not proved | low | Cut (Major 4) |
| DJ Mag as "guide to audience size" | interpretation | poll by nature | n/a | Reword (Major 5) |
| Beyond the Valley 28 Dec to 1 Jan, Barunah Plains, Hesse, 126 km, 18+, camping, sold out | fact | https://beyondthevalley.com.au/ | high | Keep |
| John Summit, Black Eyed Peas, Skepta | fact | https://beyondthevalley.com.au/ | high | Keep |
| Untitled Group and triple j | fact | https://beyondthevalley.com.au/ ("Presented by") | high | Minor reword |
| 40,000 at 10th edition, sold out | fact | https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale; https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/ | high that it is reported; organiser's own figure | Add "across four days", replace source (Major 3) |
| Scoope source | source | https://www.scoope.nl/?p=27013 404 | failed | Replace |
| "the biggest" EDM festival | superlative | no independent comparison exists | medium | Keep only as "highest attendance figure on this list" |
| "Australia's largest multi-day festival" | superlative | https://www.untitledgroup.com.au/festivals/beyond-the-valley | high as organiser's claim | Attribute to Untitled Group |
| "sold-out run each year" | fact | 2023 killyourstereo, 2025 and 2026 opened; 2024 not found | low | Cut (Major 4) |
| Lost Paradise dates, Glenworth Valley, 300 acres, hour from Sydney, 18+, sold out | fact | https://lostparadise.com.au/ | high | Keep |
| Pitch 5 to 9 March 2027, Moyston, Grampians | fact | https://pitchfestival.com.au/ | high | Keep |
| Pitch sold out | fact | https://pitchfestival.com.au/ | high | Add (Blocker 3) |
| Pitch "10th anniversary" | fact | https://pitchfestival.com.au/ says tenth edition | high for edition | Reword |
| Strawberry Fields 20 to 22 Nov 2026, The Wildlands, Tuppal Road | fact | https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival; https://musick.com.au/festival/strawberry-fields-2026/; organiser sites refused | medium | Label listed |
| Strawberry Fields 300 hectares | fact | none found | low | Cut |
| Strawberry Fields 2027 "not announced" | fact | NSW page shows a 19 to 21 Nov 2027 session | low | Reword |
| Strawberry Fields ballot | fact | search results, not opened | medium | Add, verify on Humanitix |
| Subsonic 13 to 15 Nov 2026 | fact | subsonicmusic.com.au | high | Keep; fix source list |
| Subsonic at Riverwood Downs, 120 artists, four stages | fact | visitnsw.com via search summary, not opened | medium | Keep |
| Electric Island April 2026: Glenelg 11, Melbourne (Riva) and Cottesloe 18 and 19 | fact | https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026 | medium | Keep |
| Electric Island 2027 not confirmed | fact | https://electricisland.com.au/ shows none | medium | Keep |
| Listen Out skipped 2025 | fact | Search results for Rolling Stone, RUSSH, The Music, not opened | medium | Keep in new bullet |
| Listen Out "come back", 2026 listings | fact | https://musick.com.au/festival/listen-out-2026/ (hiatus); https://listenout.com.au/city-sydney/ 403 | medium that it is wrong | Replace (Major 1) |
| Raves "indoor or city-park", "three names" | fact | Venues above contradict | high that it is false | Replace (Blocker 1) |
| Rainbow Spirit 5 to 8 March 2027, central Victoria | fact | https://events.humanitix.com/emergentform (Glenaroua) | high | Keep |
| Melbourne "the centre" | superlative | none | low | Cut (Minor) |
| Clara Cuvé, Intercell, 2025, set facts | fact | As given; origin from artist bios via search | medium | Reword (Major 6) |
| Dreamstate 6 Feb Sydney Showground | fact, new | https://www.sydneyshowground.com.au/whats-on/dreamstate/ | high, venue's own page | Add, reported |
| Dreamstate 7 Feb Flemington, Tiësto | fact, new | https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615 | medium; https://dreamstate.au/ is under construction | Add, reported |
| Knockout Outdoor 3 Oct 2026, ENGIE Stadium, seventh year | fact, new | That Festival Site, opened | medium; own site empty | Add, verify 2027 |
| Image licences | fact | §8 | as stated there | §8 |

No Wikipedia in body or sources.

## 5. SEO preservation
Measured phrases and where they sit after the revisions. None is removed.

| Term | Volume | Carried by |
|---|---|---|
| pitch music and arts | 1000 | Pitch section opening, FAQ question |
| ultra festival australia | 1000 | `The next Ultra festival Australia hosts`, replacing `The Ultra festival Australia last saw` |
| edm festivals australia | 100 | `best EDM festivals Australia offers` |
| edm festival melbourne | 100 | `biggest EDM festival Melbourne has` |
| best edm festivals australia | 10 | intro |
| biggest raves in australia | 10 | H2 |

Keep the H2 `What are the biggest raves in Australia?`, the at-a-glance heading registered at `festival-editions.mjs` line 70, and the FAQ question wording. The approved title was `Best EDM Festivals in Australia 2027: Beyond the Valley, Pitch, Ultra`, and the built title drops `, Ultra`; see §9.

Internal links, each with why it belongs:
- `/new-years-eve-festivals#australia-new-zealand`: anchor exists, and the approved proposal asks for it. Keep.
- `/best-psytrance-festivals`, twice (Rainbow Spirit, Wild Horses): that guide owns those festivals, but it is unpublished, so publish it first or the links 404.
- `/ultra-music-festival`: parent festival. That page has no mention of Australia, so a return link would be useful.
- `/best-electronic-music-festivals-asia`: next-door region, weakly related; reword as in §3.
- Read next, `/berghain`, `/best-clubs-in-nyc`, `/best-clubs-in-tokyo`, `/best-clubs-in-budapest`: generated by `relatedArticles`. They are generic club pages with no Australian or festival link. Weak, and worth a generator-level fix.
- No link to a jungle, drum and bass or breaks page.

Inbound: only `articles.html`, `index.html` and the unpublished psytrance page link here. The New Year's Eve guide and the parent hub do not yet; the proposal requires that line to be shown to the owner first.

## 6. Coverage gaps
- Dreamstate was missing, and is a big-room city event with a 2027 date. Added in §3.
- Knockout Outdoor was missing. Added in §3.
- Ministry of Sound Summer Dance Festival, in December across Gold Coast, Sydney, Perth and Melbourne, came up and was not checked further. Decide whether it belongs.
- The top three recommendations are all sold out or balloted. Nothing tells a reader what can still be booked except Ultra, Dreamstate and Subsonic by inference. Worth one line in How to choose once ticket status is checked.

## 7. Cuts or merges
- Cut Listen Out and hypersonic from the body and table, and move both to Not on this list.
- Cut the process sentences: `That figure comes from the organisers' announcement` and `A date found only on a listing site is marked as listed`.
- Cut repeated DJ Mag ranks from the Pitch section.
- FAQ answers repeated the body almost word for word on Ultra, Pitch and Beyond the Valley. The rewrites in §3 fix all three.

## 8. Media actions
| Image | File page | Licence | Status |
|---|---|---|---|
| beyond-the-valley-2022 | https://commons.wikimedia.org/wiki/File:Nelly_Furtado_at_Beyond_the_Valley_2022.jpg | Claimed CC BY 2.5; source is an NME feature, no permission record | Fail. Remove (Blocker 4) |
| listen-out-2017 | https://commons.wikimedia.org/wiki/File:Brockhampton_at_Listen_Out_2017.jpg | Own work, Vces5379, CC BY-SA 4.0, 1,024 × 575 | Licence pass. Remove with the section |
| grampians-halls-gap | https://commons.wikimedia.org/wiki/File:View_of_Grampians_from_Halls_Gaps_20230216_1.jpg | Own work, DXR, CC BY-SA 4.0, Quality image | Pass |
| tocumwal-beach | https://commons.wikimedia.org/wiki/File:Tocumwal_Town_Beach_008.JPG | Own work, Mattinbgn, GFDL or CC BY 3.0, ratio matches 1200×803 | Pass. File identity inferred from credit and ratio, since the media JSON gives no URL |
| riverwood-downs | https://commons.wikimedia.org/wiki/File:Riverwood_Downs_Sunset_(Explored)_-_Flickr_-_mdalmuld.jpg | Marc Dalmulder, CC BY 2.0, FlickreviewR passed 2020 | Pass |

- Add these file URLs to `media/best-edm-festivals-australia.json`, which has none.
- Media rules on the built page: text, image, text holds everywhere except Blocker 5. No figure directly after an H2 or H3. No figure next to the Intercell embed.
- Coverage: 6 of 9 argued sections carry media without the table, 67%. After removing two figures: the raves section keeps the mix and the biggest section loses its image, so 5 of 9 without the table and 6 of 9 with it. That is 56% or 67%; if the table does not count, source one Beyond the Valley or Barunah Plains image with a real licence.
- No bare section over 450 words; the longest is 198.
- All listening blocks are cyan: four carry `article-media-band-cyan`, and `.listening-block` defaults to `var(--cyan)` at `thecatrave-article.css` line 425.
- No reuse: the five image names appear only in this guide, its card and cover. `xBP4SB0Pbjw` appears only here and in Selector data.

## 9. Unresolved questions
- Owner: restore `, Ultra` to the title now that Ultra has dates, or keep the shorter one? Approved wording had it.
- Owner: should a page leading with three sold-out or balloted festivals stay ordered that way, given readers land here to plan? Not a fact issue.
- Owner: is hypersonic's mention under Not on this list wanted, given the cancellation may change? Refresh after 2027 announcements.
- Writer: open DJ Mag ranks, the Strawberry Fields organiser site and Knockout's own channels in Chrome. This review's fetches were refused.
- Publish order: the psytrance guide must go first, or both links change.
- Stage 6 validation was not run for this topic, per the record given.
- The hypersonic notice has no date, and its 7-day transfer window implies recent posting. Recheck on publish day.

## 10. Final acceptance checklist

### Facts: fail
Evidence: §4. Five items false or stale (hypersonic, Ultra, Pitch status, Listen Out, raves opener). Two dates remain medium until an organiser page is opened.

### Editorial: fail until §3 is applied
§0 greps on the built page text, 2,006 words, rerun after the last rebuild:

| Term | Count | Hits |
|---|---|---|
| complete | 0 | |
| full | 0 | |
| whole | 0 | |
| uninterrupted | 0 | |
| an hour | 1 | `on 300 acres an hour north of Sydney`, a distance, keep |
| in full | 0 | |
| jungle | 0 | |
| drum and bass | 0 | |
| breaks | 3 | Owner playlist, first mix and second mix descriptions, disclosed promotion, stay |
| Wikipedia | 0 | |
| not .* but | 0 | |
| matters | 0 | |
| the point | 0 | |
| em dash, en dash | 0 | |

Also 0 for Ahrefs, Planner and the stock vocabulary set (crucial, vibrant, pivotal, landscape, testament, enduring, delve). The unused Bandcamp description in `festival-roundup.mjs` mentions breaks, but it is not rendered on this page.

Banner, first section, FAQ: no shared sentence between banner and intro. FAQ and body shared near-identical wording on Ultra, Pitch and Beyond the Valley; fixed by §3.

Humanizer record, as given:
- `If you want the largest crowd, go to Beyond the Valley. If you want a smaller, house and techno weekend, go to Pitch. If you only want one big night, go to hypersonic.` became `Beyond the Valley has the largest crowd, Pitch is the smaller house and techno weekend, and hypersonic is one big night.` That sentence now takes Dreamstate.
- `Looking elsewhere? See` became `For the rest of the region, see`, now reworded again in §3.
- The intro's first sentence was rewritten so it no longer repeats the banner.

### SEO: pass, with conditions
All six terms remain (§5). `audit-keywords.mjs` passed. Title question open (§9). Publish-order dependency on the psytrance guide.

### Media: fail
Blockers 4 and 5. Licences for three of the kept images pass (§8). Rerun the coverage count after the removals.

### Implementation: partial
- `node audit-all.mjs`: build plus 27 audits passed. It rebuilds first, so this review regenerated every page at 19:37 on 31 October. See below.
- `npx html-validate best-edm-festivals-australia.html`: no errors.
- `npm run check:html` as a whole, `npm run check:layout` and `npm run check:links`: not run.
- All audits passing did not catch any Blocker here, so they are not evidence the page is ready.

Side effect to note: `audit-all.mjs` runs `build()`, which this review did not know when it ran the command, and the brief barred editing published files. The sources were not changed. `git status` afterwards lists the same 15 modified files as at the start of the session, and no others, though it cannot show whether parallel sessions' work in progress was built into those 15. Nothing was reverted, because git was out of bounds.
