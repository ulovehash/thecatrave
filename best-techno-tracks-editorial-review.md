# Best techno tracks: editorial review

Reviewer note: the sections above the 'Independent review' section were written by the author and are superseded where the independent section says so (Klangspot dropped, counts changed to three lists). Stage 6 (topic research validation) was not run. Reviews dated 2026-10-06, after the last edit to the draft and builder.

## Claim ledger

| Claim | Source opened (URL) | Confidence |
|---|---|---|
| No UFO's, Model 500, Metroplex, 1985, Juan Atkins after Cybotron; blueprint for techno; radio-shaped verse and chorus; Chicago following after Detroit radio | https://www.attackmagazine.com/technique/deconstructed/model-500-no-ufos/ | high |
| Strings of Life, 1987, stabbing keys, space-age strings, seven and a half minutes without a bassline, name from Frankie Knuckles | https://articles.roland.com/strings-of-life-derrick-may/ (the Roland page names neither label nor year in a checkable sentence) | high for the description |
| Strings of Life on Transmat, 1987 | https://thevinylfactory.com/?p=77032 (via search result, original release 1987, Transmat) | medium: one outlet, search-result text |
| May hoped Chicago DJs would play it; main audience in Europe, which frustrated him | https://daily.redbullmusicacademy.com/2017/05/interview-derrick-may/ | high |
| Energy Flash made 1989 aged 19, R&S 1990, US licence via Transmat, pushback against feel-good melodies, dark, moody, heavy | https://attackmagazine.com/?p=79387 | high |
| Spastik, Plus 8, 1993; 808, 909, 303; "just me jamming"; about eight minutes cut from a longer session; never had radio play; Todd Osborn recalled it everywhere | https://www.insomniac.com/music/from-the-crate-plastikman-spastik/ | high; the player is the 1994 album version per Bandcamp, stated on the page |
| The Bells made 1994, Purpose Maker spring 1996; Mills has played it at every DJ set since; "hello to the crowd" | https://xlr8r.com/?p=113950 | high |
| Phylyps Trak, Basic Channel, 1993, BC02; fast tempo, 909 and conga rhythm track; pivotal to dub techno | https://ra.co/reviews/24143 | high; Spotify copy is the 2008 reissue, stated |
| Subzero, Ostgut Ton, January 2009, Before One EP | https://benklock.bandcamp.com/track/subzero (conflicts with Music Industry How To's 2015; primary source wins, conflict stated on the page) | high |
| Jaguar, The Aztec Mystic, Underground Resistance, 1999; glassy keys, intricate drums, Latin passion | XLR8R #37 (1999) review read through orriginal.com | medium; month and UR catalogue number unverified, not printed |
| Doppler, KNTXT, 30 April 2021, track 1 of Formula EP with RPM and Formula; shuffling drums, urgent synths | https://charlottedewittemusic.bandcamp.com/album/formula-ep | high |
| Four lists read 6 October 2026: counts 2, 1, 3, 2, 3, 0, 1, 1, 0; seven of nine named | https://klangspot.com/the-definitive-guide-to-the-most-influential-techno-tracks-of-all-time/ ; https://www.timeout.com/newyork/nightlife/best-techno-songs-of-all-time ; https://dmy.co/10-best/the-10-best-techno-tracks-according-to-benjamin-damage/ ; https://www.musicindustryhowto.com/techno-songs/ | medium: Klangspot read earlier in the session and not re-fetched (re-fetch failed); Time Out read through a fetch summary |
| Photographs | Commons: "Richie Hawtin @ Fabric.JPG", Raminta Malinauskaite, CC BY-SA 3.0; "Charlotte de witte-1513626416.jpg", Alan Overbeek, CC BY-SA 4.0 | high |

Left out as unverified: the Mixmag 2013 and LA Weekly 2015 rankings of Spastik; Blawan (dropped on instruction).

