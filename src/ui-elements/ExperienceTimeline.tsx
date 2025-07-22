import experiences from "../experiences.json";

const ExperienceTimeline = () => {
  return (
    <section
      id="glassmorphism"
      className="flex justify-center pt-20 pb-20 px-20 w-4xl"
    >
      <div className="">
        <ul>
          {experiences.map((exp, idx) => (
            <li
              key={exp.key || idx}
              className="relative flex items-baseline gap-6 pb-5"
            >
              <div
                className={`before:absolute before:left-[5.5px] before:w-[1px] before:bg-gray-400 ${
                  idx === experiences.length - 1 ? "" : "before:h-full"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                  <div className="text-xl font-semibold text-white drop-shadow">
                    {exp.title}
                  </div>
                  <div className="text-xs text-blue-200/80 italic mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                    {exp.handle}
                  </div>
                </div>
                <div className="text-white/90 text-left leading-relaxed">
                  {exp.description}
                </div>
                {exp.tags && Array.isArray(exp.tags) && exp.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-200 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
