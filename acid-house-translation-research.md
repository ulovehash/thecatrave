# Acid house: German and French translation handoff

Prepared 22 September 2026.

## Decision

Translate the English guide at `/acid-house-guide` into German and French, same intent and structure, native search wording in the title, headings and FAQ. Approved by the owner on 22 September 2026 ("переводим ни постим": translate, do not push).

## Cost-controlled search check

No Ahrefs units were spent (balance 83,497 of 800,000 used, 10.4%, read free on 22 September 2026; the owner approved the translation without the optional ~250-unit check). The German wording was qualified in the live google.de results (result titles, "Weitere Fragen", "Wird auch oft gesucht"). google.fr answered with a bot check, which was not bypassed; the French wording was qualified in DuckDuckGo's France region instead, so French terms rest on a weaker signal than German ones. Every term in the keyword maps is recorded as `not measured`.

## Metadata and paths

| Language | Path | Title | Targeted (not measured) |
|---|---|---|---|
| German | `/de/acid-house` | Was ist Acid House? Von der TB-303 in Chicago zum britischen Rave | acid house, was ist acid house |
| French | `/fr/acid-house` | Qu’est-ce que l’acid house ? De la TB-303 aux raves britanniques | acid house, l’acid house, qu’est-ce que l’acid house |

## Decisions

- German writes "Acid House" with capitals. The second FAQ asks "Was bedeutet „Acid“ in Acid House?" because google.de's "Weitere Fragen" asks "Was bedeutet Acid bei Techno?"; the answer is the English one.
- French writes « l’acid house », feminine; the section on the name is « D’où vient le nom acid house ? ».
- Titles were shortened from the approved proposal to fit the SEO audit's 65-character limit: "…zum Rave in Großbritannien" became "…zum britischen Rave", and "De la TB-303 de Chicago aux raves britanniques" became "De la TB-303 aux raves britanniques". The H1s are as approved.
- The English Sources list ends with a plain line on where the set counts come from; `sourcesNote` in build-localized-articles.mjs renders it.

## Preservation and rules applied

- Every fact, date, figure, source link, embed, caption credit and image is the English page's. Nothing was added. Captions keep the credit as "Foto: <author>, <licence>." and "Photo : <author>, <licence>.".
- Media: the English page's media map, reused by design (home-articles.mjs); no new asset.
- Placement: the English generator places media by paragraph index; the drafts place the same blocks with `[Bild: ...]`, `[Image: ...]`, `[Embed: ...]` and `[Tabelle: ...]`/`[Table: ...]` lines at the same positions.
- The owner's own players are the English page's (same track, same mix, same position), with translated lines.
- Internal links go to the translated guide where one exists, otherwise to the English page with "auf Englisch" / "(en anglais)".
- No em dashes; thecatrave lowercase; no emphasis on a DJ set being whole (the grime MC line "for a whole set" became "über die Breakbeats eines Sets" / "sur les breakbeats d’un set").
- The English page changed in the head only: hreflang for en, de and fr, and the language switcher.
