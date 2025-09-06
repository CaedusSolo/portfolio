"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-600 sticky top-0">
      <div className="w-full flex justify-between items-center h-16 border-4 px-4 sm:px-6 lg:px-8">
        <Image src="/next.svg" width={80} height={80} alt="next logo" />
        <div className="flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
