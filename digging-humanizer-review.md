# Digging humanizer pass, 8 October 2026

Applied `.claude/skills/humanizer/SKILL.md` in file mode, using the opening and early history of `breakbeat-guide-draft.md` as the voice reference. The owner authorized direct editing of articles already touched in this task. No new research or claims of firsthand listening. This pass is by the editing agent, not an independent review.

Patterns edited: staged contrasts, decorative introductory headings, repeated listening recommendations, vague “argument” language, and excessive disclosure wording around owned music. Ownership remains explicit. House Classics’ Show Me Love instrument was corrected to organ bassline to match its own track description. Existing statistical qualifications and links remain.

Examples:

- “A listening list, not a history.” → “From ‘Good Life’ to ‘Finally’.”
- “A mix should make an hour mean something.” → “Finding mixes on SoundCloud.”
- “I curate this one, so the conflict is stated up front.” → “I curate Rare Electronic Music.”

This is a language pass, not a fresh factual sign-off. The existing DJ-set shortlist concerns and source/listening limitations remain in its review. No push or publication occurred.

## house-music-classics-draft.md

```diff
---
+++
@@ -6,15 +6,15 @@

 ## Introduction

-This page is a listening list, in the order the records came out. It is not a history of house. The [house music guide](/house-music-guide) tells that story, from the Warehouse in Chicago to deep house, garage house and French house, including the early records by Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles and Farley "Jackmaster" Funk.
+House spread through records like these: Paris Grey singing over Kevin Saunderson’s machines, StoneBridge rebuilding “Show Me Love” around an organ bassline, and Stardust sampling Chaka Khan. The [house music guide](/house-music-guide) follows the earlier story, from the Warehouse in Chicago and the records of Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles and Farley "Jackmaster" Funk to deep house, garage house and French house.

-What follows starts where those leave off. Each entry has the year, who made it, one fact worth knowing, and, for all but one, a player.
+The ten records below run from 1988 to 2001. Nine have players, including the specific mixes discussed in their descriptions.

 ## The records at a glance

-The piano in “Show Me Love,” the vocal in “Gypsy Woman” and the sampled disco of “Music Sounds Better With You” offer different ways into house. These records are worth revisiting for the details that made them recognisable, as well as the producers and remixers behind them.
+The organ bassline in “Show Me Love,” the vocal in “Gypsy Woman” and the sampled disco of “Music Sounds Better With You” offer different ways into house. These records are worth revisiting for the details that made them recognisable, as well as the producers and remixers behind them.

-The oldest record here is from 1988 and the newest from 2001, so these are the house classics of the genre's first two decades, not the tracks of the last ten years. Each player is an upload by the artist, the label or the platform's own music channel. Where it is a shortened radio edit, the entry says so.
+The selection covers the late 1980s through the early 2000s. Each player is an upload by the artist, the label or the platform's own music channel. Where it is a shortened radio edit, the entry says so.

 ## Classic house songs, 1988 to 2001

@@ -80,7 +80,7 @@

 ## Before 1988, and the other classics

-Some records that come up under house classics sit in other guides, where they are played in context.
+To hear the Chicago records that preceded “Good Life,” start with the early house guide below.

 For the first years, the [house music guide](/house-music-guide) has Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles and Farley "Jackmaster" Funk. Phuture's "Acid Tracks" and A Guy Called Gerald's "Voodoo Ray" are in the [acid house guide](/acid-house-guide), and Rhythim Is Rhythim's "Strings of Life" is in the [techno guide](/techno-music-guide). If you want playlists rather than a list, there is a separate page of [house playlists on Spotify](/best-house-music-playlists-spotify).

@@ -92,7 +92,7 @@

 If you have time for three, play "Good Life", "Show Me Love" and "Music Sounds Better With You". They are ten years apart from first to last, and between them they cover a Detroit producer, a Swedish remixer and three French makers.

-If you only want the ones that crossed over to the pop charts, play "Gypsy Woman", "Missing" and "You Don't Know Me". For something that rewards a second listen, play "French Kiss".
+If you only want the ones that crossed over to the pop charts, play "Gypsy Woman", "Missing" and "You Don't Know Me". Play "French Kiss" for its slowdown to a stop and the return to full speed.

 ## FAQ
```

## build-house-music-classics-article.mjs

```diff
---
+++
@@ -165,7 +165,7 @@

 const articleHtml = [
   articleHero({kicker: 'House', title: 'House music classics', deck: 'Ten classic house songs in the order they came out, from Inner City in 1988 to Kings of Tomorrow in 2001, nine with a player.', readingTime, dateModified, dateLabel, summaryHtml: infoBanner({label: 'House music classics', bodyHtml: inline(answer[0]), className: 'article-summary'}), tocItems}),
-  articleSection({id: 'introduction', title: 'A listening list, not a history.', bodyHtml: join(intro), className: 'article-intro'}),
+  articleSection({id: 'introduction', title: 'From “Good Life” to “Finally”.', bodyHtml: join(intro), className: 'article-intro'}),
   articleSection({id: 'method', title: 'The records at a glance.', bodyHtml: join(method) + glanceTable}),
   records,
   articleSection({id: 'before-1988', title: 'Before 1988, and the other classics.', bodyHtml: join(others) + elsewhereTable}),
```

## best-spotify-playlists-draft.md

