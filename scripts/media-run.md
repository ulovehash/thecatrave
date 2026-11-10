# Media pass: fixed run sequence

For the subagent (Haiku) that finds images, embeds and source texts for one
guide. The phonk trial's pass took 33 calls and 3.71M tokens: it wrote its own
lookup scripts (57k of output) and context grew to 159k. Every lookup it needs
is now a subcommand of `scripts/media-lookup.mjs`; this sequence is about 10
calls.

## Hard limits

- **Cap: 12 tool calls.** At the cap, stop and return what you have, with what is missing.
- Don't write scripts, heredocs or one-off `node -e` / `python -c` calls. `scripts/media-lookup.mjs` is the only tool. If a subcommand fails, report the failing line; don't work around it.
- Don't `cat` the JSON or the Wikipedia files back into context. The subcommands print compact lines; the files are for the writer.
- Several queries or titles go in **one** command, never one call each.
- Run everything from the repo root. Outputs that are not guide images go to `<scratchpad>/media-<guide>/`.

## Rules the picks must meet (ARTICLE-PRODUCTION-WORKFLOW.md §7)

- Creative Commons (BY, BY-SA), CC0 or public domain only. The script refuses anything else; never pick a file flagged `LICENCE`.
- An image must show evidence, identity, place, technology or chronology. Identity means the categories or description name the person, venue or event. A face that only looks right is excluded.
- `USED:<guide>` means another guide already has the file. Skip it, unless there is a strong editorial reason, and then say so in the return.
- `SMALL` (under 800 px wide) only when nothing better exists, and say so.
- YouTube: the artist's own channel, a `- Topic` channel or VEVO first; then the label; then a platform such as Boiler Room. No re-uploads, loops or "extended" edits. Every ID must pass `yt-check`.

## Sequence

1. `Read` `media/<guide>.json` if it exists, and the brief the writer gave (figures, tracks, sections). One call.
2. `commons-search`: every query in one command (person names, venues, scenes, equipment, places).
   `node scripts/media-lookup.mjs commons-search <scratchpad>/media-<guide>/commons.json "query one" "query two" …`
   It lists openly licensed files only, with flags, size, licence, author, date and description.
3. `commons-info` on the shortlist (up to 50 titles), in one command. Use the `categories:` line to confirm identity and place. A second search, if needed, is call 4.
4. `fetch` the picks into the guide's image folder, as `File:Title.jpg=slug` pairs, in one command:
   `node scripts/media-lookup.mjs fetch img/<guide> "File:A.jpg=artist-city-year" …`
   It writes `<slug>-<w>.webp` and `<slug>-320.webp` and prints, for each file, the media record entry, the caption credit and the Commons page.
5. `yt-search`: one query per track or set, in one command. Pick by the channel rule above.
6. `yt-check` on every chosen ID, in one command. Drop anything `NOT EMBEDDABLE` or `GONE` and pick the next candidate (one more `yt-search` + `yt-check` at most).
7. `wiki-text` for the guide's main articles (the genre, key figures, places), in one command:
   `node scripts/media-lookup.mjs wiki-text <scratchpad>/media-<guide>/wiki "Title" …`
   It stores each article's full text with its revision and date. A redirect to a section is reported as `SAME` with the article it lives in. The writer and the reviewer read these files instead of fetching Wikipedia again.

## What the subagent returns

Only the following. No commentary.

- Images: for each pick, the `OK` block as printed (files, record entry, caption credit, page), plus one line on what it shows and which section it supports.
- Excluded images worth knowing about: title and reason (identity unconfirmed, `SMALL`, `USED`).
- Embeds: `videoId`, title, channel, which track or set it is, and the `yt-check` result.
- Wikipedia: the path of each stored file and its char count, plus any `MISSING`.
- What was asked for and not found.
- The number of tool calls used.
