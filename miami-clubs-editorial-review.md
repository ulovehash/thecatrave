# Editorial review: Miami clubs guide (/best-clubs-in-miami)

Written 2026-11-08 by the agent that wrote the guide, so it is **not independent**. It covers the factual check, the humanizer pass and the SEO review. Stage 6 of TOPIC-RESEARCH.md was not run separately: the owner asked for three guides to be written one after another while using credits carefully ("lets create first 3, not in parallel, write them 1 by 1 use creadits conciuosly").

1. **Verdict:** ready after the owner reads it. Club status changes, so it needs checking every six months.
2. **What already works:**
   - The page leads with the clubs where the music is the reason to go and answers the LIV and E11EVEN questions in prose, as the NYC and Chicago guides do.
   - The history runs from Tenaglia at Cheers to the opening of Space in 2000 and the WMC, with every date from Wikipedia.
   - Each current club is named by Time Out's list (15 entries, read in full); Club Space and Do Not Sit On The Furniture also by 6AM, and Club Space by DJ Mag Top 100 Clubs 2026.
3. **Priority revisions:** none open. Fixed while writing:
   - Removed claims written without a source; the hardest-door answer and the Factory Town booking are attributed to Time Out and Drumcode.
   - Removed page self-description from the introduction ("this guide covers them"). `audit-banned-phrases.mjs` caught it.
4. **Fact-check ledger:**

   | Fact | Source |
   |---|---|
   | Space opened March 2000 by Louis Puig; Tenaglia played opening night; Saturdays only for three years; Red Room and Blue Room | Wikipedia, Club Space |
   | 24-hour licence; Terrace with retractable roof; sold late 2013; Link Miami Rebels from late 2016; Insomniac stake 2019; closed May to October 2024 | Wikipedia, Club Space |
   | Capacity about 2,000 across Terrace, Ground and Floyd | Wikipedia, Club Space (DJ Mag gives 1,100; Wikipedia used) |
   | Club Space #14 in 2026 | DJ Mag Top 100 Clubs |
   | Tenaglia in Miami from 1985 as resident at Cheers, back to New York five years later | Wikipedia, Danny Tenaglia |
   | WMC founded 1985 by Possenti and Kelly; first edition February 1986, Fort Lauderdale, about 80 people; Ultra from 1999; Ultra bought WMC in 2018 | Wikipedia, Winter Music Conference |
   | MMW from 2011; 1,000+ artists at 260+ events in 2015 | Wikipedia, Miami Music Week |
   | LIV opened 2008 at the Fontainebleau; name is 54; LIV on Sunday since 2009 | Wikipedia, LIV |
   | E11EVEN opened February 2014, 24 hours; INA best US nightclub 2025 | Wikipedia, E11EVEN |
   | Floyd, Jolene, M2, Domicile, MODE, Mad Radio, Twist, Do Not Sit cover $10 to $30; queue and table advice; "half past six" on the Terrace | Time Out |
   | Do Not Sit #19, Space #21; "without the bells and whistles of VIP" | 6AM |

   Conflict: Time Out names Megan as Behrouz's co-founder at Do Not Sit, 6AM names Will Renuart. Only Behrouz is named.
5. **Humanizer pass** (on the draft, 2026-11-08). Before and after:
   - "Those rooms are part of the city, and this guide covers them. But it is written for the other kind of night" became "Those rooms are part of the city, and they are covered further down. The other kind of night happens in…"
   - "For Miami EDM clubs, the big rooms are" became "The EDM clubs Miami is known for are".
   - Danny Tenaglia's Boiler Room set is introduced as "recorded for Boiler Room in Miami in 2017", with nothing about its length (WRITING.md rule on DJ sets).
6. **SEO:** new page. `keywords/miami-clubs.json` has 9 terms. Keyword Planner figures (ranges) and Ahrefs US figures (point volumes) are labelled separately and never merged. Rejected: "miami music week" (event intent), "liv miami" and "club space miami" (navigational), "best techno clubs in miami" (Ahrefs 0).

   Title: "Best Clubs in Miami: Nightclubs for House and Techno". All seven table clubs carry a Google Maps link and a venue-specific RA link: Club Space 831, Floyd 111722, Jolene Sound Room 214717, Do Not Sit On The Furniture 80115, M2 242641, Domicile 189088, MODE Downtown 228652.
7. **Coverage gaps:**
   - Reddit was not read.
   - No openly licensed photos were found of the Terrace at sunrise, Do Not Sit or Floyd. The only E11EVEN photo on Commons shows a construction hoarding and was dropped.
   - Factory Town is mentioned only as a venue.
8. **Media:**
   - Five Wikimedia Commons images, none used by another guide: the Club Space exterior in 2025, Danny Tenaglia in 2007, a WMC 2009 pool party, LIV at the Fontainebleau in 2011, and Ocean Drive in 2018.
   - Five catalogue sets: the Martinez Brothers at the 2019 closing party, Deep Dish on the Terrace, Danny Tenaglia for Boiler Room Miami, Behrouz for Beatport, and Adam Beyer at Factory Town. Each was checked unused elsewhere with `git grep`.
   - The owner's mix.
9. **Unresolved:**
   - Translations.
   - Whether Factory Town belongs in the table.
10. **Acceptance checklist:** build, html-validate, audit-all, check:layout, check:links and `git diff --check` all pass.
