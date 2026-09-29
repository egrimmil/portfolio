# Tasks: Portfolio v3 (Stitch restyle)

**Input**: `specs/003-portfolio-v3/` — spec, clarifications, plan, design.md

**Rules**: No Stitch demo projects/metrics/articles. No phone. No new npm packages. Role = Senior Android Developer / Desarrollador Android Senior. Default theme dark.

## Phase 1: Tokens and chrome

- [x] T001 Map `design.md` colors/type/radius/spacing to CSS variables in `app/globals.css` for `[data-theme=dark]` and `[data-theme=light]`.
- [x] T002 Locale layout: Inter + JetBrains Mono via `next/font`; apply on `html`/`body`. Remove Geist as the primary UI font.
- [x] T003 Theme: persist `dark`/`light`; default `dark`; `ThemeToggle` client; avoid light flash on first load.
- [x] T004 Dictionary: nav Overview/Projects/Architecture/Stack/Contact (EN/ES), theme control labels, project/contact CTA labels.
- [x] T005 `profile.role` → Senior Android Developer / Desarrollador Android Senior; metadata title/description still truthful (name + new role).

## Phase 2: Navigation

- [x] T006 Header: desktop in-page links to signed hashes; language links; theme control; availability pill. Hide or compact on small screens as in screenshots.
- [x] T007 Mobile dock: same five hashes, ~44px targets, safe-area padding. `aria-current` when possible without lying.
- [x] T008 Section `id`s on the home: `overview`, `experience`, `web`, `skills`, `work`, `contact`. Page padding so the dock does not cover Contact.

## Phase 3: Sections

- [x] T009 Restyle Hero + About (`#overview`): name, signed role, About copy, CTAs to `#work` / `#contact`, skill chips from signed list only. No fake IDE.
- [x] T010 Optional telemetry: only `experienceSummary` (Mobile +8 years / Web +1 years). No 15M / 99.9% / 8+ / &lt;16ms.
- [x] T011 Restyle Skills as four stack cards (`#skills`). Signed items only.
- [x] T012 Restyle Experience (`#experience`) + Web (`#web`) as glass cards/timeline-friendly lists. Keep v2 facts.
- [x] T013 Restyle Work (`#work`) as project cards for the four signed apps (grid on desktop, stack on mobile). In-development + Play links unchanged in meaning.
- [x] T014 Restyle Contact (`#contact`) + footer. Email, LinkedIn, GitHub. No Writing block. No Compose credit.

## Phase 4: Polish

- [x] T015 Keyboard, focus rings, `html lang`, no phones in DOM.
- [x] T016 `npm run lint` and Prettier on touched files.
- [x] T017 `npm run build`.
- [x] T018 Browser: `/en` `/es`, 375px + desktop, theme toggle + reload, all five nav jumps.
- [x] T019 Update `PROJECT_CONTEXT.md` snapshot (v3 visual, signed role, theme).
