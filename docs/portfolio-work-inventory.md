# Portfolio Work Inventory

**Document Purpose:** Comprehensive inventory and technical audit of all projects, codebases, commercial video campaigns, documents, assets, and YouTube links discovered across Kanishk Roy's workstation (`e:\01_WORK` and `e:\02_CONTENT`).  
**Status:** Ingestion & Classification Complete (No website source code altered).  
**Source of Truth For:** Future portfolio updates, case study authoring, and project rollouts.

---

## 1. Inventory Summary & Classification Matrix

| Project Name | Primary Category | Verified Status | Portfolio Readiness | Case Study Readiness | Proposed Portfolio Role |
|---|---|---|---|---|---|
| **01. RandomChat** | Product / Real-Time System | `COMPLETED` | **PORTFOLIO READY** | `READY` | **FLAGSHIP PILLAR 01** |
| **02. AI Ad Production Studio (Adidas & Kreo)** | Creative Direction / AI Production | `COMPLETED` | **PORTFOLIO READY** | `READY` | **FLAGSHIP PILLAR 02** |
| **03. Men's Jewellery Commercial** | Creative Direction / AI Video | `COMPLETED` | **PORTFOLIO READY** | `NEARLY READY` | **FLAGSHIP EXTENSION** |
| **04. AI UGC for Cars** | Creative Direction / AI Video | `COMPLETED` | **PORTFOLIO READY** | `NEARLY READY` | **FLAGSHIP EXTENSION** |
| **05. AI UGC Commercial Sequence** | Creative Direction / AI Video | `COMPLETED` | **PORTFOLIO READY** | `NEARLY READY` | **FLAGSHIP EXTENSION** |
| **06. Student Project OS** | Product / SaaS / Productivity | `ONGOING` | **NEEDS POLISH** | `NEARLY READY` | **"CURRENTLY BUILDING" SHOWCASE** |
| **07. FreeRuler (`freeruler.com`)** | Web Utility / Frontend Engineering | `COMPLETED` | **NEEDS POLISH** | `NEEDS MATERIAL` | **SUPPORTING UTILITY** |
| **08. AI Research Analyst (Market Intel)** | AI Systems / Market Intelligence | `COMPLETED` | **PORTFOLIO READY** | `READY` | **SUPPORTING SYSTEM** |
| **09. Wellbeing Nutrition CRO** | CRO Research & Product Strategy | `COMPLETED` | **PORTFOLIO READY** | `READY` | **SUPPORTING SYSTEM** |
| **10. CleanPDF** | Client-Side Utility / WASM | `COMPLETED` | **NEEDS POLISH** | `NEEDS MATERIAL` | **SUPPORTING UTILITY** |
| **11. OpenMontage** | AI Video Automation / Engineering | `EXPERIMENT` | **NOT PORTFOLIO READY** | `NEEDS MATERIAL` | **LAB LOG / R&D DEEP-DIVE** |
| **12. Football UGC Campaign Studio** | Creative AI / Reverse Engineering | `EXPERIMENT` | **NOT PORTFOLIO READY** | `NOT SUITABLE` | **LAB LOG / INTERNAL ASSET** |
| **13. Headphones Commercial** | Creative AI Video | `INCOMPLETE` | **NOT PORTFOLIO READY** | `NOT SUITABLE` | **RAW ASSET VAULT** |

---

## 2. Detailed Project Entries

### Project 01: RandomChat (`onlinechat`)
- **Status:** `COMPLETED`
- **Category:** `Product / Real-Time System`
- **Short Description:** Anonymous-by-default, instant peer-to-peer text and voice web platform executing matchmaking and ephemeral room pairing on the edge without persistent user accounts or database overhead.
- **What Exists:**
  - Full production codebase in `e:\01_WORK\Websites\onlinechat` (Astro, TypeScript, Tailwind, Cloudflare Workers, Cloudflare Durable Objects, WebSockets).
  - Production deployment running at `https://randomcaht.online`.
  - Comprehensive PRD documents (`randomcaht_online_PRD(1).md`, `randomcaht_online_ARCHITECTURE(2).md`).
  - Mobile-first responsive specifications and dark mode design briefs (`RandomChat_DarkMode_UIUX_Brief.md`).
  - Vitest test suite (`vitest.config.ts`, `tests/`).
  - Architectural diagrams (`randomchat-architecture.svg`, `randomchat-matching-flow.svg`).
  - 4 verified production dark mode screenshots in `public/assets/projects/randomchat/screens/`.
