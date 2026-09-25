import assert from 'node:assert/strict';
import { isNotASet, parseArtist } from './parse-artist.mjs';
import { matchTag } from './genre-vocab.mjs';
import { declaredGenresInTitle } from './genre-text.mjs';

const cases = [
  ['Cercle', 'Fatboy Slim @ British Airways i360 in Brighton, United Kingdom for Cercle', 'Fatboy Slim'],
  ['Cercle', 'ARTBAT at Bondinho Pão de Açúcar in Rio de Janeiro, Brazil for Cercle', 'ARTBAT'],
  ['Cercle', 'Christian Löffler live @ Fontaine de Vaucluse in France for Cercle', 'Christian Löffler'],
  ['Cercle', 'ANNA vinyl DJ set @ Les Pavillons des Etangs in Paris, France for Cercle', 'ANNA'],
  ['Cercle', 'Satori & The Band From Space live @ Fort Louvois in France for Cercle', 'Satori & The Band From Space'],
  ['Mixmag', '90 minute SOLOMUN set from Kappa FuturFestival', 'SOLOMUN'],
  ['Mixmag', 'HOT SINCE 82 sunset mix in The Lab IBZ', 'HOT SINCE 82'],
  ['Mixmag', 'PURPLE DISCO MACHINE in The Lab LA', 'PURPLE DISCO MACHINE'],
  ['Mixmag', 'PETE TONG DJ set in The Lab LDN', 'PETE TONG'],
  ['Mixmag', 'MU540 Brazilian bass & house set in The Lab NYC', 'MU540'],
  ['Mixmag', 'JAMIE JONES B2B DUBFIRE special 90s house set in The Lab', 'JAMIE JONES B2B DUBFIRE'],
  ['DJ Mag', 'Charlie Tee Drum And Bass DJ Set Live From DJ Mag HQ', 'Charlie Tee'],
  ['DJ Mag', 'Omar + Tech-House Set Live From DJ Mag HQ', 'Omar'],
  ['DJ Mag', 'DJ EZ UKG Masterclass Live From DJ Mag HQ', 'DJ EZ'],
  ['DJ Mag', 'Miss Monique Live from Hï Ibiza', 'Miss Monique'],
  ['DJ Mag', 'DJ Weekly Podcast: Ejeca', 'Ejeca'],
  ['DJ Mag', 'DJ Mag Bunker #26 AKO Beatz 2.0', 'AKO Beatz'],
  ['DJ Mag', 'Fred V D&B DJ Set From The Hospitality In The Woods Takeover', 'Fred V'],
  ['Beatport', 'Nora En Pure DJ set LIVE from Gstaad, Switzerland | @beatport', 'Nora En Pure'],
  ['Beatport', 'Deborah De Luca live @ Diego Armando Maradona stadium, Naples, July 5th 2021 | @beatport', 'Deborah De Luca'],
  ['Beatport', 'Carl Cox Hybrid Set - Creamfields | @beatport', 'Carl Cox'],
  ['Dekmantel', 'Dekmantel Ten - Ron Trent | Radar - Aug 4 / 2024', 'Ron Trent'],
  ['Dekmantel', 'Dekmantel Ten - Helena Hauff & Marcel Dettmann | Radar - Aug 2 / 2024', 'Helena Hauff & Marcel Dettmann'],
];

for (const [broadcaster, title, expected] of cases) {
  assert.equal(parseArtist(title, broadcaster), expected, `${broadcaster}: ${title}`);
}

assert.equal(matchTag('broken beat'), 'breakbeat');
assert.equal(parseArtist('Cercle Story: Chapter Two (melodic mix)', 'Cercle'), '');
assert.deepEqual(declaredGenresInTitle('MPH High Energy UKG DJ Set Live From DJ Mag HQ'), ['uk garage']);
assert.deepEqual(declaredGenresInTitle('LSB Liquid D&B Set Live From DJ Mag HQ'), ['drum and bass']);
assert.deepEqual(declaredGenresInTitle('SpectraSoul Drum & Bass Live From DJ Mag HQ'), ['drum and bass']);
assert.deepEqual(declaredGenresInTitle('Ben Sims Techno Masterclass From DJ Mag HQ'), ['techno']);

const rejectedDjMag = [
  'Beltran Makes A Tech-House Track From Scratch',
  'INSIGHT: Building Your Team / PRS for Music x DJ Mag Panels',
  'DJ Mag Tech Awards 2018: Ultimate DJ Mixer',
  'Hannah Holland Live Ableton Tutorial + Q&A',
  "Malugi and Interplanetary Criminal 'Be The Only' | Track Breakdown",
  'DJmag Review - Pioneer SVM-1000 AV Mixer',
  'Learn To Play Live Like Reinier Zonneveld | Using Ableton Live, TR-909, SH-101 & more',
  'Steve Aoki & Dimitri Vegas Chat Tomorrowland Fire, Internet Trolls & Breaking Through',
];
for (const title of rejectedDjMag) {
  assert.equal(isNotASet(title, 'DJ Mag'), true, `DJ Mag non-set was accepted: ${title}`);
}

const acceptedDjMag = [
  'DJ EZ UKG Masterclass Live From DJ Mag HQ',
  'Tiffany Calver Live From DJ Mag HQ | DJ Mag Best of British Awards Best Radio Show Winner',
  'Hudson Mohawke Audio Visual DJ Set | DJ Mag Best of British Awards Best Producer winner',
];
for (const title of acceptedDjMag) {
  assert.equal(isNotASet(title, 'DJ Mag'), false, `DJ Mag set was rejected: ${title}`);
}

// The DJ Mag rules must not turn another channel's set naming into a global
// rejection rule.
assert.equal(isNotASet('Techno Masterclass Live', 'Boiler Room'), false);

console.log(`parse-artist: ${cases.length} parser cases, genre aliases and DJ Mag filters passed.`);
