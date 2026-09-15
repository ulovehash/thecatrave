#!/usr/bin/env node

// Free, local Search Console + GA4 export. No BigQuery and no dependencies.
// Authentication uses a service-account JSON key whose email has Viewer access
// in GA4 and user access in Search Console. The key must never enter the repo.

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const TRACKED_EVENTS = [
  'guide_read',
  'selector_opened',
  'selector_deal',
  'set_opened',
  'soundcloud_play',
  'soundcloud_click',
  'bandcamp_click',
  'spotify_click'
];

const argv = process.argv.slice(2);
const flag = name => {
  const index = argv.indexOf(`--${name}`);
  return index >= 0 ? argv[index + 1] : undefined;
};
const has = name => argv.includes(`--${name}`);

const usage = () => console.log(`Usage:
  npm run analytics:export -- --credentials /absolute/key.json --ga-property 123456789

Options:
  --credentials PATH   Service-account JSON key (or TCR_GOOGLE_CREDENTIALS)
  --ga-property ID     Numeric GA4 property ID (or TCR_GA4_PROPERTY_ID)
  --site SITE          Search Console property (default: sc-domain:thecatrave.com)
  --days N             Number of days to export (default: 90)
  --end YYYY-MM-DD     Last day; default is three days ago
  --out PATH           Output directory (default: analytics-export)
  --self-test          Run local deterministic tests without credentials
`);

const iso = date => date.toISOString().slice(0, 10);
const addDays = (value, amount) => {
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return iso(date);
};
const dateRange = (start, end) => {
  const values = [];
  for (let value = start; value <= end; value = addDays(value, 1)) values.push(value);
  return values;
};
const number = value => Number(value || 0);
const ratio = (value, total) => total ? value / total : 0;
const round = (value, places = 4) => Number(value.toFixed(places));
const csvCell = value => {
  const text = value == null ? '' : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};
const csv = (headers, rows) => [headers, ...rows.map(row => headers.map(header => row[header]))]
  .map(row => row.map(csvCell).join(','))
  .join('\n') + '\n';
const pagePath = value => {
  if (!value || value === '(not set)') return '(not set)';
  let pathname = value;
  try { pathname = new URL(value, 'https://thecatrave.com').pathname; } catch {}
  pathname = pathname.replace(/\/+$/, '');
  return pathname || '/';
};
const base64url = value => Buffer.from(value).toString('base64url');

async function accessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({alg: 'RS256', typ: 'JWT'}));
  const claim = base64url(JSON.stringify({
    iss: credentials.client_email,
    scope: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly'
    ].join(' '),
    aud: credentials.token_uri || 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));
  const unsigned = `${header}.${claim}`;
  const signature = crypto.sign('RSA-SHA256', Buffer.from(unsigned), credentials.private_key).toString('base64url');
  const response = await fetch(credentials.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`
    })
  });
  const body = await response.json();
  if (!response.ok || !body.access_token) throw new Error(`Google authentication failed: ${body.error_description || body.error || response.status}`);
  return body.access_token;
}

async function googleJson(url, token, body) {
  const response = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {authorization: `Bearer ${token}`, ...(body ? {'content-type': 'application/json'} : {})},
    body: body ? JSON.stringify(body) : undefined
  });
  const value = await response.json();
  if (!response.ok) throw new Error(`${url}: ${value.error?.message || response.statusText}`);
  return value;
}

async function searchConsoleRows({site, start, end, token}) {
  const rows = [];
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  for (const date of dateRange(start, end)) {
    for (let startRow = 0; ; startRow += 25000) {
      const response = await googleJson(endpoint, token, {
        startDate: date,
        endDate: date,
        dimensions: ['query', 'page', 'country', 'device'],
        type: 'web',
        dataState: 'final',
        rowLimit: 25000,
        startRow
      });
      const batch = response.rows || [];
      rows.push(...batch.map(row => ({
        date,
        query: row.keys?.[0] || '',
        page: row.keys?.[1] || '',
        country: row.keys?.[2] || '',
        device: row.keys?.[3] || '',
        clicks: number(row.clicks),
        impressions: number(row.impressions),
        ctr: number(row.ctr),
        position: number(row.position)
      })));
      if (batch.length < 25000) break;
    }
    process.stdout.write(`Search Console ${date}: ${rows.length.toLocaleString('en-US')} rows\r`);
  }
  process.stdout.write('\n');
  return rows;
}

const organicFilter = {
  filter: {
    fieldName: 'sessionDefaultChannelGroup',
    stringFilter: {matchType: 'EXACT', value: 'Organic Search', caseSensitive: false}
  }
};

async function gaReport({property, token, start, end, dimensions, metrics, dimensionFilter}) {
  const rows = [];
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`;
  for (let offset = 0; ; offset += 100000) {
    const response = await googleJson(endpoint, token, {
      dateRanges: [{startDate: start, endDate: end}],
      dimensions: dimensions.map(name => ({name})),
      metrics: metrics.map(name => ({name})),
      dimensionFilter,
      limit: '100000',
      offset: String(offset),
      keepEmptyRows: false
    });
    const batch = response.rows || [];
    rows.push(...batch.map(row => Object.fromEntries([
      ...dimensions.map((name, index) => [name, row.dimensionValues?.[index]?.value || '']),
      ...metrics.map((name, index) => [name, number(row.metricValues?.[index]?.value)])
    ])));
    if (rows.length >= number(response.rowCount) || batch.length < 100000) break;
  }
  return rows;
}

