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
  {broadcaster: 'Mixmag',                 handle: '@Mixmag',                 channelId: 'UC1t-hFvdIZn5PgsPZ-weKwg'},
  {broadcaster: 'My Analog Journal',      handle: '@MyAnalogJournal',        channelId: 'UC8TZwtZ17WKFJSmwTZQpBTA'},
  {broadcaster: 'Seoul Community Radio',  handle: '@SeoulCommunityRadio',    channelId: 'UCB1uSWw2fMrJymFn8CY97MQ'},
  {broadcaster: 'Bangkok Community Radio', handle: '@bangkokcommunityradio', channelId: 'UC_UYkAhKtMfBsuAEmHrtWeQ'},
  {broadcaster: 'The Mudd Show',          handle: '@themuddshow',            channelId: 'UC1raAF6N6U-9cTCVirCYC1g'},
  {broadcaster: 'Boxout.fm',              handle: '@boxoutfm',               channelId: 'UCU3LWJOboQXSQsjqLkUt5Hg'},
  {broadcaster: 'MixMix TV',              handle: '@MixMixTV',               channelId: 'UCBLlDWPcs4Fw3h3V_quVx8A'}
];
