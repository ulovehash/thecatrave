// Source channels for The Selector, in priority order: when the catalogue hits
// MAX_SETS the channels lower in this list are trimmed first.
// `scripts/fetch-sets.mjs` resolves each `handle` via the YouTube Data API
// (channels.list?forHandle) and falls back to `channelId`.

export const channels = [
  {broadcaster: 'Boiler Room',            handle: '@boilerroom',             channelId: 'UCGBpxWJr9FNOcFYA5GkKrMg'},
  {broadcaster: 'HÖR',                    handle: '@hoer.berlin',            channelId: 'UCmfF7JZv26UUKyRedViGIlw'},
  {broadcaster: 'NTS Radio',              handle: '@NTSLIVEUK',              channelId: 'UCmqKuYoZCI7D6FQzDv5nKNw'},
  {broadcaster: 'Keep Hush',              handle: '@keephush',               channelId: 'UCQAnY_suiNH0MvdTHk5GiBA'},
  {broadcaster: 'The Lot Radio',          handle: '@thelotradio',            channelId: 'UCJOtExbMu0RqIdiE4nMUPxQ'},
  {broadcaster: 'Kiosk Radio',            handle: '@kioskradiobxl',          channelId: 'UCal_TyiLk79vN9-OzEzUM6A'},
  {broadcaster: 'Cercle',                 handle: '@Cercle',                 channelId: 'UCPKT_csvP72boVX0XrMtagQ'},
  {broadcaster: 'Rinse FM',               handle: '@RinseFM',                channelId: 'UCgGfSxNOBkJDtCQ932iQU7Q'},

  // The site is written about breakbeat, jungle and drum and bass, but the pool
  // was 243 dnb and 305 jungle sets against 2,260 house. These four are here to
  // close that gap, so they sit above the geography additions: if MAX_SETS is
  // ever switched on, the tail is trimmed first and these should survive.
  {broadcaster: 'Rampage',                handle: '@WeAreRampageEvents',     channelId: 'UCEFynXmIhLp69l-sWy2EV6w'},
  {broadcaster: 'DnB Allstars',           handle: '@dnballstars',            channelId: 'UCYQHXu4Ea4NTvBggGHT7cOQ'},
  {broadcaster: 'Hospital Records',       handle: '@hospitalrecords',        channelId: 'UCw49uOTAJjGUdoAeUcp7tOg'},
  {broadcaster: 'Outlook Festival',       handle: '@outlookfestival',        channelId: 'UCj5qx-Kf98N7LBneay9Ig5Q'},
  {broadcaster: 'Mixmag',                 handle: '@Mixmag',                 channelId: 'UC1t-hFvdIZn5PgsPZ-weKwg'},
  {broadcaster: 'My Analog Journal',      handle: '@MyAnalogJournal',        channelId: 'UC8TZwtZ17WKFJSmwTZQpBTA'},
  {broadcaster: 'Seoul Community Radio',  handle: '@SeoulCommunityRadio',    channelId: 'UCB1uSWw2fMrJymFn8CY97MQ'},
  {broadcaster: 'Bangkok Community Radio', handle: '@bangkokcommunityradio', channelId: 'UC_UYkAhKtMfBsuAEmHrtWeQ'},
  {broadcaster: 'The Mudd Show',          handle: '@themuddshow',            channelId: 'UC1raAF6N6U-9cTCVirCYC1g'},
  {broadcaster: 'Boxout.fm',              handle: '@boxoutfm',               channelId: 'UCU3LWJOboQXSQsjqLkUt5Hg'},
  {broadcaster: 'MixMix TV',              handle: '@MixMixTV',               channelId: 'UCBLlDWPcs4Fw3h3V_quVx8A'},
  {broadcaster: 'STVOL TV',               handle: '@stvoltelevision',         channelId: 'UCL85kisatRecJyFRKbb7zkA'},
  {broadcaster: "L'Atelier de Musique",   handle: '@Latelier__de__Musique',   channelId: 'UCiEzJ2MVFxBMSds9Axrz5mw'},
  {broadcaster: 'Beatport',               handle: '@beatport',                channelId: 'UCyEMqKQPGdj8wKVKt2-agbQ'},
  {broadcaster: 'Elevator Music',          handle: '@ElevatorMusicLive',       channelId: 'UCSN7R7sDkoXfrx8gRdITr0Q'},

  // Places the catalogue had nothing from: South America, Africa, Hong Kong,
  // Manila, the Balkans, and the American clubs. Each was checked for uploads
  // over twenty minutes before being listed here; channels that turned out to
  // post mostly short clips (dublab, Home Alone, SUNANDBASS) are deliberately
  // absent.
  {broadcaster: 'Groove Cartel',          handle: '@GrooveCartelSA',         channelId: 'UCX16-rv0UegEexd9fNKMAtg'},
  {broadcaster: 'Stay True Sounds',       handle: '@StayTrueSounds',         channelId: 'UC3obNfypoMdE4AiXl7VF-2g'},
  {broadcaster: 'Kunye',                  handle: '@kunyerecords',           channelId: 'UCYns9k9ludBlhO8vwkZ7wIQ'},
  {broadcaster: 'Bresh',                  handle: '@BRESHOficial',           channelId: 'UCrVEbiiEAF4wSW4SkoxN_RA'},
  {broadcaster: 'Under Club',             handle: '@UnderClubOficial',       channelId: 'UCJWi82IMfVSXH40E9h8ohlA'},
  {broadcaster: 'Hong Kong Community Radio', handle: '@HKCRLIVE',            channelId: 'UCFqCSru3cS79WElDMSh-jcg'},
  {broadcaster: 'Manila Community Radio', handle: '@ManilaCommunityRadio',   channelId: 'UCBxuAg91fPRAS5Mzieork_g'},
  {broadcaster: 'Radio Rudina',           handle: '@radiorudina',            channelId: 'UCvxj0-GaOwp_fLWnOU3SWWw'},
  {broadcaster: 'Club Space',             handle: '@OfficialClubSpace',      channelId: 'UCD2yZhDoieQ4TP5xKeRft-g'},
  {broadcaster: 'The Concourse Project',  handle: '@TheConcourseProject',    channelId: 'UCaSjh0kdrd3xEn0zqcjbiDg'},
  {broadcaster: 'Dekmantel',              handle: '@dkmntl',                 channelId: 'UCtUI3CJsQazs3WAaEE3ce9w'},
  {broadcaster: 'Intercell',              handle: '@IntercellEvents',        channelId: 'UCVnaDYpxWktgATAIHr1rOHQ'},
  {broadcaster: 'Rinse France',           handle: '@RinseFranceRadio',       channelId: 'UCcTI8Xsh6DnXuCSKFP4WqkA'},
  {broadcaster: 'Yoyaku',                 handle: '@yoyakurecordstore',      channelId: 'UCtSYkZGP9nkvXPMQgjeEIow'},
];
