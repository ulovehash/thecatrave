// Shared planning links for current clubs used in city and roundup guides.
// Google Maps searches include the city so repeated club names resolve safely.
// Resident Advisor URLs are verified venue pages, never city calendars.

const city = place => ({place});

const cities = {
  amsterdam: city('Amsterdam'),
  barcelona: city('Barcelona'),
  belgrade: city('Belgrade'),
  berlin: city('Berlin'),
  bristol: city('Bristol'),
  budapest: city('Budapest'),
  ibiza: city('Ibiza'),
  lisbon: city('Lisbon'),
  london: city('London'),
  manchester: city('Manchester'),
  mexicoCity: city('Mexico City'),
  newYork: city('New York City'),
  paris: city('Paris'),
  prague: city('Prague'),
  tbilisi: city('Tbilisi'),
  tokyo: city('Tokyo'),
  vienna: city('Vienna'),
  cologne: city('Cologne'),
  wuppertal: city('Wuppertal'),
  madrid: city('Madrid'),
  florence: city('Florence'),
  riccione: city('Riccione'),
  capDAgde: city("Cap d'Agde"),
  tenerife: city('Tenerife'),
  aCoruna: city('A Coruña'),
  milan: city('Milan'),
  mykonos: city('Mykonos'),
  dubrovnik: city('Dubrovnik'),
  krakow: city('Kraków'),
  miami: city('Miami'),
  washington: city('Washington, DC'),
  losAngeles: city('Los Angeles'),
  singapore: city('Singapore'),
  phuket: city('Phuket'),
  bali: city('Bali'),
  saoPaulo: city('São Paulo'),
  camboriu: city('Balneário Camboriú'),
  valinhos: city('Valinhos'),
  itajai: city('Itajaí'),
};

const groups = {
  amsterdam: ['Shelter', 'Radion', 'Lofi', 'Garage Noord', 'Warehouse Elementenstraat', 'Melkweg', 'Paradiso', 'Gashouder'],
  barcelona: ['Razzmatazz', 'Sala Apolo (Nitsa)', 'Nitsa, Barcelona', 'Nitsa', 'Macarena Club', 'Moog'],
  belgrade: ['Drugstore', 'Klub 20/44', 'Barutana', 'Kult', 'Lift'],
  berlin: ['Tresor', 'Berghain', 'Berghain / Panorama Bar', 'KitKatClub', 'Kater', 'Kater Blau', 'Sisyphos', 'Club der Visionaere', 'OST', 'Wilde Renate'],
  bristol: ['Motion', 'Lakota', 'Thekla'],
  budapest: ['A38', 'Instant-Fogas Complex', 'Turbina', 'Toldi Klub', 'Lärm'],
  ibiza: ['Hï Ibiza', 'Hï', '[UNVRS]', 'Ushuaïa Ibiza', 'Ushuaïa', 'Ushuaia Ibiza', 'Ushuaia', 'Pacha Ibiza', 'Pacha', 'Amnesia Ibiza', 'Amnesia', 'DC-10', 'Es Paradis'],
  lisbon: ['Lux Frágil', 'Ministerium Club', 'Kremlin', 'Village Underground Lisboa'],
  london: ['fabric', 'The Cause', 'FOLD', 'The Carpet Shop', 'Dalston Superstore', 'Phonox', 'MOT', 'Drumsheds', 'Ministry of Sound', 'Heaven', 'Colour Factory', 'Ormside Projects', 'Night Tales', 'KOKO', 'XOYO', 'Brixton Jamm', 'Studio 338', 'Printworks'],
  manchester: ['The White Hotel', 'Soup', 'Eastern Bloc Records', 'The Loft', 'Hidden', 'Stage & Radio', 'The Warehouse Project'],
  mexicoCity: ['Patrick Miller', 'M.N.Roy', 'Fünk Club', 'Yu Yu Cine Club'],
  newYork: ['Nowadays', 'Basement', 'Public Records', 'Good Room', 'Elsewhere', 'Paragon', 'Signal', 'House of Yes'],
  paris: ['Rex Club', 'Badaboum', 'Essaim', 'La Station - Gare des Mines'],
  prague: ['Karlovy Lázně', 'Duplex', 'Cross Club', 'Ankali'],
  tbilisi: ['Bassiani', 'KHIDI', 'Mtkvarze', 'Left Bank', 'Café Gallery'],
  tokyo: ['WOMB', 'Contact', 'Vent', 'Circus Tokyo', 'Solfa'],
  vienna: ['Flex', 'Grelle Forelle', 'Das Werk', 'Fluc', 'SASS Music Club', 'Das Techno Cafe'],
  cologne: ['Bootshaus'],
  wuppertal: ['Open Ground'],
  madrid: ['FABRIK'],
  florence: ['Tenax'],
  riccione: ['Space Riccione'],
  capDAgde: ["Amnesia Cap d'Agde"],
  tenerife: ['Papagayo Tenerife'],
  aCoruna: ['Pelícano'],
  milan: ['Amnesia Milano'],
  mykonos: ['Cavo Paradiso'],
  dubrovnik: ['Culture Club Revelin'],
  krakow: ['Prozak 2.0'],
  miami: ['Club Space'],
  washington: ['Echostage'],
  losAngeles: ['Academy LA'],
  singapore: ['Zouk Singapore'],
  phuket: ['Illuzion Phuket'],
  bali: ['Savaya'],
  saoPaulo: ['D-Edge'],
  camboriu: ['GREENVALLEY', 'Surreal Park'],
  valinhos: ['Laroc Club'],
  itajai: ['Warung Beach Club']
};

