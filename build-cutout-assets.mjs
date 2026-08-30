import fs from 'node:fs';

const assets = [
  {
    input: 'img/breakbeat/dj-icey-flyer.webp',
    output: 'img/breakbeat/dj-icey-flyer-cutout.svg',
    mime: 'image/webp',
    sourceWidth: 903,
    sourceHeight: 1200,
    viewBox: '125 305 635 560',
    polygon: '158,340 739,323 747,852 138,848',
    title: 'DJ Icey at Club 600 North flyer',
    description: 'Archival DJ Icey and Zone Records event flyer isolated from its original wall background.'
  },
  {
    input: 'img/breakbeat/ultimate-breaks-and-beats.jpg',
    output: 'img/breakbeat/ultimate-breaks-and-beats-cutout.svg',
    mime: 'image/jpeg',
    sourceWidth: 1200,
    sourceHeight: 1600,
    viewBox: '32 388 1072 1020',
    polygon: '49,407 1082,437 1038,1390 78,1371',
    title: 'Ultimate Breaks and Beats compilation record',
    description: 'An original Ultimate Breaks and Beats record sleeve isolated from the photographed background.'
  }
];

for (const asset of assets) {
  const encoded = fs.readFileSync(asset.input).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${asset.viewBox}" role="img" aria-labelledby="title desc">
  <title id="title">${asset.title}</title>
  <desc id="desc">${asset.description}</desc>
  <defs><clipPath id="object-edge" clipPathUnits="userSpaceOnUse"><polygon points="${asset.polygon}"/></clipPath></defs>
  <image href="data:${asset.mime};base64,${encoded}" x="0" y="0" width="${asset.sourceWidth}" height="${asset.sourceHeight}" clip-path="url(#object-edge)"/>
</svg>`;
  fs.writeFileSync(asset.output, svg);
}
