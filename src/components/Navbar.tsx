"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a.nav-link"),
    ).filter((a) => a.getAttribute("href")?.startsWith("#"));

    const onClick = (e: MouseEvent) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href.slice(1);
      const section = document.getElementById(targetId);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      closeMenu();
    };

    anchors.forEach((a) => a.addEventListener("click", onClick));
    return () =>
      anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, [closeMenu]);

  // Close on Escape (mobile)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="#home"
              className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] nav-link"
            >
              YT
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm sm:text-base lg:text-lg font-medium">
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
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                Download CV
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden border-t border-white/10 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="space-y-1 px-4 pb-4 pt-2 text-base font-medium">
            <Link
              href="#about"
              className="nav-link block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              About
            </Link>
            <Link
              href="#education"
              className="nav-link block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="nav-link block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="nav-link block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="nav-link block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              Contact
            </Link>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
}
