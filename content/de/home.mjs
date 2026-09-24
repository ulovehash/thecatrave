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
  ['I rave, I produce, I DJ.', 'Ich rave, ich produziere, ich lege auf.'],
  ['thecatrave sitting with a small keyboard in warm orange light', 'thecatrave mit einem kleinen Keyboard in warmem orangem Licht'],

  // 01 Bandcamp
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
  ['My DJ mixes.', 'Meine DJ-Mixe.'],
  ['Club music, experimental electronic, breaks, grime and techno connected into long-form sets without genre borders.',
   'Clubmusik, experimentelle Elektronik, Breaks, Grime und Techno, verbunden zu langen Sets ohne Genregrenzen.'],
  ['I spent about four months choosing and rearranging these 30 tracks until the mix felt right.',
   'Ungefähr vier Monate lang habe ich diese 30 Tracks ausgewählt und umgestellt, bis sich der Mix richtig anfühlte.'],
  ['I Like to Smoke in Silence After Raves on SoundCloud', 'I Like to Smoke in Silence After Raves auf SoundCloud'],
  ['A loud and restless mix about going out again even when you know better.',
   'Ein lauter, rastloser Mix darüber, wieder auszugehen, obwohl man es besser weiß.'],
  ['I Lost So Many Weekends Raving and I Wanna Lose Some More on SoundCloud', 'I Lost So Many Weekends Raving and I Wanna Lose Some More auf SoundCloud'],

  // 03 original music
  ['Original tracks and other experiments.', 'Eigene Tracks und andere Experimente.'],
  ['Breakbeat, bass, garage, jungle and experimental electronic tracks, built from scratch in a DAW. I do not use generative AI in music.',
   'Breakbeat, Bass, Garage, Jungle und experimentelle elektronische Tracks, von Grund auf in einer DAW gebaut. Generative KI benutze ich in der Musik nicht.'],
  ['Original electronic music by thecatrave', 'Eigene elektronische Musik von thecatrave'],
  ['Breakbeat, garage, jungle, techno and melancholic electronic music.', 'Breakbeat, Garage, Jungle, Techno und melancholische elektronische Musik.'],
  ['thecatrave tracks on Spotify', 'Tracks von thecatrave auf Spotify'],
  ['Breakbeat and electronic music archive', 'Archiv: Breakbeat und elektronische Musik'],
  ['Sketches and original productions from my SoundCloud.', 'Skizzen und eigene Produktionen aus meinem SoundCloud.'],
  ['thecatrave original tracks on SoundCloud', 'Eigene Tracks von thecatrave auf SoundCloud'],

  // 04 playlists
  ['Records and playlists I keep close.', 'Platten und Playlists, die ich immer dabeihabe.'],
  ['Breaks, UK garage, jungle, ambient and leftfield club music I return to and build from.',
   'Breaks, UK Garage, Jungle, Ambient und Leftfield-Clubmusik, zu denen ich immer wieder zurückkehre und auf denen ich aufbaue.'],
  ['Favourite electronic music playlist by thecatrave', 'Lieblingsplaylist elektronischer Musik von thecatrave'],
  ['Second favourite electronic music playlist by thecatrave', 'Zweite Lieblingsplaylist elektronischer Musik von thecatrave'],

  // 06 about
  ['About thecatrave.', 'Über thecatrave.'],
  ['My taste comes from Eastern European melancholy, German electronic music and the restless energy of UK bass, from jungle and drum and bass to garage and hardcore. I started with Eurodance as a kid, then got obsessed with The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London and Meat Beat Manifesto, alongside West Coast rap. Jungle and drum and bass led me to Goldie, LTJ Bukem, Photek, Source Direct and 4hero, while Sade, Seal and Sting taught me that melody and atmosphere matter as much as drums.',
   'Mein Geschmack kommt aus osteuropäischer Melancholie, deutscher elektronischer Musik und der rastlosen Energie britischer Bass Music, von Jungle und Drum and Bass bis Garage und Hardcore. Als Kind fing ich mit Eurodance an, dann war ich besessen von The Prodigy, Fatboy Slim, The Chemical Brothers, Underworld, The Future Sound of London und Meat Beat Manifesto, dazu West-Coast-Rap. Jungle und Drum and Bass führten mich zu Goldie, LTJ Bukem, Photek, Source Direct und 4hero, während Sade, Seal und Sting mir zeigten, dass Melodie und Atmosphäre genauso wichtig sind wie die Drums.'],
  ['My tracks and DJ sets move through breakbeat, bass, club music, experimental electronic, breaks and rave, with elements of grime and techno. I do not stay inside one genre, and I am always looking for connections between rhythms, scenes and eras.',
   'Meine Tracks und DJ-Sets bewegen sich durch Breakbeat, Bass, Clubmusik, experimentelle Elektronik, Breaks und Rave, mit Elementen von Grime und Techno. Ich bleibe nicht in einem Genre und suche immer nach Verbindungen zwischen Rhythmen, Szenen und Epochen.'],
  ['I make music for pre-parties, clubs, raves and afters, but also for walking alone or sitting on a balcony with a cigarette and thinking about life.',
   'Ich mache Musik fürs Vorglühen, für Clubs, Raves und Afterhours, aber auch für einsame Spaziergänge oder für den Balkon, mit einer Zigarette und Gedanken über das Leben.']
];

// Titles of the owner's own mixes: the same in every language.
export const keep = [
  'I Like to Smoke in Silence After Raves',
  'I Lost So Many Weekends Raving and I Wanna Lose Some More'
];
