import { github, linkedin, twitter } from "../assets";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {""}
        <span>&copy;</span> Rukundo aime
      </div>
      <div className="flex gap-4">
        <div
          onClick={() => window.open("https://github.com/Aime78", "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="github profile"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div
          onClick={() =>
            window.open("https://twitter.com/RukundoAime7", "_blank")
          }
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={twitter}
            alt="twitter profile"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rukundo-aim%C3%A9-9421071b7/",
              "_blank"
            )
          }
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
