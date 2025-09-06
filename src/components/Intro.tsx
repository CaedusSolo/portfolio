"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

export default function Intro() {
  const [showH2, setShowH2] = useState(false);

  useEffect(() => {
    // Match timing with h1 typing (words.length × typeSpeed + a buffer)
    const timer = setTimeout(() => setShowH2(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-9/12 flex justify-between items-center">
      <div>
        {/* H1 */}
        <h1 className="text-4xl">
          <span className="text-indigo-600">
            <Typewriter
              words={["Hello, I'm CaedusSolo"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={0}
            />
          </span>
        </h1>

        {/* H2 */}
        {showH2 && (
          <h2 className="text-2xl mt-2">
            <span className="text-indigo-600">
              <Typewriter
                words={["Software Engineer", "Student", "Learner"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
        )}
      </div>

      <div className="relative w-40 h-40 sm:w-60 sm:h-60">
        <Image
          src="/images/Chow.jpg"
          alt="Profile Image"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
