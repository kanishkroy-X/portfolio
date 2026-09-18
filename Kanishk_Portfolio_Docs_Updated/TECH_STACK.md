# TECH STACK

## Site
- Astro + TypeScript
- Tailwind CSS, with design tokens driven by `DESIGN_SYSTEM.md`
- Cloudflare deployment

Keep the site stack simple. Do not add a dependency unless it solves a real requirement.

## Fonts
- Geist
- Use a performant loading strategy; avoid layout shift and use `font-display: swap` where applicable.

## Media handling
- Images: WebP/AVIF where appropriate, responsive `srcset`, lazy loading
- Video: poster frames, lazy loading, compression, custom controls (play/pause, mute/unmute, fullscreen), mobile fallback
- No simultaneous autoplay
- Avoid loading large media before it is needed

## Per-project technology references
- **RandomChat:** TypeScript · Astro · Cloudflare Workers · Cloudflare Durable Objects · WebSockets
- **AI Ad Production Studio:** Kling AI · Seedance · Midjourney · Adobe Premiere Pro · CapCut
- **AI Research Analyst:** FastAPI · SQLite · Pydantic · Tavily · OpenRouter · React · Vite · pytest (41 automated tests)
- **Wellbeing Nutrition CRO:** research/CRO tooling · interactive HTML prototype
- **CleanPDF:** Astro · TypeScript · Tailwind · PDF.js · client-side processing

## Verification rule
The portfolio should only display a technology or capability when it can be traced to the actual project implementation or documented evidence.

## Build & Route Inventory
Astro compiles 10 static HTML files:
- **9 Public Navigable Routes**: `/`, `/work`, `/work/randomchat`, `/work/ai-ad-production`, `/work/ai-research-analyst`, `/work/wellbeing-nutrition`, `/work/cleanpdf`, `/about`, `/contact`.
- **1 Error Route**: `/404` (compiles to `dist/404.html` for static hosting fallback).
Total generated build pages: **10 page(s)**.

Diagnostics: `@astrojs/check` is configured as a dev dependency, enabling `npx astro check` to run non-interactively with 0 errors, 0 warnings, and 0 hints.

## Accessibility & performance
Follow `DESIGN_SYSTEM.md`:
semantic HTML · keyboard navigation · visible focus states · alt text · heading hierarchy · sufficient contrast · `prefers-reduced-motion` · lazy media · optimized assets · no unnecessary animation libraries.
