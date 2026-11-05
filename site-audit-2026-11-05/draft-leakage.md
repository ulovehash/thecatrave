# Draft leakage

What was searched for in the visible text, meta tags, titles and alt text of
all 287 pages:

- **Template residue:** `**`, `##`, `](`, `[Embed]`, `figure:`, `{{ }}`, the words `undefined`, `null` and `NaN`.
- **Placeholders:** TODO, TBD, FIXME, lorem ipsum, "placeholder", "citation needed".
- **Internal names:** file names (`.md`, `.mjs`, `.json`), tool and agent names, "the owner", "draft".
- **Keyword-tool language:** search volume, Keyword Planner, SERP, PAA, search intent.
- **Research-process notes:** unverified, the pages read, fact-check, "this session".
- **Formatting:** editor notes, broken entities, empty elements, a paragraph repeated on one page.
- **Untranslated copy:** English sentences left in German, French or Spanish pages.

Every hit was read. Ordinary words ("a former yacht builder's warehouse",
"British Land, the owner"), real event names ("F*** ME I'M FAMOUS") and the
artist name "Fred again.." were set aside.

---

## 1. Headings that render as "undefined" (critical)

**Pages:** `de/house-musik.html`, `de/techno-musik.html`, `fr/musique-house.html`,
`fr/techno.html`, `es/musica-house.html`, `es/techno.html`. On each one, 8 of
the 10 section headings show the literal word **undefined**: 48 headings in all.

**Cause:** in `content/{de,fr,es}/{house,techno}.mjs`, eight entries per page
have a `heading` but no `title`, for example
`{id: 'sound', heading: 'Wie House-Musik klingt'}`. The builder renders
`section.title` (`build-localized-articles.mjs:215`), which is undefined for
these entries.

**Not caused by the 4 November changes.** The page was the same at `fc90d30`,
the last commit before them.

**Why no audit caught it:** `audit-seo.mjs` checks that each page has one H1
and no heading-level jumps, and these H2s exist; they just say "undefined".

**Proposed fix:** one line in `build-localized-articles.mjs:215`: fall back
to the heading, written the way the site's other H2s are (ending in a full
stop). For example:

```js
title: section.title || `${section.heading}.`,
```

The German techno guide would then show "Wie Techno klingt.", "Detroit und
die Belleville Three." and so on. Also add a check to `audit-seo.mjs` that
fails on any heading whose text is `undefined`, `null` or empty.

## 2. Subheadings printed as "### …" (high)

**Pages and lines:**

- `es/defqon-1.html`, 9 lines:
  - "### Entradas de Defqon.1 2027"
  - "### Calendario de venta de Defqon.1 2027"
  - "### Precio de las entradas de Defqon.1"
  - "### Reembolso de Defqon.1 2026"
  - "### Sets de Defqon.1"
  - "### Escenarios de Defqon.1"
  - "### Colores de Defqon.1"
  - "### Camping de Defqon.1"
  - "### Lanzadera y transporte de Defqon.1"
- `es/fusion-festival.html`, 5 lines:
  - "### Cómo funciona el sorteo de entradas"
  - "### Capacidad de Fusion Festival"
  - "### Escenarios de Fusion Festival"
  - "### Edad mínima y normas de Fusion Festival"
  - "### Sets de Fusion Festival"

**Cause:** these Spanish drafts (`es/defqon-1-draft.md`, `es/fusion-festival-draft.md`)
use `###` subheadings inside sections whose renderer treats each block as a
paragraph. These two pages were also like this before 4 November.

**Proposed fix:** render a block that starts with `### ` as an `<h3>`, in the
same renderer, rather than editing the drafts. Add a check to
`audit-banned-phrases.mjs` that fails on visible text starting with `#`.

## 3. Research-process wording (medium)

AGENTS.md section 4 already bans internal research commentary. These
sentences describe how the page was researched instead of stating the fact.
All of them are English only; the translations already state the facts
plainly.

| Page | Now | Proposed |
|---|---|---|
| fusion-festival | If you are searching for a summer 2027 date, none exists, and anything advertising one is not from the organisers' pages read here. | There is no summer 2027 date, and anything advertising one does not come from the organisers. |
| fusion-festival | The wording leaves the outcome open, and I found no later statement on the pages read. | The wording leaves the outcome open. |
| fusion-festival | That figure comes from the taz in May 2019 and from other press reports, not from an official statement on the pages read, so treat it as press reporting. | That figure comes from the taz in May 2019 and from other press reports, not from an official statement. |
| fusion-festival | No ticket dates or prices for 2028 were published on the pages read. | No ticket dates or prices for 2028 have been published. |
| fusion-festival | The organisers' own pages read do not state a figure, and reports disagree on the site's area, so none is given. | The organisers do not state a figure, and reports disagree on the site's area. |
| defqon-1 | The name has no official explanation on the pages read. | Q-dance gives no official explanation of the name. |
| defqon-1 | Anything quoted elsewhere as a 2027 price is not from the pages read here. | Any 2027 price quoted elsewhere does not come from Q-dance. |
| defqon-1 | The pages read did not describe a Defqon.1 live broadcast for 2027, so none is promised here. | Q-dance has not announced a Defqon.1 live broadcast for 2027. |
| defqon-1 | Those are not on the official pages read, so treat them as unconfirmed. | Those are not on Q-dance's official pages, so treat them as unconfirmed. |
| defqon-1 | The pages read give camping opening on Thursday at 12:00 and closing on Monday at 12:00, … | Q-dance gives camping opening on Thursday at 12:00 and closing on Monday at 12:00, … |
| defqon-1 (table cell) | Not stated on the pages read | Not stated by Q-dance |

A related label: **"RA listing not verified"** in the club tables on
`best-clubs-in-mexico-city`, `best-clubs-in-prague` and the two French
equivalents. It reads as a note to the researcher. Proposed: "No RA listing".

## 4. Checked and clear

| Check | Result |
|---|---|
| Markdown or template residue in prose (apart from 1 and 2) | None |
| TODO, TBD, placeholder, lorem ipsum, citation needed | None (the Spanish hits are the word "todo", meaning "all") |
| File names, tooling, agent or owner references | None in visible text, meta, titles or alt text |
| Keyword-tool language in visible text | None (one "mood keyword" in a Spotify caption is ordinary use) |
| Editor notes ("Note:", "NB:") | None (the hits were "Blue Note:") |
| Broken entities | None (the jungle guide's dashes render correctly) |
| Empty paragraphs or headings | None |
| A paragraph repeated on the same page | None |
| English left in translated pages | None that should be translated: the hits are English source titles in Sources lists and one quoted MC line |

**Format note, not a defect:** the video cards write artist and title as
"Phuture : Acid Tracks", with a space before the colon, on 86 English pages.
It is consistent and deliberate-looking, but English typography doesn't
space a colon. Changing it is one line in the shared card component; this is
the owner's call.
