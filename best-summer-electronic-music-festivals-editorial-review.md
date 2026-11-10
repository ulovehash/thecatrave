# Best summer EDM festivals 2027 editorial review

Reviewed 2026-11-10 against `best-summer-electronic-music-festivals-draft.md`, `build-summer-festivals-article.mjs`, `keywords/best-summer-electronic-music-festivals.json`, `media/best-summer-electronic-music-festivals.json` and the built `best-summer-electronic-music-festivals.html`. Independent of the writer. Dates were checked against each festival's own site fetched with curl on 2026-11-10, then against search and listings where the site was silent. "Draft" line references below mean the draft file; "Generator" means `build-summer-festivals-article.mjs`.

## 1. Verdict
Blocked until revisions. The structure, voice, criteria section and the confirmed/listed distinction are sound, and the §0 language greps are clean. Two Blockers are reader-facing date claims that the sources contradict: Houghton 2027 is announced and on sale (the draft says it is not), and Unknown Perception's 2027 edition is listed by Resident Advisor for April, outside the summer and not "unannounced". Seven Majors follow: a sold-out festival not marked as such, two listed dates that the festival publishes itself, a banner that implies a Tomorrowland date, an unsourced Waking Life date, a "cheap" price claim, and a weak Bass Coast embed. With the Blocker and Major wording applied the page is ready for the owner. The date-confirmation claim in the opening ("marked as confirmed only when the festival's own site gives them") is the page's promise, so these errors cut deeper than usual.

Stage 6 (topic validation) is a separate stage and is not covered here; the registry comment in `festival-editions.mjs` ("Houghton ... Freerotation, The Great Beyond and Unknown Perception had no 2027 dates yet") must be updated with the fixes, since it is now wrong for two of the names.

## 2. What already works
- The criteria section states three tests and the table carries confirmed and listed dates visibly differently. Keep it.
- Verified against the festival's own site, as written: Untold 5 to 8 August 2027 (untold.com); Parookaville 16 to 18 July 2027, Airport Weeze (parookaville.com); Creamfields Thu 26 to Sun 29 August 2027 (creamfields.com); Ultra Europe 9, 10, 11 July 2027, Split (ultraeurope.com); Beyond Wonderland at the Gorge 25, 26, 27 June 2027 (pnw.beyondwonderland.com); Sónar 17, 18, 19 June 2027 (sonar.es); Awakenings 9 to 11 July 2027, Hilvarenbeek (awakenings.com); Dekmantel 29 July to 2 August 2027 (dekmantelfestival.com FAQ); Kappa FuturFestival 2 to 4 July 2027, Parco Dora (kappafuturfestival.it); NACHTI 30 July to 1 August 2027, Bungalowdorf Olganitz (nachtdigital.de); Bass Coast 9 to 12 July 2027, Merritt (basscoast.ca); Kala 2 to 9 June 2027, Dhërmi (kala.al; the draft's "ticket includes a hotel" is confirmed by kala.al/tickets: "All tickets include hotel accommodation").
- Defqon.1 24 to 27 June 2027 is confirmed by Q-dance's announcement as reported by several outlets and by the site's own Defqon.1 guide; defqon1.com itself prints no date (see M1 for what it does print).
- "Not announced" is true for Tomorrowland Belgium (tomorrowland.com calendar lists no Belgium 2027 entry), Electric Forest (site still says June 25-28, 2026) and HARD Summer (site still says August 1+2, 2026). The 2026 dates the draft gives for those match.
- Garbicz figures match the founder interview (electronicgroove.com/interview-juval-dieziger-2026/): first edition about 900, about 11,000 guests today, ninety minutes from Berlin, Bar25 and Holzmarkt, founded 2013 with the Bachstelzen collective. Garbicz 29 July to 2 August 2027 is a Techno Airlines listing, correctly labelled as listed.
- The Great Beyond facts match ra.co/news/84527: 24 to 26 July 2026, Minnesota River Valley Sanctuary and Retreat, Dustin Zahn with Steve and Jasmine Seuling of Intellephunk, debuted 2021, "a tighter, communal experience by emphasizing fewer stages and shorter walking distances".
- Houghton 2026 on 6 to 9 August, Freerotation 2026 on 10 to 12 July, Elements 2026 on 7 to 9 August, Waking Life, Gottwood and Tec-Troit 2026 facts are supported by listings (see ledger).
- The four YouTube IDs resolve by oEmbed to official channels and match their captions (section 7).
- Three of the four new images match their Commons file, author, date and licence; the fourth needs a name check (m5).
- No dnb, jungle or breaks angle in editorial copy; `breaks` appears once, in the owner's own disclosed playlist card. No line-ups, prices, set times or production teaching. No em dashes. No "full / complete / whole set" about any set (the one `whole` hit is "across the whole year").

