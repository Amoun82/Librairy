import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";

const RS = () => {
  return (
    <IconContext.Provider
      value={{
        size: "35px",
        className: "hover:text-accent-2 cursor-pointer",
      }}
    >
      <div className="flex flex-row justify-center mx-auto space-x-8 mb-7">
        <a
          href="https://www.facebook.com/profile.php?id=100082231481369"
          className="block mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@dufourangelique"
          className="block mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTiktok />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default RS;
