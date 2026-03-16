import en from "@/messages/en";

const uk: typeof en = {
  meta: {
    homeTitle: "SteamScan | Аналізатор Steam акаунтів",
    homeDescription:
      "Аналізуйте Steam профілі, години в CS2, бани, приблизну вартість інвентарю та FACEIT в одній багатомовній панелі.",
    aboutTitle: "Про SteamScan | SteamScan",
    aboutDescription: "Дізнайтеся, як SteamScan поєднує Steam Web API, FACEIT та SSR-панелі.",
    statusTitle: "Статус API | SteamScan",
    statusDescription: "Перевірте готовність Steam API, FACEIT API та demo fallback.",
    analyzeTitle: "Аналіз акаунта | SteamScan",
    analyzeDescription: "Результати сканування Steam акаунта, ігрова активність та FACEIT."
  },
  brand: {
    name: "SteamScan",
    tagline: "Steam-аналітика для змагальних гравців"
  },
  nav: {
    home: "Головна",
    about: "Про сервіс",
    status: "Статус API"
  },
  language: {
    label: "Мова"
  },
  common: {
    liveData: "Живі дані",
    demoData: "Демо-режим",
    yes: "Так",
    no: "Ні",
    unknown: "Невідомо",
    unavailable: "Недоступно",
    optional: "Необов'язково",
    backHome: "На головну",
    openSteamProfile: "Відкрити Steam профіль",
    configured: "Налаштовано",
    missing: "Відсутнє",
    runtime: "Середовище виконання",
    endpoint: "Ендпоінт",
    loading: "Сканування акаунта",
    noWarnings: "Проблем не виявлено"
  },
  home: {
    badge: "Steam Web API + інтеграція FACEIT",
    title: "Перевірка Steam акаунтів",
    subtitle:
      "Вставте посилання на Steam профіль або SteamID, щоб швидко отримати сигнали профілю, активність у CS2, бани, оцінку інвентарю та контекст FACEIT в одній SSR-панелі.",
    profileLabel: "Введіть посилання Steam профілю або SteamID",
    profilePlaceholder: "https://steamcommunity.com/id/example або 7656119...",
    faceitLabel: "FACEIT nickname",
    faceitPlaceholder: "Необов'язковий нік FACEIT",
    submit: "Перевірити акаунт",
    loading: "Сканування...",
    helper: "Підтримуються vanity URL, числовий SteamID64 та публічні посилання на профіль.",
    highlightsTitle: "Чому SteamScan",
    highlights: [
      {
        title: "Один скан, весь профіль",
        text: "Профіль, рівень, бани, країна та публічна активність збираються в одному вікні."
      },
      {
        title: "Фокус на CS2",
        text: "Окремо підсвічуються години в Counter-Strike 2, топ ігор і статистика FACEIT."
      },
      {
        title: "Готово до деплою",
        text: "Побудовано на Next.js API routes, SSR та конфігурації, зручній для Vercel."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Профіль і бани" },
      { label: "CS2", value: "Години та інвентар" },
      { label: "FACEIT", value: "ELO та матчі" },
      { label: "SSR", value: "Швидке перше завантаження" }
    ],
    statsTitle: "Усе за один прохід",
    statsText:
      "SteamScan поєднує Steam Web API, евристику інвентарю та FACEIT без переходів між сервісами."
  },
  analyze: {
    title: "Аналіз акаунта",
    subtitle: "Розбір профілю в реальному часі з ігровим і змагальним контекстом.",
    emptyTitle: "Почніть сканування",
    emptyText: "Вставте посилання на Steam профіль або SteamID на головній сторінці, щоб отримати звіт.",
    profileCardTitle: "Інформація про профіль",
    gamesTitle: "Ігрова активність",
    topGamesTitle: "Топ 5 ігор",
    inventoryTitle: "Інвентар",
    faceitTitle: "FACEIT",
    warningsTitle: "Примітки сканування",
    profileFields: {
      steamLevel: "Steam рівень",
      createdAt: "Дата створення акаунта",
      vacBans: "VAC бани",
      communityBan: "Community ban",
      country: "Країна",
      totalGames: "Усього ігор",
      cs2Hours: "Години в CS2",
      inventoryValue: "Приблизна вартість",
      inventoryItems: "Предмети",
      marketable: "Маркетабельні",
      tradable: "Передавані",
      lastSeen: "Остання активність",
      gameBans: "Ігрові бани"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "FACEIT рівень",
      matches: "Матчі",
      winRate: "Вінрейт",
      avgKd: "Середній K/D",
      region: "Регіон",
      country: "Країна",
      recentMatches: "Останні матчі",
      noFaceit: "Нік FACEIT не вказано.",
      noMatchHistory: "Історія останніх матчів недоступна."
    },
    matchResults: {
      WIN: "Перемога",
      LOSS: "Поразка",
      UNKNOWN: "Невідомо"
    },
    chartHours: "Зіграні години",
    chartTotalHours: "Загальна кількість відстежених годин",
    noGames: "Список ігор прихований або недоступний.",
    scanLabel: "Скан акаунта",
    liveHint: "Використовуються живі API-дані.",
    demoHint: "Показуються demo-дані, тому що один або кілька API не налаштовані.",
    warningKeys: {
      steamApiMissing: "Steam API не налаштовано. Додайте STEAM_API_KEY, щоб отримувати реальні дані профілю.",
      steamDemoMode: "Живі дані Steam недоступні, тому показано demo-режим.",
      steamProfileLookupFailed: "Не вдалося отримати дані Steam профілю. Перевірте посилання, приватність профілю та API ключ.",
      inventoryEstimate: "Вартість інвентарю оцінена евристично за категоріями предметів.",
      inventoryPrivate: "Інвентар приватний, заблокований Steam для серверного запиту або тимчасово обмежений за кількістю запитів.",
      inventoryUnavailable: "Дані інвентарю зараз недоступні або Steam повернув некоректну відповідь.",
      inventoryLookupFailed: "Під час сканування не вдалося отримати інвентар.",
      ownedGamesHidden: "Список ігор прихований або недоступний для цього акаунта.",
      faceitApiMissing: "FACEIT API не налаштовано. Додайте FACEIT_API_KEY, щоб отримувати статистику FACEIT.",
      faceitDemoMode: "Живі дані FACEIT недоступні, тому показана demo-статистика.",
      faceitHistoryUnavailable: "Історія останніх матчів FACEIT недоступна.",
      faceitLookupFailed: "Не вдалося отримати дані FACEIT для вказаного nickname."
    }
  },
  about: {
    title: "Про SteamScan",
    intro:
      "SteamScan — сучасний інтерфейс для аналітики Steam акаунтів, створений для швидких перевірок профілю, контексту CS2 та прозорої діагностики на базі API.",
    missionTitle: "Що робить сервіс",
    missionText:
      "Застосунок резолвить Steam профілі, збирає публічні сигнали акаунта, оцінює інвентар CS2 і за бажанням додає результати FACEIT.",
    dataTitle: "Джерела даних",
    dataText:
      "Steam Web API віддає профіль, рівень, бани та бібліотеку ігор. Інвентар береться з публічних Steam Community ендпоінтів. FACEIT Open API додає змагальні метрики.",
    privacyTitle: "Приватність",
    privacyText:
      "SteamScan запитує лише публічні дані Steam і FACEIT. Приватні інвентарі та приховані бібліотеки залишаються недоступними й позначаються окремо.",
    stackTitle: "Стек",
    stackText:
      "Next.js App Router, React, TailwindCSS, SSR-рендеринг і Node.js API routes з підготовкою до деплою на Vercel.",
    cta: "Використовуйте SteamScan, щоб швидко перевіряти тіммейтів, порівнювати альтернативні акаунти або аналізувати власний профіль."
  },
  status: {
    title: "Статус API",
    subtitle: "Готовність сервісів і секретів для деплою SteamScan.",
    refreshed: "Останнє оновлення",
    servicesTitle: "Сервіси",
    endpointsTitle: "Доступні ендпоінти",
    runtimeTitle: "Середовище виконання",
    demoTitle: "Демо fallback",
    ready: "Готово",
    missing: "Не налаштовано",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Демо-дані"
    },
    detailKeys: {
      steamReady: "Ендпоінти Steam акаунтів, банів, рівня та бібліотеки ігор налаштовані.",
      steamMissing: "Додайте STEAM_API_KEY, щоб увімкнути живі запити до Steam.",
      faceitReady: "Ендпоінти FACEIT для гравця та статистики матчів налаштовані.",
      faceitMissing: "Додайте FACEIT_API_KEY, щоб увімкнути живі запити до FACEIT.",
      demoReady: "Demo-дані доступні лише для прев'ю інтерфейсу, але реальні скани користувачів все одно потребують live API ключі.",
      demoMissing: "Demo-прев'ю вимкнене. Реальні скани користувачів завжди потребують live API ключі."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Багатомовна аналітика Steam акаунтів з SSR, Tailwind UI та API routes, готовими до Vercel.",
    sources: "Джерела даних: Steam Web API, інвентар Steam Community, FACEIT Open API."
  }
};

export default uk;
