# Portfolio Work — Canonical Source of Truth

**Directory Purpose:** Central project-management registry, technical asset index, and canonical source of truth for all projects, engineering repositories, commercial campaigns, automations, and experiments created by Kanishk Roy.

This folder decouples raw workstation work from public portfolio presentation. A project's presence in this directory provides a persistent, structured record of what exists on disk and in code without implying that it must be published immediately on the live website.

---

## 1. Directory Structure

```text
portfolio-work/
├── completed/       # Finished deliverables, shipped systems & verified masters
├── ongoing/         # Active builds currently in development
├── incomplete/      # Backlogged drafts lacking final assemblies/masters
├── experiments/     # R&D spikes, prompt frameworks & protocol prototypes
├── README.md        # This master documentation & project status registry
└── video-links.md   # Canonical external video URLs (no raw video binaries in Git)
```

---

## 2. Status Definitions

Every project in the system is evaluated across two distinct, independent dimensions:

### A. Project Engineering Status
* **`COMPLETED`**: The core deliverable, codebase, workflow, or video master is finished and verified on local disk or live production infrastructure.
* **`ONGOING`**: Active software build or campaign currently in development with substantive code or design artifacts, but awaiting final wiring or deployment.
* **`INCOMPLETE`**: Draft or paused work where core pieces exist (e.g. raw footage, exploratory scripts), but the final output was never assembled or exported.
* **`EXPERIMENT`**: Research spikes, benchmark tests, prompt architecture frameworks, or protocol tests built for learning or internal utility rather than client distribution.

### B. Portfolio Readiness Status
A project can be technically `COMPLETED` yet not ready for the public portfolio. The portfolio readiness scale tracks presentation viability:
* **`PORTFOLIO READY`**: High-signal evidence, verified documentation, clear business or technical problem/outcome framing, and required media/diagrams exist. Eligible for immediate curated showcase.
* **`NEEDS POLISH`**: Functional code or deliverables exist, but requires minor presentation framing, web screenshots, or deployment domain confirmation before public display.
* **`NEEDS MATERIAL`**: Core engineering or analysis is solid, but lacks case study narrative, visual assets, or public demo links.
* **`NOT REPRESENTED`**: Internal R&D, incomplete drafts, or deep backend frameworks deliberately kept out of the main client-facing portfolio to avoid diluting the primary positioning.

---

## 3. Current Project Registry

### Flagship Projects (Dual-Pillar Positioning)
These represent the core of Kanishk Roy's positioning as a **Product Architect & Creative Technologist**:

1. **RandomChat (`randomcaht.online`)** — *Flagship Pillar 01: Systems & Real-Time Engineering*
   - Status: `COMPLETED` | Portfolio Readiness: `PORTFOLIO READY`
   - Real-time anonymous communication network running on Cloudflare Workers, Durable Objects, and WebSockets with zero persistent user tracking.
2. **AI Ad Production Studio (Adidas Samba & Kreo Tech)** — *Flagship Pillar 02: Creative Direction & AI Production*
   - Status: `COMPLETED` | Portfolio Readiness: `PORTFOLIO READY`
   - Disciplined 13-stage commercial production framework turning generative models into broadcast-grade 1080p video campaigns.

---

### Completed Projects
* **Men's Jewellery Luxury Commercial Reel** (`completed/mens-jewellery-commercial.md`): `COMPLETED` | `PORTFOLIO READY` (Flagship Extension)
* **AI UGC for Cars Commercial** (`completed/ai-ugc-cars.md`): `COMPLETED` | `PORTFOLIO READY` (Flagship Extension)
* **AI UGC Commercial Sequence** (`completed/ai-ugc-commercial.md`): `COMPLETED` | `PORTFOLIO READY` (Flagship Extension)
* **Wellbeing Nutrition CRO** (`completed/wellbeing-nutrition.md`): `COMPLETED` | `PORTFOLIO READY` (Supporting Strategy)
* **AI Research Analyst** (`completed/ai-research-analyst.md`): `COMPLETED` | `PORTFOLIO READY` (Supporting AI System)
* **WhatsApp Lead Qualifier & CRM Sync** (`completed/whatsapp-lead-qualifier.md`): `COMPLETED` | `PORTFOLIO READY` (Supporting Automation)
* **Instagram MCP Server** (`completed/instagram-mcp-server.md`): `COMPLETED` | `PORTFOLIO READY` (Supporting DevTool)
* **Aurelia Real Estate Brokerage Website** (`completed/aurelia-real-estate.md`): `COMPLETED` | `PORTFOLIO READY` (Supporting Web)
* **FreeRuler / Screen Ruler** (`completed/freeruler.md`): `COMPLETED` | `NEEDS POLISH` (Supporting Utility)
* **CleanPDF** (`completed/cleanpdf.md`): `COMPLETED` | `NEEDS POLISH` (Supporting Utility)
* **YouTube Episode 03 Production & Shorts** (`completed/youtube-ep3-production.md`): `COMPLETED` | `NEEDS MATERIAL` (Supporting Media)

---

### Ongoing Projects
* *Current Queue:* Empty.
* **Important Note on Student Project OS:** Student Project OS has been permanently removed and retired from the portfolio plan. It is intentionally excluded from active portfolio consideration.

---

### Incomplete Projects
* **Headphones Commercial Campaign** (`incomplete/headphones-commercial.md`): `INCOMPLETE` | `NOT REPRESENTED`
  - 7 raw video takes across kitchen, office, and stadium environments; lacks final Premiere Pro assembly and sound mix.

---

### Experiments & R&D
* **OpenMontage** (`experiments/openmontage.md`): `EXPERIMENT` | `NOT REPRESENTED`
  - Programmatic video composition engine using Python, Remotion, and YAML pipelines.
* **Gemini Calculator** (`experiments/gemini-calculator.md`): `EXPERIMENT` | `NOT REPRESENTED`
  - Cyberpunk-styled React Native / Expo mobile application.
* **Football UGC Brand Campaign Studio** (`experiments/football-ugc-studio.md`): `EXPERIMENT` | `NOT REPRESENTED`
  - Reverse-engineering framework and interactive HTML shotlist generator for athletic video ads.

---

## 4. Operational Rules

1. **Curated Public Portfolio:** A project existing in this folder does NOT mean it should be dumped onto the live website. The public portfolio remains strictly curated around high-signal, proof-backed systems.
2. **Zero Raw Video Bloat:** Large `.mp4` and `.mov` commercial master files must NEVER be committed to the Git repository. External video references are cataloged in `video-links.md` and loaded on the web using lightweight WebP/JPG facade posters.
3. **Evidence Integrity:** Do not invent metrics, testimonials, or technical claims. Missing evidence must be documented explicitly as `Not documented yet.`
