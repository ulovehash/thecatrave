# Best dance music festivals in the UK 2027 editorial review

Reviewed 2026-11-01 against `best-dance-music-festivals-uk-draft.md`, `build-uk-festivals-article.mjs`, `keywords/best-dance-music-festivals-uk.json`, `media/best-dance-music-festivals-uk.json` and the built `best-dance-music-festivals-uk.html`. Independent of the writer.

## 1. Verdict
Blocked until revisions. The structure works, the sections are short and useful, and the §0 language greps are clean. Eight Blockers stand, all reader-facing facts. Two festival dates are labelled "reported" although each festival's own site prints them, two capacity figures fail (Houghton's 15,000 has no source and Lost Village's 5,000 is stale), We Out Here is sold as small at a reported cap of 25,000, the Terminal V photograph is captioned as the wrong place, the FAQ says three festivals "lead" DJ Mag's list, and the Gottwood date is credited to an own-site source that search shows still on 2026. Eleven Majors follow: a keyword template repeated six times, two thin media gaps, and the sources list. Stage 6 validation was not run for this topic. With the Blocker and Major wording below applied and rebuilt, the page is ready, subject to the owner's calls in section 9.

## 2. What already works
- The page opens with a real answer, and the three criteria tests are short and specific.
- The confirmed and reported rule at draft line 19 is the right idea. It only needs its labels corrected against that rule.
- Verified on the festival's own site or an opened page as written: Terminal V moving to Glasgow for its 10th anniversary, Area V, The Hangar and The Greenhouse, Junction 2 at Boston Manor Park in summer 2027, Forbidden Forest at Belvoir Castle, the Warehouse Project's 2006 start and Depot Mayfield home.
- The clash between Creamfields and Lost Village is the most useful sentence on the page and is correct on the listed dates.
- The Warehouse Project and Hideout exclusions apply the criteria honestly.
- No dnb, jungle or breaks angle in the editorial copy. Boomtown's music list leaves those genres out, which suits the rule for this guide. `breaks` appears only in the owner's disclosed promotion.
- All six images are new to this page.

## 3. Priority revisions

Generator means `build-uk-festivals-article.mjs`. Everything else is in the draft.

### Blocker

**B1. Terminal V's date is confirmed, and its own site prints it.** https://terminalv.co.uk/festival prints "GLASGOW 04-06 JUNE 2027". https://terminalv.co.uk/updates/terminalv-10-years-location-news prints "Friday 4 to Sunday 6 June 2027". Under draft line 19 that is confirmed. The sources list cites the earlier update, which says 5 to 6 June and is out of date. The same page says "our first fully outdoor Scottish festival", so "fully outdoor" needs narrowing, and it gives no street address. "225 South Street" rests on one ticket listing, so it leaves the body.
- Old: "Terminal V began as an Edinburgh event and is moving to the Glasgow docklands for its 10th anniversary. The first three-day and fully outdoor edition is reported for 4 to 6 June 2027 at Clydeside Live, 225 South Street, with Area V as the main stage at the water's edge, plus The Hangar and The Greenhouse. It ranks 22nd in DJ Mag's list."
- New: "Terminal V is moving from Edinburgh to the Glasgow docklands for its 10th anniversary. The first three-day edition, and the first fully outdoor one in Scotland, is on 4 to 6 June 2027 at Clydeside Live on the north bank of the Clyde, with Area V as the main stage at the water's edge, plus The Hangar and The Greenhouse. It ranks 22nd in DJ Mag's list."
- Old (FAQ): "Yes. Terminal V is reported for 4 to 6 June 2027 in Glasgow, and Junction 2 returns to Boston Manor Park in London in summer 2027."
- New (FAQ): "Yes. Terminal V is on 4 to 6 June 2027 in Glasgow, and Junction 2 returns to Boston Manor Park in London in summer 2027."
- Generator table, old: `'Reported 4 to 6 June'`. New: `'4 to 6 June'`.
- Sources: see M11.

**B2. Forbidden Forest's date is confirmed.** https://www.forbidden-forest.co.uk/updates/you-asked-we-listened-whats-new-for-forbidden-forest-2027/ prints 28-30th May, Bank Holiday weekend, at Belvoir Castle. The wording below also carries the text fix in M3.
- Old: "Forbidden Forest is reported for 28 to 30 May 2027 at Belvoir Castle, near Grantham. It is one of the first dance weekends of the UK season."
- New: "Forbidden Forest is on 28 to 30 May 2027 at Belvoir Castle, near Grantham, over the late May bank holiday, which makes it one of the first dance weekends of the UK season. It is for over-18s, and the Friday is open to camping ticket holders only."
- Generator table, old: `'Reported 28 to 30 May'`. New: `'28 to 30 May'`.

