import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { styles } from "../styles";
import { navLinks, personalInfo } from "../constants";
import { logo } from "../assets";

const Navbar = ({ onOpenResume }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-lg">
                ZT
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[16px] font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
              {personalInfo.shortName} <span className="text-slate-400 font-normal">Tesfaye</span>
            </span>
            <span className="text-[11px] text-cyan-400/90 font-mono tracking-wider uppercase">
              Backend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-7">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-white"
                } text-[14px] transition-colors cursor-pointer tracking-wide`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-slate-800" />

          {/* Social and CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <FaFileAlt className="text-cyan-400 w-3 h-3" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700"
          >
            <FaFileAlt className="text-cyan-400" />
            <span>CV</span>
          </button>
          <button
            type="button"
            className="p-2 text-slate-300 hover:text-white"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {toggle ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="p-6 bg-[#0e1526]/95 backdrop-blur-xl border border-slate-800 absolute top-16 right-4 left-4 rounded-2xl shadow-2xl z-50 flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-cyan-400 font-semibold" : "text-slate-300"
                  } text-[15px] cursor-pointer py-1 border-b border-slate-800/60`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 hover:text-white"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setToggle(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
