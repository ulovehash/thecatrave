# Best and famous clubs in Berlin: research package

Status: pre-writing. Stage 6 verdict (2026-09-10): write it, in the owner's
form. The full evidence trail is in `TOPIC-DOSSIERS.md` under «Клубы Берлина».

The two drafts below live here, not in `keywords/` or `media/`.
`audit-keywords.mjs` and `audit-canon.mjs` fail the build for a map whose page
does not exist. Move them into place when the page is added to `pages.mjs`.

No Search Console preservation inventory exists: this is a new page.

## SERPs checked in this pass (US, 2026-09-10)

**best clubs in berlin** (250 US).
- PAA: What is the most popular club in Berlin? / What is the most famous
  night club in Berlin? / Is Berghain hard to get into? / What is the most
  prestigious club in Berlin?
- Organic results:
  - Reddit door-policy thread
  - RA guide (13 RD, pos 4)
  - Tripadvisor (2 RD)
  - **trip.com "2026 Top 20" (DR86, 0 RD, pos 6)**
  - visitberlin (9 RD)
  - **questoapp (2 RD, pos 8)**
  - **top10berlin (3 RD, pos 9)**
  - YouTube
- Weakest editorial pages: 0–3 RD.

**how to get into berghain** (600 US / 1,800 global).
- PAA: Is Berghain really hard to get into? / What is Berghain's rejection
  rate? / What do Berghain bouncers ask? / What are the odds of getting into
  Berghain?
- Organic results:
  - Reddit (389 visits)
  - **the-berliner.com "tried and tested guide" (DR70, 17 RD, pos 4)**
  - **andtost substack (0 RD, pos 5)**
  - Facebook, Quora
  - insomniac magazine (pos 8)
  - TikTok
  - **astray.com.au (DR29, pos 10)**
- A text article can take this SERP; the weakest text pages have 0 RD.

**also_talk_about** on "best clubs in berlin": berlin berghain 3,700,
panorama bar 2,500, admission policy 250, sound system, friedrichshain bars.
The rest is travel-site boilerplate (tripadvisor, reviews, checks).

## Draft keyword map (future `keywords/berlin-clubs.json`)

```json
{
  "page": "<berlin clubs page>.html",
  "seed": "best clubs in berlin",
  "source": "ahrefs keywords-explorer, September 2026, global volume; stage 6 verdict in TOPIC-DOSSIERS.md",
  "terms": [
    { "term": "best clubs in berlin", "volume": 1600 },
    { "term": "best clubs berlin", "volume": 800 },
    { "term": "best berlin clubs", "volume": 350 },
    { "term": "top clubs in berlin", "volume": 250 },
    { "term": "famous clubs in berlin", "volume": 200 },
    { "term": "most famous club in berlin", "volume": 200 },
    { "term": "best techno clubs in berlin", "volume": 350 },
    { "term": "berlin techno clubs", "volume": 1200 },
    { "term": "berlin night clubs", "volume": 700 },
    { "term": "berlin clubs", "volume": 6100 },
    { "term": "how to get into berghain", "volume": 1800 },
    { "term": "what is berghain", "volume": 800 },
    { "term": "berghain door policy", "volume": 60 },
    { "term": "berlin club dress code", "volume": 150 },
    { "term": "berlin club culture", "volume": 100 },
    { "term": "berlin nightlife", "volume": 5200 },
    { "term": "berlin techno", "volume": 2000 }
  ],
  "rejected": [
    { "term": "berghain", "volume": 198000, "why": "navigational brand; everyone wants berghain.berlin" },
    { "term": "legendary berlin clubs", "volume": 0, "why": "no volume; the word belongs in the title only" },
    { "term": "clubs berlin heute", "volume": 350, "why": "German-language listings intent" },
    { "term": "beste clubs berlin", "volume": 300, "why": "German-language; ~880 across all beste/besten variants" },
    { "term": "clubs berlin", "volume": 6900, "why": "German word order, 70 US; mostly DE listings demand" },
    { "term": "berlin techno events", "volume": 450, "why": "listings" },
    { "term": "berlin sex clubs", "volume": 1200, "why": "collision; ~3,800 across sex/swinger/strip/fkk/kinky" },
    { "term": "berlin football clubs", "volume": 800, "why": "collision" },
    { "term": "gay clubs berlin", "volume": 800, "why": "a separate angle, ~1,500 in total; not this page" },
    { "term": "berlin techno outfit", "volume": 350, "why": "clothing" },
    { "term": "techno ballet berlin", "volume": 300, "why": "a stage show" },
    { "term": "berlin techno club crowd", "volume": 300, "why": "image intent, as are interior and exterior" },
    { "term": "kitkat club", "volume": 23000, "why": "collision with the Cabaret musical; use 'kitkatclub berlin' (1,600) wording in prose only" },
    { "term": "rso berlin", "volume": 22000, "why": "probably the Rundfunk-Sinfonieorchester, not the club; unverified" }
  ]
}
```

