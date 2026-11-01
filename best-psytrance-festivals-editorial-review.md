# Best psytrance festivals 2027 editorial review

Reviewed 2026-10-31 against `best-psytrance-festivals-draft.md`, `build-psytrance-festivals-article.mjs` and the built `best-psytrance-festivals.html`. Independent of the writer.

## 1. Verdict
Blocked until revisions. The structure, voice and keyword coverage are sound, and the §0 language greps are clean, but six Blockers stand: one media adjacency break and five reader-facing facts that are wrong or out of date. The largest is that the page recommends Boom without saying its 2027 tickets sold out in two hours on 13 October 2026. Ten Majors follow, mostly date labels and figures. With the Blocker and Major wording below applied and rebuilt, the page is ready, subject to the owner's calls in section 9. Stage 6 validation was not run for this topic.

## 2. What already works
- The confirmed and listed distinction is stated in the criteria section and carried into the table. It is the right idea and only needs its labels corrected.
- Verified on the organiser's site as written: Boom 18 to 25 July 2027 and its 30 years; Burning Mountain 24 to 27 June 2027 at Zernez, about 1,500 metres, progressive and psychedelic trance. Rainbow Spirit 5 to 8 March 2027 at Glenaroua is verified on its ticketing page.
- "It describes itself as sold out every year since 2014" is true: Boom's ticket post says "We have sold out every year since 2014".
- The "Not on this list" section gives real reasons, and the Burning Man reason is a good use of the criteria.
- All nine keyword terms read naturally. No section is written around a phrase.
- No dnb, jungle or breaks angle in the editorial copy. `breaks` appears only in the owner's own disclosed promotion.
- All six images are new, correctly licensed and credited. All six licences were read on their Commons file pages.

## 3. Priority revisions

Generator means `build-psytrance-festivals-article.mjs`. Everything else is in the draft.

### Blocker

**B1. Figure directly followed by a listening block.** Draft lines 47 and 49: `figure:universo`, then `figure:first-mix`, with nothing between. Breaks `AGENTS.md` §7. `audit-media.mjs` passed anyway, so log the audit gap in `defects.json` when fixing.
- Old: `![Universo Paralello, 2009](figure:universo)`, blank line, `![Listening](figure:first-mix)`, blank line, `## Which are the best psytrance festivals in Europe?`
- New: delete `![Listening](figure:first-mix)` there and place it after the Europe intro paragraph, immediately before `### VooV, Germany`.

**B2. Boom 2027 has sold out and the page does not say so.** Boom's own post of 13 October 2026 and its tickets page. Four edits, which together keep `boom festival` and `ozora festival` untouched.
- Old: "It describes itself as sold out every year since 2014."
- New: "It says it has sold out every year since 2014, and its 2027 tickets sold out in two hours in October 2026."
- Old: "If you want one first psytrance festival, Ozora is the easier ticket to plan for, because Boom sells out so early. If you want the widest programme beyond the music, go to Boom."
- New: "If you want one first psytrance festival in 2027, look at Ozora first, because Boom's 2027 tickets have sold out. Buy early, as Ozora's tickets can also go ahead of the festival. If you want the widest programme beyond the music, aim for Boom's next edition."
- Generator table, old: `['Boom', 'Idanha-a-Nova, Portugal', '18 to 25 July', 'Lake', 'Eight days', 'The widest programme']`
- New: `['Boom', 'Idanha-a-Nova, Portugal', '18 to 25 July, sold out', 'Lake', 'Eight days', 'The widest programme']`
- Generator banner: see M8, which carries the full replacement.

**B3. False spelling claim.** "Paralello" has three l's, and the sentence also drops the misspelling people search for.
- Old: "The spelling trips people up: the organiser writes Paralello, with one r and two l's."
- New: "The spelling trips people up: it is often written Parallelo, and the organiser writes Paralello, with the double l after the e."

**B4. Own Spirit 2027 dates exist.** https://www.ownspiritfestival.org/ prints 1st to 6th September for the next edition.
- Old: "The 2026 edition was on 2 to 7 September, and the 2027 dates have not been announced."
- New: "The 2027 edition is on 1 to 6 September."
- Generator table, old: `'Not announced (2 to 7 September in 2026)'`
- New: `'1 to 6 September'`

