import React from "react";
import { Link } from "react-router-dom";
import FavoritesButton from "./FavoritesButton";
import TagFillter from "./TagFillter";


/*
    Egy darab recept kártya megjelítése
*/
export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      {/* Link a részletes nézethez, URL-ben a név kódolva */}
      <Link to={`/recipe/${encodeURIComponent(recipe.name)}`}>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />    {/**/}
        <h3>{recipe.name}</h3>                                                   {/* recept képe és neve */}
      </Link>

      {/* tagek megejelenítése */} 
      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <TagFillter key={index} tag={tag} />
        ))}
      </div>

      {/* kedvecek gomb */} 
      <FavoritesButton recipe={recipe} />
    </div>
  );
}
