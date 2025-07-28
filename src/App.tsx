import "./App.css";
import AboutMe from "./ui-elements/About-me";
import AppHeader from "./ui-elements/AppHeader";
import Technologies from "./ui-elements/Technologies";
import ExperienceTimeline from "./ui-elements/ExperienceTimeline";
import Footer from "./ui-elements/Footer";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-between items-center relative overflow-x-hidden scroll-smooth">
      <div className="w-full max-w-5xl flex flex-col items-center mt-5 z-10">
        <AppHeader />
        <AboutMe />
        <Technologies />
        <ExperienceTimeline />
      </div>
      <div
        id="footer"
        className="w-full h-150 flex justify-center mt-10 mb-10 relative z-10"
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