```diff
---
+++
@@ -2,13 +2,13 @@

 ## Answer

-The best Spotify playlists have an identifiable point of view. KEXP's New This Week is the quickest route into independent radio's current rotation; Pitchfork and Pigeons & Planes compress a week of music writing into something playable; Four Tet and Bicep treat a playlist like an open record bag. For electronic music, Altar, Toolroom and UKF each stay in a recognisable lane, while the two thecatrave lists below move between the cracks. These twelve picks are arranged by what they help you hear, not by follower count. Every player gives you a short preview, with a link to open the full playlist in Spotify.
+The best Spotify playlists have an identifiable point of view. KEXP's New This Week is the quickest route into independent radio's current rotation; Pitchfork and Pigeons & Planes compress a week of music writing into something playable; Four Tet and Bicep treat a playlist like an open record bag. For electronic music, Altar, Toolroom and UKF each stay in a recognisable lane, while my two thecatrave lists range across breaks, house and techno. The twelve picks below cover new releases, artist favourites and label selections. Every player gives you a short preview, with a link to open the full playlist in Spotify.

 ## Introduction

-Spotify already knows how to give you more of what you played yesterday. That is useful, but it is not the only job a playlist can do. A good curator can make a leap the recommendation feed would avoid, put a small record beside a famous one, or hold one scene in focus long enough for its details to emerge.
+A playlist can introduce you to a station’s latest rotation or the records a DJ takes to a club. Following a curator gives you a reason to return: you get to know their taste and hear what they choose next.

-This list favours playlists with a person, station, publication or label behind them. Some update every week. Others are long, unruly archives that become more useful as they grow. Human choices are not automatically better, but you can hear the argument behind them.
+This list favours playlists with a person, station, publication or label behind them. Some update every week. Others are long, unruly archives that become more useful as they grow. The curator’s name gives you somewhere to look for more music, whether that is a radio schedule, a review or another DJ set.

 ## How these playlists were chosen

@@ -20,7 +20,7 @@

 ### KEXP: New This Week

-KEXP is a Seattle listener-supported station with decades of practice turning a broadcast schedule into a point of view. New This Week is the useful compressed version: recent records crossing indie rock, soul, hip-hop, electronic music and whatever else has entered the station's rotation. Use it when you want one current list without surrendering the choice to a personalised feed.
+KEXP is a Seattle listener-supported station with decades of practice turning a broadcast schedule into a point of view. New This Week is the useful compressed version: recent records crossing indie rock, soul, hip-hop, electronic music and whatever else has entered the station's rotation. Use it for a broad selection of new releases from the station.

 ### Pitchfork's Best New Music

@@ -32,17 +32,17 @@

 ### GemsOnVHS Monthly Playlist

-GemsOnVHS is known for filming country, folk and roots musicians in plain rooms, porches and fields rather than treating discovery as a stream of release-day assets. The monthly playlist carries that taste into Spotify. It is the outlier here, and a good reset after several hours of electronic music or chart-facing new releases.
+GemsOnVHS is known for filming country, folk and roots musicians in plain rooms, porches and fields for its video sessions. The monthly playlist brings those country, folk and roots selections to Spotify. It is the outlier here, and a good reset after several hours of electronic music or chart-facing new releases.

 ## Best electronic and dance Spotify playlists

 ### Rare Electronic Music, by thecatrave

-I curate this one, so the conflict is stated up front. Rare Electronic Music is the broadest version of thecatrave's club taste: breaks, techno, leftfield house, hard turns and records heard at raves that do not fit one clean genre shelf. The opening run currently moves from FUCK!LACRÈME to Skin On Skin and ATRIP. It earns a place here for the same reason as the artist lists below: the selections belong to a recognisable listening history rather than a mood keyword.
+I curate Rare Electronic Music. Rare Electronic Music is the broadest version of thecatrave's club taste: breaks, techno, leftfield house, hard turns and records heard at raves that do not fit one clean genre shelf. The opening run currently moves from FUCK!LACRÈME to Skin On Skin and ATRIP. These are records from my own listening and nights out.

 ### Emotional Electronic Music, by thecatrave

-The second thecatrave playlist has a narrower test. Melody and emotional weight matter, but the tracks still need enough physical movement to survive outside headphones. Patrick Holland, Public Memory and a KETTAMA mix lead the current version; later entries move through liquid drum and bass, Skream, dBridge and softer club records without turning into background music.
+My second playlist concentrates on melodic electronic music with a club rhythm. Patrick Holland, Public Memory and a KETTAMA mix lead the current version; later entries move through liquid drum and bass, Skream, dBridge and softer club records without turning into background music.

 ### Feel My Bicep

@@ -54,11 +54,11 @@

 ### Altar

-Altar is Spotify editorial, the one exception to the human-curator rule on this list. It is one of the platform's clearer electronic propositions: contemporary club music that sits outside the mainstage EDM lane, with alternative pop and experimental production allowed into the room. Use it as a current snapshot, not an archive.
+Altar is selected by Spotify’s editorial team. It is one of the platform's clearer electronic propositions: contemporary club music that sits outside the mainstage EDM lane, with alternative pop and experimental production allowed into the room. Use it to follow current releases.

 ### Toolroom Tech House

-Toolroom's playlist does exactly what a label-led list should do. It stays close to the records the label understands: functional house, rolling basslines and tracks designed for a busy room. It will not explain the whole of house music, but it makes a reliable weekly check on one working part of it.
+Toolroom's playlist does exactly what a label-led list should do. It stays close to the records the label understands: functional house, rolling basslines and tracks designed for a busy room. Check it for new releases in that style.

 ### Danny L Harle's HUGE PLAYLIST

@@ -70,7 +70,7 @@

 ## Which Spotify playlist should you choose?

-Start with the curator, not the follower count. A station playlist is useful when you want a changing release feed. A publication list lets you connect songs to reviews. An artist playlist exposes influences and records carried into DJ sets. A label playlist stays narrower, but that narrowness is the point.
+Choose a curator whose selection suits what you want to hear. A station playlist is useful when you want a changing release feed. A publication list lets you connect songs to reviews. An artist playlist exposes influences and records carried into DJ sets. A label playlist concentrates on its releases and related artists.

 Save one list that updates often and one long archive that does not need to. The first keeps you current; the second lets you enter somewhere other than the top. If you want an hour with an actual sequence rather than a list on shuffle, go to [live DJ sets](/live-dj-sets) or let [the Selector](/selector) choose a set at random.
```

## build-best-spotify-playlists-article.mjs

```diff
---
+++
@@ -143,12 +143,12 @@
   articleHero({
     kicker: 'Spotify playlists',
     title: 'The best Spotify playlists worth following',
-    deck: 'Twelve playlists with an identifiable point of view, arranged by what they help you hear rather than how many followers they have.',
+    deck: 'Twelve playlists for new releases, DJ favourites and label selections, from KEXP and Four Tet to Toolroom and UKF.',
     readingTime, dateModified, dateLabel,
     summaryHtml: infoBanner({label:'Best Spotify playlists', bodyHtml:inline(answer[0]), className:'article-summary'}),
     tocItems
   }),
-  articleSection({id:'introduction', title:'A playlist should reveal a listener.', bodyHtml:introHtml, className:'article-intro'}),
+  articleSection({id:'introduction', title:'Follow the people choosing the music.', bodyHtml:introHtml, className:'article-intro'}),
   articleSection({id:'criteria', title:'How these playlists were chosen.', bodyHtml:join(criteria)}),
   articleSection({id:'new-music', title:'Best Spotify playlists for finding new music.', bodyHtml:renderPlaylistList('Best Spotify playlists for finding new music', overallMeta)}),
   articleSection({id:'electronic', title:'Best electronic and dance Spotify playlists.', bodyHtml:renderPlaylistList('Best electronic and dance Spotify playlists', electronicMeta)}),
```

## best-house-music-playlists-spotify-draft.md

```diff
---
+++
@@ -6,7 +6,7 @@

 ## Introduction

-"House playlist" can mean Chicago records, vocal garage, deep house, tech house or a pop-dance feed with a four-on-the-floor kick. A useful recommendation names the lane and the curator, then lets the reader hear enough to decide.
+"House playlist" can mean Chicago records, vocal garage, deep house, tech house or a pop-dance feed with a four-on-the-floor kick. The playlists below cover those differences, with previews to help you choose.

 The best house playlists on Spotify come from its editorial team, established labels and working DJs. A house music playlist on Spotify can change quickly, so their order here follows the kind of listening they support. For a broad cross-genre list, use [The Best Spotify Playlists](/best-spotify-playlists). For the history behind the music, start with [What Is House Music?](/house-music-guide).

@@ -28,7 +28,7 @@

 ### Housewerk NYE by Honey Dijon

-Honey Dijon's Housewerk NYE playlist stretches from disco and funk into current house. It is the most personal selection in this group, running from disco and funk into current house.
+Honey Dijon's Housewerk NYE playlist stretches from disco and funk into current house. Her selection puts those older records alongside the house she plays today.

 ## Current house and label filters

@@ -64,15 +64,15 @@

 ## thecatrave playlists: house, techno and beyond

-These final two playlists are mine. Neither is a pure house playlist, so they are presented as cross-genre routes rather than independent house recommendations. Both contain techno and house-adjacent records alongside breaks, bass music and other electronic styles.
+I curate these final two playlists. Both put house and techno alongside breaks, bass music and other electronic styles.

 ### Rare Electronic Music

-Rare Electronic Music is the broader and harder of the two. It moves through breaks, techno, leftfield house and rave records that do not fit one clean genre shelf. Start here when the edges between house and techno are more interesting than a tightly filtered subgenre feed.
+Rare Electronic Music is the broader and harder of the two. It moves through breaks, techno, leftfield house and rave records that do not fit one clean genre shelf. Start here for a harder selection that moves between house and techno.

 ### Emotional Electronic Music

-Emotional Electronic Music uses melody and emotional weight as its filter, but the tracks still need enough physical movement to work outside headphones. House and techno appear beside liquid drum and bass, UK bass and softer club records, making it the less rigid and more reflective route.
+Emotional Electronic Music concentrates on melodic records with a club rhythm. House and techno appear beside liquid drum and bass, UK bass and softer club records, making it the less rigid and more reflective route.

 ## Which house playlist should you choose?
```

