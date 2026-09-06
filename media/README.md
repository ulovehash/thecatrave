# Media maps

One JSON file per guide, holding the records that guide cannot omit.
`audit-canon.mjs` fails the build when one of them is absent from the page, or
named in the prose without an embed.

## Why this is separate from the media audit

`audit-media.mjs` measures how media is spread through a page: at most 40% of
argued sections empty, none running past 450 words without something to look at
or hear. It states in its own header that it cannot judge whether the media is
the *right* media.

This file covers the half of that a machine can decide. Not "is this the right
embed for this paragraph", which stays with the writer, but "is the record that
defines this genre on the page at all".

It exists because the UK garage guide shipped with every check green and no
Sweet Like Chocolate, no Do You Really Like It and no Bound 4 Da Reload — two
number ones and one of the records that made speed garage — while Ripgroove was
named in the prose and never embedded.

## Where the lists come from

`FIGURES.md`. Six sources and a cross-reference, run before the article is
written. Not from recollection: a canon list written that way put Original
Nuttah, a 1994 jungle record, in the drum and bass guide.

A name or record is required when three or more sources return it, or when the
originators source returns it at all. That second clause is the point of the
whole algorithm — the person who started a music often released four records on
a label that folded, and no search-volume source will ever surface them.

## Shape

```json
{
  "page": "uk-garage-guide.html",
  "seed": "uk garage",
  "source": "FIGURES.md six-source pass, September 2026",
  "required_records": [
    {
      "title": "Sweet Like Chocolate",
      "artist": "Shanks & Bigfoot",
      "year": 1999,
      "why": "the genre's first number one; the section on going overground is empty without it",
      "sources": ["consensus", "originators", "search"],
      "embed_id": "..."
    }
  ],
  "known_gaps": [
    { "title": "…", "why": "no licensed embed exists; linked instead" }
  ]
}
```

`title` is matched against the page text, case- and hyphen-insensitively.
`embed_id` is matched against the `<iframe>` tags: present in the prose but
missing from every player is reported as its own failure, because it is a
different mistake from having left the record out.

`known_gaps` are things research found and nobody has fixed yet. They warn rather
than fail, because editing published copy is the owner's decision, and they are
recorded so the same gap is not discovered a third time.