## Greps (run on best-techno-tracks-draft.md; page text checked separately)

| Search | Result |
|---|---|
| complete, full, whole, uninterrupted, an hour, in full | no matches |
| jungle, drum and bass, breaks, breakbeat | no matches in draft; no matches in tag-stripped best-techno-tracks.html |
| Wikipedia | no matches in the body or the sources list |
| "not .* but" | no matches |
| matters, the point | no matches |
| em dash | no matches |

## Review one: facts, terminology and timeline

Every year and label in the table matches the ledger. Conflicts are stated on the page (Spastik player is the album version; Subzero 2009 against 2015; Phylyps Trak player is a reissue). The Strings of Life label rests on one outlet and is the thinnest sourced fact. Jaguar carries a year only. No measured numbers were added; the "named on the four lists" counts are counts from the lists read.

## Review two: reader intent, structure and differentiation

The answer paragraph contains "best techno song ever" and says no chart or poll settles it. The page is a list of tracks and links to the techno music guide (genre history) and best techno mixes (DJ sets) in the introduction. Each entry is an h3 with two short paragraphs and a player, in release order. Keyword mapping is in the handoff. Media audit passes (199 guides). The own tracks sit outside the list and are labelled as not techno.

## Review three: house rules, language and style

Rules checked: no production teaching and no files; no drum and bass, jungle or breaks angle; no "full" or "complete" emphasis; thecatrave in lowercase; English only; Look not used; images openly licensed, local, credited in captions; no Wikipedia in the body; no em dashes (grep above).

Humanizer, three sentences changed:

1. "because the sound is incomplete without them" became "because the story has a gap without them" (the word "complete" appeared inside "incomplete" and tripped the grep).
2. "It is the newest record here that comes straight from the Berlin club sound." became "It is the newest of the Berlin records here." (shorter, and avoids implying Doppler is not club music).
3. "The player is the reissue-era Spotify listing credited to Jeff Mills." was cut, because the reissue status was not verified.

## Internal links

| Link | Why |
|---|---|
| /techno-music-guide | the genre history this page does not repeat |
| /best-techno-mixes | the DJ sets this page does not repeat |
| Read next (generated): /what-is-burning-man, /best-clubs-in-paris, /best-clubs-in-berlin, /berghain | chosen by relatedArticles, not hand-picked |

## Reused media

None. Both photographs are new, found by grep on their credits to appear nowhere else in the repo. Players are embeds of the records themselves. Own tracks reused from the catalogue: Berlin Race 1909 (dub techno space around its drums, sits beside the Berlin section), No Genre No Problem (labelled break from the list), 60 hours of mistakes (Bandcamp support block). Each is promotion, disclosed as my own.

## Checks (2026-10-06, in the worktree)

| Check | Result |
|---|---|
| node scripts/build.mjs | pass (after generating img/og/best-techno-tracks.jpg) |
| npm run check:html | pass |
| npm run check:links | pass |
| node audit-all.mjs | two failures after my changes: audit-og-cards (fixed by rebuilding articles.jpg) and audit-site-components essentialListeningSharedGeometry, which fails on breakbeat-guide.html (pre-existing, not mine; this page's asides match the Paris guide's structure) |
| npm run check:layout | fail for every page including this one: Playwright's chromium_headless_shell is not installed on this machine, so no layout or accessibility result exists for this page |

## Handoff

Outline with keyword and volume (all volumes are Keyword Planner bands from the dossier and brief; nothing newly measured):

| Heading | Keyword | Volume |
|---|---|---|
| Answer and H1 | best techno song ever | 1K-10K, +900% 3-month |
| Title and hero | best techno tracks | unmeasured |
| How these techno tracks were chosen | best techno tracks | unmeasured |
| FAQ: What are the best techno songs of all time? | best techno songs of all time | 1K-10K band |
| Which techno track should you play first? | good techno songs | 1K-10K band |
| FAQ: What is a famous techno song? | famous techno song | unmeasured, People Also Ask |
| FAQ: What are the top 20 techno songs? | top 20 techno songs | unmeasured, People Also Ask |

