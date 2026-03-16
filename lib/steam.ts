import type { InventorySummary, SteamScanResult, WarningKey } from "@/lib/types";
import { roundHours } from "@/lib/utils";

const STEAM_API_ROOT = "https://api.steampowered.com";
const STEAM_COMMUNITY_ROOT = "https://steamcommunity.com";

type SteamResolveResponse = {
  response?: {
    success?: number;
    steamid?: string;
    message?: string;
  };
};

type SteamPlayerResponse = {
  response?: {
    players?: Array<{
      steamid: string;
      personaname: string;
      profileurl: string;
      avatarfull: string;
      realname?: string;
      loccountrycode?: string;
      timecreated?: number;
      lastlogoff?: number;
      communityvisibilitystate: number;
    }>;
  };
};

type SteamLevelResponse = {
  response?: {
    player_level?: number;
  };
};

type SteamBansResponse = {
  players?: Array<{
    SteamId: string;
    CommunityBanned: boolean;
    VACBanned: boolean;
    NumberOfVACBans: number;
    NumberOfGameBans: number;
  }>;
};

type SteamGamesResponse = {
  response?: {
    game_count?: number;
    games?: Array<{
      appid: number;
      name?: string;
      playtime_forever?: number;
      img_icon_url?: string;
    }>;
  };
};

type SteamInventoryResponse = {
  assets?: Array<{
    assetid?: string;
    classid: string;
    instanceid: string;
    amount?: string;
  }>;
  descriptions?: Array<{
    classid: string;
    instanceid: string;
    market_hash_name?: string;
    name?: string;
    type?: string;
    marketable?: number;
    tradable?: number;
    tags?: Array<{
      category_name?: string;
      name?: string;
    }>;
  }>;
  total_inventory_count?: number;
  success?: number;
  more_items?: boolean | number;
  last_assetid?: string;
  Error?: string;
};

function getSteamApiKey() {
  return process.env.STEAM_API_KEY;
}

function getSteamCommunityCookie() {
  const rawCookie =
    process.env.STEAM_COMMUNITY_COOKIE?.trim() ||
    process.env.STEAM_LOGIN_SECURE?.trim() ||
    "";

  if (!rawCookie) {
    return null;
  }

  return rawCookie.includes("=") ? rawCookie : `steamLoginSecure=${rawCookie}`;
}

function normalizeSteamInput(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    throw new Error("Steam profile input is required.");
  }

  if (/^\d{17}$/.test(trimmed)) {
    return { steamId: trimmed, vanity: null };
  }

  const candidate = trimmed.startsWith("http") ? trimmed : `https://${trimmed.replace(/^\/+/, "")}`;

  try {
    const url = new URL(candidate);
    const segments = url.pathname.split("/").filter(Boolean);

    if (url.hostname.includes("steamcommunity.com") && segments.length >= 2) {
      if (segments[0] === "profiles" && /^\d{17}$/.test(segments[1])) {
        return { steamId: segments[1], vanity: null };
      }

      if (segments[0] === "id" && segments[1]) {
        return { steamId: null, vanity: segments[1] };
      }
    }
  } catch {
    // Fall through to raw vanity detection.
  }

  if (/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) {
    return { steamId: null, vanity: trimmed };
  }

  throw new Error("Unsupported Steam profile format.");
}

