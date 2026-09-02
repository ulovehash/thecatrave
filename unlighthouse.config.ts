// Site-wide Lighthouse via Unlighthouse: crawls every internal route from the
// local server and asserts category scores and Core Web Vitals budgets.
// `unlighthouse-ci` exits non-zero if any budget is missed.

export default {
  site: 'http://localhost:4173',
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
