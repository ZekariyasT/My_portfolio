import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp, FaHeart } from "react-icons/fa";
import { personalInfo, navLinks } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080c16] border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                  ZT
                </div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Backend Software Engineer & Computer Science Master's student at the University of Salzburg. Architecting reliable RESTful APIs, high-performance database solutions, and distributed systems.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-400">
                Salzburg, Austria • Open to Opportunities
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px]">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">PHONE</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-cyan-400 hover:text-cyan-300 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-all"
                title="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
