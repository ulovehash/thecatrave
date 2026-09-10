# Burning Man: research package and proposed structure

Status: proposed structure for `ARTICLE-PRODUCTION-WORKFLOW.md` §4. Nothing is
drafted. Evidence dated 2026-09-10, US unless stated. `TOPIC-RESEARCH.md`
stages 3, 5 and 6 are not done; the owner's request is the decision to proceed.

## Preservation inventory

A new page, so no preservation inventory exists.

## Ahrefs validation

| Query | Volume | TP | Intent | This page? |
|---|---:|---:|---|---|
| what is burning man | 22,000 | 72,000 | definition | **primary** |
| what is burning man festival | 12,000 | — | definition | primary, same page |
| where is burning man | 8,300 | — | fact | answer block + section |
| black rock city | 7,800 | — | place | section |
| what happens at burning man | 3,600 | — | experience | section |
| how long is burning man | 2,000 | — | fact | FAQ |
| how much does burning man cost | ~1,900 | — | fact | FAQ |
| mayan warrior | 3,600 | 900 | navigational (sound camp) | H3 in music section |
| robot heart | 700 | 150 | navigational (sound camp) | H3 in music section |
| is burning man a music festival | 300 | 100 | the site's angle | H2 |
| burning man music | 100 | 72,000 | parent "burning man" | covered by the H2 |
| burning man history | 250 | 35,000 | parent "burning man" | section |
| burning man principles | 250 | 800 | definition | section |
| burning man art | 500 | 350 | topic | one paragraph |
| burning man 2026 | 8,800 | 4,200 | news, dates | **excluded**: dated, official site |
| burning man tickets | 2,700 | 7,800 | transactional | **excluded**: one line + link |

## SERP

"what is burning man" (from `TOPIC-DOSSIERS.md`): explorehere.app (DR19, 0 RD,
pos. 2), inthesetimes (2 RD), Reddit, Facebook answers, journal.burningman
(0 RD), sfih.us (DR10, 0 RD). PAA: What is the purpose of the Burning Man? /
How much does it cost to attend? / Why is Burning Man so controversial? / What
actually happens at Burning Man?

"what happens at burning man" (2026-09-10): AI overview, Reddit ×2, sfih.us
(DR10, 0 RD, pos. 4), Minot Daily News (0 RD), Quora, Facebook, WION,
Instagram. PAA: Is Burning Man a nudist event? / What exactly do you do at
Burning Man? / How do people use the bathroom at Burning Man? / How many people
have died at Burning Man over the years?

Every editorial incumbent in both SERPs has 0–2 RD.

## Our catalogue: nothing

Title search in `selector-data.min.json` for Burning Man, Robot Heart, Black
Rock, Playa, Distrikt, Disorient, Opulent Temple, Dancetronauts: **zero sets**.
Mayan Warrior appears once, at the Brooklyn Mirage (2018), not on the playa.
The Selector cannot be this page's differentiator. That leaves the owner's
standing as a DJ and producer, and a music-first answer to a question the
current SERP answers as travel and lifestyle.

## Proposed structure

- **URL** `/what-is-burning-man`
- **Title** What Is Burning Man? The Event, the City and the Music
- **H1** What Is Burning Man?
- **Meta** A week-long temporary city in the Nevada desert, not a festival
  with a lineup. What happens there, where it is, what it costs, and what the
  sound camps actually play.

1. **Answer block** (`infoBanner`, "WHAT IS BURNING MAN"): what, where, when,
   how long, in 80–120 words. Carries "what is", "where is", "how long".
2. **Black Rock City**: the temporary city, its layout, who builds it.
   Carries "black rock city".
3. **What happens at Burning Man**: art, camps, the burn itself; answers PAA
   "What exactly do you do". Carries "what happens", "burning man art".
4. **The ten principles**: short, not a copy of the official list. Carries
   "principles", PAA "purpose".
5. **Is Burning Man a music festival?** The page's own angle. No booked
   lineup, no main stage; music comes from sound camps and art cars.
   - H3 Robot Heart
   - H3 Mayan Warrior
   - H3 others, only those a source confirms
   Recorded sets from the camps' own channels, verified before embedding.
6. **History**: 1986 to now, eras rather than a diary. Carries "history".
   Includes the 2023 flood, which the "what happens" SERP surfaces.
7. **Controversies**: PAA asks it on the head term. Owner to decide, as with
   Boiler Room's controversy question.
8. **FAQ** (five): cost, how long, where, nudity, deaths. The last two are
   real PAA; owner to confirm tone.
9. Author, Sources, Bandcamp, Read Next.

## Excluded intents

- Tickets, 2026 dates, survival and packing lists: official site and Reddit.
- Regional burns, unless a section is approved.

## Open before drafting

- **Fit.** `TOPIC-DOSSIERS.md` already notes Burning Man is not primarily a
  music festival, and the site is about UK dance music. Section 5 is the only
  part that earns the author's standing. The owner's decision.
- Stage 3 (also_talk_about) and stage 5 (organic keywords of explorehere.app
  and sfih.us) not run.
- Every fact from §2, §4 and §6 needs a source; none is written from memory.
- Sound-camp roster needs a source list, like `FIGURES.md`.
- Images: Commons photographs of the playa and art cars, new to this site.

## Final implementation decisions (2026-09-10)

- URL `/what-is-burning-man`, generator `build-burning-man-article.mjs`, OG
  card `img/og/burning-man.jpg` (Robot Heart photograph).
- Media placement lives in the draft as `[Image: …]`, `[Embed: …]` and
  `[Table: …]` placeholder lines; the generator fails on a placeholder with no
  asset and on an asset with no placeholder.
- Images (Commons, `img/burning-man/`): ESA "Earth from Space" (Copernicus
  attribution), Big Imagination's 747 (Steve Jurvetson, CC BY 2.0), Robot
  Heart (Peretz Partensky, CC BY 2.0), 1987 poster (public domain).
- Players: Lee Burridge, Robot Heart 2019 (Robot Heart channel); YAMAGUCCI,
  Mayan Warrior 2025 (MayanWarrior channel); Essential listening block with
  Lee Burridge, Robot Heart 2025 (his channel) and John Summit, Mayan Warrior
  2025 (MayanWarrior channel). All oEmbed-checked.
- Attendance table added to the history section. `audit-site-components.mjs`
  requires `articleTable(` in every generator, and the figures are sourced
  (Wikipedia, census not yet checked).
- The closing-section embed became an Essential listening collection because
  every guide must carry at least one full-bleed Essential listening block.
- Homepage (owner, 2026-09-10): the grid always shows the eight newest
  articles; a new one pushes the oldest off. Implemented as `HOME_CARDS` in
  `home-articles.mjs`, replacing the `onHome:false` flag.
- Bandcamp block: the owner's own two tracks, as on the Boiler Room guide, not
  All Day I Dream releases (the block supports the owner's music).
- Found and fixed on the way, each logged in `defects.json`: OG card script
  missing the Boiler Room hero; the build skipping the sitemap generator; the
  homepage card-count audit stopping at nine.
