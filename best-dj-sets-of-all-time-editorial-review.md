# Editorial review: Best DJ Sets of All Time

Page: `best-dj-sets-of-all-time.html`. Draft: `best-dj-sets-of-all-time-draft.md`. Builder: `build-best-dj-sets-of-all-time-article.mjs`. Reviewed 5 October 2026 after the last edit to the draft and builder.

Independence: the reviewer is the agent that gathered the evidence and wrote the draft, so this review is not independent. Stage 6 (topic research validation) was not run by anyone else. The owner approved the 30-set shortlist and the grouping by sound before writing.

## Review one: facts, terminology and timeline

Claims on the page are of three kinds, each with the evidence behind it.

| Claim | Type | Evidence | Confidence | Action |
|---|---|---|---|---|
| Carl Cox at Space is named by four of the lists read | fact | Skiddle (57700), Play House Sound, Techno Airlines, blondish, Wedding DJ Pool: counted against the saved shortlist table | medium | kept; the Mixmag marathon list is not cited, so it is not counted |
| Plastic People last night is named by two lists | fact | same table | medium | kept |
| Set lengths (for example Black Coffee 182 min, Todd Terry 60, Honey Dijon 49, Joey Beltram 59) | numeric | Selector catalogue metadata (`selector-data.json`, run through `meta.py`), not the pages themselves | high for the catalogue, medium for the platform | kept |
| Fatboy Slim at Cercle is the most-watched set in the guide by a wide margin | superlative | catalogue view counts for all 30 | medium | kept, stays tied to catalogue counts at build date |
| Each set is an official upload | fact | YouTube, SoundCloud and Mixcloud oEmbed re-run 5 October 2026 | high | kept |
| Entry dates (year in each heading) | dated | catalogue year and upload year; unresolved conflicts dropped | medium | years kept only where the three sources agree |

Evidence checks run:

- Longest-set claim: an earlier draft called one house entry the longest of the house entries. Black Coffee and Solomun are longer. Corrected, then re-read against the catalogue.
- Audio-only count: an earlier draft said three. The entries are Carl Cox (Mixcloud), DJ Rashad and DJ Spinn (Mixcloud), Theo Parrish and Four Tet with Floating Points (SoundCloud): four. Corrected, and the FAQ now states four.
- Unverifiable colour claims removed: New Jersey, home town, "sharpest picture", "plays across genres", "sounds like it".
- Evidence labels corrected: Kraviz and Beyer are Substitute; Solomun points to his Boiler Room Tulum set.
- Photek's 1997 Essential Mix and BBC Sounds embedding: could not be verified in this session, so the sentence was removed from the FAQ.
- Date conflicts found earlier (Black Coffee Cercle, DJ EZ BR, Larry Heard Dimensions) do not touch any of the 30, so nothing was resolved and nothing is stated.
- Lists that could not be read (Reddit, RA, ZIPDJ, Rolling Stone, DJ Leakz, Dirty Disco, RYM) are not claimed anywhere on the page.
- Wikipedia: grep of the built page text returns zero hits.

## Review two: editorial, voice and the greps

Greps on the built page text (HTML stripped), 5 October 2026:

| Phrase | Hits | Decision |
|---|---|---|
| complete, full, whole, uninterrupted, in full | 0 | none to fix |
| an hour | 3 | all are stated lengths: Todd Terry (60 min), Joey Beltram (59 min), and a "if you have an hour" suggestion that lists Honey Dijon (49 min). Length, not completeness. Kept |
| Wikipedia | 0 | none |
| not ... but | 0 | none |
| matters, the point | 0 | none |
| jungle, drum and bass | 10 and 9 | all inside the "Jungle and drum and bass" group, the Fabio and Grooverider, DJ Randall and Goldie entries, and the source list. The page is a cross-genre list, so this is on topic |
| breaks | 1 | the owner's track title "Protect Ya Breaks" in the Bandcamp block. Owner promotion, disclosed, stays |
| em dashes | 0 in the draft; builder also replaces any that appear | none |

Humanizer record. Three sentences changed in the draft before this review, with the reason:

1. Before: "the longest of the house entries". After: the length is stated as a number and the comparison is dropped. Reason: it was false.
2. Before: "three of the entries are audio only". After: "Four" with the four named. Reason: it was a miscount.
3. Before: claims such as "sharpest picture" and "sounds like it". After: removed. Reason: nothing on the page supports them.

The page makes no claim that a set is whole, and no entry is described as complete.

Banner, first section and FAQ were compared. The banner is the answer paragraph; the introduction and the "What is the best DJ set of all time?" answer say different things (the banner states the method, the FAQ gives the count of lists). No shared sentence.

Voice: first person ("I read") is limited to the method and FAQ and describes reading, not experience of the sets. Entries label themselves Named, Substitute or Editorial pick.

Media: owner's own tracks (Protect Ya Breaks, 60 hours of mistakes) are in the Bandcamp block only and described by title.

## Review three: structure, SEO and cross-links

- Title and H1: "Best DJ Sets of All Time: 30 You Can Hear" and "The best DJ sets of all time". The keyword file lists "best dj sets of all time" (100 to 1K, Keyword Planner, 5 October 2026), "best dj sets" (400, Ahrefs dossier) and "best dj set" (250, Ahrefs dossier). `node audit-keywords.mjs` passes.
- Variants (techno sets, youtube, soundcloud, reddit) are recorded as not measured and not claimed as demand.
- Internal links on the page: `/best-boiler-room-sets`, `/best-techno-mixes`, `/best-soundcloud-dj-mixes`, `/live-dj-sets` and `/selector`, each as a next step in "Where to start". Each is a listening guide for the same intent from a different angle. No published guide's copy was edited; the new page is reached through `readNext` and the homepage and articles listings.
- Reused media: none. Every embed ID and slug was grepped across the repository on 5 October 2026. Three shortlist sets that turned up elsewhere were swapped (Frankie Knuckles, Richie Hawtin, Four Tet at Dekmantel) and Louie Vega at The Lot Radio was replaced with his DJ Mag HQ set. Cox and Fatboy each appear twice, once together, and the three recordings are different uploads.
- Embeds: all lazy-loaded; YouTube through the shared listening block, the four audio-only entries through the shared listening collection, which holds the Mixcloud and SoundCloud iframes. One player per entry.
- Hero image: none. No openly licensed photograph was confirmed and the shell is offline, so nothing was invented. The card and og image reuse the Lot Radio photograph already in the repository.
- FAQ has five questions, each answered from the page's own evidence.
- Ron Trent: not sourced, so not included.
- Jazzy Jeff: one hip hop aside inside the first house group, labelled as an aside.

Open items for the owner: the Mixmag marathon list is uncited because no URL was recorded; Space still counts at four lists without it. A hero image would need an openly licensed photograph, downloaded and credited.
## Approved reader and search update, 5 October 2026

The owner approved correcting the direct answer and hero/card descriptions so they no longer imply all 30 sets recur in published lists. The page still distinguishes Named, Substitute and Editorial pick, and the recordings, section order, URL, title, headings, metadata and anchors are unchanged. The existing selection ledger and upload checks above remain the evidence. Follow-up review is not independent.
