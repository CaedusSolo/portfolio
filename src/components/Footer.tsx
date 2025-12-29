"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link
          href="#home"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          YT
        </Link>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Chow Ying Tong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
