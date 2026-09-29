# Feature Specification: Portfolio v1 (public home)

**Feature Branch**: `001-portfolio-v1`

**Created**: 2026-09-28

**Status**: Implemented — `/en` and `/es`

**Input**: Start SDD for Elkin Fracica’s personal portfolio. v1 is a truthful public home that presents who he is, real work when available, and how to contact him. No visual implementation in this phase.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Identify the person (Priority: P1)

A hiring manager or engineer opens the public site and immediately understands whose site it is and what kind of work they do.

**Why this priority**: Without identity, the rest of the site has no purpose.

**Independent Test**: Open the home in either locale and confirm name, KMP role, master’s in cybersecurity, and short bio are readable without scrolling on a typical phone viewport.

**Acceptance Scenarios**:

1. **Given** the visitor opens the home in either locale, **When** the page finishes loading, **Then** they see the name “Elkin Fracica”, a role of Android / Kotlin Multiplatform Developer (or the Spanish equivalent), and that he is a systems engineer with a master’s in cybersecurity.
2. **Given** the visitor looks at the browser tab or share preview, **When** they read the document title and description, **Then** those texts describe this person and site in the active locale, not the Next.js starter (“Create Next App”).

---

### User Story 2 - See real work (Priority: P1)

A visitor can review the work Elkin chooses to show, with enough context to decide whether to look further (role, what it is, link if one exists).

**Why this priority**: A portfolio without work is only a business card. The list may be short.

**Independent Test**: On `/`, find a work area. Each item is either complete real data or an explicit placeholder. Nothing looks like a fabricated case study.

**Acceptance Scenarios**:

1. **Given** at least one real project has been provided, **When** the visitor views the work area, **Then** each item shows a real name and does not invent results or employers.
2. **Given** a project has a public URL, **When** the visitor activates that link, **Then** it opens in a way that does not trap them in the portfolio (new browsing context is acceptable).
3. **Given** project details are still `TBD`, **When** the visitor views the work area, **Then** they can tell the content is incomplete (placeholder), not a fake finished case study.

---

### User Story 3 - Make contact (Priority: P1)

A visitor who wants to reach Elkin can use at least one real channel.

**Why this priority**: The site fails if someone is interested and cannot act.

**Independent Test**: From `/`, activate the contact path and confirm it points at a real channel or an explicit `TBD` placeholder.

**Acceptance Scenarios**:

1. **Given** a real email or profile URL has been provided, **When** the visitor uses contact, **Then** the destination matches that real channel.
2. **Given** contact details are not yet provided, **When** the visitor looks for contact, **Then** they see a placeholder, not a invented address.

---

### User Story 4 - Choose English or Spanish (Priority: P1)

A visitor can read the whole public portfolio in English or in Spanish and can switch language themselves.

**Why this priority**: Elkin requires both locales for home and the rest of the public site. A hiring manager in either language should not be stuck in the other.

**Independent Test**: Switch language and confirm identity, bio, work labels, contact labels, and metadata follow the selection. `html lang` matches.

**Acceptance Scenarios**:

1. **Given** the visitor is viewing the site, **When** they select English or Spanish, **Then** all public copy on that view updates to that language (no mixed UI chrome).
2. **Given** the visitor has selected a language, **When** they share or reload that view, **Then** they land in the same language.
3. **Given** a first visit with no saved choice, **When** the home loads, **Then** the active locale is English.
4. **Given** a screen reader or browser language tools, **When** a locale is active, **Then** `lang` on the document matches `en` or `es`.

---

### User Story 5 - Use the site on a phone (Priority: P2)

A visitor on a small screen can read identity, work, and contact without horizontal scrolling or unusable tap targets.

**Why this priority**: Most first visits will be on a phone. This is quality of the same page, not a separate product.

**Independent Test**: View the home at a phone-sized width and complete stories 1–4, including the language control.

**Acceptance Scenarios**:

1. **Given** a viewport around 375px wide, **When** the visitor reads the page, **Then** text wraps, main actions are reachable, and layout does not require horizontal scrolling.

---

### Edge Cases

