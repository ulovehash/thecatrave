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
  }
};

export const defaultLang = 'en';
export const languages = Object.keys(locales);

export function t(lang = defaultLang) {
  return { ...locales[defaultLang], ...(locales[lang] || {}) };
}
