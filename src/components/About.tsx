"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Ying Tong
              </span>
              , a 2nd Year Computer Science student at Multimedia University,
              specializing in Software Engineering. I'm always eager to broaden
              my horizons and push myself to learn more as I navigate the
              journey that is programming.
            </p>
            <p>
              I first picked up programming in{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                2021
              </span>{" "}
              when I was 16, and haven't looked back since. Since then, I've
              explored many different technologies and programming languages,
              and I've found myself leaning towards{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                web development
              </span>
              .
            </p>
            <p>
              In addition to my academics, I'm actively involved in
              extracurricular activities at university, always striving for
              balance between learning and personal growth.
            </p>
            <p>
              Outside of programming, you'll find me reading novels or enjoying
              rhythm games.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
