import { Card } from "@/Components/ui/card";
import boy from "./../assets/boy.png";
import SplitText from "@/TextAnimations/SplitText/SplitText";

const AboutMe = () => {
  return (
    <Card className="bg-transparent border-0" id="glassmorphism">
      <div className="flex flex-row items-center mx-auto px-4 py-8 gap-6">
        <div className="flex-2 w-2/3 pl-4">
          <SplitText
            text="Hello! I'm Rami Hlioui"
            className="text-6xl font-bold mb-4 text-white text-left"
            delay={10}
            duration={2}
            ease="elastic.out(1, 0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="100px"
            textAlign="left"
          />

          <p className="text-lg mb-4 text-white text-left">
            a software engineer with a focus on creating innovative solutions. I
            have a strong background in web development, particularly
            <span className="italic"> backend </span>
            <br />
            and I'm always eager to learn new technologies and improve my
            skills.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="src/cv/Rami_Hlioui_Resume.pdf"
              download
              id="glassmorphism"
              className="p-3 text-white border border-white/10 rounded transition-colors"
            >
              Download Resume (EN)
            </a>
            <a
              href="src/cv/Rami_Hlioui_CV.pdf"
              download
              id="glassmorphism"
              className="p-3 text-white border border-white/10 rounded transition-colors"
            >
              Télécharger CV (FR)
            </a>
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
