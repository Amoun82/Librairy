import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "../../utils/constant/backURL";
import Button from "../../components/buttons/button";
import Spinner from "../../components/spinner/spinner";

// Requete de récupération des articles
const NewsArticles = ({ title }) => {
  const fetchArticles = async () => {
    const response = await axios.get(
      // Récupère les 4 articles les plus récent
      `${URL.fetchArticle}?page=1&itemsPerPage=4&order%5Bcreated_at%5D=desc`
    );
    return response.data["hydra:member"];
  };

  const {
    data: articles,
    isLoading,
    isError,
    refetch,
  } = useQuery(["articles"], fetchArticles);

  return (
    <section className="max-w-screen-lg mb-12 mx-4 md:mx-auto md:px-0">
      <h2 className="text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {/* Cas chargement */}
        {isLoading && (
          <Spinner className="h-[400px] w-full col-span-2 md:col-span-4" />
        )}
        {/* Cas erreur */}
        {isError && (
          <div className="flex flex-col items-center justify-center w-full h-[400px] col-span-2 md:col-span-4">
            <p className="px-5 text-center">
              Désolé, nous ne pouvons pas afficher les produits pour le moment.
            </p>
            <Button onClick={() => refetch()}>Réessayer</Button>
          </div>
        )}
        {/* Affichage des articles */}
        {articles &&
          articles.map((article) => (
            <div key={article.id}>
              <div className="flex flex-col">
                <div className="relative w-full pb-[133.33%]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-bold mt-2">{article.title}</p>
                <span className="">{article.price}€</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default NewsArticles;
