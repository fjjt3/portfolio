# 001 · Base Structure and Hero — Plan

## Approach
We will install Astro with TypeScript and Tailwind CSS using the OpenCode terminal. We will create a global Layout to avoid repeating header/footer code and design the basic components with Tailwind classes using flexbox and grid to ensure responsiveness.

## Implementation
1. Initialize the Astro project in the terminal: `npm create astro@latest`.
2. Add Tailwind CSS: `npx astro add tailwind`.
3. Create `src/layouts/Layout.astro` with HTML5 structure, typography, and global style imports.
4. Create individual components under `src/components/`: `Navbar.astro`, `Footer.astro`, and `Hero.astro`.
5. Unify everything inside `src/pages/index.astro`.

## Decisions
- **Astro Components:** We will use native Astro components (`.astro`) instead of React/Vue to keep the JavaScript bundle at 0 KB during this first stage.

## Risks
- **Design layout issues on medium screens (tablets):** Mitigated by conscientiously using Tailwind's `md:` and `lg:` prefixes.
