# Portfolio Constitution

This constitution governs every later spec, plan, task list, and implementation for Elkin Fracica’s personal portfolio. Later artifacts must be checked against it. If a prompt conflicts with this file, this file wins.

## Core Principles

### I. Truthful content

Portfolio copy must be real. Do not invent jobs, companies, projects, technologies, metrics, achievements, or testimonials. If a fact is unknown, use an obvious placeholder such as `TBD`. Never fill gaps to make the site look finished.

### II. Bounded product

This is a personal professional site. It is not a CMS, blog platform, authenticated app, or marketing experiment. Do not add auth, a CMS, analytics, extra marketing pages, or unrelated product features unless a later spec explicitly expands scope and this constitution is amended.

### III. Existing stack and architecture

Keep Next.js App Router, TypeScript, Tailwind CSS, ESLint, and Prettier. Keep the App Router at `app/` (no `src/` directory). Prefer Server Components. Use Client Components only when interactivity or browser APIs require them. Do not add libraries unless the plan names them and explains why.

### IV. Small, honest UI

Mobile-first, responsive, accessible, semantic HTML. Professional and minimal. Avoid decorative animation and UI kits. Keep components small. Avoid global client state unless something actually shares it.

### V. Spec before code for product work

For product features, do not implement until the feature has `spec.md`, then `plan.md`, then `tasks.md`. Cleanup that does not change user-facing behavior may happen without a new spec if it does not violate this constitution. Do not rewrite the app to match a template.

## Engineering standards

- TypeScript `strict`. No `any`. No unused code. No drive-by refactors.
- Read Next.js 16 docs under `node_modules/next/dist/docs/` instead of assuming older APIs.
- Keep the Next.js-managed block in `AGENTS.md` intact.
- After significant code changes: ESLint. After significant formatting-sensitive changes: Prettier. Before a milestone: production build.
- Public site copy is **English and Spanish**. The visitor chooses the language. Code, identifiers, and git history stay in English. Chat with Elkin may be in Spanish.

## Source of truth

| Document | Role |
| --- | --- |
| `.specify/memory/constitution.md` | Non-negotiable principles |
| `AI_RULES.md` | Day-to-day coding and content rules |
| `PROJECT_CONTEXT.md` | Product briefing and current snapshot |
| `specs/<id>/spec.md` | What and why for the active feature |
| `specs/<id>/plan.md` | How, after the spec is stable |

If these documents disagree, stop and reconcile them. Do not implement the conflict.

## Governance

- Ratify changes by editing this file and updating **Last Amended**.
- A new principle or a scope expansion (new routes, CMS, MDX, extra pages) requires a constitution amendment plus an updated spec.
- Agents must not weaken “truthful content” or “bounded product” to ship faster.

**Version**: 1.1.0 | **Ratified**: 2026-09-28 | **Last Amended**: 2026-09-28 (bilingual public copy; language selection in scope for v1)
