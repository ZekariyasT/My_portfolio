import {
  backend,
  creator,
  mobile,
  web,
  github,
  danEnergy,
  nexusLabs,
  ESLTS,
  jobit,
  task,
  covid,
  zeki,
  Nahom,
  tekle,
  Ela,
} from "../assets";

export const personalInfo = {
  name: "Zekariyas Tesfaye Desta",
  shortName: "Zekariyas",
  title: "Backend Software Engineer",
  degree: "M.Sc. Computer Science Student",
  university: "University of Salzburg",
  location: "Salzburg, Austria",
  email: "zekariyastesfayedesta@gmail.com",
  phone: "+436642392413",
  github: "https://github.com/ZekariyasT",
  linkedin: "https://www.linkedin.com/in/zekariyas-tesfaye-53a0791a6/",
  languages: [
    { name: "English", level: "C1" },
    { name: "German", level: "A2" },
  ],
  summary:
    "Master's student in Computer Science at the University of Salzburg, focused on backend development with JavaScript, Node.js, Express, MongoDB, and SQL. Experienced in building REST APIs, database integration, and backend systems through real-world projects, including a freelance marketplace and a goods distribution platform.",
};

export const stats = [
  { value: "2+", label: "Years of Experience", detail: "Production & internship roles" },
  { value: "40+", label: "REST Endpoints Built", detail: "High-throughput APIs" },
  { value: "25+", label: "Database Tables & Models", detail: "PostgreSQL, MySQL & MongoDB" },
  { value: "30%", label: "Query Optimization", detail: "Performance improvements achieved" },
];

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const coreCompetencies = [
  {
    title: "REST API Engineering",
    description:
      "Architecting modular, secure, and production-ready REST endpoints with Node.js and Express. Authentication, CRUD, and rate limiting.",
    badge: "Backend Core",
  },
  {
    title: "Database Modeling & Tuning",
    description:
      "Managing relational schemas (PostgreSQL, MySQL) and document collections (MongoDB). Optimizing queries for 30% faster execution.",
    badge: "Data & Storage",
  },
  {
    title: "Full-Stack & Marketplace Systems",
    description:
      "Building marketplace architectures connecting multi-tier users, implementing real-time messaging, payment integration, and service contracts.",
    badge: "System Design",
  },
  {
    title: "Testing, Debugging & Optimization",
    description:
      "API verification with Postman, debugging backend code, and delivering optimizations that enhance response times by 20% to 30%.",
    badge: "Quality & Perf",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", level: "Intermediate", icon: "SiTypescript", color: "#3178C6" },
      { name: "SQL", level: "Advanced", icon: "SiPostgresql", color: "#4169E1" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Advanced", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", level: "Advanced", icon: "SiCss3", color: "#1572B6" },
      { name: "React.js", level: "Advanced", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", level: "Advanced", icon: "SiNextdotjs", color: "#FFFFFF" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "SiExpress", color: "#E2E8F0" },
      { name: "REST APIs", level: "Advanced", icon: "TbApi", color: "#06B6D4" },
      { name: "Authentication & CRUD", level: "Advanced", icon: "TbShieldLock", color: "#10B981" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql", color: "#336791" },
      { name: "MySQL", level: "Advanced", icon: "SiMysql", color: "#4479A1" },
      { name: "MongoDB", level: "Advanced", icon: "SiMongodb", color: "#47A248" },
      { name: "Database Design", level: "Advanced", icon: "TbDatabase", color: "#F59E0B" },
    ],
  },
  {
    category: "Tools & Core",
    skills: [
      { name: "Git", level: "Advanced", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", level: "Advanced", icon: "SiGithub", color: "#FFFFFF" },
      { name: "Postman", level: "Advanced", icon: "SiPostman", color: "#FF6C37" },
      { name: "Backend Testing & Debugging", level: "Advanced", icon: "TbTerminal2", color: "#EC4899" },
    ],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "IBEX Technologies And Promotion PLC (Hybrid)",
    icon: nexusLabs,
    iconBg: "#111827",
    date: "Feb 2023 – Jun 2025",
    location: "Addis Ababa, Ethiopia (Hybrid)",
    type: "Hybrid",
    points: [
      "Built backend features for a Bole Sub-City goods-distribution platform to track essential goods such as cooking oil and sugar.",
      "Implemented tracking and coordination features that helped cooperatives, government offices, and retailers monitor deliveries and maintain distribution accountability.",
      "Contributed 15+ REST API endpoints using Node.js and Express, integrated PostgreSQL and MongoDB, and delivered 10+ backend improvements through testing, debugging, and optimization.",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Debugging"],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Dan Energy",
    icon: danEnergy,
    iconBg: "#1e293b",
    date: "Mar 2022 – Oct 2022",
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    points: [
      "Delivered 10+ backend features using Node.js, Express, and SQL based on real project requirements.",
      "Built and maintained REST APIs and database functionality across 5+ application modules.",
      "Fixed bugs and optimized backend code, improving application performance by around 20%.",
    ],
    tech: ["Node.js", "Express.js", "SQL", "REST APIs", "Optimization"],
  },
];

export const education = [
  {
    degree: "Masters of Computer Science",
    institution: "University of Salzburg",
    location: "Salzburg, Austria",
    period: "Oct 2025 – Present",
    status: "In Progress",
    description:
      "Focus: Backend Development, Database Systems, Distributed Systems, and Software Engineering.",
    highlights: [
      "Backend Development & Distributed Systems",
      "Database Systems Architecture",
      "Software Engineering & Reliability",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Arba Minch University",
    location: "Arba Minch, Ethiopia",
    period: "Sep 2019 – Jul 2024",
    status: "Graduated with Distinction",
    cgpa: "CGPA: 3.86/4.0",
    description:
      "Relevant coursework in Software Architecture and Agile Development.",
    highlights: [
      "CGPA: 3.86 / 4.0",
      "Software Architecture",
      "Agile Development",
    ],
  },
];

export const projects = [
  {
    num: "01",
    name: "SPORTINGS – Sports Commerce Marketplace",
    title: "SPORTINGS – Sports Commerce Marketplace",
    category: "Sports Commerce Platform",
    role: "Backend Architect",
    metric: "40+ Endpoints | 25+ Tables | +30% Speed",
    description:
      "Built the backend of SPORTINGS, a large-scale sports-commerce platform using Node.js, Express, and SQL. Implemented 40+ REST API endpoints, managed 25+ database tables, and optimized queries for 30% faster performance across marketplace workflows.",
    highlights: [
      "Built the backend of SPORTINGS, a large-scale sports-commerce platform using Node.js, Express, and SQL",
      "Implemented 40+ REST API endpoints and managed 25+ database tables",
      "Optimized queries for 30% faster performance across marketplace workflows",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "SQL" },
      { name: "REST APIs" },
      { name: "Query Optimization" },
    ],
    tags: [
      { name: "Node.js", color: "text-accent" },
      { name: "Express.js", color: "text-slate-300" },
      { name: "SQL", color: "text-cyan-400" },
      { name: "Query Optimization", color: "text-emerald-400" },
    ],
    image: jobit,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
    source_code_link: "https://github.com/ZekariyasT",
  },
  {
    num: "02",
    name: "Elite Ethiopia eService – Freelance & Digital Marketplace",
    title: "Elite Ethiopia eService – Freelance & Digital Marketplace",
    category: "Full-Stack Marketplace Platform",
    role: "Full-Stack & Backend Engineer",
    metric: "4 User Groups | 7 Modules | Telebirr",
    description:
      "Created a full-stack marketplace using Next.js, connecting 4 user groups through 7 core modules. Implemented 20+ key features, including freelance hiring, service contracts, digital product sales, real-time messaging, Telebirr (Ethiopian mobile-money) payments, ratings, and dispute management.",
    highlights: [
      "Created a full-stack marketplace using Next.js connecting 4 user groups through 7 core modules",
      "Implemented 20+ key features: freelance hiring, service contracts, and digital product sales",
      "Integrated real-time messaging, Telebirr mobile-money payments, ratings, and dispute management",
    ],
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Telebirr Payments" },
      { name: "WebSockets" },
    ],
    tags: [
      { name: "Next.js", color: "text-accent" },
      { name: "React.js", color: "text-cyan-400" },
      { name: "Telebirr", color: "text-emerald-400" },
      { name: "Real-Time Messaging", color: "text-amber-400" },
    ],
    image: task,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
    source_code_link: "https://github.com/ZekariyasT",
  },
  {
    num: "03",
    name: "STEM Power Ethiopia – Website Backend",
    title: "STEM Power Ethiopia – Website Backend",
    category: "Backend Architecture & Optimization",
    role: "Backend Engineer",
    metric: "40+ Endpoints | MySQL Tables | +30% Speed",
    description:
      "Engineered high-performance website backend services for STEM Power Ethiopia. Designed and managed 20+ MySQL tables, delivered 40+ REST API endpoints, and optimized database queries for 30% performance boost.",
    highlights: [
      "Built 40+ REST API endpoints with Node.js and Express across multiple website modules",
      "Designed and managed 20+ MySQL tables supporting complex relational workflows",
      "Delivered 30% speedup via database query indexing and backend optimization",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
      { name: "REST APIs" },
    ],
    tags: [
      { name: "Node.js", color: "text-accent" },
      { name: "Express.js", color: "text-slate-300" },
      { name: "MySQL", color: "text-cyan-400" },
      { name: "Query Optimization", color: "text-emerald-400" },
    ],
    image: ESLTS,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
    source_code_link: "https://github.com/ZekariyasT",
  },
];

export const testimonials = [
  {
    testimonial:
      "Zack is an outstanding Software Developer, bringing innovation, efficiency, and top-quality solutions to the people!",
    name: "Tekletsadik Aknaw",
    designation: "CEO",
    company: "Nexus Labs",
    image: tekle,
  },
  {
    testimonial:
      "I've never met a backend developer who truly cares about systemic problem solving and performance like Zack does.",
    name: "Nahom Birhanu",
    designation: "COO",
    company: "FNet Solution",
    image: Nahom,
  },
  {
    testimonial:
      "Zack's expertise in database design and passion for clean APIs shine through in every project—an exceptional engineer!",
    name: "Eliyas Chane",
    designation: "Full Stack Developer",
    company: "EagleLion System Technology",
    image: Ela,
  },
];
