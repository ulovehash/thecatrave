# Process audit: how a guide gets made, 10 November 2026

Scope: the five most recent guides that went from research to the push.

| Guide | Commit (UTC) | Session file |
|---|---|---|
| Brazilian funk (`/brazilian-funk-guide`) | 9 Nov 10:38 | `…thecatrave-article-topics-9d494d/669e4bb4-24a6-4aa2-aafb-085141573813.jsonl` |
| Amapiano (`/amapiano-guide`) | 9 Nov 11:44 | same |
| San Francisco clubs | 9 Nov 12:20 | same |
| Montreal clubs | 9 Nov 13:40 | same |
| Best summer electronic music festivals | 10 Nov 10:12, URL moved 10:41 | `…article-topics-research-c7f797/5eae6954-829c-490b-a49a-71694a15cadd.jsonl` |

Subagent files under each session's `subagents/` are included. The four 669e guides share one topic-research block (8 Nov 14:00–16:15: 10 topics, 9 guides shipped), so that block is charged at 1/9 per guide. Summer had its own research and carries all of it.

How it was counted:
- Assistant records were deduplicated by `message.id`.
- Tokens are input + output + cache read + cache write, from `usage`.
- Phases were assigned by tool call: Chrome or Keyword Planner calls are keywords, Commons and YouTube lookups are media, `gh run` is the push watch, and so on.
- Minutes are wall-clock time between records.

Scripts and raw results are in the session scratchpad: `m2.py` → `r2.json`, `r2meta.json`, and `m3.py`.

## 1. Cost per phase, averaged over the five guides

Average per guide: **20.6M tokens**. Wall clock was 98 minutes, or 61 minutes without idle time. About 136k of context is carried on every main-session message. Cache reads are 93–97% of every phase, so what drives the cost is **message count × context size**, not output.

Per guide: Brazilian funk 16.3M, amapiano 17.9M, San Francisco 17.0M, Montreal 16.4M, summer 35.6M. Summer's total includes 4.2M for the URL move and 3.05M for its review subagent.

| Phase | Tokens / guide | Share | Main msgs | Tools | Min | Model | What it changed in the page or keyword map |
|---|---:|---:|---:|---:|---:|---|---|
| Keyword research (Keyword Planner + SERP) | 5.20M | 25% | 39.5 | 49.5 | 5.8 | Opus (summer research: Sonnet + Opus) | The keyword map: `keywords/<page>.json`, so title, H2s, FAQ. Example: amapiano, 10 seeds, 4,045 ideas, one pass. |
| Sources and fact checks | 2.84M | 14% | 20.8 | 33.5 | 6.0 | Opus | The claims. The review files list what it removed: Brazilian funk 7 unsourced claims, amapiano 6. |
| Repo lookup (templates, usages) | 2.25M | 11% | 17.2 | 20.6 | 3.0 | Opus | Nothing on the page. It found files to copy. Every guide touched the same registration files that §9.3 already lists. |
| Build and checks | 1.71M | 8% | 12.4 | 13.6 | 7.8 | Opus | Caught failures on summer only: `audit-keywords` after the retitle, `noStrayRootPages`. No failing check is recorded on the other four. |
| Other main-context turns | 1.64M | 8% | 12.9 | 12.3 | 15.0 | Opus | Not classifiable from the transcript (planning, status lines, owner replies). |
| Media (images, embeds) | 1.42M | 7% | 10.8 | 10.8 | 2.6 | Opus | The images and players on the page. |
| Drafting | 1.36M | 7% | 9.4 | 9.8 | 3.5 | Opus | The page. |
| Push and CI watch | 1.16M | 6% | 8.2 | 8.8 | 12.4 | Opus | Nothing on the page. Amapiano's 2.52M / 23 min was four Pages-deploy reruns during a GitHub incident. |
| Context recovery after compaction | 1.00M | 5% | 7.2 | 7.4 | 1.8 | Opus | Nothing new. It re-found URLs and IDs already found, by grepping its own `.jsonl` and scratchpad. |
| Review subagent (summer only) | 0.61M | 3% | – | – | – | Sonnet | Summer: 2 Blockers, 7 Majors, all reader-facing (section 2, finding 9). |
| Fact subagents (San Francisco, summer) | 0.18M | 1% | – | – | – | Haiku | Fact rows for the ledger. |
| Git and dossier commits | 0.62M | 3% | 4.7 | 6.8 | 3.3 | Opus / Sonnet | The `TOPIC-DOSSIERS.md` record. Summer research alone: 12 msgs, 1.68M. |
| Topic research subagents (shared /9) | 0.41M | 2% | – | – | – | Sonnet | Which topics were chosen. |
| Stage 6 validator | 0.10M | <1% | – | – | – | Sonnet | The topic verdict. |
| Editorial review in main context (669e guides) | 0.08M | <1% | 0.6 | 0.6 | 0.1 | Opus | One message writing the review file. It records what the writer had already fixed. |
| Doc reading | 0.07M | <1% | 0.6 | 1.0 | 0.1 | Opus | Nothing measurable. |
| Idle (usage limit, owner) | 0 | – | – | – | 36.9 | – | – |

