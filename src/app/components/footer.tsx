import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0e051f] to-[#571b52] z-10 p-3">
      <div className="container mx-auto p-6 md:pt-16 flex flex-col md:flex-row md:justify-evenly md:space-x-10 items-center text-white">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="font-bold text-5xl text-stone-50">
            PORT<span className="text-pink-500 font-Merienda">FOLIO</span>
          </div>
          <div className="p-3 text-xs md:text-sm tracking-wide">
            <p className="font-sans font-light text-pink-200">
              &copy; 2024 | Faryal Abbasi@.
            </p>
          </div>
        </div>

        <div className="text-xl font-Merienda font-light mb-6 md:mb-0">
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <Link
                href="#home"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xl font-Merienda font-light">
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <Link
                href="https://www.linkedin.com/in/faryal-abbasi-6b8bab2a9/"
                target="_blank"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Faryal88"
                target="_blank"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://app.netlify.com/user/settings#profile"
                target="_blank"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                Netlify
              </Link>
            </li>
            <li>
              <Link
                href="https://www.npmjs.com/~faryalabbasi88"
                target="_blank"
                className="text-stone-200 hover:text-pink-800 transition-all duration-300"
              >
                Npm
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-8 md:pt-12 pb-12">
        <SocialIcon
          url="https://www.linkedin.com/in/faryal-abbasi-6b8bab2a9/"
          target="_blank"
          className="border-2 border-pink-600 rounded-full hover:scale-110 transition-transform duration-300"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://github.com/Faryal88"
          target="_blank"
          className="border-2 border-pink-600 rounded-full hover:scale-110 transition-transform duration-300"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://app.netlify.com/user/settings#profile"
          target="_blank"
          className="border-2 border-pink-600 rounded-full hover:scale-110 transition-transform duration-300"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://github.com/Faryal88"
          target="_blank"
          className="border-2 border-pink-600 rounded-full hover:scale-110 transition-transform duration-300"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </footer>
  );
};

export default Footer;
