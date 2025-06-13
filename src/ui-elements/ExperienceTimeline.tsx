import experiences from "../experiences.json";

const ExperienceTimeline = () => {
  return (
    <div
      id="glassmorphism"
      className="w-full max-w-5xl flex flex-col items-center p-8 mt-8"
    >
      <h2 className="text-3xl text-white mb-10 tracking-tight drop-shadow-lg italic">
        Experience Timeline
      </h2>

      <div className="relative pl-14 before:content-[''] before:absolute before:top-0 before:left-2 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-blue-400/70 before:to-blue-900/10 before:rounded-full">
        {[...experiences].slice().map((exp, idx) => (
          <div key={exp.key || idx} className="mb-14 last:mb-0 relative group">
            <div className="absolute -left-3 top-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-700 border-4 border-white/40 rounded-full shadow-xl z-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-white/10 backdrop-blur-[6px] rounded-2xl shadow-2xl p-8 border border-white/10 hover:shadow-blue-400/20 transition-shadow duration-300 ml-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
