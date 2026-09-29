# Clarifications — 003-portfolio-v3 (visual restyle)

Recorded 2026-09-29. Visual: `design.md` + mobile and **desktop** screenshots. **Facts: v1 + v2 only**, except the signed role change below.

## Visual system

Stitch tokens (obsidian / Android green / mint / lavender, Inter + JetBrains Mono, glass cards, pills, 44px targets). Mobile screenshots = phone layout. Desktop screenshots = wide header, two-column hero, four-column stack, project grid — **responsive, both**, not a 480px-only column.

## Signed 2026-09-29 (Elkin)

1. **Writing / articles:** omit. No Medium/Dev.to cards.
2. **Role:** replace previous role line with **Senior Android Developer** (ES: **Desarrollador Android Senior**). KMP stays in About and Skills, not in the role string. Do **not** use Stitch “Engineer & Mobile Architect.”
3. **Theme:** light **and** dark. Visitor **chooses**. **Default is dark** (first visit, no saved choice). Persist the choice. Do not invent a third palette; light inverts surfaces and keeps the same greens/lavender with readable contrast.
4. **Nav:** in-page anchors on the same home. Desktop: top links. Mobile: sticky dock. Language switch stays.
5. **Responsive:** must work on ~375px and desktop (Stitch desktop captures).

## Content mapping (signed)

| Stitch | Public |
| --- | --- |
| Hero title | Elkin Fracica + Senior Android Developer / Desarrollador Android Senior |
| Open to Work | Signed availability |
| Hero body | Signed About (existing paragraphs). No Staff/Lead CTA copy from Stitch |
| Hero chips | Subset of signed Skills only |
| Ver Proyectos / Hablemos | Jump to `#work` and `#contact` |
| 15M+, 99.9%, 8+, &lt;16ms, fake code sample | **Omit.** Optional truthful telemetry: `Mobile: +8 years / Web: +1 years` (and ES pair) |
| Fake case studies | Four signed Work projects |
| Arquitectura & Stack four columns | Four signed Skills groups, restyled. No C++/NDK/Wear/Ktor/Detekt/Fastlane unless already signed |
| Publicaciones | Omit |
| Footer | Elkin Fracica, current year. No “Crafted with Compose” |
| `dev.android` | Do not invent |

No phone.

## In-page anchors (signed)

| id | Sections | Nav label EN / ES |
| --- | --- | --- |
| `#overview` | Hero + About | Overview / Inicio |
| `#experience` | Experience | Architecture / Trayectoria |
| `#web` | Web | (in page flow; not required on the dock) |
| `#skills` | Skills | Stack / Stack |
| `#work` | Work | Projects / Proyectos |
| `#contact` | Contact | Contact / Contacto |

Desktop header and mobile dock use: **Overview, Projects, Architecture, Stack, Contact** (Architecture → `#experience`, Stack → `#skills`). Same five targets on mobile if they fit; do not drop Architecture only because the first phone mock had four icons.

## Still closed

No further v3 product questions. Plan/tasks may proceed.
