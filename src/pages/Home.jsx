import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import { personalInfo } from "../constants";

const Home = () => {
  const handleDownloadCV = () => {
    // Open a formatted print/save window of the CV or printable view
    window.print();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent font-medium tracking-wide">
              Backend Software Engineer
            </span>
            <h1 className="h1 mb-6 mt-2">
              Hello I'm <br />
              <span className="text-accent">{personalInfo.name}</span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80 text-base leading-relaxed">
              Master's student in Computer Science at the <strong className="text-white">University of Salzburg</strong>. 
              I specialize in robust backend architecture, scalable RESTful APIs, database design (PostgreSQL, MySQL, MongoDB), and distributed systems engineering.
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary transition-all duration-300 h-[56px] px-8 text-sm uppercase tracking-[2px] font-semibold gap-2 shadow-lg shadow-accent/10 hover:shadow-accent/30"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-5"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 shadow-md shadow-accent/10"
                />
              </div>
            </div>
          </div>

          {/* Avatar Photo with Signature Rotating Circle */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>

      {/* Bottom Counter Strip */}
      <Stats />
    </section>
  );
};

export default Home;
