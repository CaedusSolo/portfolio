"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      year: "2024 - 2027",
      title: "Bachelor of Computer Science (Hons)",
      place: "Multimedia University (MMU)",
      location: "Cyberjaya, Malaysia",
      details:
        "Specializing in Software Engineering. Actively involved in student leadership, currently serving as Vice President of the IT Society MMU. Focusing on software architectural design, advanced algorithms, and web application stacks.",
      badge: "Degree",
    },
    {
      year: "2023 - 2024",
      title: "Foundation in Information Technology",
      place: "Multimedia University (MMU)",
      location: "Cyberjaya, Malaysia",
      details:
        "Focused on basic programming principles, databases, mathematical methods, and systems thinking. Developed early passion for full-stack engineering.",
      badge: "Foundation",
    },
    {
      year: "2018 - 2023",
      title: "Secondary School",
      place: "SMJK Yu Hua Kajang",
      location: "Selangor, Malaysia",
      details:
        "Completed secondary education. Achieved 11As in Sijil Pelajaran Malaysia (SPM) 2022. Engaged in technical clubs and peer tutoring programs.",
      badge: "SPM",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="education" className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            Education
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Academic Background
          </p>
        </div>

        {/* Timeline Container (Left-Aligned) */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[49px] sm:-left-[65px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 shadow-sm z-10">
                <GraduationCap className="w-4.5 h-4.5" />
              </span>

              {/* Date Column (Desktop side-by-side or stacked on mobile) */}
              <div className="md:w-48 flex-shrink-0 flex flex-col items-start gap-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  {item.year}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base mt-1">
                      {item.place}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-150 dark:border-indigo-900/40">
                    {item.badge}
                  </span>
                </div>
                
                <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
