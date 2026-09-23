# Removing "the part this site cares about most", and three jungle fact fixes

Edits to published copy, approved by the owner and applied on 2026-09-23. The urban legends
section stays, by the owner's decision. All four were logged in
`defects.json` and are now closed, and the rule against the drum and bass line is now in `WRITING.md`.

## 1. "Drum and bass is the part this site cares about most": 12 sentences

In each one, the opening clause goes and the fact that followed it stands on its own.

### English

**E1.** Tomorrowland (`tomorrowland-draft.md`)
> Before: Drum and bass is the part this site cares about most, and it has been at Tomorrowland longer than the Mainstage suggests.
> After: Drum and bass has been at Tomorrowland longer than the Mainstage suggests.

**E2.** Creamfields (`creamfields-draft.md`)
> Before: Drum and bass is the part this site cares about most, and Creamfields has booked it for longer than its posters suggest.
> After: Creamfields has booked drum and bass for longer than its posters suggest.

**E3.** EDC Las Vegas (`edc-draft.md`)
> Before: Drum and bass is the part this site cares about most, and at EDC it goes back further than the main stage suggests.
> After: At EDC, drum and bass goes back further than the main stage suggests.

**E4.** Ultra (`ultra-draft.md`)
> Before: Drum and bass is the part this site cares about most, and at Ultra it was there before the Main Stage was.
> After: At Ultra, drum and bass was there before the Main Stage was.

### German

**D1.** Tomorrowland (`de/tomorrowland-draft.md`)
> Before: Drum and Bass ist der Teil, der diese Seite am meisten interessiert, und er ist bei Tomorrowland länger zu Hause, als die Mainstage vermuten lässt.
> After: Drum and Bass ist bei Tomorrowland länger zu Hause, als die Mainstage vermuten lässt.

**D2.** Creamfields (`de/creamfields-draft.md`)
> Before: Drum and Bass ist der Teil, der dieser Seite am meisten bedeutet, und Creamfields bucht ihn schon länger, als seine Plakate vermuten lassen.
> After: Creamfields bucht Drum and Bass schon länger, als seine Plakate vermuten lassen.

**D3.** EDC (`de/edc-draft.md`)
> Before: Drum and Bass ist der Teil, der dieser Seite am meisten bedeutet, und beim EDC reicht er weiter zurück, als die Hauptbühne vermuten lässt.
> After: Beim EDC reicht Drum and Bass weiter zurück, als die Hauptbühne vermuten lässt.

**D4.** Ultra (`de/ultra-draft.md`)
> Before: Drum and Bass ist der Teil, der dieser Seite am meisten bedeutet, und bei Ultra war er vor der Main Stage da.
> After: Bei Ultra war Drum and Bass vor der Main Stage da.

### French

**F1.** Tomorrowland (`fr/tomorrowland-draft.md`)
> Before: La drum and bass est la partie qui compte le plus pour ce site, et elle est présente à Tomorrowland depuis plus longtemps que la Mainstage ne le laisse penser.
> After: La drum and bass est présente à Tomorrowland depuis plus longtemps que la Mainstage ne le laisse penser.

**F2.** Creamfields (`fr/creamfields-draft.md`)
> Before: La drum and bass est la partie qui compte le plus pour ce site, et Creamfields la programme depuis plus longtemps que ses affiches ne le laissent penser.
> After: Creamfields programme la drum and bass depuis plus longtemps que ses affiches ne le laissent penser.

**F3.** EDC (`fr/edc-draft.md`)
> Before: La drum and bass est la partie qui compte le plus pour ce site, et à l'EDC elle remonte plus loin que la scène principale ne le laisse croire.
> After: À l'EDC, la drum and bass remonte plus loin que la scène principale ne le laisse croire.

**F4.** Ultra (`fr/ultra-draft.md`)
> Before: La drum and bass est la partie qui compte le plus pour ce site, et à l'Ultra elle était là avant la Main Stage.
> After: À l'Ultra, la drum and bass était là avant la Main Stage.

## 2. Jungle guide facts, checked against sources

### Wrong, with a proposed fix

**J1. Leviticus is Jumpin Jack Frost, not Ray Keith.** Frost produced "Burial" in 1994 for
Philly Blunt, the V Recordings sub-label he ran with Bryan Gee. Dread Recordings is Ray
Keith's label. Sources: [DJ Mag](https://djmag.com/features/how-leviticus-burial-epitomised-jungles-melting-pot-of-influences),
[Wikipedia, Jumpin Jack Frost](https://en.wikipedia.org/wiki/Jumpin_Jack_Frost).

| | Before | After |
|---|---|---|
| EN (artists table) | Leviticus (Ray Keith) · "Burial" creator, founder of Dread Recordings | Leviticus (Jumpin Jack Frost) · "Burial" creator, co-founder of V Recordings |
| DE (`content/de/jungle.mjs`) | Leviticus (Ray Keith) · Schöpfer von „Burial", Gründer von Dread Recordings | Leviticus (Jumpin Jack Frost) · Schöpfer von „Burial", Mitgründer von V Recordings |
| FR (`content/fr/jungle.mjs`) | Leviticus (Ray Keith) · Auteur de « Burial », fondateur de Dread Recordings | Leviticus (Jumpin Jack Frost) · Auteur de « Burial », cofondateur de V Recordings |

**J2. "Terrorist" came out in 1994, not 1995.** Moving Shadow, July 1994. Sources:
[Discogs](https://www.discogs.com/release/62699-The-Renegade-Featuring-Ray-Keith-Terrorist-Something-I-Feel),
[DJ Mag](https://djmag.com/longreads/how-renegades-terrorist-created-blueprint-jungle).
In the essential tracks list, in English, German and French: `(1995)` becomes `(1994)`.

**J3. Ali G Indahouse is a British film, not a Hollywood one.** It came out in 2002.
Sources: [Wikipedia, Incredible (M-Beat song)](https://en.wikipedia.org/wiki/Incredible_(M-Beat_song)),
[IMDb soundtrack](https://www.imdb.com/title/tt0284837/soundtrack/). English only; the German
and French pages already say "cinema comedies".
> Before: … echoing from car radios and even in Hollywood comedies (it features memorably in Ali G's movie).
> After: … echoing from car radios and even in cinemas (it features memorably in Ali G Indahouse, in 2002).

### Checked and correct: no change

- **"Circles" – Adam F (1995).** Correct: the original came out on Section 5 in 1995, and the 1997 re-release reached No. 20 ([Wikipedia, Adam F](https://en.wikipedia.org/wiki/Adam_F)). I was wrong to flag it.
- **Black Junglist Alliance.** It exists: a collective founded in 2020 by Chris Inperspective and others ([DJ Mag](https://djmag.com/news/black-junglist-alliance-launches-address-diversity-issues-jungle-and-db), [Mixmag](https://mixmag.net/read/black-junglist-alliance-collective-launches-news)).

### Cannot be checked

- **"Urban Legends and Raver Tales"** (the melted dubplate, the foghorn, the power cut).
  No source can confirm anecdotes like these. The section already says some are
  exaggerated. It's your call whether to keep it as folklore or cut it.
