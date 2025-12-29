"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
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

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-20 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              I’m interested in freelance opportunities, internships, and
              networking. However, if you have other request or question, don’t
              hesitate to use the form.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:yingtong0106@gmail.com"
              className="flex items-center gap-4 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">yingtong0106@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ying-tong-chow-6164a0239/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/CaedusSolo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-center text-sm font-medium bg-green-50 dark:bg-green-900/20 py-2 rounded">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium bg-red-50 dark:bg-red-900/20 py-2 rounded">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
