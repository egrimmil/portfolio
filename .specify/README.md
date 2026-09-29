# SDD in this repo

Spec-Driven Development artifacts live here and under `specs/`. Spec Kit CLI is not installed (this machine has Python 3.9; specify needs 3.11+ and `uv`). Agents follow the same phase order by editing these files.

## Current feature

`specs/001-portfolio-v1/` — public home. **Status:** v1 implemented (`/en`, `/es`). Next: converge if needed; v2 later (project pages + screenshots).

v2 (later spec): per-project pages with screenshots. Not in v1.

## Phase order

1. Constitution — `.specify/memory/constitution.md` (done for v1.0.0)
2. Specify — `specs/<id>/spec.md` (draft; blocked on Elkin’s facts)
3. Clarify — resolve `NEEDS CLARIFICATION` in the spec
4. Plan — `plan.md` (how: stack, folders, data). Not started
5. Tasks — `tasks.md`. Not started
6. Implement — application code only after tasks exist
7. Converge — compare the site to the spec

Do not skip to UI because empty `components/` folders exist. Those folders are for later tasks.
