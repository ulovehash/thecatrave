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
// Internal links go to the German guides that exist (drum and bass, dubstep);
// jungle and breakbeat have no German page yet.

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
<p>Ein gutes DJ-Set zu finden war nie das Problem. ${channels} Kanäle stellen mehr davon online, als irgendwer je durchhören könnte, und genau das ist das Problem: Mit ${escapeHtml(setCount)} Sets vor dir wird die Auswahl zur eigenen kleinen Aufgabe, und am Ende schaust du gar nichts.</p>
<p>Genau dafür gibt es den Selector. Drück den Knopf, und er spielt ein zufälliges Set aus ${escapeHtml(countLine)}. Drück noch einmal für das nächste. Du musst dich nicht registrieren, es gibt keine Werbung, und deine gespeicherten Listen bleiben nur in deinem Browser.</p>
<p>Ein DJ-Set ist ein durchgehender Mix, gespielt von einer DJ oder einem DJ, meist eine Stunde oder länger, live aufgenommen in einem Club, einem Radiostudio oder einem Festivalzelt. Es ist keine Playlist: Die Reihenfolge, die Übergänge und das Tempo sind die eigentliche Performance.</p>
<p>Vier Filter grenzen die Auswahl ein, bevor gezogen wird, und <strong>Modus</strong> ist der, der den Charakter des Ergebnisses verändert. Er bestimmt, wie groß das Publikum eines Sets schon sein soll.</p>
<ul>
  <li><strong>Alle</strong> mischt den ganzen Katalog, alle ${escapeHtml(setCount)} Sets, ohne Gewichtung.</li>
  <li><strong>Beliebt</strong> bleibt bei Sets, die schon ein großes Publikum gefunden haben. Das ist der Modus für ein Best-of: ein beliebtes ${escapeHtml(broadcasters[0])}-Set, ein beliebtes Techno-Set, etwas, das du auflegen kannst, weil viele es gut fanden.</li>
  <li><strong>Geheimtipps</strong> schaut darauf, wie beliebt ein Set im Verhältnis dazu ist, wie viele es tatsächlich gesehen haben. Du bekommst die Sets, die ein kleines Publikum hoch bewertet hat, nicht die, die einfach gepusht wurden.</li>
  <li><strong>Nischen-Sets</strong> ist das andere Ende von Beliebt: der stille Teil des Katalogs, in dem die meisten Artists noch fast kein Publikum haben. Lohnt sich, wenn du gern als Erste oder Erster da bist.</li>
