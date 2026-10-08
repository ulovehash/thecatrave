# House music classics: editorial review

Page: /house-music-classics (house-music-classics.html). Drafted and reviewed 6 October 2026. English only; DE and FR translations come later.

## Review 1: claims and sources

Claim ledger. Every factual claim in an entry was taken from the source named.

| Claim group | Source opened | Status |
|---|---|---|
| Which records are classics (Good Life, French Kiss, Passion, Show Me Love, Music Sounds Better With You) | NME best house songs list, opened in full | Sourced |
| Where Love Lives, You Don't Know Me, Finally; the quoted descriptions | 6AM Group top 10 classic house songs, opened in full | Sourced |
| Missing (Todd Terry Remix) | Billboard list: search listing only; the page itself returned 307 to TollBit then 402, so it was NOT read | Partly sourced, flagged on the page |
| Gypsy Woman | Own editorial addition, said so in the method | Declared |
| Years, labels, chart positions, credits, sample sources | Each record's Wikipedia entry | Single source; unverified elsewhere |
| Embeds (ten) | YouTube oEmbed author_name, 6 October 2026 | Verified exist; Passion uploader (Altra Moda Music) rights status not confirmed |

Not read: DJ Mag 40 essential tracks (403). Mixmag pre-1990 list was read but is not cited.

Unverified: whether the French Kiss radio edit keeps the tempo slowdown the entry describes; whether Passion's Naked Edit is Darren Emerson's 1992 mix.

Dropped for conflicting sources: Percolator (year 1992 vs early 1993). Dropped because another guide already embeds them: Acid Tracks, Voodoo Ray, Strings of Life.

## Review 2: structure, intent and cannibalisation

- The house music guide (/house-music-guide) holds "classic house music" (TAKEN-KEYWORDS.md). This page claims "house music classics", "house classics" and "classic house songs". Intent is separated: this page is an ordered list of ten records from 1988 to 2001, each with a player; the guide is the history and already embeds eight earlier records. None of those eight is embedded here (grep of the repository for each ID, 6 October 2026).
- Cross-links out: house guide, acid house guide, techno guide, house playlists page. The reverse link (a line in the house guide pointing at this list) is a change to published copy and is NOT applied; it needs the owner's approval of the exact wording (see handoff).
- audit-keywords confirms the page contains the claimed terms. Overlap remains a judgment call for the owner.
- No production teaching, no files, packs or loops (grep of the draft for sampl, chop, drum kit, loop, midi: two hits, both history of what a record is built from, lines for Stardust and Armand van Helden, no how-to).
- No drum and bass or breaks angle. The two own tracks and the Bandcamp block are labelled as not house, in a break section.
- Never "full/complete/whole" set: grep for full set, full mix, complete set, whole set returned no match.

## Review 3: humanizer pass

Greps run on house-music-classics-draft.md and the built page:

- Em dash count: 0 in both.
- Stock phrases (iconic, timeless, legendary, unmissable, testament, tapestry, delve, landscape, vibrant): 0 matches.
- Sentences are short and name a year, a person or a number; grep for "not just" and "not only": 0 matches.
- Corrected before building: an unsupported "two lists" claim, "eleven years apart" (now ten), and a typo ("a organ"). Recorded in defects.json as house-classics-draft-claims-wrong (closed).
- Remaining open entry: house-classics-sources-unverified.

## Handoff

### Outline (keyword and volume per heading; Keyword Planner ranges, 6 October 2026, reused from the parent session, none re-measured)

| Element | Text | Keyword | Volume |
|---|---|---|---|
| Title / H1 | House Music Classics: 10 Classic House Songs to Hear | house music classics | 1K-10K |
| Meta description | House music classics in order ... ten classic house songs ... | house music classics, classic house songs | 1K-10K |
| H2 | A listening list, not a history. | | |
| H2 | How these ten were chosen. | house classics | 1K-10K |
| H2 | Classic house songs, 1988 to 2001. | classic house songs | 1K-10K |
| H3 x10 | one per record | | |
| H2 | Before 1988, and the other classics. | | |
| H2 | Two tracks of mine, as a break. | | |
| H2 | Where to start. | | |
| H2 | House classics FAQ. (5 questions) | house classics | 1K-10K |

Rejected: "classic house music" (taken by house-music-guide.html).

### Media matrix

Ten YouTube players (IDs in media/house-music-classics.json), two own SoundCloud tracks (Berlin Race 1909, No Genre No Problem), one full-bleed Bandcamp block (Protect Ya Breaks, 60 hours of mistakes). No photographs. Card, og image and home thumbnail reuse the Lot Radio photo. Two tables (ten records and who named them; where the other classics are played).

