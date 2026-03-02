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
    { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
    { icon: "devicon-ruby-plain colored", label: "Ruby" },
    { icon: "devicon-rails-plain colored", label: "Ruby on Rails" },
    { icon: "devicon-python-plain colored", label: "Python" },
    { icon: "devicon-flask-original colored", label: "Flask" },
    { icon: "devicon-fastapi-plain colored", label: "FastAPI" },
    { icon: "devicon-cplusplus-plain", label: "C++" },
    { icon: "devicon-git-plain colored", label: "Git" },
    { icon: "devicon-supabase-plain colored", label: "Supabase" },
    { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
    { icon: "devicon-sqlite-plain colored", label: "SQLite" },
    { icon: "devicon-wordpress-plain", label: "WordPress" },
    { icon: "devicon-figma-plain colored", label: "Figma" },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900 transition-all duration-200"
          >
            <i className={`${skill.icon} text-5xl mb-4`}></i>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
