# CONTEXT.md

## Purpose
This file is the shared AI context for coding agents working in this repository.
Use it as the durable source of project structure, design constraints, UI rules, and implementation guidance.
It is intentionally general and is not tied to any single AI model, vendor, or assistant.

## Project Overview
Kenny Egan's personal website is a single-page portfolio with a split layout, a deep-space full-page atmosphere, a clean text-first hero in the left rail, and an embedded Nova assistant experience.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Animation: Framer Motion for lightweight transitions
- Icons: Lucide React
- Package Manager: npm
- Node: 18+

## Commands
- `npm run dev` — start the local dev server
- `npm run build` — run the production build
- `npm run lint` — run ESLint

## Architecture
Single-page site with a sticky left rail and a scrollable right content column.

- `src/app/page.tsx` — main page composing all sections and active-section tracking
- `src/app/layout.tsx` — root layout and site metadata
- `src/app/api/ai/route.ts` — Nova chat endpoint
- `src/components/LeftPanel.tsx` — identity rail, in-page navigation, socials, and the primary hero copy
- `src/components/space/SpaceEnvironment.tsx` — fixed background layers, star fields, and the page-level orbital marker
- `src/components/NovaChat.tsx` — Nova orb and full-screen chat modal
- `src/components/sections/` — About, Experience, Updates
- `data/timeline.ts` — current-focus content and Updates timeline entries
- `src/lib/personal-info.ts` — site URL, profile, resume toggle, experience
- `src/lib/voice.ts` — browser speech helper for Nova

## Design Rules
- Base visual system stays restrained: dark technical surfaces, bright readable typography, cyan for active emphasis, violet for orbit/glow accents, mint only for small highlights.
- Avoid noisy particle fields, WebGL effects, or gimmicky sci-fi UI. The page should feel aerospace-adjacent, not theatrical.
- Keep motion minimal. The page-level orbital marker, star twinkle, and cursor illumination are the main animated elements, and all of them should stay slow, smooth, and low-noise.
- Typography remains straightforward and readable.

## Homepage Visual Architecture
- The homepage atmosphere is page-level, not hero-card-level.
- `src/components/space/SpaceEnvironment.tsx` renders a fixed background layer behind all content.
- `src/components/LeftPanel.tsx` intentionally stays simple: name, title, intro, nav, and social links.
- `src/app/page.tsx` mounts `SpaceEnvironment` once and keeps the existing split layout above it with `relative z-10`.
- Do not reintroduce the Mission Profile block or the capability bubble cluster unless explicitly requested.

## Updates Timeline Architecture
- `src/components/sections/UpdatesSection.tsx` owns the full Updates presentation.
- The section is intentionally split into two visual parts:
  - a larger `Now` / `Current Focus` card at the top
  - a vertical timeline below it with glowing nodes and milestone cards
- Timeline content is data-driven from `data/timeline.ts`.
- `currentFocus` powers the top card.
- `timelineItems` powers the chronological milestone list.
- When adding entries:
  - keep items concise and factual
  - prefer one milestone per entry
  - keep dates in descending order so the newest items stay first
  - choose a category from the existing union before adding a new visual style
- If you change the timeline layout, preserve:
  - clear date scanning on desktop
  - stacked readability on mobile
  - restrained hover and reveal motion

## Space Background System
- Source-of-truth styling for the environment lives in `src/styles/globals.source.css`.
- Key classes:
  - `.space-environment*` for gradients, nebula, and vignette
  - `.space-stars*` for the layered star fields
  - `.space-orbit*` for the oversized orbit shells and orbital marker path
- The space environment should remain subtle:
  - gradients should create depth, not wash over the text
  - stars should stay sparse and low-contrast
  - glow should be blurred and atmospheric, not neon
  - star coverage should feel continuous across the full viewport, not localized to a single area
  - the default page state should read closer to deep-space black than bright navy

## Star Field Implementation
- The star field is rendered in `SpaceEnvironment` as fixed-position star layers rather than moving particle backgrounds.
- Stars are data-driven in the component and styled through:
  - `.space-stars`
  - `.space-stars__star`
  - `.space-stars__star--pin`
  - `.space-stars__star--halo`
  - `.space-stars__star--flare`
