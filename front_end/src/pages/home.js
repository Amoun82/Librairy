import React, { useEffect, useRef } from "react";
import Banner from "./home/banner";
import SecondHand from "./home/second-hand";
import Discovery from "./home/discovery";
import FeaturedCategories from "./home/categories";
import Newsletter from "./home/newsletter";
import About from "./home/about";
import NewsArticles from "./home/news";

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
      <Banner
        title="Votre garde robe en direct"
        subtitle="Découvrez une nouvelle manière de faire du shopping en assistant aux sessions de vente en ligne."
        imageSrc="../assets/img/live-portrait.png"
        imageAlt="Personne en direct sur un réseau social"
        imageRef={imageScrollPortrait}
        buttonText="A quand le prochain live ?"
        buttonVariant="secondary"
        link="/"
      />

      {
        //*******************************! Section Nouveautés *******************************//
      }
      <NewsArticles title="Nouveautés" />

      {
        //*******************************! Section Seconde Main *******************************//
      }
      <SecondHand
        title="Chic & Responsable"
        subtitle="Redonnez vie à des pièces uniques qui fusionnent style et durabilité."
        buttonText="Explorez la collection"
        link="/"
      />

      {
        //*******************************! Section Newsletters *******************************//
      }
      <FeaturedCategories
        title="Complète ton look"
        subtitle="Découvre les essentiels pour parfaire ton style. La finition parfaite pour chaque tenue."
        buttonVariant1="third"
        buttonText1="Maroquinerie 👜"
        link1="/"
        buttonVariant2="third"
        buttonText2="Accessoires 💍"
        link2="/"
        buttonVariant3="third"
        buttonText3="Beauté 💄"
        link3="/"
      />

      {
        //*******************************! Section Découvertes *******************************//
      }
      <Discovery
        title="Découvertes insoupçonnés"
        subtitle="Plongez dans un trésor de découvertes éclectiques."
        buttonText="Plongez dans nos sélections"
        link="/"
        buttonClassName="hidden md:inline-block"
      />

      {
        //*******************************! Section Newletters *******************************//
      }
      <Newsletter />

      {
        //*******************************! Section About *******************************//
      }
      <About title="Angelfrip" buttonText="En savoir plus sur moi" link="/" />
    </main>
  );
};

export default Home;
