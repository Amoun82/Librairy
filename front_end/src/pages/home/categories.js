import React from "react";
import ButtonLink from "../../components/buttons/button-link";

const FeaturedCategories  = ({
  title,
  subtitle,
  buttonText1,
  buttonText2,
  buttonText3,
  buttonVariant1,
  buttonVariant2,
  buttonVariant3,
  link1,
  link2,
  link3,
}) => {
  return (
    <section className="max-w-screen-lg mx-4 md:mx-auto mb-12 bg-neutral-100 py-10 text-center">
      <h2 className="mb-2">{title}</h2>
      <p className="mb-4">{subtitle}</p>
      <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row flex-wrap justify-between">
        <ButtonLink link={link1} variant={buttonVariant1} className="w-[220px] mx-auto font-normal hover:font-bold">
          {buttonText1}
        </ButtonLink>
        <ButtonLink link={link2} variant={buttonVariant2} className="w-[220px] mx-auto font-normal hover:font-bold">
          {buttonText2}
        </ButtonLink>
        <ButtonLink link={link3} variant={buttonVariant3} className="w-[220px] mx-auto font-normal hover:font-bold">
          {buttonText3}
        </ButtonLink>
      </div>
    </section>
  );
};

export default FeaturedCategories ;
