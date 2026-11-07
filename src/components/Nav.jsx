import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={index}
            to={link.path}
            className={`${
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-white/80 hover:text-accent"
            } capitalize font-medium transition-all py-1`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
