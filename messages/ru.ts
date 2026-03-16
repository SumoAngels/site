import type { MessageDictionary } from "@/lib/types";

const ru: MessageDictionary = {
  meta: {
    homeTitle: "SteamScan | Анализатор Steam аккаунтов",
    homeDescription:
      "Анализируйте Steam профили, часы в CS2, баны, примерную стоимость инвентаря и FACEIT в одной мультиязычной панели.",
    aboutTitle: "О SteamScan | SteamScan",
    aboutDescription:
      "Узнайте, как SteamScan объединяет Steam Web API, FACEIT и SSR-панели.",
    statusTitle: "Статус API | SteamScan",
    statusDescription: "Проверьте готовность Steam API, FACEIT API и demo fallback.",
    analyzeTitle: "Анализ аккаунта | SteamScan",
    analyzeDescription: "Результаты сканирования Steam аккаунта, игровая активность и FACEIT."
  },
  brand: {
    name: "SteamScan",
    tagline: "Steam-аналитика для соревновательных игроков"
  },
  nav: {
    home: "Главная",
    about: "О сервисе",
    status: "Статус API"
  },
  language: {
    label: "Язык"
  },
  common: {
    liveData: "Живые данные",
    demoData: "Демо-режим",
    yes: "Да",
    no: "Нет",
    unknown: "Неизвестно",
    unavailable: "Недоступно",
    optional: "Необязательно",
    backHome: "На главную",
    openSteamProfile: "Открыть Steam профиль",
    configured: "Настроено",
    missing: "Отсутствует",
    runtime: "Среда выполнения",
    endpoint: "Эндпоинт",
    loading: "Сканирование аккаунта",
    noWarnings: "Проблем не обнаружено"
  },
  home: {
    badge: "Steam Web API + интеграция FACEIT",
    title: "Проверка Steam аккаунтов",
    subtitle:
      "Вставьте ссылку на Steam профиль или SteamID, чтобы быстро получить сигналы профиля, активность в CS2, баны, оценку инвентаря и контекст FACEIT в одной SSR-панели.",
    profileLabel: "Введите ссылку Steam профиля или SteamID",
    profilePlaceholder: "https://steamcommunity.com/id/example или 7656119...",
    faceitLabel: "FACEIT nickname",
    faceitPlaceholder: "Необязательный ник FACEIT",
    submit: "Проверить аккаунт",
    loading: "Сканирование...",
    helper: "Поддерживаются vanity URL, числовой SteamID64 и публичные ссылки на профиль.",
    highlightsTitle: "Почему SteamScan",
    highlights: [
      {
        title: "Один скан, весь профиль",
        text: "Профиль, уровень, баны, страна и публичная активность собираются в одном окне."
      },
      {
        title: "Фокус на CS2",
        text: "Отдельно подсвечиваются часы в Counter-Strike 2, топ игр и статистика FACEIT."
      },
      {
        title: "Готово к деплою",
        text: "Собрано на Next.js API routes, SSR и конфигурации, удобной для Vercel."
      }
    ],
    summaryTiles: [
      { label: "Steam", value: "Профиль и баны" },
      { label: "CS2", value: "Часы и инвентарь" },
      { label: "FACEIT", value: "ELO и матчи" },
      { label: "SSR", value: "Быстрая первая загрузка" }
    ],
    statsTitle: "Все за один проход",
    statsText:
      "SteamScan объединяет Steam Web API, эвристику инвентаря и FACEIT без переходов между сервисами."
  },
  analyze: {
    title: "Анализ аккаунта",
    subtitle: "Разбор профиля в реальном времени с игровым и соревновательным контекстом.",
    emptyTitle: "Начните сканирование",
    emptyText: "Вставьте ссылку на Steam профиль или SteamID на главной странице, чтобы получить отчет.",
    profileCardTitle: "Информация о профиле",
    gamesTitle: "Игровая активность",
    topGamesTitle: "Топ 5 игр",
    inventoryTitle: "Инвентарь",
    faceitTitle: "FACEIT",
    warningsTitle: "Примечания сканирования",
    profileFields: {
      steamLevel: "Steam уровень",
      createdAt: "Дата создания аккаунта",
      vacBans: "VAC баны",
      communityBan: "Community ban",
      country: "Страна",
      totalGames: "Всего игр",
      cs2Hours: "Часы в CS2",
      inventoryValue: "Примерная стоимость",
      inventoryItems: "Предметы",
      marketable: "Маркетабельные",
      tradable: "Передаваемые",
      lastSeen: "Последняя активность",
      gameBans: "Игровые баны"
    },
    faceitFields: {
      elo: "FACEIT ELO",
      level: "FACEIT уровень",
      matches: "Матчи",
      winRate: "Винрейт",
      avgKd: "Средний K/D",
      region: "Регион",
      country: "Страна",
      recentMatches: "Последние матчи",
      noFaceit: "Ник FACEIT не указан.",
      noMatchHistory: "История последних матчей недоступна."
    },
    matchResults: {
      WIN: "Победа",
      LOSS: "Поражение",
      UNKNOWN: "Неизвестно"
    },
    chartHours: "Сыгранные часы",
    chartTotalHours: "Общее количество отслеженных часов",
    noGames: "Список игр скрыт или недоступен.",
    scanLabel: "Скан аккаунта",
    liveHint: "Используются живые API-данные.",
    demoHint: "Показываются demo-данные, потому что один или несколько API не настроены.",
    warningKeys: {
      steamApiMissing: "Steam API не настроен. Добавьте STEAM_API_KEY, чтобы получать реальные данные профиля.",
      steamDemoMode: "Живые данные Steam недоступны, поэтому показан demo-режим.",
      steamProfileLookupFailed: "Не удалось получить данные Steam профиля. Проверьте ссылку, приватность профиля и API ключ.",
      inventoryEstimate: "Стоимость инвентаря рассчитана эвристически по категориям предметов.",
      inventoryPrivate: "Инвентарь приватный, заблокирован Steam для серверного запроса или временно ограничен по количеству запросов.",
      inventoryUnavailable: "Данные инвентаря сейчас недоступны или Steam вернул некорректный ответ.",
      inventoryLookupFailed: "Во время сканирования не удалось получить инвентарь.",
      ownedGamesHidden: "Список игр скрыт или недоступен для этого аккаунта.",
      faceitApiMissing: "FACEIT API не настроен. Добавьте FACEIT_API_KEY, чтобы получать статистику FACEIT.",
      faceitDemoMode: "Живые данные FACEIT недоступны, поэтому показана demo-статистика.",
      faceitHistoryUnavailable: "История последних матчей FACEIT недоступна.",
      faceitLookupFailed: "Не удалось получить данные FACEIT для указанного nickname."
    }
  },
  about: {
    title: "О SteamScan",
    intro:
      "SteamScan — современный интерфейс для аналитики Steam аккаунтов, созданный для быстрых проверок профиля, контекста CS2 и прозрачной диагностики на базе API.",
    missionTitle: "Что делает сервис",
    missionText:
      "Приложение резолвит Steam профили, собирает публичные сигналы аккаунта, оценивает инвентарь CS2 и по желанию добавляет результаты FACEIT.",
    dataTitle: "Источники данных",
    dataText:
      "Steam Web API отдает профиль, уровень, баны и библиотеку игр. Инвентарь берется из публичных Steam Community endpoint'ов. FACEIT Open API добавляет соревновательные метрики.",
    privacyTitle: "Приватность",
    privacyText:
      "SteamScan запрашивает только публичные данные Steam и FACEIT. Приватные инвентари и скрытые библиотеки остаются недоступными и отмечаются отдельно.",
    stackTitle: "Стек",
    stackText:
      "Next.js App Router, React, TailwindCSS, SSR-рендеринг и Node.js API routes с подготовкой под деплой на Vercel.",
    cta: "Используйте SteamScan, чтобы быстро проверять тиммейтов, сравнивать альтернативные аккаунты или анализировать собственный профиль."
  },
  status: {
    title: "Статус API",
    subtitle: "Готовность сервисов и секретов для деплоя SteamScan.",
    refreshed: "Последнее обновление",
    servicesTitle: "Сервисы",
    endpointsTitle: "Доступные эндпоинты",
    runtimeTitle: "Среда выполнения",
    demoTitle: "Демо fallback",
    ready: "Готово",
    missing: "Не настроено",
    serviceLabels: {
      steam: "Steam Web API",
      faceit: "FACEIT API",
      demo: "Демо-данные"
    },
    detailKeys: {
      steamReady: "Эндпоинты Steam аккаунтов, банов, уровня и библиотеки игр настроены.",
      steamMissing: "Добавьте STEAM_API_KEY, чтобы включить живые запросы к Steam.",
      faceitReady: "Эндпоинты FACEIT для игрока и матчевой статистики настроены.",
      faceitMissing: "Добавьте FACEIT_API_KEY, чтобы включить живые запросы к FACEIT.",
      demoReady: "Demo-данные доступны только для превью интерфейса, но реальные пользовательские сканы все равно требуют live API ключи.",
      demoMissing: "Demo-превью отключено. Реальные пользовательские сканы всегда требуют live API ключи."
    }
  },
  footer: {
    title: "SteamScan",
    description:
      "Мультиязычная аналитика Steam аккаунтов с SSR, Tailwind UI и API routes, готовыми для Vercel.",
    sources:
      "Источники данных: Steam Web API, инвентарь Steam Community, FACEIT Open API."
  }
};

export default ru;