Compactions per guide: Brazilian funk 2, amapiano 3, San Francisco 4, Montreal 3, summer 6. After each one the session rebuilt about 42–56k of cache (`r2meta.json`), then grew back to about 200k.

## 2. Findings, ranked by tokens saved per article

Savings are projections, not measured runs. Each one is computed from measured message counts and the measured context per message:
- main session about 136k;
- Haiku fact subagents 17k (summer) and 65k (San Francisco);
- Sonnet research subagents 83k.

The projections overlap, so they do not simply add up. Realistic combined estimate: **10–12M of the 20.6M per guide.**

### 1. Run the Keyword Planner pass as one scripted pass in a subagent: about 3.6M saved

**Evidence**
- Keyword research averages 5.20M per guide over 39.5 main-session messages.
- Brazilian funk: 9.20M over 65 messages. That covers 23 `browser_batch` calls (64 actions) and 28 `javascript_exec` calls, with SERP, Wikipedia, Commons and YouTube reads mixed in.
- Summer research: 7.77M over 62 messages.
- Amapiano did the same job (10 seeds, 4,045 ideas, one pass) in **11 messages and 1.49M**.
- The cost difference is UI round trips, each carrying about 140k of context: account click, "Discover new keywords", seeds, location picker, Get results, filter removal, re-runs.

**What it contributed:** the keyword map. It is essential. What it doesn't need is the Opus writing session's 140k context on every click.

**Rewrite.** Add to `KEYWORD-METHOD.md`, after the paragraph on batching:

> **Running the pass.** The Keyword Planner pass runs in a subagent (`general-purpose`, model `sonnet`), never in the writing session, through Claude in Chrome on the owner's account. One pass: Discover new keywords, every seed in one submission (up to ten), All locations, English, Get results, then one `javascript_exec` per results page that returns every row as JSON. No screenshots of the table. The subagent writes the rows, the seeds, the tool and the date to `<scratchpad>/kp-<page>.json` and returns only the path, the row count and the top 60 rows by volume. It does not choose terms: the writing session reads the file, applies §§2–5 and `WRITING.md` (production and file intent stay out whatever the volume), and writes `keywords/<page>.json`. SERP checks for the chosen terms go to the same subagent: top 10 organic plus PAA, as text.

Add to `ARTICLE-PRODUCTION-WORKFLOW.md` §3, under "Keyword validation table": "The pass runs as `KEYWORD-METHOD.md` 'Running the pass' describes; the writing session sees the file, not the browser."

**Saving:** 15 subagent messages × 83k ≈ 1.25M, plus about 0.3M for the summary carried in main context, against 5.2M now. That is **about 3.6M per guide**, all of it moved off Opus.

**Quality risk**
- "Never research from memory" survives: the terms still come from Keyword Planner, now saved as a file the session reads.
- The decision about what to target stays with the writer, and so does the `WRITING.md` filter.
- Untested: whether a subagent can drive Claude in Chrome with the owner's signed-in Google. Test once before adopting.
- `model-switch-prompts.md` puts research on Opus. Here the judgment stays on Opus and only the clicking moves.

### 2. Fact, licence and embed lookups go to Haiku subagents that return quoted rows: about 2.7M saved

**Evidence**
- Sources and facts plus media average 4.26M per guide over 31.6 main messages.
- In the summer session the main context spent 2.21M on facts (17 messages, 130k each). Six Haiku fact subagents in the same session cost 0.24M in total (14 messages, **17k each**).
- San Francisco's Haiku fact subagents: 0.65M at 65k per message. Its main context still spent 2.92M on facts.
- Montreal: 3.65M of facts plus 1.34M of media, all in main context.

