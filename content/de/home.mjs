// The German home page: every hand-written English string in index.html,
// paired with its German. build-home.mjs swaps them whole and fails if one is
// missing or if any English text is left, so an edit to the English home page
// has to be made here too. Strings are written as they stand in the HTML
// source (&amp; for &).
//
// The component regions (header, Now playing, the Selector promo, the article
// grid, the footer) are not here: they take their words from i18n.mjs.

export const strings = [
  // head
  ['Breakbeat, Bass &amp; Rave DJ, Producer and Selector', 'Breakbeat-, Bass- &amp; Rave-DJ, Produzent und Selector'],
  ['Listen to handmade breakbeat, bass and rave music, explore genre-fluid DJ mixes, and read in-depth guides to jungle, UK garage and underground club culture.',
   'Handgemachte Breakbeat-, Bass- und Rave-Musik, DJ-Mixe über Genregrenzen hinweg und ausführliche Guides zu Jungle, UK Garage und Underground-Clubkultur.'],
  ['Handmade breakbeat, bass and rave music, genre-fluid DJ mixes, and articles on jungle, UK garage and underground club culture.',
   'Handgemachte Breakbeat-, Bass- und Rave-Musik, DJ-Mixe über Genregrenzen hinweg und Artikel zu Jungle, UK Garage und Underground-Clubkultur.'],
  ['Handmade breakbeat, bass and rave music, genre-fluid DJ mixes, and articles on UK electronic music and club culture.',
   'Handgemachte Breakbeat-, Bass- und Rave-Musik, DJ-Mixe über Genregrenzen hinweg und Artikel zu britischer elektronischer Musik und Clubkultur.'],
  ['thecatrave: breakbeat, bass and rave', 'thecatrave: Breakbeat, Bass und Rave'],
  ['Handmade breakbeat, bass and rave music, DJ mixes and articles on underground electronic music and club culture.',
   'Handgemachte Breakbeat-, Bass- und Rave-Musik, DJ-Mixe und Artikel über elektronische Underground-Musik und Clubkultur.'],

  // hero
  ['[Breakbeat / bass / rave / no AI]', '[Breakbeat / Bass / Rave / keine KI]'],
  ['Handmade breakbeat, bass and rave music.', 'Handgemachte Breakbeat-, Bass- und Rave-Musik.'],
  ['I was born in Eastern Europe, later lived in Berlin and Barcelona, and raved around the world. All of that shaped my taste: Eastern European melancholy, German electronic music, the restless energy of UK bass music from jungle and drum and bass to garage and hardcore, and a constant urge to dig for new genres and sounds from different places.',
   'Ich bin in Osteuropa geboren, habe später in Berlin und Barcelona gelebt und auf der ganzen Welt geravt. All das hat meinen Geschmack geprägt: osteuropäische Melancholie, deutsche elektronische Musik, die rastlose Energie britischer Bass Music von Jungle und Drum and Bass bis Garage und Hardcore, und der ständige Drang, nach neuen Genres und Sounds aus anderen Ecken der Welt zu graben.'],
  ['I started with Eurodance as a kid, then got obsessed with The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London and Meat Beat Manifesto, alongside West Coast rap. Jungle and drum and bass led me to Goldie, LTJ Bukem, Photek, Source Direct and 4hero. Sade, Seal and Sting mattered just as much, so melody and atmosphere have always been as important to me as drums.',
   'Als Kind fing ich mit Eurodance an, dann war ich besessen von The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London und Meat Beat Manifesto, dazu West-Coast-Rap. Jungle und Drum and Bass führten mich zu Goldie, LTJ Bukem, Photek, Source Direct und 4hero. Sade, Seal und Sting waren genauso wichtig, deshalb zählen Melodie und Atmosphäre für mich immer so viel wie die Drums.'],
  ['My tracks and DJ sets move through breakbeat, bass, club music, experimental electronic, breaks and rave, with elements of grime and techno. I do not stay inside one genre. I look for connections between different rhythms, scenes and eras.',
   'Meine Tracks und DJ-Sets bewegen sich durch Breakbeat, Bass, Clubmusik, experimentelle Elektronik, Breaks und Rave, mit Elementen von Grime und Techno. Ich bleibe nicht in einem Genre. Ich suche die Verbindungen zwischen verschiedenen Rhythmen, Szenen und Epochen.'],
  ['I make music for pre-parties, clubs, raves and afters, but also for walking alone or sitting on a balcony with a cigarette and thinking about life.',
   'Ich mache Musik fürs Vorglühen, für Clubs, Raves und Afterhours, aber auch für einsame Spaziergänge oder für den Balkon, mit einer Zigarette und Gedanken über das Leben.'],
  ['Play my music', 'Meine Musik hören'],
  ['Read the journal', 'Zu den Artikeln'],
  ['thecatrave sitting with a small keyboard in warm orange light', 'thecatrave mit einem kleinen Keyboard in warmem orangem Licht'],

  // 01 Bandcamp
  ['01 / Buy on Bandcamp', '01 / Auf Bandcamp kaufen'],
  ['Support me on Bandcamp.', 'Unterstütze mich auf Bandcamp.'],
  ['Streaming is useful for discovery. If you want to support my work directly, buying a track on Bandcamp makes the biggest difference.',
   'Streaming ist gut, um Neues zu entdecken. Wenn du meine Arbeit direkt unterstützen willst, macht ein auf Bandcamp gekaufter Track den größten Unterschied.'],
  ['Visit my Bandcamp ↗', 'Zu meinem Bandcamp ↗'],
  ['Music by thecatrave on Bandcamp', 'Musik von thecatrave auf Bandcamp'],
  ['Mylène Farmer - Dégénération remix by thecatrave on Bandcamp', 'Mylène Farmer - Dégénération, Remix von thecatrave auf Bandcamp'],
  ['Mylène Farmer - Dégénération remix by thecatrave', 'Mylène Farmer - Dégénération, Remix von thecatrave'],
  ['You So Ghetto remix by thecatrave on Bandcamp', 'You So Ghetto, Remix von thecatrave auf Bandcamp'],
  ['You So Ghetto remix by thecatrave', 'You So Ghetto, Remix von thecatrave'],
  ['Protect Ya Breaks by thecatrave on Bandcamp', 'Protect Ya Breaks von thecatrave auf Bandcamp'],
  ['Protect Ya Breaks by thecatrave', 'Protect Ya Breaks von thecatrave'],
  ['look by thecatrave on Bandcamp', 'look von thecatrave auf Bandcamp'],
  ['look by thecatrave', 'look von thecatrave'],
  ['Berlin Race 1909 by thecatrave on Bandcamp', 'Berlin Race 1909 von thecatrave auf Bandcamp'],
  ['Berlin Race 1909 by thecatrave', 'Berlin Race 1909 von thecatrave'],
  ['60 hours of mistakes by thecatrave on Bandcamp', '60 hours of mistakes von thecatrave auf Bandcamp'],
  ['60 hours of mistakes by thecatrave', '60 hours of mistakes von thecatrave'],
  ['no genre no problem by thecatrave on Bandcamp', 'no genre no problem von thecatrave auf Bandcamp'],
  ['no genre no problem by thecatrave', 'no genre no problem von thecatrave'],

  // 02 mixes
  ['02 / DJ mixes', '02 / DJ-Mixe'],
  ['My DJ mixes.', 'Meine DJ-Mixe.'],
  ['Club music, experimental electronic, breaks, grime and techno connected into long-form sets without genre borders.',
   'Clubmusik, experimentelle Elektronik, Breaks, Grime und Techno, verbunden zu langen Sets ohne Genregrenzen.'],
  ['Featured mix', 'Ausgewählter Mix'],
  ['I spent about four months choosing and rearranging these 30 tracks until the mix felt right.',
   'Ungefähr vier Monate lang habe ich diese 30 Tracks ausgewählt und umgestellt, bis sich der Mix richtig anfühlte.'],
  ['I Like to Smoke in Silence After Raves on SoundCloud', 'I Like to Smoke in Silence After Raves auf SoundCloud'],
  ['DJ mix', 'DJ-Mix'],
  ['A loud and restless mix about going out again even when you know better.',
   'Ein lauter, rastloser Mix darüber, wieder auszugehen, obwohl man es besser weiß.'],
  ['I Lost So Many Weekends Raving and I Wanna Lose Some More on SoundCloud', 'I Lost So Many Weekends Raving and I Wanna Lose Some More auf SoundCloud'],

  // 03 original music
  ['03 / Original music', '03 / Eigene Musik'],
  ['Original tracks and other experiments.', 'Eigene Tracks und andere Experimente.'],
  ['Breakbeat, bass, garage, jungle and experimental electronic tracks, built from scratch in a DAW. I do not use generative AI in music.',
   'Breakbeat, Bass, Garage, Jungle und experimentelle elektronische Tracks, von Grund auf in einer DAW gebaut. Generative KI benutze ich in der Musik nicht.'],
  ['Original productions / Spotify', 'Eigene Produktionen / Spotify'],
  ['Original electronic music by thecatrave', 'Eigene elektronische Musik von thecatrave'],
  ['Breakbeat, garage, jungle, techno and melancholic electronic music.', 'Breakbeat, Garage, Jungle, Techno und melancholische elektronische Musik.'],
  ['thecatrave tracks on Spotify', 'Tracks von thecatrave auf Spotify'],
  ['Original productions / SoundCloud', 'Eigene Produktionen / SoundCloud'],
  ['Breakbeat and electronic music archive', 'Archiv: Breakbeat und elektronische Musik'],
  ['Sketches and original productions from my SoundCloud.', 'Skizzen und eigene Produktionen aus meinem SoundCloud.'],
  ['thecatrave original tracks on SoundCloud', 'Eigene Tracks von thecatrave auf SoundCloud'],

  // 04 playlists
  ['04 / Playlists', '04 / Playlists'],
  ['Records and playlists I keep close.', 'Platten und Playlists, die ich immer dabeihabe.'],
  ['Breaks, UK garage, jungle, ambient and leftfield club music I return to and build from.',
   'Breaks, UK Garage, Jungle, Ambient und Leftfield-Clubmusik, zu denen ich immer wieder zurückkehre und auf denen ich aufbaue.'],
  ['Favourite electronic music playlist by thecatrave', 'Lieblingsplaylist elektronischer Musik von thecatrave'],
  ['Second favourite electronic music playlist by thecatrave', 'Zweite Lieblingsplaylist elektronischer Musik von thecatrave']
];

// Titles of the owner's own mixes: the same in every language.
export const keep = [
  'I Like to Smoke in Silence After Raves',
  'I Lost So Many Weekends Raving and I Wanna Lose Some More'
];
