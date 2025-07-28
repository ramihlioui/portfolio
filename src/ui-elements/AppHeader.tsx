import Galaxy from "@/Backgrounds/Galaxy/Galaxy";
import { Card } from "@/Components/ui/card";
import { TypeAnimation } from "react-type-animation";

export default function AppHeader() {
  return (
    <Card
      className="w-full p-3 pl-6 pr-6 m-4 flex flex-row justify-between items-center rounded-b-full rounded text-center text-white italic"
      id="glassmorphism"
    >
      <TypeAnimation
        sequence={["<rami.hlioui/>", 1000, "<Rami.dev/>", 60000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1.25em", display: "inline-block" }}
      />

      <div
        id="glassmorphism"
        onClick={() => {
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="relative flex items-center justify-center px-6 py-2 rounded cursor-pointer overflow-hidden"
        style={{ minWidth: "140px", minHeight: "48px" }}
      >
        <span className="relative z-10 text-white">Contact me</span>
        <div className="absolute inset-0 z-0 pointer-events-none flex">
          <Galaxy />
        </div>
      </div>
    </Card>
  );
}
