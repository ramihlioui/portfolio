import experiences from "../experiences.json";

const ExperienceTimeline = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center p-4 mt-5 text-left">
      <div className="relative border-l-2 border-blue-300 pl-8">
        {[...experiences].map((exp, idx) => (
          <div key={exp.key || idx} className="mb-10 last:mb-0 relative">
            <div className="">
              <div className="text-lg text-white ">{exp.title}</div>
              <div className="text-sm text-blue-700  italic">{exp.date}</div>
              <div className="text-white">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
