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
      className="relative w-full mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center gap-y-12 sm:gap-y-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />

      {/* Heading */}
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-6xl tracking-tight 
        leading-tight md:leading-[1.2] 
        bg-purple-500 
        bg-clip-text text-transparent"
      >
        Featured Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-7xl">
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
            <div className="relative w-full h-40 sm:h-52 md:h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Below Image */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}