### Checks (worktree, 6 October 2026)

- node scripts/build.mjs: passed.
- npm run check:html: quality gate passed.
- node audit-all.mjs: build + 23 audits passed (after fixing three failures of my own page: media share, og articles card order, FAQ count and schema text).
- npm run check:links: quality gate passed.
- npm run check:layout: FAILED on every page, mobile, tablet and desktop, because the Playwright browser is not installed in this environment ("Executable doesn't exist ... chrome-headless-shell"). It could not be run and says nothing about this page.

## Independent review (6 October 2026, a second agent that did not write the page)

Verdict: ready after the fixes below, all applied and rebuilt. Not independent of the research in one respect: I used the same Wikipedia entries as a first source and found second sources only where listed.

### Found wrong and fixed (logged in defects.json)

| Problem | Evidence | Fix |
|---|---|---|
| French Kiss player was not Lil Louis. | YouTube description of TPTODx8CKnA: "Provided to YouTube by Dancework, French Kiss (Radio Edit) by Lee Lewis, Arranger A.Gemolotto, G.Vidali". oEmbed author was only "Lee Lewis - Topic". | Replaced with rmOAVfEDyhA, "French Kiss (The Original Underground Mix)", Lil' Louis & The World, P 1989 Sony, 9:52. Text rewritten (NME: ten-minute record; Wikipedia: 7-inch 4:09). The radio-edit tempo question is now moot. |
| Where Love Lives: "Classic Club Mix was used in the John Lewis advert". | officialcharts.com John Lewis 2025 article: the advert uses Labrinth's cover. Only the YouTube title mentions the advert. | Now says the advert used a new version by Labrinth. |
| "Gypsy Woman is my own addition" and "Billboard page could not be read". | The Billboard page opens by curl; it names Gypsy Woman (number 11 in the slug order), Good Life, Where Love Lives, Show Me Love, Missing (number 39), Music Sounds Better With You, You Don't Know Me and Finally. | Method and "Named by" table rewritten: every record is on at least one list I read. |
| Stardust "$3 million". | NME says 3 million pounds; Wikipedia says dollars. | "a reported 3 million, in dollars or pounds depending on the source". |
| Missing: "first single to spend an uninterrupted year". | American Songwriter and Wikipedia agree (55 weeks, first uninterrupted year). | Kept, reworded. Billboard rank added. |
| Passion: Naked Edit vs Emerson. | NME: "the original Naked mix"; Wikipedia: Naked Mix is the original instrumental, Emerson's remix is on the B-side. | Text says the player is the original instrumental, not Emerson's remix. |
| "first decade and a half" | 1988 to 2001 | "first two decades". |

### Claim ledger (second sources)

| Claim | Source 1 | Source 2 | Confidence |
|---|---|---|---|
| Good Life: release 28 Nov 1988, UK 4, CZ-5000 and TR-909, 24-hour studio | Wikipedia | search summary of Wikipedia only; NME confirms Chaka Khan / Evelyn King influence | medium |
| French Kiss: 17 July 1989, UK 2, two weeks at 1 on US dance club, slows to a complete stop | Wikipedia | NME (slows to a stop, ten-minute) and RouteNote | medium-high |
| Where Love Lives: Kronlund, Morales and Knuckles mix, Dance Track of 1991 | Wikipedia | 6AM Group, Billboard | high |
| Gypsy Woman: 3 April 1991, Mercury, UK 2, US 8, Conway and Waters | Wikipedia | Billboard (Mercury, 1991, Korg M1) | medium-high |
| Passion: UK 29, dance 1, 1996 version UK 6 | Wikipedia | NME | medium |
| Show Me Love: 1990 original, StoneBridge 1992 remix, UK 6 April 1993, US 5 | Wikipedia | Billboard and NME (1990 original, 1992 remix, Korg M1) | medium-high |
| Missing: remix 1995, UK 3 Nov 1995, US 2, 55 weeks first uninterrupted year | Wikipedia | American Songwriter, Billboard, FourFour | high (UK 3 single-sourced) |
| Music Sounds Better With You: 20 July 1998, UK 2, Fate sample | Wikipedia | NME, Billboard | high; the offer amount differs by source |
| You Don't Know Me: 25 Jan 1999 Armed, UK 1 Feb 1999, Carrie Lucas and Jaydee samples | Wikipedia (Music Week cite) | 6AM Group | medium; YouTube metadata shows London Records, 4 Dec 1998 (US/other release) |
| Finally: Julie McKnight, Defected 2001, UK 24, dance club US 17 in 2002, SHM and Alicia Keys 29 Aug 2024 | Wikipedia, YouTube P-line "2001 Defected Records" | Billboard (2001, SHM 2024) | medium; a search summary says Distance Records 2000, not confirmed |

