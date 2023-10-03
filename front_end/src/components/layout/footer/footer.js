import React from "react";
import Logo from "../../logo/logo";
import Help from "./help-link";
import Info from "./info-link";
import NewsletterRegistration from "./newsletter-registration";
import RS from "./rs-link";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 md:pt-12 md:pb-8 md:px-8 border-t ">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap mx-auto text-center md:text">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-7 md:mb-0">
            <Logo mobileWidth="w-24" desktopWidth="w-32" />
          </div>

          {/* Besoin d'aide ? */}
          <Help />

          {/* Informations */}
          <Info />

          {/* Inscription à la newsletter */}
          <NewsletterRegistration />
        </div>
        {/* Icons */}.
        <RS />
        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
