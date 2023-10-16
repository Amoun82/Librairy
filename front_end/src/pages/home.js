import React, { useEffect, useRef } from "react";
import { useCookies } from 'react-cookie';


const Home = () => {
  // TODO: Intégration de tout les liens
  const imageScrollPortrait = useRef(null);

  const [cookies, setCookies, removeCookies] = useCookies();

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
        Explication
        {console.log(cookies)}
    </main>
  );
};

export default Home;
