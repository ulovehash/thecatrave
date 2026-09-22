# Best electronic music festivals in Europe: German and French translation handoff

Prepared 22 September 2026.

## Decision

Translate the English guide at `/best-electronic-music-festivals-europe` into German and French, same intent and structure, native search wording in the title, headings and FAQ. Approved by the owner on 22 September 2026 ("переводим ни постим": translate, do not push).

## Cost-controlled search check

No Ahrefs units were spent (balance 83,497 of 800,000 used, 10.4%, read free on 22 September 2026; the owner approved the translation without the optional ~250-unit check). The German wording was qualified in the live google.de results (result titles, "Weitere Fragen", "Wird auch oft gesucht"). google.fr answered with a bot check, which was not bypassed; the French wording was qualified in DuckDuckGo's France region instead, so French terms rest on a weaker signal than German ones. Every term in the keyword maps is recorded as `not measured`.

## Metadata and paths

| Language | Path | Title | Targeted (not measured) |
|---|---|---|---|
| German | `/de/electro-festivals-europa` | Die besten Electro-Festivals in Europa 2027 im Vergleich | electro festivals in europa, festivals für elektronische musik in europa |
| French | `/fr/festivals-electro-europe` | Les meilleurs festivals électro en Europe en 2027, comparés | festivals électro en europe, festivals de musique électronique en europe |

## Decisions

- The 2027 dates and every "not announced" label match the English page as checked on 22 September 2026: Tomorrowland, Dekmantel and Monegros unannounced among the major festivals; Garbicz, Houghton, Draaimolen and Freerotation unannounced among the smaller ones; Waking Life mid-June, not yet on its own site.
- Maintenance: both pages are registered in festival-editions.mjs under their own table headings ("Termine 2027 im Überblick", "Les dates 2027 en un coup d’œil"), with `ends: null` like the English page, so the yearly reminder prints for them too. When the English page changes a date, change the draft and the table in content/<lang>/europe-festivals.mjs in the same commit.
- Found on the way: none of the earlier German and French festival translations is registered in festival-editions.mjs. Logged open in defects.json (`translated-festival-guides-no-editions-entry`), not fixed here.
- The H3 anchors are the English ones (#tomorrowland, #defqon-1, #sonar, …), so links into a festival work in every language.
- German links: Tomorrowland, Untold, Parookaville, Mysteryland, Primavera Sound, Glastonbury, Berlin and London clubs are translated; Creamfields, Ultra and Sónar go to English. French links: Tomorrowland, Parookaville, Mysteryland, Sónar, Primavera Sound, Glastonbury and Berlin clubs are translated; Untold, Creamfields, Ultra and London clubs go to English.
- Local demand not on the English page and therefore not added: German results also list Nature One, Airbeat One, Mayday, Electric Love and Street Parade; French results mix France and Europe, and no French festival is on the list. Both are candidates for the English page first.
- build-localized-articles.mjs gained "- " lists (the criteria and "Not on this list" sections), sections that open straight on a subheading (Hard dance), and grouped source lines, all matching the English generator's output.

## Preservation and rules applied

- Every fact, date, figure, source link, embed, caption credit and image is the English page's. Nothing was added. Captions keep the credit as "Foto: <author>, <licence>." and "Photo : <author>, <licence>.".
- Media: the English page's media map, reused by design (home-articles.mjs); no new asset.
- Placement: the English generator places media by paragraph index; the drafts place the same blocks with `[Bild: ...]`, `[Image: ...]`, `[Embed: ...]` and `[Tabelle: ...]`/`[Table: ...]` lines at the same positions.
- The owner's own players are the English page's (same track, same mix, same position), with translated lines.
- Internal links go to the translated guide where one exists, otherwise to the English page with "auf Englisch" / "(en anglais)".
- No em dashes; thecatrave lowercase; no emphasis on a DJ set being whole (the grime MC line "for a whole set" became "über die Breakbeats eines Sets" / "sur les breakbeats d’un set").
- The English page changed in the head only: hreflang for en, de and fr, and the language switcher.
