// Intrinsic pixel dimensions of a local image, read from the file header.
// Zero-dependency and platform-neutral on purpose: this runs inside the build,
// which runs on Linux in CI, so `sips` is not an option.
//
// Covers the three formats the site's Open Graph images use: PNG, JPEG, WebP.

import fs from 'node:fs';

function png(buffer) {
  // 8-byte signature, then the IHDR chunk: length, type, width, height
  if (buffer.readUInt32BE(12) !== 0x49484452) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function jpeg(buffer) {
  // walk the marker segments to the start-of-frame, which carries the size
  let offset = 2;
  while (offset < buffer.length - 9) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    // SOF0-SOF15, minus the four that are not frame headers
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc, 0xd8].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + buffer.readUInt16BE(offset + 2);
  }
  return null;
}

function webp(buffer) {
  const format = buffer.toString('ascii', 12, 16);
  if (format === 'VP8X') {
    return { width: (buffer.readUIntLE(24, 3) & 0xffffff) + 1, height: (buffer.readUIntLE(27, 3) & 0xffffff) + 1 };
  }
  if (format === 'VP8L') {
    const bits = buffer.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (format === 'VP8 ') {
    return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
  }
  return null;
}

export function imageSize(file) {
  const buffer = fs.readFileSync(file);
  // 0x89 is outside ASCII, so read the signature as latin1 rather than ascii,
  // which would mask the high bit and never match
  const size = buffer.toString('latin1', 0, 4) === '\x89PNG' ? png(buffer)
    : buffer.readUInt16BE(0) === 0xffd8 ? jpeg(buffer)
    : buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP' ? webp(buffer)
    : null;
  if (!size || !size.width || !size.height) throw new Error(`could not read the dimensions of ${file}`);
  return size;
}

// Maps a site-absolute image URL back to the file the build just wrote, so the
// declared dimensions cannot drift from the image actually served.
export function imageSizeForUrl(url, origin = 'https://thecatrave.com') {
  const path = decodeURIComponent(String(url).replace(`${origin}/`, '').replace(/^\//, ''));
  return imageSize(path);
}
