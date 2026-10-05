# Editorial review: best-clubs-in-vienna.html (5 October 2026)

Verdict: ready for the owner's read. Nothing committed or pushed. Reviews run: facts, humanizer, SEO.

## 1. Facts

Claim ledger (sources read live on 2026-10-05 unless stated). "Left out" means unresolved and not in the copy.

| Claim in page | Source | Status |
|---|---|---|
| Pratersauna: club from July 2009 in a 1965 sauna building; closed early 2016; reopened 29 Apr 2016 (Ho's Dots Group); Prater Nostra GmbH from March 2025 | de.wikipedia | verified |
| Stopped operating mid-Dec 2025; rent suit EUR 232,467.21; insolvency 21 Jan 2026 | Falter, Resident Advisor (RA 84515), Groove | verified |
| Reopened 23 Jul 2026 as outdoor Urban Pool Club under Nikolaus Gutmann, Thu to Sun noon to 10 p.m., EUR 7, no techno, to end Sept 2026, no indoor club planned | edison, heute.at (27 Jul 2026), zwischenbruecken.at | verified, status after Sept 2026 unconfirmed and stated as such |
| Building owner will not pursue alternatives | RHC Invest statement as reported by the same outlets | verified |
| Flex: NYE 1989/90 at Arndtstrasse, Aegidigasse squat people, U4 tunnel 1 Oct 1995, cafe 2007; Ellen Allien and Jeff Mills listed; club events 16+ in Oct 2026 programme | Austria-Forum, Wikipedia, flex.at | verified |
| Grelle Forelle: Dec 2011, Spittelauer Lande 12, Kitchenfloor and Clubfloor, Lambda Labs, 21+, no photo/video/audio | grelleforelle.com | verified |
| HOR ON TOUR Vienna at Grelle Forelle with MIXED VIENNA, Riana Holley, 3 June 2026 | YouTube oEmbed title and description | verified |
| Das Werk: association 2006 (Stefan Sturzer), first venue Neulerchenfelder Strasse, arches since spring 2013 | meinbezirk (31 Aug 2021), Vice, wien.info | milestones verified; single opening year left out (2006 vs 2010 conflict) |
| Fluc: opened 1 May 2002 at Praterstern, about 85 sq m; reopened 1 Apr 2006 with Fennesz, 21 containers, Fluc_Wanne; "Dance as Utopia"; Mon to Sat, closed Sunday | vienna.at, Google Arts & Culture | verified |
| SASS: Karlsplatz 1, since 2007, crystal ceiling, gold leaf, Pro Performance, 18+ with ID, Thu to Sat, Sunday Morgengymnastik | search summaries, all-inn.at | single-source level; times and price left out |
| Volksgarten Pavillon 1951 (Haerdtl); Das Techno Cafe founded by Sandra Kendl 9 Jan 1996 at Lokal Scheffel, moved after four months; Tuesdays; 30th season 28 Apr to 8 Sep 2026; open door | de.wikipedia, vormagazin.at, 1000thingsmagazine | verified |
| Club U: Otto-Wagner pavilion basement at Karlsplatz, Wed to Sat | search summary | partly verified; kept as one clause |
| Kruder & Dorfmeister formed 1993; G-Stoned EP 1993; K&D Sessions !K7 1998 | Wikipedia | verified; G-Stone label year left out |
| Mego 1994 (Bauer, Pieper, Meininger; Rehberg from 1995); closed 2005; Editions Mego 2006; Endless Summer 2001, Pitchfork 9.4 | Wikipedia | verified |
| Dorian Concept: Joined Ends, Ninja Tune, 20 Oct 2014; Boiler Room 16 Sep 2014 with Sixtus Preiss, Mieux, Cid Rim b2b The Clonious | Vice, search summary | venue of the session omitted |
| Boiler Room Sophienalpe, June 2019 line-up; Draussen, Talpagasse 8, Aug 2021 line-up | YouTube descriptions, Boiler Room | verified |

Left out: capacities (Grelle Forelle 500 to 700 conflict; none for Flex, SASS), club opening hours from aggregators, Das Werk age limit, Donau, Celeste, O, Praterdome, PRST, The Loft, Camera Club, Cabaret Fledermaus, U4 (partly verified, not needed), Fennesz Boiler Room set (city unconfirmed), Peter Kruder's exact date (2015 only). No drum and bass, jungle or breaks copy. No production teaching, no files.

Grep evidence: draft has no em/en dashes, no "full"/"complete", no "rather than", no "drum", "jungle", "breakbeat".

## 2. Humanizer

Tells found and fixed: bold labels on the nightlife list (now plain "Area: ..." items); "The city has its own back catalogue behind the club rooms" (now "Vienna has recorded history beyond its club rooms"). Earlier manual fixes before the pass: unsupported "baroque-looking hall", "half under the bridge", "canal wall as terrace", "oldest running night" superlative, "most of the city's techno happens", "often skipped clubs". No not-X-but-Y, one-line closers or dash use remain.

## 3. SEO

Keywords map in keywords/vienna-clubs.json: best clubs in vienna (1K-10K), vienna clubs (10K-100K, spiky), vienna nightlife (1K-10K), vienna techno clubs (100-1K), all present on the built page (audit-keywords passed). Title 62 characters; description under 160. H2s: "Vienna techno clubs: Grelle Forelle and Das Werk", "Vienna nightlife by area". FAQ questions are non-circular and match the structured data. No cannibalisation: no existing page mentions Vienna.

## Media evidence

- Flex: File:Flex_nacht_DRI.jpg, Sven Gross-Selbeck, GFDL 1.2+ / CC BY-SA 3.0, Commons file page checked; credited in caption; 1000 px webp 117 KB.
- Grelle Forelle: File:Wien_09_Grelle_Forelle_a.jpg, Peter Gugerell, CC0 1.0, Commons file page checked; 1200 px webp 138 KB.
- Six embeds, oEmbed returned a title for each on 2026-10-05; none used on another guide (grepped across *.mjs, *.html, media/*.json).
- No image sits next to an embed; media audit passes (3 of 8 argued sections without media, under the 40% cap).
- Not found: openly licensed images of Das Werk, Fluc, SASS.

## Back-links proposed (not applied)

No published page was edited. Optional later: a sentence in best-clubs-in-europe.html or best-clubbing-cities-in-europe.html pointing to /best-clubs-in-vienna. Neither mentions Vienna today, so there is no before wording to replace, only an addition for the owner to approve.

## Checks run

npm run check:html passed; node audit-all.mjs passed (build + 22 audits); npm run check:layout passed (818 tests); npm run check:links passed (750 links); git diff --check clean; second build left best-clubs-in-vienna.html, feed.xml, sitemap.xml, articles.html and index.html byte-identical (md5 compared). Scoped OG runs: `build-og-cards.py vienna-clubs` and `build-og-cards.py articles`. No browser visual QA was done beyond the layout suite.
## Approved reader and search update, 5 October 2026

The owner approved clarifying in the direct answer that Pratersauna's outdoor day-club operation was a summer 2026 trial through September, not an established current operation. The nightclub closed in December 2025; its status after the summer trial was not confirmed by the sources checked. Source: https://www.falstaff.com/at/news/wiedereroeffnung-als-outdoor-club-neuer-aufguss-fuer-die-pratersauna. Existing club choices, search terms, headings, metadata and anchors remain unchanged. Follow-up review is not independent.
