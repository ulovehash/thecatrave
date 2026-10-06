# 90s rave music: editorial review

Page: `/90s-rave-music` (`build-90s-rave-music-article.mjs`, draft `90s-rave-music-draft.md`). Reviewed 2026-10-06, after the last edit to the draft and builder (the Wikipedia wording and the Mixmag correction). Any later edit needs a new review.

**Independence.** Stage 6 (topic research validation) was not run by anyone other than the agent that gathered the evidence and wrote the page. These three reviews are therefore not independent. Keywords were reused from the owner's 6 October 2026 Keyword Planner pass (1K to 10K each); no new volumes were measured and no keyword expansion, People Also Ask or SERP-detail pass was run.

## Review 1: search intent and structure

Primary intent: a listener wants to know what 90s rave music was and to hear examples. Excluded: production, sample packs, kits, loops (CLAUDE.md), and the terms owned by other guides (hardcore, breakbeat, jungle, acid house, per TAKEN-KEYWORDS.md).

| Check | Evidence | Result |
|---|---|---|
| Title carries "90s rave music" | built `<title>`: "90s Rave Music: The Records, Scenes and Laws That Shaped It" | pass |
| "1990's rave music" in an H2 | H2 "1990's rave music: hardcore in Britain" in the built page | pass |
| "90 rave music" answered | FAQ question 3 and its answer | pass |
| `audit-keywords.mjs` | "Keyword audit passed" in the full audit run | pass |
| Answer before background | the second section opens with the definition, then a six-row table | pass |
| Differentiation | links to acid house, jungle, breakbeat, techno and UK evolution guides instead of repeating them; no section retells those histories | pass |
| Banner, first section and FAQ share no sentence | read side by side; FAQ 1 restates the definition in shorter words, not the same sentence | pass, weak: FAQ 1 and the section 2 opening are close in meaning |

Weakness: the page is a scene map with six players. Competitor lists give 15 to 20 records. The page says so in its listening section and does not claim to be the biggest list.

## Review 2: facts, sources and media

Greps on the built page text (`<main>` with scripts and tags stripped):

| Phrase | Hits | Decision |
|---|---|---|
| complete, full, whole, uninterrupted, an hour, in full | 0 | none to fix |
| not ... but, matters, the point | 0 | none |
| em dash | 0 | none |
| Wikipedia in the body | 4 on first build (Charly, Poing, Jilted Generation, Reynolds), 0 after the rewrite | fixed; Wikipedia remains only in the sources list |
| jungle, drum and bass, breaks | jungle: acid-house/jungle intro, the We Are I.E. paragraph and the post-1992 split section; "drum and bass" once, as the description of Grooverider; breaks: own-track captions | the page is about 90s rave, in which early jungle is a strand, so the jungle section is on topic; no dnb angle, aside or Bandcamp line; own-track captions are labelled |

Claim ledger. "Opened" means a page I opened during this build; "summary" means a fetch summary read earlier in this build whose page I did not re-open after compaction; confidence is mine, not an independent check.

