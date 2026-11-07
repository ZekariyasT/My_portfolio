import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FaQuoteLeft } from "react-icons/fa";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.2, 0.75)}
    className="p-7 rounded-3xl bg-gradient-to-b from-slate-900/80 to-[#0e1526]/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
  >
    <div>
      <FaQuoteLeft className="text-cyan-500/30 text-3xl mb-4" />
      <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
        "{testimonial}"
      </p>
    </div>

    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
      />
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm">{name}</span>
        <span className="text-slate-400 text-xs">
          {designation} at <span className="text-cyan-400">{company}</span>
        </span>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Colleague & Client Endorsements</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10"
      >
        Feedback from team leads, engineering executives, and collaborators who have worked with me.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
