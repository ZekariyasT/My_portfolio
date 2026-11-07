import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { personalInfo, coreCompetencies } from "../constants";
import { zeki } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLanguage,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaVial,
} from "react-icons/fa";

const competencyIcons = [FaCode, FaDatabase, FaNetworkWired, FaVial];

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Engineering Profile</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Main Intro Grid: Photo + Story */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Profile Card & Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="lg:col-span-4 w-full"
        >
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-slate-700 via-slate-800 to-[#0e1526] shadow-xl">
            <div className="bg-[#0e1526] rounded-[22px] p-6 flex flex-col items-center text-center">
              
              {/* Photo with subtle glowing ring */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-5 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                <img
                  src={zeki}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center text-xs font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-sm py-1 rounded-md border border-slate-700/60">
                  Zekariyas T. Desta
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-cyan-400 font-mono text-xs mt-1">
                {personalInfo.title}
              </p>

              {/* Quick Details Badges */}
              <div className="w-full mt-5 space-y-2.5 text-xs text-left">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/50 border border-slate-800 text-slate-300">
                  <FaMapMarkerAlt className="text-rose-400 w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/50 border border-slate-800 text-slate-300">
                  <FaGraduationCap className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{personalInfo.university} (M.Sc.)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/50 border border-slate-800 text-slate-300">
                  <FaLanguage className="text-emerald-400 w-3.5 h-3.5 shrink-0" />
                  <div className="flex gap-2">
                    {personalInfo.languages.map((l) => (
                      <span key={l.name} className="font-mono text-[11px] text-slate-300">
                        {l.name}: <strong className="text-cyan-300">{l.level.split(" ")[0]}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio & Approach */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="lg:col-span-8 flex flex-col space-y-6"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span>Philosophy & Backend Expertise</span>
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {personalInfo.summary}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              With a formal foundation in Software Engineering from Arba Minch University (CGPA 3.86/4.0) and current graduate studies in Computer Science at the University of Salzburg, I approach software challenges with an emphasis on data integrity, API modularity, and distributed system reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                <span>REST API Development & Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                <span>Database Design, Relational & NoSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                <span>Query Optimization & Profiling</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                <span>Secure Authentication & Middleware</span>
              </div>
            </div>
          </div>

          {/* 4 Core Competency Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => {
              const CompIcon = competencyIcons[idx % competencyIcons.length];
              return (
                <div
                  key={comp.title}
                  className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0e1526]/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <CompIcon className="text-cyan-400 w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {comp.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