**What it contributed:** every fact and image on the page. Two jobs are mixed together here. Opening a URL and copying a sentence is mechanical. Deciding what the sentence supports is judgment.

**Rewrite.** Add to `ARTICLE-PRODUCTION-WORKFLOW.md` §6, before the draft rules:

> Fact, image and embed lookups run in Haiku subagents (model `haiku`), batched by about ten claims, images or videos each, never one by one in the writing session. Each returns rows, not opinions:
> - per claim: the claim, the URL opened, the sentence quoted from it, the date read, or "not found";
> - per image: the Commons file URL, author, licence, **the source field** and the pixel size;
> - per embed: the YouTube ID, the oEmbed `author_name` and title, and the upload description's first line.
>
> The writer pastes the rows into the facts ledger (finding 5) and decides what each one supports. A row marked "not found" is cut or qualified, never paraphrased back in.

**Saving:** 31.6 messages × 40k ≈ 1.3M, plus 0.3M carried back, against 4.26M. That is **about 2.7M per guide**.

**Quality risk**
- The ledger rule in `ARTICLE-EDITORIAL-REVIEW.md` (a URL you opened, for every dated, numeric or superlative claim) survives: the URL is still opened and now quoted, which is stricter.
- Licence protections are kept by naming the source field. The closed defects `australia-roundup-press-photo` and `canada-roundup-gallery-photo-unlicensed` were both a licence tag read without its source field.
- The embed row keeps the upload-description check, which closed `house-classics-french-kiss-wrong-recording`.
- Risk: Haiku misreads a page. The independent review (finding 9) is what has caught this kind of error before. Per defects.json, 28 defects were found by independent reviewers, 5 of them marked "the draft's fact pass" should have caught them. The writer's own fact pass in Opus missed those too, so moving it does not remove a safeguard that was working.

### 3. Start from the newest shipped sibling instead of searching the repo: about 1.6M saved

**Evidence**
- Repo lookup averages 2.25M and 17.2 messages per guide.
- Summer: 5.06M across research and writing (38 messages).
- Montreal: 1.65M. San Francisco: 1.51M.
- Each new guide's commit touched the same files: its `build-*-article.mjs`, its draft, `home-articles.mjs`, `pages.mjs`, `scripts/build.mjs`. San Francisco and Montreal also touched `club-guide-directory.mjs`.

**What it contributed:** nothing on the page. It rediscovered structure that a sibling builder already holds.

**Rewrite.** Add to `ARTICLE-PRODUCTION-WORKFLOW.md` §8, at the top:

> Start from the newest shipped sibling of the same type. Read its builder and draft once, copy them, and change the data:
>
> | Type | Copy from |
> |---|---|
> | Festival roundup | `build-summer-festivals-article.mjs` (on `festival-roundup.mjs`), its draft, `festival-editions.mjs` |
> | Club city guide | `build-mtl-clubs-article.mjs`, `mtl-clubs-draft.md`, `club-guide-directory.mjs` |
> | Genre guide | `build-amapiano-article.mjs`, `amapiano-guide-draft.md` |
>
> Registration is the list in §9 step 3. Do not grep the repo for how another page does something the sibling already does. Update this table when a newer sibling ships.

**Saving:** 17 messages down to about 5 is **about 1.6M per guide**.

**Quality risk:** a sibling can carry its own mistakes into the new page. The audits that read every page (`audit-media`, `audit-keywords`, `audit-banned-phrases`) still run on the copy, and the review reads it fresh. No rule is touched.

### 4. Targeted audits on the one page before the full gate, run once, output trimmed: about 1.0M saved

**Evidence**
- Build and checks average 1.71M, 12.4 messages and 7.8 minutes per guide.
- San Francisco: 2.12M over 15 messages. Summer: 1.96M over 14 messages and 12.3 minutes, plus 1.28M more for checks during the URL move.
- Summer's two failures came after full builds: `audit-keywords` after the retitle, and `noStrayRootPages`.
- Outside the sample, LA and Italo failed `audit-club-visits.mjs` and the media-reuse assertion only after a full build.
- On the other four guides, no check failed. The messages were spent reading long green output at 130–150k context each.

**What it contributed:** the gate, which is required. Running it repeatedly and reading all of its output adds nothing.