**B5. Shankra's status is wrong.** Südostschweiz (3 June 2026) and RSI (1 June 2026) report the festival called off at Lostallo for the third year running, so "last known edition was in 2024" is contradicted.
- Old: "It is a well-known name, but its last known edition was in 2024 at Lostallo, and no 2027 edition has been published."
- New: "It is a well-known name, but it was called off at Lostallo for the third year running in 2026, and no 2027 edition has been published."

**B6. VooV's relation to Boom contradicts the page's own dates, and the wording reads as a process note.** VooV 16 to 19 July and Boom 18 to 25 July share 18 and 19 July. "Few people manage both" has no source.
- Old: "It is listed for 16 to 19 July 2027, but only on one listing site, so treat that as provisional. It falls just before Boom, and few people manage both."
- New: "It is listed for 16 to 19 July 2027, so treat that as provisional. Those dates overlap the start of Boom by two days."

### Major

**M1. Boom attendance.** Lusa says nationalities, not countries. The director's figure rests on an IQ page that could not be opened, while Boom's own letter gives the same number.
- Old: "Lusa, the Portuguese news agency, reported 37,286 people from 162 countries in 2025, and the festival's director gave a figure of about 45,000."
- New: "Lusa, the Portuguese news agency, reported 37,286 people of 162 nationalities in 2025, and the festival's own letter after the event says almost 45,000 from 165 countries."

**M2. Ozora's "main week" is twelve days, and the overlap claim needs narrowing.** Official sites return 403. Listings for 2026 disagree on the start, so only the outer window is supported.
- Old: "The main week is listed for 23 July to 3 August 2027, though the organiser's dates should be checked before you book."
- New: "Its dates are listed as 23 July to 3 August 2027, though the organiser's dates should be checked before you book."
- Old (FAQ): "The main week is listed for 23 July to 3 August 2027 at Dádpuszta in Hungary."
- New (FAQ): "Ozora Festival in 2027 is listed for 23 July to 3 August at Dádpuszta in Hungary."
- Old: "and in 2027 Boom and Ozora are listed to overlap by three days, from 23 to 25 July."
- New: "and in 2027 Ozora's listed dates overlap the end of Boom on 23 to 25 July."
- Generator table, old: `'The classic week'`. New: `'The long stay'`.

**M3. Ozora attendance range.** XpatLoop (4 August 2026) gives "an estimated 30,000" and says organisers released no official figures. Festivalmates also gives about 30,000. Nothing opened supports 40,000.
- Old: "Ozora has published no official attendance, and reports put it at about 30,000 to 40,000 a year."
- New: "Ozora has published no official attendance, and reports put it at about 30,000."

**M4. Mo:Dem is confirmed, not listed.** http://modemfestival.com/home/ prints "2 • 8 August 2027", Primišlje, Croatia. The page's own rule says a date from the festival's own site is shown as confirmed.
- Old: "Mo:Dem is held at Primišlje in Kordun, on the river valley, and is listed for 2 to 8 August 2027 on a single listing site."
- New: "Mo:Dem is on 2 to 8 August 2027 at Primišlje in Kordun."
- Generator table, old: `'Listed 2 to 8 August'`. New: `'2 to 8 August'`.

**M5. Indian Spirit is confirmed, has a place, and is missing from the Europe list.** https://indian-spirit.de/ prints 25.08. to 30.08.2027, Eldena, and "Germanys biggest Psy Trance Festival". "Not published here" in the table is a note to self that reached the reader.
- Old: "Indian Spirit is listed for 25 to 30 August 2027 and reported 25,000 fans from 67 countries in 2026, which puts it among the larger events in Europe."
- New: "Indian Spirit is on 25 to 30 August 2027 at Eldena in northern Germany, and calls itself the country's biggest psytrance festival. It reported 25,000 fans from 67 countries in 2026."
- Generator table, old: `['Indian Spirit', 'Germany', 'Listed 25 to 30 August', 'Not published here', 'Six days', 'A large German gathering']`
- New: `['Indian Spirit', 'Eldena, Germany', '25 to 30 August', 'Countryside', 'Six days', 'A large German gathering']`
- Old: "After them come VooV in Germany, Hadra in France, Own Spirit in Spain, Mo:Dem in Croatia and Burning Mountain in Switzerland."
- New: "After them come VooV and Indian Spirit in Germany, Hadra in France, Own Spirit in Spain, Mo:Dem in Croatia and Burning Mountain in Switzerland."

