import "./App.css";
import AboutMe from "./ui-elements/About-me";
import AppHeader from "./ui-elements/AppHeader";
import Technologies from "./ui-elements/Technologies";
import ExperienceTimeline from "./ui-elements/ExperienceTimeline";
import Aurora from "./Backgrounds/Aurora/Aurora";

function App() {
  return (
    <div className="relative flex justify-center items-start overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Aurora
          className="w-full max-h-1/7"
          colorStops={["#3A29FF", "#7CFF67", "#3A29FF"]}
          blend={0.5}
          amplitude={0.5}
          speed={1}
        />
      </div>
      <div className="w-screen h-screen flex justify-center z-10 relative">
        <div className="w-full max-w-5xl flex flex-col items-center mt-5">
          <AppHeader />
          <AboutMe />
          <Technologies />
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}

export default App;
