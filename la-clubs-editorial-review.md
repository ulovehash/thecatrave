# Editorial review: Los Angeles clubs guide (/best-clubs-in-los-angeles)

Written 2026-11-08 by the agent that wrote the guide, so it is **not independent**. It covers the factual check, the humanizer pass and the SEO review. Stage 6 of TOPIC-RESEARCH.md was not run separately: the owner asked for three guides to be written one after another while using credits carefully ("lets create first 3, not in parallel, write them 1 by 1 use creadits conciuosly").

1. **Verdict:** ready after the owner reads it. Club status and ownership change, so it needs checking every six months.
2. **What already works:**
   - The page leads with the clubs where the music is the reason to go. Bottle-service and hip-hop clubs are named only in the introduction, as in the NYC, Chicago and Miami guides.
   - The history runs from the 1927 Hollywood Playhouse to Avaland and the Insomniac purchase, and from the Stock Exchange building to Exchange LA, with every date from Wikipedia or DJ Mag.
   - Four table clubs are named by two or more sources (DJ Mag Top 100 Clubs 2026 and 6AM): Academy LA, Exchange LA, Avalon and Sound.
3. **Priority revisions:** none open. Fixed while writing:
   - Removed claims written without a source from the first draft.
   - The Insomniac section names the 2010 death plainly and moves on, with no editorialising.
4. **Fact-check ledger:**

   | Fact | Source |
   |---|---|
   | 1735 Vine Street; opened 24 January 1927 as the Hollywood Playhouse; El Capitan, Jerry Lewis Theatre; Hollywood Palace from 1964 | Wikipedia, Avalon (Hollywood) |
   | Sold 1978, The Palace; Ramones final show 6 August 1996; renamed Avalon September 2002; Avaland from 2004 | Wikipedia, Avalon (Hollywood) |
   | Avalon #64 in 2026; Void system; Beatles West Coast debut; Prydz 20 Years of Pryda 2025; Insomniac bought it September 2025 | DJ Mag Top 100 Clubs |
   | Stock Exchange traded 1931 to 1986; Historic-Cultural Monument 3 January 1979; The Stock Exchange club late 1980s; Exchange LA 2010, about $5 million | Wikipedia, Los Angeles Stock Exchange Building |
   | Exchange LA #48; four floors, 25,000 sq ft; 2024 renovation; Mutate | DJ Mag Top 100 Clubs |
   | EDC from 1991 in Chino, Hauptfuhr; Insomniac's first EDC 1997, Shrine Expo Hall; Coliseum 2007 to 2010; 185,000 in 2010; Sasha Rodriguez; Las Vegas from 2011 | Wikipedia, Insomniac and Electric Daisy Carnival |
   | Academy LA #44; about 1,000; 145 LED panels; Funktion-One | DJ Mag Top 100 Clubs |
   | Sound #86; opened 2012; about 600; Funktion-One; redwood interior | DJ Mag Top 100 Clubs, 6AM |
   | 6AM ranks Academy LA 14, Lot 613 15, Sound 16, Exchange LA 17, Avalon 18 | 6AM |
   | Framework at Sound since 2015 and its DJs; Dub Club at the Echoplex; Part Time Punks since 2005 | Time Out LA |
   | Lot 613 6,000 sq ft plus courtyard; LA Weekly best club 2016 and 2018 | 6AM |
   | Catch One opened 1973 by Jewel Thais-Williams, 4067 West Pico; Sylvester, Whitney Houston, Madonna; sold November 2015; briefly Union | Wikipedia, Jewel's Catch One |

5. **Humanizer pass** (on the draft, 2026-11-08):
   - The introduction says what the page leaves out without describing the page ("The third is what follows").
   - The Marques Wyatt set is introduced as "recorded for Beatport in Los Angeles in 2021", with nothing about its length (WRITING.md rule on DJ sets).
6. **SEO:** new page. `keywords/la-clubs.json` has 10 terms. Keyword Planner figures (ranges) and Ahrefs US figures (point volumes) are labelled separately and never merged. Rejected: "edm clubs in los angeles?" (volume with no metrics), "18+ clubs in la" (age limits vary by night), "clubs los angeles" (duplicate intent).

   Title: "Best Clubs in Los Angeles: Nightclubs for House and Techno". All six table clubs carry a Google Maps link and a venue-specific RA link: Avalon Hollywood 1267, Exchange LA 36833, Academy LA 146128, Sound 73088, Lot 613 15062, Catch One 57175.
7. **Coverage gaps:**
   - Reddit was not read.
   - No openly licensed photos were found inside Exchange LA, Academy LA, Sound or Lot 613.
   - Create and Dub Club are mentioned only in prose.
8. **Media:**
   - Five Wikimedia Commons images, none used by another guide: Avalon in 2007, Tigerheat at Avalon in 2019, the Stock Exchange building in 2008, Catch One in 2020 and Hollywood Boulevard at night.
   - Four catalogue sets: Factory 93, Hot Since 82 for Framework, Marques Wyatt for Beatport, and Boys Noize for Boiler Room with Lights Down Low. Each was checked unused elsewhere with `git grep`.
   - The owner's mix.
9. **Unresolved:**
   - Translations.
   - Whether Create belongs in the table.
10. **Acceptance checklist:** build, html-validate, audit-all, check:layout, check:links and `git diff --check` all pass.
