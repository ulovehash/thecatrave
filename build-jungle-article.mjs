import fs from 'node:fs';
import {analytics, articleFaq, articleFigure, articleFooter, articleHero, articleListeningBand, articlePage, articleSection, articleSources, articleStructuredData, articleTable, articleTableOfContents, articleYoutubeEmbed, authorCard, bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext, siteHeader} from './site-components.mjs';
import {relatedArticles as relatedArticlesFor} from './home-articles.mjs';

const path = 'jungle-music-guide.html';
const current = fs.readFileSync(path, 'utf8');
const contentMarker = /<!-- jungle-content:start -->([\s\S]*?)<!-- jungle-content:end -->/;
const preservedContent = current.match(contentMarker);

function legacyContent(html) {
  const startNeedle = '<section class="floating-block">\n\t<h2>From Sound System Roots to Breakbeat Future</h2>';
  const start = html.indexOf(startNeedle);
  const end = html.indexOf('\n  </article>', start);
  if (start < 0 || end < 0) throw new Error('Could not locate the legacy jungle article body.');
  return html.slice(start, end);
}

let content = preservedContent?.[1] ?? legacyContent(current);

function replaceMarkedBlock(html, marker, replacement) {
  const pattern = new RegExp(`(<!-- ${marker}:start -->)[\\s\\S]*?(<!-- ${marker}:end -->)`);
  if (!pattern.test(html)) throw new Error(`Could not locate component marker: ${marker}`);
  return html.replace(pattern, `$1\n${replacement}\n$2`);
}

