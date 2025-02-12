import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-500 border-t border-gray-600 rounded-[20px]  px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-300 ">
            I am dedicated to providing the best products and services to the
            customers
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul>
            <li>
              <a href="#about" className="hover:underline text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:underline text-gray-300">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4 text-white ">Follow Me</h2>
          <ul className="flex space-x-4 justify-center items-center">
            <li className="flex justify-center items-center">
              <FaGithub className="text-gray-500" /> &nbsp; &nbsp;
              <a href="https://github.com/ZekariyasT">Github</a>
            </li>
            <li className="flex justify-center items-center">
              <FaLinkedin className="text-blue-500" /> &nbsp; &nbsp;
              <a href="https://www.linkedin.com/in/zekariyas-tesfaye-53a0791a6/">
                Linkedin
              </a>
            </li>
            <li className="flex justify-center items-center">
              <FaInstagram className="text-pink-500 flex" /> &nbsp; &nbsp;
              <a href="https://www.instagram.com/zekariyas_tesfaye/">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
        <p>&copy; Code with Zekariyas , All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
