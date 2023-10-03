import React from "react";
import { IconContext } from "react-icons";
import { BsFillSendFill } from "react-icons/bs";

const NewsletterRegistration = () => {
  // TODO : mettre en place le formulaire d'inscription à la newsletter

  return (
    <div className="w-full md:w-1/4 mb-7 md:mb-0">
      <p className="mb-2 font-bold">Inscription à la newsletter</p>
      <div className="relative w-11/12 sm:w-1/2 md:w-full h-10 mx-auto">
        <input
          type="email"
          placeholder="Votre email..."
          className="border border rounded p-2 w-full pl-3 pr-8 h-10 focus:outline-none focus:ring focus:ring-accent-2"
        />
        <IconContext.Provider
          value={{
            size: "20px",
            className: "text-primary",
          }}
        >
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent-3 hover:bg-accent-2 p-2 rounded-tr-full rounded-br-full h-full w-12"
            onClick={() => {}}
          >
            <BsFillSendFill />
          </button>
        </IconContext.Provider>
      </div>
      <p className="mb-2 text-xs text-gray-600 mt-2">
        Recevez nos dernières nouvelles directement dans votre boîte de
        réception.
      </p>
    </div>
  );
};

export default NewsletterRegistration;
