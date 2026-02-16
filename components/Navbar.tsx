"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md shadow-md rounded-xl sm:rounded-2xl border border-gray-200">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex cursor-pointer select-none">
            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Boardly
            </h1>
            <span className="text-xl sm:text-2xl font-bold text-orange-600">
              .
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {["home", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-orange-600 text-sm font-medium transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/login"
              className="text-gray-700 hover:text-orange-600 text-sm transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 border-t border-gray-200" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-3">
            {["home", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-700 hover:text-orange-600 py-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <div className="pt-2 space-y-2">
              <Link
                href="/login"
                className="block text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="block text-center px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
