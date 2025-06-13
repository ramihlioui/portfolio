// tailwind.config.js
module.exports = {
  corePlugins: {
    // Ensure these aren't disabled
    transform: true,
    translate: true,
  },
  // ... other config
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
};
