import { Card } from "@/components/ui/card";
import boy from "./../assets/boy.png";

const images = import.meta.glob("./../assets/contact/*.{png,jpg,jpeg,svg}", {
  eager: true,
});
const imageArr = Object.values(images);

const AboutMe = () => {
  return (
    <Card id="glassmorphism">
      <div className="flex flex-row items-center mx-auto px-4 py-8 gap-6">
        <div className="flex-2 w-2/3 pl-4">
          <h1 className="text-3xl font-bold mb-4 text-white text-left">
            Hello! I'm Rami Hlioui ✌
          </h1>
          <p className="text-lg mb-4 text-white text-left">
            a software engineer with a focus on creating innovative solutions. I
            have a strong background in web development, particularly as a
            &#123;
            <span className="italic"> backend dev </span>
            &#125;, and I'm always eager to learn new technologies and improve
            my skills.
          </p>
          <div className="flex flex-row items-center">
            {imageArr.map((image, index) => {
              const img = image as { default: string };
              // Define custom glow shadows for each logo on hover only
              let hoverShadow = "";
              if (index === 0) {
                // Gmail: red, yellow, green, blue
                hoverShadow =
                  "0 0 4px 2px #EA4335, 0 0 8px 4px #FBBC05, 0 0 16px 6px #34A853, 0 0 32px 8px #4285F4";
              } else if (index === 1) {
                // LinkedIn: blue
                hoverShadow = "0 0 16px 4px #0077B5, 0 0 32px 8px #0A66C2";
              } else if (index === 2) {
                // GitHub: purple/gray
                hoverShadow = "0 0 16px 4px #6e40c9, 0 0 32px 8px #6e40c9";
              } else if (index === 3) {
                // WhatsApp: green
                hoverShadow = "0 0 16px 4px #25D366, 0 0 32px 8px #075E54";
              }
              return (
                <div key={index} className="p-2 group">
                  <img
                    src={img.default}
                    alt={`Image ${index + 1}`}
                    className="object-contain w-11 h-11 m-2 rounded-full transition-shadow duration-300"
                    style={{
                      aspectRatio: "1 / 1",
                    }}
                    onMouseEnter={(e) => {
                      if (hoverShadow)
                        e.currentTarget.style.boxShadow = hoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "";
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 w-1/3 flex justify-center">
          <img
            src={boy}
            alt="Rami Hlioui"
            className="rounded-full w-48 h-48 mb-4"
          />
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