**M6. A State of Trance is not debuting in the US, and psytrance is not "one of its three stages".** This is the first multi-day US festival, after ASOT1000 in the US in 2022, and the sources spread styles across the stages.
- Old: "A State of Trance makes its US debut on 11 and 12 June 2027 at Ace Mission in Los Angeles, with psytrance reported as one of its three stages."
- New: "A State of Trance holds its first multi-day US festival on 11 and 12 June 2027 at Ace Mission in Los Angeles, with psytrance reported among the styles across its three stages."

**M7. Festival length contradicts the table.** Mo:Dem is seven days, and Own Spirit and Indian Spirit six.
- Old: "and the smaller European festivals are four or five days."
- New: "and the smaller European festivals run from four to seven days."

**M8. Banner: Universo Paralello's date is unlabelled and Boom's status is missing.** Applies B2, adds "listed", and adds Indian Spirit, which is not a smaller choice at its reported size.
- Old (generator `answer`): "The best psytrance festivals for 2027 are Boom in Portugal (18 to 25 July), Ozora in Hungary (listed for 23 July to 3 August) and Universo Paralello in Brazil (opening 27 December 2026). In Europe, VooV, Hadra, Own Spirit, Mo:Dem and Burning Mountain are the smaller choices. In Australia, look at Rainbow Spirit in Victoria (5 to 8 March)."
- New: "The best psytrance festivals for 2027 are Boom in Portugal (18 to 25 July, already sold out), Ozora in Hungary (listed for 23 July to 3 August) and Universo Paralello in Brazil (listed from 27 December 2026). In Europe, VooV, Hadra, Own Spirit, Mo:Dem, Burning Mountain and Indian Spirit are the other choices. In Australia, look at Rainbow Spirit in Victoria (5 to 8 March)."

**M9. Universo Paralello's edition number is disputed, and Equinox's event is unconfirmed.** Technoairlines says 19th and 360 Meridianos 18th. The Equinox source could not be opened.
- Old: "Its 19th edition is at Pratigi in Bahia, on the beach at Ituberá, about 290 km south of Salvador."
- New: "The next edition is at Pratigi in Bahia, on the beach at Ituberá, about 290 km south of Salvador."
- Old: "Equinox held a US teaser edition on 4 to 6 September 2026 at Texas Music River Ranch in Webberville, Texas, and no 2027 date has been published."
- New: "Equinox was listed for a US teaser edition on 4 to 6 September 2026 at Texas Music River Ranch in Webberville, Texas, and no 2027 date has been published."

