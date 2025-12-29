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

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              href="#home"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 nav-link"
            >
              YT
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {[
                ["About", "#about"],
                ["Education", "#education"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="nav-link text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-sm"
              >
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="space-y-1 px-4 py-4">
              {[
                ["About", "#about"],
                ["Education", "#education"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="nav-link block rounded-md px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {label}
                </Link>
              ))}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-center rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16" />
    </>
  );
}
