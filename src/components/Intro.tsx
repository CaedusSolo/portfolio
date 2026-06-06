"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row justify-center items-center min-h-[calc(100vh-80px)] w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20 gap-12 lg:gap-20 overflow-hidden"
    >


      {/* Grid pattern container overlay */}
      <div className="absolute inset-0 grid-bg -z-10 pointer-events-none opacity-60" />

      {/* Left Column: Intro Texts */}
      <motion.div
        className="text-center md:text-left flex-1 max-w-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to Internships & Collaboration
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
        >
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Ying Tong
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-200 mt-3 tracking-tight"
        >
          Software Engineer & CS Student
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-xl mx-auto md:mx-0"
        >
          I&apos;m a 2nd-year Computer Science student at Multimedia University,
          specializing in Software Engineering. I design and build high-performance,
          responsive, and meticulously crafted web experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 items-center"
        >
          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-md hover:shadow-indigo-500/25 hover:-translate-y-0.5 cursor-pointer"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Icons Quick links */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center md:justify-start gap-5 text-slate-500 dark:text-slate-400"
        >
          {[
            { Icon: Github, href: "https://github.com/CaedusSolo", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/ying-tong-chow-6164a0239/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:yingtong0106@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Column: Profile Image frame with animations */}
      <motion.div
        className="relative flex justify-center items-center w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] flex-shrink-0 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Sleek Border Frame */}
        <div className="relative w-full h-full rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-xl group cursor-pointer overflow-hidden">
          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900">
            <Image
              src="/images/Chow.jpg"
              alt="Chow Ying Tong"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
