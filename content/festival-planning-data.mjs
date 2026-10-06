const maps = {
  monegros: 'https://www.google.com/maps/search/?api=1&query=Monegros+Desert+Festival+N-II+km+416+Fraga',
  arc: 'https://www.google.com/maps/search/?api=1&query=Union+Park+Chicago',
  airbeat: 'https://www.google.com/maps/search/?api=1&query=Airbeat+One+Festival+Neustadt-Glewe',
  exit: 'https://www.google.com/maps/search/?api=1&query=Petrovaradin+Fortress+Novi+Sad'
};

const data = {
  de: {
    monegros: {
      festivalName:'Monegros Desert Festival 2027',
      intro:'Monegros ist ein 22-stündiges Event an einem abgelegenen Wüstenort, kein Stadtfestival mit kurzem Heimweg. Sichere zuerst die Rückfahrt, kalkuliere dann das bargeldlose Gelände und nimm nur mit, was die offizielle Taschenkontrolle zulässt.',
      ticketIntro:'Aktuelle Angaben des offiziellen Verkäufers für den 31. Juli 2027. Spätere Kontingente können teurer werden.',
      ticketRows:[['Allgemeiner Eintritt','Personalisiertes Ticket; Ausweis muss übereinstimmen','ab 83 €'],['VIP-Zelt','Bis fünf Personen; Preis pro Person, ohne Gebühr','ab 523,95 € p. P.'],['Namensänderung','Aktuelle Gebühr laut FAQ','20 €'],['Mehrwegbecher','Beim ersten Getränk erforderlich','2 €']],
      ticketNote:'Kaufe nur über Enterticket oder den offiziellen RebelTickets-Wiederverkauf. Wegen schwachen Mobilfunks empfiehlt der Veranstalter einen Ausdruck.',
      routes:[['Offizieller Hin- und Rückbus','Buche die Fahrt ab einer angekündigten spanischen Stadt. Rückbusse starten ab 08:00 Uhr und fahren erst los, wenn sie voll sind.','Offizielle Anreise','https://monegrosfestival.com/en/how-to-arrive'],['Zug plus organisierter Bus','Am Festivaltor gibt es keinen brauchbaren Bahnhof. Fahre zur Abfahrtsstadt auf deinem Busticket und nutze den gebuchten Bus für die letzte Etappe.'],['Auto über N-II, Kilometer 416','Folge der Beschilderung für deine Anfahrtsrichtung. Bei der Abreise warnt der Veranstalter vor mehrstündigen Staus und gibt Bussen Vorrang.','Festivalgelände auf Google Maps',maps.monegros]],
      routeNote:'Die Abfahrtsorte werden später veröffentlicht und per E-Mail an Buskunden geschickt. Ein Hotel in Fraga ist keine Garantie für einen einfachen Transfer.',
      accommodation:['Es gibt keinen allgemeinen Festival-Campingplatz, und Zelten auf dem Parkplatz ist verboten. Nutze einen offiziellen Rückbus, einen nüchternen Fahrer oder Unterkünfte vor und nach dem Event in deiner Abfahrtsstadt.','Offizielle FAQ','https://monegrosfestival.com/en/faqs'],
      spending:['Das Gelände ist cashless. Essens- und Getränkepreise 2027 sind noch nicht veröffentlicht. Externe Speisen und Getränke sind verboten; erlaubt sind ein Energieriegel und eine leere Flasche oder Trinkblase. Trinkwasserstellen sind kostenlos.',[['Cashless-Mindestaufladung','10 €'],['Gebühr für Restguthaben-Erstattung','2 €'],['Mehrwegbecher','2 €'],['Temporärer Wiedereintritt, 00:01–04:00','25 € pro Ausgang']],'Offizielle Zahlungs- und Einlassregeln','https://monegrosfestival.com/en/faqs'],
      packing:['Ausgedrucktes Ticket, QR-Code offline und passender Lichtbildausweis','Leere Flasche oder Trinkblase bis maximal einen Liter','Sonnencreme bis 200 ml, Hut, Sonnenbrille und Fächer','Ohrstöpsel, Powerbank und leichte Schicht für den Morgen','Kleine Tasche bis 35 × 20 × 12 cm oder 10 Liter'],
      avoid:['Speisen oder Getränke von außen, außer einem erlaubten Energieriegel','Flüssigkeiten beim Einlass; Behälter müssen leer sein','Große Taschen, Stühle, Sonnenschirme, Zelte und Selfie-Sticks','Aerosole, Profikameras, Drohnen und gefährliche Gegenstände','Direkt nach Schluss loszufahren, ohne lange Staus einzuplanen'],
      rulesNote:'Monegros ist strikt ab 18. Normaler Wiedereintritt ist nicht erlaubt; zwischen 00:01 und 04:00 Uhr kostet die aktuelle Ausnahme 25 € pro Ausgang.',
      links:[['Offizielle Website','https://monegrosfestival.com/en/'],['Tickets 2027','https://www.enterticket.es/eventos/monegros-desert-festival-2027-116435'],['FAQ','https://monegrosfestival.com/en/faqs'],['Anreise','https://monegrosfestival.com/en/how-to-arrive'],['Google Maps',maps.monegros]]
    },
    arc: {
      festivalName:'ARC Music Festival',
      intro:'Union Park liegt direkt an einer barrierefreien CTA-Station und hat keine Festivalparkplätze. Unklar ist die Ausgabe 2027 selbst: Buche keine nicht stornierbare Reise, bevor Termin und Verkauf offiziell sind.',
      ticketIntro:'ARC hat Termine und Preise 2027 noch nicht veröffentlicht. Dies sind Statusangaben, keine Schätzpreise.', ticketColumns:['Pass','Aktueller Stand'],
      ticketRows:[['General Admission 2027','Termin und Verkauf nicht angekündigt','Nicht verfügbar'],['Global VIP 2027','Termin und Verkauf nicht angekündigt','Nicht verfügbar'],['ICON VIP+ 2027','Termin und Verkauf nicht angekündigt','Nicht verfügbar'],['ARC After Dark','Separate Events; Kaufzugang für Passinhaber','Separates Ticket']],
      ticketNote:'Die offizielle Seite sammelt Anmeldungen für 2027. Preise von 2026 sind kein gültiges Angebot für die nächste Ausgabe.',
      routes:[['CTA Green oder Pink Line bis Ashland','Die Station Ashland liegt an der Nordwestecke des Parks und hat einen barrierefreien Eingang.','Ashland auf Google Maps','https://www.google.com/maps/search/?api=1&query=Ashland+Green+Pink+Line+Chicago'],['CTA-Bus 9 oder 20','Bus 9 hält am Westrand. Bus 20 hält südlich des Parks und fährt direkt ab Ogilvie, nahe Union Station.'],['Vom Flughafen über Downtown','Nimm ab O’Hare die Blue Line oder ab Midway die Orange Line, steige in Green oder Pink um und fahre bis Ashland.']],
      routeNote:'ARC bietet keine Besucherparkplätze und keine offiziellen öffentlichen Parkflächen rund um Union Park. Nutze die CTA oder einen Rideshare-Absetzpunkt.',
      accommodation:['ARC hat keinen Campingplatz. Wohne an Green oder Pink Line, im West Loop oder Downtown mit einfacher CTA-Verbindung. Vergleiche beim offiziellen Hotelpartner den Endpreis und die Stornierung.','Offizielle Hotelinformationen','https://arcmusicfestival.com/faqs/'],
      spending:['ARC hat keine Speise- oder Barkarte für 2027 veröffentlicht. Das Festival ist bargeldlos, akzeptiert Karten und große Handy-Wallets und hat keine Geldautomaten.',[['Speisepreise 2027','Nicht veröffentlicht'],['Barpreise 2027','Nicht veröffentlicht'],['Wasser auffüllen','Kostenlose Stationen'],['Bargeld','Nicht akzeptiert']],'Offizielle ARC-FAQ','https://arcmusicfestival.com/faqs/'],
      packing:['Amtlicher Lichtbildausweis, der mindestens 18 Jahre belegt','Digitales Ticket vor dem Einlass gespeichert','Leere Trinkblase mit herausnehmbarem Reservoir','Sonnencreme, Regenlage und Ohrstöpsel','Kleine Tasche innerhalb 16 × 16 × 8 Zoll'],
      avoid:['Rucksäcke oder größere Taschen als 16 × 16 × 8 Zoll','Externe Speisen oder Getränke ohne dokumentierten Bedarf','Glas- oder Metallbehälter, Kühlboxen, Stühle und Schirme','Am selben Tag hinauszugehen und wieder hineinzugehen','Ohne bestätigten privaten Stellplatz zum Union Park zu fahren'],
      rulesNote:'ARC ist ab 18, verlangt einen amtlichen Lichtbildausweis und erlaubt einen Eintritt pro Tag. Die aktuellen Öffnungszeiten gehören zur angekündigten Ausgabe und müssen für 2027 neu geprüft werden.',
      links:[['Offizielle Website','https://arcmusicfestival.com/'],['Tickets','https://arcmusicfestival.com/tickets/'],['FAQ und Anreise','https://arcmusicfestival.com/faqs/'],['Mitbringen','https://arcmusicfestival.com/whattobring/'],['Union Park auf Google Maps',maps.arc]]
    },
    airbeat: {
      festivalName:'Airbeat One 2027',
      intro:'Airbeat One kombiniert Festivalticket, einen bestimmten Campingbereich und für Fahrer ein separates Fahrzeugprodukt. Gleiche alle drei vor dem Kauf ab, denn ein Camping-Ticket öffnet keinen anderen Bereich.',
      ticketIntro:'Die offizielle Ticketseite zeigt derzeit keine öffentlichen Preise. Prüfe den Live-Shop und verwende keine Preise älterer Ausgaben.', ticketColumns:['Produkt','Aktueller Stand'],
      ticketRows:[['Festivalticket','7.–11. Juli 2027','Live-Shop prüfen'],['Camping-Ticket','Richtigen Campingplatz wählen','Separates Produkt'],['Auto-Vignette','Passend zu Camping oder Parkplatz','Separates Produkt'],['Flughafen- oder Städtebus','Berlin, Hamburg und ausgewählte Routen','Kostenpflichtiges Extra']],
      ticketNote:'Der Buchungsleitfaden verlangt kompatible Festival-, Camping- und Fahrzeugprodukte. Für manche Parkprodukte gibt es keinen Verkauf vor Ort.',
      routes:[['Zug bis Neustadt-Glewe, dann Gratis-Shuttle','Die gelbe und grüne Linie verbinden den Bahnhof mit Süd- und Nordeingang.','Bahnhof auf Google Maps','https://www.google.com/maps/search/?api=1&query=Bahnhof+Neustadt-Glewe'],['Fernzug bis Ludwigslust','Ludwigslust hat mehr Fernverbindungen. Von dort listet Airbeat One einen kostenpflichtigen Anschlussbus.'],['Flughafenbus ab Berlin oder Hamburg','Kostenpflichtige Festivalbusse fahren ab BER und Hamburg Airport. Buche die passende Rückfahrt im offiziellen Shop.','Offizielle Flughafen-Anreise','https://airbeat-one.de/en/getting-there/airplane/']],
      routeNote:'Die kostenlosen Orts-Shuttles haben linienabhängige Zeiten. Nach Mitternacht fährt die violette Linie nur noch Richtung Tagesparkplatz P5.',
      accommodation:['Die meisten Gäste campen am Flugplatz, doch der Zutritt gilt nur für die gebuchte Zone. Hotelgäste brauchen einen geplanten Shuttle-, Taxi- oder Bahnanschluss.','Offizielle Buchungskombinationen','https://airbeat-one.de/en/how-to-book/'],
      spending:['Eine vollständige Preisübersicht für 2027 fehlt. Auf den Campingplatz dürfen Speisen und Getränke ohne Mengenlimit, aber ohne Glas. Im Festivalbereich sind mitgebrachte Speisen und Getränke verboten.',[['Orts-Shuttle','Kostenlos'],['Camping-Foodcourt','Preise nicht veröffentlicht'],['24-Stunden-Automaten','Vorhanden'],['Nächste Supermärkte','etwa 1 km']],'Offizielle Camping-Verpflegung','https://customerservice.airbeat-one.de/hc/en-150/articles/115004834245-food-drinks-at-the-camp-site'],
      packing:['Passende Tickets für Festival, Camping und Fahrzeug','Ausweis sowie Bahn- oder Busbuchung offline','Zelt, Schlafsachen, Ohrstöpsel und Powerbank','Camping-Verpflegung in Behältern ohne Glas','Faltflasche und Arena-Tasche höchstens DIN A4'],
      avoid:['Glas auf dem gesamten Flugplatz','Arena-Taschen größer als DIN A4 oder Rucksäcke','Speisen, Getränke, Dosen oder harte Flaschen in der Arena','Offenes Feuer; Grillregeln können wetterbedingt verschärft werden','Anreise ohne passende vorab gebuchte Auto-Vignette'],
      rulesNote:'Camping erlaubt Verpflegung, aber kein Glas. In der Arena gelten strengere Regeln. Prüfe Wetterregeln für Gas und Grillen kurz vor Abfahrt.',
      links:[['Offizielle Website','https://airbeat-one.de/en/'],['Tickets 2027','https://airbeat-one.de/en/tickets/'],['Buchungsleitfaden','https://airbeat-one.de/en/how-to-book/'],['Anreise und Shuttle','https://airbeat-one.de/en/getting-there/'],['Flugplatz auf Google Maps',maps.airbeat]]
    },
    exit: {
      festivalName:'EXIT Global Tour',
      intro:'Für 2027 ist kein EXIT Festival an der Festung Petrovaradin bestätigt. EXIT veröffentlicht nun getrennte Events nach Zielort. Wähle zuerst das konkrete Event und nutze dessen Tickets, Ort und Reisehinweise statt alter Novi-Sad-Tipps.',
      ticketIntro:'Aktueller offizieller Stand. Preise und Anreise hängen vom einzelnen Event ab; es gibt keinen gemeinsamen EXIT-Pass.', ticketColumns:['Event oder Produkt','Aktueller Stand'],
      ticketRows:[['EXIT Festival Novi Sad 2027','Keine Rückkehr zur Festung angekündigt','Nicht im Verkauf'],['EXIT Global Tour','Getrennte Events nach Zielort','Pro Event'],['Starlight Festival, Ägypten','8.–11. Oktober 2026 in Gizeh','Event-Link prüfen'],['EXIT2Montenegro','Termine 2026 für Ulcinj und Budva','Event-Link prüfen']],
      ticketNote:'Folge von der offiziellen Global-Tour-Seite zum benannten Event und prüfe Jahr, Land und Ort vor jeder nicht stornierbaren Buchung.',
      routes:[['Zuerst Event und Land wählen','Öffne die Global-Tour-Seite und gleiche Termin und Ort mit dem Ticketshop ab.','Offizielle EXIT Global Tour','https://www.exitfest.org/global-tour'],['Alte Novi-Sad-Anreise ignorieren','Wegbeschreibungen zur Festung, Unterkünfte in Novi Sad und Campinginfos gelten für 2001–2025, nicht automatisch für neue Events.'],['Route vom Eventort aufbauen','Nutze die Ortsangabe des konkreten Events und prüfe Shuttle oder Nahverkehr beim lokalen Betreiber.']],
      routeNote:'Da die Tour mehrere Länder umfasst, gibt es keinen ehrlichen gemeinsamen Shuttle-, Flughafen- oder Kartenlink.',
      accommodation:['Unterkunft ist zielortspezifisch. Buche nicht Novi Sad für ein Event in Montenegro oder Ägypten und setze keinen Campingplatz voraus.','Aktuelles Event wählen','https://www.exitfest.org/global-tour'],
      spending:['EXIT veröffentlicht keine netzwerkweiten Preise. Währung, Zahlung, Wasser und Verpflegung hängen vom gewählten Event und Land ab.',[['Preise Novi Sad 2027','Nicht verfügbar'],['Tour-Ticket','Je nach Event'],['Essen und Bar','Beim Event prüfen'],['Nahverkehr','Beim lokalen Betreiber prüfen']],'Offizielle Tour und Tickets','https://www.exitfest.org/global-tour'],
      packing:['Reisepass oder akzeptierter Ausweis für das Zielland','Richtiges Eventticket offline gespeichert','Reiseversicherung und nötige Einreisedokumente','Wettergerechte Kleidung, Ohrstöpsel und Powerbank','Vom Event bestätigte lokale Zahlungsart'],
      avoid:['Inoffizielle „Novi Sad 2027“-Tickets','Eine Festungskarte von 2025 für ein anderes Land','Anzunehmen, ein Ticket decke mehrere Tourziele ab','Nicht stornierbare Reise vor Ortsbestätigung','Alte Camping-, Taschen- oder Alkoholregeln zu übertragen'],
      rulesNote:'Prüfe die Regeln beim ausgewählten Event. Alter, Taschen, Wiedereintritt, Wasser und Verbote lassen sich nicht sicher von der früheren Festungsausgabe übertragen.',
      links:[['Offizielle EXIT-Website','https://www.exitfest.org/'],['Global Tour und Tickets','https://www.exitfest.org/global-tour'],['EXIT-Geschichte','https://www.exitfest.org/en/about-us'],['Festung Petrovaradin auf Google Maps, historischer Ort',maps.exit]]
    }
  }
};

