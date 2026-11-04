# Editorial review: best-edm-festivals-mexico

Reviewed 2026-11-03/04 against `best-edm-festivals-mexico-draft.md`, `build-mexico-festivals-article.mjs` and the built `best-edm-festivals-mexico.html`. The reviewer is independent of the writer. Stage 6 was run by a separate validator (TOPIC-DOSSIERS.md, "Third wave: stage 6 verdict"); this reviewer did not gather the topic evidence. Every fix below has been applied to the draft and builder, and only `node build-mexico-festivals-article.mjs` was run. Any later edit needs a re-review.

## 1. Verdict

**Ready after revisions (revisions applied).** The structure follows the stage 6 verdict: Tulum and the coast carry the page, and EDC and Time Warp get one short linked entry each, with neither "edc mexico" nor "time warp mexico" targeted. Zamna, Bahidorá, EDC and MUTEK dates are correct on the organisers' own pages. Three facts were wrong: the BPM death toll, Zamna's "ten days of shows" (the calendar holds six nights) and the "Hawaii, Egypt and Montreal" list. One framing was out of date: Day Zero's 9 January 2027 is on the festival's own site, not just in press. Two Wikipedia sources were also replaced.

## 2. What already works

- The opening answers the question in two sentences, by month and by place. The answer box, table and FAQ agree on every date.
- The EDC and Time Warp entries are short and point to /edc-las-vegas and /time-warp-festival. Both pages exist and cover Mexico (the EDC guide has an "EDC Mexico" section, and the Time Warp guide lists Expo Santa Fe).
- The "Not on this list" section answers real questions (BPM, Afterlife Tulum) with sourced facts.
- The MUTEK photograph is new to the site (grep: only this page, its builder, home-articles.mjs and the OG cover list use `mutek-mexico-city-2016`) and is CC BY-SA 2.0 on Commons.
- No em or en dashes, no dnb angle, no whole-set framing, no production teaching.

## 3. Priority revisions

### Blockers

**B1. BPM death toll is wrong.** Exclaim! (16 Jan 2017, updated with the Quintana Roo police director) gives five killed and 15 injured. The festival's early statement said four, but later counts settled on five.
- Old: "In January 2017 a shooting at its closing event killed four people. It now runs in Costa Rica, and its own site lists no Mexico edition."
- New: "In January 2017 a shooting at its closing party killed five people. It moved to Costa Rica, where its own site lists the latest edition in January 2025, and it lists no Mexico edition."
- The BPM site's latest news is the January 2025 Costa Rica edition, and nothing later is listed, so "now runs" overstated it.

**B2. Zamna is six nights, not "ten days of shows".** zamnafestival.com/events/?country=mexico lists seven items: the Multipass and six nights (31 Dec, 2, 4, 6, 8, 10 Jan). "Ten-day" is Magnetic's description of the span.
- Intro. Old: "when Zamna runs ten days of shows from 31 December 2026 to 10 January 2027" New: "when Zamna's season runs from 31 December 2026 to 10 January 2027"
- Zamna H3. Old: "and the 2027 season marks its tenth year with ten days of events, from 31 December 2026 to 10 January 2027. Each night is a separate ticket for ages 18 and over. The festival's calendar lists Renaissance…" New: "and the 2027 season marks its tenth year, from 31 December 2026 to 10 January 2027. The calendar has six nights in that span, each a separate ticket for ages 18 and over: Renaissance…"
- At a glance. Old: "inside Zamna's ten days" New: "inside Zamna's season"
- Table "Best for". Old: `'Several nights over New Year'` New: `'Six nights over New Year'`

**B3. Zamna's other editions are wrong.** Hawaii is not a country and Montreal is a city. The site's country filter lists Egypt, Perú, Tailandia, Mexico, United States, Colombia and Canada.
- Old: "Zamna also runs editions in other countries, including Hawaii, Egypt and Montreal." New: "Zamna also holds events in other countries, among them Egypt, Peru, Colombia and Canada." (Thailand is left out because "zamna thailand" is a taken keyword.)