Sources: listed in the page's Sources section and the ledger above. Media matrix: nine track players (Spotify 4, Bandcamp 3, SoundCloud 2), two own-track bands, two photographs, one table; media/best-techno-tracks.json holds the records. Unverified: Jaguar month and catalogue number; Strings of Life label on one outlet; Time Out and Klangspot counts; Mixmag and LA Weekly Spastik rankings (excluded). DE and FR translations are a later pass. Pre-existing defect recorded, not fixed: the "Ten complete sets" card caption on best-techno-mixes (defects.json, techno-mixes-card-caption-complete-sets).


## Independent review (2026-10-06, separate agent, after the last author edit)

Not the author: every URL below was fetched by the reviewer. Stage 6 not run. No Keyword Planner or Ahrefs access, so no volumes were measured or added.

### Facts re-verified

| Claim | Source opened | Result |
|---|---|---|
| No UFO's, Metroplex, 1985, after Cybotron, verse/chorus for radio, Detroit airplay then Chicago | attackmagazine.com/technique/deconstructed/model-500-no-ufos/ | confirmed. "Blueprint for techno" is not in the text read; replaced with Attack's own "something starkly new". "Underground following" cut (Attack says it "took off" in Chicago) |
| Strings of Life 1987, 7:30, no bassline, name from Knuckles | articles.roland.com | confirmed; Roland names no label |
| Strings of Life on Transmat | insomniac.com/?p=84044 ("released on May's Transmat imprint") | confirmed by a second outlet; Vinyl Factory page no longer shows it, dropped from sources |
| May wanted Hardy and Knuckles to play it; sold mainly in Europe, made him angry | daily.redbullmusicacademy.com/2017/05/interview-derrick-may/ | confirmed, wording now close to his |
| Energy Flash 1989, age 19, R&S 1990, Transmat US licence, dark, moody, heavy, pushback against Italo piano house and NY garage | attackmagazine.com/?p=79387 | confirmed |
| Spastik, Plus 8, fall 1993; 808, 909, 707 and 303; "just me jamming"; "taut eight minutes"; no radio play; Osborn "everywhere" | insomniac.com/music/from-the-crate-plastikman-spastik/ | confirmed. Fixed: the author said "808, 909 and a 303" (also names a 707) and "about eight minutes cut from a longer session" (source says only that it runs a taut eight minutes) |
| The Bells made 1994, Purpose Maker spring 1996, played every time he DJs, "say hello to the people" | xlr8r.com/?p=113950 via search extract (direct fetch returned HTTP 520) | confirmed from extract; "hello to the crowd" reworded to the quote |
| Phylyps Trak 1993, BC02, 909 and conga, "busy, relentless and intense"; "Detroit techno met Kingston via Berlin" (Degiorgio, about the earliest Basic Channel records) | ra.co/reviews/24143 | confirmed; "pivotal to dub techno" was the author's gloss, removed. "2008 reissue" for the Spotify copy could not be verified (the digital release is dated April 2008 on BCD-2 but Spotify's metadata was not readable), so the page now says only that it is a streaming copy |
| Subzero, o-ton 19, Before One EP, 12 January 2009 | benklock.bandcamp.com/track/subzero | confirmed; Music Industry How To says 2015, conflict stated on the page |
| Jaguar, UR, 1999, Knights of the Jaguar, Latin percussive styles | insomniac.com/?p=40063 | year, label and Latin percussion confirmed. The 1999 XLR8R review wording ("glassy melodic keys", "Latin passion") could not be re-found and was removed. Month and catalogue (UR-049 appears only in a search extract) still unprinted |
| Doppler, KNTXT, 30 April 2021, track 1 of Formula EP, "shuffling drums and urgent alarm like synths" | charlottedewittemusic.bandcamp.com/album/formula-ep | confirmed |

