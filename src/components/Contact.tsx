"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-10/12 mx-auto py-16" id="contact">
      <motion.h1
        className="text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-600">
            I’d love to hear from you! Whether you want to collaborate, ask a
            question, or just connect, feel free to reach out.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            <a
              href="mailto:yingtong0106@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <Mail /> yingtong0106@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ying-tong-chow-6164a0239/"
              target="_blank noreferrer"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/CaedusSolo"
              target="_blank noreferrer"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <Github /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          className="space-y-4 bg-white shadow-lg rounded-2xl p-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("This doesn't work yet, will add it later");
          }}
        >
          <div>
            <label className="block text-left text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}