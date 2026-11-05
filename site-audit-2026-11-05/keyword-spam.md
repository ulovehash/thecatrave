# Keyword spam

> **Status, 5 November 2026:** the owner dropped sections 1 and 2. The wedged
> sentences and the long-form headings stay as published, and no keyword was
> removed. The proposals below are kept as a record only; do not apply them
> without the owner asking. Section 3 (padded FAQs) was fixed.

Checked on every page that has a keyword file (`keywords/*.json`, 276 pages):

- how often each target phrase appears per 1,000 words, and in how many headings
- what share of a page's words go on target phrases
- exact-match phrases wedged into sentences with bent word order
- headings that repeat the long keyword form
- titles and meta descriptions that repeat a phrase
- alt text built around the keyword
- FAQ questions that are keyword variants of each other

`WRITING.md` already sets the rule this file applies: "Drop a term from the
file rather than wedging the phrase into a sentence: an entry removed on
purpose is honest, a phrase stuffed to satisfy a checker is not."

---

## 1. Exact-match phrases wedged into sentences (high)

29 sentences on 13 English guides bend their word order so that a search
phrase appears verbatim. The translations don't have this problem.

One of them is from 4 November ("Most of the EDM festivals Mexico holds"):
it was written to give the keyword "edm festivals mexico" a home, and it is
the same fault.

| Guide | Now | Proposed |
|---|---|---|
| best-clubs-in-belgrade (H2 and contents) | Belgrade techno: the best techno club Belgrade has. | Belgrade techno: Drugstore and Klub 20/44. |
| best-clubs-in-belgrade | For a techno club Belgrade has two with a Boiler Room record: Drugstore and Klub 20/44. | Two Belgrade techno clubs have a Boiler Room record: Drugstore and Klub 20/44. |
| best-clubs-in-belgrade | The clubs in Belgrade Serbia in this guide sit in different parts of town. | The clubs here sit in different parts of Belgrade. |
| best-clubs-in-nyc | Of all the techno clubs NYC has, it is the one most often compared with Berghain | Of New York's techno clubs, it is the one most often compared with Berghain |
| best-clubs-in-nyc | the best dance clubs NYC has at a smaller scale include | New York's best smaller dance clubs include |
| best-clubs-in-nyc | The underground clubs NYC is known for abroad are mostly these rooms | The New York underground clubs known abroad are mostly these rooms |
| best-dance-music-festivals-uk | For techno festivals UK listeners can fly to, see the best techno festivals in the world. | For techno festivals abroad, see the best techno festivals in the world. |
| best-dance-music-festivals-uk | …are the three house music festivals UK listeners should start with… | …are the three UK house music festivals to start with… |
| best-dance-music-festivals-uk | Creamfields is the biggest dance music festival UK-wide | Creamfields is the biggest dance music festival in the UK |
| best-dance-music-festivals-uk | For a rave festival UK crowds travel to, start with Boomtown in Hampshire. | For a rave festival in the UK, start with Boomtown in Hampshire. |
| best-dance-music-festivals-uk | Small dance festivals UK-wide tend to sell out early | Small dance festivals in the UK tend to sell out early |
| best-dance-music-festivals-uk | …the highest-placed dance festivals England has in DJ Mag's list. | …the highest-placed English dance festivals in DJ Mag's list. |
| best-edm-festivals-australia | The best EDM festivals Australia offers fall between November and March | Australia's best EDM festivals fall between November and March |
| best-edm-festivals-australia | The next Ultra festival Australia hosts is on 17 and 18 April 2027 | The next Ultra Australia is on 17 and 18 April 2027 |
| best-edm-festivals-canada | Those three are the best EDM festivals Canada has to offer. | Those three are Canada's best EDM festivals. |
| best-edm-festivals-canada | Among the electronic music festivals Canada hosts, Ile Soniq has… | Among Canada's electronic music festivals, Ile Soniq has… |
| best-edm-festivals-las-vegas | …is the biggest electronic music festival Las Vegas holds. | …is the biggest electronic music festival in Las Vegas. |
| best-edm-festivals-las-vegas | Breakaway is an EDM music festival Las Vegas hosts at Encore Beach Club… | Breakaway is an EDM festival held at Encore Beach Club… |
| best-edm-festivals-mexico | Most of the EDM festivals Mexico holds fall in winter. | Most of Mexico's EDM festivals fall in winter. |
| best-edm-festivals-mexico | EDC is the EDM festival Mexico City holds on a racetrack every year, usually in late February. | EDC Mexico is held on a racetrack in Mexico City every year, usually in late February. |
| best-electronic-music-festivals-portugal | Most guides to the music festivals Portugal holds each summer lead with… | Most guides to Portugal's summer music festivals lead with… |
| best-psytrance-festivals | Boom and Ozora lead the psytrance festivals Europe has to offer. | Boom and Ozora lead Europe's psytrance festivals. |
| best-psytrance-festivals | …the psytrance festivals USA fans can reach are nothing like the scale of those above. | …the psytrance festivals in the USA are nothing like the scale of those above. |
| best-techno-festivals | Of the techno festivals Europe offers, Time Warp, Kappa FuturFestival, Stone Techno and Dekmantel… | Of Europe's techno festivals, Time Warp, Kappa FuturFestival, Stone Techno and Dekmantel… |
| best-techno-festivals | Movement in Detroit leads the techno festivals USA fans can reach… | Movement in Detroit leads the techno festivals in the USA… |
| fusion-festival | Fusion Festival, also searched as Fusion Festival Germany, is held in most summers at… | Fusion Festival is held in most summers at… |
| fusion-festival | For Fusion Festival Berlin is the nearest big city, and the route is the train to Neustrelitz. | Berlin is the nearest big city, and the route is the train to Neustrelitz. |
| ultra-music-festival | …the Ultra festival Croatia has hosted every July since 2013… | …the Ultra festival held in Croatia every July since 2013… |
| exit-festival (also es) | The search phrase EXIT Festival Novi Sad refers to that former flagship at Petrovaradin. EXIT Festival Serbia usually means the same event, rather than every newer project made by the organisation. | In Novi Sad, EXIT meant that former flagship at Petrovaradin, not every newer project made by the organisation. |

