import assert from 'node:assert/strict';
import { parseArtist } from './parse-artist.mjs';
import { matchTag } from './genre-vocab.mjs';

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

console.log(`parse-artist: ${cases.length} parser cases and genre aliases passed.`);