Variant phrases that the page should read naturally with but need not force
into the text: best club in berlin 350, berlin best clubs 250, famous berlin club 450,
famous nightclub in berlin 300, best nightclubs in berlin 300, berlin
underground clubs 200, why is berghain so famous 40, berlin techno scene 150.

## Clubs the page must name (FIGURES.md, adapted from people to clubs)

Sources:
1. **S1**, search demand (US / global). Source: Ahrefs overview.
2. **S2**, also_talk_about.
3. **S3**, PAA.
4. **S4**, consensus lists read in this pass: RA guide, Time Out "17 best
   clubs", tv-turm.de. Not read: questoapp (HTTP 429 twice) and visitberlin
   (socket closed twice).
5. **S5**, history: English Wikipedia for Tresor, Berghain, KitKatClub and
   Bar 25; German Wikipedia for Watergate and E-Werk.
6. **S6**, the catalogue. It has no venue field, so it cannot count sets per
   club. Broadcaster HÖR holds 9,708 of 62,877 sets. That HÖR is
   Berlin-based needs a source before it is quoted.

Rule: **required** means 3+ sources or S5 at all. **Optional** means 2
sources. **Rejected** means 1 source and not S5.

### Required

| Club | Sources | Status | What it is required for (from S5 unless noted) |
|---|---|---|---|
| UFO | S5 | closed 1990 | Opened 1988 by the Interfisch label; Wikipedia calls it "the original centre of Berlin house and techno". A founder sentence. |
| Tresor | S1 700/14,000, S4 ×2, S5 | open | Opened March 1991 by Dimitri Hegemann in the Wertheim vaults on Leipziger Strasse; closed 16 April 2005; reopened 24 May 2007 in Kraftwerk Mitte. Tresor Records from October 1991 (Jeff Mills, Juan Atkins, Robert Hood, Drexciya): the Detroit link. |
| E-Werk | S1 200, S5 | closed 24 July 1997 | 1993–1997; run by Hilke Saul, Andreas Rossmann, Ralf Regitz and Lee Waters. The German article draws no link to Tresor or Love Parade. Do not assert one without a source. |
| Reichsbahnbunker (Bunker) | S5 | closed December 1996 | Parties 1992 – December 1996, named in the Berghain article. |
| KitKatClub | S1 250/1,600, S3, S4 ×2, S5 | open | March 1994, Simon Thaur and Kirsten Krüger; four locations, SageClub at Brückenstraße since July 2007; dress code of fetish, latex, leather and glamour. |
| Ostgut → Berghain / Panorama Bar | S1, S2, S3, S4 ×3, S5 | open | Snax Club from 1994 (Thormann and Teufele); Ostgut 1998 – January 2003 at Mühlenstraße; Berghain from December 2004 in the 1953 heating plant; building owned since 2011; ruled a cultural institution for tax in 2016; photography ban. The page's central section. |
| Watergate | S1 200/5,900, S4 (Time Out, on the closure), S5 | closed end of 2024 | October 2002 at the Oberbaumbrücke; DJ Mag top 10 in 2009; Watergate Records 2008; closed over rising costs and a changing club culture. |
| Bar 25 → Kater Blau | S1 6,500, S4 ×3, S5 | Bar 25 closed September 2010; Kater Blau open | 2003 – September 2010, 48-hour parties; documentary 2012. The successors (Kater Holzig, Kater Blau) have no dates in the article, so they need a second source. |
| Club der Visionaere | S1 50/900, S4 ×2 | open | RA: "spiritual home of minimal", early 2000s. |
| Wilde Renate | S1 70/3,800, S4 ×2 | closing 2025 (Time Out) | Status needs checking before publication. |
| OST | S1 900 global, S4 ×2 | open | A former power station (RA and Time Out). |

### Sisyphos: required, by owner decision (2026-09-10)

The owner's favourite club, and the owner's first-person experience counts
as a source. Sources: S1, S4 (Time Out), the owner, and de.wikipedia
"Sisyphos (Berlin)".

