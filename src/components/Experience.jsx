import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative pl-8 sm:pl-10 pb-12 last:pb-2 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[2px] bg-slate-800 group-last:hidden" />

      {/* Timeline Node Icon */}
      <div className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/80 to-[#0e1526]/80 border border-slate-800 group-hover:border-slate-700 transition-all shadow-xl backdrop-blur-sm">
        
        {/* Header: Title, Company, Date */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {experience.title}
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                {experience.type}
              </span>
            </div>
            <p className="text-cyan-400 font-semibold text-sm mt-0.5">
              {experience.company_name}
            </p>
          </div>

          <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <FaCalendarAlt className="text-cyan-400" />
              {experience.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <FaMapMarkerAlt className="text-rose-400" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5 mb-5">
          {experience.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <FaCheckCircle className="text-cyan-400/80 w-3.5 h-3.5 mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career Milestones</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10"
      >
        Delivering high-reliability backend microservices, database architectures, and civic-scale distribution workflows in collaborative engineering environments.
      </motion.p>

      {/* Experience list */}
      <div className="mt-8 relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company_name}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
