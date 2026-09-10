# Best Boiler Room Sets: research package and decision gate

Status: research package for `ARTICLE-PRODUCTION-WORKFLOW.md` §3–§4. Nothing is
drafted. Evidence dated 2026-09-10 unless stated.

## Owner decisions (2026-09-10)

- Structure supplied by the owner: H1 "Best Boiler Room Sets of All Time", H2
  "What Makes a Boiler Room Set Great", ranked H3 list (15–20), FAQ.
- Ranking: **two lists**, one measured (most viewed) and one editorial (best).
- Scope: **all genres**. UK sets go in on merit, with no quota.
- FAQ: **no controversy question.**
- Stage 6 of `TOPIC-RESEARCH.md` has not been run as a separate pass. The owner's
  request to write is the decision, recorded in `TOPIC-DOSSIERS.md`.

## Final implementation decisions (2026-09-10)

- Third FAQ question: "What is the most viewed Boiler Room set?" (owner).
- Every ranked set carries its own note; the generator fails on a set with a
  player and no note (owner: "a good, interesting caption for each set, not a
  stack of videos").
- FAQ has **five** questions, not three: `audit-site-components.mjs`
  (`faqHasQuestions`) requires at least five on every guide. The two added are
  the remaining real PAA questions, "What is the best Boiler Room set ever?" and
  "What are some of the best Boiler Room sets to study to?". Controversy stays
  out. Reported to the owner for confirmation.
- Ranked list: 18 sets. Measured table: top 10 by views, with likes and like
  rate.
- Media: 18 Boiler Room YouTube embeds (own channel, checked by oEmbed), the
  Solomun set in the measured section, one Boiler Room SoundCloud upload (Len
  Faki, confirmed playing in the browser), four Commons photographs
  (`img/boiler-room/`).
- URL `/best-boiler-room-sets`, generator `build-boiler-room-article.mjs`.
- Owner revision, same day:
  - All inline external links were removed from the body; attribution now
    lives only in Sources, which gained setlist.fm ×2 and Sonicstate. Internal
    links stay.
  - The measured section now names the Selector as the source of the numbers.
    It carries a fresh screenshot narrowed to Boiler Room
    (`img/boiler-room/selector-*.webp`), linked in the caption. The player was
    hidden in the capture because headless YouTube shows a sign-in wall.

## Preservation inventory

A new page, so no preservation inventory exists. thecatrave.com ranks for no
query containing "boiler" (dossier, stage 1).

## Ahrefs validation

| Query | US | Global | Intent | SERP page types | This page? |
|---|---:|---:|---|---|---|
| boiler room set | 700 | 1,200 | listing / browse | boilerroom.tv, YouTube, Reddit, listicles | yes, secondary |
| best boiler room sets | 500 | 1,100 | ranked list | Reddit, Point Blank, BR charts, whynow, social | **primary** |
| boiler room sets | — | 450 | listing | same | yes |
| boiler room dj set | — | 300 | listing | same | yes |
| best boiler room sets of all time | 90 | 200 | ranked list | — | yes (H1) |
| charli xcx boiler room | 700 | 1,100 | specific set | own parent topic, TP 350 | FAQ only |
| most viewed / most popular boiler room set | 10 / 10 | 30 / 20 | fact | PAA | FAQ + measured list |
| boiler room controversy | 70 | 200 | reputational | PAA | **excluded** (owner) |
| what is a boiler room set | 250 | 400 | definition | UP Magazine, doubleclap, Point Blank | **excluded**: separate page candidate |
| boiler room meaning | — | 1,300 | definition | unclaimed | **excluded**: separate page candidate |

PAA on "best boiler room sets" (US), verbatim: What is the best Boiler Room set
ever? / What is the most viewed Boiler Room set? / What is the Boiler Room
controversy? / What are some of the best Boiler Room sets to study to?

Winnability: editorial slots are held by Point Blank (DR62, 4 RD, pos. 3) and
whynow (DR54, 3 RD, pos. 7). Every result is under the ~20 RD threshold in
`KEYWORD-METHOD.md` §4.

## Competitor coverage matrix

| URL | Intent | Sections | Media | Original value | Gap we can close |
|---|---|---|---|---|---|
| boilerroom.tv/playlist/top-10-all-time | most viewed | 10 players | the sets | first-party | no commentary, no numbers shown, no "why" |
| whynow.co.uk/read/best-boiler-room-sets | editorial top 10 | intro + 10 H2s | 1 header image | none stated; "views will vary" | no criteria, several entries lack a year, no measured data |
| pointblankmusicschool.com/blog/5-iconic-boiler-room-sets | top 5 | page returned HTTP 403; known only from search snippets | not inspected | — | snippet calls Yousuke Yukimatsu's Tokyo set "the most-watched set in the platform's archives". Our catalogue and Boiler Room's own list both put it 5th (20.39M vs Solomun's 76.19M) |
| reddit r/electronicmusic thread | forum | not inspected (fetch blocked) | — | — | — |

whynow's ten: Len Faki (Berlin), Carl Cox (Ibiza), Laurent Garnier (Dekmantel),
BKLAVA (AVA 2022), PinkPantheress (London), Mall Grab (Melbourne), Uncle Waffles
(Johannesburg), Sama' Abdulhadi (Palestine), Folamour (FLY Open Air 2019), Oden
& Fatzo (FLY Open Air 2022).

Boiler Room's top 10 all time ("the most viewed sets from the archive"):
Solomun (Tulum), Carl Cox (Ibiza), Fred again.. (London), Kaytranada
(Montréal), ¥ØU$UK€ ¥UK1MAT$U (Tokyo), Maceo Plex (Berlin), Sama' Abdulhadi
(Ramallah), David August (Berlin), Chase & Status (London), Nicola Cruz (Tulum).

## Our catalogue (the differentiator)

The catalogue holds 8,206 Boiler Room sets, 2012–2026, with 1.77 billion views in
total and like counts on 7,414 of them. Nobody else can publish this.

Top by views: Solomun 2015 76.19M · Carl Cox 2013 74.26M · Fred again.. 2022
55.25M · Kaytranada 2013 25.12M · ¥ØU$UK€ ¥UK1MAT$U 2025 20.39M · Maceo Plex
2014 16.83M · Richie Hawtin 2012 15.58M · Sama' Abdulhadi 2018 15.24M · David
August 2014 14.80M · Chase & Status 2023 14.68M.

Top by likes: Fred again.. (766,903) is first, ahead of Solomun, even with 21M
fewer views.

Like rate (likes per 1,000 views, sets over 1M views): DJ Ramon Sucesso 2024
49.9 · Yaeji 2024 34.4 · nasthug 2023 31.6 · PinkPantheress 2022 30.9 · 100
gecs 2023 30.3. Rates skew recent, because older uploads collected views before
likes were the habit. **Rates are only comparable within an era.**

Charli xcx: two 2024 sets, 8.96M (`rKPBq_j4buQ`) and 8.67M (`T3gcbYL2VMg`).
Which video is Brooklyn and which is Ibiza is **not yet verified**.

## Editorial shortlist (FIGURES.md cross-reference, partial)

Sources available so far: BR most-viewed (1), whynow (2), catalogue views/likes
(3), catalogue like rate (4). Point Blank and Reddit are not yet read.
Required = 3+ sources.

| Set | Sources | Status |
|---|---|---|
| Carl Cox, Ibiza 2013 | BR, whynow, views, likes | required |
| Sama' Abdulhadi, Ramallah 2018 | BR, whynow, views, likes | required |
| Fred again.., London 2022 | BR, views, likes #1 | required |
| Solomun, Tulum 2015 | BR, views #1 | measured list; editorial case needed |
| Kaytranada, Montréal 2013 | BR, views, likes | required |
| PinkPantheress, London 2022 | whynow, like rate | 2 sources |
| Folamour, FLY Open Air 2019 | whynow, year's top | 2 sources |
| Len Faki, Berlin 2014 | whynow, views (9.05M) | 2 sources |
| Chase & Status, London 2023 | BR, views, likes | required |
| ¥ØU$UK€ ¥UK1MAT$U, Tokyo 2025 | BR, views, likes #2 | required |
| Mall Grab, Uncle Waffles, BKLAVA, Laurent Garnier, Oden & Fatzo | whynow | 1 source, check Point Blank/Reddit |
| DJ EZ 2012/2014, Skream b2b Disclosure 2012, Underworld 2025, DJ Ramon Sucesso 2024, Charli xcx 2024 | catalogue only | differentiators |

## Proposed metadata

- URL: `/best-boiler-room-sets` (`best-boiler-room-sets.html`)
- Title: `Best Boiler Room Sets of All Time, Ranked and Measured`
- Meta: `The best Boiler Room sets, from Carl Cox in Ibiza to Fred again.. in
  London, beside the most-watched sets counted across 8,206 recordings.`
- H1: `Best Boiler Room Sets of All Time`
- Direct answer: `infoBanner` labelled `BEST BOILER ROOM SETS`.

## Outline

1. Hero plus direct answer (80–120 words): the most-watched set, the best-loved
   set, and how this page ranks.
2. H2 **What Makes a Boiler Room Set Great**: the format (DJ facing the crowd,
   camera behind, no stage), the crowd as half the performance, a moment that
   travels as a clip, a set that still works as a listen with the screen off,
   and reach versus affection (views versus like rate).
3. H2 **The Most-Watched Boiler Room Sets**: the measured top 10 as an
   `articleTable` (artist, city, year, views, likes), with a note on method.
4. H2 **The Best Boiler Room Sets**: 15–20 H3s, each `#N Artist, City Year`,
   with 1–2 paragraphs and the set's own Boiler Room YouTube embed.
5. H2 **FAQ**: most popular set ever / where Charli XCX did her Boiler Room set /
   third question open (see below).
6. Author, Sources, Bandcamp support, Read Next.

## Media plan

- Each H3 embeds the set from Boiler Room's official YouTube channel (licensed
  embed). Text always sits between embeds.
- 1–3 openly licensed photographs (Wikimedia Commons / Flickr CC), not yet
  searched. No media borrowed from other guides.
- Bandcamp: 1–3 thecatrave releases, per the standard block.

## Internal links

UK garage guide (Fred again.., DJ EZ, PinkPantheress), drum and bass guide
(Chase & Status), dubstep guide (Skream), the Selector (8,206 Boiler Room sets
at random), how-to-find-new-music.

## Open questions and uncertainties

- Third FAQ question. "What makes a DJ set a Boiler Room set?" is the circular
  PAA heading `WRITING.md` warns against, and it overlaps the excluded "what is a
  boiler room set" (400). Proposed: answer it by the format, or replace it with
  "What is the most viewed Boiler Room set?".
- Richie Hawtin 2012 (15.58M) is in our top 10 but absent from Boiler Room's own
  list. Check the upload source before printing the table.
- Charli xcx video IDs versus Brooklyn (99 Scott Ave, 22 Feb 2024) and Amnesia
  Ibiza (12 Jul 2024).
- Point Blank and Reddit consensus not read. Figures cross-reference incomplete.
- Owner standing (`KEYWORD-METHOD.md` §5): not asked.
