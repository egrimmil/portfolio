# AI Development Rules

## General

- Act as a senior frontend engineer.
- Follow the existing project architecture.
- Do not rewrite the project unnecessarily.
- Do not install dependencies without explaining why.
- Do not modify unrelated files.
- Do not invent professional experience.
- Do not invent projects.
- Do not invent technologies.
- Do not invent metrics or achievements.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- MDX when appropriate

## Architecture

- Use Next.js App Router.
- Prefer Server Components when possible.
- Use Client Components only when interactivity requires them.
- Keep components small and reusable.
- Avoid unnecessary abstractions.
- Avoid global state unless it is genuinely required.

## UI

- Mobile-first.
- Responsive.
- Accessible.
- Semantic HTML.
- Professional and minimal design.
- Avoid excessive animations.
- Avoid unnecessary dependencies.

## Code Quality

- Use strict TypeScript.
- Avoid `any`.
- Keep imports clean.
- Do not leave unused code.
- Run ESLint after significant changes.
- Run Prettier after significant changes.
- Run the production build before major milestones.

## Content

- Portfolio content must be truthful.
- Never fabricate experience.
- Never fabricate companies.
- Never fabricate project results.
- Use placeholders when information is missing.

## Before modifying code

Explain:

1. What you plan to change.
2. Which files will change.
3. Why the change is necessary.

## After modifying code

Report:

1. Files changed.
2. Dependencies added.
3. Tests/checks executed.
4. Remaining issues.