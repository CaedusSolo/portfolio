import Image from "next/image";

export default function Skills() {
  return (
    <section
      className="relative w-full mx-auto px-20 flex flex-col justify-center items-center py-20 gap-y-16"
      id="skills"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent)] z-[-1]" />

      {/* Heading */}
      <h1
        className="text-center font-extrabold text-5xl md:text-6xl tracking-wide 
        bg-purple-500
        bg-clip-text text-transparent md:leading-[1.2] 
        mb-12"
      >
        My Skills
      </h1>

      {/* Grid */}
      <div className="w-full mx-auto pb-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
          gap-12 sm:gap-16 lg:gap-20 text-center"
        >
          <i className="devicon-javascript-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-react-original colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-nextjs-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-express-original colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-tailwindcss-original colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-python-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-flask-original colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-fastapi-plain-wordmark colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-neovim-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-git-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
          <i className="devicon-cplusplus-plain colored text-7xl sm:text-8xl lg:text-9xl mx-auto"></i>
        </div>
      </div>
    </section>
  );
}
