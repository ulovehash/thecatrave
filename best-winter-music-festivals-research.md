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

## 3 October 2026: global Keyword Planner pass and SERP read

Tool: Google Ads Keyword Planner (Claude in Chrome), all locations, all languages, Sep 2025 to Aug 2026. Ranges only. SERPs read live on google.com (gl=us).

| Term | Monthly searches (global) |
|---|---|
| igloofest | 10K to 100K |
| tomorrowland winter | 10K to 100K (taken, see TAKEN-KEYWORDS.md) |
| winter festivals | 10K to 100K (snow and ice tourism, rejected) |
| snowbombing | 1K to 10K |
| polaris festival | 1K to 10K |
| iceland airwaves | 1K to 10K |
| lights all night | 1K to 10K |
| winter music festivals | 100 to 1K |
| ski music festivals | 100 to 1K |
| contact winter music festival | 100 to 1K |
| winter festivals europe | 100 to 1K |
| winter rave | 100 to 1K |
| snowbombing 2027 | 100 to 1K |
| best winter music festivals, winter edm festivals, best winter festivals, ski resort music festivals, music festivals in the snow, rave in the snow | 10 to 100 each |
| ski festival music, electronic music festivals winter, winter festivals 2027, winter music festivals 2027 | no data |

SERP "winter music festivals": Music Festival Wizard calendar, Reddit, Tomorrowland Winter, Couchsurfing and Ski.com listicles, Winter Jazzfest. No PAA block. Mixed intent, no electronic-specific winner.
SERP "best winter electronic music festivals": Reddit, edm.com (2019), Tomorrowland Winter, Ski.com, Exron Music (US, Oct 2025). No dominant current guide.
SERP "snowbombing 2027": official site, Music Festival Wizard, Skiddle, JamBase. Official dates 5 to 10 April 2027, Mayrhofen. Tomorrowland Winter 2027 is 20 to 27 March per its own site.

Finding: the generic "winter music festivals" head is small (100 to 1K). Demand sits on named festivals, not on the category.

## 3 October 2026, owner brief: include under-the-radar festivals the community loves

Owner: do not list only festivals with volume or on page one of Google (Garbicz is the model: tiny search volume, loved by the scene). Two guides: (1) all winter festivals, Tomorrowland Winter included as a section (named, not targeted); (2) standalone Snowbombing 2027.
Garbicz itself is summer (29 Jul to 2 Aug 2027 per its site), so it does not belong in a winter guide.

Sources used this pass (all single-source until cross-checked): Skiddle "best winter music festivals" (16 Sep 2026), Music Festival Wizard winter and electronic lists, Techno Airlines monthly listings (Dec 2026 to Mar 2027, first page of each month only), Google snippets. Reddit is blocked in Chrome; community-love evidence so far is only from snippets.

Leads, dates as listed by the source (NOT yet confirmed on official sites):
- Hibernation, Pas de la Casa, Andorra, 19 to 21 Mar 2027 (10th edition, house and techno; festivalhibernation.com, MFW, Shotgun agree)
- Snow Machine, Hakuba, Japan, 2 to 7 Mar 2027 (Techno Airlines)
- Elevate Festival, Graz, Austria, 4 to 7 Mar 2027 (Techno Airlines)
- Caprices, Gstaad, Switzerland, 12 to 21 Mar 2027 (Techno Airlines)
- Shapes Festival, Leysin, Switzerland, 15 to 21 Mar 2027 (MFW)
- Enter the Snow, Risoul, France, 6 to 13 Mar 2027 (Techno Airlines)
- Nameless Winter, Barzio, Italy, 13 to 14 Feb 2027 (Techno Airlines)
- Mountain Beats, St. Gallenkirch, Austria, 15 to 16 Jan 2027 (Techno Airlines)
- Garosnow, Les Angles, France, 8 to 9 Jan 2027 (Techno Airlines)
- Abode on the Snow, Bulgaria (MFW, date not read)
- Rise, Les 2 Alpes, 5 to 12 Dec 2026 (Skiddle); Snowboxx, Avoriaz, March 2027 (Skiddle, weekday/date mismatch in the source)
- Electric Mountain, Austria, 12 to 17 Apr 2027 (MFW)
- DALMA, Malta, 4 to 5 Dec 2026 (Skiddle, Techno Airlines)
- Les Trans Musicales, Rennes, 2 to 6 Dec 2026 (Techno Airlines)
- Electronic Music Days, Athens, 17 to 27 Feb 2027 (Techno Airlines)
- Mostra, Barcelona, 11 to 14 Mar 2027 (Techno Airlines; RA Top Ten mention)
- Igloofest, Montreal, 14 Jan to 6 Feb 2027 (MFW, Techno Airlines)
- Mira, Barcelona, 6 to 7 Nov 2026 (Skiddle)
- C2C, Turin, 29 Oct to 1 Nov 2026 (Skiddle)
- Tomorrowland Winter, Alpe d'Huez, 20 to 27 Mar 2027 (official site, Skiddle, EDM House Network)
- Snowbombing, Mayrhofen, 5 to 10 Apr 2027 (official site, Skiddle, MFW, JamBase)
Not yet searched: CTM (Berlin), other Nordic and Eastern European winter events, Canada and US small ones beyond Igloofest and Lights All Night.
Skiddle's list has errors (Iceland Airwaves dated Nov 2025, Wildlands labelled 2026): do not copy from it.