**B3. Gottwood's date is credited to its own site, and that could not be supported. The "two of the dates" sentence is then wrong.** Search shows gottwood.co.uk still on 2026, Skiddle has "June 2027, TBA", and Visit Wales and Technoairlines give 10 to 13 June. The site's bot check blocked this review. Under the page's rule the date is reported until the owner sees it there. After B1 and B2 the count changes, and it reads as a process note. Keep `the 2027 dates that are confirmed and the ones that are only reported` in the deck and "with dates confirmed or not" on the home card, as both stay true. The wording below also carries the text fix in M3.
- Old: "Gottwood is on 10 to 13 June 2027 on Anglesey in north Wales. Its island setting makes it a long trip for most people, and that keeps it small."
- New: "Gottwood is reported for 10 to 13 June 2027 at the Carreglwyd Estate on Anglesey in north Wales. It is capped at about 5,000, and its 2026 edition ran around the clock. The island setting makes it a long trip for most people."
- Generator table, old: `'10 to 13 June'`. New: `'Reported 10 to 13 June'`.
- Old: "Check dates with the festival before you book travel, because two of the dates above are reported and not yet on the festival's own site."
- New: "Gottwood's date is still only reported and Junction 2 has not named its weekend, so wait for both before you book travel."

**B4. Houghton's 15,000 capacity has no source.** festivalcalendar.uk and festivalabroad say no official capacity is published. Listings give about 10,000 and about 12,000. Nothing opened gives 15,000. The 18 age limit could not be confirmed either, so it comes out unless the owner confirms it. Curator added, as he is the reason for the sentence that follows. Sources: Mixmag and The Quietus on 2017.
- Old: "Houghton has been held in the grounds of Houghton Hall in Norfolk since 2017, with a capacity of 15,000 and an age limit of 18. It covers house, techno, dub, jazz and ambient, and music runs around the clock. The 2027 edition is on 5 to 8 August. It suits people who care most about the selectors."
- New: "Houghton has been held in the grounds of Houghton Hall in Norfolk since 2017, and it is curated by Craig Richards. It publishes no capacity, and reports put it at about 10,000. It covers house, techno, dub, jazz and ambient, and music runs around the clock. The 2027 edition is on 5 to 8 August. It suits people who care most about the selectors."
- Generator table, old: `'15,000'`. New: `'About 10,000 reported'`.

**B5. Lost Village's "about 5,000 a day" is stale.** The figure comes from 2016 and 2017 coverage. The Lincolnite gives up to 15,000 and festivalcalendar.uk about 15,000. No official figure exists. Three edits. The FAQ wording is in B6.
- Old: "It draws about 5,000 a day, for ages 18 and over."
- New: "It publishes no attendance, and reports put it at up to 15,000. It is for ages 18 and over."
- Generator table, old: `'About 5,000 a day'`. New: `'Up to 15,000 reported'`.

**B6. We Out Here is not small.** Dorset Council licensing papers show up to 24,999 sought, and reports give a cap of 25,000. That is over twice Houghton's reported size. The section can stay, but the page must not sell it as small. Gottwood is the one provably small festival, so it leads.
- Generator `answer`, old: "For something small, go to Lost Village or We Out Here."
- New: "For something small, go to Gottwood or Lost Village. For the widest range of music, go to We Out Here."
- Old (FAQ): "Lost Village in Lincolnshire and We Out Here in Dorset are the two to look at first, with Gottwood on Anglesey and Forbidden Forest in Leicestershire behind them. Lost Village draws about 5,000 people a day."
- New (FAQ): "Gottwood on Anglesey, capped at about 5,000, and Lost Village in Lincolnshire are the two to look at first, with Forbidden Forest in Leicestershire behind them. We Out Here in Dorset is bigger, with a reported cap of 25,000."
- Old: "Its programme runs through soul, hip-hop, house, afrobeat, electronica and jazz, which makes it the most musically open festival here."
- New: "Its programme runs through soul, hip-hop, house, afrobeat, electronica and jazz, which makes it the most musically open festival here. It is also the largest in this section, with a reported cap of 25,000."
- Generator table, old: `['We Out Here', 'Wimborne St Giles, Dorset', '19 to 22 August', 'Soul, hip-hop, house, jazz', 'Not published here', 'Open ears']`
- New: `['We Out Here', 'Wimborne St Giles, Dorset', '19 to 22 August', 'Soul, hip-hop, house, jazz', 'Reported cap of 25,000', 'Open ears']`

**B7. The Terminal V photograph shows the wrong place.** The image shows the Queen's Dock pumping house with the SEC sign behind it, at Finnieston. Clydeside Live is further down the north bank. The caption calls this "the new setting for Terminal V". The photograph may stay as the river, not the site.
- Generator caption, old: `'The Clyde in Glasgow’s docklands, the new setting for Terminal V. Photograph: Rosser1954, CC BY-SA 4.0.'`
- New: `'The old Queen’s Dock pumping house on the Clyde, upriver from Terminal V’s new site. Photograph: Rosser1954, CC BY-SA 4.0.'`
- Draft alt text, old: `![The Clyde in Glasgow's docklands](figure:clyde)`. New: `![The Queen's Dock pumping house on the Clyde](figure:clyde)`.

