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
      title: "Secondary School",
      place: "SMJK Yu Hua Kajang",
      details: "Attained 11As in SPM 2022.",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-2]" />

      {/* Heading */}
      <h1
        className="text-center font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8
        bg-purple-500 bg-clip-text text-transparent"
      >
        Education
      </h1>

      {/* Timeline Grid */}
      <div className="relative flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-9 md:gap-x-8">
        {education.map((item, index) => (
          <div key={index} className="flex md:contents">
            {/* LEFT SIDE ITEM */}
            {index % 2 === 0 ? (
              <>
                {/* Mobile: full width card */}
                <div
                  className="md:col-span-4 w-full p-6 rounded-2xl bg-black/40 border border-cyan-400/30 
                  backdrop-blur-sm text-gray-200 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="text-purple-300">{item.place}</p>
                  <span className="text-pink-400 font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base">
                    {item.details}
                  </p>
                </div>

                {/* Connector + Dot (hidden on mobile) */}
                <div className="hidden md:flex relative col-span-1 justify-center items-center">
                  <div className="h-full w-1 bg-pink-500 absolute left-1/2 -translate-x-1/2" />
                  <div className="absolute w-5 h-5 bg-pink-500 rounded-full z-20" />
                  <div
                    className="absolute h-1 bg-pink-500 z-10"
                    style={{ width: "calc(50% + 2rem)", right: "50%" }}
                  />
                </div>

                <div className="hidden md:block col-span-4" />
              </>
            ) : (
              <>
                <div className="hidden md:block col-span-4" />

                {/* Connector + Dot (hidden on mobile) */}
                <div className="hidden md:flex relative col-span-1 justify-center items-center">
                  <div className="h-full w-1 bg-pink-500 absolute left-1/2 -translate-x-1/2" />
                  <div className="absolute w-5 h-5 bg-pink-500 rounded-full" />
                  <div
                    className="absolute h-1 bg-pink-500 z-10"
                    style={{ width: "calc(50% + 2rem)", left: "50%" }}
                  />
                </div>

                <div
                  className="md:col-span-4 w-full p-6 rounded-2xl bg-black/40 border border-purple-500/30 
                  backdrop-blur-sm text-gray-200 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-purple-300">
                    {item.title}
                  </h3>
                  <p className="text-cyan-300">{item.place}</p>
                  <span className="text-pink-400 font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base">
                    {item.details}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}