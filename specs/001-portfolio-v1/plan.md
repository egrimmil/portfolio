# Implementation Plan: Portfolio v1 (public home)

**Branch**: `001-portfolio-v1` | **Date**: 2026-09-28 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-portfolio-v1/spec.md` plus signed-off facts in `clarifications.md`.

## Summary

Ship a static, bilingual public home: identity, About copy, four work cards, location, availability, and contact (email / LinkedIn / GitHub). English is the default locale; Spanish is an explicit choice. Locale lives in the URL so share and reload keep the language. No per-project pages, no screenshots, no phone number, no new npm libraries.

## Technical Context

**Language/Version**: TypeScript 5 (strict), Next.js 16.3 App Router, React 19

**Primary Dependencies**: Existing only — `next`, `react`, `react-dom`, Tailwind 4, ESLint, Prettier. React Compiler stays on.

**Storage**: Repo TypeScript modules in `data/`. No CMS, no database.

**Testing**: No unit-test runner in v1. Checks: `npm run lint`, `npm run format:check`, `npm run build`, plus manual browser pass (desktop + ~375px, both locales).

**Target Platform**: Static public website (prerender both locales).

**Project Type**: Next.js App Router site at repo root (`app/`, no `src/`).

**Performance Goals**: Static pages; no client JS unless a component truly needs the browser. Language switch is a link, not client state.

**Constraints**: Constitution (truthful copy, no extra deps, Server Components by default). Spec FR-001–FR-012. Next.js 16 docs under `node_modules/next/dist/docs/` (i18n guide uses `[lang]` + `proxy`).

**Scale/Scope**: Two locales, one content page per locale, four projects on the home.

## Constitution Check

*GATE: Must pass before implementation. Re-check after tasks.*

| Gate | Verdict |
| --- | --- |
| I. Truthful content | Pass — copy and URLs only from `clarifications.md`. No phone in git. Archive not rendered. |
| II. Bounded product | Pass — home + locale routes only. v2 project pages/screenshots not built. |
| III. Stack | Pass — App Router, TS, Tailwind, ESLint, Prettier. No `next-intl` / negotiator. |
| IV. UI | Pass — semantic sections, mobile-first Tailwind, Geist applied on `body`. Language control is links. |
| V. Spec before code | Pass — plan and **tasks.md** exist. Implement only by executing those tasks. |

No constitution violations to track.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-v1/
├── spec.md
├── clarifications.md
├── plan.md              # this file
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md             # next SDD step, not this file
```

### Source (target)

```text
app/
  globals.css
  [locale]/
    layout.tsx           # <html lang>, fonts, metadata
    page.tsx             # composes sections
proxy.ts                 # Next.js 16 i18n proxy: `/` → `/en` (see research.md)
data/
  locales.ts             # Locale type, list, guards
  dictionary.ts          # UI chrome EN/ES
  profile.ts
  projects.ts            # home four only
  contact.ts
lib/
  metadata.ts            # title/description per locale
components/
  layout/                # header (lang switch), footer
  sections/              # hero, about, work, contact
  projects/              # project card
  ui/                    # small primitives (external link)
```

**Structure decision**: Keep existing folders. Move the live page under `app/[locale]/`. Do not use `content/projects/` MDX in v1. Do not import archive projects into runtime modules (unused archive = unused code).

## Phases (for tasks.md)

0. Research locked in `research.md` (locale routing, no Accept-Language default).
1. Data + types from `data-model.md`.
2. `[locale]` layout, proxy, metadata, `html lang`.
3. Sections wired to data; cleanup starter template and unused `Image`.
4. Apply Geist on `body`; minimal accessible layout (not a visual redesign sprint).
5. lint, format, build, browser check both locales and phone width.

## Visual bar (v1)

Professional, minimal, mobile-first. Not a brand system. Must be readable and operable. Starter “Create Next App” chrome and unused public SVGs go away if unused.
