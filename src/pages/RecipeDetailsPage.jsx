import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import FavoritesButton from "../components/FavoritesButton";
import TagFillter from "../components/TagFillter";

export default function RecipeDetailsPage() {
  const { name } = useParams(); // az URL-ből vesszük a recept nevét
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // JSON-ból beolvasott receptek
    const jsonRecipes = recipesData.recipesData;

    // LocalStorage-ból elmentett receptek
    const localRecipes = JSON.parse(localStorage.getItem("myRecipes")) || [];

    // Egyesítjük a kettőt
    const allRecipes = [...jsonRecipes, ...localRecipes];

    // Kikeressük a receptet
    const foundRecipe = allRecipes.find(r => r.name === name);

    setRecipe(foundRecipe);
  }, [name]);

  // abban az esetben ha nem létezne a recept, elméletileg nem szabad megjelenjen soha 
  if (!recipe) {
    return <p>Recept nem található.</p>;
  }

  // recept leírása 
  return (
    <div className="text-formalization">
      {/* recept neve */}
      <h1>{recipe.name}</h1>

      {/* kép az ételről */}
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px" }}
      />

      {/* kedvencek gomb */}
      <FavoritesButton recipe={recipe} />

      {/* hozzávalók listázása */}
      <h3>Hozzávalók:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* étel-hez rendelt tag-ek */}
      <h3>Tagek:</h3>
      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <TagFillter key={index} tag={tag} />
        ))}
      </div>

      {/* elékszítés leírása */}
      <h3>Leírás:</h3>
      <p style={{ whiteSpace: "pre-line" }}>{recipe.description}</p>
    </div>
  );
}
