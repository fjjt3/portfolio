# 002 · CV-Style Portfolio with Social & Project Links

**Status:** done

## What it does

Redesigns the portfolio into a modern, professional Curriculum Vitae layout. CV data lives in `docs/cv.md` (YAML frontmatter + Markdown) and is parsed at build time.

Additionally, the interface includes:
- Clear, direct links to the user's GitHub and LinkedIn profiles.
- A dedicated "Projects" section/button that currently redirects to the user's GitHub profile.

## Why

Transforms the portfolio into an engaging interactive web resume. Consolidates professional experience and allows recruiters and visitors to quickly access social profiles (LinkedIn and GitHub) and projects.

## Acceptance Criteria

- [x] CV data sourced from `docs/cv.md` (frontmatter + markdown).
- [x] The UI presents a clean, responsive, and visually appealing CV design.
- [x] Working GitHub and LinkedIn buttons/links are displayed and open in a new tab.
- [x] A "Projects" button/section is present and redirects to GitHub in this first iteration.
- [x] If the CV file is missing or fails to load, the app degrades gracefully.

## Out of Scope

- Detailed individual project showcase pages within the site (deferred to future iterations; currently links directly to GitHub).
- In-browser dynamic editing or form-based modification of CV content.
