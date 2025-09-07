"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll("a.nav-link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.replace("#", "");
        const section = document.getElementById(targetId);

        if (section) {
          const yOffset = -80; // adjust based on navbar height
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        >
          YT
        </Link>

        <div className="flex space-x-8 text-lg font-medium">
          <Link
            href="#about"
            className="nav-link text-gray-300 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="#education"
            className="nav-link text-gray-300 hover:text-white transition"
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="nav-link text-gray-300 hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="nav-link text-gray-300 hover:text-white transition"
          >
            Skills
          </Link>

          <Link
            href="#contact"
            className="nav-link text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
