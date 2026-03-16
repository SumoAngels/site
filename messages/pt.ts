import en from "@/messages/en";

const pt: typeof en = {
  meta: {
    homeTitle: "SteamScan | Analisador de contas Steam",
    homeDescription:
      "Analise perfis Steam, horas em CS2, bans, valor estimado do inventário e FACEIT em um painel multilíngue.",
    aboutTitle: "Sobre o SteamScan | SteamScan",
    aboutDescription: "Veja como o SteamScan combina Steam Web API, FACEIT e dashboards SSR.",
    statusTitle: "Status da API | SteamScan",
    statusDescription: "Verifique a prontidão da Steam API, FACEIT API e do modo demo.",
    analyzeTitle: "Análise da conta | SteamScan",
    analyzeDescription: "Resultados da varredura Steam, atividade de jogos e insights de FACEIT."
  },
  brand: {
    name: "SteamScan",
    tagline: "Inteligência Steam para jogadores competitivos"
  },
  nav: {
    home: "Início",
    about: "Sobre",
    status: "Status da API"
  },
  language: {
    label: "Idioma"
  },
  common: {
    liveData: "Dados ao vivo",
    demoData: "Modo demo",
    yes: "Sim",
    no: "Não",
    unknown: "Desconhecido",
    unavailable: "Indisponível",
    optional: "Opcional",
    backHome: "Voltar ao início",
    openSteamProfile: "Abrir perfil Steam",
    configured: "Configurado",
    missing: "Ausente",
    runtime: "Runtime",
    endpoint: "Endpoint",
    loading: "Escaneando conta",
    noWarnings: "Nenhum problema detectado"
  },
  home: {
    badge: "Steam Web API + overlay FACEIT",
    title: "Verificação de contas Steam",
    subtitle:
      "Cole uma URL de perfil Steam ou SteamID para inspecionar sinais do perfil, atividade em CS2, bans, estimativa do inventário e contexto do FACEIT em um dashboard SSR rápido.",
    profileLabel: "Digite a URL do perfil Steam ou SteamID",
    profilePlaceholder: "https://steamcommunity.com/id/example ou 7656119...",
    faceitLabel: "Nickname do FACEIT",
    faceitPlaceholder: "Nickname do FACEIT opcional",
    submit: "Verificar conta",
    loading: "Escaneando...",
    helper: "Suporta URLs vanity, SteamID64 numérico e links públicos de perfil.",
    highlightsTitle: "Por que SteamScan",
    highlights: [
      {
        title: "Um escaneamento, perfil completo",
        text: "Perfil, nível, bans, país e atividade pública em uma única visão."
      },
      {
        title: "Foco em CS2",
        text: "Destaca horas em Counter-Strike 2, principais jogos e desempenho recente no FACEIT."
      },
      {
        title: "Backend pronto para deploy",
        text: "Construído com Next.js API routes, SSR e configuração amigável para Vercel."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Perfil + bans" },
      { label: "CS2", value: "Horas + inventário" },
      { label: "FACEIT", value: "ELO + partidas" },
      { label: "SSR", value: "Primeira carga rápida" }
    ],
    statsTitle: "Tudo de uma vez",
    statsText:
      "SteamScan combina Steam Web API, heurísticas de inventário e estatísticas do FACEIT sem sair da página."
  },
  analyze: {
    title: "Análise da conta",
    subtitle: "Quebra do perfil em tempo real com contexto de gameplay e competitivo.",
    emptyTitle: "Inicie uma varredura",
    emptyText: "Cole um link de perfil Steam ou SteamID na página inicial para gerar o relatório.",
    profileCardTitle: "Visão geral do perfil",
    gamesTitle: "Atividade de jogos",
    topGamesTitle: "Top 5 jogos",
    inventoryTitle: "Inventário",
    faceitTitle: "FACEIT",
    warningsTitle: "Notas da varredura",
    profileFields: {
      steamLevel: "Nível Steam",
      createdAt: "Conta criada",
      vacBans: "VAC bans",
      communityBan: "Community ban",
      country: "País",
      totalGames: "Total de jogos",
      cs2Hours: "Horas em CS2",
      inventoryValue: "Valor estimado",
      inventoryItems: "Itens",
      marketable: "Comercializáveis",
      tradable: "Trocáveis",
      lastSeen: "Última atividade",
      gameBans: "Bans de jogo"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "Nível FACEIT",
      matches: "Partidas",
      winRate: "Taxa de vitória",
      avgKd: "K/D médio",
      region: "Região",
      country: "País",
      recentMatches: "Partidas recentes",
      noFaceit: "Nenhum nickname do FACEIT foi informado.",
      noMatchHistory: "As partidas recentes não estão disponíveis."
    },
    matchResults: {
      WIN: "Vitória",
      LOSS: "Derrota",
      UNKNOWN: "Desconhecido"
    },
    chartHours: "Horas jogadas",
    chartTotalHours: "Horas totais rastreadas",
    noGames: "A biblioteca está oculta ou indisponível.",
    scanLabel: "Varredura da conta",
    liveHint: "Usando dados reais das APIs.",
    demoHint: "Mostrando dados demo porque uma ou mais APIs não estão configuradas.",
    warningKeys: {
      steamApiMissing: "A Steam API não está configurada. Adicione STEAM_API_KEY para buscar dados reais do perfil.",
      steamDemoMode: "Os dados ao vivo da Steam não estão disponíveis, por isso o modo demo está sendo mostrado.",
      steamProfileLookupFailed: "A busca do perfil Steam falhou. Verifique a URL, a privacidade do perfil ou a API key.",
      inventoryEstimate: "O valor do inventário é uma estimativa heurística baseada em categorias de itens.",
      inventoryPrivate: "O inventário está privado, a Steam bloqueou esta requisição do servidor ou houve limitação temporária.",
      inventoryUnavailable: "Os dados do inventário não estão disponíveis no momento ou a Steam retornou uma resposta inválida.",
      inventoryLookupFailed: "A consulta do inventário falhou durante a varredura.",
      ownedGamesHidden: "Os jogos da conta estão ocultos ou indisponíveis para este perfil.",
      faceitApiMissing: "A FACEIT API não está configurada. Adicione FACEIT_API_KEY para buscar estatísticas do FACEIT.",
      faceitDemoMode: "Os dados ao vivo do FACEIT não estão disponíveis, por isso estatísticas demo são exibidas.",
      faceitHistoryUnavailable: "O histórico recente de partidas FACEIT não está disponível.",
      faceitLookupFailed: "A busca do FACEIT falhou para o nickname informado."
    }
  },
  about: {
    title: "Sobre o SteamScan",
    intro:
      "SteamScan é uma interface moderna de inteligência para Steam criada para verificações rápidas de perfil, contexto de CS2 e diagnósticos transparentes baseados em API.",
    missionTitle: "O que faz",
    missionText:
      "O app resolve perfis Steam, coleta sinais públicos da conta, estima o valor do inventário de CS2 e opcionalmente adiciona desempenho do FACEIT.",
    dataTitle: "Pipeline de dados",
    dataText:
      "A Steam Web API fornece perfil, nível, bans e jogos. Endpoints públicos de inventário da Steam Community trazem contagem de itens. A FACEIT Open API adiciona métricas competitivas.",
    privacyTitle: "Privacidade",
    privacyText:
      "O SteamScan solicita apenas dados públicos expostos por Steam e FACEIT. Inventários privados ou bibliotecas ocultas continuam indisponíveis e são sinalizados claramente.",
    stackTitle: "Stack",
    stackText:
      "Next.js App Router, React, TailwindCSS, renderização SSR e Node.js API routes preparados para deploy na Vercel.",
    cta: "Use o SteamScan para revisar teammates, comparar contas alternativas ou analisar o seu próprio perfil rapidamente."
  },
  status: {
    title: "Status da API",
    subtitle: "Prontidão de serviços e segredos para deploys do SteamScan.",
    refreshed: "Última atualização",
    servicesTitle: "Serviços",
    endpointsTitle: "Endpoints disponíveis",
    runtimeTitle: "Runtime",
    demoTitle: "Fallback demo",
    ready: "Pronto",
    missing: "Ausente",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Dados demo"
    },
    detailKeys: {
      steamReady: "Os endpoints de conta, bans, nível e biblioteca da Steam estão configurados.",
      steamMissing: "Defina STEAM_API_KEY para habilitar requisições ao vivo para a Steam.",
      faceitReady: "Os endpoints de jogador e estatísticas do FACEIT estão configurados.",
      faceitMissing: "Defina FACEIT_API_KEY para habilitar requisições ao vivo para o FACEIT.",
      demoReady: "Os dados demo servem apenas para preview da interface; scans reais continuam exigindo chaves de API ao vivo.",
      demoMissing: "O preview demo esta desativado. Scans reais sempre exigem chaves de API ao vivo."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Análise multilíngue de contas Steam com SSR, Tailwind UI e API routes prontas para Vercel.",
    sources: "Fontes de dados: Steam Web API, inventário da Steam Community e FACEIT Open API."
  }
};

export default pt;
