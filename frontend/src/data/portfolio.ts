// Single source of truth for all portfolio content.
// Edit this file to update any text on the site. No other file holds copy.
// Strings are stored in Title Case; the light skin uppercases headings via
// the --heading-transform token, the dark skin renders them as written.

export type AccentKey = "cyan" | "indigo" | "purple" | "pink" | "neutral";

export interface NavLink {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  key: "github" | "linkedin" | "leetcode";
}

export interface SkillCategory {
  id: string;
  accent: AccentKey;
  title: string;
  description: string;
  items: string[];
  footer?: { label: string; value: string };
}

export interface Job {
  index: string;
  accent: AccentKey;
  role: string;
  company: string;
  period: string;
  duration: string;
  tags: string[];
  bullets: string[];
  status: string;
}

export interface Project {
  id: string;
  accent: AccentKey;
  category: string;
  badge: string;
  title: string;
  stack: string[];
  bullets: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Degree {
  degree: string;
  school: string;
  period: string;
  detail: string;
  badges: string[];
}

export interface Honor {
  title: string;
  detail: string;
  badge?: string;
  featured?: boolean;
}

export const accentVar = {
  cyan: "var(--accent-cyan)",
  indigo: "var(--accent-indigo)",
  purple: "var(--accent-purple)",
  pink: "var(--accent-pink)",
  neutral: "var(--accent-neutral)",
} as const;

export const profile = {
  brand: "AF",
  brandName: "Arisha Firoz",
  // brandSubtitle: "Software Engineer & AI Integrator",
  // availabilityPill: "Ready",
  firstName: "Arisha",
  lastName: "Firoz",
  // badge: "Full-stack Developer • AI/ML Integrator",
  introLead:
    "B.Tech Computer Science undergraduate building scalable full-stack applications, resilient distributed architectures, and applied AI-driven systems.",
  introLeadBold: "scalable full-stack applications",
  resumeUrl: "/resume.pdf",
  email: "firozarisha49@gmail.com",
  location: "Prayagraj, Uttar Pradesh, India",
  hireLabel: "Hire Me ↗",
  primaryCta: { label: "Explore Projects", icon: "↓", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "/resume.pdf" },
  transmissionsLabel: "Transmissions:",
  // statusBar: {
  //   status: "Status: Open for SDE Internships",
  //   location: "Prayagraj, India",
  //   tags: ["Architectural Dossier", "B.Tech CSE (2023–Present)"],
  // },
  // stats: [
  //   { label: "Academic GPA", value: "7.7 / 10", note: "UCER Prayagraj", accent: "cyan" },
  //   { label: "SIH 2025 Rank", value: "Top 13 / 90+", note: "National Level", accent: "indigo" },
  //   { label: "SSOC 2025", value: "#47 Global", note: "350+ Contributors", accent: "pink" },
  // ],
  manifest: {
    fileName: "developer_manifest.json",
    liveTag: "LIVE_ENV: OK",
    engineer: "Arisha Firoz",
    education: {
      degree: "B.Tech in CSE",
      college: "UCER Prayagraj",
      period: "2023 - Present",
      cgpa: 7.7,
    },
    primaryFocus: ["Distributed Web Systems", "Agentic LLM Pipelines", "Predictive ML Architectures"],
    availability: { role: "Software Engineering Intern", status: "Open to internships" },
    metrics: { leetcodeSolved: 235 },
  }
  // sideNote: {
  //   label: "Core Design Discipline",
  //   title: "Resilient Code. Tactile UI.",
  //   body: "Bridging algorithmic rigour with modern fluid aesthetics.",
  // },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socials: Social[] = [
  { label: "GitHub", href: "#", key: "github" },
  { label: "LinkedIn", href: "#", key: "linkedin" },
  { label: "LeetCode", href: "#", key: "leetcode" },
];

export const leetcodeChip = "235+ Solved";

export const skills: SkillCategory[] = [
  {
    id: "01",
    accent: "cyan",
    title: "Languages",
    description: "Core programming languages for systems and applications.",
    items: ["Python", "Java", "C", "JavaScript"],
    footer: { label: "Primary Focus", value: "Python / Java" },
  },
  {
    id: "02",
    accent: "indigo",
    title: "Core CS",
    description: "Fundamentals behind every system built.",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    footer: { label: "Algorithmic Depth", value: "235+ LC Solved" },
  },
  {
    id: "03",
    accent: "purple",
    title: "Web",
    description: "Stacks for shipping full-stack products.",
    items: ["HTML5/CSS3", "Bootstrap", "AngularJS", "React", "FastAPI", "Django", "REST APIs"],
  },
  {
    id: "04",
    accent: "neutral",
    title: "Databases",
    description: "Relational and document data stores.",
    items: ["SQL", "MongoDB"],
  },
  {
    id: "05",
    accent: "neutral",
    title: "Tools",
    description: "Version control and container workflows.",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    id: "06",
    accent: "pink",
    title: "AI/ML",
    description: "Models and LLM workflows in production code.",
    items: ["Scikit-learn", "Random Forest", "Feature Engineering", "RAG", "Prompt Engineering"],
  },
];

export const experience: Job[] = [
  {
    index: "01",
    accent: "cyan",
    role: "Frontend Developer Intern",
    company: "Construction Builder Solution",
    period: "Mar 2026 – May 2026",
    duration: "3 MOS",
    tags: ["AngularJS", "REST APIs", "JSON", "UX Optimization"],
    bullets: [
      "Built responsive single-page interfaces with AngularJS, improving UI responsiveness and UX",
      "Integrated frontend with backend via REST APIs and JSON, reducing client-server payload latency",
      "Conducted cross-browser testing, bug fixing, and performance optimization",
    ],
    status: "Status: Completed",
  },
  {
    index: "02",
    accent: "purple",
    role: "Frontend Development Intern",
    company: "E-Commerce Platform",
    period: "Jan 2026 – Mar 2026",
    duration: "3 MOS",
    tags: ["HTML5/CSS3", "JavaScript", "Bootstrap", "API Integration"],
    bullets: [
      "Designed and deployed modular, reusable UI components with HTML5, CSS3, JavaScript, Bootstrap",
      "Collaborated with backend developers on third-party API integration, UI testing, cross-device rendering fixes",
    ],
    status: "Status: Completed",
  },
];

export const projects: Project[] = [
  {
    id: "P_01",
    accent: "pink",
    category: "Agentic AI",
    badge: "LLM Pipeline",
    title: "AI-Powered Code Review Agent",
    stack: ["FastAPI", "Python", "Groq LLM", "GitHub REST API"],
    bullets: [
      "Analyzes GitHub PR diffs and posts targeted feedback",
      "Multi-agent pipeline: Static Analysis, Security Audit, Code Style, Executive Summary",
      "Diff-only payloads to minimize token usage and API overhead",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "P_02",
    accent: "cyan",
    category: "Distributed Systems",
    badge: "Real-Time",
    title: "Real-Time YouTube Watch Party",
    stack: ["React", "Node.js", "TypeScript", "Express", "Socket.IO"],
    bullets: [
      "Play/pause/seek/video-change synced across participants over WebSockets; late joiners start at live position",
      "Server-authoritative architecture (Room, RoomManager), backend-enforced RBAC (Host, Moderator, Participant), automatic host succession",
      "Payload validation, rate-limited chat/reactions, attack scripts confirming unauthorized socket events are rejected",
      "Deployed on Vercel (frontend) and Render (backend)",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "P_03",
    accent: "neutral",
    category: "Predictive ML",
    badge: "NASA C-MAPSS",
    title: "Predictive Maintenance – RUL Prediction",
    stack: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
    bullets: [
      "Engineered 60+ features from 26 NASA C-MAPSS sensors (rolling mean/std, rate-of-change); RF RMSE 40.76 → 35.32",
      "Linear Regression (baseline 43.87) → Random Forest, with correlation-based feature selection and StandardScaler",
      "Self-engineered RUL target; cost simulation across 518 critical engines projected Rs. 21.7 Cr in prevented breakdown costs",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "P_04",
    accent: "indigo",
    category: "Full-Stack Web",
    badge: "Django",
    title: "E-Commerce Web Application",
    stack: ["Django", "JavaScript", "SQL", "Payment Gateway"],
    bullets: [
      "Secure auth (JWT/Sessions), payment gateway checkout flows",
      "Automated inventory tracking, AJAX-based dynamic shopping cart",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const rulStats = [
  { value: "43.87", label: "Baseline RMSE" },
  { value: "35.32", label: "Optimized RMSE" },
  { value: "Rs. 21.7 Cr", label: "Projected Cost Saved" },
];

export const degrees: Degree[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "United College of Engineering & Research, Prayagraj",
    period: "2023 – Present",
    detail: "CGPA 7.7",
    badges: ["CGPA 7.7"],
  },
  {
    degree: "High School & Intermediate (Science)",
    school: "St. Anthony's Convent Girls Inter College",
    period: "2020 – 2022",
    detail: "84.17% | 69.6%",
    badges: ["84.17%", "69.6%"],
  },
];

export const certificationStrip = "Java (Bronze Level) • HackerRank";

export const honors: Honor[] = [
  { title: "235+ LeetCode", detail: "DSA problems solved" },
  {
    title: "Flipkart GRID 7.0",
    detail: "Cleared Round 1 (Software Development Track); qualified for Amazon ML Summer School",
  },
  { title: "Smart India Hackathon 2025", detail: "Top 13 out of 90+ teams", badge: "Top 13" },
  {
    title: "Social Summer of Code 2025",
    detail: "Global Rank 47 among 350+ contributors",
    badge: "Rank 47",
  },
  {
    title: "HackQuest 2025",
    detail: "Selected to showcase the AlertNexa project to an industry panel",
    badge: "Showcased",
    featured: true,
  },
];

export const contact = {
  heading: "Initiate Contact",
  email: "firozarisha49@gmail.com",
  location: "Prayagraj, Uttar Pradesh, India",
  quote: "Build systems that are easy to reason about and hard to break.",
  quoteBy: "Engineering Ethos // 001",
  sendLabel: "Send Message ▶",
  // Point this at your own Formspree endpoint to receive messages,
  // e.g. "https://formspree.io/f/xxxxxx". Left empty on purpose:
  // the form falls back to a mailto: draft.
  formspreeEndpoint: "",
  note: "No backend wired up yet — submitting opens your email app with the message pre-filled. Set a Formspree endpoint in src/data/portfolio.ts to receive messages directly.",
};

export const footerCopy = {
  name: "Arisha Firoz",
  line: "All systems nominal.",
  links: [
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  backToTop: "Back to Top",
};