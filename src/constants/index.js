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
    { name: "English", level: "C1 Fluent" },
    { name: "German", level: "A2 Elementary" },
  ],
  summary:
    "I am a Master's student in Computer Science at the University of Salzburg. My main focus is backend development, and I work mostly with JavaScript, Node.js, Express, MongoDB, and SQL. I have built REST APIs, worked with databases, and handled backend logic for web applications. I like solving problems, learning by building projects, and improving my code as I gain more experience.",
};

export const stats = [
  { value: "55+", label: "REST Endpoints Built", detail: "Across enterprise & community platforms" },
  { value: "20+", label: "Relational & NoSQL Models", detail: "PostgreSQL, MySQL & MongoDB" },
  { value: "30%", label: "Query Optimization", detail: "Performance improvements achieved" },
  { value: "3.86", label: "Software Eng. CGPA", detail: "Top honours at Arba Minch University" },
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
      "Architecting modular, secure, and production-ready REST endpoints with Node.js and Express. Authentication, rate limiting, and robust input validation.",
    badge: "Backend Core",
  },
  {
    title: "Database Modeling & Tuning",
    description:
      "Designing complex relational schemas (PostgreSQL, MySQL) and flexible document models (MongoDB). Indexing, normalization, and 20-30% query speed improvements.",
    badge: "Data & Storage",
  },
  {
    title: "Distributed Systems & Logic",
    description:
      "Exploring distributed architectures, microservices, and backend reliability principles as part of ongoing Master's research at the University of Salzburg.",
    badge: "System Design",
  },
  {
    title: "Testing & Debugging",
    description:
      "Rigorous API verification with Postman, automated backend test suites, profiling bottlenecks, and rapid root-cause debugging for high uptime.",
    badge: "Quality Assurance",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", level: "Intermediate", icon: "SiTypescript", color: "#3178C6" },
      { name: "SQL (Postgres/MySQL)", level: "Advanced", icon: "SiPostgresql", color: "#4169E1" },
      { name: "Python", level: "Intermediate", icon: "SiPython", color: "#3776AB" },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "SiExpress", color: "#E2E8F0" },
      { name: "RESTful APIs", level: "Advanced", icon: "TbApi", color: "#06B6D4" },
      { name: "Authentication (JWT / CRUD)", level: "Advanced", icon: "TbShieldLock", color: "#10B981" },
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql", color: "#336791" },
      { name: "MySQL", level: "Advanced", icon: "SiMysql", color: "#4479A1" },
      { name: "MongoDB", level: "Advanced", icon: "SiMongodb", color: "#47A248" },
      { name: "Database Design & Indexing", level: "Advanced", icon: "TbDatabase", color: "#F59E0B" },
    ],
  },
  {
    category: "Tools & Core Practices",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "SiGit", color: "#F05032" },
      { name: "Postman", level: "Advanced", icon: "SiPostman", color: "#FF6C37" },
      { name: "Backend Testing & QA", level: "Proficient", icon: "TbChecklist", color: "#8B5CF6" },
      { name: "API Debugging & Profiling", level: "Advanced", icon: "TbTerminal2", color: "#EC4899" },
    ],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "IBEX Technologies And Promotion PLC",
    icon: nexusLabs,
    iconBg: "#111827",
    date: "Feb 2023 – Jun 2025",
    location: "Addis Ababa, Ethiopia",
    type: "Full-Time",
    points: [
      "Developed a goods-distribution platform for Bole Sub-City, connecting retail cooperatives, sub-city and woreda offices, and retailers to coordinate the distribution of essential goods such as cooking oil and sugar.",
      "Built 15+ REST API endpoints using Node.js and Express to support distribution workflows.",
      "Integrated PostgreSQL and MongoDB to manage relational and document-based data.",
      "Delivered 10+ backend improvements through debugging, API testing, and code optimization.",
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
      "Developed and delivered 10+ backend features based on real project requirements.",
      "Built and maintained REST APIs and database functionality across 5+ application modules.",
      "Fixed bugs and optimized backend code, improving application performance by around 20%.",
    ],
    tech: ["Node.js", "REST APIs", "Database Optimization", "Bug Fixing", "Git"],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Salzburg",
    location: "Salzburg, Austria",
    period: "Oct 2025 – Present",
    status: "In Progress",
    description:
      "Advanced graduate study focusing on Backend Development, Database Systems, Distributed Systems, and Software Engineering.",
    highlights: [
      "Distributed Systems Architecture",
      "Advanced Database Systems",
      "Software Engineering & Reliability",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Arba Minch University",
    location: "Arba Minch, Ethiopia",
    period: "Sep 2019 – Jul 2024",
    status: "Graduated with Distinction",
    cgpa: "CGPA: 3.86 / 4.0",
    description:
      "Comprehensive curriculum in computer science fundamentals, software architecture, object-oriented design, and agile methodologies.",
    highlights: [
      "CGPA: 3.86/4.0 (Top tier academic standing)",
      "Relevant Coursework: Software Architecture & Agile Development",
      "Capstone Project in AI & Applied Software Systems",
    ],
  },
];

