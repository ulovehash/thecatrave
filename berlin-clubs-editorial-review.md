# Best clubs in Berlin: editorial review

Page: `best-clubs-in-berlin.html`, built from `berlin-clubs-draft.md` by
`build-berlin-clubs-article.mjs`. Reviewed 2026-09-11 against the approved
decision gate in `berlin-clubs-research.md`. A new URL, so there is no
Search Console preservation inventory.

This review was written by the same session that drafted the page. Stage 6
of the topic research was run by separate agents; this review was not. A
second read by someone who did not write it is still worth having before
publication.

## 1. Verdict

**Ready after revisions.** No factual blocker was found. The first-person
passages (the door, Sisyphos) are the owner's to approve word for word,
because they put words in the owner's mouth. They are shown below. Two
facts are medium confidence and listed in the ledger.

## 2. What already works

- The answer banner names Berghain in its first sentence, which is what the
  "famous" queries want (their parent topic is Berghain), and it names the
  open clubs in one line.
- The history section covers UFO, the Reichsbahnbunker, E-Werk and Ostgut.
  No competitor list read (RA, Time Out, tv-turm) names any of them. This is
  the page's point of difference, and it does not go out of date.
- The door section answers "how to get into berghain" honestly, with no
  formula. Every page in that SERP sells one.
- The status table is dated ("September 2026"), and the generator comment
  says to revisit it every six months. There is no year in the title.
- Wilde Renate is correctly shown as open. Time Out's "closing in 2025" is
  out of date; the lease was extended in December 2025.

## 3. Priority revisions