**M10. The sources list does not match the page.** It omits sources the corrected page now rests on, cites an unopenable IQ page for a figure Boom publishes itself, and repeats "debut". Burning Mountain is unlinked.
- New `sourcesHtml` body:
```html
<li>2027 dates from each festival's own site: <a href="https://www.boomfestival.org/" target="_blank" rel="noopener noreferrer">Boom</a>, <a href="https://burning-mountain.ch/" target="_blank" rel="noopener noreferrer">Burning Mountain</a>, <a href="https://www.ownspiritfestival.org/" target="_blank" rel="noopener noreferrer">Own Spirit</a>, <a href="https://indian-spirit.de/" target="_blank" rel="noopener noreferrer">Indian Spirit</a> and <a href="https://modemfestival.com/home/" target="_blank" rel="noopener noreferrer">Mo:Dem</a>; Rainbow Spirit from its <a href="https://events.humanitix.com/emergentform" target="_blank" rel="noopener noreferrer">ticketing page</a>.</li>
<li>Boom tickets: <a href="https://www.boomfestival.org/news/boom-2027-tickets-sold-out" target="_blank" rel="noopener noreferrer">Boom, 13 October 2026</a>.</li>
<li>Listed dates: Technoairlines (VooV, Ozora), Techno Univers and Shotgun (Universo Paralello).</li>
<li>Boom attendance: Lusa via <a href="https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas" target="_blank" rel="noopener noreferrer">Notícias ao Minuto</a>, 24 July 2025, and <a href="https://boomfestival.org/news/letter-to-the-boomers-2025" target="_blank" rel="noopener noreferrer">Boom's letter after the 2025 edition</a>.</li>
<li>Ozora attendance: <a href="https://xpatloop.com/channels/2026/08/inside-ozora-how-safe-is-hungary%E2%80%99s-world-famous-psychedelic-festival.html" target="_blank" rel="noopener noreferrer">XpatLoop</a>.</li>
<li>Indian Spirit attendance: Grateful Web.</li>
<li>Shankra: <a href="https://www.suedostschweiz.ch/schweiz-und-welt/shankra-festival-2026-in-lostallo-gr-zum-dritten-mal-abgesagt-1911274" target="_blank" rel="noopener noreferrer">Südostschweiz</a> and <a href="https://www.rsi.ch/info/ticino-grigioni-e-insubria/Lostallo-niente-Shankra-Festival-per-il-terzo-anno-consecutivo--3789770.html" target="_blank" rel="noopener noreferrer">RSI</a>, June 2026.</li>
<li>Wild Horses: <a href="https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/" target="_blank" rel="noopener noreferrer">Beat</a>. Hadra: <a href="https://hadratrancefestival.net/" target="_blank" rel="noopener noreferrer">the festival's own site</a>.</li>
<li>A State of Trance US festival: Insomniac and EDM.com. Equinox Teaser USA: Bandsintown.</li>
```

### Minor

