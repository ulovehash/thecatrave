# Keyword Planner pass: fixed run sequence

For the subagent (Sonnet) that pulls Keyword Planner ideas in Claude in Chrome,
never the Browser pane. The phonk trial's pass took 61 calls and 6.45M tokens.
Context grew to 165k because of DOM exploration, page-text dumps and rows
printed in chunks. This sequence is about 15 calls and should stay under 1M.

For a translation, the pass targets a country and a language instead of all
locations and English: see "Keyword Planner, country and language" in
`scripts/translate-run.md`.

## Hard limits

- **Cap: 18 browser calls.** At the cap, stop and report what failed. Don't improvise.
- A blank Ads page costs one re-navigate, counted in the cap. With two seed sets, the second set runs only if 6 calls remain after the first; otherwise report it unrun, with its seeds.
- Don't use `get_page_text`, `read_page` without a `ref_id`, or `computer` scroll.
- No screenshots. The one exception is a single screenshot at `scale: 0.3` when a step fails.
- Don't write exploratory JavaScript against the results table. `scripts/kp-extract.js` is the only reader.
- Never print rows in chunks. The rows go to a file, and the reply carries only a summary.
- Google Ads limits:
  - Never create or edit campaigns, billing or settings.
  - Never accept terms.
  - Never download a CSV. A download needs the owner's explicit yes.
  - Never solve a CAPTCHA. Stop and report instead.

## Sequence

1. `ToolSearch` once:
   `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__find,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__javascript_tool`
2. `Read` `scripts/kp-extract.js`, once.
3. `tabs_context_mcp`. Open a new tab with `tabs_create_mcp` only if there is no usable tab.
4. `navigate` to `https://ads.google.com/aw/keywordplanner/home`. If it lands on `selectaccount`, use `find` to locate the owner's account and click it: 2 calls.
5. `find` "Discover new keywords", then click it: 2 calls.
6. One `browser_batch`: click the seed box, then for each seed `type` the seed and press `Return`. Every seed in one batch. Up to 10 seeds per submission.
7. Location, so that the target is all locations and the language is English:
   1. `find` "Locations" and click it.
   2. `find` the United States remove button and click it.
   3. `find` "Save" and click it.

   That is about 4 calls, using `browser_batch` wherever the refs are already known.
8. `find` "Get results" and click it: 2 calls.
9. `javascript_tool`: paste `scripts/kp-extract.js` as it is. If the result has `resume: true`, paste it again. State is kept between calls. Two pages take about 20 seconds. The tab must be visible: with a 0×0 viewport the table can't scroll and the script says so.
10. Check the result before writing:
    - `ok`, `adultExcluded`, `allLocations` and `english` are all true.
    - `unknownSection` is 0.
    - `seeds` equals the number of seeds typed.

    If any of these fail, take one screenshot (scale 0.3), report the failure and stop. Don't retry by hand.
11. `Write` `<scratchpad>/kp-<guide>.tsv`:
    - line 1: `# <date> | seeds: … | label | All locations, English | adult ideas excluded`
    - line 2: the legend
    - then `tsv`, unchanged.

    Rows come sorted: seeds first, then ideas by volume bucket, in Keyword Planner's relevance order within each bucket.

A second seed set in the same session: go back to the results page with "Edit search" or the seed box, then repeat steps 6, 8 and 9. The script resets its state on its own when the total changes.

## What the subagent returns

Only the following. No commentary.

- the file path
- `label`, `rows` and `ideasAvailable`
- the number of browser calls used
- the first 60 idea lines of the file, as they are
- any check that failed