async function fetchJson<T>(url: string, init?: RequestInit) {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status} for ${url}`);
  }

  return (await response.json()) as T;
}

async function resolveSteamId(input: string) {
  const parsed = normalizeSteamInput(input);

  if (parsed.steamId) {
    return parsed.steamId;
  }

  const key = getSteamApiKey();

  if (!key) {
    throw new Error("STEAM_API_KEY is not configured.");
  }

  const url = `${STEAM_API_ROOT}/ISteamUser/ResolveVanityURL/v0001/?key=${key}&vanityurl=${encodeURIComponent(parsed.vanity ?? "")}`;
  const data = await fetchJson<SteamResolveResponse>(url);

  if (data.response?.steamid) {
    return data.response.steamid;
  }

  throw new Error(data.response?.message ?? "Unable to resolve Steam vanity URL.");
}

function estimateItemValue(description: NonNullable<SteamInventoryResponse["descriptions"]>[number]) {
  const haystack = [
    description.market_hash_name,
    description.name,
    description.type,
    ...(description.tags ?? []).flatMap((tag) => [tag.category_name, tag.name])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (haystack.includes("knife")) return 180;
  if (haystack.includes("gloves")) return 140;
  if (haystack.includes("souvenir")) return 15;
  if (haystack.includes("contraband")) return 60;
  if (haystack.includes("covert")) return 18;
  if (haystack.includes("classified")) return 8;
  if (haystack.includes("agent")) return 7;
  if (haystack.includes("music kit")) return 4;
  if (haystack.includes("sticker")) return 2;
  if (haystack.includes("key")) return 7;
  if (haystack.includes("case")) return 0.7;
  if (description.marketable) return 0.75;
  if (description.tradable) return 0.25;

  return 0.05;
}

async function getInventorySummary(steamId: string): Promise<{ inventory: InventorySummary; warning: WarningKey | null }> {
  const inventoryHeaders: HeadersInit = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    Referer: `${STEAM_COMMUNITY_ROOT}/profiles/${steamId}/inventory/`,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
  };
  const inventoryCookie = getSteamCommunityCookie();

  if (inventoryCookie) {
    inventoryHeaders.Cookie = inventoryCookie;
  }

  try {
    let startAssetId: string | null = null;
    let totalInventoryCount: number | null = null;
    let warning: WarningKey | null = null;
    const descriptions: NonNullable<SteamInventoryResponse["descriptions"]> = [];
    const assets: NonNullable<SteamInventoryResponse["assets"]> = [];

    for (let page = 0; page < 10; page += 1) {
      const query = new URLSearchParams({
        l: "english",
        count: "2000"
      });

      if (startAssetId) {
        query.set("start_assetid", startAssetId);
      }

      const response = await fetch(`${STEAM_COMMUNITY_ROOT}/inventory/${steamId}/730/2?${query.toString()}`, {
        cache: "no-store",
        headers: inventoryHeaders
      });

      if (response.status === 401 || response.status === 403 || response.status === 429) {
        return {
          inventory: {
            estimatedValueUsd: null,
            totalItems: null,
            marketableItems: null,
            tradableItems: null
          },
          warning: "inventoryPrivate"
        };
      }

      if (!response.ok) {
        return {
          inventory: {
            estimatedValueUsd: null,
            totalItems: null,
            marketableItems: null,
            tradableItems: null
          },
          warning: "inventoryUnavailable"
        };
      }

      const rawPayload = await response.text();
      const data = JSON.parse(rawPayload) as SteamInventoryResponse;

      if (data.success !== 1) {
        return {
          inventory: {
            estimatedValueUsd: null,
            totalItems: null,
            marketableItems: null,
            tradableItems: null
          },
          warning: data.Error?.toLowerCase().includes("private")
            ? "inventoryPrivate"
            : "inventoryUnavailable"
        };
      }

      if (typeof data.total_inventory_count === "number") {
        totalInventoryCount = data.total_inventory_count;
      }

      descriptions.push(...(data.descriptions ?? []));
      assets.push(...(data.assets ?? []));

      const hasMoreItems = data.more_items === true || data.more_items === 1;

      if (!hasMoreItems || !data.last_assetid) {
        break;
      }

      startAssetId = data.last_assetid;
      warning = "inventoryEstimate";
    }

    const counts = new Map<string, number>();

    let totalItems = 0;

    for (const asset of assets) {
      const amount = Number(asset.amount ?? "1");
      totalItems += amount;
      counts.set(`${asset.classid}_${asset.instanceid}`, (counts.get(`${asset.classid}_${asset.instanceid}`) ?? 0) + amount);
    }

    let marketableItems = 0;
    let tradableItems = 0;
    let estimatedValueUsd = 0;
    const uniqueDescriptions = new Map<string, NonNullable<SteamInventoryResponse["descriptions"]>[number]>();

    for (const description of descriptions) {
      uniqueDescriptions.set(`${description.classid}_${description.instanceid}`, description);
    }

    for (const description of uniqueDescriptions.values()) {
      const amount = counts.get(`${description.classid}_${description.instanceid}`) ?? 0;

      if (!amount) {
        continue;
      }

      if (description.marketable) {
        marketableItems += amount;
      }

      if (description.tradable) {
        tradableItems += amount;
      }

      estimatedValueUsd += amount * estimateItemValue(description);
    }

    return {
      inventory: {
        estimatedValueUsd: Number(estimatedValueUsd.toFixed(2)),
        totalItems: totalItems || totalInventoryCount || 0,
        marketableItems,
        tradableItems
      },
      warning
    };
  } catch {
    return {
      inventory: {
        estimatedValueUsd: null,
        totalItems: null,
        marketableItems: null,
        tradableItems: null
      },
      warning: "inventoryLookupFailed"
    };
  }
}

async function getCreatedAt(steamId: string) {
  try {
    const response = await fetch(`${STEAM_COMMUNITY_ROOT}/profiles/${steamId}?xml=1&l=english`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    const xml = await response.text();
    const cdataMatch = xml.match(/<memberSince><!\[CDATA\[(.*?)\]\]><\/memberSince>/i);
    const directMatch = xml.match(/<memberSince>(.*?)<\/memberSince>/i);
    const raw = cdataMatch?.[1] ?? directMatch?.[1];

    if (!raw) {
      return null;
    }

    const parsed = new Date(raw.trim());

    if (Number.isNaN(parsed.getTime())) {
      return null;
    }

    return parsed.toISOString();
  } catch {
    return null;
  }
}

export async function scanSteamAccount(profileInput: string): Promise<SteamScanResult> {
  const key = getSteamApiKey();

  if (!key) {
    throw new Error("steamApiMissing");
  }

  try {
    const steamId = await resolveSteamId(profileInput);
    const [playerData, bansData, levelData, gamesData, createdAt, inventoryResponse] =
      await Promise.all([
        fetchJson<SteamPlayerResponse>(
          `${STEAM_API_ROOT}/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`
        ),
        fetchJson<SteamBansResponse>(
          `${STEAM_API_ROOT}/ISteamUser/GetPlayerBans/v1/?key=${key}&steamids=${steamId}`
        ),
        fetchJson<SteamLevelResponse>(
          `${STEAM_API_ROOT}/IPlayerService/GetSteamLevel/v1/?key=${key}&steamid=${steamId}`
        ),
        fetchJson<SteamGamesResponse>(
          `${STEAM_API_ROOT}/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`
        ),
        getCreatedAt(steamId),
        getInventorySummary(steamId)
      ]);

    const player = playerData.response?.players?.[0];
    const bans = bansData.players?.[0];

    if (!player) {
      throw new Error("Steam profile was not found or is not publicly accessible.");
    }

    const ownedGames = [...(gamesData.response?.games ?? [])].sort(
      (left, right) => (right.playtime_forever ?? 0) - (left.playtime_forever ?? 0)
    );

    const topGames = ownedGames.slice(0, 5).map((game) => ({
      appid: game.appid,
      name: game.name ?? `App ${game.appid}`,
      hours: roundHours(game.playtime_forever),
      iconUrl: game.img_icon_url
        ? `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
        : null
    }));

    const cs2Entry = ownedGames.find((game) => game.appid === 730);
    const totalHours = ownedGames.reduce((sum, game) => sum + roundHours(game.playtime_forever), 0);
    const warnings = [inventoryResponse.warning].filter(Boolean) as WarningKey[];

    if (!gamesData.response?.games?.length) {
      warnings.push("ownedGamesHidden");
    }

    return {
      mode: "live",
      warnings,
      profile: {
        steamId,
        vanityUrl: player.profileurl.includes("/id/")
          ? player.profileurl.split("/id/")[1]?.split("/")[0] ?? null
          : null,
        nickname: player.personaname,
        avatar: player.avatarfull,
        level: levelData.response?.player_level ?? null,
        createdAt: createdAt ?? (player.timecreated ? new Date(player.timecreated * 1000).toISOString() : null),
        vacBans: bans?.NumberOfVACBans ?? 0,
        gameBans: bans?.NumberOfGameBans ?? 0,
        communityBanned: bans?.CommunityBanned ?? false,
        countryCode: player.loccountrycode ?? null,
        profileUrl: player.profileurl,
        realName: player.realname ?? null,
        lastLogoff: player.lastlogoff ?? null,
        visibilityState: player.communityvisibilitystate
      },
      games: {
        cs2Hours: roundHours(cs2Entry?.playtime_forever),
        totalGames: gamesData.response?.game_count ?? ownedGames.length,
        totalHours: Number(totalHours.toFixed(1)),
        topGames
      },
      inventory: inventoryResponse.inventory
    };
  } catch {
    throw new Error("steamProfileLookupFailed");
  }
}
