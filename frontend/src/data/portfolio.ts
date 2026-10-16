// Single source of truth for all portfolio content.
// Edit this file to update any text on the site. No other file holds copy.

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
  title: string;
  description: string;
  items: string[];
  footer: string;
}

export interface Job {
  index: string;
  current: boolean;
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
}

export interface Honor {
  title: string;
  detail: string;
}

export const profile = {
  brand: "AF // ARISHA FIROZ",
  brandSubtitle: "Software Engineer & AI Integrator",
  firstName: "ARISHA",
  lastName: "FIROZ",
  badge: "FULL-STACK DEVELOPER · AI/ML INTEGRATOR",
  introLead:
    "B.Tech Computer Science undergraduate building scalable full-stack applications, resilient distributed architectures, and applied AI-driven systems.",
  introLeadBold: "scalable full-stack applications",
  resumeUrl: "/resume.pdf",
  email: "firozarisha49@gmail.com",
  location: "Prayagraj, Uttar Pradesh, India",
  statusBar: {
    status: "SYS.STATUS // READY FOR SDE INTERNSHIPS",
    location: "LOC: PRAYAGRAJ, INDIA",
    doc: "ARCHITECTURAL DOSSIER",
  },
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
    availability: { role: "Software Engineering Intern", status: "open" },
    metrics: { leetcodeSolved: 235 },
  },
  sideNote: {
    title: "Resilient Code. Tactile UI.",
    body: "Bridging algorithmic rigour with Swiss clarity.",
  },
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
    title: "Languages",
    description: "Core programming languages for systems and applications.",
    items: ["Python", "Java", "C", "JavaScript"],
    footer: "4 UNITS // VERIFIED",
  },
  {
    id: "02",
    title: "Core Computer Science",
    description: "Fundamentals behind every system built.",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    footer: "5 UNITS // VERIFIED",
  },
  {
    id: "03",
    title: "Web Technologies",
    description: "Stacks for shipping full-stack products.",
    items: ["React", "FastAPI", "Django", "AngularJS", "HTML5/CSS3", "Bootstrap", "REST APIs"],
    footer: "7 UNITS // VERIFIED",
  },
  {
    id: "04",
    title: "Databases & Storage",
    description: "Relational and document data stores.",
    items: ["SQL", "MongoDB"],
    footer: "2 UNITS // VERIFIED",
  },
  {
    id: "05",
    title: "Tools & DevOps",
    description: "Version control, containers, and deploys.",
    items: ["Git", "GitHub", "Docker", "Vercel", "Render"],
    footer: "5 UNITS // VERIFIED",
  },
  {
    id: "06",
    title: "Applied AI & ML",
    description: "Models and LLM workflows in production code.",
    items: ["Scikit-learn", "Random Forest", "Feature Engineering", "RAG", "Prompt Engineering"],
    footer: "5 UNITS // VERIFIED",
  },
];

export const experience: Job[] = [
  {
    index: "01",
    current: true,
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
    status: "STATUS: COMPLETED",
  },
  {
    index: "02",
    current: false,
    role: "Frontend Development Intern",
    company: "E-Commerce Platform",
    period: "Jan 2026 – Mar 2026",
    duration: "3 MOS",
    tags: ["HTML5/CSS3", "JavaScript", "Bootstrap", "API Integration"],
    bullets: [
      "Designed and deployed modular, reusable UI components with HTML5, CSS3, JavaScript, Bootstrap",
      "Collaborated with backend developers on third-party API integration, UI testing, cross-device rendering fixes",
    ],
    status: "STATUS: COMPLETED",
  },
];

export const projects: Project[] = [
  {
    id: "P_01",
    category: "AGENTIC AI",
    badge: "LLM PIPELINE",
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
    category: "DISTRIBUTED SYSTEMS",
    badge: "REAL-TIME",
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
    category: "PREDICTIVE ML",
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
    category: "FULL-STACK WEB",
    badge: "DJANGO",
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
  },
  {
    degree: "High School & Intermediate (Science)",
    school: "St. Anthony's Convent Girls Inter College",
    period: "2020 – 2022",
    detail: "84.17% | 69.6%",
  },
];

export const certificationStrip = "Java (Bronze Level) • HackerRank";

export const honors: Honor[] = [
  { title: "235+ LeetCode", detail: "DSA problems solved" },
  {
    title: "Flipkart GRID 7.0",
    detail: "Cleared Round 1 (Software Development Track); qualified for Amazon ML Summer School",
  },
  { title: "Smart India Hackathon 2025", detail: "Top 13 out of 90+ teams" },
  {
    title: "Social Summer of Code 2025",
    detail: "Global Rank 47 among 350+ contributors",
  },
  {
    title: "HackQuest 2025",
    detail: "Selected to showcase the AlertNexa project to an industry panel",
  },
];

export const contact = {
  heading: "Initiate Contact",
  email: "firozarisha49@gmail.com",
  location: "Prayagraj, Uttar Pradesh, India",
  quote: "Build systems that are easy to reason about and hard to break.",
  quoteBy: "ENGINEERING ETHOS // 001",
  // Point this at your own Formspree endpoint to receive messages,
  // e.g. "https://formspree.io/f/xxxxxx". Left empty on purpose:
  // the form falls back to a mailto: draft.
  formspreeEndpoint: "",
  note: "No backend wired up yet — submitting opens your email app with the message pre-filled. Set a Formspree endpoint in src/data/portfolio.ts to receive messages directly.",
};
