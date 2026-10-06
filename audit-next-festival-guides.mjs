import fs from 'node:fs';

const pages = [
  ['sziget-festival.html', 'https://thecatrave.com/sziget-festival'],
  ['boomtown-festival.html', 'https://thecatrave.com/boomtown-festival'],
  ['monegros-desert-festival.html', 'https://thecatrave.com/monegros-desert-festival'],
  ['arc-music-festival.html', 'https://thecatrave.com/arc-music-festival'],
  ['airbeat-one-festival.html', 'https://thecatrave.com/airbeat-one-festival'],
  ['exit-festival.html', 'https://thecatrave.com/exit-festival']
];

const failures = [];
for (const [file, canonical] of pages) {
  if (!fs.existsSync(file)) { failures.push(`${file}: missing`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const count = pattern => (html.match(pattern) || []).length;
  if (count(/<h1\b/g) !== 1) failures.push(`${file}: expected exactly one H1`);
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) failures.push(`${file}: canonical mismatch`);
  if (count(/(?:A )?DJ mix by thecatrave/g) !== 2) failures.push(`${file}: expected two thecatrave mix labels`);
  if (count(/youtube-nocookie\.com\/embed\//g) < 1) failures.push(`${file}: missing exact event video`);
  if (count(/<figure class="floating-image/g) !== 2) failures.push(`${file}: expected two editorial figures`);
  if (!html.includes('FAQPage')) failures.push(`${file}: missing visible/schema FAQ package`);
  if (/<\/figure>\s*<aside class="(?:listening-block|soundcloud-feature)/.test(html) || /<\/aside>\s*<figure class="floating-image/.test(html)) failures.push(`${file}: figure and embed are adjacent`);
  if (/tone-(?:yellow|coral)/.test(html)) failures.push(`${file}: retired section tone present`);
}

if (failures.length) {
  console.error(failures.map(item => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log('✔ Six shared-builder festival guides passed page-specific checks.');
