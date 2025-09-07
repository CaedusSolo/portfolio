"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full mx-auto py-20 px-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] z-[-1]" />

      {/* Heading */}
      <motion.h1
        className="text-center font-extrabold text-5xl md:text-6xl tracking-wide 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent 
        mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Info */}
        <motion.div
          className="space-y-6 flex flex-col justify-center text-lg text-cyan-100"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="leading-relaxed">
            I’d love to hear from you! Whether you want to collaborate, ask a
            question, or just connect, feel free to reach out.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:yingtong0106@gmail.com"
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors"
            >
              <Mail /> yingtong0106@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ying-tong-chow-6164a0239/"
              target="_blank noreferrer"
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/CaedusSolo"
              target="_blank noreferrer"
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors"
            >
              <Github /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          className="space-y-4 bg-black/40 backdrop-blur-md border border-cyan-400/40 
          shadow-[0_0_30px_rgba(0,255,255,0.2)] rounded-2xl p-8 text-cyan-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("This doesn't work yet, will add it later");
          }}
        >
          <div>
            <label className="block text-left text-cyan-300 font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-left text-cyan-300 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-left text-cyan-300 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-lg rounded-lg 
            bg-purple-500
            text-white shadow-[0_0_20px_rgba(0,255,255,0.5)] 
            hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] 
            transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}