// Only direct venue pages belong here. Never fall back to a city calendar:
// a link labelled "Upcoming events" must already be filtered to that club.
const venueEvents = {
  'Printworks': 'https://ra.co/clubs/127337',
  "[UNVRS]": "https://ra.co/clubs/245319",
  "A38": "https://ra.co/clubs/6805",
  "Academy LA": "https://ra.co/clubs/146128",
  "Amnesia": "https://ra.co/clubs/764",
  "Amnesia Cap d'Agde": "https://ra.co/clubs/2242",
  "Amnesia Ibiza": "https://ra.co/clubs/764",
  "Amnesia Milano": "https://ra.co/clubs/5353",
  "Ankali": "https://ra.co/clubs/184597",
  "Badaboum": "https://ra.co/clubs/84446",
  "Barutana": "https://ra.co/clubs/2101",
  "Basement": "https://ra.co/clubs/165976",
  "Bassiani": "https://ra.co/clubs/109137",
  "Berghain": "https://ra.co/clubs/5031",
  "Berghain / Panorama Bar": "https://ra.co/clubs/5031",
  "Bootshaus": "https://ra.co/clubs/11085",
  "Brixton Jamm": "https://ra.co/clubs/1557",
  "Café Gallery": "https://ra.co/clubs/56971",
  "Cavo Paradiso": "https://ra.co/clubs/1624",
  "Circus Tokyo": "https://ra.co/clubs/108878",
  "Club der Visionaere": "https://ra.co/clubs/6949",
  "Club Space": "https://ra.co/clubs/831",
  "Colour Factory": "https://ra.co/clubs/185559",
  "Contact": "https://ra.co/clubs/115537",
  "Cross Club": "https://ra.co/clubs/13354",
  "Culture Club Revelin": "https://ra.co/clubs/39550",
  "D-Edge": "https://ra.co/clubs/4973",
  "Dalston Superstore": "https://ra.co/clubs/19082",
  "Das Techno Cafe": "https://ra.co/clubs/153772",
  "Das Werk": "https://ra.co/clubs/75216",
  "DC-10": "https://ra.co/clubs/1273",
  "Drugstore": "https://ra.co/clubs/92340",
  "Drumsheds": "https://ra.co/clubs/218103",
  "Duplex": "https://ra.co/clubs/117210",
  "Eastern Bloc Records": "https://ra.co/clubs/61121",
  "Echostage": "https://ra.co/clubs/79058",
  "Elsewhere": "https://ra.co/clubs/139960",
  "Es Paradis": "https://ra.co/clubs/2059",
  "Essaim": "https://ra.co/clubs/248763",
  "fabric": "https://ra.co/clubs/237",
  "FABRIK": "https://ra.co/clubs/1963",
  "Flex": "https://ra.co/clubs/5207",
  "Fluc": "https://ra.co/clubs/5720",
  "FOLD": "https://ra.co/clubs/155399",
  "Fünk Club": "https://ra.co/clubs/176300",
  "Garage Noord": "https://ra.co/clubs/137474",
  "Gashouder": "https://ra.co/clubs/187930",
  "Good Room": "https://ra.co/clubs/97606",
  "GREENVALLEY": "https://ra.co/clubs/8229",
  "Grelle Forelle": "https://ra.co/clubs/55135",
  "Heaven": "https://ra.co/clubs/274",
  "Hï": "https://ra.co/clubs/130160",
  "Hï Ibiza": "https://ra.co/clubs/130160",
  "Hidden": "https://ra.co/clubs/81697",
  "House of Yes": "https://ra.co/clubs/21488",
  "Illuzion Phuket": "https://ra.co/clubs/162517",
  "Instant-Fogas Complex": "https://ra.co/clubs/141350",
  "Kater": "https://ra.co/clubs/99161",
  "Kater Blau": "https://ra.co/clubs/99161",
  "KHIDI": "https://ra.co/clubs/119878",
  "KitKatClub": "https://ra.co/clubs/10546",
  "Klub 20/44": "https://ra.co/clubs/26871",
  "KOKO": "https://ra.co/clubs/2038",
  "Kremlin": "https://ra.co/clubs/42800",
  "Kult": "https://ra.co/clubs/207414",
  "La Station - Gare des Mines": "https://ra.co/clubs/119672",
  "Lakota": "https://ra.co/clubs/11500",
  "Lärm": "https://ra.co/clubs/90768",
  "Laroc Club": "https://ra.co/clubs/109819",
  "Left Bank": "https://ra.co/clubs/185732",
  "Lift": "https://ra.co/clubs/281304",
  "Lofi": "https://ra.co/clubs/168878",
  "Lux Frágil": "https://ra.co/clubs/2369",
  "M.N.Roy": "https://ra.co/clubs/117204",
  "Macarena Club": "https://ra.co/clubs/3818",
  "Melkweg": "https://ra.co/clubs/2693",
  "Ministerium Club": "https://ra.co/clubs/72396",
  "Ministry of Sound": "https://ra.co/clubs/725",
  "Moog": "https://ra.co/clubs/2253",
  "MOT": "https://ra.co/clubs/156290",
  "Motion": "https://ra.co/clubs/7129",
  "Mtkvarze": "https://ra.co/clubs/78787",
  "Night Tales": "https://ra.co/clubs/155586",
  "Nitsa": "https://ra.co/clubs/2072",
  "Nitsa, Barcelona": "https://ra.co/clubs/2072",
  "Nowadays": "https://ra.co/clubs/105873",
  "Open Ground": "https://ra.co/clubs/226330",
  "Ormside Projects": "https://ra.co/clubs/108196",
  "OST": "https://ra.co/clubs/141987",
  "Pacha": "https://ra.co/clubs/2201",
  "Pacha Ibiza": "https://ra.co/clubs/2201",
  "Papagayo Tenerife": "https://ra.co/clubs/124801",
  "Paradiso": "https://ra.co/clubs/2695",
  "Paragon": "https://ra.co/clubs/195815",
  "Pelícano": "https://ra.co/clubs/128483",
  "Phonox": "https://ra.co/clubs/106730",
  "Prozak 2.0": "https://ra.co/clubs/76369",
  "Public Records": "https://ra.co/clubs/164270",
  "Radion": "https://ra.co/clubs/91202",
  "Razzmatazz": "https://ra.co/clubs/911",
  "Rex Club": "https://ra.co/clubs/1672",
  "Sala Apolo (Nitsa)": "https://ra.co/clubs/2072",
  "SASS Music Club": "https://ra.co/clubs/8140",
  "Savaya": "https://ra.co/clubs/186380",
  "Shelter": "https://ra.co/clubs/124413",
  "Signal": "https://ra.co/clubs/256148",
  "Sisyphos": "https://ra.co/clubs/17118",
  "Solfa": "https://ra.co/clubs/12469",
  "Soup": "https://ra.co/clubs/14042",
  "Space Riccione": "https://ra.co/clubs/254766",
  "Stage & Radio": "https://ra.co/clubs/123363",
  "Studio 338": "https://ra.co/clubs/74592",
  "Surreal Park": "https://ra.co/clubs/191698",
  "Tenax": "https://ra.co/clubs/2965",
  "The Carpet Shop": "https://ra.co/clubs/191975",
  "The Cause": "https://ra.co/clubs/198121",
  "The Loft": "https://ra.co/clubs/190058",
  "The Warehouse Project": "https://ra.co/clubs/104207",
  "The White Hotel": "https://ra.co/clubs/112509",
  "Thekla": "https://ra.co/clubs/2794",
  "Toldi Klub": "https://ra.co/clubs/74975",
  "Tresor": "https://ra.co/clubs/5494",
  "Turbina": "https://ra.co/clubs/190293",
  "Ushuaia": "https://ra.co/clubs/21544",
  "Ushuaïa": "https://ra.co/clubs/21544",
  "Ushuaia Ibiza": "https://ra.co/clubs/21544",
  "Ushuaïa Ibiza": "https://ra.co/clubs/21544",
  "Vent": "https://ra.co/clubs/122892",
  "Village Underground Lisboa": "https://ra.co/clubs/96710",
  "Warehouse Elementenstraat": "https://ra.co/clubs/69321",
  "Warung Beach Club": "https://ra.co/clubs/3232",
  "Wilde Renate": "https://ra.co/clubs/8556",
  "WOMB": "https://ra.co/clubs/1661",
  "XOYO": "https://ra.co/clubs/33592",
  "Yu Yu Cine Club": "https://ra.co/clubs/273862",
  "Zouk Singapore": "https://ra.co/clubs/136660"
};