- **What is Missing:**
  - Direct live URL (`https://randomcaht.online`) is currently not exposed on the homepage preview card (only inside the case study).
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **READY**
- **Available Assets:** Complete SVGs, architecture schematics, production screenshots, full PRD markdown files.
- **Video Links:** None currently needed (UI screenshots and live web app provide proof).
- **Documentation:** Complete (`e:\01_WORK\Websites\onlinechat`).
- **Relevant Technologies / Tools:** TypeScript, Astro, Cloudflare Workers, Cloudflare Durable Objects, WebSockets, WebRTC, Tailwind CSS.
- **Potential Portfolio Role:** **FLAGSHIP PILLAR 01** (The primary technical and product systems proof).
- **Notes:** High-impact engineering project demonstrating full-stack distributed system capabilities.

---

### Project 02: AI Ad Production Studio (Adidas Samba & Kreo Tech)
- **Status:** `COMPLETED`
- **Category:** `Creative Direction / AI Production`
- **Short Description:** A disciplined 13-stage commercial production framework that eliminates generative video artifacts (temporal flicker, anatomical warping, style drift) through 2K storyboard framing, seed-anchored prompt architecture, multi-take curation, and frame-accurate timeline editing in Premiere Pro with authentic Foley sound design.
- **What Exists:**
  - 2 verified commercial video deliverables:
    1. *Adidas Samba* (9:16 vertical commercial reel, macro tumbled leather, high-energy streetwear pacing).
    2. *Kreo Tech* (16:9 widescreen cinematic film exploring macro mechanical gaming hardware).
  - 2K resolution pre-visualization storyboard grid (`storyboard-samba.jpeg`).
  - 13-stage production pipeline visual schematic (`pipeline-visual.svg`).
  - Active interactive player on the live portfolio homepage with format switcher.
- **What is Missing:**
  - Native video player facade (currently relies on raw YouTube iframe embeds).
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **READY**
- **Available Assets:** 2K storyboard JPEG, pipeline SVG, YouTube embeds, poster frames.
- **Video Links:**
  - Adidas Samba: `https://youtube.com/shorts/4SVc4FL4Mdk` (Embed: `https://www.youtube.com/embed/4SVc4FL4Mdk`)
  - Kreo Tech: `https://youtu.be/cPhpFQnsXKo` (Embed: `https://www.youtube.com/embed/cPhpFQnsXKo`)
- **Documentation:** Complete in `Kanishk_Portfolio_Docs_Updated/PROJECTS.md` and `src/pages/work/ai-ad-production.astro`.
- **Relevant Technologies / Tools:** Midjourney v6, Runway Gen-3, Kling AI, Adobe Premiere Pro, CapCut, Foley Audio Design, Color LUT Grading.
- **Potential Portfolio Role:** **FLAGSHIP PILLAR 02** (The primary creative direction proof).
- **Notes:** Directly answers industry skepticism regarding AI video by demonstrating human editorial control and commercial finish.

---

### Project 03: Men's Jewellery Commercial Reel
- **Status:** `COMPLETED`
- **Category:** `Creative Direction / AI Production (Luxury / E-commerce)`
- **Short Description:** High-end cinematic commercial reel for men's luxury jewellery, showcasing photorealistic macro metal reflections, realistic chain physics, controlled dark studio lighting, and zero plastic warping.
- **What Exists:**
  - Verified YouTube Master: `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS` (Title: "mens jwellery").
  - Local video master files in `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\Mens Jwellery`:
    - `2026-09-29 09-14-55.mp4` (146 MB)
    - `2026-09-29 09-14-55_1.mp4` (146 MB)
    - `2026-09-29 09-14-55_2.mp4` (37 MB)
  - Character consistency sheets (`character 1.png` to `charater 5.png`).
  - Prop source references (`ca36bb93-c413-4be0-86c3-972d51771b1a.png`).
