<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent instructions

This is Elkin Fracica’s personal portfolio (Next.js 16 App Router). Start by reading `PROJECT_CONTEXT.md`. Follow `AI_RULES.md` for coding and content rules.

## Do this first

1. Read `PROJECT_CONTEXT.md` for purpose, stack, and current state.
2. Confirm the change is needed. Do not rewrite the app or add dependencies without a reason.
3. For Next.js APIs, open the local docs in `node_modules/next/dist/docs/` instead of assuming older App Router behavior.

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
