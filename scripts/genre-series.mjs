// Genres for recurring shows, by the name the channel puts in front of the
// title: "Love Injection - <guest> @TheLotRadio", "yoyaku instore session : X".
//
// This exists because 603 show names cover 7,618 otherwise untagged sets, so a
// single judgement here is worth thirteen sets on average, and because a show
// is a far better genre signal than a guest's name. Kiosk Radio's Amen break
// series is jungle whoever is playing it.
//
// Only add a show whose music you actually know. An empty entry is fine and
// honest; a guessed one quietly mislabels dozens of sets at once, and someone
// filtering to jungle gets house.
//
// Keys are lowercase and matched against the title's prefix, up to the first
// " - ", " w/ ", " invites ", " with ", " : " or " presents ".
export const SERIES = {
  // The Lot Radio, New York
  'love injection': ['disco', 'house'],              // the NYC disco zine and party
  'darker than wax fm': ['broken beat', 'jazz'],     // Singapore collective, jazz-leaning club
  'moods & grooves': ['deep house'],                 // Norm Talley's Detroit house label

  // Kiosk Radio, Brussels
  'the amen break series': ['jungle', 'drum and bass'],
  'the soapy amen break episode': ['jungle', 'drum and bass'],

  // Yoyaku, Paris: a house and techno record store
  'yoyaku instore session': ['house', 'techno'],

  // channels that write the genre straight into the prefix
  'house': ['house'],
  'techno': ['techno'],
  'electronic': [],                                  // too broad to be a genre here

  // shows whose music is a matter of record, not a guess
  // its own episode blurbs say "italo, trance, house": the name suggested EBM
  // and darkwave, which is why guessing from a party's name is not allowed here
  'synthicide': ['italo disco', 'trance', 'house'],
  'gay haze': ['house', 'electro', 'trance'],        // "house, electro, progressive trance"
  'summer school radio': ['r&b'],                    // its blurbs describe r&b guests
  'disco tehran': ['disco', 'funk'],                 // NYC party built on Iranian disco
  'rebel up': ['afrobeats', 'dub'],                  // Brussels collective, global club music
  '2mr transmission': ['italo disco', 'new wave'],   // Mike Simonetti's Brooklyn label
  'house mix': ['house'],                            // Seoul Community Radio says it plainly

  // HÖR, Berlin
  'future trance': ['trance'],
  'hardcore entertainment': ['hardcore'],
  'slammin’ house movement': ['house'],
  "slammin' house movement": ['house'],
  'hypnotic discotheque': ['disco', 'house'],
};

// Everything before the first separator, lowercased. Returns '' when the title
// has no show prefix at all.
export const seriesKey = title => {
  const m = /^(.{4,42}?)\s+(?:-|w\/|invites|with|:|presents)\s+/i.exec(title || '');
  return m ? m[1].trim().toLowerCase() : '';
};
