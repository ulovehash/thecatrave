// The French Selector page (/fr/selector): the English copy in
// build-selector.mjs, translated, plus the words the runtime writes itself
// (`ui`, read by selector-runtime.js from the #sel-i18n block).
//
// Two sentences differ from the English on purpose. The English says "Nothing
// is saved" and "no history kept", which stopped being true when Saved and
// Recently played shipped (defects.json, selector-nothing-saved-copy). The
// French says what the tool does now: nothing is personalised, and what is
// saved stays in the browser.
//
// Internal links go to the French guides that exist (drum and bass, dubstep);
// jungle and breakbeat have no French page yet.

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
<p>Trouver un bon DJ set n’a jamais été la difficulté. ${channels} chaînes en publient plus que quiconque ne pourrait en écouter, et c’est justement le problème : avec ${escapeHtml(setCount)} sets devant vous, en choisir un devient une petite corvée, et on finit par ne rien regarder.</p>
<p>Le Selector est fait pour ça. Appuyez sur le bouton et il lance un set au hasard parmi ${escapeHtml(countLine)}. Appuyez encore pour un autre. Rien n’est personnalisé, et ce que vous enregistrez reste dans votre navigateur.</p>
<p>Un DJ set, c’est un mix continu joué par un ou une DJ, en général une heure ou plus, enregistré en direct dans un club, un studio de radio ou sous une tente de festival. Ce n’est pas une playlist : l’ordre, les transitions et le rythme sont la performance elle-même.</p>
<p>Quatre filtres réduisent la sélection avant le tirage, et <strong>Mode</strong> est celui qui change le caractère du résultat. Il décide de la taille du public qu’un set doit déjà avoir.</p>
<ul>
  <li><strong>Tous</strong> mélange tout le catalogue, les ${escapeHtml(setCount)} sets, sans aucune pondération.</li>
  <li><strong>Populaires</strong> s’en tient aux sets qui ont déjà trouvé un large public. C’est le mode du best-of : un set ${escapeHtml(broadcasters[0])} populaire, un set techno populaire, quelque chose à lancer en sachant que beaucoup de gens l’ont apprécié.</li>
  <li><strong>Pépites cachées</strong> regarde à quel point un set est aimé par rapport au nombre de gens qui l’ont vraiment vu. Vous obtenez ceux qu’un petit public a très bien notés, plutôt que ceux qui ont simplement été mis en avant.</li>
  <li><strong>Sets de niche</strong> est l’autre extrémité de Populaires : la partie calme du catalogue, où la plupart des artistes n’ont encore presque aucun public. À essayer si vous aimez arriver avant tout le monde.</li>
