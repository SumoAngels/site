# SteamScan

SteamScan is a multilingual Steam account analysis website built with Next.js, React, TailwindCSS and Node.js API routes. It analyzes Steam profiles, surfaces CS2 playtime, estimates inventory value and overlays FACEIT stats.

## Features

- Multilingual UI: Russian, English, Ukrainian, German, Spanish and Portuguese
- SSR account analysis route for shareable Steam profile reports
- Steam Web API integration for profile data, bans, levels and owned games
- FACEIT Open API integration for ELO, level and recent matches
- Inventory summary with heuristic value estimation for public CS2 inventories
- API status page and deployment-ready structure for Vercel
- Demo fallback mode so the UI still works without secrets

## Tech Stack

- Next.js App Router
- React
- TailwindCSS
- Node.js API routes
- TypeScript

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
STEAM_API_KEY=your_steam_web_api_key
FACEIT_API_KEY=your_faceit_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STEAM_COMMUNITY_COOKIE=
STEAMSCAN_ENABLE_DEMO=false
```

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
5. Deploy. Next.js API routes will work automatically on Vercel.

## API Routes

- `GET /api/status`
- `GET /api/steam?profile=<steamId|url>`
- `GET /api/faceit?nickname=<faceitNickname>`

## Notes

- Steam account creation date may be unavailable for some profiles and falls back when Steam does not expose it.
- Inventory value is an estimate, not a market-accurate price feed.
- Private libraries or inventories remain unavailable and are clearly labeled in the UI.
- Live user scans require real API keys. The app does not substitute fake profile stats for entered Steam links.
- Some public Steam inventories still block server-to-server requests. If that happens, set `STEAM_COMMUNITY_COOKIE` with your own Steam session cookie to improve inventory access reliability.
