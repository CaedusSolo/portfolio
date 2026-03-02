"use client";

export default function Timeline() {
  const education = [
    {
      year: "2024 - 2027",
      title: "Bachelor of Computer Science",
      place: "Multimedia University",
      details:
        "Specialized in Software Engineering, focusing on web development. Serving as Vice President at IT Society MMU.",
    },
    {
      year: "2023 - 2024",
      title: "Foundation in IT",
      place: "Multimedia University",
      details:
        "Studied fundamentals of programming and mathematics.",
    },
    {
      year: "2018 - 2023",
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
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-16 text-slate-900 dark:text-white">
        Education
      </h1>

      {/* Timeline Grid */}
      <div className="relative flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-9 md:gap-x-8">
        {education.map((item, index) => (
          <div key={index} className="flex md:contents">
            {/* LEFT SIDE ITEM */}
            {index % 2 === 0 ? (
              <>
                {/* Mobile: full width card / Desktop: Left col */}
                <div
                  className="md:col-span-4 w-full p-6 rounded-2xl 
                  bg-white dark:bg-slate-900 
                  border border-slate-200 dark:border-slate-800 
                  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {item.place}
                  </p>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {/* Connector + Dot (hidden on mobile) */}
                <div className="hidden md:flex relative col-span-1 justify-center items-center">
                  <div className="h-full w-0.5 bg-slate-300 dark:bg-slate-700 absolute left-1/2 -translate-x-1/2" />
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full z-20 ring-4 ring-slate-50 dark:ring-slate-950" />
                  <div
                    className="absolute h-0.5 bg-slate-300 dark:bg-slate-700 z-10"
                    style={{ width: "calc(50% + 2rem)", right: "50%" }}
                  />
                </div>

                <div className="hidden md:block col-span-4" />
              </>
            ) : (
              <>
                {/* Spacer Left */}
                <div className="hidden md:block col-span-4" />

                {/* Connector + Dot (hidden on mobile) */}
                <div className="hidden md:flex relative col-span-1 justify-center items-center">
                  <div className="h-full w-0.5 bg-slate-300 dark:bg-slate-700 absolute left-1/2 -translate-x-1/2" />
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full z-20 ring-4 ring-slate-50 dark:ring-slate-950" />
                  <div
                    className="absolute h-0.5 bg-slate-300 dark:bg-slate-700 z-10"
                    style={{ width: "calc(50% + 2rem)", left: "50%" }}
                  />
                </div>

                {/* Right col Card */}
                <div
                  className="md:col-span-4 w-full p-6 rounded-2xl 
                  bg-white dark:bg-slate-900 
                  border border-slate-200 dark:border-slate-800 
                  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {item.place}
                  </p>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
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
