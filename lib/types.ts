export type Locale = "ru" | "en" | "uk" | "de" | "es" | "pt";

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer Item)[]
        ? DeepWiden<Item>[]
        : T extends object
          ? { [Key in keyof T]: DeepWiden<T[Key]> }
          : T;

export type MessageDictionary = DeepWiden<typeof import("@/messages/en").default>;

export type WarningKey =
  | "steamApiMissing"
  | "steamDemoMode"
  | "steamProfileLookupFailed"
  | "inventoryEstimate"
  | "inventoryPrivate"
  | "inventoryUnavailable"
  | "inventoryLookupFailed"
  | "ownedGamesHidden"
  | "faceitApiMissing"
  | "faceitDemoMode"
  | "faceitHistoryUnavailable"
  | "faceitLookupFailed";

export type SteamProfileSummary = {
  steamId: string;
  vanityUrl: string | null;
  nickname: string;
  avatar: string;
  level: number | null;
  createdAt: string | null;
  vacBans: number;
  gameBans: number;
  communityBanned: boolean;
  countryCode: string | null;
  profileUrl: string;
  realName: string | null;
  lastLogoff: number | null;
  visibilityState: number;
};

export type GameSummary = {
  appid: number;
  name: string;
  hours: number;
  iconUrl: string | null;
};

export type InventorySummary = {
  estimatedValueUsd: number | null;
  totalItems: number | null;
  marketableItems: number | null;
  tradableItems: number | null;
};

export type SteamScanResult = {
  profile: SteamProfileSummary;
  games: {
    cs2Hours: number;
    totalGames: number;
    totalHours: number;
    topGames: GameSummary[];
  };
  inventory: InventorySummary;
  warnings: WarningKey[];
  mode: "live" | "demo";
};

export type FaceitMatchSummary = {
  matchId: string;
  startedAt: string | null;
  result: "WIN" | "LOSS" | "UNKNOWN";
  kills: number | null;
  deaths: number | null;
  kdRatio: number | null;
  map: string | null;
};

export type FaceitStats = {
  nickname: string;
  avatar: string | null;
  elo: number | null;
  level: number | null;
  region: string | null;
  country: string | null;
  matches: number | null;
  winRate: number | null;
  averageKd: number | null;
  recentMatches: FaceitMatchSummary[];
  mode: "live" | "demo";
  warnings: WarningKey[];
};

export type ServiceHealth = {
  id: "steam" | "faceit" | "demo";
  configured: boolean;
  status: "ready" | "missing";
  detailKey:
    | "steamReady"
    | "steamMissing"
    | "faceitReady"
    | "faceitMissing"
    | "demoReady"
    | "demoMissing";
};

export type StatusSnapshot = {
  timestamp: string;
  runtime: "nodejs";
  demoModeEnabled: boolean;
  services: ServiceHealth[];
  endpoints: string[];
};
