# EDC Las Vegas: research package and structure

Status: drafted and built locally (`edc-draft.md`, `build-edc-article.mjs`,
`edc-las-vegas.html`); not in `pages.mjs` or the catalogue yet. Evidence dated
2026-09-13, US unless stated. `TOPIC-RESEARCH.md` stages 1–5 done; stage 6
(validation) not run. The owner's festivals series (`festivals-series.md`) is
the decision to proceed.

## Preservation inventory

A new page, so no preservation inventory exists.

## Stage 1: web search first

Searches: "what is EDC Las Vegas", "EDC Las Vegas guide", "Electric Daisy
Carnival history". Article-type results: Visit Las Vegas "The Ultimate Guide to
EDC Las Vegas", Las Vegas Sun "Under the electric sky: The history of EDC Las
Vegas" (2025), iHeartRaves "The Ultimate Guide to EDC", Medium first-timer
guides, vibewithade, plus Wikipedia and Insomniac's page. The rest is the
official site, ticketing and social.

## Stage 2: what the articles earn (organic keywords, exact URL, US)

- **Wikipedia, Electric Daisy Carnival**: edc 80,000 (pos 14, 0 visits), edc
  las vegas 11,000 (pos 4, 769 visits), edc meaning 5,000 (1), what is edc
  3,100 (1, 65 visits: the collision shows in the CTR), edc parade 2,300, edc
  vegas 2,300 (11), edc mexico 2,200 (19), electric daisy carnival 1,700 (1),
  what does edc stand for 1,600 (4), edc festival 700 (4), edc rave 600 (1),
  edclv 600 (4), edc stages 400 (12), what does edc stand for festival 400 (1,
  124 visits), what is edc festival 450 (1).
- **Visit Las Vegas guide**: edc las vegas 11,000 (4, 769 visits), when is edc
  las vegas 300 (8), what is edc las vegas 250 (1), what is the edc in las vegas
  150 (1), what is electric daisy carnival 100 (1), how long does edc last 80.
- **Las Vegas Sun history**: when did edc start 100 (9), when was the first edc
  100 (8), when was the first edc las vegas 80, how long has edc been around 60,
  edc history 30, when did edc move to vegas 30.
- **iHeartRaves guide**: edc tips 150 (10). Nothing else.

## Stage 3: matching terms, classified

`edc las vegas` (terms, ≥150 US, 47 rows, head 20,000 excluded):

| Class | US volume | Examples |
|---|---:|---|
| Dated or transactional | ~17,850 | edc las vegas 2026 4,100; free vip passes 1,100 and four more giveaway forms (~4,500 together); parade 1,100; 2026 dates 1,000; 2026 lineup 700; tickets 450 |
| Listener, evergreen | ~3,700 | what is edc las vegas 1,100 (TP 76,000); las vegas edc 450; when is 350; where is 300; location 250; what is the edc in las vegas 200 |
| Shopping | ~600 | outfits 450, hydration pack 150 |
| Production | 0 | — |

`electric daisy carnival` (terms, ≥50): head 2,400; orlando 450 (TP 21,000);
what is 200 and 100; las vegas 200 (TP 75,000); 2026 250 (dated); tickets 200.

Questions on `edc` (≥60, 40 rows): **collision ~12,150** (what is edc 3,700,
what does edc stand for 1,700, what does edc mean 1,000, whats edc 1,000, edc
knife, flashlight, gun, bag, pregnancy forms). Festival questions: what is edc
las vegas 1,100, when is edc 2026 900 (dated), what is edc orlando 700, what is
edc festival 600, what does edc stand for festival 500, when is edc 500, what
time does edc start 400, where is edc orlando 400, how many people attend edc
200.

## Stage 4: SERPs and People Also Ask

**"edc las vegas"**: official site (1,175 RD, 73,666 visits), frontgate tickets
(3), AI overview, Facebook (5), Instagram (6), Reddit discussions (7), edc.com
(8), Wikipedia (9, 1,748 RD), Visit Las Vegas (10, DR 76). Two editorial slots,
both strong.

**"what is edc las vegas"** (TP 76,000): official ×3 (2, 6), Wikipedia (4),
video carousel, Facebook (7), Visit Las Vegas (8, 1,281 RD), Instagram (9),
**vibewithade (10, DR 30, 47 RD, 57 visits)**. The weakest editorial page.

