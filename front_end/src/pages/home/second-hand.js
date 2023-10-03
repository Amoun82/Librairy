import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../../components/buttons/button-link";

const SecondHand = ({ title, subtitle, buttonText, link, buttonVariant }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (window.innerWidth < 992) {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section
      onClick={clickHandler}
      className="h-[60vh] md:h-[70vh] max-w-screen-lg mx-4 md:mx-auto mb-12 flex flex-col md:flex-row"
    >
      {/* Mobile: Image Background + Text */}
      <div className="bg-second-hand-img bg-cover bg-no-repeat bg-center w-full md:w-1/2 h-full flex items-end">
        <div className="md:hidden py-10 px-5 text-center w-full">
          <h2 className="text-3xl xs:text-5xl mb-2 text-primary font-sans">
            {title}
          </h2>
          <p className="text-sm text-primary">{subtitle}</p>
        </div>
      </div>

      {/* Desktop: Text séparé de l'image */}
      <div className="hidden md:flex flex-col w-1/2 items-center justify-center text-center p-10">
        <h2 className="text-5xl mb-2 font-sans">{title}</h2>
        <p className="text-sm">{subtitle}</p>
        <ButtonLink link={link} variant={buttonVariant}>
          {buttonText}
        </ButtonLink>
      </div>
    </section>
  );
};

export default SecondHand;
