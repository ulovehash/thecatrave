# Best techno festivals 2027 editorial review

Reviewed 2026-11-01 against `best-techno-festivals-draft.md`, `build-techno-festivals-article.mjs`, `keywords/best-techno-festivals.json`, `media/best-techno-festivals.json` and the built `best-techno-festivals.html`. Independent of the writer.

## 1. Verdict
Blocked until revisions. The structure, voice, media placement and keyword coverage are sound, and the §0 language greps are clean, but three Blockers stand, all reader-facing facts. The largest is the answer to a heading the page targets: Nature One is called the biggest techno festival, while Kappa FuturFestival reported 125,000 and Awakenings 119,000 in 2026. Dekmantel and Monument both carry superseded dates. Ten Majors follow, mainly the table, the criteria and the embedded set. With the Blocker and Major wording below applied and rebuilt, the page is ready, subject to the owner's calls in section 9. Stage 6 validation was not run for this topic.

## 2. What already works
- Verified on organiser sites as written: Awakenings 9 to 11 July and Upclose 15 and 16 May at Houtrak; Time Warp 3 April, 19 hours and five floors; Kappa FuturFestival 2 to 4 July, noon to midnight, six stages, 18 and over; Stone Techno 9 to 11 July at Zollverein, 18 and over; DGTL 26 to 28 March at NDSM Docklands; Movement 29 to 31 May at Hart Plaza; MAYDAY 30 April, 19:00 to 07:00, four floors, Westfalenhallen; Nature One 29 July to 1 August, four days, 20 floors.
- The confirmed and listed distinction is the right idea. After the fixes below it applies to one date only, Verknipt at Strijkviertel.
- The Horst sentence is exact: presale is live, the 2027 dates are not published, and it describes itself as an arts and music festival.
- "Not on this list" gives real reasons, and Tomorrowland's is a fair use of the criteria.
- No dnb or jungle angle. `breaks` appears only in the owner's own disclosed promotion.
- All four images are new to this page, unique by md5, and their licences were read on their Commons file pages.
- The FAQ JSON matches the visible FAQ. Nothing repeats between banner, intro and FAQ beyond a date string and the phrase "best techno festivals in the world".

## 3. Priority revisions

Generator means `build-techno-festivals-article.mjs`. Everything else is in the draft.

### Blocker

