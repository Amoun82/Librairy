import React from "react";

const Copyright = () => {
  return (
    <p className="w-full text-center text-sm">
      &copy; {new Date().getFullYear()} nom du site. Tous droits réservés.
    </p>
  );
};

export default Copyright;
