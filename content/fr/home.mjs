// The French home page: every hand-written English string in index.html,
// paired with its French. build-home.mjs swaps them whole and fails if one is
// missing or if any English text is left, so an edit to the English home page
// has to be made here too. Strings are written as they stand in the HTML
// source (&amp; for &). A plain space before : ? !, as on the French guides.
//
// The component regions (header, Now playing, the Selector promo, the article
// grid, the footer) are not here: they take their words from i18n.mjs.

export const strings = [
  // head
  ['Breakbeat, Bass &amp; Rave DJ, Producer and Selector', 'DJ breakbeat, bass et rave, producteur et sélecteur'],
  ['Listen to handmade breakbeat, bass and rave music, explore genre-fluid DJ mixes, and read in-depth guides to jungle, UK garage and underground club culture.',
   'Musique breakbeat, bass et rave faite main, DJ mixes sans frontières de genre et guides de fond sur la jungle, le UK garage et la culture club underground.'],
  ['Handmade breakbeat, bass and rave music, genre-fluid DJ mixes, and articles on jungle, UK garage and underground club culture.',
   'Musique breakbeat, bass et rave faite main, DJ mixes sans frontières de genre, et articles sur la jungle, le UK garage et la culture club underground.'],
  ['Handmade breakbeat, bass and rave music, genre-fluid DJ mixes, and articles on UK electronic music and club culture.',
   'Musique breakbeat, bass et rave faite main, DJ mixes sans frontières de genre, et articles sur la musique électronique britannique et la culture club.'],
  ['thecatrave: breakbeat, bass and rave', 'thecatrave : breakbeat, bass et rave'],
  ['Handmade breakbeat, bass and rave music, DJ mixes and articles on underground electronic music and club culture.',
   'Musique breakbeat, bass et rave faite main, DJ mixes et articles sur la musique électronique underground et la culture club.'],

  // hero
  ['I rave, I produce, I DJ.', 'Je rave, je produis, je mixe.'],
  ['thecatrave sitting with a small keyboard in warm orange light', 'thecatrave assis avec un petit clavier dans une lumière orange chaude'],

  // 01 Bandcamp
  ['Support me on Bandcamp.', 'Soutenez-moi sur Bandcamp.'],
  ['Streaming is useful for discovery. If you want to support my work directly, buying a track on Bandcamp makes the biggest difference.',
   'Le streaming sert à découvrir. Si vous voulez soutenir directement mon travail, acheter un morceau sur Bandcamp est ce qui compte le plus.'],
  ['Visit my Bandcamp ↗', 'Voir mon Bandcamp ↗'],
  ['Music by thecatrave on Bandcamp', 'Musique de thecatrave sur Bandcamp'],
  ['Mylène Farmer - Dégénération remix by thecatrave on Bandcamp', 'Mylène Farmer - Dégénération, remix de thecatrave sur Bandcamp'],
  ['Mylène Farmer - Dégénération remix by thecatrave', 'Mylène Farmer - Dégénération, remix de thecatrave'],
  ['You So Ghetto remix by thecatrave on Bandcamp', 'You So Ghetto, remix de thecatrave sur Bandcamp'],
  ['You So Ghetto remix by thecatrave', 'You So Ghetto, remix de thecatrave'],
  ['Protect Ya Breaks by thecatrave on Bandcamp', 'Protect Ya Breaks de thecatrave sur Bandcamp'],
  ['Protect Ya Breaks by thecatrave', 'Protect Ya Breaks de thecatrave'],
  ['look by thecatrave on Bandcamp', 'look de thecatrave sur Bandcamp'],
  ['look by thecatrave', 'look de thecatrave'],
  ['Berlin Race 1909 by thecatrave on Bandcamp', 'Berlin Race 1909 de thecatrave sur Bandcamp'],
  ['Berlin Race 1909 by thecatrave', 'Berlin Race 1909 de thecatrave'],
  ['60 hours of mistakes by thecatrave on Bandcamp', '60 hours of mistakes de thecatrave sur Bandcamp'],
  ['60 hours of mistakes by thecatrave', '60 hours of mistakes de thecatrave'],
  ['no genre no problem by thecatrave on Bandcamp', 'no genre no problem de thecatrave sur Bandcamp'],
  ['no genre no problem by thecatrave', 'no genre no problem de thecatrave'],

  // 02 mixes
  ['My DJ mixes.', 'Mes DJ mixes.'],
  ['Club music, experimental electronic, breaks, grime and techno connected into long-form sets without genre borders.',
   'Musique de club, électronique expérimentale, breaks, grime et techno, enchaînés en longs sets sans frontières de genre.'],
  ['I spent about four months choosing and rearranging these 30 tracks until the mix felt right.',
   'J’ai passé environ quatre mois à choisir et à réordonner ces 30 morceaux jusqu’à ce que le mix sonne juste.'],
  ['I Like to Smoke in Silence After Raves on SoundCloud', 'I Like to Smoke in Silence After Raves sur SoundCloud'],
  ['A loud and restless mix about going out again even when you know better.',
   'Un mix bruyant et agité sur l’envie de ressortir, même quand on sait qu’on ne devrait pas.'],
  ['I Lost So Many Weekends Raving and I Wanna Lose Some More on SoundCloud', 'I Lost So Many Weekends Raving and I Wanna Lose Some More sur SoundCloud'],

  // 03 original music
  ['Original tracks and other experiments.', 'Morceaux originaux et autres expériences.'],
  ['Breakbeat, bass, garage, jungle and experimental electronic tracks, built from scratch in a DAW. I do not use generative AI in music.',
   'Des morceaux breakbeat, bass, garage, jungle et d’électronique expérimentale, construits de zéro dans un logiciel de production. Je n’utilise pas d’IA générative dans ma musique.'],
  ['Original electronic music by thecatrave', 'Musique électronique originale de thecatrave'],
  ['Breakbeat, garage, jungle, techno and melancholic electronic music.', 'Breakbeat, garage, jungle, techno et musique électronique mélancolique.'],
  ['thecatrave tracks on Spotify', 'Les morceaux de thecatrave sur Spotify'],
  ['Breakbeat and electronic music archive', 'Archives breakbeat et musique électronique'],
  ['Sketches and original productions from my SoundCloud.', 'Esquisses et productions originales de mon SoundCloud.'],
  ['thecatrave original tracks on SoundCloud', 'Les morceaux originaux de thecatrave sur SoundCloud'],

  // 04 playlists
  ['Records and playlists I keep close.', 'Les disques et les playlists que je garde près de moi.'],
  ['Breaks, UK garage, jungle, ambient and leftfield club music I return to and build from.',
   'Breaks, UK garage, jungle, ambient et musique de club leftfield, vers lesquels je reviens toujours et sur lesquels je construis.'],
  ['Favourite electronic music playlist by thecatrave', 'Playlist de musique électronique préférée de thecatrave'],
  ['Second favourite electronic music playlist by thecatrave', 'Deuxième playlist de musique électronique préférée de thecatrave'],

  // 06 about
  ['About thecatrave.', 'À propos de thecatrave.'],
  ['My taste comes from Eastern European melancholy, German electronic music and the restless energy of UK bass, from jungle and drum and bass to garage and hardcore. I started with Eurodance as a kid, then got obsessed with The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London and Meat Beat Manifesto, alongside West Coast rap. Jungle and drum and bass led me to Goldie, LTJ Bukem, Photek, Source Direct and 4hero, while Sade, Seal and Sting taught me that melody and atmosphere matter as much as drums.',
   'Mes goûts viennent de la mélancolie d’Europe de l’Est, de la musique électronique allemande et de l’énergie inquiète de la bass music britannique, de la jungle et de la drum and bass au garage et au hardcore. J’ai commencé enfant avec l’eurodance, puis je suis devenu obsédé par The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London et Meat Beat Manifesto, en même temps que par le rap de la côte Ouest. La jungle et la drum and bass m’ont mené à Goldie, LTJ Bukem, Photek, Source Direct et 4hero, tandis que Sade, Seal et Sting m’ont appris que la mélodie et l’atmosphère comptent autant que les batteries.'],
  ['My tracks and DJ sets move through breakbeat, bass, club music, experimental electronic, breaks and rave, with elements of grime and techno. I do not stay inside one genre, and I am always looking for connections between rhythms, scenes and eras.',
   'Mes morceaux et mes DJ sets traversent le breakbeat, la bass, la musique de club, l’électronique expérimentale, les breaks et la rave, avec des touches de grime et de techno. Je ne reste pas dans un seul genre et je cherche toujours les liens entre des rythmes, des scènes et des époques différentes.'],
  ['I make music for pre-parties, clubs, raves and afters, but also for walking alone or sitting on a balcony with a cigarette and thinking about life.',
   'Je fais de la musique pour les before, les clubs, les raves et les afters, mais aussi pour marcher seul ou rester sur un balcon avec une cigarette à penser à la vie.']
];

// Titles of the owner's own mixes: the same in every language.
export const keep = [
  'I Like to Smoke in Silence After Raves',
  'I Lost So Many Weekends Raving and I Wanna Lose Some More'
];
