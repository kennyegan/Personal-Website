# CHANGELOG

## Premium Updates Timeline Refactor

### Summary
- Replaced the old year-card bullet list in the Updates section with a narrative timeline system.
- Added a larger `Now` / `Current Focus` card at the top of the section.
- Moved timeline content into a dedicated root data file so the section is fully data-driven.
- Updated Nova's portfolio context to read from the new timeline source instead of the deleted `src/lib/updates.ts`.

### Updates Section Architecture
- The Updates UI now lives in `src/components/sections/UpdatesSection.tsx`.
- The section is split into:
  - a prominent current-focus card
  - a vertical milestone timeline with glowing nodes and timeline cards
- Timeline cards include:
  - date
  - category tag
  - title
  - short description

### Timeline Data Source
- Timeline content now lives in `data/timeline.ts`.
- The file exports:
  - `currentFocus`
  - `timelineItems`
- Add or edit entries there instead of hardcoding milestone cards inside the section component.

### Motion And Visual Treatment
- Added restrained `whileInView` reveal motion for the current-focus card and each timeline entry.
- Timeline nodes use a subtle cyan glow, while cards keep the same elevated dark-surface treatment as the rest of the site.
- The layout stays within the existing page structure and deep-space visual system.

### Related Files
```text
data/timeline.ts
src/components/sections/UpdatesSection.tsx
src/app/api/ai/route.ts
tsconfig.json
```

## Deep-Space Premium Refinement

### Summary
- Preserved the existing split layout and content hierarchy.
- Darkened the entire visual system toward a more cinematic deep-space palette.
- Removed the Mission Profile heading, supporting copy, and capability bubble cluster from the hero.
- Expanded the star field into a full-page layered background with subtle twinkling and depth.
- Added a cursor-reactive illumination layer for desktop that softly brightens the background near the pointer.
- Refined the orbital object into a cleaner tracked-object motif with a restrained telemetry feel.

### Hero Cleanup
- Removed:
  - the `MISSION PROFILE` heading
  - the supporting paragraph
  - the AI Research / Embedded Systems / Full-Stack Products / Data / Finance / Satellite Systems bubble cluster
- Rebalanced the left rail so the hero is now a cleaner sequence of:
  - name
  - title
  - intro
  - nav anchors
  - social links

### Deep-Space Background Redesign
- The background now starts from a much darker black-blue base (`#02060D` direction) with subtle deep navy layering.
- Atmospheric glow is more restrained and pushed into the background so the page reads as deep space first, not a bright tech gradient.
- Content surfaces were adjusted to stay readable and elevated against the darker environment.

### Full-Page Star Field Architecture
- The fixed background system lives in `src/components/space/SpaceEnvironment.tsx`.
- Star styling lives in `src/styles/globals.source.css`.
- The star field now uses layered full-viewport systems:
  - a sparse static base layer
  - two asynchronous twinkle layers
  - a very faint drifting layer for depth
- All star layers remain fixed behind content and persist across scrolling.

### Cursor Illumination System
- Added a cursor-based radial illumination layer on desktop within `SpaceEnvironment`.
- The effect uses smoothed pointer tracking and CSS variables to move a large, soft-edged glow behind the cursor region.
- The glow fades when inactive and is disabled on mobile.

### Orbital / Satellite Redesign
- The previous small satellite treatment was refined into a more technical orbital tracked-object marker.
- The marker includes:
  - a minimal geometric silhouette
  - a faint telemetry-style trail
  - a restrained beacon pulse
- It continues to travel on an oversized orbit so the motion stays near the perimeter and away from important content.

### Dependencies
- No new dependencies were added in this refinement pass.
- `framer-motion` remains in use for restrained environmental fade-in only.

### Key Frontend Files
```text
src/app/page.tsx
src/components/LeftPanel.tsx
src/components/space/SpaceEnvironment.tsx
src/components/sections/AboutSection.tsx
src/components/sections/UpdatesSection.tsx
src/components/sections/ExperienceSection.tsx
src/styles/globals.source.css
tailwind.config.cjs
```
