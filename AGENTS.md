# AGENTS.md — Portfolio (Spec Repo)

## What this repo is
Spec-driven development template for a personal portfolio site. This repo holds **specs only** — no source code yet. The actual Astro project lives elsewhere or will be scaffolded after feature 001.

## Architecture
- `constitution/` — stable project rules (mission, tech-stack, roadmap). Rarely changes.
- `features/NNN-feature-name/` — one folder per feature: `spec.md`, `plan.md`, `tasks.md`.

## Feature workflow
1. Create `features/NNN-feature-name/` (next number from roadmap).
2. Write spec → plan → tasks.
3. Implement (actual code goes in a separate Astro project dir).
4. Validate against acceptance criteria in `spec.md`.
5. Move feature to "Done" in `constitution/roadmap.md`.

## Constitution rules
- If a feature conflicts with `mission.md` or `tech-stack.md`, the feature is reconsidered, not the constitution.

## Tech stack (enforced by constitution)
- Astro + TypeScript (strict) + Tailwind CSS
- Deployment: GitHub Pages or Vercel
- Code in English, website content in Spanish or bilingual
- Mobile-first, performance-first, no heavy UI libraries

## Gotchas
- Feature 001 (Base Structure and Hero) is currently in progress.
- No `package.json`, `src/`, or build tooling exists yet — this is a planning repo.
