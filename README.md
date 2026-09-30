# Elkin Fracica — Portfolio

Personal professional site for [Elkin Fracica](https://github.com/egrimmil), a software engineer focused on Android and Kotlin Multiplatform. It presents **real** work, skills, experience, and contact paths — not a template demo, CMS, or blog.

Visitors can switch **English** (default) and **Spanish**. `/` redirects to `/en`. Home shows featured projects; `/en/projects` and `/es/projects` list every signed app, newest first. Store links appear only when there is a public Play listing.

Content lives in typed modules under `data/`. Agents and contributors should not invent jobs, companies, metrics, or URLs.

## Stack

| Layer    | Choice                                                           |
| -------- | ---------------------------------------------------------------- |
| App      | [Next.js](https://nextjs.org/) 16 App Router (`app/`, no `src/`) |
| UI       | React 19, Server Components by default                           |
| Language | TypeScript (strict)                                              |
| Styles   | Tailwind CSS 4                                                   |
| Fonts    | Inter and JetBrains Mono via `next/font`                         |
| Tooling  | ESLint (`eslint-config-next`), Prettier, React Compiler          |

Client Components are used only where the browser is required (theme, locale switch, dock). Product work is spec-driven: constitution in `.specify/`, features under `specs/`.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script           | Purpose                    |
| ---------------- | -------------------------- |
| `npm run dev`    | Development server         |
| `npm run build`  | Production build           |
| `npm run start`  | Serve the production build |
| `npm run lint`   | ESLint                     |
| `npm run format` | Prettier write             |

## Repo map

| Path                 | Role                                       |
| -------------------- | ------------------------------------------ |
| `app/`               | Routes, layouts, global CSS                |
| `components/`        | Layout, sections, project cards, UI        |
| `data/`              | Signed profile, projects, copy             |
| `lib/`               | Shared helpers (metadata, dates)           |
| `specs/`             | Feature specs, plans, tasks                |
| `AGENTS.md`          | How coding agents should work in this repo |
| `PROJECT_CONTEXT.md` | Longer briefing for people and agents      |

## Deploy

The site is live on Vercel: [https://portfolio-elkinfracica.vercel.app/](https://portfolio-elkinfracica.vercel.app/).

Production builds follow the usual Next.js flow (`npm run build` / `npm run start`). For canonical URLs, sitemap, and Open Graph, set `NEXT_PUBLIC_SITE_URL` to `https://portfolio-elkinfracica.vercel.app` (no trailing slash) in the Vercel project.