**B4. Day Zero's date is confirmed by the organiser, so the "reported" framing is wrong.** dayzerofestival.com/tulum shows "TULUM, MEXICO 9 JAN 2027 BEGIN AGAIN" and the line-up (&ME, Vintage Culture, Tiga, LP Giobbi, RPR Soundsystem all present).
- Criteria. Old: "A date from the festival's own site is shown as confirmed. A date reported only by music press is marked as reported. Where a festival" New: "Every date comes from the festival's own site. Where a festival"
- Table. Old: `'9 January (reported)'` New: `'9 January'`
- Day Zero H3. Old: "is on 9 January, with" New: "is on 9 January, according to the festival's own site, with"
- How to choose. Old: "have not been published for 2027, and Day Zero's date comes from press reports. Confirm" New: "have not been published for 2027. Zamna's season starts on New Year's Eve, less than two months away, and its Multipass was on its last release in early November. Confirm"
- FAQ. Old: "according to the lineup announcement reported in August 2026." New: "according to the festival's own site. The lineup was announced in August 2026."
- Sources: Day Zero's own page added to the "own site" line; EDMTunes kept for the 2012 origin and El Teatro.

### Major

**M1. Wikipedia in the Sources list (§0).** BPM: replaced with Exclaim!. Tulum airport: replaced with Aviacionline (inauguration on 1 December 2023).

**M2. The near-term events are framed as if past.** Sources said "Past editions" for Time Warp and MUTEK MX, both still to come.
- Time Warp. Old: "added a Mexico City edition in 2026, at Expo Santa Fe on 20 and 21 November." New: "holds its first Mexico City edition at Expo Santa Fe on 20 and 21 November 2026." (time-warp.de: "Time Warp Mexico 20 + 21 November 2026 New Edition 2026 - Expo Santa Fe".)
- Answer box. Old: "Mexico City also has Time Warp and MUTEK MX in November." New: "Mexico City also has MUTEK MX and Time Warp in November 2026."
- Sources. Old: "Past editions: Time Warp, MUTEK MX, Afterlife Tulum." New: "2026 editions: Time Warp, MUTEK MX. Last Afterlife Tulum: Afterlife." The MUTEK link now points to the MX 22 closing announcement, which carries the 6 to 8 November dates and the Nocturne bill.
- Zamna, 31 December 2026, is now in the How to choose line (B4).

