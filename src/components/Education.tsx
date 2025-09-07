"use client";

export default function Timeline() {
  const education = [
    {
      year: "2024 - 2027",
      title: "Bachelor of Computer Science",
      place: "Multimedia University",
      details:
        "Specialized in Software Engineering, focusing on web development and AI.",
    },
    {
      year: "2023-2024",
      title: "Foundation in IT",
      place: "Multimedia University",
      details:
        "Studied fundamentals of programming, data structures, and mathematics.",
    },
    {
      year: "2018-2023",
      title: "High School",
      place: "SMJK Yu Hua Kajang",
      details: "Attained 11As in SPM 2022.",
    },
  ];

  return (
    <section id="education" className="relative w-full mx-auto py-20 px-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-zinc-900 opacity-95 z-[-1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)] animate-pulse z-[-1]" />

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 
      bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
      bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] tracking-tight"
      >
        Education
      </h2>

      {/* Timeline Grid */}
      <div className="relative flex flex-col space-y-16 md:space-y-0 md:grid md:grid-cols-9 md:gap-x-8">
        {education.map((item, index) => (
          <div key={index} className="flex md:contents">
            {/* LEFT SIDE ITEM */}
            {index % 2 === 0 ? (
              <>
                <div
                  className="col-span-4 p-6 rounded-2xl bg-black/40 border border-cyan-400/30 
                shadow-[0_0_25px_rgba(0,255,255,0.2)] backdrop-blur-sm text-gray-200 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="font-bold text-xl text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="text-purple-300">{item.place}</p>
                  <span className="text-pink-400 font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-2 text-gray-300">{item.details}</p>
                </div>

                {/* Connector + Dot */}
                <div className="relative col-span-1 flex justify-center items-center">
                  {/* Vertical Line */}
                  <div className="h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 absolute left-1/2 -translate-x-1/2" />
                  {/* Glowing Dot */}
                  <div className="absolute w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_18px_5px_rgba(0,255,255,0.5)] z-20" />
                  {/* Horizontal Connector */}
                  <div
                    className="absolute h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-10"
                    style={{ width: "calc(50% + 2rem)", right: "50%" }}
                  />
                </div>

                <div className="col-span-4" />
              </>
            ) : (
              <>
                <div className="col-span-4" />

                {/* Connector + Dot */}
                <div className="relative col-span-1 flex justify-center items-center">
                  <div className="h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 absolute left-1/2 -translate-x-1/2" />
                  <div className="absolute w-5 h-5 bg-pink-500 rounded-full shadow-[0_0_18px_5px_rgba(255,0,128,0.5)] z-20" />
                  <div
                    className="absolute h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-10"
                    style={{ width: "calc(50% + 2rem)", left: "50%" }}
                  />
                </div>

                <div
                  className="col-span-4 p-6 rounded-2xl bg-black/40 border border-purple-500/30 
                shadow-[0_0_25px_rgba(192,132,252,0.2)] backdrop-blur-sm text-gray-200 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="font-bold text-xl text-purple-300">
                    {item.title}
                  </h3>
                  <p className="text-cyan-300">{item.place}</p>
                  <span className="text-pink-400 font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-2 text-gray-300">{item.details}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
