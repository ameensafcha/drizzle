# Drizzle & Sauce — Founder Dashboard

Founder's cockpit dashboard for **Drizzle & Sauce**, a hot-honey startup based in Khobar, KSA.  
Built with Next.js, Neon PostgreSQL, Drizzle ORM, and realtime sync.

## Tech Stack

- **Framework:** Next.js 16
- **Database:** Neon PostgreSQL (serverless)
- **ORM:** Drizzle ORM
- **Realtime:** PostgreSQL LISTEN/NOTIFY + SSE
- **Fonts:** Bungee (display), Work Sans (body), JetBrains Mono (labels)
- **Styling:** Plain CSS with custom properties (design tokens), light/dark themes

## Features

- **Desktop Dashboard** (`/`) — tile grid with modal sections
- **Phone App** (`/mobile`) — bottom-tab-bar app shell with iPhone frame
- **7 Sections:** Brand & Milestones, Unit Economics, Formulation, Design Files, Social Media, Sauce Lab, Contacts
- **Inline editing:** Click any value to edit, Enter/blur to save
- **Saving overlay:** Fullscreen "Saving..." during DB writes, "✦ saved" toast on completion
- **Realtime sync:** Cross-tab/-device sync via PostgreSQL LISTEN/NOTIFY + SSE
- **Live recalculation:** COGS, margin, break-even update instantly
- **Status cycling:** Click status pills to cycle through states
- **Light/Dark theme:** Persisted to localStorage (personal preference, no cross-device sync)
- **PWA ready:** Manifest + apple touch icons, installable to home screen

## Getting Started

### Prerequisites

- Node.js 20+
- A Neon PostgreSQL database (or any Postgres with Drizzle support)

### Setup

```bash
# Install dependencies
npm install

# Copy environment file and add your DATABASE_URL
cp .env.example .env
```

Edit `.env` with your Neon database URLs:
```
DATABASE_URL="postgresql://user:password@host-pooler.region.aws.neon.tech/dbname?sslmode=require"
DATABASE_URL_WS="postgresql://user:password@host.region.aws.neon.tech/dbname?sslmode=require"
```

> `DATABASE_URL` uses the pooled connection for server actions.  
> `DATABASE_URL_WS` uses the direct connection for LISTEN/NOTIFY (realtime).

### Database

```bash
# Push schema to database
npx drizzle-kit push

# Or generate + run migrations
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the desktop dashboard.  
Open [http://localhost:3000/mobile](http://localhost:3000/mobile) for the phone app.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, PWA tags
│   ├── page.tsx                # Desktop dashboard
│   ├── mobile/page.tsx          # Phone app
│   ├── actions.ts              # Server actions (getStore/setStore/getAllStore)
│   ├── api/realtime/route.ts   # SSE endpoint (LISTEN/NOTIFY)
│   └── globals.css             # All styles + design tokens
├── components/
│   ├── Common.tsx              # Shared components (Card, Modal, Toast, SavingOverlay)
│   ├── Overview.tsx            # Brand header, KPI row, milestones
│   ├── Economics.tsx            # Cost editors, margin, break-even
│   ├── Pillars.tsx              # Formulation, design files, social media
│   ├── Sauces.tsx               # Sauce lab R&D pipeline
│   └── Contacts.tsx             # Contacts spreadsheet
├── hooks/
│   ├── usePersistentState.ts   # DB-backed state with debounced sync + initial skip
│   ├── useDashboardState.ts    # All app state + defaults + economics math
│   └── useRealtime.ts          # SSE client for cross-device sync
└── db/
    ├── schema.ts               # Drizzle schema (dashboard_state table)
    └── index.ts                # DB client (Neon + Drizzle)
```

## Data Layer

All state is persisted to a Neon PostgreSQL database via the `dashboard_state` table:
- **key** (text, primary key) — storage key
- **value** (jsonb) — arbitrary JSON value
- **updated_at** (timestamp) — last write time

### `usePersistentState(key, defaultValue)` hook

1. **Fetch from DB** on mount (parallel — all keys fetched concurrently)
2. **Debounced write** (800ms) on value change — only after Enter/blur
3. **Saving overlay** + **"✦ saved" toast** — only on actual user edits
4. **Initial sync skip** — no redundant save on page load (~3s saved)
5. **Realtime subscription** — receives updates from other tabs/devices

### Realtime Sync

```
User edits → 800ms debounce → setStore(key, value)
  → pg_notify('ds_update', key)
  → Neon broadcasts to all listeners
  → SSE endpoint /api/realtime
  → All connected clients receive update
  → Re-fetch key from DB → UI update
```

The `useRealtime` hook manages a single `EventSource` connection that dispatches per-key callbacks. Only the affected keys are re-fetched — no full page reload needed.

### Theme (localStorage)

Theme preference is stored in `localStorage`, not the database. This keeps it as a personal device preference and avoids cross-device sync of what's essentially a UI setting.

## Performance

- Initial page load: ~1.5s (15 parallel fetch queries, no redundant writes)
- Subsequent saves: ~200ms per write (800ms debounce + DB write)
- Realtime updates: ~300ms from edit to visible on other devices
- All number inputs left-aligned for readability

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | ✅ | Pooled connection for server actions |
| `DATABASE_URL_WS` | ✅ | Direct connection for LISTEN/NOTIFY (realtime) |

## Deployment

Deploy to Vercel, Netlify, or any Node.js host:

```bash
npm run build
```

Set both `DATABASE_URL` and `DATABASE_URL_WS` environment variables on your host.  
The phone app can be installed as a PWA once hosted at a real URL.

## License

Private — Drizzle & Sauce
