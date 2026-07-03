# Tech Stack and Conventions — Portfolio

## Technologies
- **Language:** TypeScript (Strict mode).
- **Framework:** Astro (Recommended alternative for its performance in static sites).
- **Styles:** Tailwind CSS (For a modern, visually striking, and agile design).
- **Deployment:** GitHub Pages or Vercel (Automated with GitHub Actions).

## Key Files / Modules
- `src/components/` — Reusable components (cards, buttons, navbar).
- `src/layouts/` — Base structure of the page (Head, Footer, global styles).
- `src/pages/` — Application routing (index.astro, etc.).
- `src/content/` — Markdown/JSON files with project data (if not configured via API).

## Commands (OpenCode Terminal)
- `npm run dev` — Starts the local development server.
- `npm run build` — Compiles the static site for production.
- `npm run preview` — Locally previews the production build.

## Conventions
- **Naming:** kebab-case for component files (`project-card.astro`), camelCase for TypeScript variables.
- **Language:** Code and commits in English; website content in Spanish (or bilingual in the future).

## Visual Style
- **Colors:** Modern palette (dark backgrounds like Tailwind's Slate/Zinc with striking accents in Indigo or Violet).
- **Typography:** Clean sans-serif (Inter or Geist).
- **Responsive:** Mobile-first mandatory.

## Hard Limits
- Do not upload credentials or private GitHub tokens to the public repository (`.env` in `.gitignore`).
- Do not use heavy component libraries that ruin the Lighthouse score.
