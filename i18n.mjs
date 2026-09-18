// Every string the shared components put on a page in their own voice, in one
// place per language.
//
// The site was English-only until September 2026. The German pages exist
// because the demand does: measured across the 26 guide seeds, Germany carries
// 125,000 searches a month and 46,490 traffic potential against 102,200 /
// 14,360 for France and 53,440 / 25,350 for Spain (TRANSLATION-RESEARCH.md).
//
// A page's own editorial copy never comes from here. This file holds only the
// chrome: navigation, contents, author card, the Bandcamp call to action, the
// footer and the labels the components write themselves. Editorial text lives
// in the draft and the page's content module, which is where a translator can
// see it in context.
//
// `lang` is the page's language tag. Anything not listed falls back to English
// rather than printing an empty string, because a missing translation should
// look like untranslated English, not like a broken page.

export const locales = {
  en: {
    htmlLang: 'en',
    inLanguage: 'en-GB',
    dir: '/',
    skipLink: 'Skip to content',
    navArticles: 'Articles',
    navSelector: 'Selector',
    articlesPath: '/articles',
    homeLabel: 'thecatrave home',
    socialsLabel: 'Listen and follow',
    primaryNavLabel: 'Primary navigation',
    contents: 'Contents',
    updated: 'Updated',
    readingTime: minutes => `${minutes} min read`,
    essentialListening: 'Essential listening',
    faqTitle: 'Frequently asked questions.',
    sourcesTitle: 'Sources.',
    readNextTitle: 'Read next.',
    readNextKicker: 'Continue reading',
    authorTitle: 'Article by thecatrave',
    authorBio: 'Breakbeat, bass and rave DJ, producer and selector. Born in Eastern Europe, shaped by years in Berlin and Barcelona, and by raving around the world.',
    authorPortraitAlt: 'thecatrave as a child in front of an Eastern European apartment block',
    authorLinksLabel: 'Author links',
    supportTitle: 'Support my music on Bandcamp.',
    supportButton: 'Support ↗',
    promoTitle: "Don't know what to listen to?",
    promoBody: channels => `Press one button, get a full DJ set. From Boiler Room, NTS, HÖR${channels}.`,
    promoMore: count => ` and ${count} more channels`,
    promoCta: 'Get a set →',
    promoDismiss: 'Dismiss this message',
    promoLabel: 'The Selector',
    footerNavLabel: 'Footer navigation',
    footerHome: 'Home',
    footerAllArticles: 'All articles',
    footerListen: 'Listen',
    footerFollow: 'Follow',
    footerTop: 'Back to top ↑',
    ownSetKicker: 'A DJ mix by thecatrave'
  },
  de: {
    htmlLang: 'de',
    inLanguage: 'de-DE',
    dir: '/de/',
    skipLink: 'Zum Inhalt springen',
    navArticles: 'Artikel',
    navSelector: 'Selector',
    articlesPath: '/de/artikel',
    homeLabel: 'thecatrave Startseite',
    socialsLabel: 'Hören und folgen',
    primaryNavLabel: 'Hauptnavigation',
    contents: 'Inhalt',
    updated: 'Aktualisiert',
    readingTime: minutes => `${minutes} Min. Lesezeit`,
    // The German counterpart of the site-wide "Essential listening" label. One
    // label per language, as in SITE-COMPONENTS.md: no parallel concepts.
    essentialListening: 'Zum Reinhören',
    faqTitle: 'Häufige Fragen.',
    sourcesTitle: 'Quellen.',
    readNextTitle: 'Weiterlesen.',
    readNextKicker: 'Mehr auf thecatrave',
    authorTitle: 'Ein Artikel von thecatrave',
    authorBio: 'DJ, Produzent und Selector zwischen Breakbeat, Bass und Rave. Aufgewachsen in Osteuropa, geprägt von Jahren in Berlin und Barcelona und vom Raven rund um die Welt.',
    authorPortraitAlt: 'thecatrave als Kind vor einem osteuropäischen Plattenbau',
    authorLinksLabel: 'Links zum Autor',
    supportTitle: 'Unterstütze meine Musik auf Bandcamp.',
    supportButton: 'Unterstützen ↗',
    promoTitle: 'Keine Ahnung, was du hören sollst?',
    promoBody: channels => `Ein Klick, ein kompletter DJ-Set. Von Boiler Room, NTS, HÖR${channels}.`,
    promoMore: count => ` und ${count} weiteren Kanälen`,
    promoCta: 'Set holen →',
    promoDismiss: 'Diesen Hinweis schließen',
    promoLabel: 'Der Selector',
    footerNavLabel: 'Fußzeilen-Navigation',
    footerHome: 'Startseite',
    footerAllArticles: 'Alle Artikel',
    footerListen: 'Hören',
    footerFollow: 'Folgen',
    footerTop: 'Nach oben ↑',
    ownSetKicker: 'Ein DJ-Mix von thecatrave'
  },
  fr: {
    htmlLang: 'fr',
    inLanguage: 'fr-FR',
    dir: '/fr/',
    skipLink: 'Aller au contenu',
    navArticles: 'Articles',
    navSelector: 'Selector',
    articlesPath: '/fr/articles',
    homeLabel: 'Accueil thecatrave',
    socialsLabel: 'Écouter et suivre',
    primaryNavLabel: 'Navigation principale',
    contents: 'Sommaire',
    updated: 'Mis à jour le',
    readingTime: minutes => `${minutes} min de lecture`,
    // The French counterpart of the site-wide "Essential listening" label.
    essentialListening: 'À écouter',
    faqTitle: 'Questions fréquentes.',
    sourcesTitle: 'Sources.',
    readNextTitle: 'À lire ensuite.',
    readNextKicker: 'Continuer la lecture',
    authorTitle: 'Un article de thecatrave',
    authorBio: 'DJ, producteur et sélecteur entre breakbeat, bass et rave. Né en Europe de l’Est, façonné par des années à Berlin et à Barcelone, et par des raves partout dans le monde.',
    authorPortraitAlt: 'thecatrave enfant devant un immeuble d’Europe de l’Est',
    authorLinksLabel: 'Liens de l’auteur',
    supportTitle: 'Soutenez ma musique sur Bandcamp.',
    supportButton: 'Soutenir ↗',
    promoTitle: 'Vous ne savez pas quoi écouter ?',
    promoBody: channels => `Un clic, un DJ set complet. De Boiler Room, NTS, HÖR${channels}.`,
    promoMore: count => ` et ${count} autres chaînes`,
    promoCta: 'Lancer un set →',
    promoDismiss: 'Fermer ce message',
    promoLabel: 'Le Selector',
    footerNavLabel: 'Navigation du pied de page',
    footerHome: 'Accueil',
    footerAllArticles: 'Tous les articles',
    footerListen: 'Écouter',
    footerFollow: 'Suivre',
    footerTop: 'Haut de page ↑',
    ownSetKicker: 'Un DJ mix de thecatrave'
  }
};

export const defaultLang = 'en';
export const languages = Object.keys(locales);

export function t(lang = defaultLang) {
  return { ...locales[defaultLang], ...(locales[lang] || {}) };
}