Spanish EXIT: "La búsqueda «EXIT Festival Novi Sad» remite a aquel buque insignia
de Petrovaradin. «EXIT Festival Serbia» suele referirse al mismo evento, no a
cada proyecto más reciente de la organización." → "En Novi Sad, EXIT era aquel
buque insignia de Petrovaradin, no cada proyecto más reciente de la organización."

**Keyword files.** Each rewrite removes an exact-match phrase, so
`audit-keywords.mjs` will fail for it. Some survive naturally elsewhere on the
page; the rest move to `rejected` with the reason, as `WRITING.md` asks. The
likely casualties are "techno club belgrade", "clubs in belgrade serbia",
"techno clubs nyc", "dance clubs nyc", "underground clubs nyc", "rave
festival uk", "dance music festival uk", "techno festivals uk", "house music
festivals uk", "small dance festivals uk", "edm festivals australia", "ultra
festival australia", "edm festivals canada", "music festivals canada", "edm
festivals mexico", "edm festival mexico", "music festivals portugal",
"psytrance festivals europe", "psytrance festivals usa", "techno festivals
europe", "techno festivals usa", "fusion festival germany", "fusion festival
berlin", "ultra festival croatia" and "exit festival serbia". The audit run
after the edits gives the exact list.

**Guard.** Add a rule to `audit-banned-phrases.mjs` for the sentence shapes
these wedges produce: `also searched as`, `The search phrase`, `UK-wide`,
`<festivals|clubs> <Place> (has|holds|hosts|offers|fans can reach|listeners can|crowds travel to)`.

## 2. Headings stuffed with the long keyword form (medium)

