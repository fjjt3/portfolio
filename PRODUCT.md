# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and tech leads (primary):** evaluating Francisco Jiménez quickly. They arrive with little time, scan for role fit and proof of skills, then leave for the CV or contact.
- **Dev community (secondary):** other developers who want to see the code and connect.
- **Francisco himself:** a practice ground for OpenCode, modern deployment, and clean front-end craft.

## Product Purpose

A personal portfolio and digital business card for a software engineer. It presents professional value, experience, and projects, and routes visitors to the CV and contact links. Success means a recruiter understands the candidate's fit within seconds and leaves for the CV, GitHub, LinkedIn, or email.

## Positioning

Backend-engineer depth. The site leads with real production backend work — Java, Spring Boot, Quarkus, microservices, cloud (Azure), and observability (Grafana, Prometheus) — accumulated across CGI, Sulzer, and PwC. A generic design-template portfolio cannot claim this specific, verifiable backend track record.

## Operating Context

- Content source of truth is `docs/cv.md` (name, title, location, contact, experience, education, skills, languages).
- Experience spans betting software (CGI / The Workshop), BMW factory software (Sulzer), and business-intelligence plus a custom GPT chatbot (PwC).
- Maintained through a spec-driven workflow: `constitution/`, `specs/NNN-feature/`, then implementation in `src/`.
- The author uses Claude Code and OpenCode day to day; SDD, TDD, and agile (Scrum/Kanban) are part of how he works.

## Capabilities and Constraints

- Framework: Astro + TypeScript (strict) + Tailwind CSS. No heavy UI component libraries that hurt Lighthouse.
- Deployed as an SSR Node build (`@astrojs/node`, standalone) to Render (`render.yaml`).
- Mobile-first and performance-first are mandatory.
- Content is source-controlled markdown/JSON; adding a project should stay cheap (markdown or GitHub API).
- Not a blog, not a database-backed platform, no complex backend — static/Jamstack scope.
- Explicitly undecided: whether the Projects section uses the live GitHub API (backlog 004) or hardcoded/Markdown entries (next 003).
- Visitor-facing content ships **bilingual (Spanish + English)**; code, commits, and identifiers are English.

## Brand Commitments

- Personal identity: Francisco Jiménez, Software Engineer, Málaga, Spain.
- Canonical links: GitHub `github.com/fjjt3`, LinkedIn `linkedin.com/in/francisco-javier-jt/`.
- Native dark mode; clean, modern aesthetic (palette guidance in `constitution/tech-stack.md`).

## Evidence on Hand

- `docs/cv.md` — full CV: profile, three roles, education, skills, five languages.
- `constitution/` — mission, tech stack, roadmap (features 000–003 done or next).
- `specs/001`, `specs/002`, `specs/003` — prior feature specs and plans.
- No public testimonials, client logos, press, or performance benchmarks on hand. Do not fabricate any.

## Product Principles

1. **Proof over polish-padding.** Every section should carry verifiable evidence (roles, tech, links); no invented claims.
2. **Seconds to comprehension.** A recruiter must grasp role, stack, and fit almost immediately.
3. **Backend depth leads.** The backend track record is the differentiator and drives what gets prioritized.
4. **Speak the visitor's language.** Bilingual content, no jargon that only the author understands.
5. **Cheap to maintain.** New projects and edits stay fast, static, and low-friction.

## Accessibility & Inclusion

- Mobile-first and responsive are required.
- Bilingual content must remain reachable and switchable without loss of meaning.
