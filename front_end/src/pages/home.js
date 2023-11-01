import React, { useEffect, useRef } from "react";
import { useCookies } from 'react-cookie';


const Home = () => {
  // TODO: Intégration de tout les liens
  const imageScrollPortrait = useRef(null);

  const [cookies] = useCookies();

  // Animation au scroll de la banner
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (imageScrollPortrait.current) {
        imageScrollPortrait.current.style.transform = `translateY(${
          offset * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {
        //*******************************! Section Explication *******************************//
      }
        <h1 className="text-center">Bibliothéque</h1>
        <div className="flex justify-center">
          Explication breve du site
          Rechercher un livre

        </div>
        {console.log('document',document.cookie.islogged)}
        {console.log('cookies react',cookies.islogged)}
    </main>
  );
};

export default Home;