## 3. Priority revisions

### Blocker

**B1. Houghton 2027 is announced, and the page says it is not. The statement appears in four places.** The festival's own site (houghtonfestival.co.uk) says: "Houghton 2027 will take place from 5th - 8th August." The draft says the dates "have not been announced" in the Houghton section, the table, the FAQ and the registry comment. This is a confirmed date on the festival's own site, so it moves to the confirmed side of the page's own rule.
- Old (Houghton section): "The 2026 edition ran from 6 to 9 August, and the 2027 dates have not been announced."
- New: "Houghton 2027 is on 5 to 8 August."
- Old (Generator table row): `['Houghton', 'Norfolk, England', 'Not announced (6 to 9 August in 2026)', 'House, techno, electronic', 'About 10,000', 'Long sets, all night']`
- New: `['Houghton', 'Norfolk, England', '5 to 8 August', 'House, techno, electronic', 'About 10,000', 'Long sets, all night']`, placed in date order beside Untold (both start 5 August).
- Old (FAQ, last answer): "Of the festivals here, Electric Forest, HARD Summer, Houghton, Freerotation, The Great Beyond and Unknown Perception had not announced 2027 dates on 10 November 2026."
- New: "Of the festivals here, Electric Forest, HARD Summer, Freerotation and The Great Beyond had not announced 2027 dates on 10 November 2026."
- Also correct the comment in `festival-editions.mjs` (around line 103) and the Generator header, which list Houghton and Unknown Perception as undated. Tickets: the home page's "Buy Tickets" is live, so the festival is selling; the page does not need to say more, since prices and tickets are outside scope.

**B2. Unknown Perception: Resident Advisor lists a 2027 edition for 16 to 18 April, so "not announced" is wrong and the festival is not a summer festival in 2027.** RA's event page "Unknown Perception Campout 2027" (ra.co/events/2564895) gives 16 to 18 April 2027, a private campground one hour from Los Angeles, camping included, line-up TBA. The page is JavaScript-rendered and curl could not read it, so this rests on a search-engine reading of the RA page and has medium confidence: the writer must open the RA page in a browser before accepting the wording below. If it confirms April, the draft's own first criterion (held between June and August) excludes the festival, and it moves to "Not on this list". The 2026 facts (5 to 7 June, 350 cap, RE/FORM, one hour from LA) are confirmed by ra.co/news/84516. Note also "a year after the first": the first edition was in August 2025 (Dirty Epic and RA both say "last summer"), so "a year after" is loose.
- Old (section, whole paragraph): "Unknown Perception is a campout about an hour from Los Angeles, run by the RE/FORM crew and capped at 350 people. Its second edition was on 5 to 7 June 2026, a year after the first. The 2027 dates have not been announced."
- New (only if RA confirms April; drop the whole `###` section, its table row and the "closest thing to Garbicz" mention below): none in the section. Add to "Not on this list": "**Unknown Perception**, the 350-person techno campout near Los Angeles, is listed by Resident Advisor for 16 to 18 April 2027, before the summer."
- Old (How to choose): "In the US, The Great Beyond and Unknown Perception are the closest thing to Garbicz, and Tec-Troit is free."
- New: "In the US, The Great Beyond is the closest thing to Garbicz, and Tec-Troit is free."
- Old (FAQ "Are there festivals like Garbicz in the US?"): "The Great Beyond in Minnesota and Unknown Perception near Los Angeles are both small campouts with no big stage show."
- New: "The Great Beyond in Minnesota is a small campout with no big stage show."
- Old (Generator table): the row `['Unknown Perception', 'Near Los Angeles', 'Not announced (5 to 7 June in 2026)', ...]`
- New: delete the row. If RA does not confirm April and the writer wants to keep the section, the line becomes "Its second edition was on 5 to 7 June 2026, ten months after the first. The 2027 dates have not been announced." The keyword file and media record are unaffected.

