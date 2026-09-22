# Grime: German and French translation handoff

Prepared 22 September 2026.

## Decision

Translate the English guide at `/grime-music-guide` into German and French, same intent and structure, native search wording in the title, headings and FAQ. Approved by the owner on 22 September 2026 ("переводим ни постим": translate, do not push).

## Cost-controlled search check

No Ahrefs units were spent (balance 83,497 of 800,000 used, 10.4%, read free on 22 September 2026; the owner approved the translation without the optional ~250-unit check). The German wording was qualified in the live google.de results (result titles, "Weitere Fragen", "Wird auch oft gesucht"). google.fr answered with a bot check, which was not bypassed; the French wording was qualified in DuckDuckGo's France region instead, so French terms rest on a weaker signal than German ones. Every term in the keyword maps is recorded as `not measured`.

## Metadata and paths

| Language | Path | Title | Targeted (not measured) |
|---|---|---|---|
| German | `/de/grime` | Was ist Grime? Sound, Geschichte, Künstler und wichtige Tracks | grime, grime musik, was ist grime, grime künstler |
| French | `/fr/grime` | Le grime, c’est quoi ? Son, histoire, artistes et morceaux clés | grime, musique grime |

## Decisions

- "grime bedeutung" appears in google.de's related searches but is not targeted: the page explains where the name came from, and the literal meaning of the English word is not on the English page. "Grime Deutsch" (German-language grime) is also a related search the English page does not cover; both are recorded as rejected in keywords/de-grime.json and are candidates for an English update, not for the translation.
- The German FAQ asks "Was unterscheidet Grime von Rap?", after a ranking "Grime vs Rap" discussion on google.de.
- The French title ends « morceaux clés » instead of the approved « morceaux essentiels », to fit the 65-character limit.
- The German description was tightened to fit the 165-character limit.
- The dubstep link goes to /de/dubstep and /fr/dubstep; UK garage, the UK timeline and live DJ sets go to the English pages.

## Preservation and rules applied

- Every fact, date, figure, source link, embed, caption credit and image is the English page's. Nothing was added. Captions keep the credit as "Foto: <author>, <licence>." and "Photo : <author>, <licence>.".
- Media: the English page's media map, reused by design (home-articles.mjs); no new asset.
- Placement: the English generator places media by paragraph index; the drafts place the same blocks with `[Bild: ...]`, `[Image: ...]`, `[Embed: ...]` and `[Tabelle: ...]`/`[Table: ...]` lines at the same positions.
- The owner's own players are the English page's (same track, same mix, same position), with translated lines.
- Internal links go to the translated guide where one exists, otherwise to the English page with "auf Englisch" / "(en anglais)".
- No em dashes; thecatrave lowercase; no emphasis on a DJ set being whole (the grime MC line "for a whole set" became "über die Breakbeats eines Sets" / "sur les breakbeats d’un set").
- The English page changed in the head only: hreflang for en, de and fr, and the language switcher.
