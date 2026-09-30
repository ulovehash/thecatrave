# State of electronic music editorial review

Review date: 2026-09-29

## 1. Verdict

**Ready for review.** The factual, language, SEO and magazine-editing passes are complete. The article now leads with seven numbered conclusions. Interview guests provide selective evidence inside those conclusions rather than determining the paragraph structure.

## 2. What already works

- The opening answers the primary question in the first visible callout.
- The article now moves through seven explicit findings, from discovery and creative pressure to infrastructure, platform control and sustainability.
- Every interview-based claim is attributed and linked to a useful timestamp.
- The method states the sample size, time window, duration, selection rule and limitations.
- Concrete examples carry each section: ATW as infrastructure after individual success, Avalon Emerson's band economics, Barker's human-timed system, Hyperdub's support for Loraine James and Annie Mac's event schedule built around parenting.
- The conclusion gives the reader actions without claiming that the interviews form a universal career formula.
- The article does not use downloaded Resident Advisor thumbnails or rights-reserved press photographs.

## 3. Priority revisions

### Major, implemented

1. **Correct the editorial premise.** “I watched 39 interviews” overstated the method because the first research pass used caption tracks and timestamped passages. The H1 now asks what happens after a breakthrough and identifies the piece as lessons from 39 Resident Advisor interviews.
2. **Remove abstract language.** Phrases including “protect creative friction,” “redesign the career” and “middle-layer infrastructure” were replaced with the actual decisions: keep one project away from audience expectations, assign every business task and support clubs, labels, radio, shops and publications.
3. **State the sample limits.** The method now says that Resident Advisor selects the guests, several interviews accompany releases, retrospective accounts can make accidents look planned and 39 people cannot represent the industry.
4. **Qualify current datasets.** The DJ INDEX figure is dated to the check on 29 September 2026 and described as a set of tracked acts. The NTIA figure is tied to the February 2026 report and to UK nightclubs.
5. **Remove any suggestion that captions were audio-verified quotations.** The article uses paraphrase and the Sources note now states that public captions supplied the working text.
6. **Make the conclusions control the article.** Person-by-person context was compressed into synthesis paragraphs. Each main section now begins with a numbered finding, and the method moved behind the practical checklist.

### Minor, implemented

- Replaced “a viral track can introduce an artist to thousands” with the unquantified “many listeners.”
- Replaced “permanent job description” with the concrete pressure to keep making the same record.
- Replaced the report-like question headings with a narrative sequence while preserving the same evidence and search language.
- Opened with the contrast between Marlon Hoffstadt's rapid visibility and Takuya Nakamura's three decades of work before viral discovery.
- Converted the seven recommendations into an accessible table for quicker scanning.

## 4. Fact-check ledger

