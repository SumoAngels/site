const en = {
  meta: {
    homeTitle: "SteamScan | Steam account analyzer",
    homeDescription:
      "Analyze Steam profiles, CS2 hours, bans, inventory estimate and FACEIT overlays in one multilingual dashboard.",
    aboutTitle: "About SteamScan | SteamScan",
    aboutDescription:
      "Learn how SteamScan combines Steam Web API, FACEIT data and SSR dashboards.",
    statusTitle: "API status | SteamScan",
    statusDescription: "Check Steam API, FACEIT API and demo fallback readiness.",
    analyzeTitle: "Account analysis | SteamScan",
    analyzeDescription: "Steam account scan results, gaming activity and FACEIT insights."
  },
  brand: {
    name: "SteamScan",
    tagline: "Steam intelligence for competitive players"
  },
  nav: {
    home: "Home",
    about: "About",
    status: "API status"
  },
  language: {
    label: "Language"
  },
  common: {
    liveData: "Live data",
    demoData: "Demo mode",
    yes: "Yes",
    no: "No",
    unknown: "Unknown",
    unavailable: "Unavailable",
    optional: "Optional",
    backHome: "Back to home",
    openSteamProfile: "Open Steam profile",
    configured: "Configured",
    missing: "Missing",
    runtime: "Runtime",
    endpoint: "Endpoint",
    loading: "Scanning account",
    noWarnings: "No issues detected"
  },
  home: {
    badge: "Steam Web API + FACEIT overlay",
    title: "Steam account check",
    subtitle:
      "Paste a Steam profile URL or SteamID to inspect profile signals, CS2 activity, bans, inventory estimate and FACEIT context in one fast SSR dashboard.",
    profileLabel: "Enter Steam profile URL or SteamID",
    profilePlaceholder: "https://steamcommunity.com/id/example or 7656119...",
    faceitLabel: "FACEIT nickname",
    faceitPlaceholder: "Optional FACEIT nickname",
    submit: "Check account",
    loading: "Scanning...",
    helper: "Supports custom profile URLs, numeric SteamID64 and public profile links.",
    highlightsTitle: "Why SteamScan",
    highlights: [
      {
        title: "One scan, full profile",
        text: "Profile, level, bans, country and public activity land in a single view."
      },
      {
        title: "CS2-focused analytics",
        text: "Highlight Counter-Strike 2 playtime, top games and recent FACEIT performance."
      },
      {
        title: "Deployment-ready backend",
        text: "Built with Next.js API routes, SSR rendering and Vercel-friendly configuration."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Profile + bans" },
      { label: "CS2", value: "Hours + inventory" },
      { label: "FACEIT", value: "ELO + matches" },
      { label: "SSR", value: "Fast first paint" }
    ],
    statsTitle: "Everything in one pass",
    statsText:
      "SteamScan merges Steam Web API, inventory heuristics and FACEIT stats without leaving the page."
  },
  analyze: {
    title: "Account analysis",
    subtitle: "Real-time profile breakdown with gameplay and competitive context.",
    emptyTitle: "Start a scan",
    emptyText: "Paste a Steam profile link or SteamID on the home page to generate the report.",
    profileCardTitle: "Profile overview",
    gamesTitle: "Game activity",
    topGamesTitle: "Top 5 games",
    inventoryTitle: "Inventory",
    faceitTitle: "FACEIT",
    warningsTitle: "Scan notes",
    profileFields: {
      steamLevel: "Steam level",
      createdAt: "Account created",
      vacBans: "VAC bans",
      communityBan: "Community ban",
      country: "Country",
      totalGames: "Total games",
      cs2Hours: "CS2 hours",
      inventoryValue: "Estimated value",
      inventoryItems: "Items",
      marketable: "Marketable",
      tradable: "Tradable",
      lastSeen: "Last seen",
      gameBans: "Game bans"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "FACEIT level",
      matches: "Matches",
      winRate: "Win rate",
      avgKd: "Average K/D",
      region: "Region",
      country: "Country",
      recentMatches: "Recent matches",
      noFaceit: "No FACEIT nickname provided.",
      noMatchHistory: "Recent matches are not available."
    },
    matchResults: {
      WIN: "Win",
      LOSS: "Loss",
      UNKNOWN: "Unknown"
    },
    chartHours: "Hours played",
    chartTotalHours: "Total tracked hours",
    noGames: "Owned games are hidden or unavailable.",
    scanLabel: "Account scan",
    liveHint: "Using live API data.",
    demoHint: "Showing demo data because one or more APIs are not configured.",
    warningKeys: {
      steamApiMissing: "Steam API is not configured. Add STEAM_API_KEY to fetch real profile data.",
      steamDemoMode: "Live Steam data is unavailable, so the scan is shown in demo mode.",
      steamProfileLookupFailed: "Steam profile lookup failed. Check the profile URL, privacy settings, or API key.",
      inventoryEstimate: "Inventory value is a heuristic estimate based on item categories.",
      inventoryPrivate: "Inventory is private, blocked by Steam for this server request, or temporarily rate-limited.",
      inventoryUnavailable: "Inventory data is currently unavailable or Steam returned an invalid inventory response.",
      inventoryLookupFailed: "Inventory lookup failed during the scan.",
      ownedGamesHidden: "Owned games are hidden or unavailable for this account.",
      faceitApiMissing: "FACEIT API is not configured. Add FACEIT_API_KEY to fetch FACEIT stats.",
      faceitDemoMode: "Live FACEIT data is unavailable, so demo stats are shown.",
      faceitHistoryUnavailable: "Recent FACEIT match history is unavailable.",
      faceitLookupFailed: "FACEIT lookup failed for the provided nickname."
    }
  },
  about: {
    title: "About SteamScan",
    intro:
      "SteamScan is a modern Steam intelligence frontend built for fast profile checks, CS2 context and transparent API-backed diagnostics.",
    missionTitle: "What it does",
    missionText:
      "The app resolves Steam profiles, collects public account signals, estimates CS2 inventory value and optionally overlays FACEIT performance.",
    dataTitle: "Data pipeline",
    dataText:
      "Steam Web API powers profile, level, bans and owned games. Steam Community inventory endpoints provide public item counts. FACEIT Open API adds competitive metrics.",
    privacyTitle: "Privacy posture",
    privacyText:
      "SteamScan only requests public data exposed by Steam and FACEIT. Private inventories or hidden game libraries stay unavailable and are labeled clearly.",
    stackTitle: "Stack",
    stackText:
      "Next.js App Router, React, TailwindCSS, SSR rendering and Node.js API routes prepared for Vercel deployment.",
    cta: "Use SteamScan to pre-check teammates, compare alt accounts or quickly review your own profile."
  },
  status: {
    title: "API status",
    subtitle: "Deployment and secret readiness for SteamScan services.",
    refreshed: "Last refreshed",
    servicesTitle: "Services",
    endpointsTitle: "Available endpoints",
    runtimeTitle: "Runtime",
    demoTitle: "Demo fallback",
    ready: "Ready",
    missing: "Missing",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Demo data"
    },
    detailKeys: {
      steamReady: "Steam account, bans, level and owned games endpoints are configured.",
      steamMissing: "Set STEAM_API_KEY to enable live Steam requests.",
      faceitReady: "FACEIT player and match stats endpoints are configured.",
      faceitMissing: "Set FACEIT_API_KEY to enable live FACEIT requests.",
      demoReady: "UI preview demo data is enabled, but real user scans still require live API keys.",
      demoMissing: "Demo preview is disabled. Real user scans always require live API keys."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Multilingual Steam account analytics with SSR, Tailwind UI and deployment-ready API routes for Vercel.",
    sources:
      "Data sources: Steam Web API, Steam Community inventory endpoints, FACEIT Open API."
  }
} as const;

export default en;
