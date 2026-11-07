import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { personalInfo } from "../constants";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaFileAlt,
} from "react-icons/fa";

const Contact = ({ onOpenResume }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // Using existing EmailJS credentials
    emailjs
      .send(
        "service_trh3041",
        "template_gxn01de",
        {
          from_name: form.name,
          to_name: personalInfo.name,
          from_email: form.email,
          to_email: personalInfo.email,
          message: `Subject: ${form.subject}\n\n${form.message}`,
        },
        "9lvr5dkOC85mK2mwS"
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you for reaching out! Your message was sent successfully.",
          });
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMessage({
            type: "error",
            text: "Direct message send failed. Please email me directly at " + personalInfo.email,
          });
        }
      );
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10"
      >
        Whether you have an engineering role, a backend consulting opportunity, or simply want to connect, my inbox is always open.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0e1526]/90 border border-slate-800 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              Ready for New Opportunities
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Let's build reliable software together.
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
            Available for Backend Engineering, API Architecture, Database Systems, and Fullstack roles in Austria, Europe, or remotely.
          </p>

          {/* Contact Details List */}
          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-cyan-400 w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <FaCheck className="text-emerald-400 w-3.5 h-3.5" />
                ) : (
                  <FaCopy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-emerald-400 w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">Direct Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? (
                  <FaCheck className="text-emerald-400 w-3.5 h-3.5" />
                ) : (
                  <FaCopy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-rose-400 w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Current Location</div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={onOpenResume}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <FaFileAlt className="text-cyan-400" />
              <span>View Full CV</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-400 hover:text-cyan-300 transition-all"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0e1526]/90 border border-slate-800 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Fill in the form below and I will respond to your inquiry promptly.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-[#0a0e1c] border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Your Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@company.com"
                  className="w-full bg-[#0a0e1c] border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Backend Developer Role / Project Inquiry"
                className="w-full bg-[#0a0e1c] border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Your Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={5}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full bg-[#0a0e1c] border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition-colors resize-none"
              />
            </div>

            {statusMessage && (
              <div
                className={`p-3 rounded-xl text-xs font-mono ${
                  statusMessage.type === "success"
                    ? "bg-emerald-950/60 border border-emerald-800 text-emerald-300"
                    : "bg-rose-950/60 border border-rose-800 text-rose-300"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Dispatching Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
