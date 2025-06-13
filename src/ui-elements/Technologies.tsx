import { useState } from "react";

import RotatingText from "@/y/RotatingText/RotatingText";
import FlowingMenu from "@/Components/FlowingMenu/FlowingMenu";
import techs from "../tech.json";
const images = import.meta.glob("./../assets/techno/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Technologies = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col  p-4 mt-5">
      <h1 className=" flex flex-row text-lg text-white mb-4 text-left items-center justify-start gap-2  italic">
        I can work with
        <RotatingText
          texts={["Java", "Javascript", "Typescript", "SQL"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-emerald-300 to-indigo-600 text-black font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />{" "}
      </h1>
      <div style={{ height: "300px", position: "relative" }}>
        <FlowingMenu items={techs} />
      </div>
    </div>
  );
};

export default Technologies;
