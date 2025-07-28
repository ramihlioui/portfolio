import github from "../assets/contact/github.png";
import linkedin from "../assets/contact/linkedin.png";
import gmail from "../assets/contact/gmail.png";
import whatsapp from "../assets/contact/whatsapp.png";
import french_cv from "../cv/Rami_Hlioui_CV.pdf";
import english_cv from "../cv/Rami_Hlioui_Resume.pdf";
import Threads from "@/Backgrounds/Threads/Threads";

const Footer = () => {
  return (
    <div
      id="glassmorphism2"
      className="w-full  max-w-5xl flex  flex-col justify-evenly mt-10"
    >
      <div className="absolute w-full h-full inset-0 pointer-events-none">
        {" "}
        <Threads />
      </div>
      <div className="flex flex-col  gap-4 mt-2">
        <span className="text-white mb-4 italic">View my resumes :</span>
        <div>
          <a
            href={english_cv}
            download
            id="glassmorphism"
            className="p-3 text-white border border-white/10 rounded transition-colors"
          >
            Download Resume (EN)
          </a>
          <a
            href={french_cv}
            download
            id="glassmorphism"
            className="p-3 text-white border border-white/10 rounded transition-colors"
          >
            Télécharger CV (FR)
          </a>
        </div>
      </div>

      <div>
        <span className=" w-full h-100 bg-white"></span>
        <span className="text-white">Or</span>
        <span className=" w-full h-100 bg-white"></span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-white mb-2 italic">Contact me:</span>
        <div className="flex gap-4">
          <a
            href="mailto:ramihlioui2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 transition relative group"
          >
            <img src={gmail} alt="Gmail" className="w-8 h-8" />
            <span className="absolute inset-0 rounded-md pointer-events-none group-hover:shadow-[0_0_16px_4px_rgba(220,38,38,0.6)]"></span>
          </a>
          <a
            href="https://linkedin.com/in/rami-hlioui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 transition relative group"
          >
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            <span className="absolute inset-0 rounded-md pointer-events-none group-hover:shadow-[0_0_16px_4px_rgba(37,99,235,0.6)]"></span>
          </a>
          <a
            href="https://github.com/ramihlioui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 transition relative group"
          >
            <img src={github} alt="GitHub" className="w-8 h-8" />
            <span className="absolute inset-0 rounded-md pointer-events-none group-hover:shadow-[0_0_16px_4px_rgba(139,92,246,0.6)]"></span>
          </a>
          <a
            href="https://wa.me/%2B229475673"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 transition relative group"
          >
            <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
            <span className="absolute inset-0 rounded-md pointer-events-none group-hover:shadow-[0_0_16px_4px_rgba(34,197,94,0.6)]"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
