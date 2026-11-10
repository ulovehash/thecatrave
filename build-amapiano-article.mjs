// Build amapiano-guide.html from amapiano-guide-draft.md (shared builder: build-genre-guide.mjs).
//
// Asked for by the owner on 2026-11-09 ("next 3"), first of the amapiano,
// San Francisco clubs and Montreal clubs guides. Research: Wikipedia
// (Amapiano and the song and artist pages), Red Bull (2024), the Evening
// Standard (2024) and Mixmag (2024). Volumes are in keywords/amapiano.json:
// Keyword Planner ranges and the Ahrefs US points for three terms, labelled
// per term and never merged.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import {buildGenreGuide} from './build-genre-guide.mjs';

buildGenreGuide({
  slug: 'amapiano-guide',
  imgDir: 'amapiano',
  title: 'What Is Amapiano? South African House Music, Songs, Artists',
  description: 'What amapiano is: the log drum and the pianos, where it came from, how it spread, the dance, the styles, the best amapiano songs and the artists.',
  datePublished: '2026-11-09',
  dateModified: '2026-11-09',
  dateLabel: '9 November 2026',
  kicker: 'Amapiano',
  heroTitle: 'What is amapiano? South African house music, the songs and the artists',
  deck: 'Pianos, a rolling log drum and a tempo set so nobody has to sweat: the township sound that went from WhatsApp groups and minibus taxis to the Billboard Hot 100.',
  answerLabel: 'What is amapiano',
  introTitle: 'The pianos.',
  faqTitle: 'Amapiano FAQ.',
  ogImage: 'img/og/amapiano.jpg',
  bodyClass: 'amapiano-page',
  sections: [
    {id: 'sound', heading: 'What amapiano sounds like'},
    {id: 'meaning', heading: 'What amapiano means'},
    {id: 'origins', heading: 'Where amapiano came from'},
    {id: 'spread', heading: 'How amapiano spread'},
    {id: 'abroad', heading: 'Amapiano in London and abroad'},
    {id: 'dance', heading: 'The amapiano dance'},
    {id: 'styles', heading: 'Amapiano styles'},
    {id: 'best-songs', heading: 'The best amapiano songs'},
    {id: 'artists', heading: 'Amapiano artists'},
    {id: 'house', heading: 'Amapiano or house music'},
    {id: 'where-to-start', heading: 'Where to start with amapiano'}
  ],
  images: {
    'minibus taxi': ['minibus-taxi-maboneng-2017', 1200, 846,
      'A white minibus taxi parked on a street in Maboneng, Johannesburg',
      'A minibus taxi in Maboneng, Johannesburg, December 2017. Photograph: Shade Schutze Photography, CC BY-SA 4.0.'],
    'Tyla': ['tyla-montreux-2026', 1200, 800,
      'Tyla performing on stage at the Montreux Jazz Festival',
      'Tyla at the Montreux Jazz Festival, 2026. Photograph: Janeirohy, CC BY-SA 4.0.'],
    'Focalistic': ['focalistic-2020', 840, 1080,
      'Focalistic, photographed in 2020',
      'Focalistic in 2020. Photograph: Michael\'s World, CC BY 3.0.'],
    'Kamo Mphela': ['kamo-mphela-2021', 681, 450,
      'Kamo Mphela at the South African Music Awards, 2021',
      'Kamo Mphela at the South African Music Awards, 2021. Photograph: Alison DiLaurentis 1995, CC BY 4.0.'],
    'Sha Sha': ['sha-sha-2020', 965, 999,
      'Sha Sha, photographed in 2020',
      'Sha Sha in 2020. Photograph: Plus TV Africa, CC BY 3.0.'],
    'Uncle Waffles': ['uncle-waffles-2022', 736, 920,
      'Uncle Waffles, photographed in 2022',
      'Uncle Waffles in April 2022. Photograph: Musiclaborotry, CC BY-SA 4.0.']
  },
  videos: {
    'Down The Drain': ['U2jOEbs0uXM', 'Amapiano', 'Njelic and Thabza Tee', 'Down The Drain',
      'The log drum arrives after two minutes. From Njelic\'s channel.'],
    'Iskhathi': ['HK4LBA7zhlg', 'Amapiano', 'Kwiish SA', 'Iskhathi (Gong Gong)',
      'One of the records Mixmag names behind "Getting Late", from Africori\'s channel.'],
    'Love You Tonight': ['23A5UkCRCWg', 'Amapiano', 'MFR Souls featuring DJ Maphorisa, Sha Sha and Kabza De Small', 'Love You Tonight',
      'A Platinum record for the Katlehong duo, from MFR Souls\' channel.'],
    'Champion Sound': ['i-J0Fdze42M', 'Amapiano', 'Davido and Focalistic', 'Champion Sound',
      'The Nigeria and Pretoria collaboration, from Davido\'s channel.'],
    'DBN Gogo London': ['isYm52A9WFQ', 'Amapiano', 'DBN Gogo', 'Boiler Room SYSTEM: Amapiano London',
      'DBN Gogo at Boiler Room\'s amapiano night in London.'],
    'Getting Late': ['v6Tct3AAre0', 'Amapiano', 'Tyla featuring Kooldrink', 'Getting Late',
      'For many Europeans the first amapiano record, from Tyla\'s channel.'],
    'Water': ['XoiOOiuH8iI', 'Amapiano', 'Tyla', 'Water, 2023',
      'The record that put amapiano on the Billboard Hot 100, from Tyla\'s channel.'],
    'Overdue': ['uUNdhnMEZs0', 'Popiano', 'Tyla featuring DJ Lag and Kooldrink', 'Overdue, 2021',
      'Wikipedia\'s example of popiano, from Tyla\'s channel.'],
    'Soundcheck': ['Yuw9nuXDFIo', 'Amapiano', 'Vigro Deep', 'Soundcheck',
      'From one of amapiano\'s pioneering DJs.'],
    'Khuza Gogo': ['V0bL57BDMlo', 'Amapiano', 'DBN Gogo', 'Khuza Gogo',
      'A Platinum record, from DBN Gogo\'s channel.'],
    'Tanzania': ['WvxADzZMkEI', 'Amapiano', 'Uncle Waffles', 'Tanzania',
      'Uncle Waffles\' debut single, seven times Platinum, from her channel.'],
    'Adiwele': ['kjgzYp1Cm4Y', 'Amapiano', 'Young Stunna', 'Adiwele',
      'One of Young Stunna\'s best-known songs, from his channel.'],
    'Funa': ['TMTZhgdmzaM', 'Private school piano', 'Kelvin Momo featuring TBO and JaySax', 'Funa',
      'From the producer credited with private school piano, from Africori\'s channel.'],
    'Scorpion Kings Boiler Room': ['kDU9EsWkdl8', 'Amapiano', 'Scorpion Kings', 'Boiler Room x Ballantine\'s True Music 10: Johannesburg',
      'Kabza De Small and DJ Maphorisa at Boiler Room in Johannesburg.'],
    'Kelvin Momo Boiler Room': ['IlhMotZOKmo', 'Private school piano', 'Kelvin Momo', 'Boiler Room x Ballantine\'s True Music Studios: Johannesburg',
      'Kelvin Momo at Boiler Room in Johannesburg.'],
    'Scorpion Kings Piano People': ['snJYwbJuftY', 'Amapiano', 'Scorpion Kings', 'Live at Piano People, highlights',
      'Kabza De Small and DJ Maphorisa at a Piano People party, from Piano People\'s channel.']
  },
  tables: {
    'styles': {
      label: 'Amapiano styles',
      headers: ['Style', 'Where', 'What marks it', 'A record or name to know'],
      rows: [
        ['Private school piano', 'South Africa', 'Soulful: shakers, mellow log drums, progressive chords, live guitar, sax, violin and trumpet', 'Kelvin Momo'],
        ['Quantum sound', 'South Africa', 'Re-edits rooted in the taxi kick of gqom', 'RealShaunMusiq, Sizwe Nineteen, Nandipha808'],
        ['New age bacardi', 'Pretoria, about 2021', 'Amapiano merged with Pretoria\'s bacardi house', 'Mellow & Sleazy, "Trust Fund"'],
        ['Popiano', 'South Africa', 'Pop songwriting over amapiano', 'Kooldrink, DJ Lag and Tyla, "Overdue"'],
        ['Bique', 'Mozambique', 'Amapiano made in Mozambique', 'FOI and Jay Music, "Bique (Deep Groove)"'],
        ['Afropiano', 'Nigeria', 'Afrobeats artists on amapiano rhythms', 'Clemzy, L.A.X.'],
        ['Bongopiano', 'Tanzania', 'Bongo flava stars on amapiano', 'Diamond Platnumz, Marioo, Harmonize'],
        ['Ojapiano', 'Nigeria', 'Named after Kcee\'s record', 'Kcee']
      ]
    }
  },
  sources: [
    ['https://en.wikipedia.org/wiki/Amapiano', 'Wikipedia: Amapiano'],
    ['https://www.redbull.com/za-en/amapiano-history', "Red Bull: Amapiano history, South Africa's unique music genre, Themba Kriger, 2024"],
    ['https://ca.news.yahoo.com/amapiano-guide-music-sensation-sweeping-165638898.html', 'Evening Standard (via Yahoo): Amapiano, our guide to the music sensation sweeping the world, El Hunt, 2024'],
    ['https://mixmag.net/feature/amapiano-second-wave-south-africa-apartheid-kwaito-evolution-series', "Mixmag: Amapiano's second wave, how kwaito opened the door for amapiano's evolutions, Jake Colvin, 2024"]
  ]
});