- Boom FAQ. 2022 and 2023 ran back to back, per The Portugal News. Old: "No. Boom runs every two years, so after" New: "No. Boom normally runs every two years, so after"
- Wild Horses. Old: "The 2026 edition runs on 13 to 16 November, the year it turned 10, and a 2027 date has not been announced." New: "The 2026 edition, its tenth, runs on 13 to 16 November, and a 2027 date has not been announced."
- BLANKA sits under `### Indian Spirit` and reads as if it belongs to that festival. Old: "To hear the sound before you commit to a week of it, this is BLANKA for Boiler Room in Warsaw, filmed in 2026 at a club." New: "Before you commit to a week of any of these, hear the sound: this is BLANKA for Boiler Room in Warsaw, filmed in 2026 at a club."
- Hadra caption. Old: `Photograph: Louciie-13, CC BY-SA 4.0.` New: `Photograph: Louciie-13, CC BY-SA 4.0, cropped.` BY-SA asks for changes to be noted. Run `audit-media.mjs` after, as `AGENTS.md` fixes the caption tail.
- `media/best-psytrance-festivals.json` note is stale since the BLANKA embed. Old: "No festival set exists in the catalogue, so the page uses own-listening components only." New: "No festival set exists in the catalogue, so the page uses own-listening components and one club set, BLANKA for Boiler Room in Warsaw."
- Mo:Dem "It sits at the deeper, forest end of the sound" and table `'River valley'`, `'Darker sounds'`: reasonable but not on any page opened. Owner to confirm from his own knowledge.
- Generator table lists Universo Paralello under "2027 dates" with a December 2026 start. Accurate and labelled, keep.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Boom 18 to 25 July 2027, 30 Years Edition | date | https://boomfestival.org/news/letter-to-the-boomers-2025 | high | keep |
| Boom 2027 tickets sold out in 2 hours, 40,000 tickets (absent from page) | date, numeric | https://www.boomfestival.org/news/boom-2027-tickets-sold-out and https://www.boomfestival.org/tickets/tickets-info | high | B2 |
| Boom sold out every year since 2014 | superlative | https://www.boomfestival.org/news/everything-you-need-to-know-about-boom-2027-tickets ("We have sold out every year since 2014") | high, self-reported | keep as "it says" |
| Boom 37,286 from 162 countries | numeric | https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas: "162 nacionalidades". Lusa wire, read here rather than Observador | high for figure, wording wrong | M1 |
| Boom about 45,000, attributed to director | numeric | Boom letter: "Almost 45,000 people from 165 countries". https://www.iqmagazine.com/ page returned 403 | high via letter, low for director attribution | M1 |
| Boom is the biggest psytrance festival | superlative | Proved by the next sentence only among reported counts; wording "with a reported count" carries that | medium | keep the qualifier |
| Boom biennial, 2023, 2025, 2027 | fact | Technoairlines: every two years in odd years, 16th edition. Boom's sold-out post gives 16th. The Portugal News 2022-08-27 for 2022 and 2023 back to back | high for sequence | Minor: "normally" |
| Boomland, Idanha-a-Nova, Castelo Branco | fact | Technoairlines, Commons categories | high | keep |
| Ozora 23 July to 3 August 2027 | date | Technoairlines, carnifest, programturizmus. Official https://2027.ozorafestival.eu/ and ozorafestival.eu returned 403. 2026 listings conflict: 24 July to 4 August (festivalmates), 27 July to 4 August (visithungary), 23 July to 3 August (festt.io) | low to medium | keep as listed; M2 |
| Boom and Ozora overlap 23 to 25 July | date | Derived from the above | low to medium | M2 |
| Ozora about 30,000 to 40,000 | numeric | https://xpatloop.com/channels/2026/08/ article and https://www.festivalmates.com/blog/ozora-festival-2026-first-timers-guide: about 30,000 | medium for 30,000, none for 40,000 | M3 |
| Ozora about 140 km southwest of Budapest | numeric | Technoairlines 140 km; festivalmates about 130 km | medium | keep "about" |
| Universo Paralello 27 December 2026 opening | date | https://www.technoairlines.com/festival/universo-paralello-festival-pratigi-beach-itubera-brazil-2026; official site not reachable | medium | M8, keep as listed |
| Universo Paralello 19th edition | numeric | Technoairlines 19th; https://www.360meridianos.com/universo-paralello/ 18th | low | M9, cut number |
| About 290 km south of Salvador | numeric | Technoairlines page above | medium | keep |
| Universo Paralello spelling claim | fact | Arithmetic of the word; organiser's domain could not be resolved | high that it is false | B3 |
| VooV 16 to 19 July 2027 | date | Technoairlines only. https://www.voov-festival.de/tickets prints 17 to 20 July 2026 and "VOOV TICKET 2027" with no dates | low to medium | keep as listed; B6 |
| VooV before Boom, "few people manage both" | fact | Contradicted by the page's own dates; second clause no source | none | B6 |
| Hadra 17th edition, 27 to 30 August 2026, Vieure | date | https://hadratrancefestival.net/ for dates and place; festivalticker for 17th | high for dates, medium for 17th | keep |
| Hadra 2027 not announced | date | Hadra site thanks attendees "à l'année prochaine", no dates | high | keep |
| Own Spirit 1 to 6 September 2027 | date | https://www.ownspiritfestival.org/ | high | B4 |
| Own Spirit since 2015, Santa Ana reservoir, Baldellou | fact | Festivales de España | medium | keep |
| Mo:Dem 2 to 8 August 2027, Primišlje | date | http://modemfestival.com/home/ | high | M4 |
| Mo:Dem "river valley", "deeper, forest end", "darker" | interpretive | No page opened states these | low | M4, Minor |
| Burning Mountain 24 to 27 June 2027, Zernez, 1,500 m, progressive and psychedelic trance | date, numeric | https://burning-mountain.ch/ | high | keep |
| "only true mountain setting here" | superlative | Proved by the table settings | high | keep |
| Indian Spirit 25 to 30 August 2027 | date | https://indian-spirit.de/ | high | M5 |
| Indian Spirit biggest in Germany | superlative | Same page, own claim | medium, self-reported | M5 as "calls itself" |
| Indian Spirit 25,000 from 67 countries | numeric | Grateful Web, 403, search snippet only. Festivalhopper expects about 15,000 | low to medium | keep "reported"; section 9 |
| Equinox 4 to 6 September 2026, Webberville | date | Bandsintown 403, snippet only; psytrance programme and that it took place both unconfirmed | low | M9 |
| ASOT 11 and 12 June 2027, Ace Mission | date | edmidentity and Beatportal snippets; EDM.com 403 | medium | keep |
| ASOT "US debut", psytrance "one of its three stages" | fact | Same; ASOT1000 ran in the US in 2022 | medium that it is wrong | M6 |
| Rainbow Spirit 5 to 8 March 2027, Glenaroua, 2026 sold out | date | https://events.humanitix.com/emergentform | high | keep |
| Renamed from Rainbow Serpent | fact | Courier, 2023 | high | keep |
| About 90 minutes north of Melbourne | numeric | Listing | medium | keep |
| Wild Horses 13 to 16 November 2026, tenth, limited capacity, Carapooee West | date | https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/ | high | Minor wording |
| Wild Horses leans to trance and psytrance | fact | https://www.technoairlines.com/festival/wild-horses-festival-carapooee-west-australia-2026 | medium | keep |
| Victoria is the centre of Australian psytrance festivals | interpretive | No page states it; both named festivals support it | medium | keep as judgement |
| Most festivals not in DJ Mag Top 100 | fact | https://www.edm-lab.com/en/events/dj-mag-top-100-festival-2025-la-classifica: none of ten named here in the 2025 chart. djmag.com 403 | medium | keep |
| Shankra last edition 2024 | date | Südostschweiz and RSI: 2026 the third cancelled year | high that wording is wrong | B5 |
| Burning Man has no central programme | fact | Owner's guide `what-is-burning-man.html` | high | keep |
| BLANKA, Boiler Room: Warsaw, VF1Dy_RGJS4 | embed | Record given: Boiler Room channel, 107,261 views, oEmbed 200. `selector-data.json`: year 2026, 3705 s, views 107261. Only other occurrence is the catalogue | high | keep |
| Image licences | licence | Six Commons file pages, section 8 | high | keep |

