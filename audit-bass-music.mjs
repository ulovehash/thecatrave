import fs from 'node:fs';

const html = fs.readFileSync('bass-music-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('Published date', html.includes('article:published_time" content="2026-08-31"'));
check('Modified date', html.includes('article:modified_time" content="2026-08-31"'));
check('Visible updated date', html.includes('<time datetime="2026-08-31">31 August 2026</time>'));
check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));
check('Two SoundCloud mixes', count(/soundcloud\.com%2Fthecatrave%2Fi-(?:lost-so-many-weekends|like-to-smoke-in-silence)/g) === 2);
const requiredListeningExamples = {
  'dub':'oxAl3Jijs20',
  'Miami bass':'01eKbKNxs6EogcCYONAmYI',
  'bleep':'ML_FBvudqI0',
  'breakbeat hardcore':'2aZ89R5oSEDTfjymiRjzpg',
  'jungle':'_VFf6434lto',
  'drum and bass':'i-P98B2skts',
  'UK garage':'DXCtYUtjDYU',
  'grime':'LkdEOY0bf4U',
  'UK dubstep':'--jr22La8Nk',
  'bassline':'fUGZq02cYIY',
  'UK funky':'iIbkC1NMM1k',
  'Los Angeles beat music':'3v65IsDl6LDOHDu9bU4ZOn',
  'American dubstep':'WSeNSzJ2-Jw',
  'electronic trap':'6HzyUHxmkg0',
  'footwork':'0rzohlbJIrpvIHFAgPztfG',
  'gqom':'7FAW04U4KSWT2vsskjNYo0',
  'bass house':'hkYq02183fc',
  'future bass':'-KPnyf8vwXI',
  'riddim':'fP2O6JcnJJI',
  'glitch-hop':'ls-LYas5j8U',
  'melodic bass':'ULqdjtDI-bs',
  'midtempo':'2oIAQSUt9mo',
  'experimental bass':'KVywF8KXdwI',
  'freeform bass':'eOILsff2GOk'
};
for (const [genre, mediaId] of Object.entries(requiredListeningExamples)) {
  check(`Listening example: ${genre}`, html.includes(mediaId));
}
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);
check('Global history visual', html.includes('img/bass-music/bass-music-global-history.svg'));
check('Mobile global history visual', html.includes('img/bass-music/bass-music-global-history-mobile.svg'));
check('No editorial end matter', !html.includes('Editorial end matter'));
const css = fs.readFileSync('thecatrave-article.css','utf8');
check('Images shrink proportionally', /\.article-image img\s*\{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/.test(css));
check('Mobile image rules', /@media \(max-width: 760px\)[\s\S]*?\.article-image img\s*\{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/.test(css));
check('Mobile listening bands stack', /@media \(max-width: 760px\)[\s\S]*?\.article-media-band\s*\{\s*grid-template-columns:\s*1fr;/.test(css));

if (failures.length) {
  console.error(`Bass music audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Bass music audit passed.');
