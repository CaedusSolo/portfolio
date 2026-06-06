"use client";
import { motion } from "framer-motion";
import { User, MapPin, BookOpen, Gamepad2, Award, Calendar } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  } as const;

  const metadata = [
    { Icon: User, label: "Current Role", value: "2nd Year CS Student @ MMU" },
    { Icon: MapPin, label: "Location", value: "Selangor, Malaysia" },
    { Icon: Calendar, label: "Coding Since", value: "2021 (Age 16)" },
    { Icon: BookOpen, label: "Interests", value: "Novels, Tech Blogs" },
    { Icon: Gamepad2, label: "Hobbies", value: "Rhythm Games" },
    { Icon: Award, label: "Focus", value: "Full Stack Web Development" },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none -z-10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Journey & Background
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Narrative Bio */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light"
          >
            <p>
              Hello! I&apos;m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Ying Tong
              </span>
              , a Computer Science undergraduate at Multimedia University (MMU),
              specializing in Software Engineering. I navigate codebases with a focus on
              clean structure, modularity, and readable logic.
            </p>
            <p>
              My journey began in{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                2021
              </span>{" "}
              when I wrote my first line of code at 16. What started as simple curiosity quickly
              evolved into a dedicated passion for building interactive systems, ultimately leading
              me to focus on modern web engineering.
            </p>
            <p>
              Beyond coding, I place a strong emphasis on leadership and community involvement. Serving
              as the{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Vice President at IT Society MMU
              </span>{" "}
              allows me to collaborate on organizing technical initiatives while maintaining a healthy
              academic-life balance.
            </p>
          </motion.div>

          {/* Right: Quick Metadata Cards (Skimmable Grid) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              Quick Facts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {metadata.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 h-10 w-10 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