## best-soundcloud-dj-mixes-draft.md

```diff
---
+++
@@ -2,11 +2,11 @@

 ## Answer

-The best SoundCloud DJ mixes come from selectors and series that plan a mix with care. Start with Wata Igarashi for psychedelic techno, Ogazón for patient house and techno, DJ Python for low-slung rhythm, Djrum for breaks and jungle, or SHERELLE when you want the pace pushed hard. The eight editorial selections come from the accounts that commissioned or published them. A ninth, clearly disclosed mix by thecatrave closes the page.
+For the best SoundCloud DJ mixes, start with the Recognise and Dekmantel Podcast series. Start with Wata Igarashi for psychedelic techno, Ogazón for patient house and techno, DJ Python for low-slung rhythm, Djrum for breaks and jungle, or SHERELLE when you want the pace pushed hard. The eight editorial selections come from the accounts that commissioned or published them. My own thecatrave mix follows the eight recommendations.

 ## Introduction

-SoundCloud still suits the DJ mix better than most streaming platforms. A mix can sit on an artist or label page, gather a tracklist in the comments and remain available long after a radio broadcast disappears. What it gives a listener is the way a selector joins one record to the next.
+SoundCloud still suits the DJ mix better than most streaming platforms. A mix can sit on an artist or label page, gather a tracklist in the comments and remain available long after a radio broadcast disappears. You can follow the selections through a tracklist and return to a transition you want to hear again.

 These SoundCloud mixes range from hypnotic techno to fast, rhythmically restless selections. Every one of these DJ mixes on SoundCloud comes from a named series. The list is deliberately cross-genre. The separate guide to [the best techno mixes](/best-techno-mixes) stays inside techno, while [Live DJ Sets](/live-dj-sets) covers the platforms that film the booth.

@@ -14,7 +14,7 @@

 The order follows a listening route: begin with house and techno, move into stranger rhythmic territory, then finish with mixes that accelerate.

-Popularity did not decide the list. A useful mix has a point of view you can hear in the transitions, whether that means Ogazón holding a groove for longer than expected or Djrum changing tempo without turning the mix into a demonstration reel.
+Ogazón gives house and techno grooves time to settle. Djrum changes tempo as he moves between spacious electronics and jungle. Choose according to how much movement you want in the mix.

 ## House, techno and the space between

@@ -24,11 +24,11 @@

 [Embed: Wata Igarashi]

-It is the clearest first choice here for someone who already likes techno but wants more depth than a run of obvious festival records.
+Listen for the small changes in percussion and texture.

 ### Ogazón, Recognise 096

-Ogazón digs through house and techno with the patience of a resident DJ. The mix is hypnotic because the records share a physical swing, not because everything sits at one intensity.
+Ogazón digs through house and techno with the patience of a resident DJ. The records share a swing while the intensity changes.

 [Embed: Ogazon]

@@ -48,7 +48,7 @@

 [Embed: Doudou MD]

-The mix makes sense of the overlap between house and techno that genre menus usually hide. It sounds like one record bag, with no hard division between categories.
+House and techno share the selection, with the drums carrying the changes between them.

 ## Breaks, bass and leftfield routes

@@ -84,15 +84,15 @@

 Footwork and jungle sit side by side here, and the mix moves between their different rhythmic grids.

-## One more mix, with disclosure
+## A mix by thecatrave

 ### thecatrave, I Like to Smoke in Silence After Raves

-I made this mix, so I am not calling it one of the best or pretending it belongs to an independent list. I can say this without hedging: it is worth your time, 100%.
+I made this mix over about four months, arranging 30 tracks through breaks, garage, bass music, techno and rave.

 [Embed: thecatrave]

-The set took about four months to arrange. Its 30 tracks move through breaks, garage, bass music, techno and rave as one long arc, which makes it a natural final stop after the faster, broken-rhythm mixes above.
+Try it after Djrum or SHERELLE if you want to keep listening to broken rhythms.

 ## Which SoundCloud DJ mix should you play first?
```

## build-best-soundcloud-dj-mixes-article.mjs

```diff
---
+++
@@ -73,17 +73,17 @@
   {id:'criteria', label:'Find a mix to start with'},
   {id:'house-techno', label:'House, techno and the space between'},
   {id:'breaks-bass', label:'Breaks, bass and leftfield routes'},
-  {id:'personal-pick', label:'One more mix, with disclosure'},
+  {id:'personal-pick', label:'A mix by thecatrave'},
   {id:'choose', label:'Which mix should you play first?'}
 ];
 const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;
 const articleHtml = [
-  articleHero({kicker:'SoundCloud DJ mixes', title:'The best SoundCloud DJ mixes worth hearing', deck:'Eight editorial selections with a clear point of view, plus one personal pick by thecatrave with the relationship stated plainly.', readingTime, dateModified, dateLabel, summaryHtml:infoBanner({label:'Best SoundCloud DJ mixes', bodyHtml:inline(answer[0]), className:'article-summary'}), tocItems}),
-  articleSection({id:'introduction', title:'A mix should make an hour mean something.', bodyHtml:join(intro), className:'article-intro'}),
+  articleHero({kicker:'SoundCloud DJ mixes', title:'The best SoundCloud DJ mixes worth hearing', deck:'Eight mixes from DJ Mag and Dekmantel, from Wata Igarashi’s techno to SHERELLE’s footwork and jungle, followed by a mix of my own.', readingTime, dateModified, dateLabel, summaryHtml:infoBanner({label:'Best SoundCloud DJ mixes', bodyHtml:inline(answer[0]), className:'article-summary'}), tocItems}),
+  articleSection({id:'introduction', title:'Finding mixes on SoundCloud.', bodyHtml:join(intro), className:'article-intro'}),
   articleSection({id:'criteria', title:'Find a mix to start with.', bodyHtml:join(criteria)}),
   articleSection({id:'house-techno', title:'House, techno and the space between.', bodyHtml:renderMixSection('House, techno and the space between')}),
   articleSection({id:'breaks-bass', title:'Breaks, bass and leftfield routes.', bodyHtml:renderMixSection('Breaks, bass and leftfield routes')}),
-  articleSection({id:'personal-pick', title:'One more mix, with disclosure.', bodyHtml:renderMixSection('One more mix, with disclosure')}),
+  articleSection({id:'personal-pick', title:'A mix by thecatrave.', bodyHtml:renderMixSection('A mix by thecatrave')}),
   articleSection({id:'choose', title:'Which SoundCloud DJ mix should you play first?', bodyHtml:join(choosing)}),
   authorCard({filled:true}),
   articleSources({bodyHtml:`<ul>${sources}</ul>`}),
```

## best-techno-mixes-draft.md

