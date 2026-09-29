# Implementation Plan: Portfolio v2 (skills, experience, web)

**Branch**: `002-portfolio-v2` | **Date**: 2026-09-28 | **Spec**: [spec.md](./spec.md)

**Input**: `spec.md` + signed `clarifications.md`.

## Summary

Add three home sections on the existing locale pages: grouped Skills, Experience (including own Attendance SaaS), and Web (Wigilabs web role). Order: About → Skills → Experience → Web → Work → Contact. No new routes, no new npm libraries, no phones.

## Technical Context

Same stack as v1: Next.js 16 App Router, TypeScript strict, Tailwind 4, Server Components only. Content in `data/*.ts`. Checks: lint, format:check, build, browser `/en` `/es` desktop + ~375px.

## Constitution Check

| Gate | Verdict |
| --- | --- |
| I. Truthful content | Pass — copy only from `clarifications.md`. No phones. No career-year sum. |
| II. Bounded product | Pass — same home. No project pages. |
| III. Stack | Pass — no new packages. |
| IV. UI | Pass — semantic sections, reuse v1 spacing/type. |
| V. Spec before code | Pass — implement only via `tasks.md`. |

## Project Structure

```text
data/skills.ts
data/experience.ts
data/web.ts
data/dictionary.ts          # add skills/experience/web headings, present/own-product labels
components/sections/Skills.tsx
components/sections/Experience.tsx
components/sections/Web.tsx
components/sections/RoleCard.tsx   # shared list item for experience + web (optional if duplication is smaller)
app/[locale]/page.tsx       # insert sections in signed order
```

Reuse `Copy` + `t()` from `data/locales.ts`. Role bullets as `Copy[]`. Own-product card: `employer: null`, display product name.

## Implementation notes

- Attendance SaaS in Experience is **not** a company; heading is the product name.
- VASS context string: `Towerbank - ikigii`.
- Web heading is the word **Web** in both locales.
- Do not change v1 Work four-card list except if copy would contradict (it should not).

## Next

Execute `tasks.md`.
