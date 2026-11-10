// Build brazilian-funk-guide.html from brazilian-funk-guide-draft.md (shared builder: build-genre-guide.mjs).
//
// Asked for by the owner on 2026-11-09 ("lets create first 3 ... 1 by 1"),
// third of the gabber, italo disco and Brazilian funk guides. Research:
// Wikipedia (Funk carioca and the song and artist pages), The FADER (2023),
// Bandcamp Daily (2024) and the Guardian (2023). Volumes are in
// keywords/brazilian-funk.json: Keyword Planner ranges and the Ahrefs US
// points for two terms, labelled per term and never merged.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import {buildGenreGuide} from './build-genre-guide.mjs';

buildGenreGuide({
  slug: 'brazilian-funk-guide',
  imgDir: 'brazilian-funk',
  title: 'What Is Brazilian Funk? Baile Funk, Funk Carioca and Songs',
  description: 'What Brazilian funk is: the sound, where funk carioca came from, what a baile funk is, the styles, the biggest songs and artists, and phonk.',
  datePublished: '2026-11-09',
  dateModified: '2026-11-09',
  dateLabel: '9 November 2026',
  kicker: 'Brazilian funk',
  heroTitle: 'What is Brazilian funk? Baile funk, funk carioca and the songs',
  deck: 'An MC, a DJ and a sound system turned all the way up: the dance music of Rio\'s favelas, from Miami bass loops to São Paulo\'s street parties.',
  answerLabel: 'What is Brazilian funk',
  introTitle: 'Funk, but not that funk.',
  faqTitle: 'Brazilian funk FAQ.',
  ogImage: 'img/og/brazilian-funk.jpg',
  bodyClass: 'brazilian-funk-page',
  sections: [
    {id: 'sound', heading: 'What Brazilian funk sounds like'},
    {id: 'origins', heading: 'Where funk carioca came from'},
    {id: 'baile', heading: 'What happens at a baile funk'},
    {id: 'tamborzao', heading: 'Tamborzão and the 1990s'},
    {id: 'global', heading: 'How baile funk went global'},
    {id: 'styles', heading: 'Brazilian funk styles'},
    {id: 'biggest-songs', heading: 'The biggest Brazilian funk songs'},
    {id: 'artists', heading: 'Brazilian funk artists'},
    {id: 'phonk', heading: 'Brazilian funk or phonk'},
    {id: 'where-to-start', heading: 'Where to start with Brazilian funk'}
  ],
  images: {
    'A FESTA': ['a-festa-rio-2017', 1200, 800,
      'A woman with dark curly hair singing into a microphone on a stage, a crowd in front of her',
      'On stage at A FESTA, a night with MC Linn da Quebrada and MC Carol in Rio de Janeiro, April 2017. Photograph: Ramon Aquim, Mídia NINJA, CC BY-SA 2.0.'],
    'DJ Marlboro': ['dj-marlboro-2013', 353, 419,
      'DJ Marlboro in a cap, smiling, photographed in 2013',
      'DJ Marlboro in 2013. Photograph: Olimor, CC BY-SA 3.0.'],
    'Tati Quebra Barraco': ['tati-quebra-barraco-2021', 1021, 1200,
      'Tati Quebra Barraco smiling, photographed in 2021',
      'Tati Quebra Barraco in 2021. Photograph: Humor Multishow, CC BY-SA 4.0.'],
    'Liga do Funk': ['liga-do-funk-sao-paulo-2013', 1200, 800,
      'A group of young people seated in rows at a meeting in São Paulo',
      'A meeting of the Liga do Funk at Galeria Olido, São Paulo, November 2013. Photograph: Circuito Fora do Eixo, CC BY-SA 2.0.'],
    'Kevin o Chris': ['kevin-o-chris-2023', 796, 1200,
      'Kevin o Chris, photographed in 2023',
      'Kevin o Chris in 2023. Photograph: Humor Multishow, CC BY 3.0.'],
    'KondZilla': ['kondzilla-2023', 899, 1200,
      'KondZilla speaking on a stage at Web Summit Rio',
      'KondZilla at Web Summit Rio, 2023. Photograph: Web Summit Rio, CC BY 2.0.'],
    'Anitta': ['anitta-2024', 491, 602,
      'Anitta, photographed in 2024',
      'Anitta in 2024. Photograph: Attractive Mindset, CC BY 3.0.']
  },
  videos: {
    'Planet Rock': ['9J3lwZjHenA', 'Electro', 'Afrika Bambaataa and the Soulsonic Force', 'Planet Rock, 1982',
      'The record DJ Marlboro named as the main influence on funk carioca, from Tommy Boy\'s channel.'],
    'Furacão 2000': ['9QASL0SjNGQ', 'Brazilian funk', 'Furacão 2000', 'Boiler Room Rio de Janeiro: Carnaval',
      'The Rio sound team that popularised funk across Brazil in the 1990s, at Boiler Room\'s carnival party.'],
    'Quem Que Caguetou': ['xqq7g-H1WHY', 'Brazilian funk', 'Black Alien and Speed', 'Quem Que Caguetou',
      'The record used in a European car commercial in 2003, from Speed\'s channel.'],
    'Bucky Done Gun': ['2LFdPVf1diw', 'Brazilian funk', 'M.I.A.', 'Bucky Done Gun, 2005',
      'M.I.A.\'s funk-based single, from XL Recordings\' channel.'],
    'Pon de Floor': ['pHEkIiQpwI8', 'Dancehall', 'Major Lazer', 'Pon de Floor, 2009',
      'The record that became the basis of Beyoncé\'s "Run the World (Girls)".'],
    'DJ K': ['BhYwzsA4Vfo', 'Brazilian funk', 'DJ K', 'Boiler Room LA: Favela Worldwide',
      'DJ K, who calls his style bruxaria, at Boiler Room in Los Angeles.'],
    'Olha a Explosão': ['3yd_eoMOvqk', 'Brazilian funk', 'MC Kevinho', 'Olha a Explosão, 2016',
      'The video that passed a billion views on the KondZilla channel.'],
    'Bum Bum Tam Tam': ['_P7S2lKif-A', 'Brazilian funk', 'MC Fioti', 'Bum Bum Tam Tam, 2017',
      'MC Fioti\'s Bach-sampling number one in the Netherlands, from the KondZilla channel.'],
    'Vai Malandra': ['kDhptBT_-VI', 'Brazilian funk', 'Anitta, MC Zaac and Maejor', 'Vai Malandra, 2017',
      'Produced by Tropkillaz and DJ Yuri Martins, from Anitta\'s channel.'],
    'Fala Mal de Mim': ['KhE4zBwKx_M', 'Brazilian funk', 'Ludmilla', 'Fala Mal de Mim',
      'The record Ludmilla first became known for.'],
    'Fuleragem': ['4N2iMmHcHys', 'Brazilian funk', 'MC WM', 'Fuleragem',
      'The best-known rasteirinha record, from the KondZilla channel.'],
    'Parabéns': ['RAQmKOsonhc', 'Brega funk', 'Pabllo Vittar featuring Psirico', 'Parabéns',
      'Brega funk from Recife, from Pabllo Vittar\'s channel.'],
    'Automotivo Bibi Fogosa': ['N0pDBF00ygQ', 'Brazilian funk', 'Bibi Babydoll and DJ Brunin XM', 'Automotivo Bibi Fogosa',
      'Number one on Spotify in Ukraine in 2023, from Bibi Babydoll\'s channel.'],
    'São Paulo': ['2kjolTLZ_Mg', 'Brazilian funk', 'The Weeknd and Anitta', 'São Paulo, 2024',
      'Rave funk on the international chart, from The Weeknd\'s channel.'],
    'Rennan da Penha': ['s3rjrd6jOrk', 'Brazilian funk', 'Rennan da Penha', 'Boiler Room Rio de Janeiro: Carnaval',
      'Rennan da Penha, co-founder of the 150 BPM style, at Boiler Room\'s carnival party in Rio.']
  },
  tables: {
    'styles': {
      label: 'Brazilian funk styles',
      headers: ['Style', 'Where and when', 'What marks it', 'A record or name to know'],
      rows: [
        ['Proibidão', 'Rio de Janeiro, early 1990s', 'Lyrics about the drug trade and the war with the police', 'Played at bailes, not on radio'],
        ['Funk melody', 'Rio de Janeiro', 'Electro rhythms and romantic lyrics, led by women', 'Anitta, Perlla'],
        ['Funk ostentação', 'São Paulo, 2008', 'Cars, motorcycles, drink and leaving the favela', 'KondZilla, MC Lan'],
        ['Brega funk', 'Recife, early 2010s', 'MIDI pianos, caixa snares, 160 to 180 BPM in half time', 'Pabllo Vittar, "Parabéns"'],
        ['Rasteirinha', 'About 96 BPM', 'Atabaques, tambourines and beatboxing', 'MC WM, "Fuleragem"'],
        ['Rave funk', 'Created by DJ GBR, 2016', 'Funk mixed with electronic music', 'Kevinho, "É Rave Que Fala Né"'],
        ['150 BPM', 'Rio de Janeiro, 2018', 'Faster tempo, taken up by carnival blocos in 2019', 'Kevin o Chris, "Ela É do Tipo"'],
        ['Mandelão', 'São Paulo, late 2010s', 'Repetitive lyrics, raw production, blown-out bass', 'Bibi Babydoll, "Automotivo Bibi Fogosa"'],
        ['Bruxaria', 'São Paulo South Zone, 2020s', 'Aggressive, horror atmosphere', 'DJ K, DJ Arana, DJ Blakes']
      ]
    }
  },
  sources: [
    ['https://en.wikipedia.org/wiki/Funk_carioca', 'Wikipedia: Funk carioca'],
    ['https://www.thefader.com/2023/08/31/baile-funk-introduction-primer-dj-k-badsista-d-silvestre-dj-k-dj-ramemes-mc-lan', "The FADER: An introduction to baile funk's abrasive, addictive new wave, Nadine Smith, 2023"],
    ['https://daily.bandcamp.com/lists/brazilian-funk-list', 'Bandcamp Daily: The Endlessly Evolving World of Brazilian Funk, Filipe Costa, 2024'],
    ['https://www.theguardian.com/music/2023/nov/14/if-it-doesnt-smell-like-funk-somethings-wrong-with-your-recipe-brazilian-baile-funk-goes-global-again', "The Guardian: Brazilian baile funk goes global, again, Felipe Maia, 2023"]
  ]
});
