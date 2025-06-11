import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./ui-elements/About-me";
import AppHeader from "./ui-elements/AppHeader";
import Technologies from "./ui-elements/Technologies";
import ExperienceTimeline from "./ui-elements/ExperienceTimeline";

type Shard = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speedX: number;
  speedY: number;
  z_index?: number;
};

function App() {
  const [shards, setShards] = useState<Shard[]>([]);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const generateShards = () => {
      const newShards = Array.from({ length: 18 }, (_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 50 + 120,
        rotation: Math.random() * 360,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        z_index: index * 10,
      }));
      setShards(newShards);
    };

    generateShards();

    const moveShards = () => {
      setShards((prevShards) =>
        prevShards.map((shard) => {
          let { x, y, speedX, speedY, size } = shard;
          let newX = x + speedX;
          let newY = y + speedY;

          if (newX < 0 || newX > window.innerWidth - size) {
            speedX = -speedX;
            newX = x + speedX;
          }
          if (newY < 0 || newY > window.innerHeight - size) {
            speedY = -speedY;
            newY = y + speedY;
          }

          return { ...shard, x: newX, y: newY, speedX, speedY };
        })
      );
    };

    const handleScroll = () => {
      const maxScroll = 700;
      const scrollY = window.scrollY;
      const newFade = Math.max(0, 1 - scrollY / maxScroll);
      setFade(newFade);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(moveShards, 16);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", generateShards);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-screen h-screen flex justify-center items-center relative"
      id="bgColour"
    >
      {fade > 0 &&
        shards.slice(0, Math.floor(shards.length / 2)).map((shard) => (
          <div
            key={shard.id}
            className="absolute border border-white/20 rounded-lg shadow-lg transition-all duration-300 hover:bg-transparent hover:backdrop-blur-none"
            style={{
              left: `calc(50vw - ${shard.size / 2}px + ${
                shard.x - window.innerWidth / 2
              }px)`,
              top: `calc(50vh - ${shard.size / 2}px + ${
                shard.y - window.innerHeight / 2
              }px)`,
              width: `${shard.size}px`,
              height: `${shard.size}px`,
              transform: `rotate(${shard.rotation}deg)`,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.07)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(6.2px)",
              zIndex: 0,
              opacity: fade,
              pointerEvents: fade === 0 ? "none" : undefined,
              transition: "opacity 0.3s",
            }}
          />
        ))}
      <div className="w-screen h-screen flex justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center mt-5">
          <AppHeader />
          <AboutMe />
          <ExperienceTimeline />

          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default App;
