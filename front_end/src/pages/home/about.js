import React from "react";
import ButtonLink from "../../components/buttons/button-link";

const About = ({ title, buttonText, link, buttonVariant }) => {
  return (
    <section className="max-w-screen-lg mx-4 md:mx-auto mb-12">
      <div className="text-center py-10 px-5 md:w-2/4 mx-auto">
        <h2 className="text-5xl mb-7 font-dancing">{title}</h2>
        <p className="mb-2 text-dancing">
          Chez Angelfrip, la passion d'une entrepreneuse française se conjugue à
          l'art de la mode durable. À travers des lives Facebook authentiques,
          je vous dévoilent une sélection minutieuse de pièces, accessibles,
          majoritairement de seconde main.
        </p>
        <p className="mb-3">
          Chaque article reflète une vision éthique du style : beauté dans la
          simplicité, élégance intemporelle et engagement pour une mode plus
          responsable.
        </p>
        <ButtonLink link={link} variant={buttonVariant}>
          {buttonText}
        </ButtonLink>
      </div>
    </section>
  );
};

export default About;