### Major

**M1. Defqon.1 2027 is sold out and the page does not say so.** defqon1.com reads: "Defqon.1 is sold out! See you on the Holy Grounds in 2027", with "Tickets [sold out]" and a waiting list. A reader choosing a June weekend acts on this, and the page's own Defqon.1 guide says the 2026 edition was cancelled and passes rolled over.
- Old: "For hard dance, [Defqon.1](/defqon-1) is the festival the rest of hardstyle measures itself against, held at Biddinghuizen on 24 to 27 June 2027."
- New: "For hard dance, [Defqon.1](/defqon-1) is held at Biddinghuizen on 24 to 27 June 2027. Its site shows 2027 tickets as sold out, with a waiting list."
- Reason for dropping "the festival the rest of hardstyle measures itself against": it is an unsourced superlative (§0). Keep it only if a source states it.
- Generator table, Defqon.1 row, Scale: old `'Large camping'`, new `'Large camping, sold out'`.

**M2. Dirtybird Campout is labelled "listed" and the festival's own site gives the date.** northernnights.org (already cited in the page's own sources) reads "Dirtybird Campout x Northern Nights 2027 | July 15-18, Cook's Valley", "Admission passes + camping on sale now". By the page's rule this is confirmed.
- Old: "Listings give 15 to 18 July 2027, not yet confirmed by the festival."
- New: "Dirtybird Campout 2027 is on 15 to 18 July."
- Generator table, old `'Listed 15 to 18 July'`, new `'15 to 18 July'`.
- Sources line: remove "Dirtybird Campout" from the "Listed dates, not yet confirmed" list; Northern Nights is already in the first bullet.

**M3. Field Maneuvers dates are on the festival's own site.** fieldmaneuvers.com reads "20-22 August - Somewhere in Norfolk. Sign up for FM2027 here". The page says the dates are not confirmed.
- Old: "Listings give 20 to 22 August 2027, not yet confirmed by the festival."
- New: "Field Maneuvers 2027 is on 20 to 22 August."
- Generator table, old `'Listed 20 to 22 August'`, new `'20 to 22 August'`. Remove Field Maneuvers from the "Listed dates" sources bullet and add `fieldmaneuvers.com` to the first bullet.