**B8. The FAQ says three festivals lead DJ Mag's list, and "biggest city festival" has no proof.** Creamfields, Parklife and Boomtown are seventh, 13th and 20th. They lead only among UK entries. No source supports Parklife as the biggest city festival. "Next in scale" rests on a planning ceiling that the Boomtown guide itself warns against reading as attendance. This keeps `dance festivals england`.
- Old: "Creamfields is the biggest, with a capacity of 80,000. Boomtown is next in scale, with an approved limit of about 77,000 that includes crew and staff categories, and Parklife is the biggest city festival. Those are also the biggest dance festivals England has, and the three that lead DJ Mag's list."
- New: "Creamfields is the biggest, with a capacity of 80,000. Boomtown has an approved limit of about 77,000, a ceiling that includes crew and staff categories, not an attendance figure. Parklife is the other big one, and those three are the highest-placed dance festivals England has in DJ Mag's list."

### Major

**M1. One keyword template six times.** "<keyword> UK <people> <verb>" appears at draft lines 5, 29, 49, 63, 71 and 87. `WRITING.md` says to drop a term rather than wedge it. `audit-keywords.mjs` turns hyphens to spaces at line 30, so "UK-wide" satisfies the check and reads naturally. All seven terms survive these edits. Line 49 stays as it is, as a plain recommendation.
- Old (line 5): "This page compares the best dance music festivals UK fans can reach, by sound, size and setting, and shows which 2027 dates are confirmed."
- New: "This page compares the best dance music festivals UK-wide, by sound, size and setting, and shows which 2027 dates are confirmed."
- Old (line 29): "Terminal V in Glasgow and Junction 2 in London are the best techno festivals in the UK, and the two techno festivals UK fans name first. For techno elsewhere, see [the best techno festivals in the world](/best-techno-festivals)."
- New: "Terminal V in Glasgow and Junction 2 in London are the best techno festivals in the UK. For techno festivals UK listeners can fly to, see [the best techno festivals in the world](/best-techno-festivals)."
- Old (line 63): "Creamfields is the UK's biggest dance festival and the dance music festival UK audiences know best, with a capacity of 80,000 and about 55,000 camping on site."
- New: "Creamfields is the biggest dance music festival UK-wide, with a capacity of 80,000 and about 55,000 camping on site."
- Old (line 87): "The small dance festivals UK fans rate tend to sell out early and to book more carefully than the big ones. These are the ones to look at first."
- New: "Small dance festivals UK-wide tend to sell out early and to book more carefully than the big ones. These are the ones to look at first."
- Line 71: see M6.

**M2. Thin text between the Clyde figure and the Terminal V embed, and a false present tense.** `AGENTS.md` §7 asks for a substantial paragraph between an image and an embed. Line 37 has 20 words. "Also streams its stages" is also unsupported: Connect was a 2020 virtual platform, and the set was a Halloween stream, not a stage at the festival. Facts below come from Terminal V's update "10 years in the making".
- Old: "Terminal V also streams its stages. This one is Alan Fitzpatrick for Terminal V Connect, filmed with Beatport in 2020."
- New: "It began as a 2,000-capacity, one-day event at the Royal Highland Centre in Edinburgh, and it now reports more than 20,000 people a day. In 2020 it ran Connect, a streaming series. This set is Alan Fitzpatrick's for Connect, filmed with Beatport."

**M3. Thin text between images in the small section.** Figure, 27 words, figure, then 28 words and the own track. B2 and B3 lengthen both paragraphs to about 45 words. No further edit is needed, but do not cut those sentences when applying them.

**M4. "Two clashes" lists one clash.** Consecutive weeks do not clash, and the sentence says so itself.
- Old: "Two clashes are worth knowing about. Creamfields and Lost Village share 26 to 29 August, the bank holiday weekend. Houghton and Boomtown fall in consecutive weeks of August, so you can do both if you have the stamina."
- New: "One clash is worth knowing about: Creamfields and Lost Village share 26 to 29 August, the bank holiday weekend. Houghton and Boomtown fall in consecutive weeks of August, so you can do both if you have the stamina."

**M5. "Not published here" is a note to self on the reader's page, and the Scale column mixes kinds of fact.** Four cells, same fault as the psytrance guide's M5. B6 fixes We Out Here.
- Generator, old: `['Forbidden Forest', 'Belvoir Castle, Leicestershire', '28 to 30 May', 'Dance music', 'Not published here', 'An early start to the season']`
- New: `['Forbidden Forest', 'Belvoir Castle, Leicestershire', '28 to 30 May', 'House, techno', 'Three days', 'An early start to the season']`. "House, techno" needs the owner's confirmation, see 9.5. If not confirmed, keep `'Dance music'`.
- Generator, old: `['Gottwood', 'Anglesey, Wales', 'Reported 10 to 13 June', 'House, techno', 'Not published here', 'A small island trip']` (after B3)
- New: `['Gottwood', 'Anglesey, Wales', 'Reported 10 to 13 June', 'House, techno', 'About 5,000', 'A small island trip']`
- Generator, old: `'Techno', 'Not published here', 'Techno in London'`. New: `'Techno', 'Not announced', 'Techno in London'`.

