export const profile = {
  first: "GAURAV",
  last: "TIWARI",
  headline: "Backend & Distributed Systems",
  education: "B.Tech RGIPT · CS Minor IIT Mandi",
  email: "gauravt9431@gmail.com",
  phone: "+91 95805 61706",
  location: "Sultanpur, India",
  timezone: "IST · UTC+5:30",
  languages: "English · Hindi",
  github: "https://github.com/Gauravtiwari31",
  linkedin: "https://www.linkedin.com/in/gaurav-tiwari-31082005gt/",
  leetcode: "https://leetcode.com/u/Gaurav9431/",
  codechef: "https://www.codechef.com/users/mk_gae_69",
  source: "https://github.com/Gauravtiwari31/Portfolio",
  resume:
    "https://drive.google.com/drive/folders/1KLsrLu1hC-JMpZGsNFa0ohUURVJH8BEQ?usp=sharing",
};

export const tickerWords = [
  "BACKEND ENGINEERING",
  "DISTRIBUTED SYSTEMS",
  "DATA PIPELINES",
  "APPLIED ML",
  "SECURE BY DEFAULT",
  "OPEN SOURCE",
];

export const stats = [
  { value: "4", label: "Hackathon teams led" },
  { value: "650+", label: "Automated tests across projects" },
  { value: "12", label: "Projects deployed and live" },
  { value: "13", label: "Open-source PRs, 5 merged" },
];

export const capabilities = [
  {
    index: "01",
    title: "Backend & Data",
    lede: "Services that stay correct.",
    body: "Async FastAPI and Node.js services on PostgreSQL and MongoDB: authenticated APIs, append-only ledgers enforced by database triggers, idempotent payment flows, and rate limits and circuit breakers in front of anything external. Schema changes ship as migrations, not rewrites.",
    tags: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "SQLAlchemy",
      "Prisma",
      "MongoDB",
      "Docker",
      "REST / OpenAPI",
    ],
  },
  {
    index: "02",
    title: "Applied ML & AI",
    lede: "Models score. Rules decide.",
    body: "Entity resolution over 2.2M records with blocking, retrieval and learned matching; retrieval-augmented tutors grounded in a user's own notes; agents bounded by signed spend mandates. The model ranks and explains, but a deterministic, tested engine makes the call.",
    tags: [
      "LightGBM",
      "PyTorch",
      "e5 embeddings",
      "scikit-learn",
      "XGBoost",
      "pgvector / RAG",
      "Gemini & Claude APIs",
    ],
  },
  {
    index: "03",
    title: "Security & Reliability",
    lede: "Fail closed, then prove it.",
    body: "JWT, OAuth and RBAC, Argon2 sessions, Zod on every request, per-user rate limits and AI budgets, prompt-injection isolation and audit logs. Then tests written to break it: 223 pytest cases on NabhSetu, 177 Vitest cases on SyllabusOS, adversarial agent benchmarks on AgentKart.",
    tags: [
      "JWT",
      "OAuth",
      "RBAC",
      "Argon2",
      "Zod",
      "Rate limiting",
      "Audit logging",
      "pytest",
      "Vitest",
      "Jest",
      "GitHub Actions",
    ],
  },
  {
    index: "04",
    title: "Product Interfaces",
    lede: "The front end, finished.",
    body: "Next.js and React interfaces with typed data fetching, real charts and admin tooling, plus Canvas and WebGL when the problem is spatial: a Bode-plot and root-locus workbench in Canvas 2D, a Jantar Mantar visualiser in Three.js, and this site.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Recharts",
      "Three.js",
    ],
  },
];

