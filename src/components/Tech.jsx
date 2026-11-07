import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { skillCategories } from "../constants";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiLinux,
  SiDocker,
} from "react-icons/si";
import {
  TbApi,
  TbShieldLock,
  TbDatabase,
  TbChecklist,
  TbTerminal2,
  TbServerCog,
} from "react-icons/tb";

const iconMap = {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiLinux,
  SiDocker,
  TbApi,
  TbShieldLock,
  TbDatabase,
  TbChecklist,
  TbTerminal2,
  TbServerCog,
};

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Stack & Tooling</p>
        <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed"
      >
        A modern, battle-tested toolset honed through production backend development, database architecture, and computer science research.
      </motion.p>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid by Category */}
      <div className="mt-8 space-y-8">
        {filteredCategories.map((catGroup, groupIdx) => (
          <motion.div
            key={catGroup.category}
            variants={fadeIn("up", "spring", groupIdx * 0.1, 0.6)}
            className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-5 border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{catGroup.category}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {catGroup.skills.length} competencies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {catGroup.skills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || TbServerCog;
                return (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-[#0e1526]/80 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        <IconComponent style={{ color: skill.color }} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {skill.level}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-white">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Highlights banner */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0e1526] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">Focus on Performance & Scalability</h4>
          <p className="text-xs text-slate-400 mt-1">
            Proven track record of optimizing SQL queries and indexing MongoDB collections to improve API response time by 20% to 30%.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-xs font-mono">
            +30% Query Speed
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 text-xs font-mono">
            Postman Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