**M6. Glastonbury's rave claim names nothing and proves nothing.** "One of the biggest rave settings in the country" and "runs it close" have no source. The Glastonbury guide names Arcadia, so the page should too. This keeps `rave festival uk`.
- Old: "Boomtown in Hampshire is the great rave festival UK crowds travel for, and the rave side of Glastonbury runs it close. Both go wider than dance music."
- New: "For a rave festival UK crowds travel to, start with Boomtown in Hampshire. Glastonbury has a rave side of its own. Both go wider than dance music."
- Old: "It is not a dance festival, but its late-night areas are one of the biggest rave settings in the country."
- New: "It is not a dance festival, but Arcadia and its other late-night areas give it a rave of its own."

**M7. Parklife has no venue.** Every other festival here has one. Listings put it at Heaton Park for 2027. The line-up is not announced.
- Old: "Parklife is a two-day city festival in Manchester, on 10 and 11 July 2027."
- New: "Parklife is a two-day city festival at Heaton Park in Manchester, on 10 and 11 July 2027."
- Generator table, old: `['Parklife', 'Manchester, England',`. New: `['Parklife', 'Heaton Park, Manchester',`.

**M8. Hideout's date has one reseller source.** Technoairlines only. The page's own rule applies.
- Old: "It is on 29 June to 2 July 2027, but it takes place in Croatia."
- New: "It is reported for 29 June to 2 July 2027, but it takes place in Croatia."

**M9. The two embeds are weak evidence for a guide that wants legendary sets.** `festivals-series.md` asks for popular sets from the festival's or artist's channel. Both play and both pass oEmbed, but neither is on such a channel. Terminal V Connect has 23,721 views (Beatport) and Jax Jones 28,740 (DJ Mag). They are the highest-viewed catalogue entries for those festivals, so nothing better is in stock, and each stays pending the owner's call in 9.3. The Fitzpatrick stream is a home stream, which the label already says. The catalogue does have a better fit for the rave section: Carl Cox at Boomtown 2019 from Boomtown's own channel. `evP2tr-HaGM`, 91,687 views, oEmbed title "Carl Cox - DJ set at NUCLEUS at Boomtown Fair 2019", author "Boomtown Festival", and not used in `boomtown-festival.html`. Adding it needs the Boomtown paragraph split so the figure and embed stay apart.
- Old: "Boomtown Chapter Six is on 11 to 15 August 2027 at Matterley Estate near Winchester. It is built as a temporary city, with street sets, actors and hidden venues, and its music runs across techno, house, dub, reggae, ska and punk. It ranks 20th in DJ Mag's list. See the [Boomtown guide](/boomtown-festival)."
- New, then the figure, then the third paragraph and the embed:
  - "Boomtown Chapter Six is on 11 to 15 August 2027 at Matterley Estate near Winchester."
  - `![The crowd at Boomtown, 2019](figure:boomtown)`
  - "It is built as a temporary city, with street sets, actors and hidden venues, and its music runs across techno, house, dub, reggae, ska and punk. It ranks 20th in DJ Mag's list. See the [Boomtown guide](/boomtown-festival). This is Carl Cox on Boomtown's Nucleus stage in 2019, from the festival's own channel."
  - `![Listening](figure:boomtown-set)`
- Generator `media`, add:
```js
boomtownSet: singleSet({
  label: 'Boomtown, heard from home',
  description: 'Carl Cox at Boomtown in 2019, from the festival’s own channel.',
  youtubeId: 'evP2tr-HaGM', genre: 'Boomtown, 2019', artist: 'Carl Cox', title: 'Nucleus, Boomtown 2019'
}),
```
Use whichever key form `festival-roundup.mjs` accepts in the marker, `figure:boomtownSet` if it matches keys exactly. Check the set's length and label against the rule on whole sets when applying.

**M10. "Most of these sell out" and "keeps it small" reach past the evidence.** Lost Village 2026 sold out and Gottwood's early birds went. Nothing opened covers most of the eleven. B3 removes "keeps it small".
- Old: "Then check the calendar. Most of these sell out, and the bank holiday clash means you have to choose between Creamfields and Lost Village."
- New: "Then check the calendar. Lost Village sold out in 2026, and the bank holiday clash means you have to choose between Creamfields and Lost Village."

