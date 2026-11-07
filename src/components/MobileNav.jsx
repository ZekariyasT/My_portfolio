import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center text-[32px] text-accent p-1"
        aria-label="Open menu"
      >
        <CiMenuFries />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-[300px] h-full bg-[#1c1c22] p-8 flex flex-col justify-between shadow-2xl border-l border-white/10">
            {/* Top Close */}
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setOpen(false)}>
                <h1 className="text-3xl font-semibold text-white">
                  Zeki<span className="text-accent">.</span>
                </h1>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-accent p-1 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 items-center">
              {links.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`${
                      isActive
                        ? "text-accent border-b-2 border-accent"
                        : "text-white/80 hover:text-accent"
                    } text-xl capitalize font-medium transition-all py-1`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Hire Me CTA at bottom of drawer */}
            <div className="pt-6">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold bg-accent text-primary hover:bg-accent-hover h-[44px] px-6 transition-colors">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
