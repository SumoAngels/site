import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");

  if (!header) {
    return defaultLocale;
  }

  const codes = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const code of codes) {
    const shortCode = code.split("-")[0];

    if (locales.includes(code as (typeof locales)[number])) {
      return code as (typeof locales)[number];
    }

    if (locales.includes(shortCode as (typeof locales)[number])) {
      return shortCode as (typeof locales)[number];
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"]
};
