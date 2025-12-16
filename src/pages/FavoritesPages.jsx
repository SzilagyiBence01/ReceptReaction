import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

/*
    A kedvencek fülön megjelenő rész
*/
export default function FavoritesPages() {
  // ebben a state változóban tároljuk a kedvencekhez adott recepteket
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // useEffect hook az oldal betöltésekor
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];  //
    setFavoriteRecipes(storedFavorites);                                          // localStorage-ból kinyerjük a kedvenceket és beis állítjuk ezt a state-be
  }, []);

  // vissza adjuk a recepteket
  return (
    <div className="recipe-list">
      {favoriteRecipes.length === 0 ? (
        <p>Nincsenek kedvenc receptek.</p> //ha nem lennének recepjeink felvéve
      ) : (
        favoriteRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))                                 // minden recepthez létrehzzuk a receptkártyánkat a megjelnítéshez 
      )}
    </div>
  );
}
