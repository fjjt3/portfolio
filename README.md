# spec/ — Spec Driven Development (Template)

> Generic template to document any project with Spec Driven Development (SDD): first write the spec, then the plan, then the tasks, and only then touch the code.
>
> **How to use this template:** copy this folder to your project as `spec/`, fill in the `constitution/` once at startup, and create a folder per feature under `features/NNN-feature-name/`. Replace everything between `<…>` and delete the notes in *italics*.

## Structure

```
spec/
├── constitution/            ← stable rules of the project (rarely change)
│   ├── mission.md           ← what we build and for whom
│   ├── tech-stack.md        ← technologies, conventions, and hard limits
│   └── roadmap.md           ← order of the features
└── features/                ← one folder per feature
    └── NNN-feature-name/
        ├── spec.md          ← what it does + acceptance criteria
        ├── plan.md          ← how it is implemented
        └── tasks.md         ← checklist of tasks
```

## Flow for a New Feature

1. Create `features/NNN-feature-name/` with the next available number (`001`, `002`, …).
2. Write `spec.md`: what it does, why, and measurable acceptance criteria.
3. Write `plan.md`: technical approach and decisions, respecting `constitution/tech-stack.md`.
4. Break it down in `tasks.md` and track progress.
5. Implement and validate (build/tests/lint or whatever the constitution defines).
6. Update `constitution/roadmap.md` (move the feature to "Done").

> The constitution rules: if a feature clashes with `mission.md` or `tech-stack.md`, the feature is reconsidered, not the constitution.