**M4. The banner answer gives Tomorrowland "(July)" as if it were a 2027 date, and omits that the Parookaville-style confirmed dates are the only firm ones.** Tomorrowland Belgium has not announced 2027 (tomorrowland.com lists Brasil, Winter and Thailand, no Belgium 2027), and 2026 ran 17 to 19 and 24 to 26 July. The FAQ says "dates not yet announced"; the banner contradicts it and the banner is what Google shows.
- Old (Generator `answer`): "The biggest summer EDM festivals of 2027 are Tomorrowland in Belgium (July), Untold in Romania (5 to 8 August), Creamfields in England (26 to 29 August) and Beyond Wonderland at the Gorge in Washington (25 to 27 June)."
- New: "The biggest summer EDM festivals of 2027 are Tomorrowland in Belgium (dates not yet announced), Untold in Romania (5 to 8 August), Creamfields in England (26 to 29 August) and Beyond Wonderland at the Gorge in Washington (25 to 27 June)."
- Same fix in the draft's FAQ opening sentence if the banner and FAQ should not share the same sentence: the FAQ already says "(July, dates not yet announced)", so the banner and FAQ currently repeat the same four-festival list. Rewrite the FAQ answer: "Untold in Romania (5 to 8 August) and Creamfields in England (26 to 29 August) are the large ones with firm dates, then Beyond Wonderland at the Gorge in Washington (25 to 27 June). Tomorrowland has not announced 2027. For smaller festivals, Garbicz in Poland, NACHTI in Germany (30 July to 1 August) and The Great Beyond in Minnesota."

**M5. Waking Life 2027 "listings give mid-June" has no source, and the 2025 date is stale.** No 2027 listing was found for Waking Life; the only 2027 hits were an unverified third-party site. RA and Visit Portugal give 2026 as 17 to 22 June, not the 18 to 23 June 2025 the draft quotes.
- Old: "In 2025 it ran from 18 to 23 June. Listings give mid-June 2027, not yet confirmed by the festival."
- New: "In 2026 it ran from 17 to 22 June. The 2027 dates have not been announced."
- Generator table, old `'Listed mid-June'`, new `'Not announced (17 to 22 June in 2026)'`. Remove Waking Life from the "Listed dates" sources bullet. If the writer holds a listing I could not find, name it in the sources line instead.

**M6. "The city is cheap to stay in compared with Boom" is an unsourced price comparison.** Readers act on it and no source in the page or the Untold guide supports it.
- Old: "It is the big-stage festival of eastern Europe, and the city is cheap to stay in compared with Boom."
- New: "It is the big-stage festival of eastern Europe, built inside a football stadium and the park beside it."
- Old (How to choose): "If you want the spectacle, Tomorrowland is still the one to see once, and Untold is the cheaper trip with the same scale."
- New: "If you want the spectacle, Tomorrowland is still the one to see once, and Untold, which is on firm dates, is the large festival you can book now."
- Generator table, Untold `Best for`: old `'The cheaper big trip'`, new `'A big stage in a city'`.

**M7. The Bass Coast embed has no evidence behind it (§0).** The set (XRhnqMMchQc, DJ Minx, "Live at Bass Coast 2026") is on the festival's own channel and the oEmbed matches the caption, but it was uploaded on 3 November 2026 and has about 1,500 views. §0 requires a view count or best-of list that justifies every festival embed; the media record gives neither. The other three: Charlotte de Witte at Tomorrowland (about 28.8 million views, @tomorrowland), Ron Trent at Dekmantel (about 188,000, @dkmntl), Claude VonStroke at Dirtybird Campout West (about 303,000, @dirtybirdrecords). Record those counts in `media/best-summer-electronic-music-festivals.json`. For Bass Coast, either pick a set from the festival's channel with an evidence-based reason (most viewed), or record the reason this recent set is used. "The Detroit house DJ" for DJ Minx is also unchecked; drop it if no source is held.
- Old (Generator): `description: 'DJ Minx, the Detroit house DJ, at Bass Coast 2026, filmed by the festival.'`
- New: `description: 'DJ Minx at Bass Coast 2026, filmed by the festival.'`

### Minor

**m1. Dekmantel dates read as one festival in the park; two days are in the city.** dekmantelfestival.com FAQ: 29 July Oude Kerk, 30 July Melkweg and Paradiso, 31 July to 2 August Amsterdamse Bos. "Dekmantel is held in the Amsterdamse Bos" is right for the festival days only.
- Old: "Dekmantel 2027 runs from 29 July to 2 August."
- New: "Dekmantel 2027 runs from 29 July to 2 August, with the first two days in city venues and the festival grounds in the Amsterdamse Bos from 31 July."

