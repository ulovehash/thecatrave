// The French Selector page (/fr/selector): the English copy in
// build-selector.mjs, translated, plus the words the runtime writes itself
// (`ui`, read by selector-runtime.js from the #sel-i18n block).
//
// Two sentences differ from the English on purpose. The English says "Nothing
// is saved" and "no history kept", which stopped being true when Saved and
// Recently played shipped (defects.json, selector-nothing-saved-copy). The
// French says what the tool does now, in the owner's words (2026-09-22): no
// need to register, no ads, saved lists stay in the browser. It does not claim
// no personal data: every page loads Google Analytics, which under GDPR collects
// some.
//
// How it works links the French articles index (/fr/articles) and /fr/meilleurs-sets-boiler-room,
// the nearest hand-picked list to the English best DJ sets of all time.

export default function copy({total, tagged, broadcasters, channelList, escapeHtml}) {
  const fmt = n => n.toLocaleString('fr-FR');
  const setCount = total ? fmt(total) : 'des milliers de';
  const countLine = total
    ? `${fmt(total)} sets venus de ${broadcasters.length} chaînes`
    : `${broadcasters.length} chaînes`;
  const genreNote = tagged
    ? ` <span class="sel-field-note">(${fmt(tagged)} sets sur ${fmt(total)} étiquetés)</span>`
    : '';
  const channels = broadcasters.length;
  return {
    title: 'Découvrir de la musique : un bouton, un DJ set au hasard',
    description: total
      ? `Découvrir de la musique sans avoir à choisir. Un bouton lance un DJ set au hasard parmi ${setCount} : Boiler Room, NTS, Cercle et radios du monde entier.`
      : 'Découvrir de la musique sans avoir à choisir. Un bouton lance un DJ set au hasard : Boiler Room, NTS, Cercle et radios du monde entier.',
    appName: 'Le Selector',
    h1: 'Appuyez sur le bouton. Recevez un set.',
    deck: `Trouver de la nouvelle musique sans choisir : un DJ set au hasard parmi ${escapeHtml(setCount)}, de Boiler Room, NTS, HÖR et ${channels - 3} autres chaînes.`,
    count: `${escapeHtml(setCount)} sets`,
    loading: 'Chargement du catalogue…',
    libraryLabel: 'Vos sets',
    savedTab: 'Enregistrés',
    recentTab: 'Écoutés récemment',
    libraryNote: 'Conservés dans ce navigateur uniquement.',
    modeLabel: 'Mode',
    sourceLabel: 'Source',
    genreLabel: `Genre${genreNote}`,
    lengthLabel: 'Durée',
    noscript: `Le Selector a besoin de JavaScript pour tirer un set au hasard et afficher le lecteur. Les chaînes sont sur YouTube : ${
      broadcasters.map(b => escapeHtml(b)).join(', ')
    }.`,
    aboutTitle: 'Le plus dur, c’est de choisir.',
    aboutHtml: `
<p>Il y a plus de bons DJ sets en ligne que quiconque ne pourrait en écouter, alors choisir devient une corvée et on finit par ne rien regarder. Appuyez sur le bouton et le Selector choisit pour vous : un set au hasard parmi ${escapeHtml(countLine)}. Pas convaincu ? Appuyez encore.</p>
<p>Pas besoin de vous inscrire, pas de publicité, et vos listes enregistrées restent uniquement dans votre navigateur.</p>
`.trim(),
    howHtml: `
<ul class="how-list">
  <li><strong>Le bouton</strong> lance un set au hasard. La barre d’espace fait de même, B revient au précédent, S le garde.</li>
  <li><strong>Mode</strong> décide à quel point le set est connu. <strong>Populaires</strong> : des sets déjà appréciés par un large public. <strong>Pépites cachées</strong> : des sets qu’un petit public adore. <strong>Sets de niche</strong> : des artistes que presque personne n’a encore découverts. <strong>Tous</strong> : sans pondération.</li>
  <li><strong>Chaînes</strong> activées : le tirage se limite à elles, Boiler Room et NTS par exemple.</li>
  <li><strong>Genre</strong> et <strong>Durée</strong> affinent encore, par exemple de la techno en moins de 45 minutes. Le genre ne couvre que les sets étiquetés.</li>
  <li><strong>Enregistrés</strong> et <strong>Écoutés récemment</strong> gardent les sets que vous voulez retrouver.</li>
</ul>
<p>Les sets sont lus depuis YouTube, intégrés à cette page, et de nouvelles vidéos rejoignent le catalogue chaque semaine. Pour la musique derrière, lisez les <a href="/fr/articles">articles</a>, par exemple <a href="/fr/meilleurs-sets-boiler-room">les meilleurs sets Boiler Room</a>.</p>
`.trim(),
    featureList: [
      'Tirage au hasard d’un DJ set',
      'Filtre par chaîne (Boiler Room, HÖR, NTS, Beatport, Rinse FM et d’autres)',
      'Filtre par genre',
      'Filtre par durée du set',
      'Modes : populaires, pépites cachées et sets de niche'
    ],
    ui: {
      numberLocale: 'fr-FR',
      modes: { any: ['Tous', ''], popular: ['Populaires', 'les sets les plus vus'], gems: ['Pépites cachées', 'des sets sous-estimés'], deep: ['Sets de niche', 'à découvrir avant tout le monde'] },
      lengths: { short: 'Moins de 45 min', hour: '45–75 min', long: 'Plus de 75 min' },
      allSets: 'les {n} sets',
      sets: '{n} sets',
      sources: '{n} sources',
      untagged: 'sans étiquette',
      all: 'Tous',
      more: '+{n} de plus',
      fewer: 'Afficher moins',
      moreLabel: 'Afficher {n} de plus, {total} au total',
      fewerLabel: 'Afficher moins, {total} au total',
      pickMe: 'Lancer un set',
      pickAnother: 'Un autre set',
      nothingMatches: 'Aucun résultat, élargissez le filtre',
      loadFailed: 'Le catalogue n’a pas pu se charger, rechargez la page',
      views: '{n} vues',
      keySave: 'Garder',
      keySaved: 'Gardé',
      emptySaved: 'Rien d’enregistré pour l’instant. Appuyez sur Garder, ou S, pendant qu’un set joue.',
      emptyRecent: 'Rien d’écouté pour l’instant.',
      remove: 'Retirer {name} des sets enregistrés',
      onAir: 'À l’antenne',
      tuning: 'Réglage',
      paused: 'En pause',
      ended: 'Terminé',
      noSignal: 'Pas de signal',
      tapToStart: 'Touchez l’image pour lancer le set',
      unavailable: 'Ce set n’est plus sur YouTube. On en choisit un autre…',
      linkCopied: 'Lien copié',
      savedToast: 'Gardé dans votre bac',
      volume: 'Volume {n}',
      muted: 'Son coupé',
      nowPlaying: 'En lecture : {name}'
    }
  };
}