</ul>
<p>Les trois autres filtres se combinent avec n’importe quel mode. <strong>Source</strong> limite la sélection à une chaîne : vous pouvez tirer un set ${escapeHtml(broadcasters[0])} au hasard, un set ${escapeHtml(broadcasters[1] || 'HÖR')}, ou un set de ${escapeHtml(broadcasters.slice(2, 6).join(', '))}. <strong>Genre</strong> couvre la house, la techno, la drum and bass, le dubstep, le UK garage, la jungle, l’electro, le breakbeat, le hip-hop et le disco quand un set est étiqueté. <strong>Durée</strong> répond à l’autre question que vous vous posez vraiment, celle du temps dont vous disposez : l’essentiel du catalogue dure une heure de radio, alors le filtre sert surtout aux deux extrêmes, les sets de moins de 45 minutes et ceux qui dépassent une heure et quart.</p>
<p>La sélection réunit les longues vidéos de ${escapeHtml(channelList)} : de vrais sets et non des extraits, mis à jour chaque semaine. Pour l’histoire derrière la musique, lisez le <a href="/fr/drum-and-bass">guide de la drum and bass</a> et le <a href="/fr/dubstep">guide du dubstep</a>.</p>
`.trim(),
    faqTitle: 'Questions sur la découverte musicale.',
    faqItems: [
      {
        question: 'Comment découvrir de la nouvelle musique sans algorithme ?',
        answer: `En arrêtant de choisir. Un algorithme vous sert davantage de ce que vous avez déjà écouté, alors la sortie passe par une source sur laquelle il n’a aucune prise. Le Selector tire un DJ set au hasard parmi ${channels} chaînes, et les modes décident à quel point vous sortez des sentiers battus : du côté des sets très vus, du côté calme, ou vers les sets aimés sans commune mesure avec le nombre de gens qui les ont trouvés.`,
        answerHtml: `<p>En arrêtant de choisir. Un algorithme vous sert davantage de ce que vous avez déjà écouté, alors la sortie passe par une source sur laquelle il n’a aucune prise. Le Selector tire un DJ set au hasard parmi ${channels} chaînes, et les modes décident à quel point vous sortez des sentiers battus : du côté des sets très vus, du côté calme, ou vers les sets aimés sans commune mesure avec le nombre de gens qui les ont trouvés.</p>`
      },
      {
        question: 'Quelle est la meilleure façon de trouver de la musique qu’on n’a jamais entendue ?',
        answer: 'Écouter un ou une DJ que vous ne connaissez pas. Un set, c’est une heure de morceaux que quelqu’un a mis des années à sélectionner, alors un bon set vous fait découvrir plus de musique qu’un après-midi à zapper entre des singles. Réglez le Selector sur Sets de niche et il ne jouera que la partie calme du catalogue, là où se trouvent les sets que presque personne n’a trouvés.',
        answerHtml: '<p>Écouter un ou une DJ que vous ne connaissez pas. Un set, c’est une heure de morceaux que quelqu’un a mis des années à sélectionner, alors un bon set vous fait découvrir plus de musique qu’un après-midi à zapper entre des singles. Réglez le Selector sur <strong>Sets de niche</strong> et il ne jouera que la partie calme du catalogue, là où se trouvent les sets que presque personne n’a trouvés.</p>'
      },
      {
        question: 'Comment le Selector choisit-il un set ?',
        answer: `Vous appuyez sur un bouton et il lance un DJ set tiré au hasard dans son catalogue de ${countLine}. Appuyez encore pour un autre. Aucun algorithme n’apprend vos goûts, et la liste des sets écoutés récemment reste dans votre navigateur.`,
        answerHtml: `<p>Vous appuyez sur un bouton et il lance un DJ set tiré au hasard dans son catalogue de ${escapeHtml(countLine)}. Appuyez encore pour un autre. Aucun algorithme n’apprend vos goûts, et la liste des sets écoutés récemment reste dans votre navigateur.</p>`
      },
      {
        question: 'Puis-je tomber sur un set Boiler Room au hasard ?',
        answer: 'Oui. Dans le filtre Source, choisissez Boiler Room, puis appuyez sur le bouton pour ne tirer que des sets Boiler Room. Ça marche de la même façon pour HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle et toutes les autres chaînes de la liste.',
        answerHtml: '<p>Oui. Dans le filtre Source, choisissez Boiler Room, puis appuyez sur le bouton pour ne tirer que des sets Boiler Room. Ça marche de la même façon pour HÖR, NTS, Beatport, The Lot Radio, Rinse FM, Kiosk Radio, Cercle et toutes les autres chaînes de la liste.</p>'
      },
      {
        question: 'Comment trouver les meilleurs sets ou les plus populaires ?',
        answer: 'Choisissez le mode Populaires. Il limite la sélection aux sets qui ont déjà un large public, donc chaque résultat a été vu et apprécié par beaucoup de monde. Combinez-le avec un filtre Source ou Genre pour un set techno populaire, un set HÖR populaire, et ainsi de suite. Pépites cachées fait l’inverse : ce mode favorise les sets aimés bien au-delà du nombre de gens qui les ont vus, pour vous donner ce qu’un petit public a très bien noté plutôt que ce qui a simplement été mis en avant. Sets de niche va vers la partie calme du catalogue, où la plupart des artistes n’ont encore presque aucun public.',
        answerHtml: '<p>Choisissez le mode <strong>Populaires</strong>. Il limite la sélection aux sets qui ont déjà un large public, donc chaque résultat a été vu et apprécié par beaucoup de monde. Combinez-le avec un filtre Source ou Genre pour un set techno populaire, un set HÖR populaire, et ainsi de suite.</p><p><strong>Pépites cachées</strong> fait l’inverse : ce mode favorise les sets aimés bien au-delà du nombre de gens qui les ont vus, pour vous donner ce qu’un petit public a très bien noté plutôt que ce qui a simplement été mis en avant. <strong>Sets de niche</strong> va vers la partie calme du catalogue, où la plupart des artistes n’ont encore presque aucun public.</p>'
      },
      {
        question: 'Quelle différence entre Populaires, Pépites cachées et Sets de niche ?',
        answer: 'Tout dépend de la taille du public qu’un set a déjà. Populaires vous donne le côté très vu de ce que vous avez filtré, Sets de niche le côté calme. Pépites cachées se tient à part : ce qui compte, c’est à quel point un set est aimé par rapport au nombre de gens qui l’ont vu, donc un set peut être une pépite qu’il ait dix mille vues ou un million. Tous supprime toute pondération et mélange tout le catalogue.',
        answerHtml: '<p>Tout dépend de la taille du public qu’un set a déjà. <strong>Populaires</strong> vous donne le côté très vu de ce que vous avez filtré, <strong>Sets de niche</strong> le côté calme. <strong>Pépites cachées</strong> se tient à part : ce qui compte, c’est à quel point un set est aimé par rapport au nombre de gens qui l’ont vu, donc un set peut être une pépite qu’il ait dix mille vues ou un million. <strong>Tous</strong> supprime toute pondération et mélange tout le catalogue.</p>'
      },
      {
        question: 'De quelles chaînes viennent les sets ?',
        answer: `${channelList}. Ce sont toutes des chaînes YouTube publiques, et le catalogue est mis à jour chaque semaine.`,
        answerHtml: `<p>${escapeHtml(channelList)}. Ce sont toutes des chaînes YouTube publiques, et le catalogue est mis à jour chaque semaine.</p>`
      },
      {
        question: 'Puis-je filtrer par genre ?',
        answer: 'Oui, quand un set est étiqueté. La ligne Genre couvre la house, la techno, la drum and bass, le dubstep, le UK garage, la jungle, l’electro, le breakbeat, le hip-hop, le disco et d’autres. Les sets qui n’ont pas pu être étiquetés sont regroupés sous « sans étiquette », que vous pouvez inclure ou exclure.',
        answerHtml: '<p>Oui, quand un set est étiqueté. La ligne Genre couvre la house, la techno, la drum and bass, le dubstep, le UK garage, la jungle, l’electro, le breakbeat, le hip-hop, le disco et d’autres. Les sets qui n’ont pas pu être étiquetés sont regroupés sous « sans étiquette », que vous pouvez inclure ou exclure.</p>'
      },
      {
        question: 'Les sets se lisent-ils ici ou sur YouTube ?',
        answer: 'Chaque set tiré est intégré sur cette page, avec un lien pour le regarder sur YouTube. Rien n’est téléchargé, et il n’y a ni compte, ni inscription, ni installation.',
        answerHtml: '<p>Chaque set tiré est intégré sur cette page, avec un lien pour le regarder sur YouTube. Rien n’est téléchargé, et il n’y a ni compte, ni inscription, ni installation.</p>'
      }
    ],
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
      stillBuilding: 'Le catalogue est encore en construction',
      loadFailed: 'Le catalogue n’a pas pu se charger, rechargez la page',
      year: 'Année',
      length: 'Durée',
      views: 'Vues',
      watch: 'Regarder sur YouTube ↗',
      save: '♡ Enregistrer',
      saved: '♥ Enregistré',
      emptySaved: 'Rien d’enregistré pour l’instant. Appuyez sur ♡ Enregistrer sous un set pour le garder ici.',
      emptyRecent: 'Rien d’écouté pour l’instant.',
      remove: 'Retirer {name} des sets enregistrés'
    }
  };
}
