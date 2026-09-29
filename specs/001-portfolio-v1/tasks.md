# Tasks: Portfolio v1 (public home)

**Input**: `specs/001-portfolio-v1/` — spec.md, clarifications.md, plan.md, research.md, data-model.md

**Tests**: None requested. Verify with lint, format:check, build, and browser (see polish).

**Rules**: Copy only from `clarifications.md`. No phone. No archive on the home. No npm packages. No `'use client'` unless a task proves a browser API is required (language switch is `<Link>`). Do not start until T001–T008 are done.

## Format

`[ID] [P?] [Story] Description` — `[P]` = parallel-safe (different files).

---

## Phase 1: Setup

Repo and folders already exist. No create-next-app.

- [x] T001 Confirm Next 16 i18n file convention in `node_modules/next/dist/docs/01-app/02-guides/internationalization.md` (use `proxy.ts` vs `middleware.ts` as documented for this version).
- [x] T002 Remove unused starter assets that nothing will reference (`public/next.svg`, `public/vercel.svg`, `public/globe.svg`, `public/file.svg`, `public/window.svg` if unused after the move).

---

## Phase 2: Foundational (blocks all stories)

- [x] T003 [P] Add `data/locales.ts` — `Locale`, `locales`, `isLocale` (`en` | `es`).
- [x] T004 [P] Add `data/dictionary.ts` — UI chrome EN/ES (`workHeading`, `contactHeading`, `languageNavLabel`, `english`, `spanish`, external-link SR text). Complete pairs only.
- [x] T005 [P] Add `data/profile.ts` — name, role, about, location, availability per `data-model.md` / `clarifications.md`.
- [x] T006 [P] Add `data/projects.ts` — exactly four home projects, newest first; Attendance `url: null` + `inDevelopment`; no archive.
- [x] T007 [P] Add `data/contact.ts` — email mailto, LinkedIn, GitHub only.
- [x] T008 Add `lib/metadata.ts` — locale title/description (no “Create Next App”).
- [x] T009 Move shell to `app/[locale]/layout.tsx`: fonts, `html lang={locale}`, `generateStaticParams`, `generateMetadata`, `notFound` if `!isLocale`. Keep `app/globals.css`.
- [x] T010 Add root locale redirect: `/` → `/en` only (no `Accept-Language`). File name from T001 (`proxy.ts` or `middleware.ts`). Matcher skips `_next` and static files.
- [x] T011 Add `app/[locale]/page.tsx` as a thin composer (empty sections OK). Delete `app/page.tsx` and the commented create-next-app markup / unused `Image` import.
- [x] T012 Apply Geist on `body` (`font-sans` in `app/globals.css` / layout classes).

**Checkpoint**: `/en` and `/es` respond; `/` redirects to `/en`; `lang` matches; invalid locale 404s.

---

## Phase 3: US1 — Identify the person (P1)

**Independent test**: Open `/en` and `/es`; name, role, master’s/about, document title are correct and not the Next starter.

- [x] T013 [US1] `components/layout/SiteHeader.tsx` — name; language links `/en` ↔ `/es` with `aria-current` on the active locale (`languageNavLabel`).
- [x] T014 [US1] `components/sections/Hero.tsx` — name, role, location + labels, availability + labels.
- [x] T015 [US1] `components/sections/About.tsx` — About / Sobre mí + signed-off paragraphs.
- [x] T016 [US1] Compose hero + about + header on `app/[locale]/page.tsx`. Metadata already from T008–T009.

**Checkpoint**: US1 readable on a phone-width viewport.

---

## Phase 4: US2 — See real work (P1)

**Independent test**: Four cards; Attendance has status and no store link; other three Play Store links open a new tab; no invented employers or archive apps.

- [x] T017 [US2] `components/ui/ExternalLink.tsx` — `target="_blank"` `rel="noopener noreferrer"` + SR hint from dictionary.
- [x] T018 [US2] `components/projects/ProjectCard.tsx` — name, role, optional summary, tech, URL or in-development label; never link `id` to a project route.
- [x] T019 [US2] `components/sections/Work.tsx` — heading + map `data/projects.ts` in order.
- [x] T020 [US2] Mount Work on `app/[locale]/page.tsx`.

---

## Phase 5: US3 — Contact (P1)

**Independent test**: Email, LinkedIn, GitHub work; **no phone** in DOM or repo source.

- [x] T021 [US3] `components/sections/Contact.tsx` — labels + `href`s from `data/contact.ts`.
- [x] T022 [P] [US3] `components/layout/SiteFooter.tsx` — minimal; may repeat contact or copyright name only; no phone.
- [x] T023 [US3] Mount Contact + footer on `app/[locale]/page.tsx`.

---

## Phase 6: US4 — English / Spanish (P1)

Mostly done by T009–T013. Close gaps.

- [x] T024 [US4] Confirm every visible string on the home (headings, status, labels, lang names) comes from `Copy` / dictionary; no mixed chrome.
- [x] T025 [US4] Confirm share/reload of `/es` stays Spanish; first hit `/` is English.

---

## Phase 7: US5 — Phone viewport (P2)

- [x] T026 [US5] Mobile-first spacing on header, sections, cards, language control (readable ~375px, no horizontal scroll, usable tap targets). Semantic landmarks (`header`, `main`, `nav`, `footer`). Visible focus styles.

---

## Phase 8: Polish

- [x] T027 `npm run lint` (zero unused-import warnings).
- [x] T028 `npm run format:check` (or format then check).
- [x] T029 `npm run build` — static `/en` and `/es`.
- [x] T030 Browser: desktop + ~375px, both locales, keyboard through lang + contacts, no phone, Attendance not a fake store URL.
- [x] T031 [P] Point `PROJECT_CONTEXT.md` current snapshot at the real home (after it exists). Leave AGENTS Next.js block intact.

---

## Order

1. T001–T002  
2. T003–T007 in parallel, then T008–T012  
3. US1 → US2 → US3 → US4 → US5 → polish  

Stop after Phase 2 or after US1 to validate before continuing.

## Out of scope (do not add tasks)

Per-project routes, screenshots, archive page, `next-intl`, phone field, MDX.
