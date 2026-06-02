# Drizzle & Sauce — Founder Dashboard

Founder's cockpit dashboard for **Drizzle & Sauce**, a hot-honey startup based in Khobar, KSA.  
Built with Next.js, Neon PostgreSQL, Drizzle ORM, and Playwright.

## Tech Stack

- **Framework:** Next.js 16
- **Database:** Neon PostgreSQL (serverless)
- **ORM:** Drizzle ORM
- **Testing:** Playwright
- **Fonts:** Bungee (display), Work Sans (body), JetBrains Mono (labels)
- **Styling:** Plain CSS with custom properties (design tokens), light/dark themes

## Features

- **Desktop Dashboard** (`/`) — tile grid with modal sections
- **Phone App** (`/mobile`) — bottom-tab-bar app shell with iPhone frame
- **7 Sections:** Brand & Milestones, Unit Economics, Formulation, Design Files, Social Media, Sauce Lab, Contacts
- **Inline editing:** Click any value to edit, Enter/blur to save
- **Saving overlay:** Fullscreen "Saving..." during DB writes, "✦ saved" toast on completion
- **Live recalculation:** COGS, margin, break-even update instantly
- **Status cycling:** Click status pills to cycle through states
- **Light/Dark theme:** Persisted to DB
- **PWA ready:** Manifest + apple touch icons + install prompt support

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

Edit `.env` with your Neon database URL:
```
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
```

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

## Testing

```bash
# Run all Playwright tests
npx playwright test

# Run specific test file
npx playwright test tests/brand-milestones.spec.ts

# Run with visible browser
npx playwright test --headed
```

Tests cover: tagline editing, stage selection, milestone status cycling, retail price, ingredient costs, volume slider, formulation specs, compliance cycling, design file status, social media followers, calendar CRUD, influencer CRUD, sauce status/heat/score, contact sheet CRUD, and reset behavior. All tests verify data persistence in the database.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, PWA tags
│   ├── page.tsx            # Desktop dashboard
│   ├── mobile/page.tsx     # Phone app
│   ├── actions.ts          # Server actions (getStore/setStore)
│   └── globals.css         # All styles + design tokens
├── components/
│   ├── Common.tsx          # Shared components (Card, Modal, Toast, etc.)
│   ├── Overview.tsx         # Brand header, KPI row, milestones
│   ├── Economics.tsx        # Cost editors, margin, break-even
│   ├── Pillars.tsx          # Formulation, design files, social media
│   ├── Sauces.tsx           # Sauce lab R&D pipeline
│   └── Contacts.tsx         # Contacts spreadsheet
├── hooks/
│   ├── usePersistentState.ts  # DB-backed state with debounced sync
│   └── useDashboardState.ts   # All app state + seed data + economics math
└── db/
    ├── schema.ts           # Drizzle schema (dashboard_state table)
    └── index.ts            # DB client (Neon + Drizzle)

tests/
├── brand-milestones.spec.ts
├── unit-economics.spec.ts
├── formulation.spec.ts
├── design-files.spec.ts
├── social-media.spec.ts
├── sauce-lab.spec.ts
├── contacts.spec.ts
└── db-utils.ts             # DB query helper for tests
```

## Data Layer

All state is persisted to a Neon PostgreSQL database via the `dashboard_state` table:
- **key** (text, primary key) — storage key
- **value** (jsonb) — arbitrary JSON value
- **updated_at** (timestamp) — last write time

The `usePersistentState(key, defaultValue)` hook handles:
1. Fetch from DB on mount
2. Debounced write (800ms) on value change
3. Saving overlay + toast notification
4. Initial sync skip (no flash on page load)

## Deployment

Deploy to Vercel, Netlify, or any Node.js host:

```bash
npm run build
```

Set the `DATABASE_URL` environment variable on your host.  
The phone app can be installed as a PWA once hosted at a real URL.

## License

Private — Drizzle & Sauce

