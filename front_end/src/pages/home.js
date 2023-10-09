import React, { useEffect, useRef } from "react";

const Home = () => {
  // TODO: Intégration de tout les liens
  const imageScrollPortrait = useRef(null);

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
        //*******************************! Section Bannière *******************************//
      }
      
      {
        //*******************************! Section Nouveautés *******************************//
      }
      

      {
        //*******************************! Section Seconde Main *******************************//
      }
      

      {
        //*******************************! Section Newsletters *******************************//
      }
      
      {
        //*******************************! Section Découvertes *******************************//
      }
      

      {
        //*******************************! Section Newletters *******************************//
      }

      {
        //*******************************! Section About *******************************//
      }

    </main>
  );
};

export default Home;