**B1. Nature One is not the biggest on published figures.** Draft line 29 compares it only with festivals that have no figure on the page. Kappa FuturFestival reported 125,000 attendances from 152 countries in 2026 (L'Espresso, 6 July 2026). Awakenings reported 119,000 visitors over three days (festival director via ANP, nieuws.nl). Nature One's site says more than 60,000 (its header also shows about 65,000). The phrase `biggest techno festival in the world` stays in the H2, so audit-keywords still passes. Four edits.
- Old: "Nature One in Germany is the biggest on the figures published here, with more than 60,000 people, 350 DJs and 20 floors. No body counts techno festivals across the world, and festivals count in different ways, so that answer could change. Kappa FuturFestival sits higher in DJ Mag's poll, at eighth, and Time Warp is 14th."
- New: "No body counts techno festivals across the world, and festivals count in different ways, so read these as reported figures. Kappa FuturFestival has the largest, with 125,000 attendances over three days in 2026. Awakenings reported 119,000 visitors over three days the same year, and Nature One says more than 60,000 people across four days, with 350 DJs and 20 floors. In DJ Mag's poll, Kappa FuturFestival is eighth and Time Warp is 14th."
- Old: "The 2026 edition sold out as the largest in its history."
- New: "The 2026 edition sold out with 119,000 visitors, the largest in its history."
- Generator table, old: `'Six stages', 'Daytime in the open air'`
- New: `'125,000 attendances in 2026, six stages', 'Daytime in the open air'`
- Generator table, old: `'Largest edition yet in 2026', 'Production and scale'`
- New: `'119,000 visitors in 2026', 'A big techno weekend'`

**B2. Dekmantel's dates are now official and differ from the page.** dekmantel.com: "Dekmantel Festival returns to the Amsterdamse Bos from 29 July to 2 August 2027." The page gives 28 July to 1 August as listed, and sends readers to a guide for what is unconfirmed. See section 9 for the published guide, which is now stale.
- Old: "The festival has said it returns in 2027, listings give 28 July to 1 August, and the [Dekmantel guide](/dekmantel-festival) explains what is and is not confirmed."
- New: "The 2027 edition is on 29 July to 2 August, and the [Dekmantel guide](/dekmantel-festival) covers the tickets and the programme."
- Generator table, old: `'Listed 28 July to 1 August'`
- New: `'29 July to 2 August'`

**B3. Monument's date, status and age limit.** The organiser's site, home and info pages, gives 29 July to 1 August 2027, so the date is confirmed and one day shorter than the listing. Technoairlines reports the 2027 edition sold out and entry for ages 23 and over; the 2025 ticket page carries the same limit. No capacity is published anywhere opened, so "smallest" has no support.
- Old: "It is listed for 29 July to 2 August 2027. It is the smallest and most remote choice here."
- New: "The 2027 edition is on 29 July to 1 August, for ages 23 and over, and it is reported as sold out. It is the most remote choice here."
- Generator table, old: `'Listed 29 July to 2 August'`
- New: `'29 July to 1 August, reported sold out'`

### Major

**M1. Banner and FAQ claim Awakenings leads on production.** No source compares production across these festivals. The banner must also change after B1. "Techno-only" comes from this site's Awakenings guide.
- Generator `answer`, old: "For production and scale: Awakenings in the Netherlands (9 to 11 July) and Nature One in Germany (29 July to 1 August)."
- New: "For a big techno weekend: Awakenings in the Netherlands (9 to 11 July). For a very large camping weekend: Nature One in Germany (29 July to 1 August)."
- Old (FAQ): "Awakenings leads on production, Time Warp on the long indoor night and Movement on Detroit history."
- New (FAQ): "Awakenings is the pick for a big techno weekend, Time Warp for the long indoor night and Movement for Detroit history."

**M2. Criteria contradict the list.** The first test says techno is the centre of the programme, yet the page says Nature One's floors "range well beyond techno", Dekmantel "goes wider than techno", and the USA section says all three mix techno with house. Horst is an arts festival.
- Old: "Techno is the centre of the programme."
- New: "Techno is at or near the centre of the programme."

**M3. "First festivals are indoors" is unsupported, and the opening date is missing.** DGTL's site does not say it is indoors. Verknipt on 5 March is the earliest date on the page.
- Old: "The first techno festivals of 2027 are indoors, in spring."
- New: "The 2027 calendar opens in March, and Verknipt, Time Warp and MAYDAY are all indoors."

**M4. The table omits four festivals covered in the text,** including the earliest date of the year. Insert by date. Scale for Verknipt is FestivalInfo's maximum of 12,000.
- Generator, insert first: `['Verknipt', 'Amsterdam and Utrecht, Netherlands', '5 March, Ziggo Dome; listed 5 and 6 June, Strijkviertel', 'Hard techno', 'Up to 12,000 at the Ziggo Dome', 'Hard techno in an arena'],`
- Generator, insert after Movement: `['Terminal V', 'Glasgow, UK', '4 to 6 June', 'Hard techno', 'Three days', 'Hard techno in Scotland'],`
- Generator, insert after Monument: `['ARC', 'Chicago, USA', 'Not announced (Labor Day weekend)', 'House, techno', 'Four days in 2026', 'A city park at the end of summer'],`
- Generator, insert last: `['CRSSD', 'San Diego, USA', 'Spring not announced', 'House, techno, electro', 'Twice a year', 'A waterfront weekend']`

**M5. "Not published here" is a note to self that reached the reader.** Replace all five with what is known.
- Generator, DGTL, old: `'Not published here'`. New: `'Three days'`.
- Generator, Horst, old: `'Not published here'`. New: `'Three days in 2026'`.
- Generator, Stone Techno, old: `'Not published here'`. New: `'Three days'`.
- Generator, Dekmantel, old: `'Not published here'`. New: `'Five days'`.
- Generator, Monument, old: `'Not published here'`. New: `'Four days'`.

**M6. Verknipt's status is wrong, and the sentence is a process note.** The Ziggo Dome date is organiser-attributed by FestivalInfo (20 August 2026) and on RA. Only Strijkviertel rests on one listing. The advice to check is already given at the end of the page.
- Old: "Verknipt is listed for the Ziggo Dome in Amsterdam on 5 March 2027 and for Strijkviertel in Utrecht on 5 and 6 June 2027. Both dates come from listings, so check them with the promoter before you book."
- New: "Verknipt plays the Ziggo Dome in Amsterdam on 5 March 2027, and is listed for Strijkviertel in Utrecht on 5 and 6 June 2027."

**M7. Terminal V carries no 2027 date.** The rule is that festivals carry 2027 dates, and the UK guide reports them. The Glasgow move is confirmed by Time Out (29 September 2026). The anchor `#terminal-v` exists on the UK page.
- Old: "[Terminal V](/best-dance-music-festivals-uk) in Glasgow is the third, and it is covered in the UK guide."
- New: "[Terminal V](/best-dance-music-festivals-uk#terminal-v) in Glasgow, on 4 to 6 June 2027, is the third, and it is covered in the UK guide."

**M8. The calendar paragraph misses Dekmantel and overstates the gaps.** Three festivals start on 29 July. Kappa FuturFestival's following weekend holds Awakenings and Stone Techno, so "a free weekend either side" is false as a recommendation.
- Old: "Awakenings and Stone Techno clash on 9 to 11 July, and Nature One overlaps with Monument at the end of the month. Time Warp, Movement and Kappa FuturFestival can all fit into one year with a free weekend either side."
- New: "Awakenings and Stone Techno clash on 9 to 11 July, and Dekmantel, Nature One and Monument all start on 29 July. Time Warp, Movement and Kappa FuturFestival can all fit into one year."

**M9. The set is from a festival not on the list, and its line is inaccurate.** The series rule is a set from the festival itself, from its own or the artist's channel. "A dedicated techno weekend" is wrong: this was a single Saturday, Junction 2: Inner-City at Tobacco Dock on 28 August 2021, and the block sits under Monument as if it belonged there. Replace it with Freddy K at Dekmantel, from the festival's own channel, unused on any page. oEmbed returned "Dekmantel Ten - Freddy K | Radar - Aug 2 / 2024", author Dekmantel. The catalogue records 116,295 views and tags it techno and hard techno. The block then follows a paragraph, so §7 still holds.
- Old: "For the sound of a dedicated techno weekend, this set was filmed in The Great Gallery at Junction 2 in London.", blank line, `![Listening](figure:junction)`
- New: delete both. After the Dekmantel paragraph, before `### DGTL Amsterdam, Netherlands`, insert "This is Freddy K on the Radar stage at Dekmantel Ten in August 2024, from the festival's own channel.", blank line, `![Listening](figure:dekmantel)`
- Generator, old: the `junction: singleSet({...})` entry.
- New: `dekmantel: singleSet({ label: 'Dekmantel, heard from home', description: 'Freddy K on the Radar stage at Dekmantel Ten, August 2024.', youtubeId: 'CLDcCyRpoD4', genre: 'Dekmantel, 2024', artist: 'Freddy K', title: 'Radar' })`
- `media/best-techno-festivals.json`, old: "Set: Sama' Abdulhadi at Junction 2 (Beatport)."
- New: "Set: Freddy K at Dekmantel Ten, 2024 (Dekmantel channel, CLDcCyRpoD4)."
- If the owner keeps the Junction set, the line must read: "This set was filmed in The Great Gallery at Tobacco Dock in London for Junction 2: Inner-City in 2021." It should then sit under the "Not on this list" section beside the Junction 2 mention, and the Partyflock listing that names another venue stays unresolved.

**M10. Sources are incomplete and partly wrong.** Stone Techno, Horst, Dekmantel, Terminal V and every attendance figure have no source. DGTL's URL now redirects, Monument appears on both sides, and Dekmantel is no longer a listing.
- Generator, replace the whole `sourcesHtml` value with:

```html
<ul>
<li>2027 dates from each festival's own site: <a href="https://www.awakenings.com/" target="_blank" rel="noopener noreferrer">Awakenings</a>, <a href="https://www.time-warp.de/" target="_blank" rel="noopener noreferrer">Time Warp</a>, <a href="https://movementfestival.com/faqs" target="_blank" rel="noopener noreferrer">Movement</a>, <a href="https://www.kappafuturfestival.it/" target="_blank" rel="noopener noreferrer">Kappa FuturFestival</a>, <a href="https://www.nature-one.de/" target="_blank" rel="noopener noreferrer">Nature One</a>, <a href="https://www.mayday.de/" target="_blank" rel="noopener noreferrer">MAYDAY</a>, <a href="https://dgtl-festival.com/en/dgtl-amsterdam/" target="_blank" rel="noopener noreferrer">DGTL</a>, <a href="https://www.stone-techno.com/" target="_blank" rel="noopener noreferrer">Stone Techno</a>, <a href="https://www.dekmantel.com/" target="_blank" rel="noopener noreferrer">Dekmantel</a>, <a href="https://festival.mnmt.no/" target="_blank" rel="noopener noreferrer">Monument</a>.</li>
<li>Horst: <a href="https://www.horstartsandmusic.com/" target="_blank" rel="noopener noreferrer">the festival's site</a>.</li>
<li>Attendance: <a href="https://lespresso.it/c/cultura/2026/07/06/kappa-futur-festival-torino-2026-chiusura-messico-monterrey/63264" target="_blank" rel="noopener noreferrer">L'Espresso on Kappa FuturFestival</a>, <a href="https://nieuws.nl/entertainment/awakenings-beleeft-grootste-editie-ooit-met-119000-bezoekers" target="_blank" rel="noopener noreferrer">ANP via nieuws.nl on Awakenings</a>, and Nature One's own site.</li>
<li>Verknipt: <a href="https://www.festivalinfo.nl/news/59214/Verknipt-keert-maart-2027-terug-naar-de-Ziggo-Dome-voor-nieuwe-editie/" target="_blank" rel="noopener noreferrer">FestivalInfo on the Ziggo Dome</a> and <a href="https://www.technoairlines.com/festival/verknipt-festival-utrecht-netherlands-2027" target="_blank" rel="noopener noreferrer">Technoairlines on Utrecht</a>.</li>
<li>Monument's sell-out and age limit: <a href="https://www.technoairlines.com/festival/monument-festival-veggli-norway-2027" target="_blank" rel="noopener noreferrer">Technoairlines</a>.</li>
<li>Terminal V: <a href="https://www.timeout.com/uk/news/glasgow-clydeside-live-terminal-v-new-venue-092926" target="_blank" rel="noopener noreferrer">Time Out</a>.</li>
<li>Poll ranks: <a href="https://djmag.com/top100festivals" target="_blank" rel="noopener noreferrer">DJ Mag: Top 100 Festivals 2026</a>.</li>
<li>Awakenings, Time Warp, Movement, Dekmantel and ARC: this site's guide to each festival, linked above, which cites its own sources.</li>
</ul>
```

### Minor

**m1. Intro says the calendar runs to August.** ARC is in September.
- Old: "a calendar that starts in March and runs to August"
- New: "a calendar that starts in March and runs through the summer"

**m2. Time Warp is not the easiest.** MAYDAY is shorter, and the page says so.
- Old: "It is a single indoor night and day, which makes it the easiest festival here to fit into a weekend."
- New: "It is a single indoor night and day, so it fits easily into a weekend."

**m3. Time Warp's sound.** This site's own guide calls it house and techno.
- Generator table, old: `'Techno', '19 hours, five floors'`
- New: `'Techno, house', '19 hours, five floors'`

**m4. A throwaway judgement on the poll.**
- Old: "It ranks 94th in DJ Mag's list, far below what its crowd would suggest."
- New: "It ranks 94th in DJ Mag's list."

**m5. MAYDAY's floors.** Its site also lists classic techno.
- Old: "on four floors of hard techno, raw, bounce and acid."
- New: "on four floors of hard techno, raw, bounce, acid and classic techno."

**m6. CRSSD age limit.** ARC's is given, and CRSSD's is the stricter one.
- Old: "CRSSD runs twice a year at Waterfront Park in San Diego, and books house, techno, electro and indie dance."
- New: "CRSSD is a 21-plus festival held twice a year at Waterfront Park in San Diego, and it books house, techno, electro and indie dance."

**m7. Two keyword wedges.** "Of the techno festivals Europe offers" and "the techno festivals USA fans can reach" are written around exact phrases, which `WRITING.md` says to drop. Their H2s already serve the intent. Owner's call, because audit-keywords matches exact strings: if these edits go in, both terms must leave `keywords/best-techno-festivals.json`, or the audit fails.
- Old: "Of the techno festivals Europe offers, Time Warp, Kappa FuturFestival, Stone Techno and Dekmantel are the best for a city trip"
- New: "Time Warp, Kappa FuturFestival, Stone Techno and Dekmantel are the best for a city trip"
- Old: "Movement in Detroit leads the techno festivals USA fans can reach, and ARC"
- New: "Movement in Detroit leads the American list, and ARC"

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Nature One biggest | Comparison | Own site, L'Espresso, ANP via nieuws.nl | High that it is false | B1 |
| Kappa 125,000 in 2026 | Attendance | L'Espresso; attendances may count one person on several days | Medium | Worded as attendances |
| Awakenings 119,000 over three days | Attendance | Director Tim Middelesch via ANP | High | Add, B1 |
| Nature One over 60,000, 350 DJs, 20 floors, since 1995 | Figures | nature-one.de | High | Keep |
| Dekmantel 2027 dates | Date | dekmantel.com | High | B2 |
| Monument 29 July to 1 August | Date | festival.mnmt.no home and info | High | B3 |
| Monument sold out | Status | Technoairlines, one listing | Medium | "reported", B3 |
| Monument ages 23 and over | Rule | Technoairlines 2027, ticket page 2025 | Medium | B3 |
| Monument smallest | Comparison | None | Unsupported | Cut, B3 |
| Awakenings dates, Upclose, Houtrak, 1997 | Date, history | awakenings.com, own guide | High | Keep |
| Time Warp 3 April, 19 hours, five floors, 1994 | Date, figures | time-warp.de: "19 Hours. 5 Floors" against 3 April 2027 | High | Keep |
| Kappa 2 to 4 July, hours, stages, 18 and over | Date, figures | kappafuturfestival.it | High | Keep |
| Stone Techno 9 to 11 July, Zollverein, 18 and over | Date, venue | stone-techno.com | High | Keep, add to Sources |
| Zollverein UNESCO World Heritage site | History | Stable public record | High | Keep |
| DGTL 26 to 28 March, 2013, Apenkooi, NDSM | Date, history | dgtl-festival.com | High | Keep, fix URL |
| Horst self-description, 14 to 16 May 2026, Asiat Park, presale | Status | horstartsandmusic.com | High | Keep |
| Movement 29 to 31 May, Hart Plaza, Paxahau | Date, venue | movementfestival.com/faqs | High | Keep |
| Movement six stages, 2000, 2006 | History | This site's Movement guide; FAQ silent | Medium | Keep |
| ARC 2027 not announced, 18-plus, Labor Day | Status | Own guide; arcmusicfestival.com refused the fetch; a Frontgate snippet showed a three-day product, likely stale | Medium | Recheck by hand before publishing |
| CRSSD twice a year, Waterfront Park, spring unannounced | Status | Festival site, fall 2026 page; 21-plus | High | m6 |
| MAYDAY 30 April, times, floors, December 1991 | Date, history | mayday.de | High | m5 |
| Verknipt Ziggo Dome 5 March | Date | FestivalInfo, RA event 2517552; verknipt.org returned 403 | High | M6 |
| Verknipt Strijkviertel 5 and 6 June | Date | Technoairlines, one listing | Low to medium | Stays "listed" |
| Terminal V Glasgow, 4 to 6 June | Date, venue | Time Out, Edinburgh News, Beatportal | High | M7 |
| Junction set venue | Provenance | Juno gives Tobacco Dock; Partyflock conflicts | Medium | M9 |
| DJ Mag ranks | Poll | Confirmed before this review | High | Keep, not rechecked |

## 5. SEO preservation

- Title, H1, slug and all seven terms are kept. Fix wording retains `techno festivals`, `best techno festivals`, `biggest techno festival in the world`, `techno festivals europe`, `techno festivals usa`, `hard techno festivals` and `best techno festival`, unless the owner takes m7.
- `audit-keywords.mjs`, `audit-media.mjs` and `audit-banned-phrases.mjs` were each run read-only and passed. They need re-running after the edits. `audit-all.mjs` and the build were not run, as instructed.
- `festival-editions.mjs` line 67 keeps the heading "Techno festival dates for 2027 at a glance", which is unchanged.

**§0 greps on built body text (2,518 words).** complete 0; full 0; whole 1 ("the festival as a whole is far broader", about Tomorrowland, stays); uninterrupted 0; an hour 0; in full 0; jungle 0; drum and bass 0; Wikipedia 0; not X but 0; matters 0; the point 0; em dash 0; en dash 0; ahrefs, keyword, planner, research, verified, fact-check 0; drug, mdma, substance, harm 0; minutes 0; start to finish, one piece, as it was played 0; stock AI vocabulary 0. hours 2, both Time Warp. breaks 3, all own promotion. check 3: the Bandcamp heading and two advice lines; no printed check date.

**Humanizer record.** No record was supplied for this guide. A pass was made here in report mode. Three sentences checked:
- "It finishes at midnight, so you dance in daylight and still have the night in the city." Passes.
- "The site is a large part of the reason to go." Passes, plain opinion.
- "It adds something the others lack: a different sound, a different building or a different way of spending the weekend." A triad, but three real kinds; stays.

Only the two wedges in m7 and the staged "far below what its crowd would suggest" in m4 were flagged.

**Banner, section and FAQ comparison.** Banner and intro share no six-word run. Banner and FAQ share none. Intro and FAQ share only "best techno festivals in the world". Banner and body share only the date string "9 to 11 July and Nature", which M1 removes. No shared sentence. After M1, the banner and FAQ both say "a big techno weekend" but in different sentences; that run is under six words.

## 6. Coverage gaps

- Origin and Hive were in the approved brief and were dropped because neither could be verified as a current techno festival. That is the correct call, but the brief changed, so the owner should approve it.
- Junction 2 was also in the brief. It appears only in "Not on this list", as a UK guide name. With M9 it has no presence beyond that line, which fits the brief's rule that this guide carries no UK heading.
- Verknipt at Strijkviertel and Terminal V share the weekend of 5 and 6 June. It is not worth a sentence until Strijkviertel is confirmed.

## 7. Cuts or merges

No section should be cut. Word counts: intro 90, criteria 133, at a glance 45, biggest 208, Europe 460, USA 184, hard 135, not listed 82, choose 115, FAQ 129. Europe has figures and a set inside it, so no bare run exceeds 450 words. The only cut in prose is the clause in m4 and the "free weekend" clause in M8.

## 8. Media actions

| Item | Source | Licence | Result |
|---|---|---|---|
| Nature One main floor 2009 | Commons `File:Main_Floor_Nature_One_2009.JPG` | CC BY-SA 3.0, Jochen Herrmann | Read, matches |
| Kappa Solar Stage 2025 | Commons `File:Kappa_Futur_Festival_2025_-_Solar_Stage.jpg` | CC BY 4.0, MadBob | Read, matches |
| Zollverein at night | Commons `File:Zeche_Zollverein_Essen_Germany_(165605653).jpeg`, from 500px | CC BY 3.0, Alex | Read, matches, image viewed |
| Detroit festival 2002 | Commons `File:Detroit_Electronic_Music_Festival_2002_main_stage_after_dark.jpg` | CC BY-SA 4.0, Myself248 | Read, matches |

- Add these four file names to `media/best-techno-festivals.json`, which currently names no source file.
- No figure is adjacent to an embed before or after M9. The Kappa and Zollverein figures are separated by the 37-word Stone Techno paragraph, which is allowed.
- Reuse: the images appear only on this page and on its own cards in `index.html`, `articles.html` and `home-articles.mjs`. The two own mixes, own track, playlist and Bandcamp block stay.
- Embeds. Current: Sama' Abdulhadi, Beatport, oEmbed OK, 93,325 views in the catalogue. Proposed: Freddy K, Dekmantel, oEmbed OK, 116,295 views in the catalogue. Both view counts come from the catalogue and were not read live.
- A bigger alternative is Loco Dice at Time Warp 2018 (Mixmag, `9EkbEJuLzFo`, 3,194,005 views, oEmbed OK), but it is already on `time-warp-festival.html`, so it needs the owner's reason.

## 9. Unresolved questions

1. **Published Dekmantel guide is now wrong (owner approval needed, not edited).** Both lines below should go into `defects.json` with the fix.
   - `dekmantel-festival.html`, old: "Dekmantel's own site has not confirmed 2027 dates yet. Its home page says the festival &quot;returns to the Amsterdamse Bos in 2027&quot; and that tickets are on sale. Listings on Skiddle and I amsterdam give Wednesday 28 July to Sunday 1 August 2027, and I amsterdam calls it the 13th edition. Treat those as unconfirmed until the festival publishes them."
   - New: "Dekmantel's own site says the festival &quot;returns to the Amsterdamse Bos from 29 July to 2 August 2027&quot; and that tickets are on sale. I amsterdam calls it the 13th edition."
   - Sources, old: "Unconfirmed 2027 Amsterdam dates: listings on Skiddle and I amsterdam."
   - New: "2027 Amsterdam dates: Dekmantel's own site. Edition number: I amsterdam."
   - The guide may also need a look wherever it repeats the listed dates; only these lines were read.
2. **M9 choice of set.** Freddy K at Dekmantel is recommended. Loco Dice at Time Warp is the bigger set but a reuse. The owner decides.
3. **m7.** Keep or drop the terms `techno festivals europe` and `techno festivals usa`.
4. **Publication order.** `/best-dance-music-festivals-uk` is untracked, and this page links to it twice, once with the new `#terminal-v` anchor, so the two must ship together.
5. **Time Warp guide.** It says the 2025 and 2026 editions were billed "5 Floors | 19 Hours" and stops short of 2027. The home page now shows the same billing against 3 April 2027, so the guide could be updated. No error.
6. **Inbound links.** Only the UK page, and the home and articles listings, link here. The Europe and USA guides do not, though this page links to both. Adding a link means editing published copy, so show the wording first.
7. **ARC.** The official site could not be opened, so check by hand that 2027 is still unannounced.

**Internal links**

| Target | Status |
|---|---|
| /awakenings-festival, /time-warp-festival, /dekmantel-festival, /movement-detroit, /arc-music-festival | Live |
| /best-electronic-music-festivals-europe, /best-edm-festivals-usa | Live |
| /tomorrowland-festival, /creamfields-festival, /ultra-music-festival | Live |
| /best-dance-music-festivals-uk | Unpublished, ships with this page |
| Read next (best-clubs-in-berlin, berghain, best-clubs-in-paris, best-clubs-in-barcelona) | Live, weak fit for a festival guide; owner's call |

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Dates | Fail until B2, B3, M6, M7 | Section 4 |
| Reader claims | Fail until B1, M1 to M3, M8 | Section 3 |
| Em and en dashes | Pass | Grep 0 and 0 |
| Check dates and process commentary | Pass in body, except "Both dates come from listings" and the "Not published here" cells | M5, M6 |
| Wikipedia and keyword tools in body | Pass | Grep 0 |
| Emphasis on a set being whole | Pass | Grep 0; "whole" is about Tomorrowland |
| dnb angle | Pass | Grep 0; own promotion only |
| Production teaching | Pass | No such copy |
| 2027 dates on every festival | Fail until M7 | Terminal V has none; ARC, CRSSD and Horst say unannounced |
| Keywords | Pass | audit-keywords passed; recheck after edits |
| Media licences | Pass | All four file pages read |
| Media placement | Pass | No adjacency, audit-media passed |
| Set provenance | Fail until M9 | Festival not on the list |
| Sources | Fail until M10 | Stone Techno, Horst and figures absent |
| FAQ schema | Pass | JSON matches visible text; rebuild carries the M1 change |
| Stage 6 | Not run | Not in scope for this review |