| Claim | Source | Status | Confidence |
|---|---|---|---|
| LFO "LFO" released 26 July 1990 on Warp, made in Leeds by Gez Varley and Mark Bell, UK number 12 | Wikipedia and Warp history, summary | summary | medium |
| "Charly" released 12 August 1991 on XL, number 3 in the UK, 200,000 copies by October 1992 | Music Week chart history, summary | summary | medium |
| Charley Says sample, "filed under rave and toytown techno" | Wikipedia only, so worded as "is filed" with no attribution | summary | low to medium |
| We Are I.E. recorded 1989, released 1991 on Reel 2 Reel, De Underground shop, Forest Gate; Grooverider quote | Wikipedia summary | summary | medium |
| Raving I'm Raving, May 1992, injunction by Marc Cohn, charity, number 2 in the UK | 909originals and Wikipedia, summary | summary | medium |
| Fantazia rave over 25,000, The Sun coverage | 909originals, summary | summary | medium |
| Mentasm 1991 on R&S, Muzique quote on a "useless sound" on a Roland synthesizer | Red Bull Music Academy Daily, summary | summary | medium |
| Anasthasia: number 13 in the UK in May 1991, number 4 in the Netherlands | Wikipedia, summary | summary | low to medium |
| Rotterdam Records founded 1992 by Paul Elstak; "Poing" by Steenbergen and Scholte | Wikipedia, summary | summary | medium |
| Castlemorton late May 1992, about a week, 20,000 to 40,000, 13 Spiral Tribe members charged and acquitted | Music Week and 909originals, summary; sources differ on dates | summary | medium; dates differ across sources |
| Section 63 text; "succession of repetitive beats"; threshold 20 or more today | legislation.gov.uk, summary; 1994 threshold not checked and the page says so | summary | high for the quote, unchecked for 1994 |
| Jilted Generation 4 July 1994, number 1; Howlett says not political | Wikipedia, summary | summary | medium |
| Reynolds, Energy Flash (1998), darkcore, hardcore jungle and happy hardcore | Wikipedia's account of breakbeat hardcore only | summary | low; Reynolds is named, but I did not open the book |
| Mixmag list of 20 US rave anthems, 1990 to 1999, titles and artists named | opened via mixmag.net search results on 2026-10-06 | opened | medium to high |
| Bandcamp Daily deep cuts: Joe Muggs, 24 April 2025, 15 records, three named | Bandcamp Daily, summary | summary | medium |
| Radio X list names Utah Saints and Altern 8 records | Radio X, summary | summary | medium |
| Image: Altlondon, CC BY-SA 3.0, Criminal Justice Bill march, July 1994 | Wikimedia Commons file page | opened | high |
| Embeds (six): LFO, Charly, We Are I.E., Mentasm, Anasthasia, Poing | YouTube oEmbed checked 2026-10-06, channels in `media/90s-rave-music.json` | opened | high that they resolve; whether each upload is the original mix is by channel name only |

Unsupported or cut: Poing's chart position (sources conflict, omitted); any statement about Essex, Ghent, Home Counties and the acid-line claim (removed in the rewrite). No superlatives remain.

Internal links and reuse: `/acid-house-guide` (intro, 1987 to 1990 boom), `/jungle-music-guide` (hardcore jungle leads to it), `/uk-electronic-music-evolution` (timeline of British sounds), `/techno-music-guide` (Belgium and the US Detroit side), `/breakbeat-guide` (drum pattern after the split). Each link sits in a sentence about that music. No media is reused from another guide; the one image is new and used by no other page.

## Review 3: readability and humanizer

Own tracks (promotion, kept): `protect-ya-breaks` after the post-1992 split, labelled "An artist break, not a 90s record"; `berlin-race-1909` after the listening section, same label; a full-bleed Bandcamp block with both. Neither is called best, full or complete, and no lineage claim is made for them. No `look` text anywhere. Neither track is claimed to be a rave record.

Humanizer pass (honest record). I ran it on my own draft; it changed little because the draft was already plain after the rewrite. Three changes it made:

1. Before: "Wikipedia files it under rave and toytown techno." After: "It is filed under rave and toytown techno." (the grep rule says Wikipedia is not named in the body).
2. Before: "Wikipedia describes it as minimal: a pounding beat and a "poing" sound that gives it its name, and calls it world famous." After: "It is a minimal record: a pounding beat and a "poing" sound that gives it its name." ("world famous" had no support beyond Wikipedia and is a superlative).
3. (Corrected by the independent review: this edit was recorded here but never reached the builder; see defect `90s-rave-own-track-caption-reverted`. The caption now reads "Also not a 90s record: breakbeat drums under dub techno space, made now.")

Sentences checked and left unchanged: "Rave named the night, not a genre, and the music kept splitting for as long as the nights went on." (it is a plain contrast between two nouns, not a rhetorical template, but a later reader should judge it); "That is the useful definition: a mix, held together by the room it was played in and by speed." (opinion from the page, flagged); "Their early records were." (short FAQ answer, kept).

Defects found and logged in `defects.json`: `faq-markdown-italics-in-schema` (asterisks in a FAQ answer broke the FAQ schema match) and `90s-rave-mixmag-list-misstated` (list range, artist credit, byline and a guessed 404 URL). Both fixes are named by a phrase in the draft.

## Open items for the owner

- This is a new page, so no published copy is edited; the draft wording is what will publish.
- DE and FR translations are a later pass; the DE/FR build entries were not created.
- See the handoff section in `90s-rave-music-handoff.md` for the outline, sources and what is unverified.

## Independent review (2026-10-06, second agent, not the author)

Run after the author's three reviews, which declared themselves non-independent. The shell had internet for curl, so sources were fetched directly; no Ahrefs and no Keyword Planner. Every ledger row below was opened by me on 2026-10-06.

### Facts: what was wrong and is fixed (defects `90s-rave-s63-misdescribed`, `90s-rave-unsupported-claims`, `90s-rave-own-track-caption-reverted`)

