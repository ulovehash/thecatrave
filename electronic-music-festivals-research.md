# Electronic music festivals in Europe: research package and proposed structure

Status: proposed structure for `ARTICLE-PRODUCTION-WORKFLOW.md` §4. Nothing is
drafted. Evidence dated 2026-09-10. `TOPIC-RESEARCH.md` stages 3, 5 and 6 are
not done; the owner's request to structure the page is the decision to proceed
(same pattern as `best-boiler-room-sets-research.md`).

## Preservation inventory

A new page, so no preservation inventory exists.

## Ahrefs validation

| Query | Volume | Intent | SERP (US) | This page? |
|---|---:|---|---|---|
| best electro music festivals in europe | 4,000 | ranked list, travel | AI overview, electricsunsets.fi (DR14, 0 RD), Reddit ×2, new-east-archive (0 RD), hotels.com (0 RD), ticketswap (0 RD), travelanddestinations (0 RD), traveltriangle (1 RD) | **primary** |
| edm festivals | 5,100 | **local** ("near me") | jambase Wichita, Facebook group, Reddit r/wichita, TikTok, ticket reseller | **excluded**: the US SERP is local listings, not lists |
| biggest edm festivals | 700 | ranked list, world | Reddit, edmtrain (63 RD), doubleclap, MFW, borninstockholm (1 RD) | secondary: one section on scale |

PAA on "best electro music festivals in europe", verbatim:
What are the top 10 electronic music festivals in the world? / What is the
biggest music festival in Europe? / What are the best techno festivals in
Europe? / What is the world's biggest electronic music festival?

PAA on "edm festivals", verbatim: What are the top 10 EDM festivals? / What
festivals play EDM? / What are the major EDM festivals in the US? / What EDM
festivals are happening in Florida in 2026?

## Competitor coverage matrix

| URL | Intent | Sections | Gap we can close |
|---|---|---|---|
| electricsunsets.fi, pos. 2 | promo for one Finnish festival dressed as a list | 5 H2s, only its own festival described | not a list at all: no dates, no prices, no comparison |
| new-east-archive.org, pos. 5 | ten festivals, Eastern Europe | not inspected: HTTP 403 | — |
| hotels.com, ticketswap, TAD, traveltriangle | travel listicles | not inspected | — |

## Our catalogue (the differentiator)

Recorded sets per festival (owner's counts, 2026-09-10): Dekmantel 81,
Creamfields 52, Sónar 13, EDC 10, Time Warp 6. A title search on
`selector-data.min.json` gives slightly different numbers (Dekmantel 23 by
title versus 77 on the channel, per `TOPIC-DOSSIERS.md`): the counting method
must be fixed and stated before any number is printed.

Title-search zero: Tomorrowland, Defqon.1, Sziget, Primavera, Dimensions,
Houghton, Ozora. A festival without sets in the catalogue gets no listening
block, and the page says so rather than borrowing sets from elsewhere.

## Proposed structure

- **URL** `/best-electronic-music-festivals-europe`
- **Title** Best Electronic Music Festivals in Europe, and What They Sound Like
- **H1** The Best Electronic Music Festivals in Europe
- **Meta** Dekmantel, Creamfields, Sónar, Time Warp and more, grouped by sound,
  with recorded sets from each so you can hear a festival before you book it.

1. **Answer block** (`infoBanner`, "BEST ELECTRONIC MUSIC FESTIVALS IN EUROPE"):
   the short list in 80–120 words. Reader job: answer now. SEO job: primary.
2. **How this list was chosen.** Criteria plus the catalogue as the measured
   layer. Reader job: trust. SEO job: none; this is the differentiation.
3. **Festivals by sound**, H2 per group, H3 per festival. Grouping by sound, not
   by country, because this site is about music. Each H3: city, month, capacity
   band, what the music actually is, one recorded set with a note.
   - **Techno and house**: Dekmantel, Time Warp, Awakenings, Sónar.
     Carries PAA "best techno festivals in Europe".
   - **Big-room and EDM**: Tomorrowland, Creamfields, Untold, Defqon.1.
   - **Bass, jungle and drum and bass**: Boomtown, Outlook and others. Closest
     to the site's own guides; internal links go here.
4. **The biggest by attendance** (`articleTable`): festival, country,
   attendance, first year. Carries "biggest edm festivals" and PAA "biggest
   music festival in Europe". Figures sourced per row.
5. **Outside Europe, briefly**: EDC, Ultra, Movement Detroit, one paragraph
   each. PAA "top 10 electronic festivals in the world" asks for it; the page
   stays European.
6. **FAQ** (five, per `faqHasQuestions`): the four PAA above plus "When is
   festival season in Europe?" only if a search check supports it.
7. Author, Sources, Bandcamp, Read Next.

## Excluded intents

- Local "edm festivals near me" and US-only listings.
- Single-festival navigation (tomorrowland, glastonbury): official sites hold
  the SERP (`TOPIC-DOSSIERS.md`).
- Tickets, prices and camping logistics beyond a line: travel sites own it and
  the numbers change yearly.

## Open before drafting

- The festival roster above comes from queries and the catalogue, not a source
  list. Before the draft, confirm each against a source the way `FIGURES.md`
  does for artists, and decide which bass festivals make the third group.
- Stage 5: organic keywords of new-east-archive and hotels.com (exact URL).
- Attendance figures need a source per festival.
- Images: openly licensed Commons photographs per festival, new to this page.