- **What is Missing:**
  - Standalone written case study describing the specific lighting and reflection prompt constraints.
  - Poster frame image for web player integration.
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **NEARLY READY**
- **Available Assets:** 3 local master video exports, 5 character sheet PNGs, YouTube master link.
- **Video Links:** `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS`
- **Documentation:** Logged in `portfolio-work/video-links.md`.
- **Relevant Technologies / Tools:** Midjourney, Kling AI / Runway Gen-3, Premiere Pro, Macro Reflection Prompt Architecture.
- **Potential Portfolio Role:** **FLAGSHIP EXTENSION** (Expands AI Ad Studio into luxury goods and e-commerce).
- **Notes:** Demonstrates ability to handle reflective metals and jewellery—one of the hardest technical benchmarks in generative video.

---

### Project 04: AI UGC for Cars
- **Status:** `COMPLETED`
- **Category:** `Creative Direction / AI Production (Automotive / Paid Social)`
- **Short Description:** High-converting, social-native commercial sequence showcasing vehicle paint reflections, realistic outdoor environment lighting, natural driving dynamics, and fast-paced hook-to-payoff editing.
- **What Exists:**
  - Verified YouTube Master: `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF` (Title: "AI UGC FOR CARS").
  - Local video master file in `e:\02_CONTENT\Ads\Omni_Campaigns\video\AI UGC AD.mp4` (184 MB).
- **What is Missing:**
  - Written brief explaining the automotive prompt decoupling techniques.
  - Web-optimized poster thumbnail.
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **NEARLY READY**
- **Available Assets:** 184MB master MP4, YouTube link.
- **Video Links:** `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF`
- **Documentation:** Logged in `portfolio-work/video-links.md`.
- **Relevant Technologies / Tools:** Kling AI, Runway Gen-3, Adobe Premiere Pro, Sound Design, Paid Social Creative Pacing.
- **Potential Portfolio Role:** **FLAGSHIP EXTENSION** (Demonstrates automotive realism and high-volume performance marketing capability).
- **Notes:** High commercial relevance for agency clients and automotive marketing teams.

---

### Project 05: AI UGC Commercial Sequence
- **Status:** `COMPLETED`
- **Category:** `Creative Direction / AI Production (Social UGC / D2C Marketing)`
- **Short Description:** Naturalistic creator-style UGC ad sequence designed for TikTok and Instagram Reels, simulating handheld smartphone camera physics, conversational pacing, and genuine human product interactions.
- **What Exists:**
  - Verified YouTube Master: `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk` (Title: "AI UGC").
  - Local video master file in `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\ai reel 2\video\AI UGC.mp4` (64 MB).
  - Character sheets in `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\ai reel 2\chatacter seet`.
- **What is Missing:**
  - Short case study copy detailing the script breakdown and conversion hypothesis.
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **NEARLY READY**
- **Available Assets:** 64MB master MP4, 4 character sheet PNGs, YouTube link.
- **Video Links:** `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk`
- **Documentation:** Logged in `portfolio-work/video-links.md`.
- **Relevant Technologies / Tools:** Kling AI, Seedance, Midjourney, Premiere Pro, CapCut, Foley Mix.
- **Potential Portfolio Role:** **FLAGSHIP EXTENSION** (Demonstrates authentic, low-friction social creator video generation).
- **Notes:** Proves ability to replace expensive creator gifting and studio shoots with hyper-realistic AI UGC.

---

### Project 06: Student Project OS
- **Status:** `ONGOING / IN DEVELOPMENT`
- **Category:** `Product / SaaS / Productivity`
- **Short Description:** A dedicated project and portfolio workspace built for ambitious students who juggle learning AI, building software, creating content, and applying for opportunities. Anchored by the question: *"Out of everything I want to do, what should I work on today?"*
- **What Exists:**
  - Exhaustive 1,935-line Product Requirements Document (`e:\01_WORK\Websites\student OS\student_project_os.md`).
  - Comprehensive 24KB UI/UX Design System Specification (`e:\01_WORK\Websites\student OS\DESIGN.md`).
  - Complete Design Intelligence Kit (`uiux-design-intelligence-kit.md`).
  - Video concept asset (`Woman_selecting_task_on_laptop_202609012134.mp4` at 4.2 MB).
  - Working Astro codebase initialized with components and layouts.
- **What is Missing:**
  - Live hosted deployment domain.
  - Finalized production screenshots of the interactive dashboard.
