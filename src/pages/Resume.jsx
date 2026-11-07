import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbApi, TbDatabase, TbTerminal2, TbShieldLock } from "react-icons/tb";
import { personalInfo, experiences, education } from "../constants";

const aboutData = {
  title: "About Me",
  description:
    "Master’s student in Computer Science at the University of Salzburg, focused on backend development with JavaScript, Node.js, Express, MongoDB, and SQL. Experienced in building REST APIs, database integration, and backend systems through real-world projects, including a freelance marketplace and a goods distribution platform.",
  info: [
    { fieldName: "Name", fieldValue: personalInfo.name },
    { fieldName: "Phone", fieldValue: personalInfo.phone },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Ethiopian 🇪🇹" },
    { fieldName: "Email", fieldValue: personalInfo.email },
    { fieldName: "Location", fieldValue: personalInfo.location },
    { fieldName: "Degree", fieldValue: "M.Sc. Computer Science" },
    { fieldName: "Languages", fieldValue: "English (C1), German (A2)" },
  ],
};

const experienceData = {
  title: "My Experience",
  description:
    "Delivered robust backend features, RESTful API endpoints, and database functionality across real-world commercial platforms and civic-scale distribution systems.",
  items: [
    {
      company: "IBEX Technologies And Promotion PLC (Hybrid)",
      position: "Software Engineer",
      duration: "Feb 2023 – Jun 2025",
      highlight:
        "Built backend features for a Bole Sub-City goods-distribution platform to track essential goods such as cooking oil and sugar. Implemented tracking & coordination features for cooperatives, government offices, and retailers. Contributed 15+ REST API endpoints using Node.js & Express, integrated PostgreSQL and MongoDB, and delivered 10+ backend improvements through testing, debugging, and optimization.",
    },
    {
      company: "Dan Energy",
      position: "Software Engineer Intern",
      duration: "Mar 2022 – Oct 2022",
      highlight:
        "Delivered 10+ backend features using Node.js, Express, and SQL based on real project requirements. Built and maintained REST APIs and database functionality across 5+ application modules. Fixed bugs and optimized backend code, improving application performance by around 20%.",
    },
  ],
};

const educationData = {
  title: "My Education",
  description:
    "Rigorous computer science graduate study at the University of Salzburg backed by a distinguished Bachelor's degree in Software Engineering.",
  items: [
    {
      institution: "University of Salzburg",
      degree: "Masters of Computer Science",
      duration: "Oct 2025 – Present",
      highlight:
        "Focus: Backend Development, Database Systems, Distributed Systems, and Software Engineering.",
    },
    {
      institution: "Arba Minch University",
      degree: "Bachelor of Science in Software Engineering",
      duration: "Sep 2019 – Jul 2024",
      highlight:
        "CGPA: 3.86 / 4.0 • Relevant coursework in Software Architecture and Agile Development.",
    },
  ],
};

const skillsData = {
  title: "My Skills",
  description:
    "Technical toolkit spanning backend API development, databases, frontend integration, and developer tooling.",
  skillList: [
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <TbApi />, name: "REST APIs" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <TbDatabase />, name: "Database Design" },
    { icon: <SiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiGit />, name: "Git & GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <TbTerminal2 />, name: "Backend Testing" },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          
          {/* Tab Navigation Buttons */}
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <button
              onClick={() => setActiveTab("experience")}
              className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium transition-all ${
                activeTab === "experience"
                  ? "bg-accent text-primary font-bold shadow-sm"
                  : "bg-[#27272c] text-white hover:text-accent"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium transition-all ${
                activeTab === "education"
                  ? "bg-accent text-primary font-bold shadow-sm"
                  : "bg-[#27272c] text-white hover:text-accent"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium transition-all ${
                activeTab === "skills"
                  ? "bg-accent text-primary font-bold shadow-sm"
                  : "bg-[#27272c] text-white hover:text-accent"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium transition-all ${
                activeTab === "about"
                  ? "bg-accent text-primary font-bold shadow-sm"
                  : "bg-[#27272c] text-white hover:text-accent"
              }`}
            >
              About me
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[70vh] w-full">
            
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experienceData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base leading-relaxed">
                  {experienceData.description}
                </p>
                <div className="h-[460px] overflow-y-auto pr-2 space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experienceData.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#232329] p-6 rounded-xl flex flex-col justify-between gap-2 border border-white/5 hover:border-accent/40 transition-colors"
                      >
                        <div>
                          <span className="text-accent text-sm font-semibold">
                            {item.duration}
                          </span>
                          <h4 className="text-xl font-bold max-w-[280px] text-white mt-1">
                            {item.position}
                          </h4>
                          <div className="flex items-center gap-3 my-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0" />
                            <p className="text-white/60 text-xs font-medium">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed border-t border-white/10 pt-2">
                          {item.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educationData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base leading-relaxed">
                  {educationData.description}
                </p>
                <div className="h-[460px] overflow-y-auto pr-2 space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationData.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#232329] p-6 rounded-xl flex flex-col justify-between gap-2 border border-white/5 hover:border-accent/40 transition-colors"
                      >
                        <div>
                          <span className="text-accent text-sm font-semibold">
                            {item.duration}
                          </span>
                          <h4 className="text-xl font-bold text-white mt-1">
                            {item.degree}
                          </h4>
                          <div className="flex items-center gap-3 my-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0" />
                            <p className="text-white/60 text-xs font-medium">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed border-t border-white/10 pt-2">
                          {item.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skillsData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base leading-relaxed">
                  {skillsData.description}
                </p>
                <div className="h-[460px] overflow-y-auto pr-2">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[25px]">
                    {skillsData.skillList.map((skill, index) => (
                      <li key={index} className="relative group">
                        <div className="w-full h-[130px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group-hover:bg-[#27272c] border border-white/5 group-hover:border-accent transition-all duration-300 gap-2 shadow-md">
                          <div className="text-5xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-xs font-mono text-white/80 group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* About Me Tab */}
            {activeTab === "about" && (
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base leading-relaxed">
                  {aboutData.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-12 max-w-[700px] mx-auto xl:mx-0">
                  {aboutData.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 border-b border-white/10 pb-2 text-sm"
                    >
                      <span className="text-white/60 font-mono text-xs uppercase min-w-[100px]">
                        {item.fieldName}
                      </span>
                      <span className="text-white font-medium truncate">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
