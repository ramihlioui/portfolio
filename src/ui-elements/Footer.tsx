const Footer = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col p-4 mt-5">
      <h2 className="text-white text-lg mb-2 font-semibold">Contact Me</h2>
      <ul className="text-white text-base space-y-2">
        <li>
          Email:{" "}
          <a href="mailto:rami.hlioui@email.com" className="underline">
            rami.hlioui@email.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/ramihlioui"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ramihlioui
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/ramihlioui"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ramihlioui
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
