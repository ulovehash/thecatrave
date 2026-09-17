import fs from 'node:fs';

const html = fs.readFileSync('what-is-burning-man.html', 'utf8');
const failures = [];
const requireText = (text, label) => {
  if (!html.includes(text)) failures.push(`missing ${label}`);
};
const forbidText = (text, label) => {
  if (html.includes(text)) failures.push(`obsolete ${label}`);
};

requireText('Is Burning Man a rave?', 'rave FAQ in visible copy and schema');
requireText('60 dBA', 'current sound-policy limit');
requireText('ice sales at Arctica', 'current commerce wording');
requireText('permission to record someone is not permission to publish', 'consent guidance');
requireText('article:published_time" content="2026-09-10', 'original publication date');
requireText('article:modified_time" content="2026-09-17', 'current modification date');
forbidText('nothing is sold except ice and coffee', 'ice-and-coffee claim');
forbidText('below 75 decibels', '75-decibel policy');
forbidText('Nobody books the DJs at Burning Man', 'categorical DJ-booking claim');
forbidText('How many people have died at Burning Man?', 'deaths FAQ');

const visibleRaveQuestions = (html.match(/<summary>Is Burning Man a rave\?<\/summary>/g) || []).length;
const schemaRaveQuestions = (html.match(/"name":"Is Burning Man a rave\?"/g) || []).length;
if (visibleRaveQuestions !== 1) failures.push(`expected one visible rave FAQ, found ${visibleRaveQuestions}`);
if (schemaRaveQuestions !== 1) failures.push(`expected one schema rave FAQ, found ${schemaRaveQuestions}`);

if (failures.length) {
  console.error(failures.map(item => `  ✗ ${item}`).join('\n'));
  process.exit(1);
}

console.log('Burning Man audit passed.');
