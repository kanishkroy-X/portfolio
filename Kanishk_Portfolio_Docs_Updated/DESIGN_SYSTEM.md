# DESIGN SYSTEM

## Direction
**EDITORIAL PRODUCT STUDIO × TECHNICAL LAB** — see `PROJECT_BRIEF.md` for the anti-AI-slop rules. Do not redesign away from this direction without a clear reason that still fits the system.

## Color System

### Light Theme
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F7F7F5` | Primary background |
| `--color-surface` | `#FFFFFF` | Card surface |
| `--color-surface-elevated` | `#EFEFEA` | Elevated surface / frame |
| `--color-text-primary` | `#111111` | Primary text |
| `--color-text-muted` | `#6B6B6B` | Muted body text |
| `--color-border` | `#DCDCD8` | Borders / dividers |
| `--color-accent` | `#3157FF` | Electric blue accent |

### Dark Theme (Applied on `html.dark`)
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#111111` | Primary background |
| `--color-surface` | `#181818` | Card surface |
| `--color-surface-elevated` | `#202020` | Elevated surface / frame |
| `--color-text-primary` | `#F5F5F2` | Primary text |
| `--color-text-muted` | `#A3A3A0` | Muted body text |
| `--color-border` | `#30302D` | Borders / dividers |
| `--color-accent` | `#6B82FF` | Soft electric blue accent |

The blue accent stays restrained. No purple/pink/blue AI-gradient aesthetic. Dark mode feels like the same portfolio after sunset, not a different website.

### Theme Modes Supported
- **System**: Automatically matches OS `prefers-color-scheme` (default).
- **Light**: Forcibly displays light theme.
- **Dark**: Forcibly displays dark theme.
- Persisted to `localStorage` with zero FOUC via an inline blocking script.

## Typography
Primary family: **Geist**. Use one family consistently.

| Element | Size (desktop) |
|---|---|
| Hero | 72–96px |
| Project titles | 48–64px |
| Section titles | 32–40px |
| Body | 17–19px |
| Metadata | 12–14px |
| Labels | 11–12px, uppercase |

Use responsive type scaling rather than forcing desktop sizes onto mobile.

## Asset system
Each visual is an independent, purpose-built asset — do not reuse one moodboard image as a substitute for project evidence.

**Brand:** `kr-logo-accent.svg` · `kr-logo-light.svg` · `kr-logo-dark.svg` · `kr-wordmark.svg` · `kr-favicon.svg`

**Backgrounds:** `hero-editorial.jpg` · `hero-architecture.jpg` · `texture-paper.svg` · `texture-grain-dark.svg` · `texture-grid-light.svg` · `gradient-blue.svg` · `footer-pattern.jpg`

**Editorial:** `grid-element.svg` · `quote-same-curiosity.svg` · `annotation-ideas.svg` · `divider-editorial.svg`

**Icons:** Build · Experiment · AI Systems · Create · Improve · Share

**Project visuals**
- RandomChat — real UI screenshots, `randomchat-ui.png`, architecture visual, matching flow visual
- AI Ad Production Studio — Adidas commercial, Kreo commercial, Adidas storyboard, Adidas poster, documented production-pipeline visual

## Hero visual
Pick one direction; do not combine both without a strong reason.

**Option A — Editorial workspace/building photograph:** cinematic, realistic, documentary, studio environment, screens, sketches, notes, subtle blue lighting, neutral colors, slight film grain. Prefer a real photo of Kanishk if available — never fabricate his likeness.

**Option B — Minimal architectural composition:** concrete, paper, geometric shadows, negative space, off-white, subtle grain, technical/editorial feel.

## Interaction rules
Use only interaction that improves comprehension:
- subtle image movement
- hover previews
- project reveal
- opacity transitions
- small typography movement
- scroll activation
- video controls
- subtle cursor labels such as `VIEW →`, `PLAY →`, `OPEN →`

Avoid decorative interaction with no purpose.

## Video rules
- No autoplaying multiple videos at once.
- Every video needs a poster frame, play/pause, mute/unmute, fullscreen, mobile fallback, and lazy loading.
- AI Ad Production must show both Adidas (9:16) and Kreo (16:9).
- Kreo must not be silently dropped from either the homepage or case study.
- Do not imply a video is evidence of a capability beyond what the actual asset demonstrates.

## Accessibility
Semantic HTML · keyboard navigation · visible focus states · alt text · heading hierarchy · sufficient contrast · accessible video controls · `prefers-reduced-motion` support · mobile alternatives for hover-only interactions.

## Performance
Lazy-loaded images/videos · WebP/AVIF where appropriate · optimized SVGs · poster frames · compressed video · deferred non-critical scripts · minimal dependencies · no unnecessary animation libraries. Test on mobile and check for layout shift and console errors.