export const timeline = [
  {
    when: "2021 — 2023",
    role: "Class X & XII, CBSE",
    org: "MV Convent Inter College, Prayagraj",
    kind: "School",
    body: "89% in Class X (2021) and 89% in Class XII (2023). Went on to clear JEE Advanced 2024 at AIR 25,364: top 14% of 180,200 candidates, and one of 48,248 qualifiers nationwide.",
  },
  {
    when: "Aug 2024 — May 2028",
    role: "B.Tech, Electronics Engineering",
    org: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Amethi",
    kind: "Education",
    body: "Core electronics coursework, with the software side built up in parallel: data structures and algorithms, OOP, operating systems, DBMS and computer networks.",
  },
  {
    when: "Aug 2025 — May 2026",
    role: "Minor, Computer Science Engineering",
    org: "IIT Mandi · Online",
    kind: "Education",
    body: "A formal CS track taken alongside the B.Tech. Coursework included an OS engine in Python covering CPU schedulers, Peterson's and Banker's algorithms, and paging.",
  },
  {
    when: "Nov 2025 — Present",
    role: "Co-Head, IEEE Student Branch",
    org: "RGIPT, Amethi",
    kind: "Leadership",
    body: "Led 8 volunteers to run 3 technical workshops for 150 students.",
  },
  {
    when: "Mar 2026 — Apr 2026",
    role: "Tech Intern",
    org: "Neeyat AI · Remote",
    kind: "Work",
    body: "Wrote the technical requirements, API workflows and acceptance criteria for the MCP (Model Context Protocol) server behind KickLoad's AI-driven load testing, giving engineers a fixed spec to build and test against. Broke that spec into 40 scoped tickets and ran the backlog for a cross-functional team across 4 Agile sprints, tracking each ticket through to release.",
  },
];

export type Link = { label: string; href: string };

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  kind: string;
  /** short tag in the card's top row */
  event: string;
  /** team, role and occasion */
  context: string;
  summary: string;
  metrics: Metric[];
  stack: string[];
  links: Link[];
  /** screenshot; projects without a live UI show `flow` instead */
  image?: string;
  flow?: { title: string; note: string; steps: FlowStep[] };
};

export type FlowStep = { name: string; value: string; label: string };

