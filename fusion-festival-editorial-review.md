# Fusion Festival editorial review

This review is not independent. It was written by the agent that researched and drafted the guide, so it records evidence and does not rule on the guide. Dated 5 October 2026.

## 1. Verdict

Not ruled. Evidence is below for the owner or a separate reviewer. One correction to the brief stands: Fusion has no 2027 edition. The organisers call 2027 a Fusion-free year and the next edition is 28 June to 2 July 2028, so the page answers the "2027" query with the gap and the 2028 dates. `festival-editions.mjs` carries an entry for the heading "Fusion Festival 2027 and 2028" ending 2028-07-02, and no 2027 entry.

## 2. Grep evidence (fusion-festival-draft.md)

Command: `grep -n -i -E "complete|\bfull\b|whole|jungle|drum and bass|breaks|wikipedia|not [^.]* but|matters|the point|—|–" fusion-festival-draft.md`

Result: no matches. The page does not describe any set as whole or full, has no breakbeat, jungle or drum and bass angle, does not cite Wikipedia, and has no em or en dashes.

## 3. Claim ledger (all read 5 October 2026)

| Claim | Source |
|---|---|
| Next edition 28 June to 2 July 2028; 2027 is a Fusion-free year | https://tickets.fusion-festival.de/ |
| 2027 free of Fusion and at.tension; 2017 break precedent; 30 years since 1996 U-Site Gathering; Fusion since 1997; 2026 price €220 with €10 deposit; registration 1 to 14 Dec, draws 18 Dec and 5 Feb; supporter window; vehicle tickets; 18+ introduced under pressure; Bundeswehr 28 Nov 2025 reply | official newsletter of 24 Nov 2025 and news of 28 Nov 2025 on fusion-festival.de |
| 2026 sold out; Ticket:Bourse only; Sunday tickets €65/€70; vehicle add-on; trains 10:09 and 13:09; drug-checking; flags request | official newsletter of 20 June 2026 |
| 2026 dates, gate times, Thursday 18:00, party break, camping, age checks, Insel camps, stages, rules, local tickets, hospital, showers, travel (shuttle €6, Bassliner, A24/A19/B198, bike tour, taxis, Mirow) | official FAQ on fusion-festival.de |
| Kulturkosmos Müritz since 1999, 50 employees, 200+ crews, 10,000+ helpers, 2,500 supporters, 1,000+ programme elements, 3,000+ artists | official English festival page |
| 2019 refusal of the security concept, dates, Hoffmann-Ritterbusch, quotes, 70,000 | https://taz.de/Die-Zukunft-des-Musikfestivals/!5595050/ |
| About 100 officers, armoured vehicle draft, entrance station compromise, 2018 rules, 138,000 signatures, 26 to 30 June 2019 | https://www.gmx.ch/magazine/unterhaltung/musik/festivals/fusion-festival-oeffnet-langem-streit-polizei-tore-33805512 |
| 2026 programme names (Acid Pauli, Modeselektor, Apparat, Recondite, Rødhåd, Gerd Janson, Magda) | official 2026 programme page; matched from a candidate list, not read exhaustively, and the page says so |

Unverified or open, marked on the page: the site area (100 hectares in GMX, 220 in a search snippet, so omitted); the 70,000 figure is press reporting, not official; no 2028 tickets, prices or programme exist yet. A t-online article and a Tagesspiegel article were seen only as search results and are not cited.

## 4. Keywords

Keyword Planner, one batch of 19 terms, ranges only, location United States, run 5 October 2026. Every claimed term is in `keywords/fusion-festival.json` and `audit-keywords` passes. "fusion festival" 1K to 10K; germany, 2026 and 2025 at 100 to 1K; the rest at 10 to 100 except "age limit" at 0 to 10. "fusion festival ticket lottery" returned no row. Location was US, so German demand is likely understated. Headings with no measured phrase are listed in the file's note.

## 5. Humanizer record

The humanizer skill was run on the draft. Three before and after sentences:

1. Before: "Fusion Festival tickets are not sold first come, first served. The organisers use a registration and lottery system, which exists because demand has long exceeded the number of places." After: "Fusion Festival tickets are allocated by registration and lottery, because demand has long exceeded the number of places." (removed a contrast with an unclaimed alternative)
2. Before: "The wording leaves the outcome open, and the organisers say they will keep reporting." After: "The wording leaves the outcome open, and I found no later statement on the pages read." (removed an unsupported claim)
3. Before: "No pets or dogs, no drones, no fireworks, sky lanterns, campfires or charcoal barbecues, and no graffiti. Respect the photo policy." After: "Pets and dogs, drones, fireworks, sky lanterns, campfires, charcoal barbecues and graffiti are all banned, and guests are asked to respect the photo policy." (merged a row of fragments)

## 6. Media and embed evidence

Images (Wikimedia Commons, all CC BY-SA 4.0, none reused from another guide, downloaded and converted to webp at 1200 and 320 wide in `img/fusion-festival/`, credited in the captions): Palapa stage 2019 (San Andreas), Neustrelitz station 2016 (JoachimKohler-HB), ravesticks on the Sonnendeck 2024 (Kerospam). The ravesticks image is a wide crop at 1200 by 380 because the source is 3403 by 1078.

Sets, oEmbed checked 5 October 2026, all in selector-data.json and all Boiler Room: Acid Pauli EfZu4BCi644, Apparat H_WP3TRJfFk, Rødhåd oNYarqQNev0, Gerd Janson 02PstSNvln0. None was recorded at Fusion and the text says so, noting the festival's photo restraint. Unchecked spares: Recondite q4ic2xA8pys, Modeselektor IP8MHhNJF0s, Magda Ht_RshpD63s. Figures and embeds are not adjacent; the media audit passes with two tables added for the 2026 schedule and the lottery steps.

## 7. Back-links proposed, not applied

Other drafts were not edited. Proposed wording, for body paragraphs, is in the hand-off report: german-electronic-music-draft.md, best-electronic-music-festivals-europe-draft.md, berlin-clubs-draft.md, time-warp-draft.md.

## 8. Checks run

build, scoped OG card (`python3 scripts/build-og-cards.py fusion-festival` and `articles`), `npm run check:html`, `node audit-all.mjs` (22 audits), `npm run check:layout`, `npm run check:links`, `git diff --check`, and a second build with no diff change.
