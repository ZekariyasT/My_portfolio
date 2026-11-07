import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Zeki<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[44px] px-6">
              Hire Me
            </button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