| Claim | Source opened | Result |
|---|---|---|
| s.63 threshold, 1994 | legislation.gov.uk /section/63/enacted | As enacted: open-air gathering of 100 or more, amplified music at night, likely to cause serious distress to locals; superintendent may direct on 2+ preparing or 10+ waiting or attending. "music includes" repetitive beats, not "defined". Page said 1994 unchecked and omitted the conditions. Rewritten. |
| 20 persons today | legislation.gov.uk /section/63 | England and Wales cut to 20 by Anti-social Behaviour Act 2003 s.58(2), in force 20 Jan 2004 (Scotland stays 100). Now stated. |
| Castlemorton dates, crowd, systems | Wikipedia, 909originals | 22 to 29 May 1992 (Wikipedia), six days (909originals); crowd 20,000 to 40,000 (Wikipedia only); Spiral Tribe, Bedlam, DiY, Adrenalin, Circus Warp (909originals); 13 Spiral Tribe charged and acquitted (Wikipedia only, medium). Page says "from 22 May ... about a week". |
| "The Sun ... scare stories" | 909originals | Not supported. Source: tabloids called Castlemorton a travellers' problem; The Sun covered Fantazia (25,000+) positively that summer (Sheryl Garratt, Adventures in Wonderland). Rewritten. |
| Charly 12 Aug 1991, number 3, 200,000 by Oct 1992 | Music Week | confirmed (Wikipedia: XL, number 3). "First single" in the embed card was wrong (What Evil Lurks EP, 25 Feb 1991 was first). Fixed. |
| LFO 26 July 1990, Warp WAP5, Leeds, Varley, Bell, Williams, number 12, Beckett quote | 909originals | confirmed. "Defining record of the Sheffield bleep scene" unsupported (Wikipedia gives Unique 3 "The Theme" as the first bleep single). Cut. |
| We Are I.E. 1989 / 1991, Reel 2 Reel, De Underground, Forest Gate; Grooverider quote | Wikipedia (cites Red Bull Music Academy 2015) | confirmed, medium; page now names the 2015 Red Bull Music Academy source. |
| Raving I'm Raving May 1992, injunction, charity, number 2, dropped out of top 40 | 909originals | confirmed. |
| Mentasm 1991 on R&S; Muzique quote | RBMA Daily, search | year and label confirmed; quote is about people not understanding why Roland included a "stupid" sound, not "wanted to use a useless sound". Reworded. |
| Anasthasia UK peak | Wikipedia (text 13, table 14), 909originals (14), search summary (13) | contested. Page now says "top 15" and keeps Netherlands 4 (all agree) and Belgium 9 (909originals). |
| Rotterdam Records 1992 by Elstak; Poing early release | Wikipedia Rotterdam Records, Rotterdam Termination Source | confirmed; Poing year 1992 is from the RTS article only, medium. Chart position stays omitted (Wikipedia's UK 27 is unsourced there). |
| Jilted Generation 4 July 1994, number 1, Their Law, Howlett "never political" | Wikipedia, Music Week | confirmed. "Mainstreaming of rave" and "a record of its moment" cut as unsupported opinion. |
| Reynolds | Wikipedia Breakbeat hardcore | The late-1992 split wording is Wikipedia's. Only the 1993 darkside turn and 1994 happy-hardcore-alongside-jungle are Reynolds's (p. 266, via Wikipedia). I did not open the book; page now attributes only those two points to him. Confidence low to medium. |
| Mixmag list | mixmag.net, opened | 20 entries 1990 to 1999 (Energy Flash 1990 first, Aztec Mystic Jaguar 1999 last), by Cameron Holbrook, 29 July 2019, picked from 400+ tracks submitted by ravers in SF, LA, Chicago and NY. Page now says so. |
| Bandcamp Daily | daily.bandcamp.com, opened | Joe Muggs, 24 April 2025, 15 records; Terada 1993, Landstrumm 1995 LP, Grabb 1998 confirmed. Muggs's description now paraphrased closely. |
| Radio X | radiox.co.uk, opened | Utah Saints (1992), Altern 8 (1992) confirmed; also lists LFO and SL2. |
| Photograph | Commons file page | 24 July 1994, Trafalgar Square, Altlondon, CC BY-SA 3.0. Caption now carries the date. |

### Embeds (descriptions read from each YouTube watch page)

| Record | Channel and description | Verdict |
|---|---|---|
| LFO | Warp Records, official video, "released 26 July 1990" | original, official (3:59 video edit) |
| Charly | The Prodigy, official video | original, official |
| We Are I.E. | Lennie De Ice Topic, "Original Extended Edit", Hooj Choons 2022 digital release | the original extended edit by title; card now says it is a 2022 release |
| Mentasm | R&S Records channel | original, official |
| Anasthasia | T99 Topic, from compilation The Sound of Belgium (2013) | correct record, compilation upload; card says so |
| Poing | TheRotterdamRecords | label's own |
| Energy Flash (new) | Joey Beltram Topic, "Provided to YouTube by R&S Records", Beltram, Vol. 1, 1990, 5:51 | added in the United States section; table row changed to it |
| Raving I'm Raving, Percolator | searched YouTube: only fan or reupload channels, no label upload | still not embedded; page says no official upload turned up |

### Users, voice, SEO

- Banner and "What is 90s rave music?" shared the same opening paragraph. The section body now starts from the second paragraph (builder change), so they no longer repeat.
- Removed: "Rave named the night, not a genre", "That is the useful definition", "The strands below are...", the toytown "small, familiar thing" line, the "treat it as a record of its moment" closer and "Sources disagree" phrasing. Greps on built page text: complete, full, whole, uninterrupted, an hour, in full, matters, the point, "not ... but", em and en dashes: 0 hits. Wikipedia: 0 in the body, only in the Sources list. "drum and bass": 1 (Grooverider's description), on topic.
- Humanizer record, three changes: (1) "Rave named the night, not a genre, and the music kept splitting for as long as the nights went on." became "'Rave' described the night, and the music played at one kept splitting."; (2) "That is the useful definition: a mix, held together by the room it was played in and by speed." was deleted (opinion with no source, staged); (3) "which is the kind of small, familiar thing early rave records loved to run at speed" was deleted (decoration).
- Title "Laws" (plural) overclaimed: there is one Act. Now "90s Rave Music: The Records, the Scenes and the Law" (51 characters). Meta description "the law that went after repetitive beats" overstated s.63 and is now "the 1994 law aimed at raves", 160 characters or fewer. H1, the H2 "What is 90s rave music?", the H2 "1990's rave music: hardcore in Britain" and the three FAQ questions are unchanged. `audit-keywords.mjs` passed.
- Overlap: nothing on TAKEN-KEYWORDS.md matches "90s rave", "1990's rave" or "90 rave" (grep: no hit). Links to acid house, jungle, techno, breakbeat and UK evolution guides each sit in a sentence about that music; none of those histories is retold. "Hardcore" is the page's strand heading only as part of the keyworded H2; it is not targeted as a term (taken by the breakbeat guide).
- Image alt and caption: alt describes the crowd with banners in Trafalgar Square; caption names the event, date and `Photograph: Altlondon, CC BY-SA 3.0.` Adjacency: the figure sits at the end of the law section, before the US section's heading, with prose around it; `audit-media.mjs` passed.
- Own tracks: `protect-ya-breaks` (after the split section, "An artist break, not a 90s record...") and `berlin-race-1909` (end of listening section, "Also not a 90s record...") through `ownTrackListening`, and one full-bleed `bandcampSupport` ("Two of my own tracks, neither a 90s record."). No lineage claim.

### Visual (static server on port 9047, closed afterwards)

1440, 768 and 390 wide: document scroll width equals viewport width at all three, no broken images, all 11 iframes inside the viewport (YouTube 16:9, SoundCloud 166 tall, Bandcamp 120 tall). At 390 the strand table is 480 px inside a 356 px wrapper and scrolls horizontally within it, not the page. Screenshots at 1440 and 390 showed the hero, deck, definition banner, the Energy Flash essential-listening block and the section text without clipping.

### Checks

`node scripts/build.mjs`, `npm run check:html`, `node audit-all.mjs` (build + 23 audits passed, including audit-own-tracks, audit-media, audit-site-components) and `npm run check:links` all pass in the worktree. `check:layout` was not run (no Playwright browser).

### Still open for the owner

- Reynolds: only second-hand. Open the book or accept the narrowed attribution.
- Anasthasia's exact UK peak (13 or 14) is unresolved; the page says top 15.
- Castlemorton's crowd (20,000 to 40,000) and the 13 acquittals rest on Wikipedia alone.
- No official upload found for Raving I'm Raving, Percolator, SL2 or Their Law.
- German and French pages do not exist.
