# 001 · Render Deployment — Tasks

_Actionable checklist derived from `plan.md`._

- [x] Check `astro.config.mjs` for `@astrojs/node` adapter configuration.
- [x] Run `npm run build` locally to verify production build output structure.
- [x] Commit all updated files and push to GitHub repository (`main` branch).
- [ ] Create a new **Web Service** on Render connected to the repository via the committed `render.yaml` blueprint (Dashboard → **New → Blueprint**) or the settings below.
- [ ] Configure Render setting:
  - **Name:** `portfolio`
  - **Environment:** `Node`
  - **Build Command:** `npm run build`
  - **Start Command:** `node ./dist/server/entry.mjs`
- [ ] Add Environment Variable `NODE_VERSION` = `22`.
- [ ] Trigger manual build / deploy on Render.
- [ ] Verify deployment logs and check live URL responsiveness.
- [ ] Validate against acceptance criteria in `spec.md`.