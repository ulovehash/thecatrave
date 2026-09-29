# Trance guide editorial review

Reviewed: `trance-guide-draft.md` / `build-trance-article.mjs` / `trance-guide.html`, 2026-09-26.

## 1. Verdict

**Ready.**

## 2. What already works

- The build/breakdown/drop structural definition is stated once, precisely, in the intro and echoed (not repeated word for word) in the "What is trance music" section and the FAQ, giving the page one consistent technical spine instead of three competing definitions.
- Contested claims are named as contested rather than smoothed into a clean origin myth: the "first trance record" attribution to Paul van Dyk's 1993 Humate remix is explicitly flagged as a claim Wikipedia treats as unsettled, and the "King of Trance" / "Lord of the Trance" nicknames are kept as two separate, separately-sourced titles rather than collapsed into one.
- Armin van Buuren and Tiësto's mainstream-era rivalry is told through dated, checkable facts (DJ Mag's 2007-2012 poll run, the 2004 Athens Olympics opening ceremony) rather than assertions of importance.
- Psytrance is treated as a distinct branch with its own Goa lineage, not as a psychedelic flavor of Frankfurt trance, matching the keyword file's instruction that a "psy trance" searcher is not looking for A State of Trance history.
- Every figure named in the guide traces to `media/trance.json`'s six-source pass, and the two known gaps (Ferry Corsten / Above & Beyond, Robert Miles) are recorded as rejected-for-now rather than silently dropped or silently included.

## 3. Priority revisions

None outstanding. One revision was made during this review and is recorded below rather than left open.

- **Minor (resolved):** the introduction closed with a meta sentence ("This guide sets out what actually defines the sound, who built it, and where it split into the styles...") that announces the article's own roadmap instead of adding a fact, which is the site's established voice does not do (the acid house guide's intro ends on a concrete detail, not a summary of itself). Removed; the intro now ends on the DJ Mag poll fact.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Trance built structure: long build, breakdown to near-silence, full-force drop, 130-145 BPM, 6-9 min | fact | en.wikipedia.org/wiki/Trance_music | high | keep |
| Sven Väth (Eye Q, Harthouse, Omen) credited with shaping trance out of the Frankfurt scene | fact (attributed) | Wikipedia (originators source) | medium-high | keep, attributed to Wikipedia rather than stated as settled fact |
| Dag Lerner (DJ Dag) first to call his own music "trance" | fact | Wikipedia (originators source) | medium | keep |
| Paul van Dyk's 1993 Humate remix "sometimes called" the first trance record | contested claim | Wikipedia, flagged as contested | medium | keep, qualified (already correctly hedged in draft) |
| Simon Berry / Platipus Records / Art of Trance, early progressive-trance home | fact | Wikipedia (Platipus Records) | medium-high | keep |
| Armin van Buuren, DJ Mag readers' poll #1 five times, 2007-2012 | fact, dated | DJ Mag Top 100 DJs | high | keep |
| "King of Trance" nickname used by trade press, not self-applied | fact (sourced characterization) | DE Wikipedia, DJPOP, DJ Mag (per `media/trance.json`) | medium-high | keep |
| Tiësto (Tijs Verwest), 2004 Athens Olympics opening ceremony | fact, dated | widely reported, consistent with Wikipedia | high | keep |
| "Lord of the Trance" nickname for Tiësto | fact (sourced characterization) | live-search result distinct from Armin's, per `media/trance.json` | medium | keep |
| Psytrance: Goa scene, late 1980s/early 1990s, 140-150 BPM, 16th-note rolling bassline | fact | Wikipedia: Psychedelic trance | high | keep |
| Family table tempo ranges (progressive house, techno) | fact | general genre consensus | medium | keep, ranges are conventional and non-contentious |
| Selector catalogue: 64,242 total sets; 1,242 tagged trance/psytrance | fact, dated (measured) | `selector-data.json`, as of Sep 2026 | high | keep |

No claim in the draft required removal. No prediction language appears, so no inference-labeling was needed.

## 5. SEO preservation

- Title, meta description and H1 all express the same primary intent (definition plus who-built-it) without repeating one another verbatim.
- The primary question ("what is trance music") is answered directly within the first two sentences of the intro, and again in the dedicated "What is trance music" section and the FAQ, in each case in different wording.
- Every measured term from `keywords/trance.json` is present in visible copy: "trance music" (title, H1, throughout), "what is trance music" (FAQ question, near-verbatim), "trance artists" ("Trance's mainstream decade" section, FAQ), "trance djs" (added to "Trance's mainstream decade": "two trance DJs did more than anyone"), "trance festival" (added to "Trance today": "A State of Trance's own trance festival events"), "psy trance" (styles section, quoted exactly as the phrase readers search).
- The two additions above were the only wording changes made to satisfy `audit-keywords.mjs`; both sit inside sentences that already carried the surrounding fact, so neither reads as inserted for its own sake.
- FAQ visible text and `FAQPage` structured data are generated from the same draft headings by the same code path, so they cannot drift.
- H2s each carry a distinct job: definition, origins, mainstream breakthrough, subgenre taxonomy, comparison to house/techno, current state.

## 6. Coverage gaps

None required by intent or evidence. `media/trance.json`'s two known gaps (Ferry Corsten / Above & Beyond, Robert Miles) are correctly left out per the site's sourcing rule rather than added to round out the cast.

## 7. Cuts or merges

- Cut the intro's self-referential closing sentence (see §3).

## 8. Media actions

- Four figures (Armin van Buuren, Sven Väth, Paul van Dyk, Tiësto), each with a locally-hosted, openly-licensed Wikimedia Commons photograph and one catalogue DJ set, verified by YouTube oEmbed on 2026-09-26, none shared with another guide.
- A comparison table (trance/progressive house/techno/psytrance by tempo and structure) in the "Trance, house and techno" section, and a second table (five trance subgenres by name, alternate name and distinguishing trait) added to the "Trance styles and subgenres" section to bring that section's media coverage in line with the site's density rule.
- The owner's own remix ("Degeneration") placed in the mainstream-decade section on an honest tempo/context basis (132 BPM, inside trance's range, unrelated rhythm lineage), and the owner's own DJ mix placed in the closing section as a listening alternative; neither claims trance lineage.
- Fixed one build-order defect found during implementation: the origins section's figure/video sequencing could leave a video block directly adjacent to the next figure with no intervening paragraph when a slice range fell empty, which would have failed the site's media-adjacency rule; re-sequenced so Sven Väth's figure and video sit together before the paragraph that introduces Paul van Dyk.

## 9. Unresolved questions

None. No decision in this review requires user approval beyond the standing publish/push gate.

## 10. Final acceptance checklist

| Area | Status |
|---|---|
| Facts | Pass — no blocker, all contested claims correctly hedged |
| Editorial quality / humanizer pass | Pass — one meta-framing sentence removed; no em dashes, no stock AI vocabulary, no forced triads, no unearned "not X but Y" contrasts found |
| SEO preservation | Pass — all six measured terms present, title/H1/description distinct, FAQ matches structured data |
| Media | Pass — four verified figures, two comparison tables, adjacency defect fixed |
| Implementation readiness | Pass — `node audit-all.mjs`, `npm run check:html`, `npm run check:layout`, `npm run check:links` all green |
