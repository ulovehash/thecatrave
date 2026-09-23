# Untold, Sónar and bass music: German and French translation handoff

Prepared 23 September 2026.

## Decision

The next three by measured German and French demand (TRANSLATION-RESEARCH.md,
stage 1 and French stage 2). The first two were single-language gaps, each with
more demand than any guide that had no translation at all:

| Guide | Translated into | Head term | Volume / traffic potential |
|---|---|---|---|
| Untold | French only (German exists) | untold festival | FR 450 / 250 |
| Sónar | German only (French exists) | sonar festival | DE 350 / 200 |
| Bass music | German and French | bass music | DE 100 / 10, FR 80 / 100 |

Bass music was paused before translation, as the handoff asked: the English
page hotlinks five rights-reserved images (`bass-music-guide-hotlinked-images`).
The owner decided on 23 September 2026 to translate it with the images as
they are, so the two translations hotlink the same five images and the defect
now covers three pages.

## Search check

No Ahrefs units spent. The head terms keep their 17 and 18 September volumes;
everything else is `not measured`. Google (google.de, `hl=fr&gl=fr`) returned
its bot check on the first query. It was not solved, and the rest came from
Bing fr-FR and de-DE: result titles and related searches. Bing showed no
"People also ask" box for these queries, so no FAQ wording was taken from one.

| Page | Taken from the results |
|---|---|
| fr Untold | French titles write "Festival UNTOLD", "festival en Roumanie" and "le géant roumain" and name Cluj; the related searches add "untold festival romania". The title says "le festival de Cluj, en Roumanie". Dracula Untold (the film) and camping are rejected |
| de Sónar | de.wikipedia's "Sónar" ranks; titles write "Sónar Festival Barcelona" and "Sónar Festival 2027"; related searches add "off sonar" and "sonar festival tickets", both of which the English page already covers |
| de bass music | German writes "Bass Music" as a loanword; "was ist bass music" returns the English Wikipedia article among pages on the instrument. "Lieder mit Bass" (bass-heavy songs) and downloads are rejected |
| fr bass music | fr.wikipedia has its own "Bass music" article; a result title asks "Qu'est-ce que la Bass Music ?", now the H1. "musique avec des basses" and downloads are rejected |

## Rules applied

- Every fact, figure, date, source URL, embed, image and caption credit is the
  English page's. Nothing was added. No imperial units on these pages; the
  Untold budget is written in euros, as in the English.
- The translations follow the English page as published, not its draft where
  the two differ. That matters for bass music: its generator leaves out the
  lead paragraph of the "different scenes" section and the draft's last
  footwork note, and writes three paragraphs of its own (footwork and gqom
  together, the records intro, the playlist line). The translations carry the
  three. Logged as `bass-music-meanings-lead-not-rendered`; with the owner's
  approval the lead paragraph now renders on all three pages, and the draft's
  footwork note was aligned with the published sentence.
- Festival pages: the owner's two mixes (`ownSetAfter: 'history'`, as on the
  English pages) and the owner's track in the music section, a paragraph away
  from other media: Dégénération on French Untold, after the smaller stages
  paragraph; Berlin Race 1909 on German Sónar, after the first music paragraph,
  where the French Sónar has Dégénération. Both are registered in
  festival-editions.mjs.
- Bass music carries what the English page carries of the owner's: the "look"
  track after the first hybrids paragraph and the two SoundCloud mixes, and no
  festival-style mixes.
- Bass music's structure: content/bass-music-media.mjs builds the players,
  route cards and the owner's music for both languages; each language module
  builds its own figures and the two tables (the site-components audit reads
  the module for `articleFigure(` and `articleTable(`). The history graphic is
  redrawn per language (`img/bass-music/bass-music-global-history-de.svg`,
  `-fr.svg` and their mobile versions): same geometry, colours and dates, with
  "Great Britain" set smaller on the desktop card so it fits. The
  "What to listen for" and "Start with" notes use a new draft convention,
  a paragraph starting with `> ` (build-localized-articles.mjs).
- Internal links go to the translated guide where one exists. Every target on
  these four pages has a translation, so none needed "(auf Englisch)" /
  "(en anglais)".
- The three English pages changed in the head only: build-bass-music-article.mjs
  now passes `alternates: alternatesFor('/bass-music-guide')`; Untold and Sónar
  already did.

## Found on the way

All four were logged in defects.json first, then fixed the same day once the
owner approved the exact wording (closed entries name the phrase that proves
each fix). The English bass music page and the two older translations got a
new modified date; the translations of bass music gained the restored lead
paragraph:

- `bass-music-dubstep-link-unrendered`: the English bass music page shows
  "[the dubstep guide](/dubstep-guide)" as literal text; its inline() only
  links https URLs. The translations link /de/dubstep and /fr/dubstep.
- `bass-music-meanings-lead-not-rendered`: above.
- `untold-de-closing-paragraph-diverges`: the German Untold closing paragraph
  predates the English links to EDC, Ultra, Creamfields and the Europe list,
  and adds a Parookaville ranking the English page does not make.
- `sonar-fr-whole-concerts-and-stale-links`: the French Sónar page says ARTE
  films "des concerts entiers" (the English: "has filmed shows"), the
  emphasis WRITING.md rules out, and its closing paragraph sends EDC and
  Creamfields to English pages that now have French versions.

## Next

One single-language gap is left: the London clubs guide has German and no
French (French stage 2: club londres 600, boite de nuit londres 400, the rest
football; intent fit weak). Lollapalooza stays untranslated (the demand is for
Lollapalooza Berlin and Paris). The guides with no translation at all have
little measured German or French demand: Boiler Room sets (French "boiler
room" 1,300, mostly event listings), live DJ sets, German and UK electronic
music, find new music.
