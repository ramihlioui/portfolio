import "./App.css";
import AboutMe from "./ui-elements/About-me";
import AppHeader from "./ui-elements/AppHeader";
import Technologies from "./ui-elements/Technologies";
import ExperienceTimeline from "./ui-elements/ExperienceTimeline";
import DarkVeil from "./Backgrounds/DarkVeil/DarkVeil";
import Footer from "./ui-elements/Footer";

function App() {
  return (
    <div className="relative flex justify-center items-start overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DarkVeil warpAmount={2} speed={1} />
      </div>
      <div className="w-screen h-screen flex justify-center z-10 relative">
        <div className="w-full max-w-5xl flex flex-col items-center mt-5">
          <AppHeader />
          <AboutMe />
          <Technologies />
          <ExperienceTimeline />
        </div>
      </div>
      <div className="absolute bottom-full w-full h-full mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