**m2. "Dekmantel and Awakenings are the two biggest weekends in July" is unsupported and contradicts the table.** Dekmantel ends 2 August; Kappa FuturFestival and Ultra Europe are in July too.
- Old: "If you want house and techno, Dekmantel and Awakenings are the two biggest weekends in July, and Sónar is the city option in June."
- New: "If you want house and techno, Dekmantel and Awakenings are the two big Dutch weekends, Awakenings on 9 to 11 July and Dekmantel from 29 July, and Sónar is the city option in June."

**m3. "The one festival on this list that people plan a year in advance and fly in for from every continent" is an unsourced superlative (§0).** The Tomorrowland guide on this site states 2026 drew 400,000 from more than 200 countries.
- Old: "it is the one festival on this list that people plan a year in advance and fly in for from every continent."
- New: "its 2026 edition drew visitors from more than 200 countries."

**m4. Tec-Troit sourcing is misfiled.** The sources line cites tectroit.com for 2027 dates; the site prints no 2027 dates (only "the only free electronic music festival in Detroit", "A Non-Profit Organization", a 2025 video). The 2027 date is from a Techno Airlines listing, and the 2026 move from August to June is from Detroit EQ and RA coverage. "Run as a non-profit since 2026" rests on one search snippet; "all-ages" is on RA's event listing.
- Old (sources, first bullet): `${a('https://tectroit.com/', 'Tec-Troit')}` in the "2027 dates and history from each festival's own site" list.
- New: move it to the "Listed dates" bullet as "Techno Airlines (Tec-Troit)" with the Tec-Troit URL, and add the Detroit EQ interview as the source for the August-to-June move. Cut "and run as a non-profit since 2026" to "and run as a non-profit" unless the writer can cite the 2026 change.

**m5. The Gorge photo credit says "Daniel from Calgary"; Commons shows the author as "Daniel" (Flickr user 34024493).** Check the Flickr profile name before keeping "from Calgary". The file is `File:Gorge Amphitheatre.jpg`, dated 2006-05-28, CC BY 2.0, which matches the year and licence in the caption. The caption already discloses that it is the venue, not the festival.
- Old: "Photograph: Daniel from Calgary, CC BY 2.0."
- New: "Photograph: Daniel, CC BY 2.0." (or keep "from Calgary" if the Flickr profile says so).

**m6. Other sourcing gaps and loose phrasing.**
- Gottwood 10 to 13 June 2027 is "reported" (Techno Airlines, Visit Wales listing; gottwood.co.uk still shows 2026). The page uses "Reported" for Gottwood and "Listed" elsewhere; use one word. Add Techno Airlines (Gottwood) to the "Listed dates" sources bullet.
- Add the Electronic Groove Dieziger interview to the sources for the Garbicz figures.
- "Lists of the best summer music festivals mostly mean rock and pop with a dance tent." is an unsupported generalisation about other publishers. Cut it or state it of the search results the keyword pass actually read.
- "What they share is a cap on numbers, a site in the country, camping, long sets and line-ups that matter less than the place." The five-item run and the closing clause read as an AI list. Suggested: "What they share is a cap on numbers and a site in the country, with camping and long sets."
- "Elements started as a warehouse party in Brooklyn" was not checked against a source; cite or cut.
- "Freerotation ... run by the DJs Steevio and Suzybee" was not confirmed by my searches (membership and Baskerville Hall were). Confirm before keeping.

## 4. Fact-check ledger

