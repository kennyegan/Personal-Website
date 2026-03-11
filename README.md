# Kenny Egan Personal Website

Single-page portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

The current app is a split-layout, single-page portfolio:
- Sticky left rail with identity, in-page navigation, social links, and the Nova orb
- Scrollable right column with About, Experience, Projects, Research, Updates, and Contact sections
- Lightweight `POST /api/ai` endpoint that powers Nova's portfolio-aware chat responses

## Stack

- Next.js 14 App Router
- React 18
- TypeScript with strict mode
- Tailwind CSS
- Lucide React

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/
    api/ai/route.ts      Nova chat endpoint
    layout.tsx           Root metadata and shell
    page.tsx             Single-page portfolio entrypoint
  components/
    LeftPanel.tsx        Sticky identity rail
    NovaChat.tsx         Nova orb and modal chat UI
    sections/            About, Experience, Projects, Research, Updates, Contact
  lib/
    personal-info.ts     Profile, site URL, resume setting, experience data
    projects.ts          Project data
    research.ts          Research data
    updates.ts           Recent update timeline
    voice.ts             Browser speech helper for Nova
  styles/
    globals.css          Global styles and Nova visual treatment
  types/
    speech.d.ts          Web Speech API typings
```

## Content Sources

Most of the site content is data-driven:
- `src/lib/personal-info.ts`
- `src/lib/projects.ts`
- `src/lib/research.ts`
- `src/lib/updates.ts`

When an asset does not exist yet, leave the corresponding URL unset instead of linking to a missing file.

## Optional Assets

These are intentionally optional in the current repo state:
- Resume PDF: controlled by `personalInfo.resume.url`
- Research PDF links: controlled per entry in `src/lib/research.ts`
- Open Graph image: not configured until a real asset exists

## Nova

Nova is an intentionally expressive part of the design, distinct from the otherwise restrained portfolio UI.
- Orb trigger lives in the left rail on large screens
- Modal chat posts to `/api/ai`
- Voice input uses the browser Web Speech API when available
- Responses should stay grounded in repo content, not hardcoded marketing claims

## Local Workflow

1. Install dependencies with `npm install`
2. Run `npm run dev`
3. Update content in the `src/lib/*` files
4. Verify changes with `npm run lint` and `npm run build`

## Deployment Notes

- Canonical site URL is `https://kennethegan.com`
- Metadata is defined in `src/app/layout.tsx`
- The app currently has no required environment variables
