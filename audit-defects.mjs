// A defect is closed when the rule that prevents it is really in the file, and
// this checks that rather than believing the claim.
//
// Every other audit here catches a wrong page. This one catches a rule that was
// promised and not written, or written and later removed. Both have happened in
// one evening: a workflow section forbidding reused media existed and went
// unread, and an audit was written with the identical directory-walking fault as
// the one whose repair had just been finished.
//
// Each entry names a file and a phrase. The phrase has to be findable in that
// file. That makes the ledger a set of assertions about the repository instead
// of a record of intentions, so deleting a hard-won rule breaks the build.
//
// Entries with `fix: null` are open. They do not fail, because some of them wait
// on a decision that is not the machine's to make, but they print on every
// single build with their age. An open defect that nobody sees is the failure
// this file exists to prevent, so it is deliberately impossible to silence one
// except by fixing it.
import fs from 'node:fs';

// Whitespace is collapsed on both sides before matching. The prose in these
// files is hard-wrapped, so a phrase that spans a line break is not found by a
// plain substring search: the first test of this audit reported a rule missing
// that was sitting in the file, split across two lines.
const flat = s => s.replace(/\s+/g, ' ').trim();

const LEDGER = 'defects.json';
const failures = [];
const open = [];

if (!fs.existsSync(LEDGER)) {
  console.error(`Defect audit failed: ${LEDGER} is missing`);
  process.exit(1);
}

const {defects} = JSON.parse(fs.readFileSync(LEDGER, 'utf8'));
const today = new Date();

for (const d of defects) {
  for (const field of ['id', 'found', 'by', 'what', 'should_have_caught']) {
    if (!d[field]) failures.push(`${d.id || '(no id)'}: missing "${field}"`);
  }
  if (!d.fix) {
    const days = Math.round((today - new Date(d.found)) / 86400000);
    open.push(`${d.id} — open ${days} day(s): ${d.what.split('.')[0]}.`);
    continue;
  }
  const {file, contains} = d.fix;
  if (!file || !contains) { failures.push(`${d.id}: fix needs both "file" and "contains"`); continue; }
  if (!fs.existsSync(file)) { failures.push(`${d.id}: fix claims ${file}, which does not exist`); continue; }
  if (!flat(fs.readFileSync(file, 'utf8')).includes(flat(contains))) {
    failures.push(`${d.id}: ${file} no longer contains "${contains}" — the rule that closed this defect has been removed or reworded`);
  }
}

for (const o of open) console.warn('  open: ' + o);

if (failures.length) {
  console.error('Defect audit failed:');
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log(`Defect audit passed: ${defects.length - open.length} closed, ${open.length} open.`);