**M11. The sources list does not match the page.** It claims own-site dates this review could not open, cites a superseded Terminal V update, names sites without links, and has no capacity sources.
- New `sourcesHtml` body:
```html
<li>2027 dates from each festival's own site: <a href="https://terminalv.co.uk/updates/terminalv-10-years-location-news" target="_blank" rel="noopener noreferrer">Terminal V</a>, <a href="https://www.forbidden-forest.co.uk/updates/you-asked-we-listened-whats-new-for-forbidden-forest-2027/" target="_blank" rel="noopener noreferrer">Forbidden Forest</a>, <a href="https://parklife.uk.com/" target="_blank" rel="noopener noreferrer">Parklife</a>, <a href="https://houghtonfestival.co.uk/" target="_blank" rel="noopener noreferrer">Houghton</a>, <a href="https://www.lostvillagefestival.com/" target="_blank" rel="noopener noreferrer">Lost Village</a>, <a href="https://www.weoutherefestival.com/" target="_blank" rel="noopener noreferrer">We Out Here</a>, <a href="https://www.junction2.london/" target="_blank" rel="noopener noreferrer">Junction 2</a>.</li>
<li>Reported dates: Visit Wales and Technoairlines (Gottwood), Technoairlines (Hideout).</li>
<li>Terminal V stages and setting: <a href="https://www.skiddle.com/news/all/Sigp-up-for-Terminal-V-2027-at-Clydeside-Live/62109/" target="_blank" rel="noopener noreferrer">Skiddle</a> and Time Out, 29 September 2026.</li>
<li>Capacity reports: festivalcalendar.uk (Houghton, Lost Village), The Lincolnite (Lost Village), Dorset Council licensing papers (We Out Here), Mixmag (Gottwood).</li>
<li>Poll ranks: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
<li>Creamfields, Boomtown and Glastonbury: this site's guide to each festival, linked above, which cites its own sources.</li>
```
Drop any of the five own-site links for which the owner's browser check in 9.1 fails, and move that festival to the reported line.

### Minor

