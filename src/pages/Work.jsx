import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { jobit, task, ESLTS } from "../assets";

const projects = [
  {
    num: "01",
    category: "Backend & Database Architecture",
    title: "STEM Power Ethiopia – Website Backend",
    description:
      "Architected and delivered 40+ REST API endpoints with Node.js and Express across multiple modules. Designed and managed 20+ MySQL tables supporting thousands of records and complex relational entities, achieving 30% speedup via query optimization.",
    stack: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MySQL" }, { name: "Query Tuning" }],
    image: jobit,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
  },
  {
    num: "02",
    category: "REST API & MongoDB",
    title: "Dereja Tura Engineering – Corporate Platform",
    description:
      "Engineered 10+ high-efficiency REST API endpoints using Node.js and Express for engineering services and inquiry workflows. Managed 6+ MongoDB collections, slashing API response time by 20% through targeted code tuning.",
    stack: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }, { name: "REST APIs" }],
    image: task,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
  },
  {
    num: "03",
    category: "Civic Logistics Platform",
    title: "Bole Goods-Distribution Platform",
    description:
      "Coordinated essential goods distribution (cooking oil, sugar) for Bole Sub-City, connecting retail cooperatives, municipal woreda offices, and local retailers. Built 15+ secure REST endpoints with hybrid PostgreSQL & MongoDB integration.",
    stack: [{ name: "Node.js" }, { name: "Express.js" }, { name: "PostgreSQL" }, { name: "MongoDB" }],
    image: ESLTS,
    live: "https://github.com/ZekariyasT",
    github: "https://github.com/ZekariyasT",
  },
  {
    num: "04",
    category: "Applied Machine Learning & Backend",
    title: "ESLTS – Sign Language Translation",
    description:
      "AI-driven sign language translation system converting Ethiopian Sign Language (EthSL) hand gestures into real-time text, advancing accessibility for the hard-of-hearing community.",
    stack: [{ name: "Python" }, { name: "OpenCV" }, { name: "LSTM Deep Learning" }, { name: "APIs" }],
    image: ESLTS,
    live: "https://github.com/ZekariyasT/ESLTS",
    github: "https://github.com/ZekariyasT/ESLTS",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] items-center">
          
          {/* Left Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[85%]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Category */}
              <h2 className="text-[32px] sm:text-[38px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              <p className="text-accent text-sm font-semibold tracking-wider uppercase">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-sm font-mono text-accent">
                    {item.name}
                    {idx !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border border-white/20 my-2" />

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                  title="View Project"
                >
                  <BsArrowUpRight className="text-white text-2xl group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                  title="View GitHub Repository"
                >
                  <BsGithub className="text-white text-2xl group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="w-full xl:w-[50%] mb-8 xl:mb-0">
            <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#232329] group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Slider Prev / Next Controls (Amen Zelealem style) */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                <button
                  onClick={handlePrev}
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded shadow-md"
                  aria-label="Previous Project"
                >
                  <BsChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded shadow-md"
                  aria-label="Next Project"
                >
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;