Facts from de.wikipedia:
- The operator is Sommerleuchten e.V., "an association for contemporary
  media and free art", which took over the site in 2008. The first parties
  were in 2009, in a small circle.
- Address: Hauptstraße 15, Berlin-Rummelsburg.
- The building is a former dog-biscuit factory ("ehemalige Fabrik für
  Hundekuchen").
- Founders: Julius Hausl and Lina Thiele. Sisyphos Event GmbH runs it.
- Five floors, capacity about 1,500, an outdoor area.
- From spring to New Year, parties run every weekend, typically without a
  break from Friday 22:00 to Monday 10:00.
- In 2014 the Lichtenberg district office closed it for lacking permits.
  It reopened at the end of 2014.
- Reception: Die Zeit calls it smaller and more intimate than comparable
  venues. BuzzFeed calls it "out of this world" (weak; do not cite).

Search demand (US / global):
- sisyphos berlin 600/14,000; sisyphos 250/10,000, part of which is the
  Camus and myth collision ("der mythos des sisyphos" 1,000, "camus
  sisyphos", "sisyphos arbeit");
- sisyphos club 80/1,100;
- **dress code cluster ~2,150 global**: sisyphos berlin dresscode 1,000,
  sisyphos dress code 600, sisyphos outfit 350, sisyphos berlin outfit 200.
  Mostly German. It goes into section 5.

The club's own site is a ticket and merch shop with no history. An
"Einlassrichtlinien" (door guidelines) page is linked from its footer.

Page placement: its own sub-block in the "now" section with the owner's
voice, and part of the "weekend" line in section 5.

Still open:
- The club's own door guidelines. The footer link is script-generated and
  was not reachable; ask the owner or open the site by hand.
- The factory's own history: the archived hundekuchenfabrik.de page is
  blocked for fetching, so "former dog-biscuit factory" rests on
  de.wikipedia alone. Needs a second source before print.

Second sources read (2026-09-10):
- **Tagesspiegel, 28 June 2014.** Sisyphos "began in 2009 as a small
  improvised open-air party among friends", and "for two years the party has
  been a club" (a club from about 2012). It describes a sand-covered
  outdoor floor, glitter pistols, juggling, and a "playful-ironic" mood.
  Organiser quoted: Thomas Scheele. It does not mention the factory.
- **FAZE Mag, 5 September 2014.** Closed for lacking permits: it had run on
  single-event licences. After nine months of proceedings, district
  councillor Wilfried Nünthel (CDU, head of urban development) refused
  further temporary licences. The operators answered: "Oh Schreck, oh
  Schreck, der Lurch ist weg. Sisyphos Tore bleiben geschlossen." The
  reopening at the end of 2014 comes from de.wikipedia (Morgenpost refs).
- File "Sisyphos_2011.jpg" is rejected: it shows a stone sculpture in
  Bernau, not the club.

### Optional (2 sources)

- Ritter Butzke: S1 7,400, S4 tv-turm.
- Anomalie: S1 1,000, S4 Time Out.
- SO36: S1 4,500, S4 tv-turm. Not techno; relevant only as a Kreuzberg legend.
- RSO.Berlin: S4 RA. Its S1 figure is a collision.

### Rejected (1 source, not S5)

- about blank: S1 only.
- Else, OXI, ÆDEN, Lokschuppen and Zenner: RA only.
- Revier Südost, YAAM, Fitzroy, Frannz, Alte Kantine, Yorckschlösschen and
  SCHWUZ: one list each.

### The gap that gets us flamed

No competitor list in S4 carries UFO, E-Werk, Bunker or Ostgut. That is our
differentiator. Every S4 list carries Berghain, Tresor, KitKat and Kater, so
leaving any of them out would look ignorant.

## Open before the decision gate

- Retry questoapp and visitberlin (the S4 lists).
- A second source for the Kater Holzig and Kater Blau dates, Wilde Renate's
  status, and HÖR's location.
- Whether Love Parade belongs on the page. None of the sources read this pass
  links it to a club.
- Open-licensed images from Wikimedia Commons: building exteriors only, since
  Berghain bans photography inside.
- The owner's own Berlin experience (§5): not answered yet.

---

# Decision gate (ARTICLE-PRODUCTION-WORKFLOW.md §4), for owner approval

## Intent

- **Primary intent.** People choosing or reading about the best and famous
  clubs in Berlin: which ones matter, why, and which are still open.
- **Excluded intents.**
  - tonight's listings and events (RA and Eventbrite own them);
  - opening hours and prices as a service;
  - sex, gay, jazz and football clubs;
  - Berghain as a navigational brand;
  - German-language queries;
  - anything that teaches production.
- **Recommendation.** Create a new page. There is no preservation inventory,
  because this is a new URL.

## Metadata (proposed)

- **URL:** `/best-clubs-in-berlin`
- **Title (57 chars):** `Best Clubs in Berlin: The Legends and the Ones Still Open`
- **H1:** `The best clubs in Berlin, and the legends behind them`
- **Meta description (~150 chars):** `Berghain, Tresor, KitKat and the
  clubs that came before them: the best clubs in Berlin, how each became
  famous, and the sets to hear before you go.`
- **No year in the title or H1.** The page instead shows a visible "Checked
  <month year>" line and a status column. Revisit every six months.

## Outline

Each section lists the reader job, the SEO job, and the media.

**0. Direct answer** (`infoBanner`).
- Reader job: answer at once. The most famous club in Berlin is Berghain.
  Tresor, opened in 1991, is where Berlin techno started.
- SEO job: best clubs in berlin, most famous club in berlin.
- Media: none.

**1. Before Berghain: how Berlin became a techno city.**
- Reader job: the history, which RA does not give. UFO (1988–1990), Tresor
  in the Wertheim vaults (1991) and its Detroit link through Tresor Records,
  the Bunker (1992–1996), E-Werk (1993–1997).
- SEO job: berlin techno, berlin club culture.
- Media: the Tresor exterior photograph from 2003 (public domain), placed
  after the UFO→Tresor paragraph. One exact Tresor Records track, placed
  later in the section, with two paragraphs between them.

**2. Berghain and Panorama Bar.**
- Reader job: why it is famous. Snax Club (1994), Ostgut (1998–2003), the
  1953 heating plant (from 2004), the 2016 ruling that made it a cultural
  institution for tax, and the photography ban.
- SEO job: what is berghain, famous clubs in berlin, famous berlin club.
- Media: the entrance photograph (CC BY 2.0, Michael Mayer). Exterior only;
  no interior shots are used, out of respect for the ban.

**2a. The door** (H3).
- **The owner's position (first person, 2026-09-10): there is no system.**
  The rules people read into the door exist only in their heads. It is
  something you feel, and if you are turned away there is no reason to go
  looking for.
- This is the section's thesis and the page's point of difference. Every
  competitor on "how to get into berghain" sells a formula: the-berliner.com
  "tried and tested guide", substack, TikTok "ultimate guide", insomniac
  "4 times in 1 day".
- The honest answer to the query "how to get into berghain" is that there
  is no method. The section says so and does not pad it with tips.
- Sourced facts only as context: the door is "notorious for being both
  strict and opaque" (Wikipedia), and the camera stickers. No rejection
  rate, no dress list for Berghain, no "what the bouncers ask".
- SEO job: how to get into berghain, berghain door policy.
- Media: none (text only).

**3. The legends that closed.**
- Reader job: Bar 25 (2003 – September 2010, 48-hour parties) → Kater
  Holzig (insolvency) → Kater Blau (first weekend of August 2014), renamed
  **Kater** in August 2025 (de.wikipedia Kater Blau; RA also says "formerly
  Kater Blau"). Watergate (October 2002 – end of 2024, Oberbaumbrücke,
  closed over rising costs).
- **Wilde Renate is not a closed legend.** It opened in 2007. It announced
  in August 2024 that it would close at the end of 2025, then retracted in
  December 2025: the lease was extended (de.wikipedia Salon zur Wilden
  Renate). Time Out's "closing in 2025" is out of date. Renate moves to the
  "now" table as open. The story of the near-closure is one line in section
  3 about the pressure on Berlin clubs.
- SEO job: famous clubs, "legendary" in natural wording.
- Media: Bar 25 by the Spree (CC BY-SA 2.0, Cornelius Bartke), then text,
  then Watergate from the Spree (CC BY-SA 2.0, "Alexander").

**4. The best clubs in Berlin now** (`articleTable`).
- Columns: club · district · opened · sound · status · checked.
- Rows (required list): Tresor, Berghain / Panorama Bar, KitKatClub, Kater
  Blau, Club der Visionaere, OST. Optional rows: Sisyphos, Ritter Butzke,
  Anomalie.
- SEO job: best techno clubs in berlin, berlin techno clubs, berlin night
  clubs, top clubs in berlin, best berlin clubs, best clubs berlin.
- Media: the table itself. One set embed after the table, with prose in
  between.

**5. How Berlin clubs work: dress code, phones, the weekend.**
- Reader job: the PAA "unspoken rules" question, answered from sources:
  KitKat's dress code (Wikipedia), Berghain's camera stickers, parties that
  run through the weekend.
- SEO job: berlin club dress code, berlin club culture.
- Media: none, or the Tresor vault door (CC BY-SA 4.0, now shown in the
  Humboldt Forum) if section 1 does not use it.

**6. Hear Berlin before you go.**
- Reader job: the thing RA does not have, listening. HÖR is a Berlin stream
  studio, and the catalogue holds 9,708 of its sets, 15% of the whole. Pick
  1–2 sets tied to the clubs above, plus the Selector.
- SEO job: berlin nightlife, in natural wording.
- Media: 1–2 set embeds with editorial CTAs.

**7. FAQ** (only real PAA questions, per §5 of the workflow):
- What is the most famous club in Berlin?
- Is Berghain hard to get into?
- What should I wear to a club in Berlin?
- Is Berlin good for clubbing?

**8. End sequence.** Author card → Sources → Bandcamp support (full bleed)
→ Read Next.

## Media and listening matrix (draft)

| Section | Supports | Asset | Licence | Verified? |
|---|---|---|---|---|
| 1 | original Tresor, Leipziger Str. | File:Tresor - Berlin.jpg (2003, 1469×1102) | public domain (MichaelBrossmann) | licence checked |
| 1 or 5 | Tresor as heritage | File:Humboldt Forum Tresortür.jpg (2023) | CC BY-SA 4.0 (Fridolin freudenfett) | licence checked |
| 2 | Berghain building and queue | File:Berghain Berlin Entrance.jpg (2017, 5472×3648) | CC BY 2.0 (Michael Mayer) | licence checked |
| 3 | Bar 25 by the Spree | File:Bar 25 Berlin Waterside.jpg (2009) | CC BY-SA 2.0 (Cornelius Bartke) | licence checked |
| 3 | Watergate on the river | File:Watergate Nightclub Berlin Spree View.jpg (2013) | CC BY-SA 2.0 (Alexander) | licence checked |
| 4 (Sisyphos) | the former factory site | File:Sisyphos Nightclub Berlin.jpg (22 Aug 2022, 5184×3456; the de.wikipedia lead image) | CC BY-SA 4.0 (Rio65trio) | licence checked |
| 4 (Sisyphos), alternative | the entrance gate across the tram tracks | File:Sisyphos Nightclub Berlin Entrance Gate.jpg (2018, 1791×1188) | CC BY 2.0 (Marcus Grbac) | licence checked |
| 1 | the Detroit link | one exact Tresor Records track | embed | to select and verify |
| 4, 6 | the scene now | HÖR sets from the catalogue (top by views: Ellen Allien 2020 `GG2IQguY-J0`, Brutalismus 3000 2020 `XC68z6vHwpQ`) | embed | to verify the link to the page's clubs |

None of these images is used in any other guide, and nothing is borrowed.

## Internal links

- The Selector, from section 6.
- `best-boiler-room-sets`: clubs and filmed sets.
- `uk-electronic-music-evolution`: the Detroit/UK rave parallel, only if
  section 1 draws it.
- `how-to-find-new-music`, in Read Next.

## Material uncertainties to fact-check before drafting

- ~~Dates for Kater Holzig and Kater Blau; Wilde Renate's status in 2026.~~
  Closed 2026-09-10 (see section 3). Still open: the opening date of Kater
  Holzig, which the article does not give.
- ~~HÖR's location.~~ Confirmed 2026-09-10 by the imprint
  (https://hoer.live/imprint/): HOER DOT LIVE GmbH, Karl-Marx-Allee 122,
  10243 Berlin. Usable: "HÖR, a Berlin streaming studio; 9,708 of the
  catalogue's 62,877 sets".
- Any claim that E-Werk or Tresor links to Love Parade. The sources read so
  far make none.
- The Berghain door: every factual line needs a source. The owner's view
  is labelled as first-person experience, not presented as a fact.
- The current status of every row in the "now" table.
- The questoapp and visitberlin lists are still unread (fetches failed
  three times).
- The owner's Berlin experience is confirmed. Section 2a carries it. Ask
  the owner whether the table and the "legends" section get first-person
  notes too.
