# Pipeline trial: phonk guide (2026-11-10)

One guide (`phonk-guide.html`) made with the pipeline proposed in `PROCESS-AUDIT-2026-11-10.md`. Subagents ran one at a time on fixed models. The audit's doc rewrites were not applied. Nothing is committed or pushed.

## Tokens

Measured the same way as the audit: assistant records deduplicated by `message.id`, input + output + cache read + cache creation, main session from 12:45:01, plus every subagent jsonl.

| Part | Model | Tokens | Output | Note |
|---|---|---|---|---|
| Main session (plan, draft, builder, fixes) | Opus | 8.08M | 67k | 59 calls, 105k–176k context each |
| Keyword Planner pass | Sonnet | 6.45M | 39k | 174 rows |
| Keyword Planner artist pass | Sonnet | 1.35M | 25k | returned no artist names |
| PAA and facts | Haiku | 1.21M | 5k | partial |
| Images, embeds, licences | Haiku | 3.71M | 57k | good |
| Site checks | Haiku | 0.19M | 3k | found 2 real failures |
| Editorial review | Sonnet | 0.63M | 17k | 8 must-fix |
| **Total** | | **21.6M** | | push and watch not included |

The app's subagent notifications report much smaller numbers (95k for the KP pass, 69k for checks), because they leave out cache reads. Use the jsonl figures to compare against the audit.

Cache reads are 98% of the total in every part. Tokens are driven by how many calls a part makes times how big its context is, not by how much it writes.

## Against earlier guides

| | Total | On Opus |
|---|---|---|
| Audit average (5 guides) | 20.6M | about all |
| Brazilian funk | 16.3M | about all |
| Amapiano | 17.9M | about all |
| **Phonk trial** | **21.6M** (about 22.8M with a 1.2M push) | **8.1M (37%)** |

**Raw tokens: no saving.** The trial used about 5% more than the average and 30% more than amapiano.

**Model mix: real saving.** 13.5M of the 21.6M (63%) ran on Sonnet and Haiku, which cost much less per token than Opus. Earlier guides ran almost entirely on Opus. Opus usage fell from about 17–20M per guide to 8.1M.

**The 8.1M on Opus is inflated.** The session started with the whole audit conversation already in context, so each call carried about 70–90k tokens that had nothing to do with phonk. Across 59 calls that is roughly 4–5M. In a fresh session the main part would be about 3.5M, and the total about 17M.

By phase, against the audit averages:

| Phase | Audit avg | Trial | Verdict |
|---|---|---|---|
| Keywords | 5.20M Opus | 7.80M Sonnet | more tokens, cheaper model |
| Sources and facts | 2.84M | 1.21M Haiku + Opus re-pull | partly worked |
| Media | 1.42M | 3.71M Haiku | more tokens, cheaper model, good result |
| Checks | 1.71M | 0.19M Haiku + fixes | clear win |
| Review | 0.61M (summer) | 0.63M Sonnet | same cost, high value |

## Quality

The quality call here belongs to the independent Sonnet review (`phonk-editorial-review.md`), not to the writer.

- First draft: "ship after fixes", with 8 must-fix and 9 should-fix. The summer guide's review gave 2 Blockers and 7 Majors, so this is a similar level of first-draft error.
- After the fixes: every audit, html-validate, layout and link check passes. The page has 5 local CC images, 8 record embeds and 2 sets, which matches amapiano and Brazilian funk.
- Weak spot: "the best phonk songs" rests on "known for" lines. No ranked list was found, so that section says less than the keyword (1K) promises.
- Not recorded: a separate humanizer pass.

## What works

1. **Keyword Planner in a Sonnet subagent.** 174 rows, structured output, and the writer never saw the browser. The result was right.
2. **Images and embeds in a Haiku subagent.** Licence checks were sound. It excluded a photo whose identity was unconfirmed and a too-small file, and flagged an EXIF author mismatch.
3. **Checks in a Haiku subagent.** 0.19M against an average of 1.71M, and it found the 2 real failures (a banned self-description and a stale OG cover).
4. **Independent review in a Sonnet subagent.** It caught errors the writer made against rules the writer had read: Wikipedia named 20 times in the body, X-Raided filed under Memphis, a causal overclaim repeated four times, a self-contradiction, and process notes. This is the step that most improved quality.
5. **Sequential subagents.** No collisions, and each result was in hand before the next step needed it.

## What does not work

1. **The KP Chrome subagent is the biggest consumer (6.45M).** Screenshots were not the cause; there were only about 11. The cause was 61 calls with context growing to 165k: 37 JavaScript calls exploring the DOM, page-text dumps, and rows printed in 36-row chunks, twice. The audit predicted about 3.6M saved here, and none of it came through. Fix: `scripts/kp-extract.js` reads every page in one call, run in the fixed sequence in `scripts/kp-run.md` (about 15 calls, capped at 18). Tested on a mock table; it still needs one real run.
2. **Keyword Planner cannot replace FIGURES.md source 1.** Artist seeds return search phrases, not artist names. Source 2 (`also_talk_about`) is Ahrefs-only and was skipped. The figure list leaned on Wikipedia and one Equipboard list. For figures, either Ahrefs stays (with owner approval) or FIGURES.md has to say what replaces it.
3. **The Haiku facts subagent was not enough.** It found 1 of 3 consensus lists, cut quotes short and misattributed some. The writer then pulled the full Wikipedia text again on Opus. Fix: fetch full text through the API and store it in the ledger. Haiku can find sources, but it should not summarise them. Done: `node scripts/media-lookup.mjs wiki-text` stores each article's full text with its revision, as step 7 of `scripts/media-run.md`.

The media pass itself (3.71M, 33 calls, 57k of self-written lookup scripts) now runs as a fixed sequence of about 10 calls: `scripts/media-lookup.mjs` covers Commons search, info, licence and reuse checks, fetch and webp conversion, YouTube search and embed checks. It was tested on phonk's own picks and reproduced them.
4. **The Opus draft still broke rules it had read** (Wikipedia in the body, unsupported claims). Moving work to subagents does not fix drafting discipline. Only the review caught these.
5. **The reviewer lacked context.** It did not have `selector-data.json`, so it flagged a correct 2026 date as unsupported. Fix: give the reviewer the media record and the catalogue rows the guide cites.
6. **The builder template does not say the Bandcamp block is required.** The builder threw an error and cost a rebuild cycle. Fix: put `bandcampSupport` in the template. Done: `build-genre-guide.mjs` always adds it, and a guide's builder is now data only (phonk, amapiano and Brazilian funk ported, output byte-identical). `scripts/guide-run.md` sets the writer's sequence at about 15–20 calls.
7. **Running the trial inside a long conversation** added about 4–5M on Opus.

## Recommendation before applying the audit

Apply the parts that worked: Haiku checks, Haiku media, the Sonnet review with full context, and the Bandcamp line in the template. Rework the KP subagent to use no screenshots and capped calls before applying the audit's §1. Keep Ahrefs, or name a replacement, for figure source 1. Run the next guide in a fresh session to measure the real total. The expected figure is 15–17M, with under 4M on Opus.
