# Master30 — 30-Day Business Mastery Roadmap

Next.js + TypeScript + Tailwind CSS port of the Master30 learning workspace. Same interface and behavior as the original standalone HTML app.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Local storage for theme, task progress, and business canvas

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint

## Project layout

- `src/app` — Next.js app entry, layout, global styles
- `src/components` — UI sections (navbar, roadmap, tools, canvas, vault)
- `src/data` — curriculum and library datasets
- `src/lib` — storage, checkpoints, formatting helpers

The original `Master30.html` is kept as a reference of the pre-migration single-file app.

## Deploy on Render

1. Push this repo to GitHub/GitLab.
2. In Render: **New + → Web Service** → connect the repo.
3. Fill in:

| Field | Value |
| --- | --- |
| **Name** | `master30` (or any name) |
| **Language / Runtime** | `Node` |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | leave empty (repo root) |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | Free (or paid) |

4. Environment variables (optional but recommended):

| Key | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `20.18.0` |

Render sets `PORT` automatically — do not hardcode it.

You can also deploy with the included `render.yaml` via **Blueprints**.
