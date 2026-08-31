# thecatrave.com

Source, generators and shared design system for thecatrave.com.

## Start here for article work

Before researching, writing, redesigning or publishing an article, read these files completely in this order:

1. [`ARTICLE-PRODUCTION-WORKFLOW.md`](ARTICLE-PRODUCTION-WORKFLOW.md) — research evidence, Search Console and Ahrefs workflow, competitor review, approval gates, editorial handoff and build sequence.
2. [`AGENTS.md`](AGENTS.md) — permanent editorial, SEO, factual, media, responsive and repository rules.
3. [`ARTICLE-EDITORIAL-REVIEW.md`](ARTICLE-EDITORIAL-REVIEW.md) — repeatable factual, senior-editor, language and SEO-preservation review protocol.
4. [`SITE-COMPONENTS.md`](SITE-COMPONENTS.md) — reusable component API, layout contract, build commands and automated verification.

Generated article HTML is publishable output, not the primary editing surface. Page-specific work belongs in its source or `build-*-article.mjs` generator. Shared structures belong in `site-components.mjs`; shared visual rules belong in the common stylesheets.

Do not commit, push, merge, publish, delete branches or change an existing canonical URL without explicit user approval.
