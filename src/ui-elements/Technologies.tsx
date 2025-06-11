import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const images = import.meta.glob("./../assets/techno/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Technologies = () => {
  const [open, setOpen] = useState(false);
  const imageArr = Object.values(images).map((image, index) => {
    const img = image as { default: string };
    return (
      <img
        key={index}
        src={img.default}
        alt={`Image ${index + 1}`}
        className="galleryImg object-contain w-24 h-24 m-2"
        style={{ aspectRatio: "1 / 1" }}
      />
    );
  });

  const firstFive = imageArr.slice(0, 5);
  const rest = imageArr.slice(5);

  return (
    <div
      id="glassmorphism"
      className="w-full max-w-5xl flex flex-col items-center p-4 mt-5"
    >
      <h2 className="text-3xl text-white mb-10 tracking-tight drop-shadow-lg italic">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center">{firstFive}</div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent className="flex flex-wrap justify-center">
          {rest}
        </CollapsibleContent>
        <CollapsibleTrigger className="rounded-full mb-4">
          {open ? (
            <FontAwesomeIcon icon={faCircleArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faCircleArrowDown} />
          )}
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
};

export default Technologies;
