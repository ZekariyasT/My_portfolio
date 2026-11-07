import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Foundation</p>
        <h2 className={styles.sectionHeadText}>Education & Research.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10"
      >
        Advanced computer science theory and software engineering discipline backing practical backend systems development.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {education.map((item, idx) => (
          <motion.div
            key={item.degree}
            variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-[#0e1526]/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <FaGraduationCap className="text-cyan-400 w-6 h-6" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                    {item.status}
                  </span>
                  {item.cgpa && (
                    <span className="text-xs font-mono text-emerald-400 mt-1 font-bold">
                      {item.cgpa}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {item.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                <span className="text-cyan-400 font-semibold">{item.institution}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <FaMapMarkerAlt className="text-rose-400" />
                  {item.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <FaCalendarAlt className="text-slate-500" />
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Core Focus & Achievements
              </span>
              <ul className="space-y-1.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
