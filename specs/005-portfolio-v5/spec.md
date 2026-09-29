# Feature Specification: Portfolio v5 (projects index layout)

**Feature Branch**: `005-portfolio-v5`

**Created**: 2026-09-29

**Status**: Implemented — v5 adjustments (header, About type, Play button, stack, favicon, project blurbs)

**Input**: Restyle `/[locale]/projects` to match the reference card grid (eyebrow, large title, dense cards with status chips and footer CTA). No category filters. No search.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Scan the index in the reference layout (Priority: P1)

A visitor opens the projects page and sees a wide title block and a responsive grid of cards. Each card shows status (in development or production when a Play URL exists), featured when applicable, name, role, optional signed summary, tech chips, and Play only when signed.

**Acceptance Scenarios**:

1. **Given** `/en/projects` or `/es/projects`, **When** the page loads, **Then** there is no filter row and no search field.
2. **Given** a project with a Play URL, **When** they read the card, **Then** a production status and Play footer appear; no invented metrics.
3. **Given** a project without a URL and not in development, **When** they read the card, **Then** there is no production badge and no Play link.
4. **Given** featured projects, **When** they appear on home or the index, **Then** they use the same card component.

## Requirements *(mandatory)*

- **FR-001**: Layout only. Same 13 signed projects, newest first. No new names, URLs, tech, or numbers.
- **FR-002**: No filters, search, category taxonomy, or invented hero stats (downloads, crash counts, user counts).
- **FR-003**: EN/ES. No new npm libraries. Server Components except existing client chrome.
- **FR-004**: Home still shows four featured cards via the shared `ProjectCard`.

## Success Criteria

- **SC-001**: Projects page visually closer to the reference grid without adding filter/search.
- **SC-002**: Lint and production build pass.
