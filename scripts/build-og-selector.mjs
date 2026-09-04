// Compose the /selector Open Graph image: a wall of the source channels'
// logos on the brand paper, closed by an acid bar. No font rendering here, so
// the words come from the og:title / og:description meta tags.
//
//   node scripts/build-og-selector.mjs   ->  img/selector/selector-og.png

import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { channels } from '../selector-channels.mjs';

const W = 1200, H = 630;
const TILE = 132, GAP = 16, COLS = 7;
const BAR = 84;                       // acid bar across the bottom
const PAPER = [241, 238, 231], INK = [10, 10, 10], ACID = [255, 90, 54];

const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// read a png as an RGB pixel grid by way of sips + an uncompressed bmp
function readTile(png, size) {
  const tmp = '/tmp/_og_tile.bmp';
  execSync(`sips -z ${size} ${size} -s format bmp "${png}" --out ${tmp}`, { stdio: 'ignore' });
  const b = fs.readFileSync(tmp);
  const off = b.readUInt32LE(10), w = b.readInt32LE(18);
  let h = b.readInt32LE(22);
  const topDown = h < 0; h = Math.abs(h);
  const bpp = b.readUInt16LE(28) / 8;
  const row = Math.floor((bpp * w * 8 + 31) / 32) * 4;
  const px = new Uint8Array(w * h * 3);
  for (let y = 0; y < h; y++) {
    const sy = topDown ? y : h - 1 - y;
    for (let x = 0; x < w; x++) {
      const i = off + sy * row + x * bpp, o = (y * w + x) * 3;
      px[o] = b[i + 2]; px[o + 1] = b[i + 1]; px[o + 2] = b[i];
    }
  }
  return { px, w, h };
}

const canvas = new Uint8Array(W * H * 3);
const put = (x, y, c) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const o = (y * W + x) * 3;
  canvas[o] = c[0]; canvas[o + 1] = c[1]; canvas[o + 2] = c[2];
};
const rect = (x0, y0, w, h, c) => {
  for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) put(x, y, c);
};

rect(0, 0, W, H, PAPER);

const logos = [...new Set(channels.map(c => c.broadcaster))]
  .map(b => `img/selector/${slug(b)}.png`)
  .filter(p => fs.existsSync(p));

const rows = Math.ceil(logos.length / COLS);
const gridW = COLS * TILE + (COLS - 1) * GAP;
const gridH = rows * TILE + (rows - 1) * GAP;
const x0 = Math.round((W - gridW) / 2);
const y0 = Math.round((H - BAR - gridH) / 2);

logos.forEach((p, i) => {
  const cx = x0 + (i % COLS) * (TILE + GAP);
  const cy = y0 + Math.floor(i / COLS) * (TILE + GAP);
  const { px, w, h } = readTile(p, TILE);
  rect(cx - 3, cy - 3, TILE + 6, TILE + 6, INK);          // border
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 3;
      put(cx + x, cy + y, [px[o], px[o + 1], px[o + 2]]);
    }
  }
});

rect(0, H - BAR, W, BAR, ACID);
rect(0, H - BAR - 4, W, 4, INK);

// 24bpp bottom-up BMP, then let sips make the png
const rowSize = Math.floor((24 * W + 31) / 32) * 4;
const body = Buffer.alloc(rowSize * H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const s = ((H - 1 - y) * W + x) * 3, d = y * rowSize + x * 3;
    body[d] = canvas[s + 2]; body[d + 1] = canvas[s + 1]; body[d + 2] = canvas[s];
  }
}
const head = Buffer.alloc(54);
head.write('BM', 0);
head.writeUInt32LE(54 + body.length, 2);
head.writeUInt32LE(54, 10);
head.writeUInt32LE(40, 14);
head.writeInt32LE(W, 18);
head.writeInt32LE(H, 22);
head.writeUInt16LE(1, 26);
head.writeUInt16LE(24, 28);
head.writeUInt32LE(body.length, 34);
fs.writeFileSync('/tmp/_og.bmp', Buffer.concat([head, body]));

execSync('sips -s format png /tmp/_og.bmp --out img/selector/selector-og.png', { stdio: 'ignore' });
const kb = (fs.statSync('img/selector/selector-og.png').size / 1024).toFixed(0);
console.log(`img/selector/selector-og.png — ${W}x${H}, ${logos.length} logos, ${kb} KB`);
