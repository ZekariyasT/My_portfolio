import {
  mobile,
  backend,
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
  jobit,
  task,
  threejs,
  ESLTS,
  Nahom,
  tekle,
  Ela,
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
    title: "Frontend ",
    icon: mobile,
  },
  {
    title: "Backend ",
    icon: backend,
  },
  // {
  //   title: "Flutter Developer",
  //   icon: creator,
  // },
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
    title: "Backend developer ",
    company_name: "DanEnergy",
    icon: danEnergy,
    iconBg: "#383E56",
    date: "july 2023 - November 2023",
    points: [
      "Developing and maintaining Mobile applications using React Native and other related technologies.",
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
      "Zack is an outstanding Software Developer, bringing innovation, efficiency, and top-quality solutions to the people!",
    name: "Tekletsadik Aknaw",
    designation: "CEO",
    company: "Nexus Labs",
    image: tekle,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their problem solving like Zack does.",
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
      "ESLTS is an AI-powered system that translates Ethiopian Sign Language (EthSL) into text, enhancing communication and accessibility for the hard-of-hearing community. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV ",
        color: "green-text-gradient",
      },
      {
        name: "LSTM",
        color: "pink-text-gradient",
      },
    ],
    image: ESLTS,
    source_code_link: "https://github.com/ZekariyasT/ESLTS",
  },
  {
    name: "AMU Long distance Student Managment System",
    description:
      "Long-Distance Student Management System for Arba Minch University to facilitate seamless interaction between students, instructors, and administrators.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Express js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ZekariyasT/Arba-Minch-University-Long-Distance-Student-Management-Website-2021-",
  },
  {
    name: "Field Worker App",
    description:
      "The Field Worker App is a mobile application designed to enhance efficiency in on-field operations by providing real-time task management, GPS tracking, and seamless communication between supervisors and field workers. ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node js ",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/ZekariyasT/FieldWorker",
  },
];

export { services, technologies, experiences, testimonials, projects };
