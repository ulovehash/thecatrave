# AI-slop review, all guides, 4 November 2026

A structural pass over the 102 English guides, looking for the habits that make
a page read as machine-written even when the sentences are clean: an answer
said several times, entries poured into one template, sentences that narrate
the page or the search behind it, generic boilerplate shared across guides,
and the weight of self-promotion. The German, French and Spanish pages are
built from the same structure, so every structural finding below applies to
their translations too.

Word-level habits (stock AI words, "not X but Y", dashes) were covered by the
humanizer batches (1, 2, 3, 5 and 6) and are mostly clean: see section 7.

**Method.** A scan of every built page measured each marker; every finding
below was then read on the page. Nothing in this file has been changed on a
live page. Fixes go into the `*-draft.md` or builder source once the owner
approves the exact wording, as with the humanizer batches.

Already fixed on 4 November and not repeated here: self-explaining listening
cards on every guide, and the fourfold answer on `best-edm-festivals-world`.

---

## Summary, by how much of the site each finding touches

| # | Finding | Guides | Severity |
|---|---|---|---|
| 1 | A stray copy of the breakbeat guide is live | 1 page | High |
| 2 | Keyword research written into the prose | 15 | High |
| 3 | "This guide covers X, Y and Z" opening sentence | 28 | Medium |
| 4 | The roundup answer repeated four to six times | 9 roundups | Medium |
| 5 | The festival planner's generic boilerplate | up to 28 | Medium |
| 6 | Pages that narrate themselves ("This page does not…") | 12 | Low to medium |
| 7 | Stock words | 1 guide | Low |
| 8 | Question headings in one skeleton | 4 | Low |
| 9 | Self-promotion weight on festival roundups | ~20 | Owner's call |

---

## 1. A stray copy of the breakbeat guide is live

`breakbeat-guide copy.html` (62 KB) sits in the site root and is published by
GitHub Pages at `/breakbeat-guide%20copy.html`. It was committed by accident in
`cc39463` ("Add Spanish EXIT Festival guide", 10 October). Nothing links to it
and its canonical points at `/breakbeat-guide`, so search engines should fold
it into the real page, but anyone can open it. It is an old draft and reads like
one: "Time-Stretching: Especially iconic in Nu Skool Breaks — that rubbery snare
drag? That's stretch artifacts." and "It's chaotic, euphoric, borderline
illegal."

**Proposed:** delete the file. No copy change to any live guide.

## 2. Keyword research written into the prose

AGENTS.md section 4 already bans explanations of SEO choices in article copy.
These sentences describe what people type into Google, or why the page exists
for a query, instead of telling the reader something:

| Guide | Sentence now |
|---|---|
| awakenings-festival | Search for Awakenings and the top results are the festival's own site, Wikipedia and Instagram: a navigational head with no room for an outside guide. |
| primavera-sound-barcelona | This guide answers the main questions behind searches for Primavera Sound Barcelona: … |
| ultra-music-festival | …Croatians search for it as Ultra Split more often than as Ultra Europe. |
| best-winter-music-festivals | They are the answer to a search for the best winter music festivals if you want names you know. |
| dubstep-guide | Understanding why is most of what people are actually asking when they search for the term. |
| printworks-london | Searches for Printworks, Printworks London or the reopening mostly come from people who want to know one thing: can I go there yet? |
| printworks-london | A search for Drumsheds Printworks usually wants one answer: one is open, the other is not. |
| love-parade | Searches for "loveparade" split three ways: people who want the history, people who want to know what happened in Duisburg, and people who think it might still be on. |
| fusion-festival | Fusion is hard to search for, because three years of questions overlap. |
| dubstep-guide | Search for dubstep and you will find two answers that contradict each other. |
| bass-music-guide | Search for bass music and the results pull in several directions at once. |
| best-clubs-in-budapest | Search for Budapest nightlife and what comes back first is ruin bars: … |
| best-clubs-in-berlin | Search for how to get into Berghain and you will find tested guides, rejection odds, outfit lists and videos… |
| best-clubbing-cities-in-europe | Search for the best party cities in Europe and you get travel lists: … |
| best-electronic-music-clubs-in-london | There is another London in every search for the best nightclubs in London. |
| why-dj-mag-top-100-never-changes | Search for famous DJs and the first result is the poll. |

