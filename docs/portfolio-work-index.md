# Portfolio Work Index

**Master Source of Truth:** Central index of all canonical projects, creative campaigns, automation systems, and experiments across Kanishk Roy's workstation and portfolio ecosystem.  
**Companion Documents:**
- [docs/portfolio-overview.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-overview.md)
- [docs/portfolio-work-inventory.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-work-inventory.md)
- [docs/portfolio-curation-candidates.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-curation-candidates.md)
- [portfolio-work/video-links.md](file:///e:/01_WORK/Websites/PORTFOLIO/portfolio-work/video-links.md)

**Status:** Inventory Freeze Complete — Validation and decision framework prepared; zero website code altered.

---

## 1. Master Portfolio Work Table

| Project | Status | Portfolio Status | Category | Role | Evidence | Video | Case Study | Live Link |
|---|---|---|---|---|:---:|:---:|:---:|:---:|
| **RandomChat** | COMPLETED | PORTFOLIO READY | Web / Distributed Systems | FLAGSHIP | YES | NO | READY | YES |
| **AI Ad Production Studio** | COMPLETED | PORTFOLIO READY | Creative AI / Commercials | FLAGSHIP | YES | YES | READY | YES |
| **Wellbeing Nutrition CRO** | COMPLETED | PORTFOLIO READY | Growth / Product / CRO | SUPPORTING | YES | NO | READY | YES |
| **AI Research Analyst** | COMPLETED | PORTFOLIO READY | AI Systems / Full-Stack | SUPPORTING | YES | NO | READY | PARTIAL |
| **WhatsApp Lead Qualifier** | COMPLETED | PORTFOLIO READY | Automation / AI Agents | SUPPORTING | YES | NO | READY | PARTIAL |
| **Instagram MCP Server** | COMPLETED | PORTFOLIO READY | AI DevTool / Protocol | SUPPORTING | YES | NO | READY | NO |
| **Aurelia Real Estate** | COMPLETED | PORTFOLIO READY | Web / Architecture & Design | SUPPORTING | YES | NO | PARTIAL | YES |
| **FreeRuler / Screen Ruler** | COMPLETED | NEEDS POLISH | Web / Interactive Tool | SUPPORTING | YES | NO | PARTIAL | PARTIAL |
| **CleanPDF** | COMPLETED | NEEDS POLISH | Automation / WASM | SUPPORTING | YES | NO | PARTIAL | NO |
| **YouTube Ep-03 & Shorts** | COMPLETED | SUPPORTING | Video / Creator Media | SUPPORTING | YES | YES | PARTIAL | PARTIAL |
| **OpenMontage** | COMPLETED | EXPERIMENTAL | AI Video Engine / R&D | EXPERIMENTAL | YES | NO | PARTIAL | NO |
| **Gemini Calculator** | COMPLETED | EXPERIMENTAL | Mobile / React Native | EXPERIMENTAL | YES | NO | PARTIAL | NO |
| **Football UGC Studio** | EXPERIMENT | EXPERIMENTAL | Creative AI / Reverse Eng | EXPERIMENTAL | YES | NO | NO | NO |
| **Headphones Commercial** | INCOMPLETE | NEEDS FINAL OUTPUT | Video / Commercial | SUPPORTING | PARTIAL | NO | NO | NO |

*Evidence Legend:*
- **YES:** Complete codebase, working build, verifiable video, or production deck exists on disk.
- **PARTIAL:** Working prototype or unedited media exists, but requires minor polish or live URL verification.
- **NO:** Missing or unverified.

---

## 2. Canonical Project Index

### Completed — Portfolio Ready
*Projects with verified technical implementations, high aesthetic standards, and existing case study or demo assets.*

#### 1. RandomChat (`randomcaht.online`)
- **Canonical ID:** `randomchat`
- **Category:** Distributed Systems / Real-Time Web
- **Workspace Location:** `E:\01_WORK\Websites\onlinechat`
- **Role:** **FLAGSHIP (Pillar 01)**
- **Technical Evidence:** Full Cloudflare edge stack, Durable Objects for lobby state, WebSockets room matching, zero-database ephemeral storage, WebRTC STUN peer signaling.
- **Case Study Status:** READY (Documented in `src/pages/work/randomchat.astro` with architecture diagram).
- **Live URL:** `https://randomcaht.online`

#### 2. AI Ad Production Studio (Commercial Creative Suite)
- **Canonical ID:** `ai-ad-production-studio`
- **Category:** Creative AI / Advertising Video Production
- **Workspace Location:** `public/assets/projects/ai-ad-production` + `E:\02_CONTENT\Ads\Omni_Campaigns`
- **Role:** **FLAGSHIP (Pillar 02)**
- **Commercial Campaigns Included:**
  1. *Adidas Samba* (9:16 Vertical Reel) — `https://youtube.com/shorts/4SVc4FL4Mdk`
  2. *Kreo Tech* (16:9 Cinematic Ad) — `https://youtu.be/cPhpFQnsXKo`
  3. *Men's Jewellery Reel* (Luxury Macro E-commerce) — `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS`
  4. *AI UGC for Cars* (Automotive Performance Ad) — `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF`
  5. *AI UGC Sequence* (D2C Social Conversion Reel) — `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk`
- **Technical Evidence:** 13-stage production methodology, Midjourney prompt matrices, Kling/Runway optical flow settings, character turnarounds, Premiere Pro timeline assemblies.
- **Case Study Status:** READY (Documented in `src/pages/work/ai-ad-production.astro` + external YouTube embeds).

#### 3. Wellbeing Nutrition CRO & Growth Engine
- **Canonical ID:** `wellbeing-nutrition-cro`
- **Category:** Growth Architecture / Product Management / CRO
- **Workspace Location:** `E:\01_WORK\Clients\growth_pm`
- **Role:** **SUPPORTING**
- **Evidence:** 19.4 MB comprehensive case study PDF, 50-slide executive strategy deck, interactive HTML prototype package, A/B test wireframes.
- **Case Study Status:** READY (Complete problem statement, teardown, test hypotheses, and UI prototype).
- **Live URL:** Standalone HTML prototypes in repository.

#### 4. AI Research Analyst (Global Market Intelligence)
- **Canonical ID:** `ai-research-analyst`
- **Category:** AI Systems / Full-Stack Intelligence Engine
- **Workspace Location:** `E:\01_WORK\Websites\AI R.ANALYST` & `E:\01_WORK\AI\Codex_Studio\Global Market Intelligence`
- **Role:** **SUPPORTING**
- **Evidence:** FastAPI backend with SSE streaming, React 19 frontend, Tavily search orchestration, 41 passing automated pytest test cases, 13 market research sector dossiers.
- **Case Study Status:** READY (Documented in `src/pages/work/ai-research-analyst.astro`).
- **Live URL:** Local production build.

#### 5. WhatsApp Real Estate Lead Qualifier & CRM Sync
- **Canonical ID:** `whatsapp-lead-qualifier`
- **Category:** AI Agents / Growth Operations & Workflow Automation
- **Workspace Location:** `E:\01_WORK\Research\testing`
- **Role:** **SUPPORTING**
- **Evidence:** Production n8n workflows (`whatsapp_pune_leads_workflow.json`), Anthropic Claude API prompt engineering, Google Sheets 7-tab CRM database schema, Twilio/Meta WhatsApp API integration, Slack webhook alerting, test execution checklist with 4 edge cases (Hot Lead, Cold Lead, Legal/RERA query, Abusive filter).
- **Case Study Status:** READY (Clean architecture, schema, security redaction, and prompt specifications).

#### 6. Instagram Model Context Protocol (MCP) Server
- **Canonical ID:** `instagram-mcp-server`
- **Category:** AI DevTools / LLM Protocol Integration
- **Workspace Location:** `E:\02_CONTENT\INSTAGRAM\mcp-server`
- **Role:** **SUPPORTING**
- **Evidence:** Production Node.js server implementing `@modelcontextprotocol/sdk` over StdioServerTransport, Meta Graph API v19.0 client, 11 agent tools (publishing photos/reels/carousels, reading profile, insights, comments, replies, deletion).
- **Case Study Status:** READY (Excellent proof of AI tool-use and protocol engineering).

#### 7. Aurelia — Luxury Real Estate Brokerage Website
- **Canonical ID:** `aurelia-real-estate`
- **Category:** Web / Architectural Design & Frontend Engineering
- **Workspace Location:** `E:\01_WORK\Websites\website`
- **Role:** **SUPPORTING**
- **Evidence:** Multi-page Astro 6 + Tailwind v4 application (`index.astro`, `about.astro`, `contact.astro`, `properties.astro`), 37KB `DESIGN.md`, Parallax scroll effects, dynamic counter logic, property data schemas, Vercel deployment link (`prj_u9yTZ78IwiTPFuZlp4nAzQ01ioqg`).
- **Case Study Status:** PARTIAL (Needs problem/client context write-up).
- **Live URL:** Vercel deployment ID `prj_u9yTZ78IwiTPFuZlp4nAzQ01ioqg`.

---

### Completed — Needs Polish
*Technically complete implementations that require minor presentation assets or URL verification before public launch.*

#### 8. FreeRuler / Screen Ruler (Deduplicated: `freeruler.com` & `NEWRULLER.IN`)
- **Canonical ID:** `freeruler`
- **Category:** Web / Interactive Utility
- **Workspace Location:** `E:\01_WORK\Websites\freeruler.com` / `E:\01_WORK\Websites\NEWRULLER.IN`
- **Role:** **SUPPORTING**
- **Evidence:** 466-line Astro SVG ruler app, PPI calibration algorithms, physical credit card reference overlay, 41KB `DESIGN.md`.
- **What is Missing:** Production domain verification (`freeruler.com` vs `newruler.in`), desktop/mobile screenshots.
- **Case Study Status:** PARTIAL.

#### 9. CleanPDF (Remove Watermark & In-Browser PDF Studio)
- **Canonical ID:** `cleanpdf`
- **Category:** Automation / WebAssembly Document Utility
- **Workspace Location:** `E:\01_WORK\Automation\remove watermark`
- **Role:** **SUPPORTING**
- **Evidence:** Astro codebase, WebAssembly PDF processing scripts, `cleanpdf-docs/` specs, UI components.
- **What is Missing:** Live production deployment link, final UI demonstration recording.
- **Case Study Status:** PARTIAL.

#### 10. YouTube Episode 03 Production & Shorts
- **Canonical ID:** `youtube-ep3-production`
- **Category:** Creator Media / Video Production & Editing
- **Workspace Location:** `E:\02_CONTENT\YouTube\youtube ep-3` & `E:\02_CONTENT\Reels`
- **Role:** **SUPPORTING**
- **Evidence:** Adobe Premiere Pro timeline files (`.prproj`), A-roll multi-day recording sessions, B-roll clips, audio stems, custom thumbnail design files (`th refer/myself`), SRT subtitles, exported master videos.
- **What is Missing:** Public YouTube video link or embedded reel format.
- **Case Study Status:** PARTIAL.

---

### Ongoing Work
*No current portfolio project is designated for the ongoing-work showcase.*

### Experiments & R&D
*Explorations, scripts, and internal prompt tools.*

#### 11. OpenMontage
- **Canonical ID:** `openmontage`
- **Category:** AI Video Automation / Programmatic Engine
- **Workspace Location:** `E:\01_WORK\Automation\Open Montage\OpenMontage`
- **Role:** **EXPERIMENTAL**
- **Evidence:** Python orchestrator, Remotion Composer integration, Ink Theater, YAML pipelines, 48KB `AGENT_GUIDE.md`, 44KB `README.md`.
- **Placement:** Studio Lab Log / Experimental section.

#### 12. Gemini Calculator (Mobile App)
- **Canonical ID:** `gemini-calculator`
- **Category:** Mobile Development / React Native & Expo
- **Workspace Location:** `E:\01_WORK\AI\vs_code_workspace\gemini-calculator`
- **Role:** **EXPERIMENTAL**
- **Evidence:** Expo SDK 56, React Native 0.85, TypeScript, Orbitron & Space Mono typography, AsyncStorage history state.
- **Placement:** Lab Log / Mobile experiment.

#### 13. Football UGC Brand Campaign Studio
- **Canonical ID:** `football-ugc-studio`
- **Category:** Creative AI / Prompt Engineering
- **Workspace Location:** `E:\01_WORK\AI\Codex_Studio\ai-ugc-brand-campaign-studio`
- **Role:** **EXPERIMENTAL / INTERNAL ASSET**
- **Evidence:** `football-ugc-reverse-engineering.md`, interactive `football-ugc-shotlist.html` generator.
- **Placement:** Internal asset vault.

---

### Incomplete Work
*Backlog items lacking final deliverables.*

#### 14. Headphones Commercial Reel
- **Canonical ID:** `headphones-commercial`
- **Category:** Video / Creative AI
- **Workspace Location:** `E:\02_CONTENT\Ads\Omni_Campaigns\PORTFOLIO\headphones`
- **Role:** **SUPPORTING (Once assembled)**
- **Evidence:** 7 scene video takes across kitchen, office, and stadium environments; 4 scene images.
- **What is Missing:** Final Premiere Pro timeline assembly, sound mix, master export.

---

## 3. Video Library

*All external video references (no raw video files stored in the repository).*

| Video Project | YouTube URL | Native Source Asset | Suggested Placement | Presentation Mode |
|---|---|---|---|---|
| **Adidas Samba Commercial** | `https://youtube.com/shorts/4SVc4FL4Mdk` | `public/assets/projects/ai-ad-production/` | Commercial Player (Tab 01) | Vertical Facade Player |
| **Kreo Tech Commercial** | `https://youtu.be/cPhpFQnsXKo` | `public/assets/projects/ai-ad-production/` | Commercial Player (Tab 02) | 16:9 Facade Player |
| **Men's Jewellery Reel** | `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS` | `Omni_Campaigns/PORTFOLIO/Mens Jwellery/` | Commercial Player (Tab 03) | Vertical Facade Player |
| **AI UGC for Cars** | `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF` | `Omni_Campaigns/video/AI UGC AD.mp4` | Commercial Player (Tab 04) | 16:9 Facade Player |
| **AI UGC Commercial Sequence** | `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk` | `Omni_Campaigns/PORTFOLIO/ai reel 2/` | Supporting Case Study Gallery | Vertical Facade Player |

---

## 4. Candidates for Future Portfolio

### Flagship Candidates (Core Dual-Pillar Positioning)
1. **RandomChat (`randomcaht.online`)** — Flagship Pillar 01 (Systems Engineering, Cloudflare Workers, Durable Objects, WebSockets).
2. **AI Ad Production Studio (5-Commercial Creative Suite)** — Flagship Pillar 02 (Creative Direction, AI Video Production, Multi-Brand Campaigns).

### Supporting Candidates (Breadth, Depth & Operational Competence)
1. **Wellbeing Nutrition CRO** — Proves commercial growth strategy, CRO, and product management rigor.
2. **AI Research Analyst** — Proves full-stack AI engineering, FastAPI, React 19, and rigorous testing.
3. **WhatsApp Real Estate Lead Qualifier** — Demonstrates practical AI agent automation, n8n workflows, CRM integration, and prompt engineering.
4. **Instagram MCP Server** — Highlights cutting-edge LLM protocol engineering (Model Context Protocol SDK).
5. **Aurelia Real Estate Brokerage Website** — Demonstrates refined, luxury editorial web design in Astro 6 + Tailwind v4.
6. **FreeRuler** — Clean, client-side interactive browser utility.
7. **CleanPDF** — In-browser document privacy tool leveraging WebAssembly.

### Experimental Candidates (Lab Log / Experiments)
1. **OpenMontage** — Programmatic video rendering pipeline (Python + Remotion).
2. **Gemini Calculator** — Cyberpunk mobile application in React Native / Expo.
3. **Football UGC Brand Studio** — Prompt reverse-engineering asset.

### Archive
1. `e:\01_WORK\AI\AI_Experiments\context-builder` — Early LLM context scripts.
2. `e:\01_WORK\Automation\python_scripts` — Scratch scripts and one-off tools.

---

## 5. Portfolio Evidence Gaps

| Project | Missing Material | Why It Matters | What Kanishk Needs To Provide |
|---|---|---|---|
| **FreeRuler** | Production domain verification & live URL | A utility tool must be click-to-test to feel real | Confirm if `freeruler.com` or `newruler.in` is live, or if we deploy to Vercel |
| **Aurelia Real Estate** | Client/concept framing & live URL | Context separates a client build from a random template | Confirm if this was a client build or concept, and verify the Vercel link |
| **YouTube Ep-03** | Public YouTube URL | Video work should have a clickable link rather than local paths | Provide public video link or unlisted showcase link if public |
| **CleanPDF** | Live URL & UI screenshot | Proves WebAssembly performance in the browser | Confirm deployment URL or allow us to stage on Vercel |
| **Headphones Commercial** | Final Premiere Pro cut | Raw takes cannot be showcased publicly | Export a 15-30s assembled master MP4 |
