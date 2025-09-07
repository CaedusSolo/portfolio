"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

export default function Intro() {
  const [showH2, setShowH2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowH2(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-around items-center h-screen w-full mx-auto">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] z-[-1]" />

      {/* Left Section */}
      <div className="text-center md:text-left max-w-xl">
        {/* H1 */}
        <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            <Typewriter
              words={["Hello, I'm CaedusSolo"]}
              loop={1}
              cursor
              cursorStyle="▌"
              typeSpeed={70}
              deleteSpeed={0}
            />
          </span>
        </h1>

        {/* H2 */}
        {showH2 && (
          <h2 className="text-2xl md:text-3xl mt-4 font-body font-medium text-slate-200">
            <Typewriter
              words={["Software Engineer", "Student", "Learner"]}
              loop={Infinity}
              cursor
              cursorStyle="▌"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        )}

        {/* CTA Button */}
        <button className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all">
          View My Work
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