```diff
---
+++
@@ -2,7 +2,7 @@

 ## Answer

-The best techno mixes show what a DJ does with the genre over time, not how hard one drop lands. Juan Atkins and Robert Hood make the Detroit continuum audible; Jeff Mills and Surgeon use fast, precise changes to keep machine rhythm alive; DJ Stingray pulls electro into the same conversation. Ben Klock, Helena Hauff, Wata Igarashi, Rødhåd and Fadi Mohem show how different the European and Japanese branches can sound. The ten recordings below come from official broadcaster channels.
+The best techno mixes give you reasons to follow the changes between records. Juan Atkins and Robert Hood make the Detroit continuum audible; Jeff Mills and Surgeon use fast, precise changes to keep machine rhythm alive; DJ Stingray pulls electro into the same conversation. Ben Klock, Helena Hauff, Wata Igarashi, Rødhåd and Fadi Mohem show how different the European and Japanese branches can sound. The ten recordings below come from official broadcaster channels.

 ## Introduction

@@ -12,7 +12,7 @@

 ## What makes a techno mix essential?

-Technical neatness is not enough. A mix earns another listen when the records form an argument, the energy has shape, and the DJ can change direction without losing the thread. That may mean Juan Atkins letting funk remain inside techno, Surgeon cutting between harder textures, or Wata Igarashi making small tonal shifts carry a mix.
+The mixes here take different approaches to rhythm and pacing. That may mean Juan Atkins letting funk remain inside techno, Surgeon cutting between harder textures, or Wata Igarashi making small tonal shifts carry a mix.

 The recordings are not ranked. They cover different uses and lineages, and each comes from the official YouTube channel of Mixmag, DJ Mag, Boiler Room or HÖR.

@@ -20,11 +20,11 @@

 ### Juan Atkins, Mixmag Live, 2015

-Juan Atkins plays techno as part of a longer Detroit machine-music continuum. The set keeps funk and electro close to the surface, which matters when later European recordings make the kick drum feel like the whole genre.
+Juan Atkins plays techno as part of a longer Detroit machine-music continuum. The set keeps funk and electro close to the surface, with space around the rhythm.

 [Embed: Juan Atkins]

-Begin here if the word techno currently means only dark rooms and straight pressure. Atkins leaves more air around the rhythm.
+Begin here for Detroit funk and electro.

 ### Robert Hood, DJ Mag, 2019

@@ -50,7 +50,7 @@

 [Embed: Jeff Mills]

-The result stays lean. Mills keeps replacing information, which makes the set feel faster than its tempo alone would suggest.
+Listen to how quickly Mills introduces and replaces each pattern.

 ### Surgeon, Boiler Room, 2014

@@ -76,7 +76,7 @@

 [Embed: Helena Hauff and L.F.T.]

-The selections are wiry and physical. It is a useful counterweight to techno mixes that polish away every edge.
+Their acid and electro selections keep the sound rough.

 ### Wata Igarashi, HÖR, 2023

@@ -100,13 +100,13 @@

 [Embed: Fadi Mohem]

-The set closes the route because it gathers several earlier ideas without presenting them as retro references.
+Try this after the Detroit and dub techno selections above.

 ## Which techno mix should you play first?

 Choose Juan Atkins for Detroit funk, Robert Hood for minimal techno and DJ Stingray for electro. Jeff Mills and Surgeon suit listeners who want faster decisions and harder texture. Ben Klock and Rødhåd take a longer Berlin route, Helena Hauff and L.F.T. add acid and EBM, Wata Igarashi goes deepest, and Fadi Mohem offers the most balanced current entry point.

-There is no single best techno mix of all time. These essential techno mixes make different arguments about the genre, which is why the route works better unranked. For the records, cities and people behind these approaches, continue with the [techno history guide](/techno-music-guide), [German electronic music](/german-electronic-music) and the guide to [Berlin clubs](/best-clubs-in-berlin).
+There is no single best techno mix of all time. These essential techno mixes range from Detroit funk to minimal and hypnotic techno. For the records, cities and people behind these approaches, continue with the [techno history guide](/techno-music-guide), [German electronic music](/german-electronic-music) and the guide to [Berlin clubs](/best-clubs-in-berlin).

 ## Sources
```

## best-dj-sets-of-all-time-draft.md

```diff
---
+++
@@ -62,13 +62,13 @@

 ### Dixon, Cercle Festival, Ariane stage, 2024

-SBTRKT's “Volca” and Deer Jade's “Firmament” share the selection with Âme's “Asa” and “Shadow of Love.” Those records give this Cercle appearance a useful focus for listeners following Dixon and the music around Innervisions. It is a more recent festival snapshot than the historic farewells elsewhere on the page, with a selection to explore track by track. [Tracklist](https://watchthedj.com/djvideos/dixon-live-at-cercle-festival-2024-ariane-stage).
+SBTRKT's “Volca” and Deer Jade's “Firmament” share the selection with Âme's “Asa” and “Shadow of Love.” Start with those records if you follow Dixon and Innervisions. The set offers a selection of what he was playing in 2024. [Tracklist](https://watchthedj.com/djvideos/dixon-live-at-cercle-festival-2024-ariane-stage).

 ## Techno

 ### Carl Craig, Detroit Classics set, Mixmag Live, 2012

-Moodymann's “Forevernevermore” appears beside Robert Hood's “Alpha,” with Inner City and Joey Beltram also in the selection. Craig's Detroit theme leaves room for both house and techno, and for the records that travelled between scenes. That makes the set a useful introduction to the breadth of his taste: familiar names lead you towards different sides of the music, rather than a run through one producer's catalogue. [Tracklist](https://www.mixesdb.com/w/2012-10-19_-_Carl_Craig_%40_Mixmag_Live%2C_Village_Underground%2C_London).
+Moodymann's “Forevernevermore” appears beside Robert Hood's “Alpha,” with Inner City and Joey Beltram also in the selection. Craig's Detroit theme leaves room for both house and techno, and for the records that travelled between scenes. Start with Moodymann for the house side of the selection, then follow Craig towards Hood and Beltram. [Tracklist](https://www.mixesdb.com/w/2012-10-19_-_Carl_Craig_%40_Mixmag_Live%2C_Village_Underground%2C_London).

 ### Joey Beltram, The Lab NYC, Mixmag, 2018

@@ -92,7 +92,7 @@

 ### Charlotte de Witte, The Lab NYC, Mixmag, 2020

-Her own “Pressure” appears alongside Cadans' “Hose” and SRVD's “Black on Black.” This is a focused introduction to the music she was playing around the early period of KNTXT, with her productions sitting inside a wider techno selection. The office setting makes it an easy performance to follow without the scale of a festival show. [Tracklist](https://watchthedj.com/djvideos/charlotte-de-witte-live-at-mixmag-lab-nyc-2020).
+Her own “Pressure” appears alongside Cadans' “Hose” and SRVD's “Black on Black.” This is a focused introduction to the music she was playing around the early period of KNTXT, with her productions sitting inside a wider techno selection. The film puts the camera close to the decks in Mixmag’s office. [Tracklist](https://watchthedj.com/djvideos/charlotte-de-witte-live-at-mixmag-lab-nyc-2020).

 ## Marathons and closing nights

@@ -142,7 +142,7 @@

 ### Ben UFO, The Lot Radio, 2020

-The selection moves from a Floating Points interpretation of Kenny Wheeler to music by DJ Plead, Monolake and Jamie xx. That range makes the radio setting useful: you can follow a DJ connecting records across different sounds without a single genre setting the terms. It is a good starting point for listeners who enjoy working backwards from an unfamiliar track to the artist who made it. [The published tracklist](https://tube.yt/?v=ECQwhbX4-H0).
+The selection moves from a Floating Points interpretation of Kenny Wheeler to music by DJ Plead, Monolake and Jamie xx. The radio set leaves room for all of those sounds. Follow the tracklist to explore the artists behind the selections. [The published tracklist](https://tube.yt/?v=ECQwhbX4-H0).

 ### DJ Rashad and DJ Spinn, XLR8R Podcast 158, 2010
```

## de/beste-spotify-playlists-draft.md

