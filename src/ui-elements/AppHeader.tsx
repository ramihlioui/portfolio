
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { TypeAnimation } from "react-type-animation";

export default function AppHeader() {
  return (
    <Card
      className=" w-full max-w-4xl p-3 pl-6 pr-6 m-4 flex flex-row justify-between rounded-b-full rounded text-center text-white italic "
      id="glassmorphism"
    >
      <TypeAnimation
        sequence={["<rami.hlioui/>", 1000, "<Rami.dev/>", 60000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1.25em", display: "inline-block" }}
      />

      <Button className="slow-pulse">
        contact me{" "}
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
      </Button>
    </Card>
  );
}
