# MASTERY.30

30-Day Business Mastery Roadmap — Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route | Page |
| --- | --- |
| `/` | Landing page |
| `/workspace/` | Interactive roadmap workspace |

## Scripts

- `npm run dev` — development server
- `npm run build` — static export into `out/`
- `npm run lint` — lint

## Deploy / redeploy on Render (Static Site)

This app is a **static export**. Use a **Static Site** (not a Web Service) so it stays fast with no cold starts.

### Settings

| Field | Value |
| --- | --- |
| **Branch** | `main` |
| **Root Directory** | *(leave empty)* |
| **Build Command** | `npm ci --include=dev && npm run build` |
| **Publish Directory** | `out` |

### Environment variables

| Key | Value |
| --- | --- |
| `NODE_VERSION` | `20.18.0` |
| `NPM_CONFIG_PRODUCTION` | `false` |

### Redeploy after a GitHub push

1. Push `main` to GitHub.
2. If auto-deploy is on, Render builds automatically.
3. Otherwise: Render Dashboard → your Static Site → **Manual Deploy** → **Deploy latest commit**.

Confirm **Publish Directory** is still `out` after every settings change.
