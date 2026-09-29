# Implementation Plan: Portfolio v3 (Stitch restyle)

**Branch**: `003-portfolio-v3` | **Date**: 2026-09-29 | **Spec**: [spec.md](./spec.md)

## Summary

Restyle `/en` and `/es` to the Stitch visual system. Keep v1/v2 data. Change role to Senior Android Developer. Dark default + light toggle (persisted). In-page nav (header desktop, dock mobile). No new npm packages. No Writing section. No Stitch demo stats or apps.

## Technical Context

Next.js 16 App Router, TS strict, Tailwind 4 CSS-first, React 19. Fonts: `next/font/google` Inter + JetBrains_Mono (replace Geist on the locale layout). Theme: `data-theme="dark" | "light"` on `<html>` via a small Client Component + `localStorage` key `theme`. Optional inline script in layout to set theme before paint (no `next-themes` package).

CSS variables in `app/globals.css` for both themes; dark values from `design.md` / Stitch surfaces; light = inverted neutrals, same primary/secondary/tertiary hues, WCAG-readable text.

## Constitution Check

| Gate | Verdict |
| --- | --- |
| I. Truthful content | Pass if tasks forbid Stitch lorem |
| II. Bounded product | Pass — same home + anchors |
| III. Stack | Pass — no new packages; Client only for theme/dock |
| IV. UI | Pass — mobile-first + desktop grid; CSS glow OK; no animation lib |
| V. Spec | Pass — implement via `tasks.md` only |

## Structure

```text
app/globals.css                 # tokens dark/light
app/[locale]/layout.tsx         # fonts, html data-theme class
components/theme/ThemeToggle.tsx    # client
components/theme/ThemeScript.tsx    # optional anti-FOUC
components/layout/SiteHeader.tsx    # desktop nav + lang + theme
components/layout/SiteDock.tsx      # mobile anchors
components/layout/SiteFooter.tsx
components/sections/*               # restyle existing sections
data/profile.ts                     # role Copy
data/dictionary.ts                  # nav labels, theme labels, CTAs
```

Do not add fake `HomeViewModel.kt` or metric tiles except signed `experienceSummary`.

## Checks

`npm run lint`, Prettier on touched files, `npm run build`, browser: `/en` `/es`, 375px + desktop, theme toggle + reload, each hash link.

## Next

Execute `tasks.md`.
