# PROJECT BRIEF — Kanishk Roy Portfolio

## Who this is for
Kanishk Roy — B.Com (Hons) student from Kolkata / West Bengal, India.

Interested in product building, AI, creative technology, web development, automation, UX/UI, and content creation. Uses AI-assisted development heavily, with Antigravity as a primary build tool. Interested in entrepreneurship, freelancing, and working with founders/businesses.

**Do NOT position Kanishk as:** an elite engineer, AI researcher, growth guru, or established startup founder.

The portfolio demonstrates capability through **real work**, not inflated claims.

## What the site must communicate within ~5 seconds
1. Who Kanishk is
2. What he builds
3. What he has actually built
4. How he thinks
5. How to contact him

Guiding values:
**Evidence > decoration · Clarity > novelty · Real work > generic claims · Purposeful interaction > excessive animation**

Visitor should think:
> “This person actually builds things, thinks through systems, and documents the work.”

Not:
> “This is another AI-generated portfolio.”

## Core creative direction
**EDITORIAL PRODUCT STUDIO × TECHNICAL LAB**

A blend of:
personal studio · product archive · engineering lab · creative technology showcase · editorial publication · technical notebook.

Personality:
editorial, precise, technical, human, experimental, minimal, slightly cinematic, restrained, quietly confident.

Avoid:
SaaS landing page, developer template, AI agency site, résumé site, generic portfolio, futuristic AI dashboard.

## Anti-AI-slop rules
Never use:
- generic purple/blue AI gradients
- excessive glassmorphism
- fake testimonials, metrics, revenue, or user counts
- “passionate developer” filler copy
- giant logo walls
- unnecessary 3D
- particle backgrounds
- cursor blobs
- excessive GSAP
- floating UI for decoration
- AI robots/holograms
- circuit-board imagery
- stock corporate photos
- marquees
- fake loading screens
- over-rounded cards
- animation for spectacle alone

Rules:
- If an animation does not improve comprehension or interaction → remove it.
- If a visual does not communicate something → remove it.
- If a claim cannot be supported by evidence → remove or qualify it.

## Core narrative
> I take messy ideas, break them down, and turn them into working products, systems, and creative experiences.

> I don’t just generate an output. I build a system around it.

**IDEAS → SYSTEMS → REAL THINGS**

**DECONSTRUCT → BUILD → TEST → REFINE**

## Implementation baseline
The complete portfolio is implemented, verified, and production-ready:
- **Routes**: Exactly 9 public navigable site routes (`/`, `/work`, 5 case studies, `/about`, `/contact`) plus 1 dedicated error page (`/404` -> `404.html`), totaling 10 static HTML files compiled in Astro's production build.
- **Theme**: Full 3-mode dark theme (System, Light, Dark) with zero FOUC, persistent `localStorage` preference, and accessible navigation switcher.
- **Hero Commercials**: Both Adidas Samba (9:16 vertical reel) and Kreo Tech (16:9 widescreen commercial) are integrated, playable with custom poster frames, and accessible via the homepage interactive tab toggle and the case study page.
- **Evidence & Claims**: All unsupported latency metrics (`<50ms`, `<200ms`, `under 300ms`, `under 60 seconds`) have been purged or qualified. All project evidence is traceable to verified assets.

## Quality status
All verification checks passed:
- `npx astro check`: 0 errors, 0 warnings, 0 hints.
- `npx tsc --showConfig`: clean TypeScript configuration.
- `npm run build`: 10 pages successfully compiled.
- Browser QA: Verified theme switching, persistence, responsive breakpoints (1440 to 375px), and media playback.