</ul>
<p>Die anderen drei Filter lassen sich mit jedem Modus kombinieren. <strong>Quelle</strong> beschränkt die Auswahl auf einen Kanal, so bekommst du ein zufälliges ${escapeHtml(broadcasters[0])}-Set, ein ${escapeHtml(broadcasters[1] || 'HÖR')}-Set oder eins von ${escapeHtml(broadcasters.slice(2, 6).join(', '))}. <strong>Genre</strong> umfasst House, Techno, Drum and Bass, Dubstep, UK Garage, Jungle, Electro, Breakbeat, Hip-Hop und Disco, wo ein Set getaggt ist. <strong>Länge</strong> beantwortet die andere Frage, die du eigentlich hast, nämlich wie viel Zeit du hast: Der Großteil des Katalogs ist die klassische Radiostunde, deshalb ist der Filter vor allem für die beiden Enden da, die Sets unter 45 Minuten und die, die länger als eine Stunde und eine Viertelstunde laufen.</p>
<p>Die Auswahl besteht aus den langen Uploads von ${escapeHtml(channelList)}: echte Sets statt Ausschnitte, jede Woche aktualisiert. Die Geschichte hinter der Musik steht im <a href="/de/drum-and-bass">Guide zu Drum and Bass</a> und im <a href="/de/dubstep">Guide zu Dubstep</a>.</p>
`.trim(),
    faqTitle: 'Fragen zum Entdecken neuer Musik.',
    faqItems: [
      {
        question: 'Wie entdeckt man neue Musik ohne Algorithmus?',
        answer: `Indem man aufhört auszuwählen. Ein Algorithmus gibt dir mehr von dem, was du schon gehört hast, also führt der Weg hinaus über eine Quelle, auf die er keinen Einfluss hat. Der Selector wählt ein zufälliges DJ-Set aus ${channels} Kanälen, und die Modi entscheiden, wie weit abseits der ausgetretenen Pfade du landest: am vielgesehenen Ende, am stillen Ende oder bei den Sets, die weit mehr geliebt werden, als ihre Zuschauerzahl vermuten lässt.`,
        answerHtml: `<p>Indem man aufhört auszuwählen. Ein Algorithmus gibt dir mehr von dem, was du schon gehört hast, also führt der Weg hinaus über eine Quelle, auf die er keinen Einfluss hat. Der Selector wählt ein zufälliges DJ-Set aus ${channels} Kanälen, und die Modi entscheiden, wie weit abseits der ausgetretenen Pfade du landest: am vielgesehenen Ende, am stillen Ende oder bei den Sets, die weit mehr geliebt werden, als ihre Zuschauerzahl vermuten lässt.</p>`
      },
      {
        question: 'Wie findet man am besten neue Musik, die man noch nie gehört hat?',
        answer: 'Hör einer DJ oder einem DJ zu, die oder den du nicht kennst. Ein Set ist eine Stunde Tracks, die jemand über Jahre ausgewählt hat, also stellt dir ein gutes Set mehr Musik vor als ein Nachmittag, an dem du dich durch Singles skippst. Stell den Selector auf Nischen-Sets, dann spielt er nur aus dem stillen Teil des Katalogs, wo die Sets liegen, die fast niemand gefunden hat.',
        answerHtml: '<p>Hör einer DJ oder einem DJ zu, die oder den du nicht kennst. Ein Set ist eine Stunde Tracks, die jemand über Jahre ausgewählt hat, also stellt dir ein gutes Set mehr Musik vor als ein Nachmittag, an dem du dich durch Singles skippst. Stell den Selector auf <strong>Nischen-Sets</strong>, dann spielt er nur aus dem stillen Teil des Katalogs, wo die Sets liegen, die fast niemand gefunden hat.</p>'
      },
      {
        question: 'Wie wählt der Selector ein Set aus?',
        answer: `Du drückst einen Knopf, und er spielt ein DJ-Set, zufällig gezogen aus seinem Katalog von ${countLine}. Drück noch einmal für das nächste. Kein Algorithmus lernt deinen Geschmack, und die Liste der zuletzt gespielten Sets liegt nur in deinem Browser.`,
        answerHtml: `<p>Du drückst einen Knopf, und er spielt ein DJ-Set, zufällig gezogen aus seinem Katalog von ${escapeHtml(countLine)}. Drück noch einmal für das nächste. Kein Algorithmus lernt deinen Geschmack, und die Liste der zuletzt gespielten Sets liegt nur in deinem Browser.</p>`
      },
      {
        question: 'Kann ich ein zufälliges Boiler-Room-Set bekommen?',
        answer: 'Ja. Wähl im Filter Quelle Boiler Room aus und drück dann den Knopf, um nur Boiler-Room-Sets zu mischen. Genauso funktioniert es mit HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle und jedem anderen Kanal in der Liste.',
        answerHtml: '<p>Ja. Wähl im Filter Quelle Boiler Room aus und drück dann den Knopf, um nur Boiler-Room-Sets zu mischen. Genauso funktioniert es mit HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle und jedem anderen Kanal in der Liste.</p>'
      },
      {
        question: 'Wie finde ich die besten oder beliebtesten Sets?',
        answer: 'Wähl den Modus Beliebt. Er beschränkt die Auswahl auf Sets, die schon ein großes Publikum haben, also ist jedes Ergebnis eins, das viele gesehen und bewertet haben. Kombinier ihn mit einem Quellen- oder Genre-Filter für ein beliebtes Techno-Set, ein beliebtes HÖR-Set und so weiter. Geheimtipps macht das Gegenteil: Der Modus bevorzugt Sets, die weit mehr geliebt werden, als ihre Zuschauerzahl vermuten lässt, also bekommst du, was ein kleines Publikum hoch bewertet hat, statt dessen, was einfach gepusht wurde. Nischen-Sets geht ans stille Ende des Katalogs, wo die meisten Artists noch fast kein Publikum haben.',
        answerHtml: '<p>Wähl den Modus <strong>Beliebt</strong>. Er beschränkt die Auswahl auf Sets, die schon ein großes Publikum haben, also ist jedes Ergebnis eins, das viele gesehen und bewertet haben. Kombinier ihn mit einem Quellen- oder Genre-Filter für ein beliebtes Techno-Set, ein beliebtes HÖR-Set und so weiter.</p><p><strong>Geheimtipps</strong> macht das Gegenteil: Der Modus bevorzugt Sets, die weit mehr geliebt werden, als ihre Zuschauerzahl vermuten lässt, also bekommst du, was ein kleines Publikum hoch bewertet hat, statt dessen, was einfach gepusht wurde. <strong>Nischen-Sets</strong> geht ans stille Ende des Katalogs, wo die meisten Artists noch fast kein Publikum haben.</p>'
      },
      {
        question: 'Was ist der Unterschied zwischen Beliebt, Geheimtipps und Nischen-Sets?',
        answer: 'Es kommt darauf an, wie groß das Publikum eines Sets schon ist. Beliebt gibt dir das vielgesehene Ende dessen, worauf du gefiltert hast, Nischen-Sets das stille Ende. Geheimtipps steht neben beiden: Hier zählt, wie beliebt ein Set im Verhältnis dazu ist, wie viele es gesehen haben, also kann ein Set ein Geheimtipp sein, ob es zehntausend Aufrufe hat oder eine Million. Alle verzichtet auf jede Gewichtung und mischt den ganzen Katalog.',
        answerHtml: '<p>Es kommt darauf an, wie groß das Publikum eines Sets schon ist. <strong>Beliebt</strong> gibt dir das vielgesehene Ende dessen, worauf du gefiltert hast, <strong>Nischen-Sets</strong> das stille Ende. <strong>Geheimtipps</strong> steht neben beiden: Hier zählt, wie beliebt ein Set im Verhältnis dazu ist, wie viele es gesehen haben, also kann ein Set ein Geheimtipp sein, ob es zehntausend Aufrufe hat oder eine Million. <strong>Alle</strong> verzichtet auf jede Gewichtung und mischt den ganzen Katalog.</p>'
      },
      {
        question: 'Aus welchen Kanälen kommen die Sets?',
        answer: `${channelList}. Alle sind öffentliche YouTube-Kanäle, und der Katalog wird jede Woche aktualisiert.`,
        answerHtml: `<p>${escapeHtml(channelList)}. Alle sind öffentliche YouTube-Kanäle, und der Katalog wird jede Woche aktualisiert.</p>`
      },
      {
        question: 'Kann ich nach Genre filtern?',
        answer: 'Ja, wo ein Set getaggt ist. Die Genre-Zeile umfasst House, Techno, Drum and Bass, Dubstep, UK Garage, Jungle, Electro, Breakbeat, Hip-Hop, Disco und mehr. Sets, die sich nicht taggen ließen, liegen in der Gruppe „ohne Tag“, die du ein- oder ausschließen kannst.',
        answerHtml: '<p>Ja, wo ein Set getaggt ist. Die Genre-Zeile umfasst House, Techno, Drum and Bass, Dubstep, UK Garage, Jungle, Electro, Breakbeat, Hip-Hop, Disco und mehr. Sets, die sich nicht taggen ließen, liegen in der Gruppe „ohne Tag“, die du ein- oder ausschließen kannst.</p>'
      },
      {
        question: 'Laufen die Sets hier oder auf YouTube?',
        answer: 'Jedes gezogene Set wird auf dieser Seite eingebettet, mit einem Link, um es auf YouTube anzusehen. Es wird nichts heruntergeladen, und es gibt kein Konto, keine Anmeldung und keine Installation.',
        answerHtml: '<p>Jedes gezogene Set wird auf dieser Seite eingebettet, mit einem Link, um es auf YouTube anzusehen. Es wird nichts heruntergeladen, und es gibt kein Konto, keine Anmeldung und keine Installation.</p>'
      }
    ],
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
      stillBuilding: 'Der Katalog wird noch aufgebaut',
      loadFailed: 'Katalog konnte nicht geladen werden, bitte Seite neu laden',
      year: 'Jahr',
      length: 'Länge',
      views: 'Aufrufe',
      watch: 'Auf YouTube ansehen ↗',
      save: '♡ Speichern',
      saved: '♥ Gespeichert',
      emptySaved: 'Noch nichts gespeichert. Drück ♡ Speichern unter einem Set, um es hier zu behalten.',
      emptyRecent: 'Noch nichts gespielt.',
      remove: '{name} aus den gespeicherten Sets entfernen'
    }
  };
}
