import React from "react";
import {
  FaTimes,
  FaPrint,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";
import { personalInfo, experiences, education, projects, skillCategories } from "../constants";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Sticky Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0e1a]/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-mono">Zekariyas Tesfaye Desta</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <FaPrint className="text-cyan-400 w-3 h-3" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Close modal"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-200 font-sans max-h-[80vh] overflow-y-auto">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <h2 className="text-base sm:text-lg font-mono font-bold text-cyan-400 uppercase tracking-wider mt-1">
              {personalInfo.title}
            </h2>

            {/* Contact links strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <FaMapMarkerAlt className="text-rose-400" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-cyan-400 hover:underline"
              >
                <FaEnvelope />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400"
              >
                <FaPhoneAlt className="text-emerald-400" />
                {personalInfo.phone}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <FaGithub />
                github.com/ZekariyasT
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
              Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical & Transferable Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3">
              Technical & Transferable Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Languages:</span>
                <span className="font-semibold text-white">JavaScript, TypeScript, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Backend:</span>
                <span className="font-semibold text-white">Node.js, Express.js, REST APIs, Authentication, CRUD</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Databases:</span>
                <span className="font-semibold text-white">PostgreSQL, MySQL, MongoDB</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 font-mono block mb-1">Tools & Core:</span>
                <span className="font-semibold text-white">Git, GitHub, Postman, API Design, Debugging, Testing</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.company_name} className="border-l-2 border-cyan-500/40 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {exp.title}, <span className="text-cyan-400 font-semibold">{exp.company_name}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Key Projects
            </h3>
            <div className="space-y-4">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.name} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {proj.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {proj.metric}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div key={edu.degree} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1 text-xs">
                  <div className="font-bold text-white text-sm">{edu.degree}</div>
                  <div className="text-cyan-400 font-semibold">{edu.institution}</div>
                  <div className="text-slate-400 font-mono">{edu.period} • {edu.location}</div>
                  {edu.cgpa && (
                    <div className="text-emerald-400 font-mono font-semibold pt-1">
                      {edu.cgpa}
                    </div>
                  )}
                  <p className="text-slate-400 pt-1 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 uppercase">Languages: </span>
              <span className="text-slate-200">English: C1 Fluent</span> &nbsp;|&nbsp; 
              <span className="text-slate-200"> German: A2</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Salzburg, Austria
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