No Wikipedia in the body or sources. Pages that could not be opened are marked above: ozorafestival.eu, web.archive.org, iqmagazine, bandsintown, edm.com, djmag.com, gratefulweb and the Universo Paralello site. hadra.net is a placeholder, and hadratrancefestival.net was used.

## 5. SEO preservation
- Keyword map terms, all retained verbatim after every revision above: boom festival, ozora festival, psytrance festivals, psytrance festivals europe, australian psytrance festivals, psy trance festival, best psytrance festivals, biggest psytrance festival, psytrance festivals usa. `audit-keywords.mjs` passed (1,495 terms, 266 pages). Re-run after revisions.
- H2s and FAQ match `festival-roundups-proposal.md` section 2. `psytrance festivals 2027` was not read back, so it stays unclaimed in the H2 as proposed.
- Title is 65 characters. The proposal spelled it Parallelo; the page uses the organiser's Paralello, recorded in the generator comment. B3 restores the Parallelo form in the body, so both spellings are on the page.
- Registered at `festival-editions.mjs` line 68 with `ends: null`. Include the Boom sold-out wording in the yearly roll to 2028.
- Humanizer record, as supplied:
  1. "It is a list for choosing, not a calendar of every event: for that, the listing sites do a better job." became "Use it to choose one. The listing sites are better for a calendar of every event."
  2. "the honest answer is to fly to Europe or look at" became "fly to Europe, or look at"
  3. "The sound is easier to hear than to describe. This set is BLANKA for Boiler Room in Warsaw, filmed in 2026 at a club rather than a festival." became "To hear the sound before you commit to a week of it, this is BLANKA for Boiler Room in Warsaw, filmed in 2026 at a club."

### §0 greps on built page text
Run on tag-stripped text of `best-psytrance-festivals.html`, with a Python regex because ugrep rejected the context pattern.

```
complete          0
full              0
whole             0
uninterrupted     0
an hour           0
in full           0
jungle            0
drum and bass     0
Wikipedia         0
not .* but        0
matters           0
the point         0
em dash           0
en dash           0
hours             0
ahrefs|keyword|planner|research|verified|fact-check   0
drug|mdma|lsd|substance|harm   0
parallelo         0
breaks            3
  "across house, techno, breaks and rave"   (own playlist blurb)
  "Thirty tracks where breaks move between garage, bass music, techno and rave.
   My own set, for a break from the festival."   (own mix blurb)
  "moving through breaks, garage, dubstep, grime, techno and more"   (own mix blurb)
minutes           1   (Rainbow travel time)
check             5   (Bandcamp button, advice to check with the organiser; no printed check date)
```