const directory = new Map();
for (const [cityKey, names] of Object.entries(groups)) {
  for (const name of names) directory.set(name.toLocaleLowerCase('en'), {
    ...cities[cityKey],
    venue: name,
    eventsUrl: venueEvents[name] || ''
  });
}

const directoryNamesByLength = [...directory.keys()].sort((a, b) => b.length - a.length);

export const clubGuideChecked = '2026-10-06';

export function clubGuideLinksFor(name) {
  const clean = String(name).replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .trim();
  const exact = clean.toLocaleLowerCase('en');
  const withoutLocation = clean.split(',')[0].trim().toLocaleLowerCase('en');
  let context = directory.get(exact) || directory.get(withoutLocation);
  if (!context) {
    const matchedName = directoryNamesByLength.find(candidate => {
      const start = exact.indexOf(candidate);
      if (start !== 0) return false;
      const after = exact[start + candidate.length];
      return !after || !/[\p{L}\p{N}]/u.test(after);
    });
    context = matchedName ? directory.get(matchedName) : null;
  }
  if (!context) return null;
  return {
    ...context,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${context.venue}, ${context.place}`)}`
  };
}

// Only for explicit club-list cells, never arbitrary editorial paragraphs.
export function clubGuideVenuesIn(value) {
  const text = String(value).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').toLocaleLowerCase('en');
  const matches = [];
  const occupied = [];
  for (const name of directoryNamesByLength) {
    let start = text.indexOf(name);
    while (start >= 0) {
      const end = start + name.length;
      if (!/[\p{L}\p{N}]/u.test(text[start - 1] || '') && !/[\p{L}\p{N}]/u.test(text[end] || '') && !occupied.some(([a, b]) => start < b && end > a)) {
        matches.push({start, venue: clubGuideLinksFor(name)});
        occupied.push([start, end]);
      }
      start = text.indexOf(name, end);
    }
  }
  return matches.sort((a, b) => a.start - b.start).map(item => item.venue);
}
