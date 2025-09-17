import React from "react";

export default function Skills() {
  const skills = [
    { icon: "devicon-javascript-plain colored", label: "JavaScript" },
    { icon: "devicon-typescript-plain colored", label: "TypeScript" },
    { icon: "devicon-nodejs-plain-wordmark colored", label: "Node.js" },
    { icon: "devicon-react-original colored", label: "React" },
    { icon: "devicon-nextjs-plain colored", label: "Next.js" },
    { icon: "devicon-express-original", label: "Express" },
    { icon: "devicon-tailwindcss-original colored", label: "TailwindCSS" },
    { icon: "devicon-python-plain colored", label: "Python" },
    { icon: "devicon-flask-original colored", label: "Flask" },
    { icon: "devicon-fastapi-plain colored", label: "FastAPI" },
    { icon: "devicon-cplusplus-plain colored", label: "C++" },
    { icon: "devicon-git-plain colored", label: "Git" },
    { icon: "devicon-supabase-plain colored", label: "Supabase" },
    { icon: "devicon-firebase-plain colored", label: "Firebase" },
    { icon: "devicon-sqlalchemy-plain", label: "SQLAlchemy" },
    { icon: "devicon-sqlite-plain colored", label: "SQLite" },
    { icon: "devicon-wordpress-plain", label: "WordPress" },
    { icon: "devicon-figma-plain colored", label: "Figma" },
    { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
    { icon: "devicon-neovim-plain colored", label: "Neovim" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full mx-auto px-8 md:px-20 flex flex-col justify-center items-center py-20 gap-y-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />

      {/* Heading */}
      <h1
        className="text-center font-extrabold text-5xl md:text-6xl tracking-tight 
        bg-purple-500 bg-clip-text text-transparent md:leading-[1.2] 
        "
      >
        Skills
      </h1>

      {/* Grid of skill cards */}
      <div className="w-full mx-auto pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl 
              bg-slate-800/50 shadow-md hover:shadow-cyan-400/40 
              transition-all duration-200"
            >
              <i
                className={`${skill.icon} text-6xl sm:text-7xl lg:text-8xl mb-3`}
              ></i>
              <p className="text-sm md:text-base text-slate-300 font-medium">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}