import React from "react";
import { stats } from "../constants";
import { FaServer, FaDatabase, FaBolt, FaAward } from "react-icons/fa";

const statIcons = [FaServer, FaDatabase, FaBolt, FaAward];

const StatsBar = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 -mt-4 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1526]/90 border border-slate-800 shadow-xl backdrop-blur-md">
        {stats.map((stat, idx) => {
          const IconComponent = statIcons[idx % statIcons.length];
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl hover:bg-slate-800/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <IconComponent className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block truncate max-w-[150px]">
                  {stat.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBar;
