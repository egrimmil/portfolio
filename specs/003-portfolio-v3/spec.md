# Feature Specification: Portfolio v3 (Stitch visual system on real content)

**Feature Branch**: `003-portfolio-v3`

**Created**: 2026-09-29

**Status**: Implemented — Stitch restyle on `/en` and `/es`

**Input**: Restyle the bilingual home to match Stitch on mobile **and** desktop. Facts stay v1/v2 except the signed role **Senior Android Developer**.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Stitch chrome, both viewports (Priority: P1)

A visitor sees dark-tech Android-green UI from `design.md`. On a phone it matches the mobile captures; on a wide screen it matches the desktop captures (header, grid, two-column hero), not a stretched phone column.

**Independent Test**: ~375px and ≥1024px `/en` and `/es`.

**Acceptance Scenarios**:

1. **Given** either locale, **When** the home loads, **Then** tokens, type (Inter / JetBrains Mono), cards, chips, and pills follow `design.md`.
2. **Given** a desktop width, **When** they view the hero and stack, **Then** layout uses a multi-column/header pattern as in the desktop screenshots, not mobile stacked-only.
3. **Given** ~375px, **When** they scroll, **Then** a dock of in-page anchors remains usable (~44px targets).

---

### User Story 2 - Truthful content (Priority: P1)

**Independent Test**: No FinFlow, PulseFit, StreamCast, Nexus, 15M+, 99.9%, &lt;16ms, fake Kotlin file, articles, Architect title, unsigned tools.

**Acceptance Scenarios**:

1. Work cards = four signed projects.
2. Skills = signed v2 groups only.
3. Role line = Senior Android Developer / Desarrollador Android Senior.
4. Contact = email, LinkedIn, GitHub only.

---

### User Story 3 - Theme and language (Priority: P1)

**Acceptance Scenarios**:

1. First visit with no saved theme is **dark**.
2. Visitor can switch to **light** and back; reload keeps the choice.
3. Locale switch still uses `/en` and `/es`; `html lang` matches.
4. Light theme keeps primary green and readable text on light surfaces.

---

### User Story 4 - Same-page navigation (Priority: P1)

**Acceptance Scenarios**:

1. Overview, Projects, Architecture, Stack, Contact jump to the signed ids without leaving the home.
2. Active locale is preserved (anchors on the current `/en` or `/es`).

---

### Edge Cases

- Reduced motion: no required pulse; static status dot OK.
- Theme before hydration: default dark to avoid a light flash on first paint when possible.
- Web section has no dock item; still in the document after Experience.
- Writing section absent.

## Requirements *(mandatory)*

- **FR-001**: Same locale home only. No project-detail routes, auth, CMS, or blog.
- **FR-002**: Visual system from `design.md`; layout from mobile + desktop screenshots.
- **FR-003**: Claims from v1/v2 clarifications + signed role change. No Stitch demo metrics/projects/articles.
- **FR-004**: EN/ES complete. Default locale English. Default theme dark. Theme user-selectable and persisted.
- **FR-005**: No new npm UI/animation libraries. Inter + JetBrains Mono via `next/font`.
- **FR-006**: Client Components only for theme toggle and any dock “current section” that needs `IntersectionObserver`. Language = `<Link>`.
- **FR-007**: No phone.
- **FR-008**: Responsive: usable at ~375px and desktop (≥1024px) without horizontal scroll.

## Success Criteria

- **SC-001**: Chrome matches Stitch at phone and desktop.
- **SC-002**: Zero invented metrics, apps, or articles.
- **SC-003**: Theme default dark; light works; locale switch works.
- **SC-004**: Five in-page nav targets work.

## Out of scope

- Per-project pages / product screenshots.
- Technical Writing.
- Stitch “Mobile Architect” title and fake IDE panel.

## Clarifications

Signed in `clarifications.md`. Plan: `plan.md`. Tasks: `tasks.md`.
