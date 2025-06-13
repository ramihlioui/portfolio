import React, { useEffect } from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeContentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeContentRef.current) return;

    // Calculate total width of all items
    const contentWidth = marqueeContentRef.current.scrollWidth;
    const duration = contentWidth / 300; // Adjust this value to change speed

    // Create animation
    const animation = gsap.to(marqueeContentRef.current, {
      x: -contentWidth / 2,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animation.kill(); // Clean up animation on unmount
    };
  }, [items]);

  const marqueeContent = React.useMemo(() => {
    return (
      <div className="flex items-center h-full">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] px-[2vw] whitespace-nowrap">
              {item.text}
            </span>
            <div
              className="w-[10vw] h-[10vh] min-w-[100px] min-h-[80px] mx-[2vw] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }, [items]);

  return (
    <div className="w-full h-full overflow-hidden relative bg-transparent">
      {/* Animated marquee - always visible */}
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div
          ref={marqueeContentRef}
          className="flex items-center h-full will-change-transform"
          style={{ width: "fit-content" }}
        >
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
