# AI slop

Second pass after the 4 November fixes, across all four languages:

- **Stock words:** the usual AI vocabulary (delve, vibrant, iconic, hidden gem, testament to…), with equivalent lists for German, French and Spanish.
- **Contrast tics:** "not X but Y" and "more than just".
- **Snappy fragments:** "The result?" and similar.
- **Spaced dashes** joining clauses.
- **Templates:** sentences repeated across guides.
- **Repeated answers** within a page.
- **Question headings:** the share of H2s that are questions.

Every hit was read in context.

**Overall: clean.** The 4 November guards hold. What remains is light and
listed here so it can be done in one pass.

---

## 1. Stock words worth changing (low)

Most stock-word hits are quoted source titles ("Vice: Amsterdam's Most
Legendary Clubs", "DJ Mag: Inside Mexico City's vibrant electronic
underground"), quotations ("the world's most iconic nightclub", Pacha's own
words), genre names ("euphoric trance"), festival names ("Elevate") or the
Selector's "Hidden gems" mode. Those stay. The rest:

| Page | Now | Proposed |
|---|---|---|
| best-electronic-music-clubs-in-london (and de, fr) | …and they became legendary at the Blue Note in Hoxton… | …and they became the night the Blue Note in Hoxton was known for… |
| fr/jungle | Les tape packs sont aussi devenus incontournables | Les tape packs sont aussi devenus un classique |
| fr/jungle | l'incontournable bombe de club « Lighter » de DJ SS | la bombe de club « Lighter » de DJ SS |
| es/jungle | Los tape packs también se volvieron imprescindibles | Los tape packs también se volvieron habituales |
| es/jungle | la imprescindible bomba de club «Lighter», de DJ SS | la bomba de club «Lighter», de DJ SS |
| fr/hardstyle | est devenu l'un des disques emblématiques du label | est devenu l'un des disques phares du label |
| fr/hardstyle | Un disque Scantraxx emblématique de l'expansion mélodique du hardstyle. | Un disque Scantraxx de l'expansion mélodique du hardstyle. |
| de/jungle | (unvergesslich im Film von Ali G) | (etwa im Film von Ali G) |

## 2. Contrast tics (none to change)

There are 11 "not X but Y" and "more than" sentences. Each corrects
something readers really believe ("It is not simply the British version of
American hip-hop", "Coachella is not a dance festival, but it has always had
one inside it"), which the humanizer rules allow. None argue with nobody.

## 3. Spaced dashes (low)

All 42 are in `jungle-music-guide.html`. 40 are its list format ("Shy FX –
Released 'Original Nuttah' at age 18"), which is fine. Two join clauses in
prose:

> …his Ibiza Records pressed the records nobody else would – the kind of founder who runs the label rather than fronts the record…
> …by DJs including DJ Ron – whose "Crackman" is one of the tracks every history names and almost nobody plays – …

Proposed: a colon in the first, commas in the second.

## 4. Templates repeated across guides (low)

These repeat word for word on the festival roundups. They are method lines
and read as boilerplate, though nothing in them is untrue:

- "A festival is on this list when these three things are true:" (15 roundups)
- "It has run recently, and it has either published a 2027 edition or given no sign of stopping." (9)
- "A date from the festival's own site is shown as confirmed." (9)
- "These are festivals people ask about that fall outside the tests above." (8)
- "Where a festival has not yet announced 2027, the table gives its 2026 date as a guide." (5)

Proposed: leave the criteria lists, since each roundup needs them. Cut "These
are festivals people ask about that fall outside the tests above." The
heading "Not on this list, and why" already says it.

## 5. Question headings (low)

Pages where more than half the H2s are questions: bass-music-guide (6/11),
berghain (5/8, plus de and fr), trance-guide (5/8), what-is-coachella (8/12).
Each heading passes the `WRITING.md` test (none can be answered without
reading the section), so this is a variety note, not a defect.

## 6. Checked and clear

| Check | Result |
|---|---|
| "The result?" or "Here's why" fragments | None |
| "In conclusion", "moreover", "furthermore", "in today's world", "whether you're" | None in English |
| Answer box restated three or more times | None after the 4 November fixes |
| "This guide covers", self-describing cards, "the question this site is here for" | None (guarded in `audit-banned-phrases.mjs`) |
| Repeated sentence skeletons in list entries | None at the old level; the world roundup's "See the X guide" endings are the most frequent at 6 |
