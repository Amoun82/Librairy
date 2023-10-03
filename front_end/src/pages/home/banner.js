import React from "react";
import ButtonLink from "../../components/buttons/button-link";

const Banner = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageRef,
  buttonText,
  buttonVariant,
  link,
}) => {
  return (
    <section className="bg-home-banner bg-cover bg-no-repeat bg-blend-multiply bg-stone-400 md:bg-stone-600 h-[70vh] md:h-[74vh] mb-12 text-center px-3 overflow-hidden shadow-xl">
      <div className="h-full max-w-screen-lg relative mx-auto">
        <img
          ref={imageRef}
          src={imageSrc}
          alt={imageAlt}
          className="hidden md:block absolute rounded-t h-[85%] right-0 bottom-0 shadow-2xl"
        />
        <div className="flex flex-col items-center justify-center w-full md:w-3/4 md:p-32 h-full">
          <h1 className="text-4xl xs:text-5xl mb-5 text-primary font-bold">
            {title}
          </h1>
          <p className="text-sm xs:text-lg mb-4 text-primary xs:w-2/3 md:w-full">
            {subtitle}
          </p>
          <ButtonLink link={link} variant={buttonVariant}>
            {buttonText}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