- **Portfolio Readiness:** **NEEDS POLISH** (Perfect for a "Currently Building" showcase, but not ready as a completed case study).
- **Case Study Readiness:** **NEARLY READY** (The documentation is world-class; only final UI screenshots and live link are needed).
- **Available Assets:** 1,935-line PRD, 24KB DESIGN.md, MP4 video concept, prompt packages.
- **Video Links:** Local video asset only (`Woman_selecting_task_on_laptop_202609012134.mp4`).
- **Documentation:** Exceptional (`e:\01_WORK\Websites\student OS`).
- **Relevant Technologies / Tools:** Astro, TypeScript, Tailwind CSS, Product Management, Information Architecture, Ergonomic UI Design.
- **Potential Portfolio Role:** **HIGH-VALUE ONGOING PRODUCT SHOWCASE** (Hero item in the "Currently Building / Lab Log" section).
- **Notes:** Massive evidence of authentic product thinking and self-directed SaaS architecture.

---

### Project 07: FreeRuler / Online Ruler (`freeruler.com` & `NEWRULLER.IN`)
- **Status:** `COMPLETED — NEEDS POLISH`
- **Category:** `Web Utility / Frontend Engineering`
- **Short Description:** High-precision, zero-clutter digital ruler web application providing calibrated actual-size physical measurements (cm/mm, inches) on any display, featuring draggable alignment guides, physical credit card reference overlays, and browser zoom accuracy warnings.
- **What Exists:**
  - Fully functioning Astro web application in `e:\01_WORK\Websites\freeruler.com` (466 lines of clean interactive logic in `src/pages/index.astro`).
  - 4-sided dynamic SVG rulers with synchronized horizontal and vertical scrolling.
  - Screen PPI calibration algorithms and credit card physical overlay checks (85.6mm × 53.98mm).
  - Browser zoom detection and warning banner (`Ctrl+0` reset prompt).
  - 41KB design system contract (`DESIGN.md`).
  - Project documentation PDF (`online-ruler-project-docs.md.pdf` at 140 KB).
- **What is Missing:**
  - Standalone case study written up for the portfolio.
  - Verified public production deployment URL confirmation (code exists in `freeruler.com` and `NEWRULLER.IN`).
  - Clean web mockup screenshots.
- **Portfolio Readiness:** **NEEDS POLISH**
- **Case Study Readiness:** **NEEDS MATERIAL** (Code is 100% finished; needs a 1-page write-up and production domain).
- **Available Assets:** Complete Astro source code, SVG ruler engines, design contract, project PDF.
- **Video Links:** None currently needed.
- **Documentation:** `online-ruler-project-docs.md.pdf` and `DESIGN.md`.
- **Relevant Technologies / Tools:** Astro, TypeScript, SVG Geometry, Screen PPI Calibration, DOM Touch Events, Tailwind CSS.
- **Potential Portfolio Role:** **SUPPORTING UTILITY** (Could replace or complement CleanPDF as an interactive utility proof).
- **Notes:** High organic SEO and viral utility potential; demonstrates micro-interaction precision.

---

### Project 08: AI Research Analyst / Global Market Intelligence
- **Status:** `COMPLETED`
- **Category:** `AI Systems / Market Intelligence`
- **Short Description:** Full-stack decision-grade research intelligence engine that accepts complex strategic questions, conducts automated live multi-query web search via Tavily API, grounds claims in verbatim excerpts, and strips hallucinated citations using an automated deterministic Verifier Gate.
- **What Exists:**
  - Full codebase in `e:\01_WORK\Websites\AI R.ANALYST` (FastAPI backend, React 19 frontend, SQLite, Pydantic v2).
  - 41 automated pytest test suites validating verifier gate filtering.
  - Deep market research dataset in `e:\01_WORK\AI\Codex_Studio\Global Market Intelligence` (13 research chapters, YC landscape, Unicorn database, SQL exports, CSVs).
  - Final publication: `Global_Market_Intelligence_2026.pdf` (86 KB).
  - System architecture schematic (`architecture.svg`) and Claim Taxonomy documentation in the existing portfolio.
