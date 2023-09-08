import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FooterSocial = () => {
  return (
    <div className="footer-sociol flex pr-8 md:pr-24 lg:pr-52">
      <a
        href="https://twitter.com"
        className="ml-5 w-5 cursor-pointer"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href="https://github.com"
        className="ml-5 w-5 cursor-pointer"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://facebook.com"
        className="ml-5 w-5 cursor-pointer"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com"
        className="ml-5 w-5 cursor-pointer"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FooterSocial;
