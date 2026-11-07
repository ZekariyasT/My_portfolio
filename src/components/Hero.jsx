import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaTerminal,
  FaPlay,
  FaCopy,
  FaCheck,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import { styles } from "../styles";
import { personalInfo } from "../constants";

const sampleEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/engineer/status",
    description: "Current status & profile summary",
    status: 200,
    latency: "14ms",
    response: {
      engineer: "Zekariyas Tesfaye Desta",
      role: "Backend Software Engineer",
      education: {
        degree: "M.Sc. in Computer Science",
        university: "University of Salzburg",
        status: "Active (Oct 2025 – Present)",
      },
      bachelor: {
        degree: "B.Sc. in Software Engineering",
        university: "Arba Minch University",
        cgpa: "3.86 / 4.0",
      },
      location: "Salzburg, Austria",
      openToOpportunities: true,
      languages: ["English (C1)", "German (A2)"],
    },
  },
  {
    method: "GET",
    endpoint: "/api/v1/tech-stack/metrics",
    description: "Core technologies & benchmark highlights",
    status: 200,
    latency: "21ms",
    response: {
      runtime: "Node.js & Express.js",
      databases: ["PostgreSQL", "MySQL", "MongoDB"],
      coreStrengths: [
        "REST API Architecture",
        "Complex Database Modeling",
        "Query Optimization (30% speedup)",
        "Postman Automation & Debugging",
      ],
      totalEndpointsDelivered: "55+",
      cacheStrategy: "In-memory & Indexing",
    },
  },
  {
    method: "POST",
    endpoint: "/api/v1/dispatch/cooperative",
    description: "Simulate Bole goods-distribution workflow",
    status: 201,
    latency: "32ms",
    response: {
      transactionId: "TX-BOLE-2024-9842",
      subCity: "Bole Sub-City, Addis Ababa",
      commodity: "Essential Goods (Oil & Sugar)",
      nodesCoordinated: ["Retail Cooperative #4", "Woreda Office 03"],
      databaseSync: {
        postgresRelational: "Committed (ACID)",
        mongoAuditLog: "Appended",
      },
      status: "DISPATCH_CONFIRMED",
    },
  },
];

const Hero = ({ onOpenResume }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeEp = sampleEndpoints[selectedEndpoint];

  const handleRunRequest = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 350);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(activeEp.response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern">
      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 radial-glow-cyan pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 radial-glow-indigo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Developer Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for Backend & Fullstack Roles
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Zekariyas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Tesfaye</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mt-2 flex items-center gap-2 flex-wrap">
                <span>Backend Software Engineer</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-cyan-400 font-mono text-base">Node.js / SQL / MongoDB</span>
              </h2>
            </div>

            {/* Summary description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Master's student in Computer Science at the <span className="text-slate-200 font-medium">University of Salzburg</span>. 
              I design resilient <span className="text-cyan-300 font-medium">RESTful APIs</span>, high-performance database architectures 
              (<span className="text-slate-200">PostgreSQL</span>, <span className="text-slate-200">MySQL</span>, <span className="text-slate-200">MongoDB</span>), 
              and production backend systems that scale cleanly.
            </p>

            {/* Quick Badges: Location & Degree */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <FaMapMarkerAlt className="text-rose-400 w-3.5 h-3.5" />
                <span>Salzburg, Austria</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <FaGraduationCap className="text-indigo-400 w-4 h-4" />
                <span>M.Sc. Computer Science (Salzburg)</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all group"
              >
                <span>View Engineering Work</span>
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>Get in Touch</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/60 hover:border-cyan-500/60 transition-all"
              >
                <FaFileAlt className="w-3.5 h-3.5" />
                <span>View CV / Resume</span>
              </button>
            </div>

            {/* Quick Links / Profiles */}
            <div className="flex items-center gap-4 pt-2 text-slate-400 text-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-xs font-mono">github.com/ZekariyasT</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Backend API Console (Replacing 3D Canvas) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0e1526] border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e1a] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <FaTerminal className="text-cyan-400 w-3 h-3" />
                    <span>api-gateway — zekariyas-backend</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyJson}
                    title="Copy Response JSON"
                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs"
                  >
                    {copied ? <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleRunRequest}
                    title="Send simulated request"
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 text-xs font-mono border border-cyan-500/30 transition-all"
                  >
                    <FaPlay className="w-2.5 h-2.5" />
                    <span>Execute</span>
                  </button>
                </div>
              </div>

              {/* Endpoint Selector Tabs */}
              <div className="flex border-b border-slate-800/80 bg-[#0c1222] p-1.5 gap-1 overflow-x-auto text-xs font-mono">
                {sampleEndpoints.map((ep, idx) => (
                  <button
                    key={ep.endpoint}
                    onClick={() => setSelectedEndpoint(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                      selectedEndpoint === idx
                        ? "bg-slate-800 text-white font-medium shadow-sm border border-slate-700"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        ep.method === "GET"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {ep.endpoint.replace("/api/v1", "")}
                    </span>
                  </button>
                ))}
              </div>

              {/* Request Status & Latency Banner */}
              <div className="px-4 py-2 bg-[#090d18] border-b border-slate-800/60 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">REQUEST:</span>
                  <span className="text-cyan-400 font-semibold">{activeEp.method}</span>
                  <span className="text-slate-300">{activeEp.endpoint}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-1.5 py-0.5 rounded text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {activeEp.status} OK
                  </span>
                  <span className="text-slate-400 text-[11px]">{activeEp.latency}</span>
                </div>
              </div>

              {/* Response Body (JSON Code block) */}
              <div className="p-4 bg-[#0a0e1c] max-h-[340px] overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed">
                {isRunning ? (
                  <div className="h-44 flex flex-col items-center justify-center gap-2 text-cyan-400">
                    <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono">Processing request through Express pipeline...</span>
                  </div>
                ) : (
                  <pre className="text-slate-300">
                    <code>
                      {JSON.stringify(activeEp.response, null, 2)
                        .split("\n")
                        .map((line, i) => {
                          // Simple keyword styling for JSON keys
                          const isKey = line.includes('":');
                          if (isKey) {
                            const [k, ...v] = line.split('":');
                            return (
                              <div key={i} className="hover:bg-slate-800/40 px-1 rounded">
                                <span className="text-cyan-400">{k}"</span>:
                                <span className="text-amber-300">{v.join('":')}</span>
                              </div>
                            );
                          }
                          return (
                            <div key={i} className="hover:bg-slate-800/40 px-1 rounded">
                              <span className="text-slate-400">{line}</span>
                            </div>
                          );
                        })}
                    </code>
                  </pre>
                )}
              </div>

              {/* Console Footer */}
              <div className="px-4 py-2.5 bg-[#080c16] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-500">{activeEp.description}</span>
                <span className="text-cyan-400/80">REST API • Node.js runtime</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