**M3. Unsupported superlatives.**
- Old: "Mexico City has the biggest stages and the most experimental programme." New: "Mexico City has the largest festival on this list and the one most given to experimental music."
- Old: "EDC is the EDM festival Mexico City holds on a racetrack each February." New: "…on a racetrack every year, usually in late February." (The site's EDC guide says "usually in late February or early March".)
- Old: "in 2016 the festival filled the Teatro de la Ciudad Esperanza Iris with performances like the one above." New: "in 2016 its A/VISION programme was staged at the Teatro de la Ciudad Esperanza Iris, as in the photograph above." (Commons description: "A/VISION 2", 21 October 2016.)

### Minor

**m1. Image credit names the agency, not the photographer.** Commons gives "Fotografía: Tania Victoria / Secretaría de Cultura CDMX". Old: "Photograph: Secretaría de Cultura Ciudad de México, CC BY-SA 2.0." New: "Photograph: Tania Victoria, Secretaría de Cultura Ciudad de México, CC BY-SA 2.0."

**m2. Cancún distance.** The road distance from the airport to Tulum is about 118 km. Old: "about 125 kilometres" New: "about 120 kilometres".

**m3. Keyword placement in the Day Zero H3 (not changed).** "one-night EDM festival Tulum has hosted since 2012" is the only spot that holds "edm festival tulum" (10), and it reads a little forced. It is kept because the phrase is tracked. If the owner prefers smoother copy, drop the term from the keyword file.

## 4. Fact-check ledger

| Claim | Status | Source |
|---|---|---|
| Zamna 31 Dec 2026 to 10 Jan 2027, Km 200 Hwy 307, 18+ | Confirmed | zamnafestival.com Multipass page |
| Zamna nights 31 Dec, 2, 4, 6, 8, 10 Jan and their names | Confirmed | zamnafestival.com/events/?country=mexico |
| Multipass 3 tickets, USD 375 / 575 | Confirmed (third release, "last units") | Multipass page |
| Ten days of shows | Wrong (B2) | calendar shows six nights |
| First gathering 2017, tenth year | Confirmed | Magnetic, 14 Sep 2026 |
| Other countries Hawaii, Egypt, Montreal | Wrong (B3) | Zamna country filter |
| Day Zero 9 Jan 2027, Begin Again, dusk to sunrise | Confirmed | dayzerofestival.com/tulum |
| Day Zero since 2012, Mayan calendar, El Teatro | Supported | EDMTunes, 14 Aug 2026 |
| EDC Mexico 19 to 21 Feb 2027 | Confirmed | mexico.edc.com |
| EDC at Autódromo since 2014 | Supported | site's EDC guide |
| Time Warp Mexico 20 and 21 Nov 2026, Expo Santa Fe, new edition | Confirmed | time-warp.de |
| MUTEK MX 22 closes 6 to 8 Nov 2026, Nocturne 6 Nov, Senni, Moran, Rush | Confirmed | mexico.mutek.org news, 21 Sep 2026 |
| MUTEK 2016 at Teatro de la Ciudad | Confirmed | Commons file description |
| Bahidorá 12 to 14 Feb 2027, XV edition, since 2013, 18+, camping | Confirmed | bahidora.com home, about, FAQ |
| Bahidorá four stages, El Cubo house and techno | Confirmed | bahidora.com/explora/escenarios |
| Las Estacas spring-fed, Morelos | Confirmed | bahidora.com/explora/las-estacas |
| BPM 2017 shooting, four killed | Wrong (B1), five | Exclaim! |
| BPM now in Costa Rica | Qualified: last listed edition Jan 2025 | thebpmfestival.com |
| Afterlife Tulum last 4 and 6 Jan 2025 at Cenote Zamna | Confirmed | after.life/tulum |
| Tulum airport opened Dec 2023, about 20 km | Confirmed (opening); distance from several guides | Aviacionline |

## 5. SEO preservation

- Title (61 characters) and description (150) unchanged. The H1 and the H2s carry "edm festivals in mexico". The at-a-glance H2 is "Mexico EDM festival dates for 2027 at a glance".
- After the rebuild, every term in `keywords/best-edm-festivals-mexico.json` is on the page (lower-cased text count): edm festivals mexico 1, edm festival mexico 1, edm festivals in mexico 10, mexico edm festival 2, tulum edm festival 2, cancun edm festival 1, edm festival tulum 1. No fix touched a tracked phrase.
- Taken keywords: "edc mexico" and "time warp mexico" do not appear as targets. "zamna thailand" was kept off the page (B3).
- §0 grep evidence on the built text (about 1,900 words):
  - "full", "complete", "whole", "uninterrupted", "in full", "an hour": 0.
  - "jungle": 5, all literal (the Tulum forest). "breaks": 3, all in the owner's own playlist, mix and track blocks, which stay. "drum and bass", "dnb": 0.
  - "Wikipedia": 1 before the fix (Sources), 0 after.
  - "not … but", "matters", "the point", em dash, en dash: 0. "reported": 0 after the fix.
- Internal links: /best-clubs-in-mexico-city, /edc-las-vegas and /time-warp-festival all exist. The rest come from the template.
- Humanizer record, three sentences changed:
  - "Mexico City has the biggest stages and the most experimental programme." became "Mexico City has the largest festival on this list and the one most given to experimental music."
  - "in 2016 the festival filled the Teatro de la Ciudad Esperanza Iris with performances like the one above" became "in 2016 its A/VISION programme was staged at the Teatro de la Ciudad Esperanza Iris, as in the photograph above"
  - "A date from the festival's own site is shown as confirmed. A date reported only by music press is marked as reported." became "Every date comes from the festival's own site."
  - No stock vocabulary, staged openers or one-line closers were found.
- Banner and FAQ comparison: the answer box and the first FAQ answer share dates but not sentences.

## 6. Coverage gaps

- None blocking.
- Spanish-language demand was never pulled (stage 6 open item).
- Guadalajara and Monterrey festivals are absent. That is defensible, because none passed the tests with a 2027 date.

## 7. Cuts or merges

- Cut the "marked as reported" criteria sentence, because no date on the page now rests on press alone.

## 8. Media actions

- Credit corrected (m1). One photograph for six festivals is thin. A Bahidorá or Zamna image would be the best addition if an openly licensed one exists.
- No festival set is embedded. That is justified in the media record: selector-data.json has no set from these festivals' own channels.

## 9. Unresolved questions

- Keep "edm festival tulum" in its current sentence, or drop it from the keyword file (m3)?
- Zamna, Day Zero and MUTEK all fall within ten weeks. Refresh the page after 10 January 2027 so it does not lead with past events.

## 10. Final acceptance checklist

- [x] B1 to B4, M1 to M3, m1 and m2 applied in the draft and builder. Rebuilt with `node build-mexico-festivals-article.mjs`.
- [x] Grep after the rebuild: "reported", "Wikipedia", "ten days", "Hawaii", "four people", em and en dashes all return 0.
- [x] Every keyword in the keyword file is present on the page (counts in §5).
- [ ] `npm run check:html`, `node audit-all.mjs`, `npm run check:layout` and `npm run check:links`: not run by this reviewer, as instructed.
- [ ] Hub, home and OG wiring (shared files): not touched.
