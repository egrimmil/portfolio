---
name: Android Engineering Portfolio
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#bbcbbc'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#869587'
  outline-variant: '#3c4a3f'
  surface-tint: '#43e188'
  primary: '#60f99e'
  on-primary: '#00391c'
  primary-container: '#3ddc84'
  on-primary-container: '#005c31'
  inverse-primary: '#006d3b'
  secondary: '#7dffa2'
  on-secondary: '#003918'
  secondary-container: '#05e777'
  on-secondary-container: '#00622e'
  tertiary: '#e4d8ff'
  on-tertiary: '#381385'
  tertiary-container: '#cab7ff'
  on-tertiary-container: '#573ba5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#66fea2'
  primary-fixed-dim: '#43e188'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#62ff96'
  secondary-fixed-dim: '#00e475'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#005226'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#cebdff'
  on-tertiary-fixed: '#21005e'
  on-tertiary-fixed-variant: '#4f319c'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  margin-tablet: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system defines a technical, high-craft mobile portfolio experience for a Senior Android Engineer. The visual identity bridges modern Material 3 fluid aesthetics with an engineer’s rigorous precision: deep obsidian workspaces, crisp structural divisions, high-legibility telemetry, and vibrant Android ecosystem accents.

### Design Principles & Emotional Target
- **Architectural Rigor:** Interface structures mirror clean architecture principles (MVI, layered decoupling). Every element has clear containment, purposeful hierarchy, and deterministic layout flow.
- **Engineered Subtlety:** Dark-mode depth is built using translucent charcoal layers, sub-pixel border highlights, and controlled specular glows rather than opaque dropshadows.
- **Target Audience:** Engineering VPs, Staff Architects, Technical Recruiters, and Mobile Tech Leads seeking high-tier engineering craft, performance accountability, and Compose-native proficiency.
- **Visual Style:** Refined Dark Tech Minimalist Glass. Subtle frosted backdrops (`backdrop-blur-md`), precise 1px ghost borders (`rgba(255,255,255,0.08)`), and high-chroma Android green highlights against pitch blacks.

## Colors

The palette is engineered around terminal-grade obsidian tones punctuated by Android's iconic vibrant greens and Jetpack Compose lavender.

### Palette Architecture
- **Primary (`#3DDC84` - Android Green):** Primary interactive calls-to-action, success states, and focal metrics.
- **Secondary (`#00E676` - Mint Accent):** Glow accents, active telemetry pulses, and architecture module tags.
- **Tertiary (`#A78BFA` - Jetpack Compose Lavender):** Reserved for Compose runtime labels, reactive code blocks, and UI toolkit callouts.
- **Neutral Base (`#0D1117` - Obsidian Charcoal):** Deep canvas background that prevents OLED clipping while offering deep contrast.
- **Surface Elevation Layers:**
  - `Surface 1 (Base)`: `#0D1117`
  - `Surface 2 (Card default)`: `#161B22` (at 85% opacity with blur)
  - `Surface 3 (Active / Elevated)`: `#21262D`
  - `Border / Hairline`: `#30363D` or `rgba(240, 246, 252, 0.1)`
- **Content Hierarchy:**
  - Primary text: `#F0F6FC` (high contrast white)
  - Secondary text: `#8B949E` (muted slate)
  - Tertiary / Disabled text: `#484F58`

## Typography

Typography establishes an immediate dual dialogue: human-centered clarity through **Inter** for prose and editorial claims, coupled with industrial software rigor via **JetBrains Mono** for metrics, architecture tags, and code snippets.

### Typographic Roles
- **Headlines & Titles (Inter):** Tight tracking (`-0.02em` to `-0.03em`), high weights (`700` and `800`) to create authoritative presence on small viewports without horizontal crowding.
- **Body & Descriptions (Inter):** Highly legible vertical rhythm at 1.4-1.5 line-height ratio, set in neutral slate for high reading comfort against dark backgrounds.
- **Telemetry, System Stats & Code (JetBrains Mono):** Monospaced numerals and system labels keep technical stats (e.g. `FPS: 60`, `ANR: <0.01%`, `@Composable`) structured and scannable.

## Layout & Spacing

The layout is optimized first for mobile-first handheld reading (375px–430px viewports), expanding gracefully to tablet and desktop boundaries with a centered max-width constraint.

### Layout Philosophy
- **Rhythm:** Built on an intentional 4px base coordinate system with a predominant 8px/12px step.
- **Mobile Container:** Full-bleed edge experience with a strict horizontal margin of `16px` (`1rem`) to maximize information density while preserving touch accessibility.
- **Screen Bounds:** Tablet viewports scale margin to `24px` (`1.5rem`), while desktop targets a constrained `max-width: 480px` for an authentic high-fidelity smartphone preview or `max-width: 768px` for expanded dual-pane views.
- **Safe Area Insets:** Accounts for mobile gesture bars (`env(safe-area-inset-bottom)`) with dedicated padding on fixed docks and bottom navigation bars.

