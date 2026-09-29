# Research: Portfolio v1

## R1 — Locale routing without extra packages

**Decision**: `app/[locale]/` with `locale` ∈ `{ en, es }`. First visit and bare `/` go to **`/en`**. Spanish is **`/es`**. Switching language is a same-site `<Link>` to the other prefix.

**Why**: Spec default is English, not the browser language. Next.js 16 i18n guide (`node_modules/next/dist/docs/01-app/02-guides/internationalization.md`) shows sub-path routing, dictionaries, and a root `proxy` that redirects when the path has no locale. We **must not** copy the guide’s `Accept-Language` / Negotiator example, because that would send Spanish browsers to `/es` on first visit (violates SC-007 / FR-008).

**Proxy behavior**:

- Path already `/en` or `/es` (and nested, later): continue.
- Path `/`: redirect to `/en`.
- Unknown first segment that is not a locale: `notFound` at the page, or redirect only `/` — do not guess `es` from headers.
- Skip `_next`, static files, `favicon.ico`.

**File name**: Use the Next.js 16 convention from that guide (`proxy.ts` at repo root). If implementation against this exact Next patch still expects `middleware.ts`, follow the local docs file convention — same logic either way.

**Share/reload**: URL is the source of truth. No locale cookie required for v1.

**`html lang`**: `en` or `es` from the route param in `app/[locale]/layout.tsx`. Root layout nested under `[locale]` per the same guide.

**Static**: `generateStaticParams` for `en` and `es`. Invalid locale → `notFound()`.

**Rejected**: `next-intl`, `@formatjs/intl-localematcher`, `negotiator` — extra deps and they push header-based locale. Query `?lang=` — weaker share URLs than `/es`. Client-only `localStorage` — fails spec share/reload and needs a Client Component.

## R2 — Copy and content modules

**Decision**: TypeScript in `data/`, not MDX, not JSON CMS. UI chrome (About, Work, Contact, In development, language names) in a dictionary keyed by locale. Profile, projects, contact as typed modules. Project **names** and **tech** stay untranslated. Role, summary, status label, section headings are localized.

**Why**: Spec says content is edited in the repo. MDX is allowed later; v1 has no articles. `content/projects/` stays empty until v2.

**Rejected**: Rendering the archive list. Unused `data/archive.ts` would violate “no unused code”; archive stays in `clarifications.md` only.

## R3 — Components and client JS

**Decision**: Entire home as Server Components. Language switch = two links (`/en`, `/es`) with `aria-current` on the active locale. External Play Store / LinkedIn / GitHub: `target="_blank"` `rel="noopener noreferrer"`. Email: `mailto:`. In-development card: no `href`.

**Why**: Constitution — Client Components only when required. A link does not require `'use client'`.

**Rejected**: `next-themes`, animation libraries, UI kits.

## R4 — Fonts and starter cleanup

**Decision**: Keep Geist via `next/font`. Set `body` to `font-sans` (CSS already maps `--font-geist-sans`). Remove commented create-next-app markup and unused `Image` import. Drop unused `public/*.svg` from the starter if nothing references them. Replace layout metadata with locale-specific titles/descriptions from `lib/` + `data/`.

## R5 — v2 boundary

Do not add `app/[locale]/projects/[slug]`, screenshot folders, or placeholder galleries. Slug on the home card `id` may exist in data for later v2, but must not be linked in v1.
