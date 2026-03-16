import type { FaceitMatchSummary, FaceitStats } from "@/lib/types";

const FACEIT_API_ROOT = "https://open.faceit.com/data/v4";

type FaceitPlayerResponse = {
  player_id: string;
  nickname: string;
  avatar?: string;
  country?: string;
  games?: {
    cs2?: {
      faceit_elo?: number;
      skill_level?: number;
      region?: string;
    };
  };
};

type FaceitStatsResponse = {
  lifetime?: Record<string, string>;
};

type FaceitHistoryResponse = {
  items?: Array<{
    match_id?: string;
    finished_at?: number;
    results?: {
      winner?: string;
    };
    teams?: {
      faction1?: {
        players?: Array<{ nickname?: string }>;
      };
      faction2?: {
        players?: Array<{ nickname?: string }>;
      };
    };
    stats?: Record<string, string>;
    played?: string;
    competition_name?: string;
  }>;
};

function getFaceitApiKey() {
  return process.env.FACEIT_API_KEY;
}

async function fetchFaceit<T>(path: string) {
  const key = getFaceitApiKey();

  if (!key) {
    throw new Error("FACEIT_API_KEY is missing.");
  }

  const response = await fetch(`${FACEIT_API_ROOT}${path}`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${key}`
    }
  });

  if (!response.ok) {
    throw new Error(`FACEIT request failed with ${response.status}.`);
  }

  return (await response.json()) as T;
}

function parseNumber(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : null;
}

function inferMatchResult(item: NonNullable<FaceitHistoryResponse["items"]>[number], nickname: string): FaceitMatchSummary["result"] {
  const winner = item.results?.winner;

  if (!winner) {
    return "UNKNOWN";
  }

  const nicknameLower = nickname.toLowerCase();
  const inFaction1 = item.teams?.faction1?.players?.some(
    (player) => player.nickname?.toLowerCase() === nicknameLower
  );
  const inFaction2 = item.teams?.faction2?.players?.some(
    (player) => player.nickname?.toLowerCase() === nicknameLower
  );

  if (winner === "faction1") {
    return inFaction1 ? "WIN" : inFaction2 ? "LOSS" : "UNKNOWN";
  }

  if (winner === "faction2") {
    return inFaction2 ? "WIN" : inFaction1 ? "LOSS" : "UNKNOWN";
  }

  return "UNKNOWN";
}

export async function getFaceitStats(nickname?: string | null): Promise<FaceitStats | null> {
  if (!nickname?.trim()) {
    return null;
  }

  const cleanNickname = nickname.trim();

  if (!getFaceitApiKey()) {
    return null;
  }

  try {
    const player = await fetchFaceit<FaceitPlayerResponse>(
      `/players?nickname=${encodeURIComponent(cleanNickname)}`
    );

    const playerId = player.player_id;

    const [stats, history] = await Promise.all([
      fetchFaceit<FaceitStatsResponse>(`/players/${playerId}/stats/cs2`),
      fetchFaceit<FaceitHistoryResponse>(`/players/${playerId}/history?game=cs2&offset=0&limit=3`)
    ]);

    const lifetime = stats.lifetime ?? {};
    const recentMatches =
      history.items?.map((item) => ({
        matchId: item.match_id ?? crypto.randomUUID(),
        startedAt: item.finished_at ? new Date(item.finished_at * 1000).toISOString() : null,
        result: inferMatchResult(item, player.nickname),
        kills: parseNumber(item.stats?.Kills),
        deaths: parseNumber(item.stats?.Deaths),
        kdRatio: parseNumber(item.stats?.["K/D Ratio"]),
        map: item.stats?.Map ?? item.played ?? item.competition_name ?? null
      })) ?? [];

    return {
      nickname: player.nickname,
      avatar: player.avatar ?? null,
      elo: player.games?.cs2?.faceit_elo ?? null,
      level: player.games?.cs2?.skill_level ?? null,
      region: player.games?.cs2?.region ?? null,
      country: player.country ?? null,
      matches: parseNumber(lifetime.Matches),
      winRate: parseNumber(lifetime["Win Rate %"]),
      averageKd: parseNumber(lifetime["Average K/D Ratio"]),
      recentMatches,
      mode: "live",
      warnings: recentMatches.length ? [] : ["faceitHistoryUnavailable"]
    };
  } catch {
    return null;
  }
}
