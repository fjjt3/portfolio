# 001 · Render Deployment — Plan

_How the feature described in `spec.md` is implemented, obeying project architecture._

## Approach

Use Render's Web Service platform (configured for SSR Node.js runtime) rather than a Static Site. Astro configured with `@astrojs/node` in `standalone` mode builds the output into `dist/server/entry.mjs`. Render will run `npm run build` during build step and start the server using Node.js.

## Implementation

1. Verify local Astro configuration (`astro.config.mjs`) contains `@astrojs/node` adapter with `output: 'server'`.
2. Commit and push all project files to GitHub (`main` branch).
3. Create a new Web Service on Render linked to the GitHub repository (a `render.yaml` blueprint is committed at the repo root to set this up via Dashboard → **New → Blueprint**).
4. Set Build Command: `npm run build` and Start Command: `node ./dist/server/entry.mjs`.
5. Configure environment variables (`NODE_VERSION=22`).
6. Deploy service and verify status logs and live URL.

## Decisions

- **Web Service over Static Site** — Required because the project uses Astro SSR (Server-Side Rendering).
- **Node Adapter Standalone Mode** — Allows running directly with `node` without requiring heavy Docker containers or complex custom server setups.

## Risks

- **Missing Node dependencies at runtime** — Mitigated by ensuring all required dependencies are in `dependencies` (not `devDependencies` if required at runtime).
- **Environment variables mismatch** — Mitigated by defining required secrets in Render's dashboard before first deployment.