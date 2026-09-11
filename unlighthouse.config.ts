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
