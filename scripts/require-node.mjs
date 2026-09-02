// The browser-based checks (Playwright, Unlighthouse, html-validate) need a
// modern Node. Fail early with a clear message instead of a cryptic install error.

const major = Number(process.versions.node.split('.')[0]);
if (major < 20) {
  console.error(
    `\nThis project's test suite needs Node >= 20 (you have ${process.versions.node}).\n` +
    `  nvm install 20 && nvm use 20   (an .nvmrc pinning 20 is in the repo)\n` +
    `The zero-dependency audits still run on older Node: node audit-all.mjs\n`
  );
  process.exit(1);
}
