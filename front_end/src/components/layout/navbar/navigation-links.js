import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navlink from "./navlink";

const NavigationLinks = ({ isOpen }) => {
  const [isDotVisible, setIsDotVisible] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  //! ********************************** useEffect **********************************
  // Point clignotant en mode REC - only desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDotVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Disparition + Apparition de la sous nav - only desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsScrollingDown(currentScrollPosition > lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  // Liste des liens
  const linksData = [
    {
      imageSrc: "../assets/img/pap.jpg",
      altText: "Femme qui sort d'une séance de shopping",
      text: "Prêt à porter",
      to: "#",
    },
    {
      imageSrc: "../assets/img/maroquinerie.jpg",
      altText: "",
      text: "Maroquinerie",
      to: "#",
    },
    {
      imageSrc: "../assets/img/accessoires.jpg",
      altText: "",
      text: "Accessoires",
      to: "#",
    },
    {
      imageSrc: "../assets/img/beaute.jpg",
      altText: "",
      text: "Beauté",
      to: "#",
    },
    {
      imageSrc: "../assets/img/decouvertes.jpg",
      altText: "",
      text: "Découvertes",
      to: "#",
    },
  ];

  return (
    <div
      className={`${
        isScrollingDown ? "hidden" : "block"
      } pt-4 md:p-1 fixed h-full w-full border-b bg-primary ${
        isOpen
          ? "top-0 mt-16 border-t transform translate-x-0 z-10"
          : "md:static md:transform-none -translate-x-full"
      } transition-transform duration-700 ease-in-out`}
    >
      <ul className="pb-16 h-full w-full flex flex-col md:flex-row md:justify-between md:pb-0 md:max-w-screen-md md:mx-auto md:space-x-4 md:text-center">
        {linksData.map((link) => (
          <Navlink key={link.text} {...link} isOpen={isOpen} />
        ))}

        <li
          className={`md:h-auto transition-opacity duration-500 py-3 ${
            isOpen ? "opacity-100 mx-5" : "opacity-0 md:opacity-100"
          }`}
        >
          <Link
            to="#"
            className="h-16 mt-6 border-b border-t flex text-xl md:p-0 md:h-auto md:mt-0 md:border-none"
          >
            <div className="flex flex-grow items-center justify-center">
              <div
                className={`${
                  isDotVisible ? "opacity-100" : "opacity-0"
                } bg-red-500 w-3 h-3 md:h-2 rounded-full transition-opacity duration-500`}
              ></div>
              <p className="md:w-full block text-xl font-bold ml-3">
                Live
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