| Claim | Type | Best source opened | Confidence | Action |
|---|---|---|---|---|
| Untold 5 to 8 Aug 2027 | date | untold.com ("Untold 5-8 August 2027 Cluj-Napoca") | high | keep |
| Parookaville 16 to 18 Jul 2027, Weeze | date | parookaville.com/en ("16-17-18 July 2027 Airport Weeze") | high | keep |
| Creamfields 26 to 29 Aug 2027 | date | creamfields.com ("Thu 26 Sun 29 August 2027, Daresbury Cheshire, Bank Holiday Weekend") | high | keep |
| Ultra Europe 9 to 11 Jul 2027, Split | date | ultraeurope.com ("July 9, 10, 11, 2027, Park Mladezi, Split") | high | keep |
| Beyond Wonderland at the Gorge 25 to 27 Jun 2027 | date | pnw.beyondwonderland.com ("June 25+26+27, 2027") | high | keep |
| Defqon.1 24 to 27 Jun 2027 | date | Q-dance announcement via edmidentity.com and technoairlines; site's own guide | medium-high (defqon1.com prints no date) | keep; add sold-out (M1) |
| Defqon.1 2027 sold out | status | defqon1.com ("Defqon.1 is sold out!", waiting list) | high | add |
| Sónar 17 to 19 Jun 2027 | date | sonar.es/en ("17.18.19 June 2027") | high | keep |
| Awakenings 9 to 11 Jul 2027 | date | awakenings.com/en ("Awakenings Festival 2027 July 9 - 11, Hilvarenbeek") | high | keep |
| Dekmantel 29 Jul to 2 Aug 2027 | date | dekmantelfestival.com/faq | high | keep; clarify venues (m1) |
| Kappa FuturFestival 2 to 4 Jul 2027 | date | kappafuturfestival.it ("02-04 July 2027, Parco Dora") | high | keep |
| NACHTI 30 Jul to 1 Aug 2027 | date | nachtdigital.de/en ("July 30 - August 1, 2027, Bungalowdorf Olganitz") | high | keep |
| Bass Coast 9 to 12 Jul 2027, Merritt | date | basscoast.ca ("July 9-12, Merritt, British Columbia, 2027, Limited Capacity") | high | keep |
| Kala 2 to 9 Jun 2027, Dhërmi, hotel included | date, fact | kala.al and kala.al/tickets | high | keep |
| Tomorrowland Belgium 2027 not announced | negative | tomorrowland.com calendar; Belgium page still shows 2026 weekends 17-19 and 24-26 July | high | keep; fix banner (M4) |
| Tomorrowland about 400,000 in 2026 | number | this site's Tomorrowland guide (cites 2026 drew 400,000) | medium (internal source) | keep |
| Electric Forest 2027 not announced; 2026 25 to 28 Jun | negative | electricforest.com ("June 25-28, 2026") | high | keep |
| HARD Summer 2027 not announced; 2026 1 to 2 Aug | negative | hardsummer.com ("August 1+2, 2026") | high | keep |
| Houghton 2027 not announced | negative | houghtonfestival.co.uk: "Houghton 2027 will take place from 5th - 8th August" | high (contradicted) | correct (B1) |
| Houghton 2026 6 to 9 Aug | date | Techno Airlines and RA coverage | medium-high | keep |
| Houghton about 10,000; licence for music around the clock since 2017 | number | one report for capacity; "24-hour licence" in two reports, no licensing date | low-medium | soften "Since 2017 it has had a licence for music around the clock" to "It runs music around the clock" unless a source dates the licence |
| Unknown Perception 2027 not announced | negative | RA listing "Unknown Perception Campout 2027", 16 to 18 April (via search; page JS-only) | medium | verify in a browser, then correct (B2) |
| Unknown Perception 2026 5 to 7 Jun, 350 cap, RE/FORM | fact | ra.co/news/84516 | high | keep |
| Garbicz 2026 30 Jul to 3 Aug; 2027 29 Jul to 2 Aug (listed) | date | technoairlines.com Garbicz pages; garbicz.com is a hosting placeholder | medium (listing) | keep as listed |
| Garbicz 900 first year, 11,000 now, founder quote, 2013 | number | electronicgroove.com Dieziger interview 2026-07-23 | high | keep; "guests" excludes about 3,500 artists and crew |
| NACHTI since 1998, about 3,000 tickets | fact | not re-opened in this pass | unchecked | confirm in the NACHTI row before publish |
| Freerotation not announced; 2026 10 to 12 Jul; members only | negative, fact | Skiddle and Festival Abroad (2026 only), membership by invitation | medium | keep; confirm Steevio and Suzybee (m6) |
| Gottwood 10 to 13 Jun 2027 reported, about 5,000 | date, number | Techno Airlines, Visit Wales; gottwood.co.uk still shows 2026 | medium | keep as reported (m6) |
| Waking Life 2025 18 to 23 Jun; 2027 listed mid-June | date | RA, Visit Portugal give 2026 as 17 to 22 June; no 2027 listing found | low | correct (M5) |
| Elements 6 to 8 Aug 2027 listed; 2026 7 to 9 Aug | date | Techno Airlines, ticket resale listing (8/6 to 8/8) | medium | keep as listed; official site blocked curl |
| Field Maneuvers 20 to 22 Aug 2027 | date | fieldmaneuvers.com ("20-22 August - Somewhere in Norfolk, Sign up for FM2027") | high | confirm (M3) |
| The Great Beyond facts | fact | ra.co/news/84527 | high | keep |
| Tec-Troit 2026 26 to 28 Jun; free; started 2011 in a tent in Harmonie Park; DJ Roach | fact | Detroit EQ interview, RA events, tectroit.com (free, non-profit) | medium | keep; fix sourcing (m4) |
| Dirtybird Campout x Northern Nights 15 to 18 Jul 2027, Cook's Valley | date | northernnights.org | high | confirm (M2) |
| Desert Hearts took 2026 off; Fusion returns 28 Jun to 2 Jul 2028; Movement and Lightning in a Bottle in May; Deep Tropics Labor Day; Draaimolen and Meakusma September | negative | not re-opened in this pass | unchecked | writer to attach one URL per item |

