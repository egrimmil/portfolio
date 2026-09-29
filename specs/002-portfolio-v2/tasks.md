# Tasks: Portfolio v2 (skills, experience, web)

**Input**: `specs/002-portfolio-v2/` — spec.md, clarifications.md, plan.md, data-model.md

**Tests**: None. Verify lint, format:check, build, browser (desktop + ~375px, `/en` `/es`).

**Rules**: Copy only from `clarifications.md`. No phone. No new npm packages. No `'use client'`. Do not implement until T001–T003 data files exist.

## Format

`- [x] Tnnn` Description

---

## Phase 1: Data

- [x] T001 [P] Add `data/skills.ts` — four groups, exact items and headings from clarifications.
- [x] T002 [P] Add `data/experience.ts` — six roles, newest first; Attendance `employer: null`; VASS dates Sep 2023–Aug 2026 and duration 2 years 11 months; context `Towerbank - ikigii`; complete EN/ES bullets.
- [x] T003 [P] Add `data/web.ts` — Wigilabs web role only.
- [x] T004 Add dictionary keys: `skillsHeading`, `experienceHeading`, `webHeading`, and any own-product / present labels needed (complete EN/ES pairs).

## Phase 2: UI

- [x] T005 [P] `components/sections/Skills.tsx` — grouped lists, semantic headings.
- [x] T006 [P] Shared role markup (`RoleCard` or equivalent) — heading, title, period, duration, context, bullets. No links required.
- [x] T007 `components/sections/Experience.tsx` — map `experience.ts`.
- [x] T008 `components/sections/Web.tsx` — map `web.ts`; heading **Web**.
- [x] T009 Mount on `app/[locale]/page.tsx` in order: Hero, About, Skills, Experience, Web, Work, Contact.

## Phase 3: Polish

- [x] T010 Confirm no phones in DOM/source; VASS is not “Actualidad”; Web is not inside Experience.
- [x] T011 `npm run lint` and Prettier on touched TS/TSX.
- [x] T012 `npm run build`.
- [x] T013 Browser: `/en`, `/es`, ~375px and desktop; language switch; section order.
- [x] T014 Update `PROJECT_CONTEXT.md` snapshot for v2 home sections.
