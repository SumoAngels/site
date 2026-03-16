import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "SteamScan",
  description: "SteamScan analyzes Steam accounts with Steam Web API, FACEIT overlays, inventory estimates and multilingual SSR pages.",
  applicationName: "SteamScan",
  keywords: ["Steam", "Steam account analyzer", "FACEIT", "Steam inventory", "Next.js"],
  openGraph: {
    title: "SteamScan",
    description: "Modern Steam account analytics with multilingual SSR dashboards.",
    siteName: "SteamScan",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SteamScan",
    description: "Modern Steam account analytics with multilingual SSR dashboards."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo.variable} ${ibmPlexSans.variable} bg-abyss text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