```diff
---
+++
@@ -6,9 +6,9 @@

 ## Einleitung

-Spotify weiß bereits, wie es dir mehr von dem geben kann, was du gestern gehört hast. Das ist nützlich, aber nicht die einzige Aufgabe einer Playlist. Ein guter Kurator kann einen Sprung wagen, den der Empfehlungsfeed vermeiden würde, eine kleine Platte neben eine berühmte stellen oder eine Szene lange genug im Fokus halten, damit ihre Einzelheiten hörbar werden.
+Eine Playlist kann dich mit der aktuellen Rotation eines Radiosenders oder den Platten eines DJs bekannt machen. Wenn du einem Kurator folgst, lernst du seinen Geschmack kennen und hörst, was er als Nächstes auswählt.

-Diese Auswahl bevorzugt Playlists, hinter denen eine Person, ein Sender, eine Publikation oder ein Label steht. Manche werden jede Woche aktualisiert. Andere sind lange, unordentliche Archive, die mit der Zeit nützlicher werden. Menschliche Entscheidungen sind nicht automatisch besser, aber man kann die Idee hinter der Auswahl hören.
+Diese Auswahl bevorzugt Playlists, hinter denen eine Person, ein Sender, eine Publikation oder ein Label steht. Manche werden jede Woche aktualisiert. Andere sind lange, unordentliche Archive, die mit der Zeit nützlicher werden. Der Name des Kurators führt zu weiteren Sendungen, Rezensionen oder DJ-Sets.

 [Bild: Playlist-Stillleben]

@@ -40,11 +40,11 @@

 ### Rare Electronic Music, von thecatrave

-Diese Playlist kuratiere ich selbst, deshalb steht der Interessenkonflikt gleich am Anfang. Rare Electronic Music ist die breiteste Fassung des Clubgeschmacks von thecatrave: Breaks, Techno, Leftfield House, harte Richtungswechsel und Platten aus Raves, die in kein sauberes Genre-Regal passen. Der Anfang führt derzeit von FUCK!LACRÈME über Skin On Skin bis ATRIP. Sie gehört aus demselben Grund hierher wie die Künstler-Playlists weiter unten: Die Auswahl folgt einer erkennbaren Hörgeschichte, nicht einem Stimmungsbegriff.
+Rare Electronic Music kuratiere ich selbst. Rare Electronic Music ist die breiteste Fassung des Clubgeschmacks von thecatrave: Breaks, Techno, Leftfield House, harte Richtungswechsel und Platten aus Raves, die in kein sauberes Genre-Regal passen. Der Anfang führt derzeit von FUCK!LACRÈME über Skin On Skin bis ATRIP. Die Platten stammen aus meinem eigenen Hören und meinen Nächten in Clubs.

 ### Emotional Electronic Music, von thecatrave

-Die zweite Playlist von thecatrave hat einen engeren Test. Melodie und emotionales Gewicht zählen, doch die Tracks brauchen genug körperliche Bewegung, um auch außerhalb von Kopfhörern zu bestehen. Patrick Holland, Public Memory und ein KETTAMA-Mix eröffnen die aktuelle Fassung. Später geht es durch Liquid Drum and Bass, Skream, dBridge und weichere Clubplatten, ohne zu Hintergrundmusik zu werden.
+Meine zweite Playlist konzentriert sich auf melodische elektronische Musik mit Clubrhythmus. Patrick Holland, Public Memory und ein KETTAMA-Mix eröffnen die aktuelle Fassung. Später geht es durch Liquid Drum and Bass, Skream, dBridge und weichere Clubplatten, ohne zu Hintergrundmusik zu werden.

 ### Feel My Bicep

@@ -56,7 +56,7 @@

 ### Altar

-Altar ist eine redaktionelle Spotify-Playlist, die einzige Ausnahme von der Regel der namentlich erkennbaren Kuratoren auf dieser Liste. Sie ist eines der klareren elektronischen Angebote der Plattform: aktuelle Clubmusik außerhalb der Mainstage-EDM-Spur, mit Platz für Alternative Pop und experimentelle Produktion. Nutze sie als Momentaufnahme, nicht als Archiv.
+Altar wird von Spotifys Redaktion ausgewählt. Sie ist eines der klareren elektronischen Angebote der Plattform: aktuelle Clubmusik außerhalb der Mainstage-EDM-Spur, mit Platz für Alternative Pop und experimentelle Produktion. Nutze sie, um aktuelle Veröffentlichungen zu verfolgen.

 ### Toolroom Tech House
```

## de/best-soundcloud-dj-mixes-draft.md

```diff
---
+++
@@ -8,7 +8,7 @@

 SoundCloud eignet sich für den DJ-Mix noch immer besser als die meisten Streaming-Plattformen. Ein Mix kann auf der Seite eines Künstlers oder Labels liegen, in den Kommentaren eine Tracklist sammeln und lange verfügbar bleiben, nachdem eine Radiosendung verschwunden ist. Was er dem Hörer gibt, ist die Art, wie ein Selektor eine Platte an die nächste fügt.

-Das sind die besten SoundCloud-Mixes, die ich finden konnte und die einen erkennbaren Herausgeber, ein klares musikalisches Argument und genug Spannweite verbinden, um einen weiteren Durchlauf zu lohnen. Jeder dieser DJ-Mixes auf SoundCloud stammt aus einer benannten Reihe. Die Liste geht bewusst über Genres hinweg. Der eigene Guide zu [den besten Techno-Mixes](/de/beste-techno-mixes) bleibt im Techno, während [Live-DJ-Sets](/de/live-dj-sets-ansehen) die Plattformen behandelt, die die Kabine filmen.
+Diese SoundCloud-Mixes reichen von hypnotischem Techno bis zu schnellen, wechselnden Rhythmen. Jeder dieser DJ-Mixes auf SoundCloud stammt aus einer benannten Reihe. Die Liste geht bewusst über Genres hinweg. Der eigene Guide zu [den besten Techno-Mixes](/de/beste-techno-mixes) bleibt im Techno, während [Live-DJ-Sets](/de/live-dj-sets-ansehen) die Plattformen behandelt, die die Kabine filmen.

 ## Wie diese SoundCloud-Mixes ausgewählt wurden

@@ -24,7 +24,7 @@

 [Embed: Wata Igarashi]

-Es ist hier die klarste erste Wahl für jemanden, der Techno schon mag, aber mehr Tiefe will als eine Folge offensichtlicher Festival-Platten.
+Achte auf die kleinen Veränderungen in Percussion und Klang.

 ### Ogazón, Recognise 096

@@ -84,15 +84,15 @@

 Footwork und Jungle stehen hier nebeneinander, und der Mix wechselt zwischen ihren unterschiedlichen rhythmischen Rastern.

-## Ein weiterer Mix, mit Offenlegung
+## Ein Mix von thecatrave

 ### thecatrave, I Like to Smoke in Silence After Raves

-Ich habe diesen Mix gemacht, deshalb nenne ich ihn nicht einen der besten und tue nicht so, als gehöre er in eine unabhängige Liste. Ohne Vorbehalt kann ich sagen: Er ist deine Zeit wert, 100 %.
+Ich habe diesen Mix über etwa vier Monate zusammengestellt. Seine 30 Tracks führen durch Breaks, Garage, Bass Music, Techno und Rave.

 [Embed: thecatrave]

-Das Set zu arrangieren dauerte etwa vier Monate. Seine 30 Tracks bewegen sich durch Breaks, Garage, Bass Music, Techno und Rave als ein langer Bogen, was es zu einem natürlichen letzten Halt nach den schnelleren Mixes mit gebrochenem Rhythmus oben macht.
+Hör ihn nach Djrum oder SHERELLE, wenn du bei gebrochenen Rhythmen bleiben möchtest.

 ## Welchen SoundCloud-DJ-Mix solltest du zuerst spielen?
```

## de/best-techno-mixes-draft.md

