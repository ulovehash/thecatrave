# Best electronic albums: editorial review

Page: best-electronic-albums.html. Date: 6 October 2026. Reviewer is the same agent that gathered the evidence, so no verdict is given; this lists what was checked and with what.

## Claim ledger

| Claim | Evidence |
|---|---|
| Three lists have three different number ones | Headphonesty (Aug 2026) 1 Oxygene; Slant 25/20 (30 Jun 2002) 1 Trans-Europe Express; Resident Advisor 2000-25 (ra.co/features/4482) 1 Untrue. All three read in the Browser pane. |
| Seven albums are on two lists | Cross-count of the three lists: MHRTC, Untrue, SAW 85-92, Blue Lines, dubnobass, Adventures Beyond the Ultraworld, Leftism. No album on all three. |
| All seven in the top fifteen of at least one list | Untrue RA 1; Blue Lines Slant 2; SAW Slant 3; Orb Slant 4; MHRTC Headphonesty 6; Leftism Headphonesty 13; dubnobass Headphonesty 14. |
| Years and labels | MusicBrainz release data, 6 October 2026. Gaps listed below. |
| Album placings in the table | The three lists, as read. |
| Photo credits | Wikimedia Commons description pages, licence and author recorded in media/best-electronic-albums.json. |
| Embeds | Spotify oEmbed status 200 and title matched, per album ID, 6 October 2026. |

## Passes, each with its evidence

- Keywords on page: audit-keywords passed (1186 terms across 199 pages) against keywords/best-electronic-albums.json.
- Required records on page and playable: audit-canon, via media/best-electronic-albums.json, 16 embed IDs matched in iframes.
- No Wikipedia in the body: grep of built page text, 0 hits.
- No full, complete, whole, uninterrupted, an hour, in full: grep, 0 hits.
- No jungle, drum and bass or breaks angle: grep, 1 hit, in the site-wide author card ("Breakbeat, bass and rave DJ"), not in the article. Bandcamp card uses 60 hours of mistakes and Berlin Race 1909, not Protect Ya Breaks.
- "not .* but": 0 hits. "the point": 0 hits. "matters": 1 hit in the first build ("where it matters"), fixed in the draft; rebuilt page re-grepped below.
- Em dashes: 0 in the built page.
- Own tracks: No Genre No Problem (glitch, IDM, ambient per its description elsewhere on the site) and late summer cloud dance via ownTrackListening, each introduced as "mine" and "not on any of the three lists". Bandcamp card via bandcampSupport fullBleed. audit-own-tracks passed.
- Figures sit apart from embeds: audit-site-components mediaAdjacencyRhythm passed after the defect fix.

## Humanizer pass, before and after

1. "This is a count of other people's rankings. It is not a verdict." became "This page counts other people's rankings and gives no ranking of its own." (negation closer, section 1/2)
2. "It sits at the end of the run because the page does." became "It closes the listening." (filler)
3. "...and nothing added from memory. A longer list would need a longer count." became "...and nothing added from memory." (one-line closer)

Also "where it matters" became "and name the other" (grep hit, section 3).

## Defect

defects.json entry best-electronic-albums-first-build-failures: description 191 chars against a 70-165 limit, figure and embed adjacent in two sections, FAQ of four items. Fixed in the draft and builder.

## Unverified

- Underworld dubnobasswithmyheadman label: the 1993 MusicBrainz entry has none; Junior Boy's Own is from the 1994 UK pressing, and the page says so.
- Violator UK label: Mute taken from French and Italian entries.
- Trans-Europe Express label: not found, not given.
- Exact head "best electronic albums": volume unmeasured, not claimed.
- Rolling Stone and Rate Your Music lists not read.
- Embeds for The Man-Machine, Music for Airports, Blue Lines, dubnobasswithmyheadman and Orbital 2 are remaster or expanded editions, labelled as such.
- npm run check:layout could not run: the Playwright browser is not installed in this environment, so all layout and a11y tests fail on every page, not only this one.
- de and fr translations: later pass.

## Independent review (6 Oct 2026)

Reviewer did not write the draft. Evidence per pass.

**Facts.** Resident Advisor 2000-25 and Slant 25/20 re-read in the browser: placings of the seven overlap albums match. Headphonesty is behind a Cloudflare challenge (not bypassed); ranks 1-8, 10, 13-16, 22, 28 corroborated from search snippets, ranks 9-30 otherwise not re-read. Overlap holds: seven albums on two lists, none on all three; number ones Oxygene (Headphonesty), Trans-Europe Express (Slant), Untrue (RA). Resolved against MusicBrainz: dubnobasswithmyheadman is 24 Jan 1994, Junior Boy's Own (Slant dates it 1993; page now says so); Violator is Mute internationally, Sire/Reprise US; Trans-Europe Express is Capitol 1977.

**Corrections made.** (1) Kraftwerk photo was credited public domain; it is CC BY-SA 3.0, Andreas Hagstrom, caption and media JSON fixed. (2) dubno dated 1993 with a "1994 pressing" hedge, now 1994 with a Slant note. (3) The stated selection rule did not produce the sixteen; copy now says thirteen are on two lists or by an artist on two, three are top-ten placings kept for range. (4) Title shortened to "Best Electronic Albums of All Time: Three Rankings Compared" (59 chars). Intro now answers first: no single best album, three different number ones. All logged in defects.json first.

**SEO.** Measured phrases "best electronic album ever" and "best electronic albums of all time" kept word for word in title, H1/H2 and FAQ; "best electronic albums" is unmeasured and not claimed. Meta within 70-165 chars, five FAQ items, captions carry relevance plus licence tail.

**Own tracks.** ownTrackListening plus bandcampSupport present, no drum and bass or breaks angle. Audit-own-tracks passes.

**Visual.** Served at 1440 (scrollWidth equals viewport), 768 and 390: no page overflow, 20 iframes all lazy, no broken eager images; the table scrolls inside its own wrapper on mobile.

**Checks.** build, check:html, audit-all (23 audits), check:links all pass. check:layout not run (no Playwright browser).

**Open.** Oxygene and Trans-Europe Express have no player (no confirmed Spotify album ID); Headphonesty 9-30 not directly re-read; Music for Airports year 1978 (Slant/MusicBrainz) vs 1979 (Wikipedia); Spotify oEmbed check is the original author's, not repeated; de/fr translations later.
