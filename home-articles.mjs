import fs from 'node:fs';

export const homeArticleCatalog = [
  {
    page:'breakbeat-guide.html', href:'/breakbeat-guide', type:'Guide', topic:'Breakbeat',
    title:'Breakbeat Music: History, Sound and Evolution',
    description:'From funk breaks and pirate radio to cracked VSTs and modern bass hybrids.',
    image:'img/amen-320.webp', srcset:'img/amen-320.webp 320w,img/amen-1200.webp 1200w',
    width:1200, height:800, alt:'The Amen break waveform and drum pattern'
  },
  {
    page:'jungle-music-guide.html', href:'/jungle-music-guide', type:'Guide', topic:'Jungle',
    title:'Jungle Music: From Roots to Revival',
    description:'Pirate radio, dubplates, MC energy and the global return of a distinctly Black British sound.',
    image:'img/Dubplates-320.png', srcset:'img/Dubplates-320.png 320w,img/Dubplates.png 1024w',
    width:1024, height:1024, alt:'Illustrated dubplates representing jungle music culture'
  },
  {
    page:'uk-electronic-music-evolution.html', href:'/uk-electronic-music-evolution', type:'Timeline', topic:'UK music',
    title:'The Evolution of UK Electronic Music',
    description:'Ten sounds that travelled from regional underground scenes into global culture.',
    image:'img/bmb-320.webp', srcset:'img/bmb-320.webp 320w,img/bmb.webp 1024w',
    width:1024, height:683, alt:'British electronic music artists performing in a dark club'
  },
  {
    page:'bass-music-guide.html', href:'/bass-music-guide', type:'Guide', topic:'Bass music',
    title:'What Is Bass Music? History, Genres and Essential Tracks',
    description:'A global history connecting Jamaica, Miami, Britain, Los Angeles, Chicago, Durban and today’s hybrid club culture.',
    image:'img/bass-music/miami-bass-loc-ace-vic-480.jpg',
    srcset:'img/bass-music/miami-bass-loc-ace-vic-480.jpg 480w,img/bass-music/miami-bass-loc-ace-vic-1400.jpg 1400w',
    width:1400, height:933, alt:'Miami bass artists Loc Ace and Vic in front of a club sound system in 1993'
  }
];

export function homeArticlesWithReadingTimes() {
  return homeArticleCatalog.map(item => {
    const article = fs.readFileSync(item.page, 'utf8');
    const readingTime = article.match(/<p class="reading-time">([^<]+)<\/p>/)?.[1];
    const minutes = readingTime?.match(/(\d+)\s*min/i)?.[1];
    if (!minutes) throw new Error(`Could not read the article duration from ${item.page}`);
    return {...item, readingTime:`~${minutes} min`};
  });
}