1. **Major. Owner approval of the first-person wording.** These sentences
   appear on the page as the owner speaking:
   - Door: "My own experience of that door says there is no system. The rules
     people read into it exist in their heads. It is something you feel, and
     not something you can prepare for, and if you are turned away there is
     no reason to go looking for. Everyone who has been turned away has a
     theory. None of the theories get anyone in."
   - FAQ: "in my experience there is no system behind it: you feel it or you
     don't, and there is no point hunting for a reason if you are turned
     away."
   - Sisyphos: "Sisyphos is my favourite club in Berlin, and it is the one on
     this list that least resembles the others."
   - Intro: "It is also written by someone who goes."

   The last two sentences of the door paragraph ("Everyone who has been
   turned away has a theory. None of the theories get anyone in.") and the
   "least resembles the others" clause are inference added by the writer.
   They are not what the owner said. Keep them only if the owner agrees.
2. **Minor. The Sisyphos block carries very little of the owner's voice.**
   The owner gave one fact (favourite club). Anything more, such as what it
   sounds like or which floor, has to come from them. Nothing was invented.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| UFO opened 1988 by the Interfisch people, closed 1990 | fact | Wikipedia, Tresor (club) | medium: Wikipedia only | keep |
| Tresor opened March 1991, Wertheim vaults, Leipziger Strasse, Dimitri Hegemann | fact | Wikipedia, Tresor (club) | high | keep |
| Tresor Records from October 1991; Baxter, Fowlkes, 3MB with Atkins, Mills, Hood, Drexciya | fact | Wikipedia, Tresor and Tresor Records (discography uncited) | medium | keep |
| UR records made after their first Tresor gig sound harder | attributed interpretation | VICE interview with Felix Denk, 2014 | high as attribution | keep, attributed to Denk |
| Der Klang der Familie is Tresor 6, 1992 | fact | Wikipedia discography (no year given); the search summary said July 1992 | medium | confirm the year on Discogs before publication |
| Reichsbahnbunker parties 1992 to December 1996 | fact | Wikipedia, Berghain | medium | keep |
| E-Werk 1993 to 24 July 1997; opposite the old Reich Air Ministry | fact | de.wikipedia E-Werk; VICE | high | keep |
| Tresor closed 16 April 2005, reopened 24 May 2007, Kraftwerk Mitte | fact | Wikipedia, Tresor (club) | high | keep |
| A door from the original Tresor is in the Humboldt Forum | fact | Wikimedia Commons file description (Berlin Global exhibition) | medium | keep |
| March 2024: Berlin techno culture added to Germany's national inventory of intangible heritage | fact | BBC Travel 2024; unesco.de "Technokultur in Berlin" (not read in full) | medium | read unesco.de before publication |
| Snax 1994, Ostgut 1998 to January 2003, Berghain December 2004, owned since 2011, 2016 tax ruling, camera stickers | fact | Wikipedia, Berghain | high | keep |
| "strict and opaque" door | quoted fact | Wikipedia, Berghain | high | keep |
| Bar 25 2003 to September 2010, 48-hour parties, five-day closing party, documentary 2012 | fact | Wikipedia, Bar 25 | high | keep |
| Kater Blau opened the first weekend of August 2014; renamed Kater August 2025 | fact | de.wikipedia Kater Blau; RA "formerly Kater Blau" | high | keep |
| Watergate October 2002 to end 2024; DJ Mag #8 2009; label 2008 | fact | de.wikipedia Watergate | high | keep |
| Wilde Renate: August 2024 announcement, 150% rent rise, withdrawn December 2025 | fact | de.wikipedia Salon zur Wilden Renate | high | keep |
| Sisyphos: 2009 open-air among friends; a club by about 2012; dog-biscuit factory; five floors, ~1,500, Fri 22:00 to Mon 10:00; 2014 closure over permits; reopened end 2014 | fact | de.wikipedia; Tagesspiegel 28 June 2014; FAZE Mag 5 September 2014 | high, except the factory (de.wikipedia only) | keep; the factory needs a second source |
| KitKatClub 1994, Thaur and Krüger, dress code, Brückenstraße since July 2007 | fact | Wikipedia, KitKatClub | high | keep |
| HÖR on Karl-Marx-Allee, six days a week | fact | hoer.live and its imprint | high | keep |
| 9,708 of 62,877 catalogue sets are HÖR; Ellen Allien is among the top four by views | fact | `selector-data.json`, counted 2026-09-10 | high | keep. Open defect `catalogue-numbers-unchecked` applies: no audit ties prose numbers to the data |
| "one of the two largest sources" in the catalogue | fact | catalogue: The Lot Radio 9,998, HÖR 9,708 | high | keep |
| Table statuses "Open, September 2026" | fact | RA 2026 guide, Time Out, Wikipedia; not each club's own site | medium | recheck each club's site before publication and every six months |

## 5. SEO preservation

A new page, so there is nothing to preserve. All 16 terms in
`keywords/berlin-clubs.json` are present, and `audit-keywords.mjs` passes.
The title, H1 and meta description share the primary intent without being
identical.

## 6. Coverage gaps

- questoapp and visitberlin (two of the consensus lists) were never read,
  because the fetches failed. Recorded as a known gap in
  `media/berlin-clubs.json`.
- There is no exact embed for Tresor today or for Berghain. That is
  deliberate: Berghain allows no recording, and no Tresor-channel upload was
  checked.

## 7. Cuts or merges

Already made in the draft before layout: unsourced colour was removed ("a
wooden village of a club", "a long window over the river", "white-tiled
room", "open from Saturday night into Monday", "safe-deposit room was the
dancefloor"). So was one wedged keyword ("best clubs berlin"), which moved
to `rejected`.

## 8. Media actions

Six Commons images, licences checked on each file page, and three embeds,
each checked for its channel owner. Every YouTube copy of Der Klang der
Familie was a fan upload. The first Spotify copy used turned out, on visual
QA, to sit on a retro-house compilation, so it was replaced by the original
release (remastered 2010) on Dr. Motte's own SoundCloud. A file first found as "Sisyphos 2011.jpg"
turned out to be a stone sculpture in Bernau and was rejected. The unused
Sisyphos gate image was deleted.

## 9. Unresolved questions

- ~~The owner's approval of the first-person wording (section 3).~~ The owner
  asked for the push on 2026-09-11 after seeing the flagged sentences, and the
  page was published with the wording as drafted. Revisit if they object.
- Whether the page should link to the future German electronic music
  history guide once it exists.

## 10. Final acceptance checklist

| Check | Result |
|---|---|
| Facts | pass, with the three medium items in the ledger to confirm before publication |
| Editorial quality | pass, pending the owner's wording approval |
| SEO | pass (audit-keywords, audit-seo) |
| Media | pass (audit-media, audit-canon, adjacency) |
| Implementation | pass (`node audit-all.mjs`, `check:html`, `check:links`, `check:layout` 216/216; rebuild idempotent) |
