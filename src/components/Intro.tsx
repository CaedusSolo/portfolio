"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Intro() {
  const [showName, setShowName] = useState(false);
  const [showH3, setShowH3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 500); // Sped up for snappier feel
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const h3Timer = setTimeout(() => setShowH3(true), 1500);
    return () => clearTimeout(h3Timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row justify-center items-center min-h-[calc(100vh-4rem)] w-full max-w-7xl mx-auto px-6 gap-12"
    >
      {/* Left Section */}
      <div className="text-center md:text-left flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          <span className="block text-slate-500 dark:text-slate-400 text-2xl md:text-3xl mb-2 font-medium">
            Hello, I&apos;m
          </span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {showName ? (
              "Ying Tong"
            ) : (
              <span className="opacity-0">Ying Tong</span>
            )}
          </span>
        </h1>

        <div className="h-8 md:h-10 mt-2">
          {showH3 && (
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
              <Typewriter
                words={["Student", "Developer", "Learner"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
          )}
        </div>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
          Software Engineering student passionate about building clean,
          efficient web applications and exploring new technologies.
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href="#contact"
            className="px-6 py-3 text-base font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
          >
            Contact Me
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-base font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right Section - Profile */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0">
        <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-full transform translate-x-3 translate-y-3" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
          <Image
            src="/images/Chow.jpg"
            alt="Profile Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