## 3 October 2026: date verification (Google snippets of official sites plus 2 to 3 listings each)

Confirmed on the festival's own site or its tourist board (snippet read, 3 Oct 2026):
- Snow Machine Hakuba, 2 to 7 Mar 2027 (hakuba.snow-machine.com, MFW, Megatix). Main arena 4 to 6 Mar.
- Elevate, Graz, 4 to 7 Mar 2027 (elevate.at, Steiermark.com, MFW). Mixed programme: music, art, political discourse.
- Shapes Leysin, 15 to 21 Mar 2027 (shapesfestival.ch, Switzerland Tourism, MFW). House, disco, techno.
- Nameless Winter, Barzio, 13 to 14 Feb 2027 (namelessfestival.it, Instagram, Italy Travelo).
- Abode on the Snow, 13 to 20 Mar 2027 (abodesnow.aboderecords.com, MFW, StageOS). Location conflict: StageOS says Borovets, Abode's own posts say Bansko. Resolve before printing a resort.
- Igloofest, Montreal, 14 Jan to 6 Feb 2027 (igloofest.ca, Bonjour Quebec, MFW). Also lists Edmonton 4 to 6 Mar and other dates.
- Hibernation, Pas de la Casa, 19 to 21 Mar 2027, 10th edition (Instagram, Shotgun, MFW). Its own site snippet still shows the old 14 to 16 Mar text, so the official site is stale: treat as confirmed by promoter Instagram only.
- Caprices, Gstaad, 12 to 14 and 19 to 21 Mar 2027 (capricesfestival.com, gstaad.ch, MySwitzerland).
- Mountain Beats, St. Gallenkirch, pre-party Fri 15 Jan, main day Sat 16 Jan 2027, Valisera mountain station above 2,100 m (montafon.at, Silvretta Montafon, europa.tips).
- Snowbombing, Mayrhofen, 5 to 10 Apr 2027, 27th edition, from 399 GBP (snowbombing.com, MFW, JamBase, europa.tips). Headliners listed on JamBase: Bicep, Fatboy Slim.

Not confirmed or cut:
- Enter the Snow: snippets show only MFW (6 to 13 Mar, filed under Italy while the resort is Risoul). Unconfirmed, hold.
- Electronic Music Days Athens: nothing found. Cut.
- Garosnow, Electric Mountain, Mostra, DALMA, Les Trans, Snowboxx: not re-checked. Hold until needed.

## 3 October 2026: Keyword Planner pass (Chrome, All locations, English and all languages, Sep 2025 to Aug 2026) and proof check

Tool: Google Ads Keyword Planner, plan "Plan from Oct 3, 2026", bucketed ranges only. Of 24 terms entered, only 7 returned a row; the rest returned no data or were merged into close variants.

| Term | Global monthly searches |
|---|---|
| hibernation festival | 1K to 10K |
| caprices festival | 1K to 10K |
| snow machine festival | 1K to 10K |
| snow machine japan | 1K to 10K |
| elevate festival | 1K to 10K |
| snowbombing | 1K to 10K |
| nameless winter | 1K to 10K |

