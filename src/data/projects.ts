export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  year: string;
  category: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  problem: string;
  approach: string;
  decisions: string[];
  process: string[];
  outcome: string;
  learnings: string[];
  heroMedia: string;
  supportingMedia?: string[];
  video?: string;
  externalLinks?: { label: string; url: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "randomchat",
    number: "01",
    title: "RandomChat",
    slug: "randomchat",
    year: "2026",
    category: "PRODUCT / REAL-TIME SYSTEM",
    shortDescription: "Real-time anonymous communication platform powered by Cloudflare Workers and Durable Objects.",
    description: "An anonymous-by-default, instant text-chat web platform built without traditional user accounts or friction. Designed for high-concurrency real-time matchmaking, low latency socket sessions, and progressive mutual consent voice unlock.",
    role: "Full-Stack Engineer & Product Designer",
    technologies: ["TypeScript", "Astro", "Cloudflare Workers", "Durable Objects", "WebSockets", "WebRTC"],
    problem: "Most modern chat networks force friction: permanent account creation, phone number verification, and heavy tracking. Conversely, existing anonymous platforms suffer from rampant abuse, bloated UI, and high server overhead.",
    approach: "Designed a zero-database architecture running on Cloudflare's global edge network. Used in-memory state coordination via Cloudflare Durable Objects to manage matching queues and socket rooms with low latency.",
    decisions: [
      "No account creation: Temporary ephemeral sessions ensure user anonymity by design.",
      "Cloudflare Durable Objects over Redis: In-memory room isolation guarantees zero persistent server state and instant disconnect cleanup.",
      "Strict separation of browse ('People') and stranger match ('Random Chat') to prevent unwanted random intrusions.",
      "Mutual consent voice request: Voice notes and live audio are locked behind reciprocal permission gates."
    ],
    process: [
      "PRD & User Flow Specification",
      "Edge-First Architecture Design",
      "Cloudflare Worker + Durable Object Implementation",
      "Full-Duplex WebSocket Protocol Tuning",
      "Progressive Voice Request Negotiation",
      "Performance & Disconnect Stress Testing"
    ],
    outcome: "A fully working, responsive anonymous chat platform with real-time socket transport, instant skip/re-match capabilities, and zero user data persistence.",
    learnings: [
      "In-memory state on the edge drastically simplifies anonymous session teardown compared to relational databases.",
      "Clear visual affordances around camera/microphone permissions build user trust in anonymous environments."
    ],
    heroMedia: "/assets/projects/randomchat/randomchat-ui.png",
    supportingMedia: [
      "/assets/projects/randomchat/randomchat-architecture.svg",
      "/assets/projects/randomchat/randomchat-matching-flow.svg",
      "/assets/projects/randomchat/screens/01_dark_people_online_filters.png",
      "/assets/projects/randomchat/screens/02_dark_active_chat.png",
      "/assets/projects/randomchat/screens/04_dark_feature_unlock.png"
    ],
    externalLinks: [
      { label: "Live Product", url: "https://randomcaht.online" },
      { label: "GitHub Repository", url: "https://github.com/kanishkroy-X/onlinechat" }
    ],
    featured: true
  },
  {
    id: "ai-ad-production",
    number: "02",
    title: "AI Ad Production Studio",
    slug: "ai-ad-production",
    year: "2026",
    category: "CREATIVE DIRECTION / AI PRODUCTION",
    shortDescription: "A 13-stage commercial production framework turning generative models into broadcast-grade video campaigns.",
    description: "A disciplined creative engineering system designed to eliminate typical AI video defects (temporal flicker, anatomical warping, uncontrolled hallucination) and deliver commercial-grade brand films for Adidas Samba and Kreo Tech.",
    role: "Creative Director, Prompt Architect & Post-Production Editor",
    technologies: ["Midjourney v6", "Runway Gen-3", "Kling AI", "Premiere Pro", "CapCut", "Sound Design", "LUT Color Grading"],
    problem: "Out-of-the-box AI video generators produce visual novelty but fail at commercial narrative discipline. Without rigorous prompt architecture, shots suffer from style drift, inconsistent lighting, and impossible physical movements.",
    approach: "Formulated an end-to-end 13-stage production pipeline: from strategic brief and camera-specific 2K storyboard framing to seed-anchored prompt architecture, multi-take generative curation, and frame-accurate timeline editing in Premiere Pro with bespoke sound design.",
    decisions: [
      "Storyboard first: Strict 2K grid framing locked camera focal lengths (e.g. 50mm macro, 24mm wide) prior to prompt generation.",
      "Prompt token architecture: Decoupled camera motion tokens from subject texture tokens to prevent generative distortion.",
      "Severe curation gate: Kept only the top 5% of generated takes; discarded anything with anatomical or motion artifacts.",
      "Traditional post-production: Mixed AI video plates with authentic Foley sound, typography locks, and film grain emulation in Premiere Pro."
    ],
    process: [
      "Client Brief & Brand DNA Deconstruction",
      "Visual Codes & Competitor Analysis",
      "Core Narrative Angle & Pacing Script",
      "2K Storyboard Sequence & Camera Blocking",
      "Prompt Architecture & Model Benchmarking",
      "Multi-Seed Generative Synthesis",
      "Curation & Artifact QA Gate",
      "Premiere Pro Assembly, Foley Mix & Master Export"
    ],
    outcome: "Two complete commercial sequences: an Adidas Samba 9:16 high-energy commercial with photorealistic tumbled leather retention and dynamic sound design, alongside the Kreo Tech 16:9 narrative commercial.",
    learnings: [
      "AI video models are not autonomous directors; they are unpredictable camera operators requiring precise prompt constraints and heavy human editorial curation.",
      "Sound design accounts for 60% of perceived video realism; commercial-grade foley elevates generative footage from a demo to a finished spot."
    ],
    heroMedia: "/assets/projects/ai-ad-production/adidas-samba-poster.jpg",
    supportingMedia: [
      "/assets/projects/ai-ad-production/kreo-tech-poster.jpg",
      "/assets/projects/ai-ad-production/pipeline-visual.svg",
      "/assets/projects/ai-ad-production/storyboard-samba.jpeg"
    ],
    video: "/assets/projects/ai-ad-production/adidas-samba-commercial.mp4",
    featured: true
  },
  {
    id: "ai-research-analyst",
    number: "03",
    title: "AI Research Analyst",
    slug: "ai-research-analyst",
    year: "2026",
    category: "AI SYSTEMS / MARKET INTELLIGENCE",
    shortDescription: "Decision-grade full-stack research engine with automated web search, evidence grounding, and a deterministic verifier gate.",
    description: "An intelligence system that accepts complex business or product questions, executes targeted live web research via Tavily API, grounds claims in verbatim excerpts, and strips hallucinated citations through an automated Verifier Gate.",
    role: "Full-Stack AI Engineer",
    technologies: ["FastAPI", "Python 3.11", "React 19", "Tavily API", "SQLite", "OpenRouter", "Pydantic v2"],
    problem: "Standard LLMs generate convincing yet frequently hallucinated business research, fabricating market sizes, quoting non-existent competitor features, and presenting unverified assumptions as facts.",
    approach: "Engineered a dual-phase architecture: Phase 1 provides rapid hypothesis generation, while Phase 2 executes multi-query search with URL deduplication, excerpt extraction, and a deterministic verifier gate that enforces strict claim taxonomy (Evidence, Inference, Analysis, Assumption).",
    decisions: [
      "Enforce source grounding: Claims without verbatim retrieved text are downgraded to analysis or assumption.",
      "Deterministic verifier gate: Automatically strips phantom citation IDs and checks link accessibility.",
      "Evidence Inspector Modal: Users can click any citation number to view the verbatim source excerpt, domain credibility rating, and canonical link."
    ],
    process: [
      "Research Taxonomy & Claim Classification Design",
      "FastAPI Search & Extraction Pipeline Setup",
      "Deterministic Verifier Engine Implementation",
      "React 19 Frontend with Source Drawer & Evidence Modal",
      "Persistent SQLite Research Runs Database"
    ],
    outcome: "Working decision-grade analyst application capable of producing structured market intelligence reports backed by automated verifier gating and grounded live citations.",
    learnings: [
      "Separating verifiable fact from strategic inference creates dramatically higher trust for executive decision-makers."
    ],
    heroMedia: "/assets/projects/ai-research-analyst/architecture.svg",
    supportingMedia: [
      "/assets/projects/ai-research-analyst/architecture.svg"
    ],
    externalLinks: [
      { label: "GitHub Codebase", url: "https://github.com/kanishkroy-X" }
    ],
    featured: false
  },
  {
    id: "wellbeing-nutrition",
    number: "04",
    title: "Wellbeing Nutrition",
    slug: "wellbeing-nutrition",
    year: "2025",
    category: "CRO RESEARCH & PRODUCT STRATEGY",
    shortDescription: "Comprehensive conversion rate optimization and subscription UX architecture for a leading D2C wellness brand.",
    description: "An audit-backed CRO and UX redesign project targeting the high-friction mobile subscription funnel for Wellbeing Nutrition, diagnosing checkout drop-offs and redesigning product detail pages for higher average order value.",
    role: "CRO Strategist & UX Designer",
    technologies: ["Conversion Audit", "Behavior Analytics", "Mobile UX", "Figma", "Subscription Architecture"],
    problem: "Mobile visitors dropped off rapidly on product pages due to overwhelming clinical ingredient tables, confusing multi-pack options, and hidden recurring subscription terms.",
    approach: "Executed quantitative funnel analysis and session recording audits. Restructured the information hierarchy into an intuitive 5-section mobile architecture: Value Proposition, Benefit Matrix, Clinical Validation, Interactive Subscription Selector, and Sticky 1-Tap Cart CTA.",
    decisions: [
      "Transformed dense ingredient text into clean visual benefit cards with third-party testing badges.",
      "Re-engineered subscription tier selector to clearly display per-day cost comparison rather than lump-sum pricing.",
      "Introduced sticky mobile action bar with real-time stock indicator and money-back guarantee seal."
    ],
    process: [
      "Heatmap & Drop-off Funnel Analysis",
      "Customer Friction Point Diagnostic",
      "Information Architecture Restructuring",
      "High-Fidelity Component Prototyping",
      "A/B Testing Hypothesis Roadmap"
    ],
    outcome: "Validated UX design blueprint and CRO experiment roadmap directly addressing the 3 primary friction points in the mobile checkout flow.",
    learnings: [
      "In D2C wellness, upfront clinical transparency reduces anxiety far more effectively than aggressive discount banners."
    ],
    heroMedia: "/assets/projects/wellbeing-nutrition/funnel-preview.svg",
    supportingMedia: [
      "/assets/projects/wellbeing-nutrition/funnel-preview.svg"
    ],
    featured: false
  },
  {
    id: "cleanpdf",
    number: "05",
    title: "CleanPDF",
    slug: "cleanpdf",
    year: "2025",
    category: "CLIENT-SIDE UTILITY / PRIVACY",
    shortDescription: "Zero-server, privacy-first PDF utility executing compression, merging, and redaction 100% in browser memory.",
    description: "A fast, privacy-respecting client-side document processing tool. Unlike cloud PDF tools that upload sensitive files to remote servers, CleanPDF processes all documents directly inside browser RAM using WebAssembly and Web Workers.",
    role: "Frontend Engineer & UI Designer",
    technologies: ["WebAssembly", "PDF-lib", "Web Workers", "TypeScript", "Vite", "Canvas API"],
    problem: "Millions of individuals and legal professionals upload highly confidential documents (tax records, contracts, medical PDFs) to cloud conversion tools daily, exposing themselves to data scraping and security breaches.",
    approach: "Built a sandboxed client-side processing engine using WebAssembly and PDF-lib. Document manipulation runs in background Web Workers, leaving main thread UI responsive and guaranteeing that zero bytes leave the user's computer.",
    decisions: [
      "Zero network transport: Completely offline-capable with local blob download generation.",
      "Automatic memory hygiene: Explicitly clears ArrayBuffers and revokes Object URLs immediately upon export.",
      "Minimalist drag-and-drop workspace with real-time file size reduction metrics."
    ],
    process: [
      "In-Browser WASM Architecture Feasibility",
      "Web Worker Off-Thread Processing Engine",
      "PDF Manipulation Core (Compression, Merge, Split, Redact)",
      "Minimal Editorial Interface & Drag Zone",
      "Cross-Browser File Stream Optimization"
    ],
    outcome: "An instant, zero-server document processing utility that executes PDF operations locally in browser memory with zero network data transit.",
    learnings: [
      "Modern WebAssembly provides near-native performance for document manipulation, making cloud servers unnecessary for many privacy-critical utility tasks."
    ],
    heroMedia: "/assets/projects/cleanpdf/architecture.svg",
    supportingMedia: [
      "/assets/projects/cleanpdf/architecture.svg"
    ],
    externalLinks: [
      { label: "GitHub Codebase", url: "https://github.com/kanishkroy-X" }
    ],
    featured: false
  }
];
