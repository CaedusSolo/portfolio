"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 backdrop-blur-md shadow-lg border-t border-gray-800 py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <Link
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        >
          YT
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-lg font-medium">
          <Link href="#about" className="hover:text-pink-400 transition">
            About
          </Link>
          <Link href="#education" className="hover:text-pink-400 transition">
            Education
          </Link>
          <Link href="#projects" className="hover:text-pink-400 transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-pink-400 transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-pink-400 transition">
            Contact
          </Link>
          <Link
            href="https://google.com"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            Download CV
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-200 text-sm">
          © {new Date().getFullYear()} YT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}