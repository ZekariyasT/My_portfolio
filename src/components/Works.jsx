import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaServer } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  role,
  metric,
  description,
  highlights,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/80 to-[#0e1526]/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl flex flex-col justify-between group hover:-translate-y-1.5"
    >
      <div>
        {/* Project Thumbnail & Links */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-slate-800">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/90 text-cyan-300 border border-slate-700/80 backdrop-blur-sm">
              {metric}
            </span>
            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-cyan-500 text-slate-300 hover:text-black flex items-center justify-center transition-colors border border-slate-700/80"
              title="View Source on GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom role indicator */}
          <div className="absolute bottom-2.5 left-3 text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <FaServer className="text-cyan-400 w-3 h-3" />
            <span>{role}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Bullet Key Points */}
        {highlights && (
          <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
            {highlights.map((h, i) => (
              <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <FaCheck className="text-cyan-400 w-3 h-3 mt-0.5 shrink-0" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech tags & Footer action */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/60 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <a
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Explore Repository & Endpoints</span>
          <FaExternalLinkAlt className="w-2.5 h-2.5" />
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Real-World Impact</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10"
      >
        Production backend services, database architectures, and applied systems demonstrating API design, query optimization, and reliable backend engineering.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
