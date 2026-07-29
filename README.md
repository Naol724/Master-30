# Master30 — 30-Day Business Mastery Roadmap

Next.js + TypeScript + Tailwind CSS port of the Master30 learning workspace.

## Deploy on Render (Static Site)

Use **Static Site** (not Web Service) so the app opens instantly with no cold starts.

| Field | Value |
| --- | --- |
| **Build Command** | `npm ci --include=dev && npm run build` |
| **Publish Directory** | `out` |

Env vars: `NODE_VERSION=20.18.0`, `NPM_CONFIG_PRODUCTION=false`

Local:

```bash
npm install
npm run dev
```
