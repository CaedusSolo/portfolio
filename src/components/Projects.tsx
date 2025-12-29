import Image from "next/image";

const projects = [
  {
    title: "CodeNection Website",
    description:
      "Official website for CodeNection 2025 by IT Society MMU. Built with WordPress.",
    image: "/images/codenection.png",
    link: "https://itsocietymmu.com/codenection-2025/",
  },
  {
    title: "Take Flight CLI",
    description:
      "CLI boilerplate generator supporting popular frameworks with built-in auth templates.",
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
      "Web-based minigame for practicing basic Vim motion commands. React & Node.js.",
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
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
