# Best winter music festivals: research package

Status: pre-writing, stage 6 verdict not run. Evidence trail also logged in
`TOPIC-DOSSIERS.md`. Tool switch (2026-09-22, `KEYWORD-METHOD.md`): volumes
are Google Ads Keyword Planner (owner's account, US, All languages, Google,
last 12 months); PAA/SERP are live browser search, not Ahrefs.

No Search Console preservation inventory exists: this is a new page.

## The scoping problem this file exists to solve

The bare phrase **"best winter festivals"** is a dead end for this site,
confirmed independently by Ahrefs and by a live Google search on the same
day: the entire top-10 organic result set is snow/ice tourism (Quebec Winter
Carnival, Ouray Ice Festival, Zehnder's Snowfest, state-tourism-board pages)
with zero music results. Google Ads Keyword Planner shows it at only 10–100
searches/month (US), the smallest bucket of everything checked this pass.

**"Winter music festivals"** is a different query with real electronic/dance
content in its live SERP: Tomorrowland Winter, Igloofest (Montreal), Polaris
Festival (Verbier), Iceland Airwaves, MIRA Digital Arts Festival (Barcelona),
Lights All Night (Texas), Contact Winter Music Festival (Vancouver), and a
dedicated edm.com article "The Best Winter EDM Festivals." Google Ads
Keyword Planner puts it at 100–1K searches/month (US), a full bucket above
the bare phrase. This is the same pattern already applied to
`best-electronic-music-festivals-europe` (genre-scoped, not season-only):
the page must be scoped to electronic/dance winter festivals, not generic
"winter festivals."

**Recommendation: title and scope the page around "winter music festivals" /
"best winter music festivals," electronic/dance-focused, not the bare
"winter festivals" phrase.** This is a direction for the decision gate, not
a final call.

## Volumes (Google Ads Keyword Planner, US, 2026-09-22)

Account has no ad spend, so Google returns buckets, not points.

| Keyword | Avg. monthly searches |
|---|---|
| best winter festivals | 10 – 100 |
| winter music festivals | 100 – 1K |

"Best winter music festivals" and "winter edm festivals" were queued for the
same Keyword Planner pass but the browser session hit an ad-blocker dialog
before the save completed; not yet confirmed. Re-run before the decision
gate is finalised.

For comparison, Ahrefs (exact match, clickstream, same day) had best winter
festivals at 20 US / 30 global (parent topic "winter activities", a
collision) and winter music festivals at 200 US / 300 global.

## Live Google SERP and PAA (US/en, 2026-09-22)

**best winter festivals** (bare phrase, for the record of why it's rejected):
PAA are entirely non-music (What are the best winter festivals? / best
winter festivals in Michigan? / top 10 festivals? / winter festivals in
Minnesota?). Organic results: Jaime Says, Colorado Tourism, GetYourGuide "10
Magical Winter Celebrations," Pure Michigan, Wisconsin Independent,
Baltimore Magazine ice festivals, Explore Minnesota. Confirms the Ahrefs
finding independently: no music content anywhere in the top 10.

**best winter music festivals electronic dance** (a scoping check, not the
final target phrase): live results include a Reddit r/EDM thread
recommending Amsterdam Dance Event and Iceland Airwaves for "fall/winter,"
edm.com's dedicated "Best Winter EDM Festivals" article, Music Festival
Wizard's electronic festival calendar, Ski.com on ski-resort winter music
festivals (naming Tomorrowland specifically), DJ Mag's Top 100 Festivals
(winner: Tomorrowland), and VickyFlipFlopTravels' "16 Best Winter Music
Festivals in the World" listing Polaris (Verbier), MIRA Digital Arts
(Barcelona), Iceland Airwaves, Popload (São Paulo), Sydney Festival and
Igloofest (Montreal). "People also search for" on this query surfaced
Tomorrowland Winter, Lost Lands and EDC Orlando by name.

## Keyword-ownership conflict already on record

**"tomorrowland winter" is already claimed by two existing pages**:
`tomorrowland-festival.html` and `fr/festival-tomorrowland.html` (both in
`TAKEN-KEYWORDS.md`). This new page can and should *name* Tomorrowland
Winter as one entry in a list of winter festivals, the same way a "best
electronic festivals in Europe" hub names Tomorrowland without owning the
keyword "tomorrowland," but it must not target the phrase "tomorrowland
winter" itself as an SEO anchor, heading or meta description term. Flag this
explicitly in the eventual `keywords/<page>.json` rejected list with that
reason, not silently.

## Candidate festival list (not yet cross-referenced against 3+ sources each)

From the live searches this pass: Tomorrowland Winter (Alpe d'Huez/French
Alps), Igloofest (Montreal, outdoor sub-zero electronic), Polaris Festival
(Verbier, Swiss Alps, ski-in electronic), Iceland Airwaves (Reykjavik,
indie/electronic crossover, not exclusively dance), MIRA Digital Arts
Festival (Barcelona, experimental/electronic), Lights All Night (Texas,
EDM), Contact Winter Music Festival (Vancouver, Canada's stated largest
winter EDM festival per edm.com), Snowbombing (mentioned in the original web
search pass on 2026-09-22 but not re-verified live this pass), Decadance
(Denver/Phoenix, New Year's EDM).

This list has not been run through a FIGURES.md-style cross-reference
(search demand, also-talked-about equivalent, PAA, consensus lists, a
history pass, the catalogue). It is a first pass, not a required list.

## Open before a decision gate can be finalised

- "Best winter music festivals" and "winter edm festivals" volumes not yet
  captured in Google Ads Keyword Planner (session interruption).
- No cross-reference pass done on the candidate festival list; several
  names are single-sourced.
- Iceland Airwaves' fit is unclear: several "winter music festival" lists
  include it, but it is not primarily an electronic/dance festival, and the
  page needs to decide whether it belongs or dilutes the genre focus.
- No history/founding-date research done on any of the listed festivals yet.
- No images sourced or licence-checked.
- Whether a strict scope ("electronic/dance only") or a looser "festivals
  worth going to for dance and adjacent music in winter" framing better
  matches both the live SERP and the site's own audience has not been put
  to the owner.

## Draft decision gate (ARTICLE-PRODUCTION-WORKFLOW.md §4) — for discussion, not final

- **Primary intent.** A reader deciding which winter music festivals
  (electronic/dance-focused) are worth attending or knowing about.
- **Excluded intents.** Generic winter tourism/ice-carnival demand (the bare
  "winter festivals" phrase); the keyword "tomorrowland winter" itself
  (already owned by two existing pages, though the festival can be named);
  ski-resort/travel-service intent as the primary angle, even though several
  candidate festivals are ski-adjacent.
- **Working title direction**, not final: "Best Winter Music Festivals for
  Electronic Fans" or similar — needs to signal the genre scope in the title
  itself, the same lesson already applied to the Europe hub page.
- **Outline direction**, pending the open items above: a short direct-answer
  block naming Tomorrowland Winter and Igloofest as the two most recognised
  → a list/table of festivals with location, month, and what makes each
  distinct (ski-in electronic vs urban outdoor vs digital-arts crossover) →
  a short note on why winter dance festivals cluster around ski resorts and
  a handful of cold-climate cities → FAQ from real PAA once a final head
  term is settled.
