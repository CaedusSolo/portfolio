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
    image: "/images/wellOfWisdom.jpg",
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
    <div className="w-10/12 flex flex-col justify-center items-center py-6 gap-y-10">
      <h1 className="text-center font-bold text-4xl mt-4">My Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
