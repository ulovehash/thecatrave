# Free organic analytics export

This export uses the free Search Console API and GA4 Data API. It does not use
BigQuery, require billing or send site data to another service.

## One-time setup

1. Create or select a Google Cloud project. Do not attach billing.
2. Enable `Google Search Console API` and `Google Analytics Data API`.
3. Create a service account and download its JSON key.
4. In Search Console, add the service-account email under **Settings → Users
   and permissions**.
5. In GA4, add the same email as **Viewer** under **Admin → Property access
   management**.
6. Keep the JSON key outside the repository. If it must sit in the project
   temporarily, name it `analytics-credentials.json`; that name is gitignored.

The numeric GA4 property ID is shown under **Admin → Property details**. It is
not the `G-...` measurement ID.

## Run

```bash
npm run analytics:export -- \
  --credentials /absolute/path/to/service-account.json \
  --ga-property 123456789 \
  --days 90
```

Output is written to the gitignored `analytics-export/` directory:

- `search-console-queries.csv`: maximum query detail by day, page, country and
  device;
- `ga4-organic-pages.csv`: organic sessions and site events by landing page;
- `organic-page-summary.csv`: the actionable page-level combined report;
- `metadata.json`: range and attribution warning.

Search Console does not expose anonymised queries. Query rows are therefore
context for a landing page, not proof that a specific query caused a specific
GA4 event.
