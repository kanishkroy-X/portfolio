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
  videoId?: string;
  isVertical?: boolean;
  externalLinks?: { label: string; url: string }[];
  featured: boolean;
  isPublic: boolean;
  section?: 'ai-content' | 'product';
}

export const aiContentProjects: Project[] = [
  {
    id: "adidas-samba",
    number: "01",
    title: "Adidas Samba",
    slug: "adidas-samba",
    year: "2026",
    category: "AI COMMERCIAL",
    shortDescription: "High-energy vertical commercial sequence with macro tumbled leather texture retention and dynamic Foley sound design.",
    description: "A flagship AI commercial sequence created for the Adidas Samba. Solved photorealistic material retention, dynamic footwear motion dynamics, and micro-texture grain on tumbled leather through decoupled prompt token architecture and multi-take generative curation.",
    role: "Creative Director, Prompt Architect & Editor",
    technologies: ["Midjourney v6", "Runway Gen-3", "Kling AI", "Adobe Premiere Pro", "Foley Sound Design"],
    problem: "Generative footwear commercials regularly fail at product consistency: shoe soles warp during motion, brand stripes blur, and synthetic leather looks like flat plastic rather than authentic material.",
    approach: "Built 2K storyboard framing locking focal lengths and camera vectors prior to generative iterations. Decoupled motion tokens from texture tokens to preserve macro leather grain, combined with a 5% curation pass and timeline Foley sync.",
    decisions: [
      "Macro leather token anchoring: Separated reflection passes from geometry prompts to retain authentic material grain.",
      "2K Storyboard Blocking: Locked focal lengths and camera velocity before generative passes.",
      "High-energy pacing: Cut the sequence to rhythmic sneaker culture beats with tactile impact sound design."
    ],
    process: [
      "Brand DNA Deconstruction & Visual Codes",
      "2K Storyboard Sequence & Camera Blocking",
      "Prompt Token Decoupling & Benchmarking",
      "Multi-Seed Generative Synthesis Gate",
      "Premiere Pro Assembly, Color Grading & Master Foley Mix"
    ],
    outcome: "A broadcast-grade 9:16 vertical commercial with photorealistic tumbled leather retention, authentic camera motion, and zero anatomical warping.",
    learnings: [
      "Camera motion tokens must be decoupled from material tokens to prevent synthetic blur.",
      "Sound design accounts for the majority of perceived tactile weight in AI commercial video."
    ],
    heroMedia: "/assets/projects/ai-ad-production/adidas-samba-poster.webp",
    supportingMedia: [
      "/assets/projects/ai-ad-production/storyboard-samba.jpeg",
      "/assets/projects/ai-ad-production/pipeline-visual.svg"
    ],
    video: "https://youtube.com/shorts/4SVc4FL4Mdk",
    videoId: "4SVc4FL4Mdk",
    isVertical: true,
    externalLinks: [
      { label: "Watch Commercial Master", url: "https://youtube.com/shorts/4SVc4FL4Mdk" }
    ],
    featured: true,
    isPublic: true,
    section: "ai-content"
  },
  {
    id: "kreo-tech",
    number: "02",
    title: "Kreo Tech",
    slug: "kreo-tech",
    year: "2026",
    category: "AI COMMERCIAL",
    shortDescription: "16:9 widescreen narrative commercial exploring mechanical hardware cinematography, matte black textures, and anodized aluminum reflections.",
    description: "An independent 16:9 widescreen narrative commercial produced for Kreo Tech gaming hardware. Engineered camera lighting stability across macro mechanical angles, matte black surfaces, and subtle anodized aluminum specular glints.",
    role: "Creative Director, Prompt Architect & Editor",
    technologies: ["Midjourney v6", "Runway Gen-3", "Adobe Premiere Pro", "Foley Audio Mix", "Color Grading"],
    problem: "Hardware and tech accessories are prone to generative hallucination: ports disappear, button seams melt, and matte finishes turn glossy or plastic-like under artificial studio lighting.",
    approach: "Utilized strict macro mechanical lighting tokens and multi-angle key visual constraints to ensure chassis seams and metallic textures stayed razor sharp across wide and macro camera passes.",
    decisions: [
      "Chassis seam integrity: Weighted negative prompts against edge melting and port hallucination.",
      "Anodized metal reflection control: Isolated specular highlights from surface diffusion tokens.",
      "Cinematic low-key lighting: Emphasized contrast and sharp rim lights for tech sophistication."
    ],
    process: [
      "Hardware Aesthetic & Industrial Design Framing",
      "Macro Mechanical Storyboarding",
      "Optical Flow Prompt Benchmarking",
      "Multi-Take Curation Gate",
      "Premiere Pro Master Conforming & Sound Design"
    ],
    outcome: "A polished 16:9 cinematic commercial master showcasing high-fidelity hardware textures and broadcast-grade lighting consistency.",
    learnings: [
      "Low-key studio rim lighting masks AI diffusion edges better than high-key flat studio lighting."
    ],
    heroMedia: "/assets/projects/ai-ad-production/kreo-tech-poster.webp",
    supportingMedia: [
      "/assets/projects/ai-ad-production/pipeline-visual.svg"
    ],
    video: "https://youtu.be/cPhpFQnsXKo",
    videoId: "cPhpFQnsXKo",
    isVertical: false,
    externalLinks: [
      { label: "Watch Commercial Master", url: "https://youtu.be/cPhpFQnsXKo" }
    ],
    featured: true,
    isPublic: true,
    section: "ai-content"
  },
  {
    id: "mens-jewellery",
    number: "03",
    title: "Men's Jewellery",
    slug: "mens-jewellery",
    year: "2026",
    category: "LUXURY AI COMMERCIAL",
    shortDescription: "High-end luxury commercial reel showcasing photorealistic macro metal physics, chain link reflections, and dark studio cinematography.",
    description: "A finished cinematic commercial reel for luxury men's jewellery. Engineered prompt token anchors specifically targeting macro light bounces, specular highlights on polished gold and steel, and physically realistic weight in chain movements without generative plastic deformation.",
    role: "Creative Director, Prompt Architect & Post-Production Editor",
    technologies: ["Midjourney v6", "Kling AI", "Runway Gen-3", "Adobe Premiere Pro", "Macro Lighting"],
    problem: "Reflective metallic surfaces, intricate chain links, and luxury lighting are among the most difficult generative AI failure points, typically resulting in plastic texture deformation, temporal melting, and unnatural motion.",
    approach: "Formulated a luxury-grade prompt architecture locking specular highlight reflection passes, micro-facet chain physics, and dark studio rim-lighting. Produced comprehensive 5-angle character and wardrobe consistency sheets before running selective multi-seed synthesis.",
    decisions: [
      "Macro metal reflection anchoring: Isolated specular glare tokens from geometry tokens to prevent link warping.",
      "Character sheet consistency: Generated 5 multi-angle character references to maintain identical model facial structure and styling across setups.",
      "Dark studio contrast grading: Utilized high-contrast low-key cinematography with rim highlights to accentuate polished metals.",
      "Tactile sound design: Combined crisp metallic clinks, deep sub-bass cinematic booms, and rhythmic pacing."
    ],
    process: [
      "Brand Aesthetic & Luxury Jewelry Visual Codes",
      "5-Angle Character & Wardrobe Consistency Sheets",
      "Macro Specular Highlight Prompt Engineering",
      "Multi-Take Kling AI & Runway Synthesis",
      "Artifact Curation Gate (< 5% retention)",
      "Premiere Pro Assembly & Foley Mix"
    ],
    outcome: "A complete luxury commercial reel demonstrating photorealistic metallic reflections, tactile jewelry weight, and consistent character casting.",
    learnings: [
      "Specular highlights on curved metal surfaces require explicit negative prompt weighting against matte plastic diffusion.",
      "High-resolution multi-angle character sheets eliminate facial drift across distinct camera setups."
    ],
    heroMedia: "/assets/projects/mens-jewellery/hero-poster.webp",
    supportingMedia: [
      "/assets/projects/mens-jewellery/character-1.webp",
      "/assets/projects/mens-jewellery/character-2.webp",
      "/assets/projects/mens-jewellery/character-3.webp",
      "/assets/projects/mens-jewellery/character-4.webp",
      "/assets/projects/mens-jewellery/character-5.webp",
      "/assets/projects/mens-jewellery/prop-macro.webp"
    ],
    video: "https://www.youtube.com/watch?v=h6nyN1gyFvI",
    videoId: "h6nyN1gyFvI",
    isVertical: false,
    externalLinks: [
      { label: "Watch Commercial Master", url: "https://www.youtube.com/watch?v=h6nyN1gyFvI" }
    ],
    featured: true,
    isPublic: true,
    section: "ai-content"
  },
  {
    id: "ai-ugc-reel",
    number: "04",
    title: "AI UGC",
    slug: "ai-ugc-reel",
    year: "2026",
    category: "COMMERCIAL SEQUENCE",
    shortDescription: "Social-native creator UGC sequence combining synthetic human talent with realistic smartphone camera physics and authentic conversational pacing.",
    description: "A social-native creator UGC sequence combining synthetic human talent with realistic smartphone camera micro-jitter, authentic conversational pacing, and convincing domestic ambient lighting for high-conversion paid social advertising.",
    role: "Creative Director, Prompt Engineer & Post-Production Editor",
    technologies: ["Kling AI", "Midjourney v6", "Adobe Premiere Pro", "CapCut", "Foley Mix"],
    problem: "D2C brands spend significant budgets on creator gifting, influencer coordination, and reshoots for paid social ad variations. Generative AI alternatives often look overtly synthetic, with mechanical camera moves, sterile lighting, and uncanny facial expressions.",
    approach: "Synthesized naturalistic creator footage by introducing simulated smartphone camera imperfections (micro-handheld jitter, natural focal breathing, room ambience) and rigorous 4-view character reference modeling.",
    decisions: [
      "Handheld camera physics: Engineered prompt tokens to introduce natural organic camera drift rather than smooth robotic dollies.",
      "4-view character consistency: Created dedicated character reference sheets to ensure consistent hair, skin texture, and wardrobe across shots.",
      "Mobile-first framing: Built directly for social feeds with rapid 3-second hook mechanics.",
      "Authentic environmental audio: Layered domestic room tone and tactile Foley to reinforce perceived realism."
    ],
    process: [
      "Social Ad Hook Strategy & Scripting",
      "4-View Character Modeling & Wardrobe Sheets",
      "Smartphone Camera Physics Prompt Formulation",
      "Multi-Take Syntheses & Artifact Gate",
      "Mobile Cut Assembly & Audio Sweetening"
    ],
    outcome: "A high-retention 16:9 social-first UGC ad sequence proving cost-effective synthetic creator content without uncanny valley defects.",
    learnings: [
      "Subtle camera shake and realistic domestic room lighting do more to mask synthetic origin than raw resolution alone."
    ],
    heroMedia: "/assets/projects/ai-ugc-reel/hero-poster.webp",
    supportingMedia: [
      "/assets/projects/ai-ugc-reel/character-1.webp",
      "/assets/projects/ai-ugc-reel/character-2.webp",
      "/assets/projects/ai-ugc-reel/character-3.webp",
      "/assets/projects/ai-ugc-reel/character-4.webp",
      "/assets/projects/ai-ugc-reel/reference-card.webp"
    ],
    video: "https://www.youtube.com/watch?v=4OgE5mzghfI",
    videoId: "4OgE5mzghfI",
    isVertical: false,
    externalLinks: [
      { label: "Watch Commercial Sequence", url: "https://www.youtube.com/watch?v=4OgE5mzghfI" }
    ],
    featured: true,
    isPublic: true,
    section: "ai-content"
  },
  {
    id: "ai-ugc-cars",
    number: "05",
    title: "AI UGC for Cars",
    slug: "ai-ugc-cars",
    year: "2026",
    category: "AUTOMOTIVE AI UGC",
    shortDescription: "High-converting, social-native automotive commercial sequence showcasing vehicle paint reflections, outdoor environment lighting, and high-speed motion.",
    description: "A social-first automotive commercial spot tailored for paid social advertising. Solved automotive body geometry retention, realistic sun reflection passes across curved vehicle panels, and convincing highway and city speed dynamics without wheel melting.",
    role: "Creative Director, Automotive Prompt Specialist & Editor",
    technologies: ["Kling AI", "Runway Gen-3", "Adobe Premiere Pro", "Paid Social Pacing", "Foley Sound Design"],
    problem: "Automotive commercial production requires closed track rentals, precision camera rigs, and high insurance budgets. Conversely, generative automotive video frequently fails with warped wheels, melting grilles, and unnatural vehicle physics.",
    approach: "Designed automotive body geometry prompt anchors and optical velocity paths. Curated multi-seed generations to maintain wheel spoke fidelity and outdoor sun reflection passes across car panels.",
    decisions: [
      "Body geometry retention: Locked curved panel reflections against environmental horizon lines.",
      "High-speed wheel physics: Constrained rotational blur to eliminate AI spoke melting.",
      "Performance pacing: Designed high-converting hook-to-payoff cuts with engine Foley sweetening."
    ],
    process: [
      "Automotive Visual Codes & Ad Hook Architecture",
      "Curved Surface Reflection Prompt Engineering",
      "Multi-Model Velocity & Physics Benchmarking",
      "Curation Gate & Timeline Color Conform",
      "Engine Sound Design & Master Export"
    ],
    outcome: "An energetic automotive commercial spot proving realistic vehicle physics, high-speed camera tracking, and sun reflection passes.",
    learnings: [
      "Curved car panels require directional horizon light tokens to maintain depth and surface tension."
    ],
    heroMedia: "/assets/projects/ai-ugc-cars/hero-poster.webp",
    supportingMedia: [
      "/assets/projects/ai-ugc-cars/car-frame-1.webp",
      "/assets/projects/ai-ugc-cars/car-frame-2.webp",
      "/assets/projects/ai-ugc-cars/car-frame-3.webp"
    ],
    video: "https://youtu.be/4OgE5mzghfI",
    videoId: "4OgE5mzghfI",
    isVertical: false,
    externalLinks: [
      { label: "Watch Automotive Spot", url: "https://youtu.be/4OgE5mzghfI" }
    ],
    featured: true,
    isPublic: true,
    section: "ai-content"
  }
];