if (!preservedContent) content = content
  .replace(/<aside class="floating-inset">\s*<h3>Self promotion second!<\/h3>[\s\S]*?<\/aside>/, '')
  .replace(/<section class="floating-block">/g, '<section class="floating-block article-section">')
  .replace(/class="floating-image full-bleed"/g, 'class="floating-image article-image wide-archive-image"')
  .replace(/class="floating-image"/g, 'class="floating-image article-image"')
  .replace(/<table[^>]*>/g, '<div class="genre-table-wrap"><table class="genre-table">')
  .replace(/<\/table>/g, '</table></div>')
  .replace(/<tr style="[^"]*">/g, '<tr>')
  .replace('title="Nia Archives Boiler Room frameborder="0"', 'title="Nia Archives Boiler Room jungle set" frameborder="0"')
  .replace(/<iframe([^>]*src="https:\/\/www\.youtube\.com\/embed\/[^>]+)>/g, '<iframe class="article-embed video-inline-embed"$1 loading="lazy">')
  .replace(/<iframe([^>]*src="https:\/\/open\.spotify\.com\/embed\/[^>]+)>/g, '<iframe class="article-embed spotify-inline-embed"$1>')
  .replace(/\swidth="560"/g, '')
  .replace(/\sheight="315"/g, '')
  .replace(/<figcaption>[^<]*source ↗<\/a><\/figcaption>/g, match => match.replace(/\s*<a[\s\S]*?<\/a>/, ''))
  .replace(/🧾 /g, '')
  .replace(/📻 /g, '')
  .replace(/📼/g, '')
  .replace(/🙏 /g, '')
  .replace(/🔗 /g, '');

const sectionMap = [
  ['From Sound System Roots to Breakbeat Future', 'introduction', 'article-intro'],
  ['Origins: The Birth of Jungle in Early 90s Britain', 'origins', ''],
  ['Why “Jungle”? Etymology of the Name', 'name', 'tone-cyan'],
  ['1991–1993: The Underground Emergence', 'underground-emergence', ''],
  ['1994–1995: Jungle Goes Mainstream (the “Jungle Mania” Era)', 'jungle-mania', 'tone-yellow'],
  ['Pioneers and Underground Legends', 'pioneers', ''],
  ['Iconic Jungle Labels', 'labels', ''],
  ['Pirate Radio, Dubplates & Pre-Internet Community', 'pirate-radio', ''],
  ['Slang, Style & Rituals: The Jungle Subculture', 'culture', 'tone-cyan'],
  ['Anthems and Pivotal Tracks', 'essential-tracks', ''],
  ['Breakbeat DNA: The Classic Drum Loops Behind Jungle', 'breakbeats', ''],
  ['Beefs, Drama & Mythos in the Jungle Scene', 'myths', ''],
  ['The Jungle Revival and Today’s Scene', 'revival', 'tone-coral'],
  ['Conclusion', 'conclusion', ''],
  ['BONUS: Jungle Pioneers & Foundation Builders TL;DR Table', 'foundation-builders', ''],
  ['Jungle Revivalists & Modern Heroes', 'modern-artists', ''],
  ['Shout Outs & Acknowledgments', 'acknowledgments', ''],
];

if (!preservedContent) for (const [heading, id, extra] of sectionMap) {
  const opening = '<section class="floating-block article-section">\n';
  const replacement = `<section class="floating-block article-section${extra ? ` ${extra}` : ''}" id="${id}">\n`;
  const headingIndex = content.indexOf(`<h2>${heading}</h2>`);
  if (headingIndex < 0) continue;
  const openingIndex = content.lastIndexOf(opening, headingIndex);
  if (openingIndex >= 0) content = content.slice(0, openingIndex) + replacement + content.slice(openingIndex + opening.length);
}

const dimensions = {
  'img/flyers-1200.webp': [1200, 675],
  'img/pirate-radio-1200.webp': [1200, 655],
  'img/tapepack.png': [1200, 764],
  'img/AWOL2.png': [400, 400],
  'img/fabio-1200.webp': [1200, 794],
  'img/koolfmbirthday.webp': [600, 423],
  'img/people dancing-1200.webp': [1200, 777]
};
if (!preservedContent) for (const [src, [width, height]] of Object.entries(dimensions)) {
  content = content.replace(`src="${src}"`, `src="${src}" width="${width}" height="${height}"`);
}

content = content
  .replace(/img\/people dancing/g, 'img/people%20dancing')
  .replace('title="YouTube video playlist"', 'title="Early jungle rave and pirate radio documentary playlist"')
  // Preserved legacy anchors open in a new tab without rel; add the standard hardening.
  .replace(/<a\b[^>]*>/g, tag =>
    /\btarget="_blank"/.test(tag) && !/\brel=/.test(tag)
      ? tag.replace(/>$/, ' rel="noopener noreferrer">')
      : tag);

const iframeTitles = {
  'https://open.spotify.com/embed/playlist/63AoNfdevveMbVyzF9CL62?utm_source=generator': 'Early jungle and hardcore playlist on Spotify',
  'https://open.spotify.com/embed/artist/5Wfn5sc1w3DhMTpU7oPJZL?utm_source=generator': 'Shy FX on Spotify',
  'https://open.spotify.com/embed/playlist/4hvbZXAhxnqcybT7zNhHLn?utm_source=generator': 'Jungle pioneers playlist on Spotify',
  'https://open.spotify.com/embed/playlist/41q06ShCxQM2pnsM3yRz4G?utm_source=generator': 'Essential jungle tracks playlist on Spotify'
};
for (const [src, title] of Object.entries(iframeTitles)) {
  const escaped = src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  content = content.replace(new RegExp(`<iframe([^>]*src="${escaped}"[^>]*)>`), (iframe, attributes) =>
    /\stitle="/.test(attributes) ? iframe : `<iframe${attributes} title="${title}">`
  );
}

// YouTube embeds from the legacy article render as empty black rectangles in
// local file previews. The same listening moments are represented below by
// labelled Spotify players that remain useful in both preview and production.
content = content
  .replace(/\s*<iframe\b[^>]*class="[^"]*video-inline-embed[^"]*"[\s\S]*?<\/iframe>/gi, '')
  .replace(/\s*<iframe\b[^>]*src="https:\/\/www\.youtube\.com\/embed\/[^"]+"[\s\S]*?<\/iframe>/gi, '')
  .replace(/\s*<iframe\b[^>]*src="https:\/\/open\.spotify\.com\/embed\/artist\/5Wfn5sc1w3DhMTpU7oPJZL[^"]*"[\s\S]*?<\/iframe>/gi, '');

function listeningFeature({key, kicker, heading, description, iframe}) {
  const src = (iframe.match(/\ssrc="([^"]+)"/)?.[1] || '').replace(/&amp;/g, '&');
  const iframeTitle = iframe.match(/\stitle="([^"]+)"/)?.[1] || `${heading} on Spotify`;
  const feature = articleListeningBand({
    platform:'spotify', id:`jungle-listening-${key}`, kicker, title:heading, description,
    src, iframeTitle, fullBleed:true
  });
  return `<!-- jungle-listening:${key}:start -->\n${feature}\n<!-- jungle-listening:${key}:end -->`;
}

function placeListeningFeature(html, {key, srcNeedle, sectionId, paragraphMarker, kicker, heading, description}) {
  const existingPattern = new RegExp(`<!-- jungle-listening:${key}:start -->[\\s\\S]*?<!-- jungle-listening:${key}:end -->`);
  const existing = html.match(existingPattern);
  if (existing) {
    const iframe = existing[0].match(/<iframe\b[\s\S]*?<\/iframe>/i)?.[0];
    return iframe ? html.replace(existingPattern, listeningFeature({key, kicker, heading, description, iframe})) : html;
  }
  const srcIndex = html.indexOf(srcNeedle);
  if (srcIndex < 0) return html;
  const iframeStart = html.lastIndexOf('<iframe', srcIndex);
  const iframeEnd = html.indexOf('</iframe>', srcIndex) + '</iframe>'.length;
  if (iframeStart < 0 || iframeEnd < '</iframe>'.length) return html;
  const iframe = html.slice(iframeStart, iframeEnd);
  html = html.slice(0, iframeStart) + html.slice(iframeEnd);
  const feature = listeningFeature({key, kicker, heading, description, iframe});

  if (!sectionId || !paragraphMarker) {
    return html.slice(0, iframeStart) + feature + html.slice(iframeStart);
  }

  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const markerIndex = html.indexOf(paragraphMarker, sectionStart);
  const paragraphEnd = html.indexOf('</p>', markerIndex) + '</p>'.length;
  if (sectionStart < 0 || sectionEnd < 0 || markerIndex < 0 || paragraphEnd > sectionEnd) {
    return html.slice(0, iframeStart) + feature + html.slice(iframeStart);
  }
  return html.slice(0, paragraphEnd) + `\n${feature}` + html.slice(paragraphEnd);
}

function insertFeatureAfterParagraph(html, {key, sectionId, paragraphMarker, feature}) {
  const startMarker = `<!-- jungle-feature:${key}:start -->`;
  const endMarker = `<!-- jungle-feature:${key}:end -->`;
  const existingPattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
  if (existingPattern.test(html)) return html.replace(existingPattern, `${startMarker}\n${feature}\n${endMarker}`);
  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const markerIndex = html.indexOf(paragraphMarker, sectionStart);
  const paragraphEnd = html.indexOf('</p>', markerIndex) + '</p>'.length;
  if (sectionStart < 0 || sectionEnd < 0 || markerIndex < 0 || paragraphEnd > sectionEnd) return html;
  return html.slice(0, paragraphEnd) + `\n${startMarker}\n${feature}\n${endMarker}` + html.slice(paragraphEnd);
}

function youtubeFeature({key, videoId, kicker, heading, description}) {
  return articleYoutubeEmbed({
    src:`https://www.youtube.com/embed/${videoId}?rel=0&origin=https%3A%2F%2Fthecatrave.com&widget_referrer=https%3A%2F%2Fthecatrave.com%2Fjungle-music-guide`,
    title:heading
  });
}

function soundcloudFeature() {
  return articleListeningBand({
    platform:'soundcloud', id:'jungle-soundcloud-lana', kicker:'A contemporary jungle remix by thecatrave',
    title:'Lana Del Rey — Art Deco (Jungle Remix).',
    description:'A current example of jungle’s breaks and bass pressure being used to reframe a pop vocal rather than simply reproduce a 1990s template.',
    src:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/art-deco-jungle-remix&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    iframeTitle:'Lana Del Rey — Art Deco (Jungle Remix) by thecatrave on SoundCloud',
    fullBleed:true, tone:'cyan'
  });
}

const legendaryJungleTracks = {
  valley: {
    year:'1993', artist:'Origin Unknown', title:'Valley of the Shadows',
    note:'A sparse, ominous benchmark: sub-bass, chopped breaks and a sample that became part of jungle’s shared language.',
    spotifyId:'3BDFLAvxTaWHpWgHkFpMsJ'
  },
  renegadeSnares: {
    year:'1993', artist:'Omni Trio', title:'Renegade Snares',
    note:'Rushy chords and intricately edited drums showing how emotional and rhythmically detailed early jungle could be.',
    spotifyId:'72G1pFJW0poqDNUlGbzJOh'
  },
  incredible: {
    year:'1994', artist:'M-Beat & General Levy', title:'Incredible',
    note:'A defining meeting of jungle production and dancehall MC energy that carried the sound far beyond specialist clubs.',
    spotifyId:'2fq7lLTvRHZjUPqh5a20n5'
  },
  innerCityLife: {
    year:'1994', artist:'Goldie', title:'Inner City Life',
    note:'Diane Charlemagne’s vocal and a sweeping arrangement pushed jungle towards album scale without flattening its rhythmic complexity.',
    spotifyId:'4qw7xhiy8rWGDeffgSj7Ez'
  },
  babylon: {
    year:'1995', artist:'Splash', title:'Babylon',
    note:'A dark, dubwise pressure track whose bass, vocal fragments and break edits became a lasting jungle reference point.',
    spotifyId:'05KgAsHP0YmiJ0KWP6Axf0'
  }
};

function exactJungleTrackFeature(key, tone = '') {
  const track = legendaryJungleTracks[key];
  return articleListeningBand({
    platform:'spotify', id:`jungle-track-${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`,
    kicker:'Essential listening', title:`${track.artist} — ${track.title}.`,
    description:`${track.year}. ${track.note}`,
    src:`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator`,
    iframeTitle:`${track.artist} — ${track.title} on Spotify`, tone
  });
}

function insertFeatureAfterList(html, {key, sectionId, itemMarker, feature}) {
  const startMarker = `<!-- jungle-feature:${key}:start -->`;
  const endMarker = `<!-- jungle-feature:${key}:end -->`;
  const existingSplitPattern = new RegExp(`\\s*<\\/ul>\\s*${startMarker}[\\s\\S]*?${endMarker}\\s*<ul>\\s*`);
  const existingPattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
  if (existingSplitPattern.test(html)) html = html.replace(existingSplitPattern, '\n');
  else if (existingPattern.test(html)) html = html.replace(existingPattern, '');
  html = html.replace(/<ul>\s*<\/ul>/g, '');
  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const itemIndex = html.indexOf(itemMarker, sectionStart);
  const itemEnd = html.indexOf('</li>', itemIndex) + '</li>'.length;
  if (sectionStart < 0 || sectionEnd < 0 || itemIndex < 0 || itemEnd > sectionEnd) return html;
  return html.slice(0, itemEnd)
    + `\n</ul>\n${startMarker}\n${feature}\n${endMarker}\n<ul>`
    + html.slice(itemEnd);
}

content = placeListeningFeature(content, {
  key: 'early-jungle',
  srcNeedle: 'open.spotify.com/embed/playlist/63AoNfdevveMbVyzF9CL62',
  sectionId: 'underground-emergence',
  paragraphMarker: 'Darkcore is often seen as a crucial bridge',
  kicker: 'Essential listening',
  heading: 'Early jungle and hardcore: extended playlist.',
  description: 'A longer route through the records connecting breakbeat hardcore, darkcore and the first recognisable jungle sound.'
});
content = placeListeningFeature(content, {
  key: 'jungle-mania',
  srcNeedle: 'open.spotify.com/embed/playlist/4hvbZXAhxnqcybT7zNhHLn',
  kicker: 'Essential listening',
  heading: 'The breakthrough years: extended playlist.',
  description: 'A broader selection of pioneers, anthems and different sides of jungle from the period when the music moved beyond pirate radio without losing its underground language.'
});
content = placeListeningFeature(content, {
  key: 'essential-tracks',
  srcNeedle: 'open.spotify.com/embed/playlist/41q06ShCxQM2pnsM3yRz4G',
  kicker: 'Essential listening',
  heading: 'Five records at the centre of classic jungle.',
  description: 'Exact tracks that make the anthems and turning points described above immediately audible.'
});

content = insertFeatureAfterParagraph(content, {
  key:'track-valley-of-the-shadows', sectionId:'underground-emergence',
  paragraphMarker:'Early Jungle (often interchangeably called',
  feature:exactJungleTrackFeature('valley', 'cyan')
});
content = insertFeatureAfterParagraph(content, {
  key:'track-incredible', sectionId:'jungle-mania',
  paragraphMarker:'Likewise, “Original Nuttah” became',
  feature:exactJungleTrackFeature('incredible', 'cyan')
});
content = insertFeatureAfterList(content, {
  key:'track-inner-city-life', sectionId:'pioneers', itemMarker:'<strong>Goldie</strong>',
  feature:exactJungleTrackFeature('innerCityLife', 'coral')
});
content = insertFeatureAfterList(content, {
  key:'track-renegade-snares', sectionId:'labels', itemMarker:'<strong>Moving Shadow</strong>',
  feature:exactJungleTrackFeature('renegadeSnares', 'yellow')
});
content = insertFeatureAfterParagraph(content, {
  key:'track-babylon', sectionId:'essential-tracks',
  paragraphMarker:'Other classics include',
  feature:exactJungleTrackFeature('babylon', 'cyan')
});

content = insertFeatureAfterParagraph(content, {
  key: 'dj-hype',
  sectionId: 'underground-emergence',
  paragraphMarker: 'His ability to blend turntablism with raw Jungle energy',
  feature: youtubeFeature({
    key: 'dj-hype',
    videoId: 'gdQ4V245hG8',
    kicker: 'Archive listening',
    heading: 'DJ Hype — Jungle Massive.',
    description: 'A period compilation that turns the names and records in this section into a continuous listening route.'
  })
});
content = insertFeatureAfterParagraph(content, {
  key: 'original-nuttah',
  sectionId: 'jungle-mania',
  paragraphMarker: 'became a global catchphrase for the culture',
  feature: youtubeFeature({
    key: 'original-nuttah',
    videoId: '3QMiCBJ7yRM',
    kicker: 'Essential track',
    heading: 'Shy FX & UK Apachi — Original Nuttah.',
    description: 'The 1994 crossover anthem discussed here, embedded at the exact point where it enters the story.'
  })
});
content = insertFeatureAfterParagraph(content, {
  key: 'nia-archives',
  sectionId: 'revival',
  paragraphMarker: 'are spearheading a movement that honors the past',
  feature: youtubeFeature({
    key: 'nia-archives',
    videoId: 'jO5JhZNSjUA',
    kicker: 'The revival in practice',
    heading: 'Nia Archives — Boiler Room: London.',
    description: 'A modern set connecting foundational jungle records, contemporary edits and the renewed energy described in this section.'
  })
});
content = insertFeatureAfterParagraph(content, {
  key: 'lana-soundcloud',
  sectionId: 'revival',
  paragraphMarker: 'have brought Jungle back into the limelight',
  feature: soundcloudFeature()
});

function relocateFigure(html, src, sectionId, paragraphMarker) {
  const imageIndex = html.indexOf(`src="${src}"`);
  if (imageIndex < 0) return html;
  const figureStart = html.lastIndexOf('<figure', imageIndex);
  const figureEnd = html.indexOf('</figure>', imageIndex) + '</figure>'.length;
  if (figureStart < 0 || figureEnd < '</figure>'.length) return html;
  const figure = html.slice(figureStart, figureEnd);
  html = html.slice(0, figureStart) + html.slice(figureEnd);
  const sectionStart = html.indexOf(`id="${sectionId}"`);
  const sectionEnd = html.indexOf('</section>', sectionStart);
  const markerIndex = html.indexOf(paragraphMarker, sectionStart);
  const paragraphEnd = html.indexOf('</p>', markerIndex) + '</p>'.length;
  if (sectionStart < 0 || sectionEnd < 0 || markerIndex < 0 || paragraphEnd > sectionEnd) return html;
  return html.slice(0, paragraphEnd) + `\n${figure}` + html.slice(paragraphEnd);
}

for (const [src, sectionId, marker] of [
  ['img/flyers-1200.webp', 'origins', 'Before breakbeat hardcore fully took over'],
  ['img/pirate-radio-1200.webp', 'underground-emergence', 'Meanwhile, <strong>pirate radio</strong>'],
  ['img/tapepack.png', 'underground-emergence', '<strong>Tape packs</strong>'],
  ['img/AWOL2.png', 'jungle-mania', 'In 1994, Jungle exploded'],
  ['img/fabio-1200.webp', 'pioneers', 'No history of Jungle is complete'],
  ['img/koolfmbirthday.webp', 'pirate-radio', 'One of the most fascinating aspects'],
  ['img/people%20dancing-1200.webp', 'culture', '<strong>Fashion</strong> was equally important']
]) content = relocateFigure(content, src, sectionId, marker);

content = content
  .replace(/<\/section>\s*<section class="floating-block article-section">\s*(<p>This period also saw[\s\S]*?<\/iframe>)\s*<\/section>\s*<\/section>/, '$1\n</section>')
  .replace(/\s*<a[^>]*>source ↗<\/a>/gi, '')
  .replace(/[🎨🎛️💃]/gu, '')
  .replace('alt="AWOLrave flyer"', 'alt="AWOL jungle rave flyer"')
  .replace('<figcaption> Rave flyer from AWOL</figcaption>', '<figcaption>Rave flyer from AWOL</figcaption>');

const awolImageIndex = content.indexOf('src="img/AWOL2.png"');
if (awolImageIndex >= 0) {
  const awolFigureStart = content.lastIndexOf('<figure', awolImageIndex);
  const awolFigureTagEnd = content.indexOf('>', awolFigureStart);
  if (awolFigureStart >= 0 && awolFigureTagEnd > awolFigureStart) {
    const openingTag = content.slice(awolFigureStart, awolFigureTagEnd + 1);
    if (!/\bawol-flyer\b/.test(openingTag)) {
      content = content.slice(0, awolFigureStart)
        + openingTag.replace('class="', 'class="awol-flyer ')
        + content.slice(awolFigureTagEnd + 1);
    }
  }
}
content = content.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');

for (const feature of [
  {
    marker:'jungle-listening:early-jungle', platform:'spotify', id:'jungle-listening-early-jungle',
    kicker:'Essential listening', title:'Early jungle and hardcore: extended playlist.',
    description:'A longer route through the records connecting breakbeat hardcore, darkcore and the first recognisable jungle sound.',
    src:'https://open.spotify.com/embed/playlist/63AoNfdevveMbVyzF9CL62?utm_source=generator',
    iframeTitle:'Early jungle and hardcore playlist on Spotify', fullBleed:true
  },
  {
    marker:'jungle-listening:jungle-mania', platform:'spotify', id:'jungle-listening-jungle-mania',
    kicker:'Essential listening', title:'The breakthrough years: extended playlist.',
    description:'A broader selection of pioneers, anthems and different sides of jungle from the period when the music moved beyond pirate radio without losing its underground language.',
    src:'https://open.spotify.com/embed/playlist/4hvbZXAhxnqcybT7zNhHLn?utm_source=generator',
    iframeTitle:'Jungle pioneers playlist on Spotify', fullBleed:true, tone:'cyan'
  },
  {
    marker:'jungle-feature:lana-soundcloud', platform:'soundcloud', id:'jungle-soundcloud-lana',
    kicker:'A contemporary jungle remix by thecatrave', title:'Lana Del Rey — Art Deco (Jungle Remix).',
    description:'A current example of jungle’s breaks and bass pressure being used to reframe a pop vocal rather than simply reproduce a 1990s template.',
    src:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/art-deco-jungle-remix&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    iframeTitle:'Lana Del Rey — Art Deco (Jungle Remix) by thecatrave on SoundCloud', fullBleed:true, tone:'cyan'
  }
]) {
  const {marker, ...options} = feature;
  content = replaceMarkedBlock(content, marker, articleListeningBand(options));
}

content = replaceMarkedBlock(content, 'jungle-listening:essential-tracks', '');

for (const feature of [
  {
    marker:'jungle-feature:dj-hype',
    src:'https://www.youtube.com/embed/gdQ4V245hG8?rel=0&origin=https%3A%2F%2Fthecatrave.com&widget_referrer=https%3A%2F%2Fthecatrave.com%2Fjungle-music-guide',
    title:'DJ Hype — Jungle Massive.'
  },
  {
    marker:'jungle-feature:original-nuttah',
    src:'https://www.youtube.com/embed/3QMiCBJ7yRM?rel=0&origin=https%3A%2F%2Fthecatrave.com&widget_referrer=https%3A%2F%2Fthecatrave.com%2Fjungle-music-guide',
    title:'Shy FX & UK Apachi — Original Nuttah.'
  },
  {
    marker:'jungle-feature:nia-archives',
    src:'https://www.youtube.com/embed/jO5JhZNSjUA?rel=0&origin=https%3A%2F%2Fthecatrave.com&widget_referrer=https%3A%2F%2Fthecatrave.com%2Fjungle-music-guide',
    title:'Nia Archives — Boiler Room: London.'
  }
]) {
  const {marker, ...options} = feature;
  content = replaceMarkedBlock(content, marker, articleYoutubeEmbed(options));
}

const decodeAttribute = value => String(value || '')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&#x27;/g, "'")
  .replace(/&amp;/g, '&');
const attribute = (markup, name) => decodeAttribute(markup.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1] || '');

// The Jungle article began as preserved legacy HTML. Normalise every repeated
// editorial structure through the same component functions as the newer guides
// so future component changes genuinely reach this page after a rebuild.
content = content.replace(/<figure class="([^"]*\bfloating-image\b[^"]*)">([\s\S]*?)<\/figure>/g, (figure, classes, inner) => {
  const image = inner.match(/<img\b([^>]*)>/)?.[1];
  if (!image) return figure;
  const caption = inner.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1]?.trim() || '';
  const className = classes.split(/\s+/).filter(name => name && !['floating-image', 'article-image'].includes(name)).join(' ');
  return articleFigure({
    src:attribute(image, 'src'), srcset:attribute(image, 'srcset'),
    sizes:attribute(image, 'sizes') || '(max-width: 760px) calc(100vw - 32px), 640px',
    width:attribute(image, 'width'), height:attribute(image, 'height'),
    alt:attribute(image, 'alt'), loading:attribute(image, 'loading') || 'lazy',
    caption, className
  });
});

content = content.replace(/<div class="genre-table-wrap"[^>]*>\s*<table class="([^"]*)">\s*<thead>\s*<tr>([\s\S]*?)<\/tr>\s*<\/thead>\s*<tbody>([\s\S]*?)<\/tbody>\s*<\/table>\s*<\/div>/g, (table, classes, head, body) => {
  const headers = [...head.matchAll(/<th(?:\s[^>]*)?>([\s\S]*?)<\/th>/g)].map(match => match[1].trim());
  const rows = [...body.matchAll(/<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr>/g)].map(row =>
    [...row[1].matchAll(/<td(?:\s[^>]*)?>([\s\S]*?)<\/td>/g)].map(cell => cell[1].trim())
  );
  const className = classes.split(/\s+/).filter(name => name && name !== 'genre-table').join(' ');
  return headers.length && rows.length ? articleTable({headers, rows, className}) : table;
});

