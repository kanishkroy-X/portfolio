# Portfolio Curation Candidates

**Purpose:** Strategic curation and decision-preparation framework for the upcoming portfolio redesign.  
**Strict Constraint:** Planning & Decision Framework Only — Zero code or website modifications are performed until decisions are approved.  
**Source of Truth References:**
- [docs/portfolio-overview.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-overview.md)
- [docs/portfolio-work-index.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-work-index.md)
- [docs/portfolio-work-inventory.md](file:///e:/01_WORK/Websites/PORTFOLIO/docs/portfolio-work-inventory.md)
- [portfolio-work/video-links.md](file:///e:/01_WORK/Websites/PORTFOLIO/portfolio-work/video-links.md)

---

## 1. Current Portfolio (Baseline)

The current live portfolio (`https://portfolio-kohl-eta-20.vercel.app/`) showcases 4 items on the homepage:
1. **RandomChat** (Hero Flagship Card 01 — Systems Architecture)
2. **AI Ad Production Studio** (Hero Flagship Card 02 — 2-Tab Video Player: Adidas Samba + Kreo Tech)
3. **Selected Work Archive Grid:**
   - *Growth Strategy / PM* (Wellbeing Nutrition Case Study PDF)
   - *AI Research Analyst* (FastAPI + React 19 + Tavily research engine)

**Assessment:** The dual-pillar positioning (Technical Product Architect × Creative AI Director) is already strong, but the supporting archive can be elevated by integrating the new completed systems, automations, and commercial reels.

---

## 2. New Completed Work

The intake pass across `E:\01_WORK` and `E:\02_CONTENT` revealed 7 newly verified, completed projects:
1. **Men's Jewellery Luxury Commercial Reel:** Photorealistic macro luxury jewellery reel (YouTube: `https://youtu.be/h6nyN1gyFvI`).
2. **AI UGC for Cars Commercial:** High-speed automotive reflections and social-first UGC ad pacing (YouTube: `https://youtu.be/4OgE5mzghfI`).
3. **AI UGC Commercial Sequence:** Conversational, authentic human-product interaction reel for D2C brands (YouTube: `https://youtu.be/NaEyB2RAtQQ`).
4. **WhatsApp Real Estate Lead Qualifier & CRM Sync:** Full-stack n8n workflow with Claude API prompt engineering, Google Sheets 7-tab CRM, Twilio WhatsApp, Slack alerting, and automated lead scoring.
5. **Instagram Model Context Protocol (MCP) Server:** Node.js implementation of the official Anthropic Model Context Protocol (`@modelcontextprotocol/sdk`) interfacing with Meta Graph API v19.0.
6. **Aurelia — Luxury Real Estate Brokerage Website:** Complete multi-page Astro 6 + Tailwind v4 real estate website with bespoke parallax and motion design.
7. **FreeRuler / Screen Ruler:** Lightweight client-side SVG screen calibration tool with physical card overlay (`freeruler.com` / `newruler.in`).

---

## 4. Flagship Candidates

The portfolio should maintain its focused, high-signal narrative by centering on two powerhouse pillars:

### Flagship Pillar 01: Systems & Real-Time Engineering
- **Project:** **RandomChat (`randomcaht.online`)**
- **Why It's Flagship:** True distributed systems engineering. Runs at Cloudflare's global edge using Workers, Durable Objects for stateful matchmaking, and low-latency WebSockets with zero persistent storage overhead.
- **Execution:** Keep as the primary engineering flagship with interactive architecture diagrams and direct link to live app.

### Flagship Pillar 02: Creative Direction & AI Production Studio
- **Project:** **AI Ad Production Studio (Expanded Commercial Suite)**
- **Why It's Flagship:** Proves end-to-end commercial viability of Generative AI in advertising across multiple categories (footwear, consumer electronics, luxury jewellery, automotive).
- **Execution:** Expand the current 2-video player into a comprehensive 4-to-5-campaign studio showcase.

---

## 5. Supporting Candidates

Supporting work gives depth and demonstrates commercial breadth across software, growth, and automation:

| Project | Domain | Strategic Value |
|---|---|---|
| **Wellbeing Nutrition CRO** | Growth & Product | Proves commercial ROI, funnel teardowns, and user testing methodology. |
| **AI Research Analyst** | AI Full-Stack | Proves production backend engineering (FastAPI, SSE streaming, 41 unit tests). |
| **WhatsApp Lead Qualifier** | AI Automation & Agents | Demonstrates practical AI agent orchestration, n8n workflows, and CRM synchronization. |
| **Instagram MCP Server** | Developer Tooling / Protocol | Highlights early mastery of the Model Context Protocol (MCP), proving deep AI integration capability. |
| **Aurelia Luxury Real Estate** | Frontend & Web Design | Proves ability to ship elegant, high-converting commercial web properties in Astro. |
| **FreeRuler** | Interactive Utility | Provides an instant, hands-on interactive tool right in the browser. |

---

## 6. Experimental Work (Lab Log / R&D)

For projects that showcase curiosity, scripting, or rapid prototyping without requiring full case studies:

- **OpenMontage:** Programmatic video composition engine using Python, Remotion, and YAML pipelines.
- **Gemini Calculator:** Cyberpunk-styled React Native mobile app with Orbitron fonts and AsyncStorage state.
- **CleanPDF:** In-browser WebAssembly document utility for offline watermark removal.
- **Football UGC Studio:** Prompt engineering framework for reverse-engineering sports video campaigns.

---

## 7. Commercial / AI Production Library

The commercial video vault has grown from 2 campaigns to 5 distinct productions.

### The 4 Architecture Options for Commercial Work:

#### Option A: One Unified "AI Ad Production Studio" Flagship (Recommended)
- **Concept:** Keep one primary flagship card on the homepage, but upgrade the video selector from 2 tabs to a responsive 4-or-5-item switchable carousel/tab bar.
- **Campaigns:**
  1. *Adidas Samba* (Footwear / 9:16 Vertical)
  2. *Kreo Tech* (Consumer Electronics / 16:9 Cinema)
  3. *Men's Jewellery* (Luxury / Macro Metal 9:16)
  4. *AI UGC Cars* (Automotive / 16:9 Performance)
  5. *AI UGC Reel* (D2C / Conversational 9:16)
- **Pros:** Keeps the homepage uncluttered, showcases versatility inside a single powerful component, and maintains focus on the 13-stage proprietary framework.

#### Option B: Individual Standalone Commercial Projects
- **Concept:** Break out each commercial campaign into its own separate project card on the homepage or `/work` page.
- **Cons:** Dilutes the impact of other engineering projects and makes the homepage feel like a commercial video production agency rather than a Product Architect portfolio.

#### Option C: Dedicated Showreel / Video Commercial Hub Page
- **Concept:** Create a dedicated `/work/commercials` route featuring an expansive video grid of all commercial assets, behind-the-scenes character sheets, and prompt breakdowns.
- **Pros:** Gives video clients a direct destination while keeping the homepage clean.

#### Option D: Supporting Work Carousel
- **Concept:** Keep Adidas & Kreo Tech in the hero player, and place the 3 new campaigns into a secondary "Commercial Lab" grid further down the page.

---

## 8. Video Library

*All external YouTube references (no large MP4 files stored in Git repository):*

| Video Project | YouTube Link | Native Disk Source | Recommended Placement |
|---|---|---|---|
| **Adidas Samba Commercial** | `https://youtube.com/shorts/4SVc4FL4Mdk` | `public/assets/projects/ai-ad-production/` | Commercial Player (Tab 01) |
| **Kreo Tech Commercial** | `https://youtu.be/cPhpFQnsXKo` | `public/assets/projects/ai-ad-production/` | Commercial Player (Tab 02) |
| **Men's Jewellery Reel** | `https://youtu.be/h6nyN1gyFvI?si=_eOURpB6pQwaYQtS` | `Omni_Campaigns/PORTFOLIO/Mens Jwellery/` | Commercial Player (Tab 03) |
| **AI UGC for Cars** | `https://youtu.be/4OgE5mzghfI?si=HX5mqmFJcHLzqLpF` | `Omni_Campaigns/video/AI UGC AD.mp4` | Commercial Player (Tab 04) |
| **AI UGC Commercial Sequence** | `https://youtu.be/NaEyB2RAtQQ?si=Au6FXsmhcpYNQDNk` | `Omni_Campaigns/PORTFOLIO/ai reel 2/` | Supporting Gallery / Lab |

---

## 9. Evidence Gaps

| Project | Missing Material | Why It Matters | Action Needed From Kanishk |
|---|---|---|---|
| **FreeRuler** | Production domain confirmation | An online utility needs a live test link | Confirm active domain (`freeruler.com` vs `newruler.in`) or approve Vercel staging |
| **Aurelia Real Estate** | Project framing (client vs concept) | Clear attribution builds trust | Confirm if this was client work or concept exploration |
| **YouTube Ep-03** | Public YouTube URL | Video work should have a direct link | Provide public/unlisted YouTube URL if ready |
| **Headphones Commercial** | Assembled video master | Raw takes cannot be published | Provide finished MP4 or keep in backlog |

---

## 10. Questions Requiring Kanishk's Decision

1. **Commercial Player Option:** Which commercial presentation structure do you prefer?
   - **(Recommended) Option A:** Expand the existing hero AI Ad Studio player to include tabs for Men's Jewellery and Automotive UGC.
   - **Option C:** Create a dedicated `/work/commercials` subpage for an extensive video reel.
2. **New Supporting Additions:** Would you like to feature the **WhatsApp Lead Qualifier (AI Agents)** and **Instagram MCP Server (DevTools)** in the secondary Selected Work grid alongside Wellbeing Nutrition and AI Research Analyst?
