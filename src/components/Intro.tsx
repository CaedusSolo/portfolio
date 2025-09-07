"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Intro() {
  const [showName, setShowName] = useState(false);
  const [showH3, setShowH3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const h3Timer = setTimeout(() => setShowH3(true), 4000);
    return () => clearTimeout(h3Timer);
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-around items-center h-screen w-full mx-auto">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] z-[-1]" />

      {/* Left Section */}
      <div className="text-center md:text-left max-w-xl">
        {/* H1 */}
        <h1 className="text-3xl md:text-6xl font-heading font-bold tracking-wide">
          <span className="bg-indigo-400 bg-clip-text text-transparent drop-shadow-md">
            <Typewriter
              words={["Hello, I'm"]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={0}
            />
          </span>
        </h1>

        {/* Reserve width so the image doesn’t shift */}
        <div className="h-14 md:h-16 mt-4 w-[250px] md:w-[350px]">
          {showName && (
            <h1 className="text-5xl md:text-6xl font-body font-bold text-cyan-400">
              <Typewriter
                words={["Ying Tong"]}
                loop={1}
                cursor={false}
                typeSpeed={70}
              />
            </h1>
          )}
        </div>

        {/* H3 */}
        <div className="h-12 md:h-16 mt-8 w-[250px] md:w-[350px]">
          {showH3 && (
            <h2 className="text-2xl md:text-3xl font-body font-medium text-slate-200">
              <Typewriter
                words={["Student", "Developer", "Learner"]}
                loop={Infinity}
                cursor
                cursorStyle="▌"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h2>
          )}
        </div>

        {/* CTA Button */}
        <button className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all cursor-pointer">
          <Link href="#projects">View My Work</Link>
        </button>
      </div>

      {/* Right Section - Profile */}
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
        <Image
          src="/images/Chow.jpg"
          alt="Profile Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
