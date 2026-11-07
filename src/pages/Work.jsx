import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { projects } from "../constants";

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
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[18px]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[34px] font-bold leading-tight text-white hover:text-accent transition-all duration-500">
                {project.title}
              </h2>

              <p className="text-accent text-xs font-mono font-semibold tracking-wider uppercase">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2.5">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-sm font-mono text-accent">
                    {item.name}
                    {idx !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border border-white/20 my-2" />

              {/* Buttons & Indicators */}
              <div className="flex items-center justify-between">
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

                <div className="flex gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === idx ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
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

              {/* Slider Prev / Next Controls */}
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
