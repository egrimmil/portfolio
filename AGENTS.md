<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent instructions

This is Elkin Fracica’s personal portfolio (Next.js 16 App Router). Work is Spec-Driven: constitution, then spec, then plan and tasks, then code.

## Do this first

1. Read `.specify/memory/constitution.md`, then `PROJECT_CONTEXT.md` and `AI_RULES.md`.
2. For product work, read the active spec under `specs/` (currently `specs/003-portfolio-v3/spec.md`).
3. Do not implement portfolio UI except by executing the active spec’s `tasks.md`. v3 restyle is implemented; later product work needs a new spec.
4. Confirm the change is needed. Do not rewrite the app or add dependencies without a reason.
5. For Next.js APIs, open the local docs in `node_modules/next/dist/docs/` instead of assuming older App Router behavior.

## Non-negotiable

- Do not invent professional experience, companies, projects, technologies, metrics, or achievements.
- Prefer Server Components. Client Components only when interactivity or browser APIs require them.
- TypeScript strict. No `any`. No unused code. No drive-by refactors.
- Mobile-first, accessible, semantic HTML. Minimal visual language. No extra animation libraries by default.
- Do not install packages unless you explain why first.
- Keep the Next.js-managed block above intact.

## Before changing code

State what will change, which files, and why.

## After changing code

Report files changed, dependencies added, checks run (`lint`, `format`, `build` when the change is significant), and leftover issues.
