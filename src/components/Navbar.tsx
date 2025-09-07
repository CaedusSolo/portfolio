"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-600 sticky top-0 z-100">
      <div className="w-full flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <Image src="/next.svg" width={80} height={80} alt="next logo" />
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-indigo-400"
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector("#about");
              const yOffset = -80;
              const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-indigo-400">
            About
          </Link>
          <Link href="#projects" className="text-white hover:text-indigo-400">
            Projects
          </Link>
          <Link href="#skills" className="text-white hover:text-indigo-400">
            Skills
          </Link>
          <Link href="#contact" className="text-white hover:text-indigo-400">
            Contact
          </Link>
          <Link
            href="https://google.com"
            target="_blank"
            className="text-white hover:text-indigo-400"
          >
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
