import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { personalInfo } from "../constants";

const socials = [
  { icon: <FaGithub />, path: personalInfo.github, title: "GitHub" },
  { icon: <FaLinkedinIn />, path: personalInfo.linkedin, title: "LinkedIn" },
  { icon: <FaEnvelope />, path: `mailto:${personalInfo.email}`, title: "Email" },
  { icon: <FaPhoneAlt />, path: `tel:${personalInfo.phone}`, title: "Phone" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target={item.path.startsWith("http") ? "_blank" : "_self"}
          rel="noreferrer"
          className={iconStyles}
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