- Parklife's rank, Terminal V's, Boomtown's and Lost Village's are each stated twice, once at line 17 and once in their section. Accurate. Keep or cut the section repeats, owner's taste.
- Creamfields. "It started in 1998 as a day out from Cream" then "at Daresbury" could be read as Daresbury from the start. The guide's 2026 "20th year at Daresbury" shows otherwise. Old: "The 2027 edition is on 26 to 29 August at Daresbury, and" New: "The 2027 edition is on 26 to 29 August at its long-time home of Daresbury, and"
- Boomtown alt text says "dancing", and the picture shows a crowd standing and watching. Generator, old: `'A large crowd dancing in front of a stage at Boomtown in August 2019'`. New: `'A large crowd on the hillside in front of a stage at Boomtown in August 2019'`.
- Line 91 "Oakhill Farm in Swinderby" rests on one guide listing, and others use Norton Disney or Witham St Hughs. Old: "and is held at Oakhill Farm in Swinderby, near Lincoln, in a wood" New: "and is held near Swinderby in Lincolnshire, in a wood"
- `media/best-dance-music-festivals-uk.json` note needs "Carl Cox at Boomtown 2019 (Boomtown Festival)" added if M9 is applied.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Terminal V 4 to 6 June 2027 | date | https://terminalv.co.uk/festival, https://terminalv.co.uk/updates/terminalv-10-years-location-news | high | B1 |
| Terminal V, first three-day, Clydeside Live, north bank, docklands | fact | Terminal V update above | high | B1 |
| Fully outdoor | fact | Same: "our first fully outdoor Scottish festival" | high, narrower than draft | B1 |
| 225 South Street | fact | One Skiddle listing, search summary only. Not on Terminal V's update | low | B1, cut |
| Area V at the water's edge | fact | Time Out, 29 September 2026; Skiddle 62109 | medium | keep |
| Terminal V 10th anniversary, Edinburgh origin, over 20,000 a day | fact | terminalv.co.uk updates | high, self-reported | B1, M2 |
| Terminal V streams its stages | fact | DJ Mag on the Connect platform, 2020 | wrong as present tense | M2 |
| Queen's Dock is the new setting | fact | Image shows SEC, Finnieston; Clydeside Live further down the north bank | wrong | B7 |
| Junction 2 summer 2027, Boston Manor Park | date | https://www.junction2.london/ prints "Summer 2027" | high | keep |
| The Bridge under the M4 | fact | Resident Advisor on the 2026 edition | high | keep |
| Houghton since 2017, curated by Craig Richards | fact | https://mixmag.net/feature/houghton-is-the-festival-of-the-year; https://thequietus.com/?p=23046 | high | B4 |
| Houghton 15,000 | numeric | None. festivalcalendar.uk: no official figure, listings 10,000 to 12,000 | none | B4 |
| Houghton age 18 | fact | No page found | low | B4, cut unless owner confirms |
| Houghton 5 to 8 August 2027 | date | Technoairlines only. Own site blocked by a bot check, not bypassed. Frontstage shows TBD | medium | keep; 9.1 |
| Houghton around the clock | fact | 24-hour licence in 2017 reviews | medium | keep |
| Parklife 10 and 11 July 2027 | date | Technoairlines, Stereoboard, Ents24. Own site blocked | medium | keep; 9.1 |
| Parklife at Heaton Park | fact | Same listings | high | M7 |
| Parklife biggest city festival | superlative | None | none | B8 |
| Creamfields 80,000, about 55,000 camping | numeric | `creamfields-festival.html`, Cheshire Constabulary 2026 | high | keep |
| Creamfields biggest dance festival in the UK | superlative | Same; Boomtown's ceiling is 77,000 | medium | keep; M1 wording |
| Creamfields 1998, Cream | fact | `creamfields-festival.html` | high | keep |
| Creamfields 26 to 29 August 2027, 30 years | date | Ents24, Technoairlines, Stereoboard; own guide | high | keep |
| Boomtown 11 to 15 August 2027, Chapter Six, Matterley | date | Boomtown guide, efestivals, Frontstage, DJ Mag 28 October 2026 | high | keep |
| Boomtown 77,000 limit | numeric | `boomtown-festival.html` | medium, planning ceiling | B8 |
| Glastonbury 23 to 27 June 2027 | date | `glastonbury-festival.html` | high | keep |
| Glastonbury one of the biggest rave settings | superlative | None | none | M6 |
| Lost Village began 2015 | date | The Lincolnite, May 2015 | high | keep |
| Lost Village about 5,000 a day | numeric | Crack 2017 for the old figure; The Lincolnite and festivalcalendar.uk up to 15,000 | stale | B5 |
| Lost Village 26 to 29 August 2027 | date | Technoairlines. Frontstage shows 27 to 29. Own site blocked | medium | keep; 9.1 |
| Lost Village 2026 sold out | fact | Technoairlines | medium | keep |
| Oakhill Farm, Swinderby | fact | UKFestivalGuides only; others differ | low to medium | Minor |
| We Out Here 19 to 22 August 2027 | date | Technoairlines, Food Mag. Own site blocked | medium | keep; 9.1 |
| We Out Here curated by Gilles Peterson, music list | fact | Technoairlines | high | keep |
| We Out Here is small | fact | Dorset Council papers, 24,999 sought; reports 25,000 | wrong | B6 |
| Forbidden Forest 28 to 30 May 2027 | date | https://www.forbidden-forest.co.uk/updates/you-asked-we-listened-whats-new-for-forbidden-forest-2027/ | high | B2 |
| Forbidden Forest 18+, Friday for campers | fact | Ticket Fairy | medium | B2 |
| Gottwood 10 to 13 June 2027 | date | Visit Wales, Technoairlines. Site still 2026 per search; Skiddle TBA | medium | B3 |
| Gottwood about 5,000, Carreglwyd, 2026 around the clock | numeric | Mixmag, edmidentity 2026 review, DJ Mag | medium to high | B3 |
| Warehouse Project 2006, Depot Mayfield | fact | Crack, DJ Mag 2026 | high | keep |
| Hideout 29 June to 2 July 2027 | date | Technoairlines only | low to medium | M8 |
| DJ Mag ranks | rank | Already confirmed per instruction, not rechecked | high | keep |
| Three lead DJ Mag's list | fact | Ranks 7, 13, 20 | wrong as written | B8 |
| Alan Fitzpatrick, `Bdnbe9U8Boo` | embed | oEmbed: "Terminal V Connect: Alan Fitzpatrick \| @Beatport Live", author Beatport. `selector-data.json`: 23,721 views, 2020 | high | M9 |
| Jax Jones, `KB64mrDQkBU` | embed | oEmbed: "Jax Jones From Creamfields 2021", author DJ Mag. `selector-data.json`: 28,740 views | high | M9 |
| Carl Cox, `evP2tr-HaGM` (proposed) | embed | oEmbed: "Carl Cox - DJ set at NUCLEUS at Boomtown Fair 2019", author Boomtown Festival; 91,687 views per catalogue pull | high | M9 |
| Image licences | licence | Commons, section 8 | high for five, medium for one | section 8 |

No Wikipedia in the body or sources. Pages that could not be opened: houghtonfestival.co.uk, parklife.uk.com, weoutherefestival.com, gottwood.co.uk and lostvillagefestival.com (bot check, not bypassed), beatportal.com (500), edinburghnews.scotsman.com (403), djmag.com individual festival pages (403), accessaa.co.uk (401), thelincolnite.co.uk direct (403), so its figures are from search results.

## 5. SEO preservation
- Keyword map terms, all retained after every revision above: dance music festival uk (M1, "dance music festival UK-wide"), techno festivals uk (M1, "techno festivals UK listeners"), house music festivals uk (line 49, unchanged), rave festival uk (M6), dance festivals england (B8), best dance music festivals uk (M1, "best dance music festivals UK-wide"), small dance festivals uk (M1). `audit-keywords.mjs` passed on the current build (1,495 terms, 266 pages). Re-run after revisions.
- H2s match `festival-roundups-proposal.md` section 5. `dance festivals uk 2027` returned no measured volume and stays unclaimed.
- Title is 64 characters. Unchanged.
- Registered at `festival-editions.mjs` line 71 with `ends: null`, `pages.mjs` line 86, `home-articles.mjs` line 605 and `audit-next-festival-guides.mjs` line 17. The home card wording survives every revision.
- Festival terms carry 2027 dates in the title, banner, table and body.
- Humanizer record: none was supplied for this guide. Three sentences checked here by hand: "The 2027 edition is on 5 to 8 August." "Both go wider than dance music." "It suits people who care most about the selectors." All plain, with no rewrite needed.

