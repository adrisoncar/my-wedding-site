"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll(); // Call on mount to set initial state based on scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Approximate height of the header, adjust if needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3 px-4 md:px-8 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a
            onClick={() => scrollToSection("hero")}
            className="text-2xl md:text-3xl font-elegant font-semibold text-black hover:text-gray-700 transition-colors"
          >
            M & A
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-3 md:space-x-5 items-center">
            <li>
              <a
                onClick={() => scrollToSection("hero")}
                className="cursor-pointer text-sm md:text-base text-black hover:text-gray-700 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("events")}
                className="cursor-pointer text-sm md:text-base text-black hover:text-gray-700 transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("gallery")}
                className="cursor-pointer text-sm md:text-base text-black hover:text-gray-700 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("rsvp")}
                className="cursor-pointer text-sm md:text-base text-black hover:text-gray-700 transition-colors"
              >
                RSVP
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

