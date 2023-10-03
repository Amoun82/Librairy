import React from "react";
import { IconContext } from "react-icons";
import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  //TODO: intégrer le système de newsletter
  return (
    <div className="max-w-screen-lg mx-4 md:mx-auto mb-12 text-center py-10 bg-neutral-100">
      <h2 className="text-2xl mb-2">
        Mode, Offres, Inspirations : Soyez au Rendez-vous 😍
      </h2>
      <p className="mb-4">
        Inscrivez-vous pour découvrir les nouveautés et offres exclusives avant
        tout le monde.
      </p>
      <div className="relative h-10 mx-auto max-w-[400px] px-3">
        <input
          type="email"
          placeholder="Votre email..."
          className="border rounded p-2 w-full pl-3 pr-12 pr-8 h-10 focus:outline-none focus:ring focus:ring-accent-2"
        />
        <IconContext.Provider
          value={{
            size: "20px",
            className: "bg-primary text-secondary-3 hover:text-secondary-2",
          }}
        >
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-tr-full rounded-br-full h-full w-12"
            onClick={() => {}}
          >
            <BsFillSendFill />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Newsletter;