- Missing bio, projects, or contact: show `TBD` (or equivalent obvious placeholder). Do not invent content.
- A project with no URL: omit the link; do not use a dummy URL.
- Very short project list (one item) or empty list: the page still identifies Elkin and offers contact (or contact `TBD`).
- Reduced motion / keyboard / screen reader: identity, work, contact, and language selection remain perceivable and operable (semantic structure, visible focus, working links and language control).
- Language strings missing for a locale: do not fall back to invented copy; leave an explicit gap or keep that string untranslated only if labeled — prefer complete EN and ES pairs.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The public v1 experience is the home (plus locale views). Per-project pages are **v2**, not v1.
- **FR-002**: The home MUST present Elkin Fracica’s name and the public role Android / Kotlin Multiplatform Developer (ES: Desarrollador Android / Kotlin Multiplatform).
- **FR-003**: The home MUST state that he is a systems engineer with a master’s in cybersecurity, in the active locale.
- **FR-004**: The home MUST present the signed-off About copy in the active locale (`clarifications.md`).
- **FR-005**: The home MUST present a work list sourced from provided real data or explicit placeholders, in the active locale.
- **FR-006**: The home MUST present these contact channels only: email `elkin.fracica@gmail.com`, LinkedIn `https://www.linkedin.com/in/elkin-fracica/`, GitHub `https://github.com/egrimmil`. The home MUST NOT show a phone number.
- **FR-007**: Document metadata (title and description) MUST match this portfolio in the active locale, not the create-next-app defaults.
- **FR-008**: All public UI copy MUST exist in English and Spanish. The visitor MUST be able to select the language. **Default locale is English.** `html lang` MUST match.
- **FR-009**: The experience MUST be usable on mobile and desktop for the P1 stories, including the language control.
- **FR-010**: The experience MUST NOT require an account, CMS, or admin UI.
- **FR-011**: The experience MUST NOT include a blog, shop, or unrelated product surface in v1.
- **FR-012**: The home MUST show location **Bogotá D.C., Colombia** and availability **Open to work** (ES: Disponible para trabajar).

### Key Entities

- **Profile**: Name; public role; education; About copy; location **Bogotá D.C., Colombia**; availability Open to work / Disponible para trabajar (`clarifications.md`).
- **Locale**: Public languages `en` and `es`. Visitor-selected. **Default: `en`.**
- **Project**: v1 home shows exactly four items in `clarifications.md` (newest first). No project detail routes in v1. Archive is not public in v1. In-development items have no URL.
- **Contact channel**: Email, LinkedIn, GitHub only. No phone.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new visitor can state the site owner’s name, KMP-focused role, and master’s in cybersecurity after viewing the home for under 10 seconds.
- **SC-002**: Browser title and meta description do not contain “Create Next App” or “Generated by create next app”, in either locale.
- **SC-003**: Every project and contact item on the page is either a verified fact from Elkin or a visible placeholder. Zero invented employers, metrics, or URLs.
- **SC-004**: P1 stories can be completed on a ~375px-wide viewport without horizontal scrolling, including language selection.
- **SC-005**: v1 has no auth, no per-project pages, and no extra product surfaces beyond the home in both locales.
- **SC-007**: A first visit with no locale choice shows English.

## Assumptions

- v1 is a static professional home. Content is edited in the repo (data or content files), not by an online editor.
- Visual design system (color, type scale, spacing) is deferred to plan/implementation after this spec is stable; this spec does not mandate a look.
- The current placeholder page (name + role) is the starting implementation, not the finished v1.
- Public copy is English and Spanish; default locale is English. Conversation with Elkin may be Spanish. Code stays English.
- KMP work on the home is **Cross-Platform Attendance SaaS** (in development, no URL). Do not show duration.

## Out of scope (v1)

- Per-project pages and screenshots (**planned for v2**, separate spec later).
- MDX articles, CMS, auth, analytics, blog, comments, admin.
- Additional locales beyond `en` and `es`.
- Inventing a design brand beyond “professional, minimal, accessible”.
- Publishing the project archive as its own v1 page.

## Clarifications

All v1 questions are resolved in `clarifications.md`. Plan: `plan.md`. Tasks: `tasks.md`. Implementation follows the task list.