## Elevation & Depth

Visual hierarchy does not rely on traditional muddy drop shadows. Instead, it utilizes **Tonal Glass Layers** complemented by **Luminescent Edge Outlines**.

### Elevation Stack
1. **Canvas Level 0 (`#0D1117`):** The absolute root layer with a subtle radial gradient mask centered behind focal projects (`radial-gradient(circle at 50% 0%, rgba(61, 220, 132, 0.05), transparent 70%)`).
2. **Surface Level 1 (`#161B22` / `rgba(22, 27, 34, 0.85)`):** Base cards, expandable case-study summaries, and list items. Styled with `backdrop-filter: blur(12px)` and a `1px` stroke of `rgba(255, 255, 255, 0.08)`.
3. **Surface Level 2 (`#21262D` / `rgba(33, 38, 45, 0.95)`):** Active navigation sheets, code inspection modals, and sticky top headers.
4. **Specular Edge Lighting:** Focused elements feature a directional top border highlight (`linear-gradient(90deg, transparent, rgba(61, 220, 132, 0.4), transparent)`) simulating an overhead beam reflecting off polished glass.
5. **Glow Emittance:** Metric highlights and primary action buttons emit a soft atmospheric glow (`box-shadow: 0 0 20px -4px rgba(61, 220, 132, 0.25)`).

## Shapes

The design system embraces the modern Android/Material 3 corner curve language: soft, organic, yet contained.

- **Standard Containers (`rounded-md`, 8px):** Code blocks, metric chips, and technical tags.
- **Cards & Sheets (`rounded-lg`, 16px):** Project showcases, architectural diagram containers, and profile headers.
- **Floating Modals & Interactive Docks (`rounded-xl`, 24px):** Bottom action sheets and sticky navigation bars.
- **Action Pills (`rounded-full`, 9999px):** Primary triggers, status indicators (e.g., "Available for Staff Roles"), and filter toggles.

## Components

### Buttons
- **Primary Action (APK Download / Contact):** Solid `#3DDC84` background, `#0D1117` bold typography, `rounded-full` pill structure. Emits a continuous subtle ambient green aura. Active state scales to `0.98` with crisp haptic-like transition timing (150ms bezier).
- **Secondary (GitHub / Case Study):** Translucent glass fill (`rgba(255, 255, 255, 0.04)`), `1px` border of `rgba(255, 255, 255, 0.12)`, text `#F0F6FC`. On press, border transitions to `#3DDC84`.
- **Icon Buttons:** Fixed 44x44px touch targets with a centered 20px vector icon, enclosed in a `rounded-full` ghost container.

### Chips & Badges
- **Architecture Tags (e.g., `MVI`, `Coroutines`, `KMP`):** Background `rgba(61, 220, 132, 0.08)`, border `rgba(61, 220, 132, 0.2)`, text `#3DDC84`, rendered in `label-sm` (JetBrains Mono).
- **Jetpack Compose Badge:** Background `rgba(167, 139, 250, 0.1)`, border `rgba(167, 139, 250, 0.25)`, text `#A78BFA`.
- **Live Status Indicator:** Small 6px pulsating `#00E676` dot adjacent to monospaced text.

### Cards & Project Showcases
- **Featured Case Study Card:** Rounded 16px container with layered obsidian surfaces. The top edge possesses a faint specular line. Features a two-part layout: top interactive live-demo preview or architectural breakdown graph, bottom section containing project metrics (`Cold Start < 350ms`, `Crash-free: 99.98%`) set in high-contrast monospaced blocks.

### Code Snippets & Architecture Micro-Callouts
- Terminal-inspired containers with a header tab containing simulated macOS/Android status dots and file labels (e.g., `HomeViewModel.kt`). Background `#090D12` with syntax highlighting in Android Green (`#3DDC84`), Jetpack Lavender (`#A78BFA`), and Electric Cyan (`#38BDF8`).

### Input Fields & Contact Module
- **Fields:** Minimal dark inputs with background `#161B22`, border `rgba(255, 255, 255, 0.1)`. Focus state drops background opacity and illuminates the border with a 1px solid `#3DDC84` and subtle 3px green glow ring.
- **Labels:** Floated labels using `JetBrains Mono` at `label-sm`.

### Lists & Timeline (Career Experience)
- Node-based vertical timeline. Line rendered in `1px` dashed `rgba(255, 255, 255, 0.12)`. Active timeline nodes represented by small glowing concentric circles in Android Green. Company and title set in Inter bold; stack details set in JetBrains Mono chips.