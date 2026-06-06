"use client";
import Image from "next/image";
import { ExternalLink, Github, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ProPro",
    description:
      "A specialized portal facilitating project proposal submissions between students and academic supervisors. Streamlines validation workflows, progress updates, and notifications.",
    image: "/images/propro.png",
    link: "https://propro.click",
    github: "https://github.com/CaedusSolo", // default fallback or user git
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"],
    metric: "Used by 400+ students & lecturers",
  },
  {
    title: "Hacktrack MMU",
    description:
      "Dashboard managing member records and project updates for the MMU Hackerspace. Features a queue-safe background worker system that batch-processes updates to sync with Google Sheets APIs.",
    image: "/images/hacktrack.png",
    link: "https://hacktrackmmuv2.vercel.app/",
    github: "https://github.com/CaedusSolo",
    tech: ["React", "Next.js", "Supabase", "TailwindCSS", "REST APIs"],
    metric: "Executive management dashboard",
  },
  {
    title: "CodeNection 2025 Website",
    description:
      "Official website for CodeNection 2025 event organized by IT Society MMU. Highly optimized for traffic, securing peak performance under concurrency load.",
    image: "/images/codenection.png",
    link: "https://itsocietymmu.com/codenection-2025-archive/",
    tech: ["WordPress", "Custom CSS", "PHP", "Responsive Design"],
    metric: "3,000+ monthly visitors | 9k+ views",
  },
  {
    title: "Well of Wisdom",
    description:
      "A responsive bookstore e-commerce web application designed for university students, facilitating catalog navigation, cart management, and ordering.",
    image: "/images/wellOfWisdom.jpeg",
    link: "https://caedussolo.pythonanywhere.com/views/home",
    github: "https://github.com/CaedusSolo",
    tech: ["Python", "Flask", "SQLite", "Bootstrap", "HTML/JS"],
    metric: "E-Commerce logic mockup",
  },
  {
    title: "Take Flight CLI",
    description:
      "A fast boilerplate automation tool built as an NPM CLI. Generates production-ready skeletons for popular frameworks bundled with preset configurations.",
    image: "/images/takeFlight.png",
    link: "https://www.npmjs.com/package/take-flight-cli",
    github: "https://github.com/CaedusSolo",
    tech: ["Node.js", "CLI Tools", "Commander.js", "NPM Package"],
    metric: "CLI Automation package",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative">
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
            Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Project Image Frame */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full shadow-md hover:scale-110 hover:bg-indigo-650 hover:text-white dark:hover:bg-indigo-600 transition-all"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full shadow-md hover:scale-110 hover:bg-indigo-650 hover:text-white dark:hover:bg-indigo-600 transition-all"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Impact Badge */}
                {project.metric && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-650 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-full w-fit mb-3">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.metric}
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/20 dark:border-slate-700/30 rounded text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
