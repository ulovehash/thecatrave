// Source channels for The Selector. `scripts/fetch-sets.mjs` uses the YouTube
// Data API to pull every long-form upload (>= 20 min) from each channelId below.
// Add a channel by finding its ID: open the channel on youtube.com, View Source,
// search for "externalId" or a /channel/UC... link.

export const channels = [
  {broadcaster: 'Boiler Room',            channelId: 'UCG3tNuVRzPTlONMBp33O8xA'},
  {broadcaster: 'HÖR',                    channelId: 'UCi3WG3NGWPDrfKjBDvM0niQ'},
  {broadcaster: 'The Lot Radio',          channelId: 'UCJOtExbMu0RqIdiE4nMUPxQ'},
  {broadcaster: 'Cercle',                 channelId: 'UC6EKNZeSDVNblZ8x9BUfeyA'},
  {broadcaster: 'Rinse FM',               channelId: 'UC6nJJbVAcxH776nvTXvtMZA'},
  {broadcaster: 'Mixmag',                 channelId: 'UC1t-hFvdIZn5PgsPZ-weKwg'},
  {broadcaster: 'Keep Hush',              channelId: 'UCQAnY_suiNH0MvdTHk5GiBA'},
  {broadcaster: 'NTS Radio',              channelId: 'UCpptwbTvG9rmn_JN-66v-hw'},
  {broadcaster: 'My Analog Journal',      channelId: 'UC8TZwtZ17WKFJSmwTZQpBTA'},
  {broadcaster: 'Kiosk Radio',            channelId: 'UCal_TyiLk79vN9-OzEzUM6A'},
  {broadcaster: 'Seoul Community Radio',  channelId: 'UCB1uSWw2fMrJymFn8CY97MQ'},
  {broadcaster: 'Boxout.fm',              channelId: 'UC3OYk2ppOP2GAqSrf37vXYw'},
  {broadcaster: 'Bangkok Community Radio', channelId: 'UC_UYkAhKtMfBsuAEmHrtWeQ'},
  {broadcaster: 'The Mudd Show',          channelId: 'UC1raAF6N6U-9cTCVirCYC1g'},
  {broadcaster: 'MixMix TV',              channelId: 'UCBLlDWPcs4Fw3h3V_quVx8A'}
];
