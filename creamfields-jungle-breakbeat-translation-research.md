# Creamfields, jungle and breakbeat: German and French translation handoff

Prepared 23 September 2026.

## Decision

Asked for the next three guides with no translation, by the measured German
and French demand in TRANSLATION-RESEARCH.md: Creamfields (volume DE 300 + FR
200, traffic potential 10 + 150), jungle (150 + 300, TP 20 + 350) and
breakbeat (250 + 100, TP 70 + 20). All three are translated.

Breakbeat was paused before translation: every image on the English page comes
from a rights-reserved source (MusicRadar, RBMA, a shop photo, an eBay listing,
Bandcamp Daily, El País), and bass music, next by traffic potential, hotlinks
rights-reserved images too. Both are logged open in defects.json
(`breakbeat-guide-rights-reserved-images`, `bass-music-guide-hotlinked-images`).
The owner decided on 23 September 2026 to translate breakbeat with its images
as they are on the English page, so the two translations carry the same images
and the defect now covers three pages until the English images are replaced.

## Search check

No Ahrefs units spent. Google answered one query before returning its bot check,
which was not bypassed; the rest came from Bing de-DE and fr-FR.

- Jungle, France: the French stage 2 pull flagged the band Jungle as the parent
  topic. The live results settle it: fr.wikipedia's "Jungle (musique)" ranks
  first, and "Autres questions" asks "Qu'est-ce que la jungle music ?" and
  "C'est quoi la jungle musique ?" beside the band questions. The French title
  and H1 carry those questions; the band's searches are rejected.
- Jungle, Germany: result titles write "Jungle Musik" and ask "Was ist Jungle?";
  Bing's related searches for the bare word are the band.
- Creamfields: both languages search the bare name and "creamfields festival".
- Breakbeat: de.wikipedia and fr.wikipedia rank first; German adds "breakbeat
  musik" and "Was ist Breakbeat?", French "musique breakbeat". Sample, drum
  kit and pattern searches are rejected (WRITING.md).

## Rules applied

- Every fact, figure, date, source URL, embed and image is the English page's.
  Imperial units converted (Creamfields: 19.6 miles to 31.5 km, 26 miles to 42
  km). French explains the August Bank Holiday once, as the late-August public
  holiday.
- Creamfields carries the owner's two mixes and the owner's track in its music
  section (Berlin Race 1909 in German, Dégénération in French), as every
  translated festival guide does, and is registered in festival-editions.mjs.
- Jungle: the English body is hand-kept HTML placed by paragraph markers in
  build-jungle-article.mjs. The drafts place the same 26 blocks with
  placeholder lines at the same positions; content/jungle-media.mjs builds the
  players shared by both languages, and each language's module builds its own
  figures and tables. The owner's two tracks stay where the English page plays
  them. The FAQ follows the acknowledgements rather than preceding them,
  because the shared generator puts every FAQ after the last section.
- The jungle guide's seven images carry no credit on the English page either;
  logged open (`jungle-images-uncredited`) and kept as the English page has
  them.
- Breakbeat: the English generator places listening groups before
  subheadings and images after paragraphs, by their opening words; the drafts
  place the same blocks at the same positions. content/breakbeat-media.mjs
  holds the shared players and redraws the history map with translated labels
  (same geometry, links and dates); labels were shortened where they overran
  their boxes. The Chemical Brothers photograph is not on the English page (its
  paragraph key no longer matches) and is not on the translations. Sections
  keep the English classes (build-localized-articles.mjs now passes
  `sections[].className`).
- The three English pages changed in the head only: hreflang and the language
  switcher.
- The French UK garage page (published earlier today) got a non-breaking space
  before the "?" of its H1, as the new French pages have, so the question mark
  does not wrap alone. No wording changed.
