"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null); // 🔹 ref for form
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative w-full mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />

      {/* Heading */}
      <motion.h1
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-6xl tracking-tight
        bg-purple-500 bg-clip-text text-transparent mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {/* Left - Info */}
        <motion.div
          className="space-y-6 flex flex-col justify-center text-base sm:text-lg text-cyan-100"
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
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors w-full sm:w-10/12 md:w-6/12"
            >
              <Mail className="shrink-0" /> yingtong0106@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ying-tong-chow-6164a0239/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors w-full sm:w-10/12 md:w-6/12"
            >
              <Linkedin className="shrink-0" /> LinkedIn
            </a>
            <a
              href="https://github.com/CaedusSolo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-cyan-300 hover:text-pink-400 transition-colors w-full sm:w-10/12 md:w-6/12"
            >
              <Github className="shrink-0" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          ref={formRef} // 🔹 attach ref
          className="space-y-4 bg-black/40 backdrop-blur-md border border-cyan-400/40 
          rounded-2xl p-6 sm:p-8 md:p-10 text-cyan-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-left text-cyan-300 font-medium mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-left text-cyan-300 font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-left text-cyan-300 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full bg-black/30 border border-cyan-400/40 rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-bold text-lg rounded-lg 
            bg-purple-500 text-white 
            hover:shadow-[0_0_12px_rgba(255,0,255,0.6)] 
            transition-all duration-300 cursor-pointer disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success/Error Message */}
          {status === "success" && (
            <p className="text-green-400 text-center mt-3">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-3">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
