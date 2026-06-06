"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative">
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
            Contact
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Work Together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Contact details */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Connect With Me
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                Have an internship opportunity, a project proposal, or just want to chat?
                Feel free to reach out via email or connect with me on social media.
              </p>
            </div>

            {/* Social List */}
            <div className="space-y-4 pt-4">
              {[
                {
                  href: "mailto:yingtong0106@gmail.com",
                  label: "Email",
                  value: "yingtong0106@gmail.com",
                  Icon: Mail,
                },
                {
                  href: "https://www.linkedin.com/in/ying-tong-chow-6164a0239/",
                  label: "LinkedIn",
                  value: "Ying Tong Chow",
                  Icon: Linkedin,
                },
                {
                  href: "https://github.com/CaedusSolo",
                  label: "GitHub",
                  value: "CaedusSolo",
                  Icon: Github,
                },
              ].map(({ href, label, value, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-sm transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-400 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white text-white dark:text-slate-900 font-bold text-sm transition-all disabled:opacity-75 disabled:cursor-not-allowed shadow-sm hover:shadow-md cursor-pointer"
              >
                {loading ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center text-xs font-semibold bg-green-50/50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-900/30 py-3 rounded-xl mt-4">
                  Message sent successfully! I will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center text-xs font-semibold bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 py-3 rounded-xl mt-4">
                  Failed to send message. Please email me directly instead.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
