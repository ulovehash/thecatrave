// Site-wide Lighthouse via Unlighthouse: crawls every internal route from the
// local server and asserts category scores and Core Web Vitals budgets.
// `unlighthouse-ci` exits non-zero if any budget is missed.

export default {
  // The site set here wins over the --site flag scripts/check.mjs passes, so it
  // has to read the same port check.mjs chose, or Unlighthouse scans whatever
  // answers on 4173: another checkout locally, and nothing at all in CI, where
  // the scan hung until the job timed out.
  site: `http://localhost:${Number(process.env.CHECK_PORT) || 4173}`,
  scanner: {
    // Every page of a translated family names https://thecatrave.com as its
    // hreflang x-default. By default Unlighthouse skips any page whose x-default
    // is another URL and queues that URL instead: from localhost that meant it
    // dropped the home page, the only seed, and chased the live domain until
    // the CI job hit its 20-minute limit (2026-09-18). Each language is a page
    // of its own and is scanned like one.
    ignoreI18nPages: false,
    device: 'mobile',
    throttle: true,
    samples: 1
  },
  ci: {
    budget: {
      performance: 0.9,
      accessibility: 0.95,
      'best-practices': 0.95,
      seo: 1
    },
    reporter: 'jsonExpanded'
  },
  lighthouseOptions: {
    // Fail the run on the field-relevant vitals, not just the aggregate score.
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
  }
};
