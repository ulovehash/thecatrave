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
- **The main session coordinates. It does not translate.** It runs the brief, the keyword passes, the registration, the builds and the push. Each page is read and written by one Opus writer subagent per page (step 5), and reviewed by a Sonnet subagent (step 10). In batch 1 of de, fr and es, a step cost about 130k in every language. The cost per page rose from 2.0M to 4.4M only because the steps rose from 78 to 126 to 140, all in one context that carried every earlier page.
- **Step budget: about 40 main-session steps for a batch of six.** Every step costs at least 79k before any work (system prompt, rules, memory). A subagent step costs at least 58k, so a subagent pays off only when it saves the main session several steps.
- Models (say which one fits at each phase):
  - Sonnet subagent: the Keyword Planner pass, and the review with its fixes.
  - Opus subagent: the draft, the module and the keyword map, one page each.
  - Main session: registration edits, checks and the push.
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
   Write the SERP notes for the batch to `<scratchpad>/serp-<lang>-<batch>.md`, one heading per page, so the writers read a file, not the conversation.
5. **Writers: one Opus writer subagent per page, all started in one message** (`Agent`, `model: "opus"`). The main session reads none of the page files itself. Each writer's prompt carries:
   - that page's brief output, pasted as printed by step 1;
   - the TSV and SERP-notes paths, and which seeds belong to the page;
   - steps 5–7 of this file and the "Where calls go wrong" list, by reference: "follow `scripts/translate-run.md` steps 5–7".

   The writer:
   1. reads, in one parallel message: `WRITING.md`, the English draft, the sibling module and the sibling draft, and the TSV and SERP notes. It reads the media record only when there is no sibling;
   2. drafts the structure (step 6);
   3. writes the three files (step 7) in one parallel message;
   4. runs `node scripts/lint-draft.mjs <lang>/<key>-draft.md` and fixes what it reports.

   It does not build, and does not touch `pages.mjs`, `home-articles.mjs`, the festival or club data files, or another page: those are shared and the main session edits them. It returns only the three paths, the title, the H1 and the description, and the terms it marked "not measured". About 10 steps per page.
6. **Structure:** title, H2s, H3s and FAQ, each with its measured term and bucket, or "not measured". A term no tool returned is `volume: null`, never a guess.
7. **Write, in one parallel message per page:**
   - `<lang>/<key>-draft.md`, translated from the **English** draft. The sibling only gives the structure: the `[Image:]`, `[Embed:]` and `[Table:]` lines stay identical, in the same order.
   - `content/<lang>/<key>.mjs`: a copy of the sibling module with only the strings, paths and `lang` changed. Media keys, dimensions, IDs and credits stay as they are; only the alt text and captions are translated.
   - `keywords/<lang>-<key>.json`, in the sibling's format: `page`, `seed`, `source` (tool, account, date, location, "no data is not zero"), and `terms` with `term`, `volume` and `note` (where the term is used). `"page" is the built file, such as fr/defqon-1.html`, not the URL path, and terms are written with the apostrophe the page prints (’ in French).
8. **Register, in one parallel message of `Edit`s:** the lines the brief printed, adapted. For festivals, the registry entry needs the new path and a new-language argument in every `tri()` of that entry. Where the sibling language has no registry path (the es festivals have none), the planner lives in `content/festival-planning-data.mjs` instead: copy the sibling's block there, translated. A language cloned from another in that file (`data.fr` from `data.de`) copies only the blocks above its clone line: add any block defined below it. Each new festival language also raises the hard-coded count in `audit-next-festival-guides.mjs` by one. A club page (path matching `clubs` or `printworks-london`) also needs a layout in `content/club-visit-layouts.json` and, after its first build, a baseline in `content/club-visit-preservation.json` read from the built HTML. After step 9 or 11, re-record the baseline after any change to the title, description or H1. The brief prints the planner block's line range, the audit count, the sibling's layout entry and the `scripts/club-visit-baseline.mjs` command that writes the baseline: no grepping for any of them.
9. **Lint, build and check, in one Bash call for the whole batch,** never one per page:
   ```bash
   for d in <lang>/<key>-draft.md …; do node scripts/lint-draft.mjs $d || exit 1; done && node build-localized-articles.mjs <lang>/<key> <lang>/<key> … && node scripts/build.mjs --quiet && node audit-all.mjs --quiet && npm run check:html 2>&1 | tail -5
   ```
   Then, for club pages, the `scripts/club-visit-baseline.mjs` commands from the brief, in the same next call.
   - The lint knows the "whole DJ set" wording in all four languages and the localized Sources headings.
   - `--quiet` keeps warnings, failures (their last 40 lines) and every open-defect line with its age.
   - Fix everything, then run this step again. Don't rebuild after each fix.
10. **Review, one Sonnet subagent per page:**
    - Inputs: the translated draft, the English draft, the keyword map and `ARTICLE-EDITORIAL-REVIEW.md`.
    - Its first two calls are `Read` of `ARTICLE-EDITORIAL-REVIEW.md` and `WRITING.md`, whole, with no `head`, `sed` or byte limit. Before accepting the results, the main session runs `node scripts/translation-cost.mjs --reads` once: it lists each subagent and whether it read both files. Only a review without both is re-run. In Spanish batch 1 none of six did it.
    - It runs the `humanizer` pass in the target language and checks the translation against the English for facts, names, dates and the measured phrases, which must stay word for word.
    - It writes `<lang>-<key>-review.md`. The writer does not rule on their own draft.
    - The same subagent applies the fixes it is sure of to the draft and the module: wording, grammar, facts checked against the English, and measured phrases put back word for word. It does not build. It does not touch registration files, the shared data files or another page.
    - It returns only: the number of items, the number applied, and, quoted in full, each item it left open, with the reason. Live copy changed by a fix is shown to the owner as the exact wording, as `CLAUDE.md` asks.
11. **Open items only.** The main session rules on the items the subagents left open, applies them in one parallel message of `Edit`s, then runs step 9 once more. Never re-read a review file the subagent already applied: in French batch 1, applying 124 items in the writer's 110–165k context cost 6.4M tokens, a third of the batch.
12. **Once per batch:**
    ```bash
    npm run check:layout 2>&1 | tail -15 && npm run check:links 2>&1 | tail -5
    ```
    Then run `node scripts/translation-cost.mjs --pages <n>` once. It reads this session's transcript and its subagents', and prints the tokens, the main-session step count and the cost per page. Append the batch to `TRANSLATION-RESEARCH.md`, in 15 lines or fewer: the tool, date and locations; the decisions; what is "not measured"; and the cost line the script prints. Over 2M a page or 40 main steps: say which step overran, in the entry.
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
- **The cap is 24 browser calls per country,** not per page.
- **Start a fresh subagent for each country.** Never send the first country's subagent back for the second: it carries the first pass's context into every call. In Spanish batch 1 that made the second pass 3.7M, against 1.5M for one German pass. Both can start in one message only if they use different Chrome tabs; otherwise start the second after the first returns.
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
- The main session reading a page's drafts or modules to "check" a writer or reviewer. Its result is the check; the build and audits are the rest.
- Re-running every subagent when one failed. Re-run only the one that failed.
