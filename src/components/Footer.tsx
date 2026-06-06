"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <Link
          href="#home"
          className="text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Ying Tong<span className="text-indigo-500">.</span>
        </Link>

        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-light">
          © {new Date().getFullYear()} Chow Ying Tong. Designed & Built with care.
        </p>
      </div>
    </footer>
  );
}
