# SDD in this repo

Spec-Driven Development artifacts live here and under `specs/`. Spec Kit CLI is not installed (this machine has Python 3.9; specify needs 3.11+ and `uv`). Agents follow the same phase order by editing these files.

## Current feature

`specs/001-portfolio-v1/` — public home. **Status:** implemented (`/en`, `/es`).

`specs/002-portfolio-v2/` — Skills + Experience + Web on home. **Status:** implemented.

`specs/003-portfolio-v3/` — Stitch visual restyle on real content. **Status:** implemented.

`specs/004-portfolio-v4/` — All-projects page. **Status:** implemented.

`specs/005-portfolio-v5/` — Projects index layout. **Status:** implemented.

## Phase order

1. Constitution — `.specify/memory/constitution.md` (done for v1.0.0)
2. Specify — `specs/<id>/spec.md` (draft; blocked on Elkin’s facts)
3. Clarify — resolve `NEEDS CLARIFICATION` in the spec
4. Plan — `plan.md` (how: stack, folders, data). Not started
5. Tasks — `tasks.md`. Not started
6. Implement — application code only after tasks exist
7. Converge — compare the site to the spec

Do not skip to UI because empty `components/` folders exist. Those folders are for later tasks.