```diff
---
+++
@@ -12,7 +12,7 @@

 ## Was macht einen Techno-Mix wesentlich?

-Technische Sauberkeit reicht nicht. Ein Mix verdient einen weiteren Durchlauf, wenn die Platten ein Argument bilden, die Energie eine Form hat und der DJ die Richtung wechseln kann, ohne den Faden zu verlieren. Das kann heißen, dass Juan Atkins den Funk im Techno bleiben lässt, Surgeon zwischen härteren Texturen schneidet oder Wata Igarashi kleine Klangverschiebungen einen Mix tragen lässt.
+Die Mixes hier gehen unterschiedlich mit Rhythmus und Tempo um. Das kann heißen, dass Juan Atkins den Funk im Techno bleiben lässt, Surgeon zwischen härteren Texturen schneidet oder Wata Igarashi kleine Klangverschiebungen einen Mix tragen lässt.

 Die Aufnahmen sind nicht gerankt. Sie decken unterschiedliche Verwendungen und Traditionslinien ab, und jede stammt vom offiziellen YouTube-Kanal von Mixmag, DJ Mag, Boiler Room oder HÖR.

@@ -106,4 +106,4 @@

 Wähl Juan Atkins für Detroiter Funk, Robert Hood für Minimal Techno und DJ Stingray für Electro. Jeff Mills und Surgeon passen zu Hörern, die schnellere Entscheidungen und härtere Textur wollen. Ben Klock und Rødhåd gehen einen längeren Berliner Weg, Helena Hauff und L.F.T. bringen Acid und EBM, Wata Igarashi geht am tiefsten, und Fadi Mohem ist der ausgewogenste aktuelle Einstieg.

-Den einen besten Techno-Mix aller Zeiten gibt es nicht. Diese wesentlichen Techno-Mixes führen verschiedene Argumente über das Genre, weshalb die Route ungerankt besser funktioniert. Für die Platten, Städte und Menschen hinter diesen Ansätzen geht es weiter mit dem [Guide zur Techno-Geschichte](/de/techno-musik), der [deutschen elektronischen Musik](/de/deutsche-elektronische-musik) und dem Guide zu [Berliner Clubs](/de/clubs-berlin).
+Den einen besten Techno-Mix aller Zeiten gibt es nicht. Diese wesentlichen Techno-Mixes reichen von Detroit-Funk bis zu minimalem und hypnotischem Techno. Für die Platten, Städte und Menschen hinter diesen Ansätzen geht es weiter mit dem [Guide zur Techno-Geschichte](/de/techno-musik), der [deutschen elektronischen Musik](/de/deutsche-elektronische-musik) und dem Guide zu [Berliner Clubs](/de/clubs-berlin).
```

## de/best-house-music-playlists-spotify-draft.md

```diff
---
+++
@@ -72,7 +72,7 @@

 ### Emotional Electronic Music

-Emotional Electronic Music nutzt Melodie und emotionales Gewicht als Filter, aber die Tracks brauchen trotzdem genug körperliche Bewegung, um auch außerhalb von Kopfhörern zu funktionieren. House und Techno stehen neben Liquid Drum and Bass, UK Bass und weicheren Clubplatten, was sie zur weniger starren und nachdenklicheren Route macht.
+Emotional Electronic Music konzentriert sich auf melodische Platten mit Clubrhythmus. House und Techno stehen neben Liquid Drum and Bass, UK Bass und weicheren Clubplatten, was sie zur weniger starren und nachdenklicheren Route macht.

 ## Welche House-Playlist solltest du wählen?
```

## fr/meilleures-playlists-spotify-draft.md

```diff
---
+++
@@ -6,9 +6,9 @@

 ## Introduction

-Spotify sait déjà vous donner davantage de ce que vous avez écouté hier. C’est utile, mais ce n’est pas la seule fonction d’une playlist. Un bon programmateur peut faire un saut que le fil de recommandations éviterait, placer un petit disque à côté d’un titre célèbre ou garder une scène au premier plan assez longtemps pour que ses détails apparaissent.
+Une playlist peut vous faire découvrir la programmation récente d’une radio ou les disques qu’un DJ emporte en club. Suivre un programmateur permet de connaître ses goûts et de revenir écouter ses prochains choix.

-Cette sélection privilégie les playlists portées par une personne, une radio, un média ou un label. Certaines changent chaque semaine. D’autres sont de longues archives indisciplinées, de plus en plus utiles à mesure qu’elles grandissent. Les choix humains ne sont pas automatiquement meilleurs, mais on peut entendre le raisonnement derrière eux.
+Cette sélection privilégie les playlists portées par une personne, une radio, un média ou un label. Certaines changent chaque semaine. D’autres sont de longues archives indisciplinées, de plus en plus utiles à mesure qu’elles grandissent. Le nom du programmateur vous mène vers d’autres émissions, critiques ou sets DJ.

 [Image: nature morte playlists]

@@ -40,11 +40,11 @@

 ### Rare Electronic Music, par thecatrave

-Je programme cette playlist, le conflit d’intérêts est donc annoncé tout de suite. Rare Electronic Music est la version la plus large du goût club de thecatrave : breaks, techno, house leftfield, virages brusques et disques entendus en rave qui ne rentrent pas dans un rayon de genre propre. L’ouverture passe actuellement de FUCK!LACRÈME à Skin On Skin puis ATRIP. Elle mérite sa place pour la même raison que les playlists d’artistes ci-dessous : les choix appartiennent à une histoire d’écoute reconnaissable, pas à un mot-clé d’ambiance.
+Je programme Rare Electronic Music. Rare Electronic Music est la version la plus large du goût club de thecatrave : breaks, techno, house leftfield, virages brusques et disques entendus en rave qui ne rentrent pas dans un rayon de genre propre. L’ouverture passe actuellement de FUCK!LACRÈME à Skin On Skin puis ATRIP. Ces disques viennent de mes propres écoutes et de mes soirées en club.

 ### Emotional Electronic Music, par thecatrave

-La seconde playlist de thecatrave suit un critère plus étroit. La mélodie et le poids émotionnel comptent, mais les morceaux doivent conserver assez de mouvement physique pour survivre hors du casque. Patrick Holland, Public Memory et un mix de KETTAMA ouvrent la version actuelle. La suite traverse la liquid drum and bass, Skream, dBridge et des disques de club plus doux sans devenir de la musique de fond.
+Ma seconde playlist se concentre sur la musique électronique mélodique avec un rythme de club. Patrick Holland, Public Memory et un mix de KETTAMA ouvrent la version actuelle. La suite traverse la liquid drum and bass, Skream, dBridge et des disques de club plus doux sans devenir de la musique de fond.

 ### Feel My Bicep

@@ -56,7 +56,7 @@

 ### Altar

-Altar est une playlist éditoriale de Spotify, la seule exception à la règle des programmateurs nommés dans cette liste. Elle fait partie des propositions électroniques les plus claires de la plateforme: de la musique de club contemporaine hors de l’axe EDM de grande scène, avec une place pour l’alternative pop et la production expérimentale. Prenez-la comme un instantané actuel, pas comme une archive.
+Altar est sélectionnée par l’équipe éditoriale de Spotify. Elle fait partie des propositions électroniques les plus claires de la plateforme: de la musique de club contemporaine hors de l’axe EDM de grande scène, avec une place pour l’alternative pop et la production expérimentale. Suivez-la pour les nouveautés.

 ### Toolroom Tech House
```

## fr/best-soundcloud-dj-mixes-draft.md

```diff
---
+++
@@ -84,15 +84,15 @@

 Footwork et jungle se côtoient ici, et le mix passe de l’une à l’autre de leurs grilles rythmiques différentes.

-## Un mix de plus, en toute transparence
+## Un mix de thecatrave

 ### thecatrave, I Like to Smoke in Silence After Raves

-J’ai fait ce mix, donc je ne le présente pas comme l’un des meilleurs et ne prétends pas qu’il appartienne à une liste indépendante. Je peux le dire sans détour : il vaut ton temps, à 100 %.
+J’ai préparé ce mix pendant environ quatre mois. Ses 30 morceaux passent par les breaks, le garage, la bass music, la techno et la rave.

 [Embed: thecatrave]

-Le set a pris environ quatre mois à arranger. Ses 30 morceaux traversent breaks, garage, bass music, techno et rave comme un long arc, ce qui en fait une dernière étape naturelle après les mix à rythme brisé plus rapides ci-dessus.
+Écoute-le après Djrum ou SHERELLE pour continuer avec des rythmes brisés.

 ## Quel mix DJ SoundCloud écouter en premier ?
```

