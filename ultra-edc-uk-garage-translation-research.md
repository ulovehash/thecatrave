# Ultra, EDC Las Vegas and UK garage: German and French translation handoff

Prepared 23 September 2026.

## Decision

The next three guides with no translation at all, by the measured German and
French demand in TRANSLATION-RESEARCH.md (stage 1 and French stage 2): Ultra
(traffic potential DE 100 + FR 60, volume DE 400, FR 200), EDC Las Vegas
(DE 60 + FR 100, volume DE 350, FR 200) and UK garage (DE 70 + FR 40, volume
DE 300, FR 200). Breakbeat (DE 70 + FR 20) is next. Sónar has a French page
and still no German one.

## Search check

No Ahrefs units spent. The head terms carry the volumes measured on 17 and 18
September; everything else is `not measured`, from the live results on 23
September:

- Google (google.de, German and French interface): "Weitere Fragen" and
  "Autres questions", result titles, "Wird auch oft gesucht". Google first
  answered with a bot check, which was not bypassed; it later let the searches
  through. google.fr itself stayed blocked, so the French results are google.de with `hl=fr&gl=fr`.
- Bing de-DE and fr-FR: related searches and result titles.

What changed because of it:

| Page | Taken from the results |
|---|---|
| de Ultra | "Was ist Ultra Miami?" opens the introduction; "Wann ist Ultra Miami?" and "Wo findet Ultra Europe statt?" are the section questions and FAQs; "Ultra Festival Kroatien" (Bing) in the Ultra Europe section, whose heading now says Kroatien |
| fr Ultra | "Quel est le prix d’un billet pour l’Ultra Music Festival ?" is the ticket FAQ; "Quand a lieu l’Ultra Miami ?"; French writes "l’Ultra", masculine |
| de EDC | "Was ist das EDC in Las Vegas?" opens the introduction; "Wann ist das EDC Las Vegas?"; German writes "das EDC" |
| fr EDC | "Quel est le prix d’un billet pour EDC Las Vegas ?" is the ticket FAQ; "festival EDC" (Bing) in the introduction |
| de UK garage | "Was ist Garage für eine Musikrichtung?" became the first FAQ ("Was für eine Musikrichtung ist UK Garage?"); de.wikipedia writes "UK Garage"; Speed Garage, 2step Garage, UK Garage Classics and Songs are all on the page |
| fr UK garage | the result titles ask "C’est quoi le UK garage ?", now the title and H1; "Quel est le style musical garage ?" is the first FAQ |

Rejected in each map with a reason: line-ups, dated editions, tickets as a
purchase, outfits, world-ranking questions, other Las Vegas venues, and for UK
garage the drum kits, sample packs and drum patterns (WRITING.md).

## Rules applied

- Every fact, figure, date, source URL, embed, image and caption credit is the
  English page's. Nothing was added. Imperial units converted (Ultra: 2.5 miles
  to 4 km; EDC: 30 mph to 48 km/h).
- Festival pages carry the owner's two mixes where the English ones do, and the
  owner's track inside the music section (Berlin Race 1909 in German,
  Dégénération in French), as on every translated festival guide. The UK garage
  pages carry the English page's two own tracks at the same positions.
- The English UK garage generator places media by paragraph index; the drafts
  place the same blocks with `[Bild: ...]`, `[Image: ...]`, `[Embed: ...]` and
  `[Tabelle: ...]`/`[Table: ...]` lines at the same positions.
- Internal links go to the translated guide where one exists, otherwise to the
  English page with "(auf Englisch)" / "(en anglais)".
- The four festival translations are registered in festival-editions.mjs.
- The three English pages changed in the head only: hreflang and the language
  switcher.

## Found on the way

The Skream photograph on the English UK garage page has no photographer or
licence, and nothing in the repository says where it came from. Logged open in
defects.json (`uk-garage-skream-photo-uncredited`); the translations keep the
English caption rather than guess a credit.