### §0 greps on built page text
Run on tag-stripped text of `best-dance-music-festivals-uk.html`.

```
complete          0
full              2   ("fully outdoor", "carefully"; neither concerns a set)
whole             0
uninterrupted     0
an hour           0
in full           0
start to finish   0
one piece         0
as it was         0
jungle            0
drum and bass     0
drum n bass       0
dnb               0
Wikipedia         0
not .* but        2
  "It is not a dance festival, but"   (true, stays)
  "Depot Mayfield, but it is a club season, not a festival"   (true, stays)
matters           0
the point         0
em dash           0
en dash           0
hours             0
minutes           0
ahrefs|keyword|planner|research|verified|fact-check|checked   0
drug|mdma         0
breaks            3   (own playlist and mix blurbs, disclosed, stay)
check             3   (Bandcamp button, "Then check the calendar", "Check dates with the festival")
updated           1   (hero "Updated 31 October 2026", the standard label)
```

No printed check date. B3 removes "Check dates with the festival". `audit-banned-phrases.mjs` passed (8 rules, 280 pages).

### Banner, first section, FAQ comparison
Six-word overlap test. Banner and intro: none. Banner and FAQ: none. Intro and FAQ: none. Banner and body: only "best dance music festivals in the", the title phrase. Body and FAQ: only the Terminal V date string, which stays as "is on 4 to 6 June" after B1. Revisions add no shared sentence.

## 6. Coverage gaps
- Early 2027 line-ups exist and the page is silent. The Prodigy are reported as Creamfields' first headliner, for Saturday 28 August (Technoairlines), and Bicep are reported as closing Boomtown (DJ Mag, 28 October 2026). One clause each would date the page well. Medium confidence for The Prodigy. Suggested for Boomtown, after "ska and punk": "Bicep are among the first names announced for 2027."
- Boomtown tickets are on sale (DJ Mag). Gottwood early birds went (edmidentity). Terminal V early birds opened on 2 October (Time Out). No ticket status is on the page. Owner's call.
- Houghton shares its organisers with Gottwood (Mixmag on 2017). A link between two sections, worth a clause if the owner confirms it still holds.
- Northern Ireland is absent, as are the London day festivals (South West Four, We Are FSTVL, Field Day, All Points East). Not researched here. None is required by the criteria, and "Not on this list" has only two entries. Owner's call.

## 7. Cuts or merges
- Cut "225 South Street" (B1), "with a capacity of 15,000 and an age limit of 18" (B4), "and that keeps it small" (B3), "the two techno festivals UK fans name first" (M1), "and the dance music festival UK audiences know best" (M1), "Check dates with the festival" (B3).
- Line 65 "This Creamfields set was filmed by DJ Mag in 2021." restates the block's own description. Keep it only because the embed needs a lead-in, and the set is pop-house under a house heading, which the owner may prefer to name.
- No section needs merging.

## 8. Media actions

| Key | File | Commons page opened | Author | Licence | Result |
|---|---|---|---|---|---|
| clyde | `queens-dock-glasgow` | `File:The Queen's Dock Pumping House, River Clyde, Glasgow, Scotland.jpg` (4896 × 2752, ratio matches 1200 × 674) | Rosser1954 | CC BY-SA 4.0 | Licence matches. Caption wrong, B7 |
| boston | `boston-manor-park` | `File:Lake in Boston Manor Park (01).jpg` | Ethan Doyle White | CC BY-SA 4.0 | Matches caption |
| houghton | `houghton-hall` | `File:Houghton Hall 20080720-1.jpg` series, exact frame not matched | Hans A. Rosbach | CC BY-SA 3.0 | Matches caption |
| boomtown | `boomtown-crowd-2019` | Not found by search; Commons API returned nothing for the crowd file. Warrenger's other Boomtown files carry the caption's credit | Sam Warrenger, per generator | CC BY-SA 4.0, per generator | Not independently read, see 9.4 |
| stgiles | `st-giles-house` | `File:St Giles House Wimborne St Giles - geograph.org.uk - 6755418.jpg` series, exact frame not matched | Clive Perrin | CC BY-SA 2.0 | Matches caption |
| belvoir | `belvoir-castle` | `File:Belvoir Castle - geograph.org.uk - 2483275.jpg` series, exact frame not matched | Julian Dowse | CC BY-SA 2.0 | Matches caption |

