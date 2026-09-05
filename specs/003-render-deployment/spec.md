# 001 · Render Deployment

**Status:** proposed

## What it does

Deploys the developer portfolio website built with Astro (SSR mode) and Tailwind CSS to Render using Node.js web service environment, ensuring seamless continuous deployment from GitHub.

## Why

To make the developer portfolio publicly accessible online with automated deployment workflows on every Git push, showcasing projects, skills, and background to potential recruiters and clients.

## Acceptance Criteria

- [ ] Repository is connected to Render as a Web Service.
- [ ] Environment variable `NODE_VERSION` is set to a compatible version (`22` — Astro 7 requires Node `>=22.12.0`).
- [ ] Build command `npm run build` compiles without errors.
- [ ] Start command `node ./dist/server/entry.mjs` (or configured standalone server entry) successfully runs the Astro SSR adapter.
- [ ] The website is accessible via the generated Render URL with HTTPS enabled.
- [ ] Automatic deployments trigger on new pushes to the `main` branch.

## Out of Scope

- Setting up a custom domain name (deferred to post-launch).
- Setting up external database integrations or complex API backend services.