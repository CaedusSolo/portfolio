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
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

      <div className="relative flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-9 md:gap-x-8">
        {education.map((item, index) => (
          <div key={index} className="flex md:contents">
            {/* Left side */}
            {index % 2 === 0 ? (
              <>
                <div className="col-span-4 p-4 rounded-xl shadow-md bg-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.place}</p>
                  <span className="text-indigo-600 font-bold">{item.year}</span>
                  <p className="mt-2 text-gray-700">{item.details}</p>
                </div>
                {/* Line & Dot & Connector */}
                <div className="relative col-span-1 flex justify-center items-center">
                  <div className="h-full w-1 bg-indigo-600 absolute left-1/2 -translate-x-1/2"></div>
                  {/* Dot (center of the line) */}
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
                  {/* Connector Line to the Left, originating from the dot */}
                  <div
                    className="absolute h-1 bg-indigo-600 z-10"
                    style={{
                      width: "calc(50% + 2rem)",
                      right: "50%",
                    }}
                  ></div>
                </div>
                <div className="col-span-4"></div>
              </>
            ) : (
              <>
                <div className="col-span-4"></div>
                {/* Line & Dot & Connector */}
                <div className="relative col-span-1 flex justify-center items-center">
                  <div className="h-full w-1 bg-indigo-600 absolute left-1/2 -translate-x-1/2"></div>
                  {/* Dot (center of the line) */}
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full z-20"></div>
                  {/* Connector Line to the Right, originating from the dot */}
                  <div
                    className="absolute h-1 bg-indigo-600 z-10"
                    style={{
                      width: "calc(50% + 2rem)",
                      left: "50%",
                    }}
                  ></div>
                </div>
                <div className="col-span-4 p-4 rounded-xl shadow-md bg-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.place}</p>
                  <span className="text-indigo-600 font-bold">{item.year}</span>
                  <p className="mt-2 text-gray-700">{item.details}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
