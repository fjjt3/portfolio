# Portfolio

Personal portfolio site built with **Spec Driven Development (SDD)**: write the spec, plan, and tasks first; then implement in code.

## Structure

```
portfolio/
├── constitution/            ← stable rules (mission, tech stack, roadmap)
├── features/                ← one folder per feature (spec, plan, tasks)
├── src/                     ← Astro app (components, layouts, pages)
├── public/                  ← static assets
├── astro.config.mjs
└── package.json
```

## Quick start

```sh
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production → `./dist/` |
| `npm run preview` | Preview production build locally |

## Flow for a new feature

1. Create `features/NNN-feature-name/` with the next number from `constitution/roadmap.md`.
2. Write `spec.md` — what it does and acceptance criteria.
3. Write `plan.md` — technical approach (respect `constitution/tech-stack.md`).
4. Break down work in `tasks.md`.
5. Implement in `src/` and validate against the spec.
6. Move the feature to "Done" in `constitution/roadmap.md`.

> If a feature clashes with `constitution/mission.md` or `tech-stack.md`, reconsider the feature — not the constitution.
