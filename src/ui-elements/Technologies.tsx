import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip"; // adjust import if needed

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
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex flex-wrap justify-between gap-4">
          {firstFive}
          {!open && rest.length > 0 && (
            <Tooltip content="Show more">
              <CollapsibleTrigger
                className="rounded-full text-white px-4 py-2 cursor-pointer"
                aria-label="Show more"
              >
                +{rest.length}
              </CollapsibleTrigger>
            </Tooltip>
          )}
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            {rest}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Technologies;
