# Feature Specification: Portfolio v2 (skills, experience, web on home)

**Feature Branch**: `002-portfolio-v2`

**Created**: 2026-09-28

**Status**: Implemented — Skills, Experience, and Web on `/en` and `/es`

**Input**: After v1 home, add Skills (grouped), Experience (jobs + own product), and a separate Web section. Same locale home. No project-detail routes.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Scan skills by group (Priority: P1)

A hiring manager sees Elkin’s skills in four groups, not a flat tag cloud.

**Independent Test**: `/en` and `/es` Skills match `clarifications.md` exactly. No extra names.

**Acceptance Scenarios**:

1. **Given** the home in either locale, **When** the visitor reaches Skills, **Then** groups are Mobile / Architecture / Backend / Cloud / Development (Spanish headings as signed) in that order, items only from the signed list.
2. **Given** Spanish locale, **When** they read skill names, **Then** names stay the signed English strings; only headings are translated.

---

### User Story 2 - Review experience (Priority: P1)

A hiring manager sees employment and the own Attendance SaaS product with dates and derived durations.

**Independent Test**: Six Experience cards in signed order; VASS is Sep 2023–Aug 2026 (2 years 11 months); Attendance SaaS is own product Feb 2026–Present (7 months); context **Towerbank - ikigii**; no phones; no summed career years.

**Acceptance Scenarios**:

1. **Given** signed Experience data, **When** the visitor reads the section, **Then** employer/title/dates/duration/bullets match `clarifications.md`.
2. **Given** overlapping VASS and Attendance SaaS, **When** durations are shown, **Then** each is independent (not added together).
3. **Given** Attendance SaaS, **When** they read the card, **Then** it is labeled as a personal/own product, not as a company employer.

---

### User Story 3 - Review web work (Priority: P1)

A hiring manager can find web history without mixing it into Android jobs.

**Independent Test**: Separate Web section after Experience; one Wigilabs web card; not listed again under Experience.

**Acceptance Scenarios**:

1. **Given** the home, **When** they pass Experience, **Then** the next new section is Web (heading **Web**), then Work.

---

### User Story 4 - Locale and mobile (Priority: P2)

Same as v1 for new sections.

**Acceptance Scenarios**:

1. Language switch updates headings and prose; skill names unchanged.
2. ~375px: lists wrap, no horizontal scroll.

---

### Edge Cases

- Do not invent a job for Apr–Aug 2023.
- Do not show manager names or phone numbers.
- Work cards stay v1 (four projects); Attendance SaaS may appear in both Work and Experience (product vs timeline) with consistent facts.

## Requirements *(mandatory)*

- **FR-001**: Extend `/en` and `/es` home only. No project-detail routes, auth, or CMS.
- **FR-002**: Skills section per `clarifications.md`.
- **FR-003**: Experience section per signed cards (including own Attendance SaaS).
- **FR-004**: Separate Web section per signed Wigilabs web card.
- **FR-005**: Home order: About → Skills → Experience → Web → Work → Contact.
- **FR-006**: Durations from the signed table only.
- **FR-007**: EN/ES chrome; default locale English; no phone.
- **FR-008**: Usable at ~375px width.

### Key Entities

- **Skill group**: id, heading Copy, ordered skill names.
- **Role**: id, employer or product name, optional employer (null for own product), title Copy, period Copy, duration Copy, context Copy | null, bullets Copy[].

## Success Criteria

- **SC-001**: Skills list exact match.
- **SC-002**: Zero invented employers or years; VASS not shown as “Actualidad”.
- **SC-003**: Web is its own section.
- **SC-004**: No project-detail URLs.

## Assumptions

- Typed `data/` modules. No new npm libraries.
- v1 visual language.
- Full ES sentences for role bullets live in data files; they must not add tools or claims beyond the signed EN facts.

## Out of scope

- Per-project pages and screenshots.
- Extra skills (Hilt, Retrofit on the Skills list, etc.).
- A summed “years of experience” badge.

## Clarifications

All v2 questions for this feature are in `clarifications.md`. Plan: `plan.md`. Tasks: `tasks.md`.
