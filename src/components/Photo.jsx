import React from "react";
import { motion } from "framer-motion";
import { zekiProfile } from "../assets";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Photo Container with Transparent Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[270px] h-[360px] xl:w-[440px] xl:h-[540px] relative z-10 flex items-end justify-center pointer-events-none drop-shadow-[0_20px_35px_rgba(0,255,153,0.15)]"
        >
          <img
            src={zekiProfile}
            alt="Zekariyas Tesfaye"
            className="w-full h-full object-contain object-bottom select-none filter contrast-105 brightness-105"
          />
        </motion.div>

        {/* Ambient Subtle Radial Glow behind avatar */}
        <div className="w-[260px] xl:w-[420px] h-[260px] xl:h-[420px] absolute rounded-full bg-accent/5 blur-2xl -z-10 pointer-events-none" />

        {/* Animated Rotating SVG Circle (Signature Amen Zelealem style) */}
        <motion.svg
          className="w-[300px] xl:w-[490px] h-[300px] xl:h-[490px] absolute z-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
