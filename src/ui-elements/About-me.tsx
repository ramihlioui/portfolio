import { Card } from "@/components/ui/card";
import boy from "./../assets/boy.png";
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
        </div>
        <div className="flex-1 w-1/3 flex justify-center">
          <img
            src={boy}
            alt="Rami Hlioui"
            className="rounded-full w-32 h-32 mb-4"
          />
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
