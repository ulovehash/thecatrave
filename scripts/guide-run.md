# Writing a genre guide: fixed run sequence

For the writer (Opus) once keywords, figures, media and source texts are in
hand. In the phonk trial the main session took 59 calls at 105k–176k context
each (8.08M). Most of those were edits, a hand-written 200-line builder and
rebuild cycles. This sequence is about 15–20 calls. Run it in a **fresh
session** per guide: a session that starts with an earlier conversation in
context pays for it on every call (about 4–5M in the trial).

Rules still come from `ARTICLE-PRODUCTION-WORKFLOW.md`, `WRITING.md` and
`AGENTS.md` §7–§9. This file only fixes the order and the number of calls.

## Inputs (already produced, read once)

- `<scratchpad>/kp-<guide>.tsv`: the Keyword Planner pass (`scripts/kp-run.md`)
- `keywords/<guide>.json`
- `media/<guide>.json` and the media pass return (`scripts/media-run.md`)
- `<scratchpad>/media-<guide>/wiki/*.txt`: full source texts. Quote and check facts against these; don't fetch Wikipedia again.
- the other sources' text, if the facts pass stored any

## Sequence

1. **Read, in one parallel message:** `WRITING.md`, workflow §7–§9, the inputs above and `build-phonk-article.mjs` (the template). That is 1 message, however many files.
2. **Structure:** title, H2s, H3s and FAQ, each with its measured keyword and volume. Show it to the owner if asked; otherwise go on.
3. **Draft, in one `Write`:** `<guide>-draft.md` with `## Answer`, `## Introduction`, one `## ` per section and `## FAQ` (questions as `### `). Media goes in as `[Image: key]`, `[Embed: key]` and `[Table: key]` lines, each in the paragraph position where the prose discusses it.
4. **Builder, in one `Write`:** `build-<guide>-article.mjs`, a copy of the phonk one with only the data changed:
   - metadata;
   - sections in draft order;
   - `images`: `[stem, width, height, alt, caption]`, where the caption ends with the credit the media pass printed;
   - `videos`: `[youtubeId, genre, artist, title, text]`;
   - `tables`;
   - `sources`.

   No rendering code. The Bandcamp block is added by `build-genre-guide.mjs`.
5. **Register, in one parallel message of `Edit`s:**
   - `scripts/build.mjs`: the builder name;
   - `pages.mjs`: one row;
   - `home-articles.mjs`: the catalogue card;
   - `scripts/build-og-cards.py`: the OG cover source;
   - `scripts/og-articles-covers.json`, when the guide joins the articles cover.
6. **Build and check, in one `Bash`:**
   ```bash
   node build-<guide>-article.mjs && node scripts/build.mjs && npm run check:html && node audit-all.mjs && npm run check:layout && npm run check:links
   ```
   The shared builder fails on any media mismatch first, so a failure here names the exact key or file.
7. **Review:** one Sonnet subagent with `ARTICLE-EDITORIAL-REVIEW.md`, the draft, `media/<guide>.json` and the `selector-data.json` rows the guide cites. It writes `<guide>-editorial-review.md`. The writer does not rule on its own draft.
8. **Fixes, in one parallel message of `Edit`s to the draft**, then step 6 once more. Edit the draft, never the generated HTML.
9. **Push** only as `CLAUDE.md` and the owner's standing rules say: from an isolated worktree on `origin/main`, then watch the gate.

## Where calls go wrong

- One `Edit` per sentence. Batch every fix for a file into one message.
- Rebuilding after each fix. Fix everything, then build once.
- Re-reading a file you just wrote or edited.
- Fetching a source again that the media pass already stored.
- Writing rendering code in the guide's builder. If the shared builder lacks something, add it there once.
