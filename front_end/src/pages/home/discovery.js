import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../../components/buttons/button-link";

const Discovery = ({ title, subtitle, buttonText, link, buttonVariant, buttonClassName }) => {
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
      className="bg-discovery-img bg-cover bg-no-repeat bg-center h-[60vh] md:h-[70vh] max-w-screen-lg mx-4 md:mx-auto mb-12 flex flex-col justify-end items-center text-center cursor-pointer md:cursor-default"
    >
      <div className="py-10 px-5">
        <h2 className="text-3xl xs:text-5xl mb-2 text-primary font-sans cursor-text">
          {title}
        </h2>
        <p className="text-sm md:text-lg text-primary cursor-text">{subtitle}</p>
        <ButtonLink link={link} variant={buttonVariant} className={buttonClassName}>
          {buttonText}
        </ButtonLink>
      </div>
    </section>
  );
};

export default Discovery;
