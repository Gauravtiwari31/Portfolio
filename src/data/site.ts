export const profile = {
  first: "GAURAV",
  last: "TIWARI",
  roles: ["Full-Stack Developer", "Gameplay Programmer", "Systems Engineer"],
  email: "gauravt9431@gmail.com",
  phone: "+91 95805 61706",
  location: "Amethi, India",
  timezone: "IST · UTC+5:30",
  github: "https://github.com/Gauravtiwari31",
  linkedin: "https://www.linkedin.com/in/gaurav-tiwari-66012831b/",
  resume:
    "https://drive.google.com/file/d/1CFJ5csY3nt_cVGdc9SxRfiswe8gk_89r/view?usp=drivesdk",
};

export const tickerWords = [
  "FULL-STACK ENGINEERING",
  "AI SYSTEMS",
  "CYBERSECURITY",
  "GAMEPLAY PROGRAMMING",
  "DISTRIBUTED ARCHITECTURE",
  "REAL-TIME SYSTEMS",
];

export const stats = [
  { value: "2", label: "Institutions in parallel" },
  { value: "40%", label: "Testing efficiency gained" },
  { value: "30%", label: "Compute overhead cut" },
  { value: "150+", label: "Students reached" },
];

export const capabilities = [
  {
    index: "01",
    title: "Web Platforms",
    lede: "Production systems, end to end.",
    body: "I build the whole stack — typed APIs, relational and document data models, auth with RBAC, payment and video integrations, and interfaces that stay fast under real traffic. Shipped on Vercel, containerised where it matters.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "REST / OpenAPI",
    ],
  },
  {
    index: "02",
    title: "AI & Security",
    lede: "Models with a job to do.",
    body: "Layered detection pipelines that combine classical ML, rule engines and deep packet inspection — plus LLM-assisted tooling wired into real developer workflows rather than demos. Emphasis on precision, false-positive cost and explainability.",
    tags: [
      "Python",
      "Scikit-learn",
      "Deep Packet Inspection",
      "Gemini API",
      "MCP Servers",
      "Threat Modelling",
    ],
  },
  {
    index: "03",
    title: "Gameplay & Systems",
    lede: "Frames are a budget.",
    body: "Core mechanics, physics interactions and real-time event handling written to a frame budget. I profile hotspots, restructure the loop and apply targeted algorithmic fixes until the numbers move.",
    tags: [
      "C++",
      "C#",
      "Unity",
      "Physics Systems",
      "Profiling",
      "DSA",
      "CI/CD",
    ],
  },
];

export const timeline = [
  {
    when: "2024 — 2028",
    role: "B.Tech, Electronics Engineering",
    org: "RGIPT, Amethi",
    kind: "Education",
    body: "Electronics undergraduate with a deliberate software parallel — algorithms, systems programming and full-stack work alongside the core curriculum. Co-Head of the IEEE Student Branch, running 3+ technical workshops for 150+ students.",
  },
  {
    when: "Aug 2025 — May 2026",
    role: "Minor, Computer Science Engineering",
    org: "IIT Mandi",
    kind: "Education",
    body: "A formal CS curriculum carried simultaneously with the B.Tech: algorithms, systems design and software engineering fundamentals. Two institutions, one timetable.",
  },
  {
    when: "Mar 2026",
    role: "Technical Project Manager",
    org: "Neeyat AI",
    kind: "Work",
    body: "Directed end-to-end SDLC for a cloud-native MCP server powering AI-assisted API performance testing. Coordinated 3 cross-functional teams and architected scalable microservices that removed local test environments for 10+ engineers — a 40% gain in testing efficiency.",
  },
  {
    when: "Apr 2026",
    role: "Gameplay Programmer",
    org: "Aurelio Game Studio",
    kind: "Work",
    body: "Engineered player mechanics, physics interactions and real-time event handling in optimised C#, with CI/CD and Git-based version control. Cut computational overhead 30% by profiling hotspots and restructuring the game loop across 5+ gameplay modules.",
  },
];

export const projects = [
  {
    id: "01",
    title: "VitalSync",
    year: "2026",
    category: "Full-Stack · Healthcare",
    summary:
      "A multi-role healthcare platform for patients, doctors and hospitals — OPD queue management, appointment scheduling, WebRTC consultations over LiveKit, Razorpay payments and OAuth 2.0 with role-based access control.",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Gemini AI", "LiveKit"],
    link: "https://github.com/Gauravtiwari31/VitalSync",
    image: "/screenshots/vitalsync.png",
  },
  {
    id: "02",
    title: "AI Network Security Framework",
    year: "2025",
    category: "Cybersecurity · Machine Learning",
    summary:
      "A three-layer hybrid pipeline pairing ML classifiers with rule-based filtering and deep packet inspection. Blocks SQL injection and 15+ categories of suspicious traffic before it reaches the application tier.",
    stack: ["Python", "Scikit-learn", "Random Forest", "DPI"],
    link: "https://github.com/Gauravtiwari31/AI-Powered-Network-Security-Framework",
    image: "/screenshots/ai-firewall.png",
  },
  {
    id: "03",
    title: "Online Commerce Platform",
    year: "2025",
    category: "Full-Stack · MERN",
    summary:
      "JWT authentication with RBAC, a content-based recommendation engine that lifted discoverability 25%, Dockerised deployment and RESTful endpoints documented with Swagger / OpenAPI.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    link: "https://github.com/Gauravtiwari31/Online-Commerce_MERN-Stack",
    image: "/screenshots/commerce.png",
  },
];

export type StackGroup = {
  title: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C#", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Three.js", "GSAP", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST"],
  },
  {
    title: "Platform",
    items: ["Docker", "Git", "CI/CD", "Vercel", "Linux", "Unity"],
  },
];
