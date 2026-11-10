// The German Selector page (/de/selector): the English copy in
// build-selector.mjs, translated, plus the words the runtime writes itself
// (`ui`, read by selector-runtime.js from the #sel-i18n block).
//
// Two sentences differ from the English on purpose. The English says "Nothing
// is saved" and "no history kept", which stopped being true when Saved and
// Recently played shipped (defects.json, selector-nothing-saved-copy). The
// German says what the tool does now, in the owner's words (2026-09-22): no
// need to register, no ads, saved lists stay in the browser. It does not claim
// no personal data: every page loads Google Analytics, which under GDPR collects
// some.
//
// How it works links the German articles index (/de/artikel) and /de/beste-boiler-room-sets,
// the nearest hand-picked list to the English best DJ sets of all time.

export default function copy({total, tagged, broadcasters, channelList, escapeHtml}) {
  const fmt = n => n.toLocaleString('de-DE');
  const setCount = total ? fmt(total) : 'Tausenden';
  const countLine = total
    ? `${fmt(total)} Sets von ${broadcasters.length} Kanälen`
    : `${broadcasters.length} Kanälen`;
  const genreNote = tagged
    ? ` <span class="sel-field-note">(${fmt(tagged)} von ${fmt(total)} Sets getaggt)</span>`
    : '';
  const channels = broadcasters.length;
  return {
    title: 'Neue Musik entdecken: ein Knopf, ein zufälliges DJ-Set',
    description: total
      ? `Neue Musik entdecken, ohne auszuwählen. Ein Knopf spielt ein zufälliges DJ-Set aus ${setCount}: Boiler Room, NTS, Cercle und Community-Radios weltweit.`
      : 'Neue Musik entdecken, ohne auszuwählen. Ein Knopf spielt ein zufälliges DJ-Set: Boiler Room, NTS, Cercle und Community-Radios weltweit.',
    appName: 'Der Selector',
    h1: 'Knopf drücken. Set bekommen.',
    deck: `Neue Musik finden, ohne selbst zu wählen: ein zufälliges DJ-Set aus ${escapeHtml(setCount)}, von Boiler Room, NTS, HÖR und ${channels - 3} weiteren Kanälen.`,
    count: `${escapeHtml(setCount)} Sets`,
    loading: 'Katalog wird geladen…',
    libraryLabel: 'Deine Sets',
    savedTab: 'Gespeichert',
    recentTab: 'Zuletzt gespielt',
    libraryNote: 'Nur in diesem Browser gespeichert.',
    modeLabel: 'Modus',
    sourceLabel: 'Quelle',
    genreLabel: `Genre${genreNote}`,
    lengthLabel: 'Länge',
    noscript: `Der Selector braucht JavaScript, um zu mischen und einen Player einzubetten. Die Kanäle findest du auf YouTube: ${
      broadcasters.map(b => escapeHtml(b)).join(', ')
    }.`,
    aboutTitle: 'Das Schwierige ist die Auswahl.',
    aboutHtml: `
<p>Es gibt mehr gute DJ-Sets online, als irgendwer durchhören könnte, also wird die Auswahl zur Aufgabe, und am Ende schaust du gar nichts. Drück den Knopf, und der Selector wählt für dich: ein zufälliges Set aus ${escapeHtml(countLine)}. Passt nicht? Drück noch einmal.</p>
<p>Du musst dich nicht registrieren, es gibt keine Werbung, und deine gespeicherten Listen bleiben nur in deinem Browser.</p>
`.trim(),
    howHtml: `
<ul class="how-list">
  <li><strong>Der Knopf</strong> spielt ein zufälliges Set. Die Leertaste macht dasselbe, B geht zum letzten zurück, S merkt es dir.</li>
  <li><strong>Modus</strong> bestimmt, wie bekannt das Set ist. <strong>Beliebt</strong>: Sets, die ein großes Publikum schon gut fand. <strong>Geheimtipps</strong>: Sets, die ein kleines Publikum liebt. <strong>Nischen-Sets</strong>: Artists, die kaum jemand kennt. <strong>Alle</strong>: ohne Gewichtung.</li>
  <li><strong>Kanäle</strong>, die du einschaltest, sind die einzigen, aus denen er spielt, etwa Boiler Room und NTS.</li>
  <li><strong>Genre</strong> und <strong>Länge</strong> grenzen weiter ein, zum Beispiel auf Techno unter 45 Minuten. Genre umfasst nur Sets mit Tag.</li>
  <li><strong>Gespeichert</strong> und <strong>Zuletzt gespielt</strong> halten die Sets fest, die du wiederfinden willst.</li>
</ul>
<p>Die Sets laufen über YouTube, eingebettet auf dieser Seite, und jede Woche kommen neue Uploads dazu. Mehr über die Musik dahinter steht in den <a href="/de/artikel">Artikeln</a>, ein guter Anfang sind <a href="/de/beste-boiler-room-sets">die besten Boiler-Room-Sets</a>.</p>
`.trim(),
    featureList: [
      'Zufälliger DJ-Set-Picker',
      'Filter nach Kanal (Boiler Room, HÖR, NTS, Beatport, Rinse FM und mehr)',
      'Filter nach Genre',
      'Filter nach Länge des Sets',
      'Modi: beliebt, Geheimtipps und Nischen-Sets'
    ],
    ui: {
      numberLocale: 'de-DE',
      modes: { any: ['Alle', ''], popular: ['Beliebt', 'die meistgesehenen Sets'], gems: ['Geheimtipps', 'unterschätzte Sets'], deep: ['Nischen-Sets', 'vor allen anderen hören'] },
      lengths: { short: 'Unter 45 Min.', hour: '45–75 Min.', long: 'Über 75 Min.' },
      allSets: 'alle {n} Sets',
      sets: '{n} Sets',
      sources: '{n} Quellen',
      untagged: 'ohne Tag',
      all: 'Alle',
      more: '+{n} weitere',
      fewer: 'Weniger zeigen',
      moreLabel: '{n} weitere zeigen, {total} insgesamt',
      fewerLabel: 'Weniger zeigen, {total} insgesamt',
      pickMe: 'Gib mir ein Set',
      pickAnother: 'Noch eins',
      nothingMatches: 'Kein Treffer, lockere den Filter',
      loadFailed: 'Katalog konnte nicht geladen werden, bitte Seite neu laden',
      views: '{n} Aufrufe',
      keySave: 'Merken',
      keySaved: 'Gemerkt',
      emptySaved: 'Noch nichts gemerkt. Drück Merken oder S, während ein Set läuft.',
      emptyRecent: 'Noch nichts gespielt.',
      remove: '{name} aus den gespeicherten Sets entfernen',
      onAir: 'Auf Sendung',
      tuning: 'Einstellen',
      paused: 'Pause',
      ended: 'Zu Ende',
      noSignal: 'Kein Signal',
      tapToStart: 'Tipp aufs Bild, um das Set zu starten',
      unavailable: 'Dieses Set ist nicht mehr auf YouTube. Wir suchen ein anderes…',
      linkCopied: 'Link kopiert',
      savedToast: 'In deine Plattenkiste gelegt',
      volume: 'Lautstärke {n}',
      muted: 'Stumm',
      nowPlaying: 'Läuft jetzt: {name}'
    }
  };
}
