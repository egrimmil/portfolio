# Project context

Personal site for **Elkin Fracica**, software engineer focused on Android and Kotlin Multiplatform.

This file is the shared briefing for people and coding agents. Read it before changing product, content, or architecture.

## Purpose

Build a truthful, professional portfolio that presents Elkin’s real work, skills, and contact paths. It is not a template demo, not a blog platform, and not a place to invent a career narrative.

## Current snapshot (2026-09-29)

v3 home at `/en` (default) and `/es`: Stitch visual system, dark default with light toggle, in-page nav. Role: Senior Android Developer. Content from v1/v2 (no Stitch demo metrics/projects/writing). No phone. No per-project pages.

## Stack

| Layer         | Choice                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------ |
| Framework     | Next.js 16 (App Router)                                                                    |
| UI            | React 19                                                                                   |
| Language      | TypeScript (strict)                                                                        |
| Styling       | Tailwind CSS 4                                                                             |
| Compiler      | React Compiler enabled in `next.config.ts`                                                 |
| Lint / format | ESLint (`eslint-config-next`) and Prettier (`singleQuote`, `semi`, Tailwind class sorting) |
| Alias         | `@/*` → repo root                                                                          |

MDX is allowed later if a content section needs it. Do not add libraries until they are justified.

## Layout of the repo

```
app/                   App Router: layout, page, globals.css
components/ui/         Reusable UI primitives (empty for now)
components/layout/     Site chrome: header, footer, shell (empty for now)
components/sections/   Page sections (empty for now)
components/projects/   Project-specific UI (empty for now)
content/projects/      Project content files (empty for now)
data/                  Typed data modules (empty for now)
lib/                   Shared helpers (empty for now)
public/                Static assets (still the Next.js starter SVGs)
.specify/              SDD constitution and process notes
specs/                 Feature specs (active: 001-portfolio-v1)
AI_RULES.md            Coding and content rules for agents
AGENTS.md              Agent entrypoint (includes a Next.js-managed block)
CLAUDE.md              Points at AGENTS.md
PROJECT_CONTEXT.md     This file
```

There is no `src/` directory. Keep the App Router at `app/`.

## Product direction

- Mobile-first, responsive, accessible, semantic HTML.
- Professional and minimal. Avoid decorative animation and extra UI kits.
- Prefer Server Components. Use Client Components only when the UI needs browser APIs or interaction.
- Keep components small. Avoid global state unless something actually shares client state.
- Portfolio copy must be real. If a fact is unknown, use an obvious placeholder; never fill gaps with invented jobs, companies, metrics, or tech.

## Commands

```bash
npm run dev            # local server
npm run build          # production build
npm run lint           # ESLint
npm run format         # Prettier write
npm run format:check   # Prettier check
```

Node docs for this Next.js version live under `node_modules/next/dist/docs/`. Training data for older Next.js is not a reliable API source.

## Owner notes

- Owner: Elkin. Role: software engineer. Public role: Android / Kotlin Multiplatform (KMP work for 7+ months; do not name the project until listed).
- Chat with Elkin may be in Spanish. Public site copy is English and Spanish; **default locale is English**. Code and identifiers stay in English.
- Do not expand scope (auth, CMS, analytics, extra pages) unless the task asks for it.
- Product work follows SDD: see `.specify/README.md`. Constitution outranks ad-hoc prompts.
