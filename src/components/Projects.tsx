import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "CodeNection Website",
    description:
      "The official website for CodeNection 2025, organized by IT Society MMU. Built with WordPress.",
    image: "/images/codenection.png",
    link: "https://itsocietymmu.com/codenection-2025/",
  },
  {
    title: "Take Flight CLI",
    description:
      "A CLI-based boilerplate generator that supports popular web frameworks and libraries, with built-in auth and database templates. Built with Node.js. Available as an NPM package.",
    image: "/images/takeFlight.png",
    link: "https://www.npmjs.com/package/take-flight-cli",
  },

  {
    title: "Well of Wisdom",
    description:
      "A bookstore web application for university students. Built with HTML, Bootstrap, Flask.",
    image: "/images/wellOfWisdom.jpeg",
    link: "https://caedussolo.pythonanywhere.com/views/home",
  },
  {
    title: "Vimulator",
    description:
      "A simple web-based minigame for practicing basic Vim motion commands. Built using React with Node.js backend.",
    image: "/images/vimulator.png",
    link: "https://vimulator.netlify.app/",
  },
  {
    title: "Quizzical",
    description: "A quizzical style web app, built with React and Express.js.",
    image: "/images/quizzical.png",
    link: "https://quizzical-with-react-cyt.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full mx-auto py-20 flex flex-col justify-center items-center gap-y-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-zinc-900 opacity-95 z-[-1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)] animate-pulse z-[-1]" />

      {/* Heading */}
      <h1
        className="text-center font-extrabold text-5xl md:text-6xl tracking-wide 
    leading-tight md:leading-[1.2]   
    bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
    bg-clip-text text-transparent 
    drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
      >
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-11/12 max-w-7xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden 
              bg-black/40 border border-cyan-400/20 backdrop-blur-sm 
              shadow-[0_0_20px_rgba(0,255,255,0.15)] 
              hover:shadow-[0_0_30px_rgba(0,255,255,0.35)] 
              transition-all duration-300 transform hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Below Image */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-cyan-300 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