## fr/best-techno-mixes-draft.md

```diff
---
+++
@@ -12,7 +12,7 @@

 ## Qu’est-ce qui fait un mix techno essentiel ?

-La netteté technique ne suffit pas. Un mix mérite une nouvelle écoute quand les disques forment un argument, que l’énergie a une forme et que le DJ peut changer de direction sans perdre le fil. Cela peut vouloir dire Juan Atkins laissant le funk à l’intérieur de la techno, Surgeon coupant entre des textures plus dures ou Wata Igarashi faisant porter un mix par de petits glissements tonals.
+Ces mix abordent le rythme et la progression de façons différentes. Cela peut vouloir dire Juan Atkins laissant le funk à l’intérieur de la techno, Surgeon coupant entre des textures plus dures ou Wata Igarashi faisant porter un mix par de petits glissements tonals.

 Les enregistrements ne sont pas classés. Ils couvrent des usages et des filiations différents, et chacun vient de la chaîne YouTube officielle de Mixmag, DJ Mag, Boiler Room ou HÖR.

@@ -106,4 +106,4 @@

 Choisis Juan Atkins pour le funk de Détroit, Robert Hood pour la techno minimale et DJ Stingray pour l’electro. Jeff Mills et Surgeon conviennent aux auditeurs qui veulent des décisions plus rapides et une texture plus dure. Ben Klock et Rødhåd prennent une route berlinoise plus longue, Helena Hauff et L.F.T. ajoutent acid et EBM, Wata Igarashi va le plus en profondeur et Fadi Mohem offre l’entrée actuelle la plus équilibrée.

-Il n’existe pas de meilleur mix techno de tous les temps. Ces mix techno essentiels défendent des arguments différents sur le genre, ce qui explique pourquoi le parcours fonctionne mieux sans classement. Pour les disques, les villes et les gens derrière ces approches, poursuis avec le [guide de l’histoire de la techno](/fr/techno), la [musique électronique allemande](/fr/musique-electronique-allemande) et le guide des [clubs de Berlin](/fr/boite-de-nuit-berlin).
+Il n’existe pas de meilleur mix techno de tous les temps. Ces mix techno essentiels vont du funk de Detroit à la techno minimale et hypnotique. Pour les disques, les villes et les gens derrière ces approches, poursuis avec le [guide de l’histoire de la techno](/fr/techno), la [musique électronique allemande](/fr/musique-electronique-allemande) et le guide des [clubs de Berlin](/fr/boite-de-nuit-berlin).
```

## fr/best-house-music-playlists-spotify-draft.md

```diff
---
+++
@@ -64,7 +64,7 @@

 ## Les playlists thecatrave : house, techno et au-delà

-Ces deux dernières playlists sont les miennes. Aucune n’est une playlist house pure, elles sont donc présentées comme des routes multi-genres, pas comme des recommandations house indépendantes. Toutes deux contiennent de la techno et des disques proches de la house à côté de breaks, de bass music et d’autres styles électroniques.
+Je programme ces deux dernières playlists. Elles réunissent house et techno, breaks, bass music et d’autres styles électroniques.

 ### Rare Electronic Music

@@ -72,7 +72,7 @@

 ### Emotional Electronic Music

-Emotional Electronic Music prend la mélodie et le poids émotionnel comme filtre, mais les morceaux doivent quand même avoir assez de mouvement physique pour fonctionner hors du casque. House et techno y côtoient la drum and bass liquide, la UK bass et des disques de club plus doux, ce qui en fait la route la moins rigide et la plus contemplative.
+Emotional Electronic Music se concentre sur les disques mélodiques avec un rythme de club. House et techno y côtoient la drum and bass liquide, la UK bass et des disques de club plus doux, ce qui en fait la route la moins rigide et la plus contemplative.

 ## Quelle playlist house choisir ?
```

## content/de/best-soundcloud-dj-mixes.mjs

```diff
---
+++
@@ -26,19 +26,19 @@

   heroKicker: 'SoundCloud-DJ-Mixes',
   heroTitle: 'Die besten SoundCloud-DJ-Mixes, die man gehört haben sollte',
-  deck: 'Acht redaktionelle Auswahlen mit klarem Standpunkt, dazu ein persönlicher Tipp von thecatrave, bei dem die Beziehung offen genannt wird.',
+  deck: 'Acht Mixes von DJ Mag und Dekmantel, von Wata Igarashis Techno bis zu SHERELLEs Footwork und Jungle, gefolgt von einem eigenen Mix.',
   answerLabel: 'BESTE SOUNDCLOUD-DJ-MIXES',
   breadcrumbName: 'Die besten SoundCloud-DJ-Mixes, die man gehört haben sollte',

   answerSection: 'Antwort',
   introSection: 'Einleitung',
-  introTitle: 'Ein Mix sollte eine Stunde bedeutsam machen.',
+  introTitle: 'Mixes auf SoundCloud finden.',

   sections: [
     {id: 'criteria', heading: 'Wie diese SoundCloud-Mixes ausgewählt wurden', title: 'Wie diese SoundCloud-Mixes ausgewählt wurden.', tocLabel: 'Wie diese Mixes ausgewählt wurden'},
     {id: 'house-techno', heading: 'House, Techno und der Raum dazwischen', title: 'House, Techno und der Raum dazwischen.', tocLabel: 'House, Techno und dazwischen', subsections: ['entry-wata-igarashi-recognise-081', 'entry-ogazon-recognise-096', 'entry-sedef-adasi-recognise', 'entry-doudou-md-recognise-078']},
     {id: 'breaks-bass', heading: 'Breaks, Bass und leftfielde Routen', title: 'Breaks, Bass und leftfielde Routen.', tocLabel: 'Breaks, Bass und Leftfield', subsections: ['entry-objekt-dekmantel-podcast-116', 'entry-djrum-dekmantel-podcast-267', 'entry-dj-python-dekmantel-podcast-208', 'entry-sherelle-dekmantel-podcast-285']},
-    {id: 'personal-pick', heading: 'Ein weiterer Mix, mit Offenlegung', title: 'Ein weiterer Mix, mit Offenlegung.', tocLabel: 'Ein weiterer Mix', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
+    {id: 'personal-pick', heading: 'Ein Mix von thecatrave', title: 'Ein Mix von thecatrave.', tocLabel: 'Ein weiterer Mix', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
     {id: 'choose', heading: 'Welchen SoundCloud-DJ-Mix solltest du zuerst spielen?', title: 'Welchen SoundCloud-DJ-Mix solltest du zuerst spielen?', tocLabel: 'Welchen Mix zuerst?'}
   ],
```

## content/de/best-house-music-playlists-spotify.mjs

```diff
---
+++
@@ -32,7 +32,7 @@

   answerSection: 'Antwort',
   introSection: 'Einleitung',
-  introTitle: 'Wähl erst die Spur, dann die Playlist.',
+  introTitle: 'Die Menschen hinter den Playlists.',

   sections: [
     {id: 'criteria', heading: 'Wie diese House-Playlists ausgewählt wurden', title: 'Wie diese House-Playlists ausgewählt wurden.', tocLabel: 'Wie sie ausgewählt wurden'},
```

## content/fr/best-soundcloud-dj-mixes.mjs

