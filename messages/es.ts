import en from "@/messages/en";

const es: typeof en = {
  meta: {
    homeTitle: "SteamScan | Analizador de cuentas de Steam",
    homeDescription:
      "Analiza perfiles de Steam, horas en CS2, bans, valor estimado del inventario y FACEIT en un panel multilingüe.",
    aboutTitle: "Acerca de SteamScan | SteamScan",
    aboutDescription: "Descubre cómo SteamScan combina Steam Web API, FACEIT y paneles SSR.",
    statusTitle: "Estado de la API | SteamScan",
    statusDescription: "Comprueba la preparación de Steam API, FACEIT API y el modo demo.",
    analyzeTitle: "Análisis de cuenta | SteamScan",
    analyzeDescription: "Resultados del escaneo de Steam, actividad de juego e información de FACEIT."
  },
  brand: {
    name: "SteamScan",
    tagline: "Inteligencia de Steam para jugadores competitivos"
  },
  nav: {
    home: "Inicio",
    about: "Acerca de",
    status: "Estado API"
  },
  language: {
    label: "Idioma"
  },
  common: {
    liveData: "Datos en vivo",
    demoData: "Modo demo",
    yes: "Sí",
    no: "No",
    unknown: "Desconocido",
    unavailable: "No disponible",
    optional: "Opcional",
    backHome: "Volver al inicio",
    openSteamProfile: "Abrir perfil de Steam",
    configured: "Configurado",
    missing: "Falta",
    runtime: "Runtime",
    endpoint: "Endpoint",
    loading: "Escaneando cuenta",
    noWarnings: "No se detectaron problemas"
  },
  home: {
    badge: "Steam Web API + overlay de FACEIT",
    title: "Comprobación de cuentas de Steam",
    subtitle:
      "Pega una URL de perfil de Steam o un SteamID para revisar señales del perfil, actividad en CS2, bans, valor del inventario y contexto de FACEIT en un panel SSR rápido.",
    profileLabel: "Introduce la URL del perfil de Steam o el SteamID",
    profilePlaceholder: "https://steamcommunity.com/id/example o 7656119...",
    faceitLabel: "Nickname de FACEIT",
    faceitPlaceholder: "Nickname de FACEIT opcional",
    submit: "Comprobar cuenta",
    loading: "Escaneando...",
    helper: "Soporta URLs vanity, SteamID64 numérico y enlaces públicos de perfil.",
    highlightsTitle: "Por qué SteamScan",
    highlights: [
      {
        title: "Un escaneo, perfil completo",
        text: "Perfil, nivel, bans, país y actividad pública en una sola vista."
      },
      {
        title: "Enfoque en CS2",
        text: "Destaca horas en Counter-Strike 2, top de juegos y rendimiento reciente en FACEIT."
      },
      {
        title: "Backend listo para despliegue",
        text: "Construido con Next.js API routes, SSR y configuración preparada para Vercel."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Perfil + bans" },
      { label: "CS2", value: "Horas + inventario" },
      { label: "FACEIT", value: "ELO + partidas" },
      { label: "SSR", value: "Primera carga rápida" }
    ],
    statsTitle: "Todo en una pasada",
    statsText:
      "SteamScan combina Steam Web API, heurísticas de inventario y estadísticas FACEIT sin cambiar de página."
  },
  analyze: {
    title: "Análisis de cuenta",
    subtitle: "Desglose del perfil en tiempo real con contexto de juego y competitivo.",
    emptyTitle: "Inicia un escaneo",
    emptyText: "Pega un enlace de perfil de Steam o un SteamID en la página principal para generar el informe.",
    profileCardTitle: "Resumen del perfil",
    gamesTitle: "Actividad de juegos",
    topGamesTitle: "Top 5 juegos",
    inventoryTitle: "Inventario",
    faceitTitle: "FACEIT",
    warningsTitle: "Notas del escaneo",
    profileFields: {
      steamLevel: "Nivel de Steam",
      createdAt: "Cuenta creada",
      vacBans: "VAC bans",
      communityBan: "Community ban",
      country: "País",
      totalGames: "Juegos totales",
      cs2Hours: "Horas en CS2",
      inventoryValue: "Valor estimado",
      inventoryItems: "Objetos",
      marketable: "Comerciables",
      tradable: "Intercambiables",
      lastSeen: "Última actividad",
      gameBans: "Bans de juego"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "Nivel FACEIT",
      matches: "Partidas",
      winRate: "Porcentaje de victorias",
      avgKd: "K/D promedio",
      region: "Región",
      country: "País",
      recentMatches: "Partidas recientes",
      noFaceit: "No se indicó nickname de FACEIT.",
      noMatchHistory: "Las partidas recientes no están disponibles."
    },
    matchResults: {
      WIN: "Victoria",
      LOSS: "Derrota",
      UNKNOWN: "Desconocido"
    },
    chartHours: "Horas jugadas",
    chartTotalHours: "Horas totales registradas",
    noGames: "La biblioteca está oculta o no disponible.",
    scanLabel: "Escaneo de cuenta",
    liveHint: "Usando datos API en vivo.",
    demoHint: "Mostrando datos demo porque una o más APIs no están configuradas.",
    warningKeys: {
      steamApiMissing: "Steam API no está configurada. Añade STEAM_API_KEY para obtener datos reales del perfil.",
      steamDemoMode: "Los datos en vivo de Steam no están disponibles, por eso se muestra el modo demo.",
      steamProfileLookupFailed: "La consulta del perfil de Steam falló. Revisa la URL, la privacidad del perfil o la API key.",
      inventoryEstimate: "El valor del inventario es una estimación heurística basada en categorías de objetos.",
      inventoryPrivate: "El inventario es privado, Steam bloqueó esta solicitud del servidor o está limitado temporalmente.",
      inventoryUnavailable: "Los datos del inventario no están disponibles ahora mismo o Steam devolvió una respuesta inválida.",
      inventoryLookupFailed: "La consulta del inventario falló durante el escaneo.",
      ownedGamesHidden: "Los juegos propios están ocultos o no disponibles para esta cuenta.",
      faceitApiMissing: "FACEIT API no está configurada. Añade FACEIT_API_KEY para obtener estadísticas FACEIT.",
      faceitDemoMode: "Los datos en vivo de FACEIT no están disponibles, por eso se muestran estadísticas demo.",
      faceitHistoryUnavailable: "El historial reciente de partidas FACEIT no está disponible.",
      faceitLookupFailed: "La búsqueda de FACEIT falló para el nickname indicado."
    }
  },
  about: {
    title: "Acerca de SteamScan",
    intro:
      "SteamScan es una interfaz moderna de inteligencia para Steam creada para comprobaciones rápidas de perfiles, contexto de CS2 y diagnósticos transparentes basados en API.",
    missionTitle: "Qué hace",
    missionText:
      "La aplicación resuelve perfiles de Steam, recopila señales públicas de la cuenta, estima el valor del inventario de CS2 y opcionalmente añade rendimiento de FACEIT.",
    dataTitle: "Flujo de datos",
    dataText:
      "Steam Web API alimenta perfil, nivel, bans y juegos. Los endpoints públicos de inventario de Steam Community entregan el conteo de objetos. FACEIT Open API añade métricas competitivas.",
    privacyTitle: "Privacidad",
    privacyText:
      "SteamScan solo solicita datos públicos expuestos por Steam y FACEIT. Los inventarios privados o bibliotecas ocultas siguen inaccesibles y se etiquetan con claridad.",
    stackTitle: "Stack",
    stackText:
      "Next.js App Router, React, TailwindCSS, renderizado SSR y Node.js API routes preparados para desplegar en Vercel.",
    cta: "Usa SteamScan para revisar compañeros, comparar cuentas alternativas o analizar tu propio perfil rápidamente."
  },
  status: {
    title: "Estado API",
    subtitle: "Preparación de servicios y secretos para despliegues de SteamScan.",
    refreshed: "Última actualización",
    servicesTitle: "Servicios",
    endpointsTitle: "Endpoints disponibles",
    runtimeTitle: "Runtime",
    demoTitle: "Fallback demo",
    ready: "Listo",
    missing: "Falta",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Datos demo"
    },
    detailKeys: {
      steamReady: "Los endpoints de cuenta, bans, nivel y biblioteca de Steam están configurados.",
      steamMissing: "Configura STEAM_API_KEY para habilitar solicitudes en vivo a Steam.",
      faceitReady: "Los endpoints de jugador y estadísticas de FACEIT están configurados.",
      faceitMissing: "Configura FACEIT_API_KEY para habilitar solicitudes en vivo a FACEIT.",
      demoReady: "Los datos demo solo se usan para vista previa de la UI; los escaneos reales siguen necesitando claves API en vivo.",
      demoMissing: "La vista previa demo está desactivada. Los escaneos reales siempre necesitan claves API en vivo."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Analítica multilingüe de cuentas Steam con SSR, Tailwind UI y API routes listas para Vercel.",
    sources: "Fuentes de datos: Steam Web API, inventario de Steam Community y FACEIT Open API."
  }
};

export default es;