**"how many people attend edc"**: Wikipedia (4), Facebook post (5, 1 RD),
Reddit (6), Facebook (7), **fox35orlando (8, 2 RD)**, Insomniac (9). No article
answers it.

**"what does edc stand for festival"**: Wikipedia (2), Insomniac (4), Instagram,
Reddit, Facebook, official (8), **Visit Las Vegas "5 Ways to Plan" (9, 1 RD)**,
**danielmiessler.com (10, 0 RD)**.

**People Also Ask, verbatim:**

- What is the EDC event in Las Vegas?
- Is EDC a rave or a festival? / Is EDC a rave or festival? / Is EDC a rave?
- Is EDC 2026 sold out?
- What are the dates for EDC Vegas 2026?
- What happens at EDC Las Vegas?
- How much do EDC Vegas tickets cost?
- Is there a dress code at EDC?
- Is EDC the biggest festival in the US?
- How many people attend EDC per day?
- Is EDC bigger than Coachella?
- How many people are at EDC 2026?
- Why is it called EDC?
- Is EDC the biggest EDM festival?
- What is the average age of EDC attendees?

## Stage 5: competitor mining

Wikipedia holds position 1 for most of the informational cluster but earns
little from it (what is edc: 65 visits at 3,100). Visit Las Vegas earns the
head and the "what is" forms. The Las Vegas Sun earns the history questions
(when did edc start, when was the first edc). New to this research from stage
5: **edc vegas 2,300**, **edc mexico 2,200**, **edclv 600**, **edc stages 400**,
the history questions.

## Catalogue

`selector-data.json` holds Mixmag's "The Lab" sets filmed at EDC Las Vegas in
2016 (at least six titles, Rusko's jungle set among them). Not a criterion
(`TOPIC-RESEARCH.md`); named in the music section, not embedded (Mixmag's
channel).

## Structure as built

- **URL** `/edc-las-vegas`. The head carries TP 75,000 and is the parent topic
  of every Las Vegas informational form (what is, when is, the dates forms).
  `/what-is-edc` is out: the bare "what is edc" is everyday carry. The weak
  editorial slots are on the question forms (vibewithade 47 RD, fox35 2 RD,
  danielmiessler 0 RD), which the page answers under the head URL.
- **Title** EDC Las Vegas: What It Is, How Big, and the Music (49 characters)
- **H1** EDC Las Vegas
- **Meta** Electric Daisy Carnival at the Las Vegas Motor Speedway: what EDC is,
  how many people go, how it left Los Angeles, and what plays beyond
  kineticFIELD. (150 characters)
- One collision line in the intro: not everyday carry.

1. Answer block ("What is EDC Las Vegas"): what, where, when, how many, who.
2. Where EDC Las Vegas happens (where is, location, when is), H3s EDC Orlando,
   EDC Mexico, EDC in the UK and elsewhere.
3. How big EDC Las Vegas is: attendance table 1991–2026; per night; 2027 split.
4. A short history, and who owns EDC: Hauptfuhr 1991, Insomniac 1997, the
   California years, 2010 and the move, Live Nation 2013, weather.
5. Why EDC got so famous: the carnival, kineticFIELD, the hours.
6. What the music actually is: stages by sound; drum and bass from the Bassrush
   Arena (2001) to bassPOD (Camo & Krooked, 2014) to Sub Focus on kineticFIELD
   (2026); The Prodigy's first EDC and Underworld on cosmicMEADOW (2026).
7. Hearing EDC from home: Essential listening, Sub Focus and Underworld 2026.
8. FAQ (six, from PAA): rave or festival, per day, ticket cost (the one dated
   answer), when, why called EDC, biggest in the US.

## Excluded intents

- Lineups, set times, dated editions, next year's dates: official site.
- Tickets, giveaways: one FAQ answer.
- Outfits, hydration packs, what to bring: shopping and survival guides.
- Everyday carry: one line.
- The Strip parade: dated.

## Not verified

- The Las Vegas Sun history (HTTP 402), Insomniac's own page and the official
  stages page (HTTP 403) could not be read; their facts come from Wikipedia,
  DJ Mag, Beatportal and Discotech instead.
- 2026 attendance is "more than 500,000" (Beatportal, My Modern Met); an exact
  2026 figure (525,000 in some reports) was not read in a source that could be
  fetched.
- The 17-stage count for 2026 (DJ Mag) and Wikipedia's nine stages disagree;
  both are given, attributed.
- No GB SERP checked: demand is 80% US (20,000 of 25,000).
- Stage 6 validation not run.