## 5. SEO preservation
- Title, description, banner and H1 share one intent. The title ("Best Summer EDM Festivals 2027: Big Stages and Underground") and description carry "summer edm festivals" and "best summer edm festivals" naturally.
- All eight keyword terms are in `keywords/best-summer-electronic-music-festivals.json` with the correct bucket-floor volumes (100 for "summer edm festivals", "edm festivals this summer", "summer edm music festivals", "best summer music festivals", "edm festivals 2027"; 10 for the rest). "best summer music festivals" is carried by the H2 of the biggest-festivals FAQ ("What are the biggest summer music festivals?"). Keep every term in any rewording above; none of the Old/New wording removes one.
- The FAQ and `FAQPage` markup: the page has one FAQPage block. After M4 and B1 the FAQ wording changes, so regenerate and check the visible FAQ matches the JSON-LD.
- Internal links: Tomorrowland, Untold, Parookaville, Creamfields, Ultra, Electric Forest, Defqon.1, Awakenings, Dekmantel, Sónar, Movement, Burning Man, Canada, USA, Europe and techno-festival guides all point to guides about that festival or a genuinely related roundup. No link to the jungle or drum and bass guides. Keep Sziget and Monegros only if they come from the shared related-articles block.

## 6. Coverage gaps
- None required. The roster is wide enough for the intent. If B2 removes Unknown Perception, the US underground section has three festivals (The Great Beyond, Tec-Troit, Dirtybird Campout) plus Bass Coast, which still answers the Garbicz-alternative question the owner asked for.