- **What is Missing:**
  - Live cloud deployment link (currently runs locally or via API).
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **READY**
- **Available Assets:** Python codebase, test suite, architecture diagram, claim taxonomy matrix, research PDF.
- **Video Links:** None currently.
- **Documentation:** Complete in `src/pages/work/ai-research-analyst.astro` and `Codex_Studio/Global Market Intelligence`.
- **Relevant Technologies / Tools:** Python 3.11, FastAPI, React 19, Tavily API, SQLite, OpenRouter, Pydantic v2, Pytest.
- **Potential Portfolio Role:** **SUPPORTING SYSTEM** (Core technical AI systems proof).
- **Notes:** Strongly proves that Kanishk does not just call an LLM, but builds deterministic verification systems around AI.

---

### Project 09: Wellbeing Nutrition CRO
- **Status:** `COMPLETED`
- **Category:** `CRO Research & Product Strategy`
- **Short Description:** Comprehensive conversion rate optimization audit and mobile UX redesign for Wellbeing Nutrition, diagnosing checkout funnel drop-offs, untangling clinical ingredient anxiety, and architecting transparent per-day subscription pricing with sticky 1-tap cart additions.
- **What Exists:**
  - Full slide deck and proposal in `e:\01_WORK\Clients\growth_pm`:
    - `Wellbeing_Nutrition_CRO_Proposal_Kanishk_revised.pptx` (411 KB)
    - `PM CRO Demo Project — Editable Pitch Deck.pdf` (1.1 MB)
    - `linkedin case study.pdf` (19.4 MB)
  - Interactive high-fidelity HTML prototypes:
    - `wellbeing-collagen-cro-prototype.html` (453 KB)
    - `wellbeing-collagen-cro-prototype-enhanced.html`
  - Funnel architecture preview schematic (`funnel-preview.svg`) in the existing portfolio.
- **What is Missing:**
  - Live production A/B test data (documented clearly as a strategic design and hypothesis blueprint).
- **Portfolio Readiness:** **PORTFOLIO READY**
- **Case Study Readiness:** **READY**
- **Available Assets:** Interactive HTML prototype, 19.4MB case study PDF, PowerPoint presentation, funnel SVG.
- **Video Links:** None currently.
- **Documentation:** Complete in `Clients/growth_pm` and `src/pages/work/wellbeing-nutrition.astro`.
- **Relevant Technologies / Tools:** CRO Audit, Heatmap Analytics, Funnel Architecture, Figma, Mobile UX, Interactive HTML Prototyping.
- **Potential Portfolio Role:** **SUPPORTING SYSTEM** (Core commercial and product thinking proof).
- **Notes:** Essential proof of customer psychology, business acumen, and e-commerce growth strategy.

---

### Project 10: CleanPDF
- **Status:** `COMPLETED — NEEDS POLISH`
- **Category:** `Client-Side Utility / Privacy`
- **Short Description:** Privacy-respecting, zero-server document processing utility executing compression, merging, and redaction 100% inside client browser RAM using WebAssembly and background Web Workers with zero server network transport.
- **What Exists:**
  - Working Astro/Vite codebase in `e:\01_WORK\Automation\remove watermark`.
  - In-browser WASM architecture schematic (`architecture.svg`) in the existing portfolio.
  - Project documentation archive (`cleanpdf-docs/` and `cleanpdf-docs.zip`).
- **What is Missing:**
  - Dedicated live public URL (currently code resides in `remove watermark`).
  - More detailed interactive evidence on the case study page.
- **Portfolio Readiness:** **NEEDS POLISH**
- **Case Study Readiness:** **NEEDS MATERIAL**
- **Available Assets:** Source code, architecture schematic, documentation archive.
- **Video Links:** None.
- **Documentation:** `cleanpdf-docs/` in `Automation/remove watermark`.
- **Relevant Technologies / Tools:** WebAssembly, PDF-lib, Web Workers, TypeScript, Astro, Canvas API.
- **Potential Portfolio Role:** **SUPPORTING UTILITY**
- **Notes:** Good proof of client-side privacy engineering and off-thread performance.

---

### Project 11: OpenMontage
- **Status:** `EXPERIMENT / R&D`
- **Category:** `AI Video Automation / Engineering Engine`
- **Short Description:** Advanced programmatic video composition engine coupling Remotion, Ink Theater, and multi-modal pipeline definitions for automated, script-driven video generation.
- **What Exists:**
  - Massive repository in `e:\01_WORK\Automation\Open Montage\OpenMontage`.
  - Comprehensive documentation (`AGENT_GUIDE.md` at 48 KB, `README.md` at 44 KB, `PROMPT_GALLERY.md` at 12 KB).
  - Python CLI tools, Remotion composer, render scripts (`render_demo.py`).