- The visual mix should stay sparse:
  - tiny dim stars for field coverage
  - a smaller set of brighter halo stars
  - a very limited number of flare stars for premium contrast
- Twinkle should remain asynchronous and subtle. The sky should read as still, not animated.
- Mobile should reduce density before reducing text contrast.

## Cursor Illumination System
- The cursor illumination lives inside `SpaceEnvironment` and is driven by direct pointer-follow updates in React.
- The implementation uses CSS custom properties:
  - `--cursor-x`
  - `--cursor-y`
  - `--cursor-opacity`
- The implementation is intentionally lightweight:
  - pointer events write the active cursor position
  - a single `requestAnimationFrame` batch applies those writes cleanly per paint
  - inactivity and pointer leave fade the effect back out
- Keep this effect ambient. It should feel like local atmospheric lift, not a flashlight.
- Desktop only. Tablet should be reduced if needed. Mobile should stay disabled.

## Orbital Marker Logic
- The orbital marker animation lives in `src/components/space/SpaceEnvironment.tsx`.
- The orbit shell is intentionally oversized so only arcs near the viewport perimeter are visible.
- This prevents the object from crossing through core content while still implying a large orbit around the page composition.
- Decorative layers must keep:
  - `pointer-events: none`
  - low z-index relative to content
  - reduced-motion fallback
- The marker should feel like aerospace telemetry, not a playful satellite icon.
- If you adjust the orbit, preserve the “safe margin” behavior before changing its speed or visibility.

## Color, Glow, And Contrast Controls
- Token values live in `src/styles/globals.source.css`.
- Tailwind semantic tokens are mapped in `tailwind.config.cjs`.
- Adjust these first when changing the visual system:
  - `--color-background`
  - `--color-surface`
  - `--color-surface-strong`
  - `--color-text-primary`
  - `--color-text-secondary`
  - `--color-accent-cyan`
  - `--color-accent-violet`
  - `--color-mint`
  - `--color-border`
- Keep contrast high. Text clarity wins over decorative glow.

## Color Token System
- Source-of-truth color tokens live in `src/styles/globals.source.css` as CSS variables.
- Tailwind semantic colors are mapped in `tailwind.config.cjs`.
- Prefer semantic utilities such as:
  - `bg-background`
  - `bg-surface`
  - `text-text-primary`
  - `text-text-secondary`
  - `text-accent-cyan`
  - `text-accent-violet`
  - `text-mint`
- Do not reintroduce one-off hex colors into component markup unless there is a strong reason.

## Minimal Design Guidelines
- Keep the page-level atmosphere visually memorable but restrained. The site should feel technical and premium, not flashy.
- The orbital marker is environmental art direction, not foreground UI.
- The cursor glow is environmental art direction, not an interaction gimmick.
- Orbit arcs, glows, and hover states should stay subtle and secondary to the content.
- Mint should remain a small highlight color for tags, indicators, or tiny accents.
- If you touch `src/styles/globals.source.css`, regenerate `src/styles/globals.css` with `npm run tw:build` or the existing build scripts.

## Notes For Future AI Agents
- Preserve the split layout and content hierarchy unless the user explicitly asks for an information-architecture change.
- Prefer improving atmospheric layers, surface treatment, contrast, and motion restraint over adding new interactive gimmicks.
- If you modify the orbital path, verify that it never becomes visually destructive over text on desktop, tablet, or mobile.
- Do not reintroduce the Mission Profile block or bubble cluster unless a user explicitly asks for that visual direction.
- If you adjust the cursor illumination, check that it remains behind content and never reduces text contrast in the right column.
- If you change the Updates section, edit `data/timeline.ts` first and only then adjust `src/components/sections/UpdatesSection.tsx` if the presentation needs to evolve.

## Conventions
- Path aliases:
  - `@/*` maps to `./src/*`
  - `@data/*` maps to `./data/*`
- Use `'use client'` only for components that need browser APIs, state, or effects
- Section components are server components by default
- Keep portfolio claims grounded in the actual data files
- If an asset does not exist yet, remove the link rather than pointing at a missing file
- Canonical site URL is `https://kennethegan.com`
