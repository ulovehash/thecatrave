// Source channels for The Selector. Each entry is one YouTube channel whose
// uploads are DJ sets / live streams / radio shows worth pulling into the pool.
// `scripts/fetch-sets.mjs` resolves each `handle` (or `id`) to its uploads
// playlist and pulls every long-form video.
//
// Adjust this list freely. On the next `node scripts/fetch-sets.mjs` run the
// script prints which handles it could not resolve so they are easy to fix.
// Handles here are best guesses from public channels; verify against YouTube if
// a channel comes back with 0 videos.

export const channels = [
  {broadcaster: 'Boiler Room', handle: '@boilerroom'},
  {broadcaster: 'HÖR', handle: '@HORBerlin'},
  {broadcaster: 'The Lot Radio', handle: '@thelotradio'},
  {broadcaster: 'Cercle', handle: '@Cercle'},
  {broadcaster: 'Rinse FM', handle: '@RinseFMOfficial'},
  {broadcaster: 'Mixmag', handle: '@Mixmag'},
  {broadcaster: 'Keep Hush', handle: '@KeepHushLive'},
  {broadcaster: 'Dekmantel', handle: '@DekmantelAmsterdam'},
  {broadcaster: 'NTS Radio', handle: '@NTSRadio'},
  {broadcaster: 'Dublab', handle: '@dublab'},
  {broadcaster: 'My Analog Journal', handle: '@MyAnalogJournal'},
  {broadcaster: 'Kiosk Radio', handle: '@kioskradiobxl'},
  {broadcaster: 'Seoul Community Radio', handle: '@SeoulCommunityRadio'},
  {broadcaster: 'Boxout.fm', handle: '@boxoutfm'},
  {broadcaster: 'Bangkok Community Radio', handle: '@bangkokcommunityradio'},
  {broadcaster: 'The Mudd Show', handle: '@themuddshow'},
  {broadcaster: 'Groove Cartel', handle: '@GrooveCartelMusic'},
  {broadcaster: 'MixMix TV', handle: '@MixMixTV'},
  {broadcaster: 'Kindred', handle: '@KindredRadioUK'},
  {broadcaster: 'Yoyaku', handle: '@yoyakuchannel'}
];
