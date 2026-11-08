# Editorial review: Chicago clubs guide (/best-clubs-in-chicago)

Written 2026-11-08 by the agent that wrote the guide, so it is **not independent**. It covers the factual check, the humanizer pass and the SEO review. Stage 6 of TOPIC-RESEARCH.md was not run separately: the owner asked for three guides to be written one after another while using credits carefully ("lets create first 3, not in parallel, write them 1 by 1 use creadits conciuosly").

1. **Verdict:** ready after the owner reads it. Club status changes, so it needs checking every six months.
2. **What already works:**
   - The page states its scope up front: dance clubs where the music is the reason to go, not bottle service.
   - The history runs from the Warehouse to the Music Box to Smart Bar, and every date comes from Wikipedia.
   - Each current club is named by Time Out's list (19 entries, read in full) and has a second source: 6AM, DJ Mag Top 100 Clubs 2026, Choose Chicago, or the club's own history.
3. **Priority revisions:** none open. Fixed while writing:
   - Removed claims written without a source: a three-storey factory, reel-to-reel edits, the South Michigan address, producers handing over tapes, an outdoor space at Radius, a late licence at Spybar, Prysm in Lincoln Park, and barbecue details at the picnic.
   - Removed a check date ("updated in December 2025"). `audit-no-check-dates.mjs` caught it.
4. **Fact-check ledger:**

   | Fact | Source |
   |---|---|
   | Warehouse at 206 S Jefferson, opened 1977, run by Robert Williams | Wikipedia, Warehouse (nightclub) |
   | Knuckles resident until November 1982; Power Plant until 1987; died 31 March 2014, aged 59 | Wikipedia, Frankie Knuckles |
   | Frankie Knuckles Way named 25 August 2004 | Wikipedia, Frankie Knuckles |
   | Warehouse made a Chicago Landmark 21 June 2023 | Wikipedia, Warehouse (nightclub) |
   | Music Box at 326 N Michigan; Ron Hardy died 2 March 1992 | Wikipedia, Ron Hardy |
   | Smart Bar opened July 1982 by Joe Shanahan; 3730 N Clark; 1927 building; Metro holds 1,100, Smart Bar about 400 | Wikipedia, Metro Chicago |
   | Smart Bar open until 4am, 5am Saturdays; Queen! on Sundays | Time Out |
   | Podlasie: 1986, Konopka and Pluta, club nights since 2021, 2918 N Central Park Ave; ranked #1 and called the "hottest" | Time Out, list and article |
   | Radius: 640 W Cermak, 55,000 sq ft, Cermak Hall, capacity 5,500, #79 in 2026 | DJ Mag; Time Out |
   | Spybar 1995, 300 capacity; Sound-Bar 2004 | Time Out; 6AM |
   | Le Nocturne: Ron Carroll and Paul Johnson as residents; 25,000-watt system | Time Out; Choose Chicago |
   | Chosen Few Picnic: Jackson Park since 1990, about 40,000 people, 36th edition 11 July 2026 | Choose Chicago |
   | Bars close at 2am (3am Saturday night); late-hour licence to 4am (5am Sunday morning) | City of Chicago BACP |

5. **Humanizer pass** (on the draft, 2026-11-08). Before and after:
   - "this one, from Boiler Room in São Paulo, is soulful house from start to end." became "this set was recorded for Boiler Room in São Paulo." This breaks the "a DJ set is never full" rule (WRITING.md).
   - "That matters more here than anywhere else, because…" became "In Chicago the difference has a history, because…"
   - "That is where the name comes from." was cut. It was a staged closer.
   - "the places where the music is the point" became "the rooms that book house and techno".
   - "It is not a club now, but it is the first stop…" became "It is no longer a club. For anyone who wants to see where house started, it is the first stop." This removes a not-X-but-Y contrast.
   - "Radius is the opposite." became "Radius is the big room."
   - "a DJ playing the radio" became "a DJ playing the hits".
6. **SEO:** new page. `keywords/chicago-clubs.json` has 9 terms. Keyword Planner figures (ranges) and Ahrefs US figures (point volumes) are labelled separately and never merged. Rejected:
   - "chicago nightlife": the results are bars and rooftops.
   - "tao chicago": navigational, a bottle-service club.
   - "chicago clubs baseball": sports intent.

   Title: "Best Clubs in Chicago: Nightclubs for House and Techno". All seven table clubs carry a Google Maps link and a venue-specific RA link: Smart Bar 608, Podlasie Club 189215, Spybar 3238, Sound-Bar 2501, Le Nocturne 173265, Radius 181697, Primary 66047. Each was found through RA's search, with the area shown as Chicago.
7. **Coverage gaps:**
   - Reddit r/chicagoEDM was not read.
   - No openly licensed photos were found of Smart Bar's interior, Podlasie, Spybar or the Music Box.
   - The Power Plant is mentioned only in passing.
8. **Media:**
   - Five Wikimedia Commons images, none used by another guide: the Warehouse in 2024, the Metro sign, Knuckles in 2012 (not the ADE 2012 photo the house guide uses), Derrick Carter in 2023, and the Chicago River at night.
   - Five catalogue sets: The Black Madonna at Smart Bar, Layton Giordani at Radius, Derrick Carter for Boiler Room, Chosen Few, and Adam Beyer at Prysm. Each was checked unused elsewhere with `git grep`.
   - The owner's mix.
9. **Unresolved:**
   - Translations.
   - Whether Prysm, a bigger EDM room, belongs in the table. It is mentioned in the prose only.
10. **Acceptance checklist:** build, html-validate, audit-all, check:layout, check:links and `git diff --check` all pass.
