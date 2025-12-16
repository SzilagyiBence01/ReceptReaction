import React, { useState } from "react";
import RecipeForm from "../components/RecipeForm";

/*
  Új receptek felvételéhez használ oldal
*/
export default function NewRecipePage() {
  const [recipes, setRecipes] = useState([]);

  // Recept hozzásadás
  const handleAddRecipe = (newRecipe) => {
    setRecipes(prev => [...prev, newRecipe]);
  };

  return (
    <div>
      <RecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
}
