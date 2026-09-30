# Feature Specification: Portfolio v6 (CV link + crawlable SEO)

**Feature Branch**: `006-portfolio-v6`

**Created**: 2026-09-29

**Status**: Implemented

**Input**: Add a public CV download/open link (Google Drive) and make locale pages indexable with sitemap, robots, and complete metadata.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Open the CV (Priority: P1)

A hiring manager on `/en` or `/es` can open Elkin’s CV from Contact (and Hero if the Drive URL is signed).

**Acceptance Scenarios**:

1. **Given** a signed Drive URL, **When** they activate Download CV, **Then** it opens in a new tab with `rel="noopener noreferrer"`.
2. **Given** no signed URL, **When** the page renders, **Then** there is no invented Drive link.

### User Story 2 - Search engines can discover pages (Priority: P1)

**Acceptance Scenarios**:

1. `/sitemap.xml` lists `/en`, `/es`, `/en/projects`, `/es/projects`.
2. `/robots.txt` allows crawling and points at the sitemap.
3. Each locale page has `lang`, title, description, canonical, `hreflang`, Open Graph, and Person JSON-LD from signed profile/contact facts only.

## Requirements *(mandatory)*

- **FR-001**: No new npm libraries. No invented companies, metrics, or URLs.
- **FR-002**: CV href only from Elkin. English/Spanish labels.
- **FR-003**: `metadataBase` / sitemap base URL from `NEXT_PUBLIC_SITE_URL`, else `VERCEL_URL`, else localhost. Do not invent a custom domain.
- **FR-004**: Existing routes only. No CMS or analytics.

## Success Criteria

- **SC-001**: Lint and production build pass.
- **SC-002**: Sitemap and robots are generated.