The first seven are the worst: "a navigational head" is keyword-tool jargon,
and the Printworks, Primavera, Ultra, winter and dubstep lines report search
intent as if it were a fact about the music. The "Search for X and you get…"
openers (the last eight) are a known rhetorical move, and one would be fine;
eight guides opening the same way is the tic.

**Proposed:** cut the first seven, or turn each into the fact underneath it
(Printworks: "Printworks is closed. Drumsheds, run by the same company, is
open."). Keep at most two of the "Search for X" openers, where what comes back
is itself the story (Budapest's ruin bars, Berghain's door guides), and open
the others on the subject.

## 3. "This guide covers X, Y and Z"

Twenty-eight guides carry a sentence that lists the page's own sections back to the
reader. On the festival guides it is nearly the same sentence each time:

> This guide covers where Creamfields happens and when, how big it is, how it grew and who owns it now, and why it became famous.
> This guide covers where Parookaville happens and when, how big it is, who started it and who runs it now, and why a festival dressed up as a town caught on.
> This guide covers where it happens and when, how big it really is, how an early Southern California rave became the flagship of a company, and why it became famous. (EDC)
> This guide covers when Untold 2027 is, where Untold happens, how big it is, who started it, and why a festival in Transylvania got so famous.

Same shape on Ultra, Coachella, Sónar, Mysteryland, Lollapalooza, Glastonbury,
Fusion, Defqon.1, Amsterdam festivals, Portugal, Asia, and on the genre guides
(techno, house, drum and bass, dubstep, UK garage, grime, acid house), the club
guides (Europe, Tokyo, Tbilisi, Vienna) and Burning Man. Every page already has
a contents box directly above or below it, so the sentence repeats the
contents in prose.

**Proposed:** delete the sentence where the paragraph stands without it, which
is most of them. Where it carries a real claim, keep the claim and drop the
list: Tokyo's "the clubs built for house, techno and bass music rather than the
hostess clubs and members' bars that also answer to 'club'" is worth keeping;
"This guide covers" in front of it is not. Keyword phrases that sit only in
this sentence are checked before cutting, as the humanizer batches did.

## 4. The roundup answer, four to six times

The fix made on the world festivals guide applies to the other roundups. The
answer box, a section opener, the "How to choose" section and two FAQ answers
each give the same answer:

- **best-edm-festivals-usa**: "depends on what you want to hear" in the answer box; "Which are the best EDM festivals in the US? That depends on what you want to hear…" opening a section; "Pick the sound first, then the setting, then the date"; FAQ "Go to the one that plays the sound you like"; FAQ "…are the popular EDM festivals in the US". Six versions.
- **best-electronic-music-festivals-portugal**: answer box "depend on the sound"; "Pick the sound first"; FAQ "It depends on the sound you want", with the same festival-by-sound list three times.
- **best-electronic-music-festivals-asia**: the seven festival names listed in the answer box, the deck, a section, and three FAQ answers, two of which begin "On this page, …".
- Same pattern, three or four times each: Germany, Europe, drum and bass festivals, house festivals, Croatia, bass festivals.

The shared builder (`festival-roundup.mjs`) produces the "How to choose" and
FAQ shape, so the duplication is structural.

**Proposed:** per roundup, keep the answer box and one FAQ answer; give the
section openers and "How to choose" something the answer does not already say
(the calendar, the trade-offs between two festivals, getting there). FAQ
answers stop opening with "On this page".

## 5. The festival planner's boilerplate

The planning block on the single-festival guides repeats the same generic
lines across up to 28 guides, word for word apart from the festival name:

> Use the live sources for prices, timetables, the current map and entry rules. (28 guides)
> A status of "not published" means the organiser has not released a valid 2027 price. (22)
> Booking fees, transport, accommodation and optional upgrades may be separate. (22)
> Recheck the final timetable and pick-up point shortly before travel. (22)
> The current food and drink menu is not published. (13)
> Use the live event information for water points, payment method and any outside-food exception. (13)
> Leaving without checking the current alcohol and cooking limits (12)

plus a packing list (refillable bottle, earplugs and power bank; tent, sleeping
bag, mat and head torch) identical across Fusion, Defqon.1, Electric Forest and
others. It reads as a form, not as advice about that festival, and the lines
that say a thing "is not published" tell the reader nothing.

**Proposed:** cut the lines that say only that something is not published or
should be checked, and keep the planner to what is specific to that festival
(its transport, its camping rules, its ticket phases). This is one change in the
shared planner component rather than 28 edits; the wording would come to the
owner first.

## 6. Pages that narrate themselves

Smaller than section 3, the same habit: the page explaining what it does
instead of doing it.

| Guide | Sentence now |
|---|---|
| dekmantel-festival | This page answers what people ask before they go. |
| dekmantel-festival | This page does not print a price, because the only figures found were on aggregator sites that disagreed with each other. |
| defqon-1 | Visitor numbers are quoted differently by different outlets, so this page does not give one. |
| electric-forest-festival | This page keeps what is stable (the venue, the way passes and camping work, the rules) and says plainly what is not yet announced. |
| best-techno-tracks | This page lists nine, not twenty, so that each record gets its own reason and its own player. |
| best-trance-tracks | This page lists and plays records. |
| best-electronic-music-festivals-europe | This page does not list prices, which change by ticket phase. |
| love-parade | This page does not describe the crush further, and DW's anniversary reporting is the place to read the account. |
| acid-house-guide | House music is a much bigger subject with its own history, which this guide does not try to cover. |

The Dekmantel price line also reports research process ("the only figures
found"), which AGENTS.md section 4 bans.

**Proposed:** cut the first six. The Love Parade line is a deliberate choice on
a page about a fatal crush and pointing to DW is useful; it can lose "This page
does not" and simply say where to read the account. The Europe prices line and
the acid house line can become plain facts ("Prices change by ticket phase.",
link to the house guide).

## 7. Stock words

Clean almost everywhere. "Euphoric" is a genre term (euphoric trance,
euphoric hardstyle), "Electrifying Mojo" and "Elevate" are names. The one
cluster is the jungle guide, which uses "iconic" six times: "that iconic
chant", "its iconic 'Burial!' vocal sample", "Jungle's most iconic MC", "were
especially iconic", "Perhaps Jungle's most iconic vocal", "iconic 'Woo!'
vocal". The jungle body is preserved between markers and is the owner's own
long-form guide, so this is listed, not proposed.

## 8. Question headings in one skeleton

Four newer festival guides (Time Warp, Dekmantel, Snowbombing, Love Parade)
use the same heading set: "What is X? / When is X 2027? / Where is X held? / How
do X tickets work? / Who plays X? / Which X sets should you hear first? / Plan
your X trip." Each heading passes the WRITING.md test on its own, since none can be
answered without reading the section, but four pages with the identical
skeleton look generated. Low priority; worth varying the next time each guide
is refreshed.

## 9. Self-promotion weight

Every festival roundup carries four of the owner's own music cards (the Rare
Electronic Music playlist, both DJ mixes, one track), a Bandcamp sidebar and
the Selector bar, on pages of 1,500 to 2,500 words. Single-festival guides
carry three cards plus the Bandcamp card. AGENTS.md requires at least one; the
festival series rules ask for both mixes. This is the owner's decision, not a
defect, and is listed because a reader counts it: on the world festivals guide
the own-music cards outnumber the third-party embeds.

---

## Logged in defects.json

Sections 1, 2 and 4 break rules already written down (an accidental public
file; AGENTS.md section 4; the same defect already fixed on the world guide), so
they are logged as open entries and will print on every build until fixed.
Sections 3, 5, 6, 8 and 9 wait for the owner's ruling.

---

## Applied, 4 November 2026

The owner approved every finding ("fix everything"). All changes are in the
`*-draft.md` and builder sources, in English and in every German, French and
Spanish translation that carries the same text, and the site was rebuilt.

1. **Stray page.** `breakbeat-guide copy.html` deleted. `audit-site-components.mjs`
   now fails on any published `.html` that is not in the page manifest.
2. **Keyword research in prose.** Cut or turned into the fact underneath, for example
   Printworks: "Printworks London has not reopened, and the reopening has no date.";
   Ultra Europe: "…and it is often called Ultra Split, or Ultra Croatia."; Awakenings:
   "Awakenings is worth explaining properly, because it has stayed…". Three
   "Search for X" openers stay, where what comes back is the story: Budapest's
   ruin bars, the Berghain door guides, the DJ Mag poll.
3. **"This guide covers…"** removed from all 28 guides, together with "the
   question this site is here for". Where the sentence carried a fact, the fact
   stays: "The 23 clubs here are in ten countries…", "The clubs here are the
   ones built for house, techno and bass music, not the hostess clubs…". Coachella,
   Untold and Burning Man keep their opening question, now answered with facts.
   EDC, Ultra and Tomorrowland keep the line that says which EDC, Ultra or
   Tomorrowland is meant.
4. **Roundup answers.** The "Pick X first" paragraph that walked back through
   the answer box is gone from twelve roundups; each How to choose now opens on
   the calendar and clashes. The US roundup gets a calendar introduction, a How to
   choose built on what the answer box does not say ("Ultra and the Southern
   California edition of Beyond Wonderland share the last weekend of March…"),
   and a first-festival FAQ answer. "On this page," FAQ openers removed.
5. **Planner boilerplate.** The registry no longer falls back to generic notes or
   packing lists; a block shows only what is specific to that festival, and an
   empty one is not rendered. Guides with their own planner (Airbeat One, ARC,
   Sziget and others) were already specific and are unchanged.
6. **Self-narration.** "This page compares… and shows which dates are confirmed"
   (twelve roundups), "This page answers what people ask before they go", "This
   page does not print a price, because the only figures found…", the 90s guide's
   three descriptions of its own order, "this site does not run the same media
   twice" and similar: cut or rewritten. Sentences that point at the page's
   content in a writer's voice stay ("The jungle guide follows the records; this
   page follows the rooms.", "Six are in this guide.").
7. **"Iconic"** in the jungle guide and its translations: "best-known" where it
   carried a claim, cut where it did not.
8. **Heading skeleton.** The non-keyword questions on Time Warp, Dekmantel,
   Snowbombing and Love Parade became plain headings ("The Amsterdamse Bos.",
   "Dekmantel sets to hear first."); the Spanish Time Warp guide the same.
9. **Self-promotion weight.** Not changed: the number of own-music cards follows
   the owner's rule of 13 September ("promote both" mixes on festival guides).
   Left for the owner.

**Keywords.** Phrases whose only home was a cut sentence were either given a
real sentence (coachella festival, what is coachella festival, untold music
festival, burning man festival, dnb festivals, edm festivals mexico) or, where
they could not sit in a natural sentence, moved to `rejected` with the reason:
drumsheds printworks (10/mo), best dance music festivals uk (10/mo), best
festivals in croatia (10/mo).

**Guards.** `audit-banned-phrases.mjs` fails the build on the search-intent and
self-description wordings in all four languages. `defects.json` records every
finding, each closed by a phrase the defect audit checks on every build.
