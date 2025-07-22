import "./App.css";
import AboutMe from "./ui-elements/About-me";
import AppHeader from "./ui-elements/AppHeader";
import Technologies from "./ui-elements/Technologies";
import ExperienceTimeline from "./ui-elements/ExperienceTimeline";
import DarkVeil from "./Backgrounds/DarkVeil/DarkVeil";
import Footer from "./ui-elements/Footer";
import Particles from "./Backgrounds/Particles/Particles";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-between items-center relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-150 pointer-events-none z-0">
        <DarkVeil warpAmount={1} speed={0.5} />
      </div>
      <div className="w-full max-w-5xl flex flex-col items-center mt-5 z-10">
        <AppHeader />
        <AboutMe />
        <Technologies />
        <ExperienceTimeline />
      </div>
      <div
        id="footer"
        className="w-full h-150 flex justify-center mt-10 relative z-10"
      >
        <div className="absolute w-full h-full inset-0 pointer-events-none">
          {" "}
          <Particles
            particleCount={1000}
            particleSpread={5}
            speed={0.2}
            particleBaseSize={100}
            disableRotation
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
