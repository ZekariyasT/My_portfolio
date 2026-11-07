import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "REST API Engineering",
    description:
      "Architecting secure, modular, and high-performance RESTful APIs using Node.js and Express. Implementing robust authentication (JWT/OAuth), CRUD operations, and middleware pipelines.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Database Design & Tuning",
    description:
      "Designing resilient schemas for PostgreSQL, MySQL, and MongoDB. Proven track record of accelerating query response times by 20% to 30% through index optimization and profiling.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Distributed Systems",
    description:
      "Leveraging advanced graduate research at the University of Salzburg to architect fault-tolerant, scalable, and decoupled backend services and civic data distribution workflows.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Backend Testing & QA",
    description:
      "Automated API testing, Postman test suites, root-cause debugging, and performance profiling ensuring high uptime and reliable application stability.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Top row */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                  {item.num}
                </div>
                <Link
                  to={item.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 shadow-lg"
                  title="Contact regarding this service"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-[34px] sm:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Divider */}
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
