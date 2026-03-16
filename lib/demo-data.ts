import type { FaceitStats, SteamScanResult } from "@/lib/types";

export function getDemoSteamScan(profileInput: string): SteamScanResult {
  const normalized = profileInput.trim();
  const nickname = normalized.replace(/^https?:\/\//, "").slice(0, 18) || "SteamScout";

  return {
    mode: "demo",
    warnings: ["steamDemoMode", "inventoryEstimate"],
    profile: {
      steamId: "76561198000000000",
      vanityUrl: "steam-scout",
      nickname,
      avatar:
        "https://avatars.steamstatic.com/7b4d9f16fbf29d5aa7d95d4aa5bb11e88b9f2118_full.jpg",
      level: 48,
      createdAt: "2016-02-12T00:00:00.000Z",
      vacBans: 0,
      gameBans: 0,
      communityBanned: false,
      countryCode: "UA",
      profileUrl: "https://steamcommunity.com/id/steam-scout/",
      realName: "SteamScan Demo",
      lastLogoff: Math.floor(Date.now() / 1000) - 7200,
      visibilityState: 3
    },
    games: {
      cs2Hours: 1840.4,
      totalGames: 214,
      totalHours: 3950.8,
      topGames: [
        {
          appid: 730,
          name: "Counter-Strike 2",
          hours: 1840.4,
          iconUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
        },
        {
          appid: 570,
          name: "Dota 2",
          hours: 948.3,
          iconUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"
        },
        {
          appid: 440,
          name: "Team Fortress 2",
          hours: 436.1,
          iconUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"
        },
        {
          appid: 252490,
          name: "Rust",
          hours: 392.2,
          iconUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
        },
        {
          appid: 578080,
          name: "PUBG: BATTLEGROUNDS",
          hours: 333.8,
          iconUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"
        }
      ]
    },
    inventory: {
      estimatedValueUsd: 624.4,
      totalItems: 178,
      marketableItems: 104,
      tradableItems: 86
    }
  };
}

export function getDemoFaceitStats(nickname: string): FaceitStats {
  return {
    nickname,
    avatar:
      "https://distribution.faceit-cdn.net/images/0ddc4057-7311-4dcb-b301-d539f2b6f5ec.jpeg",
    elo: 2142,
    level: 10,
    region: "EU",
    country: "UA",
    matches: 688,
    winRate: 56.8,
    averageKd: 1.23,
    recentMatches: [
      {
        matchId: "demo-1",
        startedAt: new Date(Date.now() - 86_400_000).toISOString(),
        result: "WIN",
        kills: 24,
        deaths: 16,
        kdRatio: 1.5,
        map: "Mirage"
      },
      {
        matchId: "demo-2",
        startedAt: new Date(Date.now() - 172_800_000).toISOString(),
        result: "LOSS",
        kills: 18,
        deaths: 19,
        kdRatio: 0.95,
        map: "Ancient"
      },
      {
        matchId: "demo-3",
        startedAt: new Date(Date.now() - 259_200_000).toISOString(),
        result: "WIN",
        kills: 29,
        deaths: 14,
        kdRatio: 2.07,
        map: "Inferno"
      }
    ],
    mode: "demo",
    warnings: ["faceitDemoMode"]
  };
}
