"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section className="w-10/12 mx-auto py-12 space-y-12" id="about">
      {/* Heading */}
      <motion.h1
        className="text-center mt-4 font-bold text-6xl"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto text-lg leading-relaxed"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <p>
          Hi, I'm CaedusSolo, a 2nd Year Computer Science student at Multimedia
          University, specializing in Software Engineering. I'm always eager to
          broaden my horizons and push myself to learn more as I navigate the
          journey that is programming.
        </p>
        <br />
        <p>
          I first picked up programming in 2021 when I was 16, and haven't
          looked back since. Since then, I've explored many different
          technologies and programming languages, and I've found myself leaning
          towards web development.
        </p>
        <br />
        <p>
          In addition to having obtained excellent academic results, I'm
          actively involved in extracurricular activities at university.
        </p>
        <br />
        <p>
          When I'm not programming, I'm usually reading novels, or playing
          rhythm games.
        </p>
      </motion.div>

      {/* Timeline on its own row */}
      <div className="mt-12">
        <Timeline />
      </div>
    </section>
  );
}