No row: shapes festival, abode on the snow, mountain beats festival, snowbombing tickets / lineup / mayrhofen / dates. "snowbombing 2027" was 100 to 1K in the earlier pass. Variants are not separable at this bucket size.

Community proof (Google snippets, 3 Oct 2026):
- Elevate: RA review of the 2018 edition, RA listings 2025 and 2026, The Quietus preview (2019), Inverted Audio review (2022). Strong.
- Shapes: RA Top Ten Festivals features for March 2024 and 2025 (described as a festival for snow lovers). Strong.
- Caprices: RA news item 9 Dec 2025 on the new Gstaad location and first names, RA listings and promoter page. Medium.
- Nameless Winter: DJ Mag news (2017) and RA listings. Mainstream dance, not underground.
- Snow Machine: Mixmag review (2020) and RA listing, but Reddit r/festivals threads call the organisation disappointing ("avoid", 2026). Mixed.
- Hibernation: RA event listings only. No editorial found. Weak.
- Abode on the Snow: RA listings only, earlier editions in Val Thorens; 2027 resort conflict (Bansko or Borovets). Weak.
- Mountain Beats: nothing found. Cut.

## 4 October 2026: wider search for under-the-radar picks (Google snippets, RA Top Ten Festivals archive read directly)

New passes:
- CTM Festival, Berlin, 22 to 31 Jan 2027, 28th edition (ctm-festival.de, RTS.FM, little BIG hotels, RA news on first names). Proof: RA event review (2013 edition), RA Top Ten January 2024, Pitchfork feature mention. Strong. Experimental and club music, multi-venue, Berghain among venues in earlier editions.
- Rise Festival, Les 2 Alpes, 5 to 12 Dec 2026 (rise-festival.com says 99% sold out; Les 2 Alpes tourist office, MFW). Proof: RA Top Ten Festivals, Dec 2025 edition (UK-flavoured dance music, "Europe's largest independent ski festival" per its own site). Strong. Date falls in Dec 2026, so it opens the 2026/27 winter.
- Astropolis l'Hiver, Brest, February each year; 2027 dates "awaiting confirmation" for the 14th edition (touslesfestivals.com, Agenda Culturel). Proof: RA Top Ten February 2024 listing. Include only as unconfirmed, or cut.
- Shapes: RA Top Ten March 2024 entry read in full (six venues, Kuklos high altitude venue, Soichi Terada live, Kode9). Confirms the earlier proof.
- Elevate: RA Top Ten February 2024 entry (Graz, 28 Feb to 3 Mar 2024) confirms recurrence.

Checked and cut:
- Dark Music Days, Reykjavik, 28 to 31 Jan 2027: contemporary and classical programme, not dance. Cut.
- Nordlysfestivalen, Tromso, 11 to 20 Feb 2027: classical and northern lights programme. Cut.
- Sonic Acts, Amsterdam: biennial, 2027 dates not found. Cut.
- Contact Winter, Vancouver, 26 to 27 Dec 2026, Pacific Coliseum: mainstream EDM, no underground proof. Listable in the main group.
- Lights All Night, Dallas, 30 to 31 Dec 2026: mainstream EDM, belongs to the NYE guide. Skip.
- Nachtiville (Nachtdigital winter edition): last found 2025; only NACHTI (30 Jul to 1 Aug 2027) is current. Cut.
- Closer Music (Paris): the Feb snippet matches the 2026 edition (20 Feb 2026 was a Friday). No 2027 date. Cut.
- Tranuary (Manchester), UHT2 Club Festival (Zurich), Simple Things (Bristol, Nov): no confirmed winter 2027 dates or not snow-season. Cut.
- Sneeuwbal Winter Festival (Utrecht): dates predicted by MFW, not posted. Cut.
- Insomnia (Tromso): 27 to 29 Aug 2027. Summer. Cut.
- Reddit: still blocked; not used as proof.

Quiet-pick shortlist now: CTM, Elevate, Shapes, Caprices, Rise, plus Astropolis l'Hiver if the owner accepts an unconfirmed date.