async function ga4Rows({property, start, end, token}) {
  const pageRows = await gaReport({
    property, token, start, end,
    dimensions: ['landingPage'],
    metrics: ['sessions', 'engagedSessions', 'activeUsers'],
    dimensionFilter: organicFilter
  });
  const eventRows = await gaReport({
    property, token, start, end,
    dimensions: ['landingPage', 'eventName'],
    metrics: ['eventCount'],
    dimensionFilter: {
      andGroup: {expressions: [organicFilter, {
        filter: {fieldName: 'eventName', inListFilter: {values: TRACKED_EVENTS, caseSensitive: true}}
      }]}
    }
  });

  const byPage = new Map(pageRows.map(row => {
    const page = pagePath(row.landingPage);
    return [page, {
      page,
      organic_sessions: row.sessions,
      engaged_sessions: row.engagedSessions,
      active_users: row.activeUsers,
      ...Object.fromEntries(TRACKED_EVENTS.map(event => [event, 0]))
    }];
  }));
  for (const row of eventRows) {
    const page = pagePath(row.landingPage);
    if (!byPage.has(page)) byPage.set(page, {
      page, organic_sessions: 0, engaged_sessions: 0, active_users: 0,
      ...Object.fromEntries(TRACKED_EVENTS.map(event => [event, 0]))
    });
    if (TRACKED_EVENTS.includes(row.eventName)) byPage.get(page)[row.eventName] += row.eventCount;
  }
  return [...byPage.values()];
}

function pageSummary(searchRows, gaRows) {
  const pages = new Map();
  for (const row of searchRows) {
    const page = pagePath(row.page);
    if (!pages.has(page)) pages.set(page, {page, clicks: 0, impressions: 0, position_weight: 0, queries: new Map()});
    const current = pages.get(page);
    current.clicks += row.clicks;
    current.impressions += row.impressions;
    current.position_weight += row.position * row.impressions;
    const query = current.queries.get(row.query) || {clicks: 0, impressions: 0};
    query.clicks += row.clicks;
    query.impressions += row.impressions;
    current.queries.set(row.query, query);
  }
  const gaByPage = new Map(gaRows.map(row => [row.page, row]));
  return [...pages.values()].map(search => {
    const ga = gaByPage.get(search.page) || {
      organic_sessions: 0, engaged_sessions: 0, active_users: 0,
      ...Object.fromEntries(TRACKED_EVENTS.map(event => [event, 0]))
    };
    const topQueries = [...search.queries.entries()]
      .sort((a, b) => b[1].clicks - a[1].clicks || b[1].impressions - a[1].impressions)
      .slice(0, 10).map(([query]) => query).join(' | ');
    return {
      page: search.page,
      search_clicks: search.clicks,
      search_impressions: search.impressions,
      search_ctr: round(ratio(search.clicks, search.impressions)),
      average_position: round(ratio(search.position_weight, search.impressions), 2),
      top_queries: topQueries,
      ...ga,
      read_rate: round(ratio(ga.guide_read, ga.organic_sessions)),
      selector_rate: round(ratio(ga.selector_deal, ga.organic_sessions)),
      soundcloud_play_rate: round(ratio(ga.soundcloud_play, ga.organic_sessions)),
      bandcamp_click_rate: round(ratio(ga.bandcamp_click, ga.organic_sessions)),
      set_opened_rate: round(ratio(ga.set_opened, ga.organic_sessions))
    };
  }).sort((a, b) => b.search_clicks - a.search_clicks || b.search_impressions - a.search_impressions);
}

