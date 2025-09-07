"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section id="about" className="relative w-full mx-auto py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] z-[-1]" />

      {/* Heading */}
      <motion.h1
        className="text-center font-extrabold text-5xl md:text-6xl tracking-tight mb-8
        bg-purple-500 
        bg-clip-text text-transparent "
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content Box */}
      <motion.div
        className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light 
        text-gray-200 bg-black/40 rounded-2xl p-8 border border-cyan-400/30 
        shadow-[0_0_25px_rgba(0,255,255,0.2)] backdrop-blur-sm"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <p>
          Hi, I'm <span className="font-bold text-cyan-300">Ying Tong</span>, a
          2nd Year Computer Science student at Multimedia University,
          specializing in Software Engineering. I'm always eager to broaden my
          horizons and push myself to learn more as I navigate the journey that
          is programming.
        </p>
        <br />
        <p>
          I first picked up programming in{" "}
          <span className="text-purple-300">2021</span> when I was 16, and
          haven't looked back since. Since then, I've explored many different
          technologies and programming languages, and I've found myself leaning
          towards{" "}
          <span className="font-semibold text-pink-400">web development</span>.
        </p>
        <br />
        <p>
          In addition to my academics, I'm actively involved in{" "}
          <span className="text-cyan-300">extracurricular activities</span> at
          university, always striving for balance between learning and personal
          growth.
        </p>
        <br />
        <p>
          Outside of programming, you'll find me reading novels or enjoying
          rhythm games.
        </p>
      </motion.div>
    </section>
  );
}