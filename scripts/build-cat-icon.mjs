// The pixel cat on the Selector button.
//
//   node scripts/build-cat-icon.mjs   ->  rewrites --cat-rest / --cat-press
//                                          in thecatrave-article.css
//
// Edit the grids below and re-run. The art ships as a CSS mask rather than an
// inline SVG for two reasons: it inherits the button's own colour in every
// state, and the runtime can keep setting the label with textContent without
// wiping it.
//
// An earlier version put a vinyl record beside the cat and dropped the cat onto
// it on press. At the size this renders (about 30px tall) two objects read as
// one blob and the press did not register as pressing anything, so the record
// went and the press became a blink.
const OPEN = `
##............##
###..........###
####........####
#####......#####
################
################
###..#######..##
###..#######..##
################
#######..#######
######....######
################
.##############.
...##########...
`;

const BLINK = `
##............##
###..........###
####........####
#####......#####
################
################
################
###..#######..##
################
#######..#######
######....######
################
.##############.
...##########...
`;

const grid = art => art.trim().split('\n').map(row => row.split(''));

function frame(art) {
  const out = [];
  grid(art).forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      if (row[x] !== '#') { x += 1; continue; }
      let w = 0;
      while (x + w < row.length && row[x + w] === '#') w += 1;
      out.push(`<rect x="${x}" y="${y}" width="${w}" height="1"/>`);
      x += w;
    }
  });
  // crispEdges kills the antialiasing seams between the one-unit rows
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" shape-rendering="crispEdges">${out.join('')}</svg>`;
  return encodeURIComponent(svg).replace(/%3D/g,'=').replace(/%3A/g,':').replace(/%2F/g,'/').replace(/%22/g,"'");
}

import fs from 'node:fs';

const css = 'thecatrave-article.css';
const source = fs.readFileSync(css, 'utf8');
// assert the anchors exist rather than that the file changed: regenerating the
// same art is the normal case and must not look like a failure
for (const name of ['--cat-rest', '--cat-press']) {
  if (!new RegExp(`${name}: url\\("`).test(source)) throw new Error(`no ${name} anchor in ${css}`);
}
const written = source
  .replace(/(--cat-rest: url\(")[^"]*("\);)/, (m, a, b) => `${a}data:image/svg+xml,${frame(OPEN)}${b}`)
  .replace(/(--cat-press: url\(")[^"]*("\);)/, (m, a, b) => `${a}data:image/svg+xml,${frame(BLINK)}${b}`);
fs.writeFileSync(css, written);
console.log(`${css} updated - rest ${frame(OPEN).length} B, press ${frame(BLINK).length} B`);