| Claim | Type | Best source | Confidence | Action |
|---|---|---|---|---|
| The corpus contains 39 interviews published from 1 October 2025 to 23 September 2026 | Measured fact | `research/ra-interviews/inventory.json` generated from YouTube API metadata | High | Keep |
| Total duration is 29.7 hours and the median is 46.5 minutes | Measured fact | Seconds in `research/ra-interviews/inventory.json`, locally calculated | High | Keep |
| The source list contains editorial interviews of at least 15 minutes and excludes sets, documentaries and promotional profiles | Method | `scripts/research-ra-interviews.mjs` and `research/ra-interviews/README.md` | High | Keep and state visibly |
| Marlon Hoffstadt connects renewed attention to TikTok, lockdown behaviour, consistency and existing relationships | Attributed experience | [Resident Advisor interview, 28:06 and 56:55](https://www.youtube.com/watch?v=7ziw8cl4xGo&t=1686s) | Medium for generalisation, high for attribution | Keep attributed |
| Dixon says rapid trend cycles leave too little time for stable communities | Attributed interpretation | [Resident Advisor interview, 11:50](https://www.youtube.com/watch?v=aAVYC3GXYgY&t=710s) | Medium | Keep attributed; do not present as measured causation |
| Barker's system makes machines follow human timing | Description of working method | [Resident Advisor interview, 9:28](https://www.youtube.com/watch?v=7iYuPLBUVFc&t=568s) | High | Keep; exact track added as listening evidence |
| The top one percent of 4,408 acts receive 36 percent of combined monthly Spotify listeners | Current external dataset | [DJ INDEX, State of Electronic Music](https://dj-index.com/state-of-electronic-music) | High for the site's tracked sample, low as a measure of the whole industry | Keep with sample and check date |
| The UK had 823 nightclubs and a 36 percent decline since March 2020 | Dated industry statistic | [NTIA Fourth UK Electronic Music Industry Report](https://storage.googleapis.com/ntia-hosted-pdfs/The-Fourth-UK-Electronic-Music-Industry-Report-8th-Feb-2026.pdf) | High within report methodology | Keep with UK and February 2026 scope |
| Spotify's licensing arrangements can favour production companies and platforms | Reported industry claim | [Liz Pelly interview, 25:29](https://www.youtube.com/watch?v=JeBKZnCComk&t=1529s) | Medium in this article because the book reporting was not independently reconstructed | Keep clearly attributed to Pelly's reporting |
| AI service terms and copyright rules change | Current legal caution | Service-specific terms and applicable law | High | Avoid legal conclusions; retain release-checklist disclaimer |
| `Stochastic Drift` is an exact Barker track released in 2025 | Release fact | [Spotify track](https://open.spotify.com/track/71WOzqtJI1CNFC38454Aih) and [Barker Bandcamp](https://sambarker.bandcamp.com/track/stochastic-drift) | High | Keep exact-track embed |

No historical first, unqualified causal claim or direct interview quotation remains in the article.

## 5. SEO preservation

This is a new page, so there is no legacy URL or Search Console language to preserve.

The following approved language must survive implementation:

- `Electronic Music Trends in 2026` in the SEO title and direct-answer label;
- `Resident Advisor interviews` in the H1, description and body;
- the stable canonical `/state-of-electronic-music`;
- natural secondary coverage of viral tracks, music careers, DJ technique, independent musicians, clubs, streaming, burnout and AI.

The H2s form a readable narrative while still covering the reader questions behind the primary intent. The article excludes market forecasting, genre predictions, a Resident Advisor directory and a general AI-tools guide.

## 6. Coverage gaps

No additional editorial section is required. Exact Keyword Planner volume remains unavailable and is recorded as unmeasured in the keyword map. That limits confidence in the head term's demand, but it does not create a factual or structural gap in the article.

The page should be reassessed after it has Search Console data. If queries cluster around one practical question, that question may deserve a separate article rather than a longer section here.

## 7. Cuts or merges

- No 39-person directory. Names appear only when they support a specific decision.
- No separate FAQ. The H2 questions already answer the demonstrated reader gaps.
- No broad market-size section. Two external datasets are used only to check the interview pattern around concentration and club infrastructure.
- No collection of artist biographies, release descriptions or generic career advice.
- No repeated final summary of all seven sections.

## 8. Media actions

- **Implemented:** original `Seven questions for musicians and DJs` graphic in SVG, PNG and responsive webp formats for the article index card. It was removed from the article body so readers reach the findings sooner.
- **Implemented:** original `Growing attention / shrinking infrastructure` comparison graphic in SVG, PNG and responsive webp formats. It combines the dated DJ INDEX and NTIA figures already used in the article.
- **Implemented:** Marlon Hoffstadt interview after the section about viral attention.
- **Implemented:** exact Spotify track `Stochastic Drift` after Barker's production method is explained.
- **Implemented:** Liz Pelly interview after the section about streaming and scene infrastructure.
- **Implemented:** Two Shell interview after the AI checklist.
- **Rejected:** Resident Advisor thumbnails and press photographs because no reuse licence was established.
- **Required before completion:** confirm the three YouTube embeds and Spotify player load without configuration errors.

## 9. Unresolved questions

- Google Keyword Planner volume remains unmeasured because no Google Ads account was selected.
- YouTube auto-captions can mishear names. The article uses paraphrase, but any later addition of a direct quotation must be checked against the audio.
- AI terms and law are time-sensitive. The section will need review if the page is updated.

## 10. Humanizer review

The repository's humanizer skill ran in file mode with `find-new-music-draft.md` as the published voice sample. A second music-magazine editing pass then removed the report rhythm, built a continuous argument and kept the prose concrete. It retained facts, names, dates, timestamp links and the exact keyword phrase.

Final language checks:

- no em dashes;
- no “not just X but Y” construction;
- no decorative bold labels;
- no stock “pivotal,” “vibrant,” “landscape,” “testament,” “delve” or “crucial” language;
- no one-line closer that repeats the previous paragraph;
- `thecatrave` remains lowercase.

## 11. Final acceptance checklist

- Facts and attribution: **pass**
- Method and limitations: **pass**
- Editorial usefulness: **pass**
- Humanizer and site voice: **pass**
- Primary-intent coverage: **pass**
- SEO preservation: **pass for a new page; volume unmeasured and disclosed**
- Media selection and licensing: **pass**
- Layout readiness: **pass**
- Live embed verification: **pending technical QA**


---

## Evidence addendum, 2026-09-30

Written under `ARTICLE-EDITORIAL-REVIEW.md` §0. This addendum does not replace the review above; it adds the evidence that review did not record. **It is not independent:** the same agent that scanned the page wrote it, it was run with the shell offline, and no live URL was opened in this pass. Nothing in the copy was edited. Proposed wording is listed under "Findings" and waits for the owner.

Page checked: `state-of-electronic-music.html` (built text, article body, sources section excluded).

### Greps on the built page

- `complete|full|whole|uninterrupted|an hour|in full`: 1 hit(s)
  - Musicians cannot control the whole system.
- `jungle|drum and bass|breaks` (this is not a drum and bass guide unless stated): 5 hit(s)
  - Nakamura appeared to many listeners through short clips of trumpet over jungle, but those clips landed after roughly three decades spent moving between jazz and electronic music.
  - Sub Focus describes drum and bass growing in the United States through repeated touring and committed local audiences before larger rooms followed.
  - Calibre uses vocal music to step away from the demand for functional drum and bass.
  - Article by thecatrave Breakbeat, bass and rave DJ, producer and selector.
  - Support ↗ Protect Ya Breaks by thecatrave Berlin Race 1909 by thecatrave Continue reading Read next.
- `Wikipedia` in the body: 0 hit(s)
- `not .* but`: 1 hit(s)
  - Avalon Emerson's band opened a part of music that DJing could not, but touring it costs more and initially reaches fewer people.
- `matters`: 4 hit(s)
  - Across 39 Resident Advisor interviews, the same conclusions kept returning: a viral track needs somewhere to lead; longevity requires room to change; independence depends on shared labour; technique matters only when it changes th
  - Finding 01 Attention matters only when it leads somewhere.
  - ( 28:06 , 56:55 ) Dixon explains why the difference matters: when trends turn over every few months, the people around them have little time to form habits, venues, labels or a shared memory.
  - Finding 03 Technique matters only when it changes what we hear.
- `the point`: 0 hit(s)
- Superlatives (`best-known|most famous|largest|biggest|legendary|world's`): 0 hit(s)

Hits that are the owner's own mix or Bandcamp copy ("Thirty tracks where breaks move…", "Protect Ya Breaks", "Berlin Race 1909", the author card) are protected promotion and are not counted as defects.

### Listening, links and reuse

- Embeds on the page: youtube=7ziw8cl4xGo,JeBKZnCComk,3mf1cbeQPqw spotify=track/71WOzqtJI1CNFC38454Aih soundcloud=0. The IDs are from the built HTML. Channel, view count and oEmbed result were **not** re-checked in this pass.
- Internal links: /german-electronic-music /best-clubs-in-berlin /best-clubs-in-paris /best-clubs-in-barcelona. None was justified individually in the original review.
- Figures: 1; shared with other pages: none. Checked against every other page's `<figure>` images after normalising size suffixes; the author photo is excluded.
- Owner promotion present: Bandcamp tracks (protect-ya-breaks,berlin-race-1909) and own-set players. Protected.

### Humanizer record

No humanizer pass was re-run here. The review above mentions the humanizer 3 time(s) but records no before/after sentences, so the earlier pass is unevidenced. The grep hits above are the candidates it should have caught.

### Stage 6

`state-of-electronic-music-research.md` exists but does not mention Stage 6, so no validation is recorded. This addendum does not supply one.

### Findings (owner decision needed, nothing applied)

- Two findings are headed with the same shape ("Attention matters only when it leads somewhere", "Technique matters only when it changes what we hear") and the summary sentence repeats the form. Parallel slogans are an AI tell; vary or drop them. No rewrite proposed because the headings are the article's structure.

### Open items

- Known failure: the audit reports no media map for this guide (pre-existing).
- The quoted timestamps from 39 Resident Advisor interviews were not re-checked.