The three `breaks` hits are the owner's disclosed promotion and stay. B2's "two hours" and B3's "Parallelo" will now register on `hours` and `parallelo`. Neither is a set-length claim or an error. Do not read them as regressions. `audit-banned-phrases.mjs` passed (8 rules, 280 pages).

### Banner, first section, FAQ comparison
Six-word overlap test. Banner and intro: none. Intro and FAQ: none. Banner and FAQ, and banner and body: only the date string "listed for 23 July to 3 August". Body and FAQ: "The main week is listed for 23 July to 3 August 2027", closed by M2. No shared sentence after revision.

## 6. Coverage gaps
- Universo Paralello runs every two years (360 Meridianos, feedfreq; the previous edition was 27 December 2024 to 3 January 2025 on Festapp). Worth one clause, since a reader who misses it waits two years. Suggested after "New Year gathering": "It is usually held every two years." Medium confidence.
- Goa and India, South Africa (Origin) and Antaris are absent. None is required by the three criteria as worded, and the page does not claim to be complete. Owner's call, no action needed.
- Ticket status for Ozora and Rainbow Spirit 2027 was not established. No claim is made on the page, and M2's "Buy early" rests on Technoairlines saying Ozora tickets have historically sold out ahead.

## 7. Cuts or merges
- Cut the "only on one listing site" and "on a single listing site" phrases (B6, M4): process notes.
- Cut "few people manage both" (B6) and "its 19th edition" (M9).
- Cut "to 40,000" (M3).
- No section needs merging. The intro's "Use it to choose one" sentence and `introTitle` "A list meant for choosing." repeat one idea at close range, but the heading is a label and both may stay.

## 8. Media actions

| Key | File | Commons page opened | Author | Licence | Result |
|---|---|---|---|---|---|
| boom | `boom-being-fields-2018` | `File:Boom_Festival_2018.jpg` | Racheland Deckard; metadata names Jakob Kolar as copyright holder | CC BY-SA 4.0 | Matches caption. Conflict in section 9 |
| ozora | `ozora-horizon-2018` | `File:Ozorizone.jpg` | Max Ambio; metadata Maksym Antiukhov, Ambio.com.ua | CC0 | Matches caption |
| universo | `universo-paralello-2009` | `File:Universo_Paralello_in_2009.jpg` | Marco Langebeeke | CC BY 2.0 | Matches caption; taken 31 December 2009 |
| voov | `voov-2005` | `File:Voov_experience_2005-02.jpg` | Andy Weisner | CC BY-SA 2.0 | Matches caption; 1,024 × 768; taken 24 July 2005 |
| hadra | `hadra-main-stage-2019` | `File:Mainstage_du_Hadra_Trance_Festival_2019.jpg` | Louciie-13; metadata Frederique Jouvin | CC BY-SA 4.0 | Matches caption, cropped. Conflict in section 9. No watermark visible in the crop |
| rainbow | `rainbow-serpent-2019` | `File:Rainbow_Serpent_Festival,_Australia.jpg` | RaimbowTomcat | CC BY-SA 4.0 | Matches caption; taken 26 January 2019 |

- Reuse: no image shared with another guide. `boom-being-fields` also appears in `articles.html`, `index.html` and `home-articles.mjs`, which is this guide's own card. Duplicate-hash check clean. Dimensions match the generator.
- Embed: VF1Dy_RGJS4 is on this page and in `selector-data.json` only. Evidence is the supplied oEmbed 200 record and the catalogue entry. It was not re-tested, as the shell is offline.
- Sequence: B1 is the one break. After it, every figure and listening block follows a paragraph, none follows an H2 or H3 directly, and none touches an embed. The BLANKA embed is preceded by its intro sentence and the Indian Spirit paragraph.
- Rhythm: 27 to 45 word paragraphs separate consecutive figures. This satisfies the rule. Own Spirit, Mo:Dem and Burning Mountain have no image, which breaks up the Europe section.
- Word counts: Intro 76, criteria 131, glance 45, biggest 257, Europe 322, USA 121, Australia 145, not listed 69, choose 125, FAQ 123. No bare section is over 450.
- Coverage: biggest, Europe, Australia, choose and at-a-glance carry media, with criteria also holding the placed Bandcamp, which gives 5 or 6 of 8 argued sections (62 to 75%). Bare: USA, not listed. Passes the 60% line.
- Colour: the three own-listening components use `tone: 'cyan'` in `site-components.mjs` at lines 154, 253 and 344, and the BLANKA block uses the shared `listening-block`, whose label is "Essential listening". No body section is toned.

