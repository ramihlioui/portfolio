import RippleGrid from "@/Backgrounds/RippleGrid/RippleGrid";

import { Card } from "@/Components/ui/card";
import { TypeAnimation } from "react-type-animation";

export default function AppHeader() {
  return (
    <Card
      className=" w-full p-3 pl-6 pr-6 m-4 flex flex-row justify-between rounded-b-full rounded text-center text-white italic "
      id="glassmorphism"
    >
      <TypeAnimation
        sequence={["<rami.hlioui/>", 1000, "<Rami.dev/>", 60000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1.25em", display: "inline-block" }}
      />

      <div className="relative flex items-center gap-2">
        <button
          onClick={() => {
            document
              .getElementById("footer")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative rounded overflow-hidden bg-transparent border-none focus:outline-none"
        >
          <span className="relative z-10 text-white">Contact me</span>
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full ">
            <RippleGrid vignetteStrength={5} gridSize={5} gridThickness={20} />
          </div>
        </button>
      </div>
    </Card>
  );
}