export const productProjects: Project[] = [
  {
    id: "randomchat",
    number: "01",
    title: "RandomChat",
    slug: "randomchat",
    year: "2026",
    category: "PRODUCT / AI SYSTEMS",
    shortDescription: "Real-time anonymous communication platform powered by Cloudflare Workers, Durable Objects, and WebSockets.",
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
    featured: true,
    isPublic: true,
    section: "product"
  }
];

export const publicProjects: Project[] = [
  ...aiContentProjects,
  ...productProjects
];

// Unlisted/deprecated projects kept for source and build compatibility without public exposure
export const unlistedProjects: Project[] = [
  {
    id: "ai-ad-production",
    number: "00",
    title: "AI Ad Production Studio",
    slug: "ai-ad-production",
    year: "2026",
    category: "CREATIVE DIRECTION / AI PRODUCTION",
    shortDescription: "A 13-stage commercial production framework turning generative models into broadcast-grade video campaigns.",
    description: "A disciplined creative engineering system designed to eliminate typical AI video defects and deliver commercial-grade brand films.",
    role: "Creative Director, Prompt Architect & Post-Production Editor",
    technologies: ["Midjourney v6", "Runway Gen-3", "Kling AI", "Premiere Pro"],
    problem: "AI video generators produce visual novelty but fail at commercial narrative discipline.",
    approach: "Formulated an end-to-end 13-stage production pipeline.",
    decisions: ["Storyboard first", "Prompt token architecture", "Severe curation gate"],
    process: ["Brief", "Storyboard", "Prompt Architecture", "Multi-Seed Synthesis", "Assembly"],
    outcome: "Commercial sequences for Adidas Samba and Kreo Tech.",
    learnings: ["AI video models require precise prompt constraints."],
    heroMedia: "/assets/projects/ai-ad-production/adidas-samba-poster.jpg",
    featured: false,
    isPublic: false
  },
  {
    id: "ai-research-analyst",
    number: "06",
    title: "AI Research Analyst",
    slug: "ai-research-analyst",
    year: "2026",
    category: "AI SYSTEMS / MARKET INTELLIGENCE",
    shortDescription: "Decision-grade full-stack research engine with automated web search, evidence grounding, and a deterministic verifier gate.",
    description: "An intelligence system that accepts complex business questions, executes targeted live web research via Tavily API, and grounds claims.",
    role: "Full-Stack AI Engineer",
    technologies: ["FastAPI", "Python 3.11", "React 19", "Tavily API", "SQLite"],
    problem: "Standard LLMs generate convincing yet frequently hallucinated business research.",
    approach: "Engineered a dual-phase architecture with a deterministic verifier gate.",
    decisions: ["Enforce source grounding", "Deterministic verifier gate"],
    process: ["Taxonomy Design", "Search Pipeline", "Verifier Engine", "React Frontend"],
    outcome: "Working decision-grade analyst application.",
    learnings: ["Separating fact from strategic inference creates higher executive trust."],
    heroMedia: "/assets/projects/ai-research-analyst/architecture.svg",
    featured: false,
    isPublic: false
  },
  {
    id: "wellbeing-nutrition",
    number: "07",
    title: "Wellbeing Nutrition",
    slug: "wellbeing-nutrition",
    year: "2025",
    category: "CRO RESEARCH & PRODUCT STRATEGY",
    shortDescription: "Comprehensive conversion rate optimization and subscription UX architecture for a leading D2C wellness brand.",
    description: "An audit-backed CRO and UX redesign project targeting the high-friction mobile subscription funnel.",
    role: "CRO Strategist & UX Designer",
    technologies: ["Conversion Audit", "Behavior Analytics", "Mobile UX", "Figma"],
    problem: "Mobile visitors dropped off rapidly on product pages.",
    approach: "Restructured the information hierarchy into an intuitive 5-section mobile architecture.",
    decisions: ["Visual benefit cards", "Per-day cost comparison", "Sticky action bar"],
    process: ["Funnel Analysis", "Friction Diagnostics", "Prototyping", "A/B Testing"],
    outcome: "Validated UX design blueprint and CRO experiment roadmap.",
    learnings: ["Upfront clinical transparency reduces user anxiety."],
    heroMedia: "/assets/projects/wellbeing-nutrition/funnel-preview.svg",
    featured: false,
    isPublic: false
  },
  {
    id: "cleanpdf",
    number: "08",
    title: "CleanPDF",
    slug: "cleanpdf",
    year: "2025",
    category: "CLIENT-SIDE UTILITY / PRIVACY",
    shortDescription: "Zero-server, privacy-first PDF utility executing compression, merging, and redaction 100% in browser memory.",
    description: "A fast, privacy-respecting client-side document processing tool.",
    role: "Frontend Engineer & UI Designer",
    technologies: ["WebAssembly", "PDF-lib", "Web Workers", "TypeScript"],
    problem: "Users upload sensitive documents to cloud tools daily.",
    approach: "Built a sandboxed client-side processing engine using WebAssembly and PDF-lib.",
    decisions: ["Zero network transport", "Automatic memory hygiene"],
    process: ["WASM Feasibility", "Web Worker Engine", "PDF Core", "Interface"],
    outcome: "An instant, zero-server document processing utility.",
    learnings: ["Modern WebAssembly provides near-native performance."],
    heroMedia: "/assets/projects/cleanpdf/architecture.svg",
    featured: false,
    isPublic: false
  }
];

export const allProjects: Project[] = [
  ...publicProjects,
  ...unlistedProjects
];

// Default export contains all projects so unlisted pages don't error on build
export const projects: Project[] = allProjects;
