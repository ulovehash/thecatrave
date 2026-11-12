# Translating a guide: fixed run sequence

For translating an English guide into German, French or Spanish, or adding a
new language. I measured the September–November translation sessions from their
transcripts. A page cost 2–6M tokens, and the worst batch cost about 34M.
Writing the translation took only 1–14% of that. The rest went to:

- build and check loops: 25–40%. A full `audit-all.mjs` printed 61 KB on every run, even a passing one.
- repo lookup: 15–35%. Finding the sibling module, the draft and the registration lines.
- keyword and SERP work: 10–40%. One Keyword Planner pass per page, and retries against Google's bot check.

Cache reads were 93–97% of those tokens. So the cost is the number of calls
times the context size. This sequence cuts the calls. It does not cut the
prose, the keyword evidence or the review.

The rules still come from `SITE-COMPONENTS.md` §Translations (the module
contract), `WRITING.md`, `AGENTS.md` and `ARTICLE-PRODUCTION-WORKFLOW.md` §6
(the review). This file only fixes the order and the number of calls.

## Batches and sessions

- **One fresh session per batch.** A batch is one language and up to about six pages. Every call pays for the earlier conversation in context, which cost 4–5M in the article trial.
- **Batch by language,** because Keyword Planner is set to one country and one language at a time. One pass then covers every page in the batch.
- Models (say which one fits at each phase):
  - Sonnet subagent: the Keyword Planner pass, and the review.
  - Opus: the draft and the module strings.
  - Haiku: registration edits, checks and the push.
- **Don't read `TRANSLATION-RESEARCH.md` whole** (31 KB). Run `tail -30` once to see the format, then append the batch's entry.
- Don't open other translations, other modules or the English HTML. The brief names every file the page needs.

## Sequence

1. **Brief, one Bash call for the whole batch:**
   ```bash
   for p in <english-path> <english-path>; do node scripts/translation-brief.mjs $p <lang>; echo; done
   ```
   For each page, it prints:
   - the English draft, media record and keyword map;
   - the existing translations;
   - the sibling to start from;
   - the sibling's registration lines (pages row, catalogue card, festival planner paths, festival editions);
   - the files to create;
   - the check command.

   This replaces the searching. If the brief says the page exists, the job is an update: see "Updating" below.
2. **Taken terms, one Bash call:** grep each seed in `TAKEN-KEYWORDS.md`.
3. **Keywords: one Keyword Planner pass per country** for the whole batch. It is a Sonnet subagent following `scripts/kp-run.md`, with the changes in "Keyword Planner, country and language" below. It writes `<scratchpad>/kp-<lang>-<batch>.tsv`.
4. **Live wording, at most one SERP attempt per page:**
   - Google with `hl`/`gl` for the language, for People also ask and related searches.
   - On a bot check, Bing once in the same locale. Never bypass a check.
   - If both fail, the wording comes from the Keyword Planner rows and the terms stay "not measured".
5. **Read, in one parallel message:**
   - the English draft;
   - the sibling module and the sibling draft;
   - `WRITING.md`;
   - the batch's TSV and SERP notes.

   Read the media record only when there is no sibling.
6. **Structure:** title, H2s, H3s and FAQ, each with its measured term and bucket, or "not measured". A term no tool returned is `volume: null`, never a guess.
7. **Write, in one parallel message per page:**
   - `<lang>/<key>-draft.md`, translated from the **English** draft. The sibling only gives the structure: the `[Image:]`, `[Embed:]` and `[Table:]` lines stay identical, in the same order.
   - `content/<lang>/<key>.mjs`: a copy of the sibling module with only the strings, paths and `lang` changed. Media keys, dimensions, IDs and credits stay as they are; only the alt text and captions are translated.
   - `keywords/<lang>-<key>.json`, in the sibling's format: `page`, `seed`, `source` (tool, account, date, location, "no data is not zero"), and `terms` with `term`, `volume` and `note` (where the term is used).
8. **Register, in one parallel message of `Edit`s:** the lines the brief printed, adapted. For festivals, the registry entry needs the new path and a new-language argument in every `tri()` of that entry.
9. **Lint, build and check, in one Bash call:**
   ```bash
   node scripts/lint-draft.mjs <lang>/<key>-draft.md && node build-localized-articles.mjs <lang>/<key> && node scripts/build.mjs --quiet && node audit-all.mjs --quiet && npm run check:html 2>&1 | tail -5
   ```
   - The lint knows the "whole DJ set" wording in all four languages and the localized Sources headings.
   - `--quiet` keeps warnings, failures (their last 40 lines) and every open-defect line with its age.
   - Fix everything, then run this step again. Don't rebuild after each fix.
10. **Review, one Sonnet subagent per page:**
    - Inputs: the translated draft, the English draft, the keyword map and `ARTICLE-EDITORIAL-REVIEW.md`.
    - It runs the `humanizer` pass in the target language and checks the translation against the English for facts, names, dates and the measured phrases, which must stay word for word.
    - It writes `<lang>-<key>-review.md`. The writer does not rule on their own draft.
11. **Fixes, in one parallel message of `Edit`s,** then step 9 once more.
12. **Once per batch:**
    ```bash
    npm run check:layout 2>&1 | tail -15 && npm run check:links 2>&1 | tail -5
    ```
    Then append the batch to `TRANSLATION-RESEARCH.md`, in 15 lines or fewer: the tool, date and locations; the decisions; what is "not measured".
13. **Push** only as `CLAUDE.md` and the owner's standing rules say: from an isolated worktree on `origin/main`, then watch the gate.

## Keyword Planner, country and language

`scripts/kp-run.md`, with these changes:

- **Step 6.** Seeds are the batch's head terms in the target language, plus the English names people search unchanged (festival and club names). Up to 10 per submission. A batch of six pages is two or three submissions in the same session, as in "a second seed set".
- **Step 7.** Location and language:
  - Remove the United States and add the country: Germany for de, France for fr, Spain for es.
  - Set the language to the target language.
  - Spanish has a second pass, as in batch 1: Mexico, Argentina, Colombia and Chile together.
- **Before step 9,** one `javascript_tool` call:
  ```js
  window.KP_TARGET = { location: 'Germany', language: 'German' }
  ```
  `kp-extract.js` then reports `locationOk` and `languageOk` for that target. Step 10 checks those two instead of `allLocations` and `english`.
- **The cap is 18 browser calls per country,** not per page.
- **A seed with no row is "no data", not zero.** When a page's seeds all return nothing:
  - no Ahrefs and no extra Planner passes for it (Ahrefs stays the documented fallback in `KEYWORD-METHOD.md`, for a batch, never per page);
  - its map records `volume: null`;
  - its wording comes from the live SERP or Bing.

## Updating a published translation

An approved English edit is carried to every translation in the same pass. The
translated wording is shown for approval first, as for any edit to live copy.

1. Run the brief for one language to list every translation of the page.
2. Edit each `<lang>/<key>-draft.md`, never the HTML.
3. Build each language with `node build-localized-articles.mjs de/<key> fr/<key> es/<key>`, then run step 9's checks once.

## Where calls go wrong

- Grepping for siblings, registry entries or catalogue cards. The brief has them.
- Running `node audit-all.mjs` without `--quiet` in the loop: 61 KB per run, against 1.7 KB.
- One Keyword Planner pass per page, or Google SERP retries after a bot check.
- Reading `TRANSLATION-RESEARCH.md` or a whole English builder to learn the format.
- One `Edit` per string in a module. Write the module once from the sibling.
- Rebuilding after each fix, or re-reading a file just written.
