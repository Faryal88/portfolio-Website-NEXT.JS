"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-gradient-to-r from-[#0e051f] to-[#571b52] z-10 p-3">
        <div className="justify-between px-4 lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-4 md:block">
              <Link
                href="/"
                className="text-3xl pl-1 text-white font-Poppins font-semibold"
              >
                <span className="text-pink-400">PORT</span>
                <span className="text-stone-100 font-Merienda font-semibold">FOLIO</span>
              </Link>
              <div className="md:hidden">
                <button
                  className="text-white hover:text-pink-400 absolute cursor-pointer top-4 right-4 w-8 h-8"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="text-xl" />
                  ) : (
                    <Bars3Icon className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block p-4 md:p-0" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mx-auto">
                <li className="pb-5 text-lg md:text-base text-stone-100 font-medium font-Merienda hover:text-pink-800 transition duration-300 py-2 md:px-4 text-center">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-base text-stone-100 font-medium font-Merienda hover:text-pink-800 transition duration-300 py-2 md:px-4 text-center">
                  <Link href="#about" onClick={() => setNavbar(false)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-base text-stone-100 font-medium font-Merienda hover:text-pink-800 transition duration-300 py-2 md:px-4 text-center">
                  <Link href="#project" onClick={() => setNavbar(false)}>
                    PROJECT
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-base text-stone-100 font-medium font-Merienda hover:text-pink-800 transition duration-300 py-2 md:px-4 text-center">
                  <Link href="#contact" onClick={() => setNavbar(false)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
