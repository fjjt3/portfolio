# AGENTS.md — Portfolio

## What this repo is
Spec-driven personal portfolio site. Specs live alongside the Astro app at the repo root.

## Architecture
- `constitution/` — stable project rules (mission, tech-stack, roadmap). Rarely changes.
- `features/NNN-feature-name/` — one folder per feature: `spec.md`, `plan.md`, `tasks.md`.
- `src/` — Astro components, layouts, pages, and styles.
- `public/` — static assets.

## Feature workflow
1. Create `features/NNN-feature-name/` with the next available number.
2. Write spec → plan → tasks.
3. Implement in `src/` at the repo root.
4. Validate against acceptance criteria in `spec.md`.
5. Move feature to "Done" in `constitution/roadmap.md`.

## Development
- `npm install` — install dependencies (Node >= 22.12.0).
- `npm run dev` — local dev server at `http://localhost:4321`.
- `npm run build` — production build to `./dist/`.
- `npm run preview` — preview the production build locally.

## Constitution rules
- If a feature conflicts with `mission.md` or `tech-stack.md`, the feature is reconsidered, not the constitution.

## Tech stack (enforced by constitution)
- Astro + TypeScript (strict) + Tailwind CSS
- Deployment: GitHub Pages or Vercel
- Code in English, website content in Spanish or bilingual
- Mobile-first, performance-first, no heavy UI libraries

## Gotchas
- Feature 001 (Base Structure and Hero) is currently in progress.
