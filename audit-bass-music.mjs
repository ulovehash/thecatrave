import fs from 'node:fs';

const html = fs.readFileSync('bass-music-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('One H1', count(/<h1\b/g) === 1, String(count(/<h1\b/g)));
check('Canonical URL', html.includes('<link rel="canonical" href="https://thecatrave.com/bass-music-guide">'));
check('Published date', html.includes('article:published_time" content="2026-08-31"'));
check('Modified date', html.includes('article:modified_time" content="2026-08-31"'));
check('Visible updated date', html.includes('<time datetime="2026-08-31">31 August 2026</time>'));
check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));
check('First FAQ open', /<details open><summary>Is bass music a genre\?/.test(html));
check('FAQ schema', html.includes('"@type":"FAQPage"') && count(/"@type":"Question"/g) === 5);
const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match=>JSON.parse(match[1])).find(item=>item['@type']==='FAQPage');
const visibleFaq = [...html.matchAll(/<details(?: open)?><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)].map(match=>({question:match[1].replace(/<[^>]+>/g,''),answer:match[2].replace(/<[^>]+>/g,'')}));
const schemaFaq = faqSchema?.mainEntity?.map(item=>({question:item.name,answer:item.acceptedAnswer.text})) || [];
check('Visible FAQ matches schema', JSON.stringify(visibleFaq) === JSON.stringify(schemaFaq));
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
check('Bandcamp stripe', html.includes('article-cta article-cta-full'));
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);
check('Shared author card', html.includes('Article by thecatrave'));
check('Global history visual', html.includes('img/bass-music/bass-music-global-history.svg'));
check('Mobile global history visual', html.includes('img/bass-music/bass-music-global-history-mobile.svg'));
check('Read next jungle', html.includes('href="/jungle-music-guide"'));
check('Read next breakbeat', html.includes('href="/breakbeat-guide"'));
check('Read next UK electronic', html.includes('href="/uk-electronic-music-evolution"'));
check('No leaked media placeholders', !/\[(?:EMBED|SOUNDCLOUD FEATURE|SPOTIFY FEATURE):/.test(html));
check('No editorial end matter', !html.includes('Editorial end matter'));
check('No em dash in visible source', !html.includes('—'));
check('Brand is lowercase', !/(?:The CatRave|TheCatRave|the cat rave)/.test(html));
check('All iframes have titles', [...html.matchAll(/<iframe\b[^>]*>/g)].every(match => /\stitle="[^"]+"/.test(match[0])));
check('All images have alt text', [...html.matchAll(/<img\b[^>]*>/g)].every(match => /\salt="[^"]+"/.test(match[0])));
check('All raster images have dimensions', [...html.matchAll(/<img\b[^>]*src="[^"]+\.(?:jpg|jpeg|png|webp)(?:\?[^" ]*)?"[^>]*>/gi)].every(match => /\swidth="\d+"/.test(match[0]) && /\sheight="\d+"/.test(match[0])));
check('Responsive viewport', html.includes('name="viewport" content="width=device-width,initial-scale=1"'));
const css = fs.readFileSync('thecatrave-article.css','utf8');
check('Images shrink proportionally', /\.article-image img\s*\{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/.test(css));
check('Mobile image rules', /@media \(max-width: 760px\)[\s\S]*?\.article-image img\s*\{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/.test(css));
check('Mobile listening bands stack', /@media \(max-width: 760px\)[\s\S]*?\.article-media-band\s*\{\s*grid-template-columns:\s*1fr;/.test(css));

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicates = ids.filter((id,index)=>ids.indexOf(id)!==index);
check('No duplicate IDs', duplicates.length === 0, [...new Set(duplicates)].join(', '));
const localSrcs = [...html.matchAll(/(?:src|href)="((?:img\/)[^"]+)"/g)].map(match=>match[1].split('?')[0]);
check('Local assets exist', localSrcs.every(src=>fs.existsSync(src)), localSrcs.filter(src=>!fs.existsSync(src)).join(', '));

if (failures.length) {
  console.error(`Bass music audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Bass music audit passed.');