```diff
---
+++
@@ -26,19 +26,19 @@

   heroKicker: 'Mix DJ SoundCloud',
   heroTitle: 'Les meilleurs mix DJ SoundCloud à écouter',
-  deck: 'Huit sélections éditoriales avec un vrai point de vue, plus un choix personnel de thecatrave dont le lien est énoncé clairement.',
+  deck: 'Huit mix de DJ Mag et Dekmantel, de la techno de Wata Igarashi au footwork et à la jungle de SHERELLE, suivis de mon propre mix.',
   answerLabel: 'MEILLEURS MIX DJ SOUNDCLOUD',
   breadcrumbName: 'Les meilleurs mix DJ SoundCloud à écouter',

   answerSection: 'Réponse',
   introSection: 'Introduction',
-  introTitle: 'Un mix doit donner du sens à une heure.',
+  introTitle: 'Trouver des mix sur SoundCloud.',

   sections: [
     {id: 'criteria', heading: 'Comment ces mix SoundCloud ont été choisis', title: 'Comment ces mix SoundCloud ont été choisis.', tocLabel: 'Comment ces mix ont été choisis'},
     {id: 'house-techno', heading: 'House, techno et l’espace entre les deux', title: 'House, techno et l’espace entre les deux.', tocLabel: 'House, techno et l’entre-deux', subsections: ['entry-wata-igarashi-recognise-081', 'entry-ogazon-recognise-096', 'entry-sedef-adasi-recognise', 'entry-doudou-md-recognise-078']},
     {id: 'breaks-bass', heading: 'Breaks, bass et pistes leftfield', title: 'Breaks, bass et pistes leftfield.', tocLabel: 'Breaks, bass et leftfield', subsections: ['entry-objekt-dekmantel-podcast-116', 'entry-djrum-dekmantel-podcast-267', 'entry-dj-python-dekmantel-podcast-208', 'entry-sherelle-dekmantel-podcast-285']},
-    {id: 'personal-pick', heading: 'Un mix de plus, en toute transparence', title: 'Un mix de plus, en toute transparence.', tocLabel: 'Un mix de plus', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
+    {id: 'personal-pick', heading: 'Un mix de thecatrave', title: 'Un mix de thecatrave.', tocLabel: 'Un mix de plus', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
     {id: 'choose', heading: 'Quel mix DJ SoundCloud écouter en premier ?', title: 'Quel mix DJ SoundCloud écouter en premier ?', tocLabel: 'Quel mix écouter d’abord ?'}
   ],
```

## content/fr/best-house-music-playlists-spotify.mjs

```diff
---
+++
@@ -32,7 +32,7 @@

   answerSection: 'Réponse',
   introSection: 'Introduction',
-  introTitle: 'Choisis la voie avant la playlist.',
+  introTitle: 'Les personnes derrière les playlists.',

   sections: [
     {id: 'criteria', heading: 'Comment ces playlists house ont été choisies', title: 'Comment ces playlists house ont été choisies.', tocLabel: 'Comment elles ont été choisies'},
```

## best-techno-tracks-draft.md

```diff
---
+++
@@ -6,7 +6,7 @@

 ## Introduction

-This is a list of tracks. For the history of the genre, read the [techno music guide](/techno-music-guide). For recorded DJ sets, read [best techno mixes](/best-techno-mixes). Here every entry is one record with a player under it. The records are grouped by scene, oldest first within each group.
+The records are grouped by scene, oldest first within each group. Listen below, then explore the [techno music guide](/techno-music-guide) for their history or [best techno mixes](/best-techno-mixes) to hear DJs at work.

 ## Nine different approaches to techno

@@ -90,7 +90,7 @@

 For Berlin, go to Phylyps Trak and Subzero. For the newest record here, go straight to Doppler.

-## A break from the list
+## Music by thecatrave

 No Genre No Problem was my first finished track. You can hear it below.
```

## build-best-techno-tracks-article.mjs

```diff
---
+++
@@ -147,7 +147,7 @@
   {id: 'berlin-dub-techno', heading: 'Berlin and dub techno'},
   {id: 'underground-resistance', heading: 'Underground Resistance and Doppler'},
   {id: 'play-first', heading: 'Which techno track should you play first?'},
-  {id: 'break-from-list', heading: 'A break from the list'}
+  {id: 'break-from-list', heading: 'Music by thecatrave'}
 ].map(s => ({...s, title: s.heading.endsWith('?') ? s.heading : `${s.heading}.`}));

 const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
```

## best-trance-tracks-draft.md

```diff
---
+++
@@ -12,7 +12,7 @@

 The list is in the order the records came out, not a countdown. Trance has no official chart of its own, so no single ranking settles which record is best. The chart figures show commercial reach; the A State of Trance votes show the preferences of that programme’s audience.

-This is a list of records. The [trance guide](/trance-guide) covers a different question: what trance is, where it started in Frankfurt, who the artists are and how the music splits into styles. For the history, read that first.
+The [trance guide](/trance-guide) follows the music’s history in Frankfurt, its artists and its different styles.

 ## Chart hits and fan favourites

@@ -83,13 +83,13 @@

 Source: Official Charts. The table covers nine singles and distinguishes original release years from later UK releases and remixes.

-## A break from the list: two tracks of mine
+## Two tracks of my own

-Neither is a trance record, and neither belongs to the list above. They are here because this site is made by someone who makes music.
+You can hear two of my own electronic tracks below.

-[[own: berlin-race-1909 | Named after Berlin, the city whose E-Werk club gave the For an Angel remix its name: dub techno space with drums underneath. Not trance. My own track.]]
+[[own: berlin-race-1909 | Named after Berlin, the city whose E-Werk club gave the For an Angel remix its name: dub techno space with drums underneath. A track of my own.]]

-[[own: no-genre-no-problem | Glitch, IDM and ambient, nowhere near the main stage. Not trance. My own track.]]
+[[own: no-genre-no-problem | Glitch, IDM and ambient, nowhere near the main stage. A track of my own.]]

 ## FAQ
```

## build-best-trance-tracks-article.mjs

```diff
---
+++
@@ -110,7 +110,7 @@
   {id: 'chart-years', heading: 'The chart years: the best trance tunes of 1998 and 1999'},
   {id: 'superstar-years', heading: 'The superstar DJ years: 2004 to 2012'},
   {id: 'best-ever', heading: 'Which is the best trance track ever?'},
-  {id: 'a-break', heading: 'A break from the list: two tracks of mine'}
+  {id: 'a-break', heading: 'Two tracks of my own'}
 ];
 const h2 = s => /[?.]$/.test(s) ? s : `${s}.`;
 const bodySections = sections.map(s => articleSection({id: s.id, title: h2(s.heading), bodyHtml: render(getSection(s.heading))}));
```

## best-electronic-albums-draft.md

```diff
---
+++
@@ -97,7 +97,7 @@

 ## Where to go next

-If one album sent you to a scene, the guides here follow the scenes: [house](/house-music-guide), [techno](/techno-music-guide), [trance](/trance-guide), [UK electronic music](/uk-electronic-music-evolution) and [German electronic music](/german-electronic-music). For listening to DJs rather than albums, see [the best DJ sets of all time](/best-dj-sets-of-all-time).
+Explore the scenes behind these albums in the guides to [house](/house-music-guide), [techno](/techno-music-guide), [trance](/trance-guide), [UK electronic music](/uk-electronic-music-evolution) and [German electronic music](/german-electronic-music). For listening to DJs rather than albums, see [the best DJ sets of all time](/best-dj-sets-of-all-time).

 ## FAQ
```

## Pre-push verification

Built the Digging edits and translations in an isolated checkout. Banned-phrase, media, SEO, listening and component audits pass. Spotify date expectation updated. Keyword audit still reports nine existing failures in untouched club guides; the defects audit still expects old London copy. Full browser suite not rerun. Local preview inspected. Unrelated working edits are excluded.