On these pages, most mentions use the full search form ("Ushuaia Ibiza",
spelled without the ï as people type it), and about half the headings start
with it:

| Page | Full form in prose | Headings with the full form |
|---|---|---|
| ushuaia-ibiza | 22 of 26 mentions | 14 of 29 |
| pacha-ibiza | 17 of 49 | 15 of 29 |
| fusion-festival | 23 of 39 | 13 of 33 |
| printworks-london | 16 of 28 | 5 of 23 |
| es/ushuaia-ibiza | — | 16 of 30 |
| es/pacha-ibiza | — | 15 of 29 |

The Ushuaïa headings now: "Ushuaia Ibiza tickets", "Ushuaia Ibiza dress code",
"Ushuaia Ibiza VIP and table", "Ushuaia Ibiza address", "What is Ushuaia Ibiza?",
"Ushuaia Ibiza history", "Ushuaia Ibiza capacity", "Ushuaia Ibiza 2026",
"Ushuaia Ibiza opening party", "Ushuaia Ibiza events and calendar", "Ushuaia
Ibiza closing party", "Ushuaia Ibiza lineup", "Ushuaia Ibiza 2027", "Ushuaia
Ibiza FAQ."

**Proposed:** keep the full form in the title, the H1 and the one "What is…"
heading. Elsewhere, use the plain subject: "Tickets.", "Dress code.", "VIP
and tables.", "Getting there.", "History.", "Capacity.", "2026 season.",
"Opening party.", "Events and calendar.", "Closing party.", "Line-up.",
"2027.", "FAQ." Do the same on Pacha, Fusion ("Tickets.", "Capacity.",
"Stages.", "Age limit and rules.", "The 2019 police dispute.", "Line-up.",
"Sets.") and Printworks. In prose, shorten after the first mention to
"Ushuaïa" (spelled correctly), "Pacha", "Fusion" and "Printworks".

**Not stuffing:** single-word festival names in about 40% of headings on the
festival guides ("Tomorrowland 2027", "Where Tomorrowland is."). That's the
topic itself, and the guides read normally.

## 3. FAQ questions padded with keyword variants (medium)

Pairs where the second question is a keyword variant and the answers
overlap by 60% or more:

| Page | Questions | Proposed |
|---|---|---|
| best-edm-festivals-usa (and de, fr, es) | "What are the top 10 EDM festivals in the US?" and "What are the major EDM festivals in the US?" | Keep "top 10"; drop "major" |
| glastonbury-festival (and es) | "Is Glastonbury on this year?", "Why is there no Glastonbury this year?" and "When is Glastonbury 2027?" | Merge the first two into one answer; keep the 2027 date question |
| best-electronic-music-festivals-asia (and de, es) | "What are the best music festivals in Japan?" repeats the Ultra Japan answer given twice already | Drop it, or answer with what else Japan has |
| 90s-rave-music | "What is 90s rave music?", "What counts as 1990's rave music?" and "What do people mean by 90 rave music?" | Keep the first; drop the two spelling variants |
| why-dj-mag-top-100-never-changes | "Who is the top 10 DJ in the world?" and "Who are the top 100 DJs in 2026?" | Merge into one |
| best-clubs-in-europe (and es) | "What are the best clubs in the world?" alongside "Which European club is ranked highest?" | **Keep both.** The owner's rule: never drop a term because another page targets it (`WRITING.md`) |
| house-music-classics | "What are the best house music classics?" and "What are some classic house songs everyone knows?" | Merge into one |

## 4. Checked and clear

| Check | Result |
|---|---|
| Titles or descriptions repeating a phrase | 6 pages repeat the subject's name ("Berghain explained: … Halle am Berghain"), which is natural; nothing stuffed |
| Alt text built around keywords | None: alt text names the place shown in a descriptive sentence |
| Density on single-word names (Burning Man, drum and bass, la jungle) | High counts, but the page is about the thing; not stuffing |
| Over-optimised internal anchors | One: "house music guide" six times on house-music-classics, which is a nav pattern, not spam |
