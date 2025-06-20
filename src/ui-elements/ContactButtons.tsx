import React from "react";
import contactData from "../contact.json";

// Import local images for contacts
import gmailIcon from "../assets/contact/Gmail_Logo_Black_512px.png";
import linkedinIcon from "../assets/contact/Linkedin_circle_black-512.png";
import githubIcon from "../assets/contact/Octicons-mark-github.svg";
import whatsappIcon from "../assets/contact/whatsapp-glyph-black.svg";

type Contact = {
  image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
  url: string;
};

const imageMap: Record<string, string> = {
  Gmail: gmailIcon,
  LinkedIn: linkedinIcon,
  GitHub: githubIcon,
  WhatsApp: whatsappIcon,
};

const ContactButtons: React.FC = () => (
  <div className="flex gap-3 flex-wrap mt-6 justify-center">
    {(contactData as Contact[]).map((contact, idx) => (
      <div
        key={idx}
        className="p-[2.5px] rounded-lg"
        style={{
          background: "transparent",
        }}
      >
        <a
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border-2 border-transparent bg-transparent rounded-lg font-medium text-zinc-100 text-sm shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-150"
        >
          <img
            src={imageMap[contact.title] || contact.image}
            alt={contact.title}
            className="w-8 h-8 object-contain rounded p-0.5"
          />
          <span>{contact.handle}</span>
        </a>
      </div>
    ))}
  </div>
);

export default ContactButtons;

/* Add this to your global CSS (e.g., index.css or globals.css):
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
*/