export const projects: Project[] = [
  {
    id: "01",
    title: "NabhSetu",
    kind: "Real-time airfare price index",
    event: "SIH 2026",
    context: "Team Tarang (6) · Team lead, built the backend",
    summary:
      "A near-real-time price index for Indian domestic airfares, published daily, weekly and monthly through an authenticated API in JSON, CSV and SDMX-JSON. A fail-closed compliance governor gates every collector, and the fare ledger is tamper-evident: Postgres triggers reject every UPDATE and DELETE, and records carry SHA-256 hash chains.",
    metrics: [
      { value: "75/75", label: "Non-permitted fetches blocked" },
      { value: "1,823", label: "Live fares across 15 cells" },
      { value: "223", label: "pytest tests" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Playwright", "Docker"],
    links: [
      { label: "Live site", href: "https://nabhsetu-tarang-frontend.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/NabhSetu" },
    ],
    image: "/screenshots/nabhsetu.webp",
  },
  {
    id: "02",
    title: "Amazon ML Challenge 2026",
    kind: "Business entity resolution",
    event: "RANK 334",
    context: "Team Ship It Friday (4) · Team lead",
    summary:
      "Matched noisy business records from India, the US and France (abbreviations, transliterations, trade names, partial addresses) to 2.2M source entities, optimising macro F0.5, where a false merge costs more than a miss. France had no labels, so it was handled by an open-set chain validated leave-one-country-out.",
    metrics: [
      { value: "334", label: "Rank of 27,000+ teams" },
      { value: "0.987133", label: "Final leaderboard score" },
      { value: "3", label: "Countries: India, US, France" },
    ],
    stack: ["Python", "LightGBM", "PyTorch", "multilingual-e5", "RapidFuzz", "TF-IDF"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Gauravtiwari31/Ship_It_Friday_amazon_MLC_26",
      },
    ],
    flow: {
      title: "Pipeline · macro F0.5",
      note: "Scored by a cross-fitted 3-stage LightGBM cascade and 3 fine-tuned cross-encoders",
      steps: [
        { name: "Blocking", value: "2.2M", label: "Source entities, multi-view TF-IDF" },
        { name: "Retrieval", value: "4.77", label: "Pairs per entity: fine-tuned e5 + learned filter" },
        { name: "Matching", value: "0.991", label: "Out-of-fold F0.5 on India and the US" },
      ],
    },
  },
  {
    id: "03",
    title: "SyllabusOS",
    kind: "Adaptive exam-prep platform",
    event: "HOOLLOW 2026",
    context: "Team Crazy Coders · Team lead, built it end to end",
    summary:
      "Turns a syllabus, notes and past papers into a prerequisite concept graph and a daily plan. A deterministic engine on an Elo-style mastery model picks what to study next (the LLM grades and explains but never decides), and the Socratic tutor is grounded in the student's own notes through pgvector.",
    metrics: [
      { value: "177", label: "Vitest tests, run in CI" },
      { value: "12s", label: "Timeout to offline mode" },
      { value: "<30ms", label: "To parse 200 KB of hostile input" },
    ],
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "pgvector", "Prisma", "Gemini"],
    links: [
      { label: "Live site", href: "https://syllabus-os-gh-cc.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/SyllabusOS" },
    ],
    image: "/screenshots/syllabusos.webp",
  },
  {
    id: "04",
    title: "Venturo",
    kind: "Full-stack marketplace",
    event: "PERSONAL",
    context: "Personal project · storefront, admin portal and API",
    summary:
      "A Create React App storefront rebuilt as a Next.js app plus an admin portal on an Express REST API, with JWT silent refresh, Google OAuth and RBAC. Users moved to PostgreSQL while keeping MongoDB ObjectIds as keys, and Stripe calls carry idempotency keys so a retried webhook cannot double-charge.",
    metrics: [
      { value: "11,800", label: "Products served" },
      { value: "17", label: "Departments" },
      { value: "0", label: "Orders rewritten in the migration" },
    ],
    stack: ["Next.js 16", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Stripe"],
    links: [
      { label: "Live site", href: "https://online-commerce-mern-stack-backend.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/Venturo" },
    ],
    image: "/screenshots/venturo.webp",
  },
];

export type Build = {
  title: string;
  kind: string;
  context: string;
  summary: string;
  stack: string[];
  links: Link[];
};

export const builds: Build[] = [
  {
    title: "AgentKart AI",
    kind: "Agentic commerce platform",
    context: "Personal project",
    summary:
      "A revenue-growth agent and a gateway where AI buyer agents discover, evaluate and pay through Razorpay Test Mode. Every financial action is bounded by Ed25519-signed spend mandates, budget ceilings and human approval; 16 of 16 adversarial buyer agents contained, +39.7% revenue in a paired A/B simulation, 151 tests.",
    stack: ["TypeScript", "Node.js", "Next.js", "Razorpay", "Ed25519"],
    links: [
      { label: "Live", href: "https://agent-kart-ai.vercel.app" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/AgentKart-AI" },
    ],
  },
  {
    title: "Nirnay",
    kind: "PID tuning workbench for humans and AI agents",
    context: "OpenAI WebMCP Challenge",
    summary:
      "A person and an AI agent tune the same control loop, with a live step response, Bode plot and root locus. Numerics written from scratch (Durand–Kerner roots, RK4, bisection-refined margins) with 46 tests, and 8 WebMCP tools so the agent reads exact margins instead of estimating from pixels.",
    stack: ["JavaScript", "Canvas 2D", "WebMCP", "Zero dependencies"],
    links: [
      { label: "Live", href: "https://gauravtiwari31.github.io/Nirnay/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/Nirnay" },
    ],
  },
  {
    title: "MeraCodeLikhDo",
    kind: "Crop monitoring & irrigation advisory",
    context: "ISRO Bharatiya Antariksh Hackathon 2026 · Team lead",
    summary:
      "Classifies crops from Sentinel-2, Landsat and MODIS time series and detects moisture stress by fusing optical (NDVI, VCI) and SAR (VV/VH) indices. Issues 8-day irrigation advisories in Hindi and English from FAO-56 water-deficit estimates, rolled up into canal-outlet release priorities.",
    stack: ["FastAPI", "Earth Engine", "XGBoost", "Next.js", "Mapbox GL"],
    links: [
      { label: "Live", href: "https://mera-code-likh-do-isro-bah.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Gauravtiwari31/MeraCodeLikhDo_Isro_BAH_2026",
      },
    ],
  },
  {
    title: "VitalSync",
    kind: "Healthcare management platform",
    context: "Personal project",
    summary:
      "Patients, doctors and hospitals on one platform: appointment booking, real-time OPD queueing, bed allocation and digital records on a normalised PostgreSQL schema. Argon2 session auth, role checks in middleware, Zod on every request, and six external services behind typed server-side interfaces.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "LiveKit", "Pusher", "Razorpay"],
    links: [
      { label: "Live", href: "https://vitalsync-six-sand.vercel.app" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/VitalSync" },
    ],
  },
  {
    title: "AI-Powered Network Security Framework",
    kind: "ML packet-inspection firewall",
    context: "Personal project",
    summary:
      "A 7-stage detection pipeline (static rules, fragment checks, signature DPI, entropy, behavioural detection, JA3 TLS fingerprinting, flow-level ML) evaluated cheapest-first. Rebuilds 70 CICFlowMeter features from live packets; one core across Linux and Windows, with 61 pytest tests.",
    stack: ["Python", "Scapy", "scikit-learn", "NetfilterQueue", "WinDivert"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Gauravtiwari31/AI-Powered-Network-Security-Framework",
      },
    ],
  },
  {
    title: "BiztelAI",
    kind: "Manufacturing document digitisation",
    context: "Take-home assignment",
    summary:
      "Digitises handwritten production logs: Gemini vision extracts 8 fields per document with per-field confidence, followed by rule-based validation (shift, quantity range, machine code, duplicate work orders), an edit-and-revalidate review flow and a KPI dashboard.",
    stack: ["FastAPI", "Gemini vision", "PyMuPDF", "SQLite", "React 19"],
    links: [
      { label: "Live", href: "https://biztel-ai-workflowsystem-ai-ic81.vercel.app/" },
      { label: "Demo", href: "https://youtu.be/UUyiovga2OQ" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/BiztelAI-Workflowsystem-AI" },
    ],
  },
  {
    title: "AI Customer-Support Agent",
    kind: "Intent-aware support agent",
    context: "Take-home assignment · Hiver SDE Intern",
    summary:
      "Classifies intent, drafts replies and knows when to escalate, built on real @AmazonHelp conversations, with a golden evaluation set, failure analysis, a decision log and an interactive results report.",
    stack: ["Python", "React 18", "Vite", "Recharts"],
    links: [
      { label: "Live", href: "https://hiversdeassigngauravtiwari.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/hiver_sde_assign_gaurav" },
    ],
  },
  {
    title: "Renping",
    kind: "Keep-alive and uptime monitor",
    context: "Personal project",
    summary:
      "Keeps free-tier deployments awake by pinging registered URLs every 10 minutes, tracks uptime and response time, and emails an alert when a service stays down for 30 minutes.",
    stack: ["Next.js 15", "Express", "Prisma", "PostgreSQL", "Docker Compose"],
    links: [{ label: "GitHub", href: "https://github.com/Gauravtiwari31/ren_ping" }],
  },
];

export const smallBuilds: { title: string; summary: string; links: Link[] }[] = [
  {
    title: "Portfolio Maker",
    summary: "Client-side résumé-to-portfolio generator with 6 templates, built with Harshi Singh.",
    links: [
      { label: "Live", href: "https://gauravtiwari31.github.io/Portfolio-Maker/" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/Portfolio-Maker" },
    ],
  },
  {
    title: "Yantr",
    summary: "3D visualiser for the Jantar Mantar instruments, sized to any location (React, Three.js).",
    links: [
      { label: "Live", href: "https://yantr.vercel.app" },
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/Yantr" },
    ],
  },
  {
    title: "Smart City OS Engine",
    summary: "CS-minor coursework: CPU schedulers, Peterson's and Banker's algorithms, and paging in Python.",
    links: [
      { label: "GitHub", href: "https://github.com/Gauravtiwari31/graded_assignment_4_gaurav" },
    ],
  },
  {
    title: "SachetYatri",
    summary: "Geofencing tourist-safety system with separate tourist, police and ministry apps.",
    links: [{ label: "GitHub", href: "https://github.com/Gauravtiwari31/geofencing" }],
  },
];

export type Contribution = {
  repo: string;
  href: string;
  note?: string;
  status: "merged" | "review";
  summary: string;
  prs: number[];
};

export const openSource: Contribution[] = [
  {
    repo: "tldr-pages/tldr",
    href: "https://github.com/tldr-pages/tldr",
    status: "merged",
    summary: "Command pages for kubectl-krew, httrack, duff and niri.",
    prs: [23301, 23272, 23268, 22534],
  },
  {
    repo: "TryCaspian/caspian-sdk",
    href: "https://github.com/TryCaspian/caspian-sdk",
    status: "merged",
    summary: "TypeScript auto-reply example for the SDK.",
    prs: [49],
  },
  {
    repo: "typeorm/typeorm",
    href: "https://github.com/typeorm/typeorm",
    status: "review",
    summary:
      "Load eager relations when preloading an entity; load entity files through import when require cannot parse them.",
    prs: [12795, 12796],
  },
  {
    repo: "meshery/meshery",
    href: "https://github.com/meshery/meshery",
    note: "CNCF",
    status: "review",
    summary:
      "Design force-refetch, a submit guard while pending, serialisable Redux state, and llms.txt for the docs.",
    prs: [21680, 21685, 21686, 21670],
  },
  {
    repo: "meshery/meshery.io",
    href: "https://github.com/meshery/meshery.io",
    note: "CNCF",
    status: "review",
    summary: "Link fixes and mobile typography.",
    prs: [2926, 2927],
  },
];

export const hackathons = [
  {
    event: "Amazon ML Challenge 2026",
    result: "Rank 334 of 27,000+ teams · score 0.987133",
    role: "Team lead, Ship It Friday",
  },
  {
    event: "Smart India Hackathon 2026",
    result: "NabhSetu · MoSPI problem statement SIH26056",
    role: "Team lead, Team Tarang",
  },
  {
    event: "ISRO Bharatiya Antariksh Hackathon 2026",
    result: "MeraCodeLikhDo · crop and irrigation advisory",
    role: "Team lead",
  },
  {
    event: "Horizon by Hoollow 2026",
    result: "SyllabusOS · AI with Education track",
    role: "Team lead, Crazy Coders",
  },
  {
    event: "OpenAI WebMCP Challenge",
    result: "Nirnay · PID tuning workbench",
    role: "Devpost",
  },
];

export const achievements = [
  {
    value: "25,364",
    title: "JEE Advanced 2024",
    body: "All-India rank: top 14% of 180,200 candidates, one of 48,248 qualifiers nationwide.",
  },
  {
    value: "1849",
    title: "LeetCode",
    body: "Max rating, top 6.5% · 110 problems solved.",
    href: profile.leetcode,
  },
  {
    value: "1640",
    title: "CodeChef",
    body: "Max rating · 82 problems solved.",
    href: profile.codechef,
  },
];

export type StackGroup = {
  title: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Languages",
    items: ["C++", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "Next.js", "REST API design", "OpenAPI / Swagger"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "pgvector", "Prisma", "SQLAlchemy", "Alembic", "Mongoose"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Zustand", "Recharts", "Three.js"],
  },
  {
    title: "AI / ML",
    items: ["LightGBM", "scikit-learn", "XGBoost", "e5 embeddings", "RAG", "Gemini & Claude APIs"],
  },
  {
    title: "Security",
    items: ["JWT", "OAuth", "RBAC", "Argon2", "Rate limiting", "Zod validation", "Idempotency", "Audit logging"],
  },
  {
    title: "DevOps & Testing",
    items: ["Git", "GitHub Actions", "Docker", "Linux", "Vercel", "Render", "pytest", "Jest", "Supertest", "Vitest", "Playwright"],
  },
  {
    title: "Fundamentals",
    items: ["Data structures & algorithms", "OOP", "Operating systems", "DBMS", "Computer networks"],
  },
];