## 7. Media actions
- YouTube embeds, oEmbed run 2026-11-10: `mWvdsMwnGmM` is "Charlotte de Witte | Tomorrowland Belgium 2018", channel Tomorrowland (official, matches caption). `-d42GSJTBec` is "Dekmantel Ten - Ron Trent | Radar - Aug 4 / 2024", channel Dekmantel (official; the caption's "August 2024" and "Radar stage" match). `vtYFY51LhqE` is "Live From Dirtybird Campout West 2017: Claude VonStroke", channel DIRTYBIRD (official; "Dirtybird Campout West in 2017" matches). `XRhnqMMchQc` is "DJ Minx DJ Set | Live at Bass Coast 2026", channel Bass Coast Festival (official; matches). Evidence of view counts is M7.
- Images on Commons: Tomorrowland 2026 main stage, Ludovic Delot, CC BY 4.0, taken 18 July 2026 (caption matches). Untold 2024, Nuță Lucian, CC BY-SA 2.0 (matches). Nachtdigital 2014 file by Robert Richter for Nachtdigital, CC BY 2.0, August 2014, a daytime crowd under a canopy (alt text and caption match the image I opened). Gorge Amphitheatre, 2006, CC BY 2.0 (author name check, m5). The new Tomorrowland 2026 photograph (taken 18 July 2026) is only a few months old, which is fine, and the caption does not say anything that the Commons description contradicts.
- No image or set is reused from another guide; the sets are not in the Selector data by ID. No change required beyond M7 and m5.
- The Tomorrowland image and set sit in sections with a date claim; no media sits beside the Untold or Parookaville dates that is wrong.

## 8. Cuts or merges
- Cut "the festival the rest of hardstyle measures itself against" and the "cheap to stay" comparison (M1, M6).
- Merge the FAQ's first and second answers if the banner still repeats them after M4; the banner and the first FAQ answer currently share the same four-festival sentence (§0: compare banner, first section and FAQ).
- The registry comment in `festival-editions.mjs` and the Generator header comment duplicate the "had no 2027 dates yet" list; keep one and correct it.

## 9. Unresolved questions
- Open ra.co/events/2564895 in a browser and confirm 16 to 18 April 2027 for Unknown Perception (B2). If RA says something else, the B2 wording changes.
- Is a Tomorrowland date announced elsewhere (the Belgian site, not the group site)? tomorrowland.com's Belgium page still shows 2026; the draft's "usually in the winter" is consistent with the 2026 dates having been announced in December 2025 per this site's own guide.
- Which source supports the "not on this list" reasons (Desert Hearts, Fusion, Deep Tropics, Draaimolen, Meakusma)? Not checked here.

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Facts | Fail until B1, B2, M1 to M6 applied | Ledger above; each row names the page opened. 13 festival-site dates confirmed as written; Houghton contradicted by houghtonfestival.co.uk; Unknown Perception contradicted by RA listing; Defqon.1 sold-out status missing |
| Editorial | Pass after m2, m3 and m6 | Greps on the built page text: `complete` 0, `full` 0, `whole` 1 ("across the whole year", no set), `uninterrupted` 0, `in full` 0, `jungle` 0, `drum and bass` 0, `breaks` 1 (owner's own playlist card, disclosed), `Wikipedia` 0, `matters` 0, `the point` 0, `not .* but` 0, em dash 0, `crucial/vibrant/pivotal/landscape/testament/delve/ultimate/dive` 0. Banner and FAQ opening share a sentence (M4) |
| Humanizer | Not shown | No humanizer record is in the draft or builder. The writer must paste three before/after sentences it changed, or quote three sentences checked, per §0 |
| SEO | Pass | Eight terms retained; title, description, banner and H1 on one intent; internal links related; FAQ and FAQPage to be re-checked after edits |
| Media | Fail until M7 applied | Four embeds on official channels, oEmbed run; four Commons images match caption, author and licence (Gorge author name to confirm); one embed (Bass Coast) has about 1,500 views and no recorded reason |
| Implementation | Fail until the revisions are built | Audits not run for this review. After editing run `node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs`, `npm run check:layout`, `npm run check:links`. This review covers the files as read on 2026-11-10; any later edit needs a re-review |