- **What is Missing:**
  - Simplified public narrative or consumer UI (it is currently a deep backend engineering framework).
  - Rendered demo reel accessible for web embedding.
- **Portfolio Readiness:** **NOT PORTFOLIO READY** (Too complex for a general project card; best suited for a technical blog post or lab note).
- **Case Study Readiness:** **NEEDS MATERIAL**
- **Available Assets:** Full codebase, pipeline definitions, prompt galleries.
- **Video Links:** None public.
- **Documentation:** Extensive technical docs in `OpenMontage`.
- **Relevant Technologies / Tools:** Python, Remotion, FFmpeg, Generative AI Pipelines, Automation.
- **Potential Portfolio Role:** **LAB LOG / R&D DEEP-DIVE** (Mentioned in the "Lab Log" as active pipeline engineering).
- **Notes:** Immense proof of technical depth in programmatic video infrastructure.

---

### Project 12: Football UGC Brand Campaign Studio
- **Status:** `EXPERIMENT`
- **Category:** `Creative AI / Brand Campaign R&D`
- **Short Description:** Reverse engineering and shotlist generation framework for sports and athletic UGC commercial sequences (focusing on football boots, stadium lighting, and match-action motion).
- **What Exists:**
  - Reverse engineering document: `e:\01_WORK\AI\Codex_Studio\football-ugc-reverse-engineering.md`.
  - Interactive shotlist HTML generator: `football-ugc-shotlist.html` (17 KB).
  - Raw video takes in `e:\02_CONTENT\Ads\Omni_Campaigns\football ugc`.
- **What is Missing:**
  - Final assembled master video reel.
- **Portfolio Readiness:** **NOT PORTFOLIO READY**
- **Case Study Readiness:** **NOT SUITABLE**
- **Available Assets:** Markdown reverse engineering spec, HTML shotlist generator.
- **Video Links:** None public.
- **Documentation:** `Codex_Studio/football-ugc-reverse-engineering.md`.
- **Relevant Technologies / Tools:** Prompt Architecture, Seedance, AI Video Curation.
- **Potential Portfolio Role:** Internal reference / asset vault.

---

### Project 13: Headphones Commercial Campaign
- **Status:** `INCOMPLETE`
- **Category:** `Creative AI Video`
- **Short Description:** Commercial campaign exploring active noise cancellation across diverse lifestyle environments (kitchen, office, stadium).
- **What Exists:**
  - 7 video takes in `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\headphones\Videos` (`Kitchen 2.mp4`, `stadium 1.mp4`, etc.).
  - 4 scene concept images in `scenes 1` (`kitchen.png`, `office.png`, `stadium.png`).
- **What is Missing:**
  - Final timeline edit in Premiere Pro.
  - Sound design and voiceover mix.
  - Master export.
- **Portfolio Readiness:** **NOT PORTFOLIO READY**
- **Case Study Readiness:** **NOT SUITABLE**
- **Available Assets:** Raw MP4 takes, scene PNGs.
- **Video Links:** None public.
- **Documentation:** None.
- **Relevant Technologies / Tools:** Generative video plates.
- **Potential Portfolio Role:** Unfinished asset vault.

---

## 3. Video Library

Every discovered video link and its designated portfolio presentation target:

| Video Title / Project | YouTube URL | Format | Primary Purpose | Recommended Presentation Type |
|---|---|---|---|---|
| **Adidas Samba Commercial** | `https://youtube.com/shorts/4SVc4FL4Mdk` | 9:16 Vertical Reel | Flagship proof of high-energy creative direction & leather texture | **In-Page Interactive Commercial Player** (Click-to-load facade) |
| **Kreo Tech Commercial** | `https://youtu.be/cPhpFQnsXKo` | 16:9 Widescreen Film | Flagship proof of macro mechanical hardware & atmospheric lighting | **In-Page Interactive Commercial Player** (Click-to-load facade) |
| **Men's Jewellery Commercial** | `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS` | High-End Product Reel | Proof of reflective metal physics & luxury lifestyle aesthetics | **Flagship Extension Tab** in Commercial Showcase |
| **AI UGC for Cars** | `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF` | 16:9 / Social Automotive | Proof of vehicle paint reflections & paid social ad pacing | **Flagship Extension Tab** in Commercial Showcase |
| **AI UGC Sequence** | `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk` | Social-Native Creator Reel | Proof of conversational human pacing & realistic handheld motion | **Supporting Evidence Reel** on AI Commercials page |