export const projects = [
  {
    name: "STEM Power Ethiopia – Website Backend",
    role: "Backend Architect",
    metric: "40+ Endpoints | +30% Speed",
    description:
      "Engineered the full backend architecture for STEM Power Ethiopia across multiple modules. Designed and managed 20+ MySQL tables supporting thousands of records and complex relational entities, achieving 30% performance boost through query optimization.",
    highlights: [
      "Built 40+ REST API endpoints with Node.js and Express",
      "Designed and managed 20+ MySQL tables supporting thousands of records",
      "Improved API and database performance by 30% via query optimization",
    ],
    tags: [
      { name: "Node.js", color: "text-emerald-400" },
      { name: "Express.js", color: "text-slate-300" },
      { name: "MySQL", color: "text-cyan-400" },
      { name: "Query Optimization", color: "text-amber-400" },
    ],
    image: jobit,
    source_code_link: "https://github.com/ZekariyasT",
  },
  {
    name: "Dereja Tura Engineering – Website",
    role: "Backend Developer",
    metric: "10+ Endpoints | +20% Response Time",
    description:
      "Developed high-performance REST APIs for corporate engineering services, inquiries, and customer management. Built 6+ MongoDB collections and accelerated API response times by 20% through code optimization.",
    highlights: [
      "Developed 10+ REST API endpoints using Node.js and Express",
      "Built and managed 6+ database collections for content & customer inquiries",
      "Improved API response time by 20% through query and backend code tuning",
    ],
    tags: [
      { name: "Node.js", color: "text-emerald-400" },
      { name: "Express.js", color: "text-slate-300" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "API Optimization", color: "text-cyan-400" },
    ],
    image: task,
    source_code_link: "https://github.com/ZekariyasT",
  },
  {
    name: "Bole Goods-Distribution Platform",
    role: "Backend Software Engineer",
    metric: "15+ Endpoints | Multi-Tier Sync",
    description:
      "Municipal distribution coordination system for Bole Sub-City connecting retail cooperatives, sub-city/woreda offices, and local retailers to distribute essential goods (cooking oil, sugar) equitably.",
    highlights: [
      "Coordinated distribution workflows between retail co-ops, sub-city, and woreda offices",
      "Built 15+ secure REST API endpoints with Node.js & Express",
      "Hybrid data architecture with PostgreSQL and MongoDB",
    ],
    tags: [
      { name: "Node.js", color: "text-emerald-400" },
      { name: "PostgreSQL", color: "text-indigo-400" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "Workflow APIs", color: "text-purple-400" },
    ],
    image: ESLTS,
    source_code_link: "https://github.com/ZekariyasT",
  },
  {
    name: "ESLTS – Ethiopian Sign Language Translation",
    role: "Lead Machine Learning & Backend Developer",
    metric: "Computer Vision & Deep Learning",
    description:
      "AI-powered translation platform translating Ethiopian Sign Language (EthSL) into readable text, breaking communication barriers for the hard-of-hearing community in Ethiopia.",
    highlights: [
      "Trained LSTM deep learning models on custom EthSL gesture datasets",
      "Integrated OpenCV pipeline for real-time landmark extraction",
      "Interactive interface bridging accessibility and software engineering",
    ],
    tags: [
      { name: "Python", color: "text-yellow-400" },
      { name: "OpenCV", color: "text-red-400" },
      { name: "LSTM / AI", color: "text-pink-400" },
    ],
    image: ESLTS,
    source_code_link: "https://github.com/ZekariyasT/ESLTS",
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
