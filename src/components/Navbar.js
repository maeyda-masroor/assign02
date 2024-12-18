"use client"
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from '../public/Logo.png';
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue text-white">
      <div className="container mx-auto p-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-3 items-center">
          {/* 1st Div: Logo */}
          <div className="flex items-center">
            <Image src={Logo}/>
          </div>

          {/* 2nd Div: Middle List or Toggle */}
          <div className="hidden md:flex justify-center space-x-8">
            <a href="#home" className="hover:text-gray-300">
              Product
            </a>
            <a href="#about" className="hover:text-gray-300">
              Solution
            </a>
            <a href="#services" className="hover:text-gray-300">
              Resources
            </a>

            <a href="#services" className="hover:text-gray-300">
              Pricing
            </a>
          </div>

          {/* 3rd Div: Right Content */}
          <div className="hidden md:flex justify-end items-center gap-4">
            <button className="bg-yellow-200 px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
            <button className="bg-lightblue px-4 py-2 rounded-md hover:bg-blue-600">
              Try Whitepace
            </button>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Toggle Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue mt-2 p-4 rounded-md space-y-4">
            <div>
            <a href="#home" className="hover:text-gray-300">
              Product
            </a>
            <a href="#about" className="hover:text-gray-300">
              Solution
            </a>
            <a href="#services" className="hover:text-gray-300">
              Resources
            </a>

            <a href="#services" className="hover:text-gray-300">
              Pricing
            </a>
            </div>
            <div>
            <button className="bg-yellow-200 px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
            <button className="bg-lightblue px-4 py-2 rounded-md hover:bg-blue-600">
              Try Whitepace
            </button>
            </div>
          </div>

        )}
      </div>
    </header>
  );
};

export default Navbar;
