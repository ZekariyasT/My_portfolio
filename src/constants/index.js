import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  nexusLabs,
  danEnergy,
  carrent,
  jobit,
  tripguide,
  threejs,
  ESLTS,
  Nahom,
  tekle,
  Ela,
  covid,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "DanEnergy",
    icon: danEnergy,
    iconBg: "#383E56",
    date: "july 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "NexusLabs",
    icon: nexusLabs,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zack is an outstanding Full Stack Developer, bringing innovation, efficiency, and top-quality solutions to Nexus Labs!",
    name: "Tekletsadik Aknaw",
    designation: "CEO",
    company: "Nexus Labs",
    image: tekle,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Zack does.",
    name: "Nahom Birhanu",
    designation: "COO",
    company: "FNet Solution",
    image: Nahom,
  },
  {
    testimonial:
      "Zack's expertise and passion for development shine through in every project—an exceptional Full Stack Developer!",
    name: "Eliyas Chane",
    designation: "Full Stack Developer",
    company: "EagleLion System Technology",
    image: Ela,
  },
];

const projects = [
  {
    name: "ESLTS",
    description:
      "ESLTS is an AI-powered system that translates Ethiopian Sign Language (EthSL) into text, enhancing communication and accessibility for the Deaf community. 🚀",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ESLTS,
    source_code_link: "https://github.com/ZekariyasT/ESLTS",
  },
  {
    name: "Azo Gebeya",
    description:
      "A Next.js-based e-commerce platform tailored for the Ethiopian market, providing a seamless and secure online shopping experience.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "React js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ZekariyasT/azo-gebeya",
  },
  {
    name: "COVID-19 Tracker ",
    description:
      "Developed a Flutter-based mobile application to track COVID-19 statistics with real-time data. ",
    tags: [
      {
        name: "Fulutter",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/ZekariyasT/Covid19_tracker_master",
  },
];

export { services, technologies, experiences, testimonials, projects };