**Rewrite.** In `ARTICLE-PRODUCTION-WORKFLOW.md` §9, replace "6. Run the shared audit and the page-specific audit." with:

> 6. Build the one page with its generator, then run the audits that read its own records: `node audit-keywords.mjs`, `node audit-media.mjs`, `node audit-defects.mjs`, and `node audit-club-visits.mjs` for a club guide. Fix what they report. Then run `npm run check` once (all layers, vitals included), as `npm run check 2>&1 | tail -40`, and read only the failures. After a fix, rerun only the failing script, then the whole gate once at the end.

**Saving:** 12.4 messages down to about 5 is **about 1.0M per guide**. Each failure is caught minutes earlier.

**Quality risk:** none to the gate. All five layers still run before the push, and so does the pre-push hook. The vitals layer, whose omission caused `vitals-scans-hardcoded-port` and `unlighthouse-skips-i18n-home`, stays in through `npm run check`. Check once that each audit runs standalone at the repo root.

### 5. One background CI watch, not a polling loop: about 0.9M and 12 minutes saved

**Evidence**
- The push watch averages 1.16M, 8.2 messages and **12.4 minutes** per guide, all on Opus.
- Amapiano: 2.52M over 17 messages and 23.3 minutes, made up of `sleep` + `gh run watch` loops and four deploy reruns.
- Montreal: a 50-iteration loop, 11.7 minutes.
- In the summer session, a foreground watch hung for over 10 minutes, and the owner interrupted with "is it supposed to last for 10+minutes?".
- The memory file `run-gate-locally-dont-wait-for-ci.md` ("Do not poll `gh run watch` after every push") exists but **is not listed in `MEMORY.md`, so it never loads**. The same goes for `short-simple-answers.md`.

**What it contributed:** nothing on the page. The pre-push hook had already run the audits, html-validate and the link check.

**Rewrite.**
- Add to `MEMORY.md`: `- [Run gate locally, don't wait for CI](run-gate-locally-dont-wait-for-ci.md) — npm run check before push; one background watch, no polling`.
- In `ARTICLE-PRODUCTION-WORKFLOW.md` §14, add before step 1:

> 0. Push with the pre-push hook enabled. Start one background watch: `gh run watch <id> --exit-status > <scratchpad>/ci.log 2>&1`, with `run_in_background`, and continue. The harness reports when it exits. No `sleep` loops, no repeated `gh run list`. On failure, read `gh run view <id> --log-failed | tail -60` only. A Pages deploy that fails with green checks is on GitHub's side: rerun it once with `gh run rerun <id> --failed`. If it fails again, report it and stop.

**Saving:** 8.2 messages down to about 2 is **about 0.9M per guide**, and about 12 minutes of foreground waiting.

**Quality risk:** none. CLAUDE.md's "watch the run after pushing" still holds, because the run is watched and a red result still reaches the session. This also matches the memory rule.

### 6. Fix the URL, title, H1 and their labels before drafting: about 0.84M saved on average

**Evidence**
- `summer_urlfix` cost 4.21M (30 Opus messages): checks 1.28M, push watch 1.02M, and the rest on the move, the second build and the second gate.
- The cause was `/best-summer-edm-festivals` with Garbicz under an EDM headline, caught by the owner after the push (defect `edm-label-over-underground`).
- Its `should_have_caught`: keyword mapping "put the highest-volume phrase … on the URL, title and H1 without asking whether the word was true of every festival under it".
- Spread over five guides, that is 0.84M per guide.

**What it contributed:** the correct URL. It was needed, but it came one gate too late.

**Rewrite.** Add to `ARTICLE-PRODUCTION-WORKFLOW.md` §4, "Decision gate before writing":

> Before drafting, write down the URL, title, H1 and banner answer, and test every label word in them (EDM, techno, underground, UK, a city or a year) against every item the page will list. A word that is not true of all of them comes off the URL, title and H1. It may stay in a section about the items it fits (`WRITING.md`, "EDM means the commercial big-stage sound"). The URL is fixed here and is not changed after the push.

**Saving:** about 0.84M per guide on average, or 4.2M on the guide where it happens.

**Quality risk:** none. This moves the closed defect's protection earlier. `WRITING.md`'s EDM rule stays as written. It does not ask the owner anything, so it keeps the standing "just do it" rule.

### 7. A facts ledger file that survives compaction: about 0.8M saved

