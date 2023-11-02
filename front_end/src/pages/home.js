import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from 'react-cookie';
import { URL } from '../utils/constant/backURL';

const Home = () => {
  const imageScrollPortrait = useRef(null);

  const [listBooks , setListBooks] = useState([]) ;

  const [cookies] = useCookies();

  const [integer, setInteger] = useState() ;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const books = async () => {
    await axios.get(URL.books + '?page=1'
      ).then((res) => {
      console.log(res.data['hydra:member']);
      setListBooks(
        res.data['hydra:member']
      )
    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
      }
    })
  }


  // Animation au scroll de la banner
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (imageScrollPortrait.current) {
        imageScrollPortrait.current.style.transform = `translateY(${offset * 0.3
          }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('test axios');
    // ?page=1
    books() ;
  }, [])

  return (
    <main>
      {
        //*******************************! Section Explication *******************************//
      }
      <h1 className="text-center">Bibliothéque</h1>
      <div className="flex flex-col mx-20 my-4 justify-center">
        <h2>
          Explication breve du site
        </h2>
        <p>
          Ma bibliothéque en ligne est faite pour savoir les livres que vous possedez
        </p>
        <p>
          inscrivez vous et connectez vous,
        </p>
        <p>
          Rechercher un livre dans la liste et ajouter le à votre Bibliothéque
        </p>
      </div>
      {console.log('document', document.cookie.islogged)}
      {console.log('cookies react', cookies.islogged)}

      <div className="flex flex-col mx-20 justify-center">
        Liste Livres
        {console.log('function random',getRndInteger(4,10))}
        { listBooks && (
          <div>
            {listBooks.map((book) => {console.log(book)


              return <div>{book.title}</div>

            })}
            {console.log('listBooks',listBooks)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