- Reuse: no image shared with another guide. The Boomtown guide uses `opening-ceremony-2019` and `scrapyard-2019`, both different. All 1200 and 320 webp files exist and dimensions match the generator. The Belvoir file set also holds concert photographs from the grounds, for example `File:Open air concert, Belvoir Castle - geograph.org.uk - 2483546.jpg`, closer to a festival image if the owner wants one.
- Embeds: `Bdnbe9U8Boo` and `KB64mrDQkBU` appear on this page and in `selector-data.json` only. `n9W4QUxcFjo` (Sama' Abdulhadi at Junction 2) looks like a natural addition but is already on `best-techno-festivals.html`, so this review does not propose it.
- Sequence: no figure touches an embed and none sits straight after a heading. Two thin gaps, M2 and M3, are closed by the new paragraphs. If M9 is applied, Boomtown's figure and embed are separated by a 50-word paragraph.
- Rhythm: only one of six images shows a festival, and the other five are venues or scenery. Honest, and each is captioned as a place. Parklife, Creamfields and Lost Village have no image. Parklife and Lost Village have no media at all, which is fine in short subsections.
- Word counts: Intro 65, criteria 139, glance 38, techno 158, house 194, rave 114, small 184, not listed 53, choose 94, FAQ 123. No bare section is over 450.
- Coverage: glance, techno, house, rave, small and choose carry media: 6 of 8 argued sections (75%). Bare: criteria, not listed (25%, under the 40% limit).
- Colour: own-listening components use `tone: 'cyan'` at lines 154, 253 and 344 of `site-components.mjs`. The two set blocks use the shared `listening-block`. No body section is toned.

## 9. Unresolved questions
1. Five official sites were behind a bot check, which this review did not bypass. The owner should open Parklife, Houghton, Lost Village, We Out Here and Gottwood in a browser. Any 2027 date not on the site moves to "reported". If Gottwood's is there, reverse B3's labels and rewrite its replacement line to name only Junction 2.
2. Houghton's domain. The generator links `houghtonfestival.co.uk`, and Technoairlines names `houghtonfestival.com`. Confirm which is live before the sources list ships.
3. Whether to keep Jax Jones and the Fitzpatrick stream (M9). They are the catalogue's top entries for those festivals but neither is on a festival's channel. A Selector refresh may surface better ones.
4. The Boomtown crowd file's Commons page was not found by API search. The owner or writer should open it from the source link kept with the image and confirm author and licence before the push.
5. Forbidden Forest's sound. The table's `'Dance music'` is a non-answer, and M5 suggests `'House, techno'` from general knowledge, not an opened page. The owner should confirm.
6. Houghton's 18 age limit. If the owner can confirm it, add back "and an age limit of 18".
7. We Out Here's cap rests on licensing papers seen in search results, and the granted figure was not opened. "Reported" carries that.
8. The shared playlist blurb, "placed here after the article's main answer", reads as a layout note. It is a site-wide component string, outside this review's scope, and goes to the owner.
9. `/best-techno-festivals` is untracked. Push it with this guide or the link breaks. It links back at its draft lines 103 and 120.
10. Read next is generated by `relatedArticles` and shows `/best-clubs-in-tokyo`, `/best-clubs-in-nyc`, `/best-clubs-in-budapest`, `/berghain`. No festival guide is among them. Weak fit, same as the psytrance guide's 9.10.

### Internal links
| Link | Where | Why it belongs |
|---|---|---|
| `/best-techno-festivals` | Techno intro | The same reader looking abroad; reciprocal. Untracked, see 9.9 |
| `/creamfields-festival` | Creamfields | The dedicated guide |
| `/boomtown-festival` | Boomtown | The dedicated guide |
| `/glastonbury-festival` | Glastonbury | The dedicated guide |
| `/best-electronic-music-festivals-europe` | Not on this list | Sends Hideout readers to the European list. File exists and is tracked |
| `/best-clubs-in-tokyo`, `/best-clubs-in-nyc`, `/best-clubs-in-budapest`, `/berghain` | Read next, auto | Weak fit, see 9.10 |

No jungle or dnb link appears.

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Facts | Fail until B1 to B8 and M2, M4, M6 to M8, M10 applied | Section 4 ledger; each row names the page opened or marks it low |
| Editorial | Pass after M1, M4, M6 | §0 greps all clear; no shared sentence; no em dashes, check dates, keyword tools, process commentary or production teaching; no emphasis on a set being whole |
| SEO | Pass | Seven terms kept in every new wording; `audit-keywords.mjs` passed; H2s match the proposal. Re-run after edits, as the UK-wide forms rely on the hyphen rule at line 30 |
| Media | Fail until B7, M2, M3 applied, then pass | Five licences read on Commons, one open (9.4); no reuse; counts under 450; 75% coverage; cyan only per `site-components.mjs` |
| Implementation | Fail until the revisions are built | `audit-banned-phrases.mjs` and `audit-keywords.mjs` passed on the current build. `audit-all.mjs` and the build were not run, as instructed. After editing, run `node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs`, `npm run check:layout`, `npm run check:links`. Push `/best-techno-festivals` in the same push |
