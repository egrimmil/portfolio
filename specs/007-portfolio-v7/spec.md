# Feature Specification: Portfolio v7 (in-repo CV download)

**Feature Branch**: `007-portfolio-v7`

**Created**: 2026-09-29

**Status**: Implemented

**Input**: Serve Elkin’s CV from the site and download it, instead of opening Google Drive.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Download the CV (Priority: P1)

A hiring manager on `/en` or `/es` can download Elkin’s CV from Hero and Contact without leaving the site for Drive.

**Acceptance Scenarios**:

1. **Given** the CV file is in `public/`, **When** they activate Download CV, **Then** the browser downloads that file (`download` attribute, same origin).
2. **Given** the page renders, **When** they inspect the href, **Then** it is a site path, not a Drive URL.

## Requirements *(mandatory)*

- **FR-001**: No new npm libraries. The PDF is Elkin’s real CV (copied from his signed file), not invented text.
- **FR-002**: English/Spanish labels unchanged (Download CV / Descargar CV).
- **FR-003**: Existing routes only. Do not add Drive as a contact channel.

## Success Criteria

- **SC-001**: Lint and production build pass.
- **SC-002**: `/elkin-fracica-cv.pdf` returns the PDF.
