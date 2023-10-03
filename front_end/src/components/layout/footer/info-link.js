import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="w-full md:w-1/4 mb-7 md:mb-0">
      <h2 className="text-xl mb-2">Informations</h2>
      <Link to="#" className="block mb-2">
        Politique de confidentialité
      </Link>
      <Link to="#" className="block mb-2">
        Mentions légales
      </Link>
      <Link to="#" className="block">
        CGV
      </Link>
    </div>
  );
};

export default Info;