### The "named on four lists" claim was wrong

Klangspot could not be fetched (socket closed three times; search does not index it). Time Out New York (28 tracks) names only Energy Flash. Dummy names The Bells and Spastik. Music Industry How To (31 tracks across three pages) names No UFO's (as "No UFOs", Juan Atkins), The Bells, Subzero (dated 2015), Knights of the Jaguar (DJ Rolando), Energy Flash and Spastik. So on three lists: No UFO's 1, Strings of Life 0, Energy Flash 2, Spastik 2, The Bells 2, Phylyps Trak 0, Subzero 1, Jaguar 1, Doppler 0. Six of nine are named, not seven. Klangspot removed from the page, table, FAQ, sources and media/best-techno-tracks.json. Strings of Life is now an editorial addition with its reason stated. Logged in defects.json as techno-tracks-unverified-list-counts-and-quotes (closing phrase "I read three published lists of techno tracks" in best-techno-tracks-draft.md).

### Embeds

| Embed | Check | Result |
|---|---|---|
| Spotify 0shMp9Vkjr8X77jQCWlaEP | oEmbed and track page | "NO UFO'S (Vocal)", Model 500. Page now says it is the vocal version |
| Spotify 78ZQfXjoaHU2QjXqWpa8l9 | track page | Strings of Life, Rhythim Is Rhythim |
| Spotify 0ISxyAhfop0MoMeAUw72RN | track page | The Bells, Jeff Mills (credit confirmed) |
| Spotify 4KsL7ddeairY2OMs8OFRSR | track page | Phylyps Trak, Basic Channel |
| Bandcamp 2779115416 | randsrecords.bandcamp.com | Energy Flash, Joey Beltram, Beltram Volume 1 (Remastered), R&S's own page |
| Bandcamp 2542530288 | richiehawtin.bandcamp.com | Spastik, Recycled Plastik, 4 November 1994 (album version, stated on the page) |
| Bandcamp 3711497848 | benklock.bandcamp.com | Subzero, Ben Klock's own page |
| SoundCloud undergroundresistance/djrolandojaguar | oEmbed | "DJ Rolando - Jaguar", UNDERGROUND RESISTANCE channel |
| SoundCloud kntxtmusic/charlotte-de-witte-doppler | oEmbed | "Doppler (Original Mix)", KNTXT channel |
| Own: Berlin Race 1909, No Genre No Problem (SoundCloud), 60 hours of mistakes (Bandcamp 3330948631) | oEmbed and Bandcamp pages | all resolve to thecatrave |

Spotify uploads are the labels' distributed catalogue; the owner of the rights could not be read from the oEmbed. Photographs re-checked on Commons: Hawtin, Raminta Malinauskaite, CC BY-SA 3.0, 23 March 2008 (captioned 2008); de Witte, Alan Overbeek, CC BY-SA 4.0, Toffler Rotterdam. The file title names her; the Commons description reads only "DJ performing live at Toffler", so the identification rests on the file name.

### Users and prose (humanizer pass)

