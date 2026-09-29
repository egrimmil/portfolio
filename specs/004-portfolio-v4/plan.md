# Implementation Plan: Portfolio v4 (all-projects page)

**Branch**: `004-portfolio-v4` | **Date**: 2026-09-29 | **Spec**: [spec.md](./spec.md)

**Input**: `spec.md` + `clarifications.md` (v1 Q2 archive).

## Summary

Add `/{locale}/projects` listing every signed project as cards, newest first. Keep the home featured four. Point header/dock Projects at the new route. No new npm packages.

## Technical Context

Next.js 16 App Router nested page `app/[locale]/projects/page.tsx`. TypeScript strict, Tailwind 4, Server Components. Locale switch needs `usePathname` so `/es/projects` does not drop to `/es`. Checks: lint, format, build, browser `/en/projects` and `/es/projects`.

## Constitution Check

| Gate | Verdict |
| --- | --- |
| I. Truthful content | Pass — v1 Q2 only. |
| II. Bounded product | Pass — spec-named locale route; constitution 1.1.1. |
| III. Stack | Pass — no new packages. |
| IV. UI | Pass — reuse ProjectCard, v3 tokens. |
| V. Spec before code | Pass — implement via `tasks.md`. |

## Project Structure

```text
data/projects.ts              # featured flag + archive entries
data/dictionary.ts            # page heading, view-all, metadata
data/nav.ts                   # Projects href → /{locale}/projects
app/[locale]/projects/page.tsx
components/layout/LocaleSwitch.tsx
components/sections/Work.tsx  # featured only + link
```

## Next

Execute `tasks.md`.
