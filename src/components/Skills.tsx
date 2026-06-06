"use client";
import { motion } from "framer-motion";
import { Code2, Monitor, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { icon: "devicon-typescript-plain colored", label: "TypeScript" },
        { icon: "devicon-javascript-plain colored", label: "JavaScript" },
        { icon: "devicon-python-plain colored", label: "Python" },
        { icon: "devicon-cplusplus-plain colored", label: "C++" },
        { icon: "devicon-ruby-plain colored", label: "Ruby" },
        { icon: "devicon-java-plain colored", label: "Java" },
      ],
    },
    {
      title: "Frontend Stack",
      icon: Monitor,
      skills: [
        { icon: "devicon-react-original colored", label: "React" },
        { icon: "devicon-nextjs-plain colored", label: "Next.js" },
        { icon: "devicon-tailwindcss-original colored", label: "TailwindCSS" },
        { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { icon: "devicon-nodejs-plain colored", label: "Node.js" },
        { icon: "devicon-express-original colored", label: "Express" },
        { icon: "devicon-rails-plain colored", label: "Ruby on Rails" },
        { icon: "devicon-flask-original colored", label: "Flask" },
        { icon: "devicon-fastapi-plain colored", label: "FastAPI" },
        { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
        { icon: "devicon-supabase-plain colored", label: "Supabase" },
        { icon: "devicon-sqlite-plain colored", label: "SQLite" },
        { icon: "devicon-spring-original colored", label: "Spring Boot" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: [
        { icon: "devicon-git-plain colored", label: "Git" },
        { icon: "devicon-heroku-original colored", label: "Heroku" },
        { icon: "devicon-vercel-original colored", label: "Vercel" },
        { icon: "devicon-google-plain colored", label: "Google Apps Script" },
        { icon: "devicon-wordpress-plain colored", label: "WordPress" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  } as const;

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative">
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
            Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tech Stack & Skills
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                variants={categoryVariants}
                className="bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-sm flex flex-col"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Sub-grid of Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-150/40 dark:border-slate-800/40 hover:bg-white dark:hover:bg-slate-900 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-sm transition-all duration-300 cursor-default"
                    >
                      <i
                        className={`${skill.icon} text-3xl mb-2 text-slate-400 group-hover:text-inherit transition-colors duration-300`}
                      />
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center tracking-wide leading-tight">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