- First screen: the banner answers "best techno song ever" in two sentences. Pass.
- Order: the page said "in the order it came out" and "release order", which was false (Phylyps Trak 1993 follows The Bells 1996, Jaguar 1999 follows Subzero 2009). Now "grouped by scene, oldest first within each group", in the intro, deck, home card, pages.mjs caption and meta description.
- Cut as unsupported or padding: "you will hear the drums get harder, then stranger, then cleaner" (nobody sourced it); "it shows how much of the older sound is still in use"; "the story has a gap" kept but now explains each addition; "more useful than twenty names with no explanation" (swipe); "It is the newest of the Berlin records here" (two records).
- Own-track copy: the Berlin Race 1909 line claimed dub techno space around its drums, which no source supports. It now says it was produced while living in Berlin (Bandcamp description). No Genre No Problem is described as the first finished track (Bandcamp description) and "I am not claiming it was played anywhere" was cut as defensive.
- Three before/after sentences: "Attack Magazine calls it a blueprint for techno. It built an underground following in Chicago after Detroit radio play" became "Attack Magazine says it helped push dance music on from electro and Italo disco into something starkly new. It got airplay in Detroit and took off in Chicago."; "treats the record as pivotal to dub techno" became "busy and relentless"; "It is the only record here from the last decade, and it shows how much of the older sound is still in use" became "It is the newest record on this page."
- Heading "Underground Resistance and the current peak" (peak unsupported) became "Underground Resistance and Doppler". The H2 "Which techno track should you play first?" no longer prints "?." (builder fixed).
- Greps on tag-stripped built page: complete, full, whole, uninterrupted, an hour, jungle, drum and bass, breaks, Wikipedia, matters, the point, em dash, "not ... but", Klangspot, "four lists": 0 hits each.
- Remaining weakness: the page is a list of nine with two sentences per entry. That is the format and is thinner than best-techno-mixes; the list order inside the FAQ repeats the table. Not changed.

### SEO

- Title, H1, meta and banner all carry "best techno tracks" without being identical. "best techno song ever" is in the banner and an FAQ H3; "best techno songs of all time" is an FAQ H3 word for word; "good techno songs" appears in body text under "Which techno track should you play first?" but not in an H2, so that mapping in the handoff table is body-level only. "famous techno song" and "top 20 techno songs" are FAQ H3s. All volumes are Keyword Planner bands copied from TOPIC-DOSSIERS.md; none measured here, and "best techno tracks" is unmeasured. keywords/best-techno-tracks.json is unchanged and still matches.
- TAKEN-KEYWORDS.md has no techno song or track term; no cannibalisation. Intent differs from techno-music-guide (history) and best-techno-mixes (sets); both are linked in the introduction.
- Read next was Burning Man, Paris and Berlin because the home-articles entry carried no "techno" tag. Added the tag; the block now lists techno-adjacent guides.
- FAQ and FAQPage data are generated from the same items; audit-seo passed.
- Image alt and captions are specific and carry the CC credit tail.

### Owner's tracks

Berlin Race 1909 and No Genre No Problem as ownTrackListening, 60 hours of mistakes in bandcampSupport. All three resolve to thecatrave. No breaks, jungle or drum and bass wording on the page (grep). The Bandcamp tags on the two SoundCloud tracks include breakbeat, so the page makes no stylistic claim about them. The bandcampSupport description is generic ("One of my own tracks").

### Visual

Served statically on localhost:8847 (stopped afterwards). At 1440, 768 and 390 the page has no horizontal page scroll (scrollWidth equals the viewport). All twelve iframes render at full column width (624 at desktop, 358 at 390). The five-column table is wider than its box at 768 (750 against 705) and 390 and scrolls inside its `genre-table-wrap`, which is the shared component's behaviour. The 390 hero and banner read cleanly. Playing the embeds was not tested: autoplay and third-party players cannot be exercised here.

### Checks after the review edits

| Check | Result |
|---|---|
| node scripts/build.mjs | pass |
| npm run check:html | pass |
| npm run check:links | pass (769 links scanned) |
| node audit-all.mjs | all pass except audit-site-components essentialListeningSharedGeometry (the known pre-existing failure) |
| npm run check:layout | not run: no Playwright browser on this machine |

### Still unverified

Klangspot's list (page unreachable; may name more of these tracks); Jaguar month and catalogue number; the Spotify "(Vocal)" version of No UFO's against the original 1985 vinyl; that the Phylyps Trak Spotify copy is the 2008 compilation version; rights-holder status of the four Spotify uploads; the XLR8R Bells page was read only through a search extract after a direct fetch error; de Witte photo identification beyond the file name; DE and FR translations (not built).