function selfTest() {
  if (pagePath('https://thecatrave.com/jungle-music-guide/') !== '/jungle-music-guide') throw new Error('pagePath failed');
  if (!csv(['a'], [{a: 'x,y'}]).includes('"x,y"')) throw new Error('CSV escaping failed');
  const result = pageSummary([
    {page: 'https://thecatrave.com/a', query: 'breaks', clicks: 2, impressions: 10, position: 5}
  ], [{page: '/a', organic_sessions: 4, engaged_sessions: 3, active_users: 4, guide_read: 2, selector_opened: 1, selector_deal: 1, set_opened: 1, soundcloud_play: 1, soundcloud_click: 0, bandcamp_click: 1, spotify_click: 0}]);
  if (result[0].read_rate !== 0.5 || result[0].top_queries !== 'breaks') throw new Error('summary failed');
  console.log('Organic analytics exporter self-test passed.');
}

async function main() {
  if (has('help')) { usage(); return; }
  if (has('self-test')) { selfTest(); return; }

  const credentialsPath = flag('credentials') || process.env.TCR_GOOGLE_CREDENTIALS;
  const property = flag('ga-property') || process.env.TCR_GA4_PROPERTY_ID;
  const site = flag('site') || process.env.TCR_SEARCH_CONSOLE_SITE || 'sc-domain:thecatrave.com';
  const days = Number(flag('days') || 90);
  const out = path.resolve(flag('out') || 'analytics-export');
  const end = flag('end') || addDays(iso(new Date()), -3);
  const start = addDays(end, -(days - 1));

  if (!credentialsPath || !property) {
    usage();
    throw new Error('Both --credentials and --ga-property are required.');
  }
  if (!Number.isInteger(days) || days < 1 || days > 480) throw new Error('--days must be an integer from 1 to 480.');

  const credentials = JSON.parse(fs.readFileSync(path.resolve(credentialsPath), 'utf8'));
  if (!credentials.client_email || !credentials.private_key) throw new Error('The credentials file is not a service-account JSON key.');
  const token = await accessToken(credentials);
  console.log(`Exporting ${start} through ${end} for ${site}…`);
  const searchRows = await searchConsoleRows({site, start, end, token});
  const gaRows = await ga4Rows({property, start, end, token});
  const summaryRows = pageSummary(searchRows, gaRows);

  fs.mkdirSync(out, {recursive: true});
  fs.writeFileSync(path.join(out, 'search-console-queries.csv'), csv(
    ['date', 'query', 'page', 'country', 'device', 'clicks', 'impressions', 'ctr', 'position'], searchRows
  ));
  const gaHeaders = ['page', 'organic_sessions', 'engaged_sessions', 'active_users', ...TRACKED_EVENTS];
  fs.writeFileSync(path.join(out, 'ga4-organic-pages.csv'), csv(gaHeaders, gaRows));
  const summaryHeaders = [
    'page', 'search_clicks', 'search_impressions', 'search_ctr', 'average_position', 'top_queries',
    ...gaHeaders.slice(1), 'read_rate', 'selector_rate', 'soundcloud_play_rate', 'bandcamp_click_rate', 'set_opened_rate'
  ];
  fs.writeFileSync(path.join(out, 'organic-page-summary.csv'), csv(summaryHeaders, summaryRows));
  fs.writeFileSync(path.join(out, 'metadata.json'), JSON.stringify({
    generated_at: new Date().toISOString(), start, end, site, ga4_property: String(property),
    attribution_note: 'Search queries are aggregated Search Console context for a landing page. They are not attributed to individual GA4 users or events.'
  }, null, 2) + '\n');
  console.log(`Wrote ${searchRows.length.toLocaleString('en-US')} Search Console rows and ${gaRows.length.toLocaleString('en-US')} GA4 page rows to ${out}`);
}

main().catch(error => {
  console.error(`Analytics export failed: ${error.message}`);
  process.exitCode = 1;
});