data.fr = JSON.parse(JSON.stringify(data.de));

const fr = data.fr;
fr.monegros = {...fr.monegros,
  intro:'Monegros dure 22 heures sur un site désertique isolé. Réservez le retour avant le billet, prévoyez le paiement cashless et n’emportez que ce que le contrôle officiel autorise.',
  ticketIntro:'Informations actuelles du vendeur officiel pour le 31 juillet 2027. Les tarifs peuvent augmenter selon les paliers.', ticketRows:[['Entrée générale','Billet nominatif; pièce d’identité concordante','à partir de 83 €'],['Tente VIP','Jusqu’à cinq personnes; prix par personne, hors frais','à partir de 523,95 € par pers.'],['Changement de nom','Frais actuels indiqués dans la FAQ','20 €'],['Gobelet réutilisable','Obligatoire au premier verre','2 €']],
  ticketNote:'Achetez uniquement via Enterticket ou la revente officielle RebelTickets. L’organisateur conseille d’imprimer le billet car le réseau mobile peut être faible.',
  routes:[['Car officiel aller-retour','Réservez le trajet depuis une ville espagnole annoncée. Les cars retour partent à partir de 08 h 00, uniquement lorsqu’ils sont pleins.','Transport officiel','https://monegrosfestival.com/en/how-to-arrive'],['Train puis car organisé','Il n’existe pas de gare utile à l’entrée. Rejoignez la ville indiquée sur votre billet de car pour le dernier tronçon.'],['Voiture par la N-II, kilomètre 416','Suivez la signalisation correspondant à votre provenance. L’organisateur prévient que la sortie peut prendre plusieurs heures et donne la priorité aux cars.','Site sur Google Maps',maps.monegros]],
  routeNote:'Les points de départ sont publiés plus tard et envoyés par e-mail aux détenteurs d’un billet de bus. Un hôtel à Fraga ne garantit pas un transfert simple.',
  accommodation:['Il n’existe pas de camping général et camper sur le parking est interdit. Utilisez un car retour officiel, un conducteur sobre ou un hébergement avant et après l’événement dans votre ville de départ.','FAQ officielle','https://monegrosfestival.com/en/faqs'],
  spending:['Le site fonctionne sans espèces. Les prix 2027 de la nourriture et des boissons ne sont pas publiés. La nourriture et les boissons extérieures sont interdites; une barre énergétique et une bouteille ou poche vide sont autorisées.',[['Recharge cashless minimale','10 €'],['Frais de remboursement du solde','2 €'],['Gobelet réutilisable','2 €'],['Réadmission temporaire, 00 h 01–04 h 00','25 € par sortie']],'Paiement et accès officiels','https://monegrosfestival.com/en/faqs'],
  links:[['Site officiel','https://monegrosfestival.com/en/'],['Billets 2027','https://www.enterticket.es/eventos/monegros-desert-festival-2027-116435'],['FAQ','https://monegrosfestival.com/en/faqs'],['Transport','https://monegrosfestival.com/en/how-to-arrive'],['Google Maps',maps.monegros]],
  rulesNote:'Monegros est strictement réservé aux 18 ans et plus. La réadmission normale est interdite; l’exception actuelle coûte 25 € par sortie entre 00 h 01 et 04 h 00.',
  packing:['Billet imprimé, QR hors ligne et pièce d’identité correspondante','Bouteille ou poche à eau vide, un litre maximum','Crème solaire jusqu’à 200 ml, chapeau, lunettes et éventail','Bouchons d’oreille, batterie externe et couche légère','Petit sac de 35 × 20 × 12 cm ou 10 litres maximum'],
  avoid:['Nourriture ou boisson extérieure, sauf une barre énergétique','Liquides à l’entrée; les contenants doivent être vides','Grands sacs, chaises, parasols, tentes et perches à selfie','Aérosols, appareils professionnels, drones et objets dangereux','Partir en voiture à la fermeture sans prévoir plusieurs heures de bouchons']
};
fr.arc = {...fr.arc,
  intro:'Union Park se trouve près d’une station CTA accessible et ne propose aucun parking festivalier. L’édition 2027 reste incertaine: ne réservez rien de non remboursable avant l’annonce officielle des dates et de la vente.',
  ticketIntro:'ARC n’a pas annoncé les dates ni les prix 2027. Il s’agit de statuts, pas d’estimations.', ticketColumns:['Pass','Statut actuel'],
  ticketRows:[['Admission générale 2027','Dates et vente non annoncées','Indisponible'],['Global VIP 2027','Dates et vente non annoncées','Indisponible'],['ICON VIP+ 2027','Dates et vente non annoncées','Indisponible'],['ARC After Dark','Événements séparés; accès à la vente pour les détenteurs','Billet séparé']],
  ticketNote:'Le site officiel recueille les inscriptions pour 2027. Les prix 2026 ne constituent pas un tarif valable pour la prochaine édition.',
  routes:[['CTA Green ou Pink Line jusqu’à Ashland','La station Ashland se trouve à l’angle nord-ouest du parc et possède une entrée accessible.','Station Ashland sur Google Maps','https://www.google.com/maps/search/?api=1&query=Ashland+Green+Pink+Line+Chicago'],['Bus CTA 9 ou 20','Le bus 9 longe le côté ouest. Le 20 s’arrête au sud et relie directement Ogilvie, près d’Union Station.'],['Depuis l’aéroport via le centre','Prenez la Blue Line depuis O’Hare ou l’Orange Line depuis Midway, puis Green ou Pink jusqu’à Ashland.']],
  routeNote:'ARC ne fournit aucun parking visiteur ni parking public agréé autour d’Union Park. Utilisez le CTA ou une zone de dépose VTC.',
  accommodation:['ARC n’a pas de camping. Logez près des lignes Green ou Pink, dans le West Loop ou au centre avec une liaison CTA simple. Comparez le prix final et les conditions d’annulation du partenaire officiel.','Informations hôtels officielles','https://arcmusicfestival.com/faqs/'],
  spending:['ARC n’a publié aucun menu 2027. Le festival est sans espèces, accepte cartes et portefeuilles mobiles et ne possède aucun distributeur automatique.',[['Prix nourriture 2027','Non publiés'],['Prix bar 2027','Non publiés'],['Remplissage d’eau','Points gratuits'],['Espèces','Non acceptées']],'FAQ officielle ARC','https://arcmusicfestival.com/faqs/'],
  links:[['Site officiel','https://arcmusicfestival.com/'],['Billets','https://arcmusicfestival.com/tickets/'],['FAQ et transport','https://arcmusicfestival.com/faqs/'],['Objets autorisés','https://arcmusicfestival.com/whattobring/'],['Union Park sur Google Maps',maps.arc]],
  rulesNote:'ARC est réservé aux 18 ans et plus, exige une pièce d’identité officielle et n’autorise qu’une entrée par jour. Les horaires devront être revérifiés pour 2027.',
  packing:['Pièce d’identité officielle prouvant l’âge de 18 ans','Billet numérique enregistré avant l’entrée','Poche à eau vide et démontable','Crème solaire, vêtement de pluie et bouchons d’oreille','Petit sac dans la limite de 16 × 16 × 8 pouces'],
  avoid:['Sacs à dos ou sacs dépassant 16 × 16 × 8 pouces','Nourriture ou boisson extérieure sans besoin médical documenté','Contenants en verre ou métal, glacières, chaises et parapluies','Sortir en pensant pouvoir revenir le même jour','Venir en voiture sans stationnement privé confirmé']
};
fr.airbeat = {...fr.airbeat,
  intro:'Airbeat One combine un billet festival, une zone de camping précise et, pour les automobilistes, un produit véhicule séparé. Vérifiez les trois avant l’achat, car un billet camping ne donne pas accès aux autres zones.',
  ticketIntro:'La page officielle n’affiche actuellement aucun tarif public. Consultez la boutique en direct et n’utilisez pas les prix d’une ancienne édition.', ticketColumns:['Produit','Statut actuel'],
  ticketRows:[['Billet festival','7–11 juillet 2027','Voir la boutique'],['Billet camping','Choisir la bonne zone','Produit séparé'],['Vignette voiture','Correspondant au camping ou parking','Produit séparé'],['Navette aéroport ou ville','Berlin, Hambourg et certains trajets','Supplément payant']],
  ticketNote:'Le guide de réservation exige des produits festival, camping et véhicule compatibles. Certains parkings ne sont pas vendus sur place.',
  routes:[['Train jusqu’à Neustadt-Glewe puis navette gratuite','Les lignes jaune et verte relient la gare aux entrées sud et nord.','Gare sur Google Maps','https://www.google.com/maps/search/?api=1&query=Bahnhof+Neustadt-Glewe'],['Train grandes lignes jusqu’à Ludwigslust','Ludwigslust offre davantage de liaisons. Airbeat One indique une navette payante pour le dernier trajet.'],['Navette depuis Berlin ou Hambourg','Des cars payants partent de BER et de l’aéroport de Hambourg. Réservez le bon aller-retour dans la boutique officielle.','Trajet officiel depuis les aéroports','https://airbeat-one.de/en/getting-there/airplane/']],
  routeNote:'Les navettes locales gratuites ont des horaires propres à chaque ligne. Après minuit, la ligne violette va uniquement vers le parking de jour P5.',
  accommodation:['La plupart des visiteurs campent sur l’aérodrome, mais l’accès ne vaut que pour la zone réservée. Un hôtel nécessite une liaison planifiée en navette, taxi ou train.','Combinaisons de réservation officielles','https://airbeat-one.de/en/how-to-book/'],
  spending:['Aucune grille complète 2027 n’est publiée. Nourriture et boissons sont admises au camping sans limite de quantité, mais sans verre. Elles sont interdites dans l’arène.',[['Navette locale','Gratuite'],['Zone restauration du camping','Prix non publiés'],['Distributeurs 24 h/24','Disponibles'],['Supermarchés les plus proches','environ 1 km']],'Restauration officielle du camping','https://customerservice.airbeat-one.de/hc/en-150/articles/115004834245-food-drinks-at-the-camp-site'],
  links:[['Site officiel','https://airbeat-one.de/en/'],['Billets 2027','https://airbeat-one.de/en/tickets/'],['Guide de réservation','https://airbeat-one.de/en/how-to-book/'],['Transport et navettes','https://airbeat-one.de/en/getting-there/'],['Aérodrome sur Google Maps',maps.airbeat]],
  rulesNote:'Le camping autorise nourriture et boissons, mais aucun verre. L’arène applique des règles plus strictes. Revérifiez les restrictions météo sur le gaz et les barbecues.',
  packing:['Billets compatibles pour festival, camping et véhicule','Pièce d’identité et trajet train ou bus hors ligne','Tente, couchage, bouchons d’oreille et batterie externe','Provisions de camping dans des contenants sans verre','Gourde pliable et sac d’arène au format A4 maximum'],
  avoid:['Verre partout sur l’aérodrome','Sacs d’arène dépassant le format A4 ou sacs à dos','Nourriture, boissons, canettes ou bouteilles rigides dans l’arène','Feu ouvert; les barbecues peuvent être restreints selon la météo','Arriver en voiture sans la vignette correcte réservée']
};
fr.exit = {...fr.exit,
  intro:'Aucun EXIT Festival 2027 à la forteresse de Petrovaradin n’est confirmé. EXIT publie désormais des événements séparés par destination. Choisissez d’abord l’événement précis et utilisez ses billets, son lieu et ses conseils de voyage.',
  ticketIntro:'Statut officiel actuel. Prix et trajet dépendent de chaque événement; aucun pass EXIT unique ne couvre le réseau.', ticketColumns:['Événement ou produit','Statut actuel'],
  ticketRows:[['EXIT Festival Novi Sad 2027','Aucun retour à la forteresse annoncé','Pas en vente'],['EXIT Global Tour','Événements distincts par destination','Par événement'],['Starlight Festival, Égypte','8–11 octobre 2026 à Gizeh','Voir le lien'],['EXIT2Montenegro','Dates 2026 annoncées à Ulcinj et Budva','Voir le lien']],
  ticketNote:'Depuis la page Global Tour, ouvrez l’événement nommé et vérifiez l’année, le pays et le lieu avant toute réservation non remboursable.',
  routes:[['Choisir d’abord l’événement et le pays','Ouvrez la page Global Tour et vérifiez que date et lieu correspondent à la billetterie.','EXIT Global Tour officiel','https://www.exitfest.org/global-tour'],['Ignorer les anciens trajets de Novi Sad','Les itinéraires de la forteresse, hôtels de Novi Sad et anciens campings concernent 2001–2025, pas automatiquement les nouveaux événements.'],['Construire le trajet depuis le lieu','Utilisez l’adresse fournie par l’événement puis vérifiez navette ou transport public auprès de l’opérateur local.']],
  routeNote:'Comme la tournée traverse plusieurs pays, il n’existe pas de navette, d’aéroport ou de lien cartographique unique valable pour tous.',
  accommodation:['L’hébergement dépend de la destination. Ne réservez pas Novi Sad pour un événement au Monténégro ou en Égypte et ne supposez pas qu’un camping existe.','Choisir l’événement actuel','https://www.exitfest.org/global-tour'],
  spending:['EXIT ne publie aucun tarif commun au réseau. Devise, paiement, eau et restauration dépendent de l’événement et du pays choisis.',[['Prix Novi Sad 2027','Indisponibles'],['Billet de tournée','Selon l’événement'],['Nourriture et bar','Voir l’événement'],['Transport local','Voir l’opérateur local']],'Tournée et billets officiels','https://www.exitfest.org/global-tour'],
  links:[['Site officiel EXIT','https://www.exitfest.org/'],['Global Tour et billets','https://www.exitfest.org/global-tour'],['Histoire d’EXIT','https://www.exitfest.org/en/about-us'],['Forteresse de Petrovaradin sur Google Maps, lieu historique',maps.exit]],
  rulesNote:'Consultez les règles de l’événement choisi. Âge, sacs, réadmission, eau et objets interdits ne peuvent pas être transposés de l’ancienne édition à la forteresse.',
  packing:['Passeport ou pièce d’identité acceptée dans le pays choisi','Bon billet enregistré hors ligne','Assurance voyage et documents d’entrée requis','Vêtements adaptés, bouchons d’oreille et batterie externe','Moyen de paiement local confirmé par l’événement'],
  avoid:['Acheter un billet non officiel « Novi Sad 2027 »','Utiliser un plan 2025 de la forteresse dans un autre pays','Supposer qu’un billet couvre plusieurs destinations','Réserver un trajet non remboursable avant confirmation du lieu','Transposer d’anciennes règles de camping, sacs ou alcool']
};

const normalize = value => ({
  ...value,
  ticketRows: value.ticketRows.map(([label,note,price]) => ({label,note,price})),
  routes: value.routes.map(([title,description,label,url]) => ({title,description,...(url ? {link:{label,url}} : {})})),
  accommodation:{body:value.accommodation[0],link:{label:value.accommodation[1],url:value.accommodation[2]}},
  spending:{body:value.spending[0],items:value.spending[1].map(([label,value]) => ({label,value})),link:{label:value.spending[2],url:value.spending[3]}},
  links:value.links.map(([label,url]) => ({label,url})),
  checked:'2026-10-06',
  checkedLabel: value === data.de.monegros || value === data.de.arc || value === data.de.airbeat || value === data.de.exit ? '6. Oktober 2026' : '6 octobre 2026'
});

export const localizedFestivalPlanning = (festival, lang) => normalize(data[lang][festival]);