**Evidence**
- Context recovery averages 1.00M per guide: Montreal 1.40M over 10 messages, amapiano 1.33M over 10, San Francisco 1.26M over 8.
- The commands grep the session's own `.jsonl`. In Montreal, `J=…669e4bb4….jsonl` and `grep -o '"command":"[…'`. In amapiano, grepping for `hero.jpg` and the standard.co.uk and Yahoo URLs.
- The guides went through 2, 3, 4, 3 and 6 compactions, each followed by a cache rebuild of about 42–56k.

**What it contributed:** nothing new. It re-found things already found once.

**Rewrite.** Add to `ARTICLE-PRODUCTION-WORKFLOW.md` §11, "Minimum handoff artefacts":

> Keep a facts ledger at `<scratchpad>/<page>-ledger.md` from the first lookup, appended as each item is found:
> - every source URL with the sentence quoted;
> - every YouTube ID with its oEmbed title and channel;
> - every Commons file with author, licence and source field;
> - the keyword file's path.
>
> After a compaction, read this file first. Never grep a transcript `.jsonl` to recover a URL or ID. The review's fact-check ledger is built from this file.

**Saving:** 7.2 messages down to 1–2 is **about 0.8M per guide**. There will also be fewer compactions once findings 1 and 2 keep raw pages out of the main context, but that part is not projected here.

**Quality risk:** none. It is a record. It also makes the reviewer's job cheaper (finding 9).

### 8. Log dossier research in one commit: about 0.4M saved

**Evidence**
- Git and dossier commits average 0.62M per guide.
- Summer research alone: 12 messages and 1.68M, writing `TOPIC-DOSSIERS.md` and committing in pieces ("Log summer EDM worldwide pre-writing checks", "Re-estimate seasonal festival topics…", "Measure top 50 pages' traffic…").

**What it contributed:** the dossier record, which `TOPIC-RESEARCH.md` and the topic-research skill require.

**Rewrite.** Add to `TOPIC-RESEARCH.md`, "Running it":

> Write every candidate's dossier entry in one edit at the end of stages 1–5 and commit once. Not one commit per candidate or per stage.

**Saving:** about 0.4M per guide, mostly on festival rounds.

**Quality risk:** if the session dies before the edit, the research is lost. Mitigation: the subagents already return their stage results as text, and the edit is the first thing done once they return.

### 9. Keep the independent review, feed it the ledger, and stop reading the repo: about 1.85M saved per review (0.37M averaged over five guides as they ran)

**Evidence**
- Summer's Sonnet review subagent cost 3.05M over 26 messages (117k each, with a 199k cache write).
- It caught 2 Blockers and 7 Majors, all reader-facing:
  - B1, Houghton 2027 announced but shown as "not announced" in four places;
  - B2, Unknown Perception 2027 in April;
  - M1, Defqon.1 sold out;
  - M2 and M3, dates on the organisers' own sites;
  - M5–M7, unsourced claims and an embed with no evidence.
- It also made two errors of its own: the Waking Life date and the Gorge photo credit (m5).
- Across `defects.json`, **28 of 186 defects were found by independent reviewers**, 5 of them marked "the draft's fact pass" should have caught them.
- The four 669e guides had **no independent reviewer**. Each review file is one main-context message (0.08–0.15M) listing what the writer "fixed while writing".

**What it contributed:** more reader-facing corrections than any other safeguard in the sample.

**Rewrite.** Add to `ARTICLE-EDITORIAL-REVIEW.md` §1, "Required review inputs":

> The review runs as a fresh subagent (model `sonnet`) that did not write the draft. It gets:
> - the built page's text;
> - the draft;
> - the facts ledger;
> - `keywords/<page>.json` and `media/<page>.json`;
> - this file and `WRITING.md`;
>
> and nothing else from the repo. It re-opens the source for every dated, numeric or superlative claim and for every label word in the URL, title and H1. For other rows it checks a sample of the ledger. A review written by the drafting session says "not independent" in its verdict line.

**Saving:** about 3.05M down to about 1.2M is **1.85M per review**. Averaged over the five guides as they actually ran, it is only 0.37M, because four had no independent review.

**Quality risk:** a reviewer working from the ledger could trust the ledger. The rewrite keeps the re-opening for exactly the claim types that past reviewer catches came from (dates, figures, superlatives, sold-out status, labels). The reviewer's own errors in m5 and the Waking Life date mean its output still gets checked by the writer.

