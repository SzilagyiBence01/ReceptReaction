import React, { useState, useEffect } from "react";

export default function FavoritesButton({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some(r => r.name === recipe.name));
  }, [recipe]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter(r => r.name !== recipe.name);
    } else {
      updatedFavorites = [...storedFavorites, recipe];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite} className={isFavorite ? "fav active" : "fav"}>
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
