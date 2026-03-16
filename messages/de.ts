import type { MessageDictionary } from "@/lib/types";

const de: MessageDictionary = {
  meta: {
    homeTitle: "SteamScan | Steam-Kontoanalyse",
    homeDescription:
      "Analysiere Steam-Profile, CS2-Stunden, Bans, geschätzten Inventarwert und FACEIT in einem mehrsprachigen Dashboard.",
    aboutTitle: "Über SteamScan | SteamScan",
    aboutDescription:
      "Erfahre, wie SteamScan Steam Web API, FACEIT und SSR-Dashboards kombiniert.",
    statusTitle: "API-Status | SteamScan",
    statusDescription: "Prüfe die Bereitschaft von Steam API, FACEIT API und Demo-Fallback.",
    analyzeTitle: "Kontoanalyse | SteamScan",
    analyzeDescription: "Steam-Kontoscan, Spielaktivität und FACEIT-Einblicke."
  },
  brand: {
    name: "SteamScan",
    tagline: "Steam-Intelligence für kompetitive Spieler"
  },
  nav: {
    home: "Start",
    about: "Über",
    status: "API-Status"
  },
  language: {
    label: "Sprache"
  },
  common: {
    liveData: "Live-Daten",
    demoData: "Demo-Modus",
    yes: "Ja",
    no: "Nein",
    unknown: "Unbekannt",
    unavailable: "Nicht verfügbar",
    optional: "Optional",
    backHome: "Zur Startseite",
    openSteamProfile: "Steam-Profil öffnen",
    configured: "Konfiguriert",
    missing: "Fehlt",
    runtime: "Runtime",
    endpoint: "Endpoint",
    loading: "Konto wird gescannt",
    noWarnings: "Keine Probleme erkannt"
  },
  home: {
    badge: "Steam Web API + FACEIT-Overlay",
    title: "Steam-Konten prüfen",
    subtitle:
      "Füge eine Steam-Profil-URL oder SteamID ein, um Profilsignale, CS2-Aktivität, Bans, Inventarschätzung und FACEIT-Kontext in einem schnellen SSR-Dashboard zu sehen.",
    profileLabel: "Steam-Profil-URL oder SteamID eingeben",
    profilePlaceholder: "https://steamcommunity.com/id/example oder 7656119...",
    faceitLabel: "FACEIT-Nickname",
    faceitPlaceholder: "Optionaler FACEIT-Name",
    submit: "Konto prüfen",
    loading: "Scanne...",
    helper: "Unterstützt Vanity-URLs, numerische SteamID64 und öffentliche Profillinks.",
    highlightsTitle: "Warum SteamScan",
    highlights: [
      {
        title: "Ein Scan, komplettes Profil",
        text: "Profil, Level, Bans, Land und öffentliche Aktivität landen in einer Ansicht."
      },
      {
        title: "CS2-Fokus",
        text: "Counter-Strike 2-Spielzeit, Top-Spiele und FACEIT-Performance werden hervorgehoben."
      },
      {
        title: "Deployment-fertiges Backend",
        text: "Gebaut mit Next.js API Routes, SSR und Vercel-freundlicher Konfiguration."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Profil + Bans" },
      { label: "CS2", value: "Stunden + Inventar" },
      { label: "FACEIT", value: "ELO + Matches" },
      { label: "SSR", value: "Schneller erster Paint" }
    ],
    statsTitle: "Alles in einem Durchlauf",
    statsText:
      "SteamScan kombiniert Steam Web API, Inventar-Heuristiken und FACEIT-Statistiken ohne Seitenwechsel."
  },
  analyze: {
    title: "Kontoanalyse",
    subtitle: "Profilaufschlüsselung in Echtzeit mit Gameplay- und Competitive-Kontext.",
    emptyTitle: "Scan starten",
    emptyText:
      "Füge auf der Startseite einen Steam-Profillink oder eine SteamID ein, um den Bericht zu erzeugen.",
    profileCardTitle: "Profilübersicht",
    gamesTitle: "Spielaktivität",
    topGamesTitle: "Top 5 Spiele",
    inventoryTitle: "Inventar",
    faceitTitle: "FACEIT",
    warningsTitle: "Scan-Hinweise",
    profileFields: {
      steamLevel: "Steam-Level",
      createdAt: "Konto erstellt",
      vacBans: "VAC-Bans",
      communityBan: "Community-Ban",
      country: "Land",
      totalGames: "Gesamtspiele",
      cs2Hours: "CS2-Stunden",
      inventoryValue: "Geschätzter Wert",
      inventoryItems: "Items",
      marketable: "Marktfähig",
      tradable: "Handelbar",
      lastSeen: "Zuletzt online",
      gameBans: "Spiel-Bans"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "FACEIT-Level",
      matches: "Matches",
      winRate: "Siegquote",
      avgKd: "Durchschnitt K/D",
      region: "Region",
      country: "Land",
      recentMatches: "Letzte Matches",
      noFaceit: "Kein FACEIT-Nickname angegeben.",
      noMatchHistory: "Letzte Matches sind nicht verfügbar."
    },
    matchResults: {
      WIN: "Sieg",
      LOSS: "Niederlage",
      UNKNOWN: "Unbekannt"
    },
    chartHours: "Gespielte Stunden",
    chartTotalHours: "Gesamt erfasste Stunden",
    noGames: "Spielebibliothek ist verborgen oder nicht verfügbar.",
    scanLabel: "Kontoscan",
    liveHint: "Es werden Live-API-Daten verwendet.",
    demoHint: "Demo-Daten werden angezeigt, weil eine oder mehrere APIs nicht konfiguriert sind.",
    warningKeys: {
      steamApiMissing: "Steam API ist nicht konfiguriert. Füge STEAM_API_KEY hinzu, um echte Profildaten zu laden.",
      steamDemoMode: "Live-Daten von Steam sind nicht verfügbar, daher wird der Demo-Modus angezeigt.",
      steamProfileLookupFailed: "Die Steam-Profilsuche ist fehlgeschlagen. Prüfe Profil-URL, Privatsphäre oder API-Schlüssel.",
      inventoryEstimate: "Der Inventarwert ist eine heuristische Schätzung auf Basis von Item-Kategorien.",
      inventoryPrivate: "Das Inventar ist privat, wird von Steam fuer diese Serveranfrage blockiert oder ist voruebergehend rate-limitiert.",
      inventoryUnavailable: "Inventardaten sind derzeit nicht verfuegbar oder Steam hat eine ungueltige Inventarantwort geliefert.",
      inventoryLookupFailed: "Die Inventarabfrage ist während des Scans fehlgeschlagen.",
      ownedGamesHidden: "Eigene Spiele sind für dieses Konto verborgen oder nicht verfügbar.",
      faceitApiMissing: "FACEIT API ist nicht konfiguriert. Füge FACEIT_API_KEY hinzu, um FACEIT-Stats zu laden.",
      faceitDemoMode: "Live-Daten von FACEIT sind nicht verfügbar, daher werden Demo-Statistiken angezeigt.",
      faceitHistoryUnavailable: "Die letzte FACEIT-Matchhistorie ist nicht verfügbar.",
      faceitLookupFailed: "Die FACEIT-Abfrage für den angegebenen Nickname ist fehlgeschlagen."
    }
  },
  about: {
    title: "Über SteamScan",
    intro:
      "SteamScan ist ein modernes Frontend für Steam-Intelligence, entwickelt für schnelle Profilprüfungen, CS2-Kontext und transparente API-basierte Diagnosen.",
    missionTitle: "Was der Dienst macht",
    missionText:
      "Die App löst Steam-Profile auf, sammelt öffentliche Kontosignale, schätzt den CS2-Inventarwert und ergänzt optional FACEIT-Leistungsdaten.",
    dataTitle: "Datenpipeline",
    dataText:
      "Steam Web API liefert Profil, Level, Bans und Spielebibliothek. Öffentliche Steam-Community-Endpunkte liefern Inventardaten. FACEIT Open API ergänzt Wettbewerbsmetriken.",
    privacyTitle: "Datenschutz",
    privacyText:
      "SteamScan fragt nur öffentliche Daten von Steam und FACEIT ab. Private Inventare oder versteckte Spielebibliotheken bleiben unerreichbar und werden klar markiert.",
    stackTitle: "Stack",
    stackText:
      "Next.js App Router, React, TailwindCSS, SSR-Rendering und Node.js API Routes, vorbereitet für Vercel.",
    cta: "Nutze SteamScan, um Mitspieler vorab zu prüfen, Alt-Accounts zu vergleichen oder dein eigenes Profil schnell zu analysieren."
  },
  status: {
    title: "API-Status",
    subtitle: "Bereitschaft von Diensten und Secrets für SteamScan-Deployments.",
    refreshed: "Zuletzt aktualisiert",
    servicesTitle: "Dienste",
    endpointsTitle: "Verfügbare Endpoints",
    runtimeTitle: "Runtime",
    demoTitle: "Demo-Fallback",
    ready: "Bereit",
    missing: "Fehlt",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Demo-Daten"
    },
    detailKeys: {
      steamReady: "Steam-Endpunkte für Konto, Bans, Level und Spielebibliothek sind konfiguriert.",
      steamMissing: "Setze STEAM_API_KEY, um Live-Anfragen an Steam zu aktivieren.",
      faceitReady: "FACEIT-Endpunkte für Spieler- und Matchstatistiken sind konfiguriert.",
      faceitMissing: "Setze FACEIT_API_KEY, um Live-Anfragen an FACEIT zu aktivieren.",
      demoReady: "Demo-Daten sind nur fuer die UI-Vorschau aktiv, echte Nutzerscans benoetigen trotzdem Live-API-Schluessel.",
      demoMissing: "Die Demo-Vorschau ist deaktiviert. Echte Nutzerscans benoetigen immer Live-API-Schluessel."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Mehrsprachige Steam-Kontoanalyse mit SSR, Tailwind UI und deploymentfertigen API Routes für Vercel.",
    sources: "Datenquellen: Steam Web API, Steam Community Inventory, FACEIT Open API."
  }
};

export default de;
