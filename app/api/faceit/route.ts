import { NextResponse } from "next/server";

import { getFaceitStats } from "@/lib/faceit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nickname = searchParams.get("nickname");

  if (!nickname?.trim()) {
    return NextResponse.json({ error: "Missing required query parameter: nickname" }, { status: 400 });
  }

  try {
    const result = await getFaceitStats(nickname);

    if (!result) {
      return NextResponse.json({ error: "FACEIT player was not found." }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "FACEIT lookup failed." },
      { status: 500 }
    );
  }
}