## 9. Unresolved questions
1. Ozora's 2027 dates. The official site blocks automated reads. The owner should open https://2027.ozorafestival.eu/ in a browser, then confirm or correct, and if the core programme starts after 23 July, narrow the overlap sentence.
2. Photographer conflicts on two Commons files: Boom (uploader Racheland Deckard, metadata Jakob Kolar) and Hadra (uploader Louciie-13, metadata Frederique Jouvin). Both are declared own work. Given the rule on licensing, decide whether to keep them, or replace them with a clean file such as `File:HTF2016 - Main Stage.jpg` after checking its page.
3. No festival-recorded set. `festivals-series.md` asks for the festival's own or artists' legendary sets, and the catalogue holds none for Boom, Ozora or Universo Paralello. BLANKA's club set is taken as established. A set from Boom or Ozora, oEmbed-checked, would serve the page better.
4. Indian Spirit's 25,000 rests on a press-style line that could not be opened, and another listing expects about 15,000. Owner may prefer to cut the sentence.
5. Equinox: is the source worth keeping? If the Bandsintown page cannot be confirmed in a browser, cut the sentence and open the US section on A State of Trance.
6. Shankra's final held edition is not stated in either Swiss report, so the new wording avoids naming a year.
7. VooV 2027 dates have a single source. Its own site still shows 2026.
8. The shared playlist blurb, "placed here after the article's main answer", reads as a layout note. It is a site-wide component string, so it is outside this review's scope and goes to the owner.
9. `/best-edm-festivals-australia` is an untracked page. Push it with this guide or the link breaks. Its guide links back at its draft line 95.
10. Read next is generated by `relatedArticles`: `/best-clubs-in-berlin`, `/berghain`, `/best-clubs-in-paris`. Weak fit for a camping festival guide. Festival guides would serve better.

### Internal links
| Link | Where | Why it belongs |
|---|---|---|
| `/best-edm-festivals-usa` | USA section | Sends US readers to Dreamstate, a real trance festival at `<h3 id="dreamstate">` |
| `/best-edm-festivals-australia` | Australia section | Wider listings for the same reader; reciprocal. Untracked, see 9.9 |
| `/what-is-burning-man` | Not on this list | Explains the exclusion reason |
| `/what-is-burning-man` | Read next | Topical |
| `/best-clubs-in-berlin`, `/berghain`, `/best-clubs-in-paris` | Read next, auto | Weak fit, see 9.10 |

No jungle or dnb link appears.

## 10. Final acceptance checklist

| Area | Result | Evidence |
|---|---|---|
| Facts | Fail until B2 to B6 and M1 to M9 applied | Section 4 ledger; each row names the page opened or marks it low |
| Editorial | Pass after B3, B6, M7 | §0 greps in section 5 all 0 except disclosed `breaks`; no shared sentence after M2; no em dashes, check dates, keyword tools or drug content |
| SEO | Pass | Nine terms retained in every new wording; `audit-keywords.mjs` passed; H2s match the proposal. Re-run after edits |
| Media | Fail until B1 applied, then pass | Six licences read on Commons; no reuse; word counts under 450; 62 to 75% coverage; cyan only per `site-components.mjs` |
| Implementation | Fail until the revisions are built | `audit-banned-phrases.mjs`, `audit-keywords.mjs` and `audit-media.mjs` passed on the current build, but `audit-media.mjs` missed B1. Log that gap in `defects.json`. Run `node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs`, `npm run check:layout`, `npm run check:links` after editing. Push `/best-edm-festivals-australia` in the same push |
