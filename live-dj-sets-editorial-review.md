# Live DJ Sets: editorial review

Protocol: `ARTICLE-EDITORIAL-REVIEW.md`. Draft `live-dj-sets-draft.md`, generator
`build-live-dj-sets-article.mjs`, research `live-dj-sets-research.md`. Review
date 2026-09-11. Run by the same session that wrote the draft, so it is a
self-review; an independent pass is still owed before the page is called final.

## 1. Verdict

Ready after revisions. The revisions below are applied in the draft; the open
questions in §9 do not block layout.

## 2. What already works

- The primary query is answered in the first block (`LIVE DJ SETS` banner) and
  the practical version of it ("Where can I watch live DJ sets?", PAA) has its
  own closing section.
- One spine through the page: where each broadcaster put the camera, from
  pirate radio to the white-tiled room.
- The numbers section says something no competitor can: Cercle has 2% of
  Boiler Room's set count and 55% of its views; The Lot and Kiosk have more sets
  than Boiler Room and a fraction of the audience.
- Cercle's own upload of its first show (To Van Kao, Derek's living room)
  corrects the usual origin story rather than repeating it.
- No controversy, per the owner. Ownership is owners and dates only.

## 3. Priority revisions (applied)

- **Blocker, fixed.** "fewer views than a single mid-sized Boiler Room upload"
  was false: the four community stations total 4.65M views, Seoul alone about
  4M. Now: fewer than Boiler Room's Solomun set (76.2M) on its own.
- **Major, fixed.** "close to three for every day" overstated 2.62 a day since
  April 2016. Now "more than two and a half".
- **Major, fixed.** Unsourced visual or process claims removed: "four MCs
  passing one microphone", "HÖR uploads each set straight after", "nobody
  outside New York has heard of yet", Kiosk "techno" (source says electronic),
  Ingram House "a tower block".
- **Major, fixed.** Rinse's role in grime and dubstep brought back to the
  source's wording (first exposure for Dizzee Rascal and Wiley; shows for
  Skream, Kode9, Oneman) instead of "first heard beyond a few raves".
- **Major, fixed.** Bandcamp copy made a personal claim about the owner
  ("the first platform for the music I make"); replaced with a statement about
  jungle.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| Rinse on air Sept 1994, Geeneus and Slimzee, Ingram House, Tower Hamlets | fact | Wikipedia: Rinse FM | high | keep |
| Jungle → garage c.1998 → grime/dubstep; ASBO 2005; online 2006; licence June 2010; legal Feb 2011; Rinse France 2014 | fact | Wikipedia: Rinse FM | high | keep |
| Red Light Radio 2010–2020, former brothel, Oudekerksplein, final broadcast 27 June 2020 | fact | Wikipedia; RA news 72625 | high | keep |
| Boiler Room March 2010, Bellville asked Richards to livestream a mix for a magazine; Ustream; Floating Points second show, lost | fact | Wikipedia (Rolling Stone 2014) | high | keep |
| DJ EZ 24 hours Feb 2016, £60,000+; 4:3 2018; festival Peckham 2019; Charli xcx 25,000 RSVPs | fact | Wikipedia (V Magazine) | high | keep |
| DICE 2021; Superstruct Jan 2025 | fact | Wikipedia (Billboard ×2) | high | keep |
| NTS April 2011 Hackney, £5,000, ~60 replies, Nuts To Soup, 700 residents, UMG June 2023 | fact | Wikipedia: NTS Radio | high | keep |
| The Lot 2016, Vaxelaire, 20-ft container, 17 Nassau Ave, 165 residents | fact | Wikipedia; RA 33465; livepeer | high | keep |
| Kiosk Radio 2017, five friends, City of Brussels call, wooden kiosk, Parc Royal | fact | kioskradio.com/about via search snippet | medium | keep; read the About page at next update |
| The Lab "since the early 2010s" | fact | Mixmag snippets: "launched in 2012" vs a "10 years" feature dated 2021 | medium | deliberately unspecific |
| Cercle 2016, Barbolla, living-room first show, Møme Eiffel Tower Oct 2016, Cercle Records Sept 2020 | fact | Wikipedia; Billboard 2019; Cercle's own upload | high | keep |
| Keep Hush: Conybeare and Masters, blog, Soho basement, three people, members propose line-ups | fact | DMY | high | keep; founding year not stated anywhere found, so none given |
| HÖR Aug 2019, Kreuzberg, Itshaky and Mastey (TV.OUT), white tiles, green neon | fact | ADAM Audio, Trifec, Goethe-Institut (snippets; Goethe 403) | medium | keep |
| 99Solutions acquired HÖR, June 2026 | fact | RA news 85346 | high | keep |
| United We Stream: clubs shut 13 March 2020, launch 18 March, 7pm, 2,000+ artists, ~450 locations, ~100 cities in a year | fact | gl-systemhaus; Clubcommission | high | keep |
| Every catalogue figure (counts, views, first uploads, 2.62/day, 4.65M) | fact | selector-data.json, 2026-09-11 | high | keep; typed in the generator |
| "a set at Petra works as something to leave on a television" | interpretation | none | — | labelled "probably" |
| "live set" strictly means performing own music | interpretation | common usage | medium | keep in FAQ |

## 5. SEO preservation

New page, nothing to preserve. Targets present in visible copy (checked by
`audit-keywords.mjs`): live dj sets, live dj set, live sets, what is boiler
room, what is a boiler room set, what is a boiler room party, who owns boiler
room, what does nts stand for. "boiler room set" stays with the best-sets page.

## 6. Coverage gaps

- Twitch as a platform for DJs (dj twitch 1,500, twitch dj 1,100) is not
  covered; it is a streamer audience rather than a broadcaster, and the terms
  were not researched to SERP depth.
- Dekmantel, Beatport, My Analog Journal and the other catalogue channels are
  in the table's catalogue but not the prose. Deliberate: the page is a short
  history, not a directory.

## 7. Cuts or merges

None beyond §3.

## 8. Media actions

- 10 YouTube embeds, each from the platform's own channel, none used on
  best-boiler-room-sets. 1 SoundCloud band (Slimzee, Rinse 2001).
- 3 Commons photographs: Rinse studio 2022, Red Light Radio interior, The Lot
  booth 2022. Kiosk has no photograph: Commons only has the Parc Royal
  bandstand, a different structure.

## 9. Unresolved questions

- The Lab's launch year (2011 or 2012).
- An independent review pass (this one is the writer's own).

## 10. Final acceptance checklist

- Facts: pass after §3 fixes.
- Editorial quality: pass.
- SEO: pass (audit-keywords).
- Media: pass pending the adjacency and layout checks after the build.
- Implementation: pending the full gate.
