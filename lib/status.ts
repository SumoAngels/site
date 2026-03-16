import type { StatusSnapshot } from "@/lib/types";

export function isDemoModeEnabled() {
  return process.env.STEAMSCAN_ENABLE_DEMO !== "false";
}

export function getStatusSnapshot(): StatusSnapshot {
  const steamConfigured = Boolean(process.env.STEAM_API_KEY);
  const faceitConfigured = Boolean(process.env.FACEIT_API_KEY);
  const demoModeEnabled = isDemoModeEnabled();

  return {
    timestamp: new Date().toISOString(),
    runtime: "nodejs",
    demoModeEnabled,
    services: [
      {
        id: "steam",
        configured: steamConfigured,
        status: steamConfigured ? "ready" : "missing",
        detailKey: steamConfigured ? "steamReady" : "steamMissing"
      },
      {
        id: "faceit",
        configured: faceitConfigured,
        status: faceitConfigured ? "ready" : "missing",
        detailKey: faceitConfigured ? "faceitReady" : "faceitMissing"
      },
      {
        id: "demo",
        configured: demoModeEnabled,
        status: demoModeEnabled ? "ready" : "missing",
        detailKey: demoModeEnabled ? "demoReady" : "demoMissing"
      }
    ],
    endpoints: ["/api/status", "/api/steam?profile=<steamId|url>", "/api/faceit?nickname=<name>"]
  };
}
