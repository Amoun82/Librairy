import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ mobileWidth, desktopWidth }) => {
  // Utilisez pour changer la Class (style) de l'image
  const myClassName = `${mobileWidth} ${"md:" + desktopWidth} rounded-full mx-auto`;

  return (
    <Link to="/" className="">
      <img
        src="../assets/img/logo-provisoire-angelfrip.jpg"
        alt="Logo Angelfrip"
        className={myClassName}
      />
    </Link>
  );
};

export default Logo;