let resourcesBody = '';
content = content.replace(/<section class="[^"]*\bsources-section\b[^"]*" id="sources">\s*<h2>Recommended Resources<\/h2>([\s\S]*?)<\/section>/, (section, body) => {
  resourcesBody = body.trim();
  return '';
});
if (!resourcesBody) content = content.replace(/\s*<h2>Recommended Resources<\/h2>\s*(<ul>[\s\S]*?<\/ul>)/, (block, list) => {
  resourcesBody = list.trim();
  return '';
});
if (resourcesBody) content = `${content.trimEnd()}\n${articleSources({title:'Recommended Resources', id:'sources', bodyHtml:resourcesBody})}`;

content = content.replace(/<section class="([^"]*\bfloating-block\b[^"]*\barticle-section\b[^"]*)" id="([^"]+)">\s*<h2>([\s\S]*?)<\/h2>([\s\S]*?)<\/section>/g, (section, classes, id, title, bodyHtml) => {
  const className = classes.split(/\s+/).filter(name => name && !['floating-block', 'article-section'].includes(name)).join(' ');
  return articleSection({id, title:decodeAttribute(title.trim()), bodyHtml:bodyHtml.trim(), className});
});

const faqItems = [
  {
    question:'Where and when did jungle music originate?',
    answer:'Jungle emerged in Britain in the early 1990s, with London as its main centre and important activity in cities including Bristol. Between roughly 1991 and 1993, producers and DJs pushed breakbeat hardcore towards faster chopped funk breaks, heavier sub-bass and stronger reggae, dub and dancehall influence. It developed across a scene rather than beginning with one universally agreed release date.'
  },
  {
    question:'Who invented jungle music?',
    answer:'No single person invented jungle. It formed through overlapping work by producers, DJs, MCs, pirate stations, sound systems and independent labels. Artists including Lennie De Ice, Shut Up and Dance, Rebel MC, 4hero, Fabio, Grooverider and many others are central to its early history, but naming one inventor would flatten a collective Black British rave culture.'
  },
  {
    question:'Why is jungle music called jungle?',
    answer:'The name has several competing histories. One widely repeated account connects “junglist” to Jamaican sound-system language and to Arnett Gardens in Kingston, an area known as the Jungle. Jamaican vocal samples, UK MCs, pirate radio and records then helped turn jungle and junglist into a scene identity. Exactly who first applied the name to the music remains disputed.'
  },
  {
    question:'What came first, jungle or drum and bass?',
    answer:'Jungle came first as a distinct scene and widely used name in the early 1990s. Drum and bass became more common as a broader label during the mid-1990s, when parts of the music moved towards more streamlined, technical or atmospheric production. Their histories overlap, and jungle did not simply disappear when drum and bass became established.'
  },
  {
    question:'What BPM is jungle music?',
    answer:'Classic jungle usually sits around 160 to 175 BPM, although early and modern tracks can fall outside that range. Speed alone does not define the genre: chopped funk breaks, syncopation, sub-bass, dub and dancehall influence, sampling and MC culture matter just as much.'
  },
  {
    question:'What are the main jungle subgenres?',
    answer:'Common branches and closely related styles include ragga jungle, darkside or darkcore, atmospheric or intelligent jungle, jump-up and modern revivalist jungle. These labels overlap and were not always used consistently at the time, so they work better as descriptions of scenes and tendencies than as rigid boxes.'
  }
].map(item => ({...item, answerHtml:`<p>${item.answer}</p>`}));

const faqMarkerStart = '<!-- jungle-component:faq:start -->';
const faqMarkerEnd = '<!-- jungle-component:faq:end -->';
content = content
  .replace(new RegExp(`\\s*${faqMarkerStart}[\\s\\S]*?${faqMarkerEnd}\\s*`), '\n')
  .replace(/\s*<section class="[^"]*\bfaq-section\b[^"]*" id="faq">[\s\S]*?<\/section>\s*/, '\n');
const faqHtml = `${faqMarkerStart}\n${articleFaq({items:faqItems, title:'Jungle Music FAQ.', id:'faq', openFirst:true})}\n${faqMarkerEnd}`;
const acknowledgmentsIndex = content.indexOf('<section class="floating-block article-section" id="acknowledgments">');
if (acknowledgmentsIndex < 0) throw new Error('Could not place the Jungle FAQ before acknowledgments.');
content = `${content.slice(0, acknowledgmentsIndex).trimEnd()}\n${faqHtml}\n${content.slice(acknowledgmentsIndex)}`;

const title = 'What Is Jungle Music? History, Sound & Essential Tracks';
const h1 = 'What Is Jungle Music? A Guide to Its History, Sound and Culture.';
const description = 'What is jungle music? Explore its early-90s UK origins, sound-system roots, defining breakbeats, key artists, essential tracks and modern revival.';
const directAnswer = 'Jungle is a fast, breakbeat-led form of British electronic music that emerged from breakbeat hardcore in the early 1990s. Its chopped funk breaks, heavy sub-bass and sample culture were shaped by Black British rave, reggae, dub, dancehall, hip-hop and sound-system practice. Pirate radio, dubplates, MCs and independent labels were not side details: they were the infrastructure that let the music develop before mainstream recognition. Jungle later overlapped with drum and bass, but the terms are not perfect synonyms. Jungle keeps a distinct cultural identity, rhythmic intensity and connection to the communities that built it.';

const toc = [
  ['introduction', 'What is jungle music?'],
  ['origins', 'Where and when did jungle start?'],
  ['name', 'Why is it called jungle music?'],
  ['underground-emergence', '1991–93: underground emergence'],
  ['jungle-mania', '1994–95: jungle goes mainstream'],
  ['pioneers', 'Artists, producers and pioneers'],
  ['labels', 'Labels and scene infrastructure'],
  ['pirate-radio', 'Pirate radio and dubplate culture'],
  ['culture', 'Jungle culture and subgenres'],
  ['essential-tracks', 'Essential jungle songs and tracks'],
  ['breakbeats', 'Amen, Think, Apache and Hot Pants'],
  ['myths', 'Jungle vs drum and bass'],
  ['revival', 'The modern jungle revival'],
  ['foundation-builders', 'Foundation builders and revivalists'],
  ['faq', 'Jungle music FAQ'],
  ['sources', 'Recommended resources']
].map(([id, label]) => ({id, label}));

const structured = articleStructuredData({headline:h1,description,datePublished:'2025-04-05',dateModified:'2026-08-31',canonical:'https://thecatrave.com/jungle-music-guide',image:'https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994-320.webp'});
const breadcrumbs = breadcrumbStructuredData({name:'Jungle music guide',canonical:'https://thecatrave.com/jungle-music-guide'});
const faqStructured = faqStructuredData({items:faqItems});

const support = bandcampSupport({
  description:'My Lana Del Rey jungle remix belongs directly to the sound explored in this guide. Buying it supports the music and the writing directly.',
  fullBleed:true,
  tracks:[{
    title:'thecatrave — You So Ghetto (Lana Del Rey Jungle Remix)',
    id:'3379956979',
    url:'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix',
    linkText:'You So Ghetto (Lana Del Rey Jungle Remix) by thecatrave'
  }]
});
const related = readNext({items:relatedArticlesFor('jungle-music-guide.html')});

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="https://thecatrave.com/jungle-music-guide"><link rel="icon" type="image/png" sizes="1024x1024" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><meta property="og:type" content="article"><meta property="article:published_time" content="2025-04-05"><meta property="article:modified_time" content="2026-08-31"><meta property="og:site_name" content="thecatrave"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="https://thecatrave.com/jungle-music-guide"><meta property="og:image" content="https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994-320.webp"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994-320.webp"><link rel="preconnect" href="https://api.fontshare.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400,700&amp;display=swap" rel="stylesheet"><link rel="stylesheet" href="thecatrave-home.css"><link rel="stylesheet" href="thecatrave-article.css"><script type="application/ld+json">${JSON.stringify(structured)}</script><script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script></head><body class="article-page jungle-page"><a class="skip-link" href="#main-content">Skip to content</a>${siteHeader({variant:'article'})}<main id="main-content"><article><header class="article-hero"><p class="article-kicker">Jungle music guide</p><h1>${h1}</h1><div class="article-meta"><p class="reading-time">~18 min read</p><p class="article-updated">Updated <time datetime="2026-08-31">31 August 2026</time></p></div><p class="subtitle article-deck">Pirate radio, dubplates, MCs, labels and the Black British rave culture behind one of the UK’s most influential electronic sounds.</p>${infoBanner({label:'JUNGLE MUSIC DEFINITION',bodyHtml:directAnswer,ariaLabel:'Jungle music definition',className:'article-summary'})}${articleTableOfContents({items:toc})}</header><!-- jungle-content:start -->${content}<!-- jungle-content:end -->${authorCard({filled:true})}${support}${related}</article></main>${articleFooter()}${analytics()}</body></html>`;

const jungleHero = articleHero({
  kicker:'Jungle music guide', title:h1, readingTime:'~18 min read',
  dateModified:'2026-08-31', dateLabel:'31 August 2026',
  deck:'Pirate radio, dubplates, MCs, labels and the Black British rave culture behind one of the UK’s most influential electronic sounds.',
  summaryHtml:infoBanner({label:'JUNGLE MUSIC DEFINITION',bodyHtml:directAnswer,ariaLabel:'Jungle music definition',className:'article-summary'}),
  tocItems:toc
});
const jungleArticleHtml = page.match(/<main id="main-content"><article>([\s\S]*?)<\/article><\/main>/)?.[1]
  .replace(/<header class="article-hero">[\s\S]*?<\/header>/, jungleHero);
if (!jungleArticleHtml) throw new Error('Could not extract the generated jungle article body.');
fs.writeFileSync(path, articlePage({
  title, description, canonical:'https://thecatrave.com/jungle-music-guide',
  ogImage:'https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994-320.webp', bodyClass:'article-page jungle-page',
  datePublished:'2025-04-05', dateModified:'2026-08-31',
  structuredData:[structured, breadcrumbs, faqStructured], articleHtml:jungleArticleHtml
}));
