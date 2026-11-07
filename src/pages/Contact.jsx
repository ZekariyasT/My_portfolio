import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { personalInfo } from "../constants";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: personalInfo.phone,
    link: `tel:${personalInfo.phone}`,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: personalInfo.location,
    link: "#",
  },
  {
    icon: <BsGithub />,
    title: "GitHub",
    description: "github.com/ZekariyasT",
    link: personalInfo.github,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "REST API Engineering",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    emailjs
      .send(
        "service_trh3041",
        "template_gxn01de",
        {
          from_name: `${form.firstname} ${form.lastname}`.trim(),
          to_name: personalInfo.name,
          from_email: form.email,
          to_email: personalInfo.email,
          message: `Phone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
        },
        "9lvr5dkOC85mK2mwS"
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({
            type: "success",
            text: "Message sent successfully! I will reply to you as soon as possible.",
          });
          setForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "REST API Engineering",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFeedback({
            type: "error",
            text: `Send failed. Please email me directly at ${personalInfo.email}`,
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 sm:p-10 bg-[#27272c] rounded-xl shadow-xl"
            >
              <h3 className="text-3xl sm:text-4xl text-accent font-bold">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Whether you have an open backend engineering position, a project proposal, or wish to connect, send me a message and I will get back to you promptly.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstname"
                  required
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-sm text-white placeholder:text-white/60 outline-none transition-colors"
                />
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-sm text-white placeholder:text-white/60 outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-sm text-white placeholder:text-white/60 outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-sm text-white placeholder:text-white/60 outline-none transition-colors"
                />
              </div>

              {/* Service Select Dropdown */}
              <div className="relative">
                <label className="block text-xs font-mono text-white/60 mb-2">
                  Select a service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="flex h-[48px] w-full rounded-md border border-white/10 bg-primary px-4 text-sm text-white/90 focus:border-accent outline-none"
                >
                  <option value="REST API Engineering" className="bg-[#27272c] text-white">
                    REST API Engineering
                  </option>
                  <option value="Database Design & Query Tuning" className="bg-[#27272c] text-white">
                    Database Design & Query Tuning
                  </option>
                  <option value="Distributed Systems & Microservices" className="bg-[#27272c] text-white">
                    Distributed Systems & Microservices
                  </option>
                  <option value="Backend Testing & Debugging" className="bg-[#27272c] text-white">
                    Backend Testing & Debugging
                  </option>
                </select>
              </div>

              {/* Textarea */}
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="flex min-h-[140px] w-full rounded-md border border-white/10 bg-primary px-4 py-4 text-sm text-white placeholder:text-white/60 focus:border-accent outline-none transition-colors resize-none"
              />

              {feedback && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono ${
                    feedback.type === "success"
                      ? "bg-accent/20 border border-accent text-accent"
                      : "bg-rose-950/60 border border-rose-700 text-rose-300"
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold bg-accent text-primary hover:bg-accent-hover h-[48px] px-8 transition-colors max-w-[180px] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          {/* Contact Details List */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full max-w-[420px]">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[26px] shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs font-mono uppercase">
                      {item.title}
                    </p>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-base sm:text-lg font-semibold text-white hover:text-accent transition-colors block truncate"
                    >
                      {item.description}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