### Video Storage & Hosting Strategy
1. **Zero Video Bloat in Repo:** Do NOT commit raw 100MB+ `.mp4` files into the Git repository.
2. **YouTube Facade Implementation:** On the website, use lightweight WebP poster frames. Only when a visitor clicks "Play" is the YouTube iframe instantiated.
3. **Future Native CDN Option:** If ad-free native video loops are desired, upload masters to **Cloudflare R2** or **Vercel Blob** and stream via HTML5 `<video>` tags with poster images.

---

## 4. Asset Management & Classification

| Asset Location | File Type | Classification | Action for Portfolio |
|---|---|---|---|
| `e:\01_WORK\Websites\PORTFOLIO\public\assets\backgrounds\hero-editorial.jpg` | 866KB JPEG | **Temporary working asset** | Compress to WebP (< 90KB) |
| `e:\01_WORK\Websites\PORTFOLIO\public\assets\backgrounds\hero-architecture.jpg` | 762KB JPEG | **Temporary working asset** | Compress to WebP (< 90KB) |
| `e:\01_WORK\Websites\onlinechat\public\assets\` | SVGs / UI PNGs | **Portfolio production asset** | Integrate into RandomChat case study |
| `e:\01_WORK\Clients\growth_pm\images\` | Funnel PNGs | **Case-study asset** | Integrate into Wellbeing Nutrition case study |
| `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\Mens Jwellery\*.png` | Character sheets | **Case-study asset** | Use in Men's Jewellery behind-the-scenes gallery |
| `e:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\headphones\Videos\*.mp4` | Raw takes (50MB+) | **Reference only / Working vault** | Keep outside repository |
| `e:\01_WORK\Websites\student OS\student_project_os.md` | 33KB Markdown | **Case-study asset** | Use to author Student OS "Currently Building" card |

---

## 5. Strategic Comparison Against Existing Portfolio

| New / Discovered Work | Existing Portfolio Representation | Strategic Action for Redesign |
|---|---|---|
| **Men's Jewellery Video** | Not represented | **Integrate immediately** as Tab 03 in the AI Ad Production Studio showcase. |
| **AI UGC for Cars Video** | Not represented | **Integrate immediately** as Tab 04 in the AI Ad Production Studio showcase. |
| **AI UGC Sequence Video** | Not represented | **Integrate** as supporting creator evidence. |
| **Student Project OS** | Not represented | **Feature prominently** in the "Currently Building / Lab Log" section as live proof of active SaaS product thinking. |
| **FreeRuler (`freeruler.com`)** | Not represented | **Add to Selected Archive** as an interactive web utility alongside or replacing CleanPDF. |
| **OpenMontage** | Not represented | **Reference in Lab Log** as advanced Python/Remotion video automation research. |
| **RandomChat** | Represented as Pillar 01 | **Upgrade card** to expose direct link to `randomcaht.online` on the homepage. |
| **AI Ad Production Studio** | Represented as Pillar 02 | **Expand player** from 2 tabs (Adidas/Kreo) to 4 tabs (adding Jewellery and Cars). |
| **AI Research Analyst** | Represented in Archive | **Retain as core supporting intelligence system**. |
| **Wellbeing Nutrition CRO** | Represented in Archive | **Retain as core supporting commercial thinking proof**. |

---

## 6. Information Needed From Kanishk

These questions cannot be answered from the filesystem and require your decision:

1. **FreeRuler Production Status:** What is the active public domain for FreeRuler (`freeruler.com` or `newruler.in`), and do you want it featured as a live interactive utility on the portfolio?
2. **Student Project OS Visibility:** Do you want Student Project OS featured on the homepage as a "Currently Building" preview, or should it wait until a public beta link is deployed?
3. **Commercial Video Selection:** In the AI Ad Production Studio showcase, should we feature all 4 commercial videos (Adidas Samba, Kreo Tech, Men's Jewellery, AI UGC Cars) in the interactive tab switcher?
4. **OpenMontage Exposure:** Do you want OpenMontage mentioned in your "Lab Log" as evidence of deep Python video pipeline engineering?
