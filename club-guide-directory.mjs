// Shared planning links for current clubs used in city and roundup guides.
// Google Maps searches include the city so repeated club names resolve safely.
// Resident Advisor links point to the live city calendar because individual
// venue pages are not available or maintained consistently in every market.

const city = (place, eventsUrl, transitUrl = '', transitLabel = '') => ({
  place, eventsUrl, transitUrl, transitLabel
});

const cities = {
  amsterdam: city('Amsterdam', 'https://ra.co/events/nl/amsterdam', 'https://www.gvb.nl/en', 'GVB'),
  barcelona: city('Barcelona', 'https://ra.co/events/es/barcelona', 'https://www.tmb.cat/en/home', 'TMB'),
  belgrade: city('Belgrade', 'https://ra.co/events/rs/belgrade', 'https://www.bgprevoz.rs/', 'BG Prevoz'),
  berlin: city('Berlin', 'https://ra.co/events/de/berlin', 'https://www.bvg.de/en', 'BVG'),
  bristol: city('Bristol', 'https://ra.co/events/uk/bristol', 'https://travelwest.info/', 'Travelwest'),
  budapest: city('Budapest', 'https://ra.co/events/hu/budapest', 'https://bkk.hu/en/', 'BKK'),
  ibiza: city('Ibiza', 'https://ra.co/events/es/ibiza', 'https://eivissa.tib.org/en/web/cie', 'TIB'),
  lisbon: city('Lisbon', 'https://ra.co/events/pt/lisbon', 'https://www.metrolisboa.pt/en/', 'Metro Lisboa'),
  london: city('London', 'https://ra.co/events/uk/london', 'https://tfl.gov.uk/plan-a-journey/', 'TfL'),
  manchester: city('Manchester', 'https://ra.co/events/uk/manchester', 'https://tfgm.com/plan-a-journey', 'TfGM'),
  mexicoCity: city('Mexico City', 'https://ra.co/events/mx/mexicocity', 'https://www.metro.cdmx.gob.mx/', 'Metro CDMX'),
  newYork: city('New York City', 'https://ra.co/events/us/newyorkcity', 'https://new.mta.info/', 'MTA'),
  paris: city('Paris', 'https://ra.co/events/fr/paris', 'https://www.iledefrance-mobilites.fr/en', 'Île-de-France Mobilités'),
  prague: city('Prague', 'https://ra.co/events/cz/prague', 'https://pid.cz/en/', 'PID'),
  tbilisi: city('Tbilisi', 'https://ra.co/events/ge/tbilisi', 'https://ttc.com.ge/en', 'TTC'),
  tokyo: city('Tokyo', 'https://ra.co/events/jp/tokyo', 'https://www.tokyometro.jp/en/', 'Tokyo Metro'),
  vienna: city('Vienna', 'https://ra.co/events/at/vienna', 'https://www.wienerlinien.at/web/wl-en', 'Wiener Linien'),
  cologne: city('Cologne', 'https://ra.co/events/de/cologne', 'https://www.kvb.koeln/en/', 'KVB'),
  wuppertal: city('Wuppertal', 'https://ra.co/events/de/wuppertal', 'https://www.wsw-online.de/mobilitaet/', 'WSW'),
  madrid: city('Madrid', 'https://ra.co/events/es/madrid', 'https://www.crtm.es/?lang=en', 'CRTM'),
  florence: city('Florence', 'https://ra.co/events/it/florence', 'https://www.at-bus.it/en', 'Autolinee Toscane'),
  riccione: city('Riccione', 'https://ra.co/events/it/riccione'),
  capDAgde: city("Cap d'Agde", 'https://ra.co/events/fr/montpellier'),
  tenerife: city('Tenerife', 'https://ra.co/events/es/tenerife'),
  aCoruna: city('A Coruña', 'https://ra.co/events/es/acoruna'),
  milan: city('Milan', 'https://ra.co/events/it/milan', 'https://www.atm.it/en/Pages/default.aspx', 'ATM'),
  mykonos: city('Mykonos', 'https://ra.co/events/gr/mykonos'),
  dubrovnik: city('Dubrovnik', 'https://ra.co/events/hr/dubrovnik', 'https://www.libertasdubrovnik.hr/en/', 'Libertas'),
  krakow: city('Kraków', 'https://ra.co/events/pl/krakow', 'https://ztp.krakow.pl/en', 'ZTP Kraków'),
  miami: city('Miami', 'https://ra.co/events/us/miami', 'https://www.miamidade.gov/global/transportation/home.page', 'Miami-Dade Transit'),
  washington: city('Washington, DC', 'https://ra.co/events/us/washingtondc', 'https://www.wmata.com/', 'Metro'),
  losAngeles: city('Los Angeles', 'https://ra.co/events/us/losangeles', 'https://www.metro.net/', 'LA Metro'),
  singapore: city('Singapore', 'https://ra.co/events/sg/singapore', 'https://www.lta.gov.sg/content/ltagov/en/map/fare-calculator.html', 'LTA'),
  phuket: city('Phuket', 'https://ra.co/events/th/phuket'),
  bali: city('Bali', 'https://ra.co/events/id/bali'),
  saoPaulo: city('São Paulo', 'https://ra.co/events/br/saopaulo', 'https://www.metro.sp.gov.br/en/', 'Metrô'),
  camboriu: city('Balneário Camboriú', 'https://ra.co/events/br/camboriu'),
  valinhos: city('Valinhos', 'https://ra.co/events/br/valinhos'),
  itajai: city('Itajaí', 'https://ra.co/events/br/itajai')
};

const groups = {
  amsterdam: ['Shelter', 'Radion', 'Lofi', 'Garage Noord', 'Warehouse Elementenstraat', 'Melkweg', 'Paradiso'],
  barcelona: ['Razzmatazz', 'Sala Apolo (Nitsa)', 'Nitsa, Barcelona', 'Macarena Club', 'Moog'],
  belgrade: ['Drugstore', 'Klub 20/44', 'Barutana', 'Kult', 'Lift'],
  berlin: ['Tresor', 'Berghain', 'Berghain / Panorama Bar', 'KitKatClub', 'Kater', 'Kater Blau', 'Sisyphos', 'Club der Visionaere', 'OST', 'Wilde Renate'],
  bristol: ['Motion', 'Lakota', 'Thekla'],
  budapest: ['A38', 'Instant-Fogas Complex', 'Turbina', 'Toldi Klub'],
  ibiza: ['Hï Ibiza', '[UNVRS]', 'Ushuaïa Ibiza', 'Ushuaïa', 'Ushuaia Ibiza', 'Ushuaia', 'Pacha Ibiza', 'Pacha', 'Amnesia Ibiza', 'Amnesia', 'DC-10', 'Es Paradis'],
  lisbon: ['Lux Frágil', 'Ministerium Club', 'Kremlin', 'Village Underground Lisboa'],
  london: ['fabric', 'The Cause', 'FOLD', 'The Carpet Shop', 'Dalston Superstore', 'Phonox', 'MOT', 'Drumsheds', 'Ministry of Sound', 'Heaven', 'Colour Factory', 'Ormside Projects', 'Night Tales', 'KOKO', 'XOYO', 'Brixton Jamm', 'Studio 338'],
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

const directory = new Map();
for (const [cityKey, names] of Object.entries(groups)) {
  for (const name of names) directory.set(name.toLocaleLowerCase('en'), { ...cities[cityKey], venue: name });
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