Chart peaks for Good Life, Where Love Lives, Gypsy Woman, Passion, Show Me Love and Finally remain one-source (Official Charts pages did not load). The entry stays in defects.json as house-classics-sources-unverified.

### Embeds

Opened each YouTube description. Official or rights-holder: InnerCityVEVO (Virgin), Where Love Lives (Arista/Sony P-line), Gypsy Woman (PolyGram, remastered), Show Me Love (Champion Records, Label Worx), Missing (EBTG official video), Stardust (official channel), You Don't Know Me (London Records), Finally (Defected P-line), French Kiss (Epic Dance/Sony, replacement). Passion: Altra Moda Music, "Official Video", description links altramodamusic.lnk.to and quotes the history, so it looks like the licensed label; I could not confirm it holds the rights and kept it, disclosed in media/house-music-classics.json. Remove it if the owner wants zero risk.

### Images

Two Wikimedia Commons images, downloaded by curl (the shell does reach Commons), converted to webp wide plus -320w in img/house-music-classics/, credited in the captions, recorded in media/house-music-classics.json, not used by another guide (repository grep): Roland TR-909 (Brandon Daniel, CC BY-SA 2.0) after the Good Life entry's text; Crystal Waters, 2012 (Elvert Barnes, CC BY-SA 2.0) after the Gypsy Woman text. Each sits after prose and is followed by a heading and a paragraph before the next player, so neither is directly beside an embed.

### SEO and cannibalisation

Title, H1 ("House music classics") and H2s carry the three measured phrases word for word (house music classics, house classics, classic house songs); the meta is 153 characters. The page does not use "classic house music", which belongs to /house-music-guide. Honest assessment: the intent overlap is real. Someone searching "house music classics" may be satisfied by a list, and the guide ranks for a neighbouring phrase, so the two pages can compete on the SERP. The separation holds only because this page is a short ordered listening list from 1988 to 2001 with ten players and no history, and none of the guide's records is repeated. It is defensible, not clean. The guide links to this page nowhere (no change to published copy was made); adding that link, with approval, is what would signal the hierarchy. Outbound links: house guide (three times), acid house guide, techno guide, house playlists. The FAQ has five questions, schema matches the visible text (audit-seo passed).

### Owner's tracks

Berlin Race 1909 and No Genre No Problem through ownTrackListening, labelled "my own track, and not a house record", plus one full-bleed Bandcamp block (Protect Ya Breaks, 60 hours of mistakes). No drum and bass or breaks angle in the prose (grep: jungle 0, drum and bass 0, breaks 1, the track title). Humanizer greps on the built text: em dash 0, "complete" 1 (tempo "complete stop", not a set), full/whole/in full 0, Wikipedia 0, matters/the point 0, not just/not only 0.

### Visual

Served the worktree on port 8947 and measured at 1440, 768 and 390: no horizontal overflow (scrollWidth equals viewport at all three), no iframe past the viewport, both images load and keep their aspect ratio (portrait capped at 380px), 14 players (10 YouTube, 2 SoundCloud, 2 Bandcamp) render. Server stopped and viewport reset.

### Checks after changes

node scripts/build.mjs passed; npm run check:html passed; node audit-all.mjs: build plus 23 audits passed (the known breakbeat-guide failure did not appear); npm run check:links passed; check:layout not run (no Playwright browser).

## 8 October 2026: requested promotional listening correction

The owner requested a curated playlist wherever no own track fits, and promotional panels aligned with surrounding prose. Replaced the two off-topic track cards and their genre disclaimers with the existing owned Rare Electronic Music Spotify playlist through `articleListeningBand()`. Retained `#artist-music`, the ten-record list, exact editorial players, canonical, title, description and original publication date. The guide has no translated variants. The shared CSS now includes own-track panels in the existing prose-width rule for mixes and playlists.

Validation: `node audit-all.mjs` passed the build and all 25 audits, including media adjacency and own-music coverage. House classics rebuilt identically a second time. Browser measurements at 1440, 1024, 768, 430 and 390px found the playlist panel's width and left edge equal to its section, with no page overflow. This is a scoped promotional correction, not a re-review of the historical article.