**Recommendation:** run this on every guide. That costs about 1.2M more on the four guide types that currently skip it, and the record shows it pays.

### 10. Mechanical steps run as subagents on a cheaper model: 0 tokens, about 4M per guide moved off Opus

**Evidence**
- `model-switch-prompts.md` (saved 9 Nov 08:18) says Sonnet for build, checks, commit, push and CI watching.
- Every main message of the four guides written after it (Brazilian funk, amapiano, San Francisco, Montreal: 101–116 messages each) and of summer's writing session was Opus (`r2meta.json`).
- The rule depends on the owner switching models by hand mid-task, and it was not followed once.
- Checks, push watch, git, context recovery and repo lookup together are 6.7M per guide on Opus.

**Rewrite.** Replace the "How to apply" line in `model-switch-prompts.md`, and add the same sentence to `ARTICLE-PRODUCTION-WORKFLOW.md` §9:

> Mechanical steps run as subagents with the `model` parameter, so no manual switch is needed:
> - Haiku: the gate (`npm run check`, failures only), the push and its background watch, fact and licence lookups;
> - Sonnet: the Keyword Planner pass and the independent review;
> - Opus: choosing terms, drafting, and judging what the facts support;
> - Fable: only a contested stage 6 verdict.
>
> Tell the owner to switch the main session's model only when the whole remaining task is mechanical.

**Saving:** no token saving. Findings 1, 2, 4 and 5 move about 4M per guide from Opus to Sonnet or Haiku.

**Quality risk:** a Haiku gate run could misreport a failure as a pass. Mitigation: the subagent returns the exit code and the failing lines verbatim, and the pre-push hook runs the gate again on its own.

## 3. The streamlined pipeline

**Opus, main session**
- Reads `TAKEN-KEYWORDS.md` and the dossier.
- Sends stages 1–5 to one Sonnet subagent per topic, which returns stage results and writes the dossier in one commit.
- Gets the stage 6 verdict from a fresh Sonnet subagent (Fable only when contested).

**Sonnet subagent: the Keyword Planner pass**
- Scripted, one submission, rows to a scratchpad file, plus top-10 SERPs as text.

**Opus chooses the terms**
- Writes `keywords/<page>.json` under `WRITING.md`'s exclusions.
- Fixes the URL, title, H1 and their label words against every item on the list.

**Haiku subagents: facts, licences and embeds**
- Return quoted rows into a ledger file that survives compaction.

**Opus drafts and builds**
- Drafts from the ledger.
- Builds from the newest sibling builder.

**Haiku subagent: the checks**
- Runs the page's own audits, then `npm run check` once, and returns failures only.

**Sonnet subagent: the independent review**
- Reviews from the page text, draft, ledger and checklist.
- Opus applies the fixes and the gate runs again.

**Haiku subagent: the push**
- Pushes from a clean worktree on `origin/main` and starts one background CI watch.
- Opus tidies the worktrees and reports.

## What could not be measured

- **Compaction calls.** They do not appear in `usage`. Only the cache rebuild after each one is counted.
- **Subagent wall-clock time.** Subagent minutes are not separated from the main session's.
- **Phase boundaries.** They come from tool-call rules, so they are approximate. Brazilian funk's SERP, Wikipedia and Commons reads fell into "keywords", which is why its sources line is near zero. 1.64M per guide stayed unclassified ("other main-context turns").
- **Projected savings.** They come from measured per-message context, not from a guide run the new way. Only a trial guide can confirm them.
- **Claude in Chrome from a subagent.** It is untested whether a subagent can drive Claude in Chrome on the owner's signed-in account. Finding 1 depends on it.
- **Overlap between topic research and the per-guide keyword pass.** The dossier holds only head terms for these topics (amapiano: "amapiano music 1K-10K; what is amapiano 100-1K"). So the per-guide pass was mostly new expansion. The re-measured head terms are a small overlap and are not counted as waste.
- **Idle time.** The transcripts do not separate usage-limit waits from the owner being away: Montreal about 38 min, summer research 67.7 min.

No rule in CLAUDE.md is removed. No closed `defects.json` entry loses its protection: findings 2, 4, 6 and 9 name the defects they touch and show the protection moving earlier or staying. Nothing here re-proposes an approach the owner has rejected. Nothing was edited except this file.
