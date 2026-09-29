# Feature Specification: Portfolio v4 (all-projects page)

**Feature Branch**: `004-portfolio-v4`

**Created**: 2026-09-29

**Status**: Implemented — `/en/projects` and `/es/projects`

**Input**: Add a bilingual page that lists every signed project in cards, newest first.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Scan every signed project (Priority: P1)

A visitor opens `/en/projects` or `/es/projects` and sees all signed work in boxes, from most recent to oldest, using the same card treatment as the home featured grid.

**Independent Test**: Count cards against `clarifications.md`. Order matches that list.

**Acceptance Scenarios**:

1. **Given** `/en/projects` or `/es/projects`, **When** the page loads, **Then** every signed project appears once as a card (name, role, tech, Play link or in-development status).
2. **Given** the list, **When** they read top to bottom, **Then** order is newest → oldest as signed in clarifications.
3. **Given** no store URL, **When** they view that card, **Then** there is no invented Play link.

### User Story 2 - Reach the page from chrome (Priority: P1)

**Acceptance Scenarios**:

1. Header and mobile dock **Projects** go to `/{locale}/projects`, not only `#work`.
2. Home **Featured projects** still shows only the four v1 home cards and links to the full list.
3. Language switch on the projects page stays on `/en/projects` ↔ `/es/projects`.
4. Name / Overview return to the locale home.

### Edge Cases

- No per-project detail routes in this spec.
- No phone. No invented summaries for archive cards (name + role + tech + URL/status only).
- Theme and tokens stay v3.

## Requirements *(mandatory)*

- **FR-001**: Routes `/{locale}/projects` only. No auth, CMS, or blog.
- **FR-002**: Content only from v1 Q2 (featured four + archive). No new names, URLs, or tech.
- **FR-003**: EN/ES complete. Default locale English.
- **FR-004**: No new npm libraries. Server Components except existing theme toggle and dock/locale interactivity.
- **FR-005**: Reuse `ProjectCard`. Home featured list stays four cards.
- **FR-006**: Cards in a responsive list/grid (boxes), mobile-first.

## Success Criteria

- **SC-001**: All signed projects visible on the projects page, newest first.
- **SC-002**: Home still shows four featured cards.
- **SC-003**: Lint and production build pass.
