import github from "../assets/contact/github.png";
import linkedin from "../assets/contact/linkedin.png";
import gmail from "../assets/contact/gmail.png";
import whatsapp from "../assets/contact/whatsapp.png";

const Footer = () => {
  return (
    <div
      id="glassmorphism2"
      className="w-full  max-w-5xl flex  flex-col justify-evenly mt-10"
    >
      <div className="flex flex-col items-start gap-4 mt-2">
        <span className="text-white mb-4 italic">View my resumes :</span>
        <div>
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

      <div>
        <span className=" w-full h-100 bg-white"></span>
        <span className="text-white">Or</span>
        <span className=" w-full h-100 bg-white"></span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-white mb-2 italic">Contact me:</span>
        <div className="flex gap-4">
          <a
            href="mailto:rami.hlioui@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 hover:bg-white/20 transition"
          >
            <img src={gmail} alt="Gmail" className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/ramihlioui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 hover:bg-white/20 transition"
          >
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/ramihlioui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 hover:bg-white/20 transition"
          >
            <img src={github} alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/10 rounded-md p-2 flex items-center justify-center w-16 h-12 hover:bg-white/20 transition"
          >
            <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
