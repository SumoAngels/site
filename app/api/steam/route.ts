import { NextResponse } from "next/server";

import { scanSteamAccount } from "@/lib/steam";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const profile = searchParams.get("profile");

  if (!profile?.trim()) {
    return NextResponse.json({ error: "Missing required query parameter: profile" }, { status: 400 });
  }

  try {
    const result = await scanSteamAccount(profile);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Steam lookup failed." },
      { status: 500 }
    );
  }